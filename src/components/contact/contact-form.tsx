'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { Send, CheckCircle, RefreshCw } from 'lucide-react';
import { CONTACT_TOPICS, CONTACT_DISCOVERY_OPTIONS } from '@/data/contact';

interface ContactFormProps {
  selectedTopic?: string;
  onTopicReset?: () => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  workEmail: string;
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
    topic: selectedTopic || '',
    message: '',
    referralSource: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'submitted'>('idle');

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmissionState('submitting');

    // Simulate clean async submission boundary (frontend isolated architecture)
    setTimeout(() => {
      setSubmissionState('submitted');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      topic: '',
      message: '',
      referralSource: '',
    });
    setErrors({});
    setSubmissionState('idle');
    if (onTopicReset) {
      onTopicReset();
    }
  };

  return (
    <div className="bg-[#01153B] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
      {submissionState === 'submitted' ? (
        <div className="text-center py-10 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-sans">
              Form Ready for Submission
            </h3>
            <p className="text-sm font-mono text-emerald-400 font-medium">
              Frontend Architecture Verified &amp; Connection Ready
            </p>
          </div>

          <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.firstName}</span>. Your request details regarding{' '}
            <span className="text-[#00B3FF] font-semibold">{formData.topic}</span> ({formData.workEmail}) have been validated by the client architecture and are prepared for API connection.
          </p>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-[#031E4D] text-slate-200 hover:text-white hover:bg-[#072B6B] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Request</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
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
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
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

          {/* Row 2: Work Email & Topic Selection */}
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
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
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
                className={`w-full bg-[#031E4D] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all ${
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

          {/* Row 3: Message Textarea */}
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
              className="w-full bg-[#031E4D] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all resize-y"
            />
          </div>

          {/* Row 4: Referral Source */}
          <div className="space-y-2">
            <label htmlFor="referralSource" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              How did you hear about us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
              className="w-full bg-[#031E4D] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] focus:border-transparent transition-all"
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
