import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { CodeModeSection } from "@/components/landing/CodeModeSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AppLogos } from "@/components/landing/AppLogos";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { ProPackSection } from "@/components/landing/ProPackSection";
import { PermissionsSection } from "@/components/landing/PermissionsSection";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { PerformanceSection } from "@/components/landing/PerformanceSection";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { GradientDivider } from "@/components/ui/decorations";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { ArrowRight, Mic, Code, WifiOff, Scale, Sparkles } from "lucide-react";

const exploreLinks = [
  {
    href: "/speech-to-text-mac",
    title: "Speech to Text for Mac",
    description: "Three offline AI engines. 100+ languages. $14.99 lifetime.",
    icon: Mic,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    href: "/voice-coding",
    title: "Voice Coding",
    description: "The complete guide to coding by voice on Mac.",
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    href: "/voice-to-text-developers",
    title: "For Developers",
    description: "Code Mode, IDE support, RSI prevention.",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    href: "/offline-dictation-mac",
    title: "Offline Dictation",
    description: "100% on-device. No cloud, no data leaves your Mac.",
    icon: WifiOff,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    href: "/why-whisperer",
    title: "Why Whisperer",
    description: "How Whisperer compares to ChatGPT Voice, Superwhisper, and more.",
    icon: Scale,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <GradientDivider />
      <ValueProps />
      <CodeModeSection />
      <HowItWorks />
      <AppLogos />
      <FeaturesGrid />
      <GradientDivider />
      <ProPackSection />
      <PermissionsSection />
      <PrivacySection />
      <PerformanceSection />
      <FAQ />
      <GradientDivider />

      {/* Explore — internal links to key pages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Explore <span className="text-primary">Whisperer</span>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {exploreLinks.map((link) => (
              <StaggerItem key={link.href}>
                <Link href={link.href} className="group block h-full">
                  <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${link.bgColor} flex items-center justify-center shrink-0`}>
                        <link.icon className={`w-5 h-5 ${link.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.title}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 shrink-0 ml-2" />
                        </div>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />
      <Footer />
    </div>
  );
}
