'use client';

import Link from 'next/link';

export default function QuickReferencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold">MOTH</h1>
              <p className="text-xs text-slate-400">Minimal Overhead Technical Hierarchy</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/docs" className="text-amber-400 font-semibold">Docs</Link>
            <Link href="/examples" className="text-slate-300 hover:text-white transition">Examples</Link>
            <Link href="/templates" className="text-slate-300 hover:text-white transition">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link href="/docs" className="text-amber-400 hover:text-orange-500 transition">← Back to Docs</Link>
        </div>

        <h1 className="text-5xl font-bold mb-4">Quick Reference</h1>
        <p className="text-xl text-slate-300 mb-12">One-page cheat sheet for MOTH syntax. Print and keep near your keyboard!</p>

        <div className="space-y-8">
          {/* Syntax */}
          <section className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Syntax Patterns</h2>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="text-amber-400"># Comments</div>
                <div className="text-slate-300"># Full line comment</div>
                <div className="text-slate-300">key:value  # Inline comment</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="text-amber-400">[SECTIONS]</div>
                <div className="text-slate-300">[SECTION_NAME]</div>
                <div className="text-slate-300">[SECTION.subsection]</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="text-amber-400">Key-Value</div>
                <div className="text-slate-300">key:value</div>
                <div className="text-slate-300">key:"value:with:colons"</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="text-amber-400">Lists</div>
                <div className="text-slate-300">key:item1;item2;item3</div>
                <div className="text-slate-300">key:[item1;item2;item3]</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="text-amber-400">Objects</div>
                <div className="text-slate-300">key:{'{k=v;k2=v2}'}</div>
                <div className="text-slate-300">key:{'{k=v;nested:{x=y}}'}</div>
              </div>
            </div>
          </section>

          {/* Types */}
          <section className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Type System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="font-bold text-amber-400 mb-2">Primitives</div>
                <div className="font-mono text-sm space-y-1 text-slate-300">
                  <div>str, int, float, bool</div>
                  <div>uuid, ts, hex, vec, bits</div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="font-bold text-amber-400 mb-2">Collections</div>
                <div className="font-mono text-sm space-y-1 text-slate-300">
                  <div>[type] - Array</div>
                  <div>{'{key:type}'} - Object</div>
                  <div>type|type2 - Union</div>
                </div>
              </div>
            </div>
          </section>

          {/* Status Codes */}
          <section className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Status Codes</h2>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">C</span> - Complete</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">P</span> - Planned</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">R</span> - Risk</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">D</span> - Deferred</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">X</span> - Deprecated</div>
            </div>
          </section>

          {/* Common Sections */}
          <section className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Common Sections</h2>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">[SCHEMA.name]</span> - Data models</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">[API.category]</span> - API endpoints</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">[FEATURES]</span> - Product features</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">[STACK]</span> - Technology stack</div>
              <div className="bg-slate-900/50 p-3 rounded"><span className="text-amber-400">[ARCHITECTURE]</span> - System design</div>
            </div>
          </section>

          {/* Example */}
          <section className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Quick Example</h2>
            <pre className="bg-slate-900/50 p-4 rounded font-mono text-sm overflow-x-auto">
{`intent:product_requirements; audience:dev_team
version:1.0.0; updated:2025-10-22

[PRODUCT]
name:MyApp; type:saas; domain:project_management

[FEATURES]
auth:login+register; dashboard:analytics+reports
realtime:websocket; notifications:email+push

[STACK]
frontend:react+typescript; backend:fastapi
db:postgresql; cache:redis

[SCHEMA.user]
id:uuid_pk; email:str_unique; name:str
created_at:ts; updated_at:ts

[API.users]
GET:/users/:id -> req:{id:uuid} res:{user}
POST:/users -> req:{email;name} res:{user}`}
            </pre>
          </section>

          {/* Validation Checklist */}
          <section className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Validation Checklist</h2>
            <ul className="space-y-2 text-slate-300">
              <li>✓ File starts with header metadata</li>
              <li>✓ At least one [SECTION]</li>
              <li>✓ Valid key:value syntax</li>
              <li>✓ Proper quote escaping</li>
              <li>✓ Consistent indentation (2 spaces)</li>
              <li>✓ No trailing whitespace</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-400">
          <p>© 2025 MOTH — Open notation standard. MIT License.</p>
        </div>
      </footer>
    </div>
  );
}

