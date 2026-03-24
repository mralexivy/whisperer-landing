import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { CodeEditorMockup } from "@/components/landing/CodeEditorMockup";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Code,
  Terminal,
  Layers,
  BookOpen,
  Heart,
  Monitor,
  Keyboard,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  FadeInStagger,
  StaggerItem,
  ScaleIn,
  SlideIn,
  GlowCard,
} from "@/components/ui/animated";
import {
  SectionGlow,
  DotGrid,
  GradientDivider,
} from "@/components/ui/decorations";

export const metadata: Metadata = {
  title:
    "Voice to Text for Developers — Code Mode for Mac | Whisperer",
  description:
    "Dictate code by voice with Whisperer's Code Mode. camelCase, snake_case, symbols, parentheses — all by voice. Works in VS Code, Cursor, JetBrains, Terminal. 100% offline. $14.99 lifetime.",
  keywords:
    "offline dictation for developers mac, voice coding mac, dictation for VS Code, voice to text coding, developer dictation app, code by voice mac, RSI developer voice coding, voice dictation cursor IDE",
  openGraph: {
    title: "Voice to Text for Developers — Code Mode for Mac",
    description:
      "Dictate camelCase, snake_case, symbols by voice. Works in VS Code, Cursor, Terminal. 100% offline. $14.99.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text for Developers — Code Mode for Mac",
    description:
      "Dictate code by voice. camelCase, snake_case, symbols. VS Code, Cursor, Terminal.",
  },
  alternates: { canonical: "/voice-to-text-developers" },
};

const casingCommands = [
  { voice: '"camel case get user name"', output: "getUserName" },
  { voice: '"snake case get user name"', output: "get_user_name" },
  { voice: '"pascal case user service"', output: "UserService" },
  { voice: '"constant case max retries"', output: "MAX_RETRIES" },
];

const symbolCommands = [
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
];

const ides = [
  {
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    name: "VS Code",
    desc: "Full Code Mode support",
  },
  {
    icon: Monitor,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    name: "Cursor",
    desc: "AI prompts + code by voice",
  },
  {
    icon: Layers,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    name: "JetBrains IDEs",
    desc: "IntelliJ, WebStorm, PyCharm",
  },
  {
    icon: Terminal,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    name: "Terminal / iTerm2",
    desc: "CLI commands and scripts",
  },
  {
    icon: Terminal,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    name: "Warp",
    desc: "Modern terminal voice input",
  },
  {
    icon: Monitor,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    name: "Xcode",
    desc: "Swift and Objective-C",
  },
];

const devFeatures = [
  {
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Code Mode",
    description:
      "Speak symbols, casing conventions, and programming syntax. camelCase, snake_case, CONSTANT_CASE, parentheses, brackets — all by voice.",
  },
  {
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Per-App Profiles",
    description:
      "Code Mode activates automatically in your IDE. Switch to Slack and it goes back to natural language. Zero manual switching.",
  },
  {
    icon: BookOpen,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    title: "Personal Dictionary",
    description:
      "Add project-specific terms, library names, API names, and acronyms so they're recognized correctly every time.",
  },
  {
    icon: Keyboard,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "Pro Insertion",
    description:
      "Clipboard-safe paste that won't overwrite your clipboard. Falls back to typing when paste isn't supported.",
  },
];

const rsiPoints = [
  "Reduce repetitive key presses by 80%+ during routine coding",
  "Dictate boilerplate, comments, and documentation hands-free",
  "Switch between voice and keyboard naturally — use what feels right",
  "Continue coding during RSI flare-ups without losing productivity",
];

