"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import siteData from '@/src/content/site.json';
import type { SiteContent } from '@/src/content/types';

const cookie: SiteContent['cookieBanner'] = siteData.cookieBanner;

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay visibility slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500" data-cms-section="global.cookieBanner">
      <div className="max-w-5xl mx-auto bg-white border border-brand/10 shadow-[0_-20px_50px_rgba(71,21,59,0.15)] rounded-[2rem] p-6 md:p-8 md:flex items-center justify-between gap-8 backdrop-blur-lg bg-white/95">
        <div className="mb-6 md:mb-0 max-w-2xl">
          <h3 className="text-xl font-serif font-bold text-brand mb-2" data-cms-field="cookieBanner.title">{cookie.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span data-cms-field="cookieBanner.textPreLink">{cookie.textPreLink}</span><Link href="/datenschutz" className="underline font-bold text-brand hover:text-brand-light"><span data-cms-field="cookieBanner.privacyLinkLabel">{cookie.privacyLinkLabel}</span></Link><span data-cms-field="cookieBanner.textPostLink">{cookie.textPostLink}</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-8 py-3 bg-brand text-white text-sm font-black rounded-full hover:bg-brand-light transition-all shadow-lg hover:scale-105 active:scale-95"
            data-cms-field="cookieBanner.acceptLabel"
          >
            {cookie.acceptLabel}
          </button>
          <button
            onClick={handleDecline}
            className="px-8 py-3 bg-white border-2 border-brand/10 text-brand text-sm font-bold rounded-full hover:bg-brand-accent transition-all"
            data-cms-field="cookieBanner.declineLabel"
          >
            {cookie.declineLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
