import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Coins,
  Award,
  Search,
  Activity,
  Wrench,
  Database,
  LineChart,
  Server,
  Lock,
  RefreshCw,
  Cpu,
  HardDrive,
  Radio,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Database Support (DBA) Services | ZOFT Corp',
  description:
    'Databases are the backbone of modern business applications. Without proper management, they can suffer from downtime, performance issues, and security risks. Our Database Support (DBA) Services provide proactive monitoring, maintenance, and optimization to ensure your SQL Server, Oracle, MySQL, or cloud-native databases remain secure, scalable, and high-performing.',
  alternates: {
    canonical: 'https://zoftcorp.com/database-support-services/',
  },
  openGraph: {
    title: 'Database Support (DBA) Services | ZOFT Corp',
    description:
      'Ensure your databases are always available, secure, and performing at their best with our comprehensive DBA support services.',
    url: 'https://zoftcorp.com/database-support-services/',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Database Support (DBA) Services | ZOFT Corp',
    description:
      'Ensure your databases are always available, secure, and performing at their best with our comprehensive DBA support services.',
  },
};

// Exact original benefits from source
const BENEFITS = [
  {
    number: '01',
    title: '24/7 Monitoring & Support',
    description: 'Round-the-clock coverage to detect and resolve issues quickly.',
    icon: Clock,
    metric: 'CONTINUOUS SLA COVERAGE',
  },
  {
    number: '02',
    title: 'Performance Optimization',
    description: 'Fine-tuning queries, indexes, and configurations for maximum efficiency.',
    icon: Zap,
    metric: 'QUERY & BUFFER EFFICIENCY',
  },
  {
    number: '03',
    title: 'High Availability & Disaster Recovery',
    description: 'Ensure business continuity with robust backup and recovery strategies.',
    icon: RefreshCw,
    metric: 'RPO / RTO RESILIENCE',
  },
  {
    number: '04',
    title: 'Security & Compliance',
    description: 'Enforce best practices for access control, encryption, and regulatory compliance.',
    icon: ShieldCheck,
    metric: 'AUDIT & ACCESS HARDENING',
  },
  {
    number: '05',
    title: 'Cost Efficiency',
    description: 'Reduce infrastructure overhead with optimized resource utilization.',
    icon: Coins,
    metric: 'INFRASTRUCTURE EFFICIENCY',
  },
  {
    number: '06',
    title: 'Expert Guidance',
    description: 'Certified DBAs with deep expertise across platforms and industries.',
    icon: Award,
    metric: 'TIER-3 ARCHITECT EXPERTISE',
  },
];

// The 5 original process stages in order
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Database Health Check',
    description: 'Assess performance, security, and configuration.',
    icon: Search,
    accentColor: '#00B3FF',
    tag: 'DIAGNOSTIC AUDIT',
  },
  {
    step: '02',
    title: 'Proactive Monitoring',
    description: 'Implement alerts and dashboards for real-time visibility.',
    icon: Activity,
    accentColor: '#00D2FF',
    tag: 'TELEMETRY & ALERTS',
  },
  {
    step: '03',
    title: 'Maintenance & Patching',
    description: 'Keep systems updated with the latest fixes and enhancements.',
    icon: Wrench,
    accentColor: '#FF6F00',
    tag: 'SYSTEM HARDENING',
  },
  {
    step: '04',
    title: 'Backup & Recovery Planning',
    description: 'Safeguard data with reliable disaster recovery solutions.',
    icon: Database,
    accentColor: '#00B3FF',
    tag: 'CONTINUITY STRATEGY',
  },
  {
    step: '05',
    title: 'Continuous Improvement',
    description: 'Regular reviews to align database performance with business growth.',
    icon: LineChart,
    accentColor: '#10B981',
    tag: 'WORKLOAD EVOLUTION',
  },
];

