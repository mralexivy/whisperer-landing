import React, { type ReactNode } from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { CLAMP, EASE_IN_OUT, EASE_OUT, rise } from "../lib/anim";

/** Page background: navy with a soft accent glow. */
export function Backdrop({ children }: { children?: ReactNode }) {
  return (
    <AbsoluteFill style={{ background: "#0B0B19" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(1200px 700px at 50% 115%, rgba(91,108,247,0.20), transparent 60%), radial-gradient(900px 500px at 85% -10%, rgba(139,92,246,0.12), transparent 60%)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
}

export type CamKey = { f: number; x: number; y: number; s: number; rx?: number; ry?: number };

/**
 * Moves a layer so its point (x, y) lands at the screen point (cx, cy) at scale s.
 * Keys are interpolated with an ease-in-out per segment.
 */
export function Camera({ f, keys, cx = 960, cy = 610, children }: { f: number; keys: CamKey[]; cx?: number; cy?: number; children: ReactNode }) {
  const fs = keys.map((k) => k.f);
  const at = (pick: (k: CamKey) => number) =>
    keys.length === 1 ? pick(keys[0]) : interpolate(f, fs, keys.map(pick), { ...CLAMP, easing: EASE_IN_OUT });
  const s = at((k) => k.s);
  const x = at((k) => k.x);
  const y = at((k) => k.y);
  const rx = at((k) => k.rx ?? 0);
  const ry = at((k) => k.ry ?? 0);
  return (
    <AbsoluteFill style={{ perspective: 2400, perspectiveOrigin: `${cx}px ${cy}px` }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transformOrigin: "0 0",
          transform: `translate(${cx - x * s}px, ${cy - y * s}px) scale(${s})`,
        }}
      >
        <div style={{ transformOrigin: `${x}px ${y}px`, transform: `rotateX(${rx}deg) rotateY(${ry}deg)` }}>{children}</div>
      </div>
    </AbsoluteFill>
  );
}

export type CursorKey = { f: number; x: number; y: number };

/** macOS pointer moving between keyframes, with press feedback at click frames. */
export function Cursor({ f, keys, clicks = [], appear = 0, hide = 99999, size = 22 }: { f: number; keys: CursorKey[]; clicks?: number[]; appear?: number; hide?: number; size?: number }) {
  if (f < appear || f > hide + 10) return null;
  const fs = keys.map((k) => k.f);
  const x = keys.length === 1 ? keys[0].x : interpolate(f, fs, keys.map((k) => k.x), { ...CLAMP, easing: EASE_IN_OUT });
  const y = keys.length === 1 ? keys[0].y : interpolate(f, fs, keys.map((k) => k.y), { ...CLAMP, easing: EASE_IN_OUT });
  let press = 1;
  let ring = 0;
  let ringOp = 0;
  for (const c of clicks) {
    if (f >= c - 3 && f <= c + 6) press = interpolate(f, [c - 3, c, c + 6], [1, 0.82, 1], CLAMP);
    if (f >= c && f <= c + 16) {
      ring = interpolate(f, [c, c + 16], [0.3, 1], { ...CLAMP, easing: EASE_OUT });
      ringOp = interpolate(f, [c, c + 16], [0.55, 0], CLAMP);
    }
  }
  const op = interpolate(f, [appear, appear + 8, hide, hide + 10], [0, 1, 1, 0], CLAMP);
  return (
    <div style={{ position: "absolute", left: x, top: y, zIndex: 50, opacity: op, pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: -22,
          top: -22,
          width: 44,
          height: 44,
          borderRadius: 999,
          border: "2px solid rgba(255,255,255,0.9)",
          scale: String(ring),
          opacity: ringOp,
        }}
      />
      <svg width={size} height={size * 1.4} viewBox="0 0 20 28" style={{ scale: String(press), transformOrigin: "2px 2px", filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.45))" }}>
        <path d="M2 2 L2 22 L7 17.5 L10.5 25.5 L14 24 L10.6 16.2 L17.2 16.2 Z" fill="#111" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export type TitleItem = { from: number; to: number; text: string; sub?: string };

/** The large on-screen line for each beat, top centre, outside the camera. */
export function Titles({ f, items, top = 54 }: { f: number; items: TitleItem[]; top?: number }) {
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div style={{ position: "absolute", inset: 0, height: 290, background: "linear-gradient(#0B0B19 0%, #0B0B19 52%, rgba(11,11,25,0.75) 70%, rgba(11,11,25,0) 100%)" }} />
      {items.map((it) => {
        if (f < it.from - 2 || f > it.to + 2) return null;
        const p = rise(f, it.from, 200, 22);
        const out = interpolate(f, [it.to - 10, it.to], [1, 0], CLAMP);
        return (
          <div
            key={it.text + it.from}
            style={{
              position: "absolute",
              top,
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: Math.min(p, out),
              translate: `0 ${(1 - p) * 26 + (1 - out) * -14}px`,
              filter: `blur(${(1 - p) * 8 + (1 - out) * 6}px)`,
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 650, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>{it.text}</div>
            {it.sub && <div style={{ marginTop: 12, fontSize: 26, fontWeight: 400, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}>{it.sub}</div>}
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

/** Soft UI click at the given local frames. */
export function Clicks({ at, volume = 0.35 }: { at: number[]; volume?: number }) {
  return (
    <>
      {at.map((c) => (
        <Sequence key={c} from={Math.max(0, c - 1)} durationInFrames={12} layout="none">
          <Audio src={staticFile("audio/key-press.wav")} volume={volume} />
        </Sequence>
      ))}
    </>
  );
}
