# Codebase Context — data_portfolio

Updated: 2026-09-17

## Overview

A single-page personal portfolio for Nick Prasad (data engineer), built as a client-only React SPA. It renders one scrollable home page composed of five sections (Hero, Work, About, Skills, Contact) plus one detail page per project. There is no backend, no database, and no API of its own: all project/skill content is hardcoded in React modules, and the only runtime third parties are Vercel Analytics/Speed Insights, a self-hosted Umami script, and outbound links (GitHub, LinkedIn, a short resume URL). It deploys as static assets to Vercel. Roughly 1,166 lines of app source across 16 JS/JSX files.

## Stack

- **Language:** JavaScript (JSX only) — no TypeScript. `eslint.config.js:15-22` parses `ecmaVersion: latest`, JSX on, ESM.
- **UI:** React 19.0.0 (`react`, `react-dom`); DOM root via `createRoot` (`src/main.jsx:6-9`).
- **Build:** Vite 6.4.3 (resolved in `package-lock.json`; `package.json` requests `^6.2.0`), `@vitejs/plugin-react` 4.3.4.
- **Styling:** Tailwind CSS 4.0.17 through the `@tailwindcss/vite` plugin (`vite.config.js:3,9`); no `tailwind.config.js` — v4 CSS-first config in `src/index.css:1` (`@import "tailwindcss"`). `@tailwindcss/typography` is a dependency and `prose` classes are used in `ProjectDetail.jsx`, but no explicit plugin registration was found.
- **Motion:** Framer Motion 12.6.2, used with `LazyMotion features={domAnimation} strict` and the `m.` namespace (`src/pages/Home.jsx:1,10`, `src/components/sections/Hero.jsx:1`).
- **Routing:** React Router DOM 7.18.0 (lockfile; `package.json` says `^7.4.0`), `BrowserRouter`.
- **Icons:** lucide-react 0.484.0.
- **Testing:** Vitest 3.2.6 + @testing-library/react 16.1.0 + jsdom 25.0.1.
- **Analytics:** `@vercel/analytics` 1.5.0, `@vercel/speed-insights` 2.0.0, plus an Umami script tag.
- **Package manager:** npm (`package-lock.json`, lockfileVersion 3). No `engines` field and no `.nvmrc`; local runtime observed was Node v22.23.2 / npm 10.9.8.
- **Pinned where:** all runtime versions are pinned by `package-lock.json`; `package.json` uses caret ranges. There is no CI file, so the lockfile is the only reproducibility guarantee.

## Layout

- `src/main.jsx` — entry: imports global CSS and mounts `App` in `StrictMode`.
- `src/App.jsx` — app shell: router, scroll restoration, header/footer, analytics, route table.
- `src/pages/` — route targets: `Home.jsx` (section composition) and `ProjectDetail.jsx` (project detail + its own project dataset).
- `src/components/layout/` — persistent chrome: `Header.jsx`, `Footer.jsx`.
- `src/components/sections/` — home-page sections: `Hero.jsx`, `Work.jsx`, `About.jsx`, `Skills.jsx`, `Contact.jsx`.
- `src/components/animations/` — `FadeIn.jsx`, the shared scroll-reveal wrapper.
- `src/test/` — `App.test.jsx` and Vitest `setup.js`.
- `src/assets/images/` — local project/hero/profile imagery (both `.png` originals and `_opt.webp` variants; the app imports the optimized ones).
- `public/` — static passthrough: `logo.png`, `robots.txt`, `sitemap.xml`.
- `.agents/summary/` — a pre-generated markdown doc set about the repo. **It is stale** (see Open questions); treat it as a lead, not ground truth.
- Root config: `index.html` (SEO/OG/JSON-LD/Umami), `vite.config.js`, `eslint.config.js`, `vercel.json`, `.env.example`.

## Architecture

Client-only, layered React SPA. The graph index (`codebase-memory` project `Volumes-ROG_BLACK-code-review-data_portfolio`, branch `blog`, 201 nodes/255 edges) confirms three layers: `App` (entry) → `pages` (entry) → `components` (core, high fan-in).

