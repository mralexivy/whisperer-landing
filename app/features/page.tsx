import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/animated";
import { GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid } from "@/components/ui/decorations";
import { FeaturesCards } from "./FeaturesCards";

export const metadata: Metadata = {
  title: "Features — Whisperer | Offline Dictation App for Mac",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Features", url: "/features" },
            ])
          ),
        }}
      />

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
                Every feature, <span className="text-primary">100% offline</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whisperer packs a full-featured dictation suite into a lightweight menu bar app.
                AI writing, multiple transcription engines, personal dictionary, file transcription,
                and 100+ languages — all running locally on your Mac.
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
                      Dictate camelCase, snake_case, symbols by voice
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
                      Complete guide to coding by voice on Mac
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
                Try every feature, <span className="text-primary">free</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer from the Mac App Store with a free trial. Base App $2.99, Pro Pack $14.99 lifetime
                for Code Mode, AI post-processing, per-app profiles, and personal dictionary.
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
