import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Sparkles,
  Pen,
  Languages,
  List,
  FileText,
  CheckCheck,
  Code,
  Mail,
  Paintbrush,
  Settings,
  ArrowRight,
} from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "AI Writing & Post-Processing — Offline AI for Dictation",
  description:
    "Whisperer's on-device AI rewrites, translates, formats, summarizes, and fixes grammar in your dictation — 100% offline. 10 built-in modes plus custom prompts. No cloud, no subscription.",
  keywords:
    "offline AI writing assistant mac, dictation rewrite offline, voice to text AI formatting, offline translation dictation, AI grammar correction mac, dictation summarize, offline LLM mac, voice to text post processing",
  openGraph: {
    title: "AI Writing & Post-Processing — Offline AI for Dictation",
    description:
      "Rewrite, translate, format, and summarize your dictation with an on-device LLM. 10 built-in modes. 100% offline.",
    type: "website",
  },
  alternates: { canonical: "/features/ai-writing" },
};

const aiModes = [
  {
    icon: Pen,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Rewrite",
    description: "Turns rambling speech into clean written text",
    before: "so basically what I was thinking is that we should probably go ahead and implement the new caching layer because it would make things faster",
    after: "We should implement the new caching layer to improve performance.",
  },
  {
    icon: Languages,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Translate",
    description: "Translate to any language, offline",
    before: "Please send me the quarterly report by Friday afternoon.",
    after: "Bitte senden Sie mir den Quartalsbericht bis Freitagnachmittag.",
  },
  {
    icon: FileText,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Format",
    description: "Adds Markdown structure: headers, bullets, emphasis",
    before: "the project has three phases first research second development third deployment each phase takes about two weeks",
    after: "# Project Phases\n\n1. **Research** — 2 weeks\n2. **Development** — 2 weeks\n3. **Deployment** — 2 weeks",
  },
  {
    icon: List,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    title: "Summarize",
    description: "Condenses long dictation to key points",
    before: "We had a long meeting today where we discussed the roadmap for Q3. The main topics were the mobile app launch which is scheduled for August, the API redesign which needs to start in July, and the hiring plan for two new engineers.",
    after: "Q3 roadmap: Mobile app launch (Aug), API redesign (start Jul), hire 2 engineers.",
  },
  {
    icon: CheckCheck,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "Grammar",
    description: "Fixes grammar and punctuation, keeps meaning intact",
    before: "the team have been working on there new feature and its going good so far",
    after: "The team has been working on their new feature and it's going well so far.",
  },
  {
    icon: List,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    title: "List Format",
    description: "Pulls items out of speech and formats them as bullets",
    before: "we need to buy milk eggs bread and also get some cheese oh and don't forget the butter",
    after: "- Milk\n- Eggs\n- Bread\n- Cheese\n- Butter",
  },
  {
    icon: Code,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    title: "Coding",
    description: "Outputs technical documentation or code comments",
    before: "this function takes a user ID and returns their profile data from the cache or falls back to the database if not cached",
    after: "/// Retrieves user profile by ID. Returns cached data if available; otherwise queries the database.",
  },
  {
    icon: Mail,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    title: "Email",
    description: "Formats as a professional email with greeting and sign-off",
    before: "hey can you send me the updated wireframes by end of day also the client wants to schedule a call for Thursday",
    after: "Hi,\n\nCould you please send me the updated wireframes by end of day?\n\nAlso, the client would like to schedule a call for Thursday.\n\nBest regards",
  },
  {
    icon: Paintbrush,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "Creative",
    description: "Adds vivid language and descriptive flair",
    before: "the sunset was nice and the beach was quiet",
    after: "The sunset painted the horizon in brilliant shades of amber and rose, while the beach lay serene beneath the fading light.",
  },
  {
    icon: Settings,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    title: "Custom",
    description: "Your own system prompt for any transformation",
    before: "Your dictated text goes here...",
    after: "Transformed according to your custom instructions.",
  },
];

