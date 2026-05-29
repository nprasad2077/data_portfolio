# Codebase Information

## Project

- **Name:** data_portfolio (Nick Prasad — Portfolio)
- **Type:** Single-page application (SPA) with client-side routing
- **Purpose:** Personal portfolio site for Nick Prasad, Data Engineer and Full Stack Developer
- **Language:** JavaScript (JSX)
- **Framework:** React 19 + Vite 6
- **Deployment:** Vercel

## Repository

- **Branch:** main (active: kiro)
- **Remote:** origin
- **Package Manager:** npm
- **Module System:** ES Modules (`"type": "module"`)

## Technology Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 + @tailwindcss/typography |
| Animations | Framer Motion 12 |
| Routing | React Router DOM 7 |
| Icons | Lucide React |
| Contact Form | EmailJS (@emailjs/browser) |
| Analytics | @vercel/analytics, @vercel/speed-insights |
| Scroll Detection | react-intersection-observer |
| Type Checking | prop-types (runtime) |
| Linting | ESLint 9 (react-hooks, react-refresh plugins) |

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS authentication |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS email template |

## Build Configuration

- **Chunk splitting:** vendor (react, react-dom, react-router-dom), motion (framer-motion)
- **Optimized deps:** lucide-react pre-bundled
- **Tailwind:** Integrated via `@tailwindcss/vite` plugin (no PostCSS config needed)

## Directory Structure

```
data_portfolio/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   ├── images/          # Project screenshots, profile photo
│   │   └── react.svg
│   ├── components/
│   │   ├── animations/
│   │   │   └── FadeIn.jsx   # Scroll-triggered fade animation
│   │   ├── layout/
│   │   │   ├── Header.jsx   # Fixed nav with mobile menu
│   │   │   └── Footer.jsx   # Site footer with links
│   │   └── sections/
│   │       ├── Hero.jsx     # Full-screen hero with CTA
│   │       ├── Work.jsx     # Project showcase grid
│   │       ├── About.jsx    # Bio and expertise areas
│   │       ├── Skills.jsx   # Technical skills with progress bars
│   │       └── Contact.jsx  # EmailJS contact form
│   ├── pages/
│   │   ├── Home.jsx         # Composes all sections
│   │   └── ProjectDetail.jsx # Individual project view
│   ├── App.jsx              # Router + layout shell
│   ├── App.css              # Legacy Vite styles (unused)
│   ├── index.css            # Tailwind imports + base styles
│   └── main.jsx             # React root mount
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```
