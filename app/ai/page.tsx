import type { Metadata } from "next";
import { Monitor, KeyRound, FileText, MessageSquareText, Wand2, ShieldCheck, ToggleLeft, RotateCcw } from "lucide-react";
import { SiteHeader, SiteFooter, Section } from "@/components/site/Shell";
import { ProviderList } from "@/components/product/ProviderList";
import { Showcase, PageHero, SectionHead, FeatureRow, CheckList } from "@/components/site/PageParts";
import { BrandIcon, BrandTile, type Brand } from "@/components/product/primitives";
import { FAQSection, type QA } from "@/components/home/HomeFAQ";
import { CostCard, CloseSection, CostFootnote } from "@/components/home/Sections";
import { PRICE_PRO, FACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Use Your Own AI for Meeting Notes: Claude, ChatGPT, Gemini",
  description:
    "Whisperer writes meeting notes with the AI you already pay for: your Claude, ChatGPT or Gemini plan, an API key, or a free built-in model that runs offline on your Mac.",
  alternates: { canonical: "https://whispererapp.com/ai" },
  openGraph: {
    title: "Meeting notes by the AI you already pay for",
    description: "Claude, ChatGPT, Gemini, an API key, or a free offline model on your Mac. No extra subscription.",
    url: "https://whispererapp.com/ai",
    images: [{ url: "/assets/og/og-ai.png", width: 1200, height: 630, alt: "Choose your AI in Whisperer" }],
  },
};

const PLANS: { brand: Brand; name: string; plan: string }[] = [
  { brand: "claude", name: "Claude", plan: "Pro or Max plan" },
  { brand: "openai", name: "ChatGPT", plan: "Plus or Pro plan" },
  { brand: "codex", name: "Codex", plan: "ChatGPT plan" },
  { brand: "gemini", name: "Gemini", plan: "Google AI Pro or Ultra" },
];

