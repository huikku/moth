'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('prd');

  return (
    <div style={{ backgroundColor: '#080808', color: '#f0f0f0' }} className="min-h-screen">
      {/* Header */}
      <header style={{ borderBottomColor: 'rgba(0, 200, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }} className="border-b backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div style={{ backgroundColor: '#00c8ff', color: '#080808' }} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm">
              M
            </div>
            <h1 className="text-lg font-bold" style={{ color: '#00c8ff' }}>MOTH</h1>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" style={{ color: '#00c8ff', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Home</Link>
            <Link href="/docs" style={{ color: '#f0f0f0', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#f0f0f0', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
            <Link href="/templates" style={{ color: '#f0f0f0', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Templates</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#080808', paddingTop: '8rem', paddingBottom: '4rem' }} className="px-4">
        <div className="max-w-7xl mx-auto">
          <div style={{ color: '#00c8ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem', marginBottom: '2rem', display: 'block' }}>
            # MACHINE-OPTIMIZED TEXT HIERARCHY
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.2, marginBottom: '1rem', maxWidth: '800px', fontFamily: "'Jura', sans-serif" }} className="font-bold">
            Tiny specs for <span style={{ color: '#00c8ff' }}>big brains</span>
          </h1>
          <div style={{ width: '140px', height: '2px', background: 'linear-gradient(90deg, transparent, #00c8ff, transparent)', opacity: 0.4, marginBottom: '1.5rem' }} />
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '700px', color: '#f0f0f0', opacity: 0.9 }}>
            Convert and validate .moth specification files — the compact format for PRDs, rules, and architecture in AI-assisted development. Mothify compresses product knowledge into structured context that coding agents can keep always-on.
          </p>
          <div className="flex gap-4">
            <Link href="/docs/quick-reference" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-6 py-3 rounded font-semibold hover:opacity-90 transition inline-block">
              Read the Spec
            </Link>
            <Link href="/examples" style={{ color: '#00c8ff', borderColor: 'rgba(0, 200, 255, 0.3)', borderWidth: '1px' }} className="px-6 py-3 rounded font-semibold hover:opacity-90 transition inline-block">
              View Examples
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 mt-16">
            <div>
              <div style={{ fontSize: '2.5rem', color: '#00c8ff', fontWeight: 700, marginBottom: '0.25rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>70-90%</div>
              <div style={{ color: '#f0f0f0', opacity: 0.6, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Compression</div>
            </div>
            <div className="hidden md:block" style={{ width: '1px', height: '2.5rem', backgroundColor: 'rgba(0, 200, 255, 0.15)' }} />
            <div>
              <div style={{ fontSize: '2.5rem', color: '#00c8ff', fontWeight: 700, marginBottom: '0.25rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>LLM</div>
              <div style={{ color: '#f0f0f0', opacity: 0.6, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Native</div>
            </div>
            <div className="hidden md:block" style={{ width: '1px', height: '2.5rem', backgroundColor: 'rgba(0, 200, 255, 0.15)' }} />
            <div>
              <div style={{ fontSize: '2.5rem', color: '#00c8ff', fontWeight: 700, marginBottom: '0.25rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>Human</div>
              <div style={{ color: '#f0f0f0', opacity: 0.6, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Readable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <section style={{ backgroundColor: 'rgba(0, 20, 40, 0.2)', paddingTop: '6rem', paddingBottom: '6rem' }} className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ fontSize: '3rem', color: '#00c8ff', marginBottom: '1.5rem', fontWeight: 500, fontFamily: "'Jura', sans-serif" }}>
                Why MOTH?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <div style={{ color: '#00c8ff', fontSize: '1.1rem', opacity: 0.95, fontFamily: "'JetBrains Mono', monospace", minWidth: '20px', textAlign: 'center' }}>✓</div>
                  <span style={{ color: '#f0f0f0', fontSize: '1rem', opacity: 0.9, lineHeight: 1.4 }}>70-90% compression vs traditional markdown</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <div style={{ color: '#00c8ff', fontSize: '1.1rem', opacity: 0.95, fontFamily: "'JetBrains Mono', monospace", minWidth: '20px', textAlign: 'center' }}>✓</div>
                  <span style={{ color: '#f0f0f0', fontSize: '1rem', opacity: 0.9, lineHeight: 1.4 }}>Optimized for LLM token efficiency</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <div style={{ color: '#00c8ff', fontSize: '1.1rem', opacity: 0.95, fontFamily: "'JetBrains Mono', monospace", minWidth: '20px', textAlign: 'center' }}>✓</div>
                  <span style={{ color: '#f0f0f0', fontSize: '1rem', opacity: 0.9, lineHeight: 1.4 }}>Human-readable syntax, no markdown</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <div style={{ color: '#00c8ff', fontSize: '1.1rem', opacity: 0.95, fontFamily: "'JetBrains Mono', monospace", minWidth: '20px', textAlign: 'center' }}>✓</div>
                  <span style={{ color: '#f0f0f0', fontSize: '1rem', opacity: 0.9, lineHeight: 1.4 }}>Perfect for AI agents and developers</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link href="/docs" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-6 py-3 rounded font-semibold hover:opacity-90 transition inline-block">
                  Explore Docs
                </Link>
              </div>
            </div>
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', padding: '2rem', position: 'relative', minHeight: '400px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid rgba(0, 200, 255, 0.1)', marginBottom: '1rem' }}>
                {['prd', 'rules', 'arch'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      backgroundColor: activeTab === tab ? 'rgba(0, 200, 255, 0.1)' : 'transparent',
                      color: activeTab === tab ? '#00c8ff' : '#f0f0f0',
                      borderBottomColor: activeTab === tab ? '#00c8ff' : 'transparent',
                      borderBottomWidth: activeTab === tab ? '2px' : '0px',
                      padding: '0.75rem 1.5rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.9rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
              <pre style={{ backgroundColor: 'transparent', color: '#f0f0f0', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 1.5, margin: 0, overflow: 'auto', maxHeight: '300px', opacity: 0.9 }}>

{activeTab === 'prd' && `intent:product_requirements
audience:dev_team; version:1.0.0

[PRODUCT]
name:TaskFlow; type:saas
domain:project_management

[FEATURES]
boards:kanban+list+calendar
tasks:create;assign;track
realtime:websocket

[STACK]
frontend:react+typescript
backend:fastapi; db:postgresql`}
{activeTab === 'rules' && `intent:coding_rules
audience:ai_agents; style:concise

[ARCHITECTURE]
pattern:modular; state:redux
api:rest; auth:jwt

[CONSTRAINTS]
max_file_size:500_lines
max_function:50_lines
naming:snake_case

[TESTING]
coverage:80%; framework:jest`}
{activeTab === 'arch' && `intent:system_architecture
scope:full_stack; detail:high

[COMPONENTS]
frontend:react_spa
backend:python_fastapi
db:postgresql; cache:redis

[DATA_FLOW]
user_input -> api -> db
cache -> response
events -> queue -> workers

[DEPLOYMENT]
containers:docker
orchestration:kubernetes`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: 'rgba(0, 12, 24, 0.3)', paddingTop: '6rem', paddingBottom: '6rem' }} className="px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f0f0f0', marginBottom: '1.5rem', fontFamily: "'Jura', sans-serif" }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#f0f0f0', opacity: 0.8, marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Learn the syntax, explore examples, and start using MOTH in your projects today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/docs" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block">
              Documentation
            </Link>
            <Link href="/templates" style={{ color: '#00c8ff', borderColor: 'rgba(0, 200, 255, 0.3)', borderWidth: '1px' }} className="px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block">
              Download Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTopColor: 'rgba(0, 200, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)' }} className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#00c8ff' }}>Product</h4>
              <ul className="space-y-2" style={{ color: '#f0f0f0', opacity: 0.8 }}>
                <li><Link href="/docs" className="hover:opacity-100">Documentation</Link></li>
                <li><Link href="/examples" className="hover:opacity-100">Examples</Link></li>
                <li><Link href="/templates" className="hover:opacity-100">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#00c8ff' }}>Resources</h4>
              <ul className="space-y-2" style={{ color: '#f0f0f0', opacity: 0.8 }}>
                <li><Link href="/docs/quick-reference" className="hover:opacity-100">Quick Reference</Link></li>
                <li><Link href="/docs/spec" className="hover:opacity-100">Full Spec</Link></li>
                <li><Link href="/docs/integration" className="hover:opacity-100">Integration Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#00c8ff' }}>Community</h4>
              <ul className="space-y-2" style={{ color: '#f0f0f0', opacity: 0.8 }}>
                <li><a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">GitHub</a></li>
                <li><a href="https://kablui.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">kablUI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#00c8ff' }}>Legal</h4>
              <ul className="space-y-2" style={{ color: '#f0f0f0', opacity: 0.8 }}>
                <li><a href="https://github.com/huikku/moth-spec/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">MIT License</a></li>
                <li><a href="https://github.com/huikku/moth-spec/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Contributing</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center" style={{ color: '#555555', borderTopColor: 'rgba(0, 200, 255, 0.1)', borderTopWidth: '1px', paddingTop: '2rem' }}>
            <p>© 2025 MOTH — Open notation standard. Created by <a href="https://alienrobot.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00c8ff' }}>huikku</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
