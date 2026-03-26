import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Mic,
  Zap,
  Globe,
  Code,
  Layers,
  BookOpen,
  Sparkles,
  FileAudio,
  History,
  Shield,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  FadeInStagger,
  StaggerItem,
  ScaleIn,
  SlideIn,
  GlowCard,
} from "@/components/ui/animated";
import {
  SectionGlow,
  DotGrid,
  GradientDivider,
} from "@/components/ui/decorations";

export const metadata: Metadata = {
  title:
    "Speech to Text for Mac — Offline, Fast, $14.99 Lifetime | Whisperer",
  description:
    "Convert speech to text on Mac with Whisperer. Three offline AI engines, Code Mode for developers, 100+ languages, live preview. $2.99 base, $14.99 Pro lifetime. No subscription, no cloud.",
  keywords:
    "speech to text mac, speech to text mac offline, voice to text app mac, speech recognition mac, dictation app mac, convert speech to text macOS, best speech to text software mac",
  openGraph: {
    title: "Speech to Text for Mac — Offline, Fast, $14.99 Lifetime",
    description:
      "Three offline AI engines. Code Mode for developers. 100+ languages. $14.99 lifetime. No subscription.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text for Mac — Offline, $14.99 Lifetime",
    description:
      "Three offline AI engines. Code Mode. 100+ languages. No subscription.",
  },
  alternates: { canonical: "/speech-to-text-mac" },
};

const howItWorks = [
  {
    step: "01",
    title: "Hold Fn (or your shortcut)",
    description:
      "Press and hold the Fn key — or any custom shortcut you configure. Whisperer starts recording immediately from your Mac's microphone.",
  },
  {
    step: "02",
    title: "Speak naturally",
    description:
      "Talk at your normal pace. Live preview shows your words appearing in real-time with ~300ms latency. Speak for as long as you need.",
  },
  {
    step: "03",
    title: "Release — text appears",
    description:
      "Release the key and your transcribed text is inserted directly into the focused app — VS Code, Slack, Gmail, Notion, Terminal, or any text field.",
  },
];

const features = [
  {
    icon: Mic,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "Live Preview",
    description:
      "See your words appear in real-time as you speak. ~300ms latency using a dedicated Neural Engine streaming model.",
  },
  {
    icon: Globe,
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    title: "100+ Languages",
    description:
      "Whisper supports 99+ languages offline. Parakeet supports 25. Set different languages per app with per-app profiles.",
  },
  {
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Code Mode",
    description:
      "Dictate camelCase, snake_case, PascalCase, symbols, parentheses, and semicolons by voice. Built for developers.",
  },
  {
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Per-App Profiles",
    description:
      "Automatic mode switching — Code Mode in VS Code, natural language in Slack, email formatting in Gmail.",
  },
  {
    icon: Sparkles,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "AI Post-Processing",
    description:
      "10 offline AI modes — Rewrite, Translate, Format, Summarize, Grammar, Email, and more. All on-device.",
  },
  {
    icon: BookOpen,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    title: "Personal Dictionary",
    description:
      "Add custom terms, names, and jargon. Fuzzy and phonetic matching ensures they're recognized correctly.",
  },
  {
    icon: FileAudio,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    title: "File Transcription",
    description:
      "Drag audio or video files into Whisperer to transcribe them offline. MP3, WAV, M4A, MP4, and more.",
  },
  {
    icon: History,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Transcription History",
    description:
      "Every dictation saved with full-text search, audio playback, re-transcribe, and usage statistics.",
  },
  {
    icon: Shield,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    title: "100% Private",
    description:
      "All processing runs on your Mac. No cloud, no data transmission, no accounts. Your voice stays yours.",
  },
];

const comparisonData = [
  ["Price", "$14.99 once", "$249/$8mo", "$10–15/mo", "Free"],
  ["100% Offline", "Yes", "Partial", "No", "Yes*"],
  ["Code Mode", "Yes", "No", "No", "No"],
  ["Per-App Profiles", "Yes", "No", "No", "No"],
  ["AI Post-Processing", "Yes (10 modes)", "Yes", "Yes", "No"],
  ["Engines", "3", "1", "Cloud", "1"],
  ["File Transcription", "Yes", "Yes", "No", "No"],
  ["Languages", "100+", "100+", "100+", "20+"],
];

