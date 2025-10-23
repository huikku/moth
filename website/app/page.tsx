'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('prd');

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
            <div style={{ backgroundColor: '#ffffff', color: '#080808' }} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm">
              M
            </div>
            <h1 className="text-lg font-bold" style={{ color: '#ffffff' }}>MOTH</h1>
          </Link>
          <nav className="hidden md:flex gap-8 ml-auto">
            <Link href="/" style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Home</Link>
            <Link href="/docs" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          {/* Logo */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/moth/logo-mono.png" alt="MOTH Logo" style={{ height: '120px', width: 'auto' }} />
          </div>

          <div style={{ color: '#cccccc', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.875rem', marginBottom: '1rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Tiny specs for big brains
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif", fontWeight: 600, textAlign: 'center', maxWidth: '900px', margin: '0 auto 1.5rem' }}>
            <span style={{ color: '#ffffff' }}>Machine-Optimized Text Hierarchy</span>
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem', color: '#cccccc', opacity: 0.9, textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
            Convert and validate .moth specification files — the compact format for PRDs, rules, and architecture in AI-assisted development. Mothify compresses product knowledge into structured context that coding agents can keep always-on.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link href="/docs/quick-reference" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
              Read the Spec
            </Link>
            <Link href="/examples" style={{ color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.3)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
              View Examples
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontSize: '2.5rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.5rem', fontFamily: "'Poppins', sans-serif" }}>70-90%</div>
              <div style={{ color: '#cccccc', opacity: 0.7, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Barlow Condensed', sans-serif" }}>Compression</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontSize: '2.5rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.5rem', fontFamily: "'Poppins', sans-serif" }}>LLM</div>
              <div style={{ color: '#cccccc', opacity: 0.7, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Barlow Condensed', sans-serif" }}>Native</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontSize: '2.5rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.5rem', fontFamily: "'Poppins', sans-serif" }}>Human</div>
              <div style={{ color: '#cccccc', opacity: 0.7, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Barlow Condensed', sans-serif" }}>Readable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom GPT Quick Start */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', position: 'relative', zIndex: 10, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 1rem', display: 'block' }}>
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#ffffff"/>
            </svg>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#ffffff', marginBottom: '1rem', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
              Try MOTHify - Custom GPT
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#cccccc', opacity: 0.95, maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: 1.5, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
              Use our custom ChatGPT to convert your docs to MOTH format, or paste the onboarding prompt into any LLM.
            </p>
            <a
              href="https://chatgpt.com/g/g-68f901f4e37081918e85e6bb65f1e7c9-mothify"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                color: '#080808',
                padding: '1rem 2.5rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1.1rem',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
                fontFamily: "'Poppins', sans-serif"
              }}
              className="hover:opacity-90 transition"
            >
              Launch MOTHify GPT →
            </a>
          </div>

          <div style={{ textAlign: 'center', margin: '3rem 0 1.5rem', opacity: 0.7 }}>
            <p style={{ fontSize: '1rem', color: '#cccccc' }}>
              Or copy this prompt for Claude, Gemini, or any other LLM:
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>
                Universal Onboarding Prompt
              </h3>
              <button
                onClick={(e) => {
                  const prompt = `You now understand MOTH (Minimal Overhead Technical Hierarchy) notation - a compact specification format optimized for LLM context windows.

## Core Syntax
- [SECTIONS] in ALL_CAPS denote logical blocks
- key:value is the primary data pattern
- Semicolons (;) separate list items
- {key=value} for state/config objects
- # for comments

## When Reading MOTH Files
Parse as structured data, not prose. Every key:value is actionable.
- [FEATURES] sections → Requirements to implement
- [SCHEMAS] sections → Data models to create
- [API] sections → Endpoints to build
- [RULES] sections → Coding standards to follow
- [FORBIDDEN] rules → NEVER violate these

## Key Principle
MOTH is 70-90% more compact than markdown. No fluff - everything is structured and actionable.

You are now ready to work with MOTH notation!`;
                  navigator.clipboard.writeText(prompt);
                  const btn = e.target as HTMLButtonElement;
                  const originalText = btn.textContent;
                  btn.textContent = '✓ Copied!';
                  btn.style.backgroundColor = '#888888';
                  setTimeout(() => {
                    btn.textContent = originalText || 'Copy Prompt';
                    btn.style.backgroundColor = '#ffffff';
                  }, 2000);
                }}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#080808',
                  border: 'none',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontFamily: "'Barlow Semi Condensed', sans-serif"
                }}
                className="hover:opacity-90 transition"
              >
                Copy Prompt
              </button>
            </div>
            <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 1.6, padding: '1.5rem', borderRadius: '4px', overflow: 'auto', maxHeight: '300px', margin: 0 }}>
{`You now understand MOTH notation.

## Core Syntax
- [SECTIONS] in ALL_CAPS denote logical blocks
- key:value is the primary data pattern
- Semicolons (;) separate list items
- {key=value} for state/config objects

## When Reading MOTH Files
- [FEATURES] → Requirements to implement
- [SCHEMAS] → Data models to create
- [API] → Endpoints to build
- [RULES] → Coding standards to follow
- [FORBIDDEN] → NEVER violate these

MOTH is 70-90% more compact than markdown.
Everything is structured and actionable.`}
            </pre>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/docs/onboarding" style={{ color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.3)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
              Full Onboarding Guide
            </Link>
            <Link href="/examples" style={{ color: '#cccccc', border: '2px solid rgba(255, 255, 255, 0.2)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
              See Examples
            </Link>
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '2rem', fontWeight: 600, fontFamily: "'Poppins', sans-serif", textAlign: 'center' }}>
              Why MOTH?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#ffffff', fontSize: '1.8rem', fontFamily: "'JetBrains Mono', monospace", minWidth: '36px', textAlign: 'center' }}>✓</div>
                <span style={{ color: '#cccccc', fontSize: '1.65rem', opacity: 0.9, textAlign: 'left', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>70-90% compression vs traditional markdown</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#ffffff', fontSize: '1.8rem', fontFamily: "'JetBrains Mono', monospace", minWidth: '36px', textAlign: 'center' }}>✓</div>
                <span style={{ color: '#cccccc', fontSize: '1.65rem', opacity: 0.9, textAlign: 'left', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Optimized for LLM token efficiency</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#ffffff', fontSize: '1.8rem', fontFamily: "'JetBrains Mono', monospace", minWidth: '36px', textAlign: 'center' }}>✓</div>
                <span style={{ color: '#cccccc', fontSize: '1.65rem', opacity: 0.9, textAlign: 'left', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Human-readable syntax, no markdown</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#ffffff', fontSize: '1.8rem', fontFamily: "'JetBrains Mono', monospace", minWidth: '36px', textAlign: 'center' }}>✓</div>
                <span style={{ color: '#cccccc', fontSize: '1.65rem', opacity: 0.9, textAlign: 'left', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>Perfect for AI agents and developers</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <Link href="/docs" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
                Explore Docs
              </Link>
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#666666', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#888888', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#aaaaaa', display: 'inline-block' }} />
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '1rem' }}>
              {['prd', 'rules', 'arch'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: activeTab === tab ? '#ffffff' : '#cccccc',
                    borderBottomColor: activeTab === tab ? '#ffffff' : 'transparent',
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
            <pre style={{ backgroundColor: 'transparent', color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 1.5, margin: 0, overflow: 'auto', maxHeight: '300px', opacity: 0.9, textAlign: 'left' }}>

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
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, color: '#ffffff', marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif", textAlign: 'center' }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#cccccc', opacity: 0.8, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
            Learn the syntax, explore examples, and start using MOTH in your projects today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/docs" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
              Documentation
            </Link>
            <Link href="/examples" style={{ color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.3)', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }} className="hover:opacity-90 transition">
              View Examples
            </Link>
          </div>
        </div>
      </section>

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
