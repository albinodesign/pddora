<!-- AGENTS.md - Ambulanter Pflegedienst Dora GmbH -->

Diese Datei enthält alle wesentlichen Informationen, die KI-Coding-Agenten über dieses Projekt wissen müssen.

## Projektübersicht

**Ambulanter Pflegedienst Dora GmbH** ist die statische Website eines deutschen ambulanten Pflegedienstes mit Sitz in Offenbach am Main. Die Website informiert über Leistungen, das Team und Kontaktmöglichkeiten. Schwerpunkte liegen auf Barrierefreiheit (WCAG), DSGVO-Konformität und modernen Webstandards.

Die gesamte Anwendung läuft ausschließlich über **Next.js App Router** mit statischem HTML-Export. Ältere Vite-basierte Dateien und Verzeichnisse (`pages/`, `App.tsx`, `index.html`, `vite.config.ts`) wurden vollständig entfernt und existieren nicht mehr.

## Technologie-Stack

| Kategorie | Technologie | Version | Bemerkung |
|-----------|-------------|---------|-----------|
| Framework | Next.js | ^16.1.6 | App Router, Static Export |
| React | React | ^19.2.4 | |
| React DOM | react-dom | ^19.2.4 | |
| Styling | Tailwind CSS | ^3.4.1 | PostCSS + Autoprefixer |
| Sprache | TypeScript | ~5.8.2 | strict mode aktiviert |
| Build | next build | – | Static HTML Export nach `/out` |
| Deployment | Netlify | – | Veröffentlicht `/out` |
| Formular-Backend | Web3Forms | API-basiert | Direkter Client-seitiger POST |

## Projektstruktur

```
├── app/                          # Next.js App Router (alle aktiven Seiten)
│   ├── datenschutz/              # Datenschutzerklärung (Muster-Text)
│   ├── impressum/                # Impressum (enthält Platzhalter für HRB/USt-ID)
│   ├── kontakt/                  # Kontaktseite mit Web3Forms-Formular
│   ├── leistungen/               # Leistungsübersicht mit ServiceCards
│   ├── ueber-uns/                # Über-uns-Seite
│   ├── globals.css               # Tailwind-Direktiven & Custom Styles
│   ├── layout.tsx                # Root-Layout mit Metadaten, Fonts, Header, Footer, CookieBanner
│   ├── not-found.tsx             # 404-Fehlerseite
│   └── page.tsx                  # Startseite mit Hero, Leistungsvorschau, USPs, CTA, JSON-LD
├── components/                   # Geteilte React-Komponenten
│   ├── CookieBanner.tsx          # DSGVO-Cookie-Consent-Banner (Client-Komponente)
│   ├── Footer.tsx                # Seitenfuß mit Kontakt, Rechtliches
│   ├── Header.tsx                # Sticky Navigation mit Mobile-Menü (Client-Komponente)
│   ├── PageIntro.tsx             # Einheitliche Seitenüberschrift (Server-Komponente)
│   └── ServiceCard.tsx           # Leistungskarte (Server-Komponente)
├── public/                       # Statische Assets
│   ├── *.webp                    # Optimierte Bilder (hero, 1-4, uberuns, warumwir)
│   ├── logo.jpeg                 # Firmenlogo
│   ├── robots.txt                # SEO-Robots
│   ├── sitemap.xml               # SEO-Sitemap
│   └── site.webmanifest          # PWA-Manifest
├── constants.tsx                 # Brand-Konfiguration, Kontaktdaten, SVG-Icons, Navigation
├── types.ts                      # TypeScript-Typdefinitionen (ServiceCardProps, ServiceCardDetails)
├── tailwind.config.js            # Tailwind-Konfiguration mit Brand-Farben & Fonts
├── postcss.config.cjs            # PostCSS-Konfiguration (Tailwind + Autoprefixer)
├── next.config.mjs               # Next.js Static-Export-Konfiguration
├── netlify.toml                  # Netlify Build & Security-Headers
├── metadata.json                 # Projektdescription für Agenten-Tools
└── out/                          # Next.js Static-Export-Output (eingecheckt)
```

## Build-Befehle

```bash
# Entwicklungsserver (Next.js)
npm run dev

# Produktions-Build (statischer Export nach /out)
npm run build

# Production-Server starten
npm run start

# Linting
npm run lint
```

