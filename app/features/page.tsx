import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Sparkles,
  Cpu,
  Eye,
  BookOpen,
  Clock,
  FileAudio,
  Globe,
  ArrowRight,
} from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid } from "@/components/ui/decorations";

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
};

const features = [
  {
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "AI Writing & Post-Processing",
    description:
      "Rewrite, translate, format, summarize, and fix grammar — all with an on-device LLM. 10 built-in modes plus custom prompts.",
    href: "/features/ai-writing/",
  },
  {
    icon: Cpu,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Offline Transcription Engines",
    description:
      "Three backends — Whisper (Metal GPU), Parakeet (Neural Engine), and Apple Speech. 10+ model sizes from 75MB to 2.9GB.",
    href: "/features/offline-transcription/",
  },
  {
    icon: Eye,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "Live Preview",
    description:
      "See your words appear in real-time as you speak. Dual-engine streaming with ~300ms latency and typewriter animation.",
    href: "/features/live-preview/",
  },
  {
    icon: BookOpen,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    title: "Personal Dictionary & Spell Correction",
    description:
      "Three-tier correction engine with fuzzy matching, phonetic matching, and prompt word vocabulary boosting.",
    href: "/features/personal-dictionary/",
  },
  {
    icon: Clock,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Transcription History & Statistics",
    description:
      "Full workspace with search, pin, flag, audio playback, re-transcribe, and usage statistics with charts.",
    href: "/features/transcription-history/",
  },
  {
    icon: FileAudio,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    title: "File Transcription",
    description:
      "Transcribe audio and video files offline. Drag-and-drop interface using the same high-quality transcription engine.",
    href: "/features/file-transcription/",
  },
  {
    icon: Globe,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "100+ Languages",
    description:
      "Dictate in over 100 languages with per-app language profiles. AI-powered translation between languages, all offline.",
    href: "/features/multilingual/",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Features", url: "/features/" },
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
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <Link href={feature.href} className="group block h-full">
                  <GlowCard className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div
                      className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}
                    >
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </FadeInStagger>

          {/* Also link to Code Mode and Voice Coding */}
          <FadeIn delay={0.3}>
            <div className="max-w-6xl mx-auto mt-12">
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">
                Developer Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link href="/code-mode/" className="group block">
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
                <Link href="/voice-coding/" className="group block">
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
                Download Whisperer free from the Mac App Store. Upgrade to Pro Pack ($14.99 lifetime)
                for Code Mode, per-app profiles, and personal dictionary.
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
