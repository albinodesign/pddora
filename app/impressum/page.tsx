import React from 'react';
import { BRAND, CONTACT } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Ambulanter Pflegedienst Dora GmbH',
  description: 'Impressum des Ambulanten Pflegedienstes Dora GmbH in Offenbach/Frankfurt am Main.',
};

export default function ImpressumPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-serif font-bold text-brand mb-8">Impressum</h1>
        
        <h2 className="text-xl font-bold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          {BRAND.name}<br />
          {CONTACT.address}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Vertreten durch</h2>
        <p>Said Hamdaoui</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Kontakt</h2>
        <p>
          Telefon: {CONTACT.phone}<br />
          E-Mail: {CONTACT.email}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Registereintrag</h2>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: [Amtsgericht Stadt]<br />
          Registernummer: [HRB Nummer]
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          [USt-ID Nummer]
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Redaktionell verantwortlich</h2>
        <p>Said Hamdaoui</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </div>
  );
}