const FAQ: QA[] = [
  {
    question: "Does using my ChatGPT or Claude plan cost extra?",
    answer:
      "No. Whisperer signs in with the plan you already have, and the notes count against that plan's normal usage, like any chat you start yourself. Whisperer adds no fee on top.",
  },
  {
    question: "What does the built-in model need?",
    answer: `It is ${FACTS.localModel}, about 3.2 GB, and it downloads the first time you use it. It runs on the Apple Silicon GPU, works with Wi-Fi off and costs nothing to use.`,
  },
  {
    question: "What is sent to a cloud AI?",
    answer:
      "Only the text transcript of the meeting you are summarising or asking about. Audio never leaves your Mac. You can mark any meeting to stay local, and Whisperer asks for your consent the first time you pick each provider.",
  },
  {
    question: "What happens if my AI is down or I'm offline?",
    answer: "Whisperer falls back to the built-in model and tells you it did. You can regenerate the notes with your chosen AI later.",
  },
  {
    question: "Where are my API keys kept?",
    answer: "In the macOS Keychain on your Mac. They are used only for requests you make and are never written to a file or sent anywhere else.",
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-[#0B0B19]">
      <SiteHeader />
      <main>
        <PageHero
          crumbs={[{ name: "Your own AI", href: "/ai" }]}
          title="Meeting notes written by the AI you already pay for"
          lede="Sign in with Claude, ChatGPT or Gemini and Whisperer uses your plan for notes, answers and transcript polish. No plan? A free model on your Mac does it offline."
          secondary={{ href: "/meetings", label: "See meeting notes" }}
          facts={["No extra subscription", "Offline fallback", `Pro ${PRICE_PRO} once`]}
          visual={<ProviderList />}
        />

        <Section id="choices">
          <SectionHead title="One list of AI choices" lede="The LLM page in Whisperer shows every option in one place. Pick one, and the Mac takes over whenever it is unavailable." />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[22px] bg-[#101024] ring-1 ring-white/[0.07] p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-sky-500/15"><Monitor className="h-5 w-5 text-sky-400" /></span>
              <h3 className="mt-5 text-[19px] font-semibold text-white">On this Mac</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">{FACTS.localModel} runs on your Mac&apos;s GPU. Private, offline and free. This is the default.</p>
            </div>
            <div className="rounded-[22px] bg-[#101024] ring-1 ring-[#5B6CF7]/40 p-7">
              <div className="flex -space-x-1.5">{PLANS.map((p) => <BrandTile key={p.brand} brand={p.brand} size={44} className="ring-2 ring-[#101024]" />)}</div>
              <h3 className="mt-5 text-[19px] font-semibold text-white">Your AI subscription</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">Sign in once. Usage counts against the plan you already pay for, with no extra bill.</p>
              <ul className="mt-5 space-y-2">
                {PLANS.map((p) => (
                  <li key={p.name} className="flex items-center gap-2.5 text-[14px] text-white/80"><BrandIcon brand={p.brand} size={16} /> {p.name} <span className="text-white/40">· {p.plan}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] bg-[#101024] ring-1 ring-white/[0.07] p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-amber-500/15"><KeyRound className="h-5 w-5 text-amber-400" /></span>
              <h3 className="mt-5 text-[19px] font-semibold text-white">An API key</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">Paste an OpenAI, Anthropic or Gemini key. It is kept in your Keychain and billed by the provider.</p>
              <div className="mt-5 flex gap-2">{(["openai", "anthropic", "gemini"] as Brand[]).map((b) => <BrandTile key={b} brand={b} size={38} />)}</div>
            </div>
          </div>
        </Section>

        <Showcase
          id="switch"
          title="Switch the AI in one click"
          lede="Pick Claude today and Gemini tomorrow. The next meeting is written by whatever you chose, and if it is unavailable, the model on your Mac takes over."
          video="ai-loop"
          alt="The LLM page in Whisperer: choosing Claude, then ChatGPT, then Gemini to write meeting notes"
        />

        <Section id="cost">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHead
              title="No second subscription for notes"
              lede="Meeting tools charge every month for an AI you may already have. Whisperer is paid once and uses your plan, or its own model for free."
            />
            <CostCard className="max-w-none p-7" />
          </div>
        </Section>

        <Section id="uses">
          <SectionHead title="Three jobs your AI takes on" />
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {[
              { icon: FileText, title: "Writes the notes", body: "Title, overview, topics, decisions, action items and open questions after every meeting." },
              { icon: MessageSquareText, title: "Answers questions", body: "Ask AI replies from the transcript and shows the moments it used." },
              { icon: Wand2, title: "Polishes transcripts", body: "Takes out fillers and false starts. The original is kept, and one click undoes it." },
            ].map((c) => (
              <div key={c.title} className="border-t border-white/[0.12] pt-6">
                <c.icon className="h-5 w-5 text-[#9BA6FF]" />
                <div className="mt-4 text-[16.5px] font-semibold text-white">{c.title}</div>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <FeatureRow
          id="control"
          title="Audio never leaves your Mac"
          lede="Recording, transcription and speaker detection always run locally. A cloud AI only ever sees text, only for the meetings you allow, and only after you say yes."
          visual={
            <div className="grid gap-3">
              {[
                { icon: ShieldCheck, t: "Consent per provider", b: "Whisperer asks before it sends anything to a new AI." },
                { icon: ToggleLeft, t: "Keep this meeting local", b: "One switch keeps a sensitive call on the built-in model." },
                { icon: RotateCcw, t: "Regenerate with another AI", b: "Rewrite any summary with a different provider and compare." },
              ].map((r) => (
                <div key={r.t} className="flex gap-4 rounded-[18px] bg-[#101024] ring-1 ring-white/[0.07] p-5">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <div className="text-[15.5px] font-semibold text-white">{r.t}</div>
                    <div className="text-[14px] text-white/55">{r.b}</div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <CheckList items={["Labels show which AI wrote each summary and answer", "Falls back to the Mac when you are offline", "Dictation polish always runs on your Mac"]} />
        </FeatureRow>

        <FAQSection items={FAQ} title="Questions about your own AI" />
        <CloseSection />
        <CostFootnote />
      </main>
      <SiteFooter />
    </div>
  );
}
