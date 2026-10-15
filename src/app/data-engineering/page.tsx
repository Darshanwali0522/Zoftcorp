import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Database,
  Layers,
  Zap,
  BarChart3,
  Search,
  FileCode2,
  Settings2,
  TrendingUp,
  LineChart,
  Cloud,
  ShieldCheck,
  Coins,
  Cpu,
  Workflow,
  CheckCircle2,
  XCircle,
  FolderGit2,
  Radio,
  FileText,
  PieChart,
  Bot,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Data Engineering Services | ZOFT Corp',
  description:
    'In today’s digital economy, data is the most valuable asset—but raw data alone doesn’t drive decisions. Our Data Engineering Services transform fragmented, complex datasets into structured, actionable insights. By designing modern data pipelines, warehouses, and platforms, we help organizations unlock the full potential of their data for analytics, AI, and business growth.',
  alternates: {
    canonical: 'https://zoftcorp.com/data-engineering/',
  },
  openGraph: {
    title: 'Data Engineering Services | ZOFT Corp',
    description:
      'Turn your data into a competitive advantage. Our Data Engineering Services build scalable, future-ready data pipelines and analytics solutions.',
    url: 'https://zoftcorp.com/data-engineering/',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Engineering Services | ZOFT Corp',
    description:
      'Turn your data into a competitive advantage. Our Data Engineering Services build scalable, future-ready data pipelines and analytics solutions.',
  },
};


// The 5 original process stages in order with architectural layer tags
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'Analyze current data landscape, sources, and business goals.',
    icon: Search,
    color: '#00B3FF',
    tierTag: 'METADATA INVENTORY',
  },
  {
    step: '02',
    title: 'Architecture Design',
    description: 'Create scalable blueprints for pipelines, warehouses, and platforms.',
    icon: FileCode2,
    color: '#FF6F00',
    tierTag: 'TARGET TOPOLOGY',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Deploy ETL/ELT workflows, APIs, and integrations.',
    icon: Settings2,
    color: '#00B3FF',
    tierTag: 'PIPELINE CORE',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Tune performance, storage, and compute efficiency.',
    icon: TrendingUp,
    color: '#FF6F00',
    tierTag: 'COMPUTE SCALING',
  },
  {
    step: '05',
    title: 'Monitoring & Governance',
    description: 'Establish dashboards, alerts, and compliance frameworks.',
    icon: LineChart,
    color: '#10B981',
    tierTag: 'LINEAGE & SLA GATES',
  },
];

// Raw ingress sources for Layered Architecture Blueprint
const RAW_DATA_SOURCES = [
  { name: 'Enterprise RDBMS', desc: 'SQL Server, Oracle, Postgres, MySQL', icon: Database },
  { name: 'Logs & Event Files', desc: 'JSON, Parquet, Syslog, CSV', icon: FileText },
  { name: 'Microservice APIs', desc: 'REST, GraphQL, Webhooks', icon: FolderGit2 },
  { name: 'Streaming Telemetry', desc: 'Kafka, IoT, Event Hubs', icon: Radio },
  { name: 'Cloud Object Stores', desc: 'Amazon S3, Azure Blob, GCS', icon: Cloud },
];

// Resulting managed ecosystem outcomes for Layered Architecture Blueprint
const MANAGED_ECOSYSTEM_OUTCOMES = [
  { name: 'Analytics Warehouses', desc: 'Single source of enterprise truth', icon: Database },
  { name: 'Real-Time BI Dashboards', desc: 'Sub-second interactive reporting', icon: BarChart3 },
  { name: 'AI & ML Feature Fabric', desc: 'Curated feature store datasets', icon: Bot },
  { name: 'Proactive Alert Engine', desc: 'Instant anomaly & SLA tracking', icon: Zap },
  { name: 'Governed Data Catalog', desc: 'Audited lineage & compliance', icon: ShieldCheck },
];

