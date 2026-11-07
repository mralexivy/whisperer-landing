import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { SiteHeader, SiteFooter, Section } from "@/components/site/Shell";
import { Crumbs, SectionHead } from "@/components/site/PageParts";
import { PricingSection, CostCard, CostFootnote, CloseSection } from "@/components/home/Sections";
import { FAQSection, type QA } from "@/components/home/HomeFAQ";
import { PRICE_BASE, PRICE_PRO, FACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing: $2.99 App, $14.99 Pro, No Subscription",
  description:
    "Whisperer is $2.99 on the Mac App Store for dictation. Pro is a $14.99 one-time purchase that adds meeting notes, calendar sync, your own AI and the MCP server.",
  alternates: { canonical: "https://whispererapp.com/pricing" },
  openGraph: {
    title: "Whisperer pricing: pay once, no subscription",
    description: "$2.99 app with dictation. $14.99 Pro with meetings, calendar, your own AI and MCP.",
    url: "https://whispererapp.com/pricing",
    images: [{ url: "/assets/og/og-pricing.png", width: 1200, height: 630, alt: "Whisperer pricing" }],
  },
};

const ROWS: [string, boolean, boolean][] = [
  ["Hold-to-talk dictation in any app", true, true],
  [`Live preview in ${FACTS.languages} languages`, true, true],
  ["Whisper, Parakeet, Qwen3 ASR and WhisperKit engines, all offline", true, true],
  ["Fast Polish: punctuation, fillers and paragraphs", true, true],
  ["Personal dictionary that learns your words", true, true],
  ["History, search and statistics", true, true],
  ["Audio and video file transcription", true, true],
  ["Meeting notes with named speakers", false, true],
  ["Meeting detection and automatic recording", false, true],
  ["Google Calendar and Outlook sync", false, true],
  ["AI overview, decisions, action items, open questions", false, true],
  ["Ask AI with timestamped sources", false, true],
  ["Use your Claude, ChatGPT or Gemini plan, or an API key", false, true],
  ["Built-in offline AI model", false, true],
  ["MCP server for Claude, ChatGPT, Cursor, Codex and more", false, true],
];

const FAQ: QA[] = [
  { question: "Is there a subscription?", answer: `No. The app is ${PRICE_BASE} and Pro is ${PRICE_PRO}, each paid once through the Mac App Store. Updates are included.` },
  { question: "How do I get Pro?", answer: "Buy Whisperer on the Mac App Store, open it, and choose Upgrade to Pro inside the app. Pro is tied to your Apple ID, so Restore Purchases brings it back on another Mac." },
  { question: "Are there limits on minutes or meetings?", answer: "No. Record as many meetings as you like, for as long as you like. Everything runs on your Mac, so there is nothing to meter." },
  { question: "Do I need to pay for an AI as well?", answer: "No. The built-in model writes notes for free on your Mac. Connecting Claude, ChatGPT or Gemini is optional and uses a plan you already have." },
  { question: "Can I get a refund?", answer: "Refunds are handled by Apple through reportaproblem.apple.com, under the App Store's standard policy." },
  { question: "What Mac do I need?", answer: `A Mac with ${FACTS.chip} and ${FACTS.minMacOS}.` },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0B0B19]">
      <SiteHeader />
      <main className="pt-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pt-8"><Crumbs items={[{ name: "Pricing", href: "/pricing" }]} /></div>
        <PricingSection id="plans" asPage />

        <Section id="compare-plans">
          <SectionHead title="What each plan includes" />
          <div className="mt-10 overflow-hidden rounded-[22px] ring-1 ring-white/[0.08]">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-[#101024]">
                <tr>
                  <th className="px-5 py-4 font-medium text-white/50">Feature</th>
                  <th className="w-[120px] px-5 py-4 text-center font-semibold text-white">Whisperer<div className="text-[12.5px] font-normal text-white/45">{PRICE_BASE}</div></th>
                  <th className="w-[120px] px-5 py-4 text-center font-semibold text-white">Pro<div className="text-[12.5px] font-normal text-white/45">+{PRICE_PRO}</div></th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([f, base, pro]) => (
                  <tr key={f} className="border-t border-white/[0.06]">
                    <td className="px-5 py-3.5 text-white/75">{f}</td>
                    <td className="px-5 py-3.5 text-center">{base ? <Check className="mx-auto h-4 w-4 text-white/60" /> : <Minus className="mx-auto h-4 w-4 text-white/20" />}</td>
                    <td className="px-5 py-3.5 text-center">{pro ? <Check className="mx-auto h-4 w-4 text-[#9BA6FF]" /> : <Minus className="mx-auto h-4 w-4 text-white/20" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="cost">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHead title="Less than two months of a meeting-notes plan" lede="Most meeting tools bill every seat every month. Whisperer costs the same in year five as in year one: nothing more." />
            <CostCard className="max-w-none p-7" />
          </div>
        </Section>

        <FAQSection items={FAQ} title="Pricing questions" />
        <CloseSection />
        <CostFootnote />
      </main>
      <SiteFooter />
    </div>
  );
}
