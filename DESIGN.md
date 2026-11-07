---
version: alpha
name: Whisperer
description: Marketing site for Whisperer, dictation and AI meeting notes for Mac. A deep-navy night world lit by the app icon's blue-violet, with live product UI as the imagery and motion that brings everything into focus.
colors:
  primary: "#5B6CF7"
  on-primary: "#FFFFFF"
  primary-deep: "#4352DB"
  button-text-zone: "#4F5FE9"
  secondary: "#8B5CF6"
  accent-text: "#9BA6FF"
  accent-soft: "#B9C1FF"
  neutral: "#0B0B19"
  surface: "#101024"
  surface-raised: "#14142B"
  surface-app: "#0C0C1A"
  surface-deep: "#08081A"
  on-surface: "#FFFFFF"
  on-surface-muted: "rgba(255,255,255,0.60)"
  on-surface-subtle: "rgba(255,255,255,0.45)"
  hairline: "rgba(255,255,255,0.08)"
  success: "#34D399"
  warning: "#FBBF24"
  error: "#EF4444"
  claude: "#D97757"
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 74px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Inter
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.12em
  code:
    fontFamily: ui-monospace
    fontSize: 12.5px
    fontWeight: 400
    lineHeight: 1.65
rounded:
  xs: 6px
  sm: 10px
  md: 12px
  lg: 18px
  xl: 24px
  window: 14px
  full: 9999px
spacing:
  gutter: 16px
  gutter-wide: 24px
  content-max: 1240px
  prose-max: 760px
  section-y: 64px
  section-y-sm: 80px
  section-y-lg: 96px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
components:
  button-primary:
    backgroundColor: "{colors.button-text-zone}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 24px
  button-primary-hover:
    backgroundColor: "{colors.button-text-zone}"
    textColor: "{colors.on-primary}"
  primary-glow:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 20px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  app-window:
    backgroundColor: "{colors.surface-app}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.window}"
  hud:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  pill:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.accent-soft}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  pro-card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 32px
  footer:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.on-surface}"
  link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.accent-text}"
  success-badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.success}"
  warning-badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.warning}"
  error-badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.error}"
  provider-claude:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.claude}"
  accent-chip:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  gradient-end:
    backgroundColor: "{colors.secondary}"
  body-muted:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-muted}"
  caption:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-subtle}"
  divider:
    backgroundColor: "{colors.hairline}"
---

# Whisperer design system

## Overview

Whisperer's site is a premium, cinematic product page for a Mac app, and it should feel like the app itself: a deep-navy
night world, soft blue-violet light from the app icon, and real product UI as the imagery. Every screen persuades by
showing the product working, never by describing it with stock art, illustrations or invented proof.

The voice is plain, concrete and honest about trade-offs. The look is restrained and exact; the motion is where the
site comes alive. Each page should feel animated to perfection: the first viewport is choreographed, every product
picture is a live loop, and every section comes into focus as you reach it.

Mode by surface: Persuade for home, feature, pricing, enterprise and SEO landing pages (full ambition, rich motion);
Read for blog, compare and legal (comfortable reading, quieter motion).

## Colors

