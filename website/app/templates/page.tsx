'use client';

import Link from 'next/link';

const templates = [
  {
    id: 'prd-template',
    title: 'PRD Template',
    description: 'Comprehensive template for product requirements documents',
    icon: '📋',
    downloadName: 'prd_template.moth',
  },
  {
    id: 'rules-template',
    title: 'Coding Rules Template',
    description: 'Template for .cursorrules and coding standards',
    icon: '⚙️',
    downloadName: 'rules_template.moth',
  },
  {
    id: 'architecture-template',
    title: 'Architecture Template',
    description: 'Template for system architecture documentation',
    icon: '🏗️',
    downloadName: 'architecture_template.moth',
  },
  {
    id: 'api-template',
    title: 'API Specification Template',
    description: 'Template for API endpoint specifications',
    icon: '🔌',
    downloadName: 'api_spec_template.moth',
  },
];

export default function TemplatesPage() {
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
            <Link href="/docs" className="text-slate-300 hover:text-white transition">Docs</Link>
            <Link href="/examples" className="text-slate-300 hover:text-white transition">Examples</Link>
            <Link href="/templates" className="text-amber-400 font-semibold">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4">Templates</h1>
        <p className="text-xl text-slate-300 mb-12">Ready-to-use templates for common MOTH documents. Copy and customize for your projects.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {templates.map((template) => (
            <div key={template.id} className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-amber-400/50 hover:bg-slate-800/50 transition">
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
              <p className="text-slate-400 mb-6">{template.description}</p>
              <button className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
                Download
              </button>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <section className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">How to Use Templates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-3">1. Download</div>
              <p className="text-slate-400">
                Click the download button to get the template file for your use case.
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-3">2. Customize</div>
              <p className="text-slate-400">
                Edit the template to match your project, stack, and requirements.
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-3">3. Use</div>
              <p className="text-slate-400">
                Add to your project and load in Cursor, Cline, or your favorite LLM.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              <strong>For PRDs:</strong> Download the PRD template, fill in your product details, features, and tech stack.
            </p>
            <p>
              <strong>For Coding Rules:</strong> Download the rules template, customize for your language and framework.
            </p>
            <p>
              <strong>For Architecture:</strong> Download the architecture template, describe your services and data flows.
            </p>
            <p className="pt-4">
              <strong>Pro tip:</strong> Check out the <Link href="/examples" className="text-amber-400 hover:text-orange-500 transition">examples</Link> to see how real projects use MOTH.
            </p>
          </div>
        </section>
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

