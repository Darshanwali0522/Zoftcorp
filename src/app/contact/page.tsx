'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/contact/contact-form';
import {
  CONTACT_HERO,
  CONTACT_CONVERSATION_AREAS,
  EXPECTATION_STEPS,
  CONTACT_NAVIGATION,
} from '@/data/contact';

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleSelectArea = (topicTarget: string) => {
    setSelectedTopic(topicTarget);
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800/80 bg-[#01153B] text-white">
        <div
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] animate-pulse" />
                {CONTACT_HERO.eyebrow}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {CONTACT_HERO.h1}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {CONTACT_HERO.copy}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00] cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Hero Visual: Conceptual Flow */}
            <div className="lg:col-span-5">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-4 shadow-2xl">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>CONVERSATION FLOW</span>
                  <span className="text-[#00B3FF]">ZOFT ADVISORY</span>
                </div>

                <div className="space-y-3">
                  {CONTACT_HERO.flow.map((node, index) => (
                    <div key={node.step} className="group relative">
                      <div className="flex items-start gap-4 p-3 rounded-xl bg-[#01153B]/80 border border-slate-800 hover:border-[#00B3FF]/40 transition-all duration-200">
                        <span className="text-xs font-mono font-bold text-[#00B3FF] shrink-0 mt-0.5">
                          {node.step}
                        </span>
                        <div>
                          <div className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                            {node.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">{node.desc}</div>
                        </div>
                      </div>
                      {index < CONTACT_HERO.flow.length - 1 && (
                        <div className="w-px h-3 bg-slate-800 mx-auto my-0.5" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHERE SHOULD WE START? (CONVERSATION PROMPTS) */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-slate-50/70">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              TOPIC EXPLORER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Where Should We Start?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Select an area of focus to pre-fill the enquiry topic and direct the conversation with our technical team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CONTACT_CONVERSATION_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => handleSelectArea(area.topicTarget)}
                className="group text-left bg-white border border-slate-200/90 hover:border-[#00B3FF]/40 rounded-xl p-6 transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF] cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#00B3FF]">
                    <span>{area.code}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00B3FF] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00B3FF] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 group-hover:text-[#01153B] transition-colors">
                  Focus form on {area.title} →
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. PRIMARY CONTACT FORM & SUPPORTING CONTACT */}
      <section id="contact-form" className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Headline & Supporting Conversation Context */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                  ENQUIRY
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Tell Us What You Need.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Share a little context about your challenge or objective. The more we understand, the better we can direct the conversation.
                </p>
              </div>

              {/* Verified Conversation Guidance */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
                <div className="flex items-center gap-3 text-slate-900">
                  <MessageSquare className="w-5 h-5 text-[#00B3FF] shrink-0" />
                  <h3 className="text-base font-bold">Prefer to Start With a Conversation?</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tell us what you’re working on and we’ll help direct the conversation with our enterprise technologists.
                </p>
                <div className="pt-2">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#01153B] hover:text-[#00B3FF] transition-colors cursor-pointer"
                  >
                    <span>Use Enquiry Form Below</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Direct Technical Advisory Guarantee */}
              <div className="space-y-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00B3FF] shrink-0 mt-2" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Direct Technical Advisory</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Your enquiry is reviewed by experienced practitioners across data, AI, cloud, and databases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF6F00] shrink-0 mt-2" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Pragmatic Evaluation</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We focus on real architecture trade-offs, performance constraints, and operational goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: ContactForm Component */}
            <div className="lg:col-span-7">
              <ContactForm selectedTopic={selectedTopic} onTopicReset={() => setSelectedTopic('')} />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TRUST / EXPECTATION SECTION */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-slate-50/70">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Start With Context. Build From There.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every technical partnership begins with clear understanding, open communication, and structured evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {EXPECTATION_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-slate-200/90 rounded-xl p-6 space-y-4 hover:border-[#00B3FF]/30 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#00B3FF] block">{step.number}</span>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CONNECTION TO ZOFT SERVICES */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              EXPLORE ZOFT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Explore Before You Reach Out
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Gain deeper insight into our consulting capabilities, specialized offerings, and engineering approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACT_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-slate-50 border border-slate-200/90 hover:border-[#00B3FF]/40 rounded-xl p-6 transition-all duration-200 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00B3FF] transition-colors">
                    {item.label}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00B3FF] transition-colors" />
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. EDITORIAL VISUAL BREAK */}
      <section className="py-24 md:py-32 bg-[#01153B] border-b border-slate-800/80 relative overflow-hidden text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00B3FF]">
              PERSPECTIVE &amp; COLLABORATION
            </span>
            <blockquote className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              “Every Good Technology Conversation Starts With a Good Question.”
            </blockquote>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              We look forward to examining your system challenges and engineering practical solutions together.
            </p>
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 md:py-28 bg-[#031E4D]">
        <Container>
          <div className="bg-[#01153B] border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden shadow-2xl">
            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ready to Start the Conversation?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                Tell us what you’re working on, what’s changing, or where you need a clearer technical direction.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00] cursor-pointer"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore ZOFT</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
