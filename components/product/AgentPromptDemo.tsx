"use client";

import { Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, PauseButton, useLoop } from "./primitives";

const PROMPT =
  "Add retry with exponential backoff to the upload handler, keep the progress bar from jumping backwards, then run the tests.";
const STEPS = [
  { at: 4, mark: "Read", text: "src/upload/handler.ts" },
  { at: 8, mark: "Edit", text: "handler.ts  +18 −4" },
  { at: 12, mark: "Edit", text: "ProgressBar.tsx  +3 −1" },
  { at: 16, mark: "Bash", text: "npm test   42 passed" },
];
const TICK = 150;

/**
 * Dictating a prompt to a coding agent in the terminal: hold Fn, say what you want, let go,
 * paste with ⌘V, and the agent gets to work. Whisperer only writes the words; the agent writes the code.
 */
export function AgentPromptDemo({ className }: { className?: string }) {
  const words = PROMPT.split(" ");
  const listen = 3;                          // Fn goes down
  const release = listen + words.length + 1; // last word, then let go
  const copied = release + 2;
  const pasted = copied + 6;
  const run = pasted + 3;                    // the agent starts
  const total = run + 20 + 18;
  const { ref, tick, paused, setPaused } = useLoop(total, TICK, { restFrame: total - 1, startFrame: total - 16 });

  const speaking = tick >= listen && tick < release;
  const shown = Math.max(0, Math.min(words.length, tick - listen));
  const hud = tick >= listen && tick < copied;
  const toast = tick >= copied && tick < pasted;
  const inPrompt = tick >= pasted;
  const local = tick - run;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Terminal" bodyClassName="h-[460px] bg-[#0E0E14] font-mono text-[12.5px] leading-[1.65] flex flex-col">
        <div className="flex-1 min-h-0 overflow-hidden px-5 py-4 flex flex-col justify-end gap-1.5">
          <div className="text-white/35">✻ Welcome back. /help for commands</div>
          <div className="text-white/35">cwd: ~/northwind-app · main</div>
          {inPrompt && (
            <div className="mt-3 rounded-[8px] bg-white/[0.04] px-3 py-2 text-white/90 animate-fade-in">
              <span className="text-[#D97757]">&gt; </span>{PROMPT}
            </div>
          )}
          {STEPS.map((s) =>
            local >= s.at ? (
              <div key={s.text} className="flex items-center gap-2 animate-fade-in">
                <span className={cn("h-2 w-2 rounded-full", local >= s.at + 3 ? "bg-emerald-400" : "bg-amber-400 animate-pulse")} />
                <span className="text-white/90">{s.mark}</span>
                <span className="text-white/50 truncate">{s.text}</span>
              </div>
            ) : null,
          )}
          {local >= 20 && (
            <div className="mt-1 text-white/75 animate-fade-in">Done. Retries back off 0.5s → 8s and progress only moves forward.</div>
          )}
        </div>
        <div className="mx-4 mb-4 rounded-[10px] ring-1 ring-white/12 bg-white/[0.03] px-3.5 py-2.5 text-white/35">
          <span className="text-[#D97757]">&gt; </span>{inPrompt ? "" : "Try “refactor the upload handler”"}
        </div>

        {hud && (
          <div className="absolute inset-x-0 bottom-20 flex justify-center px-4 font-sans">
            <div className="w-full max-w-[460px] animate-fade-in rounded-[18px] bg-[#14142B]/95 ring-1 ring-white/10 px-4 py-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={cn("h-2 w-2 rounded-full bg-[#5B6CF7]", speaking && "animate-pulse")} />
                <span className="text-[10.5px] font-medium text-white/50">{speaking ? "Listening" : "Finishing"}</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10.5px] text-white/70"><Globe className="h-3 w-3" /> English</span>
              </div>
              <div className="text-[13.5px] leading-snug text-white min-h-[20px]">
                {words.slice(0, shown).join(" ")}
                {speaking && <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#8B9BFF] animate-pulse" />}
              </div>
            </div>
          </div>
        )}
        {toast && (
          <div className="absolute inset-x-0 bottom-20 flex justify-center font-sans">
            <div className="inline-flex animate-fade-in items-center gap-2.5 rounded-full bg-[#14142B]/95 ring-1 ring-white/10 pl-2 pr-3 py-2 shadow-xl">
              <span className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
              <span className="text-[12.5px] text-white">Copied</span>
              <kbd className="rounded-[6px] bg-white/10 px-1.5 py-0.5 text-[11px] text-white/80 font-sans">⌘V</kbd>
            </div>
          </div>
        )}
      </AppWindow>
      <div className="absolute -top-4 left-28 inline-flex items-center gap-2 rounded-full bg-[#14142B] ring-1 ring-white/10 px-3 py-1.5 text-[11.5px] text-white/80 shadow-lg">
        <kbd className={cn("rounded-[6px] px-1.5 py-0.5 text-[11px] font-sans transition-colors", speaking ? "bg-[#5B6CF7] text-white" : "bg-white/10 text-white/70")}>fn</kbd>
        {speaking ? "Holding" : tick >= release && tick < run ? "Released" : "Hold to talk"}
      </div>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}
