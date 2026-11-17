import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Compass,
  Sparkles,
  BookOpen,
  FileText,
  MessageSquare,
  MapPin,
} from 'lucide-react';
import {
  EVENT_TOPICS,
  EVENT_FORMATS,
  getUpcomingEvents,
  getPastEvents,
} from '@/data/events-meetups';
import { getPublishedEvents } from '@/lib/supabase/events-service';

export const instant = false;

export const metadata: Metadata = {
  title: 'Events & Meetups | Insights | Zoftcorp',
  description:
    'Explore Zoftcorp technical webinars, architecture roundtables, community meetups, and engineering discussions.',
  alternates: {
    canonical: 'https://zoftcorp.com/insights/events',
  },
  openGraph: {
    title: 'Events & Meetups | Insights | Zoftcorp',
    description:
      'Explore Zoftcorp technical webinars, architecture roundtables, community meetups, and engineering discussions.',
    url: 'https://zoftcorp.com/insights/events',
    siteName: 'Zoftcorp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Meetups | Insights | Zoftcorp',
    description:
      'Explore Zoftcorp technical webinars, architecture roundtables, community meetups, and engineering discussions.',
  },
};

export default async function EventsAndMeetupsPage() {
  const allEvents = await getPublishedEvents();
  const upcomingEvents = getUpcomingEvents(allEvents);
  const pastEvents = getPastEvents(allEvents);
  const hasEvents = allEvents.length > 0;

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/15 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1 py-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
              <Calendar className="w-3.5 h-3.5" />
              <span>GATHERINGS &amp; DISCUSSIONS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
              Events &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                Meetups
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-sans font-normal">
              Technical webinars, architecture roundtables, community meetups, and engineering discussions exploring cloud, database performance, and data infrastructure.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#upcoming-events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-sm transition-all duration-200 shadow-md shadow-[#00B3FF]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>View Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 border border-slate-700 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Suggest a Topic</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UNIFIED EVENTS LIST / EMPTY STATE */}
      <section id="upcoming-events" className="relative bg-slate-50/70 text-slate-900 py-20 md:py-24 border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00B3FF]" />
              SESSION SCHEDULE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
              Technical Sessions &amp; Community Gatherings
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-sans">
              Practical conversations designed to challenge assumptions, explore trade-offs, and share real-world engineering realities.
            </p>
          </div>

          {/* If events exist, render structured cards */}
          {hasEvents ? (
            <div className="space-y-16">
              {upcomingEvents.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B3FF] animate-pulse" />
                    <h3 className="text-xl font-bold font-sans text-slate-900 uppercase tracking-wide">
                      Upcoming Sessions
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 flex flex-col justify-between hover:border-[#00B3FF]/40 hover:shadow-lg transition-all group"
                      >
                        <div className="space-y-4">
                          {event.image && (
                            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/80">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                            <span className="px-2.5 py-1 rounded bg-[#00B3FF]/10 text-[#01153B] font-bold uppercase tracking-wider">
                              {event.type}
                            </span>
                            <div className="flex items-center gap-3 text-slate-500 font-semibold">
                              {event.date && <span>{event.date}</span>}
                              {event.time && <span>• {event.time}</span>}
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold font-sans text-slate-900 group-hover:text-[#0066CC] transition-colors">
                            {event.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed font-sans">
                            {event.excerpt}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-sans pt-1">
                            {event.location && (
                              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                                <MapPin className="w-3.5 h-3.5 text-[#00B3FF]" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            {event.speaker && (
                              <div>
                                Speaker: <strong className="text-slate-800">{event.speaker}</strong>
                                {event.speakerRole && ` (${event.speakerRole})`}
                              </div>
                            )}
                          </div>
                        </div>

                        {event.registrationUrl && (
                          <div className="pt-6 mt-6 border-t border-slate-100">
                            <a
                              href={event.registrationUrl}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066CC] hover:text-[#004C99]"
                            >
                              <span>Register Now</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {pastEvents.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <h3 className="text-xl font-bold font-sans text-slate-700 uppercase tracking-wide">
                      Past Sessions &amp; Recordings
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pastEvents.map((event) => (
                      <div
                        key={event.id}
                        className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 flex flex-col justify-between group"
                      >
                        <div className="space-y-4">
                          {event.image && (
                            <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/80">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider">
                            <span>{event.type}</span>
                            <span>{event.date}</span>
                          </div>
                          <h4 className="text-xl font-bold font-sans text-slate-800">
                            {event.title}
                          </h4>
                          <p className="text-sm text-slate-600 font-sans">{event.excerpt}</p>
                          {event.location && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                        {event.recordingUrl && (
                          <div className="pt-6 mt-6 border-t border-slate-100">
                            <a
                              href={event.recordingUrl}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066CC]"
                            >
                              <span>Watch Recording</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Clean, dignified, intentional empty state ready for future publishing */
            <div className="bg-white rounded-3xl p-6 sm:p-14 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#00B3FF]/10 text-[#0066CC] flex items-center justify-center mx-auto border border-[#00B3FF]/20">
                <Calendar className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066CC] bg-[#00B3FF]/10 px-3 py-1 rounded-full">
                  SCHEDULE IN PREPARATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#01153B] font-sans tracking-tight">
                  Upcoming Sessions Are Being Scheduled
                </h3>
              </div>

              <p className="text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
                Our engineers and practice leaders host periodic architecture roundtables, database tuning webinars, and community meetups. Verified event schedules published by our team will appear here.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-1">Core Tracks:</span>
                {['Cloud Architecture', 'Database Tuning', 'FinOps Governance', 'Data Engineering', 'Vector AI'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-sans px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200/80 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/insights/blogs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Read Engineering Blogs</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. EVENT FORMATS (WEBINARS & MEETUPS SIDE BY SIDE) */}
      <section className="relative bg-white text-slate-900 py-20 md:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3">
              <Compass className="w-3.5 h-3.5 text-[#00B3FF]" />
              SESSION FORMATS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
              Two Formats. One High-Depth Standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_FORMATS.map((format) => (
              <div
                key={format.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-5 hover:border-[#00B3FF]/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0066CC] bg-[#00B3FF]/10 px-3 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      {format.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {format.cadence}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-sans">
                    {format.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {format.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 text-xs font-mono text-slate-500">
                  PRACTICAL PERSPECTIVES // ZOFTCORP
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONVERSATION TOPICS */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              FOCUS DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
              Topics Explored in Our Sessions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#0066CC]">{topic.number}</span>
                  <span className="text-slate-400">TRACK</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-sans">{topic.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPLORE COMPANION INSIGHTS */}
      <section className="relative bg-white text-slate-900 py-16 md:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
              Companion Insights &amp; Real-World Engagements
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-sans">
              Deepen your understanding with our written engineering perspectives, white papers, and production case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#0066CC] flex items-center justify-center border border-[#00B3FF]/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-sans">Engineering Blogs</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Deep dives on database tuning, cloud FinOps, statutory compliance, and modern data engineering.
                </p>
              </div>
              <Link
                href="/insights/blogs"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066CC] hover:text-[#004C99]"
              >
                <span>Read Blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between shadow-md">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-sans">Case Studies and White Papers</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Real-world architecture challenges, measurable outcomes, white papers, and verified engineering transformations.
                </p>
              </div>
              <Link
                href="/insights/blogs#case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B3FF] hover:text-[#33C2FF]"
              >
                <span>Explore Case Studies and White Papers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONCISE FINAL CTA */}
      <section
        aria-label="Start an Engineering Conversation"
        className="relative bg-[#01153B] text-white py-20 md:py-24 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[140px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans leading-[1.15]">
            Have an Architecture Question or Topic to Suggest?
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-sans max-w-xl mx-auto">
            Our engineering team is always open to discussing complex database workloads, cloud migrations, and upcoming session topics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Talk to Zoftcorp
            </Link>
            <Link
              href="/offerings/performance-tuning-delivery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Performance Tuning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
