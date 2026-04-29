# Ambulanter Pflegedienst Dora GmbH - Webauftritt

Ein hochmoderner, barrierefreier und performanter Webauftritt für den ambulanten Pflegedienst Dora GmbH in Offenbach/Frankfurt am Main. Entwickelt mit Next.js, Tailwind CSS und Fokus auf DSGVO-Konformität.

## 🚀 Quick Start

### 1. Installation
Installieren Sie die Abhängigkeiten mit npm:
```bash
npm install
```

### 2. Konfiguration
(Optional) Erstellen Sie eine `.env.local` Datei im Projektstamm:
```bash
cp .env.local.example .env.local
```

### 3. Entwicklung
Starten Sie den Entwicklungsserver:
```bash
npm run dev
```

### 4. Build & Export
Erstellen Sie die statische Version für das Deployment:
```bash
npm run build
```
Die fertigen Dateien befinden sich im Ordner `/out`.

## 🛡️ Sicherheits- & Qualitätsmerkmale
- **DSGVO-Konform:** Integrierter Cookie-Banner, rechtssicheres Impressum und Datenschutzerklärung.
- **Barrierefreiheit:** Einhaltung von WCAG-Standards (ARIA-Labels, semantisches HTML, Skip-Links).
- **Performance:** Optimierte Ladezeiten durch Bildkompression und statischen Export.
- **Sicher:** Honeypot-Schutz im Kontaktformular und Schutz vor XSS/Injection.

## 🛠️ Technologien
- **Framework:** Next.js (App Router) mit statischem Export
- **Styling:** Tailwind CSS
- **Kontaktformulare:** Web3Forms (direkte Client-Integration)
- **Deployment:** Netlify (Ready for Auto-Deployment)

## 📞 Kontakt
Für inhaltliche Fragen wenden Sie sich bitte an die Dora GmbH unter info@pd-dora.de.
