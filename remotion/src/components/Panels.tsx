import React from "react";
import { interpolate } from "remotion";
import { ArrowUp, Bell, CalendarDays, Check, ChevronRight, FileText, Globe, Hash, Monitor, Sparkles, Users, Video, Wrench } from "lucide-react";
import { AppWindow, AppLabel, BrandIcon, Caret, Reveal, StatusPill, type Brand } from "./primitives";
import { WorkspaceSidebar } from "./MeetingStudio";
import { CLAMP, cn, rise } from "../lib/anim";
import { MCP_CHAT, SPEAKERS, UPCOMING } from "../lib/demo-data";
import { spokenWords, voiceFrames, type VoiceId } from "../lib/voice";

/* ───────────────────────── LLM provider list ───────────────────────── */

type Row = { key: string; brand?: Brand; title: string; sub: string; status: string };
const ON_MAC: Row = { key: "mac", title: "On this Mac", sub: "Private and offline. Uses the built-in model.", status: "Ready" };
const PLANS: Row[] = [
  { key: "claude", brand: "claude", title: "Claude", sub: "Uses your Claude Pro or Max plan", status: "Ready · Claude plan" },
  { key: "chatgpt", brand: "openai", title: "ChatGPT", sub: "Uses your ChatGPT Plus or Pro plan", status: "Ready · ChatGPT plan" },
  { key: "codex", brand: "codex", title: "Codex", sub: "Uses your ChatGPT plan through Codex", status: "Ready · ChatGPT plan" },
  { key: "gemini", brand: "gemini", title: "Gemini", sub: "Uses your Google AI Pro or Ultra plan", status: "Ready · Google plan" },
];
const KEYS: Row[] = [
  { key: "openai-api", brand: "openai", title: "OpenAI API", sub: "Billed to your OpenAI API key", status: "Key in Keychain" },
  { key: "anthropic-api", brand: "anthropic", title: "Anthropic API", sub: "Billed to your Anthropic API key", status: "Key in Keychain" },
];
const WRITER: Record<string, string> = { mac: "this Mac", claude: "Claude", chatgpt: "ChatGPT", gemini: "Gemini" };

function ProviderRow({ row, sel }: { row: Row; sel: number }) {
  return (
    <div
      className="flex items-center gap-3 rounded-[12px] px-3.5 h-[58px]"
      style={{
        background: `color-mix(in srgb, #5B6CF7 ${sel * 8}%, #14142B)`,
        boxShadow: `inset 0 0 0 ${1 + sel * 0.5}px ${sel > 0.02 ? `rgba(91,108,247,${0.25 + sel * 0.75})` : "rgba(255,255,255,0.06)"}`,
      }}
    >
      <span className="h-9 w-9 rounded-[10px] bg-white/[0.06] flex items-center justify-center shrink-0">
        {row.brand ? <BrandIcon brand={row.brand} size={18} /> : <Monitor className="h-[18px] w-[18px] text-sky-400" />}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] font-semibold text-white">{row.title}</div>
        <div className="text-[11px] text-white/45 truncate">{row.sub}</div>
      </div>
      <StatusPill>{row.status}</StatusPill>
      <span className="relative h-5 w-5 rounded-full shrink-0" style={{ boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.25)" }}>
        <span className="absolute inset-0 rounded-full bg-[#5B6CF7] flex items-center justify-center" style={{ opacity: sel, scale: String(0.5 + sel * 0.5) }}>
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        </span>
      </span>
    </div>
  );
}