**Wichtig:** Der Build erzeugt mit `output: 'export'` in `next.config.mjs` statische HTML-Dateien im Ordner `out/`. Dieser Ordner ist im Repository eingecheckt und wird direkt auf Netlify veröffentlicht (`publish = "out"` in `netlify.toml`). Nach jeder Code-Änderung muss `npm run build` ausgeführt und der `out/`-Ordner committet werden, damit die Änderungen live gehen.

## Code-Style-Richtlinien

### Komponentenstruktur
- Funktionale Komponenten mit expliziten TypeScript-Interfaces für Props
- Client-seitige Komponenten müssen `"use client"` am Dateianfang deklarieren
- Server-Komponenten sind Standard (keine Direktive nötig)

### Namenskonventionen
- Komponenten: PascalCase (z. B. `Header.tsx`, `ServiceCard.tsx`)
- Seiten: `page.tsx` (Next.js-Konvention)
- Konstanten-Exports: UPPER_SNAKE_CASE (z. B. `BRAND`, `CONTACT`, `ICONS`, `NAVIGATION`)
- Verzeichnisse: kebab-case (z. B. `ueber-uns/`, `leistungen/`)

### Styling
- Primär Tailwind CSS Utility-Klassen
- Brand-Farben in `tailwind.config.js`:
  - `brand.DEFAULT`: #47153b
  - `brand.light`: #6d215a
  - `brand.dark`: #2e0d26
  - `brand.accent`: #fdf7fa
- Custom CSS in `app/globals.css` für Scrollbar, Skip-Link, Animationen, Fokus-Ringe
- Google Fonts (Inter, Playfair Display) werden über `next/font/google` in `layout.tsx` geladen
- Import-Alias: `@/` löst zum Projektroot auf

### Barrierefreiheit (Pflicht)
- Alle `<img>`-Elemente brauchen deskriptiven `alt`-Text
- Interaktive Elemente benötigen `aria-label` oder sichtbare Labels
- Skip-Link für Tastaturnavigation in `layout.tsx`
- ARIA-Rollen für dynamische Inhalte (z. B. `role="alert"` bei Formularerfolg)
- Semantisches HTML5 (`nav`, `main`, `section`, `article`, `footer`)
- `aria-current="page"` für aktive Navigationslinks
- `aria-expanded` / `aria-controls` für Mobile-Menü

## Formular-Handling

Das Kontaktformular in `app/kontakt/page.tsx` sendet **direkt client-seitig** an `https://api.web3forms.com/submit`:
- Methode: POST
- Felder: `name`, `email`, `phone` (optional), `message`
- Honeypot: `botcheck` (verstecktes Checkbox-Feld)
- DSGVO-Checkbox ist Pflichtfeld
- Bei Erfolg: Weiterleitung zu `https://pd-dora.de/kontakt?success=true`
- Der Access-Key ist im HTML hardcodiert (`7ac58a77-a441-4f08-a8cc-3f735b6159ca`)

Es existiert keine API-Route mehr für Formularversand. Frühere serverseitige Validierungsrouten wurden entfernt.

## Deployment