// 7 Supported Platforms - authentic vector SVGs
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
        <text
          x="35"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="17"
          fill="#C74634"
        >
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
      <svg
        viewBox="0 0 160 36"
        className="w-auto h-7 max-h-7"
        fill="none"
        aria-label="Microsoft SQL Server"
      >
        <g transform="translate(2, 4)">
          <rect x="0" y="0" width="11" height="11" fill="#F25022" />
          <rect x="14" y="0" width="11" height="11" fill="#7FBA00" />
          <rect x="0" y="14" width="11" height="11" fill="#00A4EF" />
          <rect x="14" y="14" width="11" height="11" fill="#FFB900" />
        </g>
        <text
          x="36"
          y="16"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="10"
          fill="#64748B"
        >
          Microsoft
        </text>
        <text
          x="36"
          y="29"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="13"
          fill="#0F172A"
        >
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
        <text
          x="33"
          y="18"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="10"
          fill="#475569"
        >
          amazon
        </text>
        <text
          x="33"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="14"
          fill="#0F172A"
        >
          RDS
        </text>
      </svg>
    ),
  },
  {
    id: 'azure',
    name: 'Azure',
    badgeText: 'Azure',
    logo: (
      <svg viewBox="0 0 120 36" className="w-auto h-7 max-h-7" fill="none" aria-label="Microsoft Azure">
        <g transform="translate(4, 4)">
          <path d="M13.5 1.5L3 17.5H9.5L16.2 7.2L13.5 1.5Z" fill="#0078D4" />
          <path d="M14.5 3L8.5 23H16L22 12.5L14.5 3Z" fill="#50E6FF" />
          <path d="M0.5 23H13.5L20.5 13L14.5 3L0.5 23Z" fill="#0078D4" />
        </g>
        <text
          x="34"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="#0078D4"
        >
          Azure
        </text>
      </svg>
    ),
  },
  {
    id: 'mariadb-mysql',
    name: 'MariaDB/MySQL',
    badgeText: 'MariaDB / MySQL',
    logo: (
      <svg
        viewBox="0 0 150 36"
        className="w-auto h-7 max-h-7"
        fill="none"
        aria-label="MariaDB / MySQL"
      >
        <text
          x="4"
          y="17"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="13"
          fill="#003545"
        >
          MariaDB
        </text>
        <text
          x="4"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="12"
          fill="#00758F"
        >
          MySQL.
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
        <text
          x="32"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="14"
          fill="#336791"
        >
          PostgreSQL
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
          <path
            d="M11 2V25C11 25 11 25 11 25C10.5 24 6.5 20 6.5 14C6.5 8.5 11 2 11 2Z"
            fill="#00684A"
          />
        </g>
        <text
          x="28"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="15"
          fill="#001E2B"
        >
          mongo<tspan fill="#00ED64">DB</tspan>
        </text>
      </svg>
    ),
  },
];

