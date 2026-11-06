import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictationDemo } from "@/components/product/DictationDemo";
import { PageShell, PageHero, PointGrid, Prose, PriceTable, PRICE_SOURCE, Related, Close } from "@/components/landing/PageKit";
import { Section, H2, Lede } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Dictation App With No Subscription: Pay Once for Mac | Whisperer" },
  description:
    "A Mac dictation app you buy once. Whisperer is $2.99 for dictation and $14.99 once for Pro meeting notes, your own AI and MCP. No monthly fee, no account, no minute limits.",
  keywords:
    "dictation app no subscription, one time purchase dictation app, dictation app lifetime license mac, no subscription voice to text mac, pay once dictation mac",
  openGraph: {
    title: "Dictation with no subscription",
    description: "$2.99 once for dictation, $14.99 once for Pro. No monthly bill.",
    type: "website",
    url: "https://whispererapp.com/dictation-no-subscription",
    images: [{ url: "/assets/og/og-dictation-no-subscription.png", width: 1200, height: 630, alt: "Dictation app with no subscription" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-dictation-no-subscription.png"] },
  alternates: { canonical: "https://whispererapp.com/dictation-no-subscription" },
};

const FAQ = [
  {
    question: "Is Whisperer really a one-time purchase?",
    answer:
      "Yes. The app is $2.99 on the Mac App Store and Pro is a $14.99 one-time in-app purchase. Neither renews. There is no account and no minute limit.",
  },
  {
    question: "Are updates included?",
    answer: "Yes. Updates come through the Mac App Store at no extra charge, and Pro stays with your Apple ID.",
  },
  {
    question: "Is there a trial?",
    answer:
      "No. The app is $2.99, which is about what one month of a trial-then-subscribe app costs after the trial ends. If it does not work for you, you can ask Apple for a refund through reportaproblem.apple.com.",
  },
  {
    question: "Which dictation apps have no subscription?",
    answer:
      "Apple Dictation is free with macOS. Whisperer is a one-time purchase. A few other Mac apps sell lifetime licenses, such as Superwhisper at $249.99. Wispr Flow is subscription only.",
  },
  {
    question: "How does Whisperer compare to subscription meeting note apps?",
    answer:
      "Granola Business is $14 a month, Otter Pro $8.33 a month billed yearly and Fireflies Pro $10 a month billed yearly. Whisperer with Pro is $17.98 once, and its notes can be written by a model on your Mac or by an AI plan you already pay for. Prices are public pricing for one seat, checked November 2026.",
  },
];

const WHY = [
  { title: "Nothing renews", body: "No card on file for a monthly charge you forget about." },
  { title: "No account", body: "No sign-up, no password, no email list." },
  { title: "No usage caps", body: "No words-per-week limit and no meeting-minute limit." },
  { title: "Runs on your Mac", body: "There are no servers to pay for, which is why there is no monthly fee." },
];

export default function DictationNoSubscriptionPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation App No Subscription", url: "/dictation-no-subscription" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation with no subscription" }]}
        title="A dictation app you buy once"
        lede={`Whisperer is ${PRICE_BASE} on the Mac App Store. Add Pro for meeting notes, your own AI and MCP for ${PRICE_PRO}. Both are one-time, and that is the whole bill.`}
        visual={<DictationDemo />}
        note={<>Dictation in {FACTS.languages} languages, offline. {FACTS.chip}, {FACTS.minMacOS}.</>}
      />

      <PointGrid title="Pay once, then just use it" items={WHY} />

      <Section id="cost">
        <div className="max-w-[760px]">
          <H2>What a year costs</H2>
          <Lede>Dictation and meeting-note apps for one person, using annual billing where it is offered.</Lede>
        </div>
        <div className="mt-12">
          <PriceTable
            rows={[
              { name: "Whisperer", price: PRICE_BASE, billing: "Once", note: "Dictation", ours: true },
              { name: "Whisperer with Pro", price: "$17.98", billing: "Once", note: "Dictation, meetings, your AI, MCP", ours: true },
              { name: "Wispr Flow Pro", price: "$144", billing: "Yearly", note: "Dictation" },
              { name: "Superwhisper Pro", price: "$84.99", billing: "Yearly, or $249.99 lifetime", note: "Dictation" },
              { name: "Granola Business", price: "$168", billing: "Monthly only, $14", note: "Meeting notes" },
              { name: "Fireflies Pro", price: "$120", billing: "Yearly, $10 a month", note: "Meeting notes" },
              { name: "Otter Pro", price: "$100", billing: "Yearly, $8.33 a month", note: "Meeting notes" },
            ]}
            caption={PRICE_SOURCE}
          />
        </div>
      </Section>

      <Prose title="The trade-offs">
        <p>
          Subscription apps often include things a one-time app does not: Granola has team sharing, and Wispr Flow runs on
          Windows and iPhone. Whisperer is a Mac app for one person.
        </p>
        <p>
          What you get instead is software that keeps working without an account, without a connection, and without a bill
          next month.
        </p>
      </Prose>

      <FAQSection items={FAQ} title="One-time purchase questions" />
      <Related
        links={[
          { title: "Pricing", body: `${PRICE_BASE} and ${PRICE_PRO}, both once.`, href: "/pricing" },
          { title: "Cheapest dictation app for Mac", href: "/cheapest-dictation-mac" },
          { title: "Meeting notes", body: "What Pro adds.", href: "/meetings" },
          { title: "Your own AI", body: "No extra AI bill.", href: "/ai" },
        ]}
      />
      <Close title="Pay once. Keep it." />
    </PageShell>
  );
}
