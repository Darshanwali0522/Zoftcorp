import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Database,
  Cloud,
  Coins,
  FileCheck,
  GitBranch,
  Gauge,
  Users,
  Award,
  Settings2,
  Server,
  Code2,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Database Migration Services – Homogeneous & Heterogeneous | ZOFT Corp',
  description:
    "Database migration is more than just moving data—it's about ensuring business continuity, performance, and scalability. Whether upgrading to a newer version of the same platform or transitioning to a completely different database engine, our Database Migration Services deliver secure, efficient, and future-ready solutions.",
  alternates: {
    canonical: 'https://zoftcorp.com/offerings/database-migrations-and-transformations',
  },
  openGraph: {
    title: 'Database Migration Services – Homogeneous & Heterogeneous | ZOFT Corp',
    description:
      'Seamless, secure, and efficient database migrations to the same platform or across different platforms.',
    url: 'https://zoftcorp.com/offerings/database-migrations-and-transformations',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Database Migration Services – Homogeneous & Heterogeneous | ZOFT Corp',
    description:
      'Seamless, secure, and efficient database migrations to the same platform or across different platforms.',
  },
};

const BENEFITS = [
  {
    number: '01',
    title: 'Seamless Transition',
    description: 'Minimize downtime with carefully planned execution.',
    icon: Database,
    color: 'blue',
  },
  {
    number: '02',
    title: 'Data Integrity',
    description: 'Ensure accuracy and consistency during transfer.',
    icon: ShieldCheck,
    color: 'orange',
  },
  {
    number: '03',
    title: 'Cloud Readiness',
    description: 'Enable smooth migration to Azure, AWS, or Google Cloud.',
    icon: Cloud,
    color: 'blue',
  },
  {
    number: '04',
    title: 'Performance Optimization',
    description: 'Tune databases during migration for speed and efficiency.',
    icon: Zap,
    color: 'orange',
  },
  {
    number: '05',
    title: 'Cost Efficiency',
    description: 'Reduce infrastructure and licensing overhead.',
    icon: Coins,
    color: 'blue',
  },
  {
    number: '06',
    title: 'Future-Proofing',
    description: 'Build scalable, flexible environments ready for growth.',
    icon: TrendingUp,
    color: 'orange',
  },
];

const MIGRATION_STAGES = [
  {
    stage: '01',
    title: 'Assessment & Planning',
    description: 'Analyze workloads, risks, and business goals.',
    icon: FileCheck,
    badgeColor: 'bg-blue-500/20 text-[#00B3FF] border-[#00B3FF]/40',
    dotColor: '#00B3FF',
  },
  {
    stage: '02',
    title: 'Strategy Development',
    description: 'Define scope, timelines, and choose the right approach (homogeneous or heterogeneous).',
    icon: GitBranch,
    badgeColor: 'bg-cyan-500/20 text-[#00E5FF] border-[#00E5FF]/40',
    dotColor: '#00E5FF',
  },
  {
    stage: '03',
    title: 'Data Transfer & Validation',
    description: 'Secure migration with integrity checks.',
    icon: Database,
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/40',
    dotColor: '#10B981',
  },
  {
    stage: '04',
    title: 'Optimization & Tuning',
    description: 'Fine-tune performance and run stress tests.',
    icon: Gauge,
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-400/40',
    dotColor: '#F59E0B',
  },
  {
    stage: '05',
    title: 'Go-Live & Support',
    description: 'Deploy with minimal disruption and ongoing support.',
    icon: Users,
    badgeColor: 'bg-orange-500/20 text-[#FF6F00] border-[#FF6F00]/40',
    dotColor: '#FF6F00',
  },
];

