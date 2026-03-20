import { Metadata } from "next";
import Link from "next/link";
import { getAllComparisons } from "@/lib/blog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight, Check, X } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, ScaleIn, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Mac Dictation Apps Compared: 2026 Guide — Whisperer vs Competitors",
  description:
    "Compare Whisperer with Superwhisper, Voibe, Wispr Flow, Apple Dictation, MacWhisper, and VoiceInk. Feature-by-feature comparison of Mac dictation apps in 2026.",
  keywords:
    "best dictation app mac 2026, Superwhisper alternative, Wispr Flow alternative, MacWhisper alternative, dictation app comparison",
  openGraph: {
    title: "Mac Dictation Apps Compared — 2026 Guide",
    description:
      "Feature-by-feature comparison of the top Mac dictation apps. Find the best voice-to-text tool for your workflow.",
    type: "website",
  },
};

const competitors = [
  {
    slug: "vs-superwhisper",
    name: "Superwhisper",
    tagline: "Premium dictation at a fraction of the price",
    price: "$249 lifetime",
    highlight: "17x cheaper Pro Pack",
    color: "#F59E0B",
  },
  {
    slug: "vs-voibe",
    name: "Voibe",
    tagline: "Developer-focused features Voibe can't match",
    price: "$99 lifetime / $4.90/mo",
    highlight: "Code Mode advantage",
    color: "#10B981",
  },
  {
    slug: "vs-wispr-flow",
    name: "Wispr Flow",
    tagline: "Offline privacy vs. cloud-dependent AI",
    price: "$10–15/mo",
    highlight: "100% offline, no subscription",
    color: "#8B5CF6",
  },
  {
    slug: "vs-apple-dictation",
    name: "Apple Dictation",
    tagline: "Why the built-in option falls short for pros",
    price: "Free (built-in)",
    highlight: "Code Mode + per-app profiles",
    color: "#6B7280",
  },
  {
    slug: "vs-macwhisper",
    name: "MacWhisper",
    tagline: "Dictation vs. transcription — which do you need?",
    price: "~$64 one-time",
    highlight: "Live dictation vs. file transcription",
    color: "#3B82F6",
  },
  {
    slug: "vs-voice-ink",
    name: "VoiceInk",
    tagline: "More features for developers at a similar price",
    price: "One-time purchase",
    highlight: "Code Mode + per-app profiles",
    color: "#EF4444",
  },
];

const comparisonData = [
  ["Price", "Free/$14.99", "$249/$8mo", "$99/$4.90mo", "$10-15/mo", "Free"],
  ["100% Offline", "Yes", "Partial", "Yes", "No", "Yes*"],
  ["Code Mode", "Yes", "No", "No", "No", "No"],
  ["Per-App Profiles", "Yes", "No", "No", "No", "No"],
  ["Casing Commands", "Yes", "No", "No", "No", "No"],
  ["Streaming Preview", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["AI Rewriting", "No", "Yes", "No", "Yes", "No"],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Compare", url: "/compare/" },
            ])
          ),
        }}
      />
      <main className="pt-32 pb-24 relative">
        {/* Background atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.08} />
          <DotGrid />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Compare" }]} />

          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Mac Dictation Apps{" "}
                <span className="text-primary">Compared</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Honest, feature-by-feature comparisons of Whisperer vs. every
                major Mac dictation app. We acknowledge where competitors excel
                and highlight where Whisperer offers unique value.
              </p>
              <p className="text-muted-foreground mb-12">
                Updated for 2026. All comparisons based on publicly available
                information and hands-on testing.
              </p>
            </FadeIn>

            <FadeInStagger className="grid gap-5">
              {competitors.map((comp) => (
                <StaggerItem key={comp.slug}>
                  <Link
                    href={`/compare/${comp.slug}/`}
                    className="group block"
                  >
                    <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between p-6">
                        <div className="flex items-start gap-4 flex-1">
                          {/* Avatar */}
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
                            style={{ backgroundColor: comp.color + "20", color: comp.color }}
                          >
                            {comp.name[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1.5">
                              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                Whisperer vs. {comp.name}
                              </h2>
                              <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded text-xs font-medium">
                                {comp.highlight}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{comp.tagline}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {comp.name}: {comp.price} — Whisperer: Free / $14.99 Pro
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all shrink-0 ml-4 group-hover:translate-x-1" />
                      </div>
                      {/* Colored left accent */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                        style={{ backgroundColor: comp.color }}
                      />
                    </GlowCard>
                  </Link>
                </StaggerItem>
              ))}
            </FadeInStagger>

            <GradientDivider className="my-16" />

            <ScaleIn>
              <section className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Quick Comparison Table
                </h2>
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
          </div>
        </div>
      </main>
    </>
  );
}
