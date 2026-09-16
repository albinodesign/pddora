import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import siteData from '@/src/content/site.json';
import type { SiteContent } from '@/src/content/types';

const siteMeta: SiteContent['metadata'] = siteData.metadata;


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#47153b',
};

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL('https://pd-dora.de'),
  openGraph: {
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
    url: siteMeta.ogUrl,
    siteName: 'Ambulanter Pflegedienst Dora GmbH',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.twitterTitle,
    description: siteMeta.twitterDescription,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
        <a href="#main-content" className="skip-link">Zum Hauptinhalt springen</a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){window.addEventListener('message',function(e){var d=e.data;if(!d||d.type!=='CMS_FIELD_UPDATE')return;var el=document.querySelector('[data-cms-field="'+CSS.escape(d.fieldId)+'"]');if(!el)return;if(el.tagName==='IMG'){el.setAttribute('src',d.value);}else{el.textContent=d.value;}});})();`,
          }}
        />
      </body>
    </html>
  )
}
