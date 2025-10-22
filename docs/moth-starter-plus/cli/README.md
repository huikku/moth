# IntelliMoth CLI (minimal)

Commands:
```bash
python -m intellimoth validate examples/*.moth
python -m intellimoth stats examples/*.moth
```

Integrate into CI:
```yaml
- name: Validate MOTH files
  run: python -m intellimoth validate examples/*.moth
```
