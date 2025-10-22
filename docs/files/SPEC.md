# MOTH v1.0 Specification
intent:format_specification; audience:developers+llms; style:formal
version:1.0.0; updated:2025-10-22; origin:kablUI_family
related:https://huikku.github.io/kablUI/

---

## Abstract

MOTH (Minimal Overhead Technical Hierarchy) is a line-based notation system for technical documentation optimized for LLM context efficiency. It achieves 90%+ compression versus traditional markdown while preserving full semantic information.

**Design goals:**
- Maximum information density
- LLM-native parsing
- Human readable/writable
- Minimal syntax overhead
- Self-documenting structure

---

## File Format

### Extensions
```
.moth      # Primary extension
.str       # Alternative (STRAND)
.spex      # Specification variant
```

### MIME Types
```
text/x-moth
text/x-moth+plain
```

### Encoding
UTF-8 required

---

## Document Structure

### Header (Required)
Every MOTH file begins with a metadata header:

```moth
intent:<purpose>; audience:<who>; style:<variant>
version:<semver>; updated:<iso_date>
origin:<source>; scope:<domain>; links:<policy>
```

**Standard fields:**
- `intent` - Document purpose (prd, api_spec, architecture, rules, etc.)
- `audience` - Target readers (developers, llms, coding_agents, team, etc.)
- `style` - Writing style (technical, formal, casual, prescriptive)
- `version` - Semantic versioning (1.0.0)
- `updated` - ISO 8601 date (2025-10-22)

**Optional fields:**
- `origin` - Source/project name
- `scope` - Domain/area covered
- `links` - External link policy (inline, none, appendix)
- `emojis` - Emoji policy (yes, no, minimal)

### Body
Sections, key-value pairs, lists, and nested structures.

---

## Core Syntax

### 1. Comments

```moth
# Full line comment
key:value  # Inline comment (after 2+ spaces)
```

**Rules:**
- Start with `#`
- Full line or trailing (with 2+ space separator)
- No block comments (use multiple lines)

### 2. Sections

```moth
[SECTION_NAME]           # Top-level, ALL_CAPS
[SECTION.subsection]     # Dot notation for hierarchy
[SECTION.sub.deep]       # Multiple levels
```

**Rules:**
- Must be ALL_CAPS for top level
- Enclosed in `[` `]`
- Use dots `.` for nesting
- No spaces in section names (use underscores)

**Examples:**
```moth
[DATABASE]
[API.users]
[FEATURES.M1.auth]
[SCHEMA.user_v1]
```

### 3. Key-Value Pairs

```moth
key:value                     # Primary pattern
multi_word_key:value          # Underscores for spaces
key:"value:with:colons"       # Quotes for special chars
```

**Rules:**
- Keys: snake_case, no spaces, alphanumeric + underscore
- Separator: single colon `:`
- Values: any text until newline or semicolon
- Quotes: Use when value contains `:` or `;`

**Examples:**
```moth
database:postgresql_16
max_connections:100
api_endpoint:"https://api.example.com:8443"
description:"A system for managing user; admin; and guest roles"
```

### 4. Inline Lists

```moth
key:item1;item2;item3        # Semicolon separator
key:[item1;item2;item3]      # Bracketed variant
```

**Rules:**
- Separator: semicolon `;`
- Optional `[ ]` brackets for clarity
- No spaces after semicolons (unless in quotes)
- Empty items not allowed

**Examples:**
```moth
supported_formats:jpg;png;webp;svg
user_roles:[admin;editor;viewer]
integrations:slack;github;linear
```

### 5. Inline Objects (State/Config)

```moth
key:{k=v;k2=v2}              # Configuration objects
key:{k=v;nested:{x=y}}       # Nested objects
```

**Rules:**
- Enclosed in `{ }`
- Items separated by `;`
- Key-value separator: `=` (not `:`)
- Can nest

**Examples:**
```moth
cache_config:{ttl=3600;max_size=1000;eviction=lru}
theme:{primary=#1a73e8;secondary=#fbbc04;dark={bg=#000;fg=#fff}}
retry_policy:{max_attempts=3;backoff=exponential;initial_delay=1s}
```

### 6. Hierarchical Structures

**Dot notation (preferred):**
```moth
[SECTION.subsection]
key:value
```

