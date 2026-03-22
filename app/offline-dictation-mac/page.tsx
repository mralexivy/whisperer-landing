import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Shield,
  Zap,
  Lock,
  WifiOff,
  Cpu,
  Brain,
  Monitor,
  HardDrive,
  Gauge,
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
    "Offline Dictation for Mac — 100% On-Device, No Cloud | Whisperer",
  description:
    "Whisperer is a 100% offline dictation app for Mac. Three local transcription engines (Whisper, Parakeet, Apple Speech), no internet required, no data leaves your Mac. $14.99 lifetime.",
  keywords:
    "offline dictation mac, speech to text mac offline, voice to text mac no cloud, offline voice recognition mac, on-device transcription mac, private dictation app mac, no internet dictation mac",
  openGraph: {
    title: "Offline Dictation for Mac — 100% On-Device",
    description:
      "Three local transcription engines. No internet required. No data leaves your Mac. $14.99 lifetime.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Dictation for Mac — 100% On-Device",
    description:
      "Three local transcription engines. No internet required. $14.99 lifetime.",
  },
};

const benefits = [
  {
    icon: Shield,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Complete Privacy",
    description:
      "Your voice data never leaves your Mac. No cloud servers, no third-party processing, no data collection. What you say stays on your device.",
  },
  {
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "Zero Latency",
    description:
      "No network round-trip means instant results. Whisperer processes speech locally with ~300ms live preview — faster than any cloud service.",
  },
  {
    icon: WifiOff,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Works Anywhere",
    description:
      "Airplane mode, coffee shop without WiFi, secure network — Whisperer works everywhere because it never needs the internet after the initial model download.",
  },
  {
    icon: Lock,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "No API Keys or Accounts",
    description:
      "No sign-up required. No API keys to manage. No cloud quotas or rate limits. Download, install, and start dictating immediately.",
  },
  {
    icon: HardDrive,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "No Per-Minute Charges",
    description:
      "Cloud dictation services charge per minute of audio. Whisperer is $14.99 once — dictate unlimited hours without worrying about costs.",
  },
  {
    icon: Gauge,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    title: "Apple Silicon Optimized",
    description:
      "Metal GPU acceleration for Whisper, Neural Engine for Parakeet. Whisperer is built specifically for Apple Silicon to maximize speed and efficiency.",
  },
];

const engines = [
  {
    name: "Whisper",
    hardware: "Metal GPU",
    languages: "99+ languages",
    models: "10+ models (75MB–2.9GB)",
    badge: "Default",
    badgeColor: "bg-blue-500/20 text-blue-400",
    description:
      "OpenAI's Whisper via whisper.cpp. Best accuracy and broadest language support. Uses Apple Silicon Metal GPU for fast inference.",
  },
  {
    name: "Parakeet",
    hardware: "Neural Engine",
    languages: "25 languages (v3)",
    models: "CTC with vocab boosting",
    badge: "Fastest",
    badgeColor: "bg-green-500/20 text-green-400",
    description:
      "NVIDIA Parakeet via CoreML. Runs on the dedicated Neural Engine, leaving GPU free. Supports CTC vocabulary boosting from your dictionary.",
  },
  {
    name: "Apple Speech",
    hardware: "System ML",
    languages: "System languages",
    models: "Built into macOS 26+",
    badge: "Native",
    badgeColor: "bg-purple-500/20 text-purple-400",
    description:
      "Apple's SpeechAnalyzer framework. Zero setup, no model downloads. Best for quick dictation when you don't need maximum accuracy.",
  },
];

const comparisonData = [
  ["100% Offline", "Yes", "No", "No", "Yes*"],
  ["Price", "$14.99 once", "$10–15/mo", "Free", "Free"],
  ["3-Year Cost", "$14.99", "$360–540", "Free", "Free"],
  ["Code Mode", "Yes", "No", "No", "No"],
  ["Per-App Profiles", "Yes", "No", "No", "No"],
  ["Multiple Engines", "3", "Cloud", "1", "1"],
  ["Personal Dictionary", "Yes", "No", "No", "No"],
  ["File Transcription", "Yes", "No", "No", "No"],
];

