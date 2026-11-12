import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Server,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  Cpu,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import {
  getCaseStudyBySlug,
  getPublishedCaseStudies,
} from '@/lib/supabase/publications-service';
import { sanitizeHtml } from '@/lib/sanitizer';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const caseStudies = await getPublishedCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const study = await getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Zoftcorp',
    };
  }

  const pageUrl = `https://zoftcorp.com/insights/case-studies/${study.slug}`;
  const metaTitle = study.seoTitle || `${study.title} | Case Study | Zoftcorp`;
  const metaDescription =
    study.seoDescription || study.shortDescription || study.excerpt || study.title;
  const imageUrl = study.image.startsWith('http')
    ? study.image
    : `https://zoftcorp.com${study.image}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: pageUrl,
      siteName: 'Zoftcorp',
      type: 'article',
      publishedTime: study.publishedAt,
      authors: [study.author],
      images: [
        {
          url: imageUrl,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const study = await getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  // Fetch all published case studies for previous/next navigation
  const allStudies = await getPublishedCaseStudies();
  const currentIndex = allStudies.findIndex((s) => s.slug === study.slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex >= 0 && currentIndex < allStudies.length - 1
      ? allStudies[currentIndex + 1]
      : null;

  const pageUrl = `https://zoftcorp.com/insights/case-studies/${study.slug}`;
  const imageUrl = study.image.startsWith('http')
    ? study.image
    : `https://zoftcorp.com${study.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: study.title,
    description: study.seoDescription || study.shortDescription || study.excerpt,
    image: imageUrl,
    datePublished: `${study.publishedAt.split('T')[0]}T00:00:00+00:00`,
    dateModified: study.updatedAt || `${study.publishedAt.split('T')[0]}T00:00:00+00:00`,
    author: {
      '@type': 'Organization',
      name: study.author || 'Zoftcorp Engineering Team',
      url: 'https://zoftcorp.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zoftcorp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zoftcorp.com/brand/zoftcorp-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO & CASE STUDY HEADER */}
      <section className="relative bg-[#01153B] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Back Navigation & Type Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/insights/blogs#case-studies"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Case Studies</span>
              </Link>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00B3FF]/20 text-[#00B3FF] border border-[#00B3FF]/40">
                  <Server className="w-3.5 h-3.5" />
                  <span>CASE STUDY</span>
                </span>

                {study.category && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-white/10 text-slate-300 border border-white/20">
                    {study.category}
                  </span>
                )}
              </div>
            </div>

            {/* Case Study Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              {study.title}
            </h1>

            {/* Client Information (Rendered ONLY if verified in database/data model) */}
            {study.client && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-sans text-slate-200">
                <Building2 className="w-4 h-4 text-[#00B3FF]" />
                <span>
                  Client: <strong className="text-white font-semibold">{study.client}</strong>
                </span>
              </div>
            )}

            {/* Publication Details */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-800 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00B3FF]" />
                <span>{study.formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF6F00]" />
                <span>{study.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>By {study.author}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BREADCRUMB BAR */}
      <div className="bg-[#FAFAFA] border-b border-slate-200/80 py-3 text-xs text-slate-600 font-sans">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
              <li>
                <Link href="/" className="hover:text-[#00B3FF] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/insights" className="hover:text-[#00B3FF] transition-colors">
                  Insights
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/insights/blogs#case-studies" className="hover:text-[#00B3FF] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-900 font-medium truncate max-w-[240px] sm:max-w-md" aria-current="page">
                {study.title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* MAIN CASE STUDY CONTENT */}
      <article className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Featured Image */}
            {study.image && (
              <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            )}

            {/* Engagement Lead Summary */}
            {(study.shortDescription || study.excerpt) && (
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 border-l-4 border-[#00B3FF] border-slate-200/90 shadow-2xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00B3FF] block mb-2">
                  ENGAGEMENT SUMMARY
                </span>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {study.shortDescription || study.excerpt}
                </p>
              </div>
            )}

            {/* Structured Engineering Framework Sections (Challenge / Approach / Solution / Outcome) */}
            {study.challenge || study.approach || study.solution || study.outcome ? (
              <div className="space-y-6">
                {study.challenge && (
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px]">
                        01
                      </span>
                      <span>The Challenge</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#01153B]">
                      Operational &amp; Architecture Challenge
                    </h3>
                    <p className="text-slate-700 text-base leading-relaxed pt-1">
                      {study.challenge}
                    </p>
                  </div>
                )}

                {study.approach && (
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center text-[10px]">
                        02
                      </span>
                      <span>Engineering Approach</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#01153B]">
                      Strategy &amp; Architectural Direction
                    </h3>
                    <p className="text-slate-700 text-base leading-relaxed pt-1">
                      {study.approach}
                    </p>
                  </div>
                )}

                {study.solution && (
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6F00] uppercase tracking-wider">
                      <span className="w-5 h-5 rounded-full bg-[#FF6F00]/20 text-[#FF6F00] flex items-center justify-center text-[10px]">
                        03
                      </span>
                      <span>Technical Solution</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#01153B]">
                      Implementation &amp; Execution
                    </h3>
                    <p className="text-slate-700 text-base leading-relaxed pt-1">
                      {study.solution}
                    </p>
                  </div>
                )}

                {study.outcome && (
                  <div className="bg-emerald-50/70 p-6 sm:p-8 rounded-2xl border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Validated Outcome &amp; Results</span>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-950">
                      Measurable Engineering Results
                    </h3>
                    <p className="text-emerald-900 text-base font-medium leading-relaxed pt-1">
                      {study.outcome}
                    </p>
                  </div>
                )}
              </div>
            ) : null}

            {/* Sanitized HTML Content (if additional or database body is provided) */}
            {study.content && !study.challenge && (
              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans text-base sm:text-lg min-h-[140px]"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(study.content),
                }}
              />
            )}

            {/* Technologies Applied Tags */}
            {study.technologies && study.technologies.length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                  Technologies &amp; Workloads
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700"
                    >
                      <Cpu className="w-3.5 h-3.5 text-[#00B3FF]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CLOSING ARCHITECTURAL CONSULTATION BANNER */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#01153B] text-white space-y-6 shadow-xl border border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00B3FF]">
                  ENGINEERING CONSULTATION // ZOFTCORP ARCHITECTS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Discuss a Similar Architecture Challenge
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Our specialists provide deep engineering reviews, high-availability cluster design, performance audits, and cloud database modernizations. Reach out to discuss your technical requirements with an architect.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm text-white bg-[#FF6F00] hover:bg-[#E66300] font-semibold rounded-xl shadow-lg shadow-[#FF6F00]/25 transition-all duration-200"
                >
                  <span>Talk to an Architect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/insights/blogs#case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-slate-200 bg-white/10 hover:bg-white/15 font-semibold rounded-xl border border-white/20 transition-all duration-200"
                >
                  <span>Explore More Case Studies</span>
                </Link>
              </div>
            </div>

            {/* PREVIOUS & NEXT CASE STUDIES NAVIGATION */}
            <div className="pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevStudy ? (
                <Link
                  href={`/insights/case-studies/${prevStudy.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#00B3FF] hover:bg-slate-50/50 transition-all group space-y-1 block"
                >
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 group-hover:text-[#00B3FF] transition-colors">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous Case Study
                  </span>
                  <h4 className="text-sm font-bold text-[#01153B] line-clamp-1 group-hover:text-[#00B3FF] transition-colors">
                    {prevStudy.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy ? (
                <Link
                  href={`/insights/case-studies/${nextStudy.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#00B3FF] hover:bg-slate-50/50 transition-all group space-y-1 text-right block sm:col-start-2"
                >
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-end gap-1.5 group-hover:text-[#00B3FF] transition-colors">
                    Next Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <h4 className="text-sm font-bold text-[#01153B] line-clamp-1 group-hover:text-[#00B3FF] transition-colors">
                    {nextStudy.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
