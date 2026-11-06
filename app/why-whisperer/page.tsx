import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { ProviderList } from "@/components/product/ProviderList";
import { MCPChat } from "@/components/product/MCPChat";
import { DictationDemo } from "@/components/product/DictationDemo";
import { BrandIcon, type Brand } from "@/components/product/primitives";
import { PageShell, PageHero, Split, Bullets, PointGrid, PriceTable, PRICE_SOURCE, Prose, Related, Close } from "@/components/landing/PageKit";
import { Section, H2, Lede, TextLink, GhostButton, AppStoreButton } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Why Whisperer: Meeting Notes, Your Own AI and Dictation on Your Mac" },
  description:
    "Why people pick Whisperer: meeting notes with named speakers and no bot, notes written by your Claude, ChatGPT or Gemini plan or offline on your Mac, a built-in MCP server, dictation in 97 languages, and a one-time price of $2.99 plus $14.99 for Pro.",
  keywords:
    "why whisperer, whisperer app, meeting notes mac no subscription, granola alternative mac, otter alternative mac, wispr flow alternative, superwhisper alternative, private meeting notes mac",
  openGraph: {
    title: "Why Whisperer",
    description: "Meeting notes and dictation that run on your Mac, with the AI you already have. Pay once.",
    type: "website",
    url: "https://whispererapp.com/why-whisperer",
    images: [{ url: "/assets/og/og-why-whisperer.png", width: 1200, height: 630, alt: "Why Whisperer" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-why-whisperer.png"] },
  alternates: { canonical: "https://whispererapp.com/why-whisperer" },
};

const FAQ = [
  {
    question: "How is Whisperer different from Granola or Otter?",
    answer:
      "Whisperer records and transcribes on your Mac, with no bot in the call, and you pay once instead of monthly. Notes can be written by a model on your Mac or by the Claude, ChatGPT or Gemini plan you already have. Granola and Otter run in the cloud and have team features such as shared notes, which Whisperer does not.",
  },
  {
    question: "How is Whisperer different from Wispr Flow or Superwhisper?",
    answer:
      "All three do dictation. Whisperer is $2.99 once for it and runs every engine on your Mac. It also takes meeting notes with Pro, which Wispr Flow does not. Wispr Flow runs on more platforms; Whisperer is Mac only.",
  },
  {
    question: "Why not use ChatGPT or Claude voice mode?",
    answer:
      "Voice modes live inside their own apps. Whisperer works in any app you type in, records your meetings, and can hand those meetings to Claude or ChatGPT through its MCP server so they can answer questions about them.",
  },
  {
    question: "Does Whisperer work offline?",
    answer:
      "Dictation, meeting recording, transcription and speaker detection all run on your Mac. Notes can be written offline by the built-in Qwen3.5 4B model. A cloud AI is used only if you choose one, and then only the text goes to it.",
  },
  {
    question: "What does it cost?",
    answer:
      "$2.99 once for the app, which includes dictation. Pro is $14.99 once and adds meetings, calendar, AI notes, your own AI and MCP. No subscription, no account, no minute limits.",
  },
];

const CALL_APPS: Brand[] = ["zoom", "teams", "google-meet", "slack", "webex"];

export default function WhyWhispererPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Why Whisperer", url: "/why-whisperer" },
      ])} />

      <PageHero
        crumbs={[{ label: "Why Whisperer" }]}
        title="Notes for every meeting, written on your terms"
        lede="Whisperer takes notes in your calls without a bot, writes them with the AI you choose, hands them to Claude and Cursor over MCP, and does dictation in any app. It runs on your Mac and you pay once."
        actions={<><AppStoreButton label="Get Whisperer" /><GhostButton href="#price">See what it costs</GhostButton></>}
        note={<>{PRICE_BASE} app, Pro {PRICE_PRO}, both once. {FACTS.chip}, {FACTS.minMacOS}.</>}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <MeetingStudio />
        </div>
      </section>

      <Split
        title="Meeting notes without a bot in the call"
        lede="Whisperer notices when Zoom, Teams or Meet opens your microphone and offers to take notes, or records on its own for meetings on your calendar. Nobody else in the call sees a thing."
        visual={
          <div className="rounded-[20px] bg-[#101024] ring-1 ring-white/[0.07] p-6">
            <div className="flex flex-wrap items-center gap-4">
              {CALL_APPS.map((b) => <BrandIcon key={b} brand={b} size={28} />)}
              <span className="text-[13px] text-white/50">and FaceTime, plus browser calls</span>
            </div>
            <Bullets
              className="mt-6"
              items={[
                "Records the call audio and your microphone, so both sides are captured with speakers or headphones.",
                "Speakers told apart on your Mac and named from the invite in one click.",
                "Title, overview, decisions, action items with owners and open questions when the call ends.",
                "Ask a question about any meeting and get the answer with timestamps.",
              ]}
            />
          </div>
        }
      >
        <TextLink href="/meetings">See meeting notes</TextLink>
      </Split>

      <Split
        flip
        title="The AI you already pay for"
        lede={`Sign in with your Claude, ChatGPT or Gemini plan and Whisperer uses it for notes and answers, with no extra bill. No plan? ${FACTS.localModel} writes them on your Mac, offline and free.`}
        visual={<ProviderList sidebar={false} />}
      >
        <TextLink href="/ai">See every AI you can connect</TextLink>
      </Split>

      <Split
        title="Ask Claude about last week's meetings"
        lede="A built-in MCP server lets Claude, ChatGPT, Cursor, Codex and VS Code search your meetings and dictations, read summaries and transcripts, and add their own notes. It is off until you turn it on, and only apps on your Mac can reach it."
        visual={<MCPChat />}
      >
        <TextLink href="/mcp">See the MCP tools</TextLink>
      </Split>

      <Split
        flip
        title="Dictation in any app"
        lede={`Hold Fn, speak, paste with ⌘V. Live preview in ${FACTS.languages} languages, four offline engines, and a dictionary that learns your words from your corrections.`}
        visual={<DictationDemo />}
      >
        <TextLink href="/features">See dictation features</TextLink>
      </Split>

      <PointGrid
        id="privacy"
        title="Your meetings stay on your Mac"
        lede="Recording, speaker detection and transcription never leave the machine. You decide whether a cloud AI ever sees a transcript."
        items={[
          { title: "Audio never leaves", body: "Only text goes to a cloud AI, and only if you picked one. Any meeting can be kept local." },
          { title: "No account, no tracking", body: "No sign-up, no analytics. The App Store lists Data Not Collected." },
          { title: "Keys in your Keychain", body: "API keys and calendar sign-ins are stored by macOS." },
          { title: "Your files, your folder", body: "Everything lives in ~/Library/Application Support/Whisperer." },
        ]}
      />

      <Section id="price">
        <div className="max-w-[760px]">
          <H2>One price, paid once</H2>
          <Lede>What one person pays in the first year.</Lede>
        </div>
        <div className="mt-12">
          <PriceTable
            rows={[
              { name: "Whisperer with Pro", price: "$17.98", billing: "Once", note: "Meetings, your AI, MCP and dictation", ours: true },
              { name: "Granola Business", price: "$168", billing: "Monthly only, $14", note: "Has team sharing" },
              { name: "Fireflies Pro", price: "$120", billing: "Yearly, $10 a month", note: "Cloud transcription" },
              { name: "Otter Pro", price: "$100", billing: "Yearly, $8.33 a month", note: "Cloud transcription" },
              { name: "Wispr Flow Pro", price: "$144", billing: "Yearly, $12 a month", note: "Dictation only, more platforms" },
              { name: "Superwhisper Pro", price: "$84.99", billing: "Yearly, or $249.99 lifetime", note: "Dictation" },
            ]}
            caption={PRICE_SOURCE}
          />
        </div>
      </Section>

      <Prose title="Where Whisperer is not the right fit">
        <p>
          If your team needs shared notes in a web workspace, Granola or Otter will suit you better. If you dictate on Windows
          or your phone as much as your Mac, look at Wispr Flow. Whisperer is a Mac app for one person, and it needs Apple
          Silicon and {FACTS.minMacOS}.
        </p>
      </Prose>

      <FAQSection items={FAQ} title="Questions about Whisperer" />
      <Related
        links={[
          { title: "Whisperer vs Granola", href: "/compare/vs-granola" },
          { title: "Whisperer vs Otter.ai", href: "/compare/vs-otter" },
          { title: "Whisperer vs Wispr Flow", href: "/compare/vs-wispr-flow" },
          { title: "All comparisons", href: "/compare" },
        ]}
      />
      <Close title="Your next meeting writes its own notes" />
    </PageShell>
  );
}
