// Still recreations of the dictation side of the app: History, Dictionary, File Transcription,
// the engine picker and Fast Polish. Copy matches the real app's labels.
import {
  Search, Play, Pin, Check, FileAudio, Globe, Cpu, Zap, BookOpen, Wand2,
} from "lucide-react";
import { AppWindow, AppLabel, StatusPill } from "@/components/product/primitives";
import { WorkspaceSidebar } from "@/components/product/MeetingStudio";
import { cn } from "@/lib/utils";

const HISTORY = [
  { app: "Slack", time: "10:42", lang: "EN", text: "Quick update: the build is green and I'm sending it to beta testers this afternoon.", pinned: true },
  { app: "Mail", time: "10:31", lang: "EN", text: "Hi Priya, thanks for the notes. I moved the launch review to Tuesday at ten so Dan can join." },
  { app: "Notion", time: "09:58", lang: "ES", text: "Perfecto, mañana reviso los comentarios y te escribo antes de la reunión." },
  { app: "Messages", time: "09:12", lang: "DE", text: "Ich schicke dir die Zusammenfassung heute Abend, bevor wir morgen starten." },
];

export function HistoryMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Whisperer" className={className} bodyClassName="flex h-[440px]">
      <WorkspaceSidebar active="Transcriptions" className="hidden sm:block" />
      <div className="flex-1 min-w-0 p-5">
        <div className="flex items-center gap-2 rounded-[10px] bg-white/[0.05] ring-1 ring-white/[0.07] px-3 py-2 text-[12.5px] text-white/70">
          <Search className="h-3.5 w-3.5 text-white/40" /> launch
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[["Words today", "1,284"], ["Avg WPM", "142"], ["Time saved", "38 min"]].map(([k, v]) => (
            <div key={k} className="rounded-[10px] bg-white/[0.03] px-3 py-2">
              <div className="text-[10.5px] text-white/40">{k}</div>
              <div className="text-[15px] font-semibold tabular-nums text-white">{v}</div>
            </div>
          ))}
        </div>
        <AppLabel className="mt-5 mb-2">TODAY</AppLabel>
        <div className="space-y-2">
          {HISTORY.map((h) => (
            <div key={h.time} className="rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.05] px-3.5 py-2.5">
              <div className="flex items-center gap-2 text-[11px] text-white/45">
                <span className="font-medium text-white/70">{h.app}</span>
                <span>{h.time}</span>
                <span className="rounded bg-white/[0.06] px-1 text-[10px]">{h.lang}</span>
                {h.pinned && <Pin className="h-3 w-3 text-amber-400" />}
                <Play className="ml-auto h-3.5 w-3.5 text-white/40" />
              </div>
              <div className="mt-1 truncate text-[12.5px] text-white/80">{h.text}</div>
            </div>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}

const ENTRIES = [
  { word: "Glean", heard: "glean, clean", learned: true },
  { word: "Priya Shah", heard: "Pria Shaw" },
  { word: "Kubernetes", heard: "cooper netties" },
  { word: "Northwind", heard: "north wind" },
  { word: "TestFlight", heard: "test flight" },
];

export function DictionaryMock({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <AppWindow title="Whisperer" bodyClassName="flex h-[420px]">
        <WorkspaceSidebar active="Dictionary" className="hidden sm:block" />
        <div className="flex-1 min-w-0 p-5">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-semibold text-white">Dictionary</div>
            <StatusPill tone="green">Learn from my corrections</StatusPill>
          </div>
          <AppLabel className="mt-5 mb-2">YOUR WORDS</AppLabel>
          <div className="divide-y divide-white/[0.05] rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.05]">
            {ENTRIES.map((e) => (
              <div key={e.word} className="flex items-center gap-3 px-3.5 py-2.5 text-[12.5px]">
                <BookOpen className="h-3.5 w-3.5 shrink-0 text-red-400" />
                <span className="font-medium text-white">{e.word}</span>
                <span className="truncate text-white/40">heard as “{e.heard}”</span>
                {e.learned && <span className="ml-auto rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10.5px] text-emerald-300">Learned</span>}
              </div>
            ))}
          </div>
        </div>
      </AppWindow>
      <div className="absolute -bottom-4 right-6 inline-flex items-center gap-2.5 rounded-full bg-[#14142B] ring-1 ring-white/10 py-2 pl-2 pr-4 shadow-xl">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
        <span className="text-[12.5px] text-white">Learned: Glean</span>
        <span className="text-[12px] text-white/40">Undo</span>
      </div>
    </div>
  );
}

export function FileMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Whisperer" className={className} bodyClassName="flex h-[420px]">
      <WorkspaceSidebar active="File Transcription" className="hidden sm:block" />
      <div className="flex-1 min-w-0 p-5">
        <div className="text-[15px] font-semibold text-white">File Transcription</div>
        <div className="mt-4 flex items-center gap-3 rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.06] px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-fuchsia-500/15"><FileAudio className="h-4 w-4 text-fuchsia-400" /></span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-medium text-white">Customer interview, Oct 14.m4a</div>
            <div className="text-[11px] text-white/45">42:10 · English · Whisperer V3</div>
            <div className="mt-2 h-1.5 rounded-full bg-white/[0.06]"><div className="h-1.5 w-[64%] rounded-full bg-gradient-to-r from-[#6B7BFF] to-[#8B5CF6]" /></div>
          </div>
          <span className="text-[12px] tabular-nums text-white/60">64%</span>
        </div>
        <AppLabel className="mt-5 mb-2">TRANSCRIPT</AppLabel>
        <div className="space-y-2.5 text-[12.5px] leading-relaxed text-white/75">
          <p>Thanks for making time. I want to start with how your team handles notes today.</p>
          <p>Mostly one person types while everyone talks, and it falls apart when they have to speak.</p>
          <p>So the notes are good when nobody needs them and thin when everyone does.</p>
          <p className="text-white/35">Transcribing…</p>
        </div>
      </div>
    </AppWindow>
  );
}

