'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PARTNERSHIP_TYPES } from '@/app/api/partnerships/route';

interface FormState {
  companyName: string;
  contactName: string;
  businessEmail: string;
  partnershipType: string;
  message: string;
  website: string; // Honeypot
}

const INITIAL_STATE: FormState = {
  companyName: '',
  contactName: '',
  businessEmail: '',
  partnershipType: '',
  message: '',
  website: '',
};

export function PartnershipForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name is required.';
    }

    if (!formData.contactName.trim() || formData.contactName.trim().length < 2) {
      newErrors.contactName = 'Contact person name is required.';
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.businessEmail.trim() || !emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'A valid business email address is required.';
    }

    if (!formData.partnershipType) {
      newErrors.partnershipType = 'Please select a partnership area.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please provide details about your partnership interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to submit partnership inquiry.');
      }

      setIsSuccess(true);
      setFormData(INITIAL_STATE);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-[#031E4D] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-sans">
            Partnership Inquiry Received
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
            Thank you for your interest in partnering with Zoftcorp. Our strategic alliances team will review your organization’s profile and contact you promptly.
          </p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#031E4D]/90 border border-slate-700/80 rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-sm">
      <div className="mb-8 space-y-2">
        <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
          ALLIANCES &amp; INTEGRATIONS
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
          Partner With Zoftcorp
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
          Interested in co-selling, system integration, ISV technology alliances, or consulting synergy? Submit your company details to start the conversation.
        </p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="p_hp_website">Website</label>
          <input
            id="p_hp_website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Company Name */}
          <div className="space-y-2">
            <label
              htmlFor="p_company_name"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
            >
              Company Name <span className="text-[#00B3FF]">*</span>
            </label>
            <input
              id="p_company_name"
              type="text"
              required
              placeholder="e.g. Acme Cloud Solutions"
              value={formData.companyName}
              onChange={(e) => {
                setFormData({ ...formData, companyName: e.target.value });
                if (errors.companyName) setErrors({ ...errors, companyName: undefined });
              }}
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? 'p-company-error' : undefined}
              className={`w-full bg-[#01153B] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                errors.companyName ? 'border-red-500/80 bg-red-950/20' : 'border-slate-700'
              }`}
            />
            {errors.companyName && (
              <p id="p-company-error" className="text-xs text-red-400 font-sans">
                {errors.companyName}
              </p>
            )}
          </div>

          {/* Contact Person Name */}
          <div className="space-y-2">
            <label
              htmlFor="p_contact_name"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
            >
              Contact Person <span className="text-[#00B3FF]">*</span>
            </label>
            <input
              id="p_contact_name"
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.contactName}
              onChange={(e) => {
                setFormData({ ...formData, contactName: e.target.value });
                if (errors.contactName) setErrors({ ...errors, contactName: undefined });
              }}
              aria-invalid={!!errors.contactName}
              aria-describedby={errors.contactName ? 'p-contact-error' : undefined}
              className={`w-full bg-[#01153B] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                errors.contactName ? 'border-red-500/80 bg-red-950/20' : 'border-slate-700'
              }`}
            />
            {errors.contactName && (
              <p id="p-contact-error" className="text-xs text-red-400 font-sans">
                {errors.contactName}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Business Email */}
          <div className="space-y-2">
            <label
              htmlFor="p_business_email"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
            >
              Business Email <span className="text-[#00B3FF]">*</span>
            </label>
            <input
              id="p_business_email"
              type="email"
              required
              placeholder="sarah@acmecloud.com"
              value={formData.businessEmail}
              onChange={(e) => {
                setFormData({ ...formData, businessEmail: e.target.value });
                if (errors.businessEmail) setErrors({ ...errors, businessEmail: undefined });
              }}
              aria-invalid={!!errors.businessEmail}
              aria-describedby={errors.businessEmail ? 'p-email-error' : undefined}
              className={`w-full bg-[#01153B] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                errors.businessEmail ? 'border-red-500/80 bg-red-950/20' : 'border-slate-700'
              }`}
            />
            {errors.businessEmail && (
              <p id="p-email-error" className="text-xs text-red-400 font-sans">
                {errors.businessEmail}
              </p>
            )}
          </div>

          {/* Partnership Type */}
          <div className="space-y-2">
            <label
              htmlFor="p_partnership_type"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
            >
              Partnership Area <span className="text-[#00B3FF]">*</span>
            </label>
            <select
              id="p_partnership_type"
              required
              value={formData.partnershipType}
              onChange={(e) => {
                setFormData({ ...formData, partnershipType: e.target.value });
                if (errors.partnershipType) setErrors({ ...errors, partnershipType: undefined });
              }}
              aria-invalid={!!errors.partnershipType}
              aria-describedby={errors.partnershipType ? 'p-type-error' : undefined}
              className={`w-full bg-[#01153B] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                errors.partnershipType ? 'border-red-500/80 bg-red-950/20' : 'border-slate-700'
              }`}
            >
              <option value="" disabled className="bg-[#01153B] text-slate-400">
                Select partnership area *
              </option>
              {PARTNERSHIP_TYPES.map((type) => (
                <option key={type} value={type} className="bg-[#01153B] text-white">
                  {type}
                </option>
              ))}
            </select>
            {errors.partnershipType && (
              <p id="p-type-error" className="text-xs text-red-400 font-sans">
                {errors.partnershipType}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="p_message"
            className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
          >
            Partnership Goals &amp; Synergy Details <span className="text-[#00B3FF]">*</span>
          </label>
          <textarea
            id="p_message"
            required
            rows={4}
            placeholder="Describe your technology platform, target customer profile, co-sell objectives, or technical collaboration ideas..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'p-message-error' : undefined}
            className={`w-full bg-[#01153B] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
              errors.message ? 'border-red-500/80 bg-red-950/20' : 'border-slate-700'
            }`}
          />
          {errors.message && (
            <p id="p-message-error" className="text-xs text-red-400 font-sans">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-mono">
            Directly transmitted to Zoftcorp Global Alliances.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#00B3FF] hover:bg-[#33C2FF] text-[#01153B] font-bold text-sm transition-all duration-200 shadow-lg shadow-[#00B3FF]/20 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus-visible:outline-2 focus-visible:outline-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
