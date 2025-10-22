# MOTH Quick Reference Card

One-page syntax guide for writing .moth files

---

## Header (Required)

```moth
intent:<purpose>; audience:<who>; style:<variant>
version:<semver>; updated:<YYYY-MM-DD>; status:<state>
```

**Common values:**
- intent: `product_requirements | coding_standards | api_spec | architecture`
- audience: `developers | llms | developers+llms | stakeholders`
- style: `technical | formal | prescriptive | descriptive`
- status: `draft | review | stable | deprecated`

---

## Sections

```moth
[SECTION_NAME]              # Top-level (ALL_CAPS)
[SECTION.subsection]        # Nested with dots
[SECTION.sub.deep]          # Multiple levels
```

---

## Key-Value Pairs

```moth
key:value                   # Single value
key:value; key2:value2      # Multiple inline
multi_word_key:value        # Underscores for spaces
```

---

## Lists

```moth
# Vertical lists
- item1
- item2

# Inline lists
key:item1;item2;item3

# Bracketed lists
key:[item1; item2; item3]

# Nested lists
- parent; child1; child2
```

---

## State Objects

```moth
key:{k1=v1; k2=v2}
config:{enabled=true; rollout=25%; regions=[us;eu]}
```

---

## Types

```moth
# Primitives
str int float bool uuid ts date time url email hex

# Collections
[type]              # Array
{key:type}          # Object/dict

# Unions
type1|type2         # Either type
type?               # Optional (shorthand for type|null)
```

---

## API Routes

```moth
METHOD:/path/:param -> req:{schema} res:{schema}

# Examples
GET:/users/:id -> req:{id:uuid} res:{user}
POST:/users -> req:{email:str;name:str} res:{user|error}
auth:bearer_token; rate_limit:1000/hour; cache:5min
```

---

## Schemas

```moth
[SCHEMAS.entity_name]
field:type; field2:type2
nested:{subfield:type}
array_field:[type]
optional:type?
```

**Example:**
```moth
[SCHEMAS.user]
id:uuid_pk; email:str_unique; name:str
roles:[str]; settings:{theme:str;lang:str}
created:ts; updated:ts; deleted:ts?
```

---

## Status Codes

```moth
C  Complete      # Done and verified
P  Planned       # Scheduled
R  Risk          # At-risk/blocked
D  Deferred      # Postponed
X  Deprecated    # No longer valid
```

**Usage:**
```moth
feature_auth:C; payments:P; analytics:D
```

---

## Comments

```moth
# Full line comment

key:value  # Inline comment
```

---

## Escaping

Use quotes when values contain special characters:

```moth
# No special chars - no quotes needed
url:https://example.com

# Has colon - needs quotes
connection:"host:localhost;port:5432"

# Has semicolon - needs quotes
message:"Hello; world; goodbye"
```

---

## Common Patterns

### Feature Specification
```moth
[FEATURES.feature_name]
goal:what_it_does
user_story:as_X_I_want_Y_so_that_Z
priority:must|should|could|wont
state:{enabled=true;rollout=100%}
```

### Coding Rule
```moth
[STYLE]
indent:2|4; line_length:80|100|120
naming:camelCase|snake_case|PascalCase

[FORBIDDEN]
no:eval;console_log;any_type
no:default_exports;var_keyword
```

### Tech Stack
```moth
[TECH_STACK]
frontend:react+typescript; styling:tailwind
backend:fastapi+python; db:postgres_16
queue:sqs; cache:redis; storage:s3
```

### Architecture
```moth
[ARCHITECTURE]
pattern:hexagonal|clean|layered
layers:domain;application;infrastructure
dependencies:domain->none;application->domain
```

---

## Do's and Don'ts

### ✅ Do

```moth
# Structured and compact
[FEATURES.auth]
methods:password;oauth;magic_link
security:bcrypt;rate_limit:5/min

[API.auth]
POST:/login -> req:{email:str;password:str} res:{token:jwt}

[FORBIDDEN]
no:eval;innerHTML;hardcoded_secrets
```

### ❌ Don't

```markdown
## Features

We need authentication because users need to log in.

### User Stories
As a user, I want to be able to sign in using multiple methods 
including email/password, OAuth providers like Google and GitHub,
and also magic link authentication for a passwordless experience.

### Security Considerations
For security, we should use bcrypt for password hashing. We also
need to implement rate limiting to prevent brute force attacks.
Let's set it to 5 attempts per minute.
```

---

## Mnemonics

**MOTH = Minimal Overhead Technical Hierarchy**

**Remember:**
- **M**inimal: Drop prose, keep facts
- **O**verhead: No fluff, no marketing
- **T**echnical: Structured data, not narrative  
- **H**ierarchy: Sections organize logically

**Syntax:**
- **[SECTIONS]** = Logical blocks
- **key:value** = Facts
- **;** = List separator
- **{k=v}** = State/config
- **#** = Comment

---

## Template Structure

```moth
# Header
intent:...; audience:...; style:...

# Metadata
[META]
project:...; owner:...; timeline:...

# Core sections
[PROBLEM]
...

[SOLUTION]
...

[FEATURES.feature1]
...

[FEATURES.feature2]
...

[TECH_STACK]
...

[SCHEMAS.entity1]
...

[API.category]
...

# Rules (if coding standards)
[STYLE]
...

[FORBIDDEN]
...

[TESTING]
...
```

---

## File Extensions

```
.moth    ← Use this (recommended)
.str     Alternative
.spex    Alternative
```

---

## Quick Validation Checklist

- [ ] Header present with intent, audience, style?
- [ ] Sections use [ALL_CAPS] format?
- [ ] Keys use snake_case?
- [ ] Values quoted if they contain : or ;?
- [ ] Lists use ; as separator?
- [ ] State objects use {k=v} format?
- [ ] No markdown formatting (##, **, etc.)?
- [ ] Self-contained (no external links)?
- [ ] Comments start with #?

---

## Common Section Names

```moth
[META]           # Project metadata
[PROBLEM]        # Pain points
[SOLUTION]       # Approach
[FEATURES.*]     # Feature specs
[TECH_STACK]     # Technology choices
[ARCHITECTURE]   # Design patterns
[API.*]          # API endpoints
[SCHEMAS.*]      # Data models
[SECURITY]       # Security requirements
[TESTING]        # Test requirements
[DEPLOYMENT]     # Deploy strategy
[METRICS]        # Success metrics
[RISKS]          # Risk analysis
[PHASES]         # Milestones
[STYLE]          # Code formatting
[NAMING]         # Naming conventions
[FORBIDDEN]      # Never-do rules
```

---

## One-Line Summary

**MOTH: Structured specs for LLMs using key:value syntax with [SECTIONS] and semicolon lists.**

---

Print this page and keep it near your keyboard while writing .moth files!