### Netlify (`netlify.toml`)
- Build-Befehl: `npm run build`
- Publish-Verzeichnis: `out`
- Security-Headers gesetzt:
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` (umfangreich konfiguriert)

### Static Export
- `next.config.mjs`: `output: 'export'`, `images: { unoptimized: true }`, `reactStrictMode: true`
- Bilder in `public/` werden als statische Assets kopiert
- `out/` enthält den vollständigen statischen Export und ist im Repository eingecheckt

## Wichtige Konfigurationsdateien

### `next.config.mjs`
```javascript
{
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true
}
```

### `tailwind.config.js`
- Content-Pfade: `app/`, `components/`, Root-Dateien
- Custom Font-Families: Inter (sans), Playfair Display (serif) über CSS-Variablen
- Brand-Farbpalette erweitert

### `tsconfig.json`
- `paths`: `@/*` → `./*`
- `strict: true`
- `jsx: "react-jsx"`
- `moduleResolution: "node"`

### `postcss.config.cjs`
- Plugins: `tailwindcss`, `autoprefixer`

## Marken-Konstanten

Aus `constants.tsx`:

```typescript
BRAND.name: "Ambulanter Pflegedienst Dora GmbH"
BRAND.tagline: "Pflege mit Herz, Kompetenz und Vertrauen"
BRAND.primaryColor: "#47153b"
BRAND.quote: "„Menschlichkeit steht bei uns im Mittelpunkt..."

CONTACT.phone: "069 – 800 894 44"
CONTACT.mobile: "0160 – 8089444"
CONTACT.fax: "069 – 800 894 45"
CONTACT.email: "info@pd-dora.de"
CONTACT.address: "Kaiserleistraße 43, 63067 Offenbach am Main"
CONTACT.openingHours: "Mo. - Fr.: 09:00 - 16:00 Uhr"
CONTACT.serviceArea: "Alle Stadtteile in Offenbach und Frankfurt am Main. Auf Anfrage bedienen wir auch andere Gebiete."

NAVIGATION: Startseite (/), Leistungen (/leistungen), Über Uns (/ueber-uns), Kontakt (/kontakt)
```

## Icons

Alle Icons sind Inline-SVG-Komponenten in `constants.tsx` unter `ICONS`:
- `ICONS.Phone`, `ICONS.Mail`, `ICONS.Location`
- `ICONS.Check`, `ICONS.Heart`, `ICONS.Clock`
- `ICONS.Users`, `ICONS.Shield`, `ICONS.Medical`
- `ICONS.Bath`, `ICONS.HomeService`, `ICONS.Star`

## Testing

Das Projekt enthält **keine automatisierten Tests**. Manuelle Test-Checkliste:
- [ ] Formularversand funktioniert korrekt
- [ ] Cookie-Banner speichert Präferenz in localStorage
- [ ] Alle Navigationslinks funktionieren
- [ ] Mobiles Responsive Design
- [ ] Tastaturnavigation & Screenreader-Kompatibilität
- [ ] Cross-Browser-Kompatibilität (Chrome, Firefox, Safari)

## Sicherheitsaspekte

1. **Formular-Validierung**: Client-seitig (required, max-length, pattern für E-Mail)
2. **Honeypot**: Verstecktes `botcheck`-Feld im Kontaktformular
3. **Security-Headers**: Über `netlify.toml` konfiguriert (CSP, X-Frame-Options, HSTS, etc.)
4. **Keine sensiblen Daten im Code**: Der Web3Forms-Access-Key ist derzeit im Formular hardcodiert
5. **HTTPS**: In Produktion via Netlify erzwungen (HSTS-Header)

## Sprache & Lokalisierung

- Primärsprache: **Deutsch (de)**
- Alle nutzerseitigen Inhalte sind auf Deutsch
- Rechtliche Seiten (Impressum, Datenschutz) folgen deutschen Rechtsanforderungen
- HTML-Attribut: `lang="de"`
- **Hinweis:** Das Impressum (`app/impressum/page.tsx`) enthält noch Platzhalter für Registergericht, HRB-Nummer und USt-ID. Der Geschäftsführer ist bereits eingetragen: Said Hamdaoui.
- **Hinweis:** Die Datenschutzerklärung (`app/datenschutz/page.tsx`) ist ein Mustertext und sollte rechtsgültig von einem Fachanwalt geprüft werden.

## Cache Busting

Bilder enthalten Versions-Query-Parameter:
```html
<img src="/hero.webp?v=20260129" ... />
```
Bei Bildänderungen muss das Datum in allen betroffenen Dateien aktualisiert werden.

## SEO & Metadaten

- Jede Seite exportiert ein `metadata`-Objekt mit `title`, `description`, OpenGraph und Twitter-Cards
- `layout.tsx` enthält globale Metadaten, Viewport-Einstellungen (`themeColor: '#47153b'`), Icons und Webmanifest
- `robots.txt`, `sitemap.xml` und `site.webmanifest` liegen in `public/`
- Structured Data (JSON-LD) für LocalBusiness ist in der Startseite (`app/page.tsx`) eingebettet

## Häufige Aufgaben

### Neue Seite hinzufügen
1. Verzeichnis unter `app/[seiten-name]/` erstellen
2. `page.tsx` mit Komponenten-Export hinzufügen
3. `metadata`-Export für SEO-Titel definieren
4. `PageIntro`-Komponente für einheitliche Überschriften verwenden
5. Bei Bedarf Link in `constants.tsx` → `NAVIGATION` ergänzen

### Kontaktdaten aktualisieren
`constants.tsx` bearbeiten – Änderungen propagieren automatisch in alle Komponenten.

### Neue Icons hinzufügen
SVG-Komponente in `constants.tsx` unter `ICONS` ergänzen.

### Styles anpassen
- Global: `app/globals.css`
- Tailwind-Konfiguration: `tailwind.config.js`
- Komponenten-spezifisch: Tailwind Utility-Klassen direkt im JSX

### Build nach Änderungen
```bash
npm run build
```
Anschließend den `out/`-Ordner committen, damit die Änderungen auf Netlify live gehen.

---

*Letzte Aktualisierung: 2026-05-08*
