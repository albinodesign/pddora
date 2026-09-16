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
| Formular-Backend | Web3Forms | API-basiert | Direkter Client-seitiger POST (HTML-Form `action`) |

## Projektstruktur

```
├── app/                          # Next.js App Router (alle aktiven Seiten)
│   ├── api/submit/               # Leeres Verzeichnis (frühere API-Route entfernt, kein Code mehr)
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
├── constants.tsx                 # Re-Exporte aus src/content/site.json (BRAND, CONTACT, NAVIGATION) + SVG-Icons (ICONS)
├── src/content/                      # CMS-entkoppelte Inhalte – ALLE Texte & Bild-Referenzen liegen hier
│   ├── site.json                 # Globale Daten: brand, contact, navigation, header, footer, cookieBanner, metadata, jsonLd
│   ├── types.ts                  # TypeScript-Interfaces für alle Content-JSONs
│   ├── cms.manifest.json         # CMS-Manifest: jedes editierbare Feld (id, label, type, file, path, maxLength)
│   └── pages/                    # Seiteninhalte: home.json, kontakt.json, leistungen.json, ueber-uns.json, impressum.json, datenschutz.json, not-found.json
├── types.ts                      # TypeScript-Typdefinitionen (ServiceCardProps, ServiceCardDetails)
├── tailwind.config.js            # Tailwind-Konfiguration mit Brand-Farben & Fonts (ESM-Export)
├── postcss.config.cjs            # PostCSS-Konfiguration (Tailwind + Autoprefixer)
├── next.config.mjs               # Next.js Static-Export-Konfiguration
├── netlify.toml                  # Netlify Build & Security-Headers
├── metadata.json                 # Projektbeschreibung für Agenten-Tools
├── .env.local.example            # Beispiel-Env-Datei (aktuell nicht verwendet, Key ist hardcodiert)
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
- Google Fonts (Inter, Playfair Display) werden über `next/font/google` in `layout.tsx` geladen und über CSS-Variablen (`--font-inter`, `--font-playfair`) in Tailwind eingebunden
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

Das Kontaktformular in `app/kontakt/page.tsx` sendet **direkt client-seitig** als klassisches HTML-Formular an `https://api.web3forms.com/submit`:
- Methode: POST (via `<form action="https://api.web3forms.com/submit" method="POST">`)
- Felder: `name`, `email`, `phone` (optional), `message`
- Honeypot: `botcheck` (verstecktes Checkbox-Feld)
- DSGVO-Checkbox ist Pflichtfeld
- Bei Erfolg: Weiterleitung zu `https://pd-dora.de/kontakt?success=true`
- Der Access-Key ist im HTML hardcodiert (`7ac58a77-a441-4f08-a8cc-3f735b6159ca`)

Es existiert keine aktive API-Route mehr für Formularversand (das Verzeichnis `app/api/submit/` ist leer; frühere serverseitige Validierungsrouten wurden entfernt). Die Datei `.env.local.example` mit `WEB3FORMS_ACCESS_KEY` ist ein Überbleibsel und wird vom aktuellen Code nicht eingelesen.

## Deployment

### Netlify (`netlify.toml`)
- Build-Befehl: `npm run build`
- Publish-Verzeichnis: `out`
- Security-Headers gesetzt:
  - `X-XSS-Protection: 1; mode=block`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` (umfangreich konfiguriert, erlaubt u. a. `api.web3forms.com` als connect-src und Google Fonts; enthält `frame-ancestors 'self' http://localhost:* https://*.vercel.app` für CMS-Preview-Einbettung — `X-Frame-Options` wurde zugunsten von `frame-ancestors` entfernt; `img-src` erlaubt zusätzlich `https://*.supabase.co`)

### Static Export
- `next.config.mjs`: `output: 'export'`, `images: { unoptimized: true }`, `reactStrictMode: true`
- Bilder in `public/` werden als statische Assets kopiert
- `out/` enthält den vollständigen statischen Export und ist im Repository eingecheckt

## Wichtige Konfigurationsdateien

### `next.config.mjs`
```javascript
{
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**.supabase.co' }],
  },
  reactStrictMode: true
}
```

### `tailwind.config.js`
- ESM-Export (`export default`), da `package.json` `"type": "module"` setzt
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

