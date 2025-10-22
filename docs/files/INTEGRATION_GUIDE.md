# MOTH Integration Guide for IDEs and Coding Assistants
Version 1.0 | 2025-10-22

## Overview

MOTH (Minimal Overhead Technical Hierarchy) is a compact notation format designed for LLM-readable specifications, PRDs, and coding rules. This guide helps IDE vendors, plugin developers, and AI coding assistant providers integrate MOTH support.

## Why Integrate MOTH?

### Problem
- PRDs and coding rules consume 40-60% of LLM context windows
- Traditional markdown is verbose and inconsistently structured
- LLMs struggle to extract structured requirements from prose

### Solution
- MOTH files are 80-95% smaller than equivalent markdown
- Structured format enables reliable parsing
- LLMs can directly extract requirements, schemas, and rules

### Benefits for Your Users
- **10x more code in context**: Compress specs from 50KB to 5KB
- **Better code generation**: Structured requirements = clearer intent
- **Consistent rule enforcement**: key:value format is unambiguous
- **Version control friendly**: Minimal diff noise

## File Types

```
.moth     Primary extension
.str      Alternative (STRuctured)
.spex     Alternative (SPEcification eXtension)
```

**Recommend**: Use `.moth` as primary, support all three for compatibility.

## Integration Levels

### Level 1: Basic Recognition (1 hour)
Add MOTH files to your LLM context when present in the repository.

**Implementation:**
```javascript
// Detect MOTH files
const mothFiles = findFiles(['**/*.moth', '**/*.str', '**/*.spex']);

// Include in context
const context = {
  code: loadCodeFiles(),
  specs: mothFiles.map(f => ({
    path: f.path,
    content: f.read(),
    type: 'moth-spec'
  }))
};
```

**Prompt Addition:**
```
The following .moth files contain product requirements and coding rules.
Parse them as structured specifications using key:value syntax.

{mothFileContents}
```

### Level 2: Smart Loading (4 hours)
Parse MOTH headers and load files based on relevance.

**Implementation:**
```javascript
function parseMothHeader(content) {
  const headerLine = content.split('\n')[0];
  const meta = {};
  
  // Parse: intent:value; audience:value; style:value
  headerLine.split(';').forEach(pair => {
    const [key, value] = pair.trim().split(':');
    meta[key] = value;
  });
  
  return meta;
}

function selectRelevantMoth(task, mothFiles) {
  return mothFiles.filter(f => {
    const meta = parseMothHeader(f.content);
    
    // Load PRDs for implementation tasks
    if (task.type === 'implement' && meta.intent?.includes('product')) {
      return true;
    }
    
    // Load rules for all coding tasks
    if (meta.intent?.includes('coding_standards')) {
      return true;
    }
    
    return false;
  });
}
```

### Level 3: Structured Parsing (1 day)
Parse MOTH into structured data for enhanced LLM instructions.

**Implementation:**
```javascript
function parseMoth(content) {
  const lines = content.split('\n');
  const parsed = {
    header: {},
    sections: {}
  };
  
  let currentSection = null;
  
  for (const line of lines) {
    // Skip comments
    if (line.trim().startsWith('#')) continue;
    
    // Parse header (first non-comment line)
    if (Object.keys(parsed.header).length === 0) {
      line.split(';').forEach(pair => {
        const [key, value] = pair.trim().split(':');
        if (key && value) parsed.header[key] = value;
      });
      continue;
    }
    
    // Parse section headers: [SECTION] or [SECTION.subsection]
    const sectionMatch = line.match(/^\[([A-Z_]+(?:\.[a-z_]+)?)\]/);
    if (sectionMatch) {
      currentSection = sectionMatch[1];
      parsed.sections[currentSection] = {};
      continue;
    }
    
    // Parse key:value pairs
    if (currentSection && line.includes(':')) {
      const colonIndex = line.indexOf(':');
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      
      // Handle inline lists with semicolons
      if (value.includes(';')) {
        parsed.sections[currentSection][key] = value.split(';').map(v => v.trim());
      } else {
        parsed.sections[currentSection][key] = value;
      }
    }
  }
  
  return parsed;
}

// Enhanced prompt with structured data
function buildPromptWithMoth(mothData) {
  let prompt = "Product Requirements:\n";
  
  if (mothData.sections.FEATURES) {
    prompt += "Implement these features:\n";
    Object.entries(mothData.sections.FEATURES).forEach(([key, value]) => {
      prompt += `- ${key}: ${value}\n`;
    });
  }
  
  if (mothData.sections.SCHEMAS) {
    prompt += "\nData Models:\n";
    // Extract schema definitions
  }
  
  return prompt;
}
```

