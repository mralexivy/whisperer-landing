import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { AgentPromptDemo } from "@/components/product/AgentPromptDemo";
import { DictionaryMock } from "@/components/landing/DictationMockups";
import { MCPChat } from "@/components/product/MCPChat";
import { BrandTile, type Brand } from "@/components/product/primitives";
import { PageShell, PageHero, PointGrid, Split, Prose, Related, Close } from "@/components/landing/PageKit";
import { Steps } from "@/components/site/PageParts";
import { Section, H2, Lede, TextLink, GhostButton, AppStoreButton } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voice Coding on Mac: Talk to Cursor, Claude Code and Codex",
  description:
    "Voice coding on Mac in 2026: say what you want to Cursor, Claude Code, Codex or Windsurf instead of typing long prompts. Hold Fn, speak, paste with ⌘V. Offline, 97 languages, $2.99 once.",
  keywords:
    "voice coding mac, voice coding, code by voice, voice prompts cursor, dictation for claude code, voice coding RSI, voice coding vs typing, dictate prompts to AI agent, vibe coding voice",
  openGraph: {
    title: "Voice coding on Mac: talk to your coding agent",
    description: "Speak prompts to Cursor, Claude Code and Codex. Hold Fn, talk, paste. Offline on your Mac.",
    type: "website",
    url: "https://whispererapp.com/voice-coding",
    images: [{ url: "/assets/og/og-voice-coding.png", width: 1200, height: 630, alt: "Voice coding on Mac with Whisperer" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-voice-coding.png"] },
  alternates: { canonical: "https://whispererapp.com/voice-coding" },
};

const FAQ = [
  {
    question: "What is voice coding?",
    answer:
      "Writing software by talking instead of typing. It used to mean dictating syntax word by word. With AI coding agents it mostly means saying what you want, in plain sentences, and letting Cursor, Claude Code or Codex write the code. Whisperer turns your voice into text for that prompt.",
  },
  {
    question: "Can I dictate code symbols and camelCase with Whisperer?",
    answer:
      "No. Whisperer does not have spoken-symbol or casing commands. It writes what you say as sentences, which is what a coding agent wants. For identifiers and product names, add them to the personal dictionary once and Whisperer spells them your way after that.",
  },
  {
    question: "Is voice coding faster than typing?",
    answer:
      "For prompts, usually. Most people speak several times faster than they type, and a prompt is plain language. A spoken prompt also tends to carry more context, because explaining out loud costs less effort than typing it. For a one-character fix, the keyboard still wins.",
  },
  {
    question: "Does it work with Cursor, Claude Code, Codex and Terminal?",
    answer:
      "Yes. Whisperer works anywhere you can paste. Hold Fn, speak, let go, and the text is copied; press ⌘V in the Cursor chat, the Claude Code or Codex prompt, Windsurf, VS Code or any terminal.",
  },
  {
    question: "Can voice coding help with RSI?",
    answer:
      "It can take a lot of typing off your hands, because the long parts of the work (prompts, reviews, messages, docs) become speech. It is not a medical treatment; if you have pain, see a doctor and treat voice as one part of a setup that also includes breaks and ergonomics.",
  },
  {
    question: "Does voice coding work offline?",
    answer:
      "The speech part does. Whisperer turns your voice into text on your Mac with Wi-Fi off, so your prompts about private code never go to a speech server. The coding agent you paste into has its own connection rules.",
  },
];

const AGENTS: { brand: Brand; name: string }[] = [
  { brand: "cursor", name: "Cursor" },
  { brand: "claude-code", name: "Claude Code" },
  { brand: "codex", name: "Codex" },
  { brand: "windsurf", name: "Windsurf" },
  { brand: "visual-studio-code", name: "VS Code" },
  { brand: "claude", name: "Claude" },
  { brand: "openai", name: "ChatGPT" },
];

const WHY = [
  { title: "Prompts are prose", body: "An agent wants a clear paragraph about what to change and why. That is exactly what speech is good at." },
  { title: "More context, less effort", body: "Saying the edge cases out loud is cheaper than typing them, so the agent gets a better brief and asks fewer follow-ups." },
  { title: "Your hands get a break", body: "Prompts, PR descriptions, review comments and Slack replies are most of a day's typing. They can all be spoken." },
  { title: "Your code stays private", body: "Speech becomes text on your Mac. No speech server hears what you say about an unreleased product." },
];

export default function VoiceCodingPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Voice coding", url: "/voice-coding" },
      ])} />

      <PageHero
        crumbs={[{ label: "Voice coding" }]}
        title="Voice coding: talk to your coding agent"
        lede="Say what you want to Cursor, Claude Code or Codex instead of typing it. Hold Fn, explain the change the way you would to a colleague, let go and paste. The agent writes the code."
        actions={<><AppStoreButton label="Get Whisperer" /><GhostButton href="#how">How it works</GhostButton></>}
        note={<>{PRICE_BASE} once. Speech stays on your Mac. {FACTS.chip}, {FACTS.minMacOS}.</>}
        visual={<AgentPromptDemo />}
      />

      <Section id="agents">
        <div className="max-w-[760px]">
          <H2>Works in every agent you already use</H2>
          <Lede>Whisperer writes your words to the clipboard and you paste them with ⌘V, so it works in any chat box, terminal or editor, with nothing to install in them.</Lede>
        </div>
        <ul data-reveal="list" className="mt-10 flex flex-wrap gap-3">
          {AGENTS.map((a) => (
            <li key={a.name} className="inline-flex items-center gap-3 rounded-[14px] bg-white/[0.03] py-2 pl-2 pr-4 ring-1 ring-white/[0.07] text-[14.5px] text-white/85">
              <BrandTile brand={a.brand} size={34} /> {a.name}
            </li>
          ))}
          <li className="inline-flex items-center gap-3 rounded-[14px] bg-white/[0.03] px-4 py-2 ring-1 ring-white/[0.07] text-[14.5px] text-white/85">Terminal, iTerm2, Warp</li>
        </ul>
      </Section>

      <PointGrid
        title="Why voice suits AI coding"
        lede="Dictating syntax word by word was always slow. Describing intent to an agent is what speech does best."
        items={WHY}
      />

      <Section id="how">
        <div className="max-w-[760px]">
          <H2>Set up in two minutes</H2>
          <Lede>No plugin for your editor, no account, no API key.</Lede>
        </div>
        <div className="mt-12">
          <Steps
            items={[
              { title: "Get Whisperer", body: `Download it from the Mac App Store for ${PRICE_BASE} and allow the microphone.` },
              { title: "Let the model download", body: "The default speech model is about 547 MB and arrives the first time you dictate." },
              { title: "Hold Fn and talk", body: "Describe the change. Words appear in the preview as you speak." },
              { title: "Paste with ⌘V", body: "Let go of Fn, click into the agent's prompt and paste. Edit, then send." },
            ]}
          />
        </div>
      </Section>

      <Split
        title="Spells your stack the way you do"
        lede="Speech models guess at names they have not heard: Kubernetes becomes “cooper netties”. Fix it once and Whisperer learns it, so the next prompt is right."
        visual={<DictionaryMock />}
      >
        <TextLink href="/features/personal-dictionary">How the dictionary learns</TextLink>
      </Split>

      <Split
        flip
        title="Let the agent read your meetings too"
        lede="With Pro, Whisperer runs a small MCP server on your Mac. Claude Code, Cursor and Codex can search your meetings and dictations, so “build what we agreed in Tuesday's review” has something to work from."
        visual={<MCPChat />}
      >
        <TextLink href="/mcp">See the MCP tools</TextLink>
      </Split>

      <Prose title="What Whisperer does not do">
        <p>
          Whisperer writes sentences, not syntax. There are no spoken-symbol commands like “open paren” and no casing
          commands like “camel case”. If you want to dictate raw code character by character, a dedicated voice-control
          tool fits better. If you want to tell an agent what to build, this is the faster path.
        </p>
        <p>
          It also never types into apps for you. When you let go of Fn the text is copied and a <strong>Copied ⌘V</strong>{" "}
          toast appears, so you choose where it goes. Read more in <Link href="/blog/how-to-dictate-code-on-mac">how to
          dictate code on a Mac</Link>.
        </p>
      </Prose>

      <FAQSection items={FAQ} title="Voice coding questions" />
      <Related
        title="Voice coding guides"
        links={[
          { title: "Voice coding with Cursor", body: "Speaking prompts into Cursor's chat and agent.", href: "/blog/voice-coding-with-cursor" },
          { title: "Voice dictation for agentic coding", body: "Briefing Claude Code and Codex by voice.", href: "/blog/voice-dictation-for-agentic-coding" },
          { title: "Vibe coding with your voice", href: "/blog/vibe-coding-voice-dictation" },
          { title: "Voice coding vs typing speed", href: "/blog/voice-coding-vs-typing-speed" },
          { title: "RSI and voice coding", href: "/blog/rsi-prevention-voice-coding" },
          { title: "Voice to text for developers", body: "PRs, reviews, Slack and docs by voice.", href: "/voice-to-text-developers" },
        ]}
      />
      <Close title="Say it. Paste it. Let the agent build it." body={<>Whisperer is {PRICE_BASE} once. Pro adds meeting notes and the MCP server for {PRICE_PRO} once. No subscription.</>} />
    </PageShell>
  );
}
