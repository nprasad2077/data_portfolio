# AGENTS.md

> Context file for AI coding assistants working on this repository.

## Project Overview

Personal portfolio site for Nick Prasad (Data Engineer / Full Stack Developer). React 19 SPA with no backend — all content is hardcoded. Deployed on Vercel.

**Stack:** React 19 · Vite 6 · Tailwind CSS 4 · Framer Motion 12 · React Router 7 · EmailJS · Vercel

## Directory Map

```
src/
├── pages/
│   ├── Home.jsx              # Composes section components
│   └── ProjectDetail.jsx     # Project detail view + hardcoded project data
├── components/
│   ├── animations/FadeIn.jsx # Scroll-triggered entrance animation
│   ├── layout/
│   │   ├── Header.jsx        # Fixed nav + mobile hamburger
│   │   └── Footer.jsx        # Footer with social links
│   └── sections/
│       ├── Hero.jsx           # Full-screen hero (external Unsplash bg)
│       ├── Work.jsx           # Project cards + hardcoded project data
│       ├── About.jsx          # Bio + feature cards
│       ├── Skills.jsx         # Skills with progress bars
│       └── Contact.jsx        # EmailJS contact form
├── assets/images/             # Project screenshots, profile photo
├── App.jsx                    # Router shell + layout + analytics
├── index.css                  # Tailwind import + base styles
└── main.jsx                   # React root mount
```

## Key Patterns

- **Section composition:** Home page renders independent section components sequentially. Each section owns its data and styling.
- **FadeIn animation:** Reusable wrapper using `react-intersection-observer` + Framer Motion. Props: `delay`, `direction` (up/down/left/right).
- **Duplicated project data:** Projects are defined in both `Work.jsx` (card view) and `ProjectDetail.jsx` (full detail). Both must be updated when adding/modifying projects.
- **No state management library:** Component-local state only (useState for form, mobile menu).
- **Tailwind v4 via Vite plugin:** No PostCSS config or `tailwind.config.js` — configured via `@tailwindcss/vite` in `vite.config.js`.

## Configuration

- **Build chunks:** `vendor` (react, react-dom, react-router-dom) and `motion` (framer-motion) split in `vite.config.js`
- **ESLint:** Flat config with react-hooks and react-refresh plugins. Ignores uppercase/underscore-prefixed unused vars.
- **Environment variables:** Only EmailJS keys (`VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`). See `.env.example`.

## Gotchas

- `@mnfst/sdk` is in package.json but unused in source code.
- `src/App.css` contains legacy Vite starter styles — not actively used.
- Hero background image is loaded from an external Unsplash URL (not a local asset).
- `index.html` has minimal meta tags — no description, no OG tags.
- No test framework is configured.

## Detailed Documentation

Full documentation is in `.agents/summary/`. Start with `.agents/summary/index.md` for a guided overview of all documentation files.

## Custom Instructions
<!-- This section is for human and agent-maintained operational knowledge.
     Add repo-specific conventions, gotchas, and workflow rules here.
     This section is preserved exactly as-is when re-running codebase-summary. -->
