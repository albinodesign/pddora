"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION, CONTACT, ICONS } from '@/constants';
import siteData from '@/src/content/site.json';
import { normalizeContent } from '@/src/content/normalize';
import type { SiteContent } from '@/src/content/types';

const header = normalizeContent<SiteContent>(siteData).header;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand/10 shadow-sm" data-cms-section="global.header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label={header.logoAriaLabel}>
            <img
              src={header.logoSrc}
              alt={header.logoAlt}
              className="h-12 w-12 object-contain rounded-full bg-white p-1 shadow-sm border border-brand/10"
              data-cms-field="header.logo"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand tracking-tight font-serif group-hover:text-brand-light transition-colors" data-cms-field="header.brandLine1">
                {header.brandLine1}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium -mt-1" data-cms-field="header.brandLine2">
                {header.brandLine2}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8" aria-label={header.navAriaLabel}>
            {NAVIGATION.map((item, idx) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  pathname === item.path ? 'text-brand border-b-2 border-brand pb-1' : 'text-gray-600'
                }`}
                aria-current={pathname === item.path ? 'page' : undefined}
                data-cms-field={`navigation.${idx}.name`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-light transition-all shadow-md active:scale-95"
            >
              <ICONS.Phone className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-brand hover:bg-brand/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? header.menuCloseLabel : header.menuOpenLabel}
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-white border-t border-gray-100 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.path ? 'bg-brand/5 text-brand' : 'text-gray-700 hover:bg-gray-50'
              }`}
              aria-current={pathname === item.path ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 px-3">
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-3 bg-brand text-white w-full py-3 rounded-lg text-lg font-bold shadow-lg"
            >
              <ICONS.Phone className="w-5 h-5" />
              <span data-cms-field="header.mobileCallCta">{header.mobileCallCta}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
