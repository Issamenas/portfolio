# Menas Issam — Portfolio

Professional developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom design token system (primitive → semantic → component)
- **Framer Motion** — viewport-triggered animations
- **Lucide React** — icons
- **next-themes** — dark/light mode

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home: Hero + About + Skills
│   ├── projects/page.tsx   # All projects grid
│   ├── experience/page.tsx # Timeline: work + education
│   ├── contact/page.tsx    # Contact form
│   └── globals.css         # Design tokens (CSS variables)
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile menu + theme toggle
│   ├── Hero.tsx            # Landing hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skill badge clouds
│   ├── ProjectCard.tsx     # Project card + skeleton
│   ├── Timeline.tsx        # Experience/education timeline
│   ├── ContactForm.tsx     # Static contact form (mailto)
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
├── data/
│   └── content.ts          # ← All site content lives here
└── public/
    ├── cv.pdf              # Replace with your actual CV
    └── me.jpg              # Profile photo
```

## Updating Content

All content is centralized in **`data/content.ts`**. Edit that file to update:

- Personal info, social links
- Skills grouped by category
- Projects (title, description, stack, highlights)
- Work experience and education
- Competitions and volunteering

## Replacing the CV

Replace `public/cv.pdf` with your actual PDF resume.

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Design System

The site uses a three-layer token architecture defined in `app/globals.css`:

| Layer | Example | Purpose |
|-------|---------|---------|
| Primitive | `--primitive-purple-600: #7c3aed` | Raw values |
| Semantic | `--color-accent-purple: var(--primitive-purple-600)` | Purpose aliases |
| Component | `.badge-purple { background: rgba(124,58,237,0.12) }` | Component-specific |

Dark theme is the default; light mode is toggled via the navbar button.
