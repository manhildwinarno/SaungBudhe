# SaungBudhe

**SaungBudhe** is a humble restaurant serving a wide variety of delicious dishes. This website makes it easier for customers to browse the menu, place food orders, and enjoy a more convenient dining experience.

## Tech Stack (now)

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript 5
- shadcn/ui
- Framer Motion
- Lenis
- Lucide Icons

> **Tech stack** will continue to evolve as the project grows.

## Tracker

### 🏗️ Phase 1 — Fix & Polish

_Goal: Make the current site production-ready_

- [x] **Optimize all images** — Convert PNG/JPEG to WebP, compress to < 200KB each, remove spaces from filenames
- [x] **Fix the footer scroll links** — Apply the same `useLenis` pattern from navbar
- [x] **Add proper SEO** — `generateMetadata()` in `page.tsx`, Open Graph tags, proper `<title>`, favicon variants
- [x] **Fix the Google Maps embed** — Use real coordinates for the actual restaurant location
- [x] **Remove unused imports** — Clean up `Link` import in `hero.tsx`
- [x] **Fix empty `href`** — Either add real pages or remove the Privacy/Terms links
- [x] **Add `loading="lazy"`** to the `<img>` tags in `aboutUs.tsx`

---

### 🎨 Phase 2 — New Features

_Goal: Add real functionality that makes the site useful for the business_

- [x] **WhatsApp Order Integration** — Make "Buy Now" and "Order Now" buttons open WhatsApp with a pre-filled message like: `"Halo, saya mau pesan Mie Hotplate Gachoor Sosis 1 porsi"`
- [ ] **Menu Detail Page** — Create a `/menu/[slug]` dynamic route showing full details, bigger image, and spice level selector
- [ ] **Spice Level Indicator** — Add a visual chili/gauge component (like your Figma design shows) to each menu item
- [ ] **Active Navbar Indicator** — Highlight the current section in the navbar as the user scrolls (use `IntersectionObserver` or Lenis scroll events)
- [ ] **Testimonials/Reviews Section** — Add a section with customer reviews (even if hardcoded at first)
- [ ] **"Back to Top" Button** — A floating button that appears when scrolling down

---

### ⚡ Phase 3 — Level Up

_Goal: Learn intermediate-to-advanced concepts through real features_

- [ ] **CMS Integration (Sanity or Notion API)** — Let the restaurant owner update menu items, prices, and photos without touching code
- [ ] **Dark/Light Mode Toggle** — Learn CSS variables, `next-themes`, and theming systems
- [ ] **Page Transitions** — Use Framer Motion's `AnimatePresence` for smooth page transitions between routes
- [ ] **i18n (Internationalization)** — Add English support using `next-intl` or `next-i18next` — great for learning how real apps handle multiple languages
- [ ] **Analytics** — Add Google Analytics or Vercel Analytics to track visitors
- [ ] **Contact Form** — Replace the static contact info with a working form (use Formspree, EmailJS, or a Next.js API route)
- [ ] **Deploy to Vercel** — Get a real `.vercel.app` domain, learn CI/CD, preview deployments

---

### 🚀 Phase 4 — Advanced & Portfolio-Ready

_Goal: Transform this into a portfolio piece that impresses recruiters_

- [ ] **Admin Dashboard** — Build a simple `/admin` page (protected with authentication) where the owner can manage menu items
- [ ] **Authentication** — Learn NextAuth.js or Clerk for login
- [ ] **Database** — Store menu items in Supabase or PlanetScale instead of a static file
- [ ] **Order System** — Basic cart → checkout → WhatsApp confirmation flow
- [ ] **PWA (Progressive Web App)** — Make the site installable on phones with offline support
- [ ] **Automated Testing** — Add Playwright or Cypress E2E tests for the critical user flows
- [ ] **Performance Audit** — Score 90+ on Lighthouse (Performance, Accessibility, Best Practices, SEO)
