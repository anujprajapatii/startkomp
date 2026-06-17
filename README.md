# Startkomp

A simple, modern landing site for a startup funding platform that connects
startups with investors. Inspired by AngelList and Crunchbase.

> Startkomp only connects startups and investors. It is not an investment
> company and does not guarantee funding.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- SEO ready (metadata, Open Graph, JSON-LD, sitemap, robots)

## Brand

| Token | Value |
| ----- | ----- |
| Primary (green) | `#16A34A` |
| Secondary (emerald) | `#10B981` |
| Background | White |

## Pages

- `/` Home (hero, how it works, for startups/investors, featured startups &
  investors, statistics, FAQ, CTA, footer)
- `/about` About
- `/contact` Contact form

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx           # Root layout + global SEO metadata
    page.tsx             # Home page
    about/page.tsx       # About page
    contact/page.tsx     # Contact page
    api/contact/route.ts # Contact form endpoint
    sitemap.ts           # /sitemap.xml
    robots.ts            # /robots.txt
    globals.css
  components/
    layout/              # Navbar, Footer
    sections/            # Home page sections
    ui/                  # shadcn/ui-style primitives
    contact-form.tsx
  lib/
    site.ts              # Site config
    data.ts              # Sample startups/investors/FAQ
    utils.ts
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to your production URL.
4. Vercel auto-detects Next.js - just click **Deploy**.

No database or authentication is required; this is a landing site with contact
forms only.
