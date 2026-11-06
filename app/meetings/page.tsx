import type { Metadata } from "next";
import { Play, Search, Archive, PanelTopOpen, PauseCircle, ShieldCheck, Languages, Sparkles, Flag, CheckCircle2, CircleHelp, CalendarClock, ListTree } from "lucide-react";
import { SiteHeader, SiteFooter, Section, TextLink } from "@/components/site/Shell";
import { PageHero, FeatureRow, Steps, SectionHead, CheckList } from "@/components/site/PageParts";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { IslandBar, CallDetectedCard } from "@/components/product/Island";
import { AppWindow, BrandIcon } from "@/components/product/primitives";
import { SPEAKERS, SEGMENTS, ASK, MEETING } from "@/components/product/demo-data";
import { FAQSection, type QA } from "@/components/home/HomeFAQ";
import { CloseSection } from "@/components/home/Sections";
import { PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Meeting Notes for Mac: No Bot, No Subscription",
  description:
    "Record Zoom, Teams, Meet and Slack calls on your Mac. Whisperer names every speaker and writes summaries, decisions and action items with your own AI or an offline model.",
  alternates: { canonical: "https://whispererapp.com/meetings" },
  openGraph: {
    title: "AI meeting notes for Mac, recorded on your Mac",
    description: "Detects the call, names every speaker, writes the notes. No bot joins. Pay once.",
    url: "https://whispererapp.com/meetings",
    images: [{ url: "/assets/og/og-meetings.png", width: 1200, height: 630, alt: "Whisperer meeting notes" }],
  },
};

const FAQ: QA[] = [
  {
    question: "Do the other people in the call see a bot?",
    answer:
      "No. Whisperer never joins the meeting. It records on your Mac, so nothing appears in the participant list. Where the law asks for consent, telling people is your job; Whisperer reminds you once before your first recording.",
  },
  {
    question: "Does it record the other side of the call if I wear headphones?",
    answer:
      "Yes. Whisperer records the call audio coming into your Mac together with your microphone, so everyone is in the transcript whether you use AirPods, a headset or speakers.",
  },
  {
    question: "How does it know who is speaking?",
    answer:
      "A speaker model on your Mac separates the voices and numbers them in the order they first talk. If the meeting is on your connected calendar, you can name them from the invite in one click, and the names stick to that recording.",
  },
  {
    question: "Which AI writes the notes?",
    answer:
      "The one you pick on the LLM page. By default that is the built-in model, which runs offline on your Mac. You can switch to your Claude, ChatGPT or Gemini plan, or an API key, and keep any single meeting local.",
  },
  {
    question: "How long can a meeting be?",
    answer:
      "There is no minute limit and no monthly cap. Long meetings are summarised in parts and then combined, so a two-hour call gets the same notes as a short one.",
  },
  {
    question: "Where are recordings stored, and for how long?",
    answer:
      "In Whisperer's folder in your Mac's Library. You choose how long audio is kept: forever, 365, 90, 30 or 7 days. Transcripts and notes stay until you delete them.",
  },
  {
    question: "Is it included in the base app?",
    answer: `Meetings are part of Whisperer Pro, a ${PRICE_PRO} one-time in-app purchase on top of the ${PRICE_BASE} app. There is no subscription.`,
  },
];

function NotesAnatomy() {
  const parts = [
    { icon: Sparkles, color: "text-[#9BA6FF]", label: "Overview", body: "Three or four sentences on what the call was about." },
    { icon: ListTree, color: "text-fuchsia-400", label: "Key topics", body: "An outline with the minute each topic came up." },
    { icon: Flag, color: "text-emerald-400", label: "Decisions", body: "What was agreed, linked to the moment it was said." },
    { icon: CheckCircle2, color: "text-sky-400", label: "Action items", body: "Who does what, by when." },
    { icon: CircleHelp, color: "text-amber-400", label: "Open questions", body: "What is still undecided." },
    { icon: CalendarClock, color: "text-rose-400", label: "Next meeting", body: "When the group said it would meet again." },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {parts.map((p) => (
        <div key={p.label} className="rounded-[16px] bg-[#101024] ring-1 ring-white/[0.07] p-5 transition-all hover:-translate-y-0.5 hover:ring-white/[0.14]">
          <p.icon className={`h-5 w-5 ${p.color}`} />
          <div className="mt-3 text-[15.5px] font-semibold text-white">{p.label}</div>
          <div className="mt-1 text-[14px] leading-snug text-white/55">{p.body}</div>
        </div>
      ))}
    </div>
  );
}

function SpeakersVisual() {
  return (
    <AppWindow bodyClassName="p-6 space-y-3">
      {SEGMENTS.map((s) => (
        <div key={s.t} className="flex gap-3">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
            style={{ background: `color-mix(in srgb, ${SPEAKERS[s.speaker].color} 35%, #0C0C1A)` }}
          >
            {SPEAKERS[s.speaker].initials}
          </span>
          <div className="min-w-0">
            <div className="text-[12.5px] font-semibold" style={{ color: SPEAKERS[s.speaker].color }}>
              {SPEAKERS[s.speaker].name} <span className="ml-1 font-normal text-white/30 tabular-nums">{s.t}</span>
            </div>
            <div className="text-[14px] leading-snug text-white/80">{s.text}</div>
          </div>
        </div>
      ))}
    </AppWindow>
  );
}

