import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Coins,
  Users,
  CheckCircle2,
  GitBranch,
  AlertTriangle,
  Clock,
  Check,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Faster Queries. Lower Costs. Better Business. | Performance Tuning | Zoftcorp',
  description:
    'When execution paths degrade, queries spike, and technical debt compounds, the bottleneck isn’t just code — it impacts cost, compliance, and customer trust. We tune databases to deliver speed, resilience, and measurable outcomes.',
  alternates: {
    canonical: 'https://zoftcorp.com/offerings/performance-tuning-delivery',
  },
  openGraph: {
    title: 'Performance Tuning | Zoftcorp',
    description:
      'Faster Queries. Lower Costs. Better Business. We tune databases to deliver speed, resilience, and measurable outcomes.',
    url: 'https://zoftcorp.com/offerings/performance-tuning-delivery',
    siteName: 'Zoftcorp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Tuning | Zoftcorp',
    description:
      'Faster Queries. Lower Costs. Better Business. We tune databases to deliver speed, resilience, and measurable outcomes.',
  },
};

// Supported Platforms — authentic SVG logos
const PLATFORMS = [
  {
    id: 'sql-server',
    name: 'SQL Server',
    logo: (
      <svg viewBox="0 0 130 36" className="w-auto h-7 max-h-7" fill="none" aria-label="Microsoft SQL Server">
        <rect x="2" y="4" width="28" height="28" rx="4" fill="#CC292B" />
        <path d="M16 10V26M10 16H22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <text x="36" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="13" fill="#01153B">
          SQL Server
        </text>
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    logo: (
      <svg viewBox="0 0 130 36" className="w-auto h-7 max-h-7" fill="none" aria-label="PostgreSQL">
        <path
          d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6Z"
          fill="#336791"
        />
        <path d="M12 14C12 12 14 10 16 10C18 10 20 12 20 14V20C20 21 19 22 18 22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <text x="34" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="13" fill="#336791">
          PostgreSQL
        </text>
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL',
    logo: (
      <svg viewBox="0 0 130 36" className="w-auto h-7 max-h-7" fill="none" aria-label="MySQL">
        <path
          d="M6 22C10 12 16 8 26 10C24 16 20 24 14 26C10 26 7 24 6 22Z"
          fill="#00758F"
        />
        <text x="32" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" fill="#F29111">
          My<tspan fill="#00758F">SQL</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: 'oracle',
    name: 'Oracle',
    logo: (
      <svg viewBox="0 0 130 36" className="w-auto h-7 max-h-7" fill="none" aria-label="Oracle">
        <path
          d="M19.5 4H9.6C4.3 4 0 8.3 0 13.6V21C0 26.3 4.3 30.6 9.6 30.6H19.5C24.8 30.6 29.1 26.3 29.1 21V13.6C29.1 8.3 24.8 4 19.5 4ZM22.8 21C22.8 22.8 21.3 24.3 19.5 24.3H9.6C7.8 24.3 6.3 22.8 6.3 21V13.6C6.3 11.8 7.8 10.3 9.6 10.3H19.5C21.3 10.3 22.8 11.8 22.8 13.6V21Z"
          fill="#C74634"
        />
        <text x="35" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" fill="#C74634">
          ORACLE
        </text>
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    logo: (
      <svg viewBox="0 0 130 36" className="w-auto h-7 max-h-7" fill="none" aria-label="MongoDB">
        <g transform="translate(4, 3)">
          <path
            d="M11 1C11 1 5 7 5 14C5 20 9 24 11 26C13 24 17 20 17 14C17 7 11 1 11 1Z"
            fill="#00ED64"
          />
          <path d="M11 2V25C11 25 11 25 11 25C10.5 24 6.5 20 6.5 14C6.5 8.5 11 2 11 2Z" fill="#00684A" />
        </g>
        <text x="28" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" fill="#001E2B">
          mongo<tspan fill="#00ED64">DB</tspan>
        </text>
      </svg>
    ),
  },
];

export default function PerformanceTuningServicesPage() {
  const pageUrl = 'https://zoftcorp.com/offerings/performance-tuning-delivery';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Our Offerings', url: 'https://zoftcorp.com/offerings' },
    { name: 'Performance Tuning', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-[#01153B] font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Performance Tuning | Zoftcorp"
        description="Faster Queries. Lower Costs. Better Business. When execution paths degrade, queries spike, and technical debt compounds, we tune databases to deliver speed, resilience, and measurable outcomes."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          1. PERFORMANCE TUNING HERO
          ========================================================================= */}
      <section
        id="performance-tuning-hero"
        aria-label="Performance Tuning Hero"
        className="relative bg-[#01153B] text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800"
      >
        {/* Background Architectural Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        {/* Ambient Lighting */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[550px] h-[450px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[420px] h-[380px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
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
            <span className="text-slate-200 truncate">Performance Tuning</span>
          </nav>

          {/* Back to Offerings Link */}
          <div className="mb-8">
            <Link
              href="/offerings"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Offerings Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                SERVICE OFFERING 04 // DATABASE ENGINEERING
              </div>

              {/* Exact Client-Frozen Headline / H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
                Faster Queries. Lower Costs. Better Business.
              </h1>

              {/* Exact Client-Frozen Sub-Headline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl font-normal">
                When execution paths degrade, queries spike, and technical debt compounds, the bottleneck isn’t just code — it impacts cost, compliance, and customer trust. We tune databases to deliver speed, resilience, and measurable outcomes.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm text-white bg-[#FF6F00] hover:bg-[#E66300] shadow-xl shadow-[#FF6F00]/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
                >
                  <span>Optimize your database</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#our-approach"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Explore Our Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Diagnostic Query Plan Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Console Top Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60 mb-5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-semibold tracking-wider">
                      EXPLAIN ANALYZE // QUERY PLAN
                    </span>
                  </div>
                  <span className="text-[#00B3FF] bg-[#00B3FF]/15 px-2 py-0.5 rounded border border-[#00B3FF]/30 text-[11px]">
                    SARGABLE PREDICATE
                  </span>
                </div>

                {/* Query Execution Tree Visual */}
                <div className="space-y-4 font-mono">
                  {/* Root Operator */}
                  <div className="bg-[#01153B] border border-cyan-500/40 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center text-xs font-bold">
                        H
                      </div>
                      <div>
                        <div className="text-xs text-white font-bold">
                          Hash Match (Inner Join)
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Cost: 1.04% // Rows: 42,100 // Est: 4.8ms
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      SEEK PASS
                    </span>
                  </div>

                  {/* Branch Connectors */}
                  <div className="grid grid-cols-2 gap-3 pl-4 relative">
                    <div className="absolute -left-1 top-0 bottom-4 w-3 border-l-2 border-b-2 border-slate-600 rounded-bl-lg" />

                    {/* Branch A: Clustered Index Seek */}
                    <div className="bg-[#01153B]/90 border border-emerald-500/30 rounded-xl p-2.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Clustered Seek</span>
                      </div>
                      <div className="text-[10px] text-slate-300">
                        [PK_Orders_CustomerID]
                      </div>
                      <div className="text-[9px] text-slate-400">
                        Zero Table Scan // Reads: 14
                      </div>
                    </div>

                    {/* Branch B: Covering Non-Clustered Seek */}
                    <div className="bg-[#01153B]/90 border border-[#00B3FF]/30 rounded-xl p-2.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#00B3FF]">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Covering Seek</span>
                      </div>
                      <div className="text-[10px] text-slate-300">
                        [IX_Customer_Status_Date]
                      </div>
                      <div className="text-[9px] text-slate-400">
                        Key Lookup Eliminated
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Waveform & Real-Time Performance Bars */}
                  <div className="bg-[#01153B] border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Execution Latency Profile</span>
                      <span className="text-emerald-400 font-bold">12.4ms (Tuned)</span>
                    </div>

                    {/* Flamegraph Style Latency Breakdown */}
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                      <div
                        className="h-full bg-cyan-400"
                        style={{ width: '15%' }}
                        title="Parse & Compile (1.8ms)"
                      />
                      <div
                        className="h-full bg-[#00B3FF]"
                        style={{ width: '55%' }}
                        title="Index Traversal (6.8ms)"
                      />
                      <div
                        className="h-full bg-emerald-400"
                        style={{ width: '25%' }}
                        title="Buffer Fetch (3.1ms)"
                      />
                      <div
                        className="h-full bg-[#FF6F00]"
                        style={{ width: '5%' }}
                        title="Network Dispatch (0.7ms)"
                      />
                    </div>

                    {/* Metric Tickers */}
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                      <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800">
                        <div className="text-[9px] text-slate-400">BUFFER CACHE</div>
                        <div className="text-xs font-bold text-cyan-300">99.8%</div>
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800">
                        <div className="text-[9px] text-slate-400">LOCK WAIT</div>
                        <div className="text-xs font-bold text-emerald-400">0 ms</div>
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800">
                        <div className="text-[9px] text-slate-400">TEMPDB SPILL</div>
                        <div className="text-xs font-bold text-[#FF6F00]">0 KB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. SECTION: WHY PERFORMANCE TUNING MATTERS
          ========================================================================= */}
      <section
        id="why-performance-tuning-matters"
        aria-label="Why Performance Tuning Matters?"
        className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/90"
      >
        <Container size="wide">
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              BUSINESS IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight font-sans leading-[1.12]">
              Why Performance Tuning Matters?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Database bottlenecks ripple through the entire enterprise, transforming unoptimized query patterns into compounding operational drag, excessive cloud spend, and user dissatisfaction.
            </p>
          </div>

          {/* 3 Exact Client-Provided Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {/* 1. User Experience */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 space-y-4 hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">01 // LATENCY</span>
              </div>
              <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                User Experience
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                “Slow queries frustrate customers and erode trust.”
              </p>
            </div>

            {/* 2. Total Cost of Ownership */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 space-y-4 hover:border-[#FF6F00] hover:bg-white transition-all duration-200 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="w-10 h-10 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center">
                  <Coins className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">02 // TCO</span>
              </div>
              <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                Total Cost of Ownership
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                “Inefficient execution inflates compute, licensing, and cloud bills.”
              </p>
            </div>

            {/* 3. Engineering Bandwidth */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 space-y-4 hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">03 // CAPACITY</span>
              </div>
              <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                Engineering Bandwidth
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                “Teams waste cycles firefighting instead of innovating.”
              </p>
            </div>
          </div>

          {/* Forensic Query Path Comparison Diagram (Authentic Supporting Visual) */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                EXECUTION TOPOLOGY FORENSICS
              </span>
              <span className="text-xs font-mono text-[#00B3FF]">
                ROOT-CAUSE ANALYSIS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Unoptimized Path */}
              <div className="bg-amber-50/60 border-2 border-amber-300/80 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-amber-200/80">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
                      Inefficient Query Path (High Latency)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-200/70 text-amber-900 px-2.5 py-0.5 rounded">
                    UNOPTIMIZED
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-sans">
                  <div className="bg-white border border-amber-200 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">STEP 01</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">Query Inbound</span>
                    <span className="text-[10px] text-amber-600 font-mono">Missing Index</span>
                  </div>
                  <div className="bg-white border-2 border-amber-400 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-amber-600 block">BOTTLENECK</span>
                    <span className="text-xs font-bold text-amber-800 block mt-0.5">Table Scan</span>
                    <span className="text-[10px] text-slate-500 font-mono">1.2M Rows Read</span>
                  </div>
                  <div className="bg-white border border-amber-200 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">CONTENTION</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">TempDB Spill</span>
                    <span className="text-[10px] text-amber-600 font-mono">Memory Exhaust</span>
                  </div>
                  <div className="bg-white border border-amber-300 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">IMPACT</span>
                    <span className="text-xs font-bold text-rose-600 block mt-0.5">High Latency</span>
                    <span className="text-[10px] text-slate-500 font-mono">Bill Inflation</span>
                  </div>
                </div>
              </div>

              {/* Optimized Path */}
              <div className="bg-[#01153B] border-2 border-[#00B3FF]/80 rounded-2xl p-6 text-white space-y-4 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                      After Tuning (Optimized Performance)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#00B3FF]/20 text-cyan-300 px-2.5 py-0.5 rounded border border-[#00B3FF]/40">
                    TUNED PATH
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-sans">
                  <div className="bg-[#031E4D] border border-cyan-500/30 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">STEP 01</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">Query Inbound</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Sargable Filter</span>
                  </div>
                  <div className="bg-[#031E4D] border-2 border-emerald-400/60 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-emerald-400 block">TARGETED</span>
                    <span className="text-xs font-bold text-white block mt-0.5">Index Seek</span>
                    <span className="text-[10px] text-cyan-300 font-mono">Exact Row Range</span>
                  </div>
                  <div className="bg-[#031E4D] border border-cyan-500/30 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">IN-MEMORY</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">Buffer Hit</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Zero Disk Wait</span>
                  </div>
                  <div className="bg-[#031E4D] border border-emerald-400/60 p-2.5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">OUTCOME</span>
                    <span className="text-xs font-bold text-emerald-400 block mt-0.5">Sub-second</span>
                    <span className="text-[10px] text-slate-300 font-mono">Lower Cloud Spend</span>
                  </div>
                </div>
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
        className="py-16 sm:py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/90 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight font-sans leading-[1.12]">
              Our Approach
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Disciplined database engineering built on hard telemetry, execution plan analysis, and production-validated interventions.
            </p>
          </div>

          {/* 4 Exact Client-Provided Approaches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Approach 1 */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-[#00B3FF] transition-all duration-200 shadow-xs hover:shadow-lg space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center font-mono font-bold text-xs">
                    01
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    VALIDATION
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#01153B] font-sans leading-snug">
                  Evidence Before Intervention
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  “Every optimization is production-validated, enterprise-ready.”
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-[#00B3FF] font-semibold">
                TELEMETRY DRIVEN
              </div>
            </div>

            {/* Approach 2 */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-[#00B3FF] transition-all duration-200 shadow-xs hover:shadow-lg space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center font-mono font-bold text-xs">
                    02
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    INDEXING
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#01153B] font-sans leading-snug">
                  Query &amp; Index Optimization
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  “Reduce resource usage while improving throughput.”
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-[#00B3FF] font-semibold">
                IOPS &amp; CPU EFFICIENCY
              </div>
            </div>

            {/* Approach 3 */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-[#FF6F00] transition-all duration-200 shadow-xs hover:shadow-lg space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center font-mono font-bold text-xs">
                    03
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    EXECUTION
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#01153B] font-sans leading-snug">
                  Execution Path Analysis
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  “Identify and eliminate bottlenecks before they impact business.”
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-[#FF6F00] font-semibold">
                PLAN ANALYSIS
              </div>
            </div>

            {/* Approach 4 */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-[#00B3FF] transition-all duration-200 shadow-xs hover:shadow-lg space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center font-mono font-bold text-xs">
                    04
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    GOVERNANCE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#01153B] font-sans leading-snug">
                  Outcome-Driven Metrics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  “We measure success in speed, savings, and resilience.”
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-[#00B3FF] font-semibold">
                MEASURABLE RESULTS
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
        className="py-20 md:py-28 bg-[#031E4D] text-white border-b border-slate-800 relative overflow-hidden"
      >
        {/* Deep ambient glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <div className="max-w-3xl mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              VERIFIED VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans leading-[1.12]">
              Business Outcomes
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Our interventions directly convert database engine bottlenecks into hard operational velocity and financial savings.
            </p>
          </div>

          {/* 2 Exact Client Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Outcome 1 */}
            <div className="rounded-2xl bg-[#01153B] border border-cyan-500/30 p-8 sm:p-10 space-y-6 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                    LATENCY ACCELERATION
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-cyan-300 tracking-tight">
                  Up to 70%
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-snug">
                  Up to 70% faster query response times
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  Through surgical indexing, plan stabilization, and elimination of table scans, critical queries execute in fractions of their previous latency profile.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Validated against production execution baselines</span>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="rounded-2xl bg-[#01153B] border border-[#FF6F00]/30 p-8 sm:p-10 space-y-6 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-[#FF6F00] uppercase tracking-wider">
                    FINANCIAL EFFICIENCY
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-[#FF6F00]/20 text-[#FF6F00] flex items-center justify-center">
                    <Coins className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-[#FF6F00] tracking-tight">
                  TCO Drop
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-snug">
                  Significant reduction in infrastructure costs
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  Eliminating wasteful I/O reads and memory contention allows organizations to right-size compute, lower provisioned IOPS tiers, and avoid compute scaling to mask inefficient SQL.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Immediate cloud &amp; licensing spend reduction</span>
              </div>
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
        className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/90"
      >
        <Container size="wide">
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              FLEXIBLE DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight font-sans leading-[1.12]">
              Engagement Models
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 font-sans max-w-2xl">
              Structured engagement pathways designed to resolve immediate performance emergencies or establish long-term workload resilience.
            </p>
          </div>

          {/* 3 Exact Client-Provided Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Model 1: Performance Audit */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">MODEL 01</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-200/60 px-2 py-0.5 rounded">
                    ASSESSMENT
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Performance Audit
                </h3>
                {/* Exact Client Copy */}
                <p className="text-base text-slate-700 font-semibold font-sans">
                  “One-time assessment of query execution and resource usage.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Comprehensive forensic scan of execution plans, index utilization, wait statistics, and tempdb contention with a prioritized remediation roadmap.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                >
                  <span>Request a Performance Audit</span>
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
                {/* Exact Client Copy */}
                <p className="text-base text-slate-700 font-semibold font-sans">
                  “4–6 week engagement to deliver measurable improvements.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Hands-on query rewriting, index restructuring, and buffer cache tuning targeting the top resource-draining execution bottlenecks in production.
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

            {/* Model 3: Managed Performance */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#00B3FF] hover:bg-white transition-all duration-200 shadow-xs hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#00B3FF]">MODEL 03</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-200/60 px-2 py-0.5 rounded">
                    CONTINUOUS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                  Managed Performance
                </h3>
                {/* Exact Client Copy */}
                <p className="text-base text-slate-700 font-semibold font-sans">
                  “Continuous tuning, monitoring, and compliance reporting.”
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  Proactive 24/7 telemetry monitoring, automated regression alerts, monthly workload tuning cycles, and SLA-backed query response time governance.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                >
                  <span>Inquire About Managed Tuning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          ENGINE COMPATIBILITY MATRIX (Authentic Technical Supporting Visual)
          ========================================================================= */}
      <section
        className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200/90"
        aria-label="Supported Database Engines"
      >
        <Container size="wide">
          <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B3FF] block">
                  ENGINE EXPERTISE
                </span>
                <h3 className="text-lg font-bold text-[#01153B] font-sans">
                  Tuned Across Mission-Critical Data Layers
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Relational // Cloud-Native // High-Throughput
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center pt-6">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="h-9 flex items-center justify-center mb-2">
                    {platform.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. SECTION: CTA
          ========================================================================= */}
      <section
        id="performance-tuning-cta"
        aria-label="Optimize your database"
        className="py-20 sm:py-28 lg:py-32 bg-[#01153B] text-white text-center border-t border-slate-800 relative overflow-hidden"
      >
        {/* Subtle Ambient Lighting */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            HIGH-THROUGHPUT ENGINEERING
          </span>

          {/* Exact Client CTA Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.12] max-w-4xl mx-auto">
            Optimize your database
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Speak directly with an enterprise database performance specialist to analyze slow query plans, eliminate lock contention, and deliver measurable outcomes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base text-white bg-[#FF6F00] hover:bg-[#E66300] font-semibold shadow-xl shadow-[#FF6F00]/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
            >
              <span>Optimize your database</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/offerings"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Our Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
