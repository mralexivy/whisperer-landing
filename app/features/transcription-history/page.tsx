import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
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
  title: "Transcription History & Statistics — Workspace | Whisperer",
  description:
    "Whisperer's workspace saves every transcription with full-text search, pin, flag, audio playback, re-transcribe, and usage statistics. Track words per minute, peak hours, and app usage — all offline.",
  keywords:
    "transcription history mac, dictation workspace, voice transcription search, dictation statistics, words per minute tracker, dictation history search, transcription playback, re-transcribe audio, dictation productivity",
  openGraph: {
    title: "Transcription History & Statistics — Workspace",
    description:
      "Search, pin, flag, and replay your transcriptions. Track WPM, peak hours, and app usage with built-in statistics.",
    type: "website",
  },
};

const workspaceFeatures = [
  { icon: Search, title: "Full-Text Search", description: "Search across all transcription text and notes instantly." },
  { icon: Pin, title: "Pin & Flag", description: "Mark important transcriptions for quick access. Filter by All, Pinned, or Flagged." },
  { icon: Play, title: "Audio Playback", description: "Listen to original recordings with variable speed playback." },
  { icon: RotateCcw, title: "Re-Transcribe", description: "Re-process any recording with different settings, model, or language." },
  { icon: FileText, title: "Edit & Notes", description: "Modify transcription text inline and add context annotations." },
  { icon: AudioLines, title: "Waveform Visualization", description: "Generated from saved audio data for visual reference." },
];

const statsCards = [
  { label: "Total Recordings", color: "text-blue-400", icon: FileText },
  { label: "Total Words", color: "text-green-400", icon: BarChart3 },
  { label: "Total Duration", color: "text-purple-400", icon: Clock },
  { label: "Average WPM", color: "text-orange-400", icon: BarChart3 },
];

const statsCharts = [
  { title: "Daily Activity Chart", description: "Bar chart with Words, Time, or Sessions metric selector." },
  { title: "App Usage", description: "Which apps received your transcribed text and how often." },
  { title: "Language Distribution", description: "Breakdown of which languages you dictate in." },
  { title: "Peak Hours Heatmap", description: "Heatmap of recording activity by hour of day." },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Features", url: "/features/" },
              { name: "Transcription History", url: "/features/transcription-history/" },
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
          <Breadcrumbs items={[{ label: "Features", href: "/features/" }, { label: "Transcription History" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Every dictation, <span className="text-primary">searchable & replayable</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whisperer saves every transcription with full metadata. Search, pin, flag, replay audio,
                re-transcribe with different settings, and track your dictation productivity with
                built-in statistics.
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
              <h2 className="text-3xl font-bold mb-4">Rich Metadata Per Recording</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every transcription stores duration, word count, words per minute, language, model used,
                target app, and dictionary corrections applied. Displayed as colorful metadata pills.
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
                  Transcriptions are automatically grouped by date: Today, Yesterday, Last 7 Days, Last 30 Days, and Older.
                </p>
                <h3 className="text-lg font-semibold mb-3">AI Enhancement History</h3>
                <p className="text-muted-foreground">
                  When AI post-processing is used, the before/after text is stored. Undo any AI enhancement
                  and revert to the original transcription.
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
              <h2 className="text-3xl font-bold mb-4">Usage Statistics Dashboard</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Track your dictation productivity over time with built-in charts and visualizations.
                View data by week, month, or year.
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
                Quick-access overlay showing recent transcriptions for instant clipboard copy.
                Press Option+V to summon the picker, cycle through recent items, and confirm
                to copy — no need to open the full workspace.
              </p>
              <p className="text-lg text-muted-foreground">
                Perfect for re-using a previous dictation or referencing something you said earlier.
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
                { question: "Does Whisperer save all my transcriptions?", answer: "Yes. Every live dictation and file transcription is saved to your local workspace with full-text search, audio playback, pin, flag, and re-transcribe capabilities. All data stays on your Mac." },
                { question: "Can I search my transcription history?", answer: "Yes. Full-text search across all transcriptions. Find any word or phrase from any past dictation session instantly." },
                { question: "What usage statistics does Whisperer track?", answer: "Words per minute (WPM), total words dictated, peak usage hours, per-app usage breakdown, and session history. All computed locally — no data is sent anywhere." },
                { question: "Can I re-transcribe old recordings?", answer: "Yes. Every recording is saved with its audio. You can re-transcribe with a different model or engine to improve accuracy on past recordings." },
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
            { question: "Does Whisperer save all my transcriptions?", answer: "Yes. Every live dictation and file transcription is saved to your local workspace with full-text search, audio playback, pin, flag, and re-transcribe capabilities." },
            { question: "Can I search my transcription history?", answer: "Yes. Full-text search across all transcriptions. Find any word or phrase from any past dictation session instantly." },
            { question: "What usage statistics does Whisperer track?", answer: "Words per minute (WPM), total words dictated, peak usage hours, per-app usage breakdown, and session history. All computed locally." },
            { question: "Can I re-transcribe old recordings?", answer: "Yes. Every recording is saved with its audio. You can re-transcribe with a different model or engine to improve accuracy." },
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
                { title: "Transcription History Blog Post", href: "/blog/whisperer-transcription-history/" },
                { title: "Track Dictation Productivity", href: "/blog/dictation-productivity-statistics/" },
                { title: "AI Writing & Post-Processing", href: "/features/ai-writing/" },
                { title: "File Transcription", href: "/features/file-transcription/" },
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
                Never lose a <span className="text-primary">dictation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer and keep a searchable archive of everything you dictate.
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
