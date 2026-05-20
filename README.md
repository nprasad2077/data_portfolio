# Nick Prasad — Portfolio

Personal portfolio site for Nick Prasad, a Data Engineer and Full Stack Developer. Built with React, Vite, and Tailwind CSS, deployed on Vercel.

## Features

- Animated hero section and scroll-based transitions (Framer Motion)
- Project showcase with detail pages (React Router)
- Technical skills breakdown (Languages, Frameworks, Tools)
- Contact form via EmailJS
- Vercel Analytics and Speed Insights.
- Fully responsive design

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Routing:** React Router 7
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Analytics:** @vercel/analytics, @vercel/speed-insights

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

The site deploys to Vercel. Push to the connected branch or run:

```bash
vercel --prod
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values (EmailJS credentials, etc.).
