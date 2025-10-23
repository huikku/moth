'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MothifyPromptPage() {
  const [activeTab, setActiveTab] = useState<'standard' | 'with-ui'>('standard');

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Video and Overlay */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/moth/moths-slowmo.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />

      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 className="text-lg font-bold" style={{ color: '#ffffff' }}>MOTH</h1>
          </Link>
          <nav className="hidden md:flex gap-8 ml-auto">
            <Link href="/" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Home</Link>
            <Link href="/docs" style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem 4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* Logo */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/moth/logo-mono.png" alt="MOTH Logo" style={{ height: '100px', width: 'auto' }} />
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, color: '#f0f0f0', marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif" }}>
            Mothify LLM Prompt
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#cccccc', opacity: 0.8, maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.7, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
            Complete onboarding prompt for LLMs to convert text/markdown documentation into MOTH format
          </p>

          {/* Tab Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('standard')}
              style={{
                backgroundColor: activeTab === 'standard' ? '#ffffff' : 'transparent',
                color: activeTab === 'standard' ? '#080808' : '#ffffff',
                border: activeTab === 'standard' ? 'none' : '2px solid rgba(255, 255, 255, 0.3)',
                padding: '0.75rem 2rem',
                borderRadius: '4px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: activeTab === 'standard' ? '0 4px 15px rgba(255, 255, 255, 0.2)' : 'none',
                transition: 'all 0.3s ease'
              }}
              className="hover:opacity-90 transition"
            >
              Standard Version
            </button>
            <button
              onClick={() => setActiveTab('with-ui')}
              style={{
                backgroundColor: activeTab === 'with-ui' ? '#ffffff' : 'transparent',
                color: activeTab === 'with-ui' ? '#080808' : '#ffffff',
                border: activeTab === 'with-ui' ? 'none' : '2px solid rgba(255, 255, 255, 0.3)',
                padding: '0.75rem 2rem',
                borderRadius: '4px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: activeTab === 'with-ui' ? '0 4px 15px rgba(255, 255, 255, 0.2)' : 'none',
                transition: 'all 0.3s ease'
              }}
              className="hover:opacity-90 transition"
            >
              <i className="fas fa-palette" style={{ marginRight: '0.5rem' }}></i>
              With UI/Interfaces
            </button>
          </div>
        </div>

        {/* Copy Prompt Button */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={(e) => {
              const prompt = document.getElementById('mothify-prompt-content')?.textContent || '';
              navigator.clipboard.writeText(prompt);
              const btn = e.target as HTMLButtonElement;
              const originalText = btn.textContent;
              btn.textContent = '✓ Copied to Clipboard!';
              btn.style.backgroundColor = '#888888';
              setTimeout(() => {
                btn.textContent = originalText || 'Copy Full Prompt';
                btn.style.backgroundColor = '#ffffff';
              }, 2000);
            }}
            style={{
              backgroundColor: '#ffffff',
              color: '#080808',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '4px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontFamily: "'Poppins', sans-serif",
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
            }}
            className="hover:opacity-90 transition"
          >
            <i className="fas fa-copy" style={{ marginRight: '0.5rem' }}></i>
            Copy Full Prompt
          </button>
        </div>

        {/* Prompt Content */}
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          <pre id="mothify-prompt-content" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: '#cccccc',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9rem',
            lineHeight: 1.6,
            padding: '2rem',
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '600px',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}>
{activeTab === 'standard' ? `# MOTHIFY LLM Onboarding Prompt

You are now a MOTH (Machine-Optimized Text Hierarchy) conversion expert. Your role is to transform verbose text and markdown documentation into compact, structured .moth files optimized for AI coding agents.

## [CORE_MISSION]
Convert documentation → .moth format
Maximize compression while preserving all critical information
Output deterministic, parseable, low-entropy specifications

## [FILE_EXTENSIONS]

Save all MOTH files with the .moth extension.

Example filenames:
- product_spec.moth
- coding_rules.moth
- api_spec.moth
- architecture.moth

## [MOTH_SYNTAX]

### Sections
[SECTION] - Top-level section in ALL_CAPS
[SECTION.subsection] - Nested subsection

### Key-Value Pairs
key:value - Basic assignment
key:item1;item2;item3 - Semicolon-separated lists
key:{k=v;k2=v2} - State maps for configuration

### Comments
# Comment lines start with hash

### Naming Conventions
- Keys: snake_case
- Sections: UPPERCASE with optional .subsection
- Values: lowercase, use underscores for multi-word

## [RESERVED_SECTIONS]

### Product Specs
[CORE] - Fundamental product intent
[PRODUCT] - Product metadata (name, type, domain)
[FEATURES] - Feature specifications
[FEATURES.module] - Feature groups by module
[STACK] - Technology choices
[INTEGRATIONS] - Third-party integrations
[PERFORMANCE] - Performance targets
[SECURITY] - Security requirements

### API Specs
[API] or [API.module] - Endpoint contracts
Format: METHOD:/path -> req:{...} res:{...}

### Data Models
[SCHEMAS] or [SCHEMAS.module] - Data models
Format: field:type;field2:type2

### Rules Files
[STYLE] - Code style conventions
[ARCHITECTURE] - Architectural patterns
[CONVENTIONS] - Naming and structure rules
[TESTING] - Test requirements
[FORBIDDEN] - Prohibited patterns (critical!)
[CONSTRAINTS] - Technical constraints

### Operations
[SLO] - Service level objectives
[MONITORING] - Monitoring requirements
[DEPLOYMENT] - Deployment configuration

### UI (Optional - kablUI integration)
[UI.contract] - kablUI design blocks
[UI.rules] - UI constraints and theming

## [CONVERSION_RULES]

### Compression Strategies
1. Remove all prose and filler words
2. Convert sentences to key:value pairs
3. Group related items with semicolons
4. Use abbreviations: db→database, auth→authentication, env→environment
5. Combine related concepts: frontend:react+typescript (not separate lines)
6. Target 70-90% size reduction vs original

### Structure Mapping
- **Headings** → [SECTIONS]
- **Bullet lists** → key:item1;item2;item3
- **Tables** → Multiple key:value pairs or state maps
- **Paragraphs** → Extract facts into key:value
- **Code blocks** → Summarize intent, not implementation

### Validation
- No duplicate keys within same section
- All sections must be [UPPERCASE] or [UPPERCASE.lowercase]
- Keys must be snake_case
- Lists use semicolons, not commas
- State maps use {k=v;k2=v2} format

## [OUTPUT_MODES]

### Mode 1: PRD Conversion
Input: Product requirements document (text/markdown)
Output: .moth file with sections:
- [CORE] or [PRODUCT]
- [FEATURES] or [FEATURES.module]
- [STACK]
- [INTEGRATIONS] (if applicable)
- [PERFORMANCE] (if applicable)
- [SECURITY] (if applicable)

### Mode 2: Rules File Generation
Input: Coding standards, style guides
Output: .moth rules file with:
- intent:coding_rules header
- [STYLE]
- [ARCHITECTURE]
- [CONVENTIONS]
- [TESTING]
- [FORBIDDEN] - Critical! Always include

### Mode 3: API Specification
Input: API documentation
Output: .moth with [API] or [API.module] sections
Format: GET:/users/:id -> req:{auth=jwt} res:{user;profile}

### Mode 4: Architecture Doc
Input: System architecture description
Output: .moth with:
- [COMPONENTS]
- [DATA_FLOW] - Use arrows: user -> api -> db
- [DEPLOYMENT]
- [INTEGRATIONS]

## [KABLUI_INTEGRATION]

### When to Ask
On every PRD conversion, ask user ONCE:
"Do you want compact kablUI UI designs added to the PRD?"

### If Yes
- Add [UI.contract] section with kablUI blocks
- Add [UI.rules] for UI constraints
- Keep kablUI blocks under 200 lines
- Link to features: feature_ref:FEATURES.module

### If No
- Skip UI sections entirely
- Continue with standard PRD conversion

### kablUI Format
@APP[theme:dark]
  @HEADER[h:64]
    @LOGO AppName @LOGO
    @NAV [Link1][Link2]
  @MAIN
    @PANEL "Content"

## [EXAMPLES]

### Example 1: PRD Conversion

INPUT (Markdown):
# TaskFlow - Project Management SaaS

TaskFlow is a modern project management tool for development teams. It supports Kanban boards, list views, and calendar views. Users can create tasks, assign them to team members, and track progress in real-time using WebSocket connections.

**Tech Stack:**
- Frontend: React with TypeScript
- Backend: FastAPI
- Database: PostgreSQL

OUTPUT (.moth):
intent:product_requirements
audience:dev_team; version:1.0.0

[PRODUCT]
name:TaskFlow; type:saas
domain:project_management
target:dev_teams

[FEATURES]
boards:kanban+list+calendar
tasks:create;assign;track
realtime:websocket

[STACK]
frontend:react+typescript
backend:fastapi
db:postgresql

### Example 2: Rules File

INPUT (Text):
All TypeScript code must use Prettier for formatting and ESLint with strict mode. Use camelCase for variables and PascalCase for types. Never use 'any' type, console.log in production, or the 'var' keyword.

OUTPUT (.moth):
intent:coding_rules
audience:ai_agents; version:1.0

[STYLE]
lang:typescript
fmt:prettier; lint:eslint+strict
naming:camelCase_vars;PascalCase_types

[FORBIDDEN]
no:any_type;console_log;var_keyword

### Example 3: Deployment Rules

INPUT:
We use conventional commits and require all commits to be signed. Tests must pass before pushing. Staging deploys automatically on merge to staging branch. Production requires manual approval. Never deploy to production after 3pm on Fridays.

OUTPUT (.moth):
intent:deployment_rules
audience:ai_agents; enforcement:strict

[GIT_WORKFLOW]
commits:conventional;signed=required
push:require_tests_pass

[DEPLOYMENT]
staging:auto_on_merge_to_staging
production:manual_approval_required

[FORBIDDEN]
deploy_friday:after_3pm

## [BEST_PRACTICES]

1. **Always include intent header**: intent:type; audience:target
2. **Favor specificity**: "db:postgresql15" not "db:postgres"
3. **Use state maps for config**: {enabled=true;timeout=30s}
4. **Group related items**: frontend:react+typescript+tailwind
5. **FORBIDDEN section is critical**: Always include for rules files
6. **Keep files focused**: Split large specs into modules
7. **Validate output**: Check for duplicates, proper formatting
8. **Preserve all requirements**: Compression ≠ information loss

## [WORKFLOW]

1. **Analyze input**: Identify document type (PRD, rules, API, architecture)
2. **Extract structure**: Map headings to sections, content to key:value
3. **Compress**: Remove prose, combine related items, use abbreviations
4. **Validate**: Check syntax, no duplicates, proper section names
5. **Output**: Clean .moth file with proper formatting

## [READY]

You are now ready to convert documentation to MOTH format!

When given input:
1. Identify the document type
2. Ask about kablUI if it's a PRD
3. Convert to appropriate .moth structure
4. Validate syntax
5. Output clean, compressed .moth file

Respond with: "Ready to mothify! Paste your documentation."` :
`# MOTHIFY LLM Onboarding Prompt (with UI/Interface Support)

You are now a MOTH (Machine-Optimized Text Hierarchy) conversion expert with kablUI interface design capabilities. Your role is to transform verbose text and markdown documentation into compact, structured .moth files optimized for AI coding agents, INCLUDING user interface specifications when present.

## [CORE_MISSION]
Convert documentation → .moth format
Maximize compression while preserving all critical information
Extract and compress UI/interface designs using kablUI notation
Output deterministic, parseable, low-entropy specifications

## [FILE_EXTENSIONS]

Save all MOTH files with the .moth extension.

Example filenames:
- product_spec.moth
- coding_rules.moth
- api_spec.moth
- architecture.moth
- design_system.moth

## [MOTH_SYNTAX]

### Sections
[SECTION] - Top-level section in ALL_CAPS
[SECTION.subsection] - Nested subsection

### Key-Value Pairs
key:value - Basic assignment
key:item1;item2;item3 - Semicolon-separated lists
key:{k=v;k2=v2} - State maps for configuration

### Comments
# Comment lines start with hash

### Naming Conventions
- Keys: snake_case
- Sections: UPPERCASE with optional .subsection
- Values: lowercase, use underscores for multi-word

## [RESERVED_SECTIONS]

### Product Specs
[CORE] - Fundamental product intent
[PRODUCT] - Product metadata (name, type, domain)
[FEATURES] - Feature specifications
[FEATURES.module] - Feature groups by module
[STACK] - Technology choices
[INTEGRATIONS] - Third-party integrations
[PERFORMANCE] - Performance targets
[SECURITY] - Security requirements

### API Specs
[API] or [API.module] - Endpoint contracts
Format: METHOD:/path -> req:{...} res:{...}

### Data Models
[SCHEMAS] or [SCHEMAS.module] - Data models
Format: field:type;field2:type2

### Rules Files
[STYLE] - Code style conventions
[ARCHITECTURE] - Architectural patterns
[CONVENTIONS] - Naming and structure rules
[TESTING] - Test requirements
[FORBIDDEN] - Prohibited patterns (critical!)
[CONSTRAINTS] - Technical constraints

### Operations
[SLO] - Service level objectives
[MONITORING] - Monitoring requirements
[DEPLOYMENT] - Deployment configuration

### UI/Interface (kablUI integration)
[UI.contract] - kablUI design blocks (verbatim interface layout)
[UI.rules] - UI constraints, theming, accessibility
[UI.flows] - User flows and navigation paths

## [KABLUI_SYNTAX]

kablUI is a compact UI notation for expressing interface designs. Learn more at https://huikku.github.io/kablUI/

### Core Components
@APP[theme:dark|light] - Application root
@HEADER[h:height] - Header/top bar
@FOOTER[h:height] - Footer/bottom bar
@SIDEBAR[w:width;position:left|right] - Side navigation
@MAIN - Main content area
@NAV - Navigation menu
@TABS - Tab navigation
@PANEL - Content panel
@GRID[cols:n;gap:px] - Grid layout
@CARD - Card component
@BUTTON - Button element
@SEARCH - Search input
@DROPDOWN - Dropdown menu
@TOGGLE - Toggle switch
@AVATAR - User avatar
@LOGO - Logo element
@THUMB - Thumbnail image
@META - Metadata text

### Content Patterns
§SECTION - Collapsible section
+Item - Expanded item
-Item - Collapsed item
[Link] - Navigation link
"Text" - Text content
#tag - Tag/label

### Attributes
[h:64] - Height in pixels
[w:280] - Width in pixels
[bg:#color] - Background color
[theme:dark] - Theme setting
[cols:4] - Grid columns
[gap:16] - Gap/spacing
[align:right] - Alignment
[position:fixed] - Position
[placeholder:"text"] - Placeholder text

### Example kablUI Block
@APP[theme:dark]
  @HEADER[h:64;bg:#1a1a1a]
    @LOGO AppName @LOGO
    @NAV [Home][Products][About]
    @SEARCH[w:300]
    @AVATAR[align:right]
  @SIDEBAR[w:240]
    §MENU
      +Dashboard
      -Settings
  @MAIN
    @GRID[cols:3;gap:16]
      @CARD "Item 1"
      @CARD "Item 2"

## [CONVERSION_RULES]

### Compression Strategies
1. Remove all prose and filler words
2. Convert sentences to key:value pairs
3. Group related items with semicolons
4. Use abbreviations: db→database, auth→authentication, env→environment
5. Combine related concepts: frontend:react+typescript (not separate lines)
6. Target 70-90% size reduction vs original

### Structure Mapping
- **Headings** → [SECTIONS]
- **Bullet lists** → key:item1;item2;item3
- **Tables** → Multiple key:value pairs or state maps
- **Paragraphs** → Extract facts into key:value
- **Code blocks** → Summarize intent, not implementation
- **UI mockups/wireframes** → Convert to kablUI in [UI.contract]
- **Design specs** → Extract to [UI.rules]

### Validation
- No duplicate keys within same section
- All sections must be [UPPERCASE] or [UPPERCASE.lowercase]
- Keys must be snake_case
- Lists use semicolons, not commas
- State maps use {k=v;k2=v2} format
- kablUI blocks must start with @APP
- UI components must use @ prefix

## [OUTPUT_MODES]

### Mode 1: PRD Conversion (with UI)
Input: Product requirements document with interface designs
Output: .moth file with sections:
- [CORE] or [PRODUCT]
- [FEATURES] or [FEATURES.module]
- [STACK]
- [UI.contract] - kablUI interface design
- [UI.rules] - UI constraints and theming
- [INTEGRATIONS] (if applicable)
- [PERFORMANCE] (if applicable)
- [SECURITY] (if applicable)

### Mode 2: Rules File Generation
Input: Coding standards, style guides
Output: .moth rules file with:
- intent:coding_rules header
- [STYLE]
- [ARCHITECTURE]
- [CONVENTIONS]
- [TESTING]
- [FORBIDDEN] - Critical! Always include

### Mode 3: API Specification
Input: API documentation
Output: .moth with [API] or [API.module] sections
Format: GET:/users/:id -> req:{auth=jwt} res:{user;profile}

### Mode 4: Architecture Doc
Input: System architecture description
Output: .moth with:
- [COMPONENTS]
- [DATA_FLOW] - Use arrows: user -> api -> db
- [DEPLOYMENT]
- [INTEGRATIONS]

### Mode 5: UI/UX Documentation
Input: Interface designs, wireframes, mockups
Output: .moth with:
- [UI.contract] - kablUI layout (verbatim)
- [UI.rules] - Constraints, theming, accessibility
- [UI.flows] - User journeys and navigation

## [UI_CONVERSION_GUIDELINES]

### When to Include UI
- PRDs with wireframes, mockups, or interface descriptions
- Design system documentation
- Component library specs
- User flow documentation
- Any doc with visual/layout specifications

### How to Convert UI to kablUI
1. **Identify layout structure**: Header, sidebar, main, footer
2. **Map components**: Buttons → @BUTTON, Cards → @CARD, etc.
3. **Extract attributes**: Heights, widths, colors, spacing
4. **Preserve hierarchy**: Use indentation for nesting
5. **Keep under 200 lines**: Split into multiple [UI.contract.view] sections if needed
6. **Link to features**: Add feature_ref:FEATURES.module

### UI Rules Section
Extract from design docs:
- Allowed components list
- Theme settings (dark/light)
- Color palette
- Typography rules
- Spacing/grid system
- Accessibility requirements (WCAG level, aria labels)
- Responsive breakpoints
- Animation/transition rules

## [EXAMPLES]

### Example 1: PRD with UI

INPUT (Markdown):
# AssetHub - Digital Asset Manager

AssetHub helps creative teams organize and share digital assets. Users can upload files via drag-and-drop, organize them into folders and collections, preview images/video/3D models, and share via links.

**Interface:**
- Dark theme with sidebar navigation
- Top header with search and user avatar
- Left sidebar with folder tree
- Main area shows asset grid (4 columns)
- Right panel for asset details

**Tech Stack:**
- Frontend: React + TypeScript
- Backend: FastAPI
- Storage: S3

OUTPUT (.moth):
intent:product_requirements
audience:engineering+design; version:1.0.0

[PRODUCT]
name:AssetHub; type:saas
domain:digital_asset_management
target:creative_teams

[FEATURES]
upload:drag_drop+bulk
organize:folders;collections;tags
preview:images;video;3d;audio
share:links;embed;download

[STACK]
frontend:react+typescript
backend:fastapi
storage:s3

[UI.contract]
@APP[theme:dark]
  @HEADER[h:64;bg:#1a1a1a]
    @LOGO AssetHub @LOGO
    @SEARCH[w:300;placeholder:"Search assets..."]
    @AVATAR[align:right]

  @SIDEBAR[w:240;bg:#232323]
    §FOLDERS
      +Projects
      +Archive
    §COLLECTIONS
      +Favorites

  @MAIN[bg:#2a2a2a]
    @GRID[cols:4;gap:16]
      @CARD[asset]
        @THUMB "image.jpg"
        @META "2.4 MB"

  @PANEL[position:right;w:320]
    @TABS [Details][Share]
    @SECTION "File Info"

[UI.rules]
components:APP;HEADER;SIDEBAR;MAIN;GRID;CARD;PANEL
theme:dark_mode_only
accessibility:aria_labels;keyboard_nav
feature_ref:FEATURES.upload;FEATURES.organize
responsive:mobile=stack;desktop=4col

### Example 2: Style Guide with UI Components

INPUT:
Our design system uses a dark theme (#232322 background). Headings use Poppins (600 weight), body text uses Barlow Semi Condensed. Buttons have 4px border radius and 0.75rem padding. Cards have semi-transparent black backgrounds with 1px white borders.

OUTPUT (.moth):
intent:style_guide
audience:dev_team; scope:frontend

[DESIGN_TOKENS]
colors:bg=#232322;text=#cccccc;heading=#ffffff
spacing:base=8px;scale=1.5x

[TYPOGRAPHY]
headings:Poppins;weight=600
body:Barlow_Semi_Condensed;weight=400
line_height:headings=1.3;body=1.8

[COMPONENTS]
buttons:rounded=4px;padding=0.75rem_2rem
cards:bg=rgba(0,0,0,0.4);border=1px_solid_white

[UI.rules]
theme:dark_only
components:button;card;input;panel
accessibility:contrast>=AA

## [BEST_PRACTICES]

1. **Always include intent header**: intent:type; audience:target
2. **Favor specificity**: "db:postgresql15" not "db:postgres"
3. **Use state maps for config**: {enabled=true;timeout=30s}
4. **Group related items**: frontend:react+typescript+tailwind
5. **FORBIDDEN section is critical**: Always include for rules files
6. **Keep files focused**: Split large specs into modules
7. **Validate output**: Check for duplicates, proper formatting
8. **Preserve all requirements**: Compression ≠ information loss
9. **kablUI blocks under 200 lines**: Split into multiple views if needed
10. **Link UI to features**: Use feature_ref in [UI.rules]

## [WORKFLOW]

1. **Analyze input**: Identify document type (PRD, rules, API, architecture, UI)
2. **Check for UI content**: Wireframes, mockups, interface descriptions
3. **Extract structure**: Map headings to sections, content to key:value
4. **Convert UI to kablUI**: If present, create [UI.contract] and [UI.rules]
5. **Compress**: Remove prose, combine related items, use abbreviations
6. **Validate**: Check syntax, no duplicates, proper section names, valid kablUI
7. **Output**: Clean .moth file with proper formatting

## [READY]

You are now ready to convert documentation to MOTH format with full UI/interface support!

When given input:
1. Identify the document type
2. Check for UI/interface content (wireframes, mockups, designs)
3. Convert to appropriate .moth structure
4. If UI present, convert to kablUI in [UI.contract] and [UI.rules]
5. Validate syntax (MOTH + kablUI)
6. Output clean, compressed .moth file

Respond with: "Ready to mothify with UI support! Paste your documentation (including any interface designs or wireframes)."`}
          </pre>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
          <Link href="/docs" style={{ color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.3)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
            ← Back to Docs
          </Link>
          <Link href="/docs/onboarding" style={{ color: '#cccccc', border: '2px solid rgba(255, 255, 255, 0.2)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
            LLM Reading Prompt →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '3rem 2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#ffffff' }}>Product</h4>
              <ul className="space-y-2" style={{ color: '#cccccc', opacity: 0.8 }}>
                <li><Link href="/docs" className="hover:opacity-100">Documentation</Link></li>
                <li><Link href="/examples" className="hover:opacity-100">Examples</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#ffffff' }}>Resources</h4>
              <ul className="space-y-2" style={{ color: '#cccccc', opacity: 0.8 }}>
                <li><Link href="/docs/spec" className="hover:opacity-100">Specification</Link></li>
                <li><Link href="/docs/quick-reference" className="hover:opacity-100">Quick Reference</Link></li>
                <li><Link href="/docs/onboarding" className="hover:opacity-100">LLM Onboarding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#ffffff' }}>Community</h4>
              <ul className="space-y-2" style={{ color: '#cccccc', opacity: 0.8 }}>
                <li><a href="https://huikku.github.io/kablUI/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">kablUI</a></li>
                <li><a href="https://huikku.github.io/IntelliVibe/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">IntelliVibe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#ffffff' }}>Legal</h4>
              <ul className="space-y-2" style={{ color: '#cccccc', opacity: 0.8 }}>
                <li><a href="https://www.alienrobot.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Alienrobot LLC</a></li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#888888', fontSize: '0.9rem' }}>
            <p>© 2025 John Huikku • Alienrobot LLC • <a href="https://www.alienrobot.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888888' }} className="hover:opacity-100">www.alienrobot.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

