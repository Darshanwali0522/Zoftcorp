import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  MessageSquare,
  BookOpen,
  Video,
  Users,
  Terminal,
  Compass,
} from 'lucide-react';
import {
  CASE_STUDY_FRAMEWORK,
  CASE_STUDY_THEMES,
  BEYOND_TECH_PRINCIPLES,
} from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies | Insights | ZOFT Corp',
  description:
    'Explore ZOFT case-study perspectives around databases, cloud, data, performance, architecture, and technology challenges.',
  alternates: {
    canonical: 'https://zoftcorp.com/insights/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Insights | ZOFT Corp',
    description:
      'Explore ZOFT case-study perspectives around databases, cloud, data, performance, architecture, and technology challenges.',
    url: 'https://zoftcorp.com/insights/case-studies',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Insights | ZOFT Corp',
    description:
      'Explore ZOFT case-study perspectives around databases, cloud, data, performance, architecture, and technology challenges.',
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#00B3FF]/10 blur-[140px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
                <FileText className="w-3.5 h-3.5" />
                <span>CASE STUDIES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Technology in the Context of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                  Real Problems.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                Explore how complex technology challenges can be approached through architecture,
                engineering, data, performance, and operational thinking.
              </p>
            </div>

            {/* Right Side Conceptual Framework Flow Diagram */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Terminal className="w-4 h-4" />
                    <span>CASE STUDY FRAMEWORK</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-750">
                    CONCEPTUAL MODEL
                  </span>
                </div>

                {/* Conceptual Problem -> Outcome Flow */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">01 / CHALLENGE</span>
                    <span className="text-white font-bold">Problem Definition</span>
                  </div>
                  <div className="text-center text-slate-500 text-[10px]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">02 / UNDERSTAND</span>
                    <span className="text-[#00B3FF] font-bold">Context & Constraints</span>
                  </div>
                  <div className="text-center text-slate-500 text-[10px]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">03 / DESIGN & BUILD</span>
                    <span className="text-[#FF6F00] font-bold">Technical Delivery</span>
                  </div>
                  <div className="text-center text-slate-500 text-[10px]">↓</div>
                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">04 / OUTCOME</span>
                    <span className="text-emerald-400 font-bold">Validated Results</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>METHODOLOGY: ENGINEERING ADVISORY</span>
                  <span className="text-[#00B3FF]">ZOFT FRAMEWORK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRODUCTION */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Large Statement */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                CONTEXTUAL ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                Technology Is Best Understood Through Context.
              </h2>
            </div>

            {/* Right Supporting Paragraph with Vertical Accent Rule */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans font-normal">
                Case studies connect technical decisions with the problems they are designed to solve.
                They provide context around architecture, constraints, implementation, and the thinking
                behind the work.
              </p>
              <p className="text-sm text-slate-500 font-mono">
                TECHNICAL CASE STUDY FRAMEWORK // ZOFT CORP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY CONTENT AREA (SELECTED WORK - CONTENT READY) */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Selected Work
            </h2>
          </div>

          <div className="bg-slate-50/60 rounded-3xl p-8 sm:p-14 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center mx-auto border border-[#00B3FF]/20">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#01153B] font-sans tracking-tight">
              Real Work. Real Context. Real Engineering.
            </h3>

            <p className="text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
              This space will showcase verified ZOFT case studies covering technology challenges,
              technical approaches, and the engineering decisions behind them.
            </p>

            <div className="pt-4">
              <Link
                href="/insights"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore Other Insights</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY FRAMEWORK */}
      <section className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 mb-4">
              <Compass className="w-3.5 h-3.5" />
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              What Makes a Useful Case Study?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CASE_STUDY_FRAMEWORK.map((stage, idx) => (
              <div
                key={stage.number}
                className="bg-[#01153B] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between backdrop-blur-sm relative group hover:border-[#00B3FF]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      {stage.number}
                    </span>
                    {idx < CASE_STUDY_FRAMEWORK.length - 1 && (
                      <span className="hidden lg:inline-block font-mono text-slate-500 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight font-sans mb-2 uppercase">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  STAGE {stage.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS OF WORK (THEMES) */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              THEMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Explore Case Study Themes.
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {CASE_STUDY_THEMES.map((theme) => (
              <div
                key={theme.number}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white hover:px-4 rounded-xl transition-all duration-200"
              >
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-base font-bold text-[#01153B]">{theme.number}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans uppercase group-hover:text-[#00B3FF] transition-colors">
                    {theme.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEYOND THE TECHNOLOGY */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              SYSTEM REALITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              The Technology Is Only Part of the Story.
            </h2>
            <p className="text-base text-slate-600 mt-3 font-sans leading-relaxed">
              Strong engineering work also depends on understanding constraints, workloads, operational
              realities, and the decisions that shape the system around the technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BEYOND_TECH_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/90 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#01153B] uppercase tracking-widest block">
                  {principle.title}
                </span>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EDITORIAL STATEMENT */}
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

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            “Good Engineering Is Easier to Understand When You Can See the Reasoning Behind It.”
          </blockquote>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Case studies should reveal not only what was built, but why the approach made sense.
          </p>
        </div>
      </section>

      {/* 8. CONNECT TO OTHER INSIGHTS */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              MORE INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Explore More From Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* BLOGS */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans">BLOGS</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Technical perspectives and practical ideas.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/insights/blogs"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                >
                  <span>Explore Blogs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* WEBINAR */}
            <div className="bg-[#01153B] text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">WEBINAR</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Explore technical conversations and sessions.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/insights/webinar"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
                >
                  <span>Explore Webinars</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* MEET UPS */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center border border-[#FF6F00]/20">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans">MEET UPS</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Discover technology conversations and community opportunities.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/insights/meet-ups"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                >
                  <span>Explore Meet ups</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section
        aria-label="Have a Technology Challenge"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            DISCUSS A CHALLENGE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Have a Technology Challenge Worth Discussing?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Start with the problem, understand the technical context, and explore what a practical
            approach could look like.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
