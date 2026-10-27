"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FAQ_CATEGORIES } from "@/data/faq";

export const FAQSection: React.FC = () => {
  // Allow multiple accordion items to be open simultaneously
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    q1: true, // First question open by default for immediate visual context
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Direct list of all FAQ questions without category grouping or labels
  const allQuestions = FAQ_CATEGORIES.flatMap((category) => category.questions);

  // Distribute questions evenly into two independent columns for a balanced, full-width desktop layout
  const midPoint = Math.ceil(allQuestions.length / 2);
  const leftColumnQuestions = allQuestions.slice(0, midPoint);
  const rightColumnQuestions = allQuestions.slice(midPoint);

  const renderFaqCard = (item: (typeof allQuestions)[0]) => {
    const isOpen = !!openItems[item.id];
    const questionId = `faq-q-${item.id}`;
    const answerId = `faq-a-${item.id}`;

    return (
      <div
        key={item.id}
        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? "bg-white border-[#00B3FF]/40 shadow-xs ring-1 ring-[#00B3FF]/20"
            : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs"
        }`}
      >
        <button
          type="button"
          id={questionId}
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => toggleItem(item.id)}
          className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:rounded-2xl transition-colors cursor-pointer group"
        >
          <span className="text-base sm:text-lg font-bold text-[#01153B] font-sans pr-2 group-hover:text-[#00B3FF] transition-colors leading-snug">
            {item.question}
          </span>

          <span
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
              isOpen
                ? "bg-[#00B3FF]/15 text-[#00B3FF] rotate-180"
                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
            }`}
            aria-hidden="true"
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>

        <div
          id={answerId}
          role="region"
          aria-labelledby={questionId}
          hidden={!isOpen}
          className={`px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-base font-normal leading-relaxed font-sans border-t border-slate-100 mt-1 ${
            !isOpen ? "hidden" : "block"
          }`}
        >
          <p>{item.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full bg-slate-50/70 text-[#01153B] border-b border-slate-200/90 py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle Blueprint Pattern Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00B3FF]" />
            <span>KNOWLEDGE BASE // FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight leading-tight font-sans uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed font-sans max-w-3xl">
            Direct answers covering our compliance frameworks, FinOps cost optimization, database performance tuning, migrations, and managed operations.
          </p>
        </div>

        {/* Full-Width 2-Column Responsive FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 w-full items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnQuestions.map((item) => renderFaqCard(item))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnQuestions.map((item) => renderFaqCard(item))}
          </div>
        </div>
      </Container>
    </section>
  );
};
