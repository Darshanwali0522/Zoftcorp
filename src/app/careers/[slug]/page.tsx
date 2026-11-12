import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Briefcase,
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  Building2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { getJobBySlug } from '@/lib/supabase/jobs-service';
import { CareerApplicationForm } from '@/components/forms/career-application-form';
import { sanitizeHtml } from '@/lib/sanitizer';

export const instant = false;

interface JobDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job || job.status !== 'published') {
    return {
      title: 'Position Not Found | Careers | Zoftcorp',
      description: 'The requested job posting could not be found or has been closed.',
    };
  }

  const pageTitle = `${job.title} | Careers | Zoftcorp`;
  const cleanDescription = job.description
    ? job.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)
    : `Explore the ${job.title} opportunity in ${job.department} at Zoftcorp.`;
  const pageUrl = `https://zoftcorp.com/careers/${job.slug}`;

  return {
    title: pageTitle,
    description: cleanDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: cleanDescription,
      url: pageUrl,
      siteName: 'Zoftcorp',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: cleanDescription,
    },
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  // Return a proper 404 response for missing or draft jobs
  if (!job || job.status !== 'published') {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.created_at,
    validThrough: job.application_deadline ? `${job.application_deadline}T23:59:59Z` : undefined,
    employmentType: job.job_type.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Zoftcorp',
      sameAs: 'https://zoftcorp.com',
      logo: 'https://zoftcorp.com/brand/zoftcorp-logo.png',
    },
    jobLocationType: job.work_mode === 'Remote' ? 'TELECOMMUTE' : undefined,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN',
      },
    },
    baseSalary: job.salary_range
      ? {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: {
            '@type': 'QuantitativeValue',
            unitText: 'YEAR',
          },
        }
      : undefined,
  };

  const isHtmlDescription =
    job.description.includes('<p>') ||
    job.description.includes('<br>') ||
    job.description.includes('<div>');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
        {/* =========================================================================
            1. HERO & ROLE HEADER
            ========================================================================= */}
        <section className="relative w-full bg-[#01153B] text-white py-14 sm:py-20 overflow-hidden border-b border-slate-800">
          {/* Subtle Grid Background */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/15 blur-[150px] rounded-full"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Navigation to Career Hub */}
            <div className="mb-6">
              <Link
                href="/about-us/career"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to All Openings</span>
              </Link>
            </div>

            <div className="max-w-4xl space-y-5">
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00B3FF]/20 text-[#00B3FF] border border-[#00B3FF]/30">
                  <Building2 className="w-3.5 h-3.5" />
                  {job.department}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-white/90 border border-white/10">
                  {job.work_mode}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-white/90 border border-white/10">
                  {job.job_type}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-white/90 border border-white/10">
                  {job.experience_level}
                </span>
              </div>

              {/* Job Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
                {job.title}
              </h1>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00B3FF] shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00B3FF] shrink-0" />
                  <span>
                    {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                  </span>
                </div>

                {job.salary_range && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#00B3FF] shrink-0" />
                    <span className="truncate">{job.salary_range}</span>
                  </div>
                )}

                {job.application_deadline && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00B3FF] shrink-0" />
                    <span>Deadline: {formatDate(job.application_deadline)}</span>
                  </div>
                )}
              </div>

              {/* Apply Now Action */}
              <div className="pt-2">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Apply for this Position</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. JOB CONTENT & APPLICATION SECTION
            ========================================================================= */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Main Column: Description, Responsibilities, Requirements & Application */}
              <div className="lg:col-span-8 space-y-10">
                {/* About the Position */}
                <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                    <Sparkles className="w-5 h-5 text-[#00B3FF]" />
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                      About the Opportunity
                    </h2>
                  </div>

                  {isHtmlDescription ? (
                    <div
                      className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: sanitizeHtml(job.description) }}
                    />
                  ) : (
                    <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3 font-sans">
                      {job.description}
                    </div>
                  )}
                </div>

                {/* Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-[#00B3FF]" />
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                        What You Will Do (Responsibilities)
                      </h2>
                    </div>

                    <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-sans">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#00B3FF]/20">
                            ✓
                          </span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {job.requirements && job.requirements.length > 0 && (
                  <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                      <ShieldCheck className="w-5 h-5 text-[#00B3FF]" />
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                        Qualifications &amp; Requirements
                      </h2>
                    </div>

                    <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-sans">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#00B3FF]/20">
                            ✓
                          </span>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Application Section */}
                <div
                  id="apply"
                  className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-6 scroll-mt-20"
                >
                  <div className="space-y-2 pb-5 border-b border-slate-100">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                      <Briefcase className="w-3.5 h-3.5 text-[#00B3FF]" />
                      DIRECT CANDIDATE SUBMISSION
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                      Apply for {job.title}
                    </h2>
                    <p className="text-sm text-slate-600 font-sans">
                      Complete your candidate profile and upload your CV. Our technical recruitment team will review your application directly.
                    </p>
                  </div>

                  {/* Connected Application Form with Prefilled Role & Job Slug */}
                  <CareerApplicationForm
                    initialRole={job.title}
                    jobSlug={job.slug}
                  />
                </div>
              </div>

              {/* Sidebar: Role Summary & Culture Perks */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                {/* Role Summary Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#01153B] pb-3 border-b border-slate-100 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#00B3FF]" />
                    Job Summary
                  </h3>

                  <div className="space-y-3.5 text-xs font-mono text-slate-600">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Department</span>
                      <span className="font-semibold text-slate-900">{job.department}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Work Mode</span>
                      <span className="font-semibold text-slate-900">{job.work_mode}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Employment Type</span>
                      <span className="font-semibold text-slate-900">{job.job_type}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Experience Level</span>
                      <span className="font-semibold text-slate-900">{job.experience_level}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Location</span>
                      <span className="font-semibold text-slate-900 truncate max-w-[150px]">{job.location}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Openings</span>
                      <span className="font-semibold text-slate-900">{job.openings}</span>
                    </div>

                    {job.salary_range && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Salary Range</span>
                        <span className="font-semibold text-[#00B3FF]">{job.salary_range}</span>
                      </div>
                    )}

                    {job.application_deadline && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Deadline</span>
                        <span className="font-semibold text-slate-900">{formatDate(job.application_deadline)}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <a
                      href="#apply"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#01153B] hover:bg-[#031E4D] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                    >
                      <span>Jump to Application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Why Zoftcorp Quick Benefits Card */}
                <div className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>Why Join Zoftcorp?</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Work alongside seasoned database and cloud specialists solving enterprise-grade challenges with autonomy and integrity.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      <span>Remote flexibility &amp; outcome-driven culture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      <span>Restricted Stock Units (RSUs) for eligible talent</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      <span>Paid learning leave &amp; certification support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      <span>Comprehensive medical insurance coverage</span>
                    </li>
                  </ul>

                  <div className="pt-2 border-t border-slate-800">
                    <Link
                      href="/about-us/career#benefits"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors uppercase tracking-wider"
                    >
                      <span>Explore all 7 perks</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
