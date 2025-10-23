'use client';

import Link from 'next/link';

export default function ReadmePage() {
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

        <article className="prose prose-invert max-w-none" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '2.0' }}>
          <h1 className="text-5xl font-bold mb-8" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", textAlign: 'center', lineHeight: '1.3' }}>MOTH (Machine-Optimized Text Hierarchy)</h1>

          <p className="text-xl mb-12" style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", textAlign: 'center', lineHeight: '1.7' }}>
            <strong>Compact notation for technical specifications, PRDs, and coding rules</strong><br/>
            <em>Companion to kablUI for complete application specification</em>
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>What is MOTH?</h2>
          <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }} className="mb-8">
            MOTH is a line-based notation system designed for technical documentation that needs to stay in LLM context windows. It compresses verbose specs into dense, scannable formats optimized for AI coding agents.
          </p>

          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6 my-12">
            <p className="font-semibold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>From the kablUI family:</p>
            <ul className="space-y-4" style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }}>
              <li><strong>kablUI</strong> → Describe what users SEE (UI components, layouts, interactions)</li>
              <li><strong>MOTH</strong> → Describe what systems DO (APIs, data models, business logic, architecture)</li>
            </ul>
            <p className="mt-6" style={{ color: '#888888', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '1.8' }}>Together, they let you specify entire applications in a fraction of the tokens.</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>The Problem</h2>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#cccccc', opacity: 0.9, lineHeight: '2.0' }} className="border rounded-lg p-6 font-mono text-sm mb-10">
            <div>Traditional PRD:           156KB, 42K tokens</div>
            <div>Architecture docs:          89KB, 24K tokens</div>
            <div>.cursorrules:               47KB, 12K tokens</div>
            <div style={{ borderTopColor: 'rgba(255, 255, 255, 0.2)' }} className="border-t my-2 pt-2">Total context used:        292KB, 78K tokens</div>
            <div style={{ color: '#ffffff' }}>Remaining for code:        122K / 200K tokens (39% wasted!)</div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>The Solution</h2>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#cccccc', opacity: 0.9, lineHeight: '2.0' }} className="border rounded-lg p-6 font-mono text-sm mb-10">
            <div>PRD.moth:                   12KB, 3.5K tokens</div>
            <div>architecture.moth:           8KB, 2.1K tokens</div>
            <div>.cursorrules.moth:           4KB, 1.2K tokens</div>
            <div style={{ borderTopColor: 'rgba(255, 255, 255, 0.2)' }} className="border-t my-3 pt-3">Total context used:         24KB, 6.8K tokens</div>
            <div style={{ color: '#ffffff' }}>Remaining for code:        193K / 200K tokens (91% efficient!)</div>
          </div>

          <p className="text-lg font-semibold mb-12" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.5' }}>Result: 91% compression, same information density.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Use Cases</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>1. PRDs for AI Agents</h3>
          <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }} className="mb-8">Spec entire products in a format that stays in context while coding.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>2. Coding Rules (.cursorrules replacement)</h3>
          <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }} className="mb-8">Replace 50KB rules files with 5KB MOTH specs.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>3. Architecture Docs</h3>
          <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }} className="mb-8">System designs that guide implementation.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>4. Combined with kablUI</h3>
          <p style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }} className="mb-8">Full application specification (UI + backend).</p>

          <h2 className="text-3xl font-bold mt-16 mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Core Syntax</h2>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#cccccc', opacity: 0.9, lineHeight: '2.0' }} className="border rounded-lg p-6 font-mono text-sm mb-10 overflow-x-auto">
            <pre>{`# Comments start with hash
[SECTION_NAME]           # Sections in ALL_CAPS
key:value                # Primary data pattern
key:value; key2:value2   # Semicolon separation
list:[item1;item2]       # Inline lists
state:{k=v;k2=v2}        # Configuration objects

[SECTION.subsection]     # Hierarchical nesting
  nested_key:value       # 2-space indentation`}</pre>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Getting Started</h2>
          <ol className="space-y-5 mb-10" style={{ color: '#cccccc', opacity: 0.9, fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }}>
            <li><strong>1. Read the Quick Reference</strong> - Learn the syntax in 5 minutes</li>
            <li><strong>2. Check Examples</strong> - Review real-world MOTH files for inspiration</li>
            <li><strong>3. Customize</strong> - Edit to match your project</li>
            <li><strong>4. Use</strong> - Load in Cursor, Cline, or your LLM</li>
          </ol>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8 mt-16">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif" }}>Ready to start?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs/quick-reference" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }} className="px-6 py-2 font-semibold rounded-lg hover:opacity-90 transition text-center">
                Quick Reference
              </Link>
              <Link href="/examples" style={{ borderColor: '#ffffff', color: '#ffffff' }} className="px-6 py-2 border font-semibold rounded-lg hover:opacity-80 transition text-center">
                View Examples
              </Link>
            </div>
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

