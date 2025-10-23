'use client';

import Link from 'next/link';

export default function IntegrationPage() {
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
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div style={{ backgroundColor: '#ffffff', color: '#080808' }} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm">M</div>
            <h1 className="text-lg font-bold" style={{ color: '#ffffff' }}>MOTH</h1>
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
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", textAlign: 'center', lineHeight: '1.3' }}>Integration Guide</h1>
          <p className="text-xl mb-16" style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", textAlign: 'center', lineHeight: '1.7' }}>
            For IDE vendors and plugin developers. Learn how to integrate MOTH into your tools.
          </p>

          <div className="space-y-12" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Integration Levels</h2>
            <p className="mb-6" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              MOTH can be integrated at different levels depending on your needs:
            </p>

            <div className="space-y-6">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Level 1: Basic Recognition</h3>
                <p style={{ color: '#888888', lineHeight: '1.7' }}>
                  Recognize .moth files and apply syntax highlighting. Minimal effort, maximum compatibility.
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Level 2: Syntax Highlighting</h3>
                <p style={{ color: '#888888', lineHeight: '1.7' }}>
                  Full syntax highlighting for MOTH syntax elements: sections, keys, values, types.
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Level 3: Validation & Linting</h3>
                <p style={{ color: '#888888', lineHeight: '1.7' }}>
                  Validate MOTH syntax, check for common errors, provide linting feedback.
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Level 4: Full IDE Support</h3>
                <p style={{ color: '#888888', lineHeight: '1.7' }}>
                  Code completion, hover documentation, refactoring, and advanced features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Syntax Highlighting</h2>
            <p className="mb-4" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              MOTH uses a simple, regex-friendly syntax that's easy to highlight:
            </p>

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#cccccc' }} className="border rounded-lg p-6 font-mono text-sm space-y-2">
              <div><span style={{ color: '#88ff88' }}># Comments</span> - Lines starting with #</div>
              <div><span style={{ color: '#88ccff' }}>[SECTIONS]</span> - Text in square brackets</div>
              <div><span style={{ color: '#ffcc88' }}>key:</span> - Identifiers before colons</div>
              <div><span style={{ color: '#cccccc' }}>value</span> - Text after colons</div>
              <div><span style={{ color: '#ff88ff' }}>;</span> - Semicolon separators</div>
              <div><span style={{ color: '#88ffff' }}>{'{k=v}'}</span> - Configuration objects</div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Validation Rules</h2>
            <p className="mb-4" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              Implement these validation rules for MOTH files:
            </p>

            <div className="space-y-4">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>✓ File must start with header metadata</p>
                <p className="text-sm" style={{ color: '#888888' }}>intent:...; audience:...; style:...</p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>✓ At least one [SECTION]</p>
                <p className="text-sm" style={{ color: '#888888' }}>Sections must be in ALL_CAPS</p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>✓ Valid key:value syntax</p>
                <p className="text-sm" style={{ color: '#888888' }}>Keys must be snake_case, values until newline or semicolon</p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>✓ Proper quote escaping</p>
                <p className="text-sm" style={{ color: '#888888' }}>Use quotes for values with colons or semicolons</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>File Format</h2>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
              <p className="font-bold mb-3" style={{ color: '#ffffff' }}>Extensions:</p>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: '#888888' }}>
                <li>.moth - Primary extension</li>
                <li>.str - Alternative (STRAND)</li>
                <li>.spex - Specification variant</li>
              </ul>

              <p className="font-bold mb-3" style={{ color: '#ffffff' }}>MIME Types:</p>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: '#888888' }}>
                <li>text/x-moth</li>
                <li>text/x-moth+plain</li>
              </ul>

              <p className="font-bold mb-3" style={{ color: '#ffffff' }}>Encoding:</p>
              <p style={{ color: '#888888' }}>UTF-8 required</p>
            </div>
          </section>

          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Resources for Developers</h2>
            <ul className="space-y-3" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>✓ <Link href="/docs/spec" style={{ color: '#ffffff' }} className="hover:opacity-80">Full Specification</Link> - Complete syntax reference</li>
              <li>✓ <Link href="/docs/quick-reference" style={{ color: '#ffffff' }} className="hover:opacity-80">Quick Reference</Link> - Syntax cheat sheet</li>
              <li>✓ <Link href="/examples" style={{ color: '#ffffff' }} className="hover:opacity-80">Examples</Link> - Real-world MOTH files</li>
              <li>✓ <a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }} className="hover:opacity-80">GitHub Repository</a> - Source and issues</li>
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

