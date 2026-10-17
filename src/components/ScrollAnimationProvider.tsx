'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Reveal everything immediately with zero animation
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    // Set up single-execution IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.05,
      }
    );

    const initElements = () => {
      const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        if (el.classList.contains('revealed')) return;

        const rect = el.getBoundingClientRect();
        // Elements already in view appear smoothly without hiding
        if (rect.top <= windowHeight * 0.9) {
          el.classList.add('revealed');
        } else {
          // Elements below the fold are armed for entry transition
          el.classList.add('animate-ready');
          observer.observe(el);
        }
      });
    };

    // Small delay to ensure client DOM has mounted after hydration / navigation
    const timeoutId = setTimeout(initElements, 30);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