const PLATFORMS = [
  {
    id: 'oracle',
    name: 'Oracle',
    badgeText: 'ORACLE',
    subtitle: 'Enterprise Relational DB',
    accentColor: '#C74634',
    logo: (
      <svg viewBox="0 0 130 40" className="w-full h-8" fill="none" aria-hidden="true">
        <path
          d="M19.5 5H9.6C4.3 5 0 9.3 0 14.6V22C0 27.3 4.3 31.6 9.6 31.6H19.5C24.8 31.6 29.1 27.3 29.1 22V14.6C29.1 9.3 24.8 5 19.5 5ZM22.8 22C22.8 23.8 21.3 25.3 19.5 25.3H9.6C7.8 25.3 6.3 23.8 6.3 22V14.6C6.3 12.8 7.8 11.3 9.6 11.3H19.5C21.3 11.3 22.8 12.8 22.8 14.6V22Z"
          fill="#C74634"
        />
        <text x="35" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" fill="#C74634">
          ORACLE
        </text>
      </svg>
    ),
  },
  {
    id: 'sql-server',
    name: 'Microsoft SQL Server',
    badgeText: 'SQL Server',
    subtitle: 'Mission-Critical RDBMS',
    accentColor: '#CC292B',
    logo: (
      <svg viewBox="0 0 160 40" className="w-full h-8" fill="none" aria-hidden="true">
        <g transform="translate(4, 5)">
          <rect x="0" y="0" width="12" height="12" fill="#F25022" />
          <rect x="15" y="0" width="12" height="12" fill="#7FBA00" />
          <rect x="0" y="15" width="12" height="12" fill="#00A4EF" />
          <rect x="15" y="15" width="12" height="12" fill="#FFB900" />
        </g>
        <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="11" fill="#64748B">
          Microsoft
        </text>
        <text x="38" y="31" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="14" fill="#0F172A">
          SQL Server
        </text>
      </svg>
    ),
  },
  {
    id: 'amazon-rds',
    name: 'Amazon RDS',
    badgeText: 'Amazon RDS',
    subtitle: 'Managed Cloud Databases',
    accentColor: '#232F3E',
    logo: (
      <svg viewBox="0 0 140 40" className="w-full h-8" fill="none" aria-hidden="true">
        <path
          d="M16 8L4 15V27L16 34L28 27V15L16 8Z"
          fill="#3B48CC"
          stroke="#527FFF"
          strokeWidth="1.5"
        />
        <path d="M16 8V21M4 15L16 21L28 15" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
        <text x="34" y="20" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="11" fill="#475569">
          amazon
        </text>
        <text x="34" y="33" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" fill="#0F172A">
          RDS
        </text>
      </svg>
    ),
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    badgeText: 'Azure',
    subtitle: 'Cloud Database Ecosystem',
    accentColor: '#0078D4',
    logo: (
      <svg viewBox="0 0 130 40" className="w-full h-8" fill="none" aria-hidden="true">
        <g transform="translate(6, 6)">
          <path d="M14.5 1.5L3 18.5H10.2L17.5 7.7L14.5 1.5Z" fill="#0078D4" />
          <path d="M15.6 3L9 25H17.3L23.7 13.4L15.6 3Z" fill="#50E6FF" />
          <path d="M0.5 25H14.5L22.2 13.9L15.6 3L0.5 25Z" fill="#0078D4" />
        </g>
        <text x="38" y="25" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" fill="#0078D4">
          Azure
        </text>
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    badgeText: 'PostgreSQL',
    subtitle: 'Advanced Open Source RDBMS',
    accentColor: '#336791',
    logo: (
      <svg viewBox="0 0 150 40" className="w-full h-8" fill="none" aria-hidden="true">
        <g transform="translate(4, 4)">
          <path
            d="M15 2C8 2 3 7 3 14C3 21 8 26 15 26C17 26 21 24 23 20C24 18 25 14 24 10C23 6 19 2 15 2Z"
            fill="#336791"
            opacity="0.15"
          />
          <path
            d="M14 4C8.5 4 4 8.5 4 14C4 18.5 7.5 22.5 12 23.5V18C10.5 18 9.5 17 9.5 15.5C9.5 14 10.5 13 12 13H15V11C15 9.5 16 8.5 17.5 8.5C19 8.5 20 9.5 20 11V16C20 18.5 18 20.5 15.5 20.5H14V24C19.5 24 24 19.5 24 14C24 8.5 19.5 4 14 4Z"
            fill="#336791"
          />
        </g>
        <text x="36" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="#336791">
          PostgreSQL
        </text>
      </svg>
    ),
  },
  {
    id: 'mariadb-mysql',
    name: 'MariaDB / MySQL',
    badgeText: 'MariaDB / MySQL',
    subtitle: 'High-Concurrency Open Source',
    accentColor: '#00758F',
    logo: (
      <svg viewBox="0 0 160 40" className="w-full h-8" fill="none" aria-hidden="true">
        <text x="6" y="20" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" fill="#003545">
          MariaDB
        </text>
        <text x="6" y="33" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#00758F">
          MySQL.
        </text>
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    badgeText: 'MongoDB',
    subtitle: 'Modern Document Database',
    accentColor: '#00ED64',
    logo: (
      <svg viewBox="0 0 140 40" className="w-full h-8" fill="none" aria-hidden="true">
        <g transform="translate(6, 4)">
          <path
            d="M12 1C12 1 6 8 6 15C6 21 10 26 12 28C14 26 18 21 18 15C18 8 12 1 12 1Z"
            fill="#00ED64"
          />
          <path d="M12 2V27C12 27 12 27 12 27C11.5 26 7 21 7 15C7 9 12 2 12 2Z" fill="#00684A" />
        </g>
        <text x="32" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="16" fill="#001E2B">
          mongo<tspan fill="#00ED64">DB</tspan>
        </text>
      </svg>
    ),
  },
];

export default function DatabaseMigrationsPage() {
  const pageUrl = 'https://zoftcorp.com/offerings/database-migrations-and-transformations';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Our Offerings', url: 'https://zoftcorp.com/offerings' },
    { name: 'Database Migrations and Transformations', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Database Migration Services – Homogeneous & Heterogeneous"
        description="Whether upgrading to a newer version of the same platform or transitioning to a completely different database engine, our Database Migration Services deliver secure, efficient, and future-ready solutions."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* SECTION A — HERO */}
      <section
        className="relative bg-[#01153B] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800"
        aria-label="Database Migration Hero"
      >
        {/* Luminous background gradients */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[400px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        {/* Luminous grid background overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                DATABASE MIGRATION SERVICES
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Database Migration Services –{' '}
                <span className="text-[#00B3FF] block mt-1">Homogeneous & Heterogeneous</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Seamless, secure, and efficient database migrations to the same platform or across
                different platforms.
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
                  href="#migration-process"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Explore Migration Flow
                </a>
              </div>
            </div>

            {/* Right Technical Visual: Source-to-Target Database Migration Composition */}
            <div className="lg:col-span-6 w-full">
              <div className="relative bg-[#031E4D]/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      ENGINE-TO-ENGINE ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/30">
                    ZERO DATA LOSS
                  </span>
                </div>

                {/* Database Source-to-Target Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center py-4">
                  {/* Source Database */}
                  <div className="md:col-span-4 bg-[#01153B] border border-amber-500/30 rounded-xl p-4 text-center space-y-3 relative group hover:border-amber-400/60 transition-colors">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      SOURCE DATABASE
                    </span>
                    {/* Source DB Luminous Disk Stack */}
                    <div className="mx-auto w-16 h-18 relative flex flex-col items-center justify-center py-1">
                      <div className="w-14 h-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 border border-amber-300 shadow-md shadow-amber-500/20" />
                      <div className="w-14 h-5 -mt-2 rounded-b-xl bg-amber-600/60 border-x border-b border-amber-400/50" />
                      <div className="w-14 h-5 -mt-2 rounded-b-xl bg-amber-700/60 border-x border-b border-amber-400/50" />
                      <div className="w-14 h-5 -mt-2 rounded-b-xl bg-amber-800/80 border-x border-b border-amber-400/60 shadow-lg" />
                    </div>
                    <div className="text-xs font-mono text-slate-300">
                      Legacy / On-Prem
                    </div>
                  </div>

                  {/* Flow Arrow and Indicators */}
                  <div className="md:col-span-3 flex flex-col items-center justify-center gap-2 py-2">
                    <div className="w-full flex items-center justify-center gap-1">
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-400 to-[#00B3FF]" />
                      <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-[#00B3FF] rotate-45" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/15 px-2 py-0.5 rounded border border-[#00B3FF]/30 text-center">
                      ETL &amp; CDC Flow
                    </span>
                    <div className="w-full flex items-center justify-center gap-1">
                      <div className="w-2.5 h-2.5 border-b-2 border-l-2 border-amber-400 rotate-45" />
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-400 to-[#00B3FF]" />
                    </div>
                  </div>

                  {/* Target Database */}
                  <div className="md:col-span-4 bg-[#01153B] border border-[#00B3FF]/40 rounded-xl p-4 text-center space-y-3 relative group hover:border-[#00B3FF] transition-colors">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00B3FF] font-bold block">
                      TARGET DATABASE
                    </span>
                    {/* Target DB Luminous Disk Stack */}
                    <div className="mx-auto w-16 h-18 relative flex flex-col items-center justify-center py-1">
                      <div className="w-14 h-4 rounded-full bg-gradient-to-r from-[#00B3FF] to-cyan-300 border border-cyan-200 shadow-md shadow-[#00B3FF]/30" />
                      <div className="w-14 h-5 -mt-2 rounded-b-xl bg-[#0078D4]/60 border-x border-b border-[#00B3FF]/50" />
                      <div className="w-14 h-5 -mt-2 rounded-b-xl bg-[#031E4D]/80 border-x border-b border-[#00B3FF]/50" />
                      <div className="w-14 h-5 -mt-2 rounded-b-xl bg-[#01153B] border-x border-b border-[#00B3FF]/60 shadow-lg" />
                    </div>
                    <div className="text-xs font-mono text-cyan-300">
                      Cloud-Native / Modern
                    </div>
                  </div>
                </div>

                {/* Four Technical Milestone Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-slate-700/60 mt-4 text-center">
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <Code2 className="w-4 h-4 text-[#00B3FF] mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-medium text-slate-300 block">
                      Schema Conversion
                    </span>
                  </div>
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <Server className="w-4 h-4 text-[#00B3FF] mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-medium text-slate-300 block">
                      Data Transfer
                    </span>
                  </div>
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-medium text-slate-300 block">
                      Validation
                    </span>
                  </div>
                  <div className="bg-[#01153B] border border-slate-700/70 p-2 rounded-lg">
                    <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-medium text-slate-300 block">
                      Optimization
                    </span>
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
                Database Migrations and Transformations
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* SECTION B — WHY DATABASE MIGRATION MATTERS? */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-db-migration-heading">
        <Container>
          <div className="max-w-4xl space-y-5 mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              WHY IT MATTERS
            </span>
            <h2
              id="why-db-migration-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight"
            >
              Why <span className="text-[#00B3FF]">Database Migration</span> Matters?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Database migration is more than just moving data—it&apos;s about ensuring business
              continuity, performance, and scalability. Whether upgrading to a newer version of the
              same platform or transitioning to a completely different database engine, our Database
              Migration Services deliver secure, efficient, and future-ready solutions.
            </p>
          </div>

          {/* Connected Comparison Composition for Homogeneous vs Heterogeneous */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 1. Homogeneous Database Migrations Panel */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative hover:border-[#00B3FF]/50 transition-all duration-200 group">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 px-3 py-1 rounded-md">
                    SAME-PLATFORM UPGRADE
                  </span>
                  <span className="text-xs font-mono text-slate-500">TYPE 01</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#01153B]">
                    Homogeneous Database Migrations
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    A homogeneous migration involves moving data between databases of the same type
                    or vendor.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#00B3FF] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">
                        Same Engine, Different Version
                      </strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Example: SQL Server 2016 → SQL Server 2022, Oracle 11g → Oracle 19c.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#00B3FF] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">
                        Simplified Process
                      </strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Minimal schema changes and fewer compatibility issues.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#00B3FF] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">
                        Native Tools
                      </strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Leverage vendor utilities like Oracle Data Pump or SQL Server Migration
                        Assistant.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#00B3FF] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">Best For</strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Upgrades, consolidations, or moving workloads to newer versions for better
                        performance and support.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 text-xs font-mono text-[#00B3FF] font-semibold flex items-center justify-between">
                <span>COMPATIBILITY ASSURANCE</span>
                <span>MINIMAL CODE ADJUSTMENTS</span>
              </div>
            </div>

            {/* 2. Heterogeneous Database Migrations Panel */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative hover:border-[#FF6F00]/50 transition-all duration-200 group">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00] bg-[#FF6F00]/10 px-3 py-1 rounded-md">
                    CROSS-ENGINE TRANSFORMATION
                  </span>
                  <span className="text-xs font-mono text-slate-500">TYPE 02</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#01153B]">
                    Heterogeneous Database Migrations
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    A heterogeneous migration involves moving data between different database
                    platforms.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#FF6F00] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">
                        Cross-Platform Transition
                      </strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Example: Oracle → SQL Server, MySQL → PostgreSQL.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#FF6F00] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">
                        Complex Schema Conversion
                      </strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Requires mapping data types, redesigning schemas, and adjusting
                        applications.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#FF6F00] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">
                        Specialized Tools &amp; ETL
                      </strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Use AWS Schema Conversion Tool, Azure Database Migration Service, or custom
                        pipelines.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#FF6F00] mt-2 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#01153B] block">Best For</strong>
                      <span className="text-xs text-slate-600 block mt-0.5">
                        Organizations modernizing infrastructure, reducing licensing costs, or
                        adopting cloud-native databases.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 text-xs font-mono text-[#FF6F00] font-semibold flex items-center justify-between">
                <span>LICENSE COST REDUCTION</span>
                <span>CLOUD-NATIVE AGILITY</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION C — BENEFITS OF OUR MIGRATION SERVICES */}
      <section
        className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/90"
        aria-labelledby="benefits-heading"
      >
        <Container>
          <div className="max-w-4xl space-y-4 mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              KEY BENEFITS
            </span>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight"
            >
              Benefits of Our Migration Services
            </h2>
          </div>

          {/* 6 Structured Benefit Elements matching creative direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => {
              const IconComp = b.icon;
              const isBlue = b.color === 'blue';
              return (
                <div
                  key={b.number}
                  className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-[#00B3FF]/50 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-2xl font-bold font-mono ${
                          isBlue ? 'text-[#00B3FF]' : 'text-[#FF6F00]'
                        }`}
                      >
                        {b.number}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isBlue
                            ? 'bg-[#00B3FF]/10 text-[#00B3FF]'
                            : 'bg-[#FF6F00]/10 text-[#FF6F00]'
                        } group-hover:scale-110 transition-transform`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#01153B]">{b.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {b.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span>ENGINEERING DISCIPLINE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION D — OUR MIGRATION PROCESS */}
      <section
        id="migration-process"
        className="py-20 md:py-28 bg-[#01153B] text-white relative overflow-hidden"
        aria-labelledby="migration-process-heading"
      >
        {/* Subtle grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF0a_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF0a_1px,transparent_1px)] bg-[size:48px_48px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
              OUR APPROACH
            </span>
            <h2
              id="migration-process-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Our Migration Process
            </h2>
          </div>

          {/* Connected 5-Stage Process Visual (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="hidden lg:block relative py-8">
            {/* Luminous Connector Track */}
            <div className="absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#00B3FF] via-emerald-400 to-[#FF6F00] opacity-60 z-0" />

            <div className="grid grid-cols-5 gap-6 relative z-10">
              {MIGRATION_STAGES.map((stage) => {
                const IconComp = stage.icon;
                return (
                  <div key={stage.stage} className="text-center space-y-4 group">
                    {/* Node Badge */}
                    <div className="relative mx-auto w-24 h-24 rounded-full bg-[#031E4D] border-2 border-slate-700 flex flex-col items-center justify-center shadow-xl group-hover:scale-105 group-hover:border-[#00B3FF] transition-all duration-200">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                        style={{ backgroundColor: `${stage.dotColor}20`, color: stage.dotColor }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-300">
                        {stage.stage}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2 px-2">
                      <h3 className="text-base font-bold text-white leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Responsive Vertical Connected Timeline for Mobile / Tablet */}
          <div className="lg:hidden space-y-6 relative pl-6 sm:pl-8 border-l-2 border-[#00B3FF]/40 ml-4 sm:ml-6">
            {MIGRATION_STAGES.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div key={stage.stage} className="relative space-y-2 pb-6 last:pb-0 text-left">
                  {/* Timeline Node Point */}
                  <div
                    className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-[#031E4D] border-2 flex items-center justify-center"
                    style={{ borderColor: stage.dotColor }}
                  >
                    <IconComp className="w-4 h-4" style={{ color: stage.dotColor }} />
                  </div>

                  <div className="bg-[#031E4D]/80 border border-slate-700/80 rounded-xl p-5 space-y-1.5 backdrop-blur-sm">
                    <span className="text-xs font-mono font-bold text-slate-400 block">
                      STAGE {stage.stage}
                    </span>
                    <h3 className="text-lg font-bold text-white">{stage.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION E — WHY CHOOSE US? */}
      <section className="py-20 md:py-28 bg-white text-slate-900" aria-labelledby="why-choose-heading">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              WHY CHOOSE US?
            </span>
            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight"
            >
              Why Choose Us?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* 3 Core Statements in Editorial Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 text-center space-y-4 hover:border-[#00B3FF]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#01153B] leading-snug">
                  Certified Cloud Architects
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Certified Cloud Architects with deep expertise in database migration services.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 text-center space-y-4 hover:border-[#00B3FF]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#01153B] leading-snug">
                  100+ Successful Projects
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  100+ successful migration projects delivered.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 text-center space-y-4 hover:border-[#00B3FF]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center mx-auto">
                  <Settings2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#01153B] leading-snug">
                  Tailored Solutions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored solutions for SMEs and enterprises.
                </p>
              </div>
            </div>

            {/* Fourth Sub-Clause Statement from Reference */}
            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200/70 rounded-xl p-5 text-center">
              <p className="text-sm font-semibold text-slate-700">
                Transparent SOWs, pricing sheets, and change management clauses for client trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION F — SUPPORTED PLATFORMS */}
      <section
        className="py-20 md:py-28 bg-[#01102E] text-white relative overflow-hidden"
        aria-labelledby="supported-platforms-heading"
      >
        {/* Subtle grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:40px_40px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              SUPPORTED PLATFORMS
            </span>
            <h2
              id="supported-platforms-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Supported Platforms
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Heterogeneous and homogeneous data portability across cloud hyperscalers, open-source
              engines, and mission-critical enterprise systems.
            </p>
          </div>

          {/* Distinctive Seven Platform Ecosystem Visualization */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className="bg-white rounded-2xl p-5 flex flex-col items-center justify-between shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-200 border border-slate-200 min-h-[140px] group"
                >
                  <div className="w-full flex-1 flex items-center justify-center py-2">
                    {platform.logo}
                  </div>
                  <div className="w-full pt-2 border-t border-slate-100 text-center">
                    <span className="text-[11px] font-mono font-bold text-slate-700 block">
                      {platform.badgeText}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Ecosystem Data Flow Indicator */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full CDC Replicability</span>
              <span>•</span>
              <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
              <span>Cross-Engine Schema Transformation</span>
              <span>•</span>
              <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
              <span>Automated Rollback Safeguards</span>
            </div>
          </div>
        </Container>
      </section>

      {/* CLOSING CONVERSION CTA BANNER */}
      <section
        className="py-16 md:py-24 bg-black text-white text-center border-t border-slate-800"
        aria-label="Migration Assistance CTA"
      >
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-snug">
              Whether you need a <span className="text-white font-bold">straightforward upgrade</span>{' '}
              or a <span className="text-[#00B3FF] font-bold">complex cross-platform migration</span>,
              we deliver secure, efficient, and future-ready solutions.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Contact us today for{' '}
              <strong className="text-[#00B3FF] font-semibold">expert database migration</strong>{' '}
              services tailored to your business needs.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-base text-[#01153B] bg-[#00B3FF] hover:bg-cyan-300 font-semibold rounded-xl shadow-lg shadow-[#00B3FF]/25 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base text-[#00B3FF] border border-[#00B3FF]/60 hover:bg-[#00B3FF]/15 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
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