**Indentation (alternative):**
```moth
[SECTION]
  subsection:
    key:value
```

**Rules:**
- 2 spaces per level
- Consistent within file
- Prefer dot notation for deep hierarchies

### 7. Types

```moth
# Primitives
str; int; float; bool; uuid; ts; hex; vec; bits; blob

# Collections
[type]               # Array
{key:type}           # Object/map
type|type2           # Union

# Examples
user_id:uuid
email:str
age:int
verified:bool
created_at:ts
settings:{key:str}
tags:[str]
status:active|pending|deleted
```

**Type Reference:**
- `str` - String
- `int` - Integer
- `float` - Floating point
- `bool` - Boolean (true/false, 1/0, yes/no)
- `uuid` - UUID v4
- `ts` - Timestamp (ISO 8601 or Unix)
- `hex` - Hexadecimal string
- `vec` - Vector (embeddings)
- `bits` - Bit string
- `blob` - Binary data

### 8. Status Codes

```moth
feature_x:status:C      # Complete
feature_y:status:P      # Planned
feature_z:status:R      # At risk
feature_a:status:D      # Deferred
feature_b:status:X      # Deprecated
```

**Status Reference:**
- `C` - Complete/Implemented
- `P` - Planned/Not started
- `R` - Risk/Blocked
- `D` - Deferred/Postponed
- `X` - Deprecated/Removed

---

## Special Sections

### [HEADER] - Metadata (First section)
```moth
intent:purpose; audience:who; style:variant
version:1.0.0; updated:2025-10-22
```

### [SCHEMA.name] - Data Models
```moth
[SCHEMA.user_v1]
id:uuid_pk; email:str_unique; name:str
roles:[str]; settings:{key:val}
created_at:ts; updated_at:ts
```

### [API.category] - Endpoints
```moth
[API.users]
GET:/users/:id -> req:{id:uuid} res:{user}
POST:/users -> req:{email;name;password} res:{user;token}
PUT:/users/:id -> req:{id;user_partial} res:{user}
DELETE:/users/:id -> req:{id} res:{success:bool}
```

**Format:**
```
METHOD:/path/:param -> req:{fields} res:{fields}
```

### [FEATURES] - Product Features
```moth
[FEATURES.M1]
auth:login+register+oauth; status:C
dashboard:analytics+charts; status:P
notifications:email+push+sms; status:R
```

### [STACK] - Technology Stack
```moth
[STACK]
frontend:react+typescript+vite
backend:fastapi+python3.11
db:postgresql_16+pgvector
cache:redis_7; queue:sqs
hosting:aws_ecs; cdn:cloudfront
```

### [ARCHITECTURE] - System Design
```moth
[ARCHITECTURE]
pattern:hexagonal; layers:domain;app;infra
communication:rest+graphql+websocket
storage:postgres+s3; cache:redis
```

---

## kablUI Integration

MOTH includes kablUI syntax for UI specifications. This allows complete application specs (backend + frontend) in one file.

### UI Notation Syntax

```moth
[UI.component_name]
@CONTAINER[attributes]        # Container block
  §SECTION "title"            # Section within container
  [Control]{properties}       # Interactive element
  Text content                # Plain text
```

**Container Types:**
- `@APP` - Application root
- `@MAIN` - Main content area
- `@SPLIT` - Split layout
- `@GRID` - Grid layout
- `@CARD` - Card container
- `@MODAL` - Modal dialog

**Example:**
```moth
[UI.dashboard]
@APP[theme:dark; responsive]
  §HEADER "Analytics Dashboard"
  @SPLIT[60/40; gap:2rem]
    @MAIN
      [DatePicker]{range:last_30_days; format:YYYY-MM-DD}
      [Chart]{type:line; data:revenue_api; height:400px}
      [Table]{columns:date,revenue,orders; sortable}
    @SIDE
      [MetricCard]{label:"Total Revenue"; value:$125K; trend:+12%}
      [MetricCard]{label:"Orders"; value:1,234; trend:-3%}
      [Button]{label:"Export"; action:download_csv; variant:primary}
```

**Full kablUI documentation:** https://huikku.github.io/kablUI/

---

## Common Patterns

