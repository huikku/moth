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
            <Link href="/docs" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Examples</Link>
            <Link href="/templates" style={{ color: '#00c8ff' }} className="font-semibold">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Templates</h1>
        <p className="text-xl mb-12" style={{ color: '#f0f0f0', opacity: 0.9 }}>Ready-to-use templates for common MOTH documents. Copy and customize for your projects.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {templates.map((template) => (
            <div key={template.id} style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition">
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f0f0f0' }}>{template.title}</h3>
              <p style={{ color: '#555555' }} className="mb-6">{template.description}</p>
              <button style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-6 py-2 font-semibold rounded-lg hover:opacity-90 transition">
                Download
              </button>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#f0f0f0' }}>How to Use Templates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-3" style={{ color: '#00c8ff' }}>1. Download</div>
              <p style={{ color: '#555555' }}>
                Click the download button to get the template file for your use case.
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-3" style={{ color: '#00c8ff' }}>2. Customize</div>
              <p style={{ color: '#555555' }}>
                Edit the template to match your project, stack, and requirements.
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-3" style={{ color: '#00c8ff' }}>3. Use</div>
              <p style={{ color: '#555555' }}>
                Add to your project and load in Cursor, Cline, or your favorite LLM.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Quick Start</h2>
          <div className="space-y-4" style={{ color: '#f0f0f0', opacity: 0.9 }}>
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
              <strong>Pro tip:</strong> Check out the <Link href="/examples" style={{ color: '#00c8ff' }} className="hover:opacity-80 transition">examples</Link> to see how real projects use MOTH.
            </p>
          </div>
        </section>
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

