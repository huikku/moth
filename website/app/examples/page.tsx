'use client';

import Link from 'next/link';
import { useState } from 'react';

const examples = [
  {
    id: 'taskflow-prd',
    title: 'TaskFlow PRD',
    description: 'Real-world SaaS application PRD for a task management system',
    category: 'PRD',
    code: `intent:product_requirements; audience:dev_team; style:technical
version:1.0.0; updated:2025-10-22

[PRODUCT]
name:TaskFlow; type:saas; domain:project_management
target:small_teams; pricing:freemium

[FEATURES]
boards:kanban+list+calendar; tasks:create;assign;track;comment
realtime:websocket; notifications:email+push
integrations:slack;github;jira; mobile:ios+android

[STACK]
frontend:react+typescript; backend:fastapi+postgres
realtime:pusher; auth:clerk; storage:s3
hosting:vercel+railway; monitoring:sentry+datadog

[SCHEMA.task]
id:uuid; title:str; description:str; status:todo|doing|done
assignee:uuid_fk; created_by:uuid_fk
created_at:ts; updated_at:ts; due_at:ts?

[API.tasks]
GET:/tasks -> req:{board_id;filters?} res:{tasks:[task]}
POST:/tasks -> req:{title;description;assignee} res:{task}
PUT:/tasks/:id -> req:{id;task_partial} res:{task}
DELETE:/tasks/:id -> req:{id} res:{success:bool}`,
  },
  {
    id: 'typescript-rules',
    title: 'TypeScript Coding Rules',
    description: 'Comprehensive coding standards for TypeScript/React projects',
    category: 'Rules',
    code: `intent:coding_standards; audience:cursor+copilot; style:prescriptive

[STYLE]
lang:typescript; format:prettier; lint:eslint_strict
naming:camelCase_vars;PascalCase_types;SCREAMING_SNAKE_constants
quotes:single; semicolons:required; trailing_commas:always

[ARCHITECTURE]
pattern:clean_architecture; layers:domain;application;infrastructure
deps:domain->none; application->domain; infrastructure->all
modules:feature_based; imports:absolute_paths

[TESTING]
framework:vitest; coverage:80%_min; pattern:arrange_act_assert
mocks:prefer_fakes; e2e:playwright; ci:required

[CONVENTIONS]
errors:Result<T,E>_no_exceptions
async:async_await_no_callbacks
state:zustand_immutable
api:react_query; forms:react_hook_form

[FORBIDDEN]
no:any_type;console.log;eval;with;var
no:default_exports; no:class_inheritance_prefer_composition`,
  },
  {
    id: 'microservices-arch',
    title: 'Microservices Architecture',
    description: 'System design for scalable microservices infrastructure',
    category: 'Architecture',
    code: `intent:system_architecture; audience:implementation_team; style:technical

[SERVICES]
api:fastapi+uvicorn; worker:celery+redis
db:postgresql_16; cache:redis_7; queue:sqs
storage:s3; cdn:cloudfront; search:opensearch

[DATA_FLOW]
# Read path
client -> cdn -> alb -> api_pods -> cache -> postgres
# Write path
client -> api -> queue -> worker -> db
# Assets
client -> api -> s3 -> cdn

[SCALING]
api:horizontal_ecs; worker:auto_scale_queue_depth
db:read_replicas_3; cache:cluster_mode
cdn:global_edge; storage:multi_region

[SECURITY]
auth:jwt_bearer+refresh; rbac:role_based; rls:tenant_isolation
encryption:tls_1.3+kms; secrets:aws_secrets_manager
audit:cloudwatch_logs; compliance:soc2+gdpr

[MONITORING]
metrics:datadog; logs:cloudwatch; traces:datadog_apm
alerts:pagerduty; uptime:pingdom
slos:p99<200ms; availability:99.9%`,
  },
];

export default function ExamplesPage() {
  const [selectedExample, setSelectedExample] = useState(examples[0]);

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
            <Link href="/examples" style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.5px' }} className="text-sm font-medium hover:opacity-90 transition">Examples</Link>
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
            Examples
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#f0f0f0', opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontFamily: "'Barlow Condensed', sans-serif" }}>
            Real-world MOTH files to learn from and adapt for your projects.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Example List */}
          <div style={{ gridColumn: '1' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {examples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setSelectedExample(example)}
                  style={{
                    backgroundColor: selectedExample.id === example.id ? 'rgba(0, 200, 255, 0.15)' : 'rgba(0, 12, 24, 0.6)',
                    border: selectedExample.id === example.id ? '2px solid rgba(0, 200, 255, 0.5)' : '1px solid rgba(0, 200, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  className="hover:opacity-90"
                >
                  <div style={{ fontWeight: 600, color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                    {example.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: '#f0f0f0', opacity: 0.6 }}>
                    {example.category}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', border: '1px solid rgba(0, 200, 255, 0.2)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderBottom: '1px solid rgba(0, 200, 255, 0.2)', padding: '1rem 1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '1.125rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                  {selectedExample.title}
                </h3>
                <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: '#f0f0f0', opacity: 0.7 }}>
                  {selectedExample.description}
                </p>
              </div>
              <pre style={{ color: '#f0f0f0', opacity: 0.9, padding: '1.5rem', fontSize: '0.875rem', overflow: 'auto', maxHeight: '500px', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, margin: 0 }}>
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          </div>
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

