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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold">MOTH</h1>
              <p className="text-xs text-slate-400">Minimal Overhead Technical Hierarchy</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/docs" className="text-slate-300 hover:text-white transition">Docs</Link>
            <Link href="/examples" className="text-amber-400 font-semibold">Examples</Link>
            <Link href="/templates" className="text-slate-300 hover:text-white transition">Templates</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4">Examples</h1>
        <p className="text-xl text-slate-300 mb-12">Real-world MOTH files to learn from and use as templates.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Example List */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {examples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setSelectedExample(example)}
                  className={`w-full text-left p-4 rounded-lg border transition ${
                    selectedExample.id === example.id
                      ? 'bg-amber-400/10 border-amber-400/50'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600'
                  }`}
                >
                  <div className="font-semibold">{example.title}</div>
                  <div className="text-sm text-slate-400 mt-1">{example.category}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-slate-700/50 px-4 py-3 border-b border-slate-700">
                <h3 className="font-semibold text-lg">{selectedExample.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{selectedExample.description}</p>
              </div>
              <pre className="p-4 text-sm text-slate-300 overflow-x-auto font-mono max-h-96">
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* More Examples CTA */}
        <div className="mt-20 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Want more examples?</h3>
          <p className="text-lg text-slate-300 mb-8">
            Check out the full documentation and templates for more real-world MOTH files.
          </p>
          <Link href="/templates" className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition inline-block">
            View Templates
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-400">
          <p>© 2025 MOTH — Open notation standard. MIT License.</p>
        </div>
      </footer>
    </div>
  );
}

