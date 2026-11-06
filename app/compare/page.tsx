import { Metadata } from "next";
import { Check, X, Minus } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { AppStoreButton, TextLink } from "@/components/site/Shell";
import { PRICE_BASE, PRICE_PRO } from "@/lib/site";
import { CompareCards } from "./CompareCards";

export const metadata: Metadata = {
  title: "Whisperer Compared: Granola, Otter, Fireflies and Mac Dictation Apps",
  description:
    "Whisperer vs Granola, Otter, Fireflies, Wispr Flow, Superwhisper, MacWhisper, VoiceInk, Apple Dictation, Willow, Spokenly, Voibe and JesType.",
  keywords:
    "Granola alternative mac, Otter alternative, Fireflies alternative, meeting notes without bot, Wispr Flow alternative, Superwhisper alternative, MacWhisper alternative",
  openGraph: {
    title: "Whisperer Compared: Meeting Notes and Dictation Apps for Mac",
    description:
      "Honest comparisons with Granola, Otter, Fireflies and nine Mac dictation apps, including where they win.",
    type: "website",
    images: [{ url: "/assets/og/og-compare.png", width: 1200, height: 630, alt: "Whisperer compared" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-compare.png"],
  },
  alternates: { canonical: "https://whispererapp.com/compare" },
};

const compareFaqs = [
  {
    question: "What is a good Granola or Otter alternative for Mac without a subscription?",
    answer: `Whisperer records meetings on your Mac without a bot and costs ${PRICE_BASE} plus a one-time ${PRICE_PRO} Pro purchase. Granola Business is $14 per user per month and Otter Pro is $16.99 a month (public pricing, November 2026). Granola and Otter have team sharing and apps beyond the Mac, which Whisperer does not.`,
  },
  {
    question: "Does Whisperer send a bot into my calls?",
    answer: "No. Whisperer notices when Zoom, Teams, Google Meet, Slack, Webex, FaceTime or a browser call opens the microphone, then records the call audio and your microphone on the Mac. Nothing joins the call, so you tell the other people yourself.",
  },
  {
    question: "Can I use my ChatGPT or Claude plan for meeting notes?",
    answer: "Yes. On the LLM page you can pick Claude, ChatGPT, Codex or Gemini through the plan you already pay for, add an API key, or use the built-in Qwen3.5 4B model offline. Audio stays on the Mac; only the transcript text goes to the cloud AI you pick.",
  },
  {
    question: "How does Whisperer compare with Wispr Flow and Superwhisper for dictation?",
    answer: `For dictation they are close peers. Whisperer runs offline and is ${PRICE_BASE} once; Wispr Flow Pro is $15 a month and Superwhisper Pro is $8.49 a month or $249.99 lifetime. Wispr Flow types straight into the field, while the App Store build of Whisperer copies the text and you paste with ⌘V.`,
  },
];

type Cell = "Yes" | "No" | "Partial" | string;

const meetingTable: { row: string; cells: [Cell, Cell, Cell, Cell] }[] = [
  { row: "Price, one seat", cells: [`${PRICE_BASE} + ${PRICE_PRO} once`, "Free, or $14/month", "Free, or $8.33–16.99/month", "Free, or $10–18/month"] },
  { row: "Records without a bot joining", cells: ["Yes", "Yes", "Partial", "Partial"] },
  { row: "Transcribes on your own computer", cells: ["Yes", "No", "No", "No"] },
  { row: "Uses the AI plan you already pay for", cells: ["Yes", "No", "No", "No"] },
  { row: "Records meetings from your calendar", cells: ["Yes", "Calendar sync", "Yes", "Yes"] },
  { row: "Dictation into any app", cells: ["Yes", "No", "No", "No"] },
  { row: "Team workspace and sharing", cells: ["No", "Yes", "Yes", "Yes"] },
  { row: "Windows or phone apps", cells: ["No", "Yes", "Yes", "Yes"] },
];

function ValueCell({ value, ours }: { value: Cell; ours: boolean }) {
  if (value === "Yes") {
    return (
      <span className={ours ? "text-[#9BA6FF]" : "text-emerald-400"}>
        <Check className="mx-auto h-4 w-4" aria-label="Yes" />
      </span>
    );
  }
  if (value === "No") {
    return (
      <span className="text-white/30">
        <X className="mx-auto h-4 w-4" aria-label="No" />
      </span>
    );
  }
  if (value === "Partial") {
    return (
      <span className="text-amber-300/80">
        <Minus className="mx-auto h-4 w-4" aria-label="Partly" />
      </span>
    );
  }
  return <span className={ours ? "font-medium text-white" : "text-white/65"}>{value}</span>;
}

export default function ComparePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Compare", url: "/compare" },
      ])} />
      <JsonLd data={faqSchema(compareFaqs)} />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
          <Breadcrumbs items={[{ label: "Compare" }]} />

          <h1 className="max-w-[760px] text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Whisperer compared with meeting notes and dictation apps
          </h1>
          <p className="mt-5 max-w-[680px] text-lg leading-relaxed text-white/60">
            Whisperer takes meeting notes on your Mac without a bot, writes them with the AI you already
            pay for, lets AI apps read them over MCP, and does offline dictation. It costs {PRICE_BASE} plus
            a one-time {PRICE_PRO} for Pro. Each page below says where the other app is the better pick.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <AppStoreButton label="Get Whisperer" />
            <TextLink href="/pricing">See what Pro includes</TextLink>
          </div>

          <CompareCards />

          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-white sm:text-[28px]">Meeting notes apps side by side</h2>
            <p className="mt-2 max-w-[680px] text-[16px] leading-relaxed text-white/60">
              Public pricing, November 2026, for one seat. Otter and Fireflies can record through an
              assistant that joins the call; both also offer other ways to capture audio.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#101024]">
              <table className="w-full min-w-[640px] text-[14px]">
                <thead>
                  <tr className="border-b border-white/[0.08] text-left">
                    <th className="px-5 py-4 font-medium text-white/50"><span className="sr-only">Feature</span></th>
                    <th className="px-4 py-4 text-center font-semibold text-white">Whisperer</th>
                    <th className="px-4 py-4 text-center font-semibold text-white/80">Granola</th>
                    <th className="px-4 py-4 text-center font-semibold text-white/80">Otter</th>
                    <th className="px-4 py-4 text-center font-semibold text-white/80">Fireflies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {meetingTable.map(({ row, cells }) => (
                    <tr key={row}>
                      <td className="px-5 py-3.5 text-white/70">{row}</td>
                      {cells.map((c, i) => (
                        <td key={i} className={`px-4 py-3.5 text-center ${i === 0 ? "bg-[#5B6CF7]/[0.07]" : ""}`}>
                          <ValueCell value={c} ours={i === 0} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-20 max-w-[760px]">
            <h2 className="text-2xl font-semibold text-white sm:text-[28px]">FAQ</h2>
            <dl className="mt-6 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {compareFaqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <dt className="text-[17px] font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-2 text-[15.5px] leading-relaxed text-white/60">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </>
  );
}
