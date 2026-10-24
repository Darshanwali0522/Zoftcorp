import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Database,
  Coins,
  Server,
  Code2,
  RefreshCw,
  GitBranch,
  Globe,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

interface DatabaseMigrationsViewProps {
  pageUrl?: string;
}

export function DatabaseMigrationsView({
  pageUrl = 'https://zoftcorp.com/offerings/database-migrations-and-transformations',
}: DatabaseMigrationsViewProps) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Our Offerings', url: 'https://zoftcorp.com/offerings' },
    { name: 'Migration & Transformations', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Migration & Transformations | ZOFT Corp"
        description="At Zoftcorp, we simplify the complexity of database migrations — whether you’re modernizing within the same ecosystem or transforming across platforms. Our proven methodology ensures minimal downtime, cost-aware execution, and compliance-ready transitions."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          1. HERO SECTION: MIGRATION & TRANSFORMATIONS
          Dark navy environment (#01153B) with technical source-to-target HUD
          ========================================================================= */}
      <section
        id="migration-hero"
        aria-label="Migration & Transformations Hero"
        className="relative w-full bg-[#01153B] text-white pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-800"
      >
        {/* Background Grid & Ambient Glow */}
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
            <Link href="/offerings" className="hover:text-[#00B3FF] transition-colors">
              Our Offerings
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 truncate">Migration &amp; Transformations</span>
          </nav>

          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/offerings"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Offerings Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Exact Client Headline & Sub-Headline */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3.5 py-1.5 rounded-full border border-[#00B3FF]/30 uppercase tracking-wider shadow-2xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00B3FF] mr-1.5 animate-pulse" />
                  OFFERING 05 // MIGRATION &amp; TRANSFORMATIONS
                </span>
              </div>

              {/* Exact Client Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
                Migration &amp; Transformations
              </h1>

              {/* Exact Client Sub-Headline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-sans max-w-2xl font-normal">
                At Zoftcorp, we simplify the complexity of database migrations — whether you’re modernizing within the same ecosystem or transforming across platforms. Our proven methodology ensures minimal downtime, cost‑aware execution, and compliance‑ready transitions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Connect With Us Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-700 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Talk to an Architect Today</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>
              </div>

              {/* Fast Facts Monospace Strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Ecosystems
                  </span>
                  <span className="text-slate-200 font-bold">Homogeneous</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Transformations
                  </span>
                  <span className="text-[#00B3FF] font-bold">Heterogeneous</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Downtime Model
                  </span>
                  <span className="text-emerald-400 font-bold">Minimal Downtime</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Compliance
                  </span>
                  <span className="text-[#FF6F00] font-bold">DPDP / GDPR Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Source-to-Target Technical Engine Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/70 mb-5 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-semibold tracking-wider">
                      MIGRATION PIPELINE // CONTINUOUS CDC
                    </span>
                  </div>
                  <span className="text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-0.5 rounded border border-[#00B3FF]/30 text-[11px] font-bold">
                    ZERO LOSS
                  </span>
                </div>

                {/* Source-to-Target Diagram */}
                <div className="grid grid-cols-11 gap-2 sm:gap-3 items-center py-3">
                  {/* Source Database */}
                  <div className="col-span-4 bg-[#01153B] border border-amber-500/30 rounded-xl p-3 text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      SOURCE WORKLOAD
                    </span>
                    <div className="mx-auto w-12 h-14 relative flex flex-col items-center justify-center py-1">
                      <div className="w-10 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 border border-amber-300" />
                      <div className="w-10 h-3.5 -mt-1.5 rounded-b-lg bg-amber-600/70 border-x border-b border-amber-400/50" />
                      <div className="w-10 h-3.5 -mt-1.5 rounded-b-lg bg-amber-700/70 border-x border-b border-amber-400/50" />
                      <div className="w-10 h-3.5 -mt-1.5 rounded-b-lg bg-amber-800/80 border-x border-b border-amber-400/60" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 block">
                      Oracle / SQL Server
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="col-span-3 flex flex-col items-center justify-center gap-1.5 py-1 text-center">
                    <div className="w-full flex items-center justify-center gap-1">
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-400 to-[#00B3FF]" />
                      <div className="w-2 h-2 border-t-2 border-r-2 border-[#00B3FF] rotate-45" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/15 px-1.5 py-0.5 rounded border border-[#00B3FF]/30">
                      ETL &amp; CDC
                    </span>
                    <div className="w-full flex items-center justify-center gap-1">
                      <div className="w-2 h-2 border-b-2 border-l-2 border-amber-400 rotate-45" />
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-400 to-[#00B3FF]" />
                    </div>
                  </div>

                  {/* Target Database */}
                  <div className="col-span-4 bg-[#01153B] border border-[#00B3FF]/40 rounded-xl p-3 text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00B3FF] font-bold block">
                      TARGET WORKLOAD
                    </span>
                    <div className="mx-auto w-12 h-14 relative flex flex-col items-center justify-center py-1">
                      <div className="w-10 h-3 rounded-full bg-gradient-to-r from-[#00B3FF] to-cyan-300 border border-cyan-200" />
                      <div className="w-10 h-3.5 -mt-1.5 rounded-b-lg bg-[#0078D4]/70 border-x border-b border-[#00B3FF]/50" />
                      <div className="w-10 h-3.5 -mt-1.5 rounded-b-lg bg-[#031E4D]/80 border-x border-b border-[#00B3FF]/50" />
                      <div className="w-10 h-3.5 -mt-1.5 rounded-b-lg bg-[#01153B] border-x border-b border-[#00B3FF]/60" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 block">
                      PostgreSQL / Cloud
                    </span>
                  </div>
                </div>

                {/* Technical Milestone Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-slate-700/60 mt-3 text-center">
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <Code2 className="w-3.5 h-3.5 text-[#00B3FF] mx-auto mb-1" />
                    <span className="text-[10px] font-mono text-slate-300 block">Schema Conversion</span>
                  </div>
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <Server className="w-3.5 h-3.5 text-[#00B3FF] mx-auto mb-1" />
                    <span className="text-[10px] font-mono text-slate-300 block">Data Pipeline</span>
                  </div>
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-[10px] font-mono text-slate-300 block">Integrity Check</span>
                  </div>
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <Zap className="w-3.5 h-3.5 text-[#FF6F00] mx-auto mb-1" />
                    <span className="text-[10px] font-mono text-slate-300 block">Tuning &amp; Cutover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. SECTION: HOMOGENEOUS & HETEROGENEOUS MIGRATIONS
          Crisp dual-card architecture with exact client-frozen bullet points
          ========================================================================= */}
      <section
        id="migration-types"
        aria-label="Homogeneous and Heterogeneous Migrations"
        className="w-full py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200"
      >
        <Container size="wide" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                MIGRATION ARCHITECTURE TAXONOMY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#01153B] font-sans">
              Migration Strategies: Homogeneous &amp; Heterogeneous
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Tailored modernization pathways aligned with your workload dependencies, vendor strategy, and licensing economics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* =========================================================================
                Homogeneous Migrations Card (Exact Client Copy)
                ========================================================================= */}
            <div className="rounded-2xl bg-slate-50 border-2 border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                      <RefreshCw className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                      SAME-PLATFORM MODERNIZATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
                    TYPE 01
                  </span>
                </div>

                {/* Exact Client Heading */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] font-sans tracking-tight">
                  Homogeneous Migrations
                </h3>

                {/* Exact Client Definition */}
                <p className="text-base sm:text-lg text-slate-800 font-medium font-sans leading-relaxed">
                  Moving within the same database family (e.g., Oracle → Oracle, SQL Server → SQL Server).
                </p>

                {/* Exact Client Bullet Points */}
                <div className="space-y-4 pt-2">
                  {/* Point 1: Version Upgrades */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider block">
                      VERSION UPGRADES
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium font-sans">
                      Seamless transition to the latest releases.
                    </p>
                  </div>

                  {/* Point 2: Re-host (Lift & Shift) */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider block">
                      RE‑HOST (LIFT &amp; SHIFT)
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium font-sans">
                      Quick migration to cloud or hybrid environments.
                    </p>
                  </div>

                  {/* Point 3: Re-platform */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider block">
                      RE‑PLATFORM
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium font-sans">
                      Optimize workloads while staying within the same vendor ecosystem.
                    </p>
                  </div>

                  {/* Point 4: Benefits */}
                  <div className="p-4 rounded-xl bg-[#00B3FF]/5 border border-[#00B3FF]/30 space-y-1">
                    <span className="text-xs font-mono font-bold text-[#01153B] uppercase tracking-wider block">
                      BENEFITS
                    </span>
                    <p className="text-sm sm:text-base text-[#01153B] font-semibold font-sans">
                      Faster execution, lower risk, and immediate performance gains.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>FOCUS: VERSION AGILITY</span>
                <span className="text-[#00B3FF] font-bold">MINIMAL REFACTORING</span>
              </div>
            </div>

            {/* =========================================================================
                Heterogeneous Migrations Card (Exact Client Copy)
                ========================================================================= */}
            <div className="rounded-2xl bg-slate-50 border-2 border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between hover:border-[#FF6F00] hover:bg-white transition-all duration-200 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center">
                      <GitBranch className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#FF6F00] uppercase tracking-wider">
                      CROSS-PLATFORM TRANSFORMATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#FF6F00] bg-[#FF6F00]/10 px-2 py-0.5 rounded border border-[#FF6F00]/30">
                    TYPE 02
                  </span>
                </div>

                {/* Exact Client Heading */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] font-sans tracking-tight">
                  Heterogeneous Migrations
                </h3>

                {/* Exact Client Definition */}
                <p className="text-base sm:text-lg text-slate-800 font-medium font-sans leading-relaxed">
                  Transforming across different database platforms (e.g., SQL Server → PostgreSQL, Oracle → MySQL).
                </p>

                {/* Exact Client Bullet Points */}
                <div className="space-y-4 pt-2">
                  {/* Point 1: Schema Conversion */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-bold text-[#FF6F00] uppercase tracking-wider block">
                      SCHEMA CONVERSION
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium font-sans">
                      Automated tools + expert tuning for compatibility.
                    </p>
                  </div>

                  {/* Point 2: Data Transformation */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-bold text-[#FF6F00] uppercase tracking-wider block">
                      DATA TRANSFORMATION
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium font-sans">
                      ETL/ELT pipelines optimized for accuracy and cost.
                    </p>
                  </div>

                  {/* Point 3: Application Refactoring */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-bold text-[#FF6F00] uppercase tracking-wider block">
                      APPLICATION REFACTORING
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium font-sans">
                      Aligning queries, stored procedures, and integrations.
                    </p>
                  </div>

                  {/* Point 4: Benefits */}
                  <div className="p-4 rounded-xl bg-[#FF6F00]/5 border border-[#FF6F00]/30 space-y-1">
                    <span className="text-xs font-mono font-bold text-[#01153B] uppercase tracking-wider block">
                      BENEFITS
                    </span>
                    <p className="text-sm sm:text-base text-[#01153B] font-semibold font-sans">
                      Reduced licensing costs, vendor independence, and future‑ready architecture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>FOCUS: VENDOR INDEPENDENCE</span>
                <span className="text-[#FF6F00] font-bold">CLOUD-NATIVE AGILITY</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. SECTION: WHY ZOFTCORP?
          Dark Navy section (#01153B) with the exact 4 client-frozen pillars
          ========================================================================= */}
      <section
        id="why-zoftcorp"
        aria-label="Why Zoftcorp"
        className="w-full py-16 sm:py-24 lg:py-28 bg-[#01153B] text-white border-b border-slate-800"
      >
        <Container size="wide" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                ENGINEERING-FIRST TRANSFORMATION
              </span>
            </div>
            {/* Exact Client Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans">
              Why Zoftcorp?
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              We replace risky, generic lift-and-shift methods with database-first precision, FinOps discipline, and statutory compliance safeguards.
            </p>
          </div>

          {/* 4 Exact Client-Frozen Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Pillar 1: Database-first expertise */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">PILLAR 01</span>
                  <Database className="w-4 h-4 text-[#00B3FF]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  Database‑first expertise
                </h3>
                <p className="text-base sm:text-lg text-slate-200 font-semibold font-sans leading-relaxed">
                  Performance tuning embedded in every migration.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  Execution plan diagnostics, indexing optimization, and volumetric benchmarking run continuously before, during, and after cutover.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                TUNING-FIRST PROTOCOL
              </div>
            </div>

            {/* Pillar 2: FinOps integration */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF6F00]/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#FF6F00]">PILLAR 02</span>
                  <Coins className="w-4 h-4 text-[#FF6F00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  FinOps integration
                </h3>
                <p className="text-base sm:text-lg text-slate-200 font-semibold font-sans leading-relaxed">
                  Cost visibility and optimization during transformation.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  Prevent runaway cloud spend with automated right-sizing, storage tier alignment, and license rationalization throughout the migration lifecycle.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                TCO CONTROL &amp; EFFICIENCY
              </div>
            </div>

            {/* Pillar 3: Compliance assurance */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-emerald-400">PILLAR 03</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  Compliance assurance
                </h3>
                <p className="text-base sm:text-lg text-slate-200 font-semibold font-sans leading-relaxed">
                  DPDP/GDPR frameworks built into migration workflows.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  Automated personal data discovery, cryptographic at-rest and in-transit safeguards, and audit-ready data flow mapping across jurisdictional boundaries.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                STATUTORY SAFEGUARDS
              </div>
            </div>

            {/* Pillar 4: Hybrid mastery */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">PILLAR 04</span>
                  <Globe className="w-4 h-4 text-[#00B3FF]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  Hybrid mastery
                </h3>
                <p className="text-base sm:text-lg text-slate-200 font-semibold font-sans leading-relaxed">
                  AWS, Azure, and on‑prem ecosystems unified under one strategy.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  Cohesive multi-cloud architectural governance that seamlessly bridges legacy on-premise infrastructure with hyperscaler cloud databases.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-slate-400">
                HYBRID &amp; MULTI-CLOUD GOVERNANCE
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. SECTION: FINAL CALL TO ACTION
          Exact client wording from Page 15 of the frozen document
          ========================================================================= */}
      <section
        id="migration-cta"
        aria-label="Ready to Transform Your Databases CTA"
        className="relative bg-[#01153B] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            MODERNIZE WITHOUT DISRUPTION
          </span>

          {/* Exact Client Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12] max-w-4xl mx-auto">
            Ready to Transform Your Databases?
          </h2>

          {/* Exact Client Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Whether it’s a homogeneous upgrade or a heterogeneous migration, Zoftcorp ensures a seamless, cost‑aware, and compliance‑ready journey.
          </p>

          {/* Exact Client Callout Prompt */}
          <p className="text-base sm:text-lg font-semibold text-white font-sans max-w-2xl mx-auto pt-2">
            👉 Connect with us today to modernize your database landscape and unlock measurable business value.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Connect With Us Today
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
