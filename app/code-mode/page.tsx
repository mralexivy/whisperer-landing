import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { CodeEditorMockup } from "@/components/landing/CodeEditorMockup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Apple, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider, AnimatedBorder } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Code Mode — Dictate Code by Voice on Mac",
  description:
    "Whisperer's Code Mode lets you dictate camelCase, snake_case, CONSTANT_CASE, symbols, and punctuation by voice. Built for developers who use VS Code, Cursor, and Terminal.",
  keywords:
    "code mode dictation, camelCase voice dictation, voice type code symbols, dictation app for developers",
  openGraph: {
    title: "Code Mode — Dictate Code by Voice",
    description:
      "Speak camelCase, snake_case, symbols, and punctuation. Built for developers.",
    type: "website",
    images: [{ url: "/assets/og/og-code-mode.png", width: 1200, height: 630, alt: "Whisperer Code Mode" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-code-mode.png"],
  },
  alternates: { canonical: "/code-mode" },
};

const examples = [
  {
    voice: '"def snake case validate input open paren data colon dict close paren arrow bool colon"',
    output: "def validate_input(data: dict) -> bool:",
    lang: "Python",
  },
  {
    voice: '"const camel case fetch user data equals async open paren close paren fat arrow open brace"',
    output: "const fetchUserData = async () => {",
    lang: "TypeScript",
  },
  {
    voice: '"if camel case is valid open paren camel case user input close paren open brace"',
    output: "if isValid(userInput) {",
    lang: "JavaScript",
  },
  {
    voice: '"class pascal case user auth service open brace"',
    output: "class UserAuthService {",
    lang: "Java / TypeScript",
  },
  {
    voice: '"constant case max retry attempts equals three semicolon"',
    output: "MAX_RETRY_ATTEMPTS = 3;",
    lang: "Any",
  },
  {
    voice: '"git checkout dash b feature slash snake case add user auth"',
    output: "git checkout -b feature/add_user_auth",
    lang: "Terminal",
  },
];

const features = [
  {
    title: "Casing Commands",
    desc: 'Say "camel case", "snake case", "pascal case", or "constant case" before any words to apply the naming convention automatically.',
    num: "01",
  },
  {
    title: "Symbol Grammar",
    desc: "Parentheses, brackets, braces, quotes, semicolons, colons, arrows — all spoken naturally and inserted as the correct character.",
    num: "02",
  },
  {
    title: "Literal Mode",
    desc: "Prevents autocorrection of identifiers. When you say a variable name, it stays exactly as spoken — no 'helpful' corrections.",
    num: "03",
  },
  {
    title: "Cleaner Spacing",
    desc: "Intelligent spacing around operators and punctuation. Code Mode understands that there's no space between a function name and its opening parenthesis.",
    num: "04",
  },
  {
    title: "Per-App Activation",
    desc: "Code Mode activates automatically when your IDE is in the foreground. Switch to Slack and it goes back to natural language mode.",
    num: "05",
  },
  {
    title: "Works Everywhere",
    desc: "VS Code, Cursor, JetBrains, Xcode, Terminal, iTerm2, Warp — any text field on your Mac.",
    num: "06",
  },
];

const codeFaqs = [
  {
    question: "Can you dictate camelCase by voice on Mac?",
    answer: "Yes. Whisperer's Code Mode lets you say 'camel case get user name' and it outputs 'getUserName'. It also supports snake_case, PascalCase, and CONSTANT_CASE — all by voice.",
  },
  {
    question: "Does Code Mode work in VS Code and Cursor?",
    answer: "Yes. Code Mode works in any text field on your Mac, including VS Code, Cursor, JetBrains IDEs, Xcode, Terminal, iTerm2, and Warp. It inserts via Accessibility with a paste fallback.",
  },
  {
    question: "How do you dictate symbols like parentheses and brackets?",
    answer: "Speak the symbol name naturally: 'open paren', 'close bracket', 'semicolon', 'fat arrow' (=>), 'arrow' (->). Code Mode recognizes 20+ symbol commands and inserts the correct character.",
  },
  {
    question: "Is Code Mode available offline?",
    answer: "Yes. Code Mode is 100% offline — it's a local text transformation, not a cloud service. No internet required, no latency, no data leaves your Mac.",
  },
  {
    question: "How much does Code Mode cost?",
    answer: "Code Mode is included in the Pro Pack at $14.99 one-time (lifetime). No subscription. The base Whisperer app is $2.99.",
  },
  {
    question: "Can Code Mode handle terminal commands?",
    answer: "Yes. Code Mode correctly handles dashes, dots, slashes, and paths in terminal commands. Say 'git checkout dash b feature slash snake case add user auth' to get 'git checkout -b feature/add_user_auth'.",
  },
];

export default function CodeModePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Code Mode", url: "/code-mode" },
      ])} />
      <JsonLd data={faqSchema(codeFaqs)} />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Code Mode" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Pro Pack Feature
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Code Mode
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Speak symbols, casing, and structure correctly in IDEs and terminals. The only Mac dictation mode built specifically for writing code by voice.
              </p>
              <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="gap-3">
                  <Apple className="w-5 h-5" />
                  Get Whisperer with Code Mode — $14.99
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Code Editor Demo */}
      <section className="py-12">
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

      {/* Live Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">See It in Action</h2>
            </FadeIn>
            <FadeInStagger className="space-y-6">
              {examples.map((ex, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">{ex.lang}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 italic">
                        {ex.voice}
                      </p>
                      <div className="bg-[#0C0C1A] rounded-lg px-4 py-3 border border-primary/10">
                        <code className="text-primary font-mono text-sm">{ex.output}</code>
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

      {/* Features */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">What Code Mode Does</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-6">
              {features.map((feature, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                    <div className="p-6 flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-mono font-bold text-sm">{feature.num}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
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

      {/* Related Reading */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {[
                { title: "How to Dictate Code on Mac", href: "/blog/how-to-dictate-code-on-mac" },
                { title: "How to Dictate camelCase and snake_case", href: "/blog/how-to-dictate-camelcase-snake-case" },
                { title: "Voice Coding — The Complete Guide", href: "/voice-coding" },
                { title: "Compare Whisperer vs. Competitors", href: "/compare" },
              ].map((link, i) => (
                <StaggerItem key={i}>
                  <Link href={link.href} className="group block">
                    <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.title}
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
              {codeFaqs.map((faq, i) => (
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
          <SectionGlow position="center" size="lg" intensity={0.15} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Dictate Code?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Code Mode is included in the Pro Pack ($14.99 one-time). Download Whisperer free and upgrade when you&apos;re ready.
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
