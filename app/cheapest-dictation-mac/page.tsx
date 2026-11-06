import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictationDemo } from "@/components/product/DictationDemo";
import { PageShell, PageHero, PointGrid, Prose, PriceTable, PRICE_SOURCE, Related, Close } from "@/components/landing/PageKit";
import { Section, H2, Lede } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cheapest Dictation App for Mac: $2.99 Once, No Subscription | Whisperer" },
  description:
    "Whisperer is $2.99 once for offline dictation on Mac: live preview in 97 languages, five on-device engines, a dictionary that learns. Pro adds meeting notes and your own AI for $14.99 once. Compared with Wispr Flow and Superwhisper.",
  keywords:
    "cheap dictation app mac, cheapest dictation app mac, affordable dictation mac, budget voice to text mac, dictation app under $5, free dictation app mac 2026",
  openGraph: {
    title: "The cheapest dictation app for Mac",
    description: "$2.99 once for dictation. $14.99 once for Pro. No subscription.",
    type: "website",
    url: "https://whispererapp.com/cheapest-dictation-mac",
    images: [{ url: "/assets/og/og-cheapest-dictation-mac.png", width: 1200, height: 630, alt: "Cheapest dictation app for Mac" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-cheapest-dictation-mac.png"] },
  alternates: { canonical: "https://whispererapp.com/cheapest-dictation-mac" },
};

const FAQ = [
  {
    question: "What is the cheapest dictation app for Mac?",
    answer:
      "Apple Dictation is free and built in. Among paid apps, Whisperer is $2.99 once on the Mac App Store, with live preview in 97 languages, four offline engines, a dictionary that learns your words, file transcription and history.",
  },
  {
    question: "Is there a free dictation app for Mac in 2026?",
    answer:
      "Yes. Apple Dictation comes with macOS and is fine for short messages. Some paid apps have free tiers with weekly word caps. Whisperer has no free tier, but at $2.99 once it has no caps either.",
  },
  {
    question: "Why is Whisperer so cheap?",
    answer:
      "Because it runs on your Mac. There are no servers transcribing your audio, so there is no running cost to pass on as a subscription. You pay for the app once.",
  },
  {
    question: "Is it cheaper because it does less?",
    answer:
      "Dictation is complete in the $2.99 app. What it does not have is cross-platform apps or team plans: Whisperer is Mac only. Pro, $14.99 once, adds meeting notes, calendar sync, your own AI and an MCP server, which most dictation apps do not offer at any price.",
  },
  {
    question: "How much do I save compared with Wispr Flow or Superwhisper?",
    answer:
      "Wispr Flow Pro is $144 a year on annual billing. Superwhisper Pro is $84.99 a year or $249.99 lifetime. Whisperer is $2.99 once, or $17.98 once with Pro. Prices are public pricing for one seat, checked November 2026.",
  },
];

const WHAT = [
  { title: "Dictation in any app", body: "Hold Fn, speak, paste with ⌘V." },
  { title: "Live preview", body: `Words as you speak, in ${FACTS.languages} languages.` },
  { title: "Four offline engines", body: "Whisper, Parakeet, Qwen3 ASR, WhisperKit." },
  { title: "Fast Polish", body: "Fillers out, punctuation and paragraphs in." },
  { title: "A dictionary that learns", body: "Fix a word once and it sticks." },
  { title: "Files and history", body: "Transcribe recordings. Search everything you said." },
];

export default function CheapestDictationMacPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Cheapest Dictation App for Mac", url: "/cheapest-dictation-mac" },
      ])} />

      <PageHero
        crumbs={[{ label: "Cheapest dictation app for Mac" }]}
        title={`Full dictation for Mac, ${PRICE_BASE} once`}
        lede="No subscription, no word cap, no account. Whisperer runs on your Mac, so it costs less than a coffee and keeps working without the internet."
        visual={<DictationDemo />}
      />

      <PointGrid title={`What ${PRICE_BASE} gets you`} lede="This is the whole dictation app, not a trial or a capped tier." items={WHAT} />

      <Section id="prices">
        <div className="max-w-[760px]">
          <H2>What other dictation apps cost</H2>
          <Lede>One person, one Mac, a year of use.</Lede>
        </div>
        <div className="mt-12">
          <PriceTable
            rows={[
              { name: "Whisperer", price: PRICE_BASE, billing: "Once", note: "Dictation, offline", ours: true },
              { name: "Whisperer with Pro", price: "$17.98", billing: "Once", note: "Adds meetings, your AI, MCP", ours: true },
              { name: "Apple Dictation", price: "Free", billing: "Built into macOS", note: "No history or dictionary" },
              { name: "Superwhisper Pro", price: "$84.99 a year", billing: "Yearly, or $249.99 lifetime", note: "$8.49 billed monthly" },
              { name: "Wispr Flow Pro", price: "$144 a year", billing: "Yearly ($12 a month)", note: "$15 billed monthly" },
            ]}
            caption={PRICE_SOURCE}
          />
        </div>
      </Section>

      <Prose title="Where the money goes">
        <p>
          Cloud dictation apps pay for servers every time you speak, so they charge every month. Whisperer uses the chip
          already in your Mac. That is why it can be {PRICE_BASE} once.
        </p>
        <p>
          The honest trade-off: Whisperer is Mac only, and the first run downloads a speech model of about 547 MB. If you
          need the same app on Windows or your phone, a cross-platform subscription may suit you better.
        </p>
        <p>
          When you want more, Pro is {PRICE_PRO} once: meeting notes with named speakers, calendar sync, notes written by
          your Claude, ChatGPT or Gemini plan or by a model on your Mac, and an MCP server for AI apps.
        </p>
      </Prose>

      <FAQSection items={FAQ} title="Price questions" />
      <Related
        links={[
          { title: "Dictation with no subscription", href: "/dictation-no-subscription" },
          { title: "Pricing", body: `${PRICE_BASE} and ${PRICE_PRO}, both once.`, href: "/pricing" },
          { title: "Whisperer vs Superwhisper", href: "/compare/vs-superwhisper" },
          { title: "Whisperer vs Wispr Flow", href: "/compare/vs-wispr-flow" },
        ]}
      />
      <Close title={`Dictation for ${PRICE_BASE}, once`} />
    </PageShell>
  );
}
