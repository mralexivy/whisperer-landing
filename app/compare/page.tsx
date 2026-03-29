import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Check, X, Shield, DollarSign, Code } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, ScaleIn, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";
import { Badge } from "@/components/ui/badge";
import { CompareCards } from "./CompareCards";

export const metadata: Metadata = {
  title: "Mac Dictation Apps Compared: 2026 Guide",
  description:
    "Compare Whisperer with Superwhisper, Voibe, Wispr Flow, Apple Dictation, MacWhisper, and VoiceInk. Feature-by-feature comparison of Mac dictation apps in 2026.",
  keywords:
    "best dictation app mac 2026, Superwhisper alternative, Wispr Flow alternative, MacWhisper alternative, dictation app comparison",
  openGraph: {
    title: "Mac Dictation Apps Compared — 2026 Guide",
    description:
      "Feature-by-feature comparison of the top Mac dictation apps. Find the best voice-to-text tool for your workflow.",
    type: "website",
    images: [{ url: "/assets/og/og-compare.png", width: 1200, height: 630, alt: "Mac Dictation Apps Compared" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-compare.png"],
  },
  alternates: { canonical: "/compare" },
};

const compareFaqs = [
  {
    question: "What is the best offline dictation app for Mac in 2026?",
    answer: "Whisperer: $14.99 for Code Mode, per-app profiles, personal dictionary, three engines. Competitors charge $99-$249 lifetime or $10-15/month, often with fewer features.",
  },
  {
    question: "Which dictation app has Code Mode for developers?",
    answer: "Only Whisperer. camelCase, snake_case, PascalCase, CONSTANT_CASE, 20+ symbol commands by voice. No other Mac dictation app has this.",
  },
  {
    question: "How much does Whisperer cost vs Superwhisper?",
    answer: "Whisperer Pro: $14.99 one-time. Superwhisper: $249 lifetime or $8/month. Over 3 years, $14.99 vs $249-$288.",
  },
  {
    question: "Is Wispr Flow better than Whisperer?",
    answer: "Wispr Flow needs cloud ($10-15/month), so voice data leaves your Mac. Whisperer is offline, no subscription, has Code Mode and per-app profiles. Over 3 years: $360-540 vs $14.99.",
  },
];

const comparisonData = [
  ["Price", "$2.99/$14.99", "$249/$8mo", "$99/$4.90mo", "$10-15/mo", "Free"],
  ["3-Year Cost", "$14.99", "$249–288", "$99–176", "$360–540", "Free"],
  ["100% Offline", "Yes", "Partial", "Yes", "No", "Yes*"],
  ["AI Post-Processing", "Yes", "Yes", "No", "Yes", "No"],
  ["Code Mode", "Yes", "No", "No", "No", "No"],
  ["Per-App Profiles", "Yes", "No", "No", "No", "No"],
  ["Personal Dictionary", "Yes", "No", "No", "No", "No"],
  ["Multiple Engines", "3", "1", "1", "Cloud", "1"],
  ["Streaming Preview", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["File Transcription", "Yes", "Yes", "Yes", "No", "No"],
  ["History & Statistics", "Yes", "Partial", "No", "No", "No"],
  ["Filler Word Removal", "Yes", "Yes", "No", "Yes", "No"],
  ["100+ Languages", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Cross-Platform", "Mac", "Mac", "Mac", "Mac+Win", "Apple"],
];

function ValueCell({ value, isWhisperer }: { value: string; isWhisperer: boolean }) {
  if (value === "Yes") {
    return (
      <span className={`inline-flex items-center justify-center ${isWhisperer ? "text-primary" : "text-green-400"}`}>
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
    <span className={isWhisperer ? "text-primary font-medium" : "text-muted-foreground"}>
      {value}
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Compare", url: "/compare" },
      ])} />
      <JsonLd data={faqSchema(compareFaqs)} />
      <main className="pt-32 pb-24 relative">
        {/* Background atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <SectionGlow position="top-right" color="purple" size="md" intensity={0.06} />
          <DotGrid />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Compare" }]} />

          {/* Hero — full-width centered */}
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Updated for 2026
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mac Dictation Apps{" "}
                <span className="text-primary">Compared</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Feature-by-feature comparisons of Whisperer vs other Mac dictation apps.
                Where competitors are better, we say so.
              </p>

              {/* Key advantage pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                  { icon: DollarSign, label: "$14.99 lifetime — 17x cheaper", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                  { icon: Code, label: "Only app with Code Mode", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
                  { icon: Shield, label: "100% offline — no cloud", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
                ].map((pill, i) => (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${pill.bg}`}
                  >
                    <pill.icon className={`w-4 h-4 ${pill.color}`} />
                    <span className={pill.color}>{pill.label}</span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <p className="text-sm text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Whisperer Pro Pack ($14.99) includes Code Mode, per-app profiles, personal dictionary, and three engines. Superwhisper costs $249, Voibe $99, Wispr Flow $10-15/month. Over 3 years, Whisperer saves $235-$525.
              </p>
            </div>
          </FadeIn>

          <CompareCards />

          <GradientDivider className="max-w-7xl mx-auto my-16" />

          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Quick Comparison <span className="text-primary">Table</span>
              </h2>
              <p className="text-muted-foreground">
                Features and prices at a glance.
              </p>
            </div>
          </FadeIn>
          <ScaleIn>
            <section className="bg-card border border-border rounded-2xl p-8 max-w-7xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                      <th className="text-center py-3 px-3 font-semibold text-primary bg-primary/5">Whisperer</th>
                      <th className="text-center py-3 px-3 font-semibold">Superwhisper</th>
                      <th className="text-center py-3 px-3 font-semibold">Voibe</th>
                      <th className="text-center py-3 px-3 font-semibold">Wispr Flow</th>
                      <th className="text-center py-3 px-3 font-semibold">Apple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonData.map(([feature, ...values], i) => (
                      <tr key={i} className="hover:bg-secondary/30 transition-colors">
                        <td className="py-3 pr-4 text-muted-foreground">{feature}</td>
                        {values.map((val, j) => (
                          <td
                            key={j}
                            className={`text-center py-3 px-3 ${j === 0 ? "bg-primary/5" : ""}`}
                          >
                            <ValueCell value={val} isWhisperer={j === 0} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </ScaleIn>

          <GradientDivider className="max-w-7xl mx-auto my-16" />

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {compareFaqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </main>
    </>
  );
}
