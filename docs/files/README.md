# MOTH (Minimal Overhead Technical Hierarchy)

**Compact notation for technical specifications, PRDs, and coding rules**  
*Companion to [kablUI](https://huikku.github.io/kablUI/) for complete application specification*

---

## What is MOTH?

MOTH is a line-based notation system designed for technical documentation that needs to stay in LLM context windows. It compresses verbose specs into dense, scannable formats optimized for AI coding agents.

**From the kablUI family:**
- **kablUI** → Describe what users SEE (UI components, layouts, interactions)
- **MOTH** → Describe what systems DO (APIs, data models, business logic, architecture)

Together, they let you specify entire applications in a fraction of the tokens.

---

## The Problem

```
Traditional PRD:           156KB, 42K tokens
Architecture docs:          89KB, 24K tokens  
.cursorrules:               47KB, 12K tokens
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total context used:        292KB, 78K tokens

Remaining for code:        122K / 200K tokens (39% wasted!)
```

## The Solution

```moth
PRD.moth:                   12KB, 3.5K tokens
architecture.moth:           8KB, 2.1K tokens
.cursorrules.moth:           4KB, 1.2K tokens
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total context used:         24KB, 6.8K tokens

Remaining for code:        193K / 200K tokens (91% efficient!)
```

**Result:** 91% compression, same information density.

---

## Quick Example

### Traditional Markdown PRD
```markdown
## User Authentication System

The system shall implement a JWT-based authentication mechanism. Users can register 
with email and password. The API will return access tokens (valid for 1 hour) and 
refresh tokens (valid for 7 days). 

### Database Schema
The User table will contain:
- id: UUID primary key
- email: string, unique, required
- password_hash: bcrypt hash
- created_at: timestamp
- last_login: timestamp

### API Endpoints
**POST /auth/register**
Request body:
- email: string
- password: string (min 8 characters)

Response:
- user_id: UUID
- access_token: JWT
- refresh_token: JWT
```

### MOTH Format
```moth
# auth_spec.moth
intent:authentication_system; audience:coding_llm; style:implementation

[AUTH]
method:jwt; access_ttl:1h; refresh_ttl:7d
flows:register;login;refresh;logout

[SCHEMA.user]
id:uuid_pk; email:str_unique; password_hash:bcrypt
created_at:ts; last_login:ts?

[API.auth]
POST:/auth/register -> req:{email:str;password:str_min8} res:{user_id;access_token;refresh_token}
POST:/auth/login -> req:{email;password} res:{access_token;refresh_token}
POST:/auth/refresh -> req:{refresh_token} res:{access_token}
POST:/auth/logout -> req:{access_token} res:{success:bool}
```

**Same information, 92% smaller.**

---

## Use Cases

### 1. PRDs for AI Agents
Spec entire products in a format that stays in context while coding:
```moth
[PRODUCT]
name:TaskFlow; type:saas; domain:project_management

[FEATURES]
boards:kanban+list+calendar; tasks:create;assign;track
realtime:websocket; collab:comments+mentions
integrations:slack;github;jira

[STACK]
frontend:react+typescript; backend:fastapi+postgres
realtime:pusher; auth:clerk; hosting:vercel+railway
```

### 2. Coding Rules (.cursorrules replacement)
Replace 50KB rules files with 5KB MOTH specs:
```moth
[STYLE]
lang:typescript; format:prettier; lint:eslint_strict
naming:camelCase_vars;PascalCase_types

[ARCHITECTURE]
pattern:clean_architecture; layers:domain;app;infra
testing:vitest+playwright; coverage:80%_min

[FORBIDDEN]
no:any;console.log;default_exports;class_inheritance
```

### 3. Architecture Docs
System designs that guide implementation:
```moth
[SERVICES]
api:fastapi; worker:celery; db:postgres; cache:redis
queue:sqs; storage:s3; cdn:cloudfront

[DATA_FLOW]
client -> cdn -> api -> db
api -> queue -> worker -> s3
```

### 4. Combined with kablUI
Full application specification (UI + backend):
```moth
[FEATURES.dashboard]
views:analytics+reports; filters:date+team+status

[UI.dashboard]
@APP[theme:dark]
  §HEADER "Analytics"
  @SPLIT[70/30]
    @MAIN
      [DatePicker]{range:last_30d}
      [Chart]{type:line;data:revenue_api}
    @SIDE
      [MetricCard]{value:$125K;trend:+12%}

[API.dashboard]
GET:/analytics -> req:{date_range;filters?} res:{metrics;charts}
GET:/reports/:id -> req:{id} res:{report}
```

---

## Core Syntax

```moth
# Comments start with hash
[SECTION_NAME]           # Sections in ALL_CAPS
key:value                # Primary data pattern
key:value; key2:value2   # Semicolon separation
list:[item1;item2]       # Inline lists
state:{k=v;k2=v2}        # Configuration objects

[SECTION.subsection]     # Hierarchical nesting
  nested_key:value       # 2-space indentation

# Types
str; int; float; bool; uuid; ts; hex; vec; bits
[type]                   # Arrays
{key:type}               # Objects
type|type2               # Unions

# Status codes
C:complete; P:planned; R:risk; D:deferred; X:deprecated

# UI notation (kablUI subset)
@CONTAINER[attrs]        # UI blocks
  §SECTION "title"       # Section headers
  [Control]{props}       # Interactive elements
```

---

## Getting Started

### 1. For General LLM Use (ChatGPT, Claude)
Paste this into your chat:
```
You now understand MOTH notation. When you see .moth files:
- Parse [SECTIONS] as logical blocks
- Read key:value as structured data
- Treat ; as list separators
- Recognize {k=v} as configuration objects

When writing MOTH:
- Use key:value for all data
- Favor compactness over verbosity
- Use [SECTIONS] not markdown headers
- No markdown formatting (**, ##, etc.)

See SPEC.md for full syntax.
```

### 2. For Cursor/Cline/Aider
Add to your `.cursorrules`:
```moth
# Project uses MOTH notation
# See: https://github.com/huikku/moth-spec

[MOTH_FILES]
extensions:.moth;.str;.spex
parse:key_value_pairs; sections:[BLOCKS]
lists:semicolon_separated; objects:{k=v}

When generating docs, use MOTH format.
When reading .moth files, parse as structured specifications.
```

### 3. Start Writing
Create `product_spec.moth`:
```moth
intent:product_requirements; audience:implementation_team; style:technical
version:0.1.0; updated:2025-10-22

[PRODUCT]
name:YourApp; domain:your_domain

[FEATURES]
feature1:description; feature2:description

[STACK]
frontend:framework; backend:framework; db:database
```

---

## File Extensions

- `.moth` - Primary extension
- `.str` - Alternative (STRAND)
- `.spex` - Specification variant

## MIME Type

```
text/x-moth
text/x-moth+plain
```

---

## Principles

1. **Compactness over verbosity** - Every token counts
2. **One concept per line** - Scannable structure
3. **Hierarchy through indentation or dots** - Clear relationships
4. **No markdown formatting** - Pure data notation
5. **Self-contained** - No external link dependencies
6. **Metadata-first** - Set context immediately

---

## Anti-Patterns

❌ Long prose paragraphs → Use compact lists  
❌ Markdown headers (##) → Use [SECTIONS]  
❌ Excessive nesting → Flatten with dot notation  
❌ External references → Inline or [APPENDIX]  
❌ Emojis → Unless audience:casual  
❌ Motivational text → Facts only  

---

## Documentation

- **[SPEC.md](SPEC.md)** - Full specification
- **[prompts/](prompts/)** - Onboarding prompts for various tools
- **[examples/](examples/)** - Real-world MOTH files
- **[templates/](templates/)** - Starter templates

---

## Ecosystem

**kablUI Family:**
- [kablUI](https://huikku.github.io/kablUI/) - UI component notation
- MOTH - Technical specification notation

**Use together for complete application specs.**

---

## Contributing

MOTH is an open notation standard. Contributions welcome:
- Improve syntax
- Add examples
- Create tooling
- Write guides

---

## License

MIT License - Free to use, modify, distribute

---

## Credits

Created by [huikku](https://github.com/huikku)  
Part of the kablUI notation family

**Why "MOTH"?** Minimal Overhead Technical Hierarchy - like moths drawn to light, drawn to brevity.
