import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Layers, Cpu, Database, Zap, LineChart, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  OFFERINGS_DATA,
  HOW_WE_DELIVER_STAGES,
  TECHNICAL_DEPTH_PILLARS,
} from '@/data/offerings';

export const metadata: Metadata = {
  title: 'Our Offerings | ZOFT Corp',
  description:
    "Explore ZOFT's technology offerings across vector databases, database migrations, performance tuning, managed DBA services, and data engineering.",
  alternates: {
    canonical: 'https://zoftcorp.com/offerings',
  },
  openGraph: {
    title: 'Our Offerings | ZOFT Corp',
    description:
      "Explore ZOFT's technology offerings across vector databases, database migrations, performance tuning, managed DBA services, and data engineering.",
    url: 'https://zoftcorp.com/offerings',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Offerings | ZOFT Corp',
    description:
      "Explore ZOFT's technology offerings across vector databases, database migrations, performance tuning, managed DBA services, and data engineering.",
  },
};

const OFFERING_ICONS: Record<string, React.ReactNode> = {
  'vector-db-integration': <Cpu className="w-5 h-5 text-[#00B3FF]" />,
  'database-migrations-and-transformations': <Layers className="w-5 h-5 text-[#00B3FF]" />,
  'performance-tuning-delivery': <Zap className="w-5 h-5 text-[#00B3FF]" />,
  'managed-dba-services': <Database className="w-5 h-5 text-[#00B3FF]" />,
  'data-engineering-and-analytics': <LineChart className="w-5 h-5 text-[#00B3FF]" />,
};

