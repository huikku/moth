const samples = {
  prd: `intent:product_spec; audience:coding_llm; version:1.0; updated:2025-10-22
style:technical; scope:backend_svc:IntelliBase

[CORE]
domain:creative_production; platform:content_addressable_storage
tenancy:multi; immutability:append_only; versioning:semantic_vNNN

[STACK]
db:postgres_16+pgvector; storage:s3_cas_sha256
search:opensearch_bm25; api:fastapi; queue:sqs; workflow:temporal
infra:aws_eks; observability:datadog+cloudwatch

[FEATURES.m1]
assets:video;image;doc;3d
manifests:lockfile; provenance:hash_chain
perms:rbac+row_level_security
vault:e2e_optional_kms_wrapped`,

  rules: `intent:coding_standards; audience:cursor+copilot+agents; version:1.0
style:prescriptive; scope:repo_wide

[STYLE]
lang:typescript; fmt:prettier; lint:eslint+strict
indent:2; line_len:100; quotes:single; semi:true
naming:camelCase_vars;PascalCase_types;SCREAMING_SNAKE_consts

[FORBIDDEN]
no:any_type;console_log;var_keyword;default_exports;inheritance_over_composition`,

  arch: `intent:system_design; audience:implementation_llms; version:1.0
style:technical; scope:service_topology

[SERVICES]
api:fastapi+uvicorn; worker:temporal_workers; db:postgres_16; cache:redis_7
object_store:s3; cdn:cloudfront; metrics:datadog; logs:cloudwatch`
};

const codeblock = document.getElementById('codeblock');
const tabs = document.querySelectorAll('.tab');
function setTab(name){
  codeblock.textContent = samples[name] || '';
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
}
tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)));
setTab('prd');