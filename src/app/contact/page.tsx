'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, Mail, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const { isRtl, t } = useLanguage();

  return (
    <div className="pt-32 pb-24 sm:pt-44 sm:pb-32 bg-[#07080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            {t.contactPage.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t.contactPage.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.contactPage.subtext}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="p-8 rounded-3xl bg-[#0c0f17] border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {t.contactPage.directChannelsTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t.contactPage.directChannelsDesc}
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/201097926288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-emerald-950/20 border border-white/5 hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      {t.contactPage.whatsappDirectLabel}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      +20 1097926288
                    </span>
                  </div>
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:ah.dev.3@gmail.com"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-sky-950/20 border border-white/5 hover:border-sky-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      {t.contactPage.emailDirectLabel}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors truncate block">
                      ah.dev.3@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Strict NDA / Confidentiality Guarantee */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.contactPage.confidentialityTitle}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.contactPage.confidentialityDesc}
                </p>
              </div>

            </div>

            {/* Current Availability Card */}
            <div className="p-6 rounded-2xl bg-sky-950/20 border border-sky-400/20 text-xs text-sky-200 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-sky-400">
                <Clock className="w-4 h-4" />
                <span>{t.contactPage.availabilityTitle}</span>
              </div>
              <p className="leading-relaxed">
                {t.contactPage.availabilityDesc}
              </p>
            </div>

          </div>

          {/* Right Column: Project Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
