# Clínica Dentária Cariense — Claude Context

## Project
Next.js 16 + TypeScript + Tailwind CSS v4 website for Clínica Dentária Cariense.
Three dental clinic locations: Caria, Unhais da Serra, Peso.

## Stack
- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` in globals.css, no config file)
- **Language**: TypeScript
- **Icons**: lucide-react
- **Fonts**: Fraunces (display) + Plus Jakarta Sans (body) via Google Fonts

## Key directories
- `app/` — pages (page.tsx per route)
- `components/` — shared React components
- `lib/constants.ts` — all site data (clinics, team, testimonials, FAQs)
- `public/img/` — all images from the `img/` source folder
- `public/hero.mp4` — hero video
- `img/` — original source photos (raw from camera/stills)
- `.claude/` — Claude context, skills, cookbook reference

## Brand colors
- Brand blue: `#1C9FD6`
- Navy: `#0D1E2C`
- Light blue: `#E8F6FC`
- Border: `#D5E4EE`
- Muted text: `#5E7387`

## Image paths
All images served from `/img/` (e.g. `/img/clinic-caria.jpg`).
Semantic filenames: `clinic-caria.jpg`, `team-ana.jpg`, `review-1.png`, etc.

## Design principles (from claude-cookbooks-main)
- Distinctive typography: Fraunces serif for headings, Plus Jakarta Sans for body
- Real photography throughout — never use placeholder/stock imagery
- Scroll-triggered animations via IntersectionObserver (ScrollReveal component)
- Counter animations on stats (Counter component)
- Mobile-first responsive design

## Client components (require "use client")
- Navbar (usePathname, useState, useEffect)
- ContactForm (useState for submission)
- TestimonialsSlider (useState, touch events)
- FaqAccordion (useState)
- Counter (IntersectionObserver)
- ScrollReveal (IntersectionObserver)
- LocationSwitcher (useState for active clinic tab)

## Deployment
- Platform: Vercel
- GitHub: https://github.com/layoutdev-pt/Clinica-Dent-ria-Cariense
- Auto-deploy on push to main
