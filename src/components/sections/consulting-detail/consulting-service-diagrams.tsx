import React from 'react';

interface DiagramProps {
  slug: string;
  className?: string;
}

/**
 * Purpose-built enterprise SVG/CSS technical architecture visuals
 * for each of the six ZOFT Corp consulting domains.
 * Uses official brand colors: Primary Navy (#01153B), Secondary Navy (#031E4D),
 * Brand Blue (#00B3FF), Brand Orange (#FF6F00), and White (#FFFFFF).
 */
export function ConsultingServiceDiagram({ slug, className = '' }: DiagramProps) {
  switch (slug) {
    case 'ai-ready-architectures':
      return <AIReadyArchitectureDiagram className={className} />;
    case 'cloud-database-strategy':
      return <CloudDatabaseStrategyDiagram className={className} />;
    case 'cloud-finops':
      return <CloudFinOpsDiagram className={className} />;
    case 'compliance-governance':
      return <ComplianceGovernanceDiagram className={className} />;
    case 'performance-audits':
      return <PerformanceAuditsDiagram className={className} />;
    case 'fractional-architect':
      return <FractionalArchitectDiagram className={className} />;
    default:
      return null;
  }
}

// 01. AI-Ready Architectures: Connected System Layers & Retrieval Pipeline
function AIReadyArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            AI ARCHITECTURE STACK // RETRIEVAL &amp; DATA FABRIC
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          SYSTEM TOPOLOGY
        </span>
      </div>

      <div className="space-y-3">
        {/* Layer 1: App & LLM Ingestion */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-[#00B3FF]">LAYER 01 // WORKLOAD INTERFACE</span>
            <span className="text-[10px] font-mono text-slate-400">Low-Latency API Gateway</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-200">
              LLM Inference Clients
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-200">
              Agent Workflows
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-200">
              Context Orchestrators
            </div>
          </div>
        </div>

        {/* Directional Connector */}
        <div className="flex justify-center items-center gap-2 py-0.5 text-[#00B3FF]">
          <span className="text-[10px] font-mono text-slate-400">High-Concurrency Vector Pipelines</span>
          <svg className="w-4 h-4 text-[#00B3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Layer 2: Vector & Retrieval Layer */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#00B3FF]/40 relative bg-gradient-to-r from-[#01153B] via-[#01153B] to-[#00B3FF]/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-[#FF6F00]">LAYER 02 // VECTOR &amp; RETRIEVAL</span>
            <span className="text-[10px] font-mono text-emerald-400">Embedding Index &amp; HNSW</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-[#00B3FF]/15 border border-[#00B3FF]/30 rounded-lg py-2 px-1 text-[11px] font-semibold text-white">
              Vector Indexing
            </div>
            <div className="bg-[#00B3FF]/15 border border-[#00B3FF]/30 rounded-lg py-2 px-1 text-[11px] font-semibold text-white">
              Semantic Cache
            </div>
            <div className="bg-[#00B3FF]/15 border border-[#00B3FF]/30 rounded-lg py-2 px-1 text-[11px] font-semibold text-white">
              Hybrid Search Rerank
            </div>
          </div>
        </div>

        {/* Directional Connector */}
        <div className="flex justify-center items-center gap-2 py-0.5 text-[#00B3FF]">
          <span className="text-[10px] font-mono text-slate-400">Synchronized State &amp; Replication</span>
          <svg className="w-4 h-4 text-[#00B3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Layer 3: Database & Storage Fabric */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-slate-300">LAYER 03 // CORE DATA FOUNDATION</span>
            <span className="text-[10px] font-mono text-slate-400">PostgreSQL / Cloud DBs / Object Stores</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-300">
              Enterprise Relational DB
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-300">
              Distributed Storage
            </div>
            <div className="bg-white/5 rounded-lg py-2 px-1 border border-white/5 text-[11px] font-medium text-slate-300">
              ETL / Stream Ingestion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 02. Cloud & Database Strategy: Decision Matrix & Evaluation Framework
function CloudDatabaseStrategyDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            STRATEGY FRAMEWORK // WORKLOAD-DRIVEN DECISIONS
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          ALIGNMENT MATRIX
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {/* Quadrant 1 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">01. Workload Profiling</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">INPUT</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Read/write patterns, peak concurrency, transaction semantics, data velocity.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">OLTP / OLAP</span>
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">SLA Limits</span>
          </div>
        </div>

        {/* Quadrant 2 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#00B3FF]/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">02. Platform Selection</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">EVALUATE</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            AWS / Azure / GCP, bare metal, hybrid topology, multi-region availability.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-[#00B3FF]/20 text-[#00B3FF] px-2 py-0.5 rounded">Resilience</span>
            <span className="text-[10px] font-mono bg-[#00B3FF]/20 text-[#00B3FF] px-2 py-0.5 rounded">Latency</span>
          </div>
        </div>

        {/* Quadrant 3 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#FF6F00]/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">03. Engine Architecture</span>
            <span className="text-[10px] font-mono text-[#FF6F00]">DESIGN</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Relational, distributed SQL, columnar caching, vector engines, managed vs self-hosted.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-[#FF6F00]/20 text-[#FF6F00] px-2 py-0.5 rounded">Partitioning</span>
            <span className="text-[10px] font-mono bg-[#FF6F00]/20 text-[#FF6F00] px-2 py-0.5 rounded">Replication</span>
          </div>
        </div>

        {/* Quadrant 4 */}
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white font-sans">04. Modernization Roadmap</span>
            <span className="text-[10px] font-mono text-emerald-400">OUTPUT</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Phased migration steps, zero-downtime cutover plans, rollback boundaries.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">Milestones</span>
            <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">TCO Impact</span>
          </div>
        </div>
      </div>

      <div className="bg-[#01153B]/70 rounded-xl p-2.5 text-center border border-white/5">
        <span className="text-[11px] font-mono text-slate-300">
          Result: Practical Architecture Blueprint aligned with operational reality
        </span>
      </div>
    </div>
  );
}

// 03. Cloud FinOps: Continuous Cost Optimization Loop
function CloudFinOpsDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6F00]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            CONTINUOUS FINOPS LIFECYCLE // SPEND VISIBILITY
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#FF6F00] bg-[#FF6F00]/10 px-2 py-0.5 rounded border border-[#FF6F00]/30">
          GOVERNANCE LOOP
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10 text-center space-y-1.5">
          <span className="text-[10px] font-mono font-bold text-[#00B3FF] block">PHASE 01</span>
          <span className="text-xs font-bold text-white block">Telemetry</span>
          <p className="text-[10px] text-slate-300">Ingest usage &amp; billing across cloud services</p>
        </div>
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10 text-center space-y-1.5">
          <span className="text-[10px] font-mono font-bold text-[#00B3FF] block">PHASE 02</span>
          <span className="text-xs font-bold text-white block">Right-Sizing</span>
          <p className="text-[10px] text-slate-300">Identify over-provisioned compute &amp; storage</p>
        </div>
        <div className="bg-[#01153B] rounded-xl p-3 border border-[#FF6F00]/40 text-center space-y-1.5 bg-[#FF6F00]/5">
          <span className="text-[10px] font-mono font-bold text-[#FF6F00] block">PHASE 03</span>
          <span className="text-xs font-bold text-white block">DB Licensure</span>
          <p className="text-[10px] text-slate-300">Optimize core licensing &amp; IOPS allocation</p>
        </div>
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10 text-center space-y-1.5">
          <span className="text-[10px] font-mono font-bold text-emerald-400 block">PHASE 04</span>
          <span className="text-xs font-bold text-white block">Guardrails</span>
          <p className="text-[10px] text-slate-300">Set programmatic budgets &amp; alerts</p>
        </div>
      </div>

      <div className="bg-[#01153B] rounded-xl p-4 border border-white/10 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300 font-semibold">Key Architectural Drivers Analyzed</span>
          <span className="font-mono text-[#00B3FF]">Cost Impact</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] bg-white/5 px-2.5 py-1.5 rounded">
            <span className="text-slate-200">Database Storage Tiering &amp; Provisioned IOPS</span>
            <span className="font-mono text-emerald-400">High Leverage</span>
          </div>
          <div className="flex items-center justify-between text-[11px] bg-white/5 px-2.5 py-1.5 rounded">
            <span className="text-slate-200">Compute Instance Families &amp; Workload Bursting</span>
            <span className="font-mono text-emerald-400">Immediate Savings</span>
          </div>
          <div className="flex items-center justify-between text-[11px] bg-white/5 px-2.5 py-1.5 rounded">
            <span className="text-slate-200">Cross-Region &amp; Cross-AZ Network Egress</span>
            <span className="font-mono text-amber-400">Topology Optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 04. Compliance & Governance: Layered Security & Control Boundaries
function ComplianceGovernanceDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            GOVERNANCE ARCHITECTURE // LAYERED CONTROLS
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          SECURITY TOPOLOGY
        </span>
      </div>

      <div className="space-y-2.5">
        {/* Ring 1 */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-bold text-white">01. Access &amp; Identity Boundary</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300">Least-Privilege RBAC / Zero-Trust MFA</span>
        </div>

        {/* Ring 2 */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-[#00B3FF]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
            <span className="text-xs font-bold text-white">02. Data Classification &amp; Encryption</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300">At-Rest KMS / In-Transit TLS / Masking</span>
        </div>

        {/* Ring 3 */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-[#FF6F00]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
            <span className="text-xs font-bold text-white">03. Change Control &amp; Infrastructure as Code</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300">Immutable Pipelines / Audited Approvals</span>
        </div>

        {/* Ring 4 */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="text-xs font-bold text-white">04. Audit Telemetry &amp; Log Immutability</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300">Tamper-Proof Audit Trails / SOC2 / HIPAA</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <span>Frameworks: SOC2 / ISO 27001 / HIPAA / GDPR</span>
        <span className="text-emerald-400 font-semibold">Continuous Enforcement</span>
      </div>
    </div>
  );
}

// 05. Performance Audits: Diagnostic & Bottleneck Forensics Framework
function PerformanceAuditsDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6F00] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            DIAGNOSTIC PIPELINE // MULTI-LAYER FORENSICS
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          BOTTLENECK ISOLATION
        </span>
      </div>

      <div className="space-y-3">
        {/* Tier 1: Query & Execution Plan */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier A: Query &amp; Execution Profiling</span>
            <span className="text-[10px] font-mono text-[#00B3FF]">Top 1% Slow Queries</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Execution plan analysis, index fragmentation, sequential scans, table bloat.
          </p>
        </div>

        {/* Tier 2: Database Engine & Concurrency */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-[#FF6F00]/40 bg-[#FF6F00]/5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier B: Engine Internals &amp; Concurrency</span>
            <span className="text-[10px] font-mono text-[#FF6F00]">Locking &amp; Latches</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Lock contention, buffer pool churn, connection pooling saturation, checkpoint stalls.
          </p>
        </div>

        {/* Tier 3: Infrastructure & Storage Subsystems */}
        <div className="bg-[#01153B] rounded-xl p-3 border border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-white">Tier C: Storage &amp; Subsystem Telemetry</span>
            <span className="text-[10px] font-mono text-emerald-400">IOPS &amp; Queue Depth</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Disk throughput limits, kernel memory pressure, network packet drops, EBS throttling.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <span>Output: Actionable Remediation Matrix</span>
        <span className="text-[#00B3FF] font-semibold">Evidence-Based Prioritization</span>
      </div>
    </div>
  );
}

// 06. Fractional Architect: Strategic Advisory Cadence
function FractionalArchitectDiagram({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-[#031E4D] rounded-2xl p-6 border border-white/10 shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            LEADERSHIP MODEL // SENIOR ARCHITECTURE CADENCE
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
          ENGAGEMENT CADENCE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-1.5 text-center">
          <span className="text-[10px] font-mono text-[#00B3FF] font-bold block">STRATEGIC</span>
          <span className="text-xs font-bold text-white block">Tech Direction</span>
          <p className="text-[10px] text-slate-300 leading-relaxed">
            ADRs, tech debt evaluation, future-state architecture roadmaps.
          </p>
        </div>
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-[#FF6F00]/40 space-y-1.5 text-center bg-[#FF6F00]/5">
          <span className="text-[10px] font-mono text-[#FF6F00] font-bold block">TACTICAL</span>
          <span className="text-xs font-bold text-white block">Decision Reviews</span>
          <p className="text-[10px] text-slate-300 leading-relaxed">
            RFC reviews, platform trade-offs, high-risk migration design.
          </p>
        </div>
        <div className="bg-[#01153B] rounded-xl p-3.5 border border-white/10 space-y-1.5 text-center">
          <span className="text-[10px] font-mono text-emerald-400 font-bold block">MENTORSHIP</span>
          <span className="text-xs font-bold text-white block">Team Alignment</span>
          <p className="text-[10px] text-slate-300 leading-relaxed">
            Guiding engineering leads, establishing architecture patterns.
          </p>
        </div>
      </div>

      <div className="bg-[#01153B] rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs">
        <span className="font-semibold text-white">Engagement Flexibility</span>
        <span className="font-mono text-[11px] text-[#00B3FF]">5–20 hrs/week · Executive &amp; Team Level</span>
      </div>
    </div>
  );
}
