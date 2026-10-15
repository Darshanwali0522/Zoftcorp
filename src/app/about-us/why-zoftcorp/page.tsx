'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  CheckCircle2,
  Target,
  Users,
  Layers,
  Sparkles,
  MessageSquare,
  Headphones,
} from 'lucide-react';
import {
  WHY_ZOFT_HERO,
  WHY_ZOFT_REASONS,
  WHY_ZOFT_EXPERTISE,
  WHY_ZOFT_CONTINUITY,
} from '@/data/why-zoftcorp';

export default function WhyZoftcorpPage() {
  const [activeReasonIndex, setActiveReasonIndex] = useState(0);

  const activeReason = WHY_ZOFT_REASONS[activeReasonIndex];

  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#FF6F00] bg-[#FF6F00]/10 border border-[#FF6F00]/20">
                <Shield className="w-3.5 h-3.5" />
                <span>{WHY_ZOFT_HERO.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                {WHY_ZOFT_HERO.h1}{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00] mt-1">
                  {WHY_ZOFT_HERO.subheadline}
                </span>
              </h1>

              <blockquote className="border-l-2 border-[#00B3FF] pl-4 py-1 text-slate-200 text-lg sm:text-xl font-sans italic font-normal leading-relaxed">
                &ldquo;{WHY_ZOFT_HERO.copy}&rdquo;
              </blockquote>
            </div>

            {/* Right Side Structured Decision/Partnership Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Layers className="w-4 h-4" />
                    <span>PARTNERSHIP MODEL</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-750">
                    STRUCTURED ALIGNMENT
                  </span>
                </div>

                {/* Structured Decision Flow */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#00B3FF] font-bold">01 / BUSINESS NEED</span>
                    <span className="text-[10px] text-slate-400 font-sans">Strategic Goals</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#FF6F00] font-bold">02 / UNDERSTANDING</span>
                    <span className="text-[10px] text-slate-400 font-sans">Listen & Analyze</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#00B3FF] font-bold">03 / EXPERTISE</span>
                    <span className="text-[10px] text-slate-400 font-sans">Tailored Architecture</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#FF6F00] font-bold">04 / EXECUTION</span>
                    <span className="text-[10px] text-slate-400 font-sans">Practical Delivery</span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-2.5 rounded-lg bg-[#01153B] border border-[#00B3FF]/40 text-[#00B3FF] flex items-center justify-between font-bold">
                    <span>05 / LONG-TERM PARTNERSHIP</span>
                    <span className="text-[10px] text-slate-300 font-sans">Shared Success</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>OUTCOME-DRIVEN</span>
                  <span className="text-[#00B3FF]">ZOFT COMMITMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Statement */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                THE DECISION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                Technology Partnerships Should Create Confidence.
              </h2>
            </div>

            {/* Right Supporting Copy */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-[#00B3FF]/40 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans">
                Organizations need more than technology services. They need people who understand
                their goals, listen to their challenges, bring the right expertise, and remain
                focused on outcomes.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs font-bold text-[#01153B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                  <span>UNDERSTANDING</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                  <span>EXPERTISE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                  <span>OUTCOMES</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                  <span>PARTNERSHIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEVEN REASONS (PREMIUM INTERACTIVE SELECTOR) */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6F00]" />
              SEVEN DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Why Organizations Choose ZOFT
            </h2>
          </div>

          {/* Desktop Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Navigation Tabs */}
            <div
              className="lg:col-span-5 space-y-2"
              role="tablist"
              aria-label="Why Organizations Choose ZOFT reasons"
            >
              {WHY_ZOFT_REASONS.map((reason, index) => {
                const isActive = activeReasonIndex === index;
                return (
                  <button
                    key={reason.id}
                    id={`reason-tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`reason-panel-${index}`}
                    onClick={() => setActiveReasonIndex(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                      isActive
                        ? 'bg-[#01153B] text-white border-slate-800 shadow-lg'
                        : 'bg-slate-50/60 text-[#01153B] border-slate-200/90 hover:border-[#00B3FF]/40'
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
                        {reason.number}
                      </span>
                      <span className="text-base font-bold font-sans tracking-tight">
                        {reason.title}
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

            {/* Right Content Display Panel */}
            <div className="lg:col-span-7">
              <div
                id={`reason-panel-${activeReasonIndex}`}
                role="tabpanel"
                aria-labelledby={`reason-tab-${activeReasonIndex}`}
                className="bg-slate-50/60 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm min-h-[420px] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="font-mono text-xs font-bold text-[#01153B] bg-[#00B3FF]/10 px-3 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      DIFFERENTIATOR {activeReason.number}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      {activeReason.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-[#01153B] font-sans tracking-tight">
                    {activeReason.title}
                  </h3>

                  <p className="text-lg text-slate-800 font-semibold font-sans leading-relaxed">
                    {activeReason.description}
                  </p>

                  <p className="text-base text-slate-600 font-sans leading-relaxed pt-2">
                    {activeReason.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>ZOFT QUALITY PROMISE</span>
                  <span className="text-[#01153B] font-bold">VERIFIED POSITIONING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL BREAK */}
      <section className="relative bg-[#031E4D] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Different Needs. One Consistent Commitment.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {WHY_ZOFT_CONTINUITY.map((item) => (
              <div
                key={item.title}
                className="bg-[#01153B] p-6 rounded-2xl border border-slate-800 space-y-2 hover:border-[#00B3FF]/40 transition-colors"
              >
                <span className="text-xl sm:text-2xl font-extrabold font-sans text-[#00B3FF] block tracking-wider uppercase">
                  {item.title}
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT-CENTRIC APPROACH */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Users className="w-3.5 h-3.5 text-[#00B3FF]" />
              CLIENT-CENTRIC COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Start With Understanding.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              ZOFT&apos;s client-centric approach begins by deeply examining your business
              objectives, technical challenges, existing environment, operational needs, and desired
              outcomes.
            </p>
          </div>

          {/* Visual Concept Flow */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#01153B] text-white font-bold font-sans">
                01 / CLIENT NEEDS
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-[#01153B] font-sans">
                02 / TECHNICAL UNDERSTANDING
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-4 rounded-xl bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20 font-bold font-sans">
                03 / TAILORED DIRECTION
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center font-mono text-xs mt-6 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 font-bold font-sans">
                04 / DELIVERY
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-4 rounded-xl bg-[#01153B] text-white font-bold font-sans">
                05 / ONGOING PARTNERSHIP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERTISE SECTION */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              DOMAIN BREADTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Expertise That Connects Technology to Business.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_ZOFT_EXPERTISE.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#00B3FF]/40 transition-colors"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#01153B] font-bold uppercase tracking-wider block">
                    {exp.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-[#01153B] font-sans tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-400">
                  VERIFIED DOMAIN
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUTCOME-DRIVEN SECTION */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20">
                <Target className="w-3.5 h-3.5 text-[#FF6F00]" />
                OUTCOME ORIENTED
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                Focus on What the Work Needs to Achieve.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Technology choices are meaningful only when they lead to tangible results. ZOFT
                aligns architectural design and technical execution with measurable operational outcomes
                and business objectives.
              </p>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 text-xs font-mono space-y-2">
                <div className="flex items-center gap-2 text-[#01153B] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
                  <span>PRACTICAL DECISIONS GROUNDED IN REALITY</span>
                </div>
                <div className="flex items-center gap-2 text-[#01153B] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
                  <span>OPERATIONAL STABILITY & PERFORMANCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SUPPORT + LONG-TERM PARTNERSHIP */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/60 rounded-3xl p-8 sm:p-14 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <Headphones className="w-3.5 h-3.5 text-[#00B3FF]" />
                ADAPTABLE SUPPORT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
                Technology Changes. The Partnership Should Adapt With It.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                ZOFT provides ongoing data platform management, cloud support, and architectural
                guidance designed to scale and adapt as your organization&apos;s goals and workload
                demands evolve.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#01153B] text-white p-8 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
              <div className="text-[#00B3FF] font-bold uppercase tracking-wider text-xs">
                PARTNERSHIP CAPABILITIES
              </div>
              <ul className="space-y-3 font-sans text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                  <span>Ongoing Data Platform Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]" />
                  <span>Cloud Services & Stability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Scalable Architecture Evolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLOSING STATEMENT */}
      <section className="relative bg-[#031E4D] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] via-sky-300 to-[#FF6F00] mx-auto mb-6 rounded-full" />

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            “At Zoftcorp, we don’t just offer services—we create partnerships that drive long-term
            success.”
          </blockquote>
        </div>
      </section>

      {/* 10. CONNECTION TO OTHER ABOUT US PAGES */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              EXPLORE ZOFT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Explore About ZOFT
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/about-us/company-story"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-[#01153B] font-sans group-hover:text-[#00B3FF] transition-colors">
                Company Story
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Understand the story and evolution behind ZOFT.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <div className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-3 relative">
              <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-widest bg-[#031E4D] px-2 py-0.5 rounded border border-slate-700 inline-block">
                CURRENT PAGE
              </span>
              <h3 className="text-xl font-bold text-white font-sans">Why Zoftcorp?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Explore our seven key differentiators and client-centric approach.
              </p>
            </div>

            <Link
              href="/about-us/partnerships"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-[#01153B] font-sans group-hover:text-[#00B3FF] transition-colors">
                Partnerships
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore ZOFT&apos;s technology ecosystem and partner relationships.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                <span>View Partnerships</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/about-us/career"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-[#01153B] font-sans group-hover:text-[#00B3FF] transition-colors">
                Career
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore opportunities to build and grow with ZOFT.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                <span>View Careers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section
        aria-label="Ready to Build the Right Partnership"
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
            Ready to Build the Right Partnership?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Let&apos;s discuss what your organization needs next.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Consulting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
