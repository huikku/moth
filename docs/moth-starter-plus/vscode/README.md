# MOTH — VS Code Syntax

Quick install:
1. Copy `moth.tmLanguage.json` into a VS Code extension folder or use the "Custom Syntax Highlighting" extension.
2. Associate `*.moth` (and `*.str`, `*.spex`) files with language `MOTH` via VS Code settings:
   ```json
   "files.associations": {
     "*.moth": "moth",
     "*.str": "moth",
     "*.spex": "moth"
   }
   ```
3. Reload VS Code.
