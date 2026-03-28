"use client";

import { Shield, Cloud, HardDrive, FileText } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/ui/animated";

const privacyPoints = [
  {
    icon: Shield,
    text: "Transcription happens on your Mac",
  },
  {
    icon: Cloud,
    text: "No account needed. No telemetry for core features",
  },
  {
    icon: HardDrive,
    text: "Models live in your Application Support folder",
  },
  {
    icon: FileText,
    text: "Diagnostic logs stay local (optional)",
  },
];

export const PrivacySection = () => {
  return (
    <section id="privacy" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Privacy <span className="text-primary">by design</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 gap-6 mb-12">
            {privacyPoints.map((point, index) => (
              <StaggerItem
                key={index}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{point.text}</span>
              </StaggerItem>
            ))}
          </FadeInStagger>

          {/* Additional trust note */}
          <div className="text-center">
            <p className="text-muted-foreground max-w-xl mx-auto">
              Contact support? You choose whether to attach logs. Nothing gets sent unless you send it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
