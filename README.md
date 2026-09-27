# GHARAPURI — The Digital Memory of Elephanta

<div align="center">

![GHARAPURI Hero Banner](/public/images/trimurti.jpg)

### **A Digital Heritage Archive for Elephanta Island, Mumbai, India**
*UNESCO World Heritage Site (Inscribed 1987)*

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey?style=for-the-badge)](https://creativecommons.org/licenses/by-sa/4.0/)

[Explore the Caves](#-features) • [Architecture](#-technology-stack) • [Installation](#-getting-started) • [Preservation](#-preservation-philosophy) • [Attributions](#-sources--credits)

</div>

---

## 🏛️ About the Project

**GHARAPURI** (*City of Caves*) is a digital cultural heritage archive dedicated to **Elephanta Island** and its celebrated rock-cut cave temples in Mumbai Harbour, Maharashtra, India. Inscribed as a UNESCO World Heritage Site in 1987, the 5th–6th century rock-cut sanctuary contains some of the most concentrated and sublime masterpieces of early medieval Shaiva iconography, foremost among them the monumental **Trimurti** (Sadashiva).

Developed as a Semester 5 **Community Engagement Project (CEP)**, GHARAPURI establishes a digital documentation layer that exists alongside physical conservation. It bridges institutional documentation (Archaeological Survey of India, UNESCO, CyArk 3D scanning) with local community memory (boatmen, shopkeepers, guides, and island residents).

> *"Preserving what exists, documenting what is remembered, and making Elephanta's heritage accessible for future generations."*

---

## ✨ Features

- **Atmospheric Visual Identity**: Deep basalt-stone aesthetic (`#11110F`) with antique temple gold (`#B89A5A`) and aged parchment typography, featuring subtle Ken Burns zoom animations.
- **Universal Search Overlay (`Ctrl+K` / `Cmd+K`)**: Instant full-text search across sculptures, timeline events, archive items, oral history testimonies, and preservation records.
- **3D Digital Experience**: Explores the 2023 LiDAR and photogrammetry documentation campaign conducted by **CyArk / Tapestry**, accompanied by an educational 7-step guide (*"How a Cave Becomes Data"*).
- **Interactive Historical Timeline**: Chronological journey from the 5th–6th century rock-cut excavation to modern digital initiatives, highlighting academic consensus vs. debated historical dating.
- **Survey Results Dashboard**: Interactive tabbed visualization of a 127-respondent student survey exploring heritage awareness, digital preservation preferences, and community engagement insights — featuring donut charts, Likert scales, horizontal bar graphs, and auto-generated key insights.
- **Sculptures & Lightbox Gallery**: Curated studies of the 6 canonical Cave 1 relief panels (*Sadashiva / Trimurti, Nataraja, Yogishvara, Gangadhara, Ardhanarishvara, Mahishasuramardini*) with high-resolution lightbox inspection.
- **Digital Archive Catalog**: Museum-style accession cards with live keyword search and multi-category filtering (`Sculpture`, `Architecture`, `Island`).
- **Voices of Gharapuri (Oral Histories)**: Field interview recordings and complete English/Marathi transcripts capturing indigenous perspectives of ferry operators, island elders, shopkeepers, guides, and conservation staff.
- **On-Site Field Documentation & Photo Archive**: Dual-mode interactive gallery featuring on-site field survey photographs captured on 27 Sept 2026 with verified GPS geocoding (`18°57'45.4" N, 72°55'58.2" E`), elevation tracking, and deep architectural/iconographic analysis (Mandapa, Nataraja Niche, Hillside Facade with ASI Scaffolding, Sunken Courtyard, and Kalyanasundara Murti) plus an interactive fullscreen Lightbox inspector.
- **Preservation Framework**: Critical exploration of the Five Pillars of Conservation, featuring real-world on-site photographic case studies of active ASI facade stabilization and monsoon drainage diversion.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3 (Turbopack)](https://nextjs.org/) | App Router, static generation, high-performance rendering |
| **Library** | [React 19.2](https://react.dev/) | Client components, hooks, external store synchronization |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type definitions across all heritage data models |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern token-based CSS variables, inline theme definition |
| **Typography** | [Google Fonts](https://fonts.google.com/) | `Cormorant Garamond` (display serif) & `Inter` (body text) |
| **Animations** | Native CSS & IntersectionObserver | Viewport reveal animations, Ken Burns zoom, `prefers-reduced-motion` compliance |

---

## 📂 Repository Structure

```
gharpuri/
├── public/
│   └── images/                     # 15 high-res historical & architectural photos
├── src/
│   ├── app/
│   │   ├── globals.css             # Theme tokens, custom animations, custom scrollbars
│   │   ├── layout.tsx              # Root HTML shell, fonts, OpenGraph meta
│   │   └── page.tsx                # Main entry point composing all 12 sections
│   ├── components/
│   │   ├── archive/Archive.tsx     # Filterable digital catalog (responsive grid)
│   │   ├── gallery/PhotoArchive.tsx# Curated photographic masonry gallery
│   │   ├── hero/                   # Hero, Introduction & Explore hubs
│   │   ├── layout/Footer.tsx       # Institutional links, brand mark, legal credits
│   │   ├── navigation/Navigation.tsx# Glassmorphism navbar with mobile drawer
│   │   ├── oral-history/OralHistories.tsx # Community testimonies & audio transcripts
│   │   ├── preservation/Preservation.tsx  # Conservation analysis & 5 pillars
│   │   ├── sculptures/Sculptures.tsx      # Relief panels with full-screen lightbox
│   │   ├── survey/SurveyResults.tsx       # Survey data visualization dashboard
│   │   ├── three-d/ThreeDExperience.tsx   # 3D scanning showcase & process guide
│   │   ├── timeline/Timeline.tsx   # Chronological history with confidence tags
│   │   └── ui/                     # SearchOverlay, Reveal animations, Sources, About
│   └── data/                       # Strongly-typed static data modules
│       ├── types.ts                # TypeScript interfaces
│       ├── archive.ts              # Museum catalog items (GH-001 to GH-012)
│       ├── oralHistories.ts        # Long-form oral history transcripts
│       ├── sculptures.ts           # Shaiva iconographic panels
│       ├── surveyData.ts           # Pre-processed anonymised survey responses
│       ├── sources.ts              # Citations, institutional links & media licenses
│       ├── threeD.ts               # 3D model metadata & documentation stages
│       └── timeline.ts             # Chronological history records
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 18.18+](https://nodejs.org/)
- `npm` or `pnpm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gamerevolusion/Gharpuri.git
   cd Gharpuri
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the archive.

### Quality Checks & Verification

- **Lint code:**
  ```bash
  npm run lint
  ```
- **Create production build:**
  ```bash
  npm run build
  ```

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project** and select `Gamerevolusion/Gharpuri`.
3. In **Application Preset / Framework Preset**, select **Next.js**.
4. Leave all build settings as default (`next build`, output `.next`).
5. Click **Deploy**.

---

## 📜 Archival Methodology & Ethics

GHARAPURI operates as an academic digital heritage project. It observes standard archival and public history principles:

- **Institutional Record**: Historical events, UNESCO dates, ASI conservation efforts, and CyArk 3D scan data cite public institutional documentation directly.
- **Community Memory & Composite Documentation**: Oral history accounts are compiled as composite representations following standard oral history archival procedures under the project's *Field Documentation Series*.
- **Digital Conservation vs. Physical Conservation**: Digital documentation does not substitute physical stone preservation; it provides an independent, accessible, and measurable record for future generations.

---

## 📚 Sources & Credits

- **Archaeological Survey of India (ASI)**: Custodian and conservator of Elephanta Caves. [asi.nic.in](https://asi.nic.in/)
- **UNESCO World Heritage Centre**: Inscription dossier and Statement of Outstanding Universal Value (1987, Criteria i, iii). [whc.unesco.org/en/list/244](https://whc.unesco.org/en/list/244)
- **CyArk / Tapestry**: 3D LiDAR & photogrammetric digital documentation (2023). [cyark.org](https://www.cyark.org/) • [tapestry.cyark.org](https://tapestry.cyark.org/)
- **Wikimedia Commons**: High-resolution imagery provided under Creative Commons licenses (CC BY-SA 4.0 / CC BY 2.0). Individual photographer attributions are cited in the on-site *Sources & Credits* registry.

---

## 📄 License

This academic project is created for educational and cultural heritage preservation purposes.
Text and documentation structure are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Media items retain their respective Creative Commons and institutional licenses.
