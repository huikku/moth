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
            <Link href="/examples" style={{ color: '#00c8ff' }} className="font-semibold">Examples</Link>
            <Link href="/templates" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Examples</h1>
        <p className="text-xl mb-12" style={{ color: '#f0f0f0', opacity: 0.9 }}>Real-world MOTH files to learn from and use as templates.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Example List */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {examples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setSelectedExample(example)}
                  style={{
                    backgroundColor: selectedExample.id === example.id ? 'rgba(0, 200, 255, 0.1)' : 'rgba(0, 12, 24, 0.4)',
                    borderColor: selectedExample.id === example.id ? 'rgba(0, 200, 255, 0.5)' : 'rgba(0, 200, 255, 0.2)',
                    color: '#f0f0f0'
                  }}
                  className="w-full text-left p-4 rounded-lg border transition hover:opacity-90"
                >
                  <div className="font-semibold">{example.title}</div>
                  <div className="text-sm mt-1" style={{ color: '#555555' }}>{example.category}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2">
            <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg overflow-hidden">
              <div style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderBottomColor: 'rgba(0, 200, 255, 0.2)' }} className="px-4 py-3 border-b">
                <h3 className="font-semibold text-lg" style={{ color: '#f0f0f0' }}>{selectedExample.title}</h3>
                <p className="text-sm mt-1" style={{ color: '#555555' }}>{selectedExample.description}</p>
              </div>
              <pre style={{ color: '#f0f0f0', opacity: 0.9 }} className="p-4 text-sm overflow-x-auto font-mono max-h-96">
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* More Examples CTA */}
        <div style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="mt-20 border rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Want more examples?</h3>
          <p className="text-lg mb-8" style={{ color: '#f0f0f0', opacity: 0.9 }}>
            Check out the full documentation and templates for more real-world MOTH files.
          </p>
          <Link href="/templates" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition inline-block">
            View Templates
          </Link>
        </div>
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

