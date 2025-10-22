'use client';

import Link from 'next/link';

export default function DocsPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-slate-300 mb-12">Learn everything about MOTH notation and how to use it.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* README */}
          <Link href="/docs/readme" className="group">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition h-full">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">README</h3>
              <p className="text-slate-400 mb-4">
                Start here! Marketing-focused introduction to MOTH with quick examples and use cases.
              </p>
              <span className="text-amber-400 font-semibold">Read →</span>
            </div>
          </Link>

          {/* SPEC */}
          <Link href="/docs/spec" className="group">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition h-full">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">Full Specification</h3>
              <p className="text-slate-400 mb-4">
                Complete technical specification for implementers and advanced users.
              </p>
              <span className="text-amber-400 font-semibold">Read →</span>
            </div>
          </Link>

          {/* Quick Reference */}
          <Link href="/docs/quick-reference" className="group">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition h-full">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">Quick Reference</h3>
              <p className="text-slate-400 mb-4">
                One-page cheat sheet for quick syntax lookups. Print and keep near your keyboard!
              </p>
              <span className="text-amber-400 font-semibold">Read →</span>
            </div>
          </Link>

          {/* Integration Guide */}
          <Link href="/docs/integration" className="group">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition h-full">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">Integration Guide</h3>
              <p className="text-slate-400 mb-4">
                For IDE vendors and plugin developers. Learn how to integrate MOTH into your tools.
              </p>
              <span className="text-amber-400 font-semibold">Read →</span>
            </div>
          </Link>

          {/* Getting Started */}
          <Link href="/docs/getting-started" className="group">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition h-full">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">Getting Started</h3>
              <p className="text-slate-400 mb-4">
                Step-by-step guide to start using MOTH in your projects today.
              </p>
              <span className="text-amber-400 font-semibold">Read →</span>
            </div>
          </Link>

          {/* Onboarding Prompt */}
          <Link href="/docs/onboarding" className="group">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition h-full">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">LLM Onboarding</h3>
              <p className="text-slate-400 mb-4">
                Paste this into your LLM to teach it MOTH format. Works with ChatGPT, Claude, and more.
              </p>
              <span className="text-amber-400 font-semibold">Read →</span>
            </div>
          </Link>
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

