"use client";

// Live recreations of the dictation side of the app: History, Dictionary, File Transcription,
// the engine picker, Fast Polish and language detection. Copy matches the real app's labels.
// Each one is a short loop driven by useLoop: it plays only on screen, can be paused, and rests on a
// complete frame (also the server render) under reduced motion.
import { AnimatePresence, motion } from "motion/react";
import {
  Search, Play, Pin, Check, FileAudio, Globe, Cpu, Zap, BookOpen, Wand2, WifiOff, Copy,
} from "lucide-react";
import { AppWindow, AppLabel, StatusPill, PauseButton, useLoop } from "@/components/product/primitives";
import { WorkspaceSidebar } from "@/components/product/MeetingStudio";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const ARRIVE = { initial: { opacity: 0, y: -10, filter: "blur(6px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: { duration: 0.5, ease: EASE } };

/* ---------- History: new dictations land at the top, today's counters move with them ---------- */

const HISTORY = [
  { app: "Slack", lang: "EN", text: "Quick update: the build is green and I'm sending it to beta testers this afternoon.", pinned: true },
  { app: "Mail", lang: "EN", text: "Hi Priya, thanks for the notes. I moved the launch review to Tuesday at ten so Dan can join." },
  { app: "Notion", lang: "ES", text: "Perfecto, mañana reviso los comentarios y te escribo antes de la reunión." },
  { app: "Messages", lang: "DE", text: "Ich schicke dir die Zusammenfassung heute Abend, bevor wir morgen starten." },
  { app: "Linear", lang: "EN", text: "Onboarding step three drops the account form, see the launch review notes." },
  { app: "Cursor", lang: "EN", text: "Refactor the upload handler so retries back off and the progress bar never jumps." },
];
const H_EVERY = 6;

export function HistoryMock({ className }: { className?: string }) {
  const steps = HISTORY.length * H_EVERY;
  const { ref, tick, paused, setPaused } = useLoop(steps, 420, { restFrame: 0 });
  const arrived = Math.floor(tick / H_EVERY); // how many new dictations have landed this loop
  // Newest first: the list is a window onto the history, rotating as new ones arrive.
  const order = Array.from({ length: 4 }, (_, i) => (arrived - i + HISTORY.length * 2) % HISTORY.length);
  const TIMES = ["Just now", "10:42", "10:31", "09:58"];
  const words = 1284 + arrived * 23 + (tick % H_EVERY) * 2;
  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Whisperer" bodyClassName="flex h-[440px]">
        <WorkspaceSidebar active="Transcriptions" className="hidden sm:block" />
        <div className="flex-1 min-w-0 p-5">
          <div className="flex items-center gap-2 rounded-[10px] bg-white/[0.05] ring-1 ring-white/[0.07] px-3 py-2 text-[12.5px] text-white/45">
            <Search className="h-3.5 w-3.5 text-white/40" /> Search transcriptions
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {([["Words today", words.toLocaleString("en-US")], ["Avg WPM", "142"], ["Time saved", `${38 + arrived} min`]] as const).map(([k, v]) => (
              <div key={k} className="rounded-[10px] bg-white/[0.03] px-3 py-2">
                <div className="text-[10.5px] text-white/40">{k}</div>
                <div className="text-[15px] font-semibold tabular-nums text-white">{v}</div>
              </div>
            ))}
          </div>
          <AppLabel className="mt-5 mb-2">TODAY</AppLabel>
          <div className="relative space-y-2 overflow-hidden">
            <AnimatePresence initial={false} mode="popLayout">
              {order.map((h, i) => {
                const e = HISTORY[h];
                return (
                  <motion.div
                    key={`${h}-${Math.floor((arrived - i) / HISTORY.length)}`}
                    layout
                    {...ARRIVE}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className={cn("rounded-[12px] ring-1 px-3.5 py-2.5", i === 0 ? "bg-[#5B6CF7]/[0.09] ring-[#5B6CF7]/25" : "bg-white/[0.03] ring-white/[0.05]")}
                  >
                    <div className="flex items-center gap-2 text-[11px] text-white/45">
                      <span className="font-medium text-white/70">{e.app}</span>
                      <span className="tabular-nums">{TIMES[i]}</span>
                      <span className="rounded bg-white/[0.06] px-1 text-[10px]">{e.lang}</span>
                      {e.pinned && <Pin className="h-3 w-3 text-amber-400" />}
                      <Play className="ml-auto h-3.5 w-3.5 text-white/40" />
                    </div>
                    <div className="mt-1 truncate text-[12.5px] text-white/80">{e.text}</div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </AppWindow>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}

/* ---------- Dictionary: a misheard word is fixed once, learned, and spelled right next time ---------- */

const ENTRIES = [
  { word: "Glean", heard: "glean, clean" },
  { word: "Priya Shah", heard: "Pria Shaw" },
  { word: "Northwind", heard: "north wind" },
  { word: "TestFlight", heard: "test flight" },
];
const D_STEPS = 30;

export function DictionaryMock({ className }: { className?: string }) {
  const { ref, tick, paused, setPaused } = useLoop(D_STEPS, 380, { restFrame: D_STEPS - 1 });
  const fixing = tick >= 7;   // the misheard word is corrected
  const learned = tick >= 11; // and added to the dictionary
  const second = tick >= 17;  // the next dictation spells it right
  const toast = learned && tick < 17;
  const first = "Can we roll the new cooper netties cluster out on Monday?";
  const next = "Scale the Kubernetes nodes before the launch review.";
  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Whisperer" bodyClassName="flex h-[420px]">
        <WorkspaceSidebar active="Dictionary" className="hidden sm:block" />
        <div className="flex-1 min-w-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="text-[15px] font-semibold text-white">Dictionary</div>
            <StatusPill tone="green">Learn from my corrections</StatusPill>
          </div>

          <div className="mt-4 rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.06] px-3.5 py-3">
            <div className="text-[10.5px] font-medium text-white/40">{second ? "Next dictation" : "Last dictation"}</div>
            <AnimatePresence mode="wait" initial={false}>
              {!second ? (
                <motion.p key="first" {...ARRIVE} exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }} className="mt-1 text-[13px] leading-snug text-white/80">
                  Can we roll the new{" "}
                  <span className="relative inline-block">
                    <span className={cn("transition-all duration-300", fixing ? "text-white/30 line-through" : "text-amber-300 underline decoration-amber-300/60 decoration-wavy underline-offset-4")}>cooper netties</span>
                    {fixing && (
                      <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }} className="ml-1.5 rounded-[5px] bg-[#5B6CF7]/25 px-1 text-white">Kubernetes</motion.span>
                    )}
                  </span>{" "}
                  cluster out on Monday?
                </motion.p>
              ) : (
                <motion.p key="next" {...ARRIVE} className="mt-1 text-[13px] leading-snug text-white/80">
                  Scale the <span className="rounded-[5px] bg-emerald-500/15 px-1 text-emerald-300">Kubernetes</span> nodes before the launch review.
                </motion.p>
              )}
            </AnimatePresence>
            <span className="sr-only">{second ? next : first}</span>
          </div>

          <AppLabel className="mt-5 mb-2">YOUR WORDS</AppLabel>
          <div className="divide-y divide-white/[0.05] overflow-hidden rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.05]">
            <AnimatePresence initial={false}>
              {learned && (
                <motion.div key="k8s" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.45, ease: EASE }}>
                  <div className="flex items-center gap-3 bg-emerald-500/[0.06] px-3.5 py-2.5 text-[12.5px]">
                    <BookOpen className="h-3.5 w-3.5 shrink-0 text-red-400" />
                    <span className="font-medium text-white">Kubernetes</span>
                    <span className="truncate text-white/40">heard as “cooper netties”</span>
                    <span className="ml-auto rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10.5px] text-emerald-300">Learned</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {ENTRIES.slice(0, learned ? 3 : 4).map((e) => (
              <div key={e.word} className="flex items-center gap-3 px-3.5 py-2.5 text-[12.5px]">
                <BookOpen className="h-3.5 w-3.5 shrink-0 text-red-400" />
                <span className="font-medium text-white">{e.word}</span>
                <span className="truncate text-white/40">heard as “{e.heard}”</span>
              </div>
            ))}
          </div>
        </div>
      </AppWindow>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute -bottom-4 right-6 inline-flex items-center gap-2.5 rounded-full bg-[#14142B] ring-1 ring-white/10 py-2 pl-2 pr-4 shadow-xl"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
            <span className="text-[12.5px] text-white">Learned: Kubernetes</span>
            <span className="text-[12px] text-white/40">Undo</span>
          </motion.div>
        )}
      </AnimatePresence>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}

/* ---------- File transcription: drop a recording, watch the transcript fill in ---------- */

const FILE_LINES = [
  "Thanks for making time. I want to start with how your team handles notes today.",
  "Mostly one person types while everyone talks, and it falls apart when they have to speak.",
  "So the notes are good when nobody needs them and thin when everyone does.",
  "Right. And the recordings? We keep them, but nobody goes back and listens.",
];
const F_STEPS = 34;

export function FileMock({ className }: { className?: string }) {
  const { ref, tick, paused, setPaused } = useLoop(F_STEPS, 260, { restFrame: F_STEPS - 1 });
  const dropped = tick >= 2;
  const pct = Math.max(0, Math.min(100, Math.round(((tick - 3) / 24) * 100)));
  const done = pct >= 100;
  const lines = Math.min(FILE_LINES.length, Math.floor(pct / 24));
  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Whisperer" bodyClassName="flex h-[420px]">
        <WorkspaceSidebar active="File Transcription" className="hidden sm:block" />
        <div className="flex-1 min-w-0 p-5">
          <div className="text-[15px] font-semibold text-white">File Transcription</div>
          <div className={cn("mt-4 rounded-[12px] ring-1 px-4 py-3 transition-colors duration-500", dropped ? "bg-white/[0.03] ring-white/[0.06]" : "bg-[#5B6CF7]/[0.06] ring-[#5B6CF7]/40")}>
            {dropped ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: EASE }} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-fuchsia-500/15"><FileAudio className="h-4 w-4 text-fuchsia-400" /></span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-medium text-white">Customer interview, Oct 14.m4a</div>
                  <div className="text-[11px] text-white/45">42:10 · English · Whisperer V3</div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-[#6B7BFF] to-[#8B5CF6] transition-[width] duration-300 ease-out" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                {done ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-300"><Check className="h-3 w-3" /> Done</span>
                ) : (
                  <span className="w-9 text-right text-[12px] tabular-nums text-white/60">{pct}%</span>
                )}
              </motion.div>
            ) : (
              <div className="flex h-[46px] items-center justify-center gap-2 text-[12.5px] text-[#B9C1FF]"><FileAudio className="h-4 w-4" /> Drop an audio or video file</div>
            )}
          </div>
          <div className="mt-5 mb-2 flex items-center justify-between">
            <AppLabel>TRANSCRIPT</AppLabel>
            {done && <motion.span {...ARRIVE} className="inline-flex items-center gap-1 text-[11px] text-white/55"><Copy className="h-3 w-3" /> Copy · Export</motion.span>}
          </div>
          <div className="space-y-2.5 text-[12.5px] leading-relaxed text-white/75">
            {FILE_LINES.slice(0, lines).map((l) => (
              <motion.p key={l} {...ARRIVE}>{l}</motion.p>
            ))}
            {dropped && !done && <p className="text-white/35">Transcribing…</p>}
          </div>
        </div>
      </AppWindow>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}

