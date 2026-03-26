"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { MenuBarMockup } from "./MenuBarMockup";
import { HUDOverlay } from "./HUDOverlay";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/ui/animated";
import { SectionGlow } from "@/components/ui/decorations";

const VideoModal = dynamic(() => import("./VideoModal").then(m => ({ default: m.VideoModal })));

export const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
        <SectionGlow color="purple" position="top-right" size="md" intensity={0.08} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <FadeIn className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Offline dictation for Mac.{" "}
              <span className="text-primary">Code Mode</span> for developers.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Hold <span className="text-foreground font-medium">Fn</span> (or your shortcut), speak, release.
              Text appears in the focused field. <span className="text-primary font-medium">100% offline.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="gap-3">
                  <Apple className="w-5 h-5" />
                  Download on Mac App Store
                </Button>
              </a>
              <Button variant="heroOutline" size="xl" className="gap-3" onClick={() => setVideoOpen(true)}>
                <Play className="w-5 h-5" />
                Watch demo
              </Button>
            </div>

            {/* Trust badges */}
            <FadeInStagger className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <StaggerItem className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Offline on-device transcription</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Works in Slack, Gmail, VS Code, Terminal</span>
              </StaggerItem>
              <StaggerItem className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Live preview while you speak</span>
              </StaggerItem>
            </FadeInStagger>

            {/* Price comparison */}
            <FadeIn delay={0.4}>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="text-primary font-medium">$14.99 lifetime</span>
                {" — "}17x cheaper than Superwhisper, no subscription like Wispr Flow.
              </p>
            </FadeIn>
          </FadeIn>

          {/* Right Visual - Menu Bar Mockup */}
          <FadeIn delay={0.2} className="flex-1 w-full max-w-md flex justify-center">
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-8 bg-primary/20 rounded-3xl blur-3xl" />

              {/* Menu Bar Mockup */}
              <div className="relative animate-float">
                <MenuBarMockup />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* HUD Overlay - Fixed at bottom, horizontally centered on full viewport */}
      <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center animate-float">
        <HUDOverlay />
      </div>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
};
