'use client';

import Link from 'next/link';

const MOTH_PROMPT = `You now understand MOTH (Minimal Overhead Technical Hierarchy) notation - a compact specification format optimized for LLM context windows and actionable development.

## Core Philosophy
MOTH is a BLUEPRINT, not a specification document. It answers "what" and "why", not "how" in exhaustive detail.
- Add detail ONLY where ambiguity would cause architectural problems
- Trust developers to figure out validation rules, error messages, exact formats
- 80% compression is the goal - if you're writing more than 200 lines, you're over-specifying

## Core Syntax
- [SECTIONS] in ALL_CAPS denote logical blocks
- key:value for simple data
- {key=value;another=value} for objects
- [item1;item2;item3] for lists
- key→value for flows/relationships
- *required_field vs (optional_field) for modality
- Semicolons (;) separate items
- # for comments

## Schema Syntax (Minimal but Unambiguous)
Use types and relationships, skip exhaustive constraints:

*field:type          # required field with type
(field):type         # optional field
field:enum[a,b,c]    # enumerated values (prevents ambiguity)
field:jsonb          # complex nested data (don't expand unless critical)
field→table.id       # foreign key relationship
*id:uuid             # required ID field

Example:
users:{
  *id:uuid;
  *email:string;
  (phone):string;
  *role:enum[admin,user,guest];
  *tenant_id→tenants.id;
  settings:jsonb
}

When to add constraints:
✅ File size limits (affects infrastructure)
✅ Enum values (affects state machines)
✅ Foreign keys (affects data model)
❌ Max string lengths (developer decision)
❌ Regex patterns (belongs in validation layer)
❌ Exact error codes (belongs in API docs)

## Workflow Syntax (State Machines Only)
Use for complex lifecycle states, skip for simple CRUD:

workflow_name:{
  initial:state;
  stateA→stateB[on:event,if:condition,after:duration];
  any→stateX[on:event]
}

## Relationship Syntax
- A→B: A references B (foreign key)
- A→*B: A has many B (one-to-many, note in comment if needed)

## API Syntax (Endpoints Only)
List endpoints with auth/rate limits, skip full request/response bodies:

entity:{GET,POST:/v1/entity;auth:required;rate:100/hour}

Full specs only if there's architectural significance:
POST:/v1/orders→req:{*items;*payment};res:{*order_id;*stripe_secret}

## Validation & Business Logic
Define ONLY when it affects architecture or is non-obvious:

✅ refunds:{auto_approve=true;window=30d;if=[not_shipped,provider_error]}
✅ ai:{upscale_threshold=300dpi;cost_cap=$1000/tenant}
❌ email_format:regex  # developer knows this
❌ password_strength:8chars+special  # standard practice

## Resource Annotations
Add for critical constraints:
cost:{cap=$X/period;alert=80%}
latency:{target=<Xms}
rate_limit:{N/period}

Skip if it's standard/obvious.

## When Reading MOTH Files
Parse as structured data:
- [FEATURES] → Requirements to implement
- [SCHEMAS] → Data models with relationships
- [WORKFLOWS] → State machines for complex flows
- [API] → Endpoint inventory
- [RISKS] → Known issues and mitigations

## When Writing MOTH Files
Ask yourself for each line: "Would omitting this cause an architectural mistake?"
- ✅ If yes → include it
- ❌ If no → omit it

Prioritize:
1. Relationships between entities (foreign keys)
2. State machines for complex workflows
3. Architectural constraints (cost caps, size limits)
4. Non-obvious business logic
5. Integration points (APIs, webhooks)

De-prioritize:
1. Validation rules (standard stuff)
2. Error messages
3. UI/UX details
4. Implementation details
5. Obvious constraints

## Anti-Patterns

❌ Over-specification:
users:{
  *id:uuid;
  *email:string!max=255!format=email!unique=true;
  *password:string!min=8!max=128!must_have_special_chars;
  *created_at:timestamp!immutable;
  *updated_at:timestamp!auto_update_on_change
}

✅ Right amount of detail:
users:{
  *id:uuid;
  *email:string;
  *password_hash:string;
  *role:enum[admin,user];
  *tenant_id→tenants.id;
  *created_at:timestamp
}

❌ Verbose APIs:
POST:/v1/orders
  auth:required
  rate_limit:10/min/user
  req:{*tenant_id:uuid;*items:[{variant_id:uuid;quantity:int!>0,!<=100}];*payment_intent:string;*shipping:{*street:string!max=200;*city:string!max=100}}
  res:{*order_id:uuid;*stripe_client_secret:string}
  errors:[400:invalid_address;402:payment_failed;429:rate_limit;500:server_error]

✅ Right amount of detail:
orders:{POST,GET:/v1/orders;auth:user;rate:10/min}

(Full specs in OpenAPI, not MOTH)

❌ Obvious validation:
email_validation:{format=email;required=true;unique_per_tenant=true}

✅ Implied by schema:
users:{*email:string;*tenant_id→tenants.id}

(Uniqueness and format are obvious)

## Key Principle
MOTH is 70-90% more compact than markdown. Every line should answer: "What architectural decision does this inform?"

If it's a standard practice, implementation detail, or obvious constraint - omit it.

Target: 100-200 lines for a complex backend. If you're at 300+ lines, you're writing a spec document, not MOTH.

You are now ready to work with MOTH notation!`;

export default function OnboardingPage() {
  return (
    <div style={{ backgroundColor: 'transparent', color: '#f0f0f0' }} className="min-h-screen">
      {/* Background Video and Overlay */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/moth/moths-slowmo.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />

      <header style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }} className="border-b backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <span style={{ fontFamily: "'Doto', sans-serif", fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, letterSpacing: '0.5px' }}>
              &lt;&#123;[ALIENROBOT]&#125;&gt;
            </span>
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

        <div className="space-y-12" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '2.0' }}>
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>How to Use This Prompt</h2>
            <ol className="space-y-5" style={{ color: '#cccccc', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: '2.0' }}>
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

