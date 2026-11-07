import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CalendarCheck2, Search, Sparkles, Users, Wand2, PauseCircle, Lock, WifiOff, HardDrive, UserX, Check,
  Mic, Globe, Languages, Gauge,
} from "lucide-react";
import { Section, H2, Lede, TextLink, AppStoreButton } from "@/components/site/Shell";
import { BrandIcon, BrandTile, type Brand } from "@/components/product/primitives";
import { CallDetectedCard, IslandBar } from "@/components/product/Island";
import { CalendarPanel } from "@/components/product/CalendarPanel";
import { ProviderList } from "@/components/product/ProviderList";
import { MCPChat } from "@/components/product/MCPChat";
import { PolishMock, DictionaryMock } from "@/components/landing/DictationMockups";
import { ACTION_ITEMS, ASK, SPEAKERS, SEGMENTS } from "@/components/product/demo-data";
import { PRICE_BASE, PRICE_PRO, FACTS } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ---------- 1. Call detection ---------- */

const CALL_APPS: { brand?: Brand; name: string }[] = [
  { brand: "zoom", name: "Zoom" },
  { brand: "teams", name: "Microsoft Teams" },
  { brand: "google-meet", name: "Google Meet" },
  { brand: "slack", name: "Slack huddles" },
  { brand: "webex", name: "Webex" },
  { name: "FaceTime" },
];

