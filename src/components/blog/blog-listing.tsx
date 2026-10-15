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
  ArrowRight,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { BLOG_POSTS } from '@/data/blogs';
import { DynamicBlogPost, DynamicCategory } from '@/lib/supabase/blog-service';

interface BlogListingProps {
  baseRoute?: string; // '/insights/blogs' or '/blog-2'
  initialPosts?: DynamicBlogPost[];
  initialCategories?: DynamicCategory[];
}

export function BlogListing({
  baseRoute = '/insights/blogs',
  initialPosts,
  initialCategories,
}: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const posts = useMemo(() => {
    return initialPosts !== undefined ? initialPosts : BLOG_POSTS;
  }, [initialPosts]);


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
          1. HERO SECTION — EXPERT KNOWLEDGE. REAL-WORLD SOLUTIONS.
          ========================================================================= */}
      <section
        className="relative bg-[#01153B] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800"
        aria-label="Insights Blog Hero"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                OUR INSIGHTS
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Expert Knowledge.{' '}
                <span className="text-[#00B3FF] block mt-1">Real-World Solutions.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Explore our latest blogs, technical guides, and expert insights on databases, cloud,
                performance tuning, and modern data platforms.
              </p>
            </div>

            {/* Right Visual: 3D Technical Blog Document Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-[#031E4D]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Floating Orange BLOG Badge */}
                <div className="absolute top-4 right-4 bg-[#FF6F00] text-white px-3 py-1 rounded-lg text-xs font-mono font-black uppercase tracking-wider shadow-lg shadow-[#FF6F00]/30 flex items-center gap-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BLOG</span>
                </div>

                {/* Technical Document Preview Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-slate-700/80 text-xs font-mono text-slate-300">
                  <BookOpen className="w-4 h-4 text-[#00B3FF]" />
                  <span className="font-bold tracking-wide">ZOFTCORP ENGINEERING JOURNAL</span>
                </div>

                {/* Visual Stack Graphic */}
                <div className="my-5 p-4 rounded-xl bg-[#01153B] border border-cyan-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                    <span className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-cyan-400" />
                      <span>SQL Server Architecture</span>
                    </span>
                    <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">T-SQL</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00B3FF] to-cyan-300 w-3/4 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1">
                    <span className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-[#FF6F00]" />
                      <span>Azure SQL Managed Instance</span>
                    </span>
                    <span className="text-[10px] bg-amber-950 px-2 py-0.5 rounded border border-amber-800 text-amber-300">CLOUD</span>
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Publication Index</span>
                  </div>
                  <span className="text-[#00B3FF]">{posts.length} Published Articles</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. FILTER & SEARCH BAR SECTION
          ========================================================================= */}
      <section className="py-8 bg-white border-b border-slate-200/90" aria-label="Blog Filters">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all"
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
          3. BLOG POSTS LISTING GRID
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
              {/* FEATURED ARTICLE (SLIPSTREAM) */}
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
                          className="text-2xl sm:text-3xl font-extrabold text-[#01153B] leading-snug group-hover:text-[#00B3FF] transition-colors uppercase"
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
    </div>
  );
}
