import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { CodeEditorMockup } from "@/components/landing/CodeEditorMockup";
import { Button } from "@/components/ui/button";
import { Apple, Code, Terminal, Layers, BookOpen, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Voice Coding on Mac — The Complete Guide | Whisperer",
  description:
    "The definitive guide to voice coding on Mac. Dictate camelCase, snake_case, symbols, and punctuation by voice. Works in VS Code, Cursor, Terminal. 100% offline.",
  keywords:
    "voice coding mac, dictate code mac, voice coding, code mode dictation, voice to text for coding",
  openGraph: {
    title: "Voice Coding on Mac — The Complete Guide",
    description:
      "Dictate code by voice with camelCase, snake_case, and symbols. Works in VS Code, Cursor, Terminal. 100% offline.",
    type: "website",
  },
  alternates: { canonical: "/voice-coding" },
};

const ides = [
  { name: "VS Code", desc: "Full editor support with Code Mode" },
  { name: "Cursor", desc: "Speak AI prompts and code naturally" },
  { name: "JetBrains IDEs", desc: "IntelliJ, WebStorm, PyCharm" },
  { name: "Terminal / iTerm2", desc: "Dictate CLI commands and scripts" },
  { name: "Warp", desc: "Modern terminal voice input" },
  { name: "Xcode", desc: "Swift and Objective-C development" },
];

const voiceCodingFaqs = [
  {
    question: "What is the best voice coding tool for Mac?",
    answer: "Whisperer is the only Mac dictation app with a dedicated Code Mode that supports camelCase, snake_case, PascalCase, CONSTANT_CASE, and 20+ symbol commands by voice. Priced at $14.99 lifetime (Pro Pack), it's also the most affordable option compared to Superwhisper ($249) or Wispr Flow ($10-15/mo).",
  },
  {
    question: "Can I use voice coding in Cursor IDE?",
    answer: "Yes. Whisperer works in Cursor, VS Code, JetBrains IDEs, Xcode, Terminal, and any text field on your Mac. Code Mode activates automatically when your IDE is in the foreground via per-app profiles.",
  },
  {
    question: "Is voice coding good for developers with RSI?",
    answer: "Yes. Voice coding reduces repetitive strain by eliminating keyboard typing for routine code. Many developers with RSI, carpal tunnel, or tendinitis use Whisperer to continue coding comfortably. It's 100% offline, so there's no cloud latency.",
  },
  {
    question: "How accurate is voice-to-code dictation?",
    answer: "Whisperer uses Whisper (Metal GPU), Parakeet (Neural Engine), or Apple Speech for transcription, combined with a personal dictionary for project-specific terms. Code Mode then applies casing and symbol grammar rules — the combination delivers high accuracy for code dictation.",
  },
  {
    question: "Does voice coding work offline?",
    answer: "Yes. Whisperer is 100% offline. Transcription runs on-device using local AI models. No internet connection needed, no data leaves your Mac, no cloud API charges.",
  },
];

const relatedPosts = [
  { title: "How to Dictate Code on Mac", href: "/blog/how-to-dictate-code-on-mac" },
  { title: "Voice Coding with Cursor", href: "/blog/voice-coding-with-cursor" },
  { title: "Voice Dictation for VS Code", href: "/blog/voice-dictation-for-vscode" },
  { title: "How to Dictate camelCase and snake_case", href: "/blog/how-to-dictate-camelcase-snake-case" },
  { title: "RSI Prevention for Developers", href: "/blog/rsi-prevention-voice-coding" },
  { title: "Voice Coding vs. Typing Speed", href: "/blog/voice-coding-vs-typing-speed" },
];

