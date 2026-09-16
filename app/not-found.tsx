import Link from 'next/link';
import notFoundData from '@/content/pages/not-found.json';
import type { NotFoundContent } from '@/content/types';

const notFound: NotFoundContent = notFoundData;

export const metadata = {
  title: notFound.meta.title,
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-accent px-4" data-cms-section="notfound">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand mb-4" data-cms-field="notfound.code">{notFound.code}</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6" data-cms-field="notfound.title">{notFound.title}</h2>
        <p className="text-gray-600 mb-8" data-cms-field="notfound.text">{notFound.text}</p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          data-cms-field="notfound.ctaLabel"
        >
          {notFound.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
