# darrylamt.vercel.app

Personal site and work index for Darryl Amoatey, full-stack developer in Accra.
Every project listed is deployed and reachable; the live URLs were verified against
their deployments rather than copied from memory.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Vercel.
No component library, no CSS-in-JS runtime, no animation dependency.

## What is in here

- **Command palette** (`⌘K` / `Ctrl+K`) with search across projects, pages and actions,
  full keyboard navigation and grouped results.
- **Light and dark themes** driven by CSS custom properties, resolved before first paint
  so there is no flash, honouring the system setting until the user overrides it.
- **Project pages** statically generated with `generateStaticParams`, each with its own
  metadata, canonical URL and `CreativeWork` JSON-LD.
- **Generated social cards** rendered at request time with the Next.js image response API,
  one per project plus the site card.
- **Live GitHub activity** through a route handler revalidated hourly, degrading to a
  static message when the API rate limits.
- **Installable PWA**: web app manifest, generated icons including a maskable variant,
  and a service worker that caches the shell and falls back to `/offline`.
- **Filtering and search** on the work index, mirrored into the URL so a filtered view
  can be shared.
- **Accessibility**: skip link, visible focus rings, semantic landmarks, live region on
  filter results, and every transition removed under `prefers-reduced-motion`.
- **SEO**: sitemap, robots, `Person` JSON-LD, OpenGraph and Twitter metadata.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Structure

```
src/
  app/
    page.tsx                       home
    work/page.tsx                  work index, filter and search
    work/[slug]/page.tsx           project detail (SSG)
    work/[slug]/opengraph-image.tsx per-project social card
    api/github/route.ts            cached GitHub activity
    manifest.ts sitemap.ts robots.ts
  components/                      UI, one concern per file
  lib/data.ts                      single source of truth for content
public/
  sw.js                            service worker
  icons/                           PWA icons
```

Content lives in `src/lib/data.ts`. Adding a project there gives it a card, a detail page,
a sitemap entry, a social card and a command palette entry with no other changes.
