import React from 'react';
import Link from 'next/link';
import { BRAND, CONTACT, ICONS } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ambulanter Pflegedienst Dora GmbH | Pflege mit Herz in Frankfurt & Offenbach',
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.webp?v=20260129" 
            alt="Warm hands holding" 
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/80 to-transparent" aria-hidden="true"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-8 border border-white/20 backdrop-blur-md">
              <ICONS.Heart className="w-5 h-5" />
              <span>Ambulanter Pflegedienst – Dora GmbH</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.05]">
              Pflege mit Herz, <br />
              <span className="text-brand-accent/90 italic">Kompetenz & Vertrauen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light max-w-xl">
              Wir begleiten Sie und Ihre Liebsten würdevoll im Alltag – für ein selbstbestimmtes Leben im eigenen Zuhause.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-4 bg-white text-brand px-10 py-5 rounded-full text-xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-brand-accent hover:scale-105 transition-all active:scale-95"
              >
                <ICONS.Phone className="w-6 h-6 animate-pulse" />
                Kostenlose Beratung
              </a>
              <Link 
                href="/leistungen"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote with Image */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
          <div className="py-12 md:py-24 lg:pr-16">
            <ICONS.Heart className="w-12 h-12 text-brand/20 mb-8" />
            <blockquote className="text-3xl md:text-5xl font-serif italic text-brand leading-[1.2] mb-10">
              {BRAND.quote}
            </blockquote>
            <p className="text-brand font-bold uppercase tracking-widest text-sm">Unser Versprechen an Sie</p>
          </div>
          <div className="relative h-[300px] sm:h-[350px] lg:h-full min-h-[300px] lg:min-h-[500px]">
            <img 
              src="/1.webp?v=20260129" 
              alt="Caring interaction" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand/10" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Brief Service Overview with Images */}
      <section className="py-20 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand text-sm font-black uppercase tracking-[0.3em] mb-4">Was wir bieten</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Wie wir Ihnen helfen</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grundpflege",
                desc: "Würdevolle Unterstützung bei Körperpflege, Ernährung und Mobilität im vertrauten Zuhause.",
                img: "/2.webp?v=20260129",
                icon: <ICONS.Bath className="w-8 h-8" />
              },
              {
                title: "Behandlungspflege",
                desc: "Fachgerechte medizinische Versorgung nach ärztlicher Verordnung durch unsere Profis.",
                img: "/3.webp?v=20260129",
                icon: <ICONS.Medical className="w-8 h-8" />
              },
              {
                title: "Hauswirtschaft",
                desc: "Wir halten Ihnen den Rücken frei und unterstützen Sie zuverlässig bei alltäglichen Aufgaben.",
                img: "/4.webp?v=20260129",
                icon: <ICONS.HomeService className="w-8 h-8" />
              }
            ].map((s, idx) => (
              <div key={idx} className="group bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-brand/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-brand shadow-lg">
                    {s.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-serif font-bold text-brand mb-4">{s.title}</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">{s.desc}</p>
                  <Link href="/leistungen" className="inline-flex items-center gap-2 text-brand font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    Mehr erfahren <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Wir Section - FLEXBOX */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* TEXT BLOCK - zuerst im DOM = oben auf mobile */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-brand text-sm font-black uppercase tracking-[0.3em] mb-4">Warum wir?</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-12 leading-tight">Menschlichkeit ist unsere höchste Priorität.</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-accent flex items-center justify-center text-brand">
                    <ICONS.Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-1">Bezugspflege</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">Wir setzen auf feste Ansprechpartner für echtes Vertrauen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-accent flex items-center justify-center text-brand">
                    <ICONS.Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-1">24h Erreichbarkeit</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">Im Notfall sind wir rund um die Uhr als verlässlicher Partner an Ihrer Seite.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-accent flex items-center justify-center text-brand">
                    <ICONS.Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-1">Individuelle Beratung</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">Wir nehmen uns Zeit für Ihre Situation und planen maßgeschneidert.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-accent flex items-center justify-center text-brand">
                    <ICONS.Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-1">Höchste Qualität</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">Regelmäßige Schulungen sichern erstklassige medizinische Standards.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/ueber-uns" className="mt-16 inline-flex items-center gap-4 bg-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-brand-light transition-all">
                Mehr über unser Team erfahren
              </Link>
            </div>

            {/* BILD BLOCK - zweites im DOM = unten auf mobile */}
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/warumwir.webp?v=20260129" 
                  alt="Happy senior" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand rounded-3xl -z-0 opacity-10" aria-hidden="true"></div>
              <div className="absolute top-10 -right-10 bg-brand text-white p-10 rounded-3xl shadow-2xl z-20 hidden md:block">
                <ICONS.Star className="w-12 h-12 mb-4 text-brand-accent" />
                <p className="text-2xl font-serif font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Engagement</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-brand py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full -ml-48 -mb-48 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            Wir sind für Sie da. <br /> Rund um die Uhr.
          </h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ein persönliches Gespräch ist der erste Schritt zu einer verlässlichen Pflege. 
            Rufen Sie uns unverbindlich an – wir beraten Sie gerne direkt bei Ihnen zu Hause.
          </p>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-6 bg-white text-brand px-12 py-6 rounded-full text-2xl font-black shadow-[0_25px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform active:scale-95"
          >
            <ICONS.Phone className="w-8 h-8" />
            {CONTACT.phone}
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ambulanter Pflegedienst Dora GmbH",
            description: "Ihr ambulanter Pflegedienst für kompetente und herzliche Pflege in den eigenen vier Wänden.",
            url: "https://pd-dora.de",
            telephone: "+496980089444",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kaiserleistraße 43",
              addressLocality: "Offenbach am Main",
              postalCode: "63067",
              addressCountry: "DE"
            },
            areaServed: "Offenbach und Frankfurt am Main",
            priceRange: "€€"
          })
        }}
      />
    </div>
  );
}
