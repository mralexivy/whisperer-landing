import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, Cpu, Zap, Brain, ArrowRight, Shield, HardDrive } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Offline Transcription Engines — Whisper, Parakeet & Apple Speech | Whisperer",
  description:
    "Whisperer supports three offline transcription backends: Whisper (Metal GPU), Parakeet (Neural Engine), and Apple Speech. Compare 10+ model sizes from 75MB to 2.9GB. 100% on-device, no cloud.",
  keywords:
    "whisper.cpp mac app, offline speech recognition mac, parakeet transcription, whisper model comparison, metal GPU transcription, neural engine speech, apple silicon dictation, on-device transcription, whisper large v3 turbo, offline voice recognition",
  openGraph: {
    title: "Offline Transcription Engines — Whisper, Parakeet & Apple Speech",
    description:
      "Three offline backends, 10+ models, Metal GPU acceleration. Compare speed vs accuracy for on-device dictation.",
    type: "website",
  },
};

const backends = [
  {
    name: "Whisper",
    engine: "whisper.cpp (vendored C library)",
    hardware: "Metal GPU",
    languages: "99+ languages",
    description:
      "The default backend. Best accuracy and broadest language coverage. Uses Apple Silicon Metal GPU acceleration for fast inference. Supports 10+ model sizes from Tiny (75MB) to Large V3 (2.9GB).",
    badge: "Default",
    badgeColor: "bg-blue-500/20 text-blue-400",
  },
  {
    name: "Parakeet",
    engine: "FluidAudio (CoreML)",
    hardware: "Apple Neural Engine",
    languages: "25 languages (v3), English-only (v2)",
    description:
      "Fastest backend on Apple Silicon. Runs on the dedicated Neural Engine, leaving GPU free for other tasks. Features CTC vocabulary boosting — your dictionary entries and prompt words bias the decoder at the acoustic level.",
    badge: "Fastest",
    badgeColor: "bg-green-500/20 text-green-400",
  },
  {
    name: "Apple Speech",
    engine: "SpeechAnalyzer (macOS 26+)",
    hardware: "System ML",
    languages: "System languages",
    description:
      "Native Apple framework available on macOS Tahoe and later. Uses Apple's built-in speech recognition models with system-level optimization.",
    badge: "Native",
    badgeColor: "bg-purple-500/20 text-purple-400",
  },
];

const whisperModels = [
  { name: "Tiny", size: "75 MB", speed: "Fastest", notes: "Quick, lower accuracy" },
  { name: "Base", size: "142 MB", speed: "Fast", notes: "Good for simple dictation" },
  { name: "Small", size: "466 MB", speed: "Medium", notes: "Balanced" },
  { name: "Medium", size: "1.5 GB", speed: "Slow", notes: "High accuracy" },
  { name: "Large V3", size: "2.9 GB", speed: "Slowest", notes: "Maximum accuracy" },
  { name: "Large V3 Turbo", size: "1.5 GB", speed: "Fast", notes: "8x faster than Large V3" },
  { name: "Large V3 Turbo Q5", size: "547 MB", speed: "Fast", notes: "Default — best balance of speed, size, accuracy", default: true },
  { name: "Large V3 Q5", size: "1.1 GB", speed: "Medium", notes: "Quantized, smaller file" },
  { name: "Distil Large V3", size: "756 MB", speed: "Very Fast", notes: "6x faster than Large V3" },
  { name: "Distil Small (EN)", size: "166 MB", speed: "Very Fast", notes: "English only" },
];

const engineeringHighlights = [
  { icon: Zap, text: "Model stays pre-loaded in memory for instant recording start with zero loading delay" },
  { icon: Cpu, text: "P-core thread pinning on Apple Silicon — only performance cores used, E-cores excluded to prevent straggler effects" },
  { icon: Shield, text: "GPU warm-up on model load — silent transcription compiles Metal shaders so first real recording has no stall" },
  { icon: Brain, text: "Deterministic greedy decoding (temperature=0.0) makes per-chunk latency predictable" },
  { icon: HardDrive, text: "Memory safety check before model load — warns if insufficient system memory" },
  { icon: Zap, text: "Hot-swap models without restarting the app" },
];

