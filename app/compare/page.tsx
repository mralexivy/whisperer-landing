import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Check, X } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";
import { CompareCards } from "./CompareCards";

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

const comparisonData = [
  ["Price", "$2.99/$14.99", "$249/$8mo", "$99/$4.90mo", "$10-15/mo", "Free"],
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

          <FadeIn>
            <div className="max-w-3xl mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Mac Dictation Apps{" "}
                <span className="text-primary">Compared</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Honest, feature-by-feature comparisons of Whisperer vs every
                major Mac dictation app. We acknowledge where competitors excel
                and highlight where Whisperer offers unique value.
              </p>
              <p className="text-muted-foreground">
                Updated for 2026. All comparisons based on publicly available
                information and hands-on testing.
              </p>
            </div>
          </FadeIn>

          <CompareCards />

          <GradientDivider className="max-w-7xl mx-auto my-16" />

          <ScaleIn>
            <section className="bg-card border border-border rounded-2xl p-8 max-w-7xl mx-auto">
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
      </main>
    </>
  );
}
