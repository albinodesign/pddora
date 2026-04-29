import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Ambulanter Pflegedienst Dora GmbH',
  description: 'Datenschutzerklärung des Ambulanten Pflegedienstes Dora GmbH in Offenbach/Frankfurt am Main.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-serif font-bold text-brand mb-8">Datenschutzerklärung</h1>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-lg font-bold mt-6 mb-2">Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Datenerfassung auf dieser Website</h3>
        <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (siehe Impressum).</p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Hostinganbieter</h2>
        <p>Wir hosten unsere Website bei Netlify. Bei jedem Aufruf dieser Website werden automatisierte Informationen von Ihrem Browser an Netlify übermittelt (Server-Logfiles). Dies sind bspw. IP-Adresse, Datum/Uhrzeit, Browser-Typ.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Web3Forms</h2>
        <p>Für unser Kontaktformular nutzen wir den Dienst Web3Forms. Die von Ihnen in das Formular eingegebenen Daten werden an die Server von Web3Forms weitergeleitet, damit wir Ihre Anfrage bearbeiten können. Weitere Informationen finden Sie in der Datenschutzerklärung von Web3Forms.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
        
        <p className="mt-12 text-sm text-gray-500 italic">Hinweis: Dies ist ein Muster-Text. Für eine rechtsgültige Webseite sollten diese Texte von einem Fachanwalt geprüft werden.</p>
      </div>
    </div>
  );
}