const faqs = [
  {
    question: "Is Whisperer really 100% offline?",
    answer:
      "Yes. After the initial model download (75MB–2.9GB depending on model), Whisperer never contacts any server. All transcription, AI post-processing, and text insertion happen entirely on your Mac.",
  },
  {
    question: "What is the best offline dictation app for Mac?",
    answer:
      "Whisperer is the most feature-rich offline dictation app for Mac, with three transcription engines (Whisper, Parakeet, Apple Speech), Code Mode for developers, per-app profiles, and personal dictionary — all for $14.99 lifetime. No competitor offers this combination at any price.",
  },
  {
    question: "How does offline dictation compare to cloud-based?",
    answer:
      "Offline dictation is faster (no network latency), more private (no data leaves your device), and cheaper (no per-minute charges). Cloud-based services may have slightly higher accuracy for niche languages, but for English and major languages, local Whisper models match or exceed cloud quality.",
  },
  {
    question: "Does offline dictation work on Intel Macs?",
    answer:
      "Yes, but Apple Silicon is recommended. Whisper runs on CPU for Intel Macs (slower). Parakeet and Apple Speech require Apple Silicon. Most models work well on M1 and later.",
  },
  {
    question: "How much storage do the models require?",
    answer:
      "Whisper models range from 75MB (Tiny) to 2.9GB (Large V3). The recommended balanced model is about 500MB. Parakeet models are 100–200MB. You choose which models to download.",
  },
  {
    question: "Can I use offline dictation in any app?",
    answer:
      "Yes. Whisperer inserts text into any focused field on your Mac — VS Code, Cursor, Slack, Gmail, Notion, Terminal, and any other app. It uses Accessibility insertion with a paste fallback.",
  },
  {
    question: "Is there a free offline dictation app for Mac?",
    answer:
      "Apple Dictation is free and runs on-device on Apple Silicon Macs. However, it lacks Code Mode, per-app profiles, personal dictionary, and file transcription. Whisperer's base app is $2.99 — essentially free compared to $99–$249 competitors.",
  },
  {
    question: "Does Whisperer support multiple languages offline?",
    answer:
      "Yes. Whisper supports 99+ languages offline. Parakeet supports 25 languages. You can set different languages per app with per-app profiles and use AI translation between languages — all offline.",
  },
];

const specs = [
  { label: "Min macOS", value: "macOS 14+" },
  { label: "Recommended", value: "Apple Silicon" },
  { label: "Smallest model", value: "75MB (Tiny)" },
  { label: "Best model", value: "~1.5GB (Large V3 Turbo)" },
  { label: "Live preview", value: "~300ms latency" },
  { label: "GPU acceleration", value: "Metal (Whisper)" },
  { label: "Neural Engine", value: "Parakeet / EOU" },
  { label: "Audio formats", value: "MP3, WAV, M4A, MP4+" },
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

export default function OfflineDictationMacPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Offline Dictation for Mac", url: "/offline-dictation-mac/" },
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
          <Breadcrumbs items={[{ label: "Offline Dictation for Mac" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Offline Dictation for{" "}
                <span className="text-primary">Mac</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Three on-device transcription engines. No internet required. No
                data leaves your Mac. Whisperer is the most private dictation
                app available — and at $14.99 lifetime, the most affordable.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                100% offline voice-to-text for macOS with Whisper (Metal GPU),
                Parakeet (Neural Engine), and Apple Speech. Code Mode for
                developers. Per-app profiles. Personal dictionary. No
                subscription.
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

      {/* Why Offline? */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.05} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why <span className="text-primary">Offline</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Cloud dictation sends your voice to remote servers. Whisperer
                keeps everything on your Mac — faster, cheaper, and completely
                private.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4`}
                    >
                      <benefit.icon
                        className={`w-6 h-6 ${benefit.color}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* Three Engines */}
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
                Three Transcription{" "}
                <span className="text-primary">Engines</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Hot-swap between engines without restarting. Each optimized for
                different hardware and use cases.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {engines.map((engine, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {engine.name}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${engine.badgeColor}`}
                      >
                        {engine.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {engine.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-border">
                      {[
                        { label: "Hardware", value: engine.hardware },
                        { label: "Languages", value: engine.languages },
                        { label: "Models", value: engine.models },
                      ].map((spec, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-muted-foreground">
                            {spec.label}
                          </span>
                          <span className="text-foreground font-mono">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
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
                Offline vs. Cloud{" "}
                <span className="text-primary">Dictation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                See how Whisperer compares to cloud-based and other offline
                alternatives.
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
                        Wispr Flow
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Google Voice
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Apple Dictation
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
            </div>
          </ScaleIn>
        </div>
      </section>

      <GradientDivider />

      {/* Technical Specs */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {specs.map((spec, i) => (
                  <SlideIn
                    key={i}
                    direction={i % 2 === 0 ? "left" : "right"}
                    delay={i * 0.05}
                  >
                    <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                      <div className="text-xs text-muted-foreground mb-1">
                        {spec.label}
                      </div>
                      <div className="text-sm text-foreground font-mono">
                        {spec.value}
                      </div>
                    </div>
                  </SlideIn>
                ))}
              </div>
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
                  title: "Offline Transcription Engines",
                   href: "/features/offline-transcription",
                },
                {
                  title: "Privacy: Offline vs Cloud Dictation",
                   href: "/blog/offline-vs-cloud-dictation-privacy",
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
