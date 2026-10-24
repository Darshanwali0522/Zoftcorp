"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, DollarSign, Gauge, ArrowRightLeft, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FAQ_CATEGORIES } from "@/data/faq";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "dpdp-audit-compliance": <ShieldCheck className="w-4 h-4 text-[#00B3FF]" />,
  "cloud-database-finops": <DollarSign className="w-4 h-4 text-[#FF6F00]" />,
  "performance-tuning": <Gauge className="w-4 h-4 text-[#00B3FF]" />,
  "migrations-transformations": <ArrowRightLeft className="w-4 h-4 text-[#01153B]" />,
  "managed-services": <Cpu className="w-4 h-4 text-[#00B3FF]" />,
};

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
        <div className="max-w-3xl mb-12 sm:mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00B3FF]" />
            <span>KNOWLEDGE BASE // FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight leading-tight font-sans uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed font-sans">
            Direct answers covering our compliance frameworks, FinOps cost optimization, database performance tuning, migrations, and managed operations.
          </p>
        </div>

        {/* Categories & Accordion List */}
        <div className="space-y-10 sm:space-y-12">
          {FAQ_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs transition-shadow hover:shadow-sm space-y-6"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    {CATEGORY_ICONS[category.id] || <HelpCircle className="w-4 h-4 text-[#00B3FF]" />}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider block">
                      CATEGORY {category.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#01153B] font-sans">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex self-start sm:self-center items-center text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  {category.tag}
                </span>
              </div>

              {/* Questions in this Category */}
              <div className="space-y-3.5">
                {category.questions.map((item) => {
                  const isOpen = !!openItems[item.id];
                  const questionId = `faq-q-${item.id}`;
                  const answerId = `faq-a-${item.id}`;

                  return (
                    <div
                      key={item.id}
                      className={`rounded-xl border transition-all duration-200 ${
                        isOpen
                          ? "bg-slate-50/50 border-[#00B3FF]/40 shadow-xs"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <button
                        type="button"
                        id={questionId}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => toggleItem(item.id)}
                        className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:rounded-xl transition-colors cursor-pointer"
                      >
                        <span className="text-base sm:text-lg font-bold text-[#01153B] font-sans pr-2">
                          {item.question}
                        </span>

                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isOpen
                              ? "bg-[#00B3FF]/15 text-[#00B3FF] rotate-180"
                              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
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
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
