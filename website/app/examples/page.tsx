'use client';

import Link from 'next/link';
import { useState } from 'react';

const examples = [
  {
    id: 'mediahub-dam',
    title: 'MediaHub DAM',
    description: 'Multi-tenant Digital Asset Management system with vector search, rights management, and automation',
    category: 'Full Stack',
    code: `#MOTH:repo
meta:{project:MediaHub-DAM;version:1.0;date:2025-10-27;author:System}

[GOAL]
Build a multi-tenant Digital Asset Management and Services backend with API, web app, vector search, reviews, rights, delivery, and automation. Cloud-agnostic deployment; strict RLS and typed contracts.

[FEATURES]
TenantAuth:P0; RBAC:P0; Ingest:P0; Assets:P0; Versions:P0; Renditions:P0; Search:P0; Rights:P0; Reviews:P0; Jobs:P0; Delivery:P0; Audit:P0; Monitoring:P0; Security:P0
AutoTagging:P1; Billing:P2; Watermarking:P2; WorkflowDesigner:P3

[RULES]
api_style:REST+GraphQL; tenancy:RLS_enforced; id_format:uuid_v7; originals:immutable; timestamps:utc_iso8601; webhooks:ack_fast→enqueue; rbac:model=role_acl; pii:encrypted; codegen:types_first

[SCHEMAS]
tenants:{*id=uuid;*name=string;*domain=hostname}
users:{*id=uuid;*email=email;(name)=string}
roles:{*id=uuid;*tenant_id=uuid;*user_id=uuid;*role=enum[owner,admin,editor,viewer]}
projects:{*id=uuid;*tenant_id=uuid;*name=string}
assets:{*id=uuid;*tenant_id=uuid;*project_id=uuid;*kind=enum[image,video,doc];*uri=url;*bytes=int;*hash=string;status=enum[active,deleted]}
versions:{*id=uuid;*asset_id=uuid;*seq=int;*uri=url;*bytes=int}
renditions:{*id=uuid;*version_id=uuid;*profile=enum[thumb,proxy,full];*uri=url;*width=int;*height=int}
rights:{*id=uuid;*tenant_id=uuid;*name=string;(start)=string;(end)=string}
asset_rights:{*asset_id=uuid;*rights_id=uuid;status=enum[granted,expired]}
reviews:{*id=uuid;*asset_id=uuid;*user_id=uuid;state=enum[open,approved,changes]}
jobs:{*id=uuid;*asset_id=uuid;*type=enum[thumb,proxy,tag,transcode];*status=enum[pending,done,failed]}
audit:{*id=uuid;*tenant_id=uuid;*actor=uuid;*action=enum[create,update,delete,export];*object=string;*ts=string}

[RELATIONSHIPS]
tenants→projects; projects→assets; assets→versions; versions→renditions; assets←→rights; assets→reviews; assets→jobs

[VALIDATIONS]
assets.kind=image→width!>=256;height!>=256
versions.seq:strictly_increasing
rights_window:now∉[rights.start,rights.end]→status=expired
audit_required:asset.read,asset.export

[WORKFLOWS]
ingest:{received→scanned→registered→ready}
review:{open→approved|changes→closed}
jobs:{pending→processing→done|failed}

[API]
POST:/v1/assets{project_id,kind,bytes,mime,hash}→{asset_id,upload_url}
GET:/v1/assets/{id}→{asset,versions,renditions}
POST:/v1/search/text{q,limit}→{asset_ids}
POST:/v1/reviews{asset_id,version_seq}→{review_id}
POST:/v1/jobs{asset_id,type}→{job_id}
POST:/v1/exports{asset_id,policy_id}→{uri}
GET:/v1/audit{tenant_id,limit}

[FORBIDDEN]
no_plaintext_secrets:true; no_public_originals:true; no_egress_bypass:true; no_admin_without_rbac:true

[AUTOMATION]
minute:job_dispatcher; hourly:rights_checker; nightly:index_rebuild
retry:exponential; idempotency:true; dlq:true

[DEPLOYMENT]
platform:CloudAgnostic; runtime:{API=FastAPI|Node;Workers=Queues;Storage=S3|GCS;DB=Postgres+pgvector}; ci_cd:GitHubActions

[ENVIRONMENTS]
dev:{domain=api.dev.mediahub.local}
prod:{domain=api.mediahub.io}

[INTEGRATIONS]
Auth0:OIDC; S3:SignedURLs; FFmpeg:Transcode; OpenAI:Embeddings; Cloudflare:CDN

[METRICS]
KPI:{ingest_to_ready<60s; job_success>0.98; search_p95<300ms}
alert:on_job_fail>5%; on_dlq_growth:true; on_db_p95>100ms

[END]
checksum:sha1:3f4d9bcaf1`,
    expandedPRD: `# MediaHub DAM - Product Requirements Document

## Executive Summary
MediaHub is a multi-tenant Digital Asset Management (DAM) system designed for organizations that need to manage, process, and deliver digital media assets at scale. The system provides comprehensive asset lifecycle management from ingestion through delivery, with built-in rights management, automated processing, and advanced search capabilities.

## Goals & Objectives
- Build a cloud-agnostic, multi-tenant DAM platform
- Support image, video, and document asset types
- Provide vector-based semantic search capabilities
- Implement comprehensive rights and permissions management
- Enable automated asset processing and workflow automation
- Ensure strict tenant isolation and security

## Priority Features

### P0 (Must Have - Launch Blockers)
- **Tenant Authentication & Authorization**: Multi-tenant architecture with strict row-level security (RLS)
- **Role-Based Access Control (RBAC)**: Owner, Admin, Editor, Viewer roles with granular permissions
- **Asset Ingestion**: Upload and register assets with metadata extraction
- **Asset Management**: CRUD operations for assets with versioning support
- **Version Control**: Track multiple versions of assets with sequential versioning
- **Renditions**: Generate thumbnails, proxies, and full-resolution variants
- **Search**: Text-based and vector-based semantic search
- **Rights Management**: Define and enforce usage rights with time-based windows
- **Review Workflows**: Collaborative review and approval processes
- **Job Processing**: Asynchronous job queue for transcoding, tagging, thumbnail generation
- **Delivery**: Secure asset delivery with policy enforcement
- **Audit Logging**: Complete audit trail of all asset operations
- **Monitoring**: System health, performance metrics, and alerting
- **Security**: Encryption, secure storage, no plaintext secrets

### P1 (Should Have - Post-Launch)
- **Auto-Tagging**: AI-powered automatic tagging and metadata extraction

### P2 (Nice to Have)
- **Billing**: Usage-based billing and metering
- **Watermarking**: Dynamic watermark application

### P3 (Future)
- **Workflow Designer**: Visual workflow builder for custom automation

## Technical Architecture

### API Design
- **Style**: REST + GraphQL hybrid
- **Authentication**: OIDC via Auth0
- **Tenancy**: Enforced via Row-Level Security (RLS)
- **ID Format**: UUID v7 for time-ordered identifiers
- **Timestamps**: UTC ISO8601 format
- **Webhooks**: Fast acknowledgment with background processing

### Data Model

#### Core Entities
- **Tenants**: Top-level isolation boundary (id, name, domain)
- **Users**: System users with email authentication
- **Roles**: Tenant-scoped user roles (owner/admin/editor/viewer)
- **Projects**: Organizational containers within tenants
- **Assets**: Core media files with metadata (image/video/doc types)
- **Versions**: Immutable version history for each asset
- **Renditions**: Generated variants (thumbnail/proxy/full)
- **Rights**: Usage rights definitions with optional time windows
- **Reviews**: Collaborative review workflows
- **Jobs**: Asynchronous processing tasks
- **Audit**: Complete activity log

#### Relationships
- Tenants contain Projects
- Projects contain Assets
- Assets have multiple Versions
- Versions have multiple Renditions
- Assets can have multiple Rights (many-to-many)
- Assets can have multiple Reviews
- Assets can trigger multiple Jobs

### Validation Rules
- Image assets must be at least 256x256 pixels
- Version sequences must be strictly increasing
- Rights are automatically expired when outside time window
- All asset reads and exports must be audited

### Workflows

#### Asset Ingest Flow
1. **Received**: Asset uploaded to system
2. **Scanned**: Virus scan and validation
3. **Registered**: Metadata extracted and stored
4. **Ready**: Available for use

#### Review Flow
1. **Open**: Review requested
2. **Approved** or **Changes Requested**
3. **Closed**: Review completed

#### Job Processing Flow
1. **Pending**: Job queued
2. **Processing**: Job in progress
3. **Done** or **Failed**: Job completed

### API Endpoints

#### Asset Management
- \`POST /v1/assets\`: Create asset and get upload URL
- \`GET /v1/assets/{id}\`: Retrieve asset with versions and renditions

#### Search
- \`POST /v1/search/text\`: Text and semantic search

#### Reviews
- \`POST /v1/reviews\`: Create review for asset version

#### Jobs
- \`POST /v1/jobs\`: Queue processing job

#### Delivery
- \`POST /v1/exports\`: Generate secure delivery URL

#### Audit
- \`GET /v1/audit\`: Retrieve audit logs

### Security Requirements

#### Forbidden Operations
- ❌ No plaintext secrets in configuration or logs
- ❌ No public access to original assets
- ❌ No bypassing egress controls
- ❌ No admin operations without RBAC checks

#### Data Protection
- All PII must be encrypted at rest
- Originals are immutable (no modification after upload)
- Tenant isolation enforced at database level via RLS
- All API access requires authentication

### Automation & Background Jobs

#### Scheduled Tasks
- **Every Minute**: Job dispatcher processes queue
- **Hourly**: Rights checker expires time-based rights
- **Nightly**: Search index rebuild

#### Job Processing
- Exponential backoff retry strategy
- Idempotent job execution
- Dead letter queue (DLQ) for failed jobs

### Deployment

#### Platform
- Cloud-agnostic design (AWS, GCP, Azure compatible)

#### Runtime Components
- **API**: FastAPI or Node.js
- **Workers**: Queue-based job processors
- **Storage**: S3 or Google Cloud Storage
- **Database**: PostgreSQL with pgvector extension
- **CI/CD**: GitHub Actions

#### Environments
- **Development**: api.dev.mediahub.local
- **Production**: api.mediahub.io

### Integrations
- **Auth0**: OIDC authentication
- **S3/GCS**: Signed URLs for secure uploads/downloads
- **FFmpeg**: Video transcoding
- **OpenAI**: Embedding generation for semantic search
- **Cloudflare**: CDN for asset delivery

### Performance & Monitoring

#### Key Performance Indicators (KPIs)
- Ingest to ready time: < 60 seconds
- Job success rate: > 98%
- Search P95 latency: < 300ms

#### Alerts
- Job failure rate > 5%
- Dead letter queue growth
- Database P95 latency > 100ms

## Success Criteria
- Multi-tenant isolation verified via security audit
- All P0 features implemented and tested
- Performance KPIs met under load testing
- Security requirements validated
- Successful pilot with 3 beta customers

## Out of Scope (This Release)
- Mobile applications (web-only for v1.0)
- Real-time collaboration features
- Advanced workflow designer
- Custom branding per tenant`,
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
  const [viewMode, setViewMode] = useState<'moth' | 'expanded'>('moth');

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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '1.125rem', color: '#f0f0f0', fontFamily: "'Poppins', sans-serif" }}>
                    {selectedExample.title}
                  </h3>
                  {selectedExample.expandedPRD && (
                    <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '6px', padding: '0.25rem' }}>
                      <button
                        onClick={() => setViewMode('moth')}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          backgroundColor: viewMode === 'moth' ? 'rgba(0, 200, 255, 0.3)' : 'transparent',
                          color: '#f0f0f0',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          transition: 'all 0.2s'
                        }}
                      >
                        MOTH
                      </button>
                      <button
                        onClick={() => setViewMode('expanded')}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          backgroundColor: viewMode === 'expanded' ? 'rgba(0, 200, 255, 0.3)' : 'transparent',
                          color: '#f0f0f0',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          transition: 'all 0.2s'
                        }}
                      >
                        Expanded PRD
                      </button>
                    </div>
                  )}
                </div>
                <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: '#f0f0f0', opacity: 0.7 }}>
                  {selectedExample.description}
                </p>
              </div>
              {viewMode === 'moth' ? (
                <pre style={{ color: '#f0f0f0', opacity: 0.9, padding: '1.5rem', fontSize: '0.875rem', overflow: 'auto', maxHeight: '600px', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, margin: 0 }}>
                  <code>{selectedExample.code}</code>
                </pre>
              ) : (
                <div style={{ color: '#f0f0f0', opacity: 0.9, padding: '1.5rem', fontSize: '0.875rem', overflow: 'auto', maxHeight: '600px', fontFamily: "'Barlow Semi Condensed', sans-serif", lineHeight: 1.8 }}>
                  <div dangerouslySetInnerHTML={{ __html: selectedExample.expandedPRD?.replace(/\n/g, '<br/>').replace(/^# (.+)$/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #ffffff; font-family: \'Poppins\', sans-serif">$1</h2>').replace(/^## (.+)$/gm, '<h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #ffffff; font-family: \'Poppins\', sans-serif">$1</h3>').replace(/^### (.+)$/gm, '<h4 style="font-size: 1.1rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; color: #ffffff; font-family: \'Poppins\', sans-serif">$1</h4>').replace(/^#### (.+)$/gm, '<h5 style="font-size: 1rem; font-weight: 600; margin-top: 0.75rem; margin-bottom: 0.5rem; color: #ffffff; font-family: \'Poppins\', sans-serif">$1</h5>').replace(/\*\*(.+?)\*\*/g, '<strong style="color: #ffffff">$1</strong>').replace(/`(.+?)`/g, '<code style="background-color: rgba(0, 200, 255, 0.1); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: \'JetBrains Mono\', monospace; font-size: 0.85em">$1</code>').replace(/^- (.+)$/gm, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem">$1</li>').replace(/^❌ (.+)$/gm, '<div style="margin-left: 1.5rem; margin-bottom: 0.5rem">❌ $1</div>') || '' }} />
                </div>
              )}
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

