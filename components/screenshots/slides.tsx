"use client";

import type { ReactNode } from "react";
import {
  Bell, CalendarDays, Check, CheckCircle2, CircleHelp, Flag, Globe, KeyRound, Laptop, Paperclip,
  ShieldCheck, Sparkles, UserX, Video, WifiOff, Wallet, ArrowUp, CalendarCheck, Wand2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { CallDetectedCard, IslandBar } from "@/components/product/Island";
import { ProviderList } from "@/components/product/ProviderList";
import { MCPChat, MCPConnectCard } from "@/components/product/MCPChat";
import { CalendarPanel } from "@/components/product/CalendarPanel";
import { DictationDemo } from "@/components/product/DictationDemo";
import { AppWindow, AppLabel, BrandIcon, type Brand } from "@/components/product/primitives";
import {
  SPEAKERS, MEETING, SEGMENTS, OVERVIEW, DECISIONS, ACTION_ITEMS, OPEN_QUESTION, ASK,
} from "@/components/product/demo-data";

/** Design size of every slide. Exported at pixelRatio 2 → 2560×1600. */
export const SLIDE_W = 1280;
export const SLIDE_H = 800;

// ───────────────────────── Frame ─────────────────────────

type Glow = { x: string; y: string; color: string; size?: number; opacity?: number };

function Backdrop({ glows }: { glows: Glow[] }) {
  return (
    <>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0A1F 0%, #080816 55%, #06060F 100%)" }} />
      {glows.map((g, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: g.x, top: g.y, width: g.size ?? 900, height: g.size ?? 900,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(closest-side, ${g.color}, transparent)`,
            opacity: g.opacity ?? 0.35,
          }}
        />
      ))}
      {/* faint top hairline light */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </>
  );
}

const GLOW_A: Glow[] = [
  { x: "50%", y: "18%", color: "#5B6CF7", size: 1100, opacity: 0.32 },
  { x: "88%", y: "88%", color: "#8B5CF6", size: 800, opacity: 0.22 },
];
const GLOW_B: Glow[] = [
  { x: "18%", y: "30%", color: "#5B6CF7", size: 900, opacity: 0.3 },
  { x: "80%", y: "70%", color: "#8B5CF6", size: 1000, opacity: 0.26 },
];

function Headline({ lines, size = 62, className }: { lines: [string, string]; size?: number; className?: string }) {
  return (
    <h2 className={cn("leading-[1.06] font-semibold tracking-[-0.035em] text-white", className)} style={{ fontSize: size }}>
      {lines[0]}
      <br />
      <span className="text-[#AEB5FF]">{lines[1]}</span>
    </h2>
  );
}

function Sub({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-[21px] leading-[1.45] text-white/60 [text-wrap:balance]", className)}>{children}</p>;
}

/** Headline on top, centred; product below, bleeding off the bottom edge. */
function StackSlide({
  lines, sub, glows = GLOW_A, children, productTop = 300,
}: { lines: [string, string]; sub: ReactNode; glows?: Glow[]; children: ReactNode; productTop?: number }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Backdrop glows={glows} />
      <div className="absolute inset-x-0 top-[56px] flex flex-col items-center text-center px-20">
        <Headline lines={lines} />
        <Sub className="mt-4 max-w-[860px]">{sub}</Sub>
      </div>
      <div className="absolute inset-x-0 flex justify-center" style={{ top: productTop }}>{children}</div>
    </div>
  );
}

/** Text on the left, product on the right. */
function SplitSlide({
  lines, sub, glows = GLOW_B, children, below,
}: { lines: [string, string]; sub: ReactNode; glows?: Glow[]; children: ReactNode; below?: ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Backdrop glows={glows} />
      <div className="absolute left-[72px] top-0 bottom-0 w-[470px] flex flex-col justify-center">
        <Headline lines={lines} size={50} className="whitespace-nowrap" />
        <Sub className="mt-5">{sub}</Sub>
        {below && <div className="mt-8">{below}</div>}
      </div>
      <div className="absolute right-[60px] top-0 bottom-0 flex items-center">{children}</div>
    </div>
  );
}

function Scaled({ scale, w, h, children }: { scale: number; w: number; h: number; children: ReactNode }) {
  return (
    <div style={{ width: w * scale, height: h * scale }}>
      <div style={{ width: w, height: h, transform: `scale(${scale})`, transformOrigin: "top left" }}>{children}</div>
    </div>
  );
}

function Avatar({ id, size = 28 }: { id: keyof typeof SPEAKERS; size?: number }) {
  const s = SPEAKERS[id];
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-semibold shrink-0"
      style={{
        width: size, height: size, fontSize: Math.round(size * 0.36),
        background: `color-mix(in srgb, ${s.color} 22%, #0C0C1A)`, boxShadow: `inset 0 0 0 1px ${s.color}66`, color: s.color,
      }}
    >
      {s.initials}
    </span>
  );
}

const card = "rounded-[16px] bg-[#14142B] ring-1 ring-white/[0.07]";

// ───────────────────────── 1. Hero ─────────────────────────

function S1Hero() {
  return (
    <StackSlide
      lines={["AI meeting notes", "for your Mac."]}
      sub="Records the call, tells the speakers apart and writes the notes. No bot joins the meeting."
      productTop={278}
    >
      <Scaled scale={1.04} w={1120} h={576}>
        <MeetingStudio className="w-[1120px]" />
      </Scaled>
    </StackSlide>
  );
}

// ───────────────────────── 2. Detection ─────────────────────────

function CallTile({ id, speaking }: { id: keyof typeof SPEAKERS; speaking?: boolean }) {
  const s = SPEAKERS[id];
  return (
    <div
      className={cn("relative rounded-[12px] overflow-hidden flex items-center justify-center", speaking && "ring-[3px] ring-[#22C55E]")}
      style={{ background: `radial-gradient(120% 120% at 30% 20%, color-mix(in srgb, ${s.color} 26%, #1B1B2E), #111120)` }}
    >
      <Avatar id={id} size={84} />
      <span className="absolute left-3 bottom-2.5 rounded-[6px] bg-black/55 px-2 py-0.5 text-[12px] text-white">{s.name === "Me" ? "You" : s.name}</span>
    </div>
  );
}

function S2Detection() {
  const apps: Brand[] = ["zoom", "teams", "google-meet", "slack", "webex"];
  return (
    <StackSlide
      lines={["Notices your call.", "Takes the notes."]}
      sub={
        <span className="inline-flex items-center gap-3">
          Works with
          {apps.map((b) => <BrandIcon key={b} brand={b} size={24} />)}
          FaceTime and browser calls.
        </span>
      }
      productTop={278}
    >
      <div className="relative w-[1000px]">
        <AppWindow title="Zoom Meeting" bodyClassName="h-[520px] bg-[#0E0E19] p-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[420px]">
            <CallTile id="maya" speaking />
            <CallTile id="dan" />
            <CallTile id="priya" />
            <CallTile id="me" />
          </div>
        </AppWindow>
        <div className="absolute left-1/2 -translate-x-1/2 -top-[26px]">
          <div style={{ transform: "scale(1.35)", transformOrigin: "top center" }}><IslandBar time="00:42" /></div>
        </div>
        <div className="absolute -right-[60px] top-[96px]">
          <div style={{ transform: "scale(1.45)", transformOrigin: "top right" }}>
            <CallDetectedCard brand="zoom" app="Zoom" title="Mobile launch review · Take notes?" />
          </div>
        </div>
      </div>
    </StackSlide>
  );
}

// ───────────────────────── 3. Speakers ─────────────────────────

function S3Speakers() {
  const segs = SEGMENTS.slice(0, 4);
  return (
    <StackSlide
      lines={["Every voice,", "named."]}
      sub="Whisperer tells speakers apart on your Mac, then names them from the calendar invite in one click."
      productTop={278}
    >
      <AppWindow title={MEETING.title} className="w-[1080px]" bodyClassName="h-[520px] flex">
        <div className="flex-1 min-w-0 px-7 py-6 space-y-4">
          {segs.map((s, i) => (
            <div key={i}>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Avatar id={s.speaker} size={26} />
                <span className="text-[14px] font-semibold" style={{ color: SPEAKERS[s.speaker].color }}>{SPEAKERS[s.speaker].name}</span>
                <span className="text-[12px] text-white/30 tabular-nums">{s.t}</span>
              </div>
              <div className="rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-4 py-3 text-[15px] leading-[1.5] text-white/90">{s.text}</div>
            </div>
          ))}
        </div>
        <div className="w-[330px] shrink-0 border-l border-white/[0.06] px-5 py-6">
          <AppLabel className="mb-3 text-[11px]">SPEAKERS</AppLabel>
          <div className="space-y-2">
            {(["maya", "dan", "priya", "me"] as const).map((id, i) => (
              <div key={id} className="flex items-center gap-3 rounded-[12px] bg-white/[0.04] px-3 py-2.5">
                <Avatar id={id} size={30} />
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] text-white">{SPEAKERS[id].name}</div>
                  <div className="text-[11.5px] text-white/35">{id === "me" ? "Your microphone" : `was Speaker ${i + 1}`}</div>
                </div>
                {id !== "me" && <CalendarDays className="h-4 w-4 text-white/35" />}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[14px] bg-[#5B6CF7]/[0.10] ring-1 ring-[#5B6CF7]/40 p-3.5">
            <div className="flex items-center gap-2 text-[12.5px] text-white">
              <BrandIcon brand="google-calendar" size={16} /> From the invite
            </div>
            <div className="mt-1 text-[12px] text-white/55">Maya Levin, Dan Ortiz, Priya Shah</div>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-emerald-500/15 px-3 py-1.5 text-[12.5px] font-medium text-emerald-300">
                <Check className="h-3.5 w-3.5" /> Names applied
              </span>
            </div>
          </div>
        </div>
      </AppWindow>
    </StackSlide>
  );
}

// ───────────────────────── 4. Notes ─────────────────────────

function S4Notes() {
  return (
    <StackSlide
      lines={["Decisions and to-dos,", "ready when you hang up."]}
      sub="An overview, key decisions, action items with owners and open questions, written for every meeting."
      productTop={278}
    >
      <AppWindow title={`${MEETING.title} · Overview`} className="w-[1080px]" bodyClassName="h-[520px] p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[22px] font-bold text-white">{MEETING.title}</div>
            <div className="text-[13px] text-white/40 mt-0.5">{MEETING.date} · {MEETING.duration} · 3 speakers</div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D97757]/15 px-3 py-1 text-[13px] text-[#F0A285]">
            <BrandIcon brand="claude" size={14} /> Notes by Claude
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-[#8B9BFF] mb-2 text-[11px]">AI OVERVIEW</AppLabel>
              <p className="text-[15px] leading-[1.6] text-white/85">{OVERVIEW}</p>
            </div>
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-emerald-400 mb-2.5 flex items-center gap-1.5 text-[11px]"><Flag className="h-3.5 w-3.5" /> DECISIONS</AppLabel>
              {DECISIONS.map((d) => (
                <div key={d.text} className="flex justify-between gap-3 text-[15px] text-white/85 py-1">
                  <span>{d.text}</span><span className="text-white/30 tabular-nums text-[12.5px]">{d.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-sky-400 mb-2.5 flex items-center gap-1.5 text-[11px]"><CheckCircle2 className="h-3.5 w-3.5" /> ACTION ITEMS</AppLabel>
              {ACTION_ITEMS.map((a) => (
                <div key={a.text} className="flex items-center gap-2.5 text-[15px] text-white/85 py-1.5">
                  <Avatar id={a.owner} size={24} />
                  <span className="flex-1">{a.text}</span>
                  <span className="text-[12.5px] text-white/35">{a.due}</span>
                </div>
              ))}
            </div>
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-amber-400 mb-2 flex items-center gap-1.5 text-[11px]"><CircleHelp className="h-3.5 w-3.5" /> OPEN QUESTIONS</AppLabel>
              <div className="text-[15px] text-white/85">{OPEN_QUESTION}</div>
            </div>
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-rose-400 mb-2 flex items-center gap-1.5 text-[11px]"><CalendarDays className="h-3.5 w-3.5" /> NEXT MEETING</AppLabel>
              <div className="text-[15px] text-white/85">Thursday: review Priya&apos;s new onboarding build</div>
            </div>
          </div>
        </div>
      </AppWindow>
    </StackSlide>
  );
}

// ───────────────────────── 5. Ask AI ─────────────────────────

function S5Ask() {
  const quotes = [
    { id: "dan" as const, t: "02:41", text: SEGMENTS[1].text },
    { id: "me" as const, t: "03:05", text: SEGMENTS[2].text },
  ];
  return (
    <SplitSlide
      lines={["Ask your meeting", "anything."]}
      sub="Every answer links to the moment it came from, so you can check what was really said."
    >
      <AppWindow title="Ask AI · Mobile launch review" className="w-[660px]" bodyClassName="h-[540px] flex flex-col">
        <div className="flex-1 px-6 py-6 space-y-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D97757]/15 px-3 py-1 text-[13px] text-[#F0A285]">
            <BrandIcon brand="claude" size={13} /> Answers by Claude
          </span>
          <div className="ml-auto w-fit max-w-[80%] rounded-[16px] bg-[#25255A] px-4 py-3 text-[16px] text-white">{ASK.question}</div>
          <div className="text-[16px] leading-[1.6] text-white/90">
            <Sparkles className="inline h-4 w-4 mr-1.5 -translate-y-px text-[#8B9BFF]" />{ASK.answer}
          </div>
          <div className="flex items-center gap-2 text-[13px] text-[#9BA6FF]">
            <Paperclip className="h-4 w-4" /> 2 sources
          </div>
          <div className="space-y-2.5">
            {quotes.map((q) => (
              <div key={q.t} className={cn(card, "p-3.5 flex gap-3")}>
                <span className="rounded-[7px] bg-[#5B6CF7]/20 px-2 py-1 h-fit text-[12.5px] font-semibold tabular-nums text-[#B4BCFF]">{q.t}</span>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold" style={{ color: SPEAKERS[q.id].color }}>{SPEAKERS[q.id].name}</div>
                  <div className="text-[14px] leading-[1.5] text-white/75">{q.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-4 flex items-center justify-between rounded-[12px] bg-white/[0.05] px-4 py-3 text-[14px] text-white/35">
          Ask Claude about this meeting…
          <span className="h-7 w-7 rounded-[8px] bg-[#5B6CF7] flex items-center justify-center"><ArrowUp className="h-4 w-4 text-white" /></span>
        </div>
      </AppWindow>
    </SplitSlide>
  );
}

// ───────────────────────── 6. Your own AI ─────────────────────────

function S6Providers() {
  return (
    <SplitSlide
      lines={["Use the AI", "you already pay for."]}
      sub="Claude, ChatGPT or Gemini on your own plan, or the model built into Whisperer that runs on your Mac."
      below={
        <div className="flex items-center gap-3">
          {(["claude", "openai", "gemini"] as Brand[]).map((b) => (
            <span key={b} className="h-12 w-12 rounded-[13px] bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center"><BrandIcon brand={b} size={26} /></span>
          ))}
          <span className="h-12 w-12 rounded-[13px] bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center"><Laptop className="h-6 w-6 text-sky-400" /></span>
        </div>
      }
    >
      <Scaled scale={1.0} w={640} h={596}>
        <ProviderList sidebar={false} className="w-[640px]" />
      </Scaled>
    </SplitSlide>
  );
}

// ───────────────────────── 7. MCP ─────────────────────────

function S7MCP() {
  return (
    <SplitSlide
      lines={["Claude can read", "your meetings."]}
      sub="Connect Claude, ChatGPT, Cursor or VS Code in one click. They search your notes on this Mac."
      below={<Scaled scale={0.88} w={500} h={262}><MCPConnectCard className="w-[500px]" /></Scaled>}
    >
      <Scaled scale={1.1} w={600} h={536}>
        <MCPChat className="w-[600px]" />
      </Scaled>
    </SplitSlide>
  );
}

// ───────────────────────── 8. Calendar ─────────────────────────

function ReminderCard() {
  return (
    <div className="w-[380px] rounded-[18px] bg-[#14142B]/95 ring-1 ring-white/10 p-4 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3">
        <span className="h-11 w-11 rounded-[12px] bg-white/[0.06] flex items-center justify-center"><BrandIcon brand="zoom" size={24} /></span>
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-white">{MEETING.title}</div>
          <div className="flex items-center gap-1.5 text-[12.5px] text-white/50"><Bell className="h-3.5 w-3.5" /> Starts in 1 minute · Zoom</div>
        </div>
      </div>
      <div className="mt-3.5 grid grid-cols-[1.4fr_1fr_1fr] gap-2 text-[13px]">
        <span className="rounded-[10px] bg-[#5B6CF7] py-2 text-center font-semibold text-white">Join & Record</span>
        <span className="rounded-[10px] bg-white/[0.08] py-2 text-center text-white/85">Record</span>
        <span className="rounded-[10px] bg-white/[0.05] py-2 text-center text-white/55">Dismiss</span>
      </div>
    </div>
  );
}

function S8Calendar() {
  return (
    <StackSlide
      lines={["Join and record", "in one click."]}
      sub={
        <span className="inline-flex items-center gap-2.5">
          <BrandIcon brand="google-calendar" size={22} /> Google Calendar or <BrandIcon brand="outlook" size={22} /> Outlook. A reminder a minute before each meeting.
        </span>
      }
      productTop={278}
    >
      <div className="relative">
        <Scaled scale={1.04} w={1000} h={536}>
          <CalendarPanel className="w-[1000px]" />
        </Scaled>
        <div className="absolute -right-[70px] top-[318px]">
          <div style={{ transform: "scale(1.2)", transformOrigin: "top right" }}><ReminderCard /></div>
        </div>
      </div>
    </StackSlide>
  );
}

// ───────────────────────── 9. Dictation ─────────────────────────

function S9Dictation() {
  const partial = "Perfecto, mañana reviso los comentarios y te escribo";
  return (
    <StackSlide
      lines={["Hold Fn and speak.", "Paste with ⌘V."]}
      sub="Words appear as you talk, in 97 languages. Release the key and the text is ready to paste."
      productTop={286}
    >
      <Scaled scale={1.12} w={900} h={496}>
        <div className="dict relative w-[900px]">
          {/* Hide the demo's own key pill; ours below shows the key held. */}
          <style>{`.dict > div > div:nth-child(2) { display: none !important; }`}</style>
          <DictationDemo className="w-[900px]" />
          {/* Mid-dictation overlay: the HUD as it streams a second message. */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-[#14142B] ring-1 ring-white/10 px-3 py-1.5 text-[11.5px] text-white/80 shadow-lg">
            <kbd className="rounded-[6px] px-1.5 py-0.5 text-[11px] font-sans bg-[#5B6CF7] text-white">fn</kbd>
            Holding
          </div>
          <div className="absolute left-1/2 bottom-[150px] -translate-x-1/2 w-[480px]">
            <div className="rounded-[18px] bg-[#14142B]/95 ring-1 ring-white/10 px-4 py-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#5B6CF7]" />
                <span className="text-[10.5px] font-medium text-white/50">Listening</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10.5px] text-white/70">
                  <Globe className="h-3 w-3" /> Español
                </span>
              </div>
              <div className="text-[14px] leading-snug text-white">
                {partial}
                <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#8B9BFF]" />
              </div>
            </div>
          </div>
        </div>
      </Scaled>
    </StackSlide>
  );
}

// ───────────────────────── 10. Private ─────────────────────────

function S10Private() {
  const rows = [
    { icon: Laptop, color: "text-sky-400", title: "Recorded on your Mac", body: "Audio is transcribed and kept on this Mac. It never goes to a server." },
    { icon: Video, color: "text-cyan-400", title: "No bot in the call", body: "Nothing joins your Zoom or Teams meeting." },
    { icon: UserX, color: "text-pink-400", title: "No account", body: "No sign-up, no email, no workspace to join." },
    { icon: ShieldCheck, color: "text-emerald-400", title: "Data Not Collected", body: "No analytics and no tracking, as the App Store label says." },
    { icon: WifiOff, color: "text-amber-400", title: "Works offline", body: "The built-in model writes notes without internet." },
    { icon: Wallet, color: "text-violet-300", title: "Pay once", body: "No subscription and no minute limits." },
  ];
  return (
    <SplitSlide
      lines={["Your meetings", "stay on your Mac."]}
      sub="You decide if a transcript ever goes to a cloud AI. Any meeting can stay completely local."
      glows={[
        { x: "20%", y: "30%", color: "#5B6CF7", size: 900, opacity: 0.3 },
        { x: "75%", y: "85%", color: "#10B981", size: 700, opacity: 0.1 },
        { x: "90%", y: "20%", color: "#8B5CF6", size: 800, opacity: 0.2 },
      ]}
    >
      <AppWindow title="Settings · Privacy" className="w-[640px]" bodyClassName="px-7 py-3">
        <div className="divide-y divide-white/[0.07]">
          {rows.map(({ icon: Icon, color, title, body }) => (
            <div key={title} className="flex items-center gap-5 py-[18px]">
              <Icon className={cn("h-6 w-6 shrink-0", color)} strokeWidth={1.75} />
              <div className="min-w-0 flex-1">
                <div className="text-[18px] font-semibold text-white">{title}</div>
                <div className="mt-0.5 text-[14.5px] leading-[1.45] text-white/55">{body}</div>
              </div>
              <Check className="h-5 w-5 shrink-0 text-emerald-400" strokeWidth={2.5} />
            </div>
          ))}
        </div>
      </AppWindow>
    </SplitSlide>
  );
}

export const SLIDES: { id: string; title: string; component: () => ReactNode }[] = [
  { id: "01-hero", title: "Hero: AI meeting notes for your Mac", component: S1Hero },
  { id: "02-detection", title: "Meeting detection", component: S2Detection },
  { id: "03-speakers", title: "Speakers named from the calendar", component: S3Speakers },
  { id: "04-notes", title: "Notes, decisions, action items", component: S4Notes },
  { id: "05-ask-ai", title: "Ask AI with sources", component: S5Ask },
  { id: "06-your-ai", title: "Your own AI", component: S6Providers },
  { id: "07-mcp", title: "MCP: Claude can read your meetings", component: S7MCP },
  { id: "08-calendar", title: "Calendar: Join & Record", component: S8Calendar },
  { id: "09-dictation", title: "Dictation", component: S9Dictation },
  { id: "10-private", title: "Private, no account, pay once", component: S10Private },
];
