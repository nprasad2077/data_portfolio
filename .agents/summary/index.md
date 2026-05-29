# Documentation Index

> **For AI Assistants:** This file is your primary entry point. Read this first to understand what documentation is available and where to find specific information. Each file summary below tells you what questions that file can answer.

## Project Summary

**data_portfolio** is Nick Prasad's personal portfolio website — a React 19 SPA built with Vite, Tailwind CSS 4, and Framer Motion. It has no backend, no database, and no API. All project/skills data is hardcoded in component files. The only external service is EmailJS for the contact form. Deployed on Vercel.

## Documentation Files

| File | Purpose | Consult When... |
|------|---------|-----------------|
| [codebase_info.md](./codebase_info.md) | Tech stack, directory structure, env vars, build config | You need to know what technologies are used, where files are located, or how the build works |
| [architecture.md](./architecture.md) | System design, routing model, build pipeline, design patterns | You need to understand how the app is structured, how navigation works, or what patterns are used |
| [components.md](./components.md) | All React components, their props, responsibilities, hierarchy | You need to modify a component, understand what it does, or find where UI logic lives |
| [interfaces.md](./interfaces.md) | EmailJS integration, route params, component props, data shapes | You need to understand external integrations, how data flows, or what props components accept |
| [data_models.md](./data_models.md) | Project data structures, skills data, where data lives | You need to add/edit projects, modify skills, or understand the data shape |
| [workflows.md](./workflows.md) | Dev/deploy workflows, user flows, how to add content | You need to know how to run/deploy the app, or step-by-step guides for common tasks |
| [dependencies.md](./dependencies.md) | All npm packages, their versions and purposes | You need to know what a dependency does, find unused packages, or evaluate upgrades |

## Quick Reference

### Key Entry Points
- **App shell:** `src/App.jsx` (router, layout, analytics)
- **Home page:** `src/pages/Home.jsx` (section composition)
- **Project detail:** `src/pages/ProjectDetail.jsx` (hardcoded project data + detail view)
- **Styles:** `src/index.css` (Tailwind import + base styles)
- **Build config:** `vite.config.js`

### Common Tasks
- **Add a project:** See [workflows.md](./workflows.md) → "Adding a New Project"
- **Modify skills:** See [workflows.md](./workflows.md) → "Modifying Skills"
- **Understand animations:** See [components.md](./components.md) → "FadeIn"
- **Contact form issues:** See [interfaces.md](./interfaces.md) → "EmailJS"

### Important Caveats
- Project data is **duplicated** between `Work.jsx` and `ProjectDetail.jsx` — both must be updated together
- `@mnfst/sdk` is in package.json but unused in source
- `App.css` contains legacy Vite starter styles, not actively used
