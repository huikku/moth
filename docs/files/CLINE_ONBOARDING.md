# MOTH Notation - Cline Integration

Instructions for using MOTH with Cline autonomous coding agent.

---

## For Cline (Paste in Custom Instructions)

```
You are working with MOTH (Minimal Overhead Technical Hierarchy) notation - a compact specification format optimized for LLM context windows. MOTH is part of the kablUI notation family.

## MOTH Syntax Recognition

When you encounter files with extensions .moth, .str, or .spex:

### Structure
[SECTION_NAME]              # Top-level blocks (ALL_CAPS)
[SECTION.subsection]        # Hierarchical with dots
key:value                   # Primary data format
key:val1;val2;val3         # Inline lists (semicolon)
key:{k=v;k2=v2}            # Configuration objects
# comment                   # Comments

### Semantic Sections
[PRODUCT] = Product definition
[FEATURES] = Capabilities to implement
[STACK] = Technologies to use
[SCHEMA.*] = Database models (implement as tables/models)
[API.*] = HTTP endpoints (implement as routes)
[ARCHITECTURE] = System design patterns
[CONVENTIONS] = Coding patterns to follow
[FORBIDDEN] = Never use these patterns
[UI.*] = Interface specs (kablUI syntax)

### Types
str, int, float, bool, uuid, ts, hex, vec, bits, blob
[type] = array, {k:type} = object, type1|type2 = union
_pk, _fk, _unique, _idx = constraints
? suffix = nullable

## Implementation Flow

1. **Read MOTH Spec First**
   - Parse requirements from MOTH files
   - Extract schemas, APIs, features
   - Understand tech stack constraints

2. **Implement According to Spec**
   - Create models from [SCHEMA.*] sections
   - Build endpoints from [API.*] sections
   - Follow [ARCHITECTURE] patterns
   - Respect [CONVENTIONS] rules
   - Avoid [FORBIDDEN] patterns

3. **Maintain MOTH Files**
   - Update specs as implementation progresses
   - Keep MOTH files current with code reality
   - Use MOTH for architecture decisions

## Example Interpretation

Given this MOTH spec:

```moth
[FEATURES.auth]
methods:email+password+oauth; providers:google;github
tokens:jwt; access_ttl:1h; refresh_ttl:7d

[SCHEMA.user_v1]
id:uuid_pk; email:str_unique; password_hash:str
oauth_provider:str?; oauth_id:str?
created_at:ts; last_login:ts?

[API.auth]
POST:/auth/register -> req:{email;password} res:{user;token}
POST:/auth/login -> req:{email;password} res:{token}
POST:/auth/oauth/:provider -> req:{code} res:{token}
```

You should:
1. Create User model with specified fields and constraints
2. Implement JWT token generation (1h access, 7d refresh)
3. Build three auth endpoints as specified
4. Add OAuth support for Google and GitHub
5. Store OAuth provider/id when used

## Writing MOTH Documentation

When asked to create documentation, use MOTH format:

```moth
intent:purpose; audience:target; style:tone
version:1.0.0; updated:YYYY-MM-DD

[SECTION]
key:value; key2:value2
list:item1;item2;item3
state:{k=v;k2=v2}
```

### Generation Rules
- Compact, no prose
- key:value for all data
- [SECTIONS] not markdown headers
- Semicolons for inline lists
- {k=v} for configurations
- No markdown formatting
- Self-contained

## kablUI Integration

MOTH includes kablUI syntax for UI specs:

```moth
[UI.component]
@CONTAINER[attributes]
  §SECTION "title"
  [Control]{properties}
```

Implement these as UI components using the specified framework.

## Context Efficiency

MOTH achieves 90%+ compression vs markdown:
- Traditional PRD: 42K tokens
- MOTH PRD: 3.5K tokens
- Context saved: 38.5K tokens

This means more project context stays in memory while you work.

## References
- Spec: See SPEC.md in project
- Examples: See /examples directory
- kablUI: https://huikku.github.io/kablUI/
- GitHub: https://github.com/huikku/moth-spec
```

---

## Cline Configuration File

Create `.clinerules` in your project:

```yaml
# .clinerules
moth_notation:
  enabled: true
  extensions:
    - .moth
    - .str
    - .spex
  
  parsing:
    sections: "[SECTION_NAME]"
    key_value: "key:value"
    lists: "semicolon_separated"
    objects: "{k=v}"
  
  interpretation:
    "[SCHEMA.*]": "Create database models"
    "[API.*]": "Implement HTTP endpoints"
    "[FEATURES]": "Build functionality"
    "[STACK]": "Use specified technologies"
    "[CONVENTIONS]": "Follow coding patterns"
    "[FORBIDDEN]": "Never use these"
    "[UI.*]": "Build with kablUI patterns"
  
  generation:
    prefer_moth: true
    compress: true
    no_markdown: true
    self_contained: true

project_files:
  specs:
    - product_spec.moth
    - architecture.moth
  
  rules:
    - .clinerules
    - coding_standards.moth
```

---

## Usage Patterns

### Starting a New Feature

```
You: "Implement the user authentication feature from product_spec.moth"

Cline reads product_spec.moth:
[FEATURES.auth]
methods:email+password
...

Cline implements:
1. User model from [SCHEMA.user_v1]
2. Auth endpoints from [API.auth]
3. JWT logic as specified
4. Tests per [TESTING] rules
```

### Updating Architecture

```
You: "Update architecture.moth with the new caching layer"

Cline updates:
[ARCHITECTURE.caching]
system:redis_7; strategy:cache_aside
ttl:3600; max_memory:2gb
keys:user:{id};session:{id}
```

### Code Review

```
You: "Check if the code follows coding_standards.moth"

Cline validates:
- [STYLE] rules followed?
- [CONVENTIONS] patterns used?
- [FORBIDDEN] patterns avoided?
- [TESTING] coverage met?
```

---

## Best Practices with Cline

1. **Keep Specs Current**
   - Update MOTH files as you implement
   - Don't let code and specs drift

2. **Explicit References**
   - "According to product_spec.moth section [API.users]..."
   - Point Cline to specific MOTH sections

3. **Use for Context**
   - Keep MOTH specs open during long sessions
   - 90% smaller = more project fits in context

4. **Structured Updates**
   - Ask for specific MOTH section updates
   - "Add feature X to [FEATURES.M2] in product_spec.moth"

5. **Validation**
   - "Does this implementation match architecture.moth?"
   - "Check against coding_standards.moth"

---

## Troubleshooting

**Q: Cline not parsing MOTH correctly?**  
A: Ensure onboarding prompt is in custom instructions

**Q: Should I convert MOTH to code comments?**  
A: No, keep MOTH files separate. Reference them in code if needed.

**Q: How detailed should MOTH specs be?**  
A: Enough for implementation, not more. Remember: compact!

**Q: Can Cline update MOTH files?**  
A: Yes! Ask Cline to update specific sections as project evolves.

---

## Quick Reference

**Read MOTH file:**
```
"Read product_spec.moth and summarize the features"
```

**Implement from MOTH:**
```
"Implement the [API.users] section from product_spec.moth"
```

**Update MOTH:**
```
"Add rate limiting to [API] section with limit:1000/hour"
```

**Validate against MOTH:**
```
"Check if UserController follows architecture.moth patterns"
```

**Generate new MOTH:**
```
"Create a MOTH spec for the notification system"
```

---

## Resources

- Full Spec: SPEC.md
- Examples: /examples/*.moth
- Templates: /templates/*.moth
- kablUI: https://huikku.github.io/kablUI/
- GitHub: https://github.com/huikku/moth-spec
