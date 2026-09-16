import React from 'react';
import datenschutzData from '@/content/pages/datenschutz.json';
import type { DatenschutzContent } from '@/content/types';
import type { Metadata } from 'next';

const datenschutz: DatenschutzContent = datenschutzData;

export const metadata: Metadata = {
  title: datenschutz.meta.title,
  description: datenschutz.meta.description,
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-20" data-cms-section="datenschutz">
        <h1 className="text-3xl font-serif font-bold text-brand mb-8" data-cms-field="datenschutz.title">{datenschutz.title}</h1>
        
        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="datenschutz.overview.heading">{datenschutz.overview.heading}</h2>
        <h3 className="text-lg font-bold mt-6 mb-2" data-cms-field="datenschutz.overview.generalHeading">{datenschutz.overview.generalHeading}</h3>
        <p data-cms-field="datenschutz.overview.generalText">{datenschutz.overview.generalText}</p>
        
        <h3 className="text-lg font-bold mt-6 mb-2" data-cms-field="datenschutz.overview.collectionHeading">{datenschutz.overview.collectionHeading}</h3>
        <p data-cms-field="datenschutz.overview.collectionText">{datenschutz.overview.collectionText}</p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="datenschutz.hosting.heading">{datenschutz.hosting.heading}</h2>
        <p data-cms-field="datenschutz.hosting.text">{datenschutz.hosting.text}</p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="datenschutz.web3forms.heading">{datenschutz.web3forms.heading}</h2>
        <p data-cms-field="datenschutz.web3forms.text">{datenschutz.web3forms.text}</p>

        <h2 className="text-xl font-bold mt-8 mb-4" data-cms-field="datenschutz.rights.heading">{datenschutz.rights.heading}</h2>
        <p data-cms-field="datenschutz.rights.text">{datenschutz.rights.text}</p>
        
        <p className="mt-12 text-sm text-gray-500 italic" data-cms-field="datenschutz.note">{datenschutz.note}</p>
      </div>
    </div>
  );
}
