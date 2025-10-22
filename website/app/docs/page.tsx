'use client';

import Link from 'next/link';

export default function DocsPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Documentation</h1>
        <p className="text-xl mb-12" style={{ color: '#f0f0f0', opacity: 0.9 }}>Learn everything about MOTH notation and how to use it.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* README */}
          <Link href="/docs/readme" className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition h-full">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f0f0f0' }}>README</h3>
              <p style={{ color: '#555555' }} className="mb-4">
                Start here! Marketing-focused introduction to MOTH with quick examples and use cases.
              </p>
              <span style={{ color: '#00c8ff' }} className="font-semibold">Read →</span>
            </div>
          </Link>

          {/* SPEC */}
          <Link href="/docs/spec" className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition h-full">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f0f0f0' }}>Full Specification</h3>
              <p style={{ color: '#555555' }} className="mb-4">
                Complete technical specification for implementers and advanced users.
              </p>
              <span style={{ color: '#00c8ff' }} className="font-semibold">Read →</span>
            </div>
          </Link>

          {/* Quick Reference */}
          <Link href="/docs/quick-reference" className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition h-full">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f0f0f0' }}>Quick Reference</h3>
              <p style={{ color: '#555555' }} className="mb-4">
                One-page cheat sheet for quick syntax lookups. Print and keep near your keyboard!
              </p>
              <span style={{ color: '#00c8ff' }} className="font-semibold">Read →</span>
            </div>
          </Link>

          {/* Integration Guide */}
          <Link href="/docs/integration" className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition h-full">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f0f0f0' }}>Integration Guide</h3>
              <p style={{ color: '#555555' }} className="mb-4">
                For IDE vendors and plugin developers. Learn how to integrate MOTH into your tools.
              </p>
              <span style={{ color: '#00c8ff' }} className="font-semibold">Read →</span>
            </div>
          </Link>

          {/* Getting Started */}
          <Link href="/docs/getting-started" className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition h-full">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f0f0f0' }}>Getting Started</h3>
              <p style={{ color: '#555555' }} className="mb-4">
                Step-by-step guide to start using MOTH in your projects today.
              </p>
              <span style={{ color: '#00c8ff' }} className="font-semibold">Read →</span>
            </div>
          </Link>

          {/* Onboarding Prompt */}
          <Link href="/docs/onboarding" className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition h-full">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f0f0f0' }}>LLM Onboarding</h3>
              <p style={{ color: '#555555' }} className="mb-4">
                Paste this into your LLM to teach it MOTH format. Works with ChatGPT, Claude, and more.
              </p>
              <span style={{ color: '#00c8ff' }} className="font-semibold">Read →</span>
            </div>
          </Link>
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

