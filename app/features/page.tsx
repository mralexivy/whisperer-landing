import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/animated";
import { GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid } from "@/components/ui/decorations";
import { FeaturesCards } from "./FeaturesCards";

export const metadata: Metadata = {
  title: "Features | Offline Dictation App for Mac",
  description:
    "Explore all Whisperer features: AI post-processing, multiple transcription engines, live preview, personal dictionary, transcription history, file transcription, and 100+ languages. All offline.",
  keywords:
    "whisperer features, offline dictation features mac, dictation app capabilities, voice to text features, mac dictation app features",
  openGraph: {
    title: "Whisperer Features — Everything You Need for Offline Dictation",
    description:
      "AI writing, 3 transcription engines, live preview, personal dictionary, history, file transcription, 100+ languages. All offline on Mac.",
    type: "website",
  },
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" },
      ])} />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Features" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Everything runs <span className="text-primary">offline</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A full dictation suite in a menu bar app. AI cleanup, multiple transcription engines,
                personal dictionary, file transcription, 100+ languages. All local, nothing phones home.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pt-8 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesCards />

          {/* Developer Features */}
          <FadeIn delay={0.3}>
            <div className="max-w-7xl mx-auto mt-12">
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">
                Developer Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link href="/code-mode" className="group block">
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        Code Mode
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Speak camelCase, snake_case, symbols naturally
                    </p>
                  </GlowCard>
                </Link>
                <Link href="/voice-coding" className="group block">
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        Voice Coding Guide
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      How to code by voice on Mac
                    </p>
                  </GlowCard>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.12} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Try it <span className="text-primary">free</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Free trial on the Mac App Store. Base app is $2.99. Pro Pack ($14.99 lifetime)
                adds Code Mode, AI post-processing, per-app profiles, and personal dictionary.
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
    </>
  );
}
