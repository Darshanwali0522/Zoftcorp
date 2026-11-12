import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, MessageSquare, Sparkles, FileText, Calendar } from 'lucide-react';
import { INSIGHT_CATEGORIES } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights | Zoftcorp',
  description:
    'Explore Zoftcorp perspectives on cloud, databases, data, performance, architecture, and modern technology.',
  alternates: {
    canonical: 'https://zoftcorp.com/insights',
  },
  openGraph: {
    title: 'Insights | Zoftcorp',
    description:
      'Explore Zoftcorp perspectives on cloud, databases, data, performance, architecture, and modern technology.',
    url: 'https://zoftcorp.com/insights',
    siteName: 'Zoftcorp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Zoftcorp',
    description:
      'Explore Zoftcorp perspectives on cloud, databases, data, performance, architecture, and modern technology.',
  },
};

export default function InsightsOverviewPage() {
  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. EDITORIAL HERO */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>INSIGHTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Ideas, Perspectives, and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                  Technology in Practice.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                Explore perspectives on cloud, databases, data, performance, architecture, and the
                technology decisions that shape modern organizations.
              </p>
            </div>

            {/* Right Vertical Editorial Navigation Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-widest">
                    EXPLORE SECTIONS
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">2 CATEGORIES</span>
                </div>

                <div className="divide-y divide-slate-800/80">
                  {INSIGHT_CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      className="group py-3.5 px-3 -mx-3 rounded-lg flex items-center justify-between hover:bg-[#01153B]/60 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#00B3FF]">
                          {category.number}
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-[#00B3FF] transition-colors font-sans">
                          {category.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00B3FF] group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ))}
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
                PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                Technology Moves Fast. Understanding It Takes Perspective.
              </h2>
            </div>

            {/* Right Supporting Paragraph with Vertical Accent Rule */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans font-normal">
                The most useful technology conversations go beyond tools and trends. They examine how
                architecture, data, cloud infrastructure, performance, and engineering decisions work
                together in the real world.
              </p>
              <p className="text-sm text-slate-500 font-mono">
                ENGINEERING PERSPECTIVES // ZOFTCORP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSIGHTS CATEGORIES INDEX */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Knowledge & Perspectives
            </h2>
          </div>

          {/* Large Vertical Category Index List */}
          <div className="divide-y divide-slate-200">
            {INSIGHT_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
              >
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-lg font-bold text-[#01153B]">{cat.number}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#01153B] font-sans group-hover:text-[#00B3FF] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-base text-slate-600 font-sans leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end pt-2 lg:pt-0">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] group-hover:text-[#00B3FF] transition-colors"
                  >
                    <span>Explore {cat.shortLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CONTENT AREA (CONTENT-READY STATE) */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6F00]" />
                FEATURED PERSPECTIVES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
                Featured Perspectives
              </h2>
              <p className="text-base text-slate-600 font-sans leading-relaxed">
                Explore the latest perspectives from Zoftcorp across technology, architecture, data, and
                engineering.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/insights/blogs"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore Blogs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY EDITORIAL BREAK */}
      <section className="relative bg-[#031E4D] text-white py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
                <FileText className="w-3.5 h-3.5" />
                REAL-WORLD EXAMPLES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
                Technology Is Best Understood Through Real Problems.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
                Case studies and white papers provide context around the challenges, technical considerations, and
                approaches involved in real-world technology work.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/insights/blogs#case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore Case Studies and White Papers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KNOWLEDGE + COMMUNITY (WEBINAR & MEETUPS) */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              COMMUNITY & CONVERSATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Technology Is a Conversation.
            </h2>
            <p className="text-base text-slate-600 mt-3 font-sans leading-relaxed">
              Ideas become more useful when they are discussed, questioned, and shared.
            </p>
          </div>

          <div className="bg-[#01153B] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00B3FF] uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>UNIFIED SESSIONS DESTINATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Events &amp; Meetups
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                  Explore upcoming and recorded webinars, peer roundtables, and technical community sessions across cloud architecture, database performance, FinOps, and data engineering.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Webinars', 'Architecture Roundtables', 'Community Meetups', 'Live Q&A'].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-mono px-3 py-1 rounded bg-[#031E4D] border border-slate-750 text-slate-300"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/insights/events"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-sm transition-all duration-200 shadow-md shadow-[#00B3FF]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Explore Events &amp; Meetups</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LARGE EDITORIAL STATEMENT */}
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
            Better Technology Starts With Better Understanding.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Explore ideas, experiences, and perspectives that help connect technical decisions with the
            problems they are meant to solve.
          </p>
        </div>
      </section>

      {/* 8. MINIMAL FINAL CTA */}
      <section
        aria-label="Stay Curious"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            STAY CURIOUS. KEEP LEARNING.
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Stay Curious. Keep Learning.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Explore Zoftcorp&apos;s perspectives across technology, architecture, data, and engineering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/insights/blogs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Explore Blogs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Talk to Zoftcorp</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
