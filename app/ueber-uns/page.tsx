import React from 'react';
import { BRAND, ICONS } from '@/constants';
import ueberUnsData from '@/src/content/pages/ueber-uns.json';
import type { UeberUnsContent } from '@/src/content/types';
import { normalizeContent } from '@/src/content/normalize';
import type { Metadata } from 'next';

const ueberUns = normalizeContent<UeberUnsContent>(ueberUnsData);

export const metadata: Metadata = {
  title: ueberUns.meta.title,
  description: ueberUns.meta.description,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Intro Header */}
      <section className="py-20 bg-brand-accent" data-cms-section="ueberuns.intro">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand mb-8" data-cms-field="ueberuns.intro.title">{ueberUns.intro.title}</h1>
          <p className="text-xl text-gray-700 leading-relaxed font-light" data-cms-field="ueberuns.intro.text">
            {ueberUns.intro.text}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" data-cms-section="ueberuns.philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand mb-6" data-cms-field="ueberuns.philosophy.title">{ueberUns.philosophy.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed" data-cms-field="ueberuns.philosophy.text">
                {ueberUns.philosophy.text}
              </p>
              <div className="space-y-4">
                {ueberUns.philosophy.values.map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand"></div>
                    <span className="font-semibold text-brand-dark" data-cms-field={`ueberuns.philosophy.values.${i}`}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ueberUns.philosophy.image.src} 
                  alt={ueberUns.philosophy.image.alt} 
                  className="w-full h-full object-cover"
                  data-cms-field="ueberuns.philosophy.image"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <ICONS.Heart className="w-8 h-8 mb-4 opacity-50" />
                <p className="text-lg font-serif italic" data-cms-field="ueberuns.philosophy.overlayQuote">
                  {ueberUns.philosophy.overlayQuote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Info */}
      <section className="py-20 bg-brand-accent" data-cms-section="ueberuns.security">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand mb-12" data-cms-field="ueberuns.security.title">{ueberUns.security.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ueberUns.security.boxes.map((box, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand/5 shadow-sm">
                <h4 className="font-bold text-brand mb-2" data-cms-field={`ueberuns.security.boxes.${i}.label`}>{box.label}</h4>
                <p className="text-sm text-gray-600" data-cms-field={`ueberuns.security.boxes.${i}.text`}>{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
