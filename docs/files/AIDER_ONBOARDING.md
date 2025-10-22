# MOTH Notation - Aider Integration

Instructions for using MOTH with Aider AI pair programming tool.

---

## For Aider (Add to .aider.conf.yml)

```yaml
# .aider.conf.yml
moth_notation:
  enabled: true
  
  read_files:
    - "**/*.moth"
    - "**/*.str"
    - "**/*.spex"
  
  system_prompt: |
    You understand MOTH (Minimal Overhead Technical Hierarchy) notation.
    
    MOTH is a compact specification format (from kablUI family):
    - [SECTION] = logical blocks
    - key:value = data pairs
    - key:item1;item2 = lists
    - key:{k=v} = objects
    
    When reading .moth files:
    - Parse as structured specifications
    - Implement [SCHEMA.*] as models
    - Build [API.*] as endpoints
    - Follow [CONVENTIONS]
    - Avoid [FORBIDDEN]
    
    When writing docs:
    - Use MOTH format
    - Compact, no prose
    - Self-contained
    
    Reference: https://github.com/huikku/moth-spec
```

---

## For Aider Chat (Paste Once Per Session)

```
You now understand MOTH notation for technical specifications.

## MOTH Syntax

Files: .moth, .str, .spex

Structure:
- [SECTION_NAME] = Logical blocks (ALL_CAPS)
- key:value = Primary data pattern
- key:item1;item2;item3 = Lists (semicolon separator)
- key:{k=v;k2=v2} = Configuration objects
- # comment = Comments

Special Sections:
- [SCHEMA.name] = Database models
- [API.category] = HTTP endpoints
- [FEATURES] = Product capabilities
- [STACK] = Technologies
- [CONVENTIONS] = Coding patterns to follow
- [FORBIDDEN] = Patterns to avoid
- [UI.*] = kablUI interface specs

Types: str, int, float, bool, uuid, ts, [type], {k:type}
Constraints: _pk, _fk, _unique, _idx, ? (nullable)

## Implementation

When I reference a .moth file:
1. Parse its structure
2. Extract schemas and APIs
3. Implement according to spec
4. Follow conventions
5. Avoid forbidden patterns

When writing documentation:
1. Use MOTH format
2. Compact syntax, no prose
3. key:value for all data
4. [SECTIONS] not markdown headers

Examples:

Schema:
[SCHEMA.user_v1]
id:uuid_pk; email:str_unique; name:str

API:
[API.users]
GET:/users/:id -> req:{id:uuid} res:{user}
POST:/users -> req:{email;name} res:{user;token}

See SPEC.md for full reference.
```

---

## Aider Workflow with MOTH

### 1. Starting a Session

```bash
# Add MOTH files to context
aider --read product_spec.moth architecture.moth

# Or in chat
/add product_spec.moth
/add architecture.moth
```

### 2. Reference MOTH in Prompts

```
You: Implement the auth endpoints from product_spec.moth section [API.auth]

Aider reads:
[API.auth]
POST:/auth/login -> req:{email;password} res:{token}
POST:/auth/register -> req:{email;password;name} res:{user;token}

Aider implements both endpoints according to spec.
```

### 3. Update MOTH Files

```
You: Add a password reset endpoint to product_spec.moth [API.auth]

Aider updates:
[API.auth]
POST:/auth/login -> req:{email;password} res:{token}
POST:/auth/register -> req:{email;password;name} res:{user;token}
POST:/auth/reset-password -> req:{email} res:{success:bool}
```

### 4. Validate Against MOTH

```
You: Check if the User model matches [SCHEMA.user_v1] in product_spec.moth

Aider compares code against MOTH spec and suggests changes.
```

---

## MOTH Best Practices with Aider

### Context Management

MOTH saves tokens - more specs fit in context:

```bash
# Instead of verbose markdown (42K tokens)
aider --read PRD.md architecture.md api_spec.md  # ❌ Context full

# Use compact MOTH (6K tokens)
aider --read product_spec.moth  # ✅ 86% context saved
```

### Explicit References

Point Aider to specific MOTH sections:

```
❌ "Implement user authentication"
✅ "Implement [API.auth] from product_spec.moth"

❌ "Follow our coding standards"  
✅ "Follow [CONVENTIONS] in coding_standards.moth"
```

### Iterative Development

