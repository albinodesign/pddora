import React from 'react';
import Link from 'next/link';
import { BRAND, CONTACT, ICONS } from '@/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white/90 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-white tracking-wide uppercase">
              {BRAND.name}
            </h2>
            <p className="text-sm leading-relaxed text-white/80 italic">
              „Pflege mit Herz, Kompetenz und Vertrauen."
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              Ihr kompetenter Partner für häusliche Pflege. Wir bieten individuelle Unterstützung für ein würdevolles Leben in den eigenen vier Wänden.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <ICONS.Location className="w-5 h-5 text-white/50 shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <ICONS.Location className="w-5 h-5 text-white/50 shrink-0" />
                <span className="text-brand-accent/80">Einzugsgebiet: {CONTACT.serviceArea}</span>
              </li>
              <li className="flex items-center gap-3">
                <ICONS.Phone className="w-5 h-5 text-white/50 shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ICONS.Mail className="w-5 h-5 text-white/50 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ICONS.Phone className="w-5 h-5 text-white/50 shrink-0" />
                <span>Fax: {CONTACT.fax}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors underline-offset-4 hover:underline">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors underline-offset-4 hover:underline">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors underline-offset-4 hover:underline">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/70">
          <p>© {new Date().getFullYear()} {BRAND.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
