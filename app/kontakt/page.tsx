"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CONTACT, ICONS } from '@/constants';
import kontaktData from '@/src/content/pages/kontakt.json';
import type { KontaktContent } from '@/src/content/types';
import { normalizeContent } from '@/src/content/normalize';

const kontakt = normalizeContent<KontaktContent>(kontaktData);

function ContactContent() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';
  const [redirectUrl, setRedirectUrl] = React.useState('');

  React.useEffect(() => {
    setRedirectUrl(`${window.location.origin}/kontakt?success=true`);
  }, []);

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-brand text-white py-20" data-cms-section="kontakt.intro">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-cms-field="kontakt.intro.title">{kontakt.intro.title}</h1>
          <p className="text-lg text-white/70" data-cms-field="kontakt.intro.subtitle">
            {kontakt.intro.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6" data-cms-section="kontakt.details">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-brand/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <ICONS.Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase" data-cms-field="kontakt.details.phoneLabel">{kontakt.details.phoneLabel}</h3>
                  <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-brand hover:underline">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <ICONS.Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase" data-cms-field="kontakt.details.emailLabel">{kontakt.details.emailLabel}</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-lg font-bold text-brand hover:underline">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <ICONS.Location className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase" data-cms-field="kontakt.details.addressLabel">{kontakt.details.addressLabel}</h3>
                  <p className="text-gray-700 font-medium">{CONTACT.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent p-8 rounded-3xl border border-brand/10">
              <h4 className="font-bold text-brand mb-2" data-cms-field="kontakt.details.officeHoursHeading">{kontakt.details.officeHoursHeading}</h4>
              <p className="text-gray-700">{CONTACT.openingHours}</p>
              <h4 className="font-bold text-brand mb-2 mt-4" data-cms-field="kontakt.details.serviceAreaHeading">{kontakt.details.serviceAreaHeading}</h4>
              <p className="text-gray-700">{CONTACT.serviceArea}</p>
              <p className="text-xs text-gray-500 mt-4 italic" data-cms-field="kontakt.details.note">
                {kontakt.details.note}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-cms-section="kontakt.form">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand/5">
              {isSuccess ? (
                <div role="alert" className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ICONS.Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand mb-4" data-cms-field="kontakt.success.title">{kontakt.success.title}</h3>
                  <p className="text-gray-600 mb-8" data-cms-field="kontakt.success.text">{kontakt.success.text}</p>
                  <a 
                    href="/kontakt"
                    className="text-brand font-bold underline underline-offset-4 inline-block"
                    data-cms-field="kontakt.success.backLabel"
                  >
                    {kontakt.success.backLabel}
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-bold text-brand mb-8" data-cms-field="kontakt.form.heading">{kontakt.form.heading}</h3>
                  
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    <input type="hidden" name="access_key" value="7ac58a77-a441-4f08-a8cc-3f735b6159ca" />
                    <input type="hidden" name="subject" value="Neue Kontaktanfrage - Dora GmbH" />
                    {redirectUrl && <input type="hidden" name="redirect" value={redirectUrl} />}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" data-cms-field="kontakt.form.nameLabel">{kontakt.form.nameLabel}</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          autoComplete="name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                          placeholder={kontakt.form.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" data-cms-field="kontakt.form.emailLabel">{kontakt.form.emailLabel}</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          autoComplete="email"
                          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                          placeholder={kontakt.form.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" data-cms-field="kontakt.form.phoneLabel">{kontakt.form.phoneLabel}</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder={kontakt.form.phonePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" data-cms-field="kontakt.form.messageLabel">{kontakt.form.messageLabel}</label>
                      <textarea 
                        name="message" 
                        rows={5} 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                        placeholder={kontakt.form.messagePlaceholder}
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1 accent-brand" id="dsgvo" />
                      <label htmlFor="dsgvo" className="text-xs text-gray-500">
                        <span data-cms-field="kontakt.form.dsgvoPreLink">{kontakt.form.dsgvoPreLink}</span><a href="/datenschutz" className="underline"><span data-cms-field="kontakt.form.dsgvoLinkLabel">{kontakt.form.dsgvoLinkLabel}</span></a><span data-cms-field="kontakt.form.dsgvoPostLink">{kontakt.form.dsgvoPostLink}</span>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-brand-light transition-colors active:scale-[0.98]"
                      data-cms-field="kontakt.form.submitLabel"
                    >
                      {kontakt.form.submitLabel}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <ContactContent />
    </Suspense>
  );
}