- **Shell / transport:** `App.jsx:29-59` owns `BrowserRouter`, `ScrollToTop`, `Header`, `<main role="main">`, lazy `Routes`, `Footer`, `Analytics`, `SpeedInsights`. Routes are code-split with `lazy(...)` + `<Suspense>` (`App.jsx:9-10,34-53`).
- **Route table:** `/` → `Home` (`App.jsx:36`), `/project/:id` → `ProjectDetail` (`App.jsx:37`), `*` → inline 404 (`App.jsx:38-51`).
- **Scroll abstraction:** `ScrollToTop` (`App.jsx:12-25`) reads `pathname`/`hash`; scrolls to an element by hash id after a 100 ms delay, otherwise `window.scrollTo(0,0)`. This is how the "Back to Work" link (`ProjectDetail.jsx:255`) returns to a specific card.
- **Composition root:** `Home` (`src/pages/Home.jsx:8-18`) wraps the five sections in a single `LazyMotion` provider.
- **Shared abstraction:** `FadeIn` (`src/components/animations/FadeIn.jsx:12-26`) is the only cross-cutting component (fan-in 4): wraps children in a Framer `m.div` driven by `react-intersection-observer`, with `direction` and `delay` props and PropType validation (`FadeIn.jsx:28-32`). It is also the only component with PropTypes.
- **Styling base:** `src/index.css` defines a `@layer base` reset, focus-visible outline (`index.css:26-30`), reduced-motion override (`index.css:47-53`), and `content-visibility: auto` on non-first sections (`index.css:56-59`).
- **No state library, no context, no data-fetching layer.** Local `useState` in `Header` for the mobile menu (`Header.jsx:69`) is the only state in the app.

## Entrypoints & flows

Representative end-to-end path (home → project detail → back):

1. `index.html:57` loads `/src/main.jsx` as a module; `main.jsx:6-9` mounts `<App/>` into `#root` (`index.html:56`).
2. `App.jsx:29` mounts the router; `ScrollToTop` runs; `Header` renders fixed nav with anchor links `#about/#work/#skills/#contact` (`Header.jsx:8-32`).
3. `Home` (`Home.jsx:10-16`) renders `Hero`, `Work`, `About`, `Skills`, `Contact` inside `LazyMotion`.
4. `Work` maps a hardcoded `projects` array (`Work.jsx:11-72`) to cards, each with DOM id `project-<id>` (`Work.jsx:87`). The image links to `/project/<id>` (`Work.jsx:100`).
5. Router mounts lazy `ProjectDetail`; `useParams()` gets `id`, and `sampleProjects.find(p => p.id.toString() === id)` selects the record (`ProjectDetail.jsx:233-234`). Unknown ids render "Project not found" (`ProjectDetail.jsx:236-247`).
6. "Back to Work" links to `/#project-<id>` (`ProjectDetail.jsx:255`); `ScrollToTop` sees the hash and scrolls that card into view.
7. Contact is informational only: `mailto:`, `tel:`, location, and resume links (`Contact.jsx:42-64`). No form is submitted anywhere.

## Data & integrations

- **Persistence:** none. No DB, ORM, migrations, cache, or queue.
- **Datasets (hardcoded, duplicated):** the project list exists twice with different fields — `Work.jsx:11-72` (`excerpt`, `description` string) and `ProjectDetail.jsx:11-209` (`description` object with `intro`/`sections`/`conclusion`). Both must be edited together.
- **Known drift between the two copies:** dates differ for id 2 (`Work.jsx:20` "2026" vs `ProjectDetail.jsx:59` "2025"); the id-3 external URL differs (`Work.jsx:51` Postman docs vs `ProjectDetail.jsx:120` `api.server.nbaapi.com`); titles differ for id 1 ("Transformer Model…" vs "In-Network Transformer Model…", `Work.jsx:59` vs `ProjectDetail.jsx:173`). Card order is 2,4,3,1, not id order.
- **External services:** Vercel Analytics + Speed Insights injected in `App.jsx:56-57`; Umami script + preconnect to `umami-lac-chi.vercel.app` in `index.html:32-33,53`; outbound resume short-link `tinyurl.com/nickpras` (`Hero.jsx:48`, `Footer.jsx:42`, `Contact.jsx:63`).
- **Declared-but-unused integration:** `@emailjs/browser` 4.4.1 is a dependency and `.env.example` defines `VITE_EMAILJS_PUBLIC_KEY/SERVICE_ID/TEMPLATE_ID`, but `grep` finds **no** `emailjs` or `import.meta.env` usage anywhere under `src/`. The README still advertises "Contact form via EmailJS".
- **Auth/session model:** none. No auth, cookies, or tokens. Note `Contact.jsx` commits a phone number and email address in source (`Contact.jsx:45-52`); `index.html:53` commits an Umami site id.

## Commands

Verified only from `package.json:6-12`; run from repo root. `node_modules/` is currently **not installed**, so `npm install` is a prerequisite.

| Purpose | Command | Maps to |
|---|---|---|
| Install | `npm install` | resolves `package-lock.json` |
| Dev server | `npm run dev` | `vite` |
| Build | `npm run build` | `vite build` (output `dist/`) |
| Preview build | `npm run preview` | `vite preview` |
| Lint | `npm run lint` | `eslint .` (flat config `eslint.config.js`) |
| Test | `npm run test` | `vitest` (watch mode by default; use `npx vitest run` for a one-shot) |
| Deploy | `vercel --prod` | README; no config beyond `vercel.json` cache headers |

No `typecheck` script exists. No Makefile, no CI workflow (`.github/` is absent). `npm run build` was not executed during this scan (dependencies not installed), so build success is unverified.

## Conventions

