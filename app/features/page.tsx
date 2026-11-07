import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { Section, H2, Lede, GhostButton, AppStoreButton } from "@/components/site/Shell";
import { DictationDemo } from "@/components/product/DictationDemo";
import { Showcase } from "@/components/site/PageParts";
import { PageHero, PointGrid, Close } from "@/components/landing/PageKit";
import { FAQSection } from "@/components/home/HomeFAQ";
import { PRICE_BASE, FACTS } from "@/lib/site";
import { PillarCards, DictationCards } from "./FeaturesCards";

export const metadata: Metadata = {
  title: "Dictation for Mac: Live Preview, 97 Languages, Offline",
  description:
    "Hold Fn, speak, paste with ⌘V. Whisperer's dictation shows words as you talk, detects 97 languages, runs offline on your Mac and learns your words. $2.99 once. Pro adds meeting notes, calendar, your own AI and MCP.",
  keywords:
    "dictation app mac, offline dictation mac, voice to text mac, whisperer features, speech to text mac, mac dictation app features",
  openGraph: {
    title: "Whisperer dictation for Mac",
    description: "Hold Fn, speak, paste. Live preview in 97 languages, offline engines, a dictionary that learns. $2.99 once.",
    type: "website",
    url: "https://whispererapp.com/features",
    images: [{ url: "/assets/og/og-features.png", width: 1200, height: 630, alt: "Whisperer dictation features" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-features.png"] },
  alternates: { canonical: "https://whispererapp.com/features" },
};

const FAQ = [
  {
    question: "How does dictation work in Whisperer?",
    answer:
      "Hold Fn (or the shortcut you set), speak, and let go. Words show up in a small preview while you talk. When you release, the final text is copied and a Copied ⌘V toast appears, so you paste it into Slack, Mail, Notion or any text box with ⌘V.",
  },
  {
    question: "Which permissions does Whisperer need?",
    answer:
      "Only the microphone. The camera signal for meeting detection is optional and off by default.",
  },
  {
    question: "Does dictation work offline?",
    answer:
      "Yes. Every speech engine runs on your Mac: Whisper on the Metal GPU, Parakeet on the Neural Engine, Qwen3 ASR and WhisperKit, with Apple Speech for the live preview. Once a model is downloaded you can dictate with Wi-Fi off.",
  },
  {
    question: "What is the difference between Whisperer and Whisperer Pro?",
    answer:
      "Whisperer is $2.99 once and covers dictation: live preview, 97 languages, every engine, Fast Polish, the dictionary, file transcription and history. Pro is a $14.99 one-time in-app purchase that adds meeting notes, meeting detection, calendar sync, AI notes and Ask AI, your own AI and the MCP server.",
  },
  {
    question: "What Mac do I need?",
    answer: "A Mac with Apple Silicon (M1 or later) running macOS 26 Tahoe.",
  },
];

const MODES = [
  { title: "Hold to talk", body: "Hold Fn while you speak, let go to finish. The default, and the fastest for short messages." },
  { title: "Toggle", body: "Tap once to start, tap again to stop. Good for a long email you think through as you go." },
  { title: "Hands-free", body: "Start it and keep talking without holding anything down." },
  { title: "Your shortcut", body: "Fn is the default. Pick another key or combination if Fn is taken." },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation" }]}
        title="Hold Fn, talk, paste anywhere"
        lede={<>Speak into any text box on your Mac. Words appear while you talk, in any of {FACTS.languages} languages, and the finished text is ready to paste with ⌘V the moment you let go. It all runs on your Mac.</>}
        actions={<><AppStoreButton label="Get Whisperer" /><GhostButton href="#features">See dictation features</GhostButton></>}
        note={<>{PRICE_BASE} once. Needs only microphone access. {FACTS.chip}, {FACTS.minMacOS}.</>}
        visual={<DictationDemo />}
      />

      <Section id="pro">
        <div className="max-w-[760px]">
          <H2>Dictation is where it starts</H2>
          <Lede>The same app takes notes in your meetings, follows your calendar, writes with the AI you already pay for and talks to Claude and Cursor over MCP.</Lede>
        </div>
        <div className="mt-12"><PillarCards /></div>
      </Section>

      <Section id="features">
        <div className="max-w-[760px]">
          <H2>Everything in the {PRICE_BASE} app</H2>
          <Lede>Each page goes into how a feature works and what it is good for.</Lede>
        </div>
        <div className="mt-12"><DictationCards /></div>
      </Section>

      <Showcase
        id="watch"
        title="Three languages, no settings changed"
        lede="Hold Fn and talk in English, then Spanish, then Italian. Whisperer hears which one you are speaking and writes it, ready to paste."
        video="dictation-loop"
        alt="Holding Fn in Slack: words stream in English, Spanish and Italian, each pasted with Command V"
      />

      <PointGrid
        id="modes"
        title="Hold, toggle or hands-free"
        lede="Pick the one that fits the moment. You can change it any time in Settings."
        items={MODES}
      />

      <FAQSection items={FAQ} title="Dictation questions" />
      <Close title="Talk instead of type" body={<>Whisperer is {PRICE_BASE} once on the Mac App Store. Add Pro inside the app when you want meeting notes.</>} />
    </>
  );
}
