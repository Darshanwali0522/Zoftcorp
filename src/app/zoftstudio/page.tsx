import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Cpu,
  Layers,
  MessageSquare,
  Sparkles,
  Terminal,
} from 'lucide-react';
import {
  STUDIO_PRINCIPLES,
  MINDSET_PRINCIPLES,
  EXPLORATION_AREAS,
  PROGRESSION_STAGES,
} from '@/data/zoftstudio';

export const metadata: Metadata = {
  title: 'ZoftStudio | ZOFT Corp',
  description:
    "Explore technology ideas, emerging possibilities, and practical technical directions with ZOFT's ZoftStudio.",
  alternates: {
    canonical: 'https://zoftcorp.com/zoftstudio',
  },
  openGraph: {
    title: 'ZoftStudio | ZOFT Corp',
    description:
      "Explore technology ideas, emerging possibilities, and practical technical directions with ZOFT's ZoftStudio.",
    url: 'https://zoftcorp.com/zoftstudio',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZoftStudio | ZOFT Corp',
    description:
      "Explore technology ideas, emerging possibilities, and practical technical directions with ZOFT's ZoftStudio.",
  },
};

export default function ZoftStudioPage() {
  return (
    <div className="w-full bg-[#01153B] text-white selection:bg-[#00B3FF]/30 selection:text-white">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800/80">
        {/* Background Grid & Architectural Lines */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6F00]" />
                <span>ZOFTSTUDIO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
                Technology Ideas,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                  Explored With Purpose.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                ZoftStudio provides a space to explore emerging technology ideas, validate practical
                possibilities, and shape technical concepts into meaningful directions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#why-zoftstudio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Explore the Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Talk to ZOFT</span>
                </Link>
              </div>
            </div>

            {/* Right Abstract Architectural System Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/3.5] w-full rounded-2xl border border-slate-800 bg-[#031E4D] p-6 shadow-2xl overflow-hidden group">
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
                  aria-hidden="true"
                />

                {/* Composed Technical Visual: Nodes, Linework & Architecture */}
                <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                      <Terminal className="w-4 h-4" />
                      <span>ZOFTSTUDIO // CONCEPT MODEL</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-700">
                      v2.4 — ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-2">
                    <div className="p-3.5 rounded-xl bg-[#01153B] border border-slate-800 hover:border-[#00B3FF]/40 transition-colors space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#00B3FF]">01 / DISCOVERY</span>
                        <div className="w-2 h-2 rounded-full bg-[#00B3FF] animate-pulse" />
                      </div>
                      <p className="text-xs font-bold text-white">Pattern Exploration</p>
                      <p className="text-[11px] text-slate-400">Deconstructing technical intent</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#01153B] border border-slate-800 hover:border-[#FF6F00]/40 transition-colors space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#FF6F00]">02 / VALIDATION</span>
                        <div className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                      </div>
                      <p className="text-xs font-bold text-white">Feasibility Modeling</p>
                      <p className="text-[11px] text-slate-400">Testing workload limits</p>
                    </div>
                  </div>

                  {/* Node Connector Diagram */}
                  <div className="p-4 rounded-xl bg-[#01153B]/60 border border-slate-800/90 flex items-center justify-between font-mono text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#00B3FF]" />
                      <span>Emerging Concept</span>
                    </div>
                    <span className="text-slate-500">⟶</span>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#FF6F00]" />
                      <span>Architectural Path</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>SYSTEM ID: ZST-EXPLORE</span>
                    <span className="text-[#00B3FF]">STRUCTURED EXPLORATION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STUDIO POSITIONING */}
      <section
        id="why-zoftstudio"
        className="relative bg-white text-[#01153B] py-20 md:py-32 border-b border-slate-200/80 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              WHY ZOFTSTUDIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#01153B] font-sans leading-[1.15]">
              Where Technology Moves From Idea to Practical Direction.
            </h2>
            <p className="text-lg text-slate-700 mt-5 font-sans leading-relaxed">
              Technology evolves quickly. ZoftStudio creates space to examine new ideas carefully,
              understand where they can create value, and determine what it takes to make them
              practical.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Editorial Large Typography Panel */}
            <div className="lg:col-span-5 bg-slate-50/60 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#01153B] uppercase tracking-widest block">
                  STUDIO MANIFESTO
                </span>
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-[#01153B] font-sans leading-tight">
                  “Structured exploration turns ambiguous technical concepts into practical execution
                  paths.”
                </blockquote>
              </div>
              <div className="pt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  ZOFTSTUDIO CORE PRINCIPLES
                </span>
              </div>
            </div>

            {/* Right Three Principles Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STUDIO_PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#01153B] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 inline-block mb-3">
                      {principle.number} — {principle.title.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-[#01153B] tracking-tight font-sans">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-2">
                      {principle.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    STAGE {principle.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE STUDIO MINDSET */}
      <section className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 mb-4">
              <Compass className="w-3.5 h-3.5" />
              THE STUDIO MINDSET
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              Think Beyond the Technology.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 font-sans leading-relaxed">
              The value of new technology is not in adopting it first. It is in understanding where it
              fits, what it changes, and whether it solves a meaningful problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MINDSET_PRINCIPLES.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#01153B] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-sm group hover:border-[#00B3FF]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#00B3FF] transition-colors">
                      {item.title.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00B3FF] transition-colors font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-2 font-sans">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mt-3">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-300">
                  <span>MINDSET {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00B3FF] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXPLORATION AREAS */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              EXPLORATION AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              What We Explore
            </h2>
            <p className="text-base text-slate-600 mt-3 font-sans leading-relaxed">
              ZoftStudio can be used to examine technology directions across the broader ZOFT ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPLORATION_AREAS.map((area) => (
              <div
                key={area.number}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF]/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#01153B] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 inline-block mb-3">
                    EXPLORATION {area.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#01153B] tracking-tight font-sans">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-3">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FROM IDEA TO DIRECTION */}
      <section className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 mb-4">
              <Layers className="w-3.5 h-3.5" />
              STUDIO PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-sans leading-[1.15]">
              From Curiosity to Clarity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRESSION_STAGES.map((stage, idx) => (
              <div
                key={stage.number}
                className="bg-[#031E4D] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between backdrop-blur-sm relative group hover:border-[#00B3FF]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 inline-block uppercase tracking-wider">
                      STAGE {stage.number}
                    </span>
                    {idx < PROGRESSION_STAGES.length - 1 && (
                      <span className="hidden lg:inline-block font-mono text-slate-500 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#00B3FF] font-sans mb-3">
                    {stage.question}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  PHASE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CONNECTION TO THE ZOFT ECOSYSTEM */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              ZOFT ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Exploration Is Only Valuable When It Connects to Execution.
            </h2>
            <p className="text-base text-slate-600 mt-3 font-sans leading-relaxed">
              Ideas become useful when they connect with strong architecture, engineering, and
              operational thinking. ZoftStudio complements ZOFT&apos;s consulting and delivery
              capabilities by creating space to explore possibilities before making larger technology
              decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CONSULTING */}
            <div className="bg-slate-50/60 rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest block">
                  ADVISORY & ARCHITECTURE
                </span>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans">CONSULTING</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Technology decisions, architecture, governance, and technical guidance.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                >
                  <span>Explore Consulting</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* OUR OFFERINGS */}
            <div className="bg-slate-50/60 rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest block">
                  ENGINEERING DELIVERY
                </span>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans">OUR OFFERINGS</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Engineering, modernization, performance, managed database services, and data
                  capabilities.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/offerings"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                >
                  <span>Explore Our Offerings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ZOFTSTUDIO (ACTIVE) */}
            <div className="bg-[#01153B] text-white rounded-2xl p-8 border border-[#00B3FF]/30 shadow-xl space-y-5 flex flex-col justify-between relative overflow-hidden">
              <div
                className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#00B3FF]/10 blur-[100px] rounded-full"
                aria-hidden="true"
              />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-widest block">
                    STRUCTURED EXPLORATION
                  </span>
                  <span className="text-[10px] font-mono text-[#00B3FF] bg-[#00B3FF]/20 px-2.5 py-0.5 rounded border border-[#00B3FF]/30 uppercase tracking-wider">
                    CURRENT DESTINATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">ZOFTSTUDIO</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Exploration, validation, and emerging technology directions.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 relative z-10">
                <Link
                  href="/zoftstudio"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
                >
                  <span>Active Destination</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EDITORIAL BREAK */}
      <section className="relative bg-[#031E4D] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00] mx-auto mb-6 rounded-full" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            Good Technology Starts With Better Questions.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Before choosing a platform, architecture, or tool, understand the problem it needs to
            solve.
          </p>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section
        aria-label="Explore a Technology Direction"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            EXPLORE A TECHNOLOGY DIRECTION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Have an Idea Worth Exploring?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Bring a technology question, emerging idea, or architectural challenge to ZOFT. Start
            with the problem, explore the possibilities, and understand what could work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/offerings"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Our Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
