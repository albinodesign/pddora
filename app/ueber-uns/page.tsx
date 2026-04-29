import React from 'react';
import { BRAND, ICONS } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns | Ambulanter Pflegedienst Dora GmbH',
  description: 'Lernen Sie den ambulanten Pflegedienst Dora GmbH kennen. Menschlichkeit, Kompetenz und Vertrauen in Offenbach und Frankfurt am Main.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Intro Header */}
      <section className="py-20 bg-brand-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand mb-8">Über uns</h1>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Der ambulante Pflegedienst Dora GmbH steht für eine ganzheitliche Versorgung, 
            bei der der Mensch mit seiner individuellen Geschichte im Mittelpunkt steht.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand mb-6">Unsere Philosophie</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pflege ist für uns mehr als nur eine Dienstleistung. Es ist eine Begegnung auf Augenhöhe. 
                In der Dora GmbH arbeiten wir täglich daran, Vertrauen zu schaffen und Sicherheit zu geben. 
                Unser Team besteht aus qualifizierten Fachkräften, die ihre Arbeit mit Leidenschaft und Empathie ausüben.
              </p>
              <div className="space-y-4">
                {[
                  "Individuelle Pflegeplanung",
                  "Respektvolle Kommunikation",
                  "Höchste fachliche Standards",
                  "Kontinuität durch Bezugspflege"
                ].map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand"></div>
                    <span className="font-semibold text-brand-dark">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/uberuns.webp?v=20260129" 
                  alt="Nursing staff" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <ICONS.Heart className="w-8 h-8 mb-4 opacity-50" />
                <p className="text-lg font-serif italic">
                  „Wir pflegen so, wie wir selbst einmal gepflegt werden möchten.“
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Info */}
      <section className="py-20 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand mb-12">Ihre Sicherheit ist unser Anspruch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Erfahrung", text: "Langjährige Expertise in der ambulanten Pflege." },
              { label: "Qualifikation", text: "Regelmäßige Fort- und Weiterbildungen für unser Team." },
              { label: "Erreichbarkeit", text: "Für Notfälle rund um die Uhr als verlässlicher Partner." },
              { label: "Beratung", text: "Individuelle Hilfe bei Anträgen und Finanzierungsfragen." }
            ].map((box, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand/5 shadow-sm">
                <h4 className="font-bold text-brand mb-2">{box.label}</h4>
                <p className="text-sm text-gray-600">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
