"use client";

import { Check, Globe, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, PauseButton, useLoop } from "./primitives";

const LINES = [
  { lang: "English", text: "Quick update: the build is green and I'm sending it to beta testers this afternoon." },
  { lang: "Español", text: "Perfecto, mañana reviso los comentarios y te escribo antes de la reunión." },
  { lang: "Deutsch", text: "Ich schicke dir die Zusammenfassung heute Abend, bevor wir morgen starten." },
];
const TICK = 140;

/**
 * Dictation in Slack: hold Fn, words stream in your language, release, the text is copied,
 * paste with ⌘V. One line per language, then the next.
 */
export function DictationDemo({ className }: { className?: string }) {
  const per = LINES.map((l) => l.text.split(" ").length + 22);
  const total = per.reduce((a, b) => a + b, 0);
  const { ref, tick, paused, setPaused } = useLoop(total, TICK, { restFrame: per[0] - 1, startFrame: 11 });

  let acc = 0;
  let idx = 0;
  for (let i = 0; i < per.length; i++) {
    if (tick < acc + per[i]) { idx = i; break; }
    acc += per[i];
  }
  const local = tick - acc;
  const line = LINES[idx];
  const words = line.text.split(" ");
  const speaking = local >= 3 && local < words.length + 3;
  const shownWords = Math.max(0, Math.min(words.length, local - 3));
  const copied = local >= words.length + 5;
  const pasted = local >= words.length + 11;
  const sent = LINES.slice(0, idx);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Slack" bodyClassName="h-[460px] bg-[#1A1D21] flex">
        <div className="hidden sm:block w-[150px] shrink-0 bg-[#19171D] border-r border-white/[0.06] px-3 py-4 text-[12px] text-white/55 space-y-1.5">
          <div className="text-white font-bold text-[13px] mb-3">Northwind</div>
          {["general", "launch", "design", "random"].map((c) => (
            <div key={c} className={cn("flex items-center gap-1.5 rounded-[6px] px-1.5 py-1", c === "launch" && "bg-[#1164A3] text-white")}>
              <Hash className="h-3 w-3" /> {c}
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="px-5 py-3 border-b border-white/[0.06] text-[13px] font-bold text-white flex items-center gap-1"><Hash className="h-3.5 w-3.5" /> launch</div>
          <div className="flex-1 min-h-0 overflow-hidden px-5 py-4 space-y-3 flex flex-col justify-end">
            <div className="flex gap-2.5">
              <span className="h-8 w-8 rounded-[6px] bg-emerald-500/25 text-emerald-300 text-[11px] font-bold flex items-center justify-center shrink-0">ML</span>
              <div>
                <div className="text-[12px] font-bold text-white">Maya Levin <span className="font-normal text-white/35 text-[10.5px]">10:38</span></div>
                <div className="text-[13px] text-white/85 leading-snug">Where are we on the beta build?</div>
              </div>
            </div>
            {[...sent, ...(pasted ? [line] : [])].map((l, i) => (
              <div key={i} className="flex gap-2.5 animate-fade-in">
                <span className="h-8 w-8 rounded-[6px] bg-[#5B6CF7]/30 text-[#9BA6FF] text-[11px] font-bold flex items-center justify-center shrink-0">ME</span>
                <div>
                  <div className="text-[12px] font-bold text-white">You <span className="font-normal text-white/35 text-[10.5px]">10:4{i}</span></div>
                  <div className="text-[13px] text-white/85 leading-snug">{l.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-4 rounded-[10px] ring-1 ring-white/15 bg-[#222529] px-3.5 py-3 text-[13px] text-white/35 min-h-[46px]">
            Message #launch
          </div>
        </div>

        {/* HUD over the app, like the real overlay */}
        {(speaking || (shownWords > 0 && !copied)) && (
          <div className="absolute inset-x-0 bottom-24 flex justify-center px-4"><div className="w-full max-w-[440px] animate-fade-in">
            <div className="rounded-[18px] bg-[#14142B]/95 ring-1 ring-white/10 px-4 py-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#5B6CF7] animate-pulse" />
                <span className="text-[10.5px] font-medium text-white/50">Listening</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10.5px] text-white/70">
                  <Globe className="h-3 w-3" /> {line.lang}
                </span>
              </div>
              <div className="text-[13.5px] leading-snug text-white min-h-[20px]">
                {words.slice(0, shownWords).join(" ")}
                <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#8B9BFF] animate-pulse" />
              </div>
            </div>
          </div></div>
        )}
        {copied && !pasted && (
          <div className="absolute inset-x-0 bottom-24 flex justify-center"><div className="animate-fade-in">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#14142B]/95 ring-1 ring-white/10 pl-2 pr-3 py-2 shadow-xl">
              <span className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
              <span className="text-[12.5px] text-white">Copied</span>
              <kbd className="rounded-[6px] bg-white/10 px-1.5 py-0.5 text-[11px] text-white/80 font-sans">⌘V</kbd>
            </div>
          </div></div>
        )}
      </AppWindow>
      <div className="absolute -top-4 left-28 inline-flex items-center gap-2 rounded-full bg-[#14142B] ring-1 ring-white/10 px-3 py-1.5 text-[11.5px] text-white/80 shadow-lg">
        <kbd className={cn("rounded-[6px] px-1.5 py-0.5 text-[11px] font-sans transition-colors", speaking ? "bg-[#5B6CF7] text-white" : "bg-white/10 text-white/70")}>fn</kbd>
        {speaking ? "Holding" : copied ? "Released" : "Hold to talk"}
      </div>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}
