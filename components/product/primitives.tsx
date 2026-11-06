"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Marks that are drawn in black; on the navy ground they print white.
const INK_MARKS = new Set(["openai", "cursor", "codex", "anthropic", "windsurf", "webex", "claude-code"]);

export type Brand =
  | "zoom" | "teams" | "google-meet" | "slack" | "webex" | "discord"
  | "claude" | "claude-code" | "anthropic" | "openai" | "gemini" | "cursor" | "windsurf" | "codex"
  | "visual-studio-code" | "google-calendar" | "outlook";

export const BRAND_NAMES: Record<Brand, string> = {
  zoom: "Zoom",
  teams: "Microsoft Teams",
  "google-meet": "Google Meet",
  slack: "Slack",
  webex: "Webex",
  discord: "Discord",
  claude: "Claude",
  "claude-code": "Claude Code",
  anthropic: "Anthropic",
  openai: "ChatGPT",
  gemini: "Gemini",
  cursor: "Cursor",
  windsurf: "Windsurf",
  codex: "Codex",
  "visual-studio-code": "VS Code",
  "google-calendar": "Google Calendar",
  outlook: "Outlook",
};

export function BrandIcon({ brand, size = 20, className, alt }: { brand: Brand; size?: number; className?: string; alt?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/brands/${brand}.svg`}
      alt={alt ?? BRAND_NAMES[brand]}
      width={size}
      height={size}
      loading="lazy"
      className={cn("object-contain shrink-0", INK_MARKS.has(brand) && "brightness-0 invert", className)}
      style={{ width: size, height: size }}
    />
  );
}

/** A tile behind a brand mark, the way the app shows providers. */
export function BrandTile({ brand, size = 36, className }: { brand: Brand; size?: number; className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center justify-center rounded-[10px] bg-white/[0.06] ring-1 ring-white/[0.06] shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <BrandIcon brand={brand} size={Math.round(size * 0.55)} />
    </span>
  );
}

/** macOS window chrome around live product UI. */
export function AppWindow({
  children,
  className,
  title,
  bodyClassName,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[14px] bg-[#0C0C1A] ring-1 ring-white/[0.09]",
        "shadow-[0_40px_120px_-30px_rgba(10,10,40,0.9),0_0_0_1px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      <div className="flex h-9 items-center gap-2 px-3.5 border-b border-white/[0.05] bg-[#0A0A18]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        {title && <span className="ml-3 text-[11px] font-medium text-white/40">{title}</span>}
      </div>
      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/**
 * Drives a looping demo: returns the current tick (0..steps-1). It opens on `startFrame`.
 * Runs only while on screen, rests on the final frame under reduced motion,
 * and can be paused by the visitor.
 */
export function useLoop(
  steps: number,
  intervalMs: number,
  { restFrame, startFrame }: { restFrame?: number; startFrame?: number } = {},
) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  // Open on a full frame (also what the server renders), then play on from there.
  const [tick, setTick] = useState(startFrame ?? restFrame ?? 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || !visible) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % steps), intervalMs);
    return () => window.clearInterval(id);
  }, [reduced, paused, visible, steps, intervalMs]);

  const shown = reduced ? (restFrame ?? steps - 1) : tick;
  return { ref, tick: shown, paused, setPaused, reduced, restart: () => setTick(0) };
}

export function PauseButton({ paused, onToggle, className }: { paused: boolean; onToggle: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? "Play the demo" : "Pause the demo"}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/70 ring-1 ring-white/10 backdrop-blur",
        "transition hover:text-white hover:bg-black/60 active:scale-95",
        className,
      )}
    >
      {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
    </button>
  );
}

/** A coloured status pill like the app's (Ready · Claude plan). */
export function StatusPill({ tone = "green", children }: { tone?: "green" | "amber" | "blue" | "red"; children: ReactNode }) {
  const dot = { green: "bg-emerald-400", amber: "bg-amber-400", blue: "bg-[#5B6CF7]", red: "bg-red-500" }[tone];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/80 whitespace-nowrap">
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {children}
    </span>
  );
}

/** Uppercase section label used inside the app (MEETING NOTES & ASK AI). */
export function AppLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-[10px] font-semibold tracking-[0.12em] text-white/45", className)}>{children}</div>;
}
