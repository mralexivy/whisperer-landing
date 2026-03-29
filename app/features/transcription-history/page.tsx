import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Search,
  Pin,
  Flag,
  Play,
  RotateCcw,
  BarChart3,
  Clock,
  FileText,
  ArrowRight,
  AudioLines,
} from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Transcription History & Statistics — Workspace",
  description:
    "Whisperer's workspace saves every transcription with full-text search, pin, flag, audio playback, re-transcribe, and usage statistics. Track words per minute, peak hours, and app usage — all offline.",
  keywords:
    "transcription history mac, dictation workspace, voice transcription search, dictation statistics, words per minute tracker, dictation history search, transcription playback, re-transcribe audio, dictation productivity",
  openGraph: {
    title: "Transcription History & Statistics — Workspace",
    description:
      "Search, pin, flag, and replay your transcriptions. Track WPM, peak hours, and app usage with built-in statistics.",
    type: "website",
    images: [{ url: "/assets/og/og-feature-transcription-history.png", width: 1200, height: 630, alt: "Transcription History" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-transcription-history.png"] },
  alternates: { canonical: "/features/transcription-history" },
};

const workspaceFeatures = [
  { icon: Search, title: "Full-Text Search", description: "Find any word or phrase across all your transcriptions." },
  { icon: Pin, title: "Pin & Flag", description: "Mark the important ones. Filter by All, Pinned, or Flagged." },
  { icon: Play, title: "Audio Playback", description: "Replay original recordings at variable speed." },
  { icon: RotateCcw, title: "Re-Transcribe", description: "Run any recording through a different model or language." },
  { icon: FileText, title: "Edit & Notes", description: "Fix text inline, add annotations." },
  { icon: AudioLines, title: "Waveform Visualization", description: "Visual reference generated from the saved audio." },
];

const statsCards = [
  { label: "Total Recordings", color: "text-blue-400", icon: FileText },
  { label: "Total Words", color: "text-green-400", icon: BarChart3 },
  { label: "Total Duration", color: "text-purple-400", icon: Clock },
  { label: "Average WPM", color: "text-orange-400", icon: BarChart3 },
];

const statsCharts = [
  { title: "Daily Activity Chart", description: "Bar chart showing words, time, or sessions." },
  { title: "App Usage", description: "Which apps got your text and how often." },
  { title: "Language Distribution", description: "What languages you've been dictating in." },
  { title: "Peak Hours Heatmap", description: "When you record, by hour of day." },
];

const metadata_pills = [
  { label: "WPM", color: "bg-orange-500/20 text-orange-400" },
  { label: "Word Count", color: "bg-blue-500/20 text-blue-400" },
  { label: "Language", color: "bg-red-500/20 text-red-400" },
  { label: "Duration", color: "bg-green-500/20 text-green-400" },
  { label: "Model Used", color: "bg-purple-500/20 text-purple-400" },
  { label: "Target App", color: "bg-pink-500/20 text-pink-400" },
];

export default function TranscriptionHistoryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" },
        { name: "Transcription History", url: "/features/transcription-history" },
      ])} />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "Transcription History" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Every dictation, <span className="text-primary">saved and searchable</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nothing disappears. Every transcription lands in your workspace with full metadata.
                Search it, pin it, replay the audio, re-run it through a different model. Built-in
                stats track how much you dictate.
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

      {/* Workspace Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Workspace Features</h2>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workspaceFeatures.map((feature, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Metadata */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Metadata for Each Recording</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Duration, word count, WPM, language, model, target app, dictionary corrections.
                Shown as colored pills on each entry.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-8">
                {metadata_pills.map((pill, i) => (
                  <span
                    key={i}
                    className={`text-sm font-medium px-4 py-2 rounded-full ${pill.color}`}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Date Grouping</h3>
                <p className="text-muted-foreground mb-4">
                  Auto-grouped: Today, Yesterday, Last 7 Days, Last 30 Days, Older.
                </p>
                <h3 className="text-lg font-semibold mb-3">AI Enhancement History</h3>
                <p className="text-muted-foreground">
                  AI post-processing saves before/after text. One click to undo and get the original back.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Usage Statistics</h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how much you dictate over time. Charts show weekly, monthly, or yearly data.
              </p>
            </FadeIn>

            <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {statsCards.map((card, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors text-center">
                    <card.icon className={`w-6 h-6 ${card.color} mx-auto mb-2`} />
                    <div className="text-sm text-muted-foreground">{card.label}</div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>

            <FadeInStagger className="grid sm:grid-cols-2 gap-4">
              {statsCharts.map((chart, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold text-foreground mb-1">{chart.title}</h3>
                    <p className="text-sm text-muted-foreground">{chart.description}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Transcription Picker */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Transcription Picker (Option+V)</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Press Option+V for a quick overlay of recent transcriptions. Cycle through,
                hit enter, and it copies to clipboard. No need to open the full workspace.
              </p>
              <p className="text-lg text-muted-foreground">
                Handy when you need to reuse something you said earlier.
              </p>
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
                { question: "Does it save everything?", answer: "Yes. Live dictation and file transcriptions all land in your local workspace. Search, playback, pin, flag, re-transcribe. Stays on your Mac." },
                { question: "Can I search old transcriptions?", answer: "Full-text search across everything. Find any word from any session." },
                { question: "What stats does it track?", answer: "WPM, total words, peak hours, per-app breakdown, session history. All computed locally, nothing sent anywhere." },
                { question: "Can I re-run old recordings?", answer: "Yes. Audio is saved with each transcription. Re-transcribe with a different model anytime." },
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
        { question: "Does Whisperer save all my transcriptions?", answer: "Yes. Every live dictation and file transcription is saved to your local workspace with full-text search, audio playback, pin, flag, and re-transcribe capabilities." },
        { question: "Can I search my transcription history?", answer: "Yes. Full-text search across all transcriptions. Find any word or phrase from any past dictation session instantly." },
        { question: "What usage statistics does Whisperer track?", answer: "Words per minute (WPM), total words dictated, peak usage hours, per-app usage breakdown, and session history. All computed locally." },
        { question: "Can I re-transcribe old recordings?", answer: "Yes. Every recording is saved with its audio. You can re-transcribe with a different model or engine to improve accuracy." },
      ])} />

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
                { title: "Transcription History Blog Post", href: "/blog/whisperer-transcription-history" },
                { title: "Track Dictation Productivity", href: "/blog/dictation-productivity-statistics" },
                { title: "AI Writing & Post-Processing", href: "/features/ai-writing" },
                { title: "File Transcription", href: "/features/file-transcription" },
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
                Nothing gets <span className="text-primary">lost</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every dictation archived and searchable. Find what you said last week or last year.
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
