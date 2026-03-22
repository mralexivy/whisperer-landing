"use client";

import Link from "next/link";
import { Sparkles, Cpu, Eye, BookOpen, Clock, FileAudio, Globe, ArrowRight } from "lucide-react";
import { FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import {
  AIProcessingGraphic,
  EnginesGraphic,
  LivePreviewGraphic,
  DictionaryGraphic,
  HistoryGraphic,
  FileTranscriptionGraphic,
  LanguagesGraphic,
} from "@/components/landing/FeaturesGrid";
import { ComponentType } from "react";

const features: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  graphic: ComponentType;
}[] = [
  {
    icon: Sparkles,
    title: "AI Writing & Post-Processing",
    description:
      "Rewrite, translate, format, summarize, and fix grammar — all with an on-device LLM. 10 built-in modes plus custom prompts.",
     href: "/features/ai-writing",
    graphic: AIProcessingGraphic,
  },
  {
    icon: Cpu,
    title: "Offline Transcription Engines",
    description:
      "Three backends — Whisper (Metal GPU), Parakeet (Neural Engine), and Apple Speech. 10+ model sizes from 75MB to 2.9GB.",
     href: "/features/offline-transcription",
    graphic: EnginesGraphic,
  },
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See your words appear in real-time as you speak. Dual-engine streaming with ~300ms latency and typewriter animation.",
     href: "/features/live-preview",
    graphic: LivePreviewGraphic,
  },
  {
    icon: BookOpen,
    title: "Personal Dictionary & Spell Correction",
    description:
      "Three-tier correction engine with fuzzy matching, phonetic matching, and prompt word vocabulary boosting.",
     href: "/features/personal-dictionary",
    graphic: DictionaryGraphic,
  },
  {
    icon: Clock,
    title: "Transcription History & Statistics",
    description:
      "Full workspace with search, pin, flag, audio playback, re-transcribe, and usage statistics with charts.",
     href: "/features/transcription-history",
    graphic: HistoryGraphic,
  },
  {
    icon: FileAudio,
    title: "File Transcription",
    description:
      "Transcribe audio and video files offline. Drag-and-drop interface using the same high-quality transcription engine.",
     href: "/features/file-transcription",
    graphic: FileTranscriptionGraphic,
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description:
      "Dictate in over 100 languages with per-app language profiles. AI-powered translation between languages, all offline.",
     href: "/features/multilingual",
    graphic: LanguagesGraphic,
  },
];

export function FeaturesCards() {
  return (
    <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {features.map((feature, i) => {
        const Graphic = feature.graphic;
        return (
          <StaggerItem key={i}>
            <Link href={feature.href} className="block group h-full">
              <GlowCard className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
                {/* Graphic area */}
                <div className="relative h-[280px] bg-gradient-to-b from-white/[0.02] to-transparent border-b border-white/[0.05] overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%23fff'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "repeat",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <Graphic />
                </div>

                {/* Content area */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </GlowCard>
            </Link>
          </StaggerItem>
        );
      })}
    </FadeInStagger>
  );
}
