'use client';

import Link from 'next/link';

export default function IntegrationPage() {
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

        <h1 className="text-5xl font-bold mb-6" style={{ color: '#f0f0f0' }}>Integration Guide</h1>
        <p className="text-xl mb-12" style={{ color: '#f0f0f0', opacity: 0.9 }}>
          For IDE vendors and plugin developers. Learn how to integrate MOTH into your tools.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Integration Levels</h2>
            <p className="text-slate-300 mb-6">
              MOTH can be integrated at different levels depending on your needs:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Level 1: Basic Recognition</h3>
                <p className="text-slate-400">
                  Recognize .moth files and apply syntax highlighting. Minimal effort, maximum compatibility.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Level 2: Syntax Highlighting</h3>
                <p className="text-slate-400">
                  Full syntax highlighting for MOTH syntax elements: sections, keys, values, types.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Level 3: Validation & Linting</h3>
                <p className="text-slate-400">
                  Validate MOTH syntax, check for common errors, provide linting feedback.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Level 4: Full IDE Support</h3>
                <p className="text-slate-400">
                  Code completion, hover documentation, refactoring, and advanced features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Syntax Highlighting</h2>
            <p className="text-slate-300 mb-4">
              MOTH uses a simple, regex-friendly syntax that's easy to highlight:
            </p>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 font-mono text-sm space-y-2">
              <div><span className="text-green-400"># Comments</span> - Lines starting with #</div>
              <div><span className="text-blue-400">[SECTIONS]</span> - Text in square brackets</div>
              <div><span className="text-amber-400">key:</span> - Identifiers before colons</div>
              <div><span className="text-slate-300">value</span> - Text after colons</div>
              <div><span className="text-purple-400">;</span> - Semicolon separators</div>
              <div><span className="text-cyan-400">{'{k=v}'}</span> - Configuration objects</div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Validation Rules</h2>
            <p className="text-slate-300 mb-4">
              Implement these validation rules for MOTH files:
            </p>

            <div className="space-y-3">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-1">✓ File must start with header metadata</p>
                <p className="text-slate-400 text-sm">intent:...; audience:...; style:...</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-1">✓ At least one [SECTION]</p>
                <p className="text-slate-400 text-sm">Sections must be in ALL_CAPS</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-1">✓ Valid key:value syntax</p>
                <p className="text-slate-400 text-sm">Keys must be snake_case, values until newline or semicolon</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-1">✓ Proper quote escaping</p>
                <p className="text-slate-400 text-sm">Use quotes for values with colons or semicolons</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">File Format</h2>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
              <p className="font-bold mb-3">Extensions:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 mb-4">
                <li>.moth - Primary extension</li>
                <li>.str - Alternative (STRAND)</li>
                <li>.spex - Specification variant</li>
              </ul>

              <p className="font-bold mb-3">MIME Types:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 mb-4">
                <li>text/x-moth</li>
                <li>text/x-moth+plain</li>
              </ul>

              <p className="font-bold mb-3">Encoding:</p>
              <p className="text-slate-400">UTF-8 required</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Resources for Developers</h2>
            <ul className="space-y-2 text-slate-300">
              <li>✓ <Link href="/docs/spec" className="text-amber-400 hover:text-orange-500">Full Specification</Link> - Complete syntax reference</li>
              <li>✓ <Link href="/docs/quick-reference" className="text-amber-400 hover:text-orange-500">Quick Reference</Link> - Syntax cheat sheet</li>
              <li>✓ <Link href="/examples" className="text-amber-400 hover:text-orange-500">Examples</Link> - Real-world MOTH files</li>
              <li>✓ <a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500">GitHub Repository</a> - Source and issues</li>
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