Aus `src/content/site.json` (in `constants.tsx` als `BRAND`, `CONTACT`, `NAVIGATION` re-exportiert):

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
5. Bei Bedarf Link in `src/content/site.json` → `navigation` ergänzen (wird in `constants.tsx` als `NAVIGATION` re-exportiert)

### Kontaktdaten aktualisieren
`src/content/site.json` bearbeiten (Abschnitt `contact`) – `constants.tsx` re-exportiert die Werte, Änderungen propagieren automatisch in alle Komponenten.

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

## Content-Management (CMS-Entkopplung)

Seit der CMS-Refaktorierung kommen **alle sichtbaren Texte und Bild-Referenzen aus JSON-Dateien** unter `src/content/` — im JSX steht kein statischer deutscher Text mehr (Ausnahmen: rein technische Strings wie aria-hidden, className, Formular-Feldnamen).

- `src/content/site.json` — globale Unternehmensdaten: `brand`, `contact`, `navigation`, `header`, `footer`, `cookieBanner`, `metadata` (globale SEO-Werte aus `layout.tsx`), `jsonLd` (Structured Data der Startseite)
- `src/content/pages/*.json` — Seiteninhalte: `home`, `kontakt`, `leistungen`, `ueber-uns`, `impressum`, `datenschutz`, `not-found` (inkl. `meta`-Objekten für die `metadata`-Exports)
- `src/content/types.ts` — TypeScript-Interfaces für alle Content-JSONs
- `src/content/cms.manifest.json` — CMS-Manifest mit **271 editierbaren Feldern** in 14 Sektionen (u. a. "Startseite - Hero", "Startseite - Leistungen (Karte 1..3)", "Kontaktseite", "Header/Footer", "Cookie-Banner", "Globale Unternehmensdaten"). Jedes Feld hat `id`, `label`, `type` (text/textarea/image), `file`, `path` (JSON-Pfad) und `maxLength`. Enthält `features: { "blog": false }` (die Website hat keinen Blog).

**Wichtig — keine Arrays in Content-JSONs:** Sammlungen (Navigation, Leistungen, Features, USPs, Steps, Values, Boxes) sind **Objekte mit stabilen kebab-case-String-Schlüsseln** (z. B. `services.behandlungspflege`, `navigation.startseite`, `steps.items.erstkontakt`), nicht Arrays. Grund: Das CMS patched JSONs über die Manifest-Pfade und kommt mit numerischen Array-Indizes nicht klar — bei Pfaden wie `services.3.description` ersetzte es das gesamte Array durch ein Index-Objekt und löschte dabei alle anderen Einträge. Objekt-Pfade mit String-Keys patched es korrekt. Die Schlüsselreihenfolge im JSON entspricht der früheren Array-Reihenfolge; Komponenten iterieren mit `Object.entries(...)`/`Object.values(...)` (Einfügereihenfolge bleibt erhalten), Typen sind `Record<string, T>`. Die frühere `normalizeContent()`-Hilfsfunktion (Index-Objekt → Array) wurde damit obsolet und entfernt; JSON-Imports werden direkt typisiert (`const home: HomeContent = homeData`).

### DOM-Marker & Preview-Bridge
- Sektionen tragen `data-cms-section="..."` (z. B. `home.hero`), editierbare Text-/Bild-Tags `data-cms-field="..."` (Feld-`id` aus dem Manifest; Listen mit String-Schlüssel, z. B. `home.services.grundpflege.title`)
- `app/layout.tsx` enthält eine Inline-Preview-Bridge (`dangerouslySetInnerHTML`): ein `message`-Listener verarbeitet `postMessage`-Events vom Typ `CMS_FIELD_UPDATE` mit `{ fieldId, value }` und aktualisiert das Element mit passendem `data-cms-field` (bei `<img>` das `src`-Attribut, sonst `textContent`). Harmlos in Produktion.

### Texte ändern
Texte/Bilder in der passenden JSON-Datei unter `src/content/` ändern, danach `npm run build` ausführen und `out/` committen. Bei neuen Feldern das Manifest (`src/content/cms.manifest.json`) und ggf. `src/content/types.ts` mitpflegen.

---

*Letzte Aktualisierung: 2026-09-16*
