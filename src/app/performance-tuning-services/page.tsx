import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Coins,
  ShieldAlert,
  Users,
  Cpu,
  CheckCircle2,
  Sliders,
  Search,
  Activity,
  LineChart,
  GitBranch,
  AlertTriangle,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Database Performance Tuning Services | ZOFT Corp',
  description:
    'Slow queries, inefficient indexing, and poorly optimized workloads can cost businesses time, money, and customer trust. Our Database Performance Tuning Services ensure your SQL Server, Oracle, MySQL, or cloud-native databases run at peak efficiency—delivering faster response times, reduced downtime, and improved scalability.',
  alternates: {
    canonical: 'https://zoftcorp.com/performance-tuning-services/',
  },
  openGraph: {
    title: 'Database Performance Tuning Services | ZOFT Corp',
    description:
      'Faster queries. Optimized workloads. Better scalability. Deliver peak efficiency across enterprise database engines with ZOFT Corp.',
    url: 'https://zoftcorp.com/performance-tuning-services/',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Database Performance Tuning Services | ZOFT Corp',
    description:
      'Faster queries. Optimized workloads. Better scalability. Deliver peak efficiency across enterprise database engines with ZOFT Corp.',
  },
};

// Exact original benefits from source
const BENEFITS = [
  {
    number: '01',
    title: 'Faster Query Execution',
    description: 'Optimize indexes, joins, and stored procedures for lighting-fast results.',
    icon: Zap,
    metric: 'INDEX SEEK OPTIMIZATION',
    detail: 'Eliminate expensive table scans, refactor sub-optimal joins, and optimize execution plans.',
  },
  {
    number: '02',
    title: 'Improved Scalability',
    description: 'Handle growing workloads without compromising performance.',
    icon: TrendingUp,
    metric: 'CONCURRENCY & THROUGHPUT',
    detail: 'Eliminate lock contention, tune connection pools, and sustain high transaction volumes.',
  },
  {
    number: '03',
    title: 'Cost Efficiency',
    description: 'Reduce cloud resource consumption and licensing costs.',
    icon: Coins,
    metric: 'COMPUTE & IOPS EFFICIENCY',
    detail: 'Lower provisioned IOPS, memory waste, and scale down oversized compute instances.',
  },
  {
    number: '04',
    title: 'Enhanced Reliability',
    description: 'Minimize bottlenecks and prevent outages with proactive tuning.',
    icon: ShieldAlert,
    metric: 'PROACTIVE STABILITY',
    detail: 'Prevent deadlocks, mitigate TempDB saturation, and establish automated guardrails.',
  },
  {
    number: '05',
    title: 'Better User Experience',
    description: 'Deliver seamless application performance to end-users.',
    icon: Users,
    metric: 'SUB-SECOND LATENCY SLA',
    detail: 'Accelerate API turnaround and eliminate sluggish page loads across consumer-facing apps.',
  },
  {
    number: '06',
    title: 'Optimized Resource Utilization',
    description: 'Optimized resource utilization ensures maximum efficiency and productivity.',
    icon: Cpu,
    metric: 'BALANCED SYSTEM METRICS',
    detail: 'Even memory grant distributions, balanced buffer cache hits, and minimized thread queueing.',
  },
];

// The 5 original process stages in order
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Comprehensive Assessment',
    description: 'Workload profiling, slow query log extraction, and resource bottleneck analysis.',
    type: 'Diagnostic Scan',
    accentColor: '#00B3FF',
  },
  {
    step: '02',
    title: 'Configuration Review',
    description: 'Engine buffer pools, memory allocation thresholds, and concurrency parameter audit.',
    type: 'Architecture Audit',
    accentColor: '#00D2FF',
  },
  {
    step: '03',
    title: 'Load & Stress Testing',
    description: 'Peak concurrency stress simulation, lock escalation stress testing, and IOPS limits.',
    type: 'Stress Validation',
    accentColor: '#FF6F00',
  },
  {
    step: '04',
    title: 'Index and Query Tuning',
    description: 'Covering index creation, execution plan optimization, and stored procedure refactoring.',
    type: 'Execution Refinement',
    accentColor: '#00B3FF',
  },
  {
    step: '05',
    title: 'Continuous Monitoring',
    description: 'Automated telemetry alerts, query regression guardrails, and ongoing health reports.',
    type: 'Proactive Telemetry',
    accentColor: '#10B981',
  },
];

