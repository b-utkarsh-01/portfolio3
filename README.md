# Portfolio

A modern React + Vite portfolio website with animated visuals, custom cursor effects, and a single-page About experience.

## Features

- Single-page portfolio layout with section anchors
- Animated hero and UI transitions (GSAP + Framer Motion)
- Interactive visual background and cursor effects
- Responsive navigation with mobile slide-out menu
- Content-driven sections for education, skills, experience, projects, and certifications

## Tech Stack

- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- GSAP
- Framer Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ (recommended LTS)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  components/
    about/
      HeroSection.jsx
      EducationSection.jsx
      SkillsSection.jsx
      ExperienceSection.jsx
      ProjectsSection.jsx
      CertificationsSection.jsx
      aboutData.js
    layout/
      Navbar.jsx
  page/
    About.jsx
    NotFound.jsx
  App.jsx
  main.jsx
```

## Content Customization

Update portfolio content from:

- `src/components/about/aboutData.js`

This file controls:

- profile info and summary
- skill categories
- experience entries
- project list
- certifications

## Routing

- `/` renders the portfolio page
- `/about` redirects to `/`
- unknown routes redirect to `/`

## Build Output

Production files are generated in:

- `dist/`