/* ---------- Engines: every engine on the Mac, switched in a click, Wi-Fi off ---------- */

import { ENGINES } from "./engines";
export { ENGINES };
const E_EVERY = 8;

export function EnginesMock({ className }: { className?: string }) {
  const { ref, tick, paused, setPaused } = useLoop(ENGINES.length * E_EVERY, 400, { restFrame: 0 });
  const sel = Math.floor(tick / E_EVERY) % ENGINES.length;
  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Whisperer · Settings" bodyClassName="p-5">
        <div className="mb-3 flex items-center justify-between">
          <AppLabel>SPEECH ENGINE</AppLabel>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/70"><WifiOff className="h-3 w-3" /> Wi-Fi off</span>
        </div>
        <div className="space-y-2">
          {ENGINES.map((e, i) => {
            const on = i === sel;
            return (
              <div key={e.name} className="relative rounded-[12px] px-3.5 py-3">
                {on && <motion.span layoutId="engine-sel" transition={{ type: "spring", stiffness: 380, damping: 34 }} className="absolute inset-0 rounded-[12px] bg-[#5B6CF7]/[0.12] ring-1 ring-[#5B6CF7]/40" />}
                {!on && <span className="absolute inset-0 rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.05]" />}
                <div className="relative flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-white/[0.06]"><e.icon className="h-4 w-4 text-[#9BA6FF]" /></span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-semibold text-white">{e.name}</div>
                    <div className="truncate text-[11.5px] text-white/45">{e.model} · {e.langs}</div>
                  </div>
                  <span className="hidden sm:inline text-[11px] text-white/45">{e.hw}</span>
                  <span className={cn("flex h-4 w-4 items-center justify-center transition-opacity duration-300", on ? "opacity-100" : "opacity-0")}><Check className="h-4 w-4 text-[#9BA6FF]" /></span>
                </div>
              </div>
            );
          })}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p key={sel} {...ARRIVE} className="mt-4 text-[11.5px] text-white/50">
            {ENGINES[sel].note} All engines run on this Mac. Nothing is sent to a server.
          </motion.p>
        </AnimatePresence>
      </AppWindow>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}

