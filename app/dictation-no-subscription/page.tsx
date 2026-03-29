import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Check,
  Ban,
  Wallet,
  Server,
  Infinity,
  ShieldCheck,
  Code,
  Layers,
  BookOpen,
  Sparkles,
  Keyboard,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  FadeInStagger,
  StaggerItem,
  ScaleIn,
  GlowCard,
} from "@/components/ui/animated";
import {
  SectionGlow,
  DotGrid,
  GradientDivider,
  AnimatedBorder,
} from "@/components/ui/decorations";

export const metadata: Metadata = {
  title:
    "Dictation App — No Subscription | $14.99 Lifetime for Mac",
  description:
    "Whisperer is a one-time purchase dictation app for Mac. $2.99 base, $14.99 Pro Pack lifetime. No subscription, no cloud fees, no recurring charges. Code Mode, per-app profiles, 3 engines.",
  keywords:
    "dictation app no subscription mac, one-time purchase dictation mac, lifetime dictation app, dictation without subscription, no recurring dictation app, buy once dictation mac",
  openGraph: {
    title: "Dictation App — No Subscription | $14.99 Lifetime",
    description:
      "$14.99 one-time. No subscription, no cloud fees. Code Mode, per-app profiles, 3 engines.",
    type: "website",
    images: [{ url: "/assets/og/og-dictation-no-subscription.png", width: 1200, height: 630, alt: "Dictation App No Subscription" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictation App — No Subscription | $14.99 Lifetime",
    description:
      "$14.99 one-time. No subscription, no cloud fees. Code Mode for developers.",
    images: ["/assets/og/og-dictation-no-subscription.png"],
  },
  alternates: { canonical: "/dictation-no-subscription" },
};

const costData = [
  {
    period: "1 Year",
    whisperer: "$14.99",
    superwhisper: "$249",
    voibe: "$99",
    wisprFlow: "$120–180",
  },
  {
    period: "2 Years",
    whisperer: "$14.99",
    superwhisper: "$249",
    voibe: "$99–158",
    wisprFlow: "$240–360",
  },
  {
    period: "3 Years",
    whisperer: "$14.99",
    superwhisper: "$249–288",
    voibe: "$99–176",
    wisprFlow: "$360–540",
  },
  {
    period: "5 Years",
    whisperer: "$14.99",
    superwhisper: "$249–480",
    voibe: "$99–294",
    wisprFlow: "$600–900",
  },
];

const whyOneTime = [
  {
    icon: Server,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "No Servers",
    description:
      "Whisperer runs offline on your Mac. No cloud servers, no API endpoints, no infrastructure costs.",
  },
  {
    icon: Ban,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    title: "No API Charges",
    description:
      "Cloud services charge per minute of audio. Whisperer processes everything locally. No metered billing.",
  },
  {
    icon: Infinity,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Unlimited Usage",
    description:
      "Dictate as much as you want. No quotas, no overage charges. Your Mac is the only infrastructure.",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Updates Included",
    description:
      "One-time purchase includes future updates. New models, new features, performance improvements.",
  },
];

const proFeatures = [
  {
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "Code Mode",
    description: "camelCase, snake_case, symbols by voice",
  },
  {
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Per-App Profiles",
    description: "Automatic mode switching by app",
  },
  {
    icon: BookOpen,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    title: "Personal Dictionary",
    description: "Custom terms, names, acronyms",
  },
  {
    icon: Sparkles,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "AI Post-Processing",
    description: "10 modes: rewrite, translate, summarize",
  },
  {
    icon: Keyboard,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    title: "Pro Insertion",
    description: "Clipboard-safe paste, per-app method",
  },
  {
    icon: Wallet,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "Usage Statistics",
    description: "WPM, peak hours, app usage charts",
  },
];

const faqs = [
  {
    question: "Is Whisperer really a one-time purchase?",
    answer:
      "Yes. Base app $2.99, Pro Pack $14.99. No subscriptions, no recurring charges, no cloud fees. You own it.",
  },
  {
    question: "Which dictation apps have no subscription?",
    answer:
      "Whisperer ($14.99), Superwhisper ($249), Voibe ($99), VoiceInk, MacWhisper (~$64). Whisperer is cheapest with Code Mode and per-app profiles.",
  },
  {
    question: "Will Whisperer start charging a subscription later?",
    answer:
      "No. It runs offline. No servers, no cloud APIs. One-time pricing works because there are no infrastructure costs.",
  },
  {
    question: "Are future updates included?",
    answer:
      "Yes. New models, features, performance improvements, macOS compatibility updates.",
  },
  {
    question: "How does $14.99 compare to other dictation apps?",
    answer:
      "Superwhisper $249, Voibe $99, Wispr Flow $10-15/month. Over 3 years, Wispr Flow costs $360-540.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Download free from Mac App Store. Core features included. Base $2.99, Pro $14.99.",
  },
];

export default function DictationNoSubscriptionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation — No Subscription", url: "/dictation-no-subscription" },
      ])} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <SectionGlow position="top-right" color="purple" size="md" intensity={0.06} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs
            items={[{ label: "Dictation — No Subscription" }]}
          />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                No Subscription.{" "}
                <span className="text-primary">$14.99.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whisperer is a one-time purchase. No monthly fees, no cloud charges. Pay once, own it.
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

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScaleIn className="h-full">
              <GlowCard className="bg-card border border-border rounded-2xl h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="text-sm text-muted-foreground mb-2">
                    Base App
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    $2.99
                    <span className="text-base font-normal text-muted-foreground">
                      {" "}
                      one-time
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Core dictation. Free trial included.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Hold-to-record dictation",
                      "3 transcription engines",
                      "100+ languages",
                      "Live streaming preview",
                      "File transcription",
                      "Filler word removal",
                      "100% offline",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-auto"
                  >
                    <Button variant="outline" className="w-full" size="lg">
                      <Apple className="w-5 h-5 mr-2" />
                      Download Free Trial
                    </Button>
                  </a>
                </div>
              </GlowCard>
            </ScaleIn>

            <ScaleIn delay={0.15} className="h-full">
              <AnimatedBorder className="h-full" borderRadius="1rem">
                <div className="p-8 relative flex flex-col h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full z-10">
                    ONE-TIME PAYMENT
                  </div>
                  <div className="text-sm text-primary mb-2">Pro Pack</div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    $14.99
                    <span className="text-base font-normal text-muted-foreground">
                      {" "}
                      lifetime
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Everything in Base, plus developer and AI features.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Everything in Base",
                      "AI Post-Processing (10 modes)",
                      "Code Mode — camelCase, symbols",
                      "Per-app profiles",
                      "Personal dictionary",
                      "Pro insertion engine",
                      "Usage statistics",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-auto"
                  >
                    <Button variant="hero" className="w-full" size="lg">
                      <Apple className="w-5 h-5 mr-2" />
                      Get Pro Pack — $14.99
                    </Button>
                  </a>
                </div>
              </AnimatedBorder>
            </ScaleIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Total Cost of Ownership */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Total Cost Over{" "}
                <span className="text-primary">Time</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Subscriptions add up. Whisperer does not.
              </p>
            </div>
          </FadeIn>
          <ScaleIn>
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">
                        Period
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-primary bg-primary/5">
                        Whisperer
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Superwhisper
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Voibe
                      </th>
                      <th className="text-center py-3 px-3 font-semibold">
                        Wispr Flow
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {costData.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-3 pr-4 text-muted-foreground font-medium">
                          {row.period}
                        </td>
                        <td className="text-center py-3 px-3 bg-primary/5 text-primary font-medium">
                          {row.whisperer}
                        </td>
                        <td className="text-center py-3 px-3 text-muted-foreground">
                          {row.superwhisper}
                        </td>
                        <td className="text-center py-3 px-3 text-muted-foreground">
                          {row.voibe}
                        </td>
                        <td className="text-center py-3 px-3 text-muted-foreground">
                          {row.wisprFlow}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/20">
                  Save $235–$885 over 5 years vs. competitors
                </span>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      <GradientDivider />

      {/* Why One-Time Pricing */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DotGrid />
          <SectionGlow
            position="center"
            color="purple"
            size="lg"
            intensity={0.05}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why One-Time{" "}
                <span className="text-primary">Pricing</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                No cloud means no recurring costs.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyOneTime.map((item, i) => (
              <StaggerItem key={i}>
                <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What&apos;s in{" "}
                <span className="text-primary">Pro Pack</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                $14.99 one-time gets you:
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {proFeatures.map((feature, i) => (
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
                    <h3 className="font-semibold text-foreground mb-1">
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
              <h3 className="text-xl font-bold mb-6">Related</h3>
            </FadeIn>
            <FadeInStagger className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Full Pricing Details", href: "/pricing" },
                {
                  title: "Cheapest Dictation App for Mac",
                   href: "/cheapest-dictation-mac",
                },
                {
                  title: "Compare All Dictation Apps",
                   href: "/compare",
                },
                {
                  title: "Offline Dictation for Mac",
                   href: "/offline-dictation-mac",
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