const faqs = [
  {
    question: "Can I dictate code on Mac by voice?",
    answer:
      "Yes. Whisperer's Code Mode lets you dictate code by voice with support for camelCase, snake_case, PascalCase, CONSTANT_CASE, and 20+ symbol commands. It works in VS Code, Cursor, JetBrains IDEs, Xcode, Terminal, and any text field on your Mac.",
  },
  {
    question: "Does voice coding work in Cursor IDE?",
    answer:
      "Yes. Whisperer inserts into any focused text field, including Cursor. With per-app profiles, Code Mode activates automatically when Cursor is in the foreground. You can dictate both code and AI prompts.",
  },
  {
    question: "Is Whisperer good for developers with RSI?",
    answer:
      "Yes. Many developers with RSI, carpal tunnel, or tendinitis use Whisperer to continue coding comfortably. It reduces repetitive key presses by 80%+ for routine code. 100% offline means no latency.",
  },
  {
    question: "How is this different from Apple Dictation for coding?",
    answer:
      "Apple Dictation produces prose, not code — it autocorrects aggressively, adds unwanted spaces, and has no concept of programming syntax. Whisperer's Code Mode understands camelCase, snake_case, parentheses, semicolons, and other code constructs.",
  },
  {
    question: "What transcription engines does Whisperer use?",
    answer:
      "Three engines: Whisper (Metal GPU, 99+ languages, 10+ models), Parakeet (Neural Engine, fastest), and Apple Speech (macOS 26+). Hot-swap between them without restarting.",
  },
  {
    question: "How much does voice coding cost?",
    answer:
      "Code Mode is included in the Pro Pack at $14.99 one-time (lifetime). The base app is $2.99. No subscription, no cloud fees. Superwhisper costs $249 and doesn't have Code Mode.",
  },
];

export default function VoiceToTextDevelopersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              {
                name: "Voice to Text for Developers",
                url: "/voice-to-text-developers/",
              },
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
          <SectionGlow
            position="top-right"
            color="purple"
            size="md"
            intensity={0.06}
          />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs
            items={[{ label: "Voice to Text for Developers" }]}
          />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Voice to Text for{" "}
                <span className="text-primary">Developers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The only Mac dictation app with a dedicated Code Mode. Dictate
                camelCase, snake_case, symbols, and punctuation by voice —
                directly into VS Code, Cursor, or Terminal. 100% offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Casing Commands */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Casing Commands</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Say the casing convention before your words — Whisperer applies
                it automatically.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">
                        You Say
                      </th>
                      <th className="text-left py-3 font-semibold">Output</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {casingCommands.map(({ voice, output }, i) => (
                      <tr
                        key={i}
                        className="hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-3 pr-4 text-muted-foreground">
                          {voice}
                        </td>
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
          </div>
        </div>
      </section>

      {/* Symbol Commands */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Symbol Commands</h2>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-3">
              {symbolCommands.map(([voice, output], i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-2.5 hover:border-primary/50 hover:scale-[1.03] transition-all duration-200">
                    <span className="text-sm text-muted-foreground">
                      {voice}
                    </span>
                    <code className="text-primary font-mono font-semibold">
                      {output}
                    </code>
                  </div>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* IDE Compatibility */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.05} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">
                Works in Your{" "}
                <span className="text-primary">IDE</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Code Mode works in any text field on your Mac — these are the
                most popular editors and terminals.
              </p>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ides.map((ide, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg ${ide.bgColor} flex items-center justify-center`}>
                        <ide.icon className={`w-5 h-5 ${ide.color}`} />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {ide.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{ide.desc}</p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Developer Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Built for{" "}
                <span className="text-primary">Developers</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Features no other dictation app offers — designed specifically
                for coding workflows.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {devFeatures.map((feature, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${feature.color}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* RSI Prevention */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
          <SectionGlow
            position="bottom-center"
            color="purple"
            size="md"
            intensity={0.06}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <SlideIn direction="left">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-rose-400/10 flex items-center justify-center shrink-0">
                  <Heart className="w-7 h-7 text-rose-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Protect Your Hands
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    RSI, carpal tunnel, and tendinitis affect thousands of
                    developers. Voice coding lets you stay productive without
                    the physical strain of constant typing.
                  </p>
                  <ul className="space-y-3">
                    {rsiPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                       href="/blog/rsi-prevention-voice-coding"
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                    >
                      Read: RSI Prevention for Developers
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FadeInStagger className="grid gap-4">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h3 className="text-xl font-bold mb-6">Related Guides</h3>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "How to Dictate Code on Mac",
                   href: "/blog/how-to-dictate-code-on-mac",
                },
                {
                  title: "Voice Coding with Cursor",
                   href: "/blog/voice-coding-with-cursor",
                },
                {
                  title: "RSI Prevention for Developers",
                   href: "/blog/rsi-prevention-voice-coding",
                },
                {
                  title: "Voice Coding — Complete Guide",
                   href: "/voice-coding",
                },
              ].map((link, i) => (
                <StaggerItem key={i}>
                  <Link href={link.href} className="group block">
                    <div className="flex items-center justify-between bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
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

      <Footer />
    </div>
  );
}
