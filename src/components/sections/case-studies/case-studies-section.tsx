"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Pause,
  Layers,
  Sparkles,
  Server,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { UnifiedInsight } from "@/lib/insights-aggregator";

const FALLBACK_INSIGHTS: UnifiedInsight[] = [
  {
    id: "case-study-database-architecture-modernization",
    slug: "database-architecture-modernization",
    type: "case-study",
    typeLabel: "Case Study",
    title: "Database Architecture & Modernization",
    excerpt: "Database architecture, modernization, performance, and operational challenges across mission-critical systems.",
    category: "Enterprise Databases",
    publishedAt: "2026-10-10T12:00:00.000Z",
    formattedDate: "October 10, 2026",
    href: "/insights/case-studies/database-architecture-modernization",
    image: "/images/consulting/cloud-database-strategy.jpg",
    technologies: ["SQL Server", "PostgreSQL", "MySQL"],
    readingTime: "6 min read",
  },
  {
    id: "blog-failover-cluster",
    slug: "how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream",
    type: "blog",
    typeLabel: "Blog Post",
    title: "How Zoftcorp Ease Your Failover Cluster Installation with Slipstream",
    excerpt: "Discover how Slipstream streamlines SQL Server failover clustering with integrated service packs.",
    category: "Database Architecture",
    publishedAt: "2026-09-30T17:09:21.000Z",
    formattedDate: "September 30, 2026",
    href: "/insights/blogs/how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream",
    image: "/images/blogs/failover-cluster-slipstream.jpg",
    readingTime: "5 min read",
  },
  {
    id: "case-study-cloud-infrastructure-optimization",
    slug: "cloud-infrastructure-optimization",
    type: "case-study",
    typeLabel: "Case Study",
    title: "Cloud Infrastructure & Optimization",
    excerpt: "Cloud architecture, infrastructure, modernization, and optimization for resilient enterprise workloads.",
    category: "Cloud Platforms",
    publishedAt: "2026-09-20T12:00:00.000Z",
    formattedDate: "September 20, 2026",
    href: "/insights/case-studies/cloud-infrastructure-optimization",
    image: "/images/consulting/cloud-finops.jpg",
    technologies: ["AWS", "Azure", "Google Cloud"],
    readingTime: "5 min read",
  },
];

