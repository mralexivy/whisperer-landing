"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Check,
  X,
  Lock,
  Clock,
  Monitor,
  DollarSign,
  Apple,
  ArrowRight,
  Clipboard,
  Mic,
  Cloud,
  MessageSquare,
  Terminal,
  Wifi,
  Sparkles,
  Eye,
  Cpu,
  Layers,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  FadeInStagger,
  StaggerItem,
  SlideIn,
  GlowCard,
} from "@/components/ui/animated";
import { SectionGlow, DotGrid, GradientDivider } from "@/components/ui/decorations";

import vscodeIcon from "../../public/assets/icons/vscode.png";
import cursorIcon from "../../public/assets/icons/cursor.png";
import chromeIcon from "../../public/assets/icons/chrome.png";
import slackIcon from "../../public/assets/icons/slack.png";
import terminalIcon from "../../public/assets/icons/terminal.png";
import notionIcon from "../../public/assets/icons/notion.png";
import gmailIcon from "../../public/assets/icons/gmail.png";

/* ─────────────────────────────────────────────
   USAGE BY APP GRAPHIC
   ───────────────────────────────────────────── */
const appUsageData = [
  { name: "VS Code", pct: 34, count: "12.8k", sessions: 847, color: "bg-[#5B6CF7]", icon: vscodeIcon },
  { name: "Terminal", pct: 22, count: "8.3k", sessions: 512, color: "bg-green-400", icon: terminalIcon },
  { name: "Cursor", pct: 16, count: "6.1k", sessions: 394, color: "bg-blue-400", icon: cursorIcon },
  { name: "Chrome", pct: 11, count: "4.2k", sessions: 281, color: "bg-amber-400", icon: chromeIcon },
  { name: "Slack", pct: 8, count: "3.0k", sessions: 196, color: "bg-purple-400", icon: slackIcon },
  { name: "Notion", pct: 5, count: "1.9k", sessions: 124, color: "bg-orange-400", icon: notionIcon },
  { name: "Gmail", pct: 4, count: "1.5k", sessions: 98, color: "bg-red-400", icon: gmailIcon },
];

