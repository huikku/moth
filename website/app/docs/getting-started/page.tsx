'use client';

import Link from 'next/link';

export default function GettingStartedPage() {
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

        <h1 className="text-5xl font-bold mb-6" style={{ color: '#f0f0f0' }}>Getting Started with MOTH</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Step 1: Learn the Syntax</h2>
            <p className="text-slate-300 mb-4">
              Start with the <Link href="/docs/quick-reference" className="text-amber-400 hover:text-orange-500">Quick Reference</Link> to learn the basic syntax in 5 minutes.
            </p>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
              <p className="font-mono text-sm text-slate-300">
                [SECTION_NAME]<br/>
                key:value<br/>
                key:item1;item2;item3<br/>
                key:{'{k=v;k2=v2}'}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Step 2: Choose Your Use Case</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">📋 PRD</h3>
                <p className="text-slate-400 text-sm">
                  Writing a product specification? Download the PRD template.
                </p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">⚙️ Coding Rules</h3>
                <p className="text-slate-400 text-sm">
                  Creating .cursorrules? Use the rules template.
                </p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">🏗️ Architecture</h3>
                <p className="text-slate-400 text-sm">
                  Documenting your system? Use the architecture template.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Step 3: Download a Template</h2>
            <p className="text-slate-300 mb-4">
              Head to the <Link href="/templates" className="text-amber-400 hover:text-orange-500">Templates</Link> page and download the template that matches your needs.
            </p>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
              <p className="text-slate-300 mb-2">Templates available:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>prd_template.moth</li>
                <li>rules_template.moth</li>
                <li>architecture_template.moth</li>
                <li>api_spec_template.moth</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Step 4: Customize for Your Project</h2>
            <p className="text-slate-300 mb-4">
              Edit the template to match your project, stack, and requirements. Replace the placeholder values with your actual data.
            </p>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
              <p className="font-mono text-sm text-slate-300 mb-4">
                # Before<br/>
                name:YourApp; domain:your_domain<br/>
                <br/>
                # After<br/>
                name:TaskFlow; domain:project_management
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Step 5: Use in Your Project</h2>
            <p className="text-slate-300 mb-4">
              Add your MOTH file to your project and load it in your favorite tool:
            </p>
            <div className="space-y-3">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-2">Cursor</p>
                <p className="text-slate-400 text-sm">Add to .cursorrules or load as context</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-2">Cline</p>
                <p className="text-slate-400 text-sm">Add to project context in settings</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                <p className="font-bold mb-2">ChatGPT / Claude</p>
                <p className="text-slate-400 text-sm">Paste into your chat or upload as file</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Step 6: Learn from Examples</h2>
            <p className="text-slate-300 mb-4">
              Check out real-world examples to see how MOTH is used in practice.
            </p>
            <Link href="/examples" className="inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
              View Examples →
            </Link>
          </section>

          <section className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Keep MOTH files in your project repo (e.g., /rules/prd.moth)</li>
              <li>✓ Update MOTH files as your project evolves</li>
              <li>✓ Use MOTH for all technical documentation</li>
              <li>✓ Combine with kablUI for complete app specs</li>
              <li>✓ Share MOTH files with your team and AI agents</li>
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