// Traditional ETL vs Modern Data Engineering comparison data (exact from source)
const ETL_COMPARISON = [
  {
    aspect: 'Architecture',
    traditional: 'Batch-oriented, rigid pipelines',
    modern: 'Flexible, cloud-native, real-time pipelines',
  },
  {
    aspect: 'Data Sources',
    traditional: 'Limited (structured databases, files)',
    modern: 'Diverse (structured, semi-structured, unstructured, streaming)',
  },
  {
    aspect: 'Scalability',
    traditional: 'Difficult to scale beyond fixed hardware',
    modern: 'Elastic scaling with cloud platforms (Azure, AWS, GCP)',
  },
  {
    aspect: 'Processing',
    traditional: 'Sequential, overnight batch jobs',
    modern: 'Real-time streaming + micro-batch processing',
  },
  {
    aspect: 'Tools & Technologies',
    traditional: 'Legacy ETL tools (Informatica, SSIS)',
    modern: 'Modern frameworks (Apache Spark, Kafka, Dataflow, Synapse, BigQuery)',
  },
  {
    aspect: 'Business Value',
    traditional: 'Delayed insights, reactive decision-making',
    modern: 'Instant insights, proactive decision-making',
  },
  {
    aspect: 'Cost Efficiency',
    traditional: 'High infrastructure costs, limited reuse',
    modern: 'Optimized cloud costs, reusable pipelines',
  },
  {
    aspect: 'Governance',
    traditional: 'Basic data validation',
    modern: 'Advanced governance, lineage, and compliance frameworks',
  },
];

// Categorized Supported Technologies
const TECH_CATEGORIES = [
  {
    title: 'Data Sources',
    technologies: [
      { name: 'Microsoft SQL Server', brand: 'SQL Server' },
      { name: 'Oracle', brand: 'ORACLE' },
      { name: 'MySQL', brand: 'MySQL' },
      { name: 'PostgreSQL', brand: 'PostgreSQL' },
    ],
  },
  {
    title: 'Cloud Platforms',
    technologies: [
      { name: 'Microsoft Azure', brand: 'Azure' },
      { name: 'Amazon Web Services', brand: 'AWS' },
      { name: 'Google Cloud Platform', brand: 'Google Cloud' },
    ],
  },
  {
    title: 'Processing Frameworks',
    technologies: [
      { name: 'Apache Spark', brand: 'Spark' },
      { name: 'Apache Kafka', brand: 'Kafka' },
      { name: 'Databricks', brand: 'databricks' },
    ],
  },
  {
    title: 'Analytics & BI',
    technologies: [
      { name: 'Power BI', brand: 'Power BI' },
      { name: 'Tableau', brand: 'Tableau' },
      { name: 'Looker', brand: 'Looker' },
    ],
  },
  {
    title: 'Data Platforms & Tools',
    technologies: [
      { name: 'Azure Data Factory', brand: 'Azure Data Factory' },
      { name: 'AWS Glue', brand: 'AWS Glue' },
      { name: 'Amazon Redshift', brand: 'Redshift' },
      { name: 'Google BigQuery', brand: 'BigQuery' },
    ],
  },
];

