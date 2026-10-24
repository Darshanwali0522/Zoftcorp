"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Pause,
  Layers,
  Sparkles,
  Server,
  Cloud,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { CASE_STUDIES, CaseStudy } from "@/data/case-studies";

const CASE_STUDY_ICONS: Record<string, React.ReactNode> = {
  "database-architecture-modernization": <Server className="w-5 h-5" />,
  "cloud-infrastructure-optimization": <Cloud className="w-5 h-5" />,
  "performance-investigation-engineering": <Zap className="w-5 h-5" />,
};

export const CaseStudiesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalStudies = CASE_STUDIES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalStudies);
  }, [totalStudies]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalStudies) % totalStudies);
  }, [totalStudies]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Autoplay effect with pause on hover, focus, and user play/pause toggle
  useEffect(() => {
    if (!isPlaying || isHovered || isFocused) return;

    // Check for prefers-reduced-motion
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
      aria-label="Case studies and whitepapers"
      className="relative w-full bg-[#01153B] text-white py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
      {/* Subtle Cyan Glow */}
      <div
        className="pointer-events-none absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#FF6F00]/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>CASE STUDIES &amp; WHITEPAPERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              CASE STUDIES &amp; Whitepapers
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed font-sans">
              Explore how we&apos;ve helped businesses improve performance, modernize infrastructure, reduce risk, and scale with confidence.
            </p>
          </div>

          {/* Carousel Interactive Controls (Desktop & Mobile) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Play/Pause Toggle */}
            <button
              type="button"
              onClick={togglePlay}
              className="p-2.5 rounded-lg bg-[#031E4D] border border-slate-750 text-slate-300 hover:text-white hover:border-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              aria-label={isPlaying ? "Pause automatic case study showcase" : "Play automatic case study showcase"}
              title={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Slide Index Badge */}
            <div
              className="px-3 py-1.5 rounded-lg bg-[#031E4D] border border-slate-750 font-mono text-xs font-semibold text-slate-300"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-[#00B3FF]">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-slate-500 mx-1">/</span>
              <span>{String(totalStudies).padStart(2, "0")}</span>
            </div>

            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-[#031E4D] border border-slate-750 text-slate-300 hover:text-white hover:border-[#00B3FF] hover:bg-[#031E4D]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-[#031E4D] border border-slate-750 text-slate-300 hover:text-white hover:border-[#00B3FF] hover:bg-[#031E4D]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* View All Insights Link */}
            <Link
              href="/insights/case-studies"
              className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop Showcase View: 3-Card Interactive Presentation */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
          {CASE_STUDIES.map((study: CaseStudy, idx: number) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={study.slug}
                onClick={() => goToSlide(idx)}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? "bg-[#031E4D] border-[#00B3FF] shadow-2xl shadow-[#00B3FF]/10 scale-[1.02] z-20"
                    : "bg-[#031E4D]/60 border-slate-800 hover:border-slate-700 hover:bg-[#031E4D]/80 scale-100 z-10"
                }`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${totalStudies}: ${study.title}`}
              >
                {/* Active Indicator Top Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 flex items-center justify-center shrink-0">
                      {CASE_STUDY_ICONS[study.slug] || <Layers className="w-4 h-4" />}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF6F00] bg-[#FF6F00]/10 px-2 py-0.5 rounded border border-[#FF6F00]/30">
                      <Sparkles className="w-3 h-3" />
                      FEATURED
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  )}
                </div>

                {/* Content Body */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00B3FF] transition-colors font-sans leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal">
                    {study.excerpt}
                  </p>

                  {/* Outcome Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-[#01153B]/80 border border-slate-800/80 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase text-[#00B3FF] font-semibold tracking-wider">
                      VALIDATED OUTCOME
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium text-slate-300 bg-[#01153B] px-2.5 py-1 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href="/insights/case-studies"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-mono text-slate-500 uppercase">
                    STAGE 04 // RESULTS
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
              {CASE_STUDIES.map((study: CaseStudy, idx: number) => (
                <div
                  key={study.slug}
                  className="w-full shrink-0 px-1"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${totalStudies}: ${study.title}`}
                >
                  <div className="rounded-2xl p-6 sm:p-8 bg-[#031E4D] border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 flex items-center justify-center shrink-0">
                          {CASE_STUDY_ICONS[study.slug] || <Layers className="w-4 h-4" />}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                          {study.industry}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF6F00] bg-[#FF6F00]/10 px-2 py-0.5 rounded border border-[#FF6F00]/30">
                        CASE STUDY 0{idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans leading-snug">
                        {study.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                        {study.excerpt}
                      </p>

                      <div className="p-4 rounded-xl bg-[#01153B] border border-slate-800 space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-[#00B3FF] font-semibold tracking-wider">
                          VALIDATED OUTCOME
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                          {study.outcome}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono font-medium text-slate-300 bg-[#01153B] px-2.5 py-1 rounded border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <Link
                        href="/insights/case-studies"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-white transition-colors"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <span className="text-[11px] font-mono text-slate-500 uppercase">
                        STAGE 04 // RESULTS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dot Navigation */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {CASE_STUDIES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                  activeIndex === idx
                    ? "w-8 bg-[#00B3FF]"
                    : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={activeIndex === idx ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
