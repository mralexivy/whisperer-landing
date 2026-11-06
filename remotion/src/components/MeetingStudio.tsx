import React from "react";
import { interpolate } from "remotion";
import {
  AudioLines, BookOpen, CalendarDays, ChartLine, FileAudio, NotebookPen, Settings, Sparkles, Workflow,
  Search, Play, CheckCircle2, CircleHelp, Flag, ArrowUp, Paperclip, Square,
} from "lucide-react";
import { AppWindow, AppLabel, Avatar, BrandIcon, Caret, Reveal, pulse } from "./primitives";
import { CLAMP, cn, wordCount } from "../lib/anim";
import { SPEAKERS, MEETING, SEGMENTS, OVERVIEW, DECISIONS, ACTION_ITEMS, OPEN_QUESTION, ASK } from "../lib/demo-data";

const SIDEBAR = [
  { icon: AudioLines, label: "Transcriptions", color: "text-sky-400" },
  { icon: NotebookPen, label: "Meeting Notes", color: "text-cyan-400" },
  { icon: CalendarDays, label: "Calendar", color: "text-rose-400" },
  { icon: FileAudio, label: "File Transcription", color: "text-fuchsia-400" },
  { icon: BookOpen, label: "Dictionary", color: "text-red-400" },
  { icon: Sparkles, label: "LLM", color: "text-pink-400" },
  { icon: ChartLine, label: "Statistics", color: "text-sky-400" },
  { icon: Workflow, label: "MCP", color: "text-teal-300" },
  { icon: Settings, label: "Settings", color: "text-amber-400" },
];

export function WorkspaceSidebar({ active = "Meeting Notes" }: { active?: string }) {
  return (
    <aside className="w-[184px] shrink-0 bg-[#0A0A18] border-r border-white/[0.05] px-3 py-4">
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

function Waveform({ f, live }: { f: number; live: boolean }) {
  const bars = [6, 10, 14, 9, 18, 12, 7, 16, 20, 11, 8, 15, 19, 10, 6, 13, 17, 9, 12, 18, 7, 14, 10, 16];
  return (
    <div className="flex items-center gap-[2px] h-6">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[2px] rounded-full bg-white/40"
          style={{ height: live ? Math.max(3, h * (0.45 + 0.55 * Math.abs(Math.sin(f * 0.21 + i * 0.9)))) : h }}
        />
      ))}
    </div>
  );
}

export type StudioTiming = {
  /** frames per streamed word */
  every: number;
  /** first word */
  start: number;
  /** "Name from invite" click; omit to show names from the start */
  nameAt?: number;
  stopAt: number;
  writing: number;
  noteGap: number;
  askAt?: number;
  askEvery?: number;
};

export const SEGS = SEGMENTS.slice(0, 4);
const SPEAKER_NO: Record<string, number> = { maya: 1, dan: 2, priya: 3 };

export function studioTimeline(t: StudioTiming) {
  const starts: number[] = [];
  let x = t.start;
  for (const s of SEGS) {
    starts.push(x);
    x += wordCount(s.text) * t.every + 8;
  }
  const notesAt = t.stopAt + t.writing;
  const qEvery = t.askEvery ?? 3;
  const answerAt = t.askAt !== undefined ? t.askAt + wordCount(ASK.question) * qEvery + 14 : 99999;
  return { starts, liveEnd: x, notesAt, answerAt, qEvery };
}