export default function DatabaseSupportServicesPage() {
  const pageUrl = 'https://zoftcorp.com/database-support-services/';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Our Offerings', url: 'https://zoftcorp.com/offerings' },
    { name: 'Database Support (DBA) Services', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Database Support (DBA) Services"
        description="Databases are the backbone of modern business applications. Without proper management, they can suffer from downtime, performance issues, and security risks. Our Database Support (DBA) Services provide proactive monitoring, maintenance, and optimization to ensure your SQL Server, Oracle, MySQL, or cloud-native databases remain secure, scalable, and high-performing."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          SECTION A: HERO — DATABASE OPERATIONS CONTROL ROOM
          Dark navy environment with panoramic curved console screens & operational HUD
          (No 3D central cylinder databases)
          ========================================================================= */}
      <section
        className="relative bg-[#01153B] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800"
        aria-label="Database Support Services Hero"
      >
        {/* Operations environment ambient glow */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[480px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[380px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        {/* Console grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                DATABASE SUPPORT SERVICES
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Database Support{' '}
                <span className="text-[#00B3FF] block mt-1">(DBA) Services</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Ensure your databases are always available, secure, and performing at their best
                with our comprehensive DBA support services.
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
                  href="#dba-support-process"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  View Operations Blueprint
                </a>
              </div>
            </div>

            {/* Right Distinctive Database Operations Control Room */}
            <div className="lg:col-span-7 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Control Room Top Console Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/70 mb-5 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-slate-200 font-semibold tracking-wider">
                      OPERATIONS CONTROL ROOM // 24/7 ACTIVE
                    </span>
                  </div>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 text-[11px] font-bold">
                    SYSTEM HEALTHY
                  </span>
                </div>

                {/* Multi-Screen Command Center Array */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
                  {/* Screen 1: Telemetry & Parameter Checklist */}
                  <div className="md:col-span-4 bg-[#01153B] border border-cyan-500/30 rounded-xl p-3.5 flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                        Core Telemetry
                      </span>
                      <Radio className="w-3.5 h-3.5 text-[#00B3FF]" />
                    </div>
                    <ul className="space-y-2 text-[11px] font-mono text-slate-300">
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Databases
                        </span>
                        <span className="text-emerald-400 font-bold">Online</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Backups
                        </span>
                        <span className="text-emerald-400 font-bold">Verified</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Security
                        </span>
                        <span className="text-emerald-400 font-bold">Enforced</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          Performance
                        </span>
                        <span className="text-cyan-400 font-bold">Peak</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Replication
                        </span>
                        <span className="text-emerald-400 font-bold">Sync 0s</span>
                      </li>
                    </ul>
                    <div className="pt-2 border-t border-slate-800 text-[9px] font-mono text-slate-400 text-center">
                      ENGINE AGENTS CONNECTED
                    </div>
                  </div>

                  {/* Screen 2: Central Workload Waveform & Operations Radar */}
                  <div className="md:col-span-5 bg-[#01153B] border border-slate-700/80 rounded-xl p-3.5 flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">
                        Workload Pulse
                      </span>
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    </div>

                    {/* Operational Oscilloscope Waveform */}
                    <div className="py-2">
                      <svg
                        viewBox="0 0 200 60"
                        className="w-full h-14"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 35 Q 25 15, 50 35 T 100 35 T 150 25 T 200 35"
                          stroke="#00B3FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 45 Q 25 35, 50 45 T 100 30 T 150 42 T 200 38"
                          stroke="#10B981"
                          strokeWidth="1.5"
                          strokeOpacity="0.7"
                          strokeLinecap="round"
                        />
                        {/* Pulse Marker */}
                        <circle cx="150" cy="25" r="3" fill="#00B3FF" className="animate-ping" />
                        <circle cx="150" cy="25" r="2.5" fill="#FFFFFF" />
                      </svg>
                    </div>

                    {/* Two Indicator Blocks */}
                    <div className="grid grid-cols-2 gap-2 text-center font-mono">
                      <div className="bg-slate-900/70 p-1.5 rounded border border-slate-800">
                        <span className="text-[9px] text-slate-400 block">SECURE ACCESS</span>
                        <span className="text-[11px] font-bold text-cyan-300 block">RBAC Active</span>
                      </div>
                      <div className="bg-slate-900/70 p-1.5 rounded border border-slate-800">
                        <span className="text-[9px] text-slate-400 block">BACKUP STATUS</span>
                        <span className="text-[11px] font-bold text-emerald-400 block">Consistent</span>
                      </div>
                    </div>
                  </div>

                  {/* Screen 3: Recent Activity Log */}
                  <div className="md:col-span-3 bg-[#01153B] border border-slate-700/80 rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">
                        Recent Activity
                      </span>
                      <HardDrive className="w-3.5 h-3.5 text-[#FF6F00]" />
                    </div>
                    <div className="space-y-2 text-[10px] font-mono text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">Query Executed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">Backup Completed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00] shrink-0" />
                        <span className="truncate">Maintenance Checked</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">System Online</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[9px] font-mono text-emerald-400 text-center">
                      AUTOMATION ACTIVE
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
                Managed DBA Services
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* =========================================================================
          SECTION B: WHY PROFESSIONAL DBA SUPPORT MATTERS?
          Light background section with editorial text block & custom monitoring console visual
          (Exact heading & source paragraph preserved)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-dba-matters-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                OPERATIONAL IMPERATIVE
              </span>
              <h2
                id="why-dba-matters-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight leading-tight"
              >
                Why Professional <span className="text-[#00B3FF]">DBA Support</span> Matters?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Databases are the backbone of modern business applications. Without proper
                management, they can suffer from downtime, performance issues, and security risks.
                Our Database Support (DBA) Services provide proactive monitoring, maintenance, and
                optimization to ensure your SQL Server, Oracle, MySQL, or cloud-native databases
                remain secure, scalable, and high-performing.
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00B3FF] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Continuous operational care protects business continuity, prevents unplanned outages,
                    and ensures rapid mitigation before application end-users experience disruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Custom Monitoring-Console Visual with Four Operational Indicators */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                {/* Console Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                      Database Operations Console
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/30 font-semibold">
                    ENTERPRISE SLA
                  </span>
                </div>

                {/* 4 Clearly Labelled Operational Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Indicator 1: Uptime Monitoring */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-2 hover:border-[#00B3FF]/60 transition-colors shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#01153B]">Uptime Monitoring</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        Real-time health detection and immediate bottleneck escalation.
                      </p>
                    </div>
                  </div>

                  {/* Indicator 2: Maintenance */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-2 hover:border-cyan-400/60 transition-colors shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 flex items-center justify-center">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#01153B]">Maintenance</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        Scheduled patching, index rebuilding, and TempDB defragmentation.
                      </p>
                    </div>
                  </div>

                  {/* Indicator 3: Secure Access */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-2 hover:border-emerald-400/60 transition-colors shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                        <Lock className="w-4 h-4" />
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#01153B]">Secure Access</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        Role-based security enforcement, encryption, and audit posture.
                      </p>
                    </div>
                  </div>

                  {/* Indicator 4: Backup & Recovery */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-2 hover:border-[#FF6F00]/60 transition-colors shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center">
                        <RefreshCw className="w-4 h-4" />
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#01153B]">Backup &amp; Recovery</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        Multi-tier snapshot verification and regular failover drills.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Console Footer */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PROACTIVE ESCALATION</span>
                  <span className="text-[#00B3FF] font-semibold">TIER-3 DBA ASSURANCE</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION C: KEY BENEFITS OF OUR DBA SERVICES
          Asymmetrical DBA service benefits composition on dark navy surface:
          - Infrastructure resilience & security schematic on the left
          - Six benefits as structured diagnostic rows on the right
          (No repeated 6-card grid)
          ========================================================================= */}
      <section
        className="py-20 md:py-28 bg-[#01153B] text-white border-y border-slate-800"
        aria-labelledby="benefits-heading"
      >
        <Container>
          <div className="max-w-4xl space-y-3 mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              MANAGED DBA VALUE
            </span>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Key Benefits of Our DBA Services
            </h2>
          </div>

          {/* Asymmetrical Composition Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: High-Availability & Infrastructure Resilience Schematic */}
            <div className="lg:col-span-5 bg-[#031E4D]/90 border border-slate-700/80 rounded-2xl p-7 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#00B3FF] font-bold uppercase tracking-wider block">
                  ARCHITECTURE RESILIENCE
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  Zero-Interruption Database Operations
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  Our managed DBAs safeguard business continuity across hybrid and multi-cloud
                  topologies with automated monitoring and proactive engineering.
                </p>
              </div>

              {/* High Availability Cluster Visual */}
              <div className="bg-[#01153B] border border-cyan-500/30 rounded-xl p-4 space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>HA REPLICATION TOPOLOGY</span>
                  <span className="text-emerald-400 font-bold">SYNCHRONIZED</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  {/* Primary Node */}
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#00B3FF]" />
                      <span className="text-white font-semibold">Primary R/W Instance</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">ACTIVE</span>
                  </div>

                  {/* Synchronous Replication Link */}
                  <div className="flex items-center justify-center gap-2 py-0.5 text-[10px] text-slate-400">
                    <span className="h-2 w-0.5 bg-[#00B3FF]" />
                    <span>Synchronous Replication Bus</span>
                    <span className="h-2 w-0.5 bg-[#00B3FF]" />
                  </div>

                  {/* Secondary Standby Node */}
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-200">Secondary Hot Standby</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">READY</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Automated Failover</span>
                  <span className="text-cyan-300">&lt; 15s RTO</span>
                </div>
              </div>

              {/* Security Shield Tag */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Lock className="w-4 h-4 text-[#FF6F00] shrink-0" />
                <span>Encrypted transit (TLS 1.3) &amp; storage (AES-256) compliance enforced.</span>
              </div>
            </div>

            {/* Right Side: Six Structured Diagnostic Rows */}
            <div className="lg:col-span-7 bg-[#031E4D]/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 divide-y divide-slate-700/60 backdrop-blur-sm">
              {BENEFITS.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.number}
                    className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-[#01153B]/30 px-3 rounded-xl transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Oversized Number & Icon */}
                      <span className="text-2xl font-bold font-mono text-slate-400 group-hover:text-[#00B3FF] transition-colors mt-0.5">
                        {benefit.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#01153B] border border-slate-700 text-[#00B3FF] group-hover:border-[#00B3FF] group-hover:bg-[#00B3FF]/15 flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#00B3FF] transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-normal">
                          “{benefit.description}”
                        </p>
                      </div>
                    </div>

                    {/* Metric Tag */}
                    <div className="shrink-0 sm:text-right pl-14 sm:pl-0">
                      <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#01153B] text-slate-300 border border-slate-700 group-hover:text-[#00B3FF] group-hover:border-[#00B3FF]/40 transition-colors">
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
          SECTION D: OUR DBA SUPPORT PROCESS
          Mandatory Server-Stack and Circuit-Routing Blueprint
          - Left: Multi-tier chassis server stack illustration
          - Right: Five distinct horizontal diagnostic stations
          - Connected by fine circuit-like paths, nodes, and signal accents
          ========================================================================= */}
      <section
        id="dba-support-process"
        className="py-20 md:py-28 bg-white relative overflow-hidden"
        aria-labelledby="dba-process-heading"
      >
        <Container>
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
              OPERATIONAL BLUEPRINT
            </span>
            <h2
              id="dba-process-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight"
            >
              Our DBA Support Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
              A structured, proactive approach to keep your databases secure, optimized, and always available.
            </p>
          </div>

          {/* DESKTOP SERVER-STACK & CIRCUIT-ROUTING COMPOSITION */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto py-4">
            {/* Left: Custom Server-Stack Illustration (Chassis Units + LED telemetry) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-72 bg-[#01153B] border-2 border-slate-700 rounded-2xl p-5 shadow-2xl text-white space-y-4">
                {/* Rack Head unit */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#00B3FF]" />
                    <span className="font-bold text-slate-200">DBA RACK CHASSIS</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* 4 Chassis Blade Units */}
                <div className="space-y-2.5">
                  {/* Blade 1 */}
                  <div className="bg-[#031E4D] border border-cyan-500/40 rounded-lg p-2.5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00B3FF]" />
                      <span className="text-slate-200">Blade 01: Audit Engine</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Blade 2 */}
                  <div className="bg-[#031E4D] border border-slate-700 rounded-lg p-2.5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-slate-200">Blade 02: Telemetry Daemon</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Blade 3 */}
                  <div className="bg-[#031E4D] border border-slate-700 rounded-lg p-2.5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-[#FF6F00]" />
                      <span className="text-slate-200">Blade 03: Patch Manager</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Blade 4 */}
                  <div className="bg-[#031E4D] border border-slate-700 rounded-lg p-2.5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-[#00B3FF]" />
                      <span className="text-slate-200">Blade 04: Snapshot Storage</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Circuit Output Bus Junction */}
                <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>CIRCUIT BUS READY</span>
                  <span className="text-emerald-400 font-bold">5 TRACES LINKED</span>
                </div>
              </div>
            </div>

            {/* Middle: SVG Circuit-Routing Traces */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <svg
                viewBox="0 0 80 440"
                className="w-full h-[440px]"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Circuit Line 1 (to Station 1) */}
                <path
                  d="M 0 60 H 40 V 44 H 80"
                  stroke="#00B3FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="80" cy="44" r="3.5" fill="#00B3FF" />

                {/* Circuit Line 2 (to Station 2) */}
                <path
                  d="M 0 130 H 40 V 132 H 80"
                  stroke="#00D2FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="80" cy="132" r="3.5" fill="#00D2FF" />

                {/* Circuit Line 3 (to Station 3) */}
                <path
                  d="M 0 220 H 80"
                  stroke="#FF6F00"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="80" cy="220" r="3.5" fill="#FF6F00" />

                {/* Circuit Line 4 (to Station 4) */}
                <path
                  d="M 0 310 H 40 V 308 H 80"
                  stroke="#00B3FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="80" cy="308" r="3.5" fill="#00B3FF" />

                {/* Circuit Line 5 (to Station 5) */}
                <path
                  d="M 0 380 H 40 V 396 H 80"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="80" cy="396" r="3.5" fill="#10B981" />
              </svg>
            </div>

            {/* Right: Five Distinct Horizontal Diagnostic Stations */}
            <div className="lg:col-span-7 space-y-4">
              {PROCESS_STAGES.map((stage) => {
                const IconComponent = stage.icon;
                return (
                  <div
                    key={stage.step}
                    className="bg-white border-2 border-slate-200/90 hover:border-[#00B3FF] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Number Badge */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-sm font-bold shrink-0 border"
                        style={{
                          backgroundColor: `${stage.accentColor}15`,
                          color: stage.accentColor,
                          borderColor: `${stage.accentColor}40`,
                        }}
                      >
                        {stage.step}
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#00B3FF] transition-colors shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Station Details */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors">
                            {stage.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* Circuit Signal Tag */}
                    <div className="shrink-0 text-right">
                      <span
                        className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded"
                        style={{
                          backgroundColor: `${stage.accentColor}10`,
                          color: stage.accentColor,
                        }}
                      >
                        {stage.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE RESPONSIVE CIRCUIT SEQUENCE (< 1024px) */}
          <div className="lg:hidden space-y-5 max-w-xl mx-auto relative pl-6 border-l-4 border-dashed border-[#00B3FF]/40 ml-4">
            {PROCESS_STAGES.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div key={stage.step} className="relative pb-5 last:pb-0">
                  {/* Circuit Node Pin */}
                  <div
                    className="absolute -left-[38px] top-1 w-10 h-10 rounded-xl bg-white border-2 flex items-center justify-center shadow-md font-mono text-xs font-bold"
                    style={{ borderColor: stage.accentColor, color: stage.accentColor }}
                  >
                    {stage.step}
                  </div>

                  {/* Station Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1.5 shadow-sm">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-slate-500">
                      <span>STAGE {stage.step}</span>
                      <span style={{ color: stage.accentColor }}>{stage.tag}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-[#00B3FF]" />
                      <h3 className="text-base font-bold text-[#01153B]">{stage.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION E: SUPPORTED PLATFORMS
          Minimal horizontal logo strip on a light surface
          (No central database constellation, no orbiting logos, no hexagonal cards)
          ========================================================================= */}
      <section
        className="py-16 md:py-24 bg-slate-50 border-t border-slate-200"
        aria-labelledby="supported-platforms-heading"
      >
        <Container>
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              ENTERPRISE PLATFORM COVERAGE
            </span>
            <h2
              id="supported-platforms-heading"
              className="text-3xl sm:text-4xl font-bold text-[#01153B] tracking-tight"
            >
              Supported Platforms
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
              Enterprise database administration across on-premises, cloud-native, and hybrid environments.
            </p>
          </div>

          {/* Minimal Horizontal Logo Strip */}
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
                <span>Automated Backup &amp; Recovery Validation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                <span>24/7 Real-Time Metric Telemetry &amp; Alerting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                <span>Zero-Downtime Patching &amp; High Availability</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION F: CLOSING CALL TO ACTION
          Dark navy banner with circuit trace styling & exact original CTA wording
          ========================================================================= */}
      <section
        className="py-16 md:py-24 bg-[#01153B] text-white text-center border-t border-slate-800 relative overflow-hidden"
        aria-label="Keep Your Databases Running at Peak Performance CTA"
      >
        {/* Subtle circuit line glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#00B3FF15,transparent_70%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Keep your databases running at peak performance.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Contact us today for{' '}
              <strong className="text-[#00B3FF] font-semibold">
                comprehensive DBA support services
              </strong>{' '}
              and ensure your systems are secure, reliable, and future-ready.
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
