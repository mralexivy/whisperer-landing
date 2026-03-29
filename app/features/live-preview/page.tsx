import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, Eye, Zap, Cpu, Type, Palette, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Live Preview — Real-Time Streaming Transcription",
  description:
    "See your words appear in real-time as you speak with Whisperer's dual-engine live preview. ~300ms latency, typewriter animation, keyword highlighting. 100% offline on Mac.",
  keywords:
    "real-time dictation preview mac, streaming transcription mac, live voice to text, real-time speech to text, dictation preview, live transcription overlay, streaming voice recognition",
  openGraph: {
    title: "Live Preview — Real-Time Streaming Transcription",
    description:
      "See transcribed words appear in real-time as you speak. Dual-engine streaming with ~300ms latency.",
    type: "website",
    images: [{ url: "/assets/og/og-feature-live-preview.png", width: 1200, height: 630, alt: "Live Preview" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-live-preview.png"] },
  alternates: { canonical: "https://whispererapp.com/features/live-preview" },
};

const features = [
  {
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "~300ms Latency",
    description: "The EOU engine chews through 320ms audio windows on the Neural Engine and spits out word-level partials almost immediately.",
  },
  {
    icon: Cpu,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Dual-Engine Architecture",
    description: "Preview runs on the Neural Engine. Main transcription runs on Metal GPU. They don't fight over resources.",
  },
  {
    icon: Type,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Typewriter Animation",
    description: "Words appear progressively with a subtle typewriter effect. Feels natural, not jarring.",
  },
  {
    icon: Palette,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Keyword Highlighting",
    description: "Dictionary corrections show up with colored highlights. Click one to see what the original transcription was.",
  },
];

export default function LivePreviewPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" },
        { name: "Live Preview", url: "/features/live-preview" },
      ])} />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "Live Preview" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Watch words appear <span className="text-primary">as you talk</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Text shows up while you're still speaking. A dedicated streaming engine on the
                Neural Engine handles preview with ~300ms latency. When you release the record
                button, the main engine delivers the final polished result.
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

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Two-Tier Streaming Architecture</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The preview model is separate from the main engine. You get instant visual feedback
                without any hit to final accuracy.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="text-sm font-semibold text-primary mb-2">Primary: EOU Engine</div>
                  <p className="text-sm text-muted-foreground mb-3">
                    An NVIDIA End-of-Utterance model on the Neural Engine processes 320ms audio
                    windows and produces word-level partials with ~300ms latency.
                  </p>
                  <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
                    Neural Engine | 320ms windows | ~300ms latency
                  </div>
                </GlowCard>
                <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Fallback: StreamingTranscriber</div>
                  <p className="text-sm text-muted-foreground mb-3">
                    If the EOU model isn't available, preview falls back to the main engine
                    processing 2-second chunks during recording.
                  </p>
                  <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
                    Metal GPU | 2s chunks | Used as fallback
                  </div>
                </GlowCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Features */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Live Preview Features</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-6">
              {features.map((feature, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex gap-4 p-6">
                      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
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

      {/* Technical Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Technical Details</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Audio buffering", value: "5120 samples (320ms)" },
                  { label: "Preview latency", value: "~300ms" },
                  { label: "EOU hardware", value: "Apple Neural Engine" },
                  { label: "Main engine", value: "Metal GPU (separate)" },
                  { label: "Waveform bars", value: "20-bar real-time display" },
                  { label: "Resource usage", value: "Toggleable to save power" },
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-sm text-foreground font-mono">{item.value}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
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
              {[
                { question: "How fast is the live preview?", answer: "About 300ms latency. The EOU engine processes 320ms audio windows on the Neural Engine, faster than any cloud service." },
                { question: "Does live preview affect final accuracy?", answer: "No. It's a separate lightweight model. The main engine runs independently and produces the final result when you release the button." },
                { question: "Can I disable live preview to save battery?", answer: "Yes. Toggle it off in Settings. The main transcription engine still works; you just won't see words appearing in real-time." },
                { question: "Does live preview work with all engines?", answer: "The primary EOU preview needs the Neural Engine (Apple Silicon). If unavailable, it falls back to the main engine with 2-second chunks." },
              ].map((faq, i) => (
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
      <JsonLd data={faqSchema([
        { question: "How fast is the live preview?", answer: "The EOU engine processes 320ms audio windows on the Neural Engine, producing word-level partial transcripts with approximately 300ms latency." },
        { question: "Does live preview affect final accuracy?", answer: "No. Live preview uses a separate lightweight model. The main transcription engine delivers the final refined result independently." },
        { question: "Can I disable live preview to save battery?", answer: "Yes. Live preview is toggleable in Settings. Disabling it reduces CPU/Neural Engine usage during recording." },
        { question: "Does live preview work with all engines?", answer: "The primary EOU preview runs on the Neural Engine (Apple Silicon). A StreamingTranscriber fallback is available when the EOU model is unavailable." },
      ])} />

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
                { title: "Offline Transcription Engines", href: "/features/offline-transcription" },
                { title: "Personal Dictionary", href: "/features/personal-dictionary" },
                { title: "Getting Started Guide", href: "/blog/getting-started-whisperer" },
                { title: "All Features", href: "/features" },
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
                Words appear <span className="text-primary">instantly</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See what you're saying while you're still saying it.
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
