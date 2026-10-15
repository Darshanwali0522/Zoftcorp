import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Video,
  MessageSquare,
  BookOpen,
  FileText,
  Users,
  Compass,
  Mic,
} from 'lucide-react';
import { SESSION_STAGES, WEBINAR_TOPICS } from '@/data/webinars';

export const metadata: Metadata = {
  title: 'Webinar | Insights | ZOFT Corp',
  description:
    'Explore ZOFT technical conversations around cloud, databases, data, performance, architecture, and modern technology.',
  alternates: {
    canonical: 'https://zoftcorp.com/insights/webinar',
  },
  openGraph: {
    title: 'Webinar | Insights | ZOFT Corp',
    description:
      'Explore ZOFT technical conversations around cloud, databases, data, performance, architecture, and modern technology.',
    url: 'https://zoftcorp.com/insights/webinar',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar | Insights | ZOFT Corp',
    description:
      'Explore ZOFT technical conversations around cloud, databases, data, performance, architecture, and modern technology.',
  },
};

export default function WebinarPage() {
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
                <Video className="w-3.5 h-3.5" />
                <span>WEBINAR</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Technology Worth{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                  Talking About.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                Explore technical conversations around cloud, databases, data, performance, architecture,
                and the technology decisions that shape modern organizations.
              </p>
            </div>

            {/* Right Side Typographic Conversation Visual Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Mic className="w-4 h-4" />
                    <span>DIALOGUE MODEL</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-750">
                    CONVERSATION FLOW
                  </span>
                </div>

                {/* Conversation Flow Metaphor */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 space-y-1">
                    <span className="text-[10px] text-[#00B3FF] font-bold block">01 / QUESTION</span>
                    <p className="text-white text-xs font-bold font-sans">
                      What problem or decision is being examined?
                    </p>
                  </div>

                  <div className="flex items-center justify-center text-slate-500 text-xs py-0.5">
                    <span>↘</span>
                    <span className="mx-2 text-[10px] text-slate-400">TECHNICAL DISCUSSION</span>
                    <span>↙</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 space-y-1">
                    <span className="text-[10px] text-[#FF6F00] font-bold block">
                      02 / PERSPECTIVE
                    </span>
                    <p className="text-white text-xs font-bold font-sans">
                      Clear engineering insights and validated directions.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>FORMAT: LIVE & RECORDED SESSIONS</span>
                  <span className="text-[#00B3FF]">ZOFT DIALOGUE</span>
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
                TECHNICAL DISCUSSIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                The Best Technical Conversations Go Beyond the Surface.
              </h2>
            </div>

            {/* Right Supporting Paragraph with Vertical Accent Rule */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans font-normal">
                Webinars create space to examine complex technology topics, ask better questions,
                challenge assumptions, and share practical perspectives.
              </p>
              <p className="text-sm text-slate-500 font-mono">
                TECHNICAL WEBINARS // ZOFT CORP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WEBINAR CONTENT AREA (FEATURED SESSIONS - CONTENT READY) */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              FEATURED SESSIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Featured Sessions
            </h2>
          </div>

          <div className="bg-slate-50/60 rounded-3xl p-8 sm:p-14 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center mx-auto border border-[#00B3FF]/20">
              <Video className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#01153B] font-sans tracking-tight">
              Technical Conversations Are Being Built Here.
            </h3>

            <p className="text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
              This space will feature verified ZOFT webinars and technical sessions covering cloud,
              databases, data, architecture, performance, and modern technology.
            </p>

            <div className="pt-4">
              <Link
                href="/insights"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore ZOFT Insights</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SESSION FORMAT */}
      <section className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 mb-4">
              <Compass className="w-3.5 h-3.5" />
              SESSION STRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              A Good Technical Session Creates Space for Better Questions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SESSION_STAGES.map((stage, idx) => (
              <div
                key={stage.number}
                className="bg-[#01153B] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between backdrop-blur-sm relative group hover:border-[#00B3FF]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      {stage.number}
                    </span>
                    {idx < SESSION_STAGES.length - 1 && (
                      <span className="hidden lg:inline-block font-mono text-slate-500 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-2 uppercase">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  PHASE {stage.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TOPIC AREAS */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              CONVERSATION TOPICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Topics Worth Discussing
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {WEBINAR_TOPICS.map((topic) => (
              <div
                key={topic.number}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white hover:px-4 rounded-xl transition-all duration-200"
              >
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-base font-bold text-[#01153B]">{topic.number}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans uppercase group-hover:text-[#00B3FF] transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL BREAK */}
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
            “Good Technical Conversations Make Better Technology Decisions.”
          </blockquote>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            The goal is not simply to share information, but to create clearer thinking around the
            technology choices that matter.
          </p>
        </div>
      </section>

      {/* 7. CONNECT WEBINARS TO INSIGHTS */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              CONTINUE THE CONVERSATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Continue the Conversation
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
                  Written perspectives on technology, architecture, data, and engineering.
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

            {/* CASE STUDIES */}
            <div className="bg-[#01153B] text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">CASE STUDIES</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Real-world technical context and engineering approaches.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/insights/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
                >
                  <span>Explore Case Studies</span>
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
                  Community conversations and knowledge sharing.
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

      {/* 8. FINAL CTA */}
      <section
        aria-label="Have a Technology Question"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            STAY CONNECTED
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Have a Technology Question?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Explore the wider ZOFT perspective or start a conversation about your technology
            environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Explore Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Talk to ZOFT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