export default function OfferingsOverviewPage() {
  return (
    <div className="w-full bg-[#01153B] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-24 lg:py-28 overflow-hidden border-b border-white/10">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/3 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#031E4D]/80 blur-[130px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3.5 py-1.5 rounded-full border border-[#00B3FF]/30 uppercase tracking-widest">
                  OUR OFFERINGS
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  {"//"} PRACTICAL ENGINEERING DELIVERY
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                Technology Built to Perform in the Real World.
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl font-normal">
                ZOFT combines deep database expertise, cloud engineering, performance optimization,
                managed services, and modern data capabilities to help organizations build and
                operate reliable technology environments.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  Talk to an Expert
                </Link>
                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
                >
                  <span>Explore Consulting</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Delivery Metrics / Scope */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                    01 // CORE PRACTICE
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5">
                    5 Delivery Modules
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                    02 // EXECUTION
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5">
                    Zero-Downtime Migration
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#FF6F00] block uppercase tracking-wider">
                    03 // OPERATIONS
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5">
                    24/7 Managed DBA
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Summary Card */}
            <div className="lg:col-span-4 w-full">
              <div className="bg-[#031E4D]/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    ENGINEERING EXECUTION
                  </span>
                  <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
                    SLA BACKED
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#01153B] p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>Vector &amp; Modern Retrieval</span>
                      <span className="text-[#00B3FF] font-mono text-[10px]">KNN / HNSW</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Seamless integration with existing relational databases.</p>
                  </div>

                  <div className="bg-[#01153B] p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>Zero-Downtime Migrations</span>
                      <span className="text-[#00B3FF] font-mono text-[10px]">CDC SYNC</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Continuous replication, validation, and audited cutover.</p>
                  </div>

                  <div className="bg-[#01153B] p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>24/7 Managed Operations</span>
                      <span className="text-emerald-400 font-mono text-[10px]">TIER-3 DBAS</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Proactive health audits, automated DR, and incident SLAs.</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Implementation Readiness</span>
                  <span className="text-[#00B3FF] font-bold">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFERINGS NAVIGATOR (WHAT WE DELIVER) */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#01153B] font-sans leading-[1.15]">
              Engineering Capabilities for Modern Technology Environments.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 font-sans leading-relaxed">
              From database modernization to ongoing operations, our offerings are designed around
              the technical realities organizations face when building, transforming, and operating
              critical systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFERINGS_DATA.map((offering) => (
              <div
                key={offering.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card-elevated hover:border-[#00B3FF] hover:-translate-y-1 transition-all duration-200 ease-out-smooth flex flex-col justify-between motion-reduce:hover:translate-y-0"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#00B3FF]/10 flex items-center justify-center border border-[#00B3FF]/20 group-hover:bg-[#00B3FF]/20 transition-colors">
                        {OFFERING_ICONS[offering.id]}
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#01153B] bg-[#00B3FF]/10 px-3 py-1 rounded-full border border-[#00B3FF]/30 tracking-wider uppercase">
                        {offering.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      {offering.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#01153B] tracking-tight font-sans group-hover:text-[#00B3FF] transition-colors">
                    {offering.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {offering.description}
                  </p>

                  {/* Highlights from deliverables */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1.5 font-semibold">
                      CORE OUTPUTS
                    </span>
                    <div className="space-y-1">
                      {offering.deliverables.slice(0, 2).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF] shrink-0" />
                          <span className="line-clamp-1">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries area sub-indicator badge for Data Engineering */}
                  {offering.industriesHref && (
                    <div className="pt-2">
                      <Link
                        href={offering.industriesHref}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF6F00] bg-[#FF6F00]/10 hover:bg-[#FF6F00]/20 px-2.5 py-1 rounded border border-[#FF6F00]/30 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Includes Industries Domain Expertise</span>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={offering.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] group-hover:text-[#00B3FF] transition-colors font-sans"
                  >
                    <span>{offering.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out-smooth group-hover:translate-x-1 motion-reduce:transform-none" />
                  </Link>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    0{offering.deliverables.length} ASSETS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL VISUAL BREAK */}
      <section className="relative bg-[#031E4D] text-white py-20 md:py-28 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#00B3FF] uppercase tracking-widest bg-[#00B3FF]/10 px-3 py-1 rounded-full border border-[#00B3FF]/30">
              {"//"} DELIVERY PRINCIPLE
            </span>
          </div>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.25] font-sans">
            “Technology Has to Work Beyond the Architecture Diagram.”
          </blockquote>

          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] to-[#FF6F00] mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Successful technology environments depend on more than architecture decisions.
            Implementation quality, workload behavior, operational discipline, performance, and
            the ability to evolve all influence how systems perform over time.
          </p>
        </div>
      </section>

      {/* 4. HOW ZOFT DELIVERS (METHODOLOGY PIPELINE) */}
      <section className="relative bg-slate-50/70 text-[#01153B] py-24 md:py-32 border-b border-slate-200/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              HOW WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#01153B] mb-5 font-sans leading-[1.15]">
              Practical Engineering.
              <br />
              <span className="text-slate-600 font-normal">Clear Technical Direction.</span>
            </h2>
          </div>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#00B3FF] via-[#00B3FF]/40 to-[#FF6F00] z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {HOW_WE_DELIVER_STAGES.map((stage, idx) => (
                <div
                  key={stage.number}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF] hover:-translate-y-1 hover:shadow-card-elevated transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3 py-1.5 rounded-full border border-[#00B3FF]/30 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                        STAGE {stage.number}
                      </span>
                      {idx < HOW_WE_DELIVER_STAGES.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block group-hover:text-[#00B3FF] group-hover:translate-x-1 transition-all" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#01153B] tracking-tight font-sans mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-medium">
                      {stage.title.toUpperCase()} PHASE
                    </span>
                    <span className="text-[10px] font-mono text-[#00B3FF] font-semibold">
                      0{idx + 1}/04
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL DEPTH */}
      <section className="relative bg-[#01153B] text-white py-20 md:py-28 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              TECHNICAL DEPTH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              Deep Expertise Across the Technology Stack.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECHNICAL_DEPTH_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#031E4D] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 backdrop-blur-sm hover:border-[#00B3FF] hover:-translate-y-1 transition-all duration-200"
              >
                <span className="font-mono text-xs font-bold text-[#00B3FF] tracking-widest uppercase block">
                  {pillar.title}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATIONSHIP WITH CONSULTING */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              FROM STRATEGY TO DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              From Technology Decisions to Practical Implementation.
            </h2>
            <p className="text-base text-slate-600 mt-3 font-sans leading-relaxed">
              Consulting helps organizations understand what should change and why. Our offerings
              provide the engineering capabilities needed to implement, optimize, transform, and
              operate those environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consulting Panel */}
            <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-5 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest block">
                  ADVISORY &amp; ARCHITECTURE
                </span>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans">CONSULTING</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Architecture, strategy, governance, performance assessment, and technical
                  guidance.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors group"
                >
                  <span>Explore Consulting</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Our Offerings Panel (Highlighted Active Side) */}
            <div className="bg-[#01153B] text-white rounded-2xl p-8 border border-[#00B3FF]/40 shadow-xl space-y-5 flex flex-col justify-between relative overflow-hidden">
              <div
                className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#00B3FF]/10 blur-[100px] rounded-full"
                aria-hidden="true"
              />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-widest block">
                    ENGINEERING &amp; DELIVERY
                  </span>
                  <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/15 px-2.5 py-0.5 rounded border border-[#00B3FF]/30 uppercase tracking-wider">
                    ACTIVE MODULE
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">OUR OFFERINGS</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Engineering, transformation, optimization, managed services, and data
                  capabilities.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">PRACTICAL IMPLEMENTATION</span>
                <span className="text-xs font-mono text-[#00B3FF] font-bold">5 CORE OFFERINGS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section
        aria-label="Talk to an Expert"
        className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] bg-[#01153B]/80 blur-[130px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            TALK TO AN EXPERT
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Have a Technology Challenge to Solve?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Whether you are modernizing databases, improving performance, transforming
            infrastructure, building data capabilities, or looking for ongoing operational support,
            let&apos;s discuss the technical challenge.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
            >
              <span>Explore Consulting</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
