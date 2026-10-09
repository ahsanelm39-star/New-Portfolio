# Ahmed — Webflow & GoHighLevel Website Developer Portfolio

A professional portfolio website for **Ahmed**, a Webflow & GoHighLevel Website Developer with custom HTML/CSS/JS capability and extensive Kuwait & GCC agency experience.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and genuine bidirectional (Arabic RTL & English LTR) layout architecture.

---

## 🌟 Positioning & Brand Architecture

- **Primary Specialization**: Webflow & GoHighLevel Website Developer
- **Technical Differentiator**: Custom HTML, CSS & JavaScript capability
- **Regional Specialization**: Kuwait & GCC Commercial Market (30+ website projects)
- **Authentic Background**: Prior hands-on production experience behind the scenes for a Kuwait-based marketing agency (white-label delivery, agency fulfillment workflows)

---

## 🚀 Key Features

1. **Art-Directed Aesthetic**:
   - Deep obsidian color system (`#07080a`, `#0c0f17`, `#121622`)
   - Subtle cyan accents (`#38bdf8`), titanium borders, and architectural fine grids
   - Asymmetric editorial case-study compositions
   - High information density paired with generous negative space

2. **Genuine Bilingual Parity (Arabic RTL & English LTR)**:
   - Native modern business Arabic tailored for GCC decision-makers (not machine-translated English)
   - Directional CSS architecture using logical properties
   - Font pairings: *Plus Jakarta Sans* (English) + *IBM Plex Sans Arabic / Tajawal* (Arabic)
   - Dynamic language switcher with instantaneous direction transition

3. **10 Production Projects & Dedicated Case Studies**:
   - **Al Awad Residential & Commercial Solutions** (Kuwait)
   - **Al Nser Al Fadhi Grills & Traditional Cuisine** (Kuwait)
   - **Al Ibtikar Auto Maintenance Center** (Kuwait)
   - **Safeer Al Oamara Traditional Wear** (Kuwait)
   - **Mobile Car Wash Kuwait (A2Z Wash)** (Kuwait)
   - **BoomTwon Travel & Tourism Platform**
   - **HooBank Digital Financial Services**
   - **UrbanBuild Construction & Housing Solutions**
   - **MedTro Clinical & Diagnostic Healthcare**
   - **SaaS Productivity & Sprint Platform**
   - Each project has its own dedicated `/work/[slug]` route with challenge, approach, architectural decisions, and verified metrics.

4. **Production Quality & Performance**:
   - Next.js 14 App Router with 100% static page generation (SSG)
   - 87 kB shared First Load JS
   - Automated SEO metadata, Open Graph cards, dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`
   - Fully responsive across mobile (320px–430px), tablet (768px–1024px), laptop, and 4K displays

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router, React 18)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS with custom obsidian palette & design tokens
- **Icons**: Lucide React
- **Animations**: CSS keyframes, micro-interactions, hardware-accelerated transforms
- **Fonts**: Google Fonts via `next/font` (zero layout shift)

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       └── projects/      # Authentic high-resolution project screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with fonts, SEO & language provider
│   │   ├── page.tsx       # Flagship Homepage
│   │   ├── work/
│   │   │   ├── page.tsx   # Project Archive with sector filters
│   │   │   └── [slug]/    # Dynamic Case Study detail routes
│   │   ├── services/      # In-depth Services dossier
│   │   ├── about/         # Philosophy, operating principles & background
│   │   ├── contact/       # High-trust intake form & direct channels
│   │   ├── sitemap.ts     # Dynamic XML sitemap generator
│   │   └── robots.ts      # Robots.txt configuration
│   ├── components/
│   │   ├── Navbar.tsx     # Minimal luxury nav with mobile drawer
│   │   ├── Footer.tsx     # Architectural closing footer
│   │   ├── Hero.tsx       # Cinematic Webflow hero with floating mockups
│   │   ├── SelectedWork.tsx # Asymmetric editorial project showcase
│   │   ├── SpecializationMatrix.tsx # Core capabilities grid
│   │   ├── DifferentiatorSection.tsx # Webflow vs Custom Code comparison
│   │   ├── GccExperienceSection.tsx # Kuwait & GCC commercial focus
│   │   ├── ServicesPreview.tsx # Curated services preview
│   │   ├── AboutStoryPreview.tsx # Agency trajectory narrative
│   │   ├── FinalCta.tsx   # High-impact brand close
│   │   ├── CaseStudyView.tsx # Agency-grade case study template
│   │   └── ContactForm.tsx # Accessible inquiry form
│   ├── context/
│   │   └── LanguageContext.tsx # Centralized bilingual state (EN/AR)
│   ├── data/
│   │   ├── projects.ts    # Complete project data & metadata
│   │   ├── services.ts    # Services data
│   │   └── translations.ts # English & Arabic copy strings
│   └── lib/
│       ├── types.ts       # TypeScript interfaces
│       └── utils.ts       # Class merging & formatting helpers
```

---

## 🏃 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Start production server
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Import the project into your Vercel Dashboard.
3. Next.js will automatically detect the settings:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
4. Click **Deploy**.
