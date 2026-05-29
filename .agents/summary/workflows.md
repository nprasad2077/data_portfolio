# Workflows

## Development Workflow

```mermaid
graph LR
    Dev[npm run dev] --> Vite[Vite Dev Server]
    Vite --> HMR[Hot Module Replacement]
    HMR --> Browser[Browser localhost:5173]
```

## Deployment Workflow

```mermaid
graph LR
    Push[git push] --> Vercel[Vercel Build]
    Vercel --> Install[npm install]
    Install --> Build[vite build]
    Build --> Deploy[CDN Deploy]
    Deploy --> Live[Production Site]
```

Deployment is automatic via Vercel's Git integration. Manual deploy: `vercel --prod`.

## User Interaction Flows

### Page Load

```mermaid
sequenceDiagram
    participant Browser
    participant Vite as Vite/CDN
    participant React

    Browser->>Vite: Request index.html
    Vite-->>Browser: HTML + JS bundles
    Browser->>React: Mount App
    React->>React: Initialize Router
    React->>React: Render Header + Home + Footer
    React->>React: Initialize Vercel Analytics
```

### Contact Form Submission

```mermaid
sequenceDiagram
    participant User
    participant Form as Contact Form
    participant EmailJS as EmailJS API

    User->>Form: Fill name, email, message
    User->>Form: Click "Send Message"
    Form->>Form: HTML5 validation
    Form->>Form: Disable button, show "Sending..."
    Form->>EmailJS: sendForm(serviceId, templateId, formRef)
    alt Success
        EmailJS-->>Form: status 200
        Form->>Form: Reset form
        Form->>User: Green alert "Message sent successfully!"
    else Error
        EmailJS-->>Form: Error
        Form->>User: Red alert "Error sending message"
    end
    Form->>Form: Re-enable button after 5s
```

### Project Navigation

```mermaid
sequenceDiagram
    participant User
    participant Home as Home Page
    participant Detail as ProjectDetail Page

    User->>Home: View Work section
    User->>Home: Click project image
    Home->>Detail: Navigate to /project/:id
    Detail->>Detail: Find project by ID
    Detail->>User: Render full project details
    User->>Detail: Click "Back to Work"
    Detail->>Home: Navigate to /#work
```

## Adding a New Project

1. Add project image to `src/assets/images/`
2. Import image in both `Work.jsx` and `ProjectDetail.jsx`
3. Add project object to `projects` array in `Work.jsx` (card data)
4. Add project object to `sampleProjects` array in `ProjectDetail.jsx` (full detail data)
5. Ensure `id` is unique and sequential

## Modifying Skills

Edit the `skills` object in `src/components/sections/Skills.jsx`. Each skill has a `name` and `level` (0-100 percentage).
