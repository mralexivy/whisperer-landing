import { Metadata } from "next";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { WhyWhispererContent } from "./WhyWhispererContent";

export const metadata: Metadata = {
  title: "Why Whisperer — Best Offline Dictation App for Mac vs ChatGPT, Superwhisper, Wispr Flow",
  description:
    "See why Whisperer is the best offline dictation app for Mac. Works across every app, 100+ languages, AI post-processing, transcription history, Code Mode for developers. $14.99 lifetime vs $249 Superwhisper or $15/mo Wispr Flow.",
  keywords: [
    "why whisperer",
    "best dictation app mac",
    "offline dictation mac",
    "voice to text mac",
    "whisperer vs superwhisper",
    "whisperer vs wispr flow",
    "chatgpt voice alternative",
    "claude voice mode alternative",
    "apple dictation alternative",
    "dictation app comparison mac",
    "offline voice to text",
    "private dictation app",
    "cross-app dictation mac",
    "dictation for developers",
    "voice coding mac",
    "dictation no subscription",
    "lifetime dictation app",
    "dictation works in every app",
    "system-wide dictation mac",
    "AI dictation offline",
    "transcription history mac",
    "per-app dictation profiles",
    "dictation statistics",
    "hold to talk dictation",
    "speak once paste everywhere",
    "alt v transcription reuse",
  ].join(", "),
  openGraph: {
    title: "Why Whisperer — Best Offline Dictation App for Mac",
    description:
      "Works across every app, runs offline, supports 100+ languages. $14.99 lifetime. See how Whisperer compares to ChatGPT Voice, Superwhisper, Wispr Flow, and Apple Dictation.",
    type: "website",
    images: [{ url: "/assets/og/og-why-whisperer.png", width: 1200, height: 630, alt: "Why Whisperer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Whisperer — Best Offline Dictation App for Mac",
    description:
      "Works across every app, runs offline, 100+ languages. $14.99 lifetime vs $249 Superwhisper or $15/mo Wispr Flow.",
    images: ["/assets/og/og-why-whisperer.png"],
  },
  alternates: {
    canonical: "/why-whisperer",
  },
};

const whyWhispererFaqs = [
  {
    question: "Why should I use Whisperer instead of ChatGPT Voice or Claude Voice Mode?",
    answer:
      "ChatGPT Voice and Claude Voice Mode only work inside their own apps and require an internet connection. Whisperer works in every app on your Mac — VS Code, Slack, Chrome, Terminal, and more — and runs 100% offline. It also includes transcription history, usage statistics, and Code Mode for developers, which neither ChatGPT nor Claude offer.",
  },
  {
    question: "How is Whisperer different from Apple Dictation?",
    answer:
      "Apple Dictation has no transcription history, no usage statistics, no Code Mode, and no AI post-processing. Whisperer saves every transcription with search and reuse (Alt+V), tracks your WPM and time saved, offers Code Mode for camelCase and symbols, and includes 10 AI writing modes — all offline.",
  },
  {
    question: "Is Whisperer cheaper than Superwhisper and Wispr Flow?",
    answer:
      "Yes. Whisperer Pro Pack costs $14.99 one-time (lifetime). Superwhisper costs $249 lifetime or $8.49/month. Wispr Flow costs $15/month with no lifetime option. Over 3 years, Whisperer costs $14.99 total while Wispr Flow costs $540 and Superwhisper costs $249-$306.",
  },
  {
    question: "Does Whisperer work offline?",
    answer:
      "Yes. Whisperer is 100% offline. Transcription runs on-device using three engines: Whisper (Metal GPU), NVIDIA (Neural Engine), and Apple Speech. No internet connection needed, no data leaves your Mac, no cloud API charges.",
  },
  {
    question: "Can I use Whisperer in VS Code, Cursor, and Terminal?",
    answer:
      "Yes. Whisperer works in any app on your Mac via system-wide text insertion. It includes Code Mode for developers that supports camelCase, snake_case, PascalCase, CONSTANT_CASE, and 20+ symbol commands. Per-app profiles automatically switch between code style, chat style, and email style.",
  },
  {
    question: "What is the Alt+V transcription reuse feature?",
    answer:
      "Every transcription is saved automatically. Press Alt+V to open a list of recent transcriptions, cycle through them, and paste any of them into the current app. This lets you speak once and paste the same text into multiple apps without re-dictating.",
  },
];

export default function WhyWhispererPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Why Whisperer", url: "/why-whisperer" },
      ])} />
      <JsonLd data={faqSchema(whyWhispererFaqs)} />
      <WhyWhispererContent />
    </>
  );
}