/* ---------- Fast Polish: the fillers fall out, the punctuation goes in ---------- */

type Tok = { w: string; drop?: string; fix?: string };
const SAID: Tok[] = [
  { w: "um", drop: "Fillers removed" }, { w: "so", drop: "Fillers removed" }, { w: "the" }, { w: "the", drop: "Repeated word fixed" },
  { w: "build" }, { w: "is" }, { w: "green" }, { w: "and" }, { w: "uh", drop: "Fillers removed" }, { w: "i'm", fix: "I'm" },
  { w: "sending" }, { w: "it" }, { w: "to" }, { w: "beta" }, { w: "testers" }, { w: "this" }, { w: "afternoon", fix: "afternoon." },
  { w: "new paragraph", drop: "Paragraph break" }, { w: "can", fix: "Can" }, { w: "you" }, { w: "check" }, { w: "the" }, { w: "release" },
  { w: "notes" }, { w: "before" }, { w: "four", fix: "four?" },
];
const CHIPS = ["Fillers removed", "Repeated word fixed", "Punctuation", "Paragraph break"];
const P_STEPS = 32;

export function PolishMock({ className }: { className?: string }) {
  const { ref, tick, paused, setPaused } = useLoop(P_STEPS, 300, { restFrame: P_STEPS - 1 });
  const cleaning = tick >= 6;
  const out = tick >= 12;
  const lit = out ? Math.min(CHIPS.length, Math.floor((tick - 12) / 2) + 1) : 0;
  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title="Fast Polish" bodyClassName="p-5 space-y-4">
        <div>
          <AppLabel className="mb-2">WHAT YOU SAID</AppLabel>
          <p className="rounded-[12px] bg-white/[0.03] px-4 py-3 text-[13px] leading-relaxed text-white/55">
            {SAID.map((t, i) => (
              <span
                key={i}
                className={cn(
                  "transition-all duration-500",
                  t.drop && cleaning && "text-rose-300/70 line-through decoration-rose-300/60",
                )}
                style={{ transitionDelay: cleaning ? `${i * 18}ms` : "0ms" }}
              >
                {t.w}{i < SAID.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
        <div>
          <AppLabel className="mb-2 flex items-center gap-1.5"><Wand2 className="h-3 w-3 text-[#9BA6FF]" /> WHAT YOU PASTE</AppLabel>
          <div className={cn("min-h-[84px] space-y-2 rounded-[12px] ring-1 px-4 py-3 text-[13px] leading-relaxed text-white/90 transition-colors duration-500", out ? "bg-[#5B6CF7]/[0.08] ring-[#5B6CF7]/30" : "bg-white/[0.02] ring-white/[0.05]")}>
            {out ? (
              <>
                <motion.p {...ARRIVE}>The build is green and I&apos;m sending it to beta testers this afternoon.</motion.p>
                <motion.p {...ARRIVE} transition={{ ...ARRIVE.transition, delay: 0.25 }}>Can you check the release notes before four?</motion.p>
              </>
            ) : (
              <p className="text-white/30">{cleaning ? "Polishing…" : "Listening…"}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {CHIPS.map((t, i) => (
            <span key={t} className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors duration-300", i < lit ? "bg-[#5B6CF7]/20 text-[#C9D0FF]" : "bg-white/[0.05] text-white/40")}>
              {i < lit && <Check className="h-3 w-3" />}{t}
            </span>
          ))}
        </div>
      </AppWindow>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}

/* ---------- Languages: whichever language you speak, it is detected and written in that language ---------- */

const LANGS = [
  ["English", "Hello, the build is green."],
  ["Español", "Hola, la build está lista."],
  ["Deutsch", "Hallo, der Build ist fertig."],
  ["Français", "Bonjour, le build est prêt."],
  ["日本語", "ビルドは完了しました。"],
  ["עברית", "שלום, הבילד מוכן."],
  ["Português", "Olá, o build está pronto."],
  ["हिन्दी", "नमस्ते, बिल्ड तैयार है।"],
] as const;
const L_EVERY = 7;

export function LanguagesMock({ className }: { className?: string }) {
  const { ref, tick, paused, setPaused } = useLoop(LANGS.length * L_EVERY, 300, { restFrame: L_EVERY - 1 });
  const cur = Math.floor(tick / L_EVERY);
  const local = tick % L_EVERY;
  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {LANGS.map(([lang, text], i) => {
          const on = i === cur;
          const chars = Array.from(text);
          const shown = on ? chars.slice(0, Math.ceil((chars.length * Math.min(local + 1, 5)) / 5)).join("") : text;
          return (
            <div key={lang} className={cn("relative rounded-[14px] px-4 py-3 ring-1 transition-[background-color,box-shadow] duration-500", on ? "bg-[#17183A] ring-[#5B6CF7]/55 shadow-[0_18px_50px_-24px_rgba(91,108,247,0.9)]" : "bg-[#101024] ring-white/[0.07]")}>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/50">
                <Globe className="h-3 w-3" /> {lang}
                {on && <motion.span initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#5B6CF7]/25 px-2 py-0.5 text-[10px] text-[#C9D0FF]"><span className="h-1.5 w-1.5 rounded-full bg-[#8B9BFF] animate-pulse" /> Detected</motion.span>}
              </div>
              <div className={cn("mt-1 text-[14px] transition-colors duration-500", on ? "text-white" : "text-white/70")} dir="auto">
                {shown}
                {on && local < 5 && <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#8B9BFF] animate-pulse" />}
              </div>
            </div>
          );
        })}
      </div>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute -top-11 right-0 z-10 scale-90" />
    </div>
  );
}
