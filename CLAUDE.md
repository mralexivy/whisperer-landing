# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing site for **Whisperer**, a Mac app for dictation and AI meeting notes that runs on the Mac ($2.99 app, $14.99 Pro, both one-time). The site is statically exported and deployed to Netlify.

## Design guidance: read DESIGN.md first

`DESIGN.md` (Google Labs DESIGN.md format, version alpha) is the design system: color, type, spacing and radius tokens in its front matter, and the rules in prose. `PRODUCT.md` holds product truth, audience and voice. Read both before any UI change, and keep `DESIGN.md` in step when you change a token or pattern. Lint it with `npx @google/design.md lint DESIGN.md`.

The bar is a premium, rich, animated-to-perfection product site. Every page should feel alive and finished:

- **A choreographed first viewport.** Hero copy and the hero product window come into focus on load (`data-enter`, `data-enter="frame"`, `--d` delays about 80ms apart).
- **Live product UI, never static pictures.** Every hero and major section shows the real app working as a short loop (`useLoop` in `components/product/primitives.tsx`) with a pause button.
- **Everything comes into focus as you scroll.** Headings (`H2`, `Lede`), product frames (`data-reveal="frame"`) and lists (`data-reveal="list"`) blur-to-sharp in with `cubic-bezier(0.16, 1, 0.3, 1)`. Use the shared components and they animate for free.
- **Cinematic films where there is room.** Remotion loops (`remotion/`, rendered to `public/videos/*-loop.*`) play in full-width `Showcase` sections only. Never put one in a half-width column, where its text gets too small to read.
- **One idea, carried everywhere.** Don't invent a new entrance per page, don't fade every element the same way, and give each page one focal moment.
- **Perfect means robust too.** Content shows without JavaScript (hidden states only under `html.js`), `prefers-reduced-motion` removes movement, loops pause offscreen, and only transform, opacity and filter animate.

Use the installed skills for design work: `impeccable` (animate, polish, layout, audit), `design-taste-frontend`, `stageshow` for faux product UI, and the `remotion-*` skills for films.

## Commands

- `npm run dev`: start dev server
- `npm run build`: static export (outputs to `build/`). Run it before calling work done; it catches server pages that read data from `"use client"` modules.
- `npm run lint`: ESLint (3 pre-existing `@next/next/no-img-element` rule-definition errors are known)
- `cd remotion && npm run render:<name>`: render a film (`meeting-loop`, `mcp-loop`, `ai-loop`, `calendar-loop`, `dictation-loop`, `tour`, `meeting-demo`)

Both `bun.lockb` and `package-lock.json` exist; either package manager works.

## Architecture

**Next.js 16 static export** (`output: 'export'` in next.config.mjs), React 19, TypeScript, Tailwind CSS 3, shadcn/ui primitives and `motion` (Framer Motion) for in-component animation.

### Key directories

- `app/`: App Router pages. Home (`page.tsx`) composes `components/home/`. Product pages: `/meetings`, `/ai`, `/mcp`, `/calendar`, `/enterprise`, `/pricing`. Dictation: `/features` and `/features/*`. SEO landing pages: `/voice-coding`, `/voice-to-text-developers`, `/offline-dictation-mac`, `/speech-to-text-mac`, `/dictation-no-subscription`, `/cheapest-dictation-mac`, `/why-whisperer`.
- `app/blog/[slug]/`, `app/compare/[slug]/`: dynamic MDX pages with `generateStaticParams`.
- `components/site/`: `Shell.tsx` (header, footer, `Section`, `H2`, `Lede`, buttons), `PageParts.tsx` (`PageHero`, `FeatureRow`, `Steps`, `Showcase`), `Motion.tsx` (`MotionObserver`, `LoopVideo`).
- `components/landing/`: `PageKit.tsx` (page kit for feature and SEO pages), `DictationMockups.tsx` (live dictation loops), `engines.ts` (plain engine data, readable by server pages).
- `components/product/`: live recreations of the app (`MeetingStudio`, `DictationDemo`, `MCPChat`, `ProviderList`, `CalendarPanel`, `AgentPromptDemo`, `Island`) plus `primitives.tsx` (`AppWindow`, `BrandIcon`, `useLoop`) and `demo-data.ts`.
- `components/home/`: home sections, `HomeFAQ` (`FAQSection` also emits FAQ JSON-LD).
- `content/blog/`, `content/compare/`: MDX files with gray-matter frontmatter, parsed by `lib/blog.ts`.
- `lib/site.ts`: single source for prices, links, facts and nav. Change a price or fact there, not in a page.
- `lib/structured-data.tsx`: JSON-LD generators. `app/sitemap.ts`: page list with real last-modified dates.
- `remotion/`: the Remotion project for the demo films and loops (separate package, React 18).
- `public/assets/brands/`: real third-party brand icons. `public/videos/`: rendered films and posters.

### Styling

Tailwind with CSS custom properties in `app/globals.css` (`hsl(var(--name))`), but pages mostly use the literal palette from `DESIGN.md` (`#0B0B19`, `#5B6CF7`, and white at opacity steps for text). Motion CSS (`data-enter`, `data-reveal`, `--ease-focus`) lives at the end of `globals.css`. `@tailwindcss/typography` styles MDX prose.

### Content system

Blog and comparison posts are `.mdx` files in `content/`. Frontmatter: `title`, `description`, `date`, `updated`, `keywords`, `category`, `image` (optional), `howToSteps` (optional). `lib/blog.ts` provides `getAllPosts()`, `getPostBySlug()`, `getAllComparisons()`, `getComparisonBySlug()`.

### Product truth (verify in the app source at `~/ai/whisperer` when unsure)

- Text is copied and the user pastes with ⌘V. Never claim auto-typing or Accessibility (App Store rules).
- Code Mode (spoken symbols, casing commands) was removed in 2.0. Per-app behaviour is one setting: no full stop on one-line chat messages.
- No testimonials, customer logos, user counts or invented statistics.

### SEO

Never delete a page that has search history. Rewrite it, or 301 it to the closest match in `netlify.toml`, and update `app/sitemap.ts` and `public/llms.txt`.

### Deployment

Netlify (`netlify.toml`): builds with `npm run build`, publishes `build/`. `trailingSlash: false` is set. The CSP is self-only (`script-src 'self' 'unsafe-inline'`, `media-src 'self'`), so assets, fonts and videos must be served from this site.