export default function DataEngineeringPage() {
  const pageUrl = 'https://zoftcorp.com/data-engineering/';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Our Offerings', url: 'https://zoftcorp.com/offerings' },
    { name: 'Data Engineering', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <ServiceJsonLd
        name="Data Engineering Services"
        description="In today’s digital economy, data is the most valuable asset—but raw data alone doesn’t drive decisions. Our Data Engineering Services transform fragmented, complex datasets into structured, actionable insights. By designing modern data pipelines, warehouses, and platforms, we help organizations unlock the full potential of their data for analytics, AI, and business growth."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* =========================================================================
          SECTION A: HERO — DATA ENGINEERING & ANALYTICS
          Editorial split with wide four-stage data-flow visualization
          (Sources -> Ingestion/Processing -> Storage/Transformation -> Analytics/Insights)
          ========================================================================= */}
      <section
        className="relative bg-[#01153B] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800"
        aria-label="Data Engineering Services Hero"
      >
        {/* Deep ambient glow */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[400px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        {/* Data mesh grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                DATA ENGINEERING &amp; ANALYTICS
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Data Engineering{' '}
                <span className="text-[#00B3FF] block mt-1">and Analytics Services</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Turn your data into a competitive advantage. Our Data Engineering Services build
                scalable, future-ready data pipelines and analytics solutions.
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
                  href="#data-engineering-process"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Explore Pipeline Flow
                </a>
              </div>
            </div>

            {/* Right Distinctive 4-Stage Data-Flow Pipeline Architecture Visual */}
            <div className="lg:col-span-7 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/70 mb-5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-semibold tracking-wider">
                      DATA PIPELINE FABRIC // ACTIVE
                    </span>
                  </div>
                  <span className="text-[#00B3FF] bg-[#00B3FF]/15 px-2.5 py-0.5 rounded border border-[#00B3FF]/30 text-[11px] font-bold">
                    STREAMING &amp; BATCH
                  </span>
                </div>

                {/* 4 Distinct Data Journey Stages */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative py-2">
                  {/* Stage 1: Data Sources */}
                  <div className="bg-[#01153B] border border-cyan-500/30 rounded-xl p-3.5 space-y-2 text-center group hover:border-cyan-400/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 mx-auto flex items-center justify-center">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block">
                      Data Sources
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      Structured &amp; Unstructured
                    </span>
                    <div className="pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-400 space-y-1">
                      <div>RDBMS / NoSQL</div>
                      <div>Logs &amp; APIs</div>
                    </div>
                  </div>

                  {/* Stage 2: Ingestion & Processing */}
                  <div className="bg-[#01153B] border border-[#00B3FF]/40 rounded-xl p-3.5 space-y-2 text-center group hover:border-[#00B3FF] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/15 text-[#00B3FF] mx-auto flex items-center justify-center">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-wider block">
                      Ingestion &amp; Proc
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      Real-time Streaming
                    </span>
                    <div className="pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-400 space-y-1">
                      <div>Kafka / Spark</div>
                      <div>Scalable Pipelines</div>
                    </div>
                  </div>

                  {/* Stage 3: Storage & Transformation */}
                  <div className="bg-[#01153B] border border-amber-500/30 rounded-xl p-3.5 space-y-2 text-center group hover:border-amber-400/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      Storage &amp; Trans
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      Lakehouse Fabric
                    </span>
                    <div className="pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-400 space-y-1">
                      <div>Synapse / BigQuery</div>
                      <div>Delta Lake / Glue</div>
                    </div>
                  </div>

                  {/* Stage 4: Analytics & Insights */}
                  <div className="bg-[#01153B] border border-emerald-500/30 rounded-xl p-3.5 space-y-2 text-center group hover:border-emerald-400/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                      Analytics &amp; BI
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      Actionable Insights
                    </span>
                    <div className="pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-400 space-y-1">
                      <div>Power BI / Looker</div>
                      <div>AI &amp; ML Models</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Architectural Pipeline Stream Bar */}
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Batch &amp; Real-time Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Data Governance &amp; Quality</span>
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
                Data Engineering
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* =========================================================================
          SECTION B: WHY DATA ENGINEERING MATTERS?
          Light background editorial section with distinctive
          Raw Data -> Modern Transformation -> Actionable Insights composition
          (Exact heading and source copy preserved)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-data-eng-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                VALUE CREATION JOURNEY
              </span>
              <h2
                id="why-data-eng-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight leading-tight"
              >
                Why <span className="text-[#00B3FF]">Data Engineering</span> Matters?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                In today’s digital economy, data is the most valuable asset—but raw data alone
                doesn’t drive decisions. Our Data Engineering Services transform fragmented, complex
                datasets into structured, actionable insights. By designing modern data pipelines,
                warehouses, and platforms, we help organizations unlock the full potential of their
                data for analytics, AI, and business growth.
              </p>
            </div>

            {/* Right Distinctive: Raw Data -> Transformation -> Actionable Insights Composition */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                  {/* Input Block: Raw Data (From Anywhere) */}
                  <div className="md:col-span-4 bg-white border border-slate-200/90 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold uppercase text-[#01153B]">
                        Raw Data
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">FROM ANYWHERE</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 font-sans">
                      <li className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" />
                        <span>Databases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" />
                        <span>Files &amp; Logs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FolderGit2 className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" />
                        <span>APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Cloud className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" />
                        <span>Cloud Platforms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Radio className="w-3.5 h-3.5 text-[#FF6F00] shrink-0" />
                        <span>Streaming Data</span>
                      </li>
                    </ul>
                  </div>

                  {/* Center Pipeline Engine */}
                  <div className="md:col-span-3 bg-[#01153B] text-white rounded-xl p-4 space-y-2 text-center shadow-lg border-2 border-[#00B3FF]/40">
                    <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      Pipeline Engine
                    </span>
                    <div className="space-y-1.5 py-1 text-xs font-mono">
                      <div className="p-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        Ingest
                      </div>
                      <div className="p-1 rounded bg-[#00B3FF]/20 text-[#00B3FF] font-bold border border-[#00B3FF]/40">
                        Transform
                      </div>
                      <div className="p-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        Process
                      </div>
                      <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40">
                        Store
                      </div>
                    </div>
                  </div>

                  {/* Output Block: Actionable Insights */}
                  <div className="md:col-span-4 bg-white border border-slate-200/90 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold uppercase text-[#01153B]">
                        Actionable Insights
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">GROWTH</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 font-sans">
                      <li className="flex items-center gap-2">
                        <PieChart className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Dashboards</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Reports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Bot className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" />
                        <span>AI &amp; ML</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Business Intelligence</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Data-Driven Decisions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION C: KEY BENEFITS OF OUR DATA ENGINEERING SERVICES
          Concept: Data Engineering Outcome Matrix (Asymmetrical Editorial Matrix)
          - Featured prominent area: 01 Scalable Data Pipelines with layered data-stack graphic
          - Staggered balanced composition for remaining benefits 02 through 06
          - Oversized typography, strong number treatments, subtle dividers, technical micro-illustrations
          - Light architectural editorial surface (bg-[#F8FAFC]) contrasting with dark Hero & Process
          ========================================================================= */}
      <section
        className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-200/90 relative overflow-hidden"
        aria-labelledby="benefits-heading"
      >
        {/* Subtle architectural background coordinate grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#01153B06_1px,transparent_1px),linear-gradient(to_bottom,#01153B06_1px,transparent_1px)] bg-[size:32px_32px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Editorial Section Header */}
          <div className="max-w-4xl space-y-3 mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#01153B] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              ENGINEERING OUTCOME MATRIX // VALUE ARCHITECTURE
            </span>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01153B] tracking-tight leading-tight"
            >
              Key Benefits of Our Data Engineering Services
            </h2>
            <p className="text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              Transforming fragmented data into resilient, governed, and high-velocity architectural outcomes designed for enterprise scale.
            </p>
          </div>

          {/* Asymmetrical Editorial Matrix (Desktop: 12-col grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* FEATURED OUTCOME 01: Scalable Data Pipelines (7 Columns) */}
            <div className="lg:col-span-7 bg-[#01153B] text-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Ambient gradient glow in top right */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 bg-[#00B3FF]/20 blur-3xl rounded-full"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 bg-[#FF6F00]/15 blur-3xl rounded-full"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                {/* Meta header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00B3FF] animate-pulse" />
                    <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-300 font-bold">
                      FLAGSHIP ARCHITECTURAL CAPABILITY
                    </span>
                  </div>
                  <span className="text-4xl sm:text-5xl font-mono font-black text-[#00B3FF]/40 leading-none">
                    01
                  </span>
                </div>

                {/* Title & Exact Description */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/20 text-[#00B3FF] border border-[#00B3FF]/40 flex items-center justify-center shrink-0">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Scalable Data Pipelines
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1">
                    “Automate ingestion, transformation, and integration across diverse sources.”
                  </p>
                </div>

                {/* CUSTOM LAYERED DATA-STACK GRAPHIC */}
                <div className="bg-[#031E4D]/90 border border-slate-700 rounded-xl p-5 space-y-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-700/70 pb-2">
                    <span className="uppercase text-slate-300 font-bold">PIPELINE FABRIC // LAYERED EXECUTION STACK</span>
                    <span className="text-[#00B3FF]">THROUGHPUT: REAL-TIME + BATCH</span>
                  </div>

                  {/* Tier 1: Ingestion & Ingress Layer */}
                  <div className="p-3.5 rounded-lg bg-[#01153B] border border-cyan-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        TIER 1: MULTI-SOURCE INTAKE &amp; PARSING
                      </span>
                      <span className="text-[10px] text-slate-400">SCHEMA INFERENCE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-300 text-center">
                      <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700">RDBMS &amp; NoSQL</div>
                      <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700">REST APIs &amp; Files</div>
                      <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700">Kafka Streams</div>
                    </div>
                  </div>

                  {/* Flow Indicator */}
                  <div className="flex justify-center -my-1 text-[#00B3FF]">
                    <span className="text-xs font-mono tracking-widest text-[#00B3FF]/80">▼ DISTRIBUTED TRANSFORMATION ENGINE ▼</span>
                  </div>

                  {/* Tier 2: Transformation & Processing Core */}
                  <div className="p-3.5 rounded-lg bg-[#01153B] border border-[#00B3FF]/40 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#00B3FF] font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                        TIER 2: DISTRIBUTED DATA TRANSFORMATION
                      </span>
                      <span className="text-[10px] text-amber-300">ACID + DELTA LAKE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-300 text-center">
                      <div className="p-1.5 bg-cyan-950/60 text-cyan-300 rounded border border-cyan-800/50">Micro-batch ETL</div>
                      <div className="p-1.5 bg-cyan-950/60 text-cyan-300 rounded border border-cyan-800/50">Streaming DAGs</div>
                      <div className="p-1.5 bg-cyan-950/60 text-cyan-300 rounded border border-cyan-800/50">Data Cleansing</div>
                    </div>
                  </div>

                  {/* Flow Indicator */}
                  <div className="flex justify-center -my-1 text-[#FF6F00]">
                    <span className="text-xs font-mono tracking-widest text-[#FF6F00]/80">▼ TARGET DESTINATION INTEGRATION ▼</span>
                  </div>

                  {/* Tier 3: Target Platform Integration */}
                  <div className="p-3.5 rounded-lg bg-[#01153B] border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        TIER 3: UNIFIED ANALYTICAL DELIVERY
                      </span>
                      <span className="text-[10px] text-emerald-300">ZERO BOTTLENECKS</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-300 text-center">
                      <div className="p-1.5 bg-emerald-950/60 text-emerald-300 rounded border border-emerald-800/50">Modern Lakehouse</div>
                      <div className="p-1.5 bg-emerald-950/60 text-emerald-300 rounded border border-emerald-800/50">Synapse / BigQuery</div>
                      <div className="p-1.5 bg-emerald-950/60 text-emerald-300 rounded border border-emerald-800/50">Analytics Stores</div>
                    </div>
                  </div>
                </div>

                {/* Architecture Metrics Badges */}
                <div className="pt-2 grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400 border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>ELASTIC AUTO-SCALE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>FAULT-TOLERANT RETRY</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>100% ACID CONSISTENCY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* REMAINING 5 BENEFITS: Staggered Balanced Editorial Composition (5 Columns) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Benefit 02: Real-Time Insights */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 relative group overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/30 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#FF6F00] uppercase tracking-wider block">
                        STREAMING ARCHITECTURE
                      </span>
                      <h3 className="text-lg font-bold text-[#01153B] leading-tight">
                        Real-Time Insights
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-mono font-black text-slate-300 leading-none">
                    02
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mt-3 pl-1">
                  “Enable streaming architectures for instant decision-making.”
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>KAFKA · SPARK STREAMING</span>
                  <span className="text-[#FF6F00] font-semibold">SUB-SECOND LATENCY</span>
                </div>
              </div>

              {/* Benefit 03: Cloud-Native Solutions */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 relative group overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 flex items-center justify-center shrink-0">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider block">
                        MULTI-CLOUD ECOSYSTEM
                      </span>
                      <h3 className="text-lg font-bold text-[#01153B] leading-tight">
                        Cloud-Native Solutions
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-mono font-black text-slate-300 leading-none">
                    03
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mt-3 pl-1">
                  “Optimize data platforms on Azure, AWS, and Google Cloud.”
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>AZURE · AWS · GCP</span>
                  <span className="text-[#00B3FF] font-semibold">SERVERLESS SCALING</span>
                </div>
              </div>

              {/* Benefit 04: Data Quality & Governance */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 relative group overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                        DATA INTEGRITY &amp; TRUST
                      </span>
                      <h3 className="text-lg font-bold text-[#01153B] leading-tight">
                        Data Quality &amp; Governance
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-mono font-black text-slate-300 leading-none">
                    04
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mt-3 pl-1">
                  “Ensure accuracy, consistency, and compliance across all datasets.”
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>LINEAGE · CATALOG · AUDIT</span>
                  <span className="text-emerald-600 font-semibold">ENTERPRISE COMPLIANCE</span>
                </div>
              </div>

              {/* Staggered 2-Column Split for Benefits 05 & 06 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Benefit 05: Cost Efficiency */}
                <div className="bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 relative group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center shrink-0">
                      <Coins className="w-4 h-4" />
                    </div>
                    <span className="text-xl font-mono font-black text-slate-300 leading-none">
                      05
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#01153B] leading-tight mt-2.5">
                    Cost Efficiency
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1.5">
                    “Reduce storage and compute costs with optimized architectures.”
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-[#FF6F00] font-semibold">
                    COMPUTE TIERING
                  </div>
                </div>

                {/* Benefit 06: Future-Ready Platforms */}
                <div className="bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 relative group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-xl font-mono font-black text-slate-300 leading-none">
                      06
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#01153B] leading-tight mt-2.5">
                    Future-Ready Platforms
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1.5">
                    “Build flexible solutions that adapt to evolving business needs.”
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 text-[10px] font-mono text-[#00B3FF] font-semibold">
                    AI/ML ADAPTABLE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION D: OUR DATA ENGINEERING PROCESS
          Concept: Layered Data Architecture Blueprint
          - Left: Incoming Raw Data Sources (Ingress Fabric)
          - Center: Vertical Stack of 5 Architectural Layers (Process Stages 01 to 05)
          - Right: Resulting Managed Data Ecosystem (Egress Fabric)
          - Fine directional lines, branching data paths, and stage flow indicators
          - NOT a winding road, NOT switchback, NOT connected circles timeline
          ========================================================================= */}
      <section
        id="data-engineering-process"
        className="py-20 md:py-28 bg-[#01153B] text-white relative overflow-hidden border-b border-slate-800"
        aria-labelledby="process-heading"
      >
        {/* Deep ambient glow and blueprint grid */}
        <div
          className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-[#00B3FF]/10 blur-[130px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF6F00]/10 blur-[130px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
              SYSTEM ARCHITECTURE // LIFECYCLE BLUEPRINT
            </span>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Our Data Engineering Process
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              A layered architectural journey channeling heterogeneous raw sources through five disciplined engineering tiers into a resilient enterprise data ecosystem.
            </p>
          </div>

          {/* DESKTOP LAYERED DATA ARCHITECTURE BLUEPRINT (Hidden < 1024px) */}
          <div className="hidden lg:grid grid-cols-12 gap-5 items-stretch relative">
            {/* COLUMN 1 (Left 3 cols): RAW DATA INGRESS NODES */}
            <div className="col-span-3 flex flex-col justify-between space-y-3.5 bg-[#031E4D]/80 border border-slate-700/80 rounded-2xl p-5 shadow-xl backdrop-blur-sm">
              <div className="border-b border-slate-700 pb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-300 block">
                  INGRESS STAGE // SOURCES
                </span>
                <span className="text-xs text-slate-300 font-semibold">Raw Data Inflow</span>
              </div>

              <div className="space-y-3">
                {RAW_DATA_SOURCES.map((source) => {
                  const IconComp = source.icon;
                  return (
                    <div
                      key={source.name}
                      className="p-3 rounded-xl bg-[#01153B] border border-cyan-500/20 flex items-center justify-between text-left group hover:border-cyan-400/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">{source.name}</div>
                          <div className="text-[10px] font-mono text-slate-400 leading-none mt-1">{source.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/60 font-bold shrink-0">→</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[10px] font-mono text-slate-400 text-center uppercase">
                CONTINUOUS INGESTION
              </div>
            </div>

            {/* COLUMN 2 (Center 6 cols): VERTICAL STACK OF 5 ARCHITECTURAL LAYERS */}
            <div className="col-span-6 space-y-3 flex flex-col justify-between">
              {PROCESS_STAGES.map((stage, idx) => {
                const IconComp = stage.icon;
                return (
                  <div
                    key={stage.step}
                    className="relative bg-[#031E4D]/95 border border-slate-700/90 rounded-2xl p-4.5 shadow-xl hover:border-[#00B3FF]/60 transition-all duration-200 group"
                  >
                    {/* Directional Flow connector between layers */}
                    {idx < PROCESS_STAGES.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-3 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-0.5 h-full bg-[#00B3FF]/60" />
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-4">
                      {/* Left: Stage Icon & Number */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md border"
                          style={{
                            backgroundColor: `${stage.color}15`,
                            color: stage.color,
                            borderColor: `${stage.color}40`,
                          }}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                              ARCHITECTURAL LAYER {stage.step}
                            </span>
                            <span
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase font-bold"
                              style={{
                                color: stage.color,
                                borderColor: `${stage.color}40`,
                                backgroundColor: `${stage.color}10`,
                              }}
                            >
                              {stage.tierTag}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00B3FF] transition-colors mt-0.5">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      <span className="text-2xl font-mono font-black text-slate-600/70 shrink-0">
                        {stage.step}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mt-2 pl-14">
                      {stage.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* COLUMN 3 (Right 3 cols): MANAGED DATA ECOSYSTEM OUTPUT */}
            <div className="col-span-3 flex flex-col justify-between space-y-3.5 bg-[#031E4D]/80 border border-slate-700/80 rounded-2xl p-5 shadow-xl backdrop-blur-sm">
              <div className="border-b border-slate-700 pb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-300 block">
                  EGRESS STAGE // OUTCOMES
                </span>
                <span className="text-xs text-slate-300 font-semibold">Managed Ecosystem</span>
              </div>

              <div className="space-y-3">
                {MANAGED_ECOSYSTEM_OUTCOMES.map((dest) => {
                  const IconComp = dest.icon;
                  return (
                    <div
                      key={dest.name}
                      className="p-3 rounded-xl bg-[#01153B] border border-emerald-500/20 flex items-center justify-between text-left group hover:border-emerald-400/50 transition-colors"
                    >
                      <span className="text-[10px] font-mono text-emerald-400/60 font-bold shrink-0">←</span>
                      <div className="flex items-center gap-2.5 text-right justify-end w-full pl-2">
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">{dest.name}</div>
                          <div className="text-[10px] font-mono text-slate-400 leading-none mt-1">{dest.desc}</div>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[10px] font-mono text-emerald-400 text-center uppercase font-bold">
                ENTERPRISE READY
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET RESPONSIVE STACKED ARCHITECTURE (< 1024px) */}
          <div className="lg:hidden space-y-6 max-w-xl mx-auto">
            {/* Mobile Intake Ribbon */}
            <div className="bg-[#031E4D] border border-cyan-500/30 rounded-xl p-4 text-center space-y-2">
              <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest block">
                INGRESS: HETEROGENEOUS DATA SOURCES
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">RDBMS</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">APIs</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Streaming</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Files</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">Cloud Storage</span>
              </div>
            </div>

            {/* Mobile 5 Stacked Architectural Layers */}
            <div className="space-y-4 relative pl-4 border-l-2 border-dashed border-[#00B3FF]/40 ml-2">
              {PROCESS_STAGES.map((stage) => {
                const IconComp = stage.icon;
                return (
                  <div key={stage.step} className="relative pb-2">
                    <div
                      className="absolute -left-[27px] top-3 w-7 h-7 rounded-lg bg-[#01153B] border-2 flex items-center justify-center shadow-md font-mono text-xs font-bold"
                      style={{ borderColor: stage.color, color: stage.color }}
                    >
                      {stage.step}
                    </div>
                    <div className="bg-[#031E4D] border border-slate-700 rounded-xl p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          LAYER {stage.step}
                        </span>
                        <span
                          className="text-[9px] font-mono px-2 py-0.5 rounded border uppercase"
                          style={{
                            color: stage.color,
                            borderColor: `${stage.color}40`,
                            backgroundColor: `${stage.color}10`,
                          }}
                        >
                          {stage.tierTag}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconComp className="w-4 h-4 text-[#00B3FF]" />
                        <h3 className="text-base font-bold text-white">{stage.title}</h3>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Egress Deliverables Bar */}
            <div className="bg-[#031E4D] border border-emerald-500/30 rounded-xl p-4 text-center space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest block">
                EGRESS: MANAGED DATA ECOSYSTEM
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono text-emerald-300">
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">Modern Warehouses</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">Real-Time BI</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">AI &amp; ML Fabric</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">Governed Catalog</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION E: TRADITIONAL ETL VS. MODERN DATA ENGINEERING
          Complete comparison table preserved verbatim with refined two-column layout
          ========================================================================= */}
      <section
        className="py-20 md:py-28 bg-slate-50 border-t border-slate-200"
        aria-labelledby="comparison-heading"
      >
        <Container>
          <div className="text-center space-y-3 mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              PARADIGM EVOLUTION
            </span>
            <h2
              id="comparison-heading"
              className="text-3xl sm:text-4xl font-bold text-[#01153B] tracking-tight"
            >
              Traditional ETL vs. Modern Data Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
              Compare how modern cloud data engineering architectures overcome the rigid bottlenecks of legacy ETL systems.
            </p>
          </div>

          {/* Comparison Table Container */}
          <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#01153B] text-white">
                    <th className="py-4 px-6 font-mono font-bold text-xs uppercase tracking-wider border-r border-slate-800 w-1/4">
                      Aspect
                    </th>
                    <th className="py-4 px-6 font-mono font-bold text-xs uppercase tracking-wider border-r border-slate-800 w-3/8 text-slate-300">
                      Traditional ETL (Extract, Transform, Load)
                    </th>
                    <th className="py-4 px-6 font-mono font-bold text-xs uppercase tracking-wider w-3/8 text-[#00B3FF]">
                      Modern Data Engineering
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {ETL_COMPARISON.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={index % 2 === 1 ? 'bg-slate-50/60 hover:bg-slate-50' : 'bg-white hover:bg-slate-50'}
                    >
                      <td className="py-4 px-6 font-bold text-[#01153B] border-r border-slate-100">
                        {row.aspect}
                      </td>
                      <td className="py-4 px-6 text-slate-600 border-r border-slate-100 flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-900 font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{row.modern}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION F: SUPPORTED TECHNOLOGIES
          Categorized technology landscape (Data Sources, Cloud Platforms, Processing, Analytics, Platforms/Tools)
          (Completely distinct from earlier platform constellation/circle layouts)
          ========================================================================= */}
      <section
        className="py-20 md:py-28 bg-[#01102E] text-white relative overflow-hidden"
        aria-labelledby="supported-technologies-heading"
      >
        <Container>
          <div className="text-center space-y-3 mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              ENGINEERING ECOSYSTEM
            </span>
            <h2
              id="supported-technologies-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Supported Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Enterprise platforms, stream-processing frameworks, and lakehouse engines powering modern data pipelines.
            </p>
          </div>

          {/* 5 Distinct Category Landscape Zones */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {TECH_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-lg border border-slate-200 text-slate-900 space-y-4"
              >
                {/* Category Header */}
                <div className="border-b border-slate-100 pb-2.5 text-center">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#01153B]">
                    {cat.title}
                  </span>
                </div>

                {/* Technology List in Category */}
                <div className="space-y-3 py-1">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 hover:bg-[#00B3FF]/5 hover:border-[#00B3FF]/30 hover:text-[#00B3FF] transition-colors"
                    >
                      <span className="truncate">{tech.name}</span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold shrink-0">
                        {tech.brand}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Category Footer Indicator */}
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400 text-center uppercase">
                  ENTERPRISE CERTIFIED
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION G: CLOSING CALL TO ACTION
          Dark navy banner with subtle data network mesh & exact original CTA wording
          ========================================================================= */}
      <section
        className="py-16 md:py-24 bg-[#01153B] text-white text-center border-t border-slate-800 relative overflow-hidden"
        aria-label="Turn Your Data into a Competitive Advantage CTA"
      >
        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#00B3FF15,transparent_70%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Turn your data into a competitive advantage.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Contact us today for{' '}
              <strong className="text-[#00B3FF] font-semibold">
                expert data engineering services
              </strong>{' '}
              and build scalable, future-ready data platforms.
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
