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
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Sparkles,
  Shield,
  FileCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import {
  getWhitePaperBySlug,
  getPublishedWhitePapers,
} from '@/lib/supabase/publications-service';
import { sanitizeHtml } from '@/lib/sanitizer';

export const instant = false;

interface WhitePaperPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: WhitePaperPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pub = await getWhitePaperBySlug(resolvedParams.slug);

  if (!pub) {
    return {
      title: 'White Paper Not Found | Zoftcorp',
    };
  }

  const pageUrl = `https://zoftcorp.com/insights/white-papers/${pub.slug}`;
  const metaTitle = pub.seoTitle || `${pub.title} | White Paper | Zoftcorp`;
  const metaDescription =
    pub.seoDescription || pub.shortDescription || pub.excerpt || pub.title;
  const imageUrl = pub.image.startsWith('http')
    ? pub.image
    : `https://zoftcorp.com${pub.image}`;

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
      publishedTime: pub.publishedAt,
      authors: [pub.author],
      images: [
        {
          url: imageUrl,
          alt: pub.title,
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

export default async function WhitePaperDetailPage({ params }: WhitePaperPageProps) {
  const resolvedParams = await params;
  const pub = await getWhitePaperBySlug(resolvedParams.slug);

  if (!pub) {
    notFound();
  }

  const allWhitePapers = await getPublishedWhitePapers();
  const currentIndex = allWhitePapers.findIndex((w) => w.slug === pub.slug);
  const prevWp = currentIndex > 0 ? allWhitePapers[currentIndex - 1] : null;
  const nextWp =
    currentIndex >= 0 && currentIndex < allWhitePapers.length - 1
      ? allWhitePapers[currentIndex + 1]
      : null;

  const pageUrl = `https://zoftcorp.com/insights/white-papers/${pub.slug}`;
  const imageUrl = pub.image.startsWith('http')
    ? pub.image
    : `https://zoftcorp.com${pub.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: pub.title,
    description: pub.seoDescription || pub.shortDescription || pub.excerpt,
    image: imageUrl,
    datePublished: `${pub.publishedAt.split('T')[0]}T00:00:00+00:00`,
    dateModified: pub.updatedAt || `${pub.publishedAt.split('T')[0]}T00:00:00+00:00`,
    author: {
      '@type': 'Organization',
      name: pub.author || 'Zoftcorp Engineering Team',
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
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#FF6F00]/20 selection:text-[#01153B]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO & WHITE PAPER HEADER */}
      <section className="relative bg-[#01153B] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#FF6F00]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#00B3FF]/15 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Back Navigation & Type Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/insights/blogs#case-studies"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6F00] hover:text-amber-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Insights &amp; Publications</span>
              </Link>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FF6F00]/20 text-[#FF6F00] border border-[#FF6F00]/40">
                  <FileText className="w-3.5 h-3.5" />
                  <span>WHITE PAPER</span>
                </span>

                {pub.category && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-white/10 text-slate-300 border border-white/20">
                    {pub.category}
                  </span>
                )}
              </div>
            </div>

            {/* White Paper Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              {pub.title}
            </h1>

            {/* Publication Details */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-800 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF6F00]" />
                <span>{pub.formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00B3FF]" />
                <span>{pub.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>By {pub.author}</span>
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
                <span className="text-slate-600">
                  Insights
                </span>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/insights/blogs#case-studies" className="hover:text-[#00B3FF] transition-colors">
                  White Papers
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-900 font-medium truncate max-w-[240px] sm:max-w-md" aria-current="page">
                {pub.title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* MAIN WHITE PAPER CONTENT */}
      <article className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Featured Image */}
            {pub.image && (
              <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            )}

            {/* ASSOCIATED PDF DOWNLOAD & PREVIEW BANNER */}
            {pub.pdfUrl && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#01153B] to-[#031E4D] text-white border border-[#FF6F00]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00]">
                    <FileCheck className="w-4 h-4" />
                    <span>Technical Publication Attached</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Download Full White Paper Document (PDF)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Read the complete technical specification, architecture diagrams, and benchmark methodology offline.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={pub.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF6F00] hover:bg-[#E66300] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in New Tab</span>
                  </a>
                </div>
              </div>
            )}

            {/* Executive Summary Lead Callout */}
            {(pub.shortDescription || pub.excerpt) && (
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 border-l-4 border-[#FF6F00] border-slate-200/90 shadow-2xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF6F00] block mb-2">
                  EXECUTIVE SUMMARY &amp; ABSTRACT
                </span>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {pub.shortDescription || pub.excerpt}
                </p>
              </div>
            )}

            {/* Complete Available Content (Sanitized Rich Text) */}
            {pub.content && (
              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans text-base sm:text-lg min-h-[140px]"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(pub.content),
                }}
              />
            )}

            {/* Embedded PDF Viewer if PDF is present */}
            {pub.pdfUrl && (
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    Document Preview
                  </span>
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#00B3FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View fullscreen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-slate-300 shadow-inner bg-slate-100">
                  <iframe
                    src={`${pub.pdfUrl}#toolbar=0`}
                    title={pub.title}
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}

            {/* CLOSING ARCHITECTURAL CONSULTATION BANNER */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#01153B] text-white space-y-6 shadow-xl border border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF6F00]">
                  RESEARCH &amp; ARCHITECTURE ADVISORY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Implement These Insights In Your Enterprise
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Looking to apply the patterns and architectures described in this technical publication? Schedule an exploratory session with our senior architects and data engineering team.
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
                  <span>All Insights &amp; Publications</span>
                </Link>
              </div>
            </div>

            {/* PREVIOUS & NEXT WHITE PAPERS NAVIGATION */}
            <div className="pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevWp ? (
                <Link
                  href={`/insights/white-papers/${prevWp.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#FF6F00] hover:bg-slate-50/50 transition-all group space-y-1 block"
                >
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 group-hover:text-[#FF6F00] transition-colors">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous White Paper
                  </span>
                  <h4 className="text-sm font-bold text-[#01153B] line-clamp-1 group-hover:text-[#FF6F00] transition-colors">
                    {prevWp.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextWp ? (
                <Link
                  href={`/insights/white-papers/${nextWp.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#FF6F00] hover:bg-slate-50/50 transition-all group space-y-1 text-right block sm:col-start-2"
                >
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-end gap-1.5 group-hover:text-[#FF6F00] transition-colors">
                    Next White Paper
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <h4 className="text-sm font-bold text-[#01153B] line-clamp-1 group-hover:text-[#FF6F00] transition-colors">
                    {nextWp.title}
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
