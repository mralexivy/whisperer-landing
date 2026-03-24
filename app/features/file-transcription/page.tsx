import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, FileAudio, Upload, Cpu, Copy, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "File Transcription — Transcribe Audio & Video Files Offline | Whisperer",
  description:
    "Transcribe audio and video files offline on your Mac with Whisperer. Drag-and-drop interface, same high-quality Whisper/Parakeet engine used for live dictation. No upload, no cloud, no per-minute charges.",
  keywords:
    "transcribe audio files offline mac, offline audio transcription, transcribe video mac, offline file transcription, transcribe mp3 offline, transcribe wav mac, local audio transcription, batch transcription mac, whisper file transcription",
  openGraph: {
    title: "File Transcription — Transcribe Audio & Video Files Offline",
    description:
      "Drag-and-drop audio/video files for offline transcription. Same engine as live dictation. No cloud, no per-minute charges.",
    type: "website",
  },
  alternates: { canonical: "/features/file-transcription" },
};

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Drop your file",
    description: "Drag an audio or video file into Whisperer, or use the file picker.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Transcribe offline",
    description: "The same Whisper/Parakeet engine processes the file entirely on your Mac.",
  },
  {
    icon: Copy,
    step: "03",
    title: "Copy the result",
    description: "View the transcription in your workspace and copy it with one click.",
  },
];

const benefits = [
  {
    title: "Same Engine as Live Dictation",
    description: "File transcription uses the exact same pre-loaded model and backend as real-time dictation. No separate setup or download.",
  },
  {
    title: "No Per-Minute Charges",
    description: "Transcribe unlimited files. No cloud API fees, no per-minute pricing, no usage limits. Pay once for the app.",
  },
  {
    title: "100% Offline",
    description: "Your audio files never leave your Mac. No uploading to servers, no cloud processing. Complete privacy.",
  },
  {
    title: "Saved to History",
    description: "File transcription results are saved to your workspace with full search, copy, and export support.",
  },
];

export default function FileTranscriptionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Features", url: "/features/" },
              { name: "File Transcription", url: "/features/file-transcription/" },
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
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "File Transcription" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transcribe files <span className="text-primary">without the cloud</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Drop an audio or video file into Whisperer and get a full transcription — offline,
                private, with no per-minute charges. Uses the same high-quality Whisper or Parakeet
                engine as live dictation.
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
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">How File Transcription Works</h2>
            </FadeIn>
            <FadeInStagger className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <StaggerItem key={i} className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Why Transcribe Locally?</h2>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors h-full">
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Use Cases */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    "Transcribe meeting recordings for searchable notes",
                    "Convert voice memos to text",
                    "Create subtitles from video files",
                    "Transcribe podcast episodes for show notes",
                    "Convert lecture recordings to study notes",
                    "Process interview recordings into written form",
                    "Transcribe confidential audio without cloud upload",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
                { question: "What audio formats does Whisperer support?", answer: "MP3, WAV, M4A, FLAC, OGG, and video formats like MP4, MOV, and MKV. Whisperer extracts the audio track automatically from video files." },
                { question: "Is file transcription included in the free trial?", answer: "Yes. File transcription is included in the base app ($2.99). No Pro Pack required. Drag any audio or video file into Whisperer to transcribe it offline." },
                { question: "How long does transcription take?", answer: "Depends on the model and file length. A 10-minute recording typically takes 20-60 seconds with Whisper Large V3 Turbo on Apple Silicon. Smaller models are faster." },
                { question: "Are there per-minute charges?", answer: "No. Whisperer is a one-time purchase. Transcribe unlimited files with no per-minute fees, no cloud charges, and no usage limits." },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema([
            { question: "What audio formats does Whisperer support?", answer: "MP3, WAV, M4A, FLAC, OGG, and video formats like MP4, MOV, and MKV. Whisperer extracts the audio track automatically from video files." },
            { question: "Is file transcription included in the free trial?", answer: "Yes. File transcription is included in the base app ($2.99). No Pro Pack required." },
            { question: "How long does transcription take?", answer: "Depends on the model and file length. A 10-minute recording typically takes 20-60 seconds with Whisper Large V3 Turbo on Apple Silicon." },
            { question: "Are there per-minute charges?", answer: "No. Whisperer is a one-time purchase. Transcribe unlimited files with no per-minute fees, no cloud charges, and no usage limits." },
          ])),
        }}
      />

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
                { title: "Transcribe Audio Files Offline (Guide)", href: "/blog/transcribe-audio-files-offline-mac" },
                { title: "Offline Transcription Engines", href: "/features/offline-transcription" },
                { title: "Transcription History", href: "/features/transcription-history" },
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
                Transcribe any file, <span className="text-primary">privately</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer and transcribe audio and video files without uploading anything.
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
