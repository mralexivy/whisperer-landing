"use client";

import { useMemo } from "react";
import {
  AudioLines, BookOpen, CalendarDays, ChartLine, FileAudio, NotebookPen, Settings, Sparkles, Workflow,
  Search, Play, CheckCircle2, CircleHelp, Flag, ArrowUp, Paperclip,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, BrandIcon, PauseButton, useLoop, AppLabel } from "./primitives";
import {
  SPEAKERS, MEETING, SEGMENTS, OVERVIEW, DECISIONS, ACTION_ITEMS, OPEN_QUESTION, ASK,
} from "./demo-data";

const TICK_MS = 150;

// Build the timeline once: word counts decide how long each transcript line takes.
function useTimeline() {
  return useMemo(() => {
    const segs = SEGMENTS.slice(0, 4).map((s) => ({ ...s, words: s.text.split(" ") }));
    const starts: number[] = [];
    let t = 2;
    for (const s of segs) {
      starts.push(t);
      t += s.words.length + 3;
    }
    const liveEnd = t;
    const writingEnd = liveEnd + 9;
    const overviewEnd = writingEnd + 26;
    const qWords = ASK.question.split(" ");
    const aWords = ASK.answer.split(" ");
    const askStart = overviewEnd;
    const answerStart = askStart + qWords.length + 4;
    const total = answerStart + aWords.length + 22;
    return { segs, starts, liveEnd, writingEnd, overviewEnd, askStart, answerStart, qWords, aWords, total };
  }, []);
}

const SIDEBAR = [
  { icon: AudioLines, label: "Transcriptions", color: "text-sky-400" },
  { icon: NotebookPen, label: "Meeting Notes", color: "text-cyan-400", active: true },
  { icon: CalendarDays, label: "Calendar", color: "text-rose-400" },
  { icon: FileAudio, label: "File Transcription", color: "text-fuchsia-400" },
  { icon: BookOpen, label: "Dictionary", color: "text-red-400" },
  { icon: Sparkles, label: "LLM", color: "text-pink-400" },
  { icon: ChartLine, label: "Statistics", color: "text-sky-400" },
  { icon: Workflow, label: "MCP", color: "text-teal-300" },
  { icon: Settings, label: "Settings", color: "text-amber-400" },
];