export function DetectionSection() {
  return (
    <Section id="detection">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <H2>Starts taking notes when your call starts</H2>
          <Lede>
            Whisperer sees which app opened the microphone, so it knows a Zoom call from a voice memo. It asks once, or
            records on its own for meetings on your calendar.
          </Lede>
          <ul data-reveal="list" className="mt-8 grid grid-cols-2 gap-2.5 max-w-[460px]">
            {CALL_APPS.map((a) => (
              <li key={a.name} className="flex items-center gap-2.5 rounded-[12px] bg-white/[0.03] ring-1 ring-white/[0.07] px-3 py-2.5 text-[14px] text-white/85">
                {a.brand ? <BrandIcon brand={a.brand} size={18} /> : <Mic className="h-[18px] w-[18px] text-emerald-400" />}
                {a.name}
              </li>
            ))}
          </ul>
          <TextLink href="/meetings" className="mt-8">See how meeting notes work</TextLink>
        </div>
        <div data-reveal="frame" className="relative h-[460px] rounded-[24px] bg-[radial-gradient(120%_90%_at_70%_20%,#1B1D4A_0%,#0D0D20_60%)] ring-1 ring-white/[0.07] overflow-hidden">
          {/* a Mac desktop with the menu bar, the Island and the prompt */}
          <div className="absolute inset-x-0 top-0 h-7 bg-black/40 backdrop-blur flex items-center justify-between px-4 text-[11px] text-white/70">
            <span className="font-semibold">Zoom Workplace</span>
            <span className="tabular-nums">Tue 10:00</span>
          </div>
          <IslandBar className="absolute top-12 left-1/2 -translate-x-1/2" time="00:04" />
          <div className="absolute left-8 right-8 top-[120px] grid grid-cols-2 gap-3 opacity-80">
            {(["maya", "dan", "priya", "me"] as const).map((id, i) => (
              <div
                key={id}
                className={cn("relative aspect-video rounded-[12px] ring-1 flex items-center justify-center overflow-hidden", i === 0 ? "ring-2 ring-emerald-400/80" : "ring-white/[0.06]")}
                style={{ background: `radial-gradient(120% 120% at 50% 0%, color-mix(in srgb, ${SPEAKERS[id].color} 28%, #16182F) 0%, #111327 70%)` }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full text-[17px] font-semibold"
                  style={{ background: `color-mix(in srgb, ${SPEAKERS[id].color} 35%, #0C0C1A)`, color: "white" }}
                >
                  {SPEAKERS[id].initials}
                </span>
                <span className="absolute bottom-2 left-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10.5px] text-white/85">{SPEAKERS[id].name}</span>
              </div>
            ))}
          </div>
          <CallDetectedCard className="absolute right-6 bottom-6" title="Mobile launch review · on your calendar" />
        </div>
      </div>
    </Section>
  );
}

/* ---------- 2. What a meeting gets ---------- */

function Tile({ icon: Icon, color, title, body, children, className }: { icon: typeof Users; color: string; title: string; body: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-[20px] bg-[#101024] ring-1 ring-white/[0.07] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:ring-white/[0.14]", className)}>
      <span className={cn("inline-flex h-9 w-9 items-center justify-center rounded-[10px]", color)}><Icon className="h-[18px] w-[18px]" /></span>
      <h3 className="mt-4 text-[17px] font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-[14.5px] leading-[1.55] text-white/55">{body}</p>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}

export function NotesSection() {
  return (
    <Section id="notes">
      <div className="max-w-[720px]">
        <H2>Notes, decisions and action items when the call ends</H2>
        <Lede>Every meeting lands in Meeting Studio with a clean transcript, named speakers and a summary you can ask questions about.</Lede>
      </div>
      <div data-reveal="list" className="mt-12 grid gap-4 md:grid-cols-6">
        <Tile className="md:col-span-3" icon={Users} color="bg-emerald-500/15 text-emerald-400" title="Names every speaker" body="Voices are told apart on your Mac, and names come from the calendar invite.">
          <div className="space-y-2">
            {SEGMENTS.slice(0, 2).map((s) => (
              <div key={s.t} className="rounded-[12px] bg-white/[0.03] px-3 py-2">
                <div className="text-[12px] font-semibold" style={{ color: SPEAKERS[s.speaker].color }}>{SPEAKERS[s.speaker].name} <span className="ml-1 font-normal text-white/30">{s.t}</span></div>
                <div className="text-[13px] text-white/75 leading-snug">{s.text}</div>
              </div>
            ))}
          </div>
        </Tile>
        <Tile className="md:col-span-3" icon={CalendarCheck2} color="bg-sky-500/15 text-sky-400" title="Writes the action items" body="Owners and due days are pulled out of what people actually said.">
          <div className="space-y-1.5">
            {ACTION_ITEMS.map((a) => (
              <div key={a.text} className="flex items-center gap-2.5 rounded-[10px] bg-white/[0.03] px-3 py-2 text-[13px] text-white/80">
                <span className="h-4 w-4 rounded-[5px] ring-1 ring-white/25" />
                <span className="flex-1 truncate">{a.text}</span>
                <span className="text-[11.5px]" style={{ color: SPEAKERS[a.owner].color }}>{SPEAKERS[a.owner].name.split(" ")[0]}</span>
              </div>
            ))}
          </div>
        </Tile>
        <Tile className="md:col-span-2" icon={Sparkles} color="bg-[#5B6CF7]/20 text-[#9BA6FF]" title="Answers with sources" body={`Ask "${ASK.question}" and get the answer with the moments it came from.`} />
        <Tile className="md:col-span-2" icon={Search} color="bg-amber-500/15 text-amber-400" title="Searches every meeting" body="Find the call where pricing came up, jump to the second it was said." />
        <Tile className="md:col-span-2" icon={PauseCircle} color="bg-rose-500/15 text-rose-400" title="Pauses for dictation" body="Hold Fn mid-call to dictate a message. The meeting pauses, then picks up again." />
      </div>
    </Section>
  );
}

/* ---------- 3. Calendar ---------- */

export function CalendarSection() {
  return (
    <Section id="calendar">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <H2>Your calendar tells Whisperer what to record</H2>
          <Lede>Connect Google Calendar or Outlook. Before each meeting you get a card with Join & Record, and the notes are named after the invite.</Lede>
          <div className="mt-8 flex gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-4 py-2 text-[14px] text-white/85"><BrandIcon brand="google-calendar" size={18} /> Google Calendar</span>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-4 py-2 text-[14px] text-white/85"><BrandIcon brand="outlook" size={18} /> Outlook</span>
          </div>
          <TextLink href="/calendar" className="mt-8">See calendar sync</TextLink>
        </div>
        <div data-reveal="frame" className="min-w-0"><CalendarPanel sidebar={false} /></div>
      </div>
    </Section>
  );
}

/* ---------- 4. Your own AI ---------- */

const COSTS = [
  { name: "Granola Business", year: 168, note: "$14 a month" },
  { name: "Fireflies Pro", year: 120, note: "$10 a month, billed yearly" },
  { name: "Otter Pro", year: 100, note: "$8.33 a month, billed yearly" },
];

export function CostCard({ className }: { className?: string }) {
  return (
          <div className={cn("rounded-[18px] bg-white/[0.03] ring-1 ring-white/[0.07] p-5 max-w-[500px]", className)}>
            <div className="text-[13px] font-semibold text-white mb-4">First-year cost for one person<sup className="text-white/40">1</sup></div>
            <div className="space-y-3">
              {COSTS.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-[13.5px]"><span className="text-white/70">{c.name}</span><span className="tabular-nums text-white/70">${c.year}</span></div>
                  <div className="mt-1 h-2 rounded-full bg-white/[0.05]"><div className="h-2 rounded-full bg-white/25" style={{ width: `${(c.year / 168) * 100}%` }} /></div>
                </div>
              ))}
              <div>
                <div className="flex justify-between text-[14px] font-semibold"><span className="text-white">Whisperer with Pro</span><span className="tabular-nums text-white">$17.98 once</span></div>
                <div className="mt-1 h-2 rounded-full bg-white/[0.05]"><div className="h-2 rounded-full bg-gradient-to-r from-[#6B7BFF] to-[#8B5CF6]" style={{ width: `${(17.98 / 168) * 100}%` }} /></div>
              </div>
            </div>
          </div>
  );
}

export function OwnAISection() {
  return (
    <Section id="your-ai">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <H2>Notes written by the AI you already pay for</H2>
          <Lede>
            Sign in with your Claude, ChatGPT or Gemini plan and Whisperer uses it for notes and answers, with no extra bill.
            No plan? The built-in {FACTS.localModel} model writes them on your Mac, offline.
          </Lede>
          <div data-reveal data-rd="160"><CostCard className="mt-9" /></div>
          <TextLink href="/ai" className="mt-8">See every AI you can connect</TextLink>
        </div>
        <div data-reveal="frame" className="min-w-0"><ProviderList sidebar={false} /></div>
      </div>
    </Section>
  );
}

/* ---------- 5. MCP ---------- */

const MCP_APPS: Brand[] = ["claude", "openai", "cursor", "codex", "visual-studio-code", "windsurf"];

export function MCPSection() {
  return (
    <Section id="mcp">
      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div data-reveal="frame" className="order-2 min-w-0 lg:order-1"><MCPChat /></div>
        <div className="order-1 lg:order-2">
          <H2>Ask Claude about last Tuesday&apos;s meeting</H2>
          <Lede>
            Whisperer runs a small MCP server on your Mac. Claude, ChatGPT, Cursor and Codex can search your meetings and
            dictations, read the notes and add their own. Turn it on, pick the app, click Connect.
          </Lede>
          <div data-reveal="list" className="mt-8 flex flex-wrap gap-2">
            {MCP_APPS.map((b) => <BrandTile key={b} brand={b} size={44} />)}
          </div>
          <TextLink href="/mcp" className="mt-8">See the MCP tools</TextLink>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 6. Dictation ---------- */

export function DictationSection() {
  const points = [
    { icon: Globe, title: `${FACTS.languages} languages`, body: "Live preview in the language you speak, detected as you talk." },
    { icon: Gauge, title: "Words while you speak", body: "Text streams in under the cursor as you talk, then a final pass cleans it." },
    { icon: Languages, title: "Learns your words", body: "Fix a name once and Whisperer spells it right from then on." },
  ];
  return (
    <Section id="dictation">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <H2>Dictation that writes like you type</H2>
          <Lede>Speak into Slack, Mail, Notion or any text box. Whisperer adds the punctuation, drops the ums and spells names the way you taught it, so the text is ready to paste when you let go.</Lede>
          <div data-reveal="list" className="mt-9 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#5B6CF7]/15 text-[#9BA6FF]"><p.icon className="h-[18px] w-[18px]" /></span>
                <div>
                  <div className="text-[16px] font-semibold text-white">{p.title}</div>
                  <div className="text-[14.5px] text-white/55">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
          <TextLink href="/features" className="mt-8">See dictation features</TextLink>
        </div>
        <div data-reveal="list" className="grid gap-4">
          <PolishMock />
          <DictionaryMock />
        </div>
      </div>
    </Section>
  );
}

/* ---------- 7. Privacy ---------- */

export function PrivacyBand() {
  const items = [
    { icon: HardDrive, title: "Recorded and transcribed on your Mac", body: "Audio and transcripts are saved in your Library folder, not on a server." },
    { icon: UserX, title: "No account, no tracking", body: "No sign-up, no analytics, no ads. The App Store lists it as Data Not Collected." },
    { icon: WifiOff, title: "Works with Wi-Fi off", body: "Transcription and the built-in AI run offline. Cloud AI only runs when you choose it." },
    { icon: Lock, title: "Keys in your Keychain", body: "API keys and calendar sign-ins are stored by macOS, never in a file." },
  ];
  return (
    <Section id="privacy">
      <div className="max-w-[720px]">
        <H2>Your meetings stay on your Mac</H2>
        <Lede>Recording, speaker detection and transcription never leave the machine. You decide whether any AI outside it ever sees a transcript.</Lede>
      </div>
      <div data-reveal="list" className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="border-t border-white/[0.12] pt-6">
            <it.icon className="h-5 w-5 text-emerald-400" />
            <div className="mt-4 text-[16px] font-semibold text-white leading-snug">{it.title}</div>
            <p className="mt-2 text-[14px] leading-[1.55] text-white/55">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 8. Pricing ---------- */

const BASE_FEATURES = [
  "Dictation in any app with Fn",
  `Live preview in ${FACTS.languages} languages`,
  "Every speech engine, best model by default",
  "Personal dictionary and history",
  "File transcription",
];
const PRO_FEATURES = [
  "Everything in Base",
  "Meeting notes with named speakers",
  "Meeting detection and auto-record",
  "Google Calendar and Outlook sync",
  "AI notes, action items and Ask AI",
  "Use your Claude, ChatGPT or Gemini plan",
  "MCP server for Claude, Cursor and more",
];

export function PricingSection({ id = "pricing", asPage = false }: { id?: string; asPage?: boolean }) {
  return (
    <Section id={id}>
      <div className="text-center">
        {asPage ? (
          <h1 data-enter className="mx-auto max-w-[760px] text-[40px] sm:text-[56px] lg:text-[64px] font-semibold leading-[1.02] tracking-[-0.04em] text-white text-balance">Pay once. Keep it.</h1>
        ) : (
          <H2 className="mx-auto max-w-[760px]">Pay once. Keep it.</H2>
        )}
        <Lede className="mx-auto">No subscription, no account, no minute limits. Buy Whisperer on the Mac App Store and add Pro inside the app.</Lede>
      </div>
      <div data-reveal="list" className="mx-auto mt-12 grid max-w-[920px] gap-5 md:grid-cols-2">
        <div className="rounded-[24px] bg-[#101024] ring-1 ring-white/[0.08] p-8">
          <div className="text-[15px] font-semibold text-white">Whisperer</div>
          <div className="mt-1 text-[14px] text-white/50">Dictation</div>
          <div className="mt-6 flex items-baseline gap-2"><span className="text-[48px] font-semibold tracking-tight text-white">{PRICE_BASE}</span><span className="text-white/45">once</span></div>
          <ul className="mt-7 space-y-3">
            {BASE_FEATURES.map((f) => <li key={f} className="flex gap-3 text-[14.5px] text-white/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />{f}</li>)}
          </ul>
          <AppStoreButton className="mt-8 w-full" label="Get Whisperer" />
        </div>
        <div className="relative rounded-[24px] bg-[linear-gradient(180deg,#1B1E52_0%,#121232_100%)] ring-1 ring-[#5B6CF7]/50 p-8 shadow-[0_30px_90px_-30px_rgba(91,108,247,0.6)]">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-semibold text-white">Whisperer Pro</div>
            <span className="rounded-full bg-[#5B6CF7]/25 px-2.5 py-1 text-[12px] font-medium text-[#B9C1FF]">Everything</span>
          </div>
          <div className="mt-1 text-[14px] text-white/55">Meetings, your AI and MCP</div>
          <div className="mt-6 flex items-baseline gap-2"><span className="text-[48px] font-semibold tracking-tight text-white">{PRICE_PRO}</span><span className="text-white/50">once</span></div>
          <ul className="mt-7 space-y-3">
            {PRO_FEATURES.map((f) => <li key={f} className="flex gap-3 text-[14.5px] text-white/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9BA6FF]" />{f}</li>)}
          </ul>
          <AppStoreButton className="mt-8 w-full" label="Get Whisperer Pro" />
        </div>
      </div>
      <p className="mt-6 text-center text-[13px] text-white/40">
        Pro is an in-app purchase. Requires a Mac with {FACTS.chip} and {FACTS.minMacOS}. <Link href="/pricing" className="underline underline-offset-4 hover:text-white">Compare plans</Link>
      </p>
    </Section>
  );
}

/* ---------- Teams band ---------- */

export function TeamsBand() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Link
          data-reveal="frame"
          href="/enterprise"
          className="group grid items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#1B1E52_0%,#121232_55%,#0F1A2E_100%)] ring-1 ring-white/[0.09] p-8 sm:p-12 transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#5B6CF7]/50 md:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-white text-balance">Meeting notes for your whole company, paid once per Mac</h2>
            <p className="mt-4 max-w-[560px] text-[16.5px] leading-[1.55] text-white/60">No per-seat subscription, no bot in customer calls, and notes written with the AI accounts your company already has.</p>
            <span className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#B9C1FF] group-hover:text-white">See Whisperer for teams <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
          <div className="rounded-[20px] bg-black/25 ring-1 ring-white/[0.06] p-6">
            <div className="text-[13.5px] text-white/50">250 employees, 3 years</div>
            <div className="mt-4 space-y-2.5 text-[15px]">
              <div className="flex justify-between text-white/60"><span>Granola Business</span><span className="tabular-nums">$126,000</span></div>
              <div className="flex justify-between text-white/60"><span>Otter Business</span><span className="tabular-nums">$179,910</span></div>
              <div className="flex justify-between border-t border-white/[0.08] pt-2.5 font-semibold text-white"><span>Whisperer with Pro</span><span className="tabular-nums">$4,495</span></div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ---------- 9. Close ---------- */

export function CloseSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.35),transparent)]" />
      <div className="relative mx-auto max-w-[820px] px-4 text-center">
        <h2 data-reveal className="text-[40px] sm:text-[56px] font-semibold leading-[1.02] tracking-[-0.04em] text-white text-balance">Your next meeting writes its own notes</h2>
        <p data-reveal data-rd="90" className="mx-auto mt-5 max-w-[520px] text-[18px] text-white/60">{PRICE_BASE} app, Pro {PRICE_PRO}, paid once. Runs on your Mac with the AI you already have.</p>
        <div data-reveal data-rd="180" className="mt-9 flex justify-center"><AppStoreButton /></div>
      </div>
    </section>
  );
}

export function CostFootnote() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-10 text-[13px] leading-relaxed text-white/35">
      <sup>1</sup> Public prices for one seat checked in November 2026, using annual billing where it is offered. Granola
      Business is billed monthly only. Whisperer is the {PRICE_BASE} app plus the {PRICE_PRO} Pro purchase, both one-time.
    </div>
  );
}