Keep MOTH specs current:

```
1. Implement feature from MOTH
2. Update MOTH with learnings
3. Validate code against MOTH
4. Repeat
```

---

## Common Aider Commands with MOTH

### Add MOTH to Context
```
/add product_spec.moth
/add architecture.moth
/add coding_standards.moth
```

### Read Specific Section
```
/ask What does [API.users] specify in product_spec.moth?
```

### Implement from MOTH
```
Implement the [SCHEMA.task] model from product_spec.moth
```

### Update MOTH
```
Add rate limiting to [API] section: rate_limit:1000/hour
```

### Validate Code
```
Check if this code follows [CONVENTIONS] in coding_standards.moth
```

### Generate MOTH
```
Create a MOTH spec for the notification system
```

---

## Example Session

```bash
$ aider --read product_spec.moth

You: What features are in M1?

Aider: According to product_spec.moth [FEATURES.M1]:
- auth: login+register+oauth
- dashboard: analytics+charts
- api: rest+graphql

You: Implement the auth endpoints

Aider: I'll implement the endpoints from [API.auth]:
- POST /auth/login
- POST /auth/register
- POST /auth/oauth/:provider

[Aider writes the code]

You: Add password reset to the spec

Aider: I'll update product_spec.moth [API.auth]:

[API.auth]
POST:/auth/login -> req:{email;password} res:{token}
POST:/auth/register -> req:{email;password;name} res:{user;token}
POST:/auth/reset-password -> req:{email} res:{success:bool}

Should I implement the endpoint too?

You: Yes

[Aider implements password reset]
```

---

## .aider.conf.yml Template

Full configuration for MOTH projects:

```yaml
# .aider.conf.yml

# Auto-add MOTH files to context
read:
  - "**/*.moth"
  - "**/*.str"
  - "**/*.spex"

# System message for MOTH understanding
system-message: |
  You work with MOTH notation (from kablUI family).
  
  Syntax:
  - [SECTION] = blocks
  - key:value = data
  - key:item1;item2 = lists
  - key:{k=v} = objects
  
  Implement [SCHEMA.*] as models, [API.*] as endpoints.
  Follow [CONVENTIONS], avoid [FORBIDDEN].
  Write docs in MOTH format.
  
  Ref: https://github.com/huikku/moth-spec

# Watch MOTH files for changes
watch:
  - "*.moth"
  - "*.str"
  - "*.spex"

# Auto-commit MOTH changes
auto-commits: true
commit-prompt: |
  {context}
  
  Updated MOTH specs:
  {files}

# Editor settings
editor-model: gpt-4
edit-format: whole
```

---

## MOTH File Organization

Recommended structure:

```
project/
├── .aider.conf.yml
├── product_spec.moth          # Product requirements
├── architecture.moth          # System design
├── coding_standards.moth      # Style guide
├── schemas.moth               # Database models
└── src/
    ├── api/
    │   └── api_spec.moth      # API contracts
    └── ui/
        └── components.moth    # UI specs (kablUI)
```

---

## Troubleshooting

**Q: Aider not reading MOTH files?**  
A: Add explicitly with `/add filename.moth`

**Q: Aider treating MOTH as plain text?**  
A: Paste the onboarding prompt or update .aider.conf.yml

**Q: Should I convert MOTH to markdown?**  
A: No! MOTH's purpose is staying compact for context.

**Q: Can Aider modify MOTH files?**  
A: Yes! Use `/add product_spec.moth` then ask for updates.

**Q: MOTH vs code comments?**  
A: MOTH for specs/architecture, comments for code explanations.

---

## Resources

- Full Spec: SPEC.md
- Examples: /examples/*.moth
- Templates: /templates/*.moth
- kablUI: https://huikku.github.io/kablUI/
- GitHub: https://github.com/huikku/moth-spec
- Aider Docs: https://aider.chat

---

## Quick Reference Card

```moth
# MOTH Cheat Sheet for Aider

[READING]
/add:file.moth; /ask:question_about_spec

[IMPLEMENTING]
prompt:"Implement [SECTION] from spec.moth"

[UPDATING]
prompt:"Add X to [SECTION] in spec.moth"

[VALIDATING]
prompt:"Check code against spec.moth [CONVENTIONS]"

[GENERATING]
prompt:"Create MOTH spec for feature X"
```
