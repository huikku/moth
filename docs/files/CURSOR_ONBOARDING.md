# MOTH Notation - Cursor Integration

Paste this into Cursor's Composer or add to your `.cursorrules` file.

---

## For Cursor Composer (One-time instruction)

```
You now understand MOTH (Minimal Overhead Technical Hierarchy) notation, a compact format for technical specifications optimized for LLM context windows. MOTH is from the kablUI notation family.

## When Reading MOTH Files

### File Extensions
.moth, .str, .spex

### Core Syntax
- [SECTION_NAME] = Logical blocks (ALL_CAPS)
- key:value = Primary data pattern
- key:item1;item2;item3 = Inline lists (semicolon separator)
- key:{k=v;k2=v2} = State/config objects
- # comment = Comments
- [SECTION.subsection] = Hierarchical structure

### Special Sections
- [SCHEMA.name] = Data models with types
- [API.category] = HTTP endpoints
- [FEATURES] = Product capabilities
- [STACK] = Technology choices
- [UI.component] = kablUI interface specs

### Interpreting Content
Parse MOTH as structured specifications:
- Extract database schemas from [SCHEMA.*] sections
- Implement APIs from [API.*] sections
- Follow architecture patterns from [ARCHITECTURE]
- Use [STACK] to choose technologies
- Build interfaces from [UI.*] using kablUI syntax
- Respect [FORBIDDEN] and [CONVENTIONS] rules

## When Writing MOTH Documentation

Generate MOTH format for:
- Product requirements (PRDs)
- Architecture documentation
- API specifications
- Coding rules/standards
- Database schemas

### Rules for Generation
- Use key:value for all data
- Group related items with [SECTIONS]
- Inline lists with ; separator
- State as {k=v;k2=v2}
- No markdown formatting (**, ##, bullets)
- Extremely compact, no prose
- Self-contained, no external links

### Example Generation Pattern
```moth
intent:purpose; audience:who; style:technical
version:1.0.0; updated:2025-10-22

[SECTION]
key:value; key2:value2
list:item1;item2;item3
config:{setting=value;option=choice}

[SCHEMA.model_name]
id:uuid_pk; name:str; created_at:ts

[API.resource]
GET:/path/:id -> req:{id:uuid} res:{model}
POST:/path -> req:{data} res:{model}
```

## Integration Guidelines

1. **Reference MOTH specs throughout implementation**
   - Keep .moth files open in context
   - Cross-reference requirements while coding
   - Validate implementation matches spec

2. **Update MOTH files as project evolves**
   - Add new features to [FEATURES]
   - Update schemas when models change
   - Document new APIs

3. **Use MOTH for code review**
   - Verify code follows [CONVENTIONS]
   - Check against [FORBIDDEN] patterns
   - Ensure [TESTING] requirements met

Refer to SPEC.md for complete syntax details.
Full documentation: https://github.com/huikku/moth-spec
kablUI reference: https://huikku.github.io/kablUI/
```

---

## For .cursorrules File (Persistent project rules)

Add this to your project's `.cursorrules` or `.cursorrules.moth`:

```moth
# .cursorrules.moth
intent:cursor_integration; audience:cursor_ai; style:prescriptive

[MOTH_NOTATION]
enabled:true; extensions:.moth;.str;.spex
family:kablUI; reference:https://github.com/huikku/moth-spec

[FILE_HANDLING]
prd_files:product_spec.moth; architecture_files:architecture.moth
rules_files:.cursorrules.moth; schema_files:schemas.moth

[PARSING_RULES]
sections:[SECTION_NAME]; key_value:key:value
lists:semicolon_separated; objects:{k=v}
hierarchy:dot_notation+indentation

[GENERATION_RULES]
format:moth_when_appropriate
compress:use_compact_notation
no_markdown:avoid_in_moth_files
self_contained:inline_essential_info

[INTERPRETATION]
[SCHEMA.*]:implement_database_models
[API.*]:create_http_endpoints
[FEATURES]:build_functionality
[STACK]:use_specified_technologies
[CONVENTIONS]:follow_coding_patterns
[FORBIDDEN]:never_use_listed_patterns
[UI.*]:implement_using_kablUI_syntax

[OUTPUT]
When creating documentation, prefer MOTH format for:
- Technical specifications
- API contracts
- Database schemas
- Architecture decisions
- Coding standards

When explaining or modifying MOTH files:
- Preserve compact syntax
- Maintain section structure
- Keep inline formatting
- No markdown conversion unless requested
```

---

## Quick Reference for Cursor

### Common MOTH Patterns in Your Codebase

**Product Spec:**
```moth
[FEATURES.mvp]
auth:login+register; dashboard:analytics; api:rest+graphql
```

**Database Schema:**
```moth
[SCHEMA.user_v1]
id:uuid_pk; email:str_unique; name:str; created_at:ts
```

**API Endpoint:**
```moth
[API.users]
POST:/users -> req:{email:str;name:str} res:{user;token}
```

**Coding Rules:**
```moth
[STYLE]
lang:typescript; format:prettier; lint:eslint_strict

[FORBIDDEN]
no:any;console.log;default_exports
```

**UI Component (kablUI):**
```moth
[UI.dashboard]
@APP[theme:dark]
  [Chart]{type:line; data:metrics_api}
```

### How Cursor Uses MOTH

1. **Context Efficiency**: MOTH files use 90% fewer tokens than markdown
2. **Always-On Reference**: Keep specs in context throughout coding session
3. **Structured Parsing**: Cursor extracts structured data from MOTH syntax
4. **Auto-Completion**: Cursor suggests patterns from MOTH specs
5. **Validation**: Check code against MOTH requirements

### Tips

- Keep MOTH specs concise (the whole point!)
- Use [SECTION] tags for Cursor to navigate
- Put coding rules in `.cursorrules.moth`
- Reference specs with "as per product_spec.moth"
- Let Cursor read MOTH files directly (don't convert)

---

## Troubleshooting

**Q: Cursor not recognizing MOTH syntax?**  
A: Paste the onboarding prompt in Composer first, or add to `.cursorrules`

**Q: Should I convert MOTH to markdown for Cursor?**  
A: No! Cursor reads MOTH directly. Keep it compact for context efficiency.

**Q: Can I mix MOTH and regular code?**  
A: Yes! MOTH for specs/docs, regular code for implementation.

**Q: How do I update MOTH files?**  
A: Ask Cursor to "update product_spec.moth with new feature X"

---

## Resources

- Full Spec: SPEC.md
- Examples: /examples directory  
- Templates: /templates directory
- kablUI Docs: https://huikku.github.io/kablUI/
- GitHub: https://github.com/huikku/moth-spec
