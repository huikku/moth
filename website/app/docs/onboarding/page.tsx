'use client';

import Link from 'next/link';

const MOTH_PROMPT = `You now understand MOTH notation. When you see .moth files or MOTH format:

PARSING RULES:
- [SECTIONS] are logical blocks (ALL_CAPS for top-level)
- key:value is the primary data pattern
- semicolon separates list items
- k=v;k2=v2 represents configuration objects
- [SECTION.subsection] uses dot notation for hierarchy
- 2-space indentation for nested content

SYNTAX ELEMENTS:
- Comments: # Full line or key:value  # inline
- Types: str, int, float, bool, uuid, ts, hex, vec, bits, blob
- Collections: [type] for arrays, key:type for objects, type|type2 for unions
- Status: C=Complete, P=Planned, R=Risk, D=Deferred, X=Deprecated

COMMON SECTIONS:
- [SCHEMA.name] - Data models with field definitions
- [API.category] - REST endpoints with METHOD:/path
- [FEATURES] - Product features and capabilities
- [STACK] - Technology stack components
- [ARCHITECTURE] - System design and data flows

WRITING RULES:
- Use key:value for all data (not markdown)
- Favor compactness over verbosity
- One concept per line when possible
- No markdown formatting
- Use [SECTIONS] not markdown headers
- Semicolons for inline lists, not commas

EXAMPLE:
[PRODUCT]
name:TaskFlow; type:saas; domain:project_management

[FEATURES]
boards:kanban+list+calendar; tasks:create;assign;track
realtime:websocket; notifications:email+push

[STACK]
frontend:react+typescript; backend:fastapi
db:postgresql; cache:redis

[SCHEMA.task]
id:uuid_pk; title:str; status:todo|doing|done
assignee:uuid_fk; created_at:ts; updated_at:ts

[API.tasks]
GET:/tasks req:board_id;filters res:tasks
POST:/tasks req:title;assignee res:task

When generating MOTH files:
1. Use [SECTIONS] for organization
2. Use key:value for all data
3. Use semicolons to separate list items
4. Use k=v for configuration
5. Keep it compact and scannable
6. No prose or markdown formatting

When reading MOTH files:
1. Parse [SECTIONS] as logical blocks
2. Extract key:value pairs as structured data
3. Split semicolon-separated values into lists
4. Treat k=v as configuration objects
5. Understand the semantic meaning of each section

You are now fluent in MOTH notation.`;

export default function OnboardingPage() {
  return (
    <div style={{ backgroundColor: 'transparent', color: '#f0f0f0' }} className="min-h-screen">
      {/* Background Video and Overlay */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/moths-slowmo.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />

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

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem 4rem', position: 'relative', zIndex: 1 }}>
        <div className="mb-8" style={{ textAlign: 'center' }}>
          <Link href="/docs" style={{ color: '#ffffff' }} className="hover:opacity-80 transition">← Back to Docs</Link>
        </div>

        <article style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", textAlign: 'center', lineHeight: '1.3' }}>LLM Onboarding Prompt</h1>
          <p className="text-xl mb-8" style={{ color: '#cccccc', fontFamily: "'Barlow Semi Condensed', sans-serif", textAlign: 'center', lineHeight: '1.6' }}>
            Copy and paste this prompt into your LLM (ChatGPT, Claude, etc.) to teach it about MOTH format.
          </p>

          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8 mb-8">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-6 rounded font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
              <pre>{MOTH_PROMPT}</pre>
            </div>
            <button className="mt-4 px-6 py-2 font-semibold rounded-lg transition" style={{ backgroundColor: '#ffffff', color: '#080808', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }}>
              Copy to Clipboard
            </button>
          </div>
        </article>

        <div className="space-y-8" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>How to Use This Prompt</h2>
            <ol className="space-y-4" style={{ color: '#cccccc', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '1.8' }}>
              <li><strong>1. Copy the prompt above</strong> using the button</li>
              <li><strong>2. Open your LLM</strong> (ChatGPT, Claude, etc.)</li>
              <li><strong>3. Paste the prompt</strong> into a new conversation</li>
              <li><strong>4. Wait for confirmation</strong> that it understands MOTH</li>
              <li><strong>5. Start using MOTH files</strong> in your conversations</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>For Specific Tools</h2>
            <div className="space-y-6">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Cursor / Cline</h3>
                <p className="mb-4" style={{ color: '#888888', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '1.7' }}>
                  Add this to your .cursorrules file:
                </p>
                <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#cccccc' }} className="p-3 rounded font-mono text-sm overflow-x-auto">
{`# Project uses MOTH notation
# See: https://github.com/huikku/moth-spec

[MOTH_FILES]
extensions:.moth;.str;.spex
parse:key_value_pairs; sections:[BLOCKS]
lists:semicolon_separated; objects:{k=v}

When generating docs, use MOTH format.
When reading .moth files, parse as structured specifications.`}
                </pre>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>ChatGPT / Claude</h3>
                <p style={{ color: '#888888', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '1.7' }}>
                  Paste the onboarding prompt at the start of each conversation, or save it as a custom instruction.
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-6">
                <h3 className="font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Aider</h3>
                <p style={{ color: '#888888', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '1.7' }}>
                  Add the prompt to your system message or project context.
                </p>
              </div>
            </div>
          </section>

          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }} className="border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>Next Steps</h2>
            <ul className="space-y-3" style={{ color: '#cccccc', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '1.8' }}>
              <li>✓ Teach your LLM about MOTH using this prompt</li>
              <li>✓ Check out <Link href="/examples" style={{ color: '#ffffff' }} className="hover:opacity-80">Examples</Link> for real-world MOTH files</li>
              <li>✓ Create your first MOTH file</li>
              <li>✓ Share it with your LLM and start coding</li>
            </ul>
          </section>
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