- **Components:** function components, no classes. Sections/layout/animations use **named** exports (`export function Work`, `Header`, `FadeIn`); `App` and pages use **default** exports.
- **File naming:** PascalCase component files matching the export; directories are lowercase by role (`layout`, `sections`, `animations`).
- **Imports:** some files use namespace icon imports (`import * as Icons from "lucide-react"` in `Work.jsx:2`, `ProjectDetail.jsx:2`, `Header.jsx:2`), others named icon imports (`Footer.jsx:2`, `Hero.jsx:2`). Relative imports throughout — no path aliases.
- **Styling:** Tailwind utility classes inline; no CSS modules. Recurring design tokens: dark hero `#1A1A1A`, light section `#F8F8F8`/`#F5F5F5`-family grays, blue-600 links, `rounded-xl` images, `container mx-auto px-6`.
- **Comments:** files often open with a path banner comment, e.g. `// src/pages/ProjectDetail.jsx` (`ProjectDetail.jsx:1`), `// src/components/sections/Work.jsx` (`Work.jsx:1`).
- **Lint rules:** `no-unused-vars` is an error with `varsIgnorePattern: '^[A-Z_]|^m$'` (the `m` exemption supports Framer's `m.*`) and `react-refresh/only-export-components` is a warning (`eslint.config.js:26-32`). No Prettier config exists.
- **Git:** PR-based. `git log` shows squash/merge commits titled `Merge pull request #N from nprasad2077/<short-branch>` (`light`, `kiro`, `monitoring`, etc.), so work lands via short-lived feature branches off `main`. Current checkout is branch `blog`, which is identical to `origin/main` (0 unique commits). Remote is `git@github.com:nprasad2077/data_portfolio.git`.

## Testing

- **Framework:** Vitest (`vite.config.js:19-23`) with `environment: 'jsdom'`, `globals: true`, and `setupFiles: './src/test/setup.js'`.
- **Location:** `src/test/` — one test file, `App.test.jsx`, plus `setup.js`.
- **Coverage shape:** minimal. `App.test.jsx:5-9` renders `<App/>` and asserts `getByRole('banner')` (the `<header>`) exists. It is a smoke test only; there are no tests for routing, project lookup, `FadeIn`, or data integrity.
- **Harness:** `setup.js:1` loads `@testing-library/jest-dom`; `setup.js:4-9` stubs `IntersectionObserver` (required because `react-intersection-observer` is used by `FadeIn`).
- **How to run:** `npm test` (watch) or `npx vitest run` (CI-style single pass). Neither was run in this scan.

## Open questions

- **Why is the EmailJS contact form gone?** The dep, the env template, and the README all reference it, but no code does. Confirming requires reading git history for the form's removal or the `blog`/`light` branches.
- **What is the `blog` branch for?** It equals `origin/main` and no blog feature exists in the tree. The most recent commits mention "blog", so the intended work may live on another remote branch.
- **`.agents/summary/*.md` is stale and contradicts the repo:** it claims no test framework (Vitest exists), no meta/OG tags (`index.html:7-25` has them), an unused `@mnfst/sdk` dep and a legacy `App.css` (neither is in `package.json`/`src`), an external Unsplash hero image (now local `hero-bg_opt.webp`), and branch `main`. Do not trust it without re-verification.
- **Build/test health is unverified** — `node_modules/` is absent, so no command in the Commands table was actually executed.
- **Node/toolchain is unpinned** — no `engines`, `.nvmrc`, or CI, so the supported Node version is unknown.
- **`vercel.json` only sets cache headers**; no SPA rewrite/`rewrites` rule is present, yet client-side `/project/:id` routes depend on it. Whether Vercel serves `index.html` for those deep links (default SPA behavior) was not confirmed against a live deploy.

## Starting points

- **Add or edit a project:** `src/components/sections/Work.jsx:11-72` **and** `src/pages/ProjectDetail.jsx:11-209` (both copies; keep ids aligned). Preview images in `src/assets/images/`; add the URL to `public/sitemap.xml` if public.
- **Change nav / mobile menu / socials:** `src/components/layout/Header.jsx`; footer links in `src/components/layout/Footer.jsx`.
- **Adjust animations or scroll reveals:** `src/components/animations/FadeIn.jsx` and the `LazyMotion` providers in `src/pages/Home.jsx:10` and `src/pages/ProjectDetail.jsx:250`.
- **Routing / 404 / scroll behavior:** `src/App.jsx:12-53`.
- **Contact details or resume link:** `src/components/sections/Contact.jsx:42-64` (also `Hero.jsx:48`, `Footer.jsx:42`).
- **SEO, analytics, or Umami:** `index.html` (meta, JSON-LD, Umami) and `src/App.jsx:56-57` (Vercel).
- **Build/lint/test config:** `vite.config.js`, `eslint.config.js`, `vercel.json`, `src/test/setup.js`.
- **Design tokens / global styles:** `src/index.css`.
