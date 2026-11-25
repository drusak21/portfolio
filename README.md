# Dorian Rušak — Portfolio

Personal developer portfolio built with Angular 22 (standalone components, signals, SCSS). Static site, no backend, deployed to Netlify.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # output: dist/portfolio/browser
```

## Where to edit content

| What | File |
| --- | --- |
| Name, email, GitHub, LinkedIn, skills | `src/app/core/profile.ts` |
| Projects (featured + "More on GitHub") | `src/app/data/projects.ts` |
| UI text (EN / HR) | `src/app/core/i18n.ts` |
| Colors, fonts, spacing (design tokens) | `src/styles.scss` (`:root`) |

## Structure

```
src/app/
  core/        i18n service, profile data, icons, scroll-reveal directive
  data/        project content (bilingual)
  layout/      navbar, footer
  pages/
    home/            hero, about, skills, projects, contact
    project-detail/  /projects/:slug case-study pages
```

Routes: `/`, `/projects/indoor-localization`, `/projects/event-manager`.

## Deploy (Netlify)

1. Push this repo to GitHub.
2. Netlify → **Add new site → Import an existing project → GitHub** → pick the repo.
3. Build settings are read from `netlify.toml` (`npm run build`, publish `dist/portfolio/browser`, Node 24).
4. Every push to `main` deploys automatically. SPA deep links work via the redirect in `netlify.toml` / `public/_redirects`.
