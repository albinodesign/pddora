import Link from 'next/link';

export const metadata = {
  title: 'Seite nicht gefunden | Ambulanter Pflegedienst Dora GmbH',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-accent px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Seite nicht gefunden</h2>
        <p className="text-gray-600 mb-8">Die von Ihnen gesuchte Seite existiert leider nicht. Kehren Sie zur Startseite zurück.</p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
