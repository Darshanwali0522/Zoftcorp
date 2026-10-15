import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Users,
  MessageSquare,
  Sparkles,
  BookOpen,
  FileText,
  Video,
  GitCommit,
  Network,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';
import { COMMUNITY_PRINCIPLES, MEETUP_TOPICS } from '@/data/meetups';

export const metadata: Metadata = {
  title: 'Meet ups | Insights | ZOFT Corp',
  description:
    'Explore ZOFT meet ups, technology conversations, community interaction, and knowledge-sharing opportunities around modern engineering.',
  alternates: {
    canonical: 'https://zoftcorp.com/insights/meet-ups',
  },
  openGraph: {
    title: 'Meet ups | Insights | ZOFT Corp',
    description:
      'Explore ZOFT meet ups, technology conversations, community interaction, and knowledge-sharing opportunities around modern engineering.',
    url: 'https://zoftcorp.com/insights/meet-ups',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet ups | Insights | ZOFT Corp',
    description:
      'Explore ZOFT meet ups, technology conversations, community interaction, and knowledge-sharing opportunities around modern engineering.',
  },
};

export default function MeetupsPage() {
  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00] bg-[#FF6F00]/10 border border-[#FF6F00]/20">
                <Users className="w-3.5 h-3.5" />
                <span>MEET UPS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Technology Is Better When{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] via-amber-200 to-[#00B3FF]">
                  Ideas Are Shared.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                Discover opportunities for technology conversations, knowledge sharing, and
                community interaction around the ideas shaping modern engineering.
              </p>
            </div>

            {/* Right Side Typographic Network Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-sm relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Network className="w-4 h-4" />
                    <span>COMMUNITY NETWORK</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-750">
                    IDEAS IN MOTION
                  </span>
                </div>

                {/* Conceptual Typographic Network Flow */}
                <div className="relative py-2 space-y-4 font-mono text-xs">
                  <div className="flex justify-start">
                    <div className="px-3 py-1.5 rounded-lg bg-[#01153B] border border-[#FF6F00]/40 text-[#FF6F00] font-bold flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#FF6F00] animate-pulse" />
                      <span>IDEA</span>
                    </div>
                  </div>

                  <div className="pl-8 text-slate-400 text-xs font-sans flex items-center gap-2">
                    <span className="text-slate-500">↘</span>
                    <span className="text-[11px] text-slate-400 font-mono">EXPLORING TRADE-OFFS</span>
                  </div>

                  <div className="flex justify-center">
                    <div className="px-4 py-2 rounded-xl bg-[#01153B] border border-[#00B3FF]/40 text-white font-sans font-bold text-xs flex items-center gap-3 shadow-md">
                      <span className="text-[#00B3FF] font-mono text-xs">PERSPECTIVE</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-[#FF6F00] font-mono text-xs">CONVERSATION</span>
                    </div>
                  </div>

                  <div className="pr-8 text-right text-slate-400 text-xs font-sans flex items-center justify-end gap-2">
                    <span className="text-[11px] text-slate-400 font-mono">NEW QUESTIONS</span>
                    <span className="text-slate-500">↗</span>
                  </div>

                  <div className="flex justify-end">
                    <div className="px-3 py-1.5 rounded-lg bg-[#01153B] border border-[#00B3FF]/30 text-[#00B3FF] font-bold flex items-center gap-2 shadow-sm">
                      <HelpCircle className="w-3.5 h-3.5 text-[#00B3FF]" />
                      <span>QUESTION</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>FORMAT: COMMUNITY SESSIONS</span>
                  <span className="text-[#00B3FF]">ZOFT COMMUNITY</span>
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]" />
                COMMUNITY PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                Good Technology Grows Through Conversation.
              </h2>
            </div>

            {/* Right Supporting Copy with Vertical Accent Rule */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-[#00B3FF]/40 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans font-normal">
                The strongest technology communities make room for questions, different perspectives,
                practical experience, and ideas that challenge the obvious answer.
              </p>
              <p className="text-sm text-slate-500 font-mono">
                COMMUNITY SESSIONS // ZOFT CORP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMUNITY CONTENT AREA (COMMUNITY SESSIONS - CONTENT READY) */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              COMMUNITY SESSIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Community Sessions
            </h2>
          </div>

          <div className="bg-slate-50/60 rounded-3xl p-8 sm:p-14 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center mx-auto border border-[#FF6F00]/20">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#01153B] font-sans tracking-tight">
              A Space for Technology Conversations.
            </h3>

            <p className="text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
              This space will feature verified ZOFT meet ups, community conversations, and
              knowledge-sharing opportunities.
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

      {/* 4. COMMUNITY PRINCIPLES */}
      <section className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              MEET UP PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              What Makes a Good Meet Up?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMMUNITY_PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.number}
                className="bg-[#01153B] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between backdrop-blur-sm relative group hover:border-[#00B3FF]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      {principle.number}
                    </span>
                    {idx < COMMUNITY_PRINCIPLES.length - 1 && (
                      <span className="hidden lg:inline-block font-mono text-slate-500 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-2 uppercase">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  PRINCIPLE {principle.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY TOPICS */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              COMMUNITY TOPICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Conversations Worth Having
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {MEETUP_TOPICS.map((topic) => (
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

      {/* 6. CONNECTION / COMMUNITY NETWORK */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <GitCommit className="w-3.5 h-3.5 text-[#00B3FF]" />
              CONCEPTUAL NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans mb-4">
              Technology Is a Community, Not a Silo.
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Different experiences lead to better questions, broader perspectives, and stronger
              technical thinking.
            </p>
          </div>

          {/* Conceptual Network Diagram */}
          <div className="bg-slate-50/60 border border-slate-200 rounded-3xl p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-8 font-mono">
              {/* TOP ROW: QUESTION */}
              <div className="flex justify-center">
                <div className="bg-[#01153B] text-white px-5 py-3 rounded-xl border border-slate-800 shadow-md flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#00B3FF]" />
                  <span className="text-sm font-bold tracking-wider uppercase font-sans">QUESTION</span>
                </div>
              </div>

              {/* CONNECTING LINE DOWN */}
              <div className="w-0.5 h-8 bg-slate-300 mx-auto" />

              {/* MIDDLE ROW: PERSPECTIVE --- EXPERIENCE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1 text-center md:text-right">
                  <span className="text-xs text-[#00B3FF] font-bold block">01 / PERSPECTIVE</span>
                  <p className="text-sm text-[#01153B] font-bold font-sans">
                    Varied Engineering Approaches
                  </p>
                </div>

                <div className="hidden md:flex justify-center text-slate-400 font-bold">
                  ───
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1 text-center md:text-left">
                  <span className="text-xs text-[#FF6F00] font-bold block">02 / EXPERIENCE</span>
                  <p className="text-sm text-[#01153B] font-bold font-sans">
                    Real-world System Realities
                  </p>
                </div>
              </div>

              {/* CONNECTING LINE DOWN */}
              <div className="w-0.5 h-8 bg-slate-300 mx-auto" />

              {/* THIRD ROW: CONVERSATION */}
              <div className="flex justify-center">
                <div className="bg-[#031E4D] text-white px-6 py-3.5 rounded-xl border border-slate-800 shadow-lg flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#FF6F00]" />
                  <span className="text-base font-bold tracking-wider uppercase font-sans">
                    CONVERSATION
                  </span>
                </div>
              </div>

              {/* CONNECTING LINE DOWN */}
              <div className="w-0.5 h-8 bg-slate-300 mx-auto" />

              {/* BOTTOM ROW: IDEA */}
              <div className="flex justify-center">
                <div className="bg-[#FF6F00]/10 text-[#FF6F00] px-5 py-3 rounded-xl border border-[#FF6F00]/20 shadow-sm flex items-center gap-3">
                  <Lightbulb className="w-4 h-4 text-[#FF6F00]" />
                  <span className="text-sm font-bold tracking-wider uppercase font-sans">IDEA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EDITORIAL BREAK */}
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
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] via-sky-300 to-[#FF6F00] mx-auto mb-6 rounded-full" />

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            “Better Conversations Create Better Questions.”
          </blockquote>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            And better questions are often where better technology decisions begin.
          </p>
        </div>
      </section>

      {/* 8. CONNECT TO OTHER INSIGHTS */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              KEEP EXPLORING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Keep Exploring
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
                  Written perspectives on technology and engineering.
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
                <div className="w-10 h-10 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center border border-[#FF6F00]/20">
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

            {/* WEBINAR */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#01153B] font-sans">WEBINAR</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Technical conversations and sessions.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/insights/webinar"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                >
                  <span>Explore Webinar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section
        aria-label="Have a Technology Conversation Worth Starting"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            COMMUNITY INTERACTIONS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Have a Technology Conversation Worth Starting?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Explore the wider ZOFT perspective or start a conversation about your technology
            environment.
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
