'use client';

import Link from 'next/link';

export default function GettingStartedPage() {
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
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", textAlign: 'center', lineHeight: '1.3' }}>Getting Started with MOTH</h1>

          <div className="space-y-16" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Step 1: Learn the Syntax</h2>
              <p className="mb-6" style={{ color: '#cccccc', lineHeight: '2.0' }}>
                Start with the <Link href="/docs/quick-reference" style={{ color: '#ffffff' }} className="hover:opacity-80">Quick Reference</Link> to learn the basic syntax in 5 minutes.
              </p>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <p className="font-mono text-sm" style={{ color: '#cccccc' }}>
                  [SECTION_NAME]<br/>
                  key:value<br/>
                  key:item1;item2;item3<br/>
                  key:{'{k=v;k2=v2}'}
                </p>
              </div>
            </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Step 2: Choose Your Use Case</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff' }}>📋 PRD</h3>
                <p className="text-sm" style={{ color: '#888888', lineHeight: '1.7' }}>
                  Writing a product specification? MOTH helps structure your requirements clearly.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff' }}>⚙️ Coding Rules</h3>
                <p className="text-sm" style={{ color: '#888888', lineHeight: '1.7' }}>
                  Creating .cursorrules? MOTH provides a clean format for AI instructions.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff' }}>🏗️ Architecture</h3>
                <p className="text-sm" style={{ color: '#888888', lineHeight: '1.7' }}>
                  Documenting your system? MOTH makes architecture docs scannable and clear.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Step 3: Write Your Content</h2>
            <p className="mb-4" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              Start with a simple structure and build from there. Check out the <Link href="/examples" style={{ color: '#ffffff' }} className="hover:opacity-80">Examples</Link> page to see real-world MOTH files.
            </p>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
              <p className="font-mono text-sm mb-4" style={{ color: '#cccccc' }}>
                # Example MOTH structure<br/>
                name:TaskFlow; domain:project_management<br/>
                <br/>
                ## Overview<br/>
                A task management app for teams...<br/>
                <br/>
                ## Features<br/>
                - Task creation and assignment<br/>
                - Real-time collaboration
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Step 4: Use in Your Project</h2>
            <p className="mb-4" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              Add your MOTH file to your project and load it in your favorite tool:
            </p>
            <div className="space-y-4">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>Cursor</p>
                <p className="text-sm" style={{ color: '#888888' }}>Add to .cursorrules or load as context</p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>Cline</p>
                <p className="text-sm" style={{ color: '#888888' }}>Add to project context in settings</p>
              </div>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-4">
                <p className="font-bold mb-2" style={{ color: '#ffffff' }}>ChatGPT / Claude</p>
                <p className="text-sm" style={{ color: '#888888' }}>Paste into your chat or upload as file</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Step 6: Learn from Examples</h2>
            <p className="mb-4" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              Check out real-world examples to see how MOTH is used in practice.
            </p>
            <Link href="/examples" className="inline-block px-6 py-2 font-semibold rounded-lg transition" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }}>
              View Examples →
            </Link>
          </section>

          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Pro Tips</h2>
            <ul className="space-y-3" style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>✓ Keep MOTH files in your project repo (e.g., /rules/prd.moth)</li>
              <li>✓ Update MOTH files as your project evolves</li>
              <li>✓ Use MOTH for all technical documentation</li>
              <li>✓ Combine with kablUI for complete app specs</li>
              <li>✓ Share MOTH files with your team and AI agents</li>
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

