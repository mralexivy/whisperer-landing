import Link from "next/link";
import dynamic from "next/dynamic";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { GradientDivider } from "@/components/ui/decorations";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { ArrowRight, Mic, Code, WifiOff, Scale, Sparkles } from "lucide-react";

const ValueProps = dynamic(() => import("@/components/landing/ValueProps").then(m => ({ default: m.ValueProps })));
const CodeModeSection = dynamic(() => import("@/components/landing/CodeModeSection").then(m => ({ default: m.CodeModeSection })));
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks").then(m => ({ default: m.HowItWorks })));
const AppLogos = dynamic(() => import("@/components/landing/AppLogos").then(m => ({ default: m.AppLogos })));
const FeaturesGrid = dynamic(() => import("@/components/landing/FeaturesGrid").then(m => ({ default: m.FeaturesGrid })));
const ProPackSection = dynamic(() => import("@/components/landing/ProPackSection").then(m => ({ default: m.ProPackSection })));
const PermissionsSection = dynamic(() => import("@/components/landing/PermissionsSection").then(m => ({ default: m.PermissionsSection })));
const PrivacySection = dynamic(() => import("@/components/landing/PrivacySection").then(m => ({ default: m.PrivacySection })));
const PerformanceSection = dynamic(() => import("@/components/landing/PerformanceSection").then(m => ({ default: m.PerformanceSection })));
const FAQ = dynamic(() => import("@/components/landing/FAQ").then(m => ({ default: m.FAQ })));
const Footer = dynamic(() => import("@/components/landing/Footer").then(m => ({ default: m.Footer })));

const exploreLinks = [
  {
    href: "/speech-to-text-mac",
    title: "Speech to Text for Mac",
    description: "Three offline engines. 100+ languages. $14.99 one-time.",
    icon: Mic,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    href: "/voice-coding",
    title: "Voice Coding",
    description: "How to write code by voice on Mac.",
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
    description: "Everything runs on your Mac. Nothing leaves the device.",
    icon: WifiOff,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    href: "/why-whisperer",
    title: "Why Whisperer",
    description: "How it compares to ChatGPT Voice, Superwhisper, and others.",
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
