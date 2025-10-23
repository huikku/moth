'use client';

import Link from 'next/link';

export default function DocsPage() {
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
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div style={{ backgroundColor: '#ffffff', color: '#080808' }} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm">M</div>
            <h1 className="text-lg font-bold" style={{ color: '#ffffff' }}>MOTH</h1>
          </Link>
          <nav className="hidden md:flex gap-8 ml-auto">
            <Link href="/" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Home</Link>
            <Link href="/docs" style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem 4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* Logo */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/logo-mono.png" alt="MOTH Logo" style={{ height: '100px', width: 'auto' }} />
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, color: '#f0f0f0', marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif" }}>
            Documentation
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#f0f0f0', opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontFamily: "'Barlow Condensed', sans-serif" }}>
            Learn everything about MOTH notation and how to use it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* README */}
          <Link href="/docs/readme" style={{ textDecoration: 'none' }} className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }} className="hover:opacity-90">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#cccccc' }}><i className="fa-solid fa-book"></i></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                README
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.6 }}>
                Start here! Marketing-focused introduction to MOTH with quick examples and use cases.
              </p>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Read →</span>
            </div>
          </Link>

          {/* SPEC */}
          <Link href="/docs/spec" style={{ textDecoration: 'none' }} className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }} className="hover:opacity-90">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#cccccc' }}><i className="fa-solid fa-file-lines"></i></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                Full Specification
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.6 }}>
                Complete technical specification for implementers and advanced users.
              </p>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Read →</span>
            </div>
          </Link>

          {/* Quick Reference */}
          <Link href="/docs/quick-reference" style={{ textDecoration: 'none' }} className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }} className="hover:opacity-90">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#cccccc' }}><i className="fa-solid fa-bolt"></i></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                Quick Reference
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.6 }}>
                One-page cheat sheet for quick syntax lookups. Print and keep near your keyboard!
              </p>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Read →</span>
            </div>
          </Link>

          {/* Integration Guide */}
          <Link href="/docs/integration" style={{ textDecoration: 'none' }} className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }} className="hover:opacity-90">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#cccccc' }}><i className="fa-solid fa-wrench"></i></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                Integration Guide
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.6 }}>
                For IDE vendors and plugin developers. Learn how to integrate MOTH into your tools.
              </p>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Read →</span>
            </div>
          </Link>

          {/* Getting Started */}
          <Link href="/docs/getting-started" style={{ textDecoration: 'none' }} className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }} className="hover:opacity-90">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#cccccc' }}><i className="fa-solid fa-rocket"></i></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                Getting Started
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.6 }}>
                Step-by-step guide to start using MOTH in your projects today.
              </p>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Read →</span>
            </div>
          </Link>

          {/* Onboarding Prompt */}
          <Link href="/docs/onboarding" style={{ textDecoration: 'none' }} className="group">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', height: '100%', transition: 'all 0.3s ease' }} className="hover:opacity-90">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#cccccc' }}><i className="fa-solid fa-robot"></i></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                LLM Onboarding
              </h3>
              <p style={{ color: '#f0f0f0', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.6 }}>
                Paste this into your LLM to teach it MOTH format. Works with ChatGPT, Claude, and more.
              </p>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Read →</span>
            </div>
          </Link>
        </div>
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