function UsageByAppGraphic() {
  return (
    <div className="rounded-2xl bg-[#14142B] border border-white/[0.06] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-white/[0.04]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#5B6CF7]/15 flex items-center justify-center">
            <Monitor className="w-4 h-4 text-[#5B6CF7]" />
          </div>
          <div>
            <span className="text-white font-semibold text-sm">Usage by App</span>
            <div className="text-[10px] text-white/30">where Whisperer was triggered</div>
          </div>
        </div>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-px bg-white/[0.04] border-b border-white/[0.04]">
        {[
          { label: "Total Words", value: "37.8k", color: "text-blue-400" },
          { label: "Time Saved", value: "14h 22m", color: "text-green-400" },
          { label: "Avg Speed", value: "142 wpm", color: "text-orange-400" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-[#14142B] px-4 py-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          >
            <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-[9px] text-white/25 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* App rows */}
      <div className="px-5 sm:px-6 py-4 space-y-3">
        {appUsageData.map((app, i) => (
          <motion.div
            key={app.name}
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
          >
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0 border border-white/[0.06]">
              <img src={app.icon.src} alt={app.name} className="w-4 h-4 rounded-sm" />
            </div>
            <span className="text-white/70 text-xs font-medium min-w-[55px] sm:min-w-[70px]">{app.name}</span>
            <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${app.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${app.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="text-white/40 text-[11px] font-medium min-w-[30px] text-right">{app.pct}%</span>
            <div className="text-right min-w-[45px] hidden sm:block">
              <div className="text-white font-semibold text-xs">{app.count}</div>
              <div className="text-[8px] text-white/20">{app.sessions} sessions</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RECENT TRANSCRIPTIONS GRAPHIC
   ───────────────────────────────────────────── */
const transcriptions = [
  { text: "Let's schedule the design review for Thursday afternoon and invite the whole team", duration: "0:08", age: "2m", active: false },
  { text: "The API endpoint needs pagination, add limit and offset query parameters", duration: "0:12", age: "15m", active: false },
  { text: "Hey team, the new dashboard looks great. Ship it after QA signs off", duration: "0:06", age: "1h", active: true },
  { text: "Rename the getUserProfile method to fetchUserProfile for consistency", duration: "0:04", age: "2h", active: false },
  { text: "Can you review pull request 847? It fixes the auth token refresh bug", duration: "0:09", age: "3h", active: false },
];

function RecentTranscriptionsGraphic() {
  return (
    <div className="rounded-2xl bg-[#14142B] border border-white/[0.06] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between border-b border-white/[0.04]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#5B6CF7]/15 flex items-center justify-center">
            <Clipboard className="w-4 h-4 text-[#5B6CF7]" />
          </div>
          <span className="text-[#5B6CF7] font-bold text-xs uppercase tracking-wider">Recent Transcriptions</span>
        </div>
        <motion.div
          className="flex items-center gap-1.5 bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/[0.06]"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white/50 text-[10px] font-mono">Alt+V</span>
          <span className="text-white/20 text-[10px]">to cycle</span>
        </motion.div>
      </div>

      {/* Transcription rows */}
      <div className="px-3 sm:px-4 py-3 space-y-1">
        {transcriptions.map((t, i) => (
          <motion.div
            key={i}
            className={`rounded-xl px-3 py-3 transition-all duration-300 ${
              t.active
                ? "bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 shadow-[0_0_20px_hsl(233_91%_66%/0.1)]"
                : "border border-transparent hover:bg-white/[0.02]"
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-start gap-2.5">
              <motion.span
                className={`text-xs font-mono w-5 shrink-0 pt-0.5 text-center rounded ${
                  t.active ? "text-[#5B6CF7] font-bold" : "text-white/20"
                }`}
                animate={t.active ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {i + 1}
              </motion.span>
              <div className="flex-1 min-w-0">
                <p className={`text-xs leading-relaxed ${t.active ? "text-white/80" : "text-white/50"}`}>
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[10px] text-white/25 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> {t.duration}
                  </span>
                  <span className="text-[10px] text-white/25">{t.age} ago</span>
                </div>
              </div>
              {t.active && (
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clipboard className="w-3.5 h-3.5 text-[#5B6CF7] shrink-0 mt-0.5" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 sm:px-6 py-3 border-t border-white/[0.04] flex items-center justify-between">
        <span className="text-[10px] text-white/20">Release Alt to copy</span>
        <span className="text-[10px] text-white/20">5 items</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMPETITOR CARD GRAPHICS
   ───────────────────────────────────────────── */

function SingleAppGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Locked circle */}
      <motion.div
        className="absolute w-36 h-36 rounded-full border-2 border-dashed border-red-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {/* Center app */}
      <motion.div
        className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageSquare className="w-7 h-7 text-white/50" />
      </motion.div>
      {/* Blocked arrows */}
      {[45, 135, 225, 315].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 flex items-center justify-center"
          style={{
            top: `${50 + 38 * Math.sin((angle * Math.PI) / 180)}%`,
            left: `${50 + 38 * Math.cos((angle * Math.PI) / 180)}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        >
          <X className="w-4 h-4 text-red-400/40" />
        </motion.div>
      ))}
    </div>
  );
}

function CloudRequiredGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden gap-3">
      {/* Cloud with upload arrow */}
      <motion.div
        className="relative"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-14 h-14 text-white/20" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Wifi className="w-6 h-6 text-red-400/50" />
        </motion.div>
      </motion.div>
      {/* Data flowing up */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 rounded-full bg-red-400/30"
          style={{ left: `${35 + i * 15}%` }}
          animate={{
            y: [60, -20],
            opacity: [0, 0.6, 0],
            height: [8, 16, 8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Warning text */}
      <motion.span
        className="text-[10px] text-red-400/40 font-medium"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Voice data uploaded
      </motion.span>
    </div>
  );
}

function NoVoiceGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Terminal className="w-16 h-16 text-white/15" />
        {/* Strike-through mic */}
        <motion.div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-400/10 border border-red-400/20 flex items-center justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="relative">
            <Mic className="w-4 h-4 text-red-400/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-0.5 bg-red-400/50 rotate-45 rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ExpensiveGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden gap-2">
      {/* Price tags stacking up */}
      {[
        { price: "$8/mo", opacity: 0.25, y: 12 },
        { price: "$15/mo", opacity: 0.35, y: 0 },
        { price: "$249", opacity: 0.5, y: -12 },
      ].map((tag, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2 bg-white/[0.03] border border-red-400/10 rounded-lg px-3 py-1.5"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: tag.opacity, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
        >
          <DollarSign className="w-3 h-3 text-red-400/40" />
          <span className="text-xs text-red-400/60 font-mono">{tag.price}</span>
        </motion.div>
      ))}
      {/* vs Whisperer */}
      <motion.div
        className="flex items-center gap-2 bg-primary/[0.06] border border-primary/20 rounded-lg px-3 py-1.5 mt-1"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Check className="w-3 h-3 text-primary" />
        <span className="text-xs text-primary font-semibold font-mono">$14.99 lifetime</span>
      </motion.div>
    </div>
  );
}

function NoHistoryGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-5">
      {/* Empty state */}
      <motion.div
        className="w-full max-w-[200px] rounded-xl bg-white/[0.02] border border-white/[0.06] p-4"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
            <div className={`h-1.5 rounded-full bg-white/[0.06]`} style={{ width: `${70 - i * 15}%` }} />
          </div>
        ))}
        <div className="text-center mt-3">
          <span className="text-[9px] text-white/15">No history available</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMPETITOR DATA WITH GRAPHICS
   ───────────────────────────────────────────── */
const competitors = [
  {
    name: "ChatGPT Voice",
    subtitle: "Locked to one app",
    graphic: SingleAppGraphic,
    limitations: [
      "Only works inside ChatGPT",
      "Requires internet connection",
      "Can't insert text into other apps",
    ],
    whispererWin: "Works in every app on your Mac",
  },
  {
    name: "Claude Voice Mode",
    subtitle: "Conversation, not dictation",
    graphic: SingleAppGraphic,
    limitations: [
      "Only works inside Claude",
      "Requires internet connection",
      "Designed for chat, not text insertion",
    ],
    whispererWin: "Dictate into any app, fully offline",
  },
  {
    name: "Apple Dictation",
    subtitle: "No memory",
    graphic: NoHistoryGraphic,
    limitations: [
      "No transcription history or reuse",
      "No usage statistics",
      "No code mode for developers",
    ],
    whispererWin: "Full history, stats, and Code Mode",
  },
  {
    name: "Ollama & Local AI",
    subtitle: "Text only, no voice",
    graphic: NoVoiceGraphic,
    limitations: [
      "No voice input at all",
      "No system-wide text insertion",
      "Terminal-only, manual workflow",
    ],
    whispererWin: "Hold Fn, speak, text appears anywhere",
  },
  {
    name: "Wispr Flow",
    subtitle: "Cloud dependent",
    graphic: CloudRequiredGraphic,
    limitations: [
      "$15/month subscription",
      "Audio and screenshots sent to cloud",
      "No offline mode available",
    ],
    whispererWin: "100% offline, $14.99 lifetime",
  },
  {
    name: "Superwhisper",
    subtitle: "Premium pricing",
    graphic: ExpensiveGraphic,
    limitations: [
      "$249 lifetime or $8.49/month",
      "No Code Mode for developers",
      "No personal dictionary",
    ],
    whispererWin: "17x cheaper with Code Mode included",
  },
];

/* ─────────────────────────────────────────────
   ADVANTAGE GRAPHICS
   ───────────────────────────────────────────── */

function OfflineGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Shield with lock */}
      <motion.div
        className="relative w-20 h-24 flex items-center justify-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-green-400/15 to-green-400/5 border border-green-400/20" />
        <Lock className="w-8 h-8 text-green-400/70" />
      </motion.div>
      {/* Blocked cloud signals */}
      {[-1, 1].map((dir) => (
        <motion.div
          key={dir}
          className="absolute"
          style={{ [dir > 0 ? "right" : "left"]: "15%", top: "25%" }}
          animate={{ opacity: [0.15, 0.35, 0.15], x: [0, dir * 3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: dir > 0 ? 0.5 : 0 }}
        >
          <div className="relative">
            <Cloud className="w-8 h-8 text-white/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-red-400/30 rotate-45 rounded-full" />
            </div>
          </div>
        </motion.div>
      ))}
      {/* Status text */}
      <motion.div
        className="absolute bottom-6 flex items-center gap-1.5"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <span className="text-[10px] text-green-400/50 font-medium">All data stays local</span>
      </motion.div>
    </div>
  );
}

function AIWritingGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-5 gap-3">
      {/* Before text */}
      <motion.div
        className="w-full max-w-[240px] rounded-lg bg-white/[0.03] border border-white/8 p-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
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
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
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

function LivePreviewGraphic() {
  const words = ["The", "quick", "brown", "fox", "jumps"];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="w-full max-w-[260px] rounded-xl bg-white/[0.03] border border-white/10 p-4">
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-primary"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Live Preview</span>
        </div>
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
          <motion.span
            className="w-0.5 h-4 bg-primary inline-block self-end"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
        <div className="flex items-end gap-[3px] mt-4 h-5 justify-center">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-primary/50"
              animate={{ height: [4, 8 + ((i * 7 + 3) % 12), 4] }}
              transition={{
                duration: 0.6 + ((i * 3 + 1) % 5) * 0.08,
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

function ThreeEnginesGraphic() {
  const engines = [
    { name: "Whisper", hw: "Metal GPU", color: "from-blue-500/20 to-blue-600/5" },
    { name: "NVIDIA", hw: "Neural Engine", color: "from-green-500/20 to-green-600/5" },
    { name: "Apple Speech", hw: "System ML", color: "from-purple-500/20 to-purple-600/5" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-5 gap-3">
      {engines.map((engine, i) => (
        <motion.div
          key={i}
          className={`w-full max-w-[220px] rounded-xl bg-gradient-to-r ${engine.color} border border-white/8 px-4 py-3 flex items-center justify-between`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
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
      <div className="absolute left-1/2 top-[28%] bottom-[28%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function PerAppProfilesGraphic() {
  const profiles = [
    { app: "Slack", style: "Chat", color: "bg-[#E91E8C]", text: "hey can you review the PR" },
    { app: "Gmail", style: "Email", color: "bg-[#3B82F6]", text: "Dear team, please find..." },
    { app: "VS Code", style: "Code", color: "bg-[#5B6CF7]", text: "getUserName()" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 gap-2.5">
      {profiles.map((p, i) => (
        <motion.div
          key={i}
          className="w-full max-w-[240px] rounded-lg bg-white/[0.03] border border-white/8 p-2.5 relative overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${p.color}`} />
          <div className="flex items-center gap-2 mb-1 pl-2">
            <span className="text-[10px] font-semibold text-white/70">{p.app}</span>
            <span className={`text-[8px] px-1.5 py-0.5 rounded ${p.color}/20 text-white/50`}>{p.style}</span>
          </div>
          <p className="text-[10px] text-white/40 font-mono pl-2">{p.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

function PricingGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden gap-2">
      {/* Competitor prices fading */}
      {[
        { label: "Superwhisper", price: "$249", opacity: 0.25 },
        { label: "Wispr Flow", price: "$180/yr", opacity: 0.3 },
      ].map((comp, i) => (
        <motion.div
          key={i}
          className="flex items-center justify-between w-full max-w-[200px] px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: comp.opacity, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
        >
          <span className="text-[10px] text-white/25">{comp.label}</span>
          <span className="text-[10px] text-red-400/40 font-mono line-through">{comp.price}</span>
        </motion.div>
      ))}
      {/* Whisperer price */}
      <motion.div
        className="flex items-center justify-between w-full max-w-[200px] px-3 py-2.5 rounded-lg bg-primary/[0.06] border border-primary/20 mt-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="text-[10px] text-primary font-semibold">Whisperer Pro</span>
        <span className="text-sm text-primary font-bold font-mono">$14.99</span>
      </motion.div>
      <motion.span
        className="text-[9px] text-white/20 mt-0.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
      >
        One-time purchase, lifetime updates
      </motion.span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   KEY ADVANTAGES DATA (with graphics)
   ───────────────────────────────────────────── */
const advantages = [
  {
    icon: Lock,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Offline & Private",
    description: "Runs on your Mac. No internet, no cloud, no accounts. Voice data stays on device.",
    graphic: OfflineGraphic,
  },
  {
    icon: Sparkles,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    title: "AI Post-Processing",
    description: "Rewrite, translate, format, summarize, fix grammar. On-device LLM. 10 modes plus custom prompts.",
    graphic: AIWritingGraphic,
  },
  {
    icon: Eye,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    title: "Live Preview",
    description: "Words appear as you speak. ~300ms latency.",
    graphic: LivePreviewGraphic,
  },
  {
    icon: Cpu,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Three Engines",
    description: "Whisper (Metal GPU), NVIDIA (Neural Engine), Apple Speech. 10+ model sizes. Switch without restarting.",
    graphic: ThreeEnginesGraphic,
  },
  {
    icon: Layers,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    title: "Per-App Profiles",
    description: "Slack: chat style. Gmail: email format. VS Code: Code Mode. Switches based on the active app.",
    graphic: PerAppProfilesGraphic,
  },
  {
    icon: DollarSign,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    title: "$14.99 One-Time",
    description: "All Pro features. Superwhisper is $249, Wispr Flow is $15/month. No subscription.",
    graphic: PricingGraphic,
  },
];

/* ─────────────────────────────────────────────
   WHISPERER VS ALL - ANIMATED GRAPHIC
   ───────────────────────────────────────────── */
function WhispererSystemWideGraphic() {
  const apps = [
    { icon: vscodeIcon, name: "VS Code", angle: 0 },
    { icon: slackIcon, name: "Slack", angle: 60 },
    { icon: chromeIcon, name: "Chrome", angle: 120 },
    { icon: terminalIcon, name: "Terminal", angle: 180 },
    { icon: cursorIcon, name: "Cursor", angle: 240 },
    { icon: gmailIcon, name: "Gmail", angle: 300 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-primary/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute inset-12 rounded-full border border-primary/10"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Connection lines pulsing */}
      {apps.map((app, i) => {
        const rad = (app.angle * Math.PI) / 180;
        const cx = 50;
        const cy = 50;
        const r = 38;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-primary/20 to-transparent origin-left"
            style={{
              width: `${r}%`,
              transform: `rotate(${app.angle}deg)`,
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        );
      })}
      {/* Center Whisperer hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_hsl(233_91%_66%/0.2)] z-10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mic className="w-7 h-7 text-primary" />
      </motion.div>
      {/* Surrounding app icons */}
      {apps.map((app, i) => {
        const rad = (app.angle * Math.PI) / 180;
        const r = 38;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <motion.div
            key={i}
            className="absolute w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.15, borderColor: "hsl(233 91% 66% / 0.5)" }}
          >
            <img src={app.icon.src} alt={app.name} className="w-5 h-5" />
          </motion.div>
        );
      })}
      {/* Pulse ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/5"
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */
export function WhyWhispererContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.1} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Why Whisperer" }]} />
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Why <span className="text-primary">Whisperer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Other voice tools lock you into one app, need internet, or only support English.
                Whisperer works in any app, runs offline, supports 100+ languages. $14.99 one-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="gap-3">
                    <Apple className="w-5 h-5" />
                    Download on Mac App Store
                  </Button>
                </a>
                <Link href="/compare">
                  <Button variant="heroOutline" size="xl" className="gap-3">
                    See Detailed Comparisons
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <GradientDivider />

      {/* Works Across Every App */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow position="center" color="blue" size="lg" intensity={0.06} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Works in <span className="text-primary">any app</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ChatGPT voice only works in ChatGPT. Whisperer works wherever your cursor is.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <SlideIn direction="left">
              <WhispererSystemWideGraphic />
            </SlideIn>

            <SlideIn direction="right">
              <UsageByAppGraphic />
            </SlideIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Speak Once, Paste Everywhere */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-right" color="purple" size="md" intensity={0.06} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <SlideIn direction="left" className="order-2 lg:order-1">
              <RecentTranscriptionsGraphic />
            </SlideIn>

            <SlideIn direction="right" className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Speak once, <span className="text-primary">paste anywhere</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every transcription is saved. Press Alt+V to cycle through recent ones
                and paste into the current app. No need to say the same thing twice.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dictate a message, paste it into Slack, then email, then notes.
                History is searchable and always available.
              </p>

              {/* Workflow steps */}
              <div className="space-y-3">
                {[
                  { step: "1", text: "Dictate your message once", icon: Mic },
                  { step: "2", text: "Press Alt+V to open recent transcriptions", icon: Clipboard },
                  { step: "3", text: "Cycle and paste into any app", icon: Sparkles },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Competitor Comparison - FeaturesGrid style */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow position="top-center" size="xl" intensity={0.06} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What others <span className="text-primary">lack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every competitor makes trade-offs. Here is what Whisperer does that they do not.
            </p>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {competitors.map((comp, i) => {
              const Graphic = comp.graphic;
              return (
                <StaggerItem key={i}>
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
                      <Graphic />
                    </div>

                    {/* Content area */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-foreground mb-0.5">{comp.name}</h3>
                      <p className="text-xs text-muted-foreground/60 mb-4">{comp.subtitle}</p>

                      {/* Limitations */}
                      <div className="space-y-2 mb-4">
                        {comp.limitations.map((lim, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-red-400/10 flex items-center justify-center mt-0.5 shrink-0">
                              <X className="w-2.5 h-2.5 text-red-400/60" />
                            </div>
                            <span className="text-xs text-muted-foreground leading-relaxed">{lim}</span>
                          </div>
                        ))}
                      </div>

                      {/* Whisperer advantage */}
                      <div className="mt-auto pt-3 border-t border-primary/10">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                            <Check className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-xs text-primary font-medium leading-relaxed">{comp.whispererWin}</span>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* Key Advantages */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" color="purple" size="lg" intensity={0.06} />
          <DotGrid />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Six things that set Whisperer apart.
            </p>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {advantages.map((adv, i) => {
              const Graphic = adv.graphic;
              return (
                <StaggerItem key={i}>
                  <GlowCard className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full flex flex-col group">
                    {/* Graphic area */}
                    <div className="relative h-[220px] bg-gradient-to-b from-white/[0.02] to-transparent border-b border-white/[0.05] overflow-hidden">
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
                        <div className={`w-8 h-8 rounded-lg ${adv.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <adv.icon className={`w-4 h-4 ${adv.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {adv.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {adv.description}
                      </p>
                    </div>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <GradientDivider />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="center" size="lg" intensity={0.12} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mic className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Try it</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Free download from the Mac App Store. $2.99 base, $14.99 Pro. No subscription.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="gap-3">
                    <Apple className="w-5 h-5" />
                    Download on Mac App Store
                  </Button>
                </a>
                <Link href="/compare">
                  <Button variant="heroOutline" size="xl" className="gap-3">
                    Compare with Alternatives
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
