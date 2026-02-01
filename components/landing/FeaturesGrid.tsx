import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mic, Volume2, Shield, Cpu, Globe } from "lucide-react";

const featureGroups = [
  {
    icon: Mic,
    title: "Core dictation",
    features: [
      "Hold-to-record dictation (Fn or custom shortcut)",
      "Toggle mode (press to start / press to stop)",
      "Live preview while speaking (streaming)",
      "Final refinement on release for better accuracy",
    ],
  },
  {
    icon: Volume2,
    title: "Audio & devices",
    features: [
      "Choose any microphone or system default",
      "Live waveform and input level feedback",
      "Auto-recovery after device disconnects or system changes",
      "Optional: mute other audio while recording (helpful on calls)",
    ],
  },
  {
    icon: Shield,
    title: "Reliability & safety",
    features: [
      "Smart combo filtering (avoids accidental Fn+key triggers)",
      "Startup grace period to ignore audio-config flaps",
      "Centralized logs + crash reporting to diagnose issues",
      "Proper resource cleanup on quit",
    ],
  },
  {
    icon: Cpu,
    title: "Models & performance",
    features: [
      "Multiple Whisper model options (speed vs accuracy)",
      "In-app model downloads with progress",
      "Model preloading for instant start",
      "Hot-swap models without restarting",
    ],
  },
  {
    icon: Globe,
    title: "Languages",
    features: [
      "100+ languages supported",
      "Explicit language selection (recommended)",
      "Optional auto-detection",
    ],
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All the <span className="text-primary">features</span> you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive dictation tools built for professionals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {featureGroups.map((group, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <group.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {group.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-3 pl-14">
                    {group.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