function AskVisual() {
  return (
    <AppWindow bodyClassName="p-6">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D97757]/15 px-2.5 py-1 text-[12px] text-[#F0A285]">
        <BrandIcon brand="claude" size={12} /> Answers by Claude
      </span>
      <div className="mt-5 ml-10 rounded-[14px] bg-[#25255A] px-4 py-3 text-[14.5px] text-white">{ASK.question}</div>
      <div className="mt-5 flex gap-3">
        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#8B9BFF]" />
        <div>
          <p className="text-[14.5px] leading-[1.6] text-white/85">{ASK.answer}</p>
          <div className="mt-3 flex gap-2">
            {ASK.sources.map((s) => (
              <span key={s} className="rounded-full bg-[#5B6CF7]/15 px-2.5 py-1 text-[12px] text-[#B9C1FF] tabular-nums inline-flex items-center gap-1"><Play className="h-3 w-3 fill-current" />{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between rounded-[12px] bg-white/[0.04] px-4 py-3 text-[13px] text-white/35">
        Ask Claude about {MEETING.title}…
      </div>
    </AppWindow>
  );
}

function IslandVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[24px] ring-1 ring-white/[0.07] bg-[radial-gradient(100%_90%_at_50%_0%,#22265C_0%,#0D0D20_65%)]">
      <IslandBar className="absolute left-1/2 top-10 -translate-x-1/2" time="24:51" />
      <div className="absolute inset-x-8 bottom-8 rounded-[16px] bg-[#14142B]/90 ring-1 ring-white/10 p-4">
        <div className="flex items-center gap-2 text-[12px] text-white/50"><PauseCircle className="h-4 w-4 text-amber-400" /> Meeting paused while you dictate</div>
        <div className="mt-2 text-[14.5px] text-white">Sending the deck to Northwind now, give me two minutes.</div>
      </div>
    </div>
  );
}

export default function MeetingsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B19]">
      <SiteHeader />
      <main>
        <PageHero
          crumbs={[{ name: "Meeting notes", href: "/meetings" }]}
          title="AI meeting notes for Mac, recorded on your Mac"
          lede="Whisperer notices when a call starts, records both sides, names every speaker and writes the summary, decisions and action items the moment it ends. No bot joins the call."
          secondary={{ href: "/ai", label: "Choose your AI" }}
          facts={["No bot", "No minute limits", `Pro ${PRICE_PRO} once`]}
          visual={
            <div className="relative">
              <MeetingStudio compact />
              <CallDetectedCard className="hidden xl:block absolute -left-8 -bottom-8 z-10" title="Mobile launch review · take notes?" />
            </div>
          }
        />

        <Section id="how">
          <SectionHead title="From the first word to finished notes" lede="You keep your call app. Whisperer works next to it." />
          <div className="mt-12">
            <Steps
              items={[
                { title: "Your call starts", body: "Whisperer sees Zoom, Teams, Meet or Slack open the microphone and asks if it should take notes." },
                { title: "It records both sides", body: "Your voice and the call audio go into one recording, saved on your Mac." },
                { title: "Words appear live", body: "The transcript streams in while you talk, with each speaker on their own line." },
                { title: "Notes when it ends", body: "Stop the recording and the overview, decisions and action items are ready in seconds." },
              ]}
            />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[14px] text-white/55">
            Works with
            {(["zoom", "teams", "google-meet", "slack", "webex"] as const).map((b) => (
              <span key={b} className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-white/80"><BrandIcon brand={b} size={15} />{b === "google-meet" ? "Google Meet" : b === "teams" ? "Teams" : b[0].toUpperCase() + b.slice(1)}</span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-white/80">FaceTime</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-white/80">Browser calls</span>
          </div>
        </Section>

        <FeatureRow
          id="speakers"
          title="Every voice gets a name"
          lede="A speaker model on your Mac tells the voices apart. Names come from the calendar invite, so the transcript reads like minutes, not a wall of text."
          visual={<SpeakersVisual />}
        >
          <CheckList items={["Speakers numbered in the order they first talk", "One click names them from the invite", "Filter the transcript to one person"]} />
        </FeatureRow>

        <Section id="notes">
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHead
              title="Six parts, written for you"
              lede="Each meeting gets the same structure, so you can scan last week's calls in a minute. Notes are written in the language the meeting was held in."
            />
            <NotesAnatomy />
          </div>
        </Section>

        <FeatureRow
          id="ask"
          flip
          title="Ask a meeting anything"
          lede="Type a question and get an answer from the transcript, with the moments it came from. Click a source to hear that part of the call."
          visual={<AskVisual />}
        >
          <TextLink href="/ai">Pick the AI that answers</TextLink>
        </FeatureRow>

        <Section id="library">
          <SectionHead title="Every call, searchable" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, title: "Search every word", body: "Find the call where pricing came up and jump to the second it was said." },
              { icon: Languages, title: "Any of 97 languages", body: "The language is detected for the whole meeting, then the notes follow it." },
              { icon: Archive, title: "Audio you control", body: "Keep recordings forever or for 7 to 365 days. Transcripts stay until you delete them." },
              { icon: ShieldCheck, title: "Stays on your Mac", body: "Recording, transcripts and speaker detection never leave your Mac." },
            ].map((c) => (
              <div key={c.title} className="border-t border-white/[0.12] pt-6">
                <c.icon className="h-5 w-5 text-[#9BA6FF]" />
                <div className="mt-4 text-[16px] font-semibold text-white">{c.title}</div>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <FeatureRow
          id="island"
          title="A recording bar that stays out of the way"
          lede="While a meeting records, a small bar sits at the edge of your screen with pause, stop and open. Hold Fn to dictate a quick message and the meeting pauses, then carries on."
          visual={<IslandVisual />}
        >
          <CheckList items={[<span key="a"><PanelTopOpen className="mr-1.5 inline h-4 w-4 text-white/50" />Open Meeting Studio from the bar</span>, "Pause a private moment, then resume", "Dictation never mixes into the meeting"]} />
        </FeatureRow>

        <FAQSection items={FAQ} title="Meeting notes questions" />
        <CloseSection />
      </main>
      <SiteFooter />
    </div>
  );
}
