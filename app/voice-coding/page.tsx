import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Code,
  Heart,
  Pen,
  Keyboard,
  Timer,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Voice Coding on Mac — The Complete Guide",
  description:
    "The definitive guide to voice coding on Mac. Learn what voice coding is, who uses it, how it compares to typing, and how to get started with Whisperer's Code Mode.",
  keywords:
    "voice coding mac, what is voice coding, voice coding guide, code by voice, voice coding vs typing, voice coding RSI, voice coding beginners, voice coding productivity",
  openGraph: {
    title: "Voice Coding on Mac — The Complete Guide",
    description:
      "What is voice coding, who uses it, and how to get started on Mac. The definitive guide.",
    type: "website",
    images: [{ url: "/assets/og/og-voice-coding.png", width: 1200, height: 630, alt: "Voice Coding on Mac" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-voice-coding.png"],
  },
  alternates: { canonical: "https://whispererapp.com/voice-coding" },
};

const whoUsesIt = [
  {
    icon: Heart,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    title: "Developers with RSI",
    description:
      "Carpal tunnel, tendinitis, repetitive strain. Voice coding lets you keep working without the constant typing.",
  },
  {
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "Developers who hate boilerplate",
    description:
      "Speaking boilerplate, comments, and docs is often faster than typing. Voice coding works alongside your keyboard, not instead of it.",
  },
  {
    icon: Pen,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Technical Writers",
    description:
      "Write docs, blog posts, or READMEs alongside code. Switch between code and prose dictation without changing tools.",
  },
  {
    icon: Users,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Multitaskers",
    description:
      "Send Slack messages while reviewing code. Answer emails with your hands on the keyboard. Dictate notes during calls.",
  },
];

const voiceCodingVsTyping = [
  {
    category: "Boilerplate code",
    typing: "Repetitive, tedious, wears out your hands",
    voice: "Speak once, paste everywhere — faster for repetitive patterns",
  },
  {
    category: "Complex logic",
    typing: "Keyboard is usually better for precise editing",
    voice: "Useful for writing pseudocode first, then refining",
  },
  {
    category: "Comments & docs",
    typing: "Slows down the flow — many developers skip it",
    voice: "Speak naturally, documentation gets written",
  },
  {
    category: "Chat & email",
    typing: "Context switching from code to prose",
    voice: "Natural language dictation — faster than typing prose",
  },
  {
    category: "Terminal commands",
    typing: "Quick for short commands",
    voice: "Useful for long commands, git operations, scripts",
  },
];

const gettingStartedSteps = [
  {
    step: "01",
    title: "Download Whisperer",
    description:
      "Install Whisperer from the Mac App Store. The free version includes core dictation. Upgrade to Pro Pack ($14.99) for Code Mode.",
  },
  {
    step: "02",
    title: "Download a model",
    description:
      "Choose a transcription model. The default Large V3 Turbo Q5 (547 MB) offers the best balance of speed and accuracy.",
  },
  {
    step: "03",
    title: "Enable Code Mode",
    description:
      "Open Settings and enable Code Mode. Set up a per-app profile so it activates automatically in your IDE.",
  },
  {
    step: "04",
    title: "Hold Fn and speak",
    description:
      'Hold Fn (or your custom shortcut), speak your code — "camel case get user name" — and release. Text appears in your editor.',
  },
];

const voiceCodingFaqs = [
  {
    question: "What is voice coding?",
    answer:
      "Writing code by speaking instead of typing. A tool like Whisperer converts speech into code with symbols, camelCase, snake_case, punctuation. Standard dictation tools produce prose, not code.",
  },
  {
    question: "Is voice coding faster than typing?",
    answer:
      "Depends on what you are doing. Voice is faster for boilerplate, comments, docs, chat messages. Keyboard is faster for complex logic and precise edits. Most people use both.",
  },
  {
    question: "What is the best voice coding tool for Mac?",
    answer:
      "Whisperer is the only Mac dictation app with Code Mode for camelCase, snake_case, PascalCase, CONSTANT_CASE, and 20+ symbol commands. $14.99 one-time. Superwhisper is $249, Wispr Flow is $10-15/month.",
  },
  {
    question: "Can voice coding help with RSI?",
    answer:
      "Yes. It reduces typing for routine code. Many developers with RSI, carpal tunnel, or tendinitis use it. Even just dictating comments and docs helps.",
  },
  {
    question: "Does voice coding work offline?",
    answer:
      "With Whisperer, yes. Runs on-device using local AI. No internet needed, nothing leaves your Mac.",
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

      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Voice Coding", url: "/voice-coding" },
      ])} />
      <JsonLd data={faqSchema(voiceCodingFaqs)} />

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
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Writing code by voice. What it is, who uses it, and how to get started on Mac.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Voice coding does not replace your keyboard. It is another tool for tasks where speaking is faster or easier on your hands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="gap-3">
                    <Apple className="w-5 h-5" />
                    Download on Mac App Store
                  </Button>
                </a>
                <Link href="/voice-to-text-developers">
                  <Button variant="heroOutline" size="xl" className="gap-3">
                    <Code className="w-5 h-5" />
                    Whisperer for Developers
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Is Voice Coding */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">What Is Voice Coding?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Voice coding means writing code by speaking instead of typing. You say words like
                &quot;camel case get user name&quot; and the tool outputs <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-sm font-mono">getUserName</code>.
                You say &quot;open paren&quot; and it types <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-sm font-mono">(</code>.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Standard dictation tools like Apple Dictation produce prose, not code. They autocorrect
                aggressively, add unwanted spaces, and have no concept of programming syntax. Voice coding
                requires a dedicated tool that understands casing conventions, symbols, and code structure.
              </p>
              <p className="text-lg text-muted-foreground">
                On Mac, Whisperer&apos;s <Link href="/code-mode" className="text-primary hover:underline">Code Mode</Link> is
                the only dictation tool with built-in support for programming syntax. It works in any text field — VS Code,
                Cursor, Terminal, JetBrains IDEs, and more.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Who Uses Voice Coding */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.05} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Who Uses <span className="text-primary">Voice Coding</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Not just for accessibility. Useful for anyone who types more than they need to.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whoUsesIt.map((item, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* Voice Coding vs Typing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Voice Coding vs. <span className="text-primary">Typing</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Use voice for some things, keyboard for others. Here is where each works better.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">Task</th>
                      <th className="text-left py-3 px-3 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Keyboard className="w-4 h-4" /> Typing
                        </span>
                      </th>
                      <th className="text-left py-3 px-3 font-semibold text-primary bg-primary/5">
                        <span className="flex items-center gap-1.5">
                          <Timer className="w-4 h-4" /> Voice
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {voiceCodingVsTyping.map((row, i) => (
                      <tr key={i} className="hover:bg-secondary/30 transition-colors">
                        <td className="py-3 pr-4 text-foreground font-medium">{row.category}</td>
                        <td className="py-3 px-3 text-muted-foreground">{row.typing}</td>
                        <td className="py-3 px-3 text-muted-foreground bg-primary/5">{row.voice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <GradientDivider />

      {/* Getting Started */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
          <SectionGlow position="bottom-center" color="purple" size="md" intensity={0.06} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Getting <span className="text-primary">Started</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Download to dictating code in about 5 minutes.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gettingStartedSteps.map((item, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-mono font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn delay={0.3}>
            <div className="text-center mt-8">
              <Link
                href="/voice-to-text-developers"
                className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
              >
                See full Code Mode features for developers
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>
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
              <h2 className="text-3xl font-bold mb-4">Try it</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download Whisperer free from the Mac App Store. Pro Pack ($14.99) adds Code Mode.
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
