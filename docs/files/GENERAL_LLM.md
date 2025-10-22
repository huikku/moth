# MOTH Notation - General LLM Onboarding

Paste this into any LLM (ChatGPT, Claude, Gemini, etc.) to teach it MOTH notation.

---

## Universal MOTH Prompt

```
You now understand MOTH (Minimal Overhead Technical Hierarchy) notation - a compact specification format optimized for LLM context windows. MOTH is from the kablUI notation family (https://huikku.github.io/kablUI/).

## Core Syntax

[SECTION_NAME]              # Logical blocks in ALL_CAPS
[SECTION.subsection]        # Hierarchical with dot notation
key:value                   # Primary data pattern
key:value; key2:value2      # Inline separation with semicolons
key:item1;item2;item3      # Lists (semicolon separator)
key:[item1;item2]          # Bracketed lists
key:{k=v;k2=v2}            # Configuration objects (= not :)
# comment                   # Comments (full line or trailing)

## Special Sections

[SCHEMA.name_version]       # Database models
[API.category]              # HTTP endpoints  
[FEATURES]                  # Product capabilities
[FEATURES.milestone]        # Phased features
[STACK]                     # Technology choices
[ARCHITECTURE]              # System design
[CONVENTIONS]               # Coding patterns to follow
[FORBIDDEN]                 # Patterns to avoid
[UI.component]              # Interface specs (kablUI syntax)

## Types

Primitives: str, int, float, bool, uuid, ts, hex, vec, bits, blob
Collections: [type] for arrays, {key:type} for objects
Unions: type1|type2|type3
Constraints: _pk, _fk, _unique, _idx
Nullable: field? or field:type?

## API Notation

METHOD:/path/:param -> req:{fields} res:{fields} auth:policy

Examples:
GET:/users/:id -> req:{id:uuid} res:{user}
POST:/users -> req:{email:str;name:str} res:{user;token}

## Status Codes

C:complete; P:planned; R:risk; D:deferred; X:deprecated

## kablUI Integration

MOTH includes kablUI syntax for UI specifications:

@CONTAINER[attributes]      # Container block (APP, MAIN, SPLIT, GRID)
  §SECTION "title"          # Section within container
  [Control]{properties}     # Interactive element

## Interpretation Rules

When you see MOTH files:
1. Parse [SECTIONS] as logical blocks
2. Extract key:value pairs as structured data
3. Treat ; as list item separators
4. Recognize {k=v} as configuration objects
5. Implement [SCHEMA.*] as data models
6. Build [API.*] as HTTP endpoints
7. Follow [CONVENTIONS] patterns
8. Avoid [FORBIDDEN] patterns
9. Use [STACK] for technology choices
10. Interpret [UI.*] with kablUI rules

## Generation Rules

When creating MOTH documentation:
1. Use key:value for all data
2. Group related items with [SECTIONS]
3. Use ; for inline lists
4. Use {k=v} for configurations
5. No markdown formatting (no **, ##, bullets)
6. Extremely compact, no prose
7. Self-contained, no external links
8. Metadata header first (intent, audience, style)

## Anti-Patterns (Never Do)

❌ Markdown headers (## Title)
❌ Prose paragraphs
❌ Markdown formatting (**, *, >, bullets)
❌ External links in specs
❌ Emojis (unless audience:casual)
❌ Verbose explanations
❌ Nested bullets
❌ Repetition

## Examples

### Product Spec
```moth
intent:product_requirements; audience:dev_team; style:technical
version:1.0.0; updated:2025-10-22

[PRODUCT]
name:TaskFlow; type:saas; domain:project_management

[FEATURES.M1]
tasks:create;assign;track; boards:kanban+list
notifications:email+push; status:C

[STACK]
frontend:react+typescript; backend:fastapi+postgres
hosting:vercel+railway

[SCHEMA.task]
id:uuid_pk; title:str; status:todo|doing|done
assignee:uuid_fk; created_at:ts

[API.tasks]
GET:/tasks -> req:{board_id} res:{tasks:[task]}
POST:/tasks -> req:{title;assignee} res:{task}
```

### Coding Rules
```moth
intent:coding_standards; audience:team; style:prescriptive

[STYLE]
lang:typescript; format:prettier; lint:eslint_strict

[CONVENTIONS]
errors:Result<T,E>_no_exceptions
async:async_await_no_callbacks

[FORBIDDEN]
no:any;console.log;default_exports
```

### Architecture
```moth
intent:system_architecture; audience:implementation; style:technical

[SERVICES]
api:fastapi; db:postgres; cache:redis; queue:sqs

[DATA_FLOW]
client -> cdn -> api -> cache -> db

[SECURITY]
auth:jwt; rbac:role_based; encryption:tls+kms
```

## Context Efficiency

MOTH achieves 90%+ compression vs markdown:
- Traditional PRD: 156KB, 42K tokens
- MOTH PRD: 12KB, 3.5K tokens  
- Savings: 92% smaller, 38.5K tokens saved

This means more project context fits in your context window.

## References

- Full spec: SPEC.md
- kablUI: https://huikku.github.io/kablUI/
- GitHub: https://github.com/huikku/moth-spec
- Examples: /examples directory

You are now ready to read and write MOTH notation.
```