/** Meeting Studio, frame-driven: live transcript → writing → notes → Ask AI. Fixed 1180 × 640 body. */
export function MeetingStudio({ f, t }: { f: number; t: StudioTiming }) {
  const tl = studioTimeline(t);
  const phase = f < t.stopAt ? "live" : f < tl.notesAt ? "writing" : "notes";
  const named = t.nameAt === undefined || f >= t.nameAt;
  const nameFlash = t.nameAt !== undefined ? interpolate(f, [t.nameAt, t.nameAt + 4, t.nameAt + 30], [0, 1, 0], CLAMP) : 0;
  const label = (id: keyof typeof SPEAKERS) => (id === "me" || named ? SPEAKERS[id].name : `Speaker ${SPEAKER_NO[id]}`);
  const tab = phase === "live" ? "Transcript" : "Overview";
  const askOn = t.askAt !== undefined && f >= t.askAt - 20;

  const secs = 3 * 60 + 2 + Math.floor(Math.min(f, t.stopAt) / 30);
  const elapsed = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;

  const qWords = ASK.question.split(" ");
  const aWords = ASK.answer.split(" ");
  const qShown = t.askAt !== undefined ? Math.max(0, Math.min(qWords.length, Math.floor((f - t.askAt) / tl.qEvery) + 1)) : 0;
  const aShown = Math.max(0, Math.min(aWords.length, Math.floor((f - tl.answerAt) / 2) + 1));
  const shimmerX = ((f * 3) % 200) - 100;

  return (
    <AppWindow width={1180} bodyHeight={640} bodyClassName="flex">
      <WorkspaceSidebar />

      {/* Notes list */}
      <div className="flex w-[200px] shrink-0 flex-col border-r border-white/[0.05] px-3 py-4">
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
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" style={{ opacity: pulse(f) }} /> Recording
              </span>
            ) : (
              <span className="rounded-full bg-[#5B6CF7]/15 px-1.5 py-0.5 text-[#9BA6FF]">{MEETING.duration}</span>
            )}
            <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90">3 speakers</span>
          </div>
        </div>
        {[
          ["google-meet", "Design crit: onboarding v2", "Yesterday"],
          ["teams", "Weekly sync with Northwind", "Mon"],
          ["slack", "Pricing huddle", "Fri"],
        ].map(([b, title, d]) => (
          <div key={title} className="px-2.5 py-2 rounded-[10px]">
            <div className="flex items-center gap-1.5">
              <BrandIcon brand={b as "zoom"} size={12} />
              <span className="text-[11.5px] text-white/80 truncate">{title}</span>
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
              <div className="text-[11px] text-white/40 mt-0.5 tabular-nums">
                {MEETING.date} · {phase === "live" ? elapsed : MEETING.duration}
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {phase === "live" && (
                <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-red-500/90 px-2.5 py-1.5 text-[11px] font-semibold text-white"
                  style={{ scale: String(interpolate(f, [t.stopAt - 4, t.stopAt - 1, t.stopAt + 2], [1, 0.9, 1], CLAMP)) }}>
                  <Square className="h-2.5 w-2.5 fill-white" /> Stop
                </span>
              )}
              <div className="flex -space-x-1">
                {(["me", "maya", "dan", "priya"] as const).map((id) => <Avatar key={id} id={id} size={26} label={id === "me" || named ? undefined : String(SPEAKER_NO[id])} />)}
              </div>
            </div>
          </div>
          <div className="mt-3 flex border-b border-white/[0.06] text-[12.5px]">
            {(["Transcript", "Overview"] as const).map((x) => (
              <div key={x} className={cn("flex-1 text-center pb-2 -mb-px", tab === x ? "text-white font-semibold border-b-2 border-[#5B6CF7]" : "text-white/40")}>
                {x}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 min-h-0 overflow-hidden px-5 py-4">
          {tab === "Transcript" ? (
            <div className="space-y-3">
              {SEGS.map((s, i) => {
                const words = s.text.split(" ");
                const n = Math.max(0, Math.min(words.length, Math.floor((f - tl.starts[i]) / t.every) + 1));
                if (f < tl.starts[i]) return null;
                return (
                  <Reveal key={i} f={f} at={tl.starts[i]}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11.5px] font-semibold rounded px-1 -mx-1"
                        style={{ color: SPEAKERS[s.speaker].color, background: s.speaker !== "me" ? `rgba(139,155,255,${nameFlash * 0.25})` : undefined }}>
                        {label(s.speaker)}
                      </span>
                      <span className="text-[10px] text-white/30 tabular-nums">{s.t}</span>
                    </div>
                    <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white/90">
                      {words.slice(0, n).join(" ")}
                      {n < words.length && <Caret f={f} />}
                    </div>
                  </Reveal>
                );
              })}
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
                <div className="space-y-2.5 pt-1">
                  {[92, 100, 76, 88, 54, 82, 64].map((w, i) => (
                    <div
                      key={i}
                      className="h-3 rounded-full"
                      style={{
                        width: `${w}%`,
                        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(139,155,255,0.28) 50%, rgba(255,255,255,0.06) 100%)",
                        backgroundSize: "200% 100%",
                        backgroundPosition: `${shimmerX - i * 12}% 0`,
                      }}
                    />
                  ))}
                  <div className="pt-3 flex items-center gap-2 text-[12px] text-white/60">
                    <BrandIcon brand="claude" size={13} /> Writing notes with Claude…
                  </div>
                </div>
              ) : (
                <>
                  <Reveal f={f} at={tl.notesAt}>
                    <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5">
                      <AppLabel className="text-[#8B9BFF] mb-1.5 flex items-center gap-1.5"><Sparkles className="h-3 w-3" /> AI OVERVIEW</AppLabel>
                      <p className="text-[12px] leading-[1.6] text-white/85">{OVERVIEW}</p>
                    </div>
                  </Reveal>
                  <Reveal f={f} at={tl.notesAt + t.noteGap}>
                    <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5">
                      <AppLabel className="text-emerald-400 mb-2 flex items-center gap-1.5"><Flag className="h-3 w-3" /> DECISIONS</AppLabel>
                      {DECISIONS.map((d) => (
                        <div key={d.text} className="flex justify-between gap-3 text-[12px] text-white/85 py-0.5">
                          <span>{d.text}</span><span className="text-white/30 tabular-nums text-[10.5px]">{d.t}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal f={f} at={tl.notesAt + t.noteGap * 2}>
                    <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5">
                      <AppLabel className="text-sky-400 mb-2 flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3" /> ACTION ITEMS</AppLabel>
                      {ACTION_ITEMS.map((a) => (
                        <div key={a.text} className="flex items-center gap-2 text-[12px] text-white/85 py-[3px]">
                          <Avatar id={a.owner} size={18} />
                          <span className="flex-1 truncate">{a.text}</span>
                          <span className="text-[10.5px] text-white/35">{a.due}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal f={f} at={tl.notesAt + t.noteGap * 3}>
                    <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3.5">
                      <AppLabel className="text-amber-400 mb-1.5 flex items-center gap-1.5"><CircleHelp className="h-3 w-3" /> OPEN QUESTIONS</AppLabel>
                      <div className="text-[12px] text-white/85">{OPEN_QUESTION}</div>
                    </div>
                  </Reveal>
                </>
              )}
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0C0C1A] to-transparent" />
        </div>
      </div>

      {/* Right panel */}
      <div className="flex w-[236px] shrink-0 flex-col border-l border-white/[0.05]">
        <div className="m-3 rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] p-3">
          <div className="flex items-center justify-between">
            <AppLabel>{phase === "live" ? "RECORDING" : "AUDIO RECORDING"}</AppLabel>
            {phase === "live" && <span className="h-2 w-2 rounded-full bg-red-500" style={{ opacity: pulse(f) }} />}
          </div>
          <div className="mt-2.5 flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-full bg-[#5B6CF7] flex items-center justify-center shrink-0">
              <Play className="h-3.5 w-3.5 text-white fill-white translate-x-px" />
            </span>
            <Waveform f={f} live={phase === "live"} />
          </div>
        </div>
        <div className="flex gap-3 px-4 text-[11.5px] border-b border-white/[0.05] pb-2">
          <span className={cn("inline-flex items-center gap-1", askOn ? "text-[#8B9BFF] font-semibold" : "text-white/40")}><Sparkles className="h-3 w-3" /> Ask AI</span>
          <span className="text-white/40">Live Notes</span>
          <span className={cn(!askOn ? "text-white font-semibold" : "text-white/40")}>Speakers</span>
        </div>
        <div className="flex-1 min-h-0 px-3 py-3 overflow-hidden">
          {!askOn ? (
            <div className="space-y-1.5">
              {(["me", "maya", "dan", "priya"] as const).map((id) => (
                <div key={id} className="flex items-center gap-2 rounded-[9px] px-2 py-1.5"
                  style={{ background: id !== "me" ? `rgba(91,108,247,${0.03 + nameFlash * 0.18})` : "rgba(255,255,255,0.03)" }}>
                  <Avatar id={id} size={20} label={id === "me" || named ? undefined : String(SPEAKER_NO[id])} />
                  <span className="text-[11.5px] text-white/85 flex-1">{label(id)}</span>
                  {id !== "me" && named && <CalendarDays className="h-3 w-3 text-white/40" />}
                </div>
              ))}
              {!named ? (
                <div className="pt-2">
                  <span className="flex items-center justify-center gap-1.5 rounded-[9px] bg-[#5B6CF7] py-2 text-[11.5px] font-semibold text-white"
                    style={{ scale: String(t.nameAt !== undefined ? interpolate(f, [t.nameAt - 4, t.nameAt - 1, t.nameAt + 2], [1, 0.92, 1], CLAMP) : 1) }}>
                    <CalendarDays className="h-3.5 w-3.5" /> Name from invite
                  </span>
                </div>
              ) : (
                <div className="pt-2 text-[10.5px] leading-snug text-white/40">Names from the calendar invite</div>
              )}
            </div>
          ) : (
            <div className="space-y-2.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#D97757]/15 px-2 py-0.5 text-[10.5px] text-[#F0A285]">
                <BrandIcon brand="claude" size={10} /> Answers by Claude
              </span>
              {qShown > 0 && (
                <div className="ml-4 rounded-[12px] bg-[#25255A] px-3 py-2 text-[11.5px] text-white">{qWords.slice(0, qShown).join(" ")}</div>
              )}
              {f >= tl.answerAt - 12 && f < tl.answerAt && (
                <div className="flex gap-1 pl-1 pt-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#8B9BFF]" style={{ opacity: 0.3 + 0.7 * Math.abs(Math.sin(f * 0.25 - i * 0.7)) }} />
                  ))}
                </div>
              )}
              {aShown > 0 && (
                <div className="text-[11.5px] leading-[1.55] text-white/85">
                  <Sparkles className="inline h-3 w-3 mr-1 -translate-y-px text-[#8B9BFF]" />
                  {aWords.slice(0, aShown).join(" ")}
                  {aShown === aWords.length && (
                    <Reveal f={f} at={tl.answerAt + aWords.length * 2 + 4}>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10.5px] text-[#9BA6FF]">
                        <Paperclip className="h-3 w-3" /> 2 sources
                        {ASK.sources.map((s) => (
                          <span key={s} className="rounded-full bg-[#5B6CF7]/15 px-1.5 py-0.5 tabular-nums">{s}</span>
                        ))}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-white/40">
                        <BrandIcon brand="claude" size={10} /> via Claude
                      </div>
                    </Reveal>
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
  );
}