export function WorkspaceSidebar({ active = "Meeting Notes", className }: { active?: string; className?: string }) {
  return (
    <aside className={cn("w-[184px] shrink-0 bg-[#0A0A18] border-r border-white/[0.05] px-3 py-4", className)}>
      <div className="flex items-center gap-2.5 px-1.5 mb-5">
        <div className="h-8 w-8 rounded-[9px] bg-gradient-to-br from-[#1C1C3A] to-[#14142B] ring-1 ring-white/10 flex items-center justify-center">
          <AudioLines className="h-4 w-4 text-[#8B9BFF]" />
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold text-white">Whisperer</div>
          <div className="text-[10.5px] text-white/45">Workspace</div>
        </div>
      </div>
      <nav className="space-y-0.5">
        {SIDEBAR.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className={cn(
              "flex items-center gap-2.5 rounded-[8px] px-2 py-[7px] text-[12px] text-white/75",
              label === active && "bg-[#5B6CF7]/[0.14] ring-1 ring-[#5B6CF7]/30 text-white",
            )}
          >
            <Icon className={cn("h-[15px] w-[15px]", color)} />
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function Avatar({ id, size = 22 }: { id: keyof typeof SPEAKERS; size?: number }) {
  const s = SPEAKERS[id];
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-semibold shrink-0 ring-2 ring-[#0C0C1A]"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.36), background: `color-mix(in srgb, ${s.color} 22%, #0C0C1A)`, boxShadow: `inset 0 0 0 1px ${s.color}66`, color: s.color }}
    >
      {s.initials}
    </span>
  );
}

function Waveform({ live }: { live: boolean }) {
  // Fixed bar heights keep server and client renders identical.
  const bars = [6, 10, 14, 9, 18, 12, 7, 16, 20, 11, 8, 15, 19, 10, 6, 13, 17, 9, 12, 18, 7, 14, 10, 16];
  return (
    <div className="flex items-center gap-[2px] h-6">
      {bars.map((h, i) => (
        <span
          key={i}
          className={cn("w-[2px] rounded-full bg-white/40", live && "animate-[waveform_1.1s_ease-in-out_infinite]")}
          style={{ height: h, animationDelay: `${(i % 6) * 0.12}s` }}
        />
      ))}
    </div>
  );
}

export function MeetingStudio({ className, compact = false }: { className?: string; compact?: boolean }) {
  const tl = useTimeline();
  const { ref, tick, paused, setPaused } = useLoop(tl.total, TICK_MS, { restFrame: tl.total - 1, startFrame: tl.starts[2] + 6 });

  const phase = tick < tl.liveEnd ? "live" : tick < tl.writingEnd ? "writing" : tick < tl.askStart ? "overview" : "ask";
  const tab = phase === "live" ? "Transcript" : "Overview";

  // How many words of each segment are visible while live.
  const shown = tl.segs.map((s, i) => {
    if (phase !== "live") return s.words.length;
    return Math.max(0, Math.min(s.words.length, tick - tl.starts[i]));
  });

  const elapsed = (() => {
    const secs = 3 * 60 + 2 + Math.floor((Math.min(tick, tl.liveEnd) * TICK_MS) / 1000) * 3;
    return `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;
  })();

  const qShown = phase === "ask" ? Math.min(tl.qWords.length, tick - tl.askStart) : 0;
  const aShown = phase === "ask" ? Math.max(0, Math.min(tl.aWords.length, tick - tl.answerStart)) : 0;
  const notesReveal = phase === "overview" || phase === "ask" ? Math.min(6, Math.floor((tick - tl.writingEnd) / 3) + 1) : 0;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow bodyClassName="flex h-[540px]">
        <WorkspaceSidebar className={cn("hidden", compact ? "" : "xl:block")} />

        {/* Notes list */}
        <div className="hidden lg:flex w-[200px] shrink-0 flex-col border-r border-white/[0.05] px-3 py-4">
          <div className="text-[14px] font-semibold text-white mb-3 px-1">Notes</div>
          <div className="flex items-center gap-2 rounded-[8px] bg-white/[0.05] px-2.5 py-1.5 text-[11.5px] text-white/40 mb-3">
            <Search className="h-3 w-3" /> Search notes
          </div>
          <AppLabel className="px-1 mb-1.5">TODAY</AppLabel>
          <div className="rounded-[10px] bg-[#5B6CF7]/[0.12] ring-1 ring-[#5B6CF7]/30 px-2.5 py-2 mb-2">
            <div className="flex items-center gap-1.5">
              <BrandIcon brand="zoom" size={13} />
              <span className="text-[12px] font-semibold text-white truncate">{MEETING.title}</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[10.5px]">
              {phase === "live" ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-1.5 py-0.5 text-red-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Recording
                </span>
              ) : (
                <span className="rounded-full bg-[#5B6CF7]/15 px-1.5 py-0.5 text-[#9BA6FF]">32:14</span>
              )}
              <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">3 speakers</span>
            </div>
          </div>
          {[
            ["google-meet", "Design crit: onboarding v2", "Yesterday"],
            ["teams", "Weekly sync with Northwind", "Mon"],
            ["slack", "Pricing huddle", "Fri"],
          ].map(([b, t, d]) => (
            <div key={t} className="px-2.5 py-2 rounded-[10px]">
              <div className="flex items-center gap-1.5">
                <BrandIcon brand={b as "zoom"} size={12} />
                <span className="text-[11.5px] text-white/80 truncate">{t}</span>
              </div>
              <div className="text-[10px] text-white/35 mt-0.5 pl-[18px]">{d}</div>
            </div>
          ))}
        </div>

        {/* Detail */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="px-5 pt-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[17px] font-bold text-white truncate">{MEETING.title}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{MEETING.date} · {phase === "live" ? elapsed : MEETING.duration}</div>
              </div>
              <div className="flex -space-x-1 shrink-0">
                {(["me", "maya", "dan", "priya"] as const).map((id) => <Avatar key={id} id={id} size={26} />)}
              </div>
            </div>
            <div className="mt-3 flex border-b border-white/[0.06] text-[12.5px]">
              {(["Transcript", "Overview"] as const).map((t) => (
                <div
                  key={t}
                  className={cn(
                    "flex-1 text-center pb-2 -mb-px transition-colors",
                    tab === t ? "text-white font-semibold border-b-2 border-[#5B6CF7]" : "text-white/40",
                  )}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1 min-h-0 overflow-hidden px-5 py-4">
            {tab === "Transcript" ? (
              <div className="space-y-3">
                {tl.segs.map((s, i) =>
                  shown[i] > 0 ? (
                    <div key={i} className="animate-fade-in">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11.5px] font-semibold" style={{ color: SPEAKERS[s.speaker].color }}>
                          {SPEAKERS[s.speaker].name}
                        </span>
                        <span className="text-[10px] text-white/30 tabular-nums">{s.t}</span>
                      </div>
                      <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white/90">
                        {s.words.slice(0, shown[i]).join(" ")}
                        {phase === "live" && shown[i] < s.words.length && (
                          <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#8B9BFF] animate-pulse" />
                        )}
                      </div>
                    </div>
                  ) : null,
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-white/45">
                  <Sparkles className="h-3 w-3 text-[#8B9BFF]" /> AI overview
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#D97757]/15 px-2 py-0.5 text-[#F0A285]">
                    <BrandIcon brand="claude" size={11} /> by Claude
                  </span>
                </div>
                {phase === "writing" ? (
                  <div className="space-y-2 pt-1">
                    {[92, 100, 76, 88, 54].map((w, i) => (
                      <div key={i} className="h-3 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.14] to-white/[0.08] bg-[length:200%_100%] animate-[shimmer_1.6s_linear_infinite]" style={{ width: `${w}%` }} />
                    ))}
                    <div className="pt-2 text-[11px] text-white/45">Writing notes with Claude…</div>
                  </div>
                ) : (
                  <>
                    <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5 animate-fade-in">
                      <AppLabel className="text-[#8B9BFF] mb-1.5">AI OVERVIEW</AppLabel>
                      <p className="text-[12px] leading-[1.6] text-white/85">{OVERVIEW}</p>
                    </div>
                    {notesReveal >= 2 && (
                      <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5 animate-fade-in">
                        <AppLabel className="text-emerald-400 mb-2 flex items-center gap-1.5"><Flag className="h-3 w-3" /> DECISIONS</AppLabel>
                        {DECISIONS.map((d) => (
                          <div key={d.text} className="flex justify-between gap-3 text-[12px] text-white/85 py-0.5">
                            <span>{d.text}</span><span className="text-white/30 tabular-nums text-[10.5px]">{d.t}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {notesReveal >= 3 && (
                      <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5 animate-fade-in">
                        <AppLabel className="text-sky-400 mb-2 flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3" /> ACTION ITEMS</AppLabel>
                        {ACTION_ITEMS.map((a) => (
                          <div key={a.text} className="flex items-center gap-2 text-[12px] text-white/85 py-[3px]">
                            <Avatar id={a.owner} size={18} />
                            <span className="flex-1 truncate">{a.text}</span>
                            <span className="text-[10.5px] text-white/35">{a.due}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {notesReveal >= 4 && (
                      <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5 animate-fade-in">
                        <AppLabel className="text-amber-400 mb-1.5 flex items-center gap-1.5"><CircleHelp className="h-3 w-3" /> OPEN QUESTIONS</AppLabel>
                        <div className="text-[12px] text-white/85">{OPEN_QUESTION}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0C0C1A] to-transparent" />
          </div>
        </div>

        {/* Right panel */}
        <div className="hidden md:flex w-[236px] shrink-0 flex-col border-l border-white/[0.05]">
          <div className="m-3 rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3">
            <div className="flex items-center justify-between">
              <AppLabel>{phase === "live" ? "RECORDING" : "AUDIO RECORDING"}</AppLabel>
              {phase === "live" && <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />}
            </div>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span className="h-8 w-8 rounded-full bg-[#5B6CF7] flex items-center justify-center shrink-0">
                <Play className="h-3.5 w-3.5 text-white fill-white translate-x-px" />
              </span>
              <Waveform live={phase === "live"} />
            </div>
          </div>
          <div className="flex gap-3 px-4 text-[11.5px] border-b border-white/[0.05] pb-2">
            <span className={cn(phase === "live" ? "text-white/40" : "text-[#8B9BFF] font-semibold")}><Sparkles className="mr-1 inline h-3 w-3" />Ask AI</span>
            <span className="text-white/40">Live Notes</span>
            <span className={cn(phase === "live" ? "text-white font-semibold" : "text-white/40")}>Speakers</span>
          </div>
          <div className="flex-1 min-h-0 px-3 py-3 overflow-hidden">
            {phase === "live" ? (
              <div className="space-y-1.5">
                {(["me", "maya", "dan", "priya"] as const).map((id) => (
                  <div key={id} className="flex items-center gap-2 rounded-[9px] bg-white/[0.03] px-2 py-1.5">
                    <Avatar id={id} size={20} />
                    <span className="text-[11.5px] text-white/85 flex-1">{SPEAKERS[id].name}</span>
                    {id !== "me" && <CalendarDays className="h-3 w-3 text-white/30" aria-label="Name from the calendar invite" />}
                  </div>
                ))}
                <div className="pt-2 text-[10.5px] leading-snug text-white/35">Names from the calendar invite</div>
              </div>
            ) : (
              <div className="space-y-2.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#D97757]/15 px-2 py-0.5 text-[10.5px] text-[#F0A285]">
                  <BrandIcon brand="claude" size={10} /> Answers by Claude
                </span>
                {qShown > 0 && (
                  <div className="ml-4 rounded-[12px] bg-[#25255A] px-3 py-2 text-[11.5px] text-white">
                    {tl.qWords.slice(0, qShown).join(" ")}
                  </div>
                )}
                {aShown > 0 && (
                  <div className="text-[11.5px] leading-[1.55] text-white/85">
                    <Sparkles className="mr-1 inline h-3 w-3 -translate-y-px text-[#8B9BFF]" />
                    {tl.aWords.slice(0, aShown).join(" ")}
                    {aShown === tl.aWords.length && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[10.5px] text-[#9BA6FF]">
                        <Paperclip className="h-3 w-3" /> 2 sources · {ASK.sources.join(", ")}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="m-3 flex items-center justify-between rounded-[10px] bg-white/[0.04] px-3 py-2 text-[11px] text-white/35">
            Ask Claude about this meeting…
            <ArrowUp className="h-3.5 w-3.5" />
          </div>
        </div>
      </AppWindow>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}
