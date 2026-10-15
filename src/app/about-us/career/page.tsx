'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  MessageSquare,
  Users,
  Lightbulb,
  Palette,
  Briefcase,
} from 'lucide-react';
import {
  CAREER_HERO,
  CAREER_TECHNOLOGIES,
  CAREER_CONTRIBUTION_THEMES,
  CAREER_VALUES,
  TECHNICAL_DEPTH_STACK,
  CAREER_OPENINGS_STATE,
} from '@/data/career';

export default function CareerPage() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const activeTech = CAREER_TECHNOLOGIES[activeTechIndex];

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800/80">
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
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to About Us</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{CAREER_HERO.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Build Technology That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                  Matters.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                {CAREER_HERO.copy}
              </p>
            </div>

            {/* Right Side Editorial Typographic Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Sparkles className="w-4 h-4" />
                    <span>WORK ENVIRONMENT</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-800">
                    CULTIVATING IMPACT
                  </span>
                </div>

                {/* Conceptual Nodes Flow */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#FF6F00] font-bold">01 / PEOPLE</span>
                    <span className="text-[11px] text-slate-400 font-sans">Curious Technologists</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">+</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#00B3FF] font-bold">02 / IDEAS</span>
                    <span className="text-[11px] text-slate-400 font-sans">System-Level Thinking</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">+</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-sky-300 font-bold">03 / TECHNOLOGY</span>
                    <span className="text-[11px] text-slate-400 font-sans">Data, Cloud & AI</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-[#00B3FF]/40 text-[#00B3FF] font-bold text-center font-sans tracking-wider">
                    PRACTICAL TECHNICAL IMPACT
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>BOUTIQUE ENVIRONMENT</span>
                  <span className="text-[#00B3FF]">ENGINEERING DEPTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                THOUGHTFUL ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Good Technology Starts With Good Thinking.
              </h2>
            </div>

            {/* Right Supporting Copy */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans">
                ZOFT works across complex technology environments where understanding the problem
                matters as much as choosing the technology.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs font-bold text-slate-800">
                <div className="p-2.5 rounded bg-white border border-slate-200 hover:border-[#00B3FF]/30 transition-colors">
                  01 / ASK BETTER QUESTIONS
                </div>
                <div className="p-2.5 rounded bg-white border border-slate-200 hover:border-[#00B3FF]/30 transition-colors">
                  02 / UNDERSTAND THE SYSTEM
                </div>
                <div className="p-2.5 rounded bg-white border border-slate-200 hover:border-[#00B3FF]/30 transition-colors">
                  03 / BUILD PRACTICALLY
                </div>
                <div className="p-2.5 rounded bg-white border border-slate-200 hover:border-[#00B3FF]/30 transition-colors">
                  04 / KEEP IMPROVING
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU CAN WORK ON (INTERACTIVE EXPLORER) */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#00B3FF]" />
              TECHNOLOGY EXPLORER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Explore the Technology Around ZOFT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Navigation Tabs */}
            <div
              className="lg:col-span-5 space-y-2.5"
              role="tablist"
              aria-label="Technology areas around ZOFT"
            >
              {CAREER_TECHNOLOGIES.map((tech, index) => {
                const isActive = activeTechIndex === index;
                return (
                  <button
                    key={tech.id}
                    id={`tech-tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tech-panel-${index}`}
                    onClick={() => setActiveTechIndex(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                      isActive
                        ? 'bg-[#01153B] text-white border-[#00B3FF]/40 shadow-lg'
                        : 'bg-slate-50 text-slate-800 border-slate-200/90 hover:border-[#00B3FF]/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                          isActive
                            ? 'bg-[#00B3FF]/20 text-[#00B3FF] border border-[#00B3FF]/30'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {tech.number}
                      </span>
                      <span className="text-base font-bold font-sans tracking-tight">
                        {tech.title}
                      </span>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#00B3FF] translate-x-1' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div className="lg:col-span-7">
              <div
                id={`tech-panel-${activeTechIndex}`}
                role="tabpanel"
                aria-labelledby={`tech-tab-${activeTechIndex}`}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm min-h-[380px] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="font-mono text-xs font-bold text-[#01153B] bg-[#00B3FF]/10 px-3 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      DOMAIN {activeTech.number}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      {activeTech.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {activeTech.title}
                  </h3>

                  <p className="text-lg text-slate-800 font-semibold font-sans leading-relaxed">
                    {activeTech.description}
                  </p>

                  <p className="text-base text-slate-600 font-sans leading-relaxed pt-2">
                    {activeTech.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
                  TECHNICAL SPECTRUM // ZOFT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW PEOPLE CAN CONTRIBUTE */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Users className="w-3.5 h-3.5 text-[#00B3FF]" />
              CONTRIBUTION THEMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Bring Your Perspective to the Work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAREER_CONTRIBUTION_THEMES.map((theme) => (
              <div
                key={theme.number}
                className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF]/30 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#01153B] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      {theme.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {theme.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-sans uppercase">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {theme.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  CONTRIBUTION THEME
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL DEPTH */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Layers className="w-3.5 h-3.5 text-[#00B3FF]" />
              FULL-STACK DEPTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Depth Matters.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              ZOFT&apos;s work spans multiple connected layers of modern technology—from strategy
              and architecture down to database query buffers and cloud infrastructure nodes.
            </p>
          </div>

          {/* Visual Stack Diagram */}
          <div className="max-w-2xl mx-auto space-y-2 font-mono text-xs">
            {TECHNICAL_DEPTH_STACK.map((layer, idx) => (
              <React.Fragment key={layer}>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-center font-bold text-slate-900 font-sans flex items-center justify-between px-6 shadow-sm hover:border-[#00B3FF]/30 transition-colors">
                  <span className="text-[#00B3FF] font-mono text-xs">0{idx + 1}</span>
                  <span>{layer}</span>
                  <span className="text-slate-400 font-mono text-[10px]">LAYER</span>
                </div>
                {idx < TECHNICAL_DEPTH_STACK.length - 1 && (
                  <div className="text-center text-slate-400 py-0.5">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEARNING + CURIOSITY */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <Lightbulb className="w-3.5 h-3.5 text-[#00B3FF]" />
                TECHNICAL CURIOSITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Stay Curious About How Things Work.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Technology evolves constantly. The most meaningful work comes from asking better
                questions, understanding system internals, exploring emerging paradigms, and improving
                technical solutions over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VALUES */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Shield className="w-3.5 h-3.5 text-[#00B3FF]" />
              COMPANY VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Built Around Values That Matter.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAREER_VALUES.map((val) => (
              <div
                key={val.name}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF]/30 transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {val.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-400">
                  FOUNDATIONAL VALUE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ZOFTSTUDIO CONNECTION */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <Palette className="w-3.5 h-3.5 text-[#00B3FF]" />
                DIGITAL EXPERIENCE DISCIPLINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
                Technology Meets Digital Experience.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Through ZoftStudio, we craft bold, consistent digital experiences that blend
                creativity with enterprise-grade design discipline.
              </p>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right">
              <Link
                href="/zoftstudio"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore ZoftStudio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CAREER OPPORTUNITIES — CONTENT-READY STATE */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-[#00B3FF]" />
              CAREER OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              {CAREER_OPENINGS_STATE.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              {CAREER_OPENINGS_STATE.copy}
            </p>
          </div>

          {/* Content-Ready State Container */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-14 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#00B3FF]/10 text-[#01153B] flex items-center justify-center mx-auto border border-[#00B3FF]/20">
              <Briefcase className="w-6 h-6 text-[#00B3FF]" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 font-sans tracking-tight">
              CURRENT OPENINGS
            </h3>

            <p className="text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
              {CAREER_OPENINGS_STATE.emptyNotice}
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Express Your Interest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EXPRESSION OF INTEREST */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Think You Could Contribute?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            If your experience aligns with the kind of technology work ZOFT does, start a
            conversation with us.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-md shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Contact ZOFT
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CAREER + ABOUT US NAVIGATION */}
      <section className="relative bg-white text-slate-900 py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/about-us/company-story"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Company Story
              </h3>
              <p className="text-xs text-slate-600">Understand where we come from.</p>
            </Link>

            <Link
              href="/about-us/why-zoftcorp"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Why Zoftcorp?
              </h3>
              <p className="text-xs text-slate-600">Understand what sets us apart.</p>
            </Link>

            <Link
              href="/about-us/partnerships"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Partnerships
              </h3>
              <p className="text-xs text-slate-600">Explore our technology ecosystem.</p>
            </Link>

            <div className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-2">
              <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-widest bg-[#031E4D] px-2 py-0.5 rounded border border-slate-800 inline-block">
                CURRENT PAGE
              </span>
              <h3 className="text-lg font-bold text-white font-sans">Career</h3>
              <p className="text-xs text-slate-300">Opportunities and technology work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. VISUAL BREAK */}
      <section className="relative bg-[#01153B] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            “Curiosity Builds Perspective. Perspective Builds Better Technology.”
          </blockquote>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section
        aria-label="Build Whats Next With ZOFT"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Build What&apos;s Next With ZOFT.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Have the experience, curiosity, or technical perspective to contribute? Let&apos;s
            start a conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore ZOFT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
