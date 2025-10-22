'use client';

import Link from 'next/link';

export default function SpecPage() {
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

        <h1 className="text-5xl font-bold mb-6">MOTH v1.0 Specification</h1>
        
        <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-6 mb-8">
          <p className="text-slate-300">
            <strong>Full technical specification</strong> for implementers and advanced users. This document covers all syntax rules, type systems, validation requirements, and best practices.
          </p>
        </div>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-3xl font-bold mb-4">Abstract</h2>
            <p>
              MOTH (Minimal Overhead Technical Hierarchy) is a line-based notation system for technical documentation optimized for LLM context efficiency. It achieves 90%+ compression versus traditional markdown while preserving full semantic information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Design Goals</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Maximum information density</li>
              <li>LLM-native parsing</li>
              <li>Human readable/writable</li>
              <li>Minimal syntax overhead</li>
              <li>Self-documenting structure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">File Format</h2>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
              <p className="mb-4"><strong>Extensions:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>.moth - Primary extension</li>
                <li>.str - Alternative (STRAND)</li>
                <li>.spex - Specification variant</li>
              </ul>
              <p className="mb-4"><strong>MIME Types:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>text/x-moth</li>
                <li>text/x-moth+plain</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Core Syntax</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Comments</h3>
                <pre className="bg-slate-900/50 p-3 rounded text-sm overflow-x-auto">
{`# Full line comment
key:value  # Inline comment (after 2+ spaces)`}
                </pre>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Sections</h3>
                <pre className="bg-slate-900/50 p-3 rounded text-sm overflow-x-auto">
{`[SECTION_NAME]           # Top-level, ALL_CAPS
[SECTION.subsection]     # Dot notation for hierarchy
[SECTION.sub.deep]       # Multiple levels`}
                </pre>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Key-Value Pairs</h3>
                <pre className="bg-slate-900/50 p-3 rounded text-sm overflow-x-auto">
{`key:value                     # Primary pattern
multi_word_key:value          # Underscores for spaces
key:"value:with:colons"       # Quotes for special chars`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Type System</h2>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
              <p className="mb-4"><strong>Primitives:</strong></p>
              <p className="font-mono text-sm mb-4">str; int; float; bool; uuid; ts; hex; vec; bits; blob</p>
              <p className="mb-4"><strong>Collections:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>[type] - Array</li>
                <li>{'{key:type}'} - Object/map</li>
                <li>type|type2 - Union</li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need the full spec?</h3>
            <p className="mb-4">
              The complete specification with all syntax rules, validation requirements, and examples is available in the documentation repository.
            </p>
            <a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
              View on GitHub →
            </a>
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