### Level 4: Validation & Autocompletion (3 days)
Add IDE features for MOTH files.

**Features to Add:**
1. **Syntax Highlighting**: Highlight sections, keys, values differently
2. **Autocompletion**: Suggest common keys based on section
3. **Validation**: Warn on invalid syntax
4. **Hover Docs**: Show type information for keys
5. **Go to Definition**: Jump between schema references

**Example (VS Code Extension):**
```typescript
// Language configuration
{
  "comments": {
    "lineComment": "#"
  },
  "brackets": [
    ["[", "]"],
    ["{", "}"]
  ],
  "autoClosingPairs": [
    { "open": "[", "close": "]" },
    { "open": "{", "close": "}" }
  ]
}

// Syntax highlighting
{
  "patterns": [
    {
      "name": "entity.name.section.moth",
      "match": "^\\[([A-Z_\\.]+)\\]"
    },
    {
      "name": "keyword.control.moth",
      "match": "^([a-z_]+):"
    },
    {
      "name": "comment.line.moth",
      "match": "#.*$"
    }
  ]
}

// Autocompletion
vscode.languages.registerCompletionItemProvider('moth', {
  provideCompletionItems(document, position) {
    const line = document.lineAt(position).text;
    const section = getCurrentSection(document, position);
    
    // Suggest common keys for current section
    if (section === 'API') {
      return [
        new vscode.CompletionItem('GET:', vscode.CompletionItemKind.Keyword),
        new vscode.CompletionItem('POST:', vscode.CompletionItemKind.Keyword),
        new vscode.CompletionItem('auth:', vscode.CompletionItemKind.Property),
      ];
    }
    
    return [];
  }
});
```

## Integration Examples

### Cursor
```typescript
// .cursor/moth.config.ts
export default {
  enabled: true,
  files: ['**/*.moth'],
  autoload: true,
  
  // Add to every AI request
  prependToContext(mothFiles) {
    return `
System specifications (MOTH format):
${mothFiles.map(f => f.content).join('\n---\n')}

Parse these as structured requirements when generating code.
    `;
  }
};
```

### GitHub Copilot
```javascript
// Copilot extension manifest
{
  "contributes": {
    "contextProviders": [{
      "name": "moth-specs",
      "pattern": "**/*.moth",
      "priority": "high",
      "description": "Product requirements and coding rules"
    }]
  }
}
```

### Cline / Aider
```yaml
# .cline/config.yml
context:
  specs:
    include: ["**/*.moth"]
    priority: high
    parse: structured

# .aider.conf.yml  
read:
  - "**/*.moth"
auto-commits: true
```

### JetBrains IDEs
```kotlin
// Plugin: MothSupport
class MothFileType : LanguageFileType(MothLanguage) {
    override fun getName() = "MOTH"
    override fun getDescription() = "MOTH Specification"
    override fun getDefaultExtension() = "moth"
    override fun getIcon() = MothIcons.FILE
}

class MothContextProvider : AIContextProvider {
    override fun provideContext(project: Project): String {
        val mothFiles = FilenameIndex.getFilesByExt(project, "moth")
        return mothFiles.joinToString("\n---\n") { 
            it.readText() 
        }
    }
}
```

## Prompting Strategy

### For General Coding
```
You have access to MOTH specification files. These contain:
- [FEATURES] sections: Requirements to implement
- [SCHEMAS] sections: Data models to create
- [API] sections: Endpoints to build
- [RULES] sections: Coding standards to follow

When generating code:
1. Check MOTH files for relevant requirements
2. Follow all rules in [STYLE], [NAMING], [ARCHITECTURE]
3. Use schemas from [SCHEMAS] sections
4. Implement APIs matching [API] specifications
5. Never violate [FORBIDDEN] rules

Parse key:value pairs as structured data.
List items separated by semicolons are arrays.
State objects use {key=value} syntax.
```

### For PRD Interpretation
```
The .moth file contains a product requirements document.

Structure:
- [META]: Project metadata and timeline
- [PROBLEM]: User pain points to solve
- [SOLUTION]: Approach and value proposition
- [FEATURES.*]: Individual feature specifications
- [TECH_STACK]: Technology choices
- [API.*]: API endpoint definitions
- [SCHEMAS.*]: Data model definitions

When implementing:
1. Prioritize features by [FEATURES.*.priority]
2. Follow [ARCHITECTURE] patterns
3. Use [TECH_STACK] technologies
4. Implement [API] endpoints exactly as specified
5. Create database models matching [SCHEMAS]
```

