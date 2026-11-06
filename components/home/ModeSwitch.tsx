"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NotebookPen, Mic, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { DictationDemo } from "@/components/product/DictationDemo";
import { IslandBar, CallDetectedCard } from "@/components/product/Island";
import { BrandIcon } from "@/components/product/primitives";
import { MODE_VIDEOS } from "@/lib/site";

export type Mode = "meetings" | "dictation";

const MODES: { id: Mode; icon: typeof Mic; label: string; sub: string }[] = [
  { id: "dictation", icon: Mic, label: "Dictation", sub: "Your voice, as text, in any app" },
  { id: "meetings", icon: NotebookPen, label: "Meeting notes", sub: "Every call, written up for you" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function FnKey() {
  return (
    <div aria-hidden className="pointer-events-none absolute -left-6 bottom-10 z-10 hidden lg:block">
      <div className="relative">
        <div className="absolute inset-0 rounded-[18px] bg-[#5B6CF7] blur-2xl opacity-60 animate-[glow-pulse_2.6s_ease-in-out_infinite]" />
        <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-[18px] bg-gradient-to-b from-[#7383FF] to-[#4C5DE8] text-[30px] font-semibold text-white shadow-[0_14px_40px_-10px_rgba(91,108,247,0.9),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-4px_0_rgba(0,0,0,0.25)]">
          fn
        </div>
      </div>
    </div>
  );
}

function LanguageRail() {
  const langs = ["English", "Español", "Deutsch", "Français", "日本語", "עברית", "Português", "हिन्दी"];
  return (
    <div aria-hidden className="pointer-events-none absolute -right-8 top-20 z-10 hidden lg:flex flex-col items-stretch gap-2">
      {langs.map((l) => (
        <span
          key={l}
          className="rounded-full bg-[#14142B]/90 px-3.5 py-1.5 text-center text-[12.5px] text-white/75 ring-1 ring-white/10 backdrop-blur shadow-lg"
        >
          {l}
        </span>
      ))}
    </div>
  );
}

export function ModeStage({ mode }: { mode: Mode }) {
  const reduce = useReducedMotion();
  const enter = reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985, filter: "blur(10px)" };
  const show = reduce ? { opacity: 1 } : { opacity: 1, scale: 1, filter: "blur(0px)" };
  return (
    <div className="relative mx-auto max-w-[1160px]">
      <div aria-hidden className="absolute inset-x-[8%] -top-10 h-40 rounded-full bg-[#5B6CF7]/30 blur-[90px]" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode}
          initial={enter}
          animate={show}
          exit={enter}
          transition={{ duration: reduce ? 0.15 : 0.45, ease: EASE }}
          className="relative"
          id={`mode-panel-${mode}`}
          role="tabpanel"
          aria-labelledby={`mode-tab-${mode}`}
        >
          {mode === "meetings" ? (
            <>
              <MeetingStudio className="relative" />
              <IslandBar className="absolute -top-5 left-1/2 -translate-x-1/2 z-10" time="03:12" />
              <CallDetectedCard className="hidden lg:block absolute -left-10 bottom-16 z-10" title="Mobile launch review · take notes?" />
            </>
          ) : (
            <div className="relative mx-auto max-w-[1000px]">
              <DictationDemo />
              <FnKey />
              <LanguageRail />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** Segmented switch between the app's two jobs. Arrow keys move between tabs. */
export function ModeTabs({ mode, onChange, className }: { mode: Mode; onChange: (m: Mode) => void; className?: string }) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + MODES.length) % MODES.length;
    onChange(MODES[next].id);
    refs.current[next]?.focus();
  };
  return (
    <div
      role="tablist"
      aria-label="What Whisperer does"
      className={cn("relative inline-grid grid-cols-2 rounded-[20px] bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur", className)}
    >
      {MODES.map((m, i) => {
        const active = m.id === mode;
        return (
          <button
            key={m.id}
            ref={(el) => { refs.current[i] = el; }}
            id={`mode-tab-${m.id}`}
            role="tab"
            type="button"
            aria-selected={active}
            aria-controls={`mode-panel-${m.id}`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(m.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "relative flex items-center gap-3 rounded-[15px] px-4 py-2.5 text-left transition-colors duration-200 sm:px-5 sm:py-3",
              active ? "text-white" : "text-white/55 hover:text-white/85",
            )}
          >
            {active && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 rounded-[15px] bg-gradient-to-b from-[#2A2F72] to-[#1C1F52] ring-1 ring-[#5B6CF7]/50 shadow-[0_10px_30px_-12px_rgba(91,108,247,0.8)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className={cn("relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] transition-colors", active ? "bg-[#5B6CF7] text-white" : "bg-white/[0.06] text-white/60")}>
              <m.icon className="h-[18px] w-[18px]" />
            </span>
            <span className="relative">
              <span className="block text-[15px] font-semibold leading-tight">{m.label}</span>
              <span className="hidden sm:block text-[12.5px] leading-tight text-white/50">{m.sub}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** "Watch the … demo" that follows the selected mode. */
export function WatchButton({ mode, onWatch, className }: { mode: Mode; onWatch: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onWatch}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-5 text-[15px] font-medium text-white/85 ring-1 ring-white/15 bg-white/[0.03]",
        "transition-all duration-200 hover:bg-white/[0.07] hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        className,
      )}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#5B6CF7]">
        <Play className="h-3.5 w-3.5 fill-current translate-x-px" />
      </span>
      Watch the {mode === "meetings" ? "meeting" : "dictation"} demo
      <span className="tabular-nums text-white/40">{MODE_VIDEOS[mode].length}</span>
    </button>
  );
}

export function CallAppsLine() {
  return (
    <span className="flex -space-x-1">
      {(["zoom", "teams", "google-meet", "slack"] as const).map((b) => (
        <span key={b} className="h-5 w-5 rounded-full bg-[#14142B] ring-1 ring-white/10 flex items-center justify-center"><BrandIcon brand={b} size={11} /></span>
      ))}
    </span>
  );
}
