'use client';

import Link from 'next/link';

const templates = [
  {
    id: 'prd-template',
    title: 'PRD Template',
    description: 'Comprehensive template for product requirements documents',
    icon: 'fa-solid fa-file-lines',
    downloadName: 'prd_template.moth',
  },
  {
    id: 'rules-template',
    title: 'Coding Rules Template',
    description: 'Template for .cursorrules and coding standards',
    icon: 'fa-solid fa-gear',
    downloadName: 'rules_template.moth',
  },
  {
    id: 'architecture-template',
    title: 'Architecture Template',
    description: 'Template for system architecture documentation',
    icon: 'fa-solid fa-building',
    downloadName: 'architecture_template.moth',
  },
  {
    id: 'api-template',
    title: 'API Specification Template',
    description: 'Template for API endpoint specifications',
    icon: 'fa-solid fa-plug',
    downloadName: 'api_spec_template.moth',
  },
];

export default function TemplatesPage() {
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
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <span style={{ fontFamily: "'Doto', sans-serif", fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, letterSpacing: '0.5px' }}>
              &lt;&#123;[ALIENROBOT]&#125;&gt;
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 ml-auto">
            <Link href="/" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Home</Link>
            <Link href="/docs" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem 4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* Logo */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/moth/logo-mono.png" alt="MOTH Logo" style={{ height: '100px', width: 'auto' }} />
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, color: '#f0f0f0', marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif" }}>
            Templates
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#f0f0f0', opacity: 0.9, maxWidth: '800px', margin: '0 auto', fontFamily: "'Barlow Condensed', sans-serif" }}>
            Ready-to-use templates for common MOTH documents. Copy and customize for your projects.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {templates.map((template) => (
            <div
              key={template.id}
              style={{
                backgroundColor: 'rgba(0, 12, 24, 0.6)',
                border: '1px solid rgba(0, 200, 255, 0.2)',
                borderRadius: '8px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
              className="hover:opacity-90"
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{template.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                {template.title}
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                {template.description}
              </p>
              <button
                style={{
                  backgroundColor: '#ffffff',
                  color: '#080808',
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                  padding: '0.75rem 2rem',
                  borderRadius: '6px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif"
                }}
                className="hover:opacity-90 transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem', color: '#f0f0f0', textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
            How to Use Templates
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif" }}>
                1. Download
              </div>
              <p style={{ color: '#cccccc', opacity: 0.8, lineHeight: 1.6 }}>
                Click the download button to get the template file for your use case.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif" }}>
                2. Customize
              </div>
              <p style={{ color: '#cccccc', opacity: 0.8, lineHeight: 1.6 }}>
                Edit the template to match your project, stack, and requirements.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif" }}>
                3. Use
              </div>
              <p style={{ color: '#cccccc', opacity: 0.8, lineHeight: 1.6 }}>
                Add to your project and load in Cursor, Cline, or your favorite LLM.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', color: '#f0f0f0', textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
            Quick Start
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cccccc', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ lineHeight: 1.6 }}>
              <strong style={{ color: '#ffffff' }}>For PRDs:</strong> Download the PRD template, fill in your product details, features, and tech stack.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              <strong style={{ color: '#ffffff' }}>For Coding Rules:</strong> Download the rules template, customize for your language and framework.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              <strong style={{ color: '#ffffff' }}>For Architecture:</strong> Download the architecture template, describe your services and data flows.
            </p>
            <p style={{ paddingTop: '1rem', lineHeight: 1.6 }}>
              <strong style={{ color: '#ffffff' }}>Pro tip:</strong> Check out the <Link href="/examples" style={{ color: '#ffffff', textDecoration: 'underline' }} className="hover:opacity-80 transition">examples</Link> to see how real projects use MOTH.
            </p>
          </div>
        </section>
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

