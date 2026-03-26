# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing/marketing site for **Whisperer**, an offline dictation app for Mac. The site is statically exported and deployed to Netlify.

## Commands

- `npm run dev` — start dev server
- `npm run build` — static export (outputs to `build/`)
- `npm run lint` — ESLint

Both `bun.lockb` and `package-lock.json` exist; either package manager works.

## Architecture

**Next.js 14 static export** (`output: 'export'` in next.config.mjs) with TypeScript, Tailwind CSS, and shadcn/ui components.

### Key directories

- `app/` — Next.js App Router pages. Landing page (`page.tsx`) composes sections from `components/landing/`.
- `app/blog/[slug]/`, `app/compare/[slug]/` — Dynamic MDX content pages with `generateStaticParams`.
- `content/blog/`, `content/compare/` — MDX files with gray-matter frontmatter. Parsed by `lib/blog.ts` using `gray-matter` + `reading-time`, rendered with `next-mdx-remote`.
- `components/landing/` — Landing page sections (Hero, FAQ, FeaturesGrid, CodeModeSection, etc.).
- `components/mockups/` — App UI mockup components used in screenshots/demos.
- `components/ui/` — shadcn/ui primitives + custom UI (`decorations.tsx`, `animated.tsx`, `breadcrumbs.tsx`).
- `components/mdx/` — Custom MDX component overrides.
- `lib/structured-data.ts` — JSON-LD schema generators for SEO.
- `public/assets/` — Static images and app icons.

### Styling

Tailwind with CSS custom properties for theming (defined via `--` vars in globals.css). Colors use `hsl(var(--name))` pattern. The `@tailwindcss/typography` plugin is used for MDX prose styling.

### Content system

Blog and comparison posts are `.mdx` files in `content/`. Frontmatter fields: `title`, `description`, `date`, `keywords`, `category`, `image` (optional), `howToSteps` (optional). The `lib/blog.ts` module provides `getAllPosts()`, `getPostBySlug()`, `getAllComparisons()`, `getComparisonBySlug()`.

### Deployment

Netlify (`netlify.toml`): builds with `npm run build`, publishes `build/` directory. `trailingSlash: false` is set; Netlify strips trailing slashes via 301 redirect.
