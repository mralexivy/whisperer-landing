import { Easing, interpolate, spring } from "remotion";

export const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);
export const EASE_IN_OUT = Easing.bezier(0.65, 0, 0.35, 1);

export const FPS = 30;

/** Piecewise interpolation through keyframes, eased per segment. */
export function track(f: number, frames: number[], values: number[], easing = EASE_IN_OUT) {
  return interpolate(f, frames, values, { ...CLAMP, easing });
}

/** 0 → 1 spring that starts at `at` (local frames). */
export function rise(f: number, at: number, damping = 200, durationInFrames?: number) {
  return spring({ frame: f - at, fps: FPS, config: { damping }, durationInFrames });
}

/** Fade in at `a`, out at `b` (each over `d` frames). */
export function window01(f: number, a: number, b: number, d = 10) {
  return interpolate(f, [a, a + d, b - d, b], [0, 1, 1, 0], CLAMP);
}

/** Words of `text` visible at local frame f, one word every `every` frames from `start`. */
export function wordsAt(text: string, f: number, start: number, every: number) {
  const words = text.split(" ");
  const n = Math.max(0, Math.min(words.length, Math.floor((f - start) / every) + 1));
  return { text: words.slice(0, n).join(" "), n, total: words.length, done: n >= words.length };
}

export const wordCount = (s: string) => s.split(" ").length;

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
