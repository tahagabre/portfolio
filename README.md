# Taha Gabre — Portfolio

Personal portfolio site for [Taha Gabre](https://github.com/tahagabre), Senior iOS Engineer. Built with Next.js as a deliberate side project to learn React/Next.js from a native iOS background — every company/project write-up, screenshot, and video on the site is real, shipped work.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript, Server Components)
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server hot-reloads on save.

## Project structure

```
src/
  app/
    page.tsx              Home page (intro, contact links, resume)
    work/[company]/       Per-company page: role, summary, project grid
    layout.tsx            Root layout, site-wide metadata, JSON-LD
    sitemap.ts, robots.ts SEO crawl config
  components/
    Nav.tsx                Exposed-tab nav with active-route highlighting
    ProjectCard.tsx         Grid card + project detail modal
    Modal.tsx                Portal-based modal (focus trap, scroll lock, Escape/backdrop dismiss)
  data/
    site.ts                Name, contact links, hero intro
    companies.ts            Companies, projects, and media — single source of
                             truth for all site content
public/
  work/<company-slug>/     Screenshots and videos referenced from companies.ts
  llms.txt                  AEO summary for LLM crawlers
  resume.pdf
```

### Adding or editing content

All company/project content lives in `src/data/companies.ts`. To add a new project, drop its screenshots/videos in `public/work/<company-slug>/` and add an entry to that company's `projects` array — the grid and modal pick it up automatically.

## Notable implementation details

- **Accessibility**: full keyboard operability on interactive cards (Enter/Space activation, `focus-visible` rings), a real focus trap in the modal (focus moves in on open, Tab cycles within it, restores to the trigger on close), and a keyboard-reachable scroll region.
- **SEO/AEO**: per-page metadata, Open Graph/Twitter cards, JSON-LD structured data (`schema.org/Person`), a generated sitemap and `robots.txt`, and an `llms.txt` for LLM-based crawlers.
- **Media**: screenshots and videos render at their true aspect ratio (no cropping or letterboxing), with native `<video>` playback and poster frames.

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying on every push to `main`.
