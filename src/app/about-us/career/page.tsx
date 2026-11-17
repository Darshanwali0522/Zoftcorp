import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Users,
  TrendingUp,
  Home,
  PartyPopper,
  Coins,
  GraduationCap,
  Globe,
  Rocket,
  Camera,
  Sparkles,
  MapPin,
  Calendar,
} from 'lucide-react';
import {
  CAREER_HERO,
  CORE_VALUES,
  EMPLOYEE_BENEFITS_SECTION,
  CAREER_OPENINGS_STATE,
  EmployeeBenefit,
} from '@/data/career';
import { CareerApplicationForm } from '@/components/forms/career-application-form';
import { getPublishedJobs } from '@/lib/supabase/jobs-service';

function formatDeadline(deadlineStr?: string | null): string {
  if (!deadlineStr) return '';
  try {
    const d = new Date(deadlineStr);
    if (isNaN(d.getTime())) return deadlineStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return deadlineStr;
  }
}

const BENEFIT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'work-from-home': Home,
  'special-day-off': PartyPopper,
  'competitive-salary': Coins,
  'learning-leave': GraduationCap,
  'cultural-heritage-leave': Globe,
  'insurance-coverage': ShieldCheck,
  'employee-ownership-rsus': Rocket,
};

export default async function CareerPage() {
  const jobs = await getPublishedJobs();
  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* =========================================================================
          1. HERO & INTRODUCTION (Aligned with reference: Build Your Future With Us)
          ========================================================================= */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
        {/* Subtle Architectural Blueprint Grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        {/* Ambient Glows */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/15 blur-[150px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 w-[360px] h-[360px] bg-[#031E4D]/80 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Intro */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20 shadow-2xs">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{CAREER_HERO.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                {CAREER_HERO.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                {CAREER_HERO.lead}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  View Current Openings
                </a>
                <a
                  href="#candidate-application"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Apply Directly</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Mission & Quote Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-sm">
                {/* Quote Block */}
                <div className="relative pl-6 border-l-2 border-[#00B3FF] space-y-3">
                  <Quote className="w-6 h-6 text-[#00B3FF] opacity-40 absolute -top-1 -left-3 -translate-x-full" />
                  <blockquote className="text-base sm:text-lg text-white font-sans italic leading-relaxed">
                    &ldquo;{CAREER_HERO.quote.text}&rdquo;
                  </blockquote>
                  <p className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                    &ndash; {CAREER_HERO.quote.author}
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="pt-4 border-t border-slate-700/80 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                    OUR FOUNDATIONAL COMMITMENT
                  </span>
                  <p className="text-sm text-slate-200 font-sans leading-relaxed">
                    {CAREER_HERO.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OUR CORE VALUES (All eight values from original website)
          ========================================================================= */}
      <section id="values" className="relative bg-slate-50/70 text-slate-900 py-16 md:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B3FF]" />
              FOUNDATIONAL PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
              OUR CORE VALUES
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans mt-3 max-w-2xl">
              Zoftcorp is grounded in its values and driven by a mission to cultivate responsible individuals who take ownership, lead with integrity, and deliver meaningful innovation.
            </p>
          </div>

          {/* Responsive Grid for all 8 Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3.5 flex flex-col justify-between hover:border-[#00B3FF]/40 hover:shadow-md transition-all duration-200 ease-out"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-0.5 rounded border border-[#00B3FF]/20">
                      {val.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      CORE VALUE
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PERKS AND BENEFITS (Client-specified 7 benefits)
          ========================================================================= */}
      <section id="benefits" className="relative bg-white text-slate-900 py-16 md:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#00B3FF]" aria-hidden="true" />
              PEOPLE &amp; CULTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
              {EMPLOYEE_BENEFITS_SECTION.heading}
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 font-sans mt-2">
              {EMPLOYEE_BENEFITS_SECTION.subheading}
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-sans mt-3 max-w-2xl leading-relaxed">
              {EMPLOYEE_BENEFITS_SECTION.introduction}
            </p>
          </div>

          {/* 7-Card Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EMPLOYEE_BENEFITS_SECTION.benefits.map((benefit: EmployeeBenefit, idx: number) => {
              const IconComponent = BENEFIT_ICONS[benefit.id] || Sparkles;

              return (
                <div
                  key={benefit.id}
                  className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF]/40 hover:shadow-md transition-all duration-200 ease-out group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-11 h-11 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20 shadow-2xs group-hover:scale-105 transition-transform"
                        aria-hidden="true"
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xl" role="img" aria-label={benefit.title}>
                        {benefit.emoji}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>BENEFIT 0{idx + 1}</span>
                    <span className="text-[#00B3FF] font-semibold">ZOFTCORP</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. LIFE AT ZOFTCORP (Engineering Culture & Team Showcase)
          ========================================================================= */}
      <section id="life-at-zoftcorp" className="relative bg-[#01153B] text-white py-16 md:py-24 border-b border-slate-800 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:36px_36px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30 mb-3 shadow-2xs">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              LIFE AT ZOFTCORP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Our Culture in Action
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans mt-3 max-w-2xl leading-relaxed">
              We bring together deep database specialists, cloud architects, and principled engineers who take pride in mission-critical craftsmanship and continuous growth.
            </p>
          </div>

          {/* Genuine Workplace / Engineering Culture Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl bg-[#031E4D]/90 border border-slate-700/80 p-6 flex flex-col justify-between shadow-xl min-h-[260px] overflow-hidden group hover:border-[#00B3FF]/50 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/30">
                  <Camera className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Architecture &amp; Design Sessions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Cross-functional whiteboard reviews and complex query plan deep dives solving enterprise database challenges.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700/70 text-[11px] font-mono text-[#00B3FF]">
                [ Client Photography Placeholder: Engineering Sessions ]
              </div>
            </div>

            <div className="relative rounded-2xl bg-[#031E4D]/90 border border-slate-700/80 p-6 flex flex-col justify-between shadow-xl min-h-[260px] overflow-hidden group hover:border-[#00B3FF]/50 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/30">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Learning &amp; Certification Labs
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Dedicated paid learning time, cloud lab environments, and peer mentoring to stay ahead of the technology curve.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700/70 text-[11px] font-mono text-[#00B3FF]">
                [ Client Photography Placeholder: Learning &amp; Labs ]
              </div>
            </div>

            <div className="relative rounded-2xl bg-[#031E4D]/90 border border-slate-700/80 p-6 flex flex-col justify-between shadow-xl min-h-[260px] overflow-hidden group hover:border-[#00B3FF]/50 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/30">
                  <PartyPopper className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Milestones &amp; Celebrations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Celebrating life’s moments, cultural heritage occasions, and team accomplishments with genuine connection.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700/70 text-[11px] font-mono text-[#00B3FF]">
                [ Client Photography Placeholder: Team Gatherings ]
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs font-mono text-slate-400 text-center sm:text-left">
            * Note: Approved team photographs from Zoftcorp will be populated in these designated exhibition frames upon client supply. No stock or AI-generated people are used.
          </p>
        </div>
      </section>

      {/* =========================================================================
          4. CURRENT OPENINGS (Preserving existing job-openings architecture)
          ========================================================================= */}
      <section id="openings" className="relative bg-slate-50/70 text-slate-900 py-16 md:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-[#00B3FF]" />
              OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
              {CAREER_OPENINGS_STATE.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-3 max-w-2xl">
              {CAREER_OPENINGS_STATE.copy}
            </p>
          </div>

          {/* Job List / Verified Empty State */}
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <article
                  key={job.id}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#00B3FF]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header Badges: Department, Work Mode, Employment Type */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20">
                        {job.department}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                        {job.work_mode}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                        {job.job_type}
                      </span>
                    </div>

                    {/* Job Title & Metadata */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight group-hover:text-[#00B3FF] transition-colors">
                        <Link href={`/careers/${job.slug}`}>
                          {job.title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-500 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#00B3FF]" />
                          {job.location}
                        </span>
                        <span>·</span>
                        <span>{job.experience_level}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                      {job.description}
                    </p>

                    {/* Application Deadline when available */}
                    {job.application_deadline && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 pt-1">
                        <Calendar className="w-3.5 h-3.5 text-[#00B3FF]" />
                        <span>Deadline: {formatDeadline(job.application_deadline)}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions: View Details / Apply Now */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/careers/${job.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#01153B] hover:text-[#00B3FF] uppercase tracking-wider transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/careers/${job.slug}#apply`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-2xs hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      Apply Now
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center mx-auto border border-[#00B3FF]/20 shadow-2xs">
                <Briefcase className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  Open Candidate Submissions
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
                  {CAREER_OPENINGS_STATE.emptyNotice} We welcome spontaneous applications from motivated technologists across cloud, databases, and platform architecture.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#candidate-application"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Submit Application Form</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          5. CANDIDATE APPLICATION FORM (Enhanced application experience preserved)
          ========================================================================= */}
      <section
        id="candidate-application"
        className="relative bg-slate-50/70 text-slate-900 py-16 md:py-24 border-b border-slate-200/80 scroll-mt-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-[#00B3FF]" />
              APPLY FOR A ROLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
              Candidate Application Form
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Submit your contact details, desired engineering role, and upload your resume. All submissions are transmitted securely to our recruitment team.
            </p>
          </div>

          {/* Interactive Form Component */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
            <CareerApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
