import React from 'react';
import PageIntro from '@/components/PageIntro';
import ServiceCard from '@/components/ServiceCard';
import { CONTACT, ICONS } from '@/constants';
import leistungenData from '@/src/content/pages/leistungen.json';
import type { LeistungenContent } from '@/src/content/types';
import type { Metadata } from 'next';

const leistungen: LeistungenContent = leistungenData;

export const metadata: Metadata = {
  title: leistungen.meta.title,
  description: leistungen.meta.description,
};

const serviceIcons = [
  <ICONS.Medical key="medical" className="w-12 h-12" />,
  <ICONS.Bath key="bath" className="w-12 h-12" />,
  <ICONS.Shield key="shield" className="w-12 h-12" />,
  <ICONS.Heart key="heart" className="w-12 h-12" />,
  <ICONS.Users key="users" className="w-12 h-12" />,
  <ICONS.HomeService key="home" className="w-12 h-12" />,
  <ICONS.Star key="star" className="w-12 h-12" />,
];

const uspIcons = [
  <ICONS.Users key="users" className="w-6 h-6" />,
  <ICONS.Clock key="clock" className="w-6 h-6" />,
  <ICONS.Shield key="shield" className="w-6 h-6" />,
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pb-32">
      <PageIntro 
        accent={leistungen.intro.accent}
        title={leistungen.intro.title}
        description={leistungen.intro.description}
        cmsPrefix="leistungen.intro"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20" data-cms-section="leistungen.services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leistungen.services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              title={service.title}
              description={service.description}
              icon={serviceIcons[idx]}
              features={service.features}
              cmsPrefix={`leistungen.services.${idx}`}
            />
          ))}
        </div>
      </section>

      {/* USPs / Besonderheiten */}
      <section className="py-32 bg-brand-accent/30 mt-20" data-cms-section="leistungen.usp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand" data-cms-field="leistungen.usp.title">{leistungen.usp.title}</h2>
            <p className="text-gray-500 mt-4" data-cms-field="leistungen.usp.subline">{leistungen.usp.subline}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leistungen.usp.items.map((usp, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
                <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6">
                  {uspIcons[i]}
                </div>
                <h4 className="text-xl font-bold text-brand mb-4" data-cms-field={`leistungen.usp.items.${i}.title`}>{usp.title}</h4>
                <p className="text-brand-dark text-base leading-relaxed font-medium" data-cms-field={`leistungen.usp.items.${i}.desc`}>{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-4" data-cms-section="leistungen.steps">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand text-center mb-16" data-cms-field="leistungen.steps.title">{leistungen.steps.title}</h2>
        <div className="space-y-10">
          {leistungen.steps.items.map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="w-16 h-16 shrink-0 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">{item.step}</div>
              <div>
                <h4 className="text-xl font-bold text-brand mb-2" data-cms-field={`leistungen.steps.items.${idx}.title`}>{item.title}</h4>
                <p className="text-gray-600 leading-relaxed" data-cms-field={`leistungen.steps.items.${idx}.desc`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-24 text-center text-white mx-4 rounded-[4rem] mb-12 shadow-2xl relative overflow-hidden" data-cms-section="leistungen.cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" aria-hidden="true"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8" data-cms-field="leistungen.cta.title">{leistungen.cta.title}</h3>
          <p className="text-brand-accent/80 text-xl mb-12" data-cms-field="leistungen.cta.text">{leistungen.cta.text}</p>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
            className="inline-flex items-center gap-6 bg-white text-brand px-12 py-6 rounded-full text-2xl font-black shadow-xl hover:scale-105 transition-transform"
          >
            <ICONS.Phone className="w-8 h-8" />
            {CONTACT.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
