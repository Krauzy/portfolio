# Caio Kraut Portfolio

Frontend-only software engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS and FontAwesome.

The visual direction is a dark premium SaaS/cybersecurity interface with blue radial glows, translucent cards, original SVG assets and editable static data.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- FontAwesome
- Static data in `src/data`
- Original SVG/TSX assets in `src/assets/svg`
- Local PT/EN internationalization

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Editing Content

Update profile, skills, project and experience content in:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/i18n.ts`

Project cards are based on public repositories from the `Krauzy` GitHub profile.

## Deploy

This project is ready for deployment on Vercel. A GitHub Actions workflow is included at `.github/workflows/vercel-deploy.yml`.

Configure these GitHub repository secrets before using the workflow:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

The workflow runs on pushes to `main` and can also be triggered manually from GitHub Actions.

## Design Note

The reference is used only as broad aesthetic direction. No proprietary images, copied composition or backend functionality are included.
