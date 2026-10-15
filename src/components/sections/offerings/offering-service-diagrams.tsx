'use client';

import React from 'react';

interface DiagramProps {
  slug: string;
  className?: string;
}

/**
 * Purpose-built enterprise SVG/CSS technical architecture visuals
 * for each of the five ZOFT Corp delivery offerings.
 * Uses official brand colors: Primary Navy (#01153B), Secondary Navy (#031E4D),
 * Brand Blue (#00B3FF), Brand Orange (#FF6F00), and White (#FFFFFF).
 */
export function OfferingServiceDiagram({ slug, className = '' }: DiagramProps) {
  switch (slug) {
    case 'vector-db-integration':
      return <VectorDBIntegrationDiagram className={className} />;
    case 'database-migrations-and-transformations':
      return <DatabaseMigrationsDiagram className={className} />;
    case 'performance-tuning-delivery':
      return <PerformanceTuningDiagram className={className} />;
    case 'managed-dba-services':
      return <ManagedDBAServicesDiagram className={className} />;
    case 'data-engineering-and-analytics':
      return <DataEngineeringDiagram className={className} />;
    default:
      return null;
  }
}

// 01. Vector DB Integration: Retrieval Pipeline & Hybrid Storage Topology
function VectorDBIntegrationDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            VECTOR RETRIEVAL PIPELINE // HYBRID ARCHITECTURE
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          DELIVERY TOPOLOGY
        </span>
      </div>

      <div className="space-y-3">
        {/* Step 1: Ingestion & Embeddings */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-[#00B3FF]">STAGE 01 // INGESTION &amp; EMBEDDINGS</span>
            <span className="text-[10px] font-mono text-slate-400">Dense Vectors &amp; Chunks</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-200">
              Unstructured Ingest
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-200">
              Chunking &amp; Tokenization
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-200">
              Embedding Model API
            </div>
          </div>
        </div>

        {/* Directional Connector */}
        <div className="flex justify-center items-center gap-2 py-0.5 text-[#00B3FF]">
          <span className="text-[10px] font-mono text-slate-400">High-Dimensional Index Generation</span>
          <svg className="w-4 h-4 text-[#00B3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Step 2: Vector Index & Hybrid Store */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#00B3FF]/40 bg-gradient-to-r from-[#01153B] via-[#01153B] to-[#00B3FF]/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-[#FF6F00]">STAGE 02 // VECTOR INDEX &amp; STORAGE</span>
            <span className="text-[10px] font-mono text-emerald-400">HNSW / IVFFlat Indexing</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-[#00B3FF]/15 border border-[#00B3FF]/30 rounded-lg py-2 px-1 text-[11px] font-semibold text-white">
              pgvector / Dedicated Store
            </div>
            <div className="bg-[#00B3FF]/15 border border-[#00B3FF]/30 rounded-lg py-2 px-1 text-[11px] font-semibold text-white">
              Metadata Filter Engine
            </div>
            <div className="bg-[#00B3FF]/15 border border-[#00B3FF]/30 rounded-lg py-2 px-1 text-[11px] font-semibold text-white">
              Low-Latency Cache
            </div>
          </div>
        </div>

        {/* Directional Connector */}
        <div className="flex justify-center items-center gap-2 py-0.5 text-[#00B3FF]">
          <span className="text-[10px] font-mono text-slate-400">Sub-Millisecond Nearest Neighbor KNN</span>
          <svg className="w-4 h-4 text-[#00B3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Step 3: Retrieval & Context Augmentation */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-slate-300">STAGE 03 // QUERY &amp; HYBRID RERANKING</span>
            <span className="text-[10px] font-mono text-slate-400">Context Enrichment</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-300">
              Semantic Search
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-300">
              Cross-Encoder Rerank
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-300">
              Production LLM Context
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 02. Database Migrations and Transformations: Staged Journey
function DatabaseMigrationsDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            STAGED MIGRATION JOURNEY // ZERO-DOWNTIME ARCHITECTURE
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          EXECUTION MODEL
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
        {/* Phase 1 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-2 text-center">
          <span className="text-[10px] font-mono font-bold text-[#00B3FF] block">PHASE 01</span>
          <span className="text-xs font-bold text-white block">Assessment</span>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Schema compatibility, stored procedures, volumetric baselines.
          </p>
          <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded inline-block">
            Target Mapping
          </span>
        </div>

        {/* Phase 2 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-2 text-center">
          <span className="text-[10px] font-mono font-bold text-[#00B3FF] block">PHASE 02</span>
          <span className="text-xs font-bold text-white block">Initial Load</span>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Bulk historical extract, DDL transformation, staging tables.
          </p>
          <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded inline-block">
            Parallel Ingest
          </span>
        </div>

        {/* Phase 3 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#00B3FF]/40 space-y-2 text-center bg-[#00B3FF]/5">
          <span className="text-[10px] font-mono font-bold text-[#FF6F00] block">PHASE 03</span>
          <span className="text-xs font-bold text-white block">CDC &amp; Sync</span>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Continuous Change Data Capture, dual-write replication loop.
          </p>
          <span className="text-[10px] font-mono bg-[#FF6F00]/20 text-[#FF6F00] px-2 py-0.5 rounded inline-block">
            Zero Drift
          </span>
        </div>

        {/* Phase 4 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-emerald-500/40 space-y-2 text-center bg-emerald-500/5">
          <span className="text-[10px] font-mono font-bold text-emerald-400 block">PHASE 04</span>
          <span className="text-xs font-bold text-white block">Live Cutover</span>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Hash validation, traffic redirection, audited rollback boundary.
          </p>
          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded inline-block">
            No Downtime
          </span>
        </div>
      </div>

      <div className="bg-[#01153B] rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs">
        <span className="text-slate-300 font-sans">Core Engines Handled: Oracle, PostgreSQL, MySQL, SQL Server &amp; Cloud Relational</span>
        <span className="font-mono text-[#00B3FF]">Verified Parity</span>
      </div>
    </div>
  );
}

// 03. Performance Tuning Delivery: Diagnostic-to-Optimization Pipeline
function PerformanceTuningDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6F00] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            TUNING &amp; OPTIMIZATION PIPELINE // SYSTEM REALITIES
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          PROVEN DELIVERABLE
        </span>
      </div>

      <div className="space-y-3">
        {/* Layer 1: Query & Index Tuning */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">01. Query Execution &amp; Index Synthesis</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">Latency Remediation</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Elimination of sequential scans, targeted composite/partial indexing, execution plan freezing.
          </p>
        </div>

        {/* Layer 2: Concurrency & Engine Lock Clearance */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#FF6F00]/40 bg-[#FF6F00]/5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">02. Engine Internals &amp; Lock Contention</span>
            <span className="text-[10px] font-mono text-[#FF6F00]">High Concurrency</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Resolving row lock stalls, vacuum/checkpoint bloat, connection pool sizing (PgBouncer/HikariCP).
          </p>
        </div>

        {/* Layer 3: Memory & Storage Subsystem Alignment */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">03. Memory, I/O &amp; Storage Architecture</span>
            <span className="text-[10px] font-mono text-emerald-400">Throughput Maximization</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Shared buffer pool tuning, work_mem sizing, provisioned IOPS alignment, and disk write-queue clearing.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <span>Delivery Verification: Load Test Regression Validated</span>
        <span className="text-emerald-400 font-semibold">SLA Guarantees</span>
      </div>
    </div>
  );
}

// 04. Managed DBA Services: Operational Lifecycle
function ManagedDBAServicesDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            MANAGED DATABASE OPERATIONS // 24/7 LIFECYCLE
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          OPERATIONAL MATRIX
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {/* Quadrant 1 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">01. 24/7 Monitoring &amp; Telemetry</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">PROACTIVE</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Real-time alerting on replication lag, connection saturation, memory headroom, and IOPS throttling.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">Deep Health</span>
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">Early Warning</span>
          </div>
        </div>

        {/* Quadrant 2 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#00B3FF]/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">02. Incident Response &amp; Remediation</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">STANDBY</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Rapid intervention by experienced database engineers with documented escalation playbooks.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-[#00B3FF]/20 text-[#00B3FF] px-2 py-0.5 rounded">Tier-3 DBAs</span>
            <span className="text-[10px] font-mono bg-[#00B3FF]/20 text-[#00B3FF] px-2 py-0.5 rounded">Fast MTTR</span>
          </div>
        </div>

        {/* Quadrant 3 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#FF6F00]/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">03. Routine Maintenance &amp; Patching</span>
            <span className="text-[10px] font-mono text-[#FF6F00]">STABILITY</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Minor version upgrades, zero-downtime failover drills, backup restoration testing, and index hygiene.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-[#FF6F00]/20 text-[#FF6F00] px-2 py-0.5 rounded">Automated DR</span>
            <span className="text-[10px] font-mono bg-[#FF6F00]/20 text-[#FF6F00] px-2 py-0.5 rounded">Security Patches</span>
          </div>
        </div>

        {/* Quadrant 4 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">04. Architecture &amp; Capacity Advisory</span>
            <span className="text-[10px] font-mono text-emerald-400">EVOLUTION</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Monthly executive reviews, storage forecasting, workload growth modeling, and cost optimization.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">Capacity Plans</span>
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">FinOps Check</span>
          </div>
        </div>
      </div>

      <div className="bg-[#01153B]/70 rounded-xl p-2.5 text-center border border-white/5">
        <span className="text-[11px] font-mono text-slate-300">
          Result: Production databases remain resilient, monitored, and expertly managed 24/7
        </span>
      </div>
    </div>
  );
}

// 05. Data Engineering and Analytics: Data Fabric Architecture
function DataEngineeringDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            DATA PLATFORM ARCHITECTURE // INGESTION TO ANALYTICS
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          DATA FABRIC
        </span>
      </div>

      <div className="space-y-3">
        {/* Tier 1: Ingestion */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier 01: Multi-Source Ingestion</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">Event Streams &amp; Batch</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">Operational DBs (CDC)</div>
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">Kafka / Event Queues</div>
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">External SaaS APIs</div>
          </div>
        </div>

        {/* Tier 2: Transformation */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-[#00B3FF]/40 bg-[#00B3FF]/5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier 02: Transformation &amp; Pipeline Orchestration</span>
            <span className="text-[10px] font-mono text-[#FF6F00]">dbt / Spark Workflows</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-[#00B3FF]/15 py-1.5 rounded text-[10px] text-white font-medium">Schema Enforcement</div>
            <div className="bg-[#00B3FF]/15 py-1.5 rounded text-[10px] text-white font-medium">Data Cleansing</div>
            <div className="bg-[#00B3FF]/15 py-1.5 rounded text-[10px] text-white font-medium">Lineage Tracking</div>
          </div>
        </div>

        {/* Tier 3: Storage & Lakehouse */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier 03: Modern Lakehouse &amp; Analytical Store</span>
            <span className="text-[10px] font-mono text-emerald-400">Columnar Parquet &amp; Iceberg</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">Delta / Iceberg Tables</div>
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">Cloud Data Warehouse</div>
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">Unified Access Control</div>
          </div>
        </div>

        {/* Tier 4: Consumption & Analytics */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier 04: Semantic Layer &amp; Consumer Analytics</span>
            <span className="text-[10px] font-mono text-slate-400">Business Value</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">BI &amp; Dashboards</div>
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">ML Feature Stores</div>
            <div className="bg-white/5 py-1.5 rounded text-[10px] text-slate-300">Operational Telemetry</div>
          </div>
        </div>
      </div>
    </div>
  );
}
