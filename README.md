# Ammar Asad — Developer Portfolio

Personal portfolio built with Next.js 15, React 19, and Tailwind CSS 4.

> **Status:** Phase 1 (design system + architecture) is complete. Phase 2
> (personalization — real content, real screenshots, real contact form, real
> links, real metadata) is in progress. See [`docs/`](./docs) for the design
> blueprints and the Phase 2 Readiness Checklist.

## Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com)
- **Language:** [TypeScript 5.9](https://www.typescriptlang.org) (strict mode)
- **Animations:** [Motion](https://motion.dev) (Framer Motion)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/) (Simple Icons)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (dark mode)
- **Fonts:** [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (DM Sans, IBM Plex Mono, Reenie Beanie — self-hosted)

## Develop

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the dev server with HMR            |
| `npm run build` | Production build                         |
| `npm start`     | Serve the production build               |
| `npm run lint`  | Run ESLint (flat config, ESLint 9)       |
| `npm run clean` | Clear the `.next/` build cache           |

## Project Structure

```
app/
  layout.tsx          Root layout: shell (Header + main + Footer) + ThemeProvider
  page.tsx            Home route — renders <HomeScreen />
  about/              About route
  projects/           Projects overview + [id] case study (SSG)
  skills/             Skills & tools
  experience/         Experience timeline
  contact/            Contact form (Phase 2 will wire to Resend)
  loading.tsx         Route-level loading UI
  error.tsx           Route-level error boundary
  not-found.tsx       404 page
  sitemap.ts          Auto-generated /sitemap.xml
  robots.ts           Auto-generated /robots.txt
  globals.css         Tailwind theme tokens + dark mode variant
components/
  Header.tsx          Client: nav + active link + dark mode toggle
  FooterSection.tsx   Server: footer with real social links
  ThemeProvider.tsx   next-themes wrapper
  HomeScreen.tsx      Server: home page content
  ServiceCards.tsx    Client: "What I Do" cards with per-card expand
  AboutScreen.tsx     Server: about page content
  ProjectsOverviewScreen.tsx  Client: filterable project list
  ProjectCaseStudyScreen.tsx  Server: case study layout
  SkillsAndToolsScreen.tsx    Server: skill grids (react-icons)
  ExperienceScreen.tsx        Client: animated timeline (motion)
  ContactScreen.tsx  Client: contact form (Phase 2 will wire)
docs/
  MOBILE_*.md         Mobile design blueprints (4 variants compared)
public/
  assets/
    desk_sketch_illustration.svg   Footer illustration (inline SVG, 4 KB)
```

## Phase 2 Roadmap

Phase 2 personalization tasks (not yet done):

- [ ] Replace placeholder portrait (`picsum.photos/seed/portrait321`) with a real photo or monogram
- [ ] Replace placeholder project images (Unsplash) with real screenshots
- [ ] Replace placeholder case study metrics with real measured values (or remove)
- [ ] Wire the contact form to a Server Action + Resend (or Formspree)
- [ ] Update footer social links to verified profile URLs
- [ ] Add a real `resume.pdf` to `public/` and fix the footer link
- [ ] Deploy projects to Vercel free tier and update "Live Demo" URLs
- [ ] Set `metadataBase` to the production URL in `app/layout.tsx`
- [ ] Add an `opengraph-image` to `app/`
- [ ] Add JSON-LD structured data (Person schema on home, ItemList on projects)
- [ ] Install Vercel Analytics or Plausible
- [ ] Final end-to-end self-test: fill out the form, click every link, run Lighthouse mobile

## License

MIT — see [LICENSE](./LICENSE) (Phase 2 will add this file).
