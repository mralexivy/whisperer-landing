import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { PolishMock } from "@/components/landing/DictationMockups";
import { ProviderList } from "@/components/product/ProviderList";
import { BrandIcon } from "@/components/product/primitives";
import { PageHero, PointGrid, Split, Bullets, Related, Close } from "@/components/landing/PageKit";
import { TextLink } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Cleanup for Dictation: Fast Polish and Your Own AI",
  description:
    "Fast Polish removes fillers and fixes punctuation and paragraphs in every dictation, on your Mac. For meeting notes, Ask AI and transcript polish, Whisperer uses Qwen3.5 4B offline or your own Claude, ChatGPT or Gemini plan.",
  keywords:
    "ai dictation cleanup, remove filler words dictation, dictation punctuation mac, ai post processing dictation, offline ai writing mac, local llm dictation",
  openGraph: {
    title: "Fast Polish and your own AI",
    description: "Clean dictation on your Mac, and notes written by the AI you choose.",
    type: "website",
    url: "https://whispererapp.com/features/ai-writing",
    images: [{ url: "/assets/og/og-feature-ai-writing.png", width: 1200, height: 630, alt: "Whisperer Fast Polish" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-ai-writing.png"] },
  alternates: { canonical: "https://whispererapp.com/features/ai-writing" },
};

const FAQ = [
  {
    question: "What does Fast Polish do?",
    answer:
      "It cleans each dictation before you paste it: removes fillers like um and uh, fixes repeated words, adds punctuation and capitals, and starts a new paragraph when you say so. It runs on your Mac in a fraction of a second and is part of the $2.99 app.",
  },
  {
    question: "Does Fast Polish need the internet?",
    answer: "No. Fast Polish runs on your Mac with no network connection.",
  },
  {
    question: "Which AI writes meeting notes?",
    answer:
      "The one you pick on the LLM page in Workspace. By default it is Qwen3.5 4B, a model that runs on your Mac offline (about a 3.2 GB download). You can switch to your Claude, ChatGPT, Codex or Gemini plan, or paste an OpenAI, Anthropic or Gemini API key. This is part of Pro.",
  },
  {
    question: "What happens if my chosen AI is unavailable?",
    answer:
      "The model on your Mac takes over, so notes still get written. If you hit a plan limit or lose your connection, you do not lose the meeting.",
  },
  {
    question: "Does my audio go to the AI provider?",
    answer:
      "No. Audio never leaves your Mac. If you choose a cloud AI, only the text transcript is sent to it, and you can keep any single meeting local.",
  },
];

const POLISH = [
  { title: "Fillers out", body: "Um, uh and false starts are dropped. Repeated words are fixed." },
  { title: "Punctuation in", body: "Commas, full stops, question marks and capitals, without saying them." },
  { title: "Paragraphs", body: "Say new paragraph and you get one. Long messages stay readable." },
  { title: "Your words", body: "Runs after your dictionary, so names stay spelled your way." },
  { title: "On your Mac", body: "No model download and no network. It is ready the first time you dictate." },
  { title: "In the base app", body: "Fast Polish is part of the $2.99 app, for every dictation." },
];

export default function AIWritingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "AI Writing", url: "/features/ai-writing" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: "Fast Polish and AI" }]}
        title="Say it messy, paste it clean"
        lede="Fast Polish tidies every dictation on your Mac before you paste it: fillers out, punctuation in, paragraphs where you asked. For meeting notes, Whisperer uses the AI you choose."
        visual={<PolishMock />}
      />

      <PointGrid title="Cleanup that runs in a blink" items={POLISH} />

      <Split
        flip
        title="Notes written by the AI you already have"
        lede={<>Meeting notes, Ask AI and transcript polish run on the AI you pick on one list. {FACTS.localModel} runs on your Mac for free and is the fallback. Or sign in with a plan you already pay for, so there is no extra bill.</>}
        visual={<ProviderList sidebar={false} />}
      >
        <div className="flex flex-wrap gap-2">
          {(["claude", "openai", "codex", "gemini"] as const).map((b) => (
            <span key={b} className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3.5 py-1.5 text-[13.5px] text-white/80">
              <BrandIcon brand={b} size={16} />
              {b === "claude" ? "Claude" : b === "openai" ? "ChatGPT" : b === "codex" ? "Codex" : "Gemini"}
            </span>
          ))}
        </div>
        <Bullets
          className="mt-6"
          items={[
            `On this Mac: ${FACTS.localModel}, about 3.2 GB, offline and free.`,
            "Your AI subscriptions: Claude Pro or Max, ChatGPT Plus or Pro, Codex, Google AI Pro or Ultra.",
            "API keys: OpenAI, Anthropic or Gemini, kept in your Keychain.",
            "Only text goes to a cloud AI. Audio stays on your Mac.",
          ]}
        />
        <p className="mt-6 text-[13px] text-white/40">Part of Pro, a {PRICE_PRO} one-time in-app purchase.</p>
        <TextLink href="/ai" className="mt-4">See every AI you can connect</TextLink>
      </Split>

      <FAQSection items={FAQ} title="Cleanup and AI questions" />
      <Related
        links={[
          { title: "Your own AI", body: "Claude, ChatGPT, Gemini or a model on your Mac.", href: "/ai" },
          { title: "Meeting notes", body: "Summaries, decisions and action items.", href: "/meetings" },
          { title: "Personal dictionary", body: "Spell names your way.", href: "/features/personal-dictionary" },
          { title: "All dictation features", href: "/features" },
        ]}
      />
      <Close title="Dictation that reads like you wrote it" />
    </>
  );
}
