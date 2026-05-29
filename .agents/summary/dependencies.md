# Dependencies

## Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | DOM rendering |
| react-router-dom | ^7.4.0 | Client-side routing |
| framer-motion | ^12.6.2 | Animations (hero, FadeIn, scroll indicator) |
| tailwindcss | ^4.0.17 | Utility-first CSS framework |
| @tailwindcss/typography | ^0.5.16 | Prose styling for project descriptions |
| @tailwindcss/vite | ^4.0.17 | Vite plugin for Tailwind (replaces PostCSS) |
| lucide-react | ^0.484.0 | Icon library (ArrowDown, Github, Linkedin, Mail, etc.) |
| @emailjs/browser | ^4.4.1 | Client-side email sending for contact form |
| react-intersection-observer | ^9.16.0 | Viewport detection for scroll animations |
| prop-types | ^15.8.1 | Runtime prop validation (FadeIn component) |
| @vercel/analytics | ^1.5.0 | Page view analytics |
| @vercel/speed-insights | ^2.0.0 | Core Web Vitals monitoring |
| @mnfst/sdk | ^1.2.0 | Manifest SDK (present in package.json, not used in source) |

## Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^6.2.0 | Build tool and dev server |
| @vitejs/plugin-react | ^4.3.4 | React Fast Refresh + JSX transform |
| eslint | ^9.21.0 | Code linting |
| @eslint/js | ^9.21.0 | ESLint recommended rules |
| eslint-plugin-react-hooks | ^5.1.0 | React hooks linting rules |
| eslint-plugin-react-refresh | ^0.4.19 | Validates components for Fast Refresh |
| globals | ^15.15.0 | Global variable definitions for ESLint |
| @types/react | ^19.0.10 | TypeScript types (IDE support only) |
| @types/react-dom | ^19.0.4 | TypeScript types (IDE support only) |

## Dependency Graph

```mermaid
graph TD
    subgraph Core
        React[react]
        ReactDOM[react-dom]
        Router[react-router-dom]
    end

    subgraph UI
        Tailwind[tailwindcss]
        TWTypo[@tailwindcss/typography]
        Lucide[lucide-react]
        Framer[framer-motion]
    end

    subgraph Utilities
        InView[react-intersection-observer]
        PropTypes[prop-types]
    end

    subgraph Services
        EmailJS[@emailjs/browser]
        VAnalytics[@vercel/analytics]
        VSpeed[@vercel/speed-insights]
    end

    subgraph Build
        Vite[vite]
        ViteReact[@vitejs/plugin-react]
        ViteTW[@tailwindcss/vite]
        ESLint[eslint]
    end

    App[Application] --> React
    App --> ReactDOM
    App --> Router
    App --> Tailwind
    App --> TWTypo
    App --> Lucide
    App --> Framer
    App --> InView
    App --> EmailJS
    App --> VAnalytics
    App --> VSpeed

    Vite --> ViteReact
    Vite --> ViteTW
```

## Notes

- `@mnfst/sdk` is listed in dependencies but not imported anywhere in the source code — likely unused or planned for future use.
- `@types/react` and `@types/react-dom` provide IDE IntelliSense but the project does not use TypeScript.
- `App.css` contains legacy Vite starter styles that appear unused by the current application.