### Product Specification
```moth
intent:product_requirements; audience:dev_team; style:technical
version:1.0.0; updated:2025-10-22

[PRODUCT]
name:TaskFlow; type:saas; domain:project_management
target:small_teams; pricing:freemium

[FEATURES]
boards:kanban+list+calendar; tasks:create;assign;track;comment
realtime:websocket; notifications:email+push
integrations:slack;github;jira; mobile:ios+android

[STACK]
frontend:react+typescript; backend:fastapi+postgres
realtime:pusher; auth:clerk; storage:s3
hosting:vercel+railway; monitoring:sentry+datadog

[SCHEMA.task]
id:uuid; title:str; description:str; status:todo|doing|done
assignee:uuid_fk; created_by:uuid_fk
created_at:ts; updated_at:ts; due_at:ts?

[API.tasks]
GET:/tasks -> req:{board_id;filters?} res:{tasks:[task]}
POST:/tasks -> req:{title;description;assignee} res:{task}
PUT:/tasks/:id -> req:{id;task_partial} res:{task}
DELETE:/tasks/:id -> req:{id} res:{success:bool}
```

### Coding Rules (.cursorrules)
```moth
intent:coding_standards; audience:cursor+copilot; style:prescriptive

[STYLE]
lang:typescript; format:prettier; lint:eslint_strict
naming:camelCase_vars;PascalCase_types;SCREAMING_SNAKE_constants
quotes:single; semicolons:required; trailing_commas:always

[ARCHITECTURE]
pattern:clean_architecture; layers:domain;application;infrastructure
deps:domain->none; application->domain; infrastructure->all
modules:feature_based; imports:absolute_paths

[TESTING]
framework:vitest; coverage:80%_min; pattern:arrange_act_assert
mocks:prefer_fakes; e2e:playwright; ci:required
naming:describe_should_when

[CONVENTIONS]
errors:Result<T,E>_no_exceptions
async:async_await_no_callbacks
state:zustand_immutable
api:react_query; forms:react_hook_form

[FORBIDDEN]
no:any_type;console.log;eval;with;var
no:default_exports; no:class_inheritance_prefer_composition
no:inline_styles; no:magic_numbers
```

### Architecture Document
```moth
intent:system_architecture; audience:implementation_team; style:technical

[SERVICES]
api:fastapi+uvicorn; worker:celery+redis
db:postgresql_16; cache:redis_7; queue:sqs
storage:s3; cdn:cloudfront; search:opensearch

[DATA_FLOW]
# Read path
client -> cdn -> alb -> api_pods -> cache -> postgres
# Write path
client -> api -> queue -> worker -> db
# Assets
client -> api -> s3 -> cdn

[SCALING]
api:horizontal_ecs; worker:auto_scale_queue_depth
db:read_replicas_3; cache:cluster_mode
cdn:global_edge; storage:multi_region

[SECURITY]
auth:jwt_bearer+refresh; rbac:role_based; rls:tenant_isolation
encryption:tls_1.3+kms; secrets:aws_secrets_manager
audit:cloudwatch_logs; compliance:soc2+gdpr

[MONITORING]
metrics:datadog; logs:cloudwatch; traces:datadog_apm
alerts:pagerduty; uptime:pingdom
slos:p99<200ms; availability:99.9%
```

---

## Schema Notation

### Database Schemas
```moth
[SCHEMA.table_name_version]
field:type_constraints

# Constraints
_pk         # Primary key
_fk         # Foreign key
_unique     # Unique constraint
_idx        # Index
?           # Nullable (suffix)
```

**Example:**
```moth
[SCHEMA.user_v1]
id:uuid_pk
email:str_unique_idx
password_hash:str
first_name:str
last_name:str?
avatar_url:str?
roles:[str]
settings:{key:str}
created_at:ts
updated_at:ts
deleted_at:ts?
```

### API Schemas
```moth
[API.resource]
METHOD:/path/:param -> req:{type} res:{type} auth:policy

# HTTP Methods
GET POST PUT PATCH DELETE

# Auth policies
none public bearer admin
```

