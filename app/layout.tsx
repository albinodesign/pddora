import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';


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
  title: 'Ambulanter Pflegedienst Dora GmbH | Pflege mit Herz in Offenbach/Frankfurt am Main',
  description: 'Ihr ambulanter Pflegedienst für kompetente und herzliche Pflege in den eigenen vier Wänden. Dora GmbH – Vertrauen und Menschlichkeit in Offenbach/Frankfurt am Main.',
  metadataBase: new URL('https://pd-dora.de'),
  openGraph: {
    title: 'Ambulanter Pflegedienst Dora GmbH | Pflege mit Herz',
    description: 'Ihr ambulanter Pflegedienst für kompetente und herzliche Pflege in den eigenen vier Wänden.',
    url: 'https://pd-dora.de',
    siteName: 'Ambulanter Pflegedienst Dora GmbH',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambulanter Pflegedienst Dora GmbH',
    description: 'Pflege mit Herz, Kompetenz und Vertrauen in Offenbach/Frankfurt am Main.',
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
      </body>
    </html>
  )
}
