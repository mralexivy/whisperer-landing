import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, productSchema, faqSchema, JsonLd } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Check, Apple, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, ScaleIn, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider, AnimatedBorder } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Pricing | $14.99 Lifetime, No Subscription",
  description:
    "Whisperer pricing: $2.99 base app + $14.99 one-time Pro Pack with Code Mode, per-app profiles, and personal dictionary. No subscription. No cloud fees. Works offline.",
  keywords:
    "dictation app no subscription mac, one-time purchase dictation mac, lifetime dictation app, dictation app Mac App Store",
  openGraph: {
    title: "Whisperer Pricing — $14.99 Lifetime, No Subscription",
    description:
      "$2.99 base app + $14.99 Pro Pack. One-time purchase, no subscription. Code Mode for developers.",
    type: "website",
  },
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <JsonLd data={productSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Pricing", url: "/pricing" },
      ])} />
      <JsonLd data={faqSchema([
        { question: "Is there a free trial?", answer: "Yes. Download from the Mac App Store and try all core features free. The Base App is $2.99 one-time, and Pro Pack is $14.99 lifetime." },
        { question: "Is Pro Pack a subscription?", answer: "No. $14.99 is a one-time payment. You own it forever. No recurring charges." },
        { question: "Are there any cloud fees?", answer: "No. Whisperer is 100% offline. There are no servers to pay for, no API calls, no usage limits." },
        { question: "What's the refund policy?", answer: "Refunds are handled through Apple according to their standard App Store policies." },
        { question: "Will there be price increases?", answer: "If you buy now, you lock in the current price. Future updates are included." },
      ])} />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.08} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-primary">$14.99</span> and you own it
              </h1>
              <p className="text-xl text-muted-foreground">
                No subscription. No cloud fees. That is the whole deal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-8 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 items-stretch">
            {/* Base App */}
            <ScaleIn className="h-full">
              <GlowCard className="bg-card border border-border rounded-2xl h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="text-sm text-muted-foreground mb-2">Base App</div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    $2.99
                    <span className="text-base font-normal text-muted-foreground"> one-time</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Core dictation. Free trial included.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Hold-to-record dictation (Fn or custom shortcut)",
                      "Toggle mode (press to start / stop)",
                      "Live streaming preview",
                      "3 transcription engines (Whisper, NVIDIA, Apple)",
                      "100+ languages",
                      "File transcription (audio & video)",
                      "Transcription history with search",
                      "Filler word removal",
                      "100% offline, on-device processing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer" className="block mt-auto">
                    <Button variant="outline" className="w-full" size="lg">
                      <Apple className="w-5 h-5 mr-2" />
                      Download Free Trial
                    </Button>
                  </a>
                </div>
              </GlowCard>
            </ScaleIn>

            {/* Pro Pack */}
            <ScaleIn delay={0.15} className="h-full">
              <AnimatedBorder className="h-full" borderRadius="1rem">
                <div className="p-8 relative flex flex-col h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full z-10">
                    MOST POPULAR
                  </div>
                  <div className="text-sm text-primary mb-2">Pro Pack</div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    $14.99
                    <span className="text-base font-normal text-muted-foreground"> lifetime</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Everything in Base, plus developer tools and AI features.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Everything in Base",
                      "AI Post-Processing — rewrite, translate, summarize, 10 modes",
                      "Code Mode — camelCase, snake_case, symbols by voice",
                      "Per-app profiles — automatic mode switching",
                      "Personal dictionary — add custom terms",
                      "Pro insertion engine — clipboard-safe paste",
                      "Literal mode — prevent autocorrections",
                      "Usage statistics — WPM, peak hours, charts",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer" className="block mt-auto">
                    <Button variant="hero" className="w-full" size="lg">
                      <Apple className="w-5 h-5 mr-2" />
                      Get Pro Pack
                    </Button>
                  </a>
                </div>
              </AnimatedBorder>
            </ScaleIn>
          </div>

          <GradientDivider className="max-w-4xl mx-auto mb-16" />

          {/* Price Comparison */}
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                How Whisperer compares
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold"></th>
                      <th className="text-center py-3 px-3 font-semibold text-primary bg-primary/5">Whisperer</th>
                      <th className="text-center py-3 px-3 font-semibold">Superwhisper</th>
                      <th className="text-center py-3 px-3 font-semibold">Voibe</th>
                      <th className="text-center py-3 px-3 font-semibold">Wispr Flow</th>
                      <th className="text-center py-3 px-3 font-semibold">Apple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Price", "$14.99 once", "$249/$8mo", "$99/$4.90mo", "$10–15/mo", "Free"],
                      ["3-Year Cost", "$14.99", "$249–$288", "$99–$176", "$360–$540", "Free"],
                      ["100% Offline", "Yes", "Partial", "Yes", "No", "Yes*"],
                      ["AI Post-Processing", "Yes", "Yes", "No", "Yes", "No"],
                      ["Code Mode", "Yes", "No", "No", "No", "No"],
                      ["Per-App Profiles", "Yes", "No", "No", "No", "No"],
                      ["Personal Dictionary", "Yes", "No", "No", "No", "No"],
                      ["Multiple Engines", "3", "1", "1", "Cloud", "1"],
                      ["File Transcription", "Yes", "Yes", "Yes", "No", "No"],
                      ["History & Stats", "Yes", "Partial", "No", "No", "No"],
                    ].map(([feature, ...values], i) => (
                      <tr key={i} className="hover:bg-secondary/30 transition-colors">
                        <td className="py-3 pr-4 text-muted-foreground font-medium">{feature}</td>
                        {values.map((val, j) => (
                          <td key={j} className={`text-center py-3 px-3 ${j === 0 ? "bg-primary/5" : ""}`}>
                            {val === "Yes" ? (
                              <Check className={`w-4 h-4 mx-auto ${j === 0 ? "text-primary" : "text-green-400"}`} />
                            ) : val === "No" ? (
                              <span className="text-muted-foreground/40">—</span>
                            ) : (
                              <span className={j === 0 ? "text-primary font-medium" : "text-muted-foreground"}>{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Whisperer is the only dictation app with Code Mode, per-app profiles, and personal dictionary. $14.99 one-time.
              </p>
              <div className="mt-6 text-center">
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/20">
                  17x cheaper than Superwhisper. No subscription like Wispr Flow.
                </span>
              </div>
            </div>
          </FadeIn>

          <GradientDivider className="max-w-3xl mx-auto my-16" />

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 text-center">Pricing FAQ</h2>
            </FadeIn>
            <FadeInStagger className="space-y-6">
              {[
                {
                  q: "Is there a free trial?",
                  a: "Yes. Download from the Mac App Store and try all core features free. The Base App is $2.99 one-time, and Pro Pack is $14.99 lifetime.",
                },
                {
                  q: "Is Pro Pack a subscription?",
                  a: "No. $14.99 is a one-time payment. You own it forever. No recurring charges.",
                },
                {
                  q: "Are there any cloud fees?",
                  a: "No. Whisperer is 100% offline. There are no servers to pay for, no API calls, no usage limits.",
                },
                {
                  q: "What's the refund policy?",
                  a: "Refunds are handled through Apple according to their standard App Store policies.",
                },
                {
                  q: "Will there be price increases?",
                  a: "If you buy now, you lock in the current price. Future updates are included.",
                },
              ].map((faq, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>

          <GradientDivider className="max-w-3xl mx-auto my-16" />

          {/* Links */}
          <div className="max-w-3xl mx-auto">
            <FadeInStagger className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Compare with competitors", href: "/compare" },
                { title: "Voice Coding Guide", href: "/voice-coding" },
                { title: "Code Mode details", href: "/code-mode" },
                { title: "Privacy Policy", href: "/privacy" },
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

      <Footer />
    </div>
  );
}
