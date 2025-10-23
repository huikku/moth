'use client';

import Link from 'next/link';

export default function SpecPage() {
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
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", textAlign: 'center', lineHeight: '1.3' }}>MOTH v1.0 Specification</h1>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6 mb-12">
            <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }}>
              <strong>Full technical specification</strong> for implementers and advanced users. This document covers all syntax rules, type systems, validation requirements, and best practices.
            </p>
          </div>

          <div className="space-y-8" style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Abstract</h2>
            <p style={{ lineHeight: '1.8' }}>
              MOTH (Minimal Overhead Technical Hierarchy) is a line-based notation system for technical documentation optimized for LLM context efficiency. It achieves 90%+ compression versus traditional markdown while preserving full semantic information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Design Goals</h2>
            <ul className="list-disc list-inside space-y-3" style={{ lineHeight: '1.8' }}>
              <li>Maximum information density</li>
              <li>LLM-native parsing</li>
              <li>Human readable/writable</li>
              <li>Minimal syntax overhead</li>
              <li>Self-documenting structure</li>
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>File Format</h2>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
              <p className="mb-5" style={{ lineHeight: '2.0' }}><strong>Extensions:</strong></p>
              <ul className="list-disc list-inside space-y-3 mb-6" style={{ lineHeight: '2.0' }}>
                <li>.moth - Primary extension</li>
                <li>.str - Alternative (STRAND)</li>
                <li>.spex - Specification variant</li>
              </ul>
              <p className="mb-5" style={{ lineHeight: '2.0' }}><strong>MIME Types:</strong></p>
              <ul className="list-disc list-inside space-y-3" style={{ lineHeight: '2.0' }}>
                <li>text/x-moth</li>
                <li>text/x-moth+plain</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Core Syntax</h2>
            <div className="space-y-8">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Comments</h3>
                <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded text-sm overflow-x-auto">
{`# Full line comment
key:value  # Inline comment (after 2+ spaces)`}
                </pre>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Sections</h3>
                <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded text-sm overflow-x-auto">
{`[SECTION_NAME]           # Top-level, ALL_CAPS
[SECTION.subsection]     # Dot notation for hierarchy
[SECTION.sub.deep]       # Multiple levels`}
                </pre>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Key-Value Pairs</h3>
                <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded text-sm overflow-x-auto">
{`key:value                     # Primary pattern
multi_word_key:value          # Underscores for spaces
key:"value:with:colons"       # Quotes for special chars`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Type System</h2>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
              <p className="mb-4" style={{ lineHeight: '1.7' }}><strong>Primitives:</strong></p>
              <p className="font-mono text-sm mb-4" style={{ lineHeight: '1.7' }}>str; int; float; bool; uuid; ts; hex; vec; bits; blob</p>
              <p className="mb-4" style={{ lineHeight: '1.7' }}><strong>Collections:</strong></p>
              <ul className="list-disc list-inside space-y-2" style={{ lineHeight: '1.7' }}>
                <li>[type] - Array</li>
                <li>{'{key:type}'} - Object/map</li>
                <li>type|type2 - Union</li>
              </ul>
            </div>
          </section>

          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Need the full spec?</h3>
            <p className="mb-4" style={{ lineHeight: '1.7' }}>
              The complete specification with all syntax rules, validation requirements, and examples is available in the documentation repository.
            </p>
            <a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 font-semibold rounded-lg transition" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }}>
              View on GitHub →
            </a>
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

