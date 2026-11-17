import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Server,
  Database,
  Layers,
  Terminal,
  Globe,
  CheckCircle2,
  Lock,
  Cpu,
  RefreshCw,
  HardDrive,
  Activity,
  Zap,
  BarChart3,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

interface SpecializedManagedDBaaSViewProps {
  pageUrl?: string;
}

export function SpecializedManagedDBaaSView({
  pageUrl = 'https://zoftcorp.com/offerings/managed-dba-services',
}: SpecializedManagedDBaaSViewProps) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Specialized Managed Services (DBaaS)', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Specialized Managed Services (DBaaS) | Zoftcorp"
        description="Zoftcorp provides next gen database-as-a-service (DBaaS) for SQL Server, MySQL, PostgreSQL, NoSQL, and Vector databases across on-premises, cloud, and hybrid environments."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          1. HERO SECTION: SPECIALIZED MANAGED SERVICES (DBAAS)
          Dark navy environment (#01153B) with operations HUD & core positioning
          ========================================================================= */}
      <section
        id="dbaas-hero"
        aria-label="Specialized Managed Services (DBaaS) Hero"
        className="relative w-full bg-[#01153B] text-white pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-800"
      >
        {/* Ambient Lighting & Grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF0a_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF0a_1px,transparent_1px)] bg-[size:36px_36px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[550px] h-[450px] bg-[#00B3FF]/15 blur-[150px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[350px] bg-[#FF6F00]/10 blur-[130px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400"
          >
            <Link href="/" className="hover:text-[#00B3FF] transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Our Offerings</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 truncate">Specialized Managed Services (DBaaS)</span>
          </nav>

          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Client-Frozen Headline & Sub-Headline */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3.5 py-1.5 rounded-full border border-[#00B3FF]/30 uppercase tracking-wider shadow-2xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00B3FF] mr-1.5 animate-pulse" />
                  OFFERING 04 // SPECIALIZED MANAGED SERVICES (DBAAS)
                </span>
              </div>

              {/* Exact Client Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
                Specialized Managed Services (DBaaS)
              </h1>

              {/* Exact Client Sub-Headline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-sans max-w-2xl font-normal">
                Zoftcorp provides next gen database-as-a- service (Dbaas) for SQL Server, MySQL, PostgresQL.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Reach Out Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-700 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Talk to an Architect Today</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>
              </div>

              {/* Monospace Fast Facts Strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Model
                  </span>
                  <span className="text-slate-200 font-bold">ZDS Platform</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Engines
                  </span>
                  <span className="text-[#00B3FF] font-bold">SQL / NoSQL / Vector</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Interfaces
                  </span>
                  <span className="text-emerald-400 font-bold">REST API / CLI / GUI</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Deployments
                  </span>
                  <span className="text-[#FF6F00] font-bold">Hybrid &amp; Multi-Cloud</span>
                </div>
              </div>
            </div>

            {/* Right Column: DBaaS Operations Telemetry Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/70 mb-5 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-semibold tracking-wider">
                      ZDS CONTROL CONSOLE // ACTIVE
                    </span>
                  </div>
                  <span className="text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-0.5 rounded border border-[#00B3FF]/30 text-[11px] font-bold">
                    UNIFIED DASHBOARD
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {/* Engine 1: SQL Server */}
                  <div className="bg-[#01153B] rounded-xl p-3 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#FF6F00]" />
                      <div>
                        <span className="text-white font-semibold block">SQL Server Always On</span>
                        <span className="text-[10px] text-slate-400">On-Premises / Azure VM</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Synchronized
                    </span>
                  </div>

                  {/* Engine 2: PostgreSQL with pgvector */}
                  <div className="bg-[#01153B] rounded-xl p-3 border border-[#00B3FF]/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-[#00B3FF]" />
                      <div>
                        <span className="text-white font-semibold block">PostgreSQL + pgvector</span>
                        <span className="text-[10px] text-slate-400">AWS Aurora / GCP Cloud SQL</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#00B3FF] font-bold bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
                      Vector Ready
                    </span>
                  </div>

                  {/* Engine 3: MySQL */}
                  <div className="bg-[#01153B] rounded-xl p-3 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-cyan-400" />
                      <div>
                        <span className="text-white font-semibold block">MySQL High-Throughput</span>
                        <span className="text-[10px] text-slate-400">Public Cloud / Read Replicas</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Replication 0s
                    </span>
                  </div>

                  {/* Lifecycle Signals Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                      <span className="text-[9px] text-slate-400 block uppercase">SMARTER CLONING</span>
                      <span className="text-emerald-400 font-bold text-[11px]">Instant CoW</span>
                    </div>
                    <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                      <span className="text-[9px] text-slate-400 block uppercase">REST API / CLI</span>
                      <span className="text-cyan-300 font-bold text-[11px]">Automated</span>
                    </div>
                    <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                      <span className="text-[9px] text-slate-400 block uppercase">TCO REDUCTION</span>
                      <span className="text-[#FF6F00] font-bold text-[11px]">Optimized</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Lifecycle: Provisioning · Patching · Backup · HA</span>
                  <span className="text-emerald-400 font-semibold">24x7 Managed</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. SECTION: WHAT IS ZOFTCORP'S DATABASE AS A SERVICE (ZDS) MODEL?
          White background with exact client-frozen prose & 6 lifecycle capabilities
          ========================================================================= */}
      <section
        id="zds-model"
        aria-label="What is Zoftcorp's Database as a service (ZDS) model"
        className="w-full py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200"
      >
        <Container size="wide" className="space-y-12">
          {/* Section Header */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                NEXT-GENERATION CLOUD &amp; DATABASE ARCHITECTURE
              </span>
            </div>

            {/* Exact Client Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#01153B] font-sans">
              What is Zoftcorp&apos;s Database as a service (ZDS) model?
            </h2>

            {/* Exact Client Narrative Statements */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              <p>
                Zoftcorp’s Database Service is a next‑generation Database‑as‑a‑Service (DBaaS)
                platform designed to simplify how teams provision, operate, and scale databases
                across on‑premises, cloud, and hybrid environments — all with minimal overhead.
              </p>
              <p>
                We support a wide spectrum of engines — from SQL and NoSQL to Vector databases —
                including Microsoft SQL Server, MySQL, PostgreSQL with pgvector.
              </p>
              <p>
                Through a unified console or REST APIs, Zoftcorp delivers end‑to‑end lifecycle
                management: provisioning, patching, cloning, backup &amp; recovery, high
                availability, and enterprise‑grade security.
              </p>
              <p className="font-medium text-[#01153B]">
                The result? A platform that transforms database operations into a seamless,
                cost‑aware, and resilient service layer — empowering teams to focus on innovation
                instead of infrastructure.
              </p>
            </div>

            {/* Tailored Packages Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-[#FF6F00] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-800 font-medium font-sans leading-relaxed">
                We tailor our packages which will benefit start-ups, SME&apos;s, Mid-size and enterprise clients.
              </p>
            </div>
          </div>

          {/* 6 Core Database Lifecycle & Operational Capabilities */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans">
                End-to-End Database Lifecycle &amp; Operations
              </h3>
              <p className="text-sm text-slate-600 font-sans mt-1">
                Automated operations embedded directly into your database lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Capability 1: Provisioning */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-[#00B3FF]">LIFECYCLE 01</span>
                    <Server className="w-4 h-4 text-[#00B3FF]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#01153B] font-sans">Provisioning</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    Automated, policy-driven deployment of database engines across on-premises, cloud, and hybrid environments with production-ready baselines.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 text-[11px] font-mono text-slate-500">
                  AUTOMATED INSTANTIATION
                </div>
              </div>

              {/* Capability 2: Patching */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-[#00B3FF]">LIFECYCLE 02</span>
                    <RefreshCw className="w-4 h-4 text-[#00B3FF]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#01153B] font-sans">Patching</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    Zero-downtime rolling maintenance, security patch application, and minor engine updates with automated regression verification.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 text-[11px] font-mono text-slate-500">
                  ZERO-DOWNTIME ROLLING UPDATES
                </div>
              </div>

              {/* Capability 3: Cloning */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#FF6F00] hover:bg-white transition-all duration-200 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-[#FF6F00]">LIFECYCLE 03</span>
                    <Layers className="w-4 h-4 text-[#FF6F00]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#01153B] font-sans">Cloning</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    Smarter, space-efficient database cloning for development, staging, performance benchmarking, and sandbox testing.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 text-[11px] font-mono text-slate-500">
                  SMARTER SNAPSHOT BRANCHING
                </div>
              </div>

              {/* Capability 4: Backup and Recovery */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-[#00B3FF]">LIFECYCLE 04</span>
                    <HardDrive className="w-4 h-4 text-[#00B3FF]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#01153B] font-sans">Backup and Recovery</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    Continuous transaction log shipping, snapshot validation, deterministic point-in-time recovery, and periodic disaster recovery drills.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 text-[11px] font-mono text-slate-500">
                  POINT-IN-TIME RECOVERY &amp; DR
                </div>
              </div>

              {/* Capability 5: High Availability */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500 hover:bg-white transition-all duration-200 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-emerald-600">LIFECYCLE 05</span>
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-bold text-[#01153B] font-sans">High Availability</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    Automated multi-node clustering, synchronous replication, read replica distribution, and instantaneous failover orchestration.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 text-[11px] font-mono text-slate-500">
                  AUTOMATED FAILOVER TOPOLOGY
                </div>
              </div>

              {/* Capability 6: Security */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#01153B] hover:bg-white transition-all duration-200 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-[#01153B]">LIFECYCLE 06</span>
                    <Lock className="w-4 h-4 text-[#01153B]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#01153B] font-sans">Enterprise-Grade Security</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    End-to-end data encryption (at rest and in transit), least-privilege RBAC, tamper-proof audit trails, and strict compliance controls.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 text-[11px] font-mono text-slate-500">
                  AUDIT TRAILS &amp; ENCRYPTION
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. SECTION: TECHNICAL ARCHITECTURE & PLATFORM MATRIX (CLIENT TABLE)
          Structured technical representation of the frozen PDF architecture table
          ========================================================================= */}
      <section
        id="dbaas-matrix"
        aria-label="Technical Architecture and Platform Matrix"
        className="w-full py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] border-b border-slate-200"
      >
        <Container size="wide" className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
              <span className="font-mono text-xs font-bold text-[#FF6F00] uppercase tracking-wider">
                ARCHITECTURE SPECIFICATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#01153B] font-sans">
              ZDS Architecture &amp; Platform Matrix
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              The core architectural components, management interfaces, database engines, and deployment environments supported under Zoftcorp’s DBaaS model.
            </p>
          </div>

          {/* Desktop & Tablet Matrix View */}
          <div className="bg-white border-2 border-slate-200/90 rounded-2xl shadow-xs overflow-hidden">
            {/* Table Header / Title Bar */}
            <div className="bg-[#01153B] text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-[#00B3FF]" />
                <span className="font-mono text-sm font-bold uppercase tracking-wider">
                  ZDS Architectural Specification Ledger
                </span>
              </div>
              <span className="text-xs font-mono text-[#00B3FF] bg-[#00B3FF]/15 px-3 py-1 rounded-full border border-[#00B3FF]/30">
                MULTI-PLATFORM COVERAGE
              </span>
            </div>

            {/* Matrix Rows matching the Client Table */}
            <div className="divide-y divide-slate-200">
              {/* Row 1: Interface / Connectivity */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-[#00B3FF] uppercase tracking-wider font-bold block mb-1">
                    LAYER 01
                  </span>
                  <h3 className="text-lg font-bold text-[#01153B] font-sans">
                    Interface / Connectivity
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Multi-modal management channels for developers, DBAs, and automated pipelines.
                  </p>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-[#00B3FF] shrink-0" />
                    <div>
                      <span className="font-mono text-xs font-bold text-[#01153B] block">REST API</span>
                      <span className="text-[11px] text-slate-500">Programmatic IaC</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-[#FF6F00] shrink-0" />
                    <div>
                      <span className="font-mono text-xs font-bold text-[#01153B] block">CLI</span>
                      <span className="text-[11px] text-slate-500">Developer Tooling</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-mono text-xs font-bold text-[#01153B] block">GUI</span>
                      <span className="text-[11px] text-slate-500">Unified Web Console</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: DB Health & Life cycle */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50/50">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-[#FF6F00] uppercase tracking-wider font-bold block mb-1">
                    LAYER 02
                  </span>
                  <h3 className="text-lg font-bold text-[#01153B] font-sans">
                    DB Health &amp; Life cycle
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Continuous monitoring, anomaly detection, and end-to-end lifecycle governance.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-bold text-[#01153B] font-sans">
                        Database Monitoring and Lifecycle Management
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      End-to-end management covering: provisioning, patching, cloning, backup &amp; recovery, high availability, and enterprise-grade security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3: Databases */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-[#00B3FF] uppercase tracking-wider font-bold block mb-1">
                    LAYER 03
                  </span>
                  <h3 className="text-lg font-bold text-[#01153B] font-sans">
                    Databases
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    SQL, NoSQL, and Vector database engines supported under managed operations.
                  </p>
                </div>
                <div className="md:col-span-8 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-[#01153B] block">SQL Server</span>
                      <span className="text-[11px] font-mono text-slate-500">Enterprise / Standard</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-[#01153B] block">MySQL</span>
                      <span className="text-[11px] font-mono text-slate-500">High-Throughput Web</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-bold text-[#01153B] block">PostgreSQL</span>
                      <span className="text-[11px] font-mono text-[#00B3FF]">with pgvector</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#00B3FF]/5 border border-[#00B3FF]/20 flex flex-wrap items-center gap-3 text-xs text-slate-700">
                    <span className="font-mono font-bold text-[#01153B]">Supported Spectrum:</span>
                    <span className="inline-flex items-center gap-1 font-mono text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" /> SQL databases
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" /> NoSQL databases
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" /> Vector databases (pgvector)
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 4: Platforms */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50/50">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-emerald-600 uppercase tracking-wider font-bold block mb-1">
                    LAYER 04
                  </span>
                  <h3 className="text-lg font-bold text-[#01153B] font-sans">
                    Platforms
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Hybrid and multi-cloud deployment topologies managed via unified control plane.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <Server className="w-4 h-4 text-[#01153B] mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-[#01153B] block">On-premises</span>
                      <span className="text-[10px] font-mono text-slate-500">Bare Metal &amp; VM</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <Globe className="w-4 h-4 text-[#FF6F00] mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-[#01153B] block">AWS</span>
                      <span className="text-[10px] font-mono text-slate-500">EC2 &amp; RDS</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <Globe className="w-4 h-4 text-[#0078D4] mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-[#01153B] block">Azure</span>
                      <span className="text-[10px] font-mono text-slate-500">VM &amp; SQL MI</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                      <Globe className="w-4 h-4 text-[#4285F4] mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-[#01153B] block">GCP</span>
                      <span className="text-[10px] font-mono text-slate-500">GCE &amp; Cloud SQL</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs col-span-2 sm:col-span-1">
                      <Globe className="w-4 h-4 text-emerald-600 mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-[#01153B] block">Public Cloud</span>
                      <span className="text-[10px] font-mono text-slate-500">Multi-Cloud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. SECTION: CUSTOMER BENEFITS
          Dark Navy section (#01153B) with exact 5 client-frozen benefits
          ========================================================================= */}
      <section
        id="customer-benefits"
        aria-label="Customer Benefits"
        className="w-full py-16 sm:py-24 lg:py-28 bg-[#01153B] text-white border-b border-slate-800"
      >
        <Container size="wide" className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                PROVEN BUSINESS VALUE
              </span>
            </div>
            {/* Exact Client Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans">
              Customer Benefits
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Measurable technical, operational, and financial outcomes delivered through Zoftcorp’s Database as a Service model.
            </p>
          </div>

          {/* 5 Exact Client-Frozen Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Benefit 1 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">BENEFIT 01</span>
                  <BarChart3 className="w-4 h-4 text-[#00B3FF]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                  Unified dashboard of your database estates in multiple platforms
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Centralized visibility and unified operational control across on-premises, AWS, Azure, GCP, and public cloud environments.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                MULTI-PLATFORM TELEMETRY
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF6F00]/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#FF6F00]">BENEFIT 02</span>
                  <Layers className="w-4 h-4 text-[#FF6F00]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                  Smarter cloning of your databases
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Fast, storage-efficient snapshot branching for development, staging, performance testing, and sandbox experimentation.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                RAPID TEST &amp; DEV BRANCHING
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-emerald-400">BENEFIT 03</span>
                  <Zap className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                  Reduced costs and Total cost of ownership
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Eliminate licensing waste, reduce idle compute overhead, and optimize database resource allocation through continuous FinOps alignment.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                MEASURABLE TCO REDUCTION
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">BENEFIT 04</span>
                  <ShieldCheck className="w-4 h-4 text-[#00B3FF]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                  Better security
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Rigorous role-based access control, at-rest and in-transit encryption, continuous vulnerability monitoring, and regulatory compliance safeguards.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                ENTERPRISE-GRADE SAFEGUARDS
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors shadow-xs md:col-span-2 lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">BENEFIT 05</span>
                  <RefreshCw className="w-4 h-4 text-[#00B3FF]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                  Better Life cycle Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-2xl">
                  Seamless operational automation from provisioning and zero-downtime patching to high availability clustering, point-in-time recovery, and capacity forecasting.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                END-TO-END OPERATIONAL GOVERNANCE
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. SECTION: FINAL CTA (CONNECT WITH US)
          Exact client wording from Page 13 of the frozen document
          ========================================================================= */}
      <section
        id="dbaas-cta"
        aria-label="Connect With Us"
        className="relative bg-[#01153B] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            SPECIALIZED MANAGED SERVICES (DBAAS)
          </span>

          {/* Exact Client Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12] max-w-4xl mx-auto">
            Connect With Us
          </h2>

          {/* Exact Client Sub-heading */}
          <p className="text-xl sm:text-2xl font-semibold text-[#00B3FF] font-sans max-w-2xl mx-auto">
            Looking to simplify and scale your database operations?
          </p>

          {/* Exact Client Statement */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
            Partner with Zoftcorp for Specialized Managed DBaaS — delivering performance tuning, compliance‑ready management, and cost‑aware optimization across SQL, NoSQL, and vector databases.
          </p>

          {/* Exact Client Callout Prompt */}
          <p className="text-base sm:text-lg font-semibold text-white font-sans max-w-2xl mx-auto pt-2">
            👉 Reach out today to transform your infrastructure into measurable business value.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Reach Out Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Talk to an Architect Today</span>
              <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
