import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Check,
  X,
  Code,
  Layers,
  Cpu,
  DollarSign,
  TrendingDown,
  Calculator,
  ArrowRight,
  Sparkles,
  PiggyBank,
} from "lucide-react";
import {
  FadeIn,
  FadeInStagger,
  StaggerItem,
  ScaleIn,
  GlowCard,
} from "@/components/ui/animated";
import {
  SectionGlow,
  DotGrid,
  GradientDivider,
  AnimatedBorder,
} from "@/components/ui/decorations";

export const metadata: Metadata = {
  title:
    "Cheapest Dictation App for Mac — $2.99 Base, $14.99 Pro",
  description:
    "Whisperer is the most affordable offline dictation app for Mac. $2.99 base app, $14.99 Pro Pack lifetime. Code Mode, 3 engines, per-app profiles. 17x cheaper than Superwhisper.",
  keywords:
    "cheap dictation app mac, cheapest dictation app mac, free dictation app mac 2026, affordable dictation mac, budget voice to text mac, $3 dictation app, dictation app under $20",
  openGraph: {
    title: "Cheapest Dictation App for Mac — $2.99 / $14.99",
    description:
      "$2.99 base. $14.99 Pro lifetime. 17x cheaper than competitors. Code Mode, 3 engines, offline.",
    type: "website",
    images: [{ url: "/assets/og/og-cheapest-dictation-mac.png", width: 1200, height: 630, alt: "Cheapest Dictation App for Mac" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheapest Dictation App for Mac — $2.99 / $14.99",
    description:
      "17x cheaper than Superwhisper. Code Mode for developers. 100% offline.",
    images: ["/assets/og/og-cheapest-dictation-mac.png"],
  },
  alternates: { canonical: "/cheapest-dictation-mac" },
};

const priceComparison = [
  ["Whisperer Base", "$2.99", "one-time"],
  ["Whisperer Pro", "$14.99", "lifetime"],
  ["VoiceInk", "~$25", "one-time"],
  ["MacWhisper", "~$64", "one-time"],
  ["Voibe", "$99", "lifetime"],
  ["Superwhisper", "$249", "lifetime"],
  ["Wispr Flow", "$10–15/mo", "subscription"],
];

const savingsData = [
  {
    vs: "Superwhisper",
    theirPrice: "$249",
    savings: "$234.01",
    percentage: "94%",
  },
  { vs: "Voibe", theirPrice: "$99", savings: "$84.01", percentage: "85%" },
  {
    vs: "MacWhisper",
    theirPrice: "~$64",
    savings: "~$49",
    percentage: "77%",
  },
  {
    vs: "Wispr Flow (1yr)",
    theirPrice: "$120–180",
    savings: "$105–165",
    percentage: "88–92%",
  },
];

const uniqueFeatures = [
  {
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Code Mode",
    description:
      "camelCase, snake_case, PascalCase, CONSTANT_CASE, 20+ symbols by voice. No competitor has this.",
  },
  {
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Per-App Profiles",
    description:
      "Code Mode in VS Code, natural language in Slack, email style in Gmail. Switches automatically.",
  },
  {
    icon: Cpu,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "Three Engines",
    description:
      "Whisper (Metal GPU), NVIDIA (Neural Engine), Apple Speech. Switch without restarting.",
  },
];

const proIncludes = [
  "AI Post-Processing (10 modes)",
  "Code Mode — camelCase, symbols",
  "Per-app profiles",
  "Personal dictionary",
  "Pro insertion engine",
  "Usage statistics",
  "3 transcription engines",
  "100+ languages",
  "File transcription",
  "Filler word removal",
  "Live streaming preview",
  "Transcription history",
];

const faqs = [
  {
    question: "What is the cheapest dictation app for Mac?",
    answer:
      "Whisperer: $2.99 base, $14.99 Pro. Apple Dictation is free but lacks Code Mode, per-app profiles, personal dictionary, file transcription.",
  },
  {
    question: "Is there a free dictation app for Mac in 2026?",
    answer:
      "Apple Dictation is free on Apple Silicon. Aggressive autocorrection, no developer features, limited customization. Whisperer at $2.99 is cheap compared to $99-$249 alternatives.",
  },
  {
    question: "Why is Whisperer so cheap?",
    answer:
      "No servers. Runs offline on your Mac. No cloud costs, no API costs, no recurring expenses. One-time pricing works because your Mac does the processing.",
  },
  {
    question: "Is Whisperer cheaper because it has fewer features?",
    answer:
      "No. Code Mode (unique), per-app profiles (unique), personal dictionary, three engines, AI post-processing, file transcription, history. Cheaper because no cloud costs.",
  },
  {
    question: "How much can I save vs Superwhisper?",
    answer:
      "Whisperer Pro ($14.99) vs Superwhisper ($249 or $8/month) saves $234. Over 3 years with monthly Superwhisper, you save $273.",
  },
];

function ValueCell({
  value,
  isWhisperer,
}: {
  value: string;
  isWhisperer: boolean;
}) {
  if (value === "Yes") {
    return (
      <span
        className={`inline-flex items-center justify-center ${
          isWhisperer ? "text-primary" : "text-green-400"
        }`}
      >
        <Check className="w-4 h-4" />
      </span>
    );
  }
  if (value === "No") {
    return (
      <span className="inline-flex items-center justify-center text-muted-foreground/40">
        <X className="w-4 h-4" />
      </span>
    );
  }
  return (
    <span
      className={
        isWhisperer ? "text-primary font-medium" : "text-muted-foreground"
      }
    >
      {value}
    </span>
  );
}

export default function CheapestDictationMacPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Cheapest Dictation App for Mac", url: "/cheapest-dictation-mac" },
      ])} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.12} />
          <SectionGlow position="top-right" color="purple" size="md" intensity={0.06} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs
            items={[{ label: "Cheapest Dictation App for Mac" }]}
          />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                $2.99.{" "}
                <span className="text-primary">Not a typo.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Whisperer costs less than competitors but has more features.
                Code Mode, three engines, per-app profiles. $14.99 one-time.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                $2.99 base. $14.99 Pro Pack. No subscription. Runs offline.
              </p>
              <a
                href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="gap-3">
                  <Apple className="w-5 h-5" />
                  Download on Mac App Store
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Dictation App{" "}
                <span className="text-primary">Prices</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every major Mac dictation app, side by side.
              </p>
            </div>
          </FadeIn>
          <ScaleIn>
            <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">
                        App
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Price
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Model
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {priceComparison.map(([app, price, model], i) => {
                      const isWhisperer = (app as string).startsWith(
                        "Whisperer"
                      );
                      return (
                        <tr
                          key={i}
                          className={`hover:bg-secondary/30 transition-colors ${
                            isWhisperer ? "bg-primary/5" : ""
                          }`}
                        >
                          <td
                            className={`py-3 pr-4 font-medium ${
                              isWhisperer
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {app}
                          </td>
                          <td
                            className={`text-center py-3 px-3 font-mono ${
                              isWhisperer
                                ? "text-primary font-bold"
                                : "text-foreground"
                            }`}
                          >
                            {price}
                          </td>
                          <td className="text-center py-3 px-3 text-muted-foreground">
                            {model}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      <GradientDivider />

      {/* Savings Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
          <SectionGlow
            position="center"
            color="purple"
            size="lg"
            intensity={0.05}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your <span className="text-primary">Savings</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                What Whisperer Pro ($14.99) saves you vs each competitor.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {savingsData.map((item, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          vs {item.vs}
                        </span>
                      </div>
                      <span className="text-xs font-semibold bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full">
                        Save {item.percentage}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">
                        {item.savings}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        saved
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Their price: {item.theirPrice} &rarr; Whisperer: $14.99
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* Essentially Free */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                  <Calculator className="w-4 h-4" />
                  Cost Breakdown
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Essentially{" "}
                  <span className="text-primary">Free</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  What $14.99 actually costs when you break it down.
                </p>
              </div>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Per Day",
                  value: "$0.04",
                  note: "$14.99 / 365 days",
                },
                {
                  label: "Per Week",
                  value: "$0.29",
                  note: "Less than a gumball",
                },
                {
                  label: "Per Month",
                  value: "$1.25",
                  note: "For the first year only",
                },
              ].map((calc, i) => (
                <StaggerItem key={i}>
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {calc.label}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1 font-mono">
                      {calc.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {calc.note}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </FadeInStagger>
            <FadeIn delay={0.3}>
              <p className="text-center text-sm text-muted-foreground mt-6">
                After year one, the daily cost drops to $0.02, then $0.01…
                and keeps going down. One-time means forever.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* But Is It Any Good? */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.06} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                But Is It Any{" "}
                <span className="text-primary">Good</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                It is cheap because there are no servers, not because features are missing.
                Here is what you get that competitors do not offer.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {uniqueFeatures.map((feature, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${feature.color}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* What You Get */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What You Get for{" "}
                <span className="text-primary">$14.99</span>
              </h2>
            </div>
          </FadeIn>
          <ScaleIn>
            <AnimatedBorder
              className="max-w-2xl mx-auto"
              borderRadius="1rem"
            >
              <div className="p-8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {proIncludes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="lg" className="gap-3">
                      <Apple className="w-5 h-5" />
                      Get Pro Pack — $14.99 Lifetime
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedBorder>
          </ScaleIn>
        </div>
      </section>

      <GradientDivider />

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Related */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h3 className="text-xl font-bold mb-6">Related</h3>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Full Pricing Details", href: "/pricing" },
                {
                  title: "No Subscription — $14.99 Lifetime",
                   href: "/dictation-no-subscription",
                },
                {
                  title: "Compare All Dictation Apps",
                   href: "/compare",
                },
                {
                  title: "Offline Dictation for Mac",
                   href: "/offline-dictation-mac",
                },
              ].map((link, i) => (
                <StaggerItem key={i}>
                  <Link href={link.href} className="group block">
                    <div className="flex items-center justify-between bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
