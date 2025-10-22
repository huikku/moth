'use client';

import Link from 'next/link';

const MOTH_PROMPT = `You now understand MOTH notation. When you see .moth files or MOTH format:

PARSING RULES:
- [SECTIONS] are logical blocks (ALL_CAPS for top-level)
- key:value is the primary data pattern
- semicolon separates list items
- k=v;k2=v2 represents configuration objects
- [SECTION.subsection] uses dot notation for hierarchy
- 2-space indentation for nested content

SYNTAX ELEMENTS:
- Comments: # Full line or key:value  # inline
- Types: str, int, float, bool, uuid, ts, hex, vec, bits, blob
- Collections: [type] for arrays, key:type for objects, type|type2 for unions
- Status: C=Complete, P=Planned, R=Risk, D=Deferred, X=Deprecated

COMMON SECTIONS:
- [SCHEMA.name] - Data models with field definitions
- [API.category] - REST endpoints with METHOD:/path
- [FEATURES] - Product features and capabilities
- [STACK] - Technology stack components
- [ARCHITECTURE] - System design and data flows

WRITING RULES:
- Use key:value for all data (not markdown)
- Favor compactness over verbosity
- One concept per line when possible
- No markdown formatting
- Use [SECTIONS] not markdown headers
- Semicolons for inline lists, not commas

EXAMPLE:
[PRODUCT]
name:TaskFlow; type:saas; domain:project_management

[FEATURES]
boards:kanban+list+calendar; tasks:create;assign;track
realtime:websocket; notifications:email+push

[STACK]
frontend:react+typescript; backend:fastapi
db:postgresql; cache:redis

[SCHEMA.task]
id:uuid_pk; title:str; status:todo|doing|done
assignee:uuid_fk; created_at:ts; updated_at:ts

[API.tasks]
GET:/tasks req:board_id;filters res:tasks
POST:/tasks req:title;assignee res:task

When generating MOTH files:
1. Use [SECTIONS] for organization
2. Use key:value for all data
3. Use semicolons to separate list items
4. Use k=v for configuration
5. Keep it compact and scannable
6. No prose or markdown formatting

When reading MOTH files:
1. Parse [SECTIONS] as logical blocks
2. Extract key:value pairs as structured data
3. Split semicolon-separated values into lists
4. Treat k=v as configuration objects
5. Understand the semantic meaning of each section

You are now fluent in MOTH notation.`;

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold">MOTH</h1>
              <p className="text-xs text-slate-400">Minimal Overhead Technical Hierarchy</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/docs" className="text-amber-400 font-semibold">Docs</Link>
            <Link href="/examples" className="text-slate-300 hover:text-white transition">Examples</Link>
            <Link href="/templates" className="text-slate-300 hover:text-white transition">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link href="/docs" className="text-amber-400 hover:text-orange-500 transition">← Back to Docs</Link>
        </div>

        <h1 className="text-5xl font-bold mb-6">LLM Onboarding Prompt</h1>
        <p className="text-xl text-slate-300 mb-8">
          Copy and paste this prompt into your LLM (ChatGPT, Claude, etc.) to teach it about MOTH format.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <div className="bg-slate-900/50 p-6 rounded font-mono text-sm text-slate-300 overflow-x-auto max-h-96 overflow-y-auto">
            <pre>{MOTH_PROMPT}</pre>
          </div>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
            Copy to Clipboard
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">How to Use This Prompt</h2>
            <ol className="space-y-3 text-slate-300">
              <li><strong>1. Copy the prompt above</strong> using the button</li>
              <li><strong>2. Open your LLM</strong> (ChatGPT, Claude, etc.)</li>
              <li><strong>3. Paste the prompt</strong> into a new conversation</li>
              <li><strong>4. Wait for confirmation</strong> that it understands MOTH</li>
              <li><strong>5. Start using MOTH files</strong> in your conversations</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">For Specific Tools</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Cursor / Cline</h3>
                <p className="text-slate-400 mb-3">
                  Add this to your .cursorrules file:
                </p>
                <pre className="bg-slate-900/50 p-3 rounded font-mono text-sm text-slate-300 overflow-x-auto">
{`# Project uses MOTH notation
# See: https://github.com/huikku/moth-spec

[MOTH_FILES]
extensions:.moth;.str;.spex
parse:key_value_pairs; sections:[BLOCKS]
lists:semicolon_separated; objects:{k=v}

When generating docs, use MOTH format.
When reading .moth files, parse as structured specifications.`}
                </pre>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">ChatGPT / Claude</h3>
                <p className="text-slate-400">
                  Paste the onboarding prompt at the start of each conversation, or save it as a custom instruction.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Aider</h3>
                <p className="text-slate-400">
                  Add the prompt to your system message or project context.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Teach your LLM about MOTH using this prompt</li>
              <li>✓ Download templates from the <Link href="/templates" className="text-amber-400 hover:text-orange-500">Templates</Link> page</li>
              <li>✓ Create your first MOTH file</li>
              <li>✓ Share it with your LLM and start coding</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="border-t border-slate-700/50 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-400">
          <p>© 2025 MOTH — Open notation standard. MIT License.</p>
        </div>
      </footer>
    </div>
  );
}

