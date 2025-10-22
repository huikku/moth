import re, sys, json, math
from typing import Dict, List, Tuple

SECTION_RE = re.compile(r'^\s*\[([A-Z][A-Z0-9_]*(?:\.[A-Z0-9_]+)*)\]\s*$')
KV_RE = re.compile(r'^\s*([a-z][a-z0-9_]*)\s*:\s*(.+?)\s*$')
COMMENT_RE = re.compile(r'^\s*#')

class MothDoc:
    def __init__(self, path:str):
        self.path = path
        self.sections: Dict[str, Dict[str, str]] = {}
        self.header: Dict[str, str] = {}
        self.lines: List[str] = []
        self.errors: List[str] = []
        self.warnings: List[str] = []

    def token_estimate(self) -> int:
        # very rough: 1 token ≈ 4 chars
        chars = sum(len(l) for l in self.lines)
        return max(1, math.ceil(chars/4))

def parse(path:str) -> MothDoc:
    doc = MothDoc(path)
    try:
        with open(path, 'r', encoding='utf-8') as f:
            doc.lines = f.read().splitlines()
    except Exception as e:
        doc.errors.append(f'IO error: {e}')
        return doc

    cur_section = None
    seen_header_content = True
    # header is any leading kv pairs before first section
    header_done = False

    for i, line in enumerate(doc.lines, start=1):
        if not line.strip():
            continue
        if COMMENT_RE.match(line):
            continue
        m_sect = SECTION_RE.match(line)
        if m_sect:
            cur_section = m_sect.group(1)
            if cur_section in doc.sections:
                doc.errors.append(f'{path}:{i}: duplicate section [{cur_section}]')
            else:
                doc.sections[cur_section] = {}
            header_done = True
            continue
        m_kv = KV_RE.match(line)
        if m_kv:
            k, v = m_kv.group(1), m_kv.group(2).strip()
            if cur_section is None and not header_done:
                if k in doc.header:
                    doc.errors.append(f'{path}:{i}: duplicate header key {k}')
                doc.header[k] = v
            else:
                if cur_section is None:
                    doc.errors.append(f'{path}:{i}: key/value outside any section')
                    continue
                sec = doc.sections[cur_section]
                if k in sec:
                    doc.errors.append(f'{path}:{i}: duplicate key "{k}" in section [{cur_section}]')
                sec[k] = v
            continue
        # non-empty, non-comment, non-section, non-kv
        doc.warnings.append(f'{path}:{i}: unrecognized line syntax')
    return doc

def validate_moth(doc: MothDoc) -> Tuple[bool, List[str], List[str]]:
    errors = list(doc.errors)
    warnings = list(doc.warnings)

    # keys must be snake_case in kv
    snake_re = re.compile(r'^[a-z][a-z0-9_]*$')
    for sec, kvs in doc.sections.items():
        for k in kvs.keys():
            if not snake_re.match(k):
                warnings.append(f'{doc.path}: key "{k}" in [{sec}] should be snake_case')
        # reserved patterns checks
        if sec.startswith('API.'):
            # must include METHOD:/path -> req:{} res:{}
            for k, v in kvs.items():
                if '->' in v:
                    if 'req:' not in v or 'res:' not in v:
                        errors.append(f'{doc.path}: [{sec}] line "{k}" missing req/res contract')
        if sec.startswith('SCHEMAS.'):
            # rough check: field:type;field2:type2
            for k, v in kvs.items():
                if ':' not in v and ';' not in v:
                    warnings.append(f'{doc.path}: [{sec}] line "{k}" does not look like a schema fields list')

    ok = len(errors) == 0
    return ok, errors, warnings

def stats(paths: List[str]) -> Dict:
    out = []
    total_chars = 0
    total_tokens = 0
    for p in paths:
        doc = parse(p)
        toks = doc.token_estimate()
        chars = sum(len(l) for l in doc.lines)
        total_chars += chars
        total_tokens += toks
        out.append({"file": p, "lines": len(doc.lines), "chars": chars, "tokens_est": toks, "sections": len(doc.sections)})
    return {"files": out, "total_chars": total_chars, "total_tokens_est": total_tokens}

def main():
    import argparse
    ap = argparse.ArgumentParser(prog="intellimoth", description="MOTH CLI (validate | stats)")
    sub = ap.add_subparsers(dest="cmd")

    v = sub.add_parser("validate", help="Validate one or more .moth files")
    v.add_argument("paths", nargs="+")

    s = sub.add_parser("stats", help="Show size/token estimates")
    s.add_argument("paths", nargs="+")

    args = ap.parse_args()
    if args.cmd == "validate":
        exit_code = 0
        for p in args.paths:
            doc = parse(p)
            ok, errs, warns = validate_moth(doc)
            print(f"File: {p}")
            for w in warns:
                print("  warn:", w)
            for e in errs:
                print("  error:", e)
            if ok:
                print("  ✅ OK")
            else:
                print("  ❌ FAILED")
                exit_code = 1
        sys.exit(exit_code)
    elif args.cmd == "stats":
        res = stats(args.paths)
        print(json.dumps(res, indent=2))
    else:
        ap.print_help()

if __name__ == "__main__":
    main()
