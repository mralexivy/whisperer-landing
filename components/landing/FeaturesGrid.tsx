"use client";

import { motion } from "motion/react";
import {
  Mic,
  Eye,
  Sparkles,
  Cpu,
  Globe,
  BookOpen,
  FileAudio,
  Clock,
  Filter,
} from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow } from "@/components/ui/decorations";

/* ─────────────────────────────────────────────
   GRAPHIC: Hold-to-Record (Fn key with pulses)
   ───────────────────────────────────────────── */
export function HoldToRecordGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Dashed outer ring */}
      <motion.div
        className="absolute w-44 h-44 rounded-full border border-dashed border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute w-32 h-32 rounded-full border border-white/8"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Pulse ring */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-primary/10"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      {/* Center key */}
      <motion.div
        className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center shadow-lg backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-2xl font-bold text-white/90 tracking-tight">Fn</span>
      </motion.div>
      {/* Floating small key - top right */}
      <motion.div
        className="absolute top-6 right-8 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
        animate={{ y: [0, -5, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Mic className="w-4 h-4 text-white/40" />
      </motion.div>
      {/* Floating small key - bottom left */}
      <motion.div
        className="absolute bottom-8 left-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
        animate={{ y: [0, 4, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-xs text-white/40 font-mono">⌥</span>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: Live Preview (typewriter text)
   ───────────────────────────────────────────── */
export function LivePreviewGraphic() {
  const words = ["The", "quick", "brown", "fox", "jumps"];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Overlay panel mockup */}
      <div className="w-full max-w-[260px] rounded-xl bg-white/[0.03] border border-white/10 p-4">
        {/* Status bar */}
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-primary"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Live Preview</span>
        </div>
        {/* Typewriter text */}
        <div className="flex flex-wrap gap-1.5">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="text-sm text-white/80 font-medium"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.4, duration: 0.3 }}
            >
              {word}
            </motion.span>
          ))}
          {/* Blinking cursor */}
          <motion.span
            className="w-0.5 h-4 bg-primary inline-block self-end"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
        {/* Waveform */}
        <div className="flex items-end gap-[3px] mt-4 h-5 justify-center">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-primary/50"
              animate={{
                height: [4, 8 + Math.random() * 12, 4],
              }}
              transition={{
                duration: 0.6 + Math.random() * 0.4,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: AI Post-Processing (before → after)
   ───────────────────────────────────────────── */
export function AIProcessingGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-5 gap-3">
      {/* Before text */}
      <motion.div
        className="w-full max-w-[240px] rounded-lg bg-white/[0.03] border border-white/8 p-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="text-[9px] text-white/30 uppercase tracking-wider mb-1.5 font-medium">Dictated</div>
        <p className="text-[11px] text-white/40 leading-relaxed line-through decoration-white/20">
          so basically we should go ahead and implement the caching layer
        </p>
      </motion.div>
      {/* Arrow */}
      <motion.div
        className="flex items-center gap-1.5"
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-3.5 h-3.5 text-primary/60" />
        <div className="w-8 h-px bg-gradient-to-r from-primary/40 to-primary/10" />
      </motion.div>
      {/* After text */}
      <motion.div
        className="w-full max-w-[240px] rounded-lg bg-primary/[0.06] border border-primary/20 p-3"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="text-[9px] text-primary/60 uppercase tracking-wider mb-1.5 font-medium">Rewritten</div>
        <p className="text-[11px] text-white/70 leading-relaxed">
          We should implement the caching layer to improve performance.
        </p>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: Transcription Engines (3 chips)
   ───────────────────────────────────────────── */
export function EnginesGraphic() {
  const engines = [
    { name: "Whisper", hw: "Metal GPU", color: "from-blue-500/20 to-blue-600/5", delay: 0 },
    { name: "Parakeet", hw: "Neural Engine", color: "from-green-500/20 to-green-600/5", delay: 0.15 },
    { name: "Apple Speech", hw: "System ML", color: "from-purple-500/20 to-purple-600/5", delay: 0.3 },
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-5 gap-3">
      {engines.map((engine, i) => (
        <motion.div
          key={i}
          className={`w-full max-w-[220px] rounded-xl bg-gradient-to-r ${engine.color} border border-white/8 px-4 py-3 flex items-center justify-between`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + engine.delay, duration: 0.5 }}
        >
          <div>
            <div className="text-xs font-semibold text-white/80">{engine.name}</div>
            <div className="text-[10px] text-white/35">{engine.hw}</div>
          </div>
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400/60"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        </motion.div>
      ))}
      {/* Connection lines */}
      <div className="absolute left-1/2 top-[28%] bottom-[28%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: 100+ Languages (language pills)
   ───────────────────────────────────────────── */
export function LanguagesGraphic() {
  const langs = [
    ["EN", "ES", "FR", "DE"],
    ["JA", "KO", "ZH", "AR"],
    ["PT", "IT", "RU", "HI"],
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden gap-2.5">
      {langs.map((row, ri) => (
        <div key={ri} className="flex gap-2">
          {row.map((lang, ci) => (
            <motion.div
              key={ci}
              className="w-12 h-10 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (ri * 4 + ci) * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.1, borderColor: "hsl(233 91% 66% / 0.5)" }}
            >
              <span className="text-[11px] font-bold text-white/50">{lang}</span>
            </motion.div>
          ))}
        </div>
      ))}
      {/* +more badge */}
      <motion.div
        className="mt-0.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-[10px] font-semibold text-primary/70">+88 more</span>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: Personal Dictionary (correction)
   ───────────────────────────────────────────── */
export function DictionaryGraphic() {
  const corrections = [
    { from: "tenserflow", to: "TensorFlow", tier: "Fuzzy" },
    { from: "k8s", to: "Kubernetes", tier: "Exact" },
    { from: "there", to: "their", tier: "Phonetic" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 gap-2.5">
      {corrections.map((c, i) => (
        <motion.div
          key={i}
          className="w-full max-w-[240px] rounded-lg bg-white/[0.03] border border-white/8 px-3 py-2.5 flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
        >
          <code className="text-[10px] text-red-400/60 line-through font-mono flex-shrink-0">{c.from}</code>
          <span className="text-white/20 text-[10px]">→</span>
          <code className="text-[10px] text-green-400/80 font-mono font-medium flex-shrink-0">{c.to}</code>
          <span className="ml-auto text-[8px] text-white/25 uppercase tracking-wider">{c.tier}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: File Transcription (drag & drop)
   ───────────────────────────────────────────── */
export function FileTranscriptionGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Drop zone */}
      <div className="w-48 h-32 rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center relative">
        {/* File icon dropping */}
        <motion.div
          className="absolute"
          animate={{ y: [-30, 0, -30] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-14 rounded-lg bg-gradient-to-b from-white/10 to-white/5 border border-white/15 flex flex-col items-center justify-center relative">
            <FileAudio className="w-5 h-5 text-primary/60" />
            <span className="text-[7px] text-white/30 mt-0.5 font-mono">.mp3</span>
          </div>
        </motion.div>
        {/* Drop text */}
        <motion.span
          className="text-[10px] text-white/25 mt-16"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Drop to transcribe
        </motion.span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: History & Statistics (chart mock)
   ───────────────────────────────────────────── */
export function HistoryGraphic() {
  const bars = [35, 55, 42, 68, 50, 75, 60];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Stats panel */}
      <div className="w-full max-w-[260px] rounded-xl bg-white/[0.03] border border-white/10 p-4">
        {/* Header with tabs */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Weekly Activity</span>
          <div className="flex gap-1">
            {["Words", "Time"].map((tab, i) => (
              <span
                key={i}
                className={`text-[8px] px-2 py-0.5 rounded-full ${i === 0 ? "bg-primary/20 text-primary/80" : "text-white/25"}`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-2 h-20 mb-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                className="w-full rounded-sm bg-gradient-to-t from-primary/40 to-primary/20"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              />
              <span className="text-[8px] text-white/25">{days[i]}</span>
            </div>
          ))}
        </div>
        {/* Stats row */}
        <div className="flex justify-between mt-2 pt-2 border-t border-white/5">
          {[
            { label: "WPM", value: "127", color: "text-orange-400/70" },
            { label: "Words", value: "4.2k", color: "text-blue-400/70" },
            { label: "Sessions", value: "38", color: "text-green-400/70" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-xs font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[8px] text-white/25">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GRAPHIC: Text Processing (pipeline)
   ───────────────────────────────────────────── */
export function TextProcessingGraphic() {
  const steps = [
    { label: "um, so basically...", style: "text-white/30" },
    { label: "so basically...", style: "text-white/50", badge: "Filler removed" },
    { label: "Basically...", style: "text-white/70", badge: "Grammar fixed" },
    { label: "Basically...", style: "text-white/90", badge: "Ready" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-5 gap-1.5">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="w-full max-w-[240px] flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.25, duration: 0.4 }}
        >
          {/* Step indicator */}
          <div className="flex flex-col items-center w-4 shrink-0">
            <motion.div
              className={`w-2 h-2 rounded-full ${i === steps.length - 1 ? "bg-green-400/60" : "bg-primary/40"}`}
              animate={i === steps.length - 1 ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {i < steps.length - 1 && <div className="w-px h-4 bg-white/10" />}
          </div>
          {/* Text */}
          <div className="flex-1 flex items-center gap-2 bg-white/[0.02] rounded-md px-2.5 py-1.5 border border-white/[0.05]">
            <span className={`text-[10px] font-mono ${step.style} flex-1`}>{step.label}</span>
            {step.badge && (
              <span className={`text-[7px] px-1.5 py-0.5 rounded-full ${i === steps.length - 1 ? "bg-green-400/15 text-green-400/60" : "bg-white/5 text-white/30"}`}>
                {step.badge}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURE CARD DATA
   ───────────────────────────────────────────── */
const features = [
  {
    icon: Mic,
    title: "Hold-to-Record",
    description:
      "Hold Fn or any custom shortcut to record. Release to transcribe and insert. Toggle mode and hands-free mode also available.",
    graphic: HoldToRecordGraphic,
     href: "/features",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See words appear in real-time as you speak. Dual-engine streaming with ~300ms latency and typewriter animation.",
    graphic: LivePreviewGraphic,
     href: "/features/live-preview",
  },
  {
    icon: Sparkles,
    title: "AI Post-Processing",
    description:
      "Rewrite, translate, format, summarize, fix grammar — 10 built-in AI modes plus custom prompts. All offline with on-device LLM.",
    graphic: AIProcessingGraphic,
     href: "/features/ai-writing",
  },
  {
    icon: Cpu,
    title: "Three Engines",
    description:
      "Whisper (Metal GPU), Parakeet (Neural Engine), or Apple Speech. 10+ model sizes. Hot-swap without restarting.",
    graphic: EnginesGraphic,
     href: "/features/offline-transcription",
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description:
      "Dictate in over 100 languages with per-app language profiles and AI-powered offline translation between languages.",
    graphic: LanguagesGraphic,
     href: "/features/multilingual",
  },
  {
    icon: BookOpen,
    title: "Personal Dictionary",
    description:
      "Three-tier correction with fuzzy SymSpell, phonetic matching, and prompt words for vocabulary boosting at the decoder level.",
    graphic: DictionaryGraphic,
     href: "/features/personal-dictionary",
  },
  {
    icon: FileAudio,
    title: "File Transcription",
    description:
      "Transcribe audio and video files offline. Drag-and-drop interface using the same engine. No upload, no per-minute charges.",
    graphic: FileTranscriptionGraphic,
     href: "/features/file-transcription",
  },
  {
    icon: Clock,
    title: "History & Statistics",
    description:
      "Every transcription saved with search, pin, flag, and audio playback. Usage stats: WPM, peak hours, app usage charts.",
    graphic: HistoryGraphic,
     href: "/features/transcription-history",
  },
  {
    icon: Filter,
    title: "Text Processing",
    description:
      "Automatic filler word removal, spoken list detection, spell correction pipeline, and trailing space insertion.",
    graphic: TextProcessingGraphic,
     href: "/features",
  },
];

/* ─────────────────────────────────────────────
   FEATURE CARD COMPONENT
   ───────────────────────────────────────────── */
function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  const Graphic = feature.graphic;
  return (
    <a href={feature.href} className="block group">
      <GlowCard className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
        {/* Graphic area */}
        <div className="relative h-[280px] bg-gradient-to-b from-white/[0.02] to-transparent border-b border-white/[0.05] overflow-hidden">
          {/* Subtle background grid */}
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
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {feature.description}
          </p>
        </div>
      </GlowCard>
    </a>
  );
}

/* ─────────────────────────────────────────────
   SECTION EXPORT
   ───────────────────────────────────────────── */
export const FeaturesGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <SectionGlow position="top-center" size="xl" intensity={0.06} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All the <span className="text-primary">features</span> you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive dictation tools built for professionals — every feature runs 100% offline on your Mac.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
