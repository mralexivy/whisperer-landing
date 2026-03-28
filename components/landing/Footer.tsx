"use client";

import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { FadeIn } from "@/components/ui/animated";
import { SectionGlow, GradientDivider } from "@/components/ui/decorations";
import appIcon from "../../public/assets/app-icon.webp";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "All Features", href: "/features" },
      { label: "Offline Dictation", href: "/offline-dictation-mac" },
      { label: "Code Mode", href: "/code-mode" },
      { label: "Voice Coding", href: "/voice-coding" },
      { label: "For Developers", href: "/voice-to-text-developers" },
      { label: "Pricing", href: "/pricing" },
      { label: "No Subscription", href: "/dictation-no-subscription" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "All Comparisons", href: "/compare" },
      { label: "vs Superwhisper", href: "/compare/vs-superwhisper" },
      { label: "vs Apple Dictation", href: "/compare/vs-apple-dictation" },
      { label: "vs Wispr Flow", href: "/compare/vs-wispr-flow" },
      { label: "vs Voibe", href: "/compare/vs-voibe" },
      { label: "vs Willow", href: "/compare/vs-willow" },
      { label: "Cheapest Dictation App", href: "/cheapest-dictation-mac" },
      { label: "Speech to Text Mac", href: "/speech-to-text-mac" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Getting Started", href: "/blog/getting-started-whisperer" },
      { label: "How to Dictate Code", href: "/blog/how-to-dictate-code-on-mac" },
      { label: "Multilingual Guide", href: "/blog/multilingual-dictation-guide" },
      { label: "Dictionary Setup", href: "/blog/personal-dictionary-setup" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact", href: "mailto:support@whisperer.app" },
    ],
  },
];

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <SectionGlow position="center" size="xl" intensity={0.12} />
    <SectionGlow position="top-left" color="purple" size="md" intensity={0.08} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <FadeIn className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to <span className="text-primary">ditch typing</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Join developers and power users who dictate faster than they type.
          One-time purchase. No subscription. No cloud.
        </p>
        <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="xl" className="gap-3">
            <Apple className="w-5 h-5" />
            Download on Mac App Store
          </Button>
        </a>
        <p className="text-sm text-muted-foreground mt-6">
          Free trial included. Pro Pack $14.99 lifetime.
        </p>
      </FadeIn>
    </div>
  </section>
);

export const Footer = () => {
  return (
    <>
    <CTASection />
    <footer id="support" className="py-16 border-t border-border bg-card/50">
      <FadeIn>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={appIcon.src} alt="Whisperer" width={40} height={40} loading="lazy" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-semibold text-foreground">Whisperer</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Offline dictation for Mac. Hold Fn, speak, release. Text inserts anywhere.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Powered by Whisper</p>
              <p>100% on-device, MIT licensed</p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Whisperer. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="mailto:support@whisperer.app" className="hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
      </FadeIn>
    </footer>
    </>
  );
};