**Examples:**
```moth
[API.auth]
POST:/auth/register -> req:{email:str;password:str} res:{user;token} auth:none
POST:/auth/login -> req:{email;password} res:{token} auth:none
POST:/auth/refresh -> req:{refresh_token} res:{access_token} auth:bearer
GET:/auth/me -> req:{} res:{user} auth:bearer

[API.users]
GET:/users -> req:{page:int;limit:int;filters?} res:{users:[user];total:int} auth:admin
GET:/users/:id -> req:{id:uuid} res:{user} auth:bearer
PUT:/users/:id -> req:{id;user_partial} res:{user} auth:bearer
DELETE:/users/:id -> req:{id} res:{success:bool} auth:admin
```

---

## Conventions

### Naming
- **Sections**: ALL_CAPS with underscores (`[USER_MANAGEMENT]`)
- **Keys**: snake_case (`user_id`, `created_at`)
- **Values**: context-dependent
- **Types**: lowercase (`str`, `int`, `uuid`)
- **Booleans**: `true`/`false`, `1`/`0`, `yes`/`no`

### Formatting
- One concept per line when possible
- Use semicolons for inline separation
- 2-space indentation for hierarchy
- No trailing whitespace
- Single blank line between major sections

### Escaping
```moth
# Use quotes for values with special chars
url:"https://api.example.com:8443/path"
description:"A value with: colons; and semicolons"

# Nested quotes
json_config:'{"key": "value with \\"quotes\\""}'
```

---

## Anti-Patterns

### ❌ Don't Use Markdown
```moth
# WRONG
## Features
**Authentication**: Login and registration
- OAuth support
- Password reset

# CORRECT
[FEATURES.auth]
login:email+password+oauth
registration:email+verification
recovery:password_reset+email
```

### ❌ Don't Write Prose
```moth
# WRONG
[DESCRIPTION]
This system is designed to provide a robust and scalable solution for 
managing user authentication. It implements industry best practices and 
follows security standards to ensure data protection.

# CORRECT
[SYSTEM]
purpose:user_authentication; quality:robust+scalable
standards:industry_best_practices; compliance:security_standards
```

### ❌ Don't Use External Links
```moth
# WRONG
api_docs:https://docs.example.com/api

# CORRECT - Inline essential info
[API]
base_url:https://api.example.com
auth:bearer_token; rate_limit:1000/hour
docs:[APPENDIX.api_reference]
```

### ❌ Don't Over-Nest
```moth
# WRONG
[SYSTEM]
  [BACKEND]
    [API]
      [USERS]
        [ENDPOINTS]
          get_user:GET:/users/:id

# CORRECT - Use dot notation
[API.users]
GET:/users/:id -> req:{id} res:{user}
```

---

## Validation Rules

### Required
- File must start with header metadata
- At least one `[SECTION]`
- Valid key:value syntax
- Proper quote escaping

### Recommended
- Consistent indentation (2 spaces)
- Logical section ordering
- Type annotations for schemas
- Status codes for features

### Optional
- kablUI UI notation
- Inline comments
- Status tracking
- Version suffixes on schemas

---

## Extensions

MOTH is extensible. Projects can define custom:
- Section names
- Key conventions
- Type systems
- Status codes

**Example custom extension:**
```moth
# project_custom.moth
intent:custom_notation; audience:team; style:domain_specific

[CUSTOM_TYPES]
sku:str_pattern_^[A-Z]{3}-\d{4}$
money:int_cents; percentage:float_0-100

[CUSTOM_STATUS]
Y:verified; N:pending; E:error

[INVENTORY.item]
id:uuid; sku:sku; price:money
discount:percentage; status:Y|N|E
```

---

## Tooling

### Parsers
- LLM-native (Claude, GPT-4, etc.)
- Custom parsers can be built

### Validators
- Syntax checking
- Schema validation
- Type checking

### Converters
- Markdown → MOTH (via LLM)
- MOTH → Markdown (via LLM)
- MOTH → JSON/YAML

---

## Version History

- **v1.0.0** (2025-10-22) - Initial specification
  - Core syntax defined
  - kablUI integration
  - Schema and API notation
  - Type system

---

## References

- kablUI: https://huikku.github.io/kablUI/
- GitHub: https://github.com/huikku/moth-spec
- Examples: /examples directory

---

## License

MIT License - Free to use, modify, and distribute

---

## Credits

Created by huikku  
Part of the kablUI notation family

**Specification maintained at:** https://github.com/huikku/moth-spec
