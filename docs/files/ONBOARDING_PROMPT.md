# MOTH Format Onboarding Prompt

Copy and paste this into your LLM (ChatGPT, Claude, etc.) before sharing MOTH files:

---

```
You are now trained in MOTH (Minimal Overhead Technical Hierarchy) format, a compact notation for technical specifications.

## Core Syntax Rules

1. **Sections**: [SECTION_NAME] in ALL_CAPS denote logical blocks
2. **Key-Value**: key:value is the primary data pattern
3. **Lists**: Use semicolons (;) as separators for inline lists
4. **State Objects**: {key=value;key2=value2} for configuration
5. **Comments**: Lines starting with # are comments
6. **Types**: str, int, bool, uuid, ts, [type] for arrays, {k:type} for objects

## When Reading MOTH Files

- Parse the header (first line) for intent, audience, and style
- Recognize [SECTIONS] as logical groupings
- Treat key:value as structured data, not prose
- Semicolons separate list items
- {k=v} notation means state/config objects
- [API] sections define endpoints: METHOD:/path -> req:{} res:{}
- [SCHEMAS] sections define data models with types

## When Writing Code Based on MOTH

If MOTH file has:
- [FEATURES.*] sections → These are requirements to implement
- [SCHEMAS.*] sections → Create matching database models
- [API.*] sections → Implement endpoints exactly as specified
- [ARCHITECTURE] → Follow these patterns strictly
- [FORBIDDEN] rules → NEVER violate these (highest priority)
- [STYLE] rules → Apply to all generated code
- [TESTING] rules → Include tests meeting these requirements

## Key Principle

MOTH is structured, not prose. Every key:value pair is a fact to use. 
There's no fluff or marketing copy - everything is actionable.

When you see a .moth file, treat it as the authoritative specification.
```

---

## For Specific Tools

### Cursor / Cline / Aider

Add to your project's `.cursorrules`, `.clinerules`, or `.aider.conf.yml`:

```moth
intent:coding_assistant_config; audience:llms; style:prescriptive

[MOTH_FORMAT]
enabled:true
auto_load:**/*.moth
priority:high

[INTERPRETATION]
sections:logical_blocks
key_value:structured_data
semicolons:list_separators
forbidden_rules:never_violate
features:implement_exactly

[BEHAVIOR]
when_moth_present:follow_specs_strictly
no_deviation:from_[FORBIDDEN]_rules
always_check:[SCHEMAS]_before_db_models
always_check:[API]_before_endpoints
```

### General LLM Chat (ChatGPT, Claude.ai, etc.)

Just paste the onboarding prompt above, then paste your .moth file.

---

## Quick Test

After pasting the onboarding prompt, test it:

```
Test your MOTH understanding. Given this:

[API.users]
GET:/users/:id -> req:{id:uuid} res:{user}
auth:bearer_token; rate_limit:1000/hour

[SCHEMAS.user]
id:uuid; email:str; roles:[str]

What endpoint should I create and what does it return?
```

Expected response:
```
You should create a GET endpoint at /users/:id that:
- Accepts a UUID in the path
- Requires bearer token authentication  
- Rate limited to 1000 requests per hour
- Returns a user object containing: id (uuid), email (string), roles (array of strings)
```

If the LLM responds correctly, it understands MOTH!

---

## Advanced: Teaching MOTH to System Prompts

For tools that support system prompts (Cursor, Aider, custom GPTs):

```
System Behavior: When .moth files are present in the project:

1. Parse header for intent and audience
2. Load all [FORBIDDEN] rules into memory with highest priority
3. Extract [FEATURES.*] as implementation requirements
4. Use [SCHEMAS.*] as source of truth for data models
5. Follow [API.*] specifications exactly for endpoints
6. Apply [STYLE] and [NAMING] conventions to all generated code
7. Never generate code that violates [FORBIDDEN] rules
8. If unsure, reference the .moth file before proceeding

MOTH syntax: key:value with semicolon separators for lists.
Sections use [ALL_CAPS] brackets. State objects use {k=v}.
```

---

## Notes

- This prompt is designed to work with any LLM (Claude, GPT-4, Gemini, etc.)
- You only need to paste it once per conversation
- After pasting, the LLM will understand all MOTH files you share
- For persistent setups (IDE integrations), add to system prompts or config files