interface CaseStudiesSectionProps {
  items?: UnifiedInsight[];
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ items = FALLBACK_INSIGHTS }) => {
  const displayItems = items.length > 0 ? items.slice(0, 3) : FALLBACK_INSIGHTS;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalItems = displayItems.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Autoplay effect with pause on hover, focus, and user play/pause toggle
  useEffect(() => {
    if (!isPlaying || isHovered || isFocused) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, nextSlide]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  return (
    <section
      id="case-studies"
      aria-label="Case Studies, White Papers & Blogs"
      className="relative w-full bg-[#01153B] text-white py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Ambient Lighting Accents */}
      <div
        className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-10 w-[450px] h-[450px] bg-[#FF6F00]/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>INSIGHTS // CASE STUDIES, WHITE PAPERS &amp; BLOGS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Case Studies, White Papers &amp; Blogs
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed font-sans">
              Explore our latest enterprise case studies, white papers, technical publications, and architectural investigations in production.
            </p>
          </div>

          {/* Carousel Interactive Controls (Desktop & Mobile) + Prominent View All Link */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Play/Pause Toggle */}
            <button
              type="button"
              onClick={togglePlay}
              className="p-2.5 rounded-lg bg-[#031E4D] border border-slate-700 text-slate-300 hover:text-white hover:border-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              aria-label={isPlaying ? "Pause automatic showcase" : "Play automatic showcase"}
              title={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Slide Index Badge */}
            <div
              className="px-3 py-1.5 rounded-lg bg-[#031E4D] border border-slate-700 font-mono text-xs font-semibold text-slate-300"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-[#00B3FF]">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-slate-500 mx-1">/</span>
              <span>{String(totalItems).padStart(2, "0")}</span>
            </div>

            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-[#031E4D] border border-slate-700 text-slate-300 hover:text-white hover:border-[#00B3FF] hover:bg-[#031E4D]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-[#031E4D] border border-slate-700 text-slate-300 hover:text-white hover:border-[#00B3FF] hover:bg-[#031E4D]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              aria-label="Next item"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Clear "View All" Link Leading to Combined Insights Page */}
            <Link
              href="/insights/blogs"
              className="inline-flex items-center gap-1.5 ml-2 px-3.5 py-2 rounded-lg bg-[#031E4D] hover:bg-[#00B3FF]/20 border border-slate-700 hover:border-[#00B3FF] text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] transition-all"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop Showcase View: 3-Card Interactive Presentation */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
          {displayItems.map((item: UnifiedInsight, idx: number) => {
            const isActive = activeIndex === idx;
            const isCaseStudy = item.type === "case-study";

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? "bg-[#031E4D] border-[#00B3FF] shadow-2xl shadow-[#00B3FF]/15 scale-[1.02] z-20"
                    : "bg-[#031E4D]/70 border-slate-800 hover:border-slate-700 hover:bg-[#031E4D]/90 scale-100 z-10"
                } hover:-translate-y-1 hover:border-[#00B3FF]/60 hover:shadow-xl`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${totalItems}: ${item.title}`}
              >
                {/* Top Tag & Type Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                          isCaseStudy
                            ? "bg-[#00B3FF]/15 text-[#00B3FF] border-[#00B3FF]/30"
                            : "bg-[#FF6F00]/15 text-[#FF6F00] border-[#FF6F00]/30"
                        }`}
                      >
                        {isCaseStudy ? <Server className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                        {item.typeLabel}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    {isActive ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
                        <Sparkles className="w-3 h-3" />
                        LATEST
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Optional Image with Fallback Branded Visual (no broken images) */}
                  {item.image ? (
                    <Link
                      href={item.href}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="block relative w-full h-36 rounded-xl overflow-hidden mb-4 border border-slate-700/60 focus:outline-none"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  ) : null}

                  {/* Metadata Row: Date & Reading Time */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.formattedDate}
                    </span>
                    {item.readingTime && (
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {item.readingTime}
                      </span>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00B3FF] transition-colors font-sans leading-snug line-clamp-2">
                      <Link
                        href={item.href}
                        className="hover:underline focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                      >
                        {item.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Technologies or Details (for case studies) */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono font-medium text-slate-300 bg-[#01153B] px-2.5 py-1 rounded border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded py-1 px-0.5"
                  >
                    <span>{isCaseStudy ? "View Case Study" : "Read Article"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-mono text-slate-500 uppercase">
                    {isCaseStudy ? "CASE STUDY" : "BLOG POST"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet View: Touch-Friendly Carousel Display */}
        <div
          className="block lg:hidden w-full relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {displayItems.map((item: UnifiedInsight, idx: number) => {
                const isCaseStudy = item.type === "case-study";

                return (
                  <div
                    key={item.id}
                    className="w-full shrink-0 px-1"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${totalItems}: ${item.title}`}
                  >
                    <div className="rounded-2xl p-6 sm:p-8 bg-[#031E4D] border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                                isCaseStudy
                                  ? "bg-[#00B3FF]/15 text-[#00B3FF] border-[#00B3FF]/30"
                                  : "bg-[#FF6F00]/15 text-[#FF6F00] border-[#FF6F00]/30"
                              }`}
                            >
                              {isCaseStudy ? <Server className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                              {item.typeLabel}
                            </span>
                            <span className="font-mono text-xs text-slate-400">
                              {item.category}
                            </span>
                          </div>

                          <span className="text-[11px] font-mono text-slate-500">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Mobile Image */}
                        {item.image ? (
                          <Link
                            href={item.href}
                            tabIndex={-1}
                            aria-hidden="true"
                            className="block relative w-full h-40 rounded-xl overflow-hidden mb-4 border border-slate-700/60 focus:outline-none"
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </Link>
                        ) : null}

                        {/* Date & Reading Time */}
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            {item.formattedDate}
                          </span>
                          {item.readingTime && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-500" />
                              {item.readingTime}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans leading-snug">
                            <Link
                              href={item.href}
                              className="hover:text-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                            >
                              {item.title}
                            </Link>
                          </h3>

                          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                            {item.excerpt}
                          </p>

                          {item.technologies && item.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {item.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[11px] font-mono font-medium text-slate-300 bg-[#01153B] px-2.5 py-1 rounded border border-slate-800"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                        >
                          <span>{isCaseStudy ? "View Case Study" : "Read Article"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <span className="text-[11px] font-mono text-slate-500 uppercase">
                          {isCaseStudy ? "CASE STUDY" : "BLOG POST"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Dot Navigation */}
          <div className="flex items-center justify-center gap-1 pt-6">
            {displayItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className="min-w-[28px] min-h-[28px] p-2 flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-[#00B3FF] cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={activeIndex === idx ? "true" : undefined}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-200 ${
                    activeIndex === idx
                      ? "w-8 bg-[#00B3FF]"
                      : "w-2 bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
