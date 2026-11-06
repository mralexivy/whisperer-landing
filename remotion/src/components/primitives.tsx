import React, { type ReactNode } from "react";
import { Img, staticFile, interpolate } from "remotion";
import { cn, CLAMP, rise } from "../lib/anim";
import { SPEAKERS } from "../lib/demo-data";

const INK_MARKS = new Set(["openai", "cursor", "codex", "anthropic", "windsurf", "webex", "claude-code"]);

export type Brand =
  | "zoom" | "teams" | "google-meet" | "slack" | "webex" | "discord"
  | "claude" | "claude-code" | "anthropic" | "openai" | "gemini" | "cursor" | "windsurf" | "codex"
  | "visual-studio-code" | "google-calendar" | "outlook";

export function BrandIcon({ brand, size = 20, className, style }: { brand: Brand; size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <Img
      src={staticFile(`brands/${brand}.svg`)}
      className={cn("object-contain shrink-0", className)}
      style={{ width: size, height: size, filter: INK_MARKS.has(brand) ? "brightness(0) invert(1)" : undefined, ...style }}
    />
  );
}

export function AppWindow({
  children,
  className,
  title,
  bodyClassName,
  width,
  bodyHeight,
  style,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  bodyClassName?: string;
  width?: number;
  bodyHeight?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-[14px] bg-[#0C0C1A]", className)}
      style={{
        width,
        boxShadow: "0 40px 120px -30px rgba(10,10,40,0.9), 0 0 0 1px rgba(255,255,255,0.09), 0 0 0 1.5px rgba(0,0,0,0.4)",
        ...style,
      }}
    >
      <div className="flex h-9 items-center gap-2 px-3.5 border-b border-white/[0.05] bg-[#0A0A18]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        {title && <span className="ml-3 text-[11px] font-medium text-white/40">{title}</span>}
      </div>
      <div className={cn("relative", bodyClassName)} style={{ height: bodyHeight }}>
        {children}
      </div>
    </div>
  );
}

export function StatusPill({ tone = "green", children }: { tone?: "green" | "amber" | "blue" | "red"; children: ReactNode }) {
  const dot = { green: "bg-emerald-400", amber: "bg-amber-400", blue: "bg-[#5B6CF7]", red: "bg-red-500" }[tone];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/80 whitespace-nowrap">
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {children}
    </span>
  );
}

export function AppLabel({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={cn("text-[10px] font-semibold tracking-[0.12em] text-white/45", className)} style={style}>
      {children}
    </div>
  );
}

export function Avatar({ id, size = 22, label, ring = 0 }: { id: keyof typeof SPEAKERS; size?: number; label?: string; ring?: number }) {
  const s = SPEAKERS[id];
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-semibold shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.36),
        background: `color-mix(in srgb, ${s.color} 22%, #0C0C1A)`,
        boxShadow: ring > 0
          ? `inset 0 0 0 1px ${s.color}AA, 0 0 0 2px #0C0C1A, 0 0 0 ${2 + 2 * ring}px ${s.color}, 0 0 ${10 * ring}px ${s.color}88`
          : `inset 0 0 0 1px ${s.color}66, 0 0 0 2px #0C0C1A`,
        position: "relative",
        zIndex: ring > 0 ? 2 : undefined,
        color: s.color,
      }}
    >
      {label ?? s.initials}
    </span>
  );
}

/** Fade + lift in at local frame `at`. */
export function Reveal({ f, at, children, className, y = 8, style }: { f: number; at: number; children: ReactNode; className?: string; y?: number; style?: React.CSSProperties }) {
  const p = rise(f, at);
  if (f < at) return null;
  return (
    <div className={className} style={{ opacity: interpolate(p, [0, 1], [0, 1], CLAMP), translate: `0 ${(1 - p) * y}px`, ...style }}>
      {children}
    </div>
  );
}

/** Blinking text caret, frame-driven. */
export function Caret({ f, color = "#8B9BFF" }: { f: number; color?: string }) {
  const on = Math.floor(f / 8) % 2 === 0;
  return <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5" style={{ background: color, opacity: on ? 1 : 0.2 }} />;
}

/** Pulse opacity (0.35..1) for recording dots. */
export const pulse = (f: number, speed = 0.18) => 0.65 + 0.35 * Math.sin(f * speed);
