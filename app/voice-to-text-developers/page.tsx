import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictationDemo } from "@/components/product/DictationDemo";
import { DictionaryMock, HistoryMock } from "@/components/landing/DictationMockups";
import { PageShell, PageHero, PointGrid, Split, FactTable, Related, Close } from "@/components/landing/PageKit";
import { Section, H2, Lede, TextLink } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voice to Text for Developers: Offline Dictation for Mac",
  description:
    "Offline voice to text for developers on Mac. Dictate prompts, PR descriptions, code reviews, tickets and Slack in any app. Learns your stack's names, works with Wi-Fi off, 97 languages. $2.99 once.",
  keywords:
    "voice to text for developers, offline dictation for developers mac, developer dictation app, dictation for VS Code, voice dictation cursor, dictation for terminal, speech to text for programmers mac",
  openGraph: {
    title: "Voice to text for developers, on your Mac",
    description: "Prompts, PRs, reviews and Slack by voice. Learns your stack, works offline. $2.99 once.",
    type: "website",
    url: "https://whispererapp.com/voice-to-text-developers",
    images: [{ url: "/assets/og/og-voice-to-text-developers.png", width: 1200, height: 630, alt: "Voice to text for developers" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-voice-to-text-developers.png"] },
  alternates: { canonical: "https://whispererapp.com/voice-to-text-developers" },
};

const FAQ = [
  {
    question: "Can I dictate code on Mac by voice?",
    answer:
      "You can dictate anything into a code editor, but Whisperer writes sentences, not syntax: there are no spoken-symbol or casing commands. Developers use it to speak prompts to AI agents, PR descriptions, review comments, commit messages, tickets and docs, which is where most of the typing in a day goes.",
  },
  {
    question: "Does it work in VS Code, Cursor, JetBrains and Terminal?",
    answer:
      "Yes. When you let go of Fn the text is copied and you paste it with ⌘V, so it works in any editor, terminal, browser or chat app without a plugin.",
  },
  {
    question: "Will it spell technical terms right?",
    answer:
      "Common ones, mostly. For your own names (services, libraries, teammates, customers) use the personal dictionary. Correct a word once and Whisperer learns it from the correction.",
  },
  {
    question: "Is my audio sent anywhere?",
    answer:
      "No. Speech is turned into text on your Mac by the model you choose, and it works with Wi-Fi off. That matters when you are talking about code or products that are not public yet.",
  },
  {
    question: "Does Whisperer change punctuation for chat apps?",
    answer:
      "There is one setting for that, Match the app you're writing in. In chat apps such as Slack, Messages, Discord and Teams it skips the full stop on one-line messages, which reads more naturally in chat. Everywhere else the text keeps its punctuation.",
  },
  {
    question: "How much does it cost?",
    answer: `Whisperer is ${PRICE_BASE} once on the Mac App Store. Pro is a ${PRICE_PRO} one-time in-app purchase that adds meeting notes and the MCP server. No subscription.`,
  },
];

const JOBS = [
  { title: "Prompts for AI agents", body: "Brief Cursor, Claude Code or Codex in full sentences, with the context you would otherwise skip." },
  { title: "PR descriptions", body: "Talk through what changed and why while the diff is in front of you." },
  { title: "Code review comments", body: "Explain the concern properly instead of leaving a terse “nit”." },
  { title: "Tickets and bug reports", body: "Steps to reproduce, expected and actual, said in one go." },
  { title: "Docs and READMEs", body: "Draft the explanation out loud, then tidy it." },
  { title: "Slack and standups", body: "Quick updates without leaving the editor for long." },
];

export default function VoiceToTextDevelopersPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Voice to text for developers", url: "/voice-to-text-developers" },
      ])} />

      <PageHero
        crumbs={[{ label: "Voice to text for developers" }]}
        title="Voice to text for developers, on your Mac"
        lede={`Most of a developer's typing is not code: it is prompts, PRs, reviews, tickets and Slack. Hold Fn and say it instead. It runs on your Mac, in ${FACTS.languages} languages, and learns the names in your stack.`}
        visual={<DictationDemo />}
      />

      <PointGrid
        title="Where developers use it"
        lede="Anything that is mostly words. Paste it with ⌘V wherever you are."
        items={JOBS}
      />

      <Split
        title="Learns your stack"
        lede="Service names, libraries, teammates and customers. Correct a misheard word once and the dictionary keeps it, so “cooper netties” becomes Kubernetes for good."
        visual={<DictionaryMock />}
      >
        <TextLink href="/features/personal-dictionary">How the dictionary works</TextLink>
      </Split>

      <Split
        flip
        title="Find what you said last week"
        lede="Every dictation is saved on your Mac with the app it went to, so the PR description you wrote by voice on Monday is one search away."
        visual={<HistoryMock />}
      >
        <TextLink href="/features/transcription-history">History and statistics</TextLink>
      </Split>

      <Section id="details">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <H2>The details developers ask about</H2>
            <Lede>Offline by default, nothing to install in your editor, and honest about what it does not do.</Lede>
            <TextLink href="/voice-coding" className="mt-8">Voice coding with AI agents</TextLink>
          </div>
          <FactTable
            rows={[
              ["Works in", "Any app, paste with ⌘V"],
              ["Editors and terminals", "VS Code, Cursor, Xcode, JetBrains, Terminal, iTerm2, Warp"],
              ["Speech engines", "Whisper, Parakeet, Qwen3 ASR, WhisperKit"],
              ["Internet", "Not needed once the model is downloaded"],
              ["Spoken symbols and casing", "Not supported"],
              ["Chat apps", "Optional: no full stop on one-line messages"],
              ["Price", `${PRICE_BASE} once, Pro ${PRICE_PRO} once`],
            ]}
          />
        </div>
      </Section>

      <FAQSection items={FAQ} title="Developer questions" />
      <Related
        links={[
          { title: "Voice coding", body: "Talk to Cursor, Claude Code and Codex.", href: "/voice-coding" },
          { title: "Dictation for VS Code", href: "/blog/voice-dictation-for-vscode" },
          { title: "Dictation in the terminal", href: "/blog/dictation-for-terminal-cli" },
          { title: "Developer productivity with voice", href: "/blog/developer-productivity-voice-dictation" },
          { title: "MCP server for AI apps", body: "Let agents read your meetings.", href: "/mcp" },
          { title: "Is Apple Dictation enough for developers?", href: "/blog/is-apple-dictation-good-enough-for-devs" },
        ]}
      />
      <Close title="Talk through the PR instead of typing it" />
    </PageShell>
  );
}
