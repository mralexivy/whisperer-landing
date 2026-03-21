"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Check, X, ArrowRight, Apple } from "lucide-react";
import { FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";

interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  highlight: string;
  color: string;
  icon: string | null;
  wins: string[];
  losses: string[];
}

const competitors: Competitor[] = [
  {
    slug: "vs-superwhisper",
    name: "Superwhisper",
    tagline: "Premium dictation at a fraction of the price",
    price: "$249",
    highlight: "17x cheaper",
    color: "#F59E0B",
    icon: "/assets/icons/competitors/superwhisper.png",
    wins: ["$14.99 vs $249", "Code Mode", "Per-app profiles", "Personal dictionary", "3 engines"],
    losses: ["Cloud AI models"],
  },
  {
    slug: "vs-voibe",
    name: "Voibe",
    tagline: "Developer-focused features Voibe can't match",
    price: "$99",
    highlight: "Code Mode advantage",
    color: "#10B981",
    icon: "/assets/icons/competitors/voibe.png",
    wins: ["Code Mode", "Per-app profiles", "AI post-processing", "Personal dictionary", "3 engines"],
    losses: ["Similar price point"],
  },
  {
    slug: "vs-wispr-flow",
    name: "Wispr Flow",
    tagline: "Offline privacy vs. cloud-dependent AI",
    price: "$10–15/mo",
    highlight: "100% offline",
    color: "#8B5CF6",
    icon: "/assets/icons/competitors/wispr-flow.png",
    wins: ["100% offline", "No subscription", "Code Mode", "Per-app profiles", "Personal dictionary"],
    losses: ["Cloud AI quality"],
  },
  {
    slug: "vs-apple-dictation",
    name: "Apple Dictation",
    tagline: "Why the built-in option falls short for pros",
    price: "Free",
    highlight: "Pro features",
    color: "#6B7280",
    icon: null,
    wins: ["Code Mode", "AI post-processing", "Personal dictionary", "3 engines", "History & stats"],
    losses: ["Not free"],
  },
  {
    slug: "vs-macwhisper",
    name: "MacWhisper",
    tagline: "Dictation vs. transcription — which do you need?",
    price: "~$64",
    highlight: "Live dictation",
    color: "#3B82F6",
    icon: "/assets/icons/competitors/macwhisper.png",
    wins: ["Live dictation", "Code Mode", "Per-app profiles", "Streaming preview", "AI post-processing"],
    losses: ["Batch transcription focus"],
  },
  {
    slug: "vs-voice-ink",
    name: "VoiceInk",
    tagline: "More features for developers at a similar price",
    price: "One-time",
    highlight: "Code Mode",
    color: "#EF4444",
    icon: "/assets/icons/competitors/voiceink.png",
    wins: ["Code Mode", "Per-app profiles", "Personal dictionary", "3 engines", "History & stats"],
    losses: ["Similar base features"],
  },
];

function CompetitorIcon({ comp }: { comp: Competitor }) {
  if (comp.icon) {
    return (
      <Image
        src={comp.icon}
        alt={comp.name}
        width={40}
        height={40}
        className="rounded-lg"
      />
    );
  }
  // Apple Dictation — use Apple icon
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: comp.color + "20" }}
    >
      <Apple className="w-5 h-5" style={{ color: comp.color }} />
    </div>
  );
}

function CompareGraphic({ comp }: { comp: Competitor }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-6">
      {/* Whisperer side */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10 overflow-hidden">
          <Image
            src="/assets/app-icon.png"
            alt="Whisperer"
            width={48}
            height={48}
            className="rounded-xl"
          />
        </div>
        <span className="text-[10px] font-semibold text-white/60">Whisperer</span>
        <span className="text-[9px] text-primary font-medium">$14.99</span>
      </motion.div>

      {/* Connecting arrows */}
      <div className="relative mx-5 flex-1 max-w-[100px]">
        <motion.div
          className="absolute top-1/2 -translate-y-[3px] left-0 right-0 h-px bg-gradient-to-r from-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute top-1/2 translate-y-[3px] left-0 right-0 h-px bg-gradient-to-l from-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <span className="text-[9px] font-bold text-white/50">VS</span>
        </motion.div>
      </div>

      {/* Competitor side */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div
          className="w-16 h-16 rounded-2xl border flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: comp.color + "10", borderColor: comp.color + "30" }}
        >
          <CompetitorIcon comp={comp} />
        </div>
        <span className="text-[10px] font-semibold text-white/60">{comp.name}</span>
        <span className="text-[9px] font-medium" style={{ color: comp.color + "99" }}>{comp.price}</span>
      </motion.div>
    </div>
  );
}

function WinLossList({ comp }: { comp: Competitor }) {
  return (
    <div className="flex gap-4 mt-3">
      <div className="flex-1">
        <div className="text-[10px] text-primary/60 uppercase tracking-wider font-medium mb-1.5">Whisperer wins</div>
        <div className="space-y-1">
          {comp.wins.slice(0, 3).map((win, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-primary shrink-0" />
              <span className="text-[11px] text-white/60">{win}</span>
            </div>
          ))}
        </div>
      </div>
      {comp.losses.length > 0 && (
        <div className="flex-1">
          <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium mb-1.5">They win</div>
          <div className="space-y-1">
            {comp.losses.map((loss, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <X className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-[11px] text-white/35">{loss}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function CompareCards() {
  return (
    <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {competitors.map((comp) => (
        <StaggerItem key={comp.slug}>
          <Link href={`/compare/${comp.slug}/`} className="block group h-full">
            <GlowCard className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
              {/* Graphic area */}
              <div className="relative h-[200px] bg-gradient-to-b from-white/[0.02] to-transparent border-b border-white/[0.05] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%23fff'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "20px 20px",
                  }}
                />
                <CompareGraphic comp={comp} />
              </div>

              {/* Content area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Whisperer vs {comp.name}
                  </h2>
                </div>
                <div className="mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-medium">
                    {comp.highlight}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{comp.tagline}</p>

                <WinLossList comp={comp} />

                <div className="flex items-center gap-2 mt-auto pt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Full comparison <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </GlowCard>
          </Link>
        </StaggerItem>
      ))}
    </FadeInStagger>
  );
}
