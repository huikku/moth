# IntelliVibe - Intelligent LLM Development Workflow

## Overview

IntelliVibe is a streamlined approach to building software with Large Language Models (LLMs), created by Alienrobot. This document describes the compact "mega prompt" version that guides an LLM through the entire development process in a single, continuous conversation.

## Core Philosophy

IntelliVibe optimizes the collaboration between humans and LLMs by:
- Preserving context across the development lifecycle
- Minimizing token usage through efficient prompting
- Enabling seamless handoffs between LLM sessions when needed
- Creating a structured approach to track progress

## Mega Prompt Structure

The mega prompt uses a compact notation that LLMs can easily understand while minimizing token usage:

```
#INTELLIVIBE_MEGA_PROMPT

@META
VERSION=1.0
STRUCTURE=SEQUENTIAL
MODE=CONVERSATION
TOKEN_OPTIMIZE=TRUE

@SYSTEM
- Execute phases in sequence: INIT→PLAN→SETUP→HANDOFF
- Ask 2-3 questions at a time, wait for responses
- Acknowledge answers before asking next questions
- Confirm before phase transitions
- Maintain project context across all phases
- Allow revisiting previous phases if needed

@DEFINITIONS
... (definitions of custom notations like kablUI)

@PHASE:INIT
... (phase details)

@PHASE:PLAN
... (phase details)

@PHASE:SETUP
... (phase details)

@PHASE:HANDOFF
... (phase details)

@ERROR_RECOVERY
... (error handling guidelines)
```

## Development Phases

### Phase 1: Project Initiation (INIT)
The LLM gathers requirements through conversation, asking only 2-3 questions at a time to avoid overwhelming the user. Categories explored include:
- Project fundamentals (purpose, users, similar applications)
- Technical scope (frontend, backend, integrations, deployment)
- Design considerations (reference designs, branding, user flows)
- Development constraints (limitations, priorities, existing code)

### Phase 2: Plan & Design (PLAN)
The LLM creates a comprehensive project plan including:
- Project summary and technical specifications
- UI component designs using kablUI notation
- Implementation checklist organized by priority
- Development approach and workflow
- Testing strategy and documentation standards

### Phase 3: Implementation Setup (SETUP)
The LLM generates scaffolding for the project:
- Python script to create project structure
- `.vibe/` directory with documentation:
  - `project-plan.md`: Project specifications
  - `component-designs.md`: Master list of UI components
  - `checklist.md`: Implementation tasks
  - `data-models.md`: Data structures
  - `manifesto.md`: Coding standards
  - `testing.md`: Testing strategy
- `.vibe/components/` with individual `.kui` files for each component
- Version control setup and GitHub repository guidance

### Phase 4: Coding Agent Handoff (HANDOFF)
The LLM creates a handoff document for specialized coding agents (Cursor, Windsurf, Claude Code):
- Project overview and `.vibe` directory guide
- Implementation guidance with checklist management
- Current priorities and progress tracking
- References to component designs and coding standards

## kablUI Notation

kablUI is a component-based UI notation system for describing interfaces, also created by Alienrobot:

```
@COMPONENT Name[style attributes]
  @HEADER[style attributes]
    @TITLE "Title Text"[style attributes]
  @CONTENT[style attributes]
    @ITEM "Content Item"[style attributes]
  {state: active/disabled}
    // State-specific variations
```

Example:
```
@CARD[bg:gray-800 rounded p:4]
  @TITLE "Component Name"[font:semibold mb:4]
  @CONTENT[flex gap:2]
    [Button]Primary Action[/Button]
    [Button bg:gray-700]Secondary Action[/Button]
```

Each component is saved as an individual `.kui` file in the `.vibe/components/` directory for easy reference.

## Using IntelliVibe

1. Copy the entire mega prompt and paste it into your conversation with an LLM
2. The LLM will guide you through each phase sequentially
3. Answer questions in small batches as they're asked
4. Confirm to proceed to the next phase when prompted
5. Follow the guidance for setting up a GitHub repository
6. Use the generated handoff document with specialized coding agents

## Benefits Over Traditional Development

- **Token Efficiency**: Optimized prompting minimizes token usage
- **Context Preservation**: Maintains project knowledge across the lifecycle
- **Progress Tracking**: Built-in checklist system for implementation
- **Consistent Structure**: Standardized approach to software development
- **Documentation**: Creates comprehensive documentation in the `.vibe/` directory
- **Flexibility**: Works with any LLM and specialized coding agents

## Error Recovery

The workflow includes strategies for handling changes:
- Requirement changes: Update project-plan.md and affected components
- Design revisions: Update relevant .kui files and note changes in checklist
- Implementation issues: Document in checklist and adjust approach
- Major changes: Revisit the appropriate phase as needed

## Created By

John Huikku | Alienrobot LLC © 2025

---

*IntelliVibe provides an intelligent, streamlined approach to software development with LLMs while maintaining comprehensive documentation and structure.*
