'use client';

import Link from 'next/link';

export default function QuickReferencePage() {
  return (
    <div style={{ backgroundColor: '#080808', color: '#f0f0f0' }} className="min-h-screen">
      {/* Header */}
      <header style={{ borderBottomColor: 'rgba(0, 200, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)' }} className="border-b backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div style={{ backgroundColor: '#00c8ff', color: '#080808' }} className="w-8 h-8 rounded-lg flex items-center justify-center font-bold">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#00c8ff' }}>MOTH</h1>
              <p className="text-xs" style={{ color: '#555555' }}>Minimal Overhead Technical Hierarchy</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Home</Link>
            <Link href="/docs" style={{ color: '#00c8ff' }} className="font-semibold">Docs</Link>
            <Link href="/examples" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Examples</Link>
            <Link href="/templates" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link href="/docs" style={{ color: '#00c8ff' }} className="hover:opacity-80 transition">← Back to Docs</Link>
        </div>

        <h1 className="text-5xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Quick Reference</h1>
        <p className="text-xl mb-12" style={{ color: '#f0f0f0', opacity: 0.9 }}>One-page cheat sheet for MOTH syntax. Print and keep near your keyboard!</p>

        <div className="space-y-8">
          {/* Syntax */}
          <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Syntax Patterns</h2>
            <div className="space-y-4 font-mono text-sm">
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded">
                <div style={{ color: '#00c8ff' }}># Comments</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}># Full line comment</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:value  # Inline comment</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded">
                <div style={{ color: '#00c8ff' }}>[SECTIONS]</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>[SECTION_NAME]</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>[SECTION.subsection]</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded">
                <div style={{ color: '#00c8ff' }}>Key-Value</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:value</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:"value:with:colons"</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded">
                <div style={{ color: '#00c8ff' }}>Lists</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:item1;item2;item3</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:[item1;item2;item3]</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded">
                <div style={{ color: '#00c8ff' }}>Objects</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:{'{k=v;k2=v2}'}</div>
                <div style={{ color: '#f0f0f0', opacity: 0.9 }}>key:{'{k=v;nested:{x=y}}'}</div>
              </div>
            </div>
          </section>

          {/* Types */}
          <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Type System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-4 rounded">
                <div className="font-bold mb-2" style={{ color: '#00c8ff' }}>Primitives</div>
                <div className="font-mono text-sm space-y-1" style={{ color: '#f0f0f0', opacity: 0.9 }}>
                  <div>str, int, float, bool</div>
                  <div>uuid, ts, hex, vec, bits</div>
                </div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-4 rounded">
                <div className="font-bold mb-2" style={{ color: '#00c8ff' }}>Collections</div>
                <div className="font-mono text-sm space-y-1" style={{ color: '#f0f0f0', opacity: 0.9 }}>
                  <div>[type] - Array</div>
                  <div>{'{key:type}'} - Object</div>
                  <div>type|type2 - Union</div>
                </div>
              </div>
            </div>
          </section>

          {/* Status Codes */}
          <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Status Codes</h2>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>C</span> - Complete</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>P</span> - Planned</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>R</span> - Risk</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>D</span> - Deferred</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>X</span> - Deprecated</div>
            </div>
          </section>

          {/* Common Sections */}
          <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Common Sections</h2>
            <div className="space-y-3 font-mono text-sm">
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>[SCHEMA.name]</span> - Data models</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>[API.category]</span> - API endpoints</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>[FEATURES]</span> - Product features</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>[STACK]</span> - Technology stack</div>
              <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)' }} className="p-3 rounded"><span style={{ color: '#00c8ff' }}>[ARCHITECTURE]</span> - System design</div>
            </div>
          </section>

          {/* Example */}
          <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Quick Example</h2>
            <pre style={{ backgroundColor: 'rgba(0, 12, 24, 0.8)', color: '#f0f0f0', opacity: 0.9 }} className="p-4 rounded font-mono text-sm overflow-x-auto">
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
          <section style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Validation Checklist</h2>
            <ul className="space-y-2" style={{ color: '#f0f0f0', opacity: 0.9 }}>
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
      <footer style={{ borderTopColor: 'rgba(0, 200, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)' }} className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center" style={{ color: '#555555' }}>
          <p>© 2025 MOTH — Open notation standard. MIT License.</p>
        </div>
      </footer>
    </div>
  );
}

