'use client';

import Link from 'next/link';

export default function QuickReferencePage() {
  return (
    <div style={{ backgroundColor: 'transparent', color: '#f0f0f0' }} className="min-h-screen">
      {/* Background Video and Overlay */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/moth/moths-slowmo.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />

      {/* Header */}
      <header style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }} className="border-b backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <span style={{ fontFamily: "'Doto', sans-serif", fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, letterSpacing: '0.5px' }}>
              &lt;&#123;[ALIENROBOT]&#125;&gt;
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 ml-auto">
            <Link href="/" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Home</Link>
            <Link href="/docs" style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem 4rem', position: 'relative', zIndex: 1 }}>
        <div className="mb-8" style={{ textAlign: 'center' }}>
          <Link href="/docs" style={{ color: '#ffffff' }} className="hover:opacity-80 transition">← Back to Docs</Link>
        </div>

        <article style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '2.0' }}>
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", textAlign: 'center', lineHeight: '1.3' }}>Quick Reference</h1>
          <p className="text-xl mb-8" style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", textAlign: 'center', lineHeight: '1.7' }}>One-page cheat sheet for MOTH syntax. Print and keep near your keyboard!</p>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6 mb-16">
            <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0', textAlign: 'center' }}>
              <strong>Remember:</strong> MOTH is a BLUEPRINT, not a specification. Add detail only where ambiguity would cause architectural problems. Target 80% compression.
            </p>
          </div>

          <div className="space-y-12" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
          {/* Syntax */}
          <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Syntax Patterns</h2>
            <div className="space-y-5 font-mono text-sm">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-3 rounded">
                <div style={{ color: '#ffffff' }}># Comments</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}># Full line comment</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:value  # Inline comment</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-3 rounded">
                <div style={{ color: '#ffffff' }}>[SECTIONS]</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>[SECTION_NAME]</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>[SECTION.subsection]</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-3 rounded">
                <div style={{ color: '#ffffff' }}>Key-Value</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:value</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:"value:with:colons"</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-3 rounded">
                <div style={{ color: '#ffffff' }}>Lists</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:item1;item2;item3</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:[item1;item2;item3]</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-3 rounded">
                <div style={{ color: '#ffffff' }}>Objects</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:{'{k=v;k2=v2}'}</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>key:{'{k=v;nested:{x=y}}'}</div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-3 rounded">
                <div style={{ color: '#ffffff' }}>Modality & Relationships</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>*required_field:type</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>(optional_field):type</div>
                <div style={{ color: '#cccccc', opacity: 0.9 }}>field→table.id  # foreign key</div>
              </div>
            </div>
          </section>

          {/* Types */}
          <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Type System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-4 rounded">
                <div className="font-bold mb-2" style={{ color: '#ffffff' }}>Primitives</div>
                <div className="font-mono text-sm space-y-1" style={{ color: '#cccccc', opacity: 0.9 }}>
                  <div>string, int, float, bool</div>
                  <div>uuid, timestamp, jsonb</div>
                </div>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="p-4 rounded">
                <div className="font-bold mb-2" style={{ color: '#ffffff' }}>Collections</div>
                <div className="font-mono text-sm space-y-1" style={{ color: '#cccccc', opacity: 0.9 }}>
                  <div>[type] - Array</div>
                  <div>{'{key:type}'} - Object</div>
                  <div>type|type2 - Union</div>
                  <div>enum[a,b,c] - Enumeration</div>
                </div>
              </div>
            </div>
          </section>

          {/* Status Codes */}
          <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Status Codes</h2>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>C</span> - Complete</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>P</span> - Planned</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>R</span> - Risk</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>D</span> - Deferred</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>X</span> - Deprecated</div>
            </div>
          </section>

          {/* Common Sections */}
          <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Common Sections</h2>
            <div className="space-y-3 font-mono text-sm">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>[SCHEMAS]</span> - Data models with relationships</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>[API]</span> - Endpoint inventory</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>[FEATURES]</span> - Requirements to implement</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>[WORKFLOWS]</span> - State machines for complex flows</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>[STACK]</span> - Technology stack</div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded"><span style={{ color: '#ffffff' }}>[RISKS]</span> - Known issues and mitigations</div>
            </div>
          </section>

          {/* Schema Example */}
          <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Schema Example</h2>
            <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc', opacity: 0.9 }} className="p-4 rounded font-mono text-sm overflow-x-auto">
{`[SCHEMAS]
users:{
  *id:uuid;
  *email:string;
  (phone):string;
  *role:enum[admin,user,guest];
  *tenant_id→tenants.id;
  settings:jsonb
}

orders:{
  *id:uuid;
  *user_id→users.id;
  *status:enum[pending,paid,shipped];
  *total:float;
  *created_at:timestamp
}`}
            </pre>
          </section>

          {/* Workflow Example */}
          <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Workflow Example</h2>
            <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc', opacity: 0.9 }} className="p-4 rounded font-mono text-sm overflow-x-auto">
{`[WORKFLOWS]
order_lifecycle:{
  initial:pending;
  pending→paid[on:payment_success];
  paid→shipped[on:fulfillment];
  any→cancelled[on:user_cancel,if:not_shipped]
}`}
            </pre>
          </section>

          {/* Validation Checklist */}
          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Validation Checklist</h2>
            <ul className="space-y-3" style={{ color: '#cccccc', opacity: 0.9, lineHeight: '1.8' }}>
              <li>✓ File starts with header metadata</li>
              <li>✓ At least one [SECTION]</li>
              <li>✓ Valid key:value syntax</li>
              <li>✓ Proper quote escaping</li>
              <li>✓ Consistent indentation (2 spaces)</li>
              <li>✓ No trailing whitespace</li>
            </ul>
          </section>
        </div>
        </article>
      </div>

      {/* Footer */}
      <footer style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)', position: 'relative', zIndex: 10 }} className="border-t mt-20">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
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
                <li><Link href="/docs/quick-reference" className="hover:opacity-100">Quick Reference</Link></li>
                <li><Link href="/docs/spec" className="hover:opacity-100">Full Spec</Link></li>
                <li><Link href="/docs/integration" className="hover:opacity-100">Integration Guide</Link></li>
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
          <div style={{ color: '#888888', borderTopColor: 'rgba(255, 255, 255, 0.1)', borderTopWidth: '1px', paddingTop: '2rem', textAlign: 'center' }}>
            <p>© 2025 John Huikku • Alienrobot LLC • <a href="https://www.alienrobot.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }} className="hover:opacity-70">www.alienrobot.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