export const ENGINES = [
  { name: "Whisper", model: "Whisperer V3 (Large V3 Turbo)", langs: "97 languages", hw: "Metal GPU", note: "Default. About 547 MB.", icon: Cpu, active: true },
  { name: "Parakeet", model: "NVIDIA Parakeet", langs: "25 languages", hw: "Neural Engine", note: "Runs on the Neural Engine, leaving the GPU free.", icon: Zap },
  { name: "Qwen3 ASR", model: "Qwen3 ASR", langs: "31 languages", hw: "On device", note: "A second open model to try when Whisper stumbles.", icon: Globe },
  { name: "WhisperKit", model: "Whisper on Core ML", langs: "Whisper languages", hw: "Neural Engine", note: "Whisper models through Core ML.", icon: Cpu },
  ];

export function EnginesMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Whisperer · Settings" className={className} bodyClassName="p-5">
      <AppLabel className="mb-3">SPEECH ENGINE</AppLabel>
      <div className="space-y-2">
        {ENGINES.map((e) => (
          <div
            key={e.name}
            className={cn(
              "flex items-center gap-3 rounded-[12px] px-3.5 py-3 ring-1",
              e.active ? "bg-[#5B6CF7]/[0.12] ring-[#5B6CF7]/40" : "bg-white/[0.03] ring-white/[0.05]",
            )}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-white/[0.06]"><e.icon className="h-4 w-4 text-[#9BA6FF]" /></span>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold text-white">{e.name}</div>
              <div className="truncate text-[11.5px] text-white/45">{e.model} · {e.langs}</div>
            </div>
            <span className="hidden sm:inline text-[11px] text-white/45">{e.hw}</span>
            {e.active && <Check className="h-4 w-4 text-[#9BA6FF]" />}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11.5px] text-white/40">All engines run on this Mac. Nothing is sent to a server.</p>
    </AppWindow>
  );
}

export function PolishMock({ className }: { className?: string }) {
  return (
    <AppWindow title="Fast Polish" className={className} bodyClassName="p-5 space-y-4">
      <div>
        <AppLabel className="mb-2">WHAT YOU SAID</AppLabel>
        <p className="rounded-[12px] bg-white/[0.03] px-4 py-3 text-[13px] leading-relaxed text-white/55">
          um so the the build is green and uh i&apos;m sending it to beta testers this afternoon new paragraph can you check the release notes before four
        </p>
      </div>
      <div>
        <AppLabel className="mb-2 flex items-center gap-1.5"><Wand2 className="h-3 w-3 text-[#9BA6FF]" /> WHAT YOU PASTE</AppLabel>
        <div className="space-y-2 rounded-[12px] bg-[#5B6CF7]/[0.08] ring-1 ring-[#5B6CF7]/30 px-4 py-3 text-[13px] leading-relaxed text-white/90">
          <p>The build is green and I&apos;m sending it to beta testers this afternoon.</p>
          <p>Can you check the release notes before four?</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-[11px] text-white/50">
        {["Fillers removed", "Repeated word fixed", "Punctuation", "Paragraph break"].map((t) => (
          <span key={t} className="rounded-full bg-white/[0.05] px-2.5 py-1">{t}</span>
        ))}
      </div>
    </AppWindow>
  );
}

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

export function LanguagesMock({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-2.5 sm:grid-cols-2", className)}>
      {LANGS.map(([lang, text]) => (
        <div key={lang} className="rounded-[14px] bg-[#101024] ring-1 ring-white/[0.07] px-4 py-3">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/50"><Globe className="h-3 w-3" /> {lang}</div>
          <div className="mt-1 text-[14px] text-white/85" dir="auto">{text}</div>
        </div>
      ))}
    </div>
  );
}
