"use client";

/**
 * Freezes the live product loops for export.
 *
 * Every demo in components/product drives itself with `useLoop`, which rests on its
 * `restFrame` when `(prefers-reduced-motion: reduce)` matches. On the screenshots
 * tool we make that query report `true`, so each visual sits on its designed
 * resting frame, and a CSS rule (FREEZE_CSS) stops the keyframe animations
 * (waveforms, pings, fade-ins) so html-to-image captures a clean still.
 *
 * The shim must be in place before the product components run their effects, so it
 * is installed at module load by the page that imports this file, and removed when
 * that page unmounts.
 */

const QUERY = "(prefers-reduced-motion: reduce)";
let original: typeof window.matchMedia | null = null;

export function installFreeze() {
  if (typeof window === "undefined" || original) return;
  original = window.matchMedia.bind(window);
  const real = original;
  window.matchMedia = ((query: string) => {
    const mql = real(query);
    if (query.replace(/\s+/g, "") !== QUERY.replace(/\s+/g, "")) return mql;
    return new Proxy(mql, {
      get(target, prop) {
        if (prop === "matches") return true;
        const value = Reflect.get(target, prop, target);
        return typeof value === "function" ? value.bind(target) : value;
      },
    });
  }) as typeof window.matchMedia;
}

export function uninstallFreeze() {
  if (typeof window === "undefined" || !original) return;
  window.matchMedia = original;
  original = null;
}

/** Scoped to the slide canvas: every animation and transition off. */
export const FREEZE_CSS = `
[data-slide] *, [data-slide] *::before, [data-slide] *::after {
  animation: none !important;
  transition: none !important;
}
/* The demos' own pause buttons are for visitors, not for a still. */
[data-slide] button[aria-label="Pause the demo"],
[data-slide] button[aria-label="Play the demo"] { display: none !important; }
`;
