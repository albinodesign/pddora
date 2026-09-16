import React from 'react';
import { BRAND, CONTACT } from '@/constants';
import impressumData from '@/src/content/pages/impressum.json';
import type { ImpressumContent } from '@/src/content/types';
import { normalizeContent } from '@/src/content/normalize';
import type { Metadata } from 'next';

const impressum = normalizeContent<ImpressumContent>(impressumData);

export const metadata: Metadata = {
  title: impressum.meta.title,
  description: impressum.meta.description,
};

export default function ImpressumPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-20" data-cms-section="impressum">
        <h1 className="text-3xl font-serif font-bold text-brand mb-8" data-cms-field="impressum.title">{impressum.title}</h1>
        
        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.tmg.heading">{impressum.tmg.heading}</h2>
        <p>
          {BRAND.name}<br />
          {CONTACT.address}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.representedBy.heading">{impressum.representedBy.heading}</h2>
        <p data-cms-field="impressum.representedBy.name">{impressum.representedBy.name}</p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.contact.heading">{impressum.contact.heading}</h2>
        <p>
          {impressum.contact.phoneLabel} {CONTACT.phone}<br />
          {impressum.contact.emailLabel} {CONTACT.email}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.register.heading">{impressum.register.heading}</h2>
        <p>
          {impressum.register.line1}<br />
          {impressum.register.courtLabel} <span data-cms-field="impressum.register.court">{impressum.register.court}</span><br />
          {impressum.register.numberLabel} <span data-cms-field="impressum.register.number">{impressum.register.number}</span>
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.tax.heading">{impressum.tax.heading}</h2>
        <p>
          {impressum.tax.label}<br />
          <span data-cms-field="impressum.tax.number">{impressum.tax.number}</span>
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.editorial.heading">{impressum.editorial.heading}</h2>
        <p data-cms-field="impressum.editorial.name">{impressum.editorial.name}</p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="impressum.dispute.heading">{impressum.dispute.heading}</h2>
        <p data-cms-field="impressum.dispute.text">{impressum.dispute.text}</p>
      </div>
    </div>
  );
}