const faqs = [
  {
    question: "Which transcription backend should I choose?",
    answer: "Start with Whisper (the default). It offers the best accuracy and language coverage. If you want maximum speed and primarily dictate in English, try Parakeet. Apple Speech requires macOS Tahoe or later.",
  },
  {
    question: "Which Whisper model is best?",
    answer: "The default Large V3 Turbo Q5 (547 MB) offers the best balance of speed, accuracy, and file size. Use smaller models (Tiny, Base) for speed on older hardware. Use Large V3 (2.9 GB) for maximum accuracy in challenging audio.",
  },
  {
    question: "Can I switch between backends without restarting?",
    answer: "Yes. Whisperer supports hot-swapping — change your transcription backend or model size, and the new engine loads while the old one is released. No app restart needed.",
  },
  {
    question: "How much RAM do the models need?",
    answer: "Models range from ~100MB (Tiny) to ~3GB (Large V3) of memory. Whisperer checks available system memory before loading and warns if insufficient. The default model (Large V3 Turbo Q5) uses about 600MB.",
  },
];

export default function OfflineTranscriptionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Features", url: "/features/" },
              { name: "Offline Transcription", url: "/features/offline-transcription/" },
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
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "Offline Transcription" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Three transcription engines, <span className="text-primary">zero cloud</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whisper on Metal GPU, Parakeet on Neural Engine, or Apple Speech. Choose from 10+
                model sizes to match your hardware and accuracy needs. Everything runs locally on your Mac.
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

      {/* Backends */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Transcription Backends</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-6">
              {backends.map((backend, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{backend.name}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${backend.badgeColor}`}>
                        {backend.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{backend.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-muted-foreground text-xs mb-1">Engine</div>
                        <div className="text-foreground font-mono text-xs">{backend.engine}</div>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-muted-foreground text-xs mb-1">Hardware</div>
                        <div className="text-foreground font-mono text-xs">{backend.hardware}</div>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-muted-foreground text-xs mb-1">Languages</div>
                        <div className="text-foreground font-mono text-xs">{backend.languages}</div>
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

      {/* Whisper Models Table */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Whisper Model Comparison</h2>
              <p className="text-lg text-muted-foreground mb-8">
                All models are downloaded once and cached locally. Switch between them at any time.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">Model</th>
                      <th className="text-left py-3 pr-4 font-semibold">Size</th>
                      <th className="text-left py-3 pr-4 font-semibold">Speed</th>
                      <th className="text-left py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {whisperModels.map((model, i) => (
                      <tr
                        key={i}
                        className={`hover:bg-secondary/30 transition-colors ${
                          (model as typeof model & { default?: boolean }).default ? "bg-primary/5" : ""
                        }`}
                      >
                        <td className="py-3 pr-4">
                          <span className="font-medium text-foreground">{model.name}</span>
                          {(model as typeof model & { default?: boolean }).default && (
                            <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              Default
                            </span>
                          )}
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground font-mono">{model.size}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{model.speed}</td>
                        <td className="py-3 text-muted-foreground">{model.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Engineering Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Engineering Under the Hood</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {engineeringHighlights.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
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
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h3 className="text-xl font-bold mb-4">Related</h3>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Best Whisper Model for Dictation", href: "/blog/best-whisper-model-for-dictation" },
                { title: "Whisper vs Parakeet vs Apple Speech", href: "/blog/whisper-vs-parakeet-transcription" },
                { title: "Live Preview Engine", href: "/features/live-preview" },
                { title: "100+ Languages", href: "/features/multilingual" },
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
                On-device transcription, <span className="text-primary">your choice of engine</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer free. All transcription engines run locally on your Mac.
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
