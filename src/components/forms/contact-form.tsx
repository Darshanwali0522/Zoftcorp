"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-[#01153B] border border-white/10 rounded-2xl p-8 text-center space-y-4 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Thank you for reaching out to ZOFT Corp. Our advisory engineering team will review your project requirements.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#01153B] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white">Schedule Advisory Session</h3>
        <p className="text-xs text-slate-300">
          Connect directly with ZOFT Corp cloud and database architects.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name" placeholder="Jane Doe" required />
          <Input label="Work Email" type="email" placeholder="jane@company.com" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Company Name" placeholder="Enterprise Corp" />
          <Select
            label="Inquiry Scope"
            options={[
              { label: "Cloud Migration & Architecture", value: "cloud" },
              { label: "Database Performance & Tuning", value: "database" },
              { label: "Cost Optimization Advisory", value: "cost" },
              { label: "ZoftStudio Custom Systems", value: "studio" },
            ]}
          />
        </div>

        <Textarea
          label="Project Context & Objectives"
          placeholder="Share your technical context, database engines, or infrastructure scale..."
          rows={4}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={loading}
          rightIcon={<Send className="w-4 h-4" />}
        >
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
};
