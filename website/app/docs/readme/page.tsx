'use client';

import Link from 'next/link';

export default function ReadmePage() {
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

        <article className="prose prose-invert max-w-none">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#f0f0f0' }}>MOTH (Minimal Overhead Technical Hierarchy)</h1>

          <p className="text-xl mb-8" style={{ color: '#f0f0f0', opacity: 0.9 }}>
            <strong>Compact notation for technical specifications, PRDs, and coding rules</strong><br/>
            <em>Companion to kablUI for complete application specification</em>
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: '#f0f0f0' }}>What is MOTH?</h2>
          <p style={{ color: '#f0f0f0', opacity: 0.9 }} className="mb-4">
            MOTH is a line-based notation system designed for technical documentation that needs to stay in LLM context windows. It compresses verbose specs into dense, scannable formats optimized for AI coding agents.
          </p>

          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-6 my-8">
            <p className="font-semibold mb-4" style={{ color: '#f0f0f0' }}>From the kablUI family:</p>
            <ul className="space-y-2" style={{ color: '#f0f0f0', opacity: 0.9 }}>
              <li><strong>kablUI</strong> → Describe what users SEE (UI components, layouts, interactions)</li>
              <li><strong>MOTH</strong> → Describe what systems DO (APIs, data models, business logic, architecture)</li>
            </ul>
            <p className="mt-4" style={{ color: '#555555' }}>Together, they let you specify entire applications in a fraction of the tokens.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: '#f0f0f0' }}>The Problem</h2>
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', borderColor: 'rgba(0, 200, 255, 0.2)', color: '#f0f0f0', opacity: 0.9 }} className="border rounded-lg p-6 font-mono text-sm mb-8">
            <div>Traditional PRD:           156KB, 42K tokens</div>
            <div>Architecture docs:          89KB, 24K tokens</div>
            <div>.cursorrules:               47KB, 12K tokens</div>
            <div style={{ borderTopColor: 'rgba(0, 200, 255, 0.2)' }} className="border-t my-2 pt-2">Total context used:        292KB, 78K tokens</div>
            <div style={{ color: '#00c8ff' }}>Remaining for code:        122K / 200K tokens (39% wasted!)</div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: '#f0f0f0' }}>The Solution</h2>
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', borderColor: 'rgba(0, 200, 255, 0.2)', color: '#f0f0f0', opacity: 0.9 }} className="border rounded-lg p-6 font-mono text-sm mb-8">
            <div>PRD.moth:                   12KB, 3.5K tokens</div>
            <div>architecture.moth:           8KB, 2.1K tokens</div>
            <div>.cursorrules.moth:           4KB, 1.2K tokens</div>
            <div style={{ borderTopColor: 'rgba(0, 200, 255, 0.2)' }} className="border-t my-2 pt-2">Total context used:         24KB, 6.8K tokens</div>
            <div style={{ color: '#00c8ff' }}>Remaining for code:        193K / 200K tokens (91% efficient!)</div>
          </div>

          <p className="text-lg font-semibold mb-8" style={{ color: '#00c8ff' }}>Result: 91% compression, same information density.</p>

          <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: '#f0f0f0' }}>Use Cases</h2>

          <h3 className="text-2xl font-bold mt-8 mb-3" style={{ color: '#f0f0f0' }}>1. PRDs for AI Agents</h3>
          <p style={{ color: '#f0f0f0', opacity: 0.9 }} className="mb-4">Spec entire products in a format that stays in context while coding.</p>

          <h3 className="text-2xl font-bold mt-8 mb-3" style={{ color: '#f0f0f0' }}>2. Coding Rules (.cursorrules replacement)</h3>
          <p style={{ color: '#f0f0f0', opacity: 0.9 }} className="mb-4">Replace 50KB rules files with 5KB MOTH specs.</p>

          <h3 className="text-2xl font-bold mt-8 mb-3" style={{ color: '#f0f0f0' }}>3. Architecture Docs</h3>
          <p style={{ color: '#f0f0f0', opacity: 0.9 }} className="mb-4">System designs that guide implementation.</p>

          <h3 className="text-2xl font-bold mt-8 mb-3" style={{ color: '#f0f0f0' }}>4. Combined with kablUI</h3>
          <p style={{ color: '#f0f0f0', opacity: 0.9 }} className="mb-4">Full application specification (UI + backend).</p>

          <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: '#f0f0f0' }}>Core Syntax</h2>
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', borderColor: 'rgba(0, 200, 255, 0.2)', color: '#f0f0f0', opacity: 0.9 }} className="border rounded-lg p-6 font-mono text-sm mb-8 overflow-x-auto">
            <pre>{`# Comments start with hash
[SECTION_NAME]           # Sections in ALL_CAPS
key:value                # Primary data pattern
key:value; key2:value2   # Semicolon separation
list:[item1;item2]       # Inline lists
state:{k=v;k2=v2}        # Configuration objects

[SECTION.subsection]     # Hierarchical nesting
  nested_key:value       # 2-space indentation`}</pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4" style={{ color: '#f0f0f0' }}>Getting Started</h2>
          <ol className="space-y-4 mb-8" style={{ color: '#f0f0f0', opacity: 0.9 }}>
            <li><strong>1. Read the Quick Reference</strong> - Learn the syntax in 5 minutes</li>
            <li><strong>2. Download a Template</strong> - Copy a template that fits your needs</li>
            <li><strong>3. Customize</strong> - Edit to match your project</li>
            <li><strong>4. Use</strong> - Load in Cursor, Cline, or your LLM</li>
          </ol>

          <div style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Ready to start?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs/quick-reference" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-6 py-2 font-semibold rounded-lg hover:opacity-90 transition text-center">
                Quick Reference
              </Link>
              <Link href="/templates" style={{ borderColor: '#00c8ff', color: '#00c8ff' }} className="px-6 py-2 border font-semibold rounded-lg hover:opacity-80 transition text-center">
                Download Templates
              </Link>
            </div>
          </div>
        </article>
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

