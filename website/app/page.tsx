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
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#cccccc', opacity: 0.9, textAlign: 'center', maxWidth: '600px', margin: '0 auto 1.5rem', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
            The compact format for PRDs, rules, and architecture in AI-assisted development. Mothify compresses product knowledge into structured context that coding agents can keep always-on.
          </p>

          {/* File Extension Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '0.5rem 1.25rem', borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: '#ffffff' }}>
              <i className="fas fa-file-code" style={{ marginRight: '0.5rem', color: '#cccccc' }}></i>
              <span style={{ fontWeight: 600 }}>.moth</span>
            </div>
            <span style={{ color: '#888888', fontSize: '0.875rem', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
              (also .str, .spex)
            </span>
          </div>
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
              LLM Reading Prompt
            </Link>
            <Link href="/docs/mothify-prompt" style={{ backgroundColor: '#ffffff', color: '#080808', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }} className="hover:opacity-90 transition">
              <i className="fas fa-wand-magic-sparkles" style={{ marginRight: '0.5rem' }}></i>
              Mothify Conversion Prompt
            </Link>
          </div>
        </div>
      </section>

      {/* Mothify Conversion Section */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', zIndex: 10, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              <i className="fas fa-wand-magic-sparkles" style={{ color: '#ffffff' }}></i>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#ffffff', marginBottom: '1rem', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
              Convert Docs to MOTH
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#cccccc', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
              Teach any LLM to transform verbose documentation into compact MOTH format. Works with Claude, Gemini, ChatGPT, and all major AI models.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontFamily: "'Poppins', sans-serif", margin: 0, marginBottom: '0.5rem' }}>
                  Mothify LLM Prompt
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#cccccc', opacity: 0.7, margin: 0, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                  Complete conversion guide with examples and validation rules
                </p>
              </div>
              <Link
                href="/docs/mothify-prompt"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#080808',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
                }}
                className="hover:opacity-90 transition"
              >
                <i className="fas fa-arrow-right" style={{ marginRight: '0.5rem' }}></i>
                View Full Prompt
              </Link>
            </div>

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    <i className="fas fa-file-lines"></i>
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', fontFamily: "'Poppins', sans-serif" }}>
                    PRD Conversion
                  </h4>
                  <p style={{ color: '#cccccc', fontSize: '0.85rem', opacity: 0.7, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                    Transform product docs into structured specs
                  </p>
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', fontFamily: "'Poppins', sans-serif" }}>
                    Rules Files
                  </h4>
                  <p style={{ color: '#cccccc', fontSize: '0.85rem', opacity: 0.7, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                    Convert style guides to coding rules
                  </p>
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    <i className="fas fa-diagram-project"></i>
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', fontFamily: "'Poppins', sans-serif" }}>
                    Architecture
                  </h4>
                  <p style={{ color: '#cccccc', fontSize: '0.85rem', opacity: 0.7, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                    Compress system architecture docs
                  </p>
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', fontFamily: "'Poppins', sans-serif" }}>
                    Validation
                  </h4>
                  <p style={{ color: '#cccccc', fontSize: '0.85rem', opacity: 0.7, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                    Built-in syntax and structure checks
                  </p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cccccc', fontSize: '0.9rem', marginBottom: '1rem', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                  <strong style={{ color: '#ffffff' }}>What you get:</strong> Complete prompt with MOTH syntax rules, conversion strategies, examples, and validation guidelines. Achieves 70-90% compression while preserving all critical information.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}>
                    Claude
                  </span>
                  <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}>
                    ChatGPT
                  </span>
                  <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}>
                    Gemini
                  </span>
                  <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}>
                    Any LLM
                  </span>
                </div>
              </div>
            </div>
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
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {['prd', 'large-prd', 'prd-with-ui', 'style-guide', 'deploy-rules', 'supabase-rules'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: activeTab === tab ? '#ffffff' : '#cccccc',
                    borderBottomColor: activeTab === tab ? '#ffffff' : 'transparent',
                    borderBottomWidth: activeTab === tab ? '2px' : '0px',
                    padding: '0.75rem 1rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab === 'large-prd' ? 'LARGE PRD' :
                   tab === 'prd-with-ui' ? 'PRD + kablUI' :
                   tab === 'style-guide' ? 'STYLE GUIDE' :
                   tab === 'deploy-rules' ? 'DEPLOY RULES' :
                   tab === 'supabase-rules' ? 'SUPABASE RULES' :
                   tab.toUpperCase()}
                </button>
              ))}
            </div>
            <pre style={{ backgroundColor: 'transparent', color: '#cccccc', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 1.5, margin: 0, overflow: 'auto', maxHeight: '400px', opacity: 0.9, textAlign: 'left' }}>

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

{activeTab === 'large-prd' && `intent:product_requirements
audience:engineering+design; version:2.0.0
project:enterprise_analytics_platform

[PRODUCT]
name:DataViz Pro; type:b2b_saas
domain:business_intelligence
target:mid_to_enterprise

[CORE_FEATURES]
dashboards:custom+templates+shared
visualizations:charts;graphs;maps;tables
data_sources:sql;nosql;api;csv;excel
realtime:streaming+alerts+notifications
collaboration:comments;sharing;permissions

[USER_ROLES]
admin:full_access; analyst:create+edit
viewer:read_only; guest:limited_dashboards

[TECH_STACK]
frontend:react18+typescript+tailwind
state:redux_toolkit+rtk_query
backend:fastapi+celery+redis
db:postgresql15; cache:redis7
storage:s3; cdn:cloudflare

[INTEGRATIONS]
auth:auth0+saml+sso
payments:stripe; analytics:mixpanel
monitoring:datadog; errors:sentry

[PERFORMANCE]
page_load:<2s; api_response:<500ms
concurrent_users:10000+
uptime:99.9%

[SECURITY]
encryption:aes256; transit:tls13
compliance:soc2+gdpr+hipaa
auth:mfa+rbac; audit:full_logging`}

{activeTab === 'prd-with-ui' && `intent:product_requirements
audience:engineering+design; version:1.0.0
project:asset_management_platform

[PRODUCT]
name:AssetHub; type:saas
domain:digital_asset_management
target:creative_teams+studios

[FEATURES]
upload:drag_drop+bulk+api
organize:folders;tags;collections
preview:images;video;3d;audio
search:metadata+ai_visual+tags
share:links;embed;download

[STACK]
frontend:react+typescript
backend:fastapi; db:postgresql
storage:s3; cdn:cloudflare

# kablUI UI Contract
[UI.contract]
@APP[theme:dark]
  @HEADER[h:64;bg:#1a1a1a]
    @LOGO AssetHub @LOGO
    @NAV [Assets][Collections][Upload][Settings]
    @SEARCH[w:300;placeholder:"Search assets..."]
    @AVATAR[align:right]

  @SIDEBAR[w:240;bg:#232323]
    §FOLDERS
      +Projects
        -Project_Alpha
        -Project_Beta
      +Archive
    §TAGS
      #product #marketing #video

  @MAIN[bg:#2a2a2a]
    @TOOLBAR[h:48]
      @BUTTON "Upload" [primary]
      @BUTTON "New Folder"
      @DROPDOWN "Sort by: Date"
      @TOGGLE "Grid/List"

    @GRID[cols:4;gap:16]
      @CARD[asset]
        @THUMB "image.jpg"
        @META "2.4 MB • JPG"
        @TAGS #product
      @CARD[asset]
        @THUMB "video.mp4"
        @META "45 MB • MP4"
        @TAGS #marketing
      @CARD[asset]
        @THUMB "model.glb"
        @META "12 MB • GLB"
        @TAGS #3d

  @PANEL[position:right;w:320;collapsed]
    @TABS [Details][History][Share]
    @SECTION "File Info"
      name: hero_image.jpg
      size: 2.4 MB
      uploaded: 2025-01-15
    @SECTION "Metadata"
      dimensions: 1920x1080
      format: JPEG
      color: RGB

[UI.rules]
components:APP;HEADER;NAV;SIDEBAR;MAIN;GRID;CARD
theme:dark_mode_only
accessibility:aria_labels;keyboard_nav
feature_ref:FEATURES.upload;FEATURES.organize
responsive:mobile=stack;tablet=2col;desktop=4col`}`}

{activeTab === 'style-guide' && `intent:style_guide
audience:dev_team; scope:frontend

[DESIGN_TOKENS]
colors:primary=#232322;accent=#ffffff
text:body=#cccccc;heading=#ffffff
spacing:base=8px;scale=1.5x

[TYPOGRAPHY]
headings:Poppins;weight=600
body:Barlow_Semi_Condensed;weight=400
mono:JetBrains_Mono;weight=400-600
line_height:headings=1.3;body=1.8

[COMPONENTS]
buttons:rounded=4px;padding=0.75rem_2rem
cards:bg=rgba(0,0,0,0.4);border=1px_solid
inputs:height=44px;focus=outline_white

[SPACING]
section:padding=6rem_0
container:max_width=1400px;margin=0_auto
grid:gap=2rem; mobile:padding=0_1rem

[RESPONSIVE]
breakpoints:mobile=768px;tablet=1024px
mobile:stack_columns;hide_nav
desktop:show_all;multi_column

[ANIMATIONS]
transitions:all_0.3s_ease
hover:opacity=0.9
loading:skeleton+fade_in`}

{activeTab === 'deploy-rules' && `intent:deployment_rules
audience:ai_agents; enforcement:strict

[GIT_WORKFLOW]
branches:main;staging;feature/*
commits:conventional;signed=required
push:require_tests_pass;require_review

[PRE_COMMIT]
lint:eslint+prettier; types:tsc
tests:unit+integration; coverage:>80%

[PRE_PUSH]
build:verify_success
security:scan_dependencies
size:check_bundle_size

[DEPLOYMENT]
staging:auto_on_merge_to_staging
production:manual_approval_required
rollback:auto_on_error_rate>5%

[FORBIDDEN]
push_to_main:direct_commits
skip_tests:never
deploy_friday:after_3pm
secrets:hardcoded_in_code

[NOTIFICATIONS]
slack:on_deploy;on_failure
email:on_production_deploy
pagerduty:on_critical_failure

[MONITORING]
healthcheck:every_30s
error_tracking:sentry
performance:datadog_apm`}

{activeTab === 'supabase-rules' && `intent:database_access_rules
audience:ai_agents; scope:supabase

[CONNECTION]
url:env.SUPABASE_URL
key:env.SUPABASE_ANON_KEY
service_key:env.SUPABASE_SERVICE_KEY

[TABLES_READABLE]
public:users;profiles;posts;comments
public:categories;tags;media
analytics:page_views;events

[TABLES_WRITABLE]
public:posts;comments;media
public:user_settings;notifications
logs:activity;errors

[TABLES_FORBIDDEN]
auth:users;sessions;refresh_tokens
internal:migrations;system_config
billing:invoices;payments;subscriptions
admin:audit_logs;system_settings

[RLS_POLICIES]
posts:user_can_edit_own
comments:user_can_delete_own
profiles:public_read;owner_write

[FUNCTIONS]
allowed:get_user_posts;create_comment
allowed:upload_media;send_notification
forbidden:delete_user;modify_billing

[SECURITY]
anon_key:client_side_only
service_key:server_side_only;never_expose
rls:always_enabled; validate:row_ownership`}
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
