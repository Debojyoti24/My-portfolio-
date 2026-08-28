# Software Engineer Portfolio

A single-page portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

Sections: sticky nav with resume download → Hero (resume CTA) → About → Education → Experience → Projects (20+, filterable/searchable) → Contact.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Customize your content

All editable content lives under `src/data/` — no need to touch components:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, role, bio, contact info, social links, resume path |
| `src/data/skills.ts` | Skill tags shown in the About section |
| `src/data/education.ts` | Education timeline entries |
| `src/data/experience.ts` | Work experience timeline entries |
| `src/data/projects.ts` | Project cards, categories, tags, links |

## Resume

Replace `public/resume.pdf` with your real, exported resume PDF — the filename and route (`/resume.pdf`) are already wired up in the Navbar, Hero, and Contact download buttons via `profile.resumeUrl`.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (scroll/entrance animations)
- lucide-react + react-icons (icons)
