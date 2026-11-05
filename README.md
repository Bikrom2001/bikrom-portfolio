# Bikrom Roy — Portfolio

Personal portfolio website for **Bikrom Roy**: Jr. Software Developer, Frontend Developer and Web Development Instructor from Dhaka, Bangladesh.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React**.

---

## Features

- Hero section with your real portrait, a gradient frame and a subtle developer-themed background
- Dark / light theme toggle (follows the system theme, no flash on load)
- Sections: About, Technical Skills, Work Experience timeline, Projects (with technology filter), Teaching, Education & Certifications, Contact
- Working **Download CV** buttons (serves `public/Bikrom-Roy-CV.pdf`)
- Smooth-scrolling navigation with active-section highlighting and a mobile menu
- Contact form that opens the visitor's email app with the message pre-filled (no backend needed)
- SEO: metadata, Open Graph / Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`, favicon and Apple touch icon
- Respects "reduce motion" OS settings; keyboard focus styles; skip-to-content link
- All content lives in one file: `src/data/portfolio.ts`

## Requirements

- **Node.js 20.9 or newer** (check with `node -v`)
- npm (bundled with Node.js)

## Run locally

```bash
# 1. Go into the project folder
cd bikrom-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open <http://localhost:3000>.

### Other commands

```bash
npm run build      # production build
npm run start      # serve the production build (after build)
npm run typecheck  # TypeScript check
```

## Project structure

```
bikrom-portfolio/
├── public/
│   ├── Bikrom-Roy-CV.pdf          # downloadable CV
│   └── images/bikrom-roy.jpg      # used for social-share (Open Graph) previews
├── src/
│   ├── app/
│   │   ├── layout.tsx             # fonts, metadata, theme provider, JSON-LD
│   │   ├── page.tsx               # assembles all sections
│   │   ├── globals.css            # Tailwind v4 + design tokens (light/dark)
│   │   ├── icon.svg               # favicon
│   │   ├── apple-icon.png         # Apple touch icon
│   │   ├── sitemap.ts / robots.ts # SEO routes
│   │   └── not-found.tsx          # 404 page
│   ├── assets/bikrom-roy.jpg      # hero portrait (optimised by next/image)
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, ThemeToggle, Providers
│   │   ├── sections/              # Hero, About, Skills, Experience, Projects,
│   │   │                          # Teaching, Education, Contact
│   │   ├── ui/                    # Button, Container, Reveal, SectionHeading,
│   │   │                          # Tag, ProjectPreview
│   │   └── icons/BrandIcons.tsx   # GitHub & LinkedIn logos
│   ├── data/portfolio.ts          # ← all site content
│   ├── hooks/useActiveSection.ts
│   └── lib/utils.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Customising

| What                       | Where                                                                    |
| -------------------------- | ------------------------------------------------------------------------ |
| Text, jobs, projects, links | `src/data/portfolio.ts`                                                  |
| Hero photo                 | replace `src/assets/bikrom-roy.jpg` (and `public/images/bikrom-roy.jpg`) |
| CV file                    | replace `public/Bikrom-Roy-CV.pdf` (keep the same name)                  |
| Colours                    | CSS variables at the top of `src/app/globals.css`                        |
| Site URL for SEO           | `profile.siteUrl` in `src/data/portfolio.ts`                             |

### Adding project screenshots

Projects show a styled browser-window preview by default. To use real screenshots:

1. Save images (16:9 works best, e.g. 1280×720) in `public/projects/`, e.g. `public/projects/wust.png`.
2. Add `image: "/projects/wust.png"` to that project in `src/data/portfolio.ts`.

### Making the contact form send directly

The form currently opens the visitor's email app. To send from the site instead, replace `handleSubmit` in
`src/components/sections/Contact.tsx` with a request to a form service (e.g. Formspree) or your own API route.

## Deploy

The easiest option is **Vercel**: push this folder to a GitHub repository, then import it at <https://vercel.com/new>.
No environment variables are required. After deploying, update `profile.siteUrl` if your domain changes.
