'use client';

import Link from 'next/link';
import { useState } from 'react';

const codeExamples = {
  prd: `intent:product_requirements; audience:dev_team
version:1.0.0; updated:2025-10-22

[PRODUCT]
name:TaskFlow; type:saas; domain:project_management

[FEATURES]
boards:kanban+list+calendar
tasks:create;assign;track;comment
realtime:websocket; notifications:email+push

[STACK]
frontend:react+typescript; backend:fastapi
db:postgresql; realtime:pusher; auth:clerk`,
  rules: `intent:coding_standards; audience:cursor+copilot

[STYLE]
lang:typescript; format:prettier; lint:eslint_strict
naming:camelCase_vars;PascalCase_types
quotes:single; semicolons:required

[ARCHITECTURE]
pattern:clean_architecture
layers:domain;application;infrastructure
testing:vitest; coverage:80%_min

[FORBIDDEN]
no:any_type;console.log;eval;var`,
  arch: `intent:system_architecture; audience:implementation_team

[SERVICES]
api:fastapi+uvicorn; worker:celery+redis
db:postgresql_16; cache:redis_7; queue:sqs
storage:s3; cdn:cloudfront

[DATA_FLOW]
client -> cdn -> alb -> api_pods -> cache -> postgres
api -> queue -> worker -> db

[SCALING]
api:horizontal_ecs; worker:auto_scale_queue_depth
db:read_replicas_3; cache:cluster_mode`,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'prd' | 'rules' | 'arch'>('prd');

  return (
    <div style={{ backgroundColor: '#080808', color: '#f0f0f0' }} className="min-h-screen">
      {/* Header */}
      <header style={{ borderBottomColor: 'rgba(0, 200, 255, 0.1)', backgroundColor: 'rgba(8, 8, 8, 0.95)' }} className="border-b backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div style={{ backgroundColor: '#00c8ff', color: '#080808' }} className="w-8 h-8 rounded-lg flex items-center justify-center font-bold">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#00c8ff' }}>MOTH</h1>
              <p className="text-xs" style={{ color: '#555555' }}>Minimal Overhead Technical Hierarchy</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#features" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Features</Link>
            <Link href="/docs" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Docs</Link>
            <Link href="/examples" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Examples</Link>
            <Link href="/templates" style={{ color: '#f0f0f0' }} className="hover:opacity-80 transition">Templates</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#f0f0f0' }}>
              Tiny specs for <span style={{ color: '#00c8ff' }}>big brains</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#f0f0f0', opacity: 0.9 }}>
              MOTH is a compact, human-readable notation for <strong>PRDs</strong>, <strong>rules</strong>, and <strong>architecture</strong> that AI coding agents can load always-on without hogging tokens.
            </p>
            <p className="text-lg mb-8" style={{ color: '#555555' }}>
              Sister project to <strong>kablUI</strong> for complete application specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition">
                Read the Spec
              </Link>
              <Link href="/examples" style={{ borderColor: '#00c8ff', color: '#00c8ff' }} className="px-8 py-3 border font-semibold rounded-lg hover:opacity-80 transition">
                View Examples
              </Link>
            </div>
          </div>

          {/* Code Example Tabs */}
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.6)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg overflow-hidden">
            <div style={{ borderBottomColor: 'rgba(0, 200, 255, 0.2)' }} className="flex border-b">
              {(['prd', 'rules', 'arch'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? 'rgba(0, 200, 255, 0.1)' : 'transparent',
                    color: activeTab === tab ? '#00c8ff' : '#555555',
                    borderBottomColor: activeTab === tab ? '#00c8ff' : 'transparent',
                  }}
                  className="flex-1 px-4 py-3 font-semibold transition border-b-2"
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <pre style={{ color: '#f0f0f0', opacity: 0.9 }} className="p-4 text-sm overflow-x-auto font-mono">
              <code>{codeExamples[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ borderTopColor: 'rgba(0, 200, 255, 0.1)' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t">
        <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: '#f0f0f0' }}>Why MOTH?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#f0f0f0' }}>91% Compression</h4>
            <p style={{ color: '#555555' }}>
              Traditional PRD: 78K tokens. MOTH: 6.8K tokens. Same information, vastly more efficient.
            </p>
          </div>
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition">
            <div className="text-3xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#f0f0f0' }}>LLM-Native</h4>
            <p style={{ color: '#555555' }}>
              Designed for AI agents. Low-entropy tokens, deterministic structure, easy to parse.
            </p>
          </div>
          <div style={{ backgroundColor: 'rgba(0, 12, 24, 0.4)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-8 hover:opacity-90 transition">
            <div className="text-3xl mb-4">📝</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#f0f0f0' }}>Human Readable</h4>
            <p style={{ color: '#555555' }}>
              Simple syntax: sections, key:value pairs, semicolon lists. No markdown overhead.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ borderTopColor: 'rgba(0, 200, 255, 0.1)' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t">
        <div style={{ backgroundColor: 'rgba(0, 200, 255, 0.05)', borderColor: 'rgba(0, 200, 255, 0.2)' }} className="border rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#f0f0f0' }}>Ready to get started?</h3>
          <p className="text-lg mb-8" style={{ color: '#f0f0f0', opacity: 0.9 }}>
            Learn the syntax, explore examples, and start using MOTH in your projects today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" style={{ backgroundColor: '#00c8ff', color: '#080808', boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)' }} className="px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition">
              Documentation
            </Link>
            <Link href="/templates" style={{ borderColor: '#00c8ff', color: '#00c8ff' }} className="px-8 py-3 border font-semibold rounded-lg hover:opacity-80 transition">
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
              <h4 className="font-bold mb-4" style={{ color: '#f0f0f0' }}>Product</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" style={{ color: '#555555' }} className="hover:opacity-80 transition">Documentation</Link></li>
                <li><Link href="/examples" style={{ color: '#555555' }} className="hover:opacity-80 transition">Examples</Link></li>
                <li><Link href="/templates" style={{ color: '#555555' }} className="hover:opacity-80 transition">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#f0f0f0' }}>Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/quick-reference" style={{ color: '#555555' }} className="hover:opacity-80 transition">Quick Reference</Link></li>
                <li><Link href="/docs/spec" style={{ color: '#555555' }} className="hover:opacity-80 transition">Full Spec</Link></li>
                <li><Link href="/docs/integration" style={{ color: '#555555' }} className="hover:opacity-80 transition">Integration Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#f0f0f0' }}>Community</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" style={{ color: '#555555' }} className="hover:opacity-80 transition">GitHub</a></li>
                <li><a href="https://huikku.github.io/kablUI/" target="_blank" rel="noopener noreferrer" style={{ color: '#555555' }} className="hover:opacity-80 transition">kablUI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#f0f0f0' }}>Legal</h4>
              <ul className="space-y-2">
                <li><span style={{ color: '#555555' }} className="hover:opacity-80 transition cursor-pointer">MIT License</span></li>
                <li><span style={{ color: '#555555' }} className="hover:opacity-80 transition cursor-pointer">Contributing</span></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTopColor: 'rgba(0, 200, 255, 0.1)', color: '#555555' }} className="border-t pt-8 text-center">
            <p>© 2025 MOTH — Open notation standard. Created by <a href="https://github.com/huikku" target="_blank" rel="noopener noreferrer" style={{ color: '#00c8ff' }} className="hover:opacity-80 transition">huikku</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
