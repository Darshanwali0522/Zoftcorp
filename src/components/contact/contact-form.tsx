'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { Send, CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { CONTACT_TOPICS, CONTACT_DISCOVERY_OPTIONS } from '@/data/contact';

interface ContactFormProps {
  selectedTopic?: string;
  onTopicReset?: () => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  topic: string;
  message: string;
  referralSource: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  topic?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedTopic, onTopicReset }) => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    topic: selectedTopic || '',
    message: '',
    referralSource: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [apiError, setApiError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    if (selectedTopic && formData.topic !== selectedTopic) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({ ...prev, topic: selectedTopic }));
      setErrors((prev) => (prev.topic ? { ...prev, topic: undefined } : prev));
    }
  }, [selectedTopic, formData.topic]);

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

    if (!formData.topic || formData.topic === 'Select a topic *') {
      newErrors.topic = 'Please tell us what this is regarding.';
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
          phone: formData.phone.trim() || undefined,
          companyName: formData.companyName.trim() || undefined,
          topic: formData.topic.trim(),
          message: formData.message.trim() || undefined,
          referralSource: formData.referralSource.trim() || undefined,
          formSource: 'contact_page',
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
      console.error('[ContactForm] Network error during submission:', err);
      setApiError('A network error occurred. Please check your connection and try again.');
      setSubmissionState('idle');
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      phone: '',
      companyName: '',
      topic: '',
      message: '',
      referralSource: '',
    });
    setErrors({});
    setApiError(null);
    setHoneypot('');
    setSubmissionState('idle');
    if (onTopicReset) {
      onTopicReset();
    }
  };

  return (
    <div className="bg-[#01153B] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
      {submissionState === 'submitted' ? (
        <div className="text-center py-10 space-y-6" role="status" aria-live="polite">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-sans">
              Thank You, {formData.firstName}!
            </h3>
            <p className="text-sm font-mono text-emerald-400 font-medium">
              Inquiry Successfully Received
            </p>
          </div>

          <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Your request details regarding{' '}
            <span className="text-[#00B3FF] font-semibold">{formData.topic}</span> have been received. Our advisory engineering team will review your context and respond to{' '}
            <span className="text-white font-medium">{formData.workEmail}</span>. A confirmation email has also been dispatched to your inbox.
          </p>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-[#031E4D] text-slate-200 hover:text-white hover:bg-[#072B6B] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Request</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field for spam bots - hidden from real users */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="contact-page-website">Website</label>
            <input
              id="contact-page-website"
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

          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                First Name <span className="text-[#00B3FF]">*</span>
              </label>
              <input
                id="firstName"
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
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                  errors.firstName ? 'border-red-500/80 bg-red-950/10' : 'border-white/15'
                }`}
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-xs text-red-400 font-sans mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Last Name <span className="text-[#00B3FF]">*</span>
              </label>
              <input
                id="lastName"
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
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                  errors.lastName ? 'border-red-500/80 bg-red-950/10' : 'border-white/15'
                }`}
              />
              {errors.lastName && (
                <p id="lastName-error" className="text-xs text-red-400 font-sans mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Work Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="workEmail" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Work Email <span className="text-[#00B3FF]">*</span>
              </label>
              <input
                id="workEmail"
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
                aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                  errors.workEmail ? 'border-red-500/80 bg-red-950/10' : 'border-white/15'
                }`}
              />
              {errors.workEmail && (
                <p id="workEmail-error" className="text-xs text-red-400 font-sans mt-1">
                  {errors.workEmail}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#031E4D] border border-white/15 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row 3: Company Name & Topic Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                placeholder="Enterprise Corp"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-[#031E4D] border border-white/15 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="topic" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Topic of Inquiry <span className="text-[#00B3FF]">*</span>
              </label>
              <select
                id="topic"
                name="topic"
                required
                value={formData.topic}
                onChange={(e) => {
                  setFormData({ ...formData, topic: e.target.value });
                  if (errors.topic) setErrors({ ...errors, topic: undefined });
                }}
                aria-invalid={!!errors.topic}
                aria-describedby={errors.topic ? 'topic-error' : undefined}
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
                  errors.topic ? 'border-red-500/80 bg-red-950/10' : 'border-white/15'
                }`}
              >
                {CONTACT_TOPICS.map((topic) => (
                  <option key={topic.id} value={topic.label} disabled={topic.id === ''} className="bg-[#01153B] text-white">
                    {topic.label}
                  </option>
                ))}
              </select>
              {errors.topic && (
                <p id="topic-error" className="text-xs text-red-400 font-sans mt-1">
                  {errors.topic}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Message Textarea */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              What can we help you with?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your infrastructure goals, database engines, cloud challenges, or timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#031E4D] border border-white/15 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all resize-y"
            />
          </div>

          {/* Row 5: Referral Source */}
          <div className="space-y-2">
            <label htmlFor="referralSource" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              How did you hear about us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
              className="w-full bg-[#031E4D] border border-white/15 rounded-lg px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all"
            >
              {CONTACT_DISCOVERY_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.label} className="bg-[#01153B] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionState === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] disabled:bg-[#FF6F00]/60 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#00B3FF] cursor-pointer"
          >
            {submissionState === 'submitting' ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
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
  );
};
