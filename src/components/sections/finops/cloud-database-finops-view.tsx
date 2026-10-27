import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Database,
  ShieldAlert,
  Clock,
  CheckCircle2,
  Wallet,
  Users2,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ConsultingServiceDiagram } from "@/components/sections/consulting-detail/consulting-service-diagrams";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export function CloudDatabaseFinOpsView() {
  const pageUrl = "https://zoftcorp.com/consulting/cloud-finops";
  const breadcrumbItems = [
    { name: "Home", url: "https://zoftcorp.com" },
    { name: "Consulting", url: "https://zoftcorp.com/consulting" },
    { name: "Cloud & Database FinOps", url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Cloud & Database FinOps | ZOFT Corp"
        description="FinOps goes beyond savings. It's the discipline of turning technology spend into measurable business value. We don't just optimize or manage costs — we embed FinOps culture."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          1. HERO SECTION & CORE POSITIONING
          ========================================================================= */}
      <section
        id="finops-hero"
        aria-label="Cloud and Database FinOps Hero"
        className="relative w-full bg-[#01153B] text-white py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-800"
      >
        {/* Background Architectural Blueprint Pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        {/* Subtle Ambient Lighting */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#031E4D]/70 blur-[120px] rounded-full"
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
            <Link
              href="/consulting"
              className="hover:text-[#00B3FF] transition-colors"
            >
              Consulting
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 truncate">
              Cloud &amp; Database FinOps
            </span>
          </nav>

          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Consulting Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Core Positioning Statement & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3.5 py-1.5 rounded-full border border-[#00B3FF]/30 uppercase tracking-wider shadow-2xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00B3FF] mr-1.5 animate-pulse" />
                  CAPABILITY 03 // ENTERPRISE FINOPS
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  {"//"} ARCHITECTURAL ADVISORY
                </span>
              </div>

              {/* Exact H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                Cloud &amp; Database FinOps
              </h1>

              {/* Exact Core Positioning 1 */}
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-semibold leading-snug font-sans max-w-2xl">
                “FinOps goes beyond savings. It’s the discipline of turning
                technology spend into measurable business value.”
              </p>

              {/* Exact Core Positioning 2 */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl font-normal">
                “We don’t just optimize or manage costs — we embed FinOps culture.”
              </p>

              {/* Three Dimensions Callout Note */}
              <div className="p-4 rounded-xl bg-[#031E4D]/80 border border-slate-750/90 text-sm text-slate-300 leading-relaxed max-w-2xl">
                <span className="text-[#00B3FF] font-mono font-bold text-xs uppercase tracking-wider block mb-1">
                  THREE-DIMENSIONAL COUPLING
                </span>
                Zoftcorp unites{" "}
                <strong className="text-white">Optimization</strong> (system efficiency),{" "}
                <strong className="text-white">Cost Management</strong> (budget control), and{" "}
                <strong className="text-white">FinOps Culture</strong> (cross-functional accountability) into a unified enterprise operating model.
              </div>

              {/* CTA Button Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Talk to our Architect
                </Link>
                <a
                  href="#three-dimensions"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
                >
                  <span>Explore Three Dimensions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Telemetry Visual */}
            <div className="lg:col-span-5 w-full">
              <ConsultingServiceDiagram slug="cloud-finops" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. OPTIMIZATION / COST MANAGEMENT / FINOPS CULTURE (COMPARISON)
          ========================================================================= */}
      <section
        id="three-dimensions"
        aria-label="Optimization, Cost Management, and FinOps Culture"
        className="relative bg-slate-50/70 text-[#01153B] py-16 sm:py-20 lg:py-28 border-b border-slate-200/90"
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              THREE-DIMENSIONAL FINOPS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.12]">
              Optimization. Cost Management. FinOps Culture.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Surface-level cost tools focus exclusively on invoices. True business agility requires addressing technical efficiency, financial guardrails, and cross-functional ownership together.
            </p>
          </div>

          {/* Responsive 3-Column Comparison Ledger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* DIMENSION 1: OPTIMIZATION */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                      <SlidersHorizontal className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                      DIMENSION 01
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    EFFICIENCY
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Optimization
                </h3>

                {/* Exact Client-Frozen Bullet Points */}
                <ul className="space-y-3.5 text-sm text-slate-600 font-sans leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span>Improves efficiency of systems and queries</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span>Technical focus: tuning, right-sizing, automation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span>Short-term gains in speed and savings</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#01153B]">Delivered by engineers</span>
                  </li>
                </ul>
              </div>

              {/* Footer Tag */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>FOCUS: TECHNICAL</span>
                <span className="text-[#00B3FF] font-bold">TUNING &amp; AUTOMATION</span>
              </div>
            </div>

            {/* DIMENSION 2: COST MANAGEMENT */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center">
                      <Wallet className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#FF6F00] uppercase tracking-wider">
                      DIMENSION 02
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    GOVERNANCE
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Cost Management
                </h3>

                {/* Exact Client-Frozen Bullet Points */}
                <ul className="space-y-3.5 text-sm text-slate-600 font-sans leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6F00] shrink-0 mt-0.5" />
                    <span>Controls budgets and tracks expenses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6F00] shrink-0 mt-0.5" />
                    <span>Financial focus: reporting, approvals, budget adherence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6F00] shrink-0 mt-0.5" />
                    <span>Prevents overspending and enforces limits</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6F00] shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#01153B]">Driven by finance teams</span>
                  </li>
                </ul>
              </div>

              {/* Footer Tag */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>FOCUS: FINANCIAL</span>
                <span className="text-[#FF6F00] font-bold">BUDGET ENFORCEMENT</span>
              </div>
            </div>

            {/* DIMENSION 3: FINOPS CULTURE (FEATURED DIFFERENTIATOR) */}
            <div className="relative rounded-2xl bg-[#031E4D] text-white border border-[#00B3FF]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              {/* Featured Ribbon */}
              <div className="absolute -top-3 right-6 bg-[#00B3FF] text-[#01153B] text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                STRATEGIC VALUE
              </div>

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center">
                      <Users2 className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                      DIMENSION 03
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/30">
                    ACCOUNTABILITY
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
                  FinOps Culture
                </h3>

                {/* Exact Client-Frozen Bullet Points */}
                <ul className="space-y-3.5 text-sm text-slate-300 font-sans leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span>Builds accountability across engineering, finance, and business</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span>Cross-functional discipline: shared ownership of cloud/database spend</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span>Long-term sustainable value and cultural change</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Enabled by architects who bridge tech + finance</span>
                  </li>
                </ul>
              </div>

              {/* Footer Tag */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>FOCUS: ORGANIZATIONAL</span>
                <span className="text-[#00B3FF] font-bold">SHARED OWNERSHIP</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. WHY CLOUD & DATABASE FINOPS MATTERS
          ========================================================================= */}
      <section
        id="why-finops-matters"
        aria-label="Why Cloud and Data Matters?"
        className="relative bg-white text-[#01153B] py-16 sm:py-20 lg:py-24 border-b border-slate-200/90"
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              BUSINESS REALITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.12]">
              Why Cloud and Data Matters?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Cloud scalability without architectural discipline exposes organizations to compounding cost inflation, operational drag, and compliance exposure.
            </p>
          </div>

          {/* 4 Exact Client-Provided Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Point 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#00B3FF]/60 hover:bg-white transition-all duration-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">01</span>
              </div>
              <h3 className="text-lg font-bold text-[#01153B] font-sans leading-snug">
                Escalating Cloud Bills
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                “Unchecked provisioning and idle resources inflate spend.”
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#00B3FF]/60 hover:bg-white transition-all duration-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">02</span>
              </div>
              <h3 className="text-lg font-bold text-[#01153B] font-sans leading-snug">
                Database / Data Inefficiencies
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                “Data Ingestion, Poorly tuned queries drain CPU, I/O, and licensing budgets.”
              </p>
            </div>

            {/* Point 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#00B3FF]/60 hover:bg-white transition-all duration-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">03</span>
              </div>
              <h3 className="text-lg font-bold text-[#01153B] font-sans leading-snug">
                Compliance Risks
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                “Mismanaged data pipelines expose organizations to regulatory penalties.”
              </p>
            </div>

            {/* Point 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#00B3FF]/60 hover:bg-white transition-all duration-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">04</span>
              </div>
              <h3 className="text-lg font-bold text-[#01153B] font-sans leading-snug">
                Engineering Bandwidth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                “Teams waste cycles firefighting instead of innovating.”
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. WHY ZOFTCORP?
          ========================================================================= */}
      <section
        id="why-zoftcorp"
        aria-label="Why Zoftcorp"
        className="relative bg-[#031E4D] text-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-800"
      >
        {/* Subtle Ambient Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authoritative Positioning Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                THE ZOFTCORP ADVANTAGE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
                Why Zoftcorp?
              </h2>

              {/* Exact Client-Frozen Positioning Statements */}
              <div className="space-y-4 pt-2 text-slate-200 font-sans leading-relaxed">
                <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  “At Zoftcorp, we don’t stop at surface-level FinOps.”
                </p>

                <p className="text-base sm:text-lg text-slate-300">
                  “Unlike generic firms, we dive deep into database costs — uncovering the hidden levers that truly drive optimization.”
                </p>

                <p className="text-base sm:text-lg text-slate-300">
                  “Our expertise spans cloud, AI, and the database layer, enabling us to transform infrastructure from a cost center into a strategic business asset.”
                </p>

                <p className="text-base sm:text-lg text-[#00B3FF] font-semibold pt-1">
                  “With Zoftcorp, optimization isn’t just about saving money — it’s about unlocking measurable business value.”
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25"
                >
                  Discuss Your Workload
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20"
                >
                  <span>About Our Engineering Practice</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Layer Stack Card */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-[#01153B] border border-slate-750 p-6 sm:p-8 space-y-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                    ARCHITECTURAL COUPLING
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-800/80 px-2 py-0.5 rounded">
                    LAYERED LEVERAGE
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  {/* Layer 1: Cloud */}
                  <div className="p-3.5 rounded-xl bg-[#031E4D] border border-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#00B3FF] font-bold uppercase">LAYER 01 // CLOUD PLATFORM</span>
                      <span className="text-slate-400 text-[10px]">AWS / Azure / GCP</span>
                    </div>
                    <p className="text-slate-200 font-semibold text-sm">Compute Right-Sizing &amp; Reservation Strategy</p>
                    <p className="text-slate-400 text-[11px]">Instance family alignment, auto-scaling thresholds, egress pathing.</p>
                  </div>

                  {/* Layer 2: AI */}
                  <div className="p-3.5 rounded-xl bg-[#031E4D] border border-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#FF6F00] font-bold uppercase">LAYER 02 // AI INFRASTRUCTURE</span>
                      <span className="text-slate-400 text-[10px]">Inference &amp; Vector</span>
                    </div>
                    <p className="text-slate-200 font-semibold text-sm">Model Ingestion &amp; Retrieval Economics</p>
                    <p className="text-slate-400 text-[11px]">Token telemetry, cache hit ratios, GPU capacity optimization.</p>
                  </div>

                  {/* Layer 3: Database Core */}
                  <div className="p-3.5 rounded-xl bg-[#031E4D] border border-[#00B3FF]/50 space-y-1 bg-[#00B3FF]/5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">LAYER 03 // DATABASE CORE</span>
                      <span className="text-emerald-400 text-[10px] font-mono font-bold">DEEP LEVER</span>
                    </div>
                    <p className="text-white font-semibold text-sm">Query Execution &amp; IOPS Tiering</p>
                    <p className="text-slate-300 text-[11px]">Buffer pools, index tuning, and core licensing reduction unlocking 20–30% spend recovery.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-center">
                  <span className="text-[11px] font-mono text-slate-400">
                    Transforming Infrastructure Into a Strategic Business Asset
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. ENGAGEMENT MODELS
          ========================================================================= */}
      <section
        id="engagement-models"
        aria-label="Engagement Models"
        className="relative bg-white text-[#01153B] py-16 sm:py-20 lg:py-24 border-b border-slate-200/90"
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              FLEXIBLE DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.12]">
              Engagement Models
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Structured engagement pathways designed to deliver immediate cost reduction and establish permanent financial governance.
            </p>
          </div>

          {/* 3 Exact Client-Frozen Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Model 1: FinOps Audit */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">MODEL 01</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-200/60 px-2 py-0.5 rounded">
                    ASSESSMENT
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  FinOps Audit
                </h3>
                {/* Exact Client-Frozen Description */}
                <p className="text-base text-slate-700 font-semibold font-sans">
                  “One-time assessment of cloud &amp; DB spend.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Comprehensive review of infrastructure telemetry, idle capacity, database query efficiency, and licensing footprint to uncover immediate waste and strategic savings levers.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                >
                  <span>Request a FinOps Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Model 2: Optimization Sprint */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF6F00] hover:bg-white transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#FF6F00]">MODEL 02</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-200/60 px-2 py-0.5 rounded">
                    INTERVENTION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Optimization Sprint
                </h3>
                {/* Exact Client-Frozen Description */}
                <p className="text-base text-slate-700 font-semibold font-sans">
                  “4–6 week engagement to deliver measurable savings.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Targeted, production-validated architectural intervention focused on database tuning, instance right-sizing, IOPS rationalization, and immediate spend reduction.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00] hover:text-[#01153B] transition-colors"
                >
                  <span>Schedule an Optimization Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Model 3: Managed FinOps */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">MODEL 03</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-200/60 px-2 py-0.5 rounded">
                    CONTINUOUS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Managed FinOps
                </h3>
                {/* Exact Client-Frozen Description */}
                <p className="text-base text-slate-700 font-semibold font-sans">
                  “Continuous monitoring, anomaly detection, and compliance reporting.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Ongoing architectural governance providing real-time telemetry, automated spend threshold alerts, monthly executive spend reviews, and continuous cross-functional culture enablement.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                >
                  <span>Inquire About Managed FinOps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. FINAL CTA SECTION
          ========================================================================= */}
      <section
        id="finops-cta"
        aria-label="Ready to cut costs without compromise"
        className="relative bg-[#01153B] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-800"
      >
        {/* Subtle Ambient Lighting */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            FINANCIAL AGILITY &amp; TECHNICAL EXCELLENCE
          </span>

          {/* Exact Client-Frozen CTA Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12] max-w-4xl mx-auto">
            Ready to cut costs without compromise?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Speak directly with a senior cloud and database architect to evaluate your infrastructure spend, establish continuous FinOps governance, and turn technology spend into measurable business value.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to our Architect
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Consulting Overview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
