# Personal Portfolio - Muhammad Risto Abrar

Portfolio website built with Next.js App Router and Tailwind CSS.

The site highlights professional profile, skills, selected projects, certificates, and contact links in a minimal dark/light UI.

## Features

- Minimalist, modern, and responsive layout
- Light/Dark mode toggle
- Hero section with profile image
- Project showcase with image carousel
- Certificates highlight on homepage (4 items) + dedicated `/certificates` page
- Contact section with social links
- Reusable UI components (`Button`, `Card`, `Badge`, `Section`, etc.)

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Project Structure

```bash
app/
  page.tsx
  certificates/page.tsx
  layout.tsx
  globals.css

components/
  Navbar.tsx
  Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Certificates.tsx
    Contact.tsx
  ui/
    Badge.tsx
    Button.tsx
    Card.tsx
    ProjectGallery.tsx
    ProjectPreview.tsx
    Section.tsx
    SectionTitle.tsx
    ThemeToggle.tsx

data/
  profile.ts
  projects.ts
  certificates.ts
  skills.ts
  navigation.ts
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev      # Start local development server
npm run lint     # Run ESLint
npm run build    # Create production build
npm run start    # Run production server
```

## Content Customization

Edit these files to update content quickly:

- `data/profile.ts` -> name, role, intro, focus area, contact links
- `data/projects.ts` -> project list, tech stack, repo/demo links, gallery image paths
- `data/certificates.ts` -> full certificate list
- `data/skills.ts` -> grouped skills
- `data/navigation.ts` -> navbar links

### Project gallery images

Put screenshots in `public/project1/` (or other folders under `public/`) and reference them in `data/projects.ts`, for example:

```ts
gallery: ["/project1/1A.png", "/project1/1B.png", "/project1/1C.png"];
```

### Profile image

Profile photo is loaded from:

```bash
public/Foto1.jpeg
```

You can replace it with another image and keep the same filename, or update the path in `components/sections/Hero.tsx`.

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/).

### Build check before deploy

```bash
npm run lint && npm run build
```

If both commands pass, deploy should work normally.

## License

This project is for personal portfolio use.
