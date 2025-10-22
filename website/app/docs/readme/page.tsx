'use client';

import Link from 'next/link';

export default function ReadmePage() {
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

        <article className="prose prose-invert max-w-none">
          <h1 className="text-5xl font-bold mb-6">MOTH (Minimal Overhead Technical Hierarchy)</h1>
          
          <p className="text-xl text-slate-300 mb-8">
            <strong>Compact notation for technical specifications, PRDs, and coding rules</strong><br/>
            <em>Companion to kablUI for complete application specification</em>
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What is MOTH?</h2>
          <p className="text-slate-300 mb-4">
            MOTH is a line-based notation system designed for technical documentation that needs to stay in LLM context windows. It compresses verbose specs into dense, scannable formats optimized for AI coding agents.
          </p>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 my-8">
            <p className="font-semibold mb-4">From the kablUI family:</p>
            <ul className="space-y-2 text-slate-300">
              <li><strong>kablUI</strong> → Describe what users SEE (UI components, layouts, interactions)</li>
              <li><strong>MOTH</strong> → Describe what systems DO (APIs, data models, business logic, architecture)</li>
            </ul>
            <p className="mt-4 text-slate-400">Together, they let you specify entire applications in a fraction of the tokens.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Problem</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-8">
            <div>Traditional PRD:           156KB, 42K tokens</div>
            <div>Architecture docs:          89KB, 24K tokens</div>
            <div>.cursorrules:               47KB, 12K tokens</div>
            <div className="border-t border-slate-600 my-2 pt-2">Total context used:        292KB, 78K tokens</div>
            <div className="text-orange-400">Remaining for code:        122K / 200K tokens (39% wasted!)</div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Solution</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-8">
            <div>PRD.moth:                   12KB, 3.5K tokens</div>
            <div>architecture.moth:           8KB, 2.1K tokens</div>
            <div>.cursorrules.moth:           4KB, 1.2K tokens</div>
            <div className="border-t border-slate-600 my-2 pt-2">Total context used:         24KB, 6.8K tokens</div>
            <div className="text-amber-400">Remaining for code:        193K / 200K tokens (91% efficient!)</div>
          </div>

          <p className="text-lg text-amber-400 font-semibold mb-8">Result: 91% compression, same information density.</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Use Cases</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-3">1. PRDs for AI Agents</h3>
          <p className="text-slate-300 mb-4">Spec entire products in a format that stays in context while coding.</p>

          <h3 className="text-2xl font-bold mt-8 mb-3">2. Coding Rules (.cursorrules replacement)</h3>
          <p className="text-slate-300 mb-4">Replace 50KB rules files with 5KB MOTH specs.</p>

          <h3 className="text-2xl font-bold mt-8 mb-3">3. Architecture Docs</h3>
          <p className="text-slate-300 mb-4">System designs that guide implementation.</p>

          <h3 className="text-2xl font-bold mt-8 mb-3">4. Combined with kablUI</h3>
          <p className="text-slate-300 mb-4">Full application specification (UI + backend).</p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Core Syntax</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-8 overflow-x-auto">
            <pre>{`# Comments start with hash
[SECTION_NAME]           # Sections in ALL_CAPS
key:value                # Primary data pattern
key:value; key2:value2   # Semicolon separation
list:[item1;item2]       # Inline lists
state:{k=v;k2=v2}        # Configuration objects

[SECTION.subsection]     # Hierarchical nesting
  nested_key:value       # 2-space indentation`}</pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Getting Started</h2>
          <ol className="space-y-4 text-slate-300 mb-8">
            <li><strong>1. Read the Quick Reference</strong> - Learn the syntax in 5 minutes</li>
            <li><strong>2. Download a Template</strong> - Copy a template that fits your needs</li>
            <li><strong>3. Customize</strong> - Edit to match your project</li>
            <li><strong>4. Use</strong> - Load in Cursor, Cline, or your LLM</li>
          </ol>

          <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs/quick-reference" className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition text-center">
                Quick Reference
              </Link>
              <Link href="/templates" className="px-6 py-2 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition text-center">
                Download Templates
              </Link>
            </div>
          </div>
        </article>
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

