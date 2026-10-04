'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const { isRtl, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xqpadoye', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) throw new Error('Form submission failed');
      setSubmitted(true);
    } catch {
      setSubmitError(t.contactPage.submitError);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0f17] border border-sky-400/30 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {t.contactPage.successTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          {t.contactPage.successDesc}
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0f17] border border-white/10 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {t.contactPage.formTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {t.contactPage.formDesc}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-mono text-slate-300 block">
              {t.contactPage.nameLabel} <span className="text-sky-400">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              placeholder={t.contactPage.namePlaceholder}
              className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-xs font-mono text-slate-300 block">
              {t.contactPage.formEmailLabel} <span className="text-sky-400">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              placeholder={t.contactPage.emailPlaceholder}
              className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Company & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="contact-company" className="text-xs font-mono text-slate-300 block">
              {t.contactPage.companyLabel}
            </label>
            <input
              type="text"
              id="contact-company"
              name="company"
              placeholder={t.contactPage.companyPlaceholder}
              className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-phone" className="text-xs font-mono text-slate-300 block">
              {t.contactPage.formPhoneLabel}
            </label>
            <input
              type="text"
              id="contact-phone"
              name="phone"
              placeholder={t.contactPage.phonePlaceholder}
              className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Project Type */}
        <div className="space-y-1.5">
          <label htmlFor="contact-project-type" className="text-xs font-mono text-slate-300 block">
            {t.contactPage.typeLabel}
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          >
            {t.contactPage.typeOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Range (Optional) */}
        <div className="space-y-1.5">
          <label htmlFor="contact-budget" className="text-xs font-mono text-slate-300 block">
            {t.contactPage.budgetLabel}
          </label>
          <select
            id="contact-budget"
            name="budget"
            className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          >
            {t.contactPage.budgetOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="text-xs font-mono text-slate-300 block">
            {t.contactPage.messageLabel} <span className="text-sky-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            placeholder={t.contactPage.messagePlaceholder}
            className="w-full bg-[#08090d] border border-white/10 focus:border-sky-400 rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          {submitError && (
            <p role="alert" className="mb-3 text-xs text-rose-300">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <span>{loading ? t.contactPage.submittingBtn : t.contactPage.submitBtn}</span>
            <Send className={cn('w-4 h-4', isRtl && 'rotate-180')} />
          </button>
        </div>

      </form>
    </div>
  );
}
