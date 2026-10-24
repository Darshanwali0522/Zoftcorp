import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Lock,
  UserCheck,
  FileSearch,
  KeyRound,
  FileCheck2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ConsultingServiceDiagram } from "@/components/sections/consulting-detail/consulting-service-diagrams";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export function DPDPComplianceView() {
  const pageUrl = "https://zoftcorp.com/consulting/compliance-governance";
  const breadcrumbItems = [
    { name: "Home", url: "https://zoftcorp.com" },
    { name: "Consulting", url: "https://zoftcorp.com/consulting" },
    { name: "DPDP Compliance", url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="DPDP Compliance | ZOFT Corp"
        description="We help enterprises align with India’s Digital Personal Data Protection Act (DPDP) — embedding compliance into databases, cloud platforms, and business processes so you stay secure, resilient, and penalty-proof."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          1. HERO SECTION & CORE POSITIONING
          ========================================================================= */}
      <section
        id="dpdp-hero"
        aria-label="DPDP Compliance Hero"
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
              DPDP Compliance
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
                  CAPABILITY 04 // DATA PRIVACY &amp; GOVERNANCE
                </span>
              </div>

              {/* Exact Client-Frozen Primary Headline / H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
                Compliance Built Into Every System. Audit-Ready, Always.
              </h1>

              {/* Exact Client-Frozen Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
                We help enterprises align with India’s Digital Personal Data Protection Act (DPDP) — embedding compliance into databases, cloud platforms, and business processes so you stay secure, resilient, and penalty-proof.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Request a DPDP Audit
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
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-300 block uppercase tracking-wider">
                    Statutory Regime
                  </span>
                  <span className="text-slate-200 font-bold">DPDP Rules, 2025</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-300 block uppercase tracking-wider">
                    Mandatory Milestone
                  </span>
                  <span className="text-[#00B3FF] font-bold">Nov 2026 / May 2027</span>
                </div>
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-300 block uppercase tracking-wider">
                    Security Safeguards
                  </span>
                  <span className="text-emerald-400 font-bold">ISO 27001 / 27701</span>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Governance Topology Diagram */}
            <div className="lg:col-span-5 w-full">
              <ConsultingServiceDiagram
                slug="compliance-governance"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. SECTION: WHY DPDP COMPLIANCE MATTERS
          ========================================================================= */}
      <section
        id="why-dpdp-matters"
        aria-label="Why DPDP Compliance Matters"
        className="w-full py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] border-b border-slate-200"
      >
        <Container size="wide" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
              <span className="font-mono text-xs font-bold text-[#FF6F00] uppercase tracking-wider">
                REGULATORY OBLIGATIONS &amp; TECHNICAL IMPACT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#01153B] font-sans">
              Why DPDP Compliance Matters
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              India’s Digital Personal Data Protection regulatory framework fundamentally shifts compliance from annual paperwork into active architectural enforcement.
            </p>
          </div>

          {/* 3 Client-Provided Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Point 1: Maximum Penalty */}
            <div className="relative rounded-2xl bg-white border border-red-200/80 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-red-600 uppercase tracking-wider">
                      STATUTORY CEILING
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    PENALTY RISK
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Maximum Penalty
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-base sm:text-lg text-slate-800 font-semibold font-sans leading-snug">
                  “₹250 crore maximum penalty per violation under DPDP Rules, 2025.”
                </p>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Financial exposure for non-compliance extends across unauthorized processing, security breaches, failure to protect personal data, and non-reporting.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>IMPACT LEVEL: CRITICAL</span>
                <span className="text-red-600 font-bold">₹250 CRORE PER VIOLATION</span>
              </div>
            </div>

            {/* Point 2: Consent Manager Requirement */}
            <div className="relative rounded-2xl bg-white border border-[#00B3FF]/40 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                      TIMELINE OBLIGATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
                    DEADLINE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Consent Manager Requirement
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-base sm:text-lg text-slate-800 font-semibold font-sans leading-snug">
                  “Consent Manager integration mandatory from Nov 2026; full regime effective May 2027.”
                </p>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Enterprises must engineer bidirectional interoperability with interoperable Consent Managers to register, track, and revoke consent across heterogeneous platforms.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>ENFORCEMENT WINDOW</span>
                <span className="text-[#00B3FF] font-bold">NOV 2026 — MAY 2027</span>
              </div>
            </div>

            {/* Point 3: Technical Compliance */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#01153B]/10 text-[#01153B] flex items-center justify-center">
                      <Lock className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#01153B] uppercase tracking-wider">
                      SYSTEM INTEGRATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    ENGINEERING FOCUS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Technical Compliance
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-base sm:text-lg text-slate-800 font-semibold font-sans leading-snug">
                  “Compliance is not paperwork — it requires consent architecture, breach readiness, and technical safeguards.”
                </p>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Real compliance demands automated access control policies, cryptographically secure audit logs, runtime breach detection, and deterministic erasure workflows.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>METHODOLOGY</span>
                <span className="text-[#01153B] font-bold">CODE &amp; ARCHITECTURE</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. SECTION: OUR APPROACH
          ========================================================================= */}
      <section
        id="our-approach"
        aria-label="Our Approach"
        className="w-full py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200"
      >
        <Container size="wide" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                ENGINEERING-LED IMPLEMENTATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#01153B] font-sans">
              Our Approach
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              We apply a phased architectural methodology that builds compliance directly into your databases, identity boundaries, API gateways, and cloud workloads.
            </p>
          </div>

          {/* 5 Client-Provided Approaches */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Stage 1: Gap Assessment */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-7 flex flex-col justify-between shadow-2xs hover:border-[#00B3FF] hover:bg-white transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">STAGE 01</span>
                  <div className="p-1.5 rounded-md bg-[#00B3FF]/10 text-[#00B3FF]">
                    <FileSearch className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#01153B] font-sans tracking-tight">
                  Gap Assessment
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-sm sm:text-base text-slate-700 font-medium font-sans leading-relaxed">
                  “Map personal data flows, fiduciary obligations, and compliance gaps.”
                </p>

                <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1">
                  Complete discovery across relational schemas, document collections, object stores, and third-party data exchange channels.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                DELIVERABLE: DATA FLOW &amp; GAP MATRIX
              </div>
            </div>

            {/* Stage 2: Consent Architecture */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-7 flex flex-col justify-between shadow-2xs hover:border-[#00B3FF] hover:bg-white transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">STAGE 02</span>
                  <div className="p-1.5 rounded-md bg-[#00B3FF]/10 text-[#00B3FF]">
                    <KeyRound className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#01153B] font-sans tracking-tight">
                  Consent Architecture
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-sm sm:text-base text-slate-700 font-medium font-sans leading-relaxed">
                  “Build systems that capture, store, and revoke consent seamlessly.”
                </p>

                <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1">
                  Implement tamper-evident consent logging, interoperable Consent Manager APIs, and automated downstream processing locks.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                DELIVERABLE: CONSENT MANAGEMENT ENGINE
              </div>
            </div>

            {/* Stage 3: Rights Workflows */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-7 flex flex-col justify-between shadow-2xs hover:border-[#00B3FF] hover:bg-white transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">STAGE 03</span>
                  <div className="p-1.5 rounded-md bg-[#00B3FF]/10 text-[#00B3FF]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#01153B] font-sans tracking-tight">
                  Rights Workflows
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-sm sm:text-base text-slate-700 font-medium font-sans leading-relaxed">
                  “Enable access, correction, erasure, and grievance redressal for data principals.”
                </p>

                <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1">
                  Orchestrated self-service and administrative pipelines ensuring guaranteed SLAs for principal rights requests and dispute resolution.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                DELIVERABLE: DATA PRINCIPAL WORKFLOW ENGINE
              </div>
            </div>

            {/* Stage 4: Breach Readiness */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-7 flex flex-col justify-between shadow-2xs hover:border-[#FF6F00] hover:bg-white transition-all duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#FF6F00]">STAGE 04</span>
                  <div className="p-1.5 rounded-md bg-[#FF6F00]/10 text-[#FF6F00]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#01153B] font-sans tracking-tight">
                  Breach Readiness
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-sm sm:text-base text-slate-700 font-medium font-sans leading-relaxed">
                  “Incident playbooks and notification processes aligned with DPDP timelines.”
                </p>

                <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1">
                  Automated incident containment procedures, regulatory notification pipelines, and forensic logging meeting statutory reporting windows.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                DELIVERABLE: INCIDENT PLAYBOOKS &amp; TELEMETRY
              </div>
            </div>

            {/* Stage 5: Compliance Embedded */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-7 flex flex-col justify-between shadow-2xs hover:border-emerald-500 hover:bg-white transition-all duration-200 md:col-span-2 lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-emerald-600">STAGE 05</span>
                  <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#01153B] font-sans tracking-tight">
                  Compliance Embedded
                </h3>

                {/* Exact Client-Frozen Statement */}
                <p className="text-sm sm:text-base text-slate-700 font-medium font-sans leading-relaxed max-w-3xl">
                  “Integrate ISO 27001/27701 security safeguards into database and cloud systems.”
                </p>

                <p className="text-xs text-slate-500 font-sans leading-relaxed pt-1 max-w-3xl">
                  Harmonize privacy information management and information security controls with database-level encryption, role-based access control, continuous vulnerability monitoring, and infrastructure-as-code guardrails.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                DELIVERABLE: PRODUCTION SECURITY &amp; PRIVACY BASELINE (ISO 27001 / 27701)
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. SECTION: BUSINESS OUTCOMES
          ========================================================================= */}
      <section
        id="business-outcomes"
        aria-label="Business Outcomes"
        className="w-full py-16 sm:py-24 lg:py-28 bg-[#01153B] text-white border-b border-slate-800"
      >
        <Container size="wide" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                MEASURABLE ENTERPRISE VALUE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans">
              Business Outcomes
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              When compliance is treated as an architectural discipline rather than a legal checklist, it reinforces operational resilience and unlocks competitive trust.
            </p>
          </div>

          {/* 4 Client-Provided Outcomes (Strictly exact, no invented metrics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Outcome 1 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 space-y-4 hover:border-[#00B3FF]/40 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#00B3FF]">OUTCOME 01</span>
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                “Audit-ready compliance posture validated against DPDP obligations.”
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Continuous compliance posture with verifiable controls and audit readiness across database and cloud infrastructure.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 space-y-4 hover:border-[#00B3FF]/40 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#00B3FF]">OUTCOME 02</span>
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                “Reduced regulatory risk with documented evidence of safeguards.”
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Structured evidentiary documentation of technical security controls, consent workflows, and breach readiness.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 space-y-4 hover:border-[#00B3FF]/40 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#00B3FF]">OUTCOME 03</span>
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                “Customer trust through transparent consent and data rights workflows.”
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Frictionless principal rights redressal, transparent consent lifecycle management, and protected consumer privacy.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="rounded-2xl bg-[#031E4D] border border-white/10 p-7 sm:p-8 space-y-4 hover:border-[#00B3FF]/40 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#00B3FF]">OUTCOME 04</span>
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                “Operational resilience with compliance built into performance and FinOps.”
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Unified technical architecture where compliance, query performance, and cloud cost management reinforce each other.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. SECTION: ENGAGEMENT MODELS
          ========================================================================= */}
      <section
        id="engagement-models"
        aria-label="Engagement Models"
        className="w-full py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] border-b border-slate-200"
      >
        <Container size="wide" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
              <span className="font-mono text-xs font-bold text-[#FF6F00] uppercase tracking-wider">
                FLEXIBLE CONSULTING PARTNERSHIPS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#01153B] font-sans">
              Engagement Models
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Whether you need an immediate compliance gap analysis, a hands-on implementation sprint, or ongoing monitoring, our engagement models adapt to your readiness timeline.
            </p>
          </div>

          {/* 3 Client-Provided Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Model 1: DPDP Audit */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF] transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">MODEL 01</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                    ASSESSMENT
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  DPDP Audit
                </h3>
                {/* Exact Client-Frozen Description */}
                <p className="text-base text-slate-800 font-semibold font-sans">
                  “One-time compliance readiness assessment.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Targeted diagnostic evaluating personal data inventories, consent tracking mechanisms, database access policies, and statutory compliance gaps.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                >
                  <span>Request a DPDP Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Model 2: Compliance Sprint */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF6F00] transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#FF6F00]">MODEL 02</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                    IMPLEMENTATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Compliance Sprint
                </h3>
                {/* Exact Client-Frozen Description */}
                <p className="text-base text-slate-800 font-semibold font-sans">
                  “6–8 week engagement to implement consent architecture and breach workflows.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Hands-on engineering intervention deploying Consent Manager APIs, automated data principal rights pipelines, and incident notification playbooks.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00] hover:text-[#01153B] transition-colors"
                >
                  <span>Schedule a Compliance Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Model 3: Managed Compliance */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF] transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">MODEL 03</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                    CONTINUOUS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Managed Compliance
                </h3>
                {/* Exact Client-Frozen Description */}
                <p className="text-base text-slate-800 font-semibold font-sans">
                  “Continuous monitoring, reporting, and regulatory updates.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Ongoing compliance observability, automated drift detection, periodic audit readiness reports, and continuous alignment with DPDP statutory amendments.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                >
                  <span>Inquire About Managed Compliance</span>
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
        id="dpdp-cta"
        aria-label="Ready to make compliance your competitive advantage"
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
            STATUTORY READINESS &amp; TECHNICAL EXCELLENCE
          </span>

          {/* Exact Client-Frozen CTA Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12] max-w-4xl mx-auto">
            Ready to make compliance your competitive advantage?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Connect with our enterprise database and cloud architects to assess your DPDP posture, build consent workflows, and embed technical safeguards into your technology foundation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Request a DPDP Audit
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
