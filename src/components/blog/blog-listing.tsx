'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Database,
  Cloud,
  Settings,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  FileText,
  Compass,
  Terminal,
  MessageSquare,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { BLOG_POSTS } from '@/data/blogs';
import {
  CASE_STUDIES,
  CASE_STUDY_FRAMEWORK,
} from '@/data/case-studies';
import { DynamicBlogPost, DynamicCategory } from '@/lib/supabase/blog-service';
import { DynamicPublication, PublicationType } from '@/types/publications';

interface BlogListingProps {
  baseRoute?: string; // '/insights/blogs'
  initialPosts?: DynamicBlogPost[];
  initialCategories?: DynamicCategory[];
  initialPublications?: DynamicPublication[];
}

export function BlogListing({
  baseRoute = '/insights/blogs',
  initialPosts,
  initialCategories,
  initialPublications,
}: BlogListingProps) {
  // Blog section filter states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Publication (Case Studies & White Papers) filter state
  const [activePubType, setActivePubType] = useState<'all' | PublicationType>('all');

  const posts = useMemo(() => {
    return initialPosts !== undefined ? initialPosts : BLOG_POSTS;
  }, [initialPosts]);

  // Publications with static CASE_STUDIES fallback if none provided
  const publications = useMemo<DynamicPublication[]>(() => {
    if (initialPublications && initialPublications.length > 0) {
      return initialPublications;
    }
    return CASE_STUDIES.map((study) => ({
      id: `static-${study.slug}`,
      slug: study.slug,
      title: study.title,
      publicationType: 'case_study' as const,
      publication_type: 'case_study' as const,
      typeLabel: 'Case Study' as const,
      shortDescription: study.excerpt,
      excerpt: study.excerpt,
      content: '',
      category: study.industry,
      image: study.image || '/images/consulting/cloud-database-strategy.jpg',
      author: 'Zoftcorp Engineering Team',
      publicationDate: '2026-10-10',
      publishedAt: '2026-10-10T12:00:00.000Z',
      formattedDate: 'October 10, 2026',
      readingTime: '5 min read',
      status: 'published' as const,
      createdAt: '2026-10-10T12:00:00.000Z',
      isStaticFallback: true,
    }));
  }, [initialPublications]);

  const filteredPublications = useMemo(() => {
    if (activePubType === 'all') return publications;
    return publications.filter((p) => p.publicationType === activePubType);
  }, [publications, activePubType]);

  const caseStudiesCount = useMemo(() => {
    return publications.filter((p) => p.publicationType === 'case_study').length;
  }, [publications]);

  const whitePapersCount = useMemo(() => {
    return publications.filter((p) => p.publicationType === 'white_paper').length;
  }, [publications]);

  const categories = useMemo(() => {
    if (initialCategories && initialCategories.length > 0) {
      return initialCategories;
    }
    return [
      { id: 'all', label: 'All Posts' },
      { id: 'sql-server', label: 'SQL Server' },
      { id: 'cloud-migrations', label: 'Azure' },
      { id: 'database-administration', label: 'Database Administration' },
    ];
  }, [initialCategories]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === 'all' || post.categorySlug === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return filteredPosts.find((p) => p.featured) || (filteredPosts.length > 0 ? filteredPosts[0] : null);
  }, [filteredPosts]);

  const supportingPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
  }, [filteredPosts, featuredPost]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* =========================================================================
          1. HERO SECTION — CASE STUDIES & BLOGS
          ========================================================================= */}
      <section
        className="relative bg-[#01153B] text-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-slate-800"
        aria-label="Insights Hero"
      >
        {/* Ambient glow effects */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[400px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        {/* Technical mesh background */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                INSIGHTS &amp; PERSPECTIVES
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Case Studies, White Papers &amp;{' '}
                <span className="text-[#00B3FF] block mt-1">Technical Blogs</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Real-world engineering case studies, white papers, validated architectures, and deep technical articles across databases, cloud platforms, and performance tuning.
              </p>

              {/* Fast Jump Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#00B3FF]/20"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Explore Case Studies and White Papers ({publications.length})</span>
                </a>
                <a
                  href="#blogs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-200"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#00B3FF]" />
                  <span>Explore Blogs ({posts.length})</span>
                </a>
              </div>
            </div>

            {/* Right Visual: Architecture Overview Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#FF6F00] text-white px-3 py-1 rounded-lg text-xs font-mono font-black uppercase tracking-wider shadow-lg shadow-[#FF6F00]/30 flex items-center gap-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>JOURNAL</span>
                </div>

                <div className="flex items-center gap-2 pb-4 border-b border-slate-700/80 text-xs font-mono text-slate-300">
                  <Terminal className="w-4 h-4 text-[#00B3FF]" />
                  <span className="font-bold tracking-wide">ZOFTCORP KNOWLEDGE INDEX</span>
                </div>

                <div className="my-5 p-4 rounded-xl bg-[#01153B] border border-cyan-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#00B3FF]" />
                      <span>Case Studies &amp; White Papers</span>
                    </span>
                    <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 text-cyan-300 font-bold">
                      {publications.length} {publications.length === 1 ? 'ITEM' : 'ITEMS'}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00B3FF] to-cyan-300 w-full rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#FF6F00]" />
                      <span>Technical Articles &amp; Guides</span>
                    </span>
                    <span className="text-[10px] bg-amber-950 px-2 py-0.5 rounded border border-amber-800 text-amber-300 font-bold">
                      {posts.length} {posts.length === 1 ? 'ARTICLE' : 'ARTICLES'}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Peer-Reviewed Engineering Index</span>
                  </div>
                  <span className="text-[#00B3FF]">Unified Journal</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. CASE STUDIES AND WHITE PAPERS SECTION (Dynamic Supabase Integration)
          ========================================================================= */}
      <section id="case-studies" className="relative bg-white text-[#01153B] py-14 sm:py-16 border-b border-slate-200/90 scroll-mt-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3">
                <FileText className="w-3.5 h-3.5 text-[#00B3FF]" />
                ENGINEERING PERSPECTIVES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans">
                Case Studies and White Papers
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-2 font-sans leading-relaxed">
                Explore verified Zoftcorp technical engagements and white papers covering architecture, database modernization, cloud optimization, and query performance.
              </p>
            </div>

            {/* Publication Type Filters: All, Case Studies, White Papers */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActivePubType('all')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                  activePubType === 'all'
                    ? 'bg-[#01153B] text-white shadow-md shadow-[#01153B]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={activePubType === 'all'}
              >
                <Layers className="w-4 h-4 text-[#00B3FF]" />
                <span>All ({publications.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePubType('case_study')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                  activePubType === 'case_study'
                    ? 'bg-[#01153B] text-white shadow-md shadow-[#01153B]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={activePubType === 'case_study'}
              >
                <Database className="w-4 h-4 text-[#00B3FF]" />
                <span>Case Studies ({caseStudiesCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePubType('white_paper')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                  activePubType === 'white_paper'
                    ? 'bg-[#01153B] text-white shadow-md shadow-[#01153B]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={activePubType === 'white_paper'}
              >
                <FileText className="w-4 h-4 text-[#FF6F00]" />
                <span>White Papers ({whitePapersCount})</span>
              </button>
            </div>
          </div>

          {/* Publications Grid */}
          {filteredPublications.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4">
              <FileText className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-xl font-bold text-[#01153B]">
                {activePubType === 'white_paper'
                  ? 'No White Papers Published Yet'
                  : 'No Publications Found'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {activePubType === 'white_paper'
                  ? 'Our architectural white papers are being prepared by the engineering team. Explore our verified Case Studies in the meantime.'
                  : 'No records match the selected publication filter.'}
              </p>
              <button
                type="button"
                onClick={() => setActivePubType('all')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#00B3FF] hover:bg-cyan-400 rounded-xl transition-colors"
              >
                View All Publications
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredPublications.map((pub) => {
                const staticStudy = CASE_STUDIES.find((cs) => cs.slug === pub.slug);
                const isWhitePaper = pub.publicationType === 'white_paper';
                const pubHref = isWhitePaper
                  ? `/insights/white-papers/${pub.slug}`
                  : `/insights/case-studies/${pub.slug}`;

                return (
                  <div
                    key={pub.slug}
                    className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-[#00B3FF]/50 transition-all duration-300 group"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                            isWhitePaper
                              ? 'text-[#FF6F00] bg-[#FF6F00]/10 border-[#FF6F00]/20'
                              : 'text-[#00B3FF] bg-[#00B3FF]/10 border-[#00B3FF]/20'
                          }`}
                        >
                          {isWhitePaper ? 'WHITE PAPER' : pub.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {isWhitePaper ? 'TECHNICAL WHITEPAPER' : 'ENGINEERING CASE'}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors leading-snug">
                          <Link href={pubHref}>
                            {pub.title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                          {pub.shortDescription || pub.excerpt}
                        </p>
                      </div>

                      {/* Display structured Challenge/Solution/Outcome if static fallback, or metadata highlight */}
                      {staticStudy ? (
                        <div className="space-y-3 pt-3 border-t border-slate-200 text-xs font-sans">
                          <div className="bg-white p-3 rounded-xl border border-slate-200/80 space-y-1">
                            <span className="font-mono font-bold text-slate-500 uppercase tracking-wider block text-[10px]">
                              The Challenge
                            </span>
                            <p className="text-slate-700 leading-relaxed line-clamp-2">
                              {staticStudy.challenge}
                            </p>
                          </div>

                          <div className="bg-white p-3 rounded-xl border border-slate-200/80 space-y-1">
                            <span className="font-mono font-bold text-[#00B3FF] uppercase tracking-wider block text-[10px]">
                              Engineering Solution
                            </span>
                            <p className="text-slate-700 leading-relaxed line-clamp-2">
                              {staticStudy.solution}
                            </p>
                          </div>

                          <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60 space-y-1">
                            <span className="font-mono font-bold text-emerald-700 uppercase tracking-wider block text-[10px]">
                              Validated Outcome
                            </span>
                            <p className="text-emerald-950 font-medium leading-relaxed line-clamp-2">
                              {staticStudy.outcome}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 pt-3 border-t border-slate-200 text-xs font-sans">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-2">
                            <div className="flex items-center justify-between text-slate-500 font-mono text-[11px]">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-[#00B3FF]" />
                                <span>{pub.formattedDate}</span>
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-[#FF6F00]" />
                                <span>{pub.readingTime}</span>
                              </span>
                            </div>
                            <p className="text-slate-700 text-xs leading-relaxed">
                              By <span className="font-semibold text-[#01153B]">{pub.author}</span> • Category:{' '}
                              <span className="font-medium text-[#00B3FF]">{pub.category}</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Technologies pills (if available on static study) */}
                      {staticStudy?.technologies && staticStudy.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {staticStudy.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        href={pubHref}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#01153B] transition-colors"
                      >
                        <span>Read {isWhitePaper ? 'White Paper' : 'Case Study'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="text-xs font-mono text-slate-500 hover:text-[#01153B] transition-colors"
                      >
                        <span>Discuss Architecture</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Compact Case Study Methodology Framework Flow */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#01153B] text-white border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#00B3FF]" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Case Studies &amp; White Papers Methodology
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#00B3FF]">
                ZOFTCORP ENGINEERING FRAMEWORK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CASE_STUDY_FRAMEWORK.map((stage) => (
                <div key={stage.number} className="p-4 rounded-xl bg-[#031E4D]/80 border border-slate-750 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/20">
                      STAGE {stage.number}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-sans">{stage.title}</h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. BLOGS SECTION (Preserved Section Heading & Dynamic Posts)
          ========================================================================= */}
      <section id="blogs" className="py-14 sm:py-16 bg-[#FAFAFA] border-b border-slate-200/90 scroll-mt-20" aria-label="Technical Blogs">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              TECHNICAL ARTICLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans">
              Blogs
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-sans leading-relaxed">
              Explore our latest blogs, technical guides, and expert insights on databases, cloud, performance tuning, and modern data platforms.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat.id;
                const isSqlServer = cat.id === 'sql-server';
                const isAzure = cat.id === 'cloud-migrations';
                const isDba = cat.id === 'database-administration';

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                      isSelected
                        ? 'bg-[#01153B] text-white shadow-md shadow-[#01153B]/20'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {isSqlServer && <Database className="w-4 h-4 text-[#FF6F00]" />}
                    {isAzure && <Cloud className="w-4 h-4 text-[#00B3FF]" />}
                    {isDba && <Settings className="w-4 h-4 text-emerald-600" />}
                    {!isSqlServer && !isAzure && !isDba && cat.id !== 'all' && (
                      <BookOpen className="w-4 h-4 text-[#00B3FF]" />
                    )}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blogs..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all shadow-2xs"
                aria-label="Search blogs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BLOG POSTS LISTING GRID
          ========================================================================= */}
      <section className="py-16 md:py-20" aria-label="Blog Articles">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-8 space-y-4">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-xl font-bold text-[#01153B]">No Articles Found</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                No articles match your current search or category filter. Reset filters to view all available publications.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00B3FF] hover:bg-cyan-400 rounded-xl transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {/* FEATURED ARTICLE */}
              {featuredPost && (
                <article
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  aria-labelledby="featured-post-title"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Featured Image */}
                    <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-950">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#00B3FF] text-[#01153B] px-3.5 py-1 rounded-lg text-xs font-mono font-extrabold uppercase tracking-wider shadow-md">
                          FEATURED
                        </span>
                      </div>
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    </div>

                    {/* Featured Content */}
                    <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Meta Category & Date */}
                        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                          <span className="inline-flex items-center gap-1.5 font-bold text-[#00B3FF]">
                            <Settings className="w-3.5 h-3.5 text-[#00B3FF]" />
                            <span>{featuredPost.category}</span>
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1.5 text-slate-500">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{featuredPost.formattedDate}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h2
                          id="featured-post-title"
                          className="text-2xl sm:text-3xl font-extrabold text-[#01153B] leading-snug group-hover:text-[#00B3FF] transition-colors"
                        >
                          <Link href={`${baseRoute}/${featuredPost.slug}`}>
                            {featuredPost.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <Link
                          href={`${baseRoute}/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm text-white bg-[#FF6F00] hover:bg-[#E66300] font-semibold rounded-xl shadow-lg shadow-[#FF6F00]/25 transition-all duration-200 group/btn"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* TWO SUPPORTING ARTICLES (2-COLUMN GRID) */}
              {supportingPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {supportingPosts.map((post) => {
                    const isSqlServer = post.categorySlug === 'sql-server';
                    const IconComp = isSqlServer ? Database : Cloud;
                    const accentColor = isSqlServer ? 'text-[#FF6F00]' : 'text-[#00B3FF]';

                    return (
                      <article
                        key={post.slug}
                        className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
                      >
                        <div className="space-y-5">
                          {/* Top Thumbnail Image */}
                          <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-950">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>

                          {/* Meta Category & Date */}
                          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                            <span className={`inline-flex items-center gap-1.5 font-bold ${accentColor}`}>
                              <IconComp className="w-3.5 h-3.5" />
                              <span>{post.category}</span>
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center gap-1.5 text-slate-500">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{post.formattedDate}</span>
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-[#01153B] leading-snug group-hover:text-[#00B3FF] transition-colors">
                            <Link href={`${baseRoute}/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-slate-600 leading-relaxed font-normal">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Text Link */}
                        <div className="pt-2">
                          <Link
                            href={`${baseRoute}/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#00B3FF] hover:text-[#01153B] transition-colors group/link"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* BOTTOM VIEW ALL BLOGS CONTROL */}
              <div className="text-center pt-8">
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#01153B] text-[#01153B] hover:bg-[#01153B] hover:text-white font-bold text-sm tracking-wide transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>View All Blogs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================================
          5. FINAL CTA — HAVE A TECHNOLOGY CHALLENGE WORTH DISCUSSING?
          ========================================================================= */}
      <section
        aria-label="Have a Technology Challenge"
        className="relative bg-[#01153B] text-white py-16 sm:py-20 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            DISCUSS A CHALLENGE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
            Have a Technology Challenge Worth Discussing?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto font-normal">
            Start with the problem, understand the technical context, and explore what a practical engineering approach could look like.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to Zoftcorp
            </Link>
            <Link
              href="/about-us/vision-mission"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200 border border-slate-700 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Our Vision &amp; Mission</span>
              <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
