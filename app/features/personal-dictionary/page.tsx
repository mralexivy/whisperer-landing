import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Apple, BookOpen, Search, Ear, Zap, Target, ArrowRight, FileJson, Tag } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Personal Dictionary & Spell Correction — Fix Dictation Accuracy",
  description:
    "Whisperer's three-tier correction engine with exact match, fuzzy SymSpell matching, and phonetic matching fixes dictation accuracy for technical terms, names, and jargon. Plus prompt words for vocabulary boosting.",
  keywords:
    "dictation custom dictionary mac, fix dictation accuracy, technical term dictation, personal dictionary voice to text, spell correction dictation, symspell dictation, phonetic matching voice, prompt words whisper, vocabulary boosting dictation",
  openGraph: {
    title: "Personal Dictionary & Spell Correction",
    description:
      "Three-tier correction engine fixes technical terms, names, and jargon. Prompt words bias recognition at the acoustic level.",
    type: "website",
  },
  alternates: { canonical: "/features/personal-dictionary" },
};

const correctionTiers = [
  {
    icon: Search,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    step: "1",
    title: "Exact & Phrase Lookup",
    description: "HashMap lookup for single words and multi-word phrases. Handles known misspellings and abbreviation expansions in O(1) time.",
    example: { from: "k8s", to: "Kubernetes" },
  },
  {
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    step: "2",
    title: "SymSpell Fuzzy Matching",
    description: "Edit-distance matching with prefix indexing (configurable 0-3 distance). A spell validator gate keeps valid English words from being \"corrected.\"",
    example: { from: "tenserflow", to: "TensorFlow" },
  },
  {
    icon: Ear,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    step: "3",
    title: "Phonetic Matching",
    description: "Catches homophones that edit distance misses. When you say \"their\" but mean \"there,\" this tier handles it.",
    example: { from: "their/there/they're", to: "Correct form based on context" },
  },
];

const dictionaryFeatures = [
  {
    icon: Tag,
    title: "Categories",
    description: "Group corrections by domain: medical, legal, programming, names. Makes large dictionaries manageable.",
  },
  {
    icon: Target,
    title: "Usage Tracking",
    description: "See which corrections fire most often. Helps you spot what matters and prune what doesn't.",
  },
  {
    icon: FileJson,
    title: "Import & Export",
    description: "JSON import/export for sharing word lists across devices or with teammates.",
  },
  {
    icon: BookOpen,
    title: "Dictionary Packs",
    description: "Pre-built correction databases you can toggle on or off. Auto-updated when new versions ship.",
  },
];

const faqs = [
  {
    question: "What are prompt words?",
    answer: "Prompt words bias transcription toward specific vocabulary — proper nouns, technical terms, brand names. For Whisper, they're passed as 'previous context'. For NVIDIA, they're compiled into CTC vocabulary models that boost probability at the acoustic decoder level.",
  },
  {
    question: "Will the dictionary change correctly spelled words?",
    answer: "No. The spell validator gate ensures that SymSpell fuzzy matches are validated against a spell checker — valid English words are not 'corrected' by fuzzy matching. Only genuinely misspelled or misheard words are fixed.",
  },
  {
    question: "Can I see what was corrected?",
    answer: "Yes. In the live preview, corrected words are shown with gradient color highlighting. Click any highlighted word to see the original transcription before correction.",
  },
  {
    question: "How do prompt words differ from dictionary entries?",
    answer: "Dictionary entries fix text after transcription (post-processing). Prompt words influence the transcription engine itself, biasing it to recognize specific vocabulary during the acoustic decoding phase.",
  },
];

export default function PersonalDictionaryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" },
        { name: "Personal Dictionary", url: "/features/personal-dictionary" },
      ])} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "Personal Dictionary" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Teach it <span className="text-primary">your vocabulary</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Generic dictation mangles technical terms. Whisperer fixes this with a three-tier
                correction engine: exact lookup, fuzzy SymSpell matching, and phonetic fallback.
                Add your own entries or use prompt words to bias recognition at the acoustic level.
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

      {/* Three-Tier Matching */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Three-Tier Correction Engine</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every transcription runs through three matching stages. Corrections only apply at
                word boundaries, so you won't get mangled partial replacements.
              </p>
            </FadeIn>

            <FadeInStagger className="grid gap-6">
              {correctionTiers.map((tier, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${tier.bgColor} flex items-center justify-center shrink-0`}>
                        <tier.icon className={`w-6 h-6 ${tier.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-primary">TIER {tier.step}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{tier.title}</h3>
                        <p className="text-muted-foreground mb-3">{tier.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <code className="bg-secondary/50 text-muted-foreground px-2 py-1 rounded font-mono">
                            {tier.example.from}
                          </code>
                          <span className="text-muted-foreground">→</span>
                          <code className="bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                            {tier.example.to}
                          </code>
                        </div>
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

      {/* Prompt Words */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Prompt Words</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike dictionary corrections, prompt words influence recognition before text is produced.
                The engine expects these terms and is more likely to hear them correctly.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whisper treats prompt words as prior context. NVIDIA compiles them into CTC vocabulary
                models that boost acoustic decoder probability. Same result: better recognition for
                your specific vocabulary.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
                <ul className="space-y-3">
                  {[
                    "Brand names and product names (e.g., \"Kubernetes\", \"PostgreSQL\", \"Next.js\")",
                    "Personal names and team member names",
                    "Medical or legal terminology",
                    "Company-specific acronyms and jargon",
                    "Foreign words used frequently in your workflow",
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

      {/* Dictionary Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Dictionary Management</h2>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-6">
              {dictionaryFeatures.map((feature, i) => (
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
                { title: "Personal Dictionary Setup Guide", href: "/blog/personal-dictionary-setup" },
                { title: "AI Writing & Post-Processing", href: "/features/ai-writing" },
                { title: "Live Preview", href: "/features/live-preview" },
                { title: "Offline Transcription Engines", href: "/features/offline-transcription" },
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
                Your terms, <span className="text-primary">recognized right</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Set up your personal dictionary in a few minutes. No more correcting the same mistakes.
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