// 7 Supported Platforms - authentic SVG logos
const PLATFORMS = [
  {
    id: 'oracle',
    name: 'Oracle',
    badgeText: 'Oracle',
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
    id: 'sql-server',
    name: 'Microsoft SQL Server',
    badgeText: 'Microsoft SQL Server',
    logo: (
      <svg viewBox="0 0 160 36" className="w-auto h-7 max-h-7" fill="none" aria-label="Microsoft SQL Server">
        <g transform="translate(2, 4)">
          <rect x="0" y="0" width="11" height="11" fill="#F25022" />
          <rect x="14" y="0" width="11" height="11" fill="#7FBA00" />
          <rect x="0" y="14" width="11" height="11" fill="#00A4EF" />
          <rect x="14" y="14" width="11" height="11" fill="#FFB900" />
        </g>
        <text x="36" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="10" fill="#64748B">
          Microsoft
        </text>
        <text x="36" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="13" fill="#0F172A">
          SQL Server
        </text>
      </svg>
    ),
  },
  {
    id: 'amazon-rds',
    name: 'Amazon RDS',
    badgeText: 'Amazon RDS',
    logo: (
      <svg viewBox="0 0 140 36" className="w-auto h-7 max-h-7" fill="none" aria-label="Amazon RDS">
        <path
          d="M15 6L4 13V24L15 31L26 24V13L15 6Z"
          fill="#3B48CC"
          stroke="#527FFF"
          strokeWidth="1.5"
        />
        <path d="M15 6V18M4 13L15 18L26 13" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
        <text x="33" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="10" fill="#475569">
          amazon
        </text>
        <text x="33" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14" fill="#0F172A">
          RDS
        </text>
      </svg>
    ),
  },
  {
    id: 'azure',
    name: 'Azure',
    badgeText: 'Microsoft Azure',
    logo: (
      <svg viewBox="0 0 120 36" className="w-auto h-7 max-h-7" fill="none" aria-label="Microsoft Azure">
        <g transform="translate(4, 4)">
          <path d="M13.5 1.5L3 17.5H9.5L16.2 7.2L13.5 1.5Z" fill="#0078D4" />
          <path d="M14.5 3L8.5 23H16L22 12.5L14.5 3Z" fill="#50E6FF" />
          <path d="M0.5 23H13.5L20.5 13L14.5 3L0.5 23Z" fill="#0078D4" />
        </g>
        <text x="34" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="#0078D4">
          Azure
        </text>
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    badgeText: 'PostgreSQL',
    logo: (
      <svg viewBox="0 0 140 36" className="w-auto h-7 max-h-7" fill="none" aria-label="PostgreSQL">
        <g transform="translate(2, 3)">
          <path
            d="M14 2C7 2 2 7 2 13C2 19 7 24 14 24C16 24 20 22 22 18C23 16 24 12 23 9C22 5 18 2 14 2Z"
            fill="#336791"
            opacity="0.15"
          />
          <path
            d="M13 3C8 3 4 7 4 12C4 16 7 20 11 21V16C9.5 16 8.5 15 8.5 14C8.5 13 9.5 12 11 12H14V10C14 8.5 15 7.5 16.5 7.5C18 7.5 19 8.5 19 10V15C19 17 17 19 15 19H13V22C18 22 22 18 22 13C22 8 18 3 13 3Z"
            fill="#336791"
          />
        </g>
        <text x="32" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="14" fill="#336791">
          PostgreSQL
        </text>
      </svg>
    ),
  },
  {
    id: 'mariadb-mysql',
    name: 'MariaDB / MySQL',
    badgeText: 'MariaDB / MySQL',
    logo: (
      <svg viewBox="0 0 150 36" className="w-auto h-7 max-h-7" fill="none" aria-label="MariaDB / MySQL">
        <text x="4" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="13" fill="#003545">
          MariaDB
        </text>
        <text x="4" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" fill="#00758F">
          MySQL.
        </text>
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    badgeText: 'MongoDB',
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
  const pageUrl = 'https://zoftcorp.com/performance-tuning-services/';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Our Offerings', url: 'https://zoftcorp.com/offerings' },
    { name: 'Database Performance Tuning Services', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Database Performance Tuning Services"
        description="Slow queries, inefficient indexing, and poorly optimized workloads can cost businesses time, money, and customer trust. Our Database Performance Tuning Services ensure your SQL Server, Oracle, MySQL, or cloud-native databases run at peak efficiency—delivering faster response times, reduced downtime, and improved scalability."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          SECTION A: HERO — DATABASE DIAGNOSTICS & OPTIMIZATION STUDIO
          Editorial split with strong typography & interactive query execution studio
          (No 3D cylinder databases)
          ========================================================================= */}
      <section
        className="relative bg-[#01153B] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800"
        aria-label="Database Performance Tuning Services Hero"
      >
        {/* Deep studio gradients */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[550px] h-[450px] bg-[#00B3FF]/15 blur-[130px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[420px] h-[380px] bg-[#FF6F00]/10 blur-[110px] rounded-full"
          aria-hidden="true"
        />

        {/* Precision diagnostic grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF0a_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF0a_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                DATABASE DIAGNOSTICS &amp; TUNING STUDIO
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
                Database Performance{' '}
                <span className="text-[#00B3FF] block mt-1">Tuning Services</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Faster queries. Optimized workloads. Better scalability. Our Database Performance
                Tuning Services ensure your SQL Server, Oracle, MySQL, or cloud-native databases run
                at peak efficiency.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#FF6F00] hover:bg-[#E66300] shadow-lg shadow-[#FF6F00]/25 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#FF6F00] group"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#performance-tuning-process"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Explore Tuning Workflow
                </a>
              </div>
            </div>

            {/* Right Distinctive Query Execution Plan & Diagnostic Trace Visual */}
            <div className="lg:col-span-6 w-full">
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

                {/* Query Execution Tree Visual (CSS/SVG) */}
                <div className="space-y-4">
                  {/* Root Operator */}
                  <div className="bg-[#01153B] border border-cyan-500/40 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center font-mono text-xs font-bold">
                        H
                      </div>
                      <div>
                        <div className="text-xs font-mono text-white font-bold">
                          Hash Match (Inner Join)
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          Cost: 1.04% // Rows: 42,100 // Est Execution: 4.8ms
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      SEEK PASS
                    </span>
                  </div>

                  {/* Branch Connectors */}
                  <div className="grid grid-cols-2 gap-3 pl-4 relative">
                    <div className="absolute -left-1 top-0 bottom-4 w-3 border-l-2 border-b-2 border-slate-600 rounded-bl-lg" />

                    {/* Branch A: Clustered Index Seek */}
                    <div className="bg-[#01153B]/90 border border-emerald-500/30 rounded-xl p-2.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Clustered Index Seek</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-300">
                        [PK_Orders_CustomerID]
                      </div>
                      <div className="text-[9px] font-mono text-slate-400">
                        Zero Table Scan // Logical Reads: 14
                      </div>
                    </div>

                    {/* Branch B: Covering Non-Clustered Seek */}
                    <div className="bg-[#01153B]/90 border border-[#00B3FF]/30 rounded-xl p-2.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#00B3FF]">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Covering Index Seek</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-300">
                        [IX_Customer_Status_Date]
                      </div>
                      <div className="text-[9px] font-mono text-slate-400">
                        Index Key Lookup Eliminated
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Waveform & Real-Time Performance Bars */}
                  <div className="bg-[#01153B] border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300">
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

                    {/* Diagnostic Metric Tickers */}
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

      {/* BREADCRUMB BAR */}
      <div className="bg-[#FAFAFA] border-b border-slate-200/80 py-3 text-xs text-slate-600 font-sans">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-400" aria-hidden="true">
                /
              </li>
              <li>
                <Link
                  href="/offerings"
                  className="text-slate-600 hover:text-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1"
                >
                  Our Offerings
                </Link>
              </li>
              <li className="text-slate-400" aria-hidden="true">
                /
              </li>
              <li className="text-slate-800 font-medium" aria-current="page">
                Database Performance Tuning Services
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* =========================================================================
          SECTION B: WHY DATABASE PERFORMANCE TUNING MATTERS?
          Clear before-versus-after performance diagnosis with contrasting query paths
          (Exact text preserved)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-tuning-matters-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                FORENSIC QUERY DIAGNOSIS
              </span>
              <h2
                id="why-tuning-matters-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight leading-tight"
              >
                Why <span className="text-[#00B3FF]">Database Performance Tuning</span> Matters?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Slow queries, inefficient indexing, and poorly optimized workloads can cost
                businesses time, money, and customer trust. Our Database Performance Tuning Services
                ensure your SQL Server, Oracle, MySQL, or cloud-native databases run at peak
                efficiency—delivering faster response times, reduced downtime, and improved
                scalability.
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <Activity className="w-5 h-5 text-[#FF6F00] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Proactive query optimization eliminates resource contention at the architectural root,
                    preventing expensive cloud compute scaling to mask inefficient SQL.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contrasting Forensic Query Trace Visuals */}
            <div className="lg:col-span-7 w-full space-y-5">
              {/* Trace 1: Inefficient Query Path */}
              <div className="bg-amber-50/50 border-2 border-amber-300/80 rounded-2xl p-6 relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-amber-200/80 mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
                      Inefficient Query Path (High Latency)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-200/60 text-amber-800 px-2 py-0.5 rounded">
                    UNOPTIMIZED
                  </span>
                </div>

                {/* Inefficient Topology Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-center">
                  <div className="bg-white border border-amber-200 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">STEP 1</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                      Query Request
                    </span>
                    <span className="text-[10px] text-amber-600 font-mono">Missing Index</span>
                  </div>

                  <div className="bg-white border-2 border-amber-400 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-amber-600 block">BOTTLENECK</span>
                    <span className="text-xs font-bold text-amber-700 block mt-0.5">
                      Full Table Scan
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">1.2M Rows Read</span>
                  </div>

                  <div className="bg-white border border-amber-200 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">CONTENTION</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                      TempDB Spill
                    </span>
                    <span className="text-[10px] text-amber-600 font-mono">Memory Grant Exhausted</span>
                  </div>

                  <div className="bg-white border border-amber-300 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">OUTCOME</span>
                    <span className="text-xs font-bold text-rose-600 block mt-0.5">
                      High Latency
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Spike in Cloud Costs</span>
                  </div>
                </div>
              </div>

              {/* Trace 2: Optimized Query Path */}
              <div className="bg-[#01153B] border-2 border-[#00B3FF]/80 rounded-2xl p-6 relative overflow-hidden text-white shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                      After Tuning (Optimized Performance)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#00B3FF]/20 text-cyan-300 px-2 py-0.5 rounded border border-[#00B3FF]/40">
                    TUNED PATH
                  </span>
                </div>

                {/* Optimized Topology Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-center">
                  <div className="bg-[#031E4D] border border-cyan-500/30 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">STEP 1</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">
                      Query Request
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Sargable Filter</span>
                  </div>

                  <div className="bg-[#031E4D] border-2 border-emerald-400/60 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-emerald-400 block">TARGETED</span>
                    <span className="text-xs font-bold text-white block mt-0.5">
                      Clustered Index Seek
                    </span>
                    <span className="text-[10px] text-cyan-300 font-mono">Exact Row Range</span>
                  </div>

                  <div className="bg-[#031E4D] border border-cyan-500/30 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">IN-MEMORY</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">
                      Buffer Cache Hit
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Zero Disk I/O Wait</span>
                  </div>

                  <div className="bg-[#031E4D] border border-emerald-400/60 p-3 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 block">OUTCOME</span>
                    <span className="text-xs font-bold text-emerald-400 block mt-0.5">
                      Sub-second Return
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">Optimal Scalability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION C: KEY BENEFITS OF OUR SERVICE
          Asymmetrical performance-analysis composition:
          - 1 prominent featured benefit with dedicated execution visual
          - 5 staggered editorial diagnostic rows with thin technical dividers
          (Completely eliminates the six-card grid)
          ========================================================================= */}
      <section
        className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/90"
        aria-labelledby="benefits-heading"
      >
        <Container>
          <div className="max-w-4xl space-y-3 mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              SPECIALIST VALUE DELIVERABLES
            </span>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight"
            >
              Key Benefits of Our Service
            </h2>
          </div>

          {/* Asymmetrical Composition Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Prominent Featured Benefit: 01 Faster Query Execution */}
            <div className="lg:col-span-5 bg-[#01153B] text-white rounded-2xl p-7 sm:p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold font-mono text-[#00B3FF]">01</span>
                  <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/40">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                    CORE DELIVERABLE
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {BENEFITS[0].title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    “{BENEFITS[0].description}”
                  </p>
                </div>
              </div>

              {/* Dedicated Query Performance Analysis Visual */}
              <div className="bg-[#031E4D] border border-cyan-500/30 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">INDEX SEEK PIPELINE</span>
                  <span className="text-emerald-400 font-bold">LIGHTING-FAST</span>
                </div>
                {/* Visual B-Tree Traversal Path */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 rounded bg-[#01153B] border border-slate-700 text-slate-300">
                    Root Page
                  </div>
                  <div className="p-2 rounded bg-[#01153B] border border-[#00B3FF]/50 text-cyan-300">
                    Intermediate
                  </div>
                  <div className="p-2 rounded bg-emerald-500/20 border border-emerald-400 text-emerald-400 font-bold">
                    Leaf Node Seek
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {BENEFITS[0].detail}
                </p>
              </div>
            </div>

            {/* Remaining 5 Benefits: Staggered Diagnostic Rows */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm divide-y divide-slate-100">
              {BENEFITS.slice(1).map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.number}
                    className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number & Icon */}
                      <span className="text-xl font-bold font-mono text-slate-400 group-hover:text-[#00B3FF] transition-colors mt-0.5">
                        {benefit.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 group-hover:text-[#00B3FF] group-hover:border-[#00B3FF]/40 group-hover:bg-[#00B3FF]/5 flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          “{benefit.description}”
                        </p>
                      </div>
                    </div>

                    {/* Metric Tag */}
                    <div className="shrink-0 sm:text-right pl-14 sm:pl-0">
                      <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-600 group-hover:bg-[#00B3FF]/10 group-hover:text-[#00B3FF] transition-colors">
                        {benefit.metric}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION D: OUR DATABASE PERFORMANCE TUNING PROCESS
          Custom winding diagnostic route inspired by reference image
          Light surface, 5 ordered stations along switchback path with technical illustrations
          (Completely eliminates generic straight timeline)
          ========================================================================= */}
      <section
        id="performance-tuning-process"
        className="py-20 md:py-28 bg-white relative overflow-hidden"
        aria-labelledby="tuning-process-heading"
      >
        <Container>
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
              END-TO-END OPTIMIZATION JOURNEY
            </span>
            <h2
              id="tuning-process-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight"
            >
              Our Database Performance Tuning Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
              A structured diagnostic switchback from root assessment to persistent production telemetry.
            </p>
          </div>

          {/* DESKTOP WINDING DIAGNOSTIC ROUTE (Curved Switchback Path) */}
          <div className="hidden lg:block relative py-12 max-w-6xl mx-auto">
            {/* SVG Winding Diagnostic Highway */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1100 420"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#01153B" />
                  <stop offset="35%" stopColor="#00B3FF" />
                  <stop offset="70%" stopColor="#FF6F00" />
                  <stop offset="100%" stopColor="#00B3FF" />
                </linearGradient>
              </defs>

              {/* Road Outer Base */}
              <path
                d="M 60 120 C 220 120, 220 320, 380 320 C 540 320, 540 120, 700 120 C 860 120, 860 320, 1040 320"
                stroke="#E2E8F0"
                strokeWidth="28"
                strokeLinecap="round"
              />
              {/* Road Inner Core */}
              <path
                d="M 60 120 C 220 120, 220 320, 380 320 C 540 320, 540 120, 700 120 C 860 120, 860 320, 1040 320"
                stroke="url(#routeGradient)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Road Center Dashes */}
              <path
                d="M 60 120 C 220 120, 220 320, 380 320 C 540 320, 540 120, 700 120 C 860 120, 860 320, 1040 320"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
            </svg>

            {/* 5 Distinct Diagnostic Stations Positioned Along Winding Path */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {/* Station 01 — Top Left */}
              <div className="flex flex-col items-center text-center space-y-3 group pt-0">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#00B3FF] shadow-xl flex flex-col items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-[#00B3FF] mb-1" />
                  <span className="text-[10px] font-mono font-bold text-slate-800">01 SCAN</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-md w-full">
                  <span className="text-[10px] font-mono text-[#00B3FF] font-bold block uppercase">
                    STAGE 01
                  </span>
                  <h3 className="text-sm font-bold text-[#01153B] leading-tight mt-0.5">
                    {PROCESS_STAGES[0].title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug font-normal">
                    {PROCESS_STAGES[0].description}
                  </p>
                </div>
              </div>

              {/* Station 02 — Bottom Center-Left */}
              <div className="flex flex-col items-center text-center space-y-3 group pt-44">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-cyan-400 shadow-xl flex flex-col items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6 text-cyan-500 mb-1" />
                  <span className="text-[10px] font-mono font-bold text-slate-800">02 CONFIG</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-md w-full">
                  <span className="text-[10px] font-mono text-cyan-600 font-bold block uppercase">
                    STAGE 02
                  </span>
                  <h3 className="text-sm font-bold text-[#01153B] leading-tight mt-0.5">
                    {PROCESS_STAGES[1].title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug font-normal">
                    {PROCESS_STAGES[1].description}
                  </p>
                </div>
              </div>

              {/* Station 03 — Top Center */}
              <div className="flex flex-col items-center text-center space-y-3 group pt-0">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#FF6F00] shadow-xl flex flex-col items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 text-[#FF6F00] mb-1" />
                  <span className="text-[10px] font-mono font-bold text-slate-800">03 STRESS</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-md w-full">
                  <span className="text-[10px] font-mono text-[#FF6F00] font-bold block uppercase">
                    STAGE 03
                  </span>
                  <h3 className="text-sm font-bold text-[#01153B] leading-tight mt-0.5">
                    {PROCESS_STAGES[2].title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug font-normal">
                    {PROCESS_STAGES[2].description}
                  </p>
                </div>
              </div>

              {/* Station 04 — Bottom Center-Right */}
              <div className="flex flex-col items-center text-center space-y-3 group pt-44">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#00B3FF] shadow-xl flex flex-col items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-[#00B3FF] mb-1" />
                  <span className="text-[10px] font-mono font-bold text-slate-800">04 TUNING</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-md w-full">
                  <span className="text-[10px] font-mono text-[#00B3FF] font-bold block uppercase">
                    STAGE 04
                  </span>
                  <h3 className="text-sm font-bold text-[#01153B] leading-tight mt-0.5">
                    {PROCESS_STAGES[3].title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug font-normal">
                    {PROCESS_STAGES[3].description}
                  </p>
                </div>
              </div>

              {/* Station 05 — Top Right */}
              <div className="flex flex-col items-center text-center space-y-3 group pt-0">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl flex flex-col items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <LineChart className="w-6 h-6 text-emerald-500 mb-1" />
                  <span className="text-[10px] font-mono font-bold text-slate-800">05 TELEMETRY</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-md w-full">
                  <span className="text-[10px] font-mono text-emerald-600 font-bold block uppercase">
                    STAGE 05
                  </span>
                  <h3 className="text-sm font-bold text-[#01153B] leading-tight mt-0.5">
                    {PROCESS_STAGES[4].title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug font-normal">
                    {PROCESS_STAGES[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET WINDING ROUTE (Responsive Vertical Switchback) */}
          <div className="lg:hidden space-y-6 max-w-xl mx-auto relative pl-6 border-l-4 border-dashed border-[#00B3FF]/40 ml-4">
            {PROCESS_STAGES.map((stage) => (
              <div key={stage.step} className="relative pb-6 last:pb-0">
                {/* Station Node Badge */}
                <div
                  className="absolute -left-[38px] top-1.5 w-10 h-10 rounded-xl bg-white border-2 flex items-center justify-center shadow-md font-mono text-xs font-bold"
                  style={{ borderColor: stage.accentColor, color: stage.accentColor }}
                >
                  {stage.step}
                </div>

                {/* Station Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1 shadow-sm">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    STAGE {stage.step} {'//'} {stage.type}
                  </div>
                  <h3 className="text-base font-bold text-[#01153B]">{stage.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION E: SUPPORTED PLATFORMS
          Minimal platform compatibility strip / structured logo wall
          (No central 3D database, no orbiting cards, no constellation)
          ========================================================================= */}
      <section
        className="py-16 md:py-24 bg-slate-50 border-t border-slate-200"
        aria-labelledby="supported-platforms-heading"
      >
        <Container>
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              ENGINE COMPATIBILITY MATRIX
            </span>
            <h2
              id="supported-platforms-heading"
              className="text-3xl sm:text-4xl font-bold text-[#01153B] tracking-tight"
            >
              Supported Platforms
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
              Deep tuning expertise across relational, cloud-managed, and open-source database engines.
            </p>
          </div>

          {/* Minimal Structured Compatibility Strip */}
          <div className="max-w-6xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="h-9 flex items-center justify-center mb-2 filter grayscale group-hover:grayscale-0 transition-all">
                    {platform.logo}
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center block">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Engine Capabilities Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Execution Plan &amp; Parameter Sniffing Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                <span>Buffer Pool &amp; IOPS Latency Remediation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                <span>Zero-Downtime Index Defragmentation</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION F: CLOSING CALL TO ACTION
          Distinctive technical closure with exact original CTA wording
          ========================================================================= */}
      <section
        className="py-16 md:py-24 bg-[#01153B] text-white text-center border-t border-slate-800 relative overflow-hidden"
        aria-label="Ready to Supercharge Your Database CTA"
      >
        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#00B3FF15,transparent_70%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to supercharge your database?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Contact us today for a{' '}
              <strong className="text-[#00B3FF] font-semibold">
                free performance assessment
              </strong>{' '}
              and discover how we can help your systems run faster, smarter, and more cost-efficiently.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base text-[#01153B] bg-[#00B3FF] hover:bg-cyan-300 font-semibold rounded-xl shadow-lg shadow-[#00B3FF]/25 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base text-[#00B3FF] border border-[#00B3FF]/50 hover:bg-[#00B3FF]/15 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Need Assistance?</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