### For Rules Enforcement
```
The .moth file contains coding standards.

Apply these rules to ALL code generation:
- [STYLE]: Formatting and syntax preferences
- [NAMING]: Variable/function/class naming conventions
- [ARCHITECTURE]: Code organization patterns
- [FORBIDDEN]: Patterns to never use
- [TESTING]: Test requirements and coverage

CRITICAL: Never generate code that violates [FORBIDDEN] rules.
```

## Best Practices

### For IDE Vendors
1. **Default Enabled**: Auto-detect and load .moth files
2. **Header Parsing**: Use `intent:` field to determine file purpose
3. **Priority Loading**: Load rules files before code generation
4. **Caching**: Parse MOTH files once, reuse parsed structure
5. **Validation**: Warn users of malformed MOTH syntax

### For Plugin Developers
1. **Minimal Parsing**: Don't over-engineer, key:value is simple
2. **Preserve Context**: Include full MOTH content in LLM context
3. **Smart Filtering**: Only load relevant sections for current task
4. **User Control**: Let users enable/disable MOTH integration
5. **Documentation**: Show users how MOTH improves their workflow

### For AI Tool Providers
1. **Training Data**: Include MOTH examples in few-shot prompts
2. **Structured Output**: Teach models to extract MOTH structure
3. **Validation**: Verify generated code matches MOTH requirements
4. **Feedback Loop**: Let users refine MOTH specs based on output
5. **Templates**: Provide MOTH templates for common use cases

## Example Workflow

```
1. Developer creates prd.moth in project root
2. IDE detects .moth file, parses header
3. Header shows: intent:product_requirements
4. IDE adds to AI context automatically
5. Developer asks: "implement user authentication"
6. AI sees [FEATURES.auth] in prd.moth
7. AI generates code matching exact specifications
8. Code follows [RULES] from rules.moth
9. Developer reviews, specs were perfectly matched
```

## Performance Considerations

**Token Efficiency:**
- Average .moth file: 2-5K tokens
- Equivalent markdown: 15-40K tokens
- **Savings: 85-90% reduction**

**Loading Strategy:**
```javascript
// Don't load ALL moth files every time
function selectMothFiles(task, allMothFiles) {
  const relevant = [];
  
  // Always load rules
  relevant.push(...allMothFiles.filter(f => 
    f.content.includes('intent:coding_standards')
  ));
  
  // Load PRDs for feature work
  if (task.type === 'implement') {
    relevant.push(...allMothFiles.filter(f =>
      f.content.includes('intent:product_requirements')
    ));
  }
  
  // Load API specs for endpoint work
  if (task.involves('api', 'endpoint', 'route')) {
    relevant.push(...allMothFiles.filter(f =>
      f.content.includes('[API')
    ));
  }
  
  return relevant;
}
```

## Migration Path for Existing Projects

Help users convert their docs to MOTH:

```javascript
// Conversion assistant
async function convertToMoth(markdownPath) {
  const markdown = await fs.readFile(markdownPath, 'utf-8');
  
  const prompt = `
Convert this markdown documentation to MOTH format.

Rules:
- Extract facts, drop prose
- Use key:value syntax
- Group into [SECTIONS]
- Preserve all technical details

Markdown:
${markdown}

Output MOTH format:
  `;
  
  const moth = await callLLM(prompt);
  return moth;
}
```

## Validation

Basic syntax validation:

```javascript
function validateMoth(content) {
  const errors = [];
  const lines = content.split('\n');
  
  // Check header exists
  if (!lines[0].includes('intent:')) {
    errors.push('Missing required header with intent: field');
  }
  
  // Check sections are uppercase
  const sections = content.match(/\[([^\]]+)\]/g);
  sections?.forEach(section => {
    const name = section.slice(1, -1);
    if (!/^[A-Z_\.]+$/.test(name)) {
      errors.push(`Invalid section name: ${name} (must be ALL_CAPS)`);
    }
  });
  
  // Check key:value syntax
  lines.forEach((line, i) => {
    if (line.trim() && !line.startsWith('#') && !line.startsWith('[')) {
      if (!line.includes(':')) {
        errors.push(`Line ${i + 1}: Expected key:value format`);
      }
    }
  });
  
  return errors;
}
```

## Support & Resources

- **Spec**: github.com/yourorg/moth-spec/SPEC.md
- **Examples**: github.com/yourorg/moth-spec/examples/
- **Community**: discord.gg/moth-spec
- **Issues**: github.com/yourorg/moth-spec/issues

## License

MOTH specification is released under MIT license.
Free to implement in commercial and open-source tools.

---

**Questions?** Open an issue or contact: your@email.com