const faqs = [
  {
    question: "What is the best speech to text app for Mac?",
    answer:
      "Whisperer is the most feature-rich speech-to-text app for Mac at $14.99 lifetime. It includes three offline transcription engines (Whisper, Parakeet, Apple Speech), Code Mode for developers, per-app profiles, personal dictionary, and AI post-processing. No competitor offers this combination of features.",
  },
  {
    question: "Is speech to text available offline on Mac?",
    answer:
      "Yes. Whisperer runs 100% offline using local AI models. After downloading a model (75MB–2.9GB), no internet connection is needed. Apple Dictation also works offline on Apple Silicon Macs but with fewer features.",
  },
  {
    question: "How accurate is speech to text on Mac?",
    answer:
      "Modern Whisper models achieve near-human accuracy for major languages. Whisperer's Large V3 Turbo model (~1.5GB) delivers excellent accuracy. You can also add a personal dictionary for project-specific terms to improve recognition of names, jargon, and technical vocabulary.",
  },
  {
    question: "Can I use speech to text in VS Code?",
    answer:
      "Yes. Whisperer inserts text into any focused field on your Mac, including VS Code, Cursor, JetBrains IDEs, Terminal, Slack, Gmail, and Notion. With Code Mode, you can dictate camelCase, snake_case, and programming symbols.",
  },
  {
    question: "How much does speech to text cost on Mac?",
    answer:
      "Whisperer starts at $2.99 one-time for the base app. The Pro Pack ($14.99 lifetime) adds Code Mode, per-app profiles, personal dictionary, and AI post-processing. Competitors charge $99–$249 for lifetime licenses or $10–15/month for subscriptions.",
  },
  {
    question: "Does speech to text work with multiple languages?",
    answer:
      "Yes. Whisperer supports 100+ languages with the Whisper engine and 25 languages with Parakeet. You can set different languages per app using per-app profiles, and use offline AI translation between languages.",
  },
];

function ValueCell({
  value,
  isWhisperer,
}: {
  value: string;
  isWhisperer: boolean;
}) {
  if (value === "Yes" || value.startsWith("Yes")) {
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

export default function SpeechToTextMacPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              {
                name: "Speech to Text for Mac",
                url: "/speech-to-text-mac",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <SectionGlow
            position="top-right"
            color="purple"
            size="md"
            intensity={0.06}
          />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Speech to Text for Mac" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Speech to Text for{" "}
                <span className="text-primary">Mac</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Hold Fn, speak, release — your words appear in any app.
                Whisperer converts speech to text using three on-device AI
                engines with no internet required.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                100+ languages. Code Mode for developers. AI post-processing.
                $2.99 base, $14.99 Pro Pack lifetime. No subscription, no cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                <Link href="/pricing">
                  <Button variant="heroOutline" size="xl" className="gap-3">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How It <span className="text-primary">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Three steps. No setup. No accounts.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-mono font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* Features Grid */}
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
                Every Feature,{" "}
                <span className="text-primary">100% Offline</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A full-featured speech-to-text suite in a lightweight menu bar
                app. All powered by local AI on your Mac.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
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
                    <h3 className="font-semibold text-foreground mb-2">
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

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Whisperer{" "}
                <span className="text-primary">Compares</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                The best speech-to-text value on Mac — more features, lower
                price.
              </p>
            </div>
          </FadeIn>
          <ScaleIn>
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">
                        Feature
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-primary bg-primary/5">
                        Whisperer
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Superwhisper
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Wispr Flow
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Apple
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonData.map(([feature, ...values], i) => (
                      <tr
                        key={i}
                        className="hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-3 pr-4 text-muted-foreground font-medium">
                          {feature}
                        </td>
                        {values.map((val, j) => (
                          <td
                            key={j}
                            className={`text-center py-3 px-3 ${
                              j === 0 ? "bg-primary/5" : ""
                            }`}
                          >
                            <ValueCell value={val} isWhisperer={j === 0} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/20">
                  $14.99 lifetime — 17x cheaper than Superwhisper
                </span>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      <GradientDivider />

      {/* Three Engines — brief */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
          <SectionGlow
            position="bottom-center"
            color="purple"
            size="md"
            intensity={0.06}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Three AI{" "}
                <span className="text-primary">Engines</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the best engine for your workflow. Hot-swap without
                restarting.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Whisper",
                badge: "Default",
                badgeColor: "bg-blue-500/20 text-blue-400",
                hardware: "Metal GPU",
                desc: "Best accuracy. 99+ languages. 10+ model sizes from 75MB to 2.9GB.",
              },
              {
                name: "Parakeet",
                badge: "Fastest",
                badgeColor: "bg-green-500/20 text-green-400",
                hardware: "Neural Engine",
                desc: "Fastest on Apple Silicon. CTC vocabulary boosting from your dictionary.",
              },
              {
                name: "Apple Speech",
                badge: "Native",
                badgeColor: "bg-purple-500/20 text-purple-400",
                hardware: "System ML",
                desc: "Zero setup. No downloads. Built into macOS 26+.",
              },
            ].map((engine, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {engine.name}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${engine.badgeColor}`}
                      >
                        {engine.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {engine.desc}
                    </p>
                    <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 font-mono">
                      {engine.hardware}
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn delay={0.3}>
            <div className="text-center mt-8">
              <Link
                 href="/features/offline-transcription"
                className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
              >
                Compare engines in detail
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>
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
                {
                  title: "Offline Dictation for Mac",
                   href: "/offline-dictation-mac",
                },
                {
                  title: "Voice to Text for Developers",
                   href: "/voice-to-text-developers",
                },
                {
                  title: "Compare All Dictation Apps",
                   href: "/compare",
                },
                {
                  title: "Pricing — $14.99 Lifetime",
                   href: "/pricing",
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
