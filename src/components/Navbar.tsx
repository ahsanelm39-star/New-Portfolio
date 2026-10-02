'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { lang, dir, isRtl, toggleLang, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/work', label: t.nav.work },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#07080a]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ahmed — Webflow Specialist Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 p-[1px] shadow-sm shadow-sky-500/20 group-hover:shadow-sky-400/40 transition-shadow">
              <div className="w-full h-full bg-[#08090d] rounded-[11px] flex items-center justify-center font-bold text-sky-400 group-hover:text-white transition-colors text-sm">
                A
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg flex items-center gap-1">
                AHMED<span className="text-sky-400">.</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-mono hidden sm:inline-block">
                {t.nav.whiteLabelBadge}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                    active
                      ? 'bg-sky-400/15 text-sky-300 border border-sky-400/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all focus:outline-none"
              title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.nav.languageLabel}</span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-medium transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-400/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-90')} />
            </Link>
          </div>

          {/* Mobile Right Controls: Language toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
              aria-label="Switch Language"
            >
              {t.nav.languageLabel}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Sheet */}
      <div
        className={cn(
          'fixed top-0 bottom-0 z-50 w-[85%] max-w-sm bg-[#090c12] border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden',
          isRtl
            ? 'left-0 border-r ' + (mobileMenuOpen ? 'translate-x-0' : '-translate-x-full')
            : 'right-0 border-l ' + (mobileMenuOpen ? 'translate-x-0' : 'translate-x-full')
        )}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-lg">
                AHMED<span className="text-sky-400">.</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex flex-col gap-2 pt-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between',
                    active
                      ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <button
            onClick={() => {
              toggleLang();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Globe className="w-4 h-4 text-sky-400" />
            <span>{t.nav.languageLabel}</span>
          </button>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-semibold text-xs transition-transform active:scale-95"
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight className={cn('w-4 h-4', isRtl && 'rotate-90')} />
          </Link>
        </div>
      </div>
    </header>
  );
}