One dark world, no light theme. The page ground is **Neutral (#0B0B19)**, a navy so deep it reads as night, never pure
black. Product surfaces step up in small increments: **Surface App (#0C0C1A)** for app windows, **Surface (#101024)**
for cards, **Surface Raised (#14142B)** for overlays, HUDs and pills, and **Surface Deep (#08081A)** for the footer.

- **Primary (#5B6CF7):** the app icon's blue. Primary buttons, the active pill, focus rings, live indicators and glows.
  Primary buttons use a top-down gradient from Primary (#5B6CF7) to Primary Deep (#4352DB); white label text sits
  on about #4F5FE9 (Button Text Zone), which clears WCAG AA at 5.0:1. Do not put small white text on flat Primary:
  it is only 4.3:1.
- **Secondary (#8B5CF6):** violet, only as the far end of a gradient or a Pro highlight. Never on its own as a UI color.
- **Accent Text (#9BA6FF) / Accent Soft (#B9C1FF):** links, icons and small accents on navy.
- **On Surface:** white text at 100% for headings, 60% for body, 45% for captions. Never use gray hex values for text.
- **Hairline:** white at 6–8% for dividers and window rings; 12–15% on hover.
- **Status:** emerald for success and live recording, amber for pinned or pending, red for stop and errors.
- **Brand colors** (Claude #D97757, Slack, Zoom and so on) appear only inside product recreations and real brand icons.

Light is painted, not flat: large soft radial gradients of Primary at 20–35% opacity sit behind heroes and product
frames, as if the window glows. A faint 56px grid, masked to fade out, can sit behind a hero.

## Typography

Inter everywhere, loaded through next/font as `--font-sans`. Hierarchy comes from size and weight, never from color
tricks or gradient text.

- **Display (74px, 600, -0.045em):** the home hero only. Scales to 42px on phones.
- **Headline Large (60px):** page heroes (h1). **Headline Medium (52px):** section headings (h2), 34px on phones.
- **Body Large (18px, 1.55):** ledes, max width about 560–600px. **Body (15px, 1.6):** cards and lists.
- **Label Caps (10px, 0.12em):** only inside app recreations, matching the real app's section labels.
- **Code:** system monospace, only for real code, terminals, tool names and config. Never as a "technical" costume.

Headings use `text-balance`, paragraphs `text-pretty`. Numbers in prices, timers and stats use tabular figures.
Tracking never goes below -0.045em.

## Layout

A 1240px content column with 16px gutters on phones and 24px from `sm`. Prose and centred section heads cap at 760px.

Every marketing section is the shared `Section` component: 64px vertical padding on phones, 80px at `sm`, 96px at `lg`,
the same on every page. Sections never stretch to a screen height. Short content must not be centred in a
viewport-tall box; that is what caused the empty bands this site used to have.

Composition patterns, in order of preference:
- **Split:** words on one side, a live product window on the other (`Split`, `FeatureRow`). Alternate sides with `flip`.
- **Stacked hero:** words above a full-width product window, for UI that needs the room (Meeting Studio).
- **Showcase:** a centred heading over a full-width rendered film (1100px), for the Remotion loops.
- **Point grid:** a heading beside hairline-separated rows. Preferred over grids of identical cards.
- **Bento:** mixed-span tiles only when each tile carries real product content.

Grids must not leave a lonely last cell; balance the item count to the column count. Check every page at 390px and
1440px with no horizontal scroll.

## Elevation & Depth

Depth comes from light and layering, not borders. Product windows sit on a long, soft, offset shadow
(`0 40px 120px -30px` navy) with a 1px white ring at 8–9%. Overlays (HUD, toasts, call-detected cards) float above the
window with a heavier shadow and a slight backdrop blur, exactly as the macOS app draws them. Primary buttons carry a
colored drop shadow below them and an inner top highlight. Never use zero-offset glows as borders, and never use hard
offset block shadows.

## Shapes

Rounded, soft and consistent with macOS. Buttons and pills are fully round. App windows use 14px; cards 18–20px;
feature tiles and showcases 24px; rows and inputs inside the app 10–12px. A nested element always has a smaller radius
than its container.

## Components

- **AppStoreButton:** the one primary action on every page, gradient fill, lifts 2px on hover, scales to 0.98 on press.
  Hover changes lift and shadow, never the fill, so the label keeps its contrast.
- **GhostButton:** secondary action, white ring at 15%, same height and motion as the primary.
- **TextLink:** accent text with an underline that draws in from the left on hover, arrow nudges right.
- **AppWindow:** macOS traffic-light chrome around every product recreation. Copy inside matches the real app's labels.
- **Live demos** (`DictationDemo`, `MeetingStudio`, `MCPChat`, `ProviderList`, `AgentPromptDemo`, the dictation mockups):
  short loops driven by `useLoop`, each with a pause button.
- **LoopVideo / Showcase:** Remotion-rendered films from `/remotion`, muted, inline, played only on screen.
- **BrandIcon / BrandTile:** real third-party marks from `public/assets/brands`, never redrawn or recolored except
  black marks printed white.
- **FAQSection:** an accordion that also emits FAQ JSON-LD; every page that targets search ends with one.

## Motion

Motion is the site's signature. Every page animates, and it should feel authored and rich, never generic.

**The idea: things come into focus**, the way speech resolves into text. Elements arrive from a soft blur and a slight
rise into sharp, settled position. One curve everywhere: `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-focus`).

**How to apply it** (`components/site/Motion.tsx`, CSS in `app/globals.css`):
- `data-enter` on hero copy, with `--d` delays staggered about 80ms apart (crumbs, h1, lede, actions, note), and
  `data-enter="frame"` on the hero picture. Pure CSS, so it plays before hydration.
- `data-reveal` on headings and paragraphs as they scroll in (`H2` and `Lede` already have it), `data-rd` for delay.
- `data-reveal="frame"` on product pictures: rise 32px, scale from 0.97, blur from 14px, about 1.1s.
- `data-reveal="list"` on lists and grids: children arrive 60ms apart, capped at 8 steps.
- Live product loops carry the story inside the frame: words stream into the HUD, the "Copied ⌘V" toast pops,
  transcripts fill, rows slide in with `layout` animations, selections glide with a shared `layoutId`.
- Remotion films (`remotion/src/compositions/Loops.tsx`, rendered to `public/videos/*-loop.{mp4,webm,jpg}`) go only in
  full-width Showcase sections. At half width a 1600px film shrinks app text below readability; use a live React demo
  there instead.

**Timing:** feedback 100–150ms, state changes 150–300ms, overlays 300–500ms, authored entrances 700–1200ms. Exits are
faster than entrances. No bounce or elastic easing; springs only for selection pills (stiffness about 400, damping
about 34).

**Rules that keep it perfect:**
- Content is visible without JavaScript: hidden states exist only under `html.js`.
- `prefers-reduced-motion` removes movement and blur, keeps state changes, and rests loops on a complete frame.
- Loops play only while on screen and can be paused; videos are `preload="none"`, muted and `playsInline`.
- Animate transform, opacity and filter only. Never animate layout properties.
- Not one identical fade on everything: each page has one focal moment (its hero demo) and quieter supporting reveals.

## Do's and Don'ts

- Do show the real product working in every hero and every major section, animated.
- Do make every page feel alive: a choreographed first viewport, live loops, focus-in reveals. A static page is unfinished.
- Do keep copy honest: no testimonials, customer logos, user counts or invented statistics. Match what the app ships.
- Do say "Copied ⌘V" and paste. Never claim Whisperer types into apps or uses Accessibility (App Store rules).
- Do keep every claim in sync with `lib/site.ts` (`PRICE_BASE`, `PRICE_PRO`, `FACTS`).
- Do check every changed page at 390px and 1440px, with motion on, motion reduced and JavaScript off.
- Don't put an eyebrow or kicker label above a heading, or number sections 01 / 02 / 03.
- Don't use gradient text, glassmorphism as decoration, colored side borders on cards or emoji as icons.
- Don't build sections out of identical icon-heading-text cards when a hairline list or live UI would say more.
- Don't make sections screen-tall or leave empty grid cells; spacing comes from the shared `Section` rhythm.
- Don't put a Remotion film in a half-width column, or loop anything that keeps running offscreen.
- Don't add a light theme, a second typeface or a new accent color.
