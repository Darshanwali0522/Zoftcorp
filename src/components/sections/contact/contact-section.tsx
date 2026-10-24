'use client';

import React, { useState, FormEvent } from 'react';
import { Send, CheckCircle, Mail, Clock, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

interface FormState {
  workEmail: string;
  firstName: string;
  lastName: string;
  topic: string;
  message: string;
  referralSource: string;
}

interface FormErrors {
  workEmail?: string;
  firstName?: string;
  lastName?: string;
  topic?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    workEmail: '',
    firstName: '',
    lastName: '',
    topic: 'Database Performance & Tuning',
    message: '',
    referralSource: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [apiError, setApiError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Please enter your work email.';
    } else if (!emailPattern.test(formData.workEmail.trim())) {
      newErrors.workEmail = 'Please enter a valid work email.';
    }

    if (!formData.topic.trim()) {
      newErrors.topic = 'Please select a topic.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmissionState('submitting');
    setApiError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          workEmail: formData.workEmail.trim(),
          topic: formData.topic.trim(),
          message: formData.message.trim() || undefined,
          referralSource: formData.referralSource.trim() || undefined,
          formSource: 'homepage_section',
          website: honeypot,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        const errorMsg =
          result?.error || 'Unable to submit your request at this time. Please try again or email us directly.';
        setApiError(errorMsg);
        setSubmissionState('idle');
        return;
      }

      setSubmissionState('submitted');
    } catch (err) {
      console.error('[ContactSection] Network error during submission:', err);
      setApiError('A network error occurred. Please check your connection and try again.');
      setSubmissionState('idle');
    }
  };

  const handleReset = () => {
    setFormData({
      workEmail: '',
      firstName: '',
      lastName: '',
      topic: 'Database Performance & Tuning',
      message: '',
      referralSource: '',
    });
    setErrors({});
    setApiError(null);
    setHoneypot('');
    setSubmissionState('idle');
  };

  const isSubmitting = submissionState === 'submitting';

  return (
    <section
      id="contact"
      aria-label="Need Assistance? We're Here to Help!"
      className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
    >
      {/* Background ambient light */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#01153B]/70 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              GET IN TOUCH
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
              Need Assistance?
              <br />
              <span className="text-slate-300 font-normal">We&apos;re Here to Help!</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Speak directly with an enterprise cloud and database specialist to discuss query tuning, cloud cost reduction, 24/7 managed DBA, or complex database migrations.
            </p>

            <div className="pt-6 border-t border-slate-750/80 space-y-4">
              <div className="flex items-start gap-3 text-slate-300 text-sm p-3.5 rounded-xl bg-[#01153B]/80 border border-slate-700/80">
                <Clock className="w-5 h-5 text-[#00B3FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Rapid Technical Response</span>
                  <span className="text-xs text-slate-400">Our engineering team reviews inquiries promptly.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300 text-sm p-3.5 rounded-xl bg-[#01153B]/80 border border-slate-700/80">
                <ShieldCheck className="w-5 h-5 text-[#00B3FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Strict Confidentiality</span>
                  <span className="text-xs text-slate-400">All technical discussions are bound by enterprise NDA standards.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300 text-sm p-3.5 rounded-xl bg-[#01153B]/80 border border-slate-700/80">
                <Mail className="w-5 h-5 text-[#00B3FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Direct Advisory</span>
                  <span className="text-xs text-slate-400">Direct technical guidance without aggressive sales pitches.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#01153B]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
              {submissionState === 'submitted' ? (
                <div className="text-center py-12 space-y-4" role="status" aria-live="polite">
                  <div className="w-16 h-16 rounded-full bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center mx-auto border border-[#00B3FF]/30 shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    Thank You, {formData.firstName}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-sans">
                    Your enquiry regarding <span className="text-[#00B3FF] font-semibold">{formData.topic}</span> has been received. A ZOFT Corp specialist will be in touch with you at <span className="text-white font-medium">{formData.workEmail}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-[#031E4D] text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700 inline-flex items-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field for spam bots - hidden from real users */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="homepage-website">Website</label>
                    <input
                      id="homepage-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Accessible API Error Banner */}
                  {apiError && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-red-200 text-sm flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="font-semibold text-white">Submission Error</p>
                        <p className="text-xs text-red-300">{apiError}</p>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="homepage-firstName" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                        First Name <span className="text-[#00B3FF]">*</span>
                      </label>
                      <input
                        id="homepage-firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: undefined });
                        }}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'homepage-firstName-error' : undefined}
                        className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                          errors.firstName ? 'border-red-500/80 bg-red-950/10' : 'border-slate-700'
                        }`}
                      />
                      {errors.firstName && (
                        <p id="homepage-firstName-error" className="text-xs text-red-400 font-sans mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="homepage-lastName" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                        Last Name <span className="text-[#00B3FF]">*</span>
                      </label>
                      <input
                        id="homepage-lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: undefined });
                        }}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'homepage-lastName-error' : undefined}
                        className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                          errors.lastName ? 'border-red-500/80 bg-red-950/10' : 'border-slate-700'
                        }`}
                      />
                      {errors.lastName && (
                        <p id="homepage-lastName-error" className="text-xs text-red-400 font-sans mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Work Email */}
                  <div className="space-y-2">
                    <label htmlFor="homepage-workEmail" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                      Work Email <span className="text-[#00B3FF]">*</span>
                    </label>
                    <input
                      id="homepage-workEmail"
                      name="workEmail"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane.doe@company.com"
                      value={formData.workEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, workEmail: e.target.value });
                        if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                      }}
                      aria-invalid={!!errors.workEmail}
                      aria-describedby={errors.workEmail ? 'homepage-workEmail-error' : undefined}
                      className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                        errors.workEmail ? 'border-red-500/80 bg-red-950/10' : 'border-slate-700'
                      }`}
                    />
                    {errors.workEmail && (
                      <p id="homepage-workEmail-error" className="text-xs text-red-400 font-sans mt-1">
                        {errors.workEmail}
                      </p>
                    )}
                  </div>

                  {/* Row 3: Topic Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="homepage-topic" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                      Topic of Inquiry <span className="text-[#00B3FF]">*</span>
                    </label>
                    <select
                      id="homepage-topic"
                      name="topic"
                      value={formData.topic}
                      onChange={(e) => {
                        setFormData({ ...formData, topic: e.target.value });
                        if (errors.topic) setErrors({ ...errors, topic: undefined });
                      }}
                      aria-invalid={!!errors.topic}
                      aria-describedby={errors.topic ? 'homepage-topic-error' : undefined}
                      className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all cursor-pointer ${
                        errors.topic ? 'border-red-500/80 bg-red-950/10' : 'border-slate-700'
                      }`}
                    >
                      <option value="Database Performance & Tuning">Performance Tuning Delivery</option>
                      <option value="Cloud Cost Optimization (DB FinOps)">Cloud Cost Optimization (DB FinOps)</option>
                      <option value="24/7 Managed DBA Services">Managed DBA Services</option>
                      <option value="Database Migration & Modernization">Database Migrations &amp; Transformations</option>
                      <option value="Data Engineering & Analytics">Data Engineering &amp; Analytics</option>
                      <option value="General Enterprise Advisory">General Advisory &amp; Architecture</option>
                    </select>
                    {errors.topic && (
                      <p id="homepage-topic-error" className="text-xs text-red-400 font-sans mt-1">
                        {errors.topic}
                      </p>
                    )}
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="homepage-message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                      What can we help you with?
                    </label>
                    <textarea
                      id="homepage-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your database engines, infrastructure challenges, or upcoming migration goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#031E4D] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Row 5: How did you hear about us */}
                  <div className="space-y-2">
                    <label htmlFor="homepage-referralSource" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                      How did you hear about us?
                    </label>
                    <input
                      id="homepage-referralSource"
                      name="referralSource"
                      type="text"
                      placeholder="Search engine, industry recommendation, social, etc."
                      value={formData.referralSource}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      className="w-full bg-[#031E4D] border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button (Brand Orange Primary Action) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:shadow-[#FF6F00]/40 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

