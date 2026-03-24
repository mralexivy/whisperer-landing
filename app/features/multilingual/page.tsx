import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, Globe, Languages, Layers, Cpu, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "100+ Languages — Multilingual Offline Dictation | Whisperer",
  description:
    "Dictate in over 100 languages on Mac with Whisperer. Per-app language profiles, AI-powered offline translation, and language-specific accuracy. All offline — no cloud, no subscription.",
  keywords:
    "multilingual dictation mac, dictation app 100 languages, voice to text spanish mac, voice to text german mac, voice to text french mac, offline translation dictation, multilingual speech recognition, per-app language profiles, dictation multiple languages, voice to text japanese chinese mac",
  openGraph: {
    title: "100+ Languages — Multilingual Offline Dictation",
    description:
      "Dictate in 100+ languages with per-app language profiles and AI-powered offline translation.",
    type: "website",
  },
  alternates: { canonical: "/features/multilingual" },
};

const languageHighlights = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese",
  "Dutch", "Russian", "Chinese", "Japanese", "Korean", "Arabic",
  "Hindi", "Turkish", "Polish", "Swedish", "Norwegian", "Danish",
  "Finnish", "Czech", "Greek", "Hebrew", "Thai", "Vietnamese",
];

const backendLanguages = [
  {
    backend: "Whisper",
    count: "99+",
    description: "Broadest language coverage. Supports virtually every major and many minor languages worldwide.",
    hardware: "Metal GPU",
  },
  {
    backend: "Parakeet v3",
    count: "25",
    description: "Top 25 languages with optimized Neural Engine models. Fastest inference for supported languages.",
    hardware: "Neural Engine",
  },
  {
    backend: "Parakeet v2",
    count: "1",
    description: "English-only optimized model. Maximum speed for English dictation.",
    hardware: "Neural Engine",
  },
  {
    backend: "Apple Speech",
    count: "System",
    description: "Languages available through macOS system speech recognition (macOS Tahoe+).",
    hardware: "System ML",
  },
];

const faqs = [
  {
    question: "How many languages does Whisperer support?",
    answer: "With the Whisper backend, Whisperer supports 99+ languages — virtually every major language and many regional ones. Parakeet v3 supports 25 languages, and Parakeet v2 is English-only.",
  },
  {
    question: "Can I dictate in one language and translate to another?",
    answer: "Yes. Whisperer's AI Translate mode can translate your dictation to any target language, entirely offline. Speak in Spanish, get English text — or any other language combination.",
  },
  {
    question: "Can I set different languages for different apps?",
    answer: "Yes. With per-app profiles, you can configure a different dictation language for each application. For example, dictate in English in VS Code and French in Pages.",
  },
  {
    question: "Should I use auto-detect or explicit language selection?",
    answer: "Explicit language selection is recommended for best accuracy. Auto-detection works but may occasionally misidentify the language, especially for short utterances or languages with similar phonetics.",
  },
];

export default function MultilingualPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Features", url: "/features/" },
              { name: "Multilingual", url: "/features/multilingual/" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "Multilingual" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Dictate in <span className="text-primary">100+ languages</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whisperer supports over 100 languages for offline dictation. Set per-app language profiles,
                use AI-powered translation between languages, and auto-detect the language you&apos;re speaking — all on-device.
              </p>
              <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="gap-3">
                  <Apple className="w-5 h-5" />
                  Download on Mac App Store
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Language Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Supported Languages</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A sample of the 100+ languages available with the Whisper backend. All processed offline on your Mac.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-8">
                {languageHighlights.map((lang, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-primary/50 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
                <span className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary">
                  +75 more
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Backend Language Support */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Language Support by Backend</h2>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-6">
              {backendLanguages.map((item, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{item.backend}</h3>
                      <span className="text-2xl font-bold text-primary">{item.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
                      Hardware: {item.hardware}
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Multilingual Features</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-6">
              {[
                {
                  icon: Globe,
                  title: "Explicit Language Selection",
                  description: "Choose your dictation language explicitly for best accuracy. Recommended over auto-detection for consistent results.",
                },
                {
                  icon: Cpu,
                  title: "Auto-Detection",
                  description: "Let Whisper automatically detect the language you're speaking. Useful when switching between languages frequently.",
                },
                {
                  icon: Layers,
                  title: "Per-App Language Profiles",
                  description: "Set a different dictation language for each application. English in VS Code, French in Pages, German in Mail — automatic switching.",
                },
                {
                  icon: Languages,
                  title: "AI Translation Mode",
                  description: "Dictate in one language and have Whisperer's on-device LLM translate to another. Speak in Spanish, get English text — entirely offline.",
                },
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex gap-4 p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {faqs.map((faq, i) => (
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
      </section>

      <GradientDivider />

      {/* Related */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h3 className="text-xl font-bold mb-4">Related</h3>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Multilingual Dictation Guide", href: "/blog/multilingual-dictation-guide" },
                { title: "Offline Transcription Engines", href: "/features/offline-transcription" },
                { title: "AI Writing & Translation", href: "/features/ai-writing" },
                { title: "Per-App Profiles Blog Post", href: "/blog/dictation-for-per-app-profiles" },
              ].map((link, i) => (
                <StaggerItem key={i}>
                  <Link href={link.href} className="group block">
                    <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
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

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <SectionGlow position="center" size="lg" intensity={0.12} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Your language, <span className="text-primary">your Mac</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer and dictate in any of 100+ languages, completely offline.
              </p>
              <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
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