export default function VoiceCodingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Voice Coding", url: "/voice-coding/" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(voiceCodingFaqs)),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Voice Coding" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Voice Coding on <span className="text-primary">Mac</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Dictate code by voice — complete with camelCase, snake_case, parentheses, brackets, and semicolons.
                Whisperer&apos;s Code Mode is the only Mac dictation tool built specifically for developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="gap-3">
                    <Apple className="w-5 h-5" />
                    Download on Mac App Store
                  </Button>
                </a>
                <Link href="/code-mode">
                  <Button variant="heroOutline" size="xl" className="gap-3">
                    <Code className="w-5 h-5" />
                    Learn about Code Mode
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Code Editor Demo */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
                <div className="relative pb-12">
                  <CodeEditorMockup />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is Voice Coding */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">What Is Voice Coding?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Voice coding means writing code by speaking instead of typing. Instead of pressing keys for each character,
                you speak naturally and your words are converted into properly formatted code — including symbols, casing
                conventions, and punctuation.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Standard dictation tools like Apple Dictation produce prose, not code. They autocorrect aggressively,
                add unwanted spaces, and have no concept of programming syntax. Whisperer&apos;s Code Mode solves this
                with purpose-built voice commands for developers.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-bold mb-4">Casing Commands</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">You Say</th>
                      <th className="text-left py-3 font-semibold">Output</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['"camel case get user name"', "getUserName"],
                      ['"snake case get user name"', "get_user_name"],
                      ['"pascal case user service"', "UserService"],
                      ['"constant case max retries"', "MAX_RETRIES"],
                    ].map(([voice, output], i) => (
                      <tr key={i} className="hover:bg-secondary/30 transition-colors">
                        <td className="py-3 pr-4 text-muted-foreground">{voice}</td>
                        <td className="py-3">
                          <code className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-mono">
                            {output}
                          </code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h3 className="text-2xl font-bold mb-4">Symbol Commands</h3>
              <FadeInStagger className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  ['"open paren"', "("],
                  ['"close paren"', ")"],
                  ['"open bracket"', "["],
                  ['"close bracket"', "]"],
                  ['"open brace"', "{"],
                  ['"close brace"', "}"],
                  ['"arrow"', "->"],
                  ['"fat arrow"', "=>"],
                  ['"semicolon"', ";"],
                  ['"colon"', ":"],
                ].map(([voice, output], i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-2.5 hover:border-primary/50 hover:scale-[1.03] transition-all duration-200">
                      <span className="text-sm text-muted-foreground">{voice}</span>
                      <code className="text-primary font-mono font-semibold">{output}</code>
                    </div>
                  </StaggerItem>
                ))}
              </FadeInStagger>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Supported IDEs */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Supported IDEs & Editors</h2>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-4">
              {ides.map((ide, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="font-semibold text-foreground mb-1">{ide.name}</h3>
                    <p className="text-sm text-muted-foreground">{ide.desc}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
            <FadeIn delay={0.3}>
              <p className="text-muted-foreground mt-6">
                Code Mode works in <strong className="text-foreground">any text field</strong> on your Mac — these are just the most popular IDEs.
                Whisperer inserts text via Accessibility with a paste fallback.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Key Features for Developers</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-6">
              {[
                { icon: Code, title: "Code Mode", desc: "Speak symbols, casing conventions, and programming syntax. camelCase, snake_case, CONSTANT_CASE, parentheses, brackets — all by voice." },
                { icon: Layers, title: "Per-App Profiles", desc: "Code Mode activates automatically in your IDE. Slack gets chat style. Gmail gets email format. Zero manual switching." },
                { icon: BookOpen, title: "Personal Dictionary", desc: "Add project-specific terms, library names, and acronyms so they're recognized correctly every time." },
                { icon: Terminal, title: "Terminal Support", desc: "Dictate shell commands, git operations, and scripts. Code Mode handles dashes, dots, and paths correctly." },
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                    <div className="flex gap-4 p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
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

      {/* Related Blog Posts */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Voice Coding Guides</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {relatedPosts.map((post, i) => (
                <StaggerItem key={i}>
                  <Link href={post.href} className="group block">
                    <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                      </div>
                    </GlowCard>
                  </Link>
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
              {voiceCodingFaqs.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.12} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Start Voice Coding Today</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer free from the Mac App Store. Upgrade to Pro Pack ($14.99) for Code Mode.
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

      <Footer />
    </div>
  );
}