---

## Quick Start Examples

### Reading MOTH

**User uploads `product_spec.moth`:**

```moth
[FEATURES.auth]
methods:email+password+oauth; providers:google;github

[SCHEMA.user]
id:uuid_pk; email:str_unique; name:str
```

**You should understand:**
- Auth feature supports email/password and OAuth
- OAuth works with Google and GitHub
- User model has id (PK), email (unique), and name fields

### Writing MOTH

**User asks: "Document our API"**

**You should generate:**

```moth
intent:api_specification; audience:developers; style:technical
version:1.0.0; updated:2025-10-22

[API.users]
GET:/users -> req:{page:int;limit:int} res:{users:[user];total:int}
GET:/users/:id -> req:{id:uuid} res:{user}
POST:/users -> req:{email;name;password} res:{user;token}
PUT:/users/:id -> req:{id;user_partial} res:{user}
DELETE:/users/:id -> req:{id} res:{success:bool}

[API.auth]
POST:/auth/login -> req:{email;password} res:{token}
POST:/auth/refresh -> req:{refresh_token} res:{access_token}
```

---

## Common Use Cases

### 1. Product Requirements

User: "Create a PRD for a todo app"

Response: MOTH format with [PRODUCT], [FEATURES], [STACK], [SCHEMA], [API]

### 2. Architecture Documentation

User: "Document our system architecture"

Response: MOTH format with [SERVICES], [DATA_FLOW], [SECURITY], [SCALING]

### 3. Coding Standards

User: "Create coding standards for our TypeScript project"

Response: MOTH format with [STYLE], [CONVENTIONS], [FORBIDDEN], [TESTING]

### 4. API Specification

User: "Spec out the user management API"

Response: MOTH format with [API.users], schemas, auth policies

### 5. Database Schema

User: "Design the database schema for e-commerce"

Response: MOTH format with multiple [SCHEMA.*] sections

---

## Validation Checklist

When reading MOTH:
- ✅ Parsed [SECTIONS] correctly?
- ✅ Extracted key:value pairs?
- ✅ Understood ; as list separator?
- ✅ Recognized {k=v} as objects?
- ✅ Interpreted types correctly?

When writing MOTH:
- ✅ Started with metadata header?
- ✅ Used [SECTIONS] not markdown headers?
- ✅ key:value for all data?
- ✅ Semicolons for lists?
- ✅ No markdown formatting?
- ✅ Compact, no prose?
- ✅ Self-contained?

---

## Tips for Best Results

1. **Always generate MOTH for technical specs**
   - PRDs, architecture docs, API specs
   - Coding standards, database schemas

2. **Keep it compact**
   - No prose, just facts
   - One concept per line when possible
   - Use inline lists liberally

3. **Structure clearly**
   - Logical [SECTION] hierarchy
   - Consistent naming (ALL_CAPS sections, snake_case keys)

4. **Be explicit with types**
   - Add types to schemas: field:type
   - Use constraints: _pk, _unique, etc.
   - Mark nullable: field?

5. **Stay self-contained**
   - No external links
   - Inline essential info
   - No "see also" references

---

## Integration with kablUI

When specs include UI components, use kablUI syntax:

```moth
[UI.dashboard]
@APP[theme:dark]
  §HEADER "Analytics"
  @SPLIT[70/30]
    @MAIN
      [Chart]{type:line; data:revenue}
    @SIDE
      [MetricCard]{value:$125K}
```

Interpret this as:
- Dark theme application
- Header section titled "Analytics"
- 70/30 split layout
- Left side has line chart with revenue data
- Right side has metric card showing $125K

Full kablUI docs: https://huikku.github.io/kablUI/

---

## FAQ

**Q: When should I use MOTH vs regular markdown?**
A: Use MOTH for technical specs that need to stay in LLM context. Use markdown for blog posts, tutorials, general documentation.

**Q: Can I mix MOTH and prose?**
A: Minimize prose in MOTH files. If explanation needed, use brief comments.

**Q: How detailed should MOTH specs be?**
A: Include all essential technical details, but stay compact. No motivation or examples.

**Q: Should I convert existing docs to MOTH?**
A: For specs that LLMs need to reference often, yes. Saves 90% context.

**Q: Can I extend MOTH with custom conventions?**
A: Yes! Add custom section types, status codes, or type definitions as needed.

---

## Resources

- **Specification**: Full MOTH syntax in SPEC.md
- **Examples**: Real-world MOTH files in /examples
- **Templates**: Starter files in /templates
- **kablUI**: https://huikku.github.io/kablUI/
- **GitHub**: https://github.com/huikku/moth-spec

You are now equipped to work with MOTH notation!