const faqs = [
  {
    question: "Does this need the internet?",
    answer: "No. The LLM runs locally on your Mac. Nothing leaves your machine. No API keys, no cloud calls, no subscription.",
  },
  {
    question: "What modes are there?",
    answer: "Ten built-in: Rewrite, Translate, Format, Summarize, Grammar, List Format, Coding, Email, Creative, and Custom. Each uses a tuned temperature setting.",
  },
  {
    question: "Can I make my own mode?",
    answer: "Yes. Custom mode takes any system prompt you write. The LLM follows your instructions.",
  },
  {
    question: "What if AI processing fails?",
    answer: "You get the original transcription. Your dictation is never lost.",
  },
];

const relatedPosts = [
  { title: "How to Rewrite Dictation with Offline AI", href: "/blog/ai-rewriting-dictation-offline" },
  { title: "Dictation for Email: Write Emails 3x Faster", href: "/blog/dictation-for-email" },
  { title: "Personal Dictionary Setup", href: "/blog/personal-dictionary-setup" },
];

const relatedFeatures = [
  { title: "Personal Dictionary & Spell Correction", href: "/features/personal-dictionary" },
  { title: "100+ Languages & Translation", href: "/features/multilingual" },
  { title: "Transcription History", href: "/features/transcription-history" },
];

export default function AIWritingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" },
        { name: "AI Writing", url: "/features/ai-writing" },
      ])} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }, { label: "AI Writing" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI post-processing, <span className="text-primary">offline</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Talk like you normally do. The on-device LLM cleans it up: rewrites, translates,
                formats, summarizes, fixes grammar. Ten built-in modes plus custom prompts. No
                internet needed.
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

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground mb-4">
                After transcription, text runs through an optional AI step before landing in your
                app. The local LLM turns raw speech into clean, usable text.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Everything stays on your Mac. No API keys, no per-word pricing, no cloud round-trips.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Processing Pipeline</h3>
                <div className="flex flex-col gap-2">
                  {[
                    "Speech captured and transcribed offline",
                    "Dictionary corrections applied",
                    "Filler words removed (optional)",
                    "AI mode transforms the text",
                    "Polished text inserted into your app",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* 10 AI Modes */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">10 Built-In Modes</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Each mode uses a tuned temperature for its task. Before/after examples below.
              </p>
            </FadeIn>

            <FadeInStagger className="grid gap-8">
              {aiModes.map((mode, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg ${mode.bgColor} flex items-center justify-center`}
                        >
                          <mode.icon className={`w-5 h-5 ${mode.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{mode.title}</h3>
                          <p className="text-sm text-muted-foreground">{mode.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            Before
                          </div>
                          <p className="text-sm text-muted-foreground italic">{mode.before}</p>
                        </div>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            After
                          </div>
                          <p className="text-sm text-foreground whitespace-pre-line">{mode.after}</p>
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

      {/* Rewrite Mode */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Rewrite Mode</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Works on any text, not just dictation. Press Option+Shift+Tab to run your
                clipboard through the active AI mode.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Select text anywhere, copy it, hit the shortcut. The cleaned-up version replaces
                your clipboard. Quick way to polish notes, reformat existing text, or translate
                something.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">AI Enhancement History</h3>
                <p className="text-muted-foreground">
                  Every transformation saves before/after text in your history. Changed your mind?
                  Revert to the original with one click.
                </p>
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

      {/* Related Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <FadeIn>
                  <h3 className="text-xl font-bold mb-4">Related Blog Posts</h3>
                </FadeIn>
                <FadeInStagger className="grid gap-3">
                  {relatedPosts.map((post, i) => (
                    <StaggerItem key={i}>
                      <Link href={post.href} className="group block">
                        <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </FadeInStagger>
              </div>
              <div>
                <FadeIn>
                  <h3 className="text-xl font-bold mb-4">Related Features</h3>
                </FadeIn>
                <FadeInStagger className="grid gap-3">
                  {relatedFeatures.map((feature, i) => (
                    <StaggerItem key={i}>
                      <Link href={feature.href} className="group block">
                        <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {feature.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </FadeInStagger>
              </div>
            </div>
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
                AI cleanup, <span className="text-primary">local only</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                All AI processing happens on your Mac. No server calls, no data leaving your machine.
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