/** Workspace → LLM. `order` = [key, frame] selection changes. Window 940 × 600 body. */
export function ProviderList({ f, order }: { f: number; order: [string, number][] }) {
  let current = order[0][0];
  for (const [k, at] of order) if (f >= at) current = k;
  const selOf = (key: string) => {
    // spring in after its click, spring out when the next is chosen
    let v = 0;
    order.forEach(([k, at], i) => {
      if (k !== key) return;
      const next = order[i + 1]?.[1] ?? 1e9;
      const inn = i === 0 ? 1 : rise(f, at, 18, 14);
      const out = f >= next ? 1 - rise(f, next, 18, 14) : 1;
      if (f >= at || i === 0) v = Math.max(v, Math.min(inn, out));
    });
    return Math.max(0, Math.min(1, v));
  };
  const swap = rise(f, order.find(([k]) => k === current)![1], 200, 14);
  const curBrand = PLANS.find((p) => p.key === current)?.brand;

  return (
    <AppWindow width={940} bodyHeight={600} bodyClassName="flex">
      <WorkspaceSidebar active="LLM" />
      <div className="flex-1 min-w-0 px-6 py-5 overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-[12px] bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <div>
            <div className="text-[20px] font-light text-white">LLM</div>
            <div className="text-[11.5px] text-white/50">The AI that writes your meeting notes and answers your questions.</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-4 h-[54px]">
          <div className="flex items-center gap-2 text-[10.5px] text-white/60">
            <span className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center"><Users className="h-3.5 w-3.5 text-[#8B9BFF]" /></span>
            <span className="w-6 h-px bg-[#5B6CF7]/60" />
            <span className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center" style={{ scale: String(0.7 + 0.3 * swap) }}>
              {curBrand ? <BrandIcon brand={curBrand} size={14} /> : <Monitor className="h-3.5 w-3.5 text-sky-400" />}
            </span>
            <span className="w-6 h-px bg-[#5B6CF7]/60" />
            <span className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center"><FileText className="h-3.5 w-3.5 text-emerald-400" /></span>
          </div>
          <div className="text-right">
            <div className="text-[12.5px] font-semibold text-white" style={{ opacity: 0.4 + 0.6 * swap }}>Written by {WRITER[current]}</div>
            <div className="text-[10.5px] text-white/40">If it&apos;s unavailable, this Mac takes over</div>
          </div>
        </div>
        <div className="mt-3"><ProviderRow row={ON_MAC} sel={selOf("mac")} /></div>
        <AppLabel className="mt-4 mb-1.5 px-1">YOUR AI SUBSCRIPTIONS</AppLabel>
        <div className="space-y-2">{PLANS.map((r) => <ProviderRow key={r.key} row={r} sel={selOf(r.key)} />)}</div>
        <AppLabel className="mt-4 mb-1.5 px-1">API KEYS</AppLabel>
        <div className="space-y-2">{KEYS.map((r) => <ProviderRow key={r.key} row={r} sel={0} />)}</div>
      </div>
    </AppWindow>
  );
}

/* ───────────────────────── Claude + MCP ───────────────────────── */

export type ChatTiming = { qAt: number; qEvery: number; call1: number; call2: number; done1: number; done2: number; ansAt: number; itemEvery: number };

export function chatDefaults(start = 0): ChatTiming {
  const qWords = MCP_CHAT.question.split(" ").length;
  const qAt = start;
  const qEnd = qAt + qWords * 3;
  return { qAt, qEvery: 3, call1: qEnd + 10, done1: qEnd + 30, call2: qEnd + 34, done2: qEnd + 56, ansAt: qEnd + 64, itemEvery: 9 };
}

function Spinner({ f }: { f: number }) {
  return <span className="block h-3.5 w-3.5 rounded-full border-2 border-white/20" style={{ borderTopColor: "#D97757", rotate: `${f * 14}deg` }} />;
}

/** Claude Desktop answering from Whisperer through the local MCP server. Window 900 × 560 body. */
export function MCPChat({ f, t }: { f: number; t: ChatTiming }) {
  const qWords = MCP_CHAT.question.split(" ");
  const qShown = Math.max(0, Math.min(qWords.length, Math.floor((f - t.qAt) / t.qEvery) + 1));
  const calls = [
    { ...MCP_CHAT.calls[0], at: t.call1, done: t.done1 },
    { ...MCP_CHAT.calls[1], at: t.call2, done: t.done2 },
  ];
  const items = MCP_CHAT.answer.items;
  const itemsShown = f < t.ansAt + 8 ? 0 : Math.min(items.length, Math.floor((f - t.ansAt - 8) / t.itemEvery) + 1);
  return (
    <AppWindow width={900} title="Claude" bodyHeight={560} bodyClassName="bg-[#1F1E1D] flex flex-col">
      <div className="flex-1 min-h-0 overflow-hidden px-7 py-6 space-y-4">
        {f >= t.qAt && (
          <Reveal f={f} at={t.qAt}>
            <div className="ml-auto w-fit max-w-[82%] rounded-[14px] bg-[#393937] px-4 py-2.5 text-[13.5px] leading-[1.5] text-[#F5F4EF]">
              {qWords.slice(0, qShown).join(" ")}
            </div>
          </Reveal>
        )}
        <div className="space-y-1.5">
          {calls.map((c) =>
            f >= c.at ? (
              <Reveal key={c.tool} f={f} at={c.at}>
                <div className="flex w-full max-w-[460px] items-center gap-2 rounded-[10px] bg-[#2A2927] ring-1 ring-white/[0.06] px-3 py-2 text-[12px]">
                  <Wrench className="h-3.5 w-3.5 text-[#D97757]" />
                  <span className="text-[#C2C0B6]">whisperer</span>
                  <ChevronRight className="h-3 w-3 text-white/25" />
                  <code className="font-mono text-[11.5px] text-[#F5F4EF]">{c.tool}</code>
                  <span className="truncate text-[11px] text-white/35">“{c.arg}”</span>
                  <span className="ml-auto">{f >= c.done ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Spinner f={f} />}</span>
                </div>
              </Reveal>
            ) : null,
          )}
        </div>
        {f >= t.ansAt && (
          <Reveal f={f} at={t.ansAt}>
            <div className="flex gap-3">
              <BrandIcon brand="claude" size={22} className="mt-0.5" />
              <div className="text-[13.5px] leading-[1.6] text-[#E8E6DC]">
                <p className="mb-2">{MCP_CHAT.answer.lead}</p>
                <ul className="space-y-1.5">
                  {items.slice(0, itemsShown).map((it, i) => (
                    <Reveal key={it} f={f} at={t.ansAt + 8 + i * t.itemEvery} y={6}>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-[4px] h-3.5 w-3.5 rounded-[4px] ring-1 ring-white/30 shrink-0" />
                        {it}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        )}
      </div>
      <div className="m-4 flex items-center justify-between rounded-[14px] bg-[#30302E] ring-1 ring-white/[0.06] px-4 py-3 text-[12.5px] text-white/35">
        Reply to Claude…
        <span className="h-7 w-7 rounded-[8px] bg-[#D97757] flex items-center justify-center">
          <ArrowUp className="h-3.5 w-3.5 text-white" />
        </span>
      </div>
    </AppWindow>
  );
}

/* ───────────────────────── Calendar ───────────────────────── */

/** Workspace → Calendar. Window 940 × 540 body. */
export function CalendarPanel({ f, recAt }: { f: number; recAt: number }) {
  const recP = rise(f, recAt, 200, 14);
  const secs = Math.max(0, Math.floor((f - recAt) / 30));
  return (
    <AppWindow width={940} bodyHeight={540} bodyClassName="flex">
      <WorkspaceSidebar active="Calendar" />
      <div className="flex-1 min-w-0 px-6 py-5 overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-[12px] bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <CalendarDays className="h-5 w-5 text-white" />
          </span>
          <div>
            <div className="text-[20px] font-light text-white">Calendar</div>
            <div className="text-[11.5px] text-white/50">Reminds you before each meeting and records in one click.</div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-[10px] bg-[#14142B] ring-1 ring-white/[0.06] px-3 py-2 text-[12px] text-white/85">
            <BrandIcon brand="google-calendar" size={16} /> Google Calendar <StatusPill>Connected</StatusPill>
          </span>
          <span className="inline-flex items-center gap-2 rounded-[10px] bg-[#14142B] ring-1 ring-white/[0.06] px-3 py-2 text-[12px] text-white/85">
            <BrandIcon brand="outlook" size={16} /> Outlook <StatusPill>Connected</StatusPill>
          </span>
        </div>
        <AppLabel className="mt-5 mb-2">TODAY</AppLabel>
        <div className="space-y-2">
          {UPCOMING.map((m) => (
            <div key={m.title} className="flex items-center gap-3 rounded-[12px] px-3.5 h-[62px]"
              style={{ background: m.now ? "rgba(91,108,247,0.08)" : "#14142B", boxShadow: `inset 0 0 0 1px ${m.now ? "rgba(91,108,247,0.5)" : "rgba(255,255,255,0.06)"}` }}>
              <div className="w-[52px] shrink-0">
                <div className="text-[12.5px] font-semibold text-white tabular-nums">{m.time}</div>
                <div className="text-[10.5px] text-white/35 tabular-nums">{m.end}</div>
              </div>
              <span className="h-8 w-[3px] rounded-full" style={{ background: m.now ? "#5B6CF7" : "rgba(255,255,255,0.12)" }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  {m.now && <span className="rounded-full bg-[#5B6CF7] px-1.5 py-px text-[9px] font-bold tracking-wider text-white">NOW</span>}
                  <span className="text-[12.5px] font-semibold text-white truncate">{m.title}</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <BrandIcon brand={m.app} size={12} />
                  <span className="text-[10.5px] text-white/45 truncate">{m.people.map((p) => SPEAKERS[p].name.split(" ")[0]).join(", ")} and you</span>
                </div>
              </div>
              {m.now ? (
                f < recAt ? (
                  <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-[#5B6CF7] px-3 py-1.5 text-[11.5px] font-semibold text-white whitespace-nowrap">
                    <Video className="h-3.5 w-3.5" /> Join & Record
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-red-500/15 px-3 py-1.5 text-[11.5px] font-semibold text-red-300 whitespace-nowrap tabular-nums"
                    style={{ scale: String(0.85 + 0.15 * recP), opacity: recP }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Recording 00:0{Math.min(9, secs)}
                  </span>
                )
              ) : (
                <span className="inline-flex items-center gap-1 text-[10.5px] text-white/40 whitespace-nowrap"><Bell className="h-3 w-3" /> 1 min before</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10.5px] leading-snug text-white/35 max-w-[440px]">
          Read-only. Events come straight from Google or Microsoft, sign-in tokens stay in your Keychain.
        </p>
      </div>
    </AppWindow>
  );
}

/* ───────────────────────── Dictation in Slack ───────────────────────── */

export const DICT_LINES = [
  { lang: "English", text: "Quick update: the build is green and I'm sending it to beta testers this afternoon." },
  { lang: "Español", text: "Perfecto, mañana reviso los comentarios y te escribo antes de la reunión." },
  { lang: "Italiano", text: "Ti mando il riassunto stasera, prima di cominciare domani." },
];

export type DictBeat = { hold: number; every: number; release: number; paste: number; voice?: VoiceId; speak?: number; dur?: number };

export const DICT_VOICE: VoiceId[] = ["d1", "d2", "d3"];

/**
 * Beats for each line: Fn down at `hold`, words every `every`, release, ⌘V paste.
 * With `voiced`, each line is timed to its spoken WAV: speech starts at `speak`, words stream while
 * it plays, Fn is released just after the last word.
 */
export function dictBeats(start: number, gap = 18, every = 2, voiced = false, pasteAfter = 22): DictBeat[] {
  const out: DictBeat[] = [];
  let x = start;
  DICT_LINES.forEach((l, i) => {
    const n = l.text.split(" ").length;
    const hold = x;
    const dur = voiced ? voiceFrames(DICT_VOICE[i]) : n * every;
    const release = hold + 8 + dur + 6;
    const paste = release + pasteAfter;
    out.push(voiced ? { hold, every, release, paste, voice: DICT_VOICE[i], speak: hold + 8, dur } : { hold, every, release, paste });
    x = paste + gap;
  });
  return out;
}

/** Slack window with the dictation HUD and the Copied ⌘V toast. Window 1000 × 560 body. */
export function DictationSlack({ f, beats }: { f: number; beats: DictBeat[] }) {
  let idx = 0;
  for (let i = 0; i < beats.length; i++) if (f >= beats[i].hold - 4) idx = i;
  const b = beats[idx];
  const line = DICT_LINES[idx];
  const words = line.text.split(" ");
  const holding = f >= b.hold && f < b.release;
  const shown = b.dur !== undefined && b.speak !== undefined
    ? spokenWords(line.text, f - b.speak, b.dur)
    : Math.max(0, Math.min(words.length, Math.floor((f - b.hold - 8) / b.every) + 1));
  const hudOn = f >= b.hold && f < b.release + 4;
  const hudP = rise(f, b.hold, 200, 12);
  const hudOut = interpolate(f, [b.release, b.release + 5], [1, 0], CLAMP);
  const toastOn = f >= b.release + 2 && f < b.paste + 4;
  const toastP = rise(f, b.release + 2, 16, 16);
  const toastOut = interpolate(f, [b.paste - 2, b.paste + 4], [1, 0], CLAMP);
  const posted = DICT_LINES.filter((_, i) => f >= beats[i].paste);

  return (
    <AppWindow width={1000} title="Slack" bodyHeight={560} bodyClassName="bg-[#1A1D21] flex">
      <div className="w-[170px] shrink-0 bg-[#19171D] border-r border-white/[0.06] px-3 py-4 text-[12.5px] text-white/55 space-y-1.5">
        <div className="text-white font-bold text-[14px] mb-3">Northwind</div>
        {["general", "launch", "design", "random"].map((c) => (
          <div key={c} className={cn("flex items-center gap-1.5 rounded-[6px] px-1.5 py-1", c === "launch" && "bg-[#1164A3] text-white")}>
            <Hash className="h-3 w-3" /> {c}
          </div>
        ))}
      </div>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="px-5 py-3 border-b border-white/[0.06] text-[13.5px] font-bold text-white flex items-center gap-1"><Hash className="h-3.5 w-3.5" /> launch</div>
        <div className="flex-1 min-h-0 overflow-hidden px-5 py-4 space-y-3.5 flex flex-col">
          <div className="flex gap-2.5">
            <span className="h-8 w-8 rounded-[6px] bg-emerald-500/25 text-emerald-300 text-[11px] font-bold flex items-center justify-center shrink-0">ML</span>
            <div>
              <div className="text-[12.5px] font-bold text-white">Maya Levin <span className="font-normal text-white/35 text-[10.5px]">10:38</span></div>
              <div className="text-[13.5px] text-white/85 leading-snug">Where are we on the beta build?</div>
            </div>
          </div>
          {posted.map((l, i) => (
            <Reveal key={l.lang} f={f} at={beats[i].paste}>
              <div className="flex gap-2.5">
                <span className="h-8 w-8 rounded-[6px] bg-[#5B6CF7]/30 text-[#9BA6FF] text-[11px] font-bold flex items-center justify-center shrink-0">ME</span>
                <div>
                  <div className="text-[12.5px] font-bold text-white">You <span className="font-normal text-white/35 text-[10.5px]">10:4{i}</span></div>
                  <div className="text-[13.5px] text-white/85 leading-snug">{l.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="m-4 rounded-[10px] ring-1 ring-white/15 bg-[#222529] px-3.5 py-3 text-[13px] text-white/35 min-h-[46px]">Message #launch</div>
      </div>

      {hudOn && (
        <div className="absolute left-1/2 bottom-[92px]" style={{ width: 520, translate: `-50% ${(1 - hudP) * 14}px`, opacity: Math.min(hudP, hudOut), scale: String(0.96 + 0.04 * hudP) }}>
          <div className="rounded-[18px] bg-[#14142B]/95 ring-1 ring-white/10 px-4 py-3 backdrop-blur-xl" style={{ boxShadow: "0 20px 60px -15px rgba(0,0,0,0.9)" }}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-2 w-2 rounded-full bg-[#5B6CF7]" style={{ opacity: 0.5 + 0.5 * Math.sin(f * 0.3) }} />
              <span className="text-[11px] font-medium text-white/55">Listening</span>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[11px] text-white/75">
                <Globe className="h-3 w-3" /> {line.lang}
              </span>
            </div>
            <div className="text-[14.5px] leading-snug text-white min-h-[20px]">
              {words.slice(0, holding ? shown : words.length).join(" ")}
              <Caret f={f} />
            </div>
          </div>
        </div>
      )}
      {toastOn && (
        <div className="absolute left-1/2 bottom-[100px]" style={{ translate: `-50% ${(1 - toastP) * 12}px`, opacity: Math.min(toastP, toastOut), scale: String(0.9 + 0.1 * toastP) }}>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#14142B]/95 ring-1 ring-white/10 pl-2 pr-3 py-2" style={{ boxShadow: "0 16px 40px -10px rgba(0,0,0,0.8)" }}>
            <span className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
            <span className="text-[13px] text-white">Copied</span>
            <kbd className="rounded-[6px] bg-white/10 px-1.5 py-0.5 text-[11.5px] text-white/85 font-sans">⌘V</kbd>
          </div>
        </div>
      )}
    </AppWindow>
  );
}

/** A big on-screen key, pressed while held. */
export function KeyCap({ label, down, sub }: { label: string; down: number; sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="flex items-end justify-start rounded-[16px] text-[26px] font-medium"
        style={{
          width: 96,
          height: 96,
          padding: 14,
          color: down > 0.5 ? "#fff" : "rgba(255,255,255,0.85)",
          background: `linear-gradient(180deg, color-mix(in srgb, #5B6CF7 ${down * 100}%, #23233F), color-mix(in srgb, #8B5CF6 ${down * 100}%, #1A1A33))`,
          boxShadow: `0 ${8 - down * 6}px 0 #0A0A18, 0 ${16 - down * 8}px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 ${down * 40}px rgba(91,108,247,${down * 0.6})`,
          translate: `0 ${down * 6}px`,
        }}
      >
        {label}
      </div>
      {sub && <div className="text-[15px] text-white/60">{sub}</div>}
    </div>
  );
}
