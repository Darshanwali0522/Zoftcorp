'use client';

import React, { useState, useRef } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Upload, FileText, X } from 'lucide-react';
import { CAREER_ROLES_OPTIONS } from '@/data/career';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

export function CareerApplicationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Validate size
    if (selected.size > MAX_FILE_SIZE_BYTES) {
      setFieldErrors((prev) => ({
        ...prev,
        file: 'File size exceeds 5MB limit. Please choose a smaller document.',
      }));
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Validate extension
    const nameLower = selected.name.toLowerCase();
    if (!nameLower.endsWith('.pdf') && !nameLower.endsWith('.docx')) {
      setFieldErrors((prev) => ({
        ...prev,
        file: 'Invalid file format. Only PDF (.pdf) and Word (.docx) files are supported.',
      }));
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.file;
      return next;
    });
    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateClient = (): boolean => {
    const errors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.fullName = 'Full name is required (at least 2 characters).';
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    const resolvedRole = role === 'Other / Open Technical Role' ? customRole.trim() : role;
    if (!resolvedRole || resolvedRole.length < 2) {
      errors.role = 'Please select or specify your desired role.';
    }

    if (!file) {
      errors.file = 'Please upload your CV or resume in PDF or DOCX format.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const resolvedRole = role === 'Other / Open Technical Role' ? `Other: ${customRole.trim()}` : role;

      const formData = new FormData();
      formData.append('fullName', fullName.trim());
      formData.append('email', email.trim());
      if (phone.trim()) formData.append('phone', phone.trim());
      formData.append('role', resolvedRole);
      if (notes.trim()) formData.append('notes', notes.trim());
      if (file) formData.append('resume', file);
      if (honeypot) formData.append('hp_field', honeypot);

      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setSuccessMessage(
        data.message ||
          'Thank you for your application! Our technical recruiting team has received your submission.'
      );

      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setRole('');
      setCustomRole('');
      setNotes('');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successMessage) {
    return (
      <div
        className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-8 sm:p-10 text-center space-y-4"
        role="alert"
        aria-live="polite"
      >
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-950 font-sans">Application Received</h3>
        <p className="text-sm sm:text-base text-emerald-800 max-w-lg mx-auto font-sans leading-relaxed">
          {successMessage}
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#01153B] text-white text-xs font-semibold hover:bg-[#031E4D] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
      {/* Hidden honeypot field for spam prevention */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="careers-company-website">Website</label>
        <input
          type="text"
          id="careers-company-website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {errorMessage && (
        <div
          className="rounded-xl border border-rose-200 bg-rose-50 p-4 flex items-start gap-3 text-rose-900"
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-sans">{errorMessage}</p>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="careers-fullName" className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
            Full Name <span className="text-[#FF6F00]">*</span>
          </label>
          <input
            type="text"
            id="careers-fullName"
            name="fullName"
            required
            placeholder="Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={fieldErrors.fullName ? 'careers-fullName-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 placeholder:text-slate-400 font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all ${
              fieldErrors.fullName ? 'border-rose-400' : 'border-slate-200 hover:border-slate-300'
            }`}
          />
          {fieldErrors.fullName && (
            <p id="careers-fullName-error" className="text-xs text-rose-600 font-sans mt-1.5">
              {fieldErrors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="careers-email" className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
            Email Address <span className="text-[#FF6F00]">*</span>
          </label>
          <input
            type="email"
            id="careers-email"
            name="email"
            required
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'careers-email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 placeholder:text-slate-400 font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all ${
              fieldErrors.email ? 'border-rose-400' : 'border-slate-200 hover:border-slate-300'
            }`}
          />
          {fieldErrors.email && (
            <p id="careers-email-error" className="text-xs text-rose-600 font-sans mt-1.5">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone and Desired Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="careers-phone" className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
            Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="tel"
            id="careers-phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all"
          />
        </div>

        <div>
          <label htmlFor="careers-role" className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
            Desired Position / Practice <span className="text-[#FF6F00]">*</span>
          </label>
          <select
            id="careers-role"
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.role)}
            aria-describedby={fieldErrors.role ? 'careers-role-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all ${
              fieldErrors.role ? 'border-rose-400' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <option value="" disabled>Select desired role *</option>
            {CAREER_ROLES_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.role && (
            <p id="careers-role-error" className="text-xs text-rose-600 font-sans mt-1.5">
              {fieldErrors.role}
            </p>
          )}
        </div>
      </div>

      {/* If "Other" role selected, prompt for custom title */}
      {role === 'Other / Open Technical Role' && (
        <div>
          <label htmlFor="careers-customRole" className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
            Specify Your Role / Title <span className="text-[#FF6F00]">*</span>
          </label>
          <input
            type="text"
            id="careers-customRole"
            placeholder="e.g. Site Reliability Engineer / Distributed Systems"
            value={customRole}
            onChange={(e) => setCustomRole(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all"
          />
        </div>
      )}

      {/* Row 3: Resume Upload */}
      <div>
        <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
          CV / Resume <span className="text-[#FF6F00]">*</span>
          <span className="text-slate-400 font-normal lowercase ml-2 font-mono">(PDF or DOCX, max 5MB)</span>
        </label>

        <input
          ref={fileInputRef}
          type="file"
          id="careers-resume-input"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          disabled={isSubmitting}
          className="sr-only"
          aria-describedby="careers-file-info"
        />

        {!file ? (
          <label
            htmlFor="careers-resume-input"
            className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors ${
              fieldErrors.file ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300 bg-slate-50/50'
            }`}
          >
            <Upload className="w-8 h-8 text-[#00B3FF] mb-2" />
            <span className="text-sm font-semibold text-slate-800">
              Click to choose resume file
            </span>
            <span id="careers-file-info" className="text-xs text-slate-500 font-mono mt-1">
              Supported: PDF, DOCX (Up to 5MB)
            </span>
          </label>
        ) : (
          <div className="flex items-center justify-between p-4 rounded-xl border border-emerald-200 bg-emerald-50/60">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-emerald-700" />
              <div>
                <p className="text-sm font-bold text-slate-900 font-sans truncate max-w-xs sm:max-w-md">
                  {file.name}
                </p>
                <p className="text-xs font-mono text-slate-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB • Document Ready
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              disabled={isSubmitting}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-colors"
              aria-label="Remove selected resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {fieldErrors.file && (
          <p className="text-xs text-rose-600 font-sans mt-1.5">
            {fieldErrors.file}
          </p>
        )}
      </div>

      {/* Row 4: Notes / Cover Message */}
      <div>
        <label htmlFor="careers-notes" className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2">
          Notes / Introduction <span className="text-slate-400 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="careers-notes"
          name="notes"
          rows={4}
          maxLength={3000}
          placeholder="Tell us about your technical background, areas of focus, or what kind of problems you enjoy solving..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 font-sans text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#01153B]/20 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <span>Submit Application</span>
          )}
        </button>
      </div>

      <p className="text-xs text-slate-500 font-sans">
        Resumes are transmitted securely and stored in private corporate storage. Credentials and application data are never shared with third parties.
      </p>
    </form>
  );
}
