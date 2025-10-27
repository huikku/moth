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
    expandedPRD: `<div style="font-family: 'Barlow Semi Condensed', sans-serif; line-height: 1.8; color: #e0e0e0;">

<h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 3px solid rgba(0, 200, 255, 0.5); padding-bottom: 1rem;">MediaHub DAM</h1>
<h2 style="font-size: 1.25rem; font-weight: 400; margin-bottom: 2rem; color: #a0a0a0; font-style: italic;">Product Requirements Document v1.0</h2>

<div style="background-color: rgba(0, 200, 255, 0.1); border-left: 4px solid rgba(0, 200, 255, 0.8); padding: 1.5rem; margin-bottom: 2rem; border-radius: 4px;">
<h2 style="font-size: 1.75rem; font-weight: 600; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif;">📋 Executive Summary</h2>
<p style="margin-bottom: 1rem;">MediaHub is a <strong style="color: #ffffff;">multi-tenant Digital Asset Management (DAM)</strong> system designed for organizations that need to manage, process, and deliver digital media assets at scale. The system provides comprehensive asset lifecycle management from ingestion through delivery, with built-in rights management, automated processing, and advanced search capabilities.</p>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Target Market:</strong> Enterprise media teams, marketing agencies, content creators, and organizations managing large digital asset libraries</p>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Key Differentiator:</strong> Cloud-agnostic architecture with vector-based semantic search and comprehensive rights management</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🎯 Goals & Objectives</h2>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.75rem;">Build a <strong style="color: #ffffff;">cloud-agnostic, multi-tenant</strong> DAM platform that works on AWS, GCP, or Azure</li>
<li style="margin-bottom: 0.75rem;">Support <strong style="color: #ffffff;">image, video, and document</strong> asset types with automatic format detection</li>
<li style="margin-bottom: 0.75rem;">Provide <strong style="color: #ffffff;">vector-based semantic search</strong> capabilities using AI embeddings</li>
<li style="margin-bottom: 0.75rem;">Implement comprehensive <strong style="color: #ffffff;">rights and permissions management</strong> with time-based windows</li>
<li style="margin-bottom: 0.75rem;">Enable <strong style="color: #ffffff;">automated asset processing</strong> and workflow automation</li>
<li style="margin-bottom: 0.75rem;">Ensure <strong style="color: #ffffff;">strict tenant isolation</strong> and enterprise-grade security</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">✨ Feature Priorities</h2>

<div style="background-color: rgba(255, 100, 100, 0.1); border-left: 4px solid rgba(255, 100, 100, 0.8); padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 4px;">
<h3 style="font-size: 1.35rem; font-weight: 600; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif;">🔴 P0 - Must Have (Launch Blockers)</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">🔐 Tenant Auth & Authorization</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Multi-tenant architecture with strict row-level security (RLS)</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">👥 RBAC</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Owner, Admin, Editor, Viewer roles with granular permissions</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">📥 Asset Ingestion</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Upload and register assets with metadata extraction</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">📦 Asset Management</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">CRUD operations for assets with versioning support</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">🔄 Version Control</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Track multiple versions with sequential versioning</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">🖼️ Renditions</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Generate thumbnails, proxies, and full-resolution variants</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">🔍 Search</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Text-based and vector-based semantic search</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">⚖️ Rights Management</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Define and enforce usage rights with time-based windows</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">✅ Review Workflows</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Collaborative review and approval processes</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">⚙️ Job Processing</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Async queue for transcoding, tagging, thumbnails</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">🚀 Delivery</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Secure asset delivery with policy enforcement</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">📊 Audit Logging</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Complete audit trail of all asset operations</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">📈 Monitoring</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">System health, performance metrics, and alerting</p>
</div>
<div>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">🔒 Security</strong></p>
<p style="font-size: 0.9rem; color: #b0b0b0; margin-left: 1rem;">Encryption, secure storage, no plaintext secrets</p>
</div>
</div>
</div>

<div style="background-color: rgba(255, 200, 100, 0.1); border-left: 4px solid rgba(255, 200, 100, 0.8); padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: #ffffff; font-family: 'Poppins', sans-serif;">🟡 P1 - Should Have (Post-Launch)</h3>
<p><strong style="color: #ffffff;">🤖 Auto-Tagging:</strong> AI-powered automatic tagging and metadata extraction</p>
</div>

<div style="background-color: rgba(100, 200, 255, 0.1); border-left: 4px solid rgba(100, 200, 255, 0.8); padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: #ffffff; font-family: 'Poppins', sans-serif;">🔵 P2 - Nice to Have</h3>
<p style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">💳 Billing:</strong> Usage-based billing and metering</p>
<p><strong style="color: #ffffff;">🏷️ Watermarking:</strong> Dynamic watermark application</p>
</div>

<div style="background-color: rgba(150, 150, 150, 0.1); border-left: 4px solid rgba(150, 150, 150, 0.8); padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: #ffffff; font-family: 'Poppins', sans-serif;">⚪ P3 - Future</h3>
<p><strong style="color: #ffffff;">🎨 Workflow Designer:</strong> Visual workflow builder for custom automation</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🏗️ Technical Architecture</h2>

<h3 style="font-size: 1.35rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #ffffff; font-family: 'Poppins', sans-serif;">API Design Principles</h3>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
<tr style="background-color: rgba(0, 200, 255, 0.1);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: 600; color: #ffffff;">Aspect</td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: 600; color: #ffffff;">Implementation</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">API Style</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">REST + GraphQL hybrid</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Authentication</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">OIDC via Auth0</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Tenancy</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Enforced via Row-Level Security (RLS)</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">ID Format</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">UUID v7 (time-ordered identifiers)</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Timestamps</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">UTC ISO8601 format</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Webhooks</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Fast acknowledgment → background processing</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Code Generation</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Types-first approach</td>
</tr>
</table>

<h3 style="font-size: 1.35rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #ffffff; font-family: 'Poppins', sans-serif;">Data Model</h3>

<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
<h4 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: #00c8ff;">Core Entities</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #00c8ff;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">🏢 Tenants</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Top-level isolation boundary</p>
<code style="font-size: 0.75rem; color: #00c8ff;">id, name, domain</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #00c8ff;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">👤 Users</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">System users with email auth</p>
<code style="font-size: 0.75rem; color: #00c8ff;">id, email, name</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #00c8ff;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">🎭 Roles</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Tenant-scoped permissions</p>
<code style="font-size: 0.75rem; color: #00c8ff;">owner/admin/editor/viewer</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #00c8ff;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">📁 Projects</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Organizational containers</p>
<code style="font-size: 0.75rem; color: #00c8ff;">id, tenant_id, name</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #ff6b6b;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">🎬 Assets</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Core media files</p>
<code style="font-size: 0.75rem; color: #ff6b6b;">image/video/doc types</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #ff6b6b;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">📝 Versions</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Immutable version history</p>
<code style="font-size: 0.75rem; color: #ff6b6b;">seq, uri, bytes</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #ff6b6b;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">🖼️ Renditions</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Generated variants</p>
<code style="font-size: 0.75rem; color: #ff6b6b;">thumb/proxy/full</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #ffd93d;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">⚖️ Rights</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Usage rights definitions</p>
<code style="font-size: 0.75rem; color: #ffd93d;">time windows, policies</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #a78bfa;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">✅ Reviews</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Collaborative workflows</p>
<code style="font-size: 0.75rem; color: #a78bfa;">open/approved/changes</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #6ee7b7;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">⚙️ Jobs</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Async processing tasks</p>
<code style="font-size: 0.75rem; color: #6ee7b7;">thumb/proxy/tag/transcode</code>
</div>
<div style="background-color: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 4px; border-left: 3px solid #94a3b8;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">📊 Audit</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Complete activity log</p>
<code style="font-size: 0.75rem; color: #94a3b8;">create/update/delete/export</code>
</div>
</div>
</div>

<h4 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #00c8ff;">Entity Relationships</h4>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Tenants <span style="color: #00c8ff;">→</span> Projects (one-to-many)</li>
<li style="margin-bottom: 0.5rem;">Projects <span style="color: #00c8ff;">→</span> Assets (one-to-many)</li>
<li style="margin-bottom: 0.5rem;">Assets <span style="color: #00c8ff;">→</span> Versions (one-to-many)</li>
<li style="margin-bottom: 0.5rem;">Versions <span style="color: #00c8ff;">→</span> Renditions (one-to-many)</li>
<li style="margin-bottom: 0.5rem;">Assets <span style="color: #00c8ff;">←→</span> Rights (many-to-many)</li>
<li style="margin-bottom: 0.5rem;">Assets <span style="color: #00c8ff;">→</span> Reviews (one-to-many)</li>
<li style="margin-bottom: 0.5rem;">Assets <span style="color: #00c8ff;">→</span> Jobs (one-to-many)</li>
</ul>

<h3 style="font-size: 1.35rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #ffffff; font-family: 'Poppins', sans-serif;">Validation Rules</h3>
<div style="background-color: rgba(255, 200, 100, 0.1); border-left: 4px solid rgba(255, 200, 100, 0.8); padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
<ul style="margin-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Image assets must be <strong style="color: #ffffff;">at least 256x256 pixels</strong></li>
<li style="margin-bottom: 0.5rem;">Version sequences must be <strong style="color: #ffffff;">strictly increasing</strong></li>
<li style="margin-bottom: 0.5rem;">Rights are <strong style="color: #ffffff;">automatically expired</strong> when outside time window</li>
<li style="margin-bottom: 0.5rem;">All asset reads and exports <strong style="color: #ffffff;">must be audited</strong></li>
</ul>
</div>

<h3 style="font-size: 1.35rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #ffffff; font-family: 'Poppins', sans-serif;">Workflows & State Machines</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
<div style="background-color: rgba(0, 200, 255, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(0, 200, 255, 0.3);">
<h4 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: #00c8ff;">📥 Asset Ingest Flow</h4>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
<span style="background-color: rgba(0, 200, 255, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Received</span>
<span style="color: #00c8ff;">→</span>
<span style="background-color: rgba(0, 200, 255, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Scanned</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
<span style="background-color: rgba(0, 200, 255, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Scanned</span>
<span style="color: #00c8ff;">→</span>
<span style="background-color: rgba(0, 200, 255, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Registered</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem;">
<span style="background-color: rgba(0, 200, 255, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Registered</span>
<span style="color: #00c8ff;">→</span>
<span style="background-color: rgba(100, 255, 100, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Ready</span>
</div>
</div>

<div style="background-color: rgba(168, 139, 250, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(168, 139, 250, 0.3);">
<h4 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: #a78bfa;">✅ Review Flow</h4>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
<span style="background-color: rgba(168, 139, 250, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Open</span>
<span style="color: #a78bfa;">→</span>
<span style="background-color: rgba(168, 139, 250, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Approved</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
<span style="background-color: rgba(168, 139, 250, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Open</span>
<span style="color: #a78bfa;">→</span>
<span style="background-color: rgba(168, 139, 250, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Changes</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem;">
<span style="background-color: rgba(168, 139, 250, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Any</span>
<span style="color: #a78bfa;">→</span>
<span style="background-color: rgba(100, 255, 100, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Closed</span>
</div>
</div>

<div style="background-color: rgba(110, 231, 183, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(110, 231, 183, 0.3);">
<h4 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: #6ee7b7;">⚙️ Job Processing Flow</h4>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
<span style="background-color: rgba(110, 231, 183, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Pending</span>
<span style="color: #6ee7b7;">→</span>
<span style="background-color: rgba(110, 231, 183, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Processing</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
<span style="background-color: rgba(110, 231, 183, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Processing</span>
<span style="color: #6ee7b7;">→</span>
<span style="background-color: rgba(100, 255, 100, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Done</span>
</div>
<div style="display: flex; align-items: center; gap: 0.5rem;">
<span style="background-color: rgba(110, 231, 183, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">Processing</span>
<span style="color: #6ee7b7;">→</span>
<span style="background-color: rgba(255, 100, 100, 0.3); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Failed</span>
</div>
</div>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🔌 API Endpoints</h2>

<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
<p style="margin-bottom: 0.75rem;"><span style="color: #6ee7b7; font-weight: 600;">POST</span> <span style="color: #00c8ff;">/v1/assets</span> → Create asset and get upload URL</p>
<p style="margin-bottom: 0.75rem;"><span style="color: #ffd93d; font-weight: 600;">GET</span> <span style="color: #00c8ff;">/v1/assets/{id}</span> → Retrieve asset with versions and renditions</p>
<p style="margin-bottom: 0.75rem;"><span style="color: #6ee7b7; font-weight: 600;">POST</span> <span style="color: #00c8ff;">/v1/search/text</span> → Text and semantic search</p>
<p style="margin-bottom: 0.75rem;"><span style="color: #6ee7b7; font-weight: 600;">POST</span> <span style="color: #00c8ff;">/v1/reviews</span> → Create review for asset version</p>
<p style="margin-bottom: 0.75rem;"><span style="color: #6ee7b7; font-weight: 600;">POST</span> <span style="color: #00c8ff;">/v1/jobs</span> → Queue processing job</p>
<p style="margin-bottom: 0.75rem;"><span style="color: #6ee7b7; font-weight: 600;">POST</span> <span style="color: #00c8ff;">/v1/exports</span> → Generate secure delivery URL</p>
<p><span style="color: #ffd93d; font-weight: 600;">GET</span> <span style="color: #00c8ff;">/v1/audit</span> → Retrieve audit logs</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🔒 Security & Compliance</h2>

<div style="background-color: rgba(255, 100, 100, 0.1); border-left: 4px solid rgba(255, 100, 100, 0.8); padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif;">❌ Forbidden Operations</h3>
<ul style="margin-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">No plaintext secrets in configuration or logs</li>
<li style="margin-bottom: 0.5rem;">No public access to original assets</li>
<li style="margin-bottom: 0.5rem;">No bypassing egress controls</li>
<li style="margin-bottom: 0.5rem;">No admin operations without RBAC checks</li>
</ul>
</div>

<div style="background-color: rgba(100, 255, 100, 0.1); border-left: 4px solid rgba(100, 255, 100, 0.8); padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif;">✅ Data Protection</h3>
<ul style="margin-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">All PII must be <strong style="color: #ffffff;">encrypted at rest</strong></li>
<li style="margin-bottom: 0.5rem;">Originals are <strong style="color: #ffffff;">immutable</strong> (no modification after upload)</li>
<li style="margin-bottom: 0.5rem;">Tenant isolation enforced at database level via <strong style="color: #ffffff;">RLS</strong></li>
<li style="margin-bottom: 0.5rem;">All API access requires <strong style="color: #ffffff;">authentication</strong></li>
</ul>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">⚙️ Automation & Background Jobs</h2>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
<tr style="background-color: rgba(0, 200, 255, 0.1);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: 600; color: #ffffff;">Schedule</td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: 600; color: #ffffff;">Task</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Every Minute</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Job dispatcher processes queue</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Hourly</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Rights checker expires time-based rights</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Nightly</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Search index rebuild</td>
</tr>
</table>

<p style="margin-bottom: 1rem;"><strong style="color: #ffffff;">Job Processing Strategy:</strong></p>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Exponential backoff retry strategy</li>
<li style="margin-bottom: 0.5rem;">Idempotent job execution</li>
<li style="margin-bottom: 0.5rem;">Dead letter queue (DLQ) for failed jobs</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🚀 Deployment & Infrastructure</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background-color: rgba(0, 200, 255, 0.1); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 200, 255, 0.3);">
<p style="font-weight: 600; color: #00c8ff; margin-bottom: 0.5rem;">API Layer</p>
<p style="font-size: 0.9rem;">FastAPI or Node.js</p>
</div>
<div style="background-color: rgba(110, 231, 183, 0.1); padding: 1rem; border-radius: 8px; border: 1px solid rgba(110, 231, 183, 0.3);">
<p style="font-weight: 600; color: #6ee7b7; margin-bottom: 0.5rem;">Workers</p>
<p style="font-size: 0.9rem;">Queue-based processors</p>
</div>
<div style="background-color: rgba(255, 211, 61, 0.1); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255, 211, 61, 0.3);">
<p style="font-weight: 600; color: #ffd93d; margin-bottom: 0.5rem;">Storage</p>
<p style="font-size: 0.9rem;">S3 or Google Cloud Storage</p>
</div>
<div style="background-color: rgba(168, 139, 250, 0.1); padding: 1rem; border-radius: 8px; border: 1px solid rgba(168, 139, 250, 0.3);">
<p style="font-weight: 600; color: #a78bfa; margin-bottom: 0.5rem;">Database</p>
<p style="font-size: 0.9rem;">PostgreSQL + pgvector</p>
</div>
</div>

<p style="margin-bottom: 1rem;"><strong style="color: #ffffff;">Integrations:</strong></p>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Auth0:</strong> OIDC authentication</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">S3/GCS:</strong> Signed URLs for secure uploads/downloads</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">FFmpeg:</strong> Video transcoding</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">OpenAI:</strong> Embedding generation for semantic search</li>
<li style="margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Cloudflare:</strong> CDN for asset delivery</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">📊 Performance & Monitoring</h2>

<div style="background-color: rgba(100, 255, 100, 0.1); border-left: 4px solid rgba(100, 255, 100, 0.8); padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif;">Key Performance Indicators (KPIs)</h3>
<ul style="margin-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Ingest to ready time: <strong style="color: #ffffff;">&lt; 60 seconds</strong></li>
<li style="margin-bottom: 0.5rem;">Job success rate: <strong style="color: #ffffff;">&gt; 98%</strong></li>
<li style="margin-bottom: 0.5rem;">Search P95 latency: <strong style="color: #ffffff;">&lt; 300ms</strong></li>
</ul>
</div>

<div style="background-color: rgba(255, 100, 100, 0.1); border-left: 4px solid rgba(255, 100, 100, 0.8); padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 4px;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif;">Alert Conditions</h3>
<ul style="margin-left: 1.5rem;">
<li style="margin-bottom: 0.5rem;">Job failure rate &gt; 5%</li>
<li style="margin-bottom: 0.5rem;">Dead letter queue growth</li>
<li style="margin-bottom: 0.5rem;">Database P95 latency &gt; 100ms</li>
</ul>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">✅ Success Criteria</h2>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.75rem;">Multi-tenant isolation verified via security audit</li>
<li style="margin-bottom: 0.75rem;">All P0 features implemented and tested</li>
<li style="margin-bottom: 0.75rem;">Performance KPIs met under load testing</li>
<li style="margin-bottom: 0.75rem;">Security requirements validated</li>
<li style="margin-bottom: 0.75rem;">Successful pilot with 3 beta customers</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🚫 Out of Scope (This Release)</h2>
<ul style="margin-left: 1.5rem; margin-bottom: 2rem;">
<li style="margin-bottom: 0.5rem;">Mobile applications (web-only for v1.0)</li>
<li style="margin-bottom: 0.5rem;">Real-time collaboration features</li>
<li style="margin-bottom: 0.5rem;">Advanced workflow designer</li>
<li style="margin-bottom: 0.5rem;">Custom branding per tenant</li>
</ul>

</div>`,
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
    expandedPRD: `<div style="font-family: 'Barlow Semi Condensed', sans-serif; line-height: 1.8; color: #e0e0e0;">
<h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 3px solid rgba(0, 200, 255, 0.5); padding-bottom: 1rem;">TypeScript Coding Standards</h1>
<h2 style="font-size: 1.25rem; font-weight: 400; margin-bottom: 2rem; color: #a0a0a0; font-style: italic;">For Cursor, Copilot, and Development Teams</h2>

<div style="background-color: rgba(0, 200, 255, 0.1); border-left: 4px solid rgba(0, 200, 255, 0.8); padding: 1.5rem; margin-bottom: 2rem; border-radius: 4px;">
<p>This document defines the coding standards and conventions for TypeScript/React projects. These rules are designed to be consumed by AI coding assistants (Cursor, Copilot) and enforced through automated tooling.</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🎨 Code Style</h2>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Language:</strong> TypeScript (strict mode)</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Formatter:</strong> Prettier with default config</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Linter:</strong> ESLint with strict ruleset</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Naming Conventions:</strong>
  <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
    <li>Variables & functions: <code style="background-color: rgba(0, 200, 255, 0.1); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">camelCase</code></li>
    <li>Types & interfaces: <code style="background-color: rgba(0, 200, 255, 0.1); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">PascalCase</code></li>
    <li>Constants: <code style="background-color: rgba(0, 200, 255, 0.1); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">SCREAMING_SNAKE_CASE</code></li>
  </ul>
</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Quotes:</strong> Single quotes for strings</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Semicolons:</strong> Required</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Trailing Commas:</strong> Always (improves git diffs)</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🏗️ Architecture</h2>
<p style="margin-bottom: 1rem;"><strong style="color: #ffffff;">Pattern:</strong> Clean Architecture with clear layer separation</p>
<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #00c8ff;">Layers</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
<div style="background-color: rgba(0, 200, 255, 0.1); padding: 1rem; border-radius: 4px; border-left: 3px solid #00c8ff;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">Domain</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Business logic, entities</p>
<p style="font-size: 0.75rem; color: #6ee7b7; margin-top: 0.5rem;">Dependencies: None</p>
</div>
<div style="background-color: rgba(168, 139, 250, 0.1); padding: 1rem; border-radius: 4px; border-left: 3px solid #a78bfa;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">Application</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">Use cases, orchestration</p>
<p style="font-size: 0.75rem; color: #6ee7b7; margin-top: 0.5rem;">Dependencies: Domain only</p>
</div>
<div style="background-color: rgba(255, 211, 61, 0.1); padding: 1rem; border-radius: 4px; border-left: 3px solid #ffd93d;">
<p style="font-weight: 600; color: #ffffff; margin-bottom: 0.5rem;">Infrastructure</p>
<p style="font-size: 0.85rem; color: #b0b0b0;">API, DB, external services</p>
<p style="font-size: 0.75rem; color: #6ee7b7; margin-top: 0.5rem;">Dependencies: All layers</p>
</div>
</div>
</div>
<p style="margin-bottom: 1rem;"><strong style="color: #ffffff;">Module Organization:</strong> Feature-based (not layer-based)</p>
<p style="margin-bottom: 1.5rem;"><strong style="color: #ffffff;">Imports:</strong> Use absolute paths (e.g., <code style="background-color: rgba(0, 200, 255, 0.1); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">@/features/auth</code>)</p>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🧪 Testing</h2>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Framework:</strong> Vitest (fast, Vite-native)</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Coverage:</strong> Minimum 80% required</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Pattern:</strong> Arrange-Act-Assert (AAA)</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Mocks:</strong> Prefer fakes over mocks when possible</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">E2E:</strong> Playwright for end-to-end tests</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">CI:</strong> All tests must pass before merge</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">📋 Conventions</h2>
<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
<p style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Error Handling:</strong> Use <code style="background-color: rgba(0, 200, 255, 0.1); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">Result&lt;T, E&gt;</code> pattern, no exceptions</p>
<p style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Async:</strong> Use async/await, no callbacks</p>
<p style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">State Management:</strong> Zustand with immutable updates</p>
<p style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">API Calls:</strong> React Query for server state</p>
<p style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Forms:</strong> React Hook Form for form state</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">❌ Forbidden Patterns</h2>
<div style="background-color: rgba(255, 100, 100, 0.1); border-left: 4px solid rgba(255, 100, 100, 0.8); padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 4px;">
<ul style="margin-left: 1.5rem;">
<li style="margin-bottom: 0.75rem;"><code style="background-color: rgba(255, 100, 100, 0.2); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">any</code> type (use <code style="background-color: rgba(100, 255, 100, 0.2); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">unknown</code> instead)</li>
<li style="margin-bottom: 0.75rem;"><code style="background-color: rgba(255, 100, 100, 0.2); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">console.log</code> (use proper logging)</li>
<li style="margin-bottom: 0.75rem;"><code style="background-color: rgba(255, 100, 100, 0.2); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">eval</code>, <code style="background-color: rgba(255, 100, 100, 0.2); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">with</code>, <code style="background-color: rgba(255, 100, 100, 0.2); padding: 0.125rem 0.375rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">var</code></li>
<li style="margin-bottom: 0.75rem;">Default exports (use named exports)</li>
<li style="margin-bottom: 0.75rem;">Class inheritance (prefer composition)</li>
</ul>
</div>

</div>`,
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
    expandedPRD: `<div style="font-family: 'Barlow Semi Condensed', sans-serif; line-height: 1.8; color: #e0e0e0;">
<h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 3px solid rgba(0, 200, 255, 0.5); padding-bottom: 1rem;">Microservices Architecture</h1>
<h2 style="font-size: 1.25rem; font-weight: 400; margin-bottom: 2rem; color: #a0a0a0; font-style: italic;">System Design Document</h2>

<div style="background-color: rgba(0, 200, 255, 0.1); border-left: 4px solid rgba(0, 200, 255, 0.8); padding: 1.5rem; margin-bottom: 2rem; border-radius: 4px;">
<p>This document outlines the microservices architecture for a scalable, cloud-native application. The design emphasizes horizontal scalability, fault tolerance, and operational excellence.</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🏗️ Service Components</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background-color: rgba(0, 200, 255, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(0, 200, 255, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #00c8ff;">API Service</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Framework:</strong> FastAPI</p>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Server:</strong> Uvicorn (ASGI)</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Handles HTTP requests, business logic</p>
</div>

<div style="background-color: rgba(110, 231, 183, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(110, 231, 183, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #6ee7b7;">Worker Service</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Framework:</strong> Celery</p>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Broker:</strong> Redis</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Background job processing</p>
</div>

<div style="background-color: rgba(168, 139, 250, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(168, 139, 250, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #a78bfa;">Database</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Engine:</strong> PostgreSQL 16</p>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Replicas:</strong> 3 read replicas</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Primary data store</p>
</div>

<div style="background-color: rgba(255, 211, 61, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255, 211, 61, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #ffd93d;">Cache</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Engine:</strong> Redis 7</p>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Mode:</strong> Cluster</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Session & data caching</p>
</div>

<div style="background-color: rgba(255, 100, 100, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255, 100, 100, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #ff6b6b;">Queue</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Service:</strong> AWS SQS</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Message queue for async tasks</p>
</div>

<div style="background-color: rgba(100, 200, 255, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(100, 200, 255, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #64c8ff;">Storage</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Service:</strong> AWS S3</p>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Replication:</strong> Multi-region</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Object storage for assets</p>
</div>

<div style="background-color: rgba(200, 100, 255, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(200, 100, 255, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #c864ff;">CDN</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Service:</strong> CloudFront</p>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Edge:</strong> Global</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Content delivery network</p>
</div>

<div style="background-color: rgba(255, 150, 100, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255, 150, 100, 0.3);">
<h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: #ff9664;">Search</h3>
<p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong style="color: #ffffff;">Engine:</strong> OpenSearch</p>
<p style="font-size: 0.9rem; color: #b0b0b0;">Full-text search & analytics</p>
</div>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🔄 Data Flow Patterns</h2>

<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #00c8ff;">Read Path (Optimized for Speed)</h3>
<div style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; background-color: rgba(0, 200, 255, 0.1); padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">
Client <span style="color: #00c8ff;">→</span> CDN <span style="color: #00c8ff;">→</span> ALB <span style="color: #00c8ff;">→</span> API Pods <span style="color: #00c8ff;">→</span> Cache <span style="color: #00c8ff;">→</span> PostgreSQL
</div>
<p style="font-size: 0.9rem; color: #b0b0b0;">Static assets served from CDN edge locations. API requests hit cache first, database only on cache miss.</p>
</div>

<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #6ee7b7;">Write Path (Async Processing)</h3>
<div style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; background-color: rgba(110, 231, 183, 0.1); padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">
Client <span style="color: #6ee7b7;">→</span> API <span style="color: #6ee7b7;">→</span> Queue <span style="color: #6ee7b7;">→</span> Worker <span style="color: #6ee7b7;">→</span> Database
</div>
<p style="font-size: 0.9rem; color: #b0b0b0;">Write operations are queued for async processing to maintain API responsiveness.</p>
</div>

<div style="background-color: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
<h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: #ffd93d;">Asset Upload Path</h3>
<div style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; background-color: rgba(255, 211, 61, 0.1); padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">
Client <span style="color: #ffd93d;">→</span> API <span style="color: #ffd93d;">→</span> S3 <span style="color: #ffd93d;">→</span> CDN
</div>
<p style="font-size: 0.9rem; color: #b0b0b0;">Assets uploaded to S3, then distributed via CDN for global delivery.</p>
</div>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">📈 Scaling Strategy</h2>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
<tr style="background-color: rgba(0, 200, 255, 0.1);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: 600; color: #ffffff;">Component</td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: 600; color: #ffffff;">Scaling Method</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">API</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Horizontal scaling on ECS (auto-scale based on CPU/memory)</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Workers</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Auto-scale based on queue depth</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Database</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">3 read replicas for read scaling, vertical scaling for writes</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Cache</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Redis cluster mode for horizontal scaling</td>
</tr>
<tr>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">CDN</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Global edge locations (auto-scaled by provider)</td>
</tr>
<tr style="background-color: rgba(255, 255, 255, 0.02);">
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);"><strong style="color: #ffffff;">Storage</strong></td>
<td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">Multi-region replication (unlimited capacity)</td>
</tr>
</table>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">🔒 Security</h2>

<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Authentication:</strong> JWT Bearer tokens with refresh token rotation</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Authorization:</strong> Role-based access control (RBAC)</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Tenant Isolation:</strong> Row-level security (RLS) in database</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Encryption:</strong> TLS 1.3 in transit, AWS KMS at rest</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Secrets:</strong> AWS Secrets Manager (no hardcoded credentials)</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Audit:</strong> CloudWatch Logs for all operations</li>
<li style="margin-bottom: 0.75rem;"><strong style="color: #ffffff;">Compliance:</strong> SOC 2 Type II, GDPR compliant</li>
</ul>

<h2 style="font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; font-family: 'Poppins', sans-serif; border-bottom: 2px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.5rem;">📊 Monitoring & Observability</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
<div style="background-color: rgba(0, 200, 255, 0.1); padding: 1rem; border-radius: 8px;">
<p style="font-weight: 600; color: #00c8ff; margin-bottom: 0.5rem;">Metrics</p>
<p style="font-size: 0.9rem;">Datadog</p>
</div>
<div style="background-color: rgba(255, 211, 61, 0.1); padding: 1rem; border-radius: 8px;">
<p style="font-weight: 600; color: #ffd93d; margin-bottom: 0.5rem;">Logs</p>
<p style="font-size: 0.9rem;">CloudWatch</p>
</div>
<div style="background-color: rgba(168, 139, 250, 0.1); padding: 1rem; border-radius: 8px;">
<p style="font-weight: 600; color: #a78bfa; margin-bottom: 0.5rem;">Traces</p>
<p style="font-size: 0.9rem;">Datadog APM</p>
</div>
<div style="background-color: rgba(255, 100, 100, 0.1); padding: 1rem; border-radius: 8px;">
<p style="font-weight: 600; color: #ff6b6b; margin-bottom: 0.5rem;">Alerts</p>
<p style="font-size: 0.9rem;">PagerDuty</p>
</div>
<div style="background-color: rgba(110, 231, 183, 0.1); padding: 1rem; border-radius: 8px;">
<p style="font-weight: 600; color: #6ee7b7; margin-bottom: 0.5rem;">Uptime</p>
<p style="font-size: 0.9rem;">Pingdom</p>
</div>
</div>

<h3 style="font-size: 1.2rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #ffffff; font-family: 'Poppins', sans-serif;">Service Level Objectives (SLOs)</h3>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
<li style="margin-bottom: 0.5rem;">P99 latency: <strong style="color: #ffffff;">&lt; 200ms</strong></li>
<li style="margin-bottom: 0.5rem;">Availability: <strong style="color: #ffffff;">99.9%</strong> (43 minutes downtime/month max)</li>
</ul>

</div>`,
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
                <div style={{ color: '#f0f0f0', opacity: 0.9, padding: '1.5rem', fontSize: '0.9rem', overflow: 'auto', maxHeight: '600px', lineHeight: 1.8 }}>
                  <div dangerouslySetInnerHTML={{ __html: selectedExample.expandedPRD || '<p>No expanded documentation available for this example.</p>' }} />
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

