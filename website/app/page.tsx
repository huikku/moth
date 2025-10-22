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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold">MOTH</h1>
              <p className="text-xs text-slate-400">Minimal Overhead Technical Hierarchy</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-slate-300 hover:text-white transition">Features</Link>
            <Link href="/docs" className="text-slate-300 hover:text-white transition">Docs</Link>
            <Link href="/examples" className="text-slate-300 hover:text-white transition">Examples</Link>
            <Link href="/templates" className="text-slate-300 hover:text-white transition">Templates</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tiny specs for <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">big brains</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              MOTH is a compact, human-readable notation for <strong>PRDs</strong>, <strong>rules</strong>, and <strong>architecture</strong> that AI coding agents can load always-on without hogging tokens.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Sister project to <strong>kablUI</strong> for complete application specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs" className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
                Read the Spec
              </Link>
              <Link href="/examples" className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
                View Examples
              </Link>
            </div>
          </div>

          {/* Code Example Tabs */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
            <div className="flex border-b border-slate-700">
              {(['prd', 'rules', 'arch'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 font-semibold transition ${
                    activeTab === tab
                      ? 'bg-slate-700 text-amber-400 border-b-2 border-amber-400'
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <pre className="p-4 text-sm text-slate-300 overflow-x-auto font-mono">
              <code>{codeExamples[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-700/50">
        <h3 className="text-3xl font-bold mb-12 text-center">Why MOTH?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-3">91% Compression</h4>
            <p className="text-slate-400">
              Traditional PRD: 78K tokens. MOTH: 6.8K tokens. Same information, vastly more efficient.
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition">
            <div className="text-3xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-3">LLM-Native</h4>
            <p className="text-slate-400">
              Designed for AI agents. Low-entropy tokens, deterministic structure, easy to parse.
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition">
            <div className="text-3xl mb-4">📝</div>
            <h4 className="text-xl font-bold mb-3">Human Readable</h4>
            <p className="text-slate-400">
              Simple syntax: sections, key:value pairs, semicolon lists. No markdown overhead.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-700/50">
        <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-lg text-slate-300 mb-8">
            Learn the syntax, explore examples, and start using MOTH in your projects today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition">
              Documentation
            </Link>
            <Link href="/templates" className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
              Download Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
                <li><Link href="/examples" className="hover:text-white transition">Examples</Link></li>
                <li><Link href="/templates" className="hover:text-white transition">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/docs/quick-reference" className="hover:text-white transition">Quick Reference</Link></li>
                <li><Link href="/docs/spec" className="hover:text-white transition">Full Spec</Link></li>
                <li><Link href="/docs/integration" className="hover:text-white transition">Integration Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://github.com/huikku/moth-spec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://huikku.github.io/kablUI/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">kablUI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><span className="hover:text-white transition cursor-pointer">MIT License</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Contributing</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
            <p>© 2025 MOTH — Open notation standard. Created by <a href="https://github.com/huikku" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500 transition">huikku</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
