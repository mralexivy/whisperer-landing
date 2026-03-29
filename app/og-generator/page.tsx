"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Download, Mic, Code, WifiOff, Zap, Globe, FileText, History, BookOpen, DollarSign, Scale, Sparkles, Settings, Languages, Eye, Cpu, PenTool, Terminal, Mail, Clock, Brain, Shield, BarChart3, Keyboard } from "lucide-react";
import { toPng } from "html-to-image";

// ============ SHARED COMPONENTS ============

const WhispererLogo = ({ size = "md" }: { size?: "sm" | "md" }) => {
  const iconSize = size === "sm" ? "w-8 h-8" : "w-12 h-12";
  const textSize = size === "sm" ? "text-lg" : "text-2xl";
  const svgSize = size === "sm" ? 16 : 24;

  return (
    <div className="flex items-center gap-3">
      <div className={`${iconSize} rounded-xl bg-[#14142B] border border-white/[0.08] flex items-center justify-center`}>
        <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#5B6CF7" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect x="0.6" y="10" width="1.5" height="4" rx="0.75" fill="url(#waveGrad)" />
          <rect x="3.2" y="8.5" width="1.5" height="7" rx="0.75" fill="url(#waveGrad)" />
          <rect x="5.9" y="7" width="1.5" height="10" rx="0.75" fill="url(#waveGrad)" />
          <rect x="8.6" y="5" width="1.5" height="14" rx="0.75" fill="url(#waveGrad)" />
          <rect x="11.3" y="3.5" width="1.5" height="17" rx="0.75" fill="url(#waveGrad)" />
          <rect x="13.9" y="5" width="1.5" height="14" rx="0.75" fill="url(#waveGrad)" />
          <rect x="16.6" y="7" width="1.5" height="10" rx="0.75" fill="url(#waveGrad)" />
          <rect x="19.3" y="8.5" width="1.5" height="7" rx="0.75" fill="url(#waveGrad)" />
          <rect x="21.9" y="10" width="1.5" height="4" rx="0.75" fill="url(#waveGrad)" />
        </svg>
      </div>
      <span className={`text-white ${textSize} font-semibold`}>Whisperer</span>
    </div>
  );
};

const OGBase = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "gradient" | "code" | "blog" | "compare" }) => {
  const bgClass = {
    default: "bg-[#0C0C1A]",
    gradient: "bg-gradient-to-br from-[#0C0C1A] via-[#14142B] to-[#1a1a3a]",
    code: "bg-[#0A0A18]",
    blog: "bg-gradient-to-br from-[#0C0C1A] via-[#1a1a2e] to-[#16213e]",
    compare: "bg-gradient-to-br from-[#0C0C1A] via-[#14142B] to-[#1a1a3a]",
  }[variant];

  return (
    <div data-og-container className={`w-[1200px] h-[630px] ${bgClass} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5B6CF7] rounded-full blur-[200px] opacity-[0.08]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5CF6] rounded-full blur-[150px] opacity-[0.06]" />
      {children}
    </div>
  );
};

const IconBox = ({ icon: Icon, color = "#5B6CF7" }: { icon: React.ElementType; color?: string }) => (
  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
    <Icon className="w-8 h-8" style={{ color }} />
  </div>
);

// ============ DYNAMIC TEMPLATES ============

// Blog Post OG Template
const OGBlogPost = ({ title, category }: { title: string; category: string }) => {
  const categoryColors: Record<string, string> = {
    "guides": "#22C55E",
    "tutorials": "#5B6CF7",
    "comparisons": "#F59E0B",
    "tips": "#EC4899",
    "news": "#06B6D4",
  };
  const color = categoryColors[category.toLowerCase()] || "#5B6CF7";

  return (
    <OGBase variant="blog">
      <div className="absolute inset-0 p-12 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <WhispererLogo />
          <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: `${color}20`, color }}>
            {category}
          </span>
        </div>
        <div className="flex-1 flex items-center">
          <div className="max-w-[900px]">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#5B6CF7]" />
              <span className="text-[#5B6CF7] text-lg">Blog</span>
            </div>
            <h1 className="text-[44px] font-bold text-white leading-[1.15]">
              {title}
            </h1>
          </div>
        </div>
        <div className="text-white/40 text-sm">whispererapp.com/blog</div>
      </div>
    </OGBase>
  );
};

// Comparison Page OG Template
const OGComparison = ({ competitor, price }: { competitor: string; price: string }) => (
  <OGBase variant="compare">
    <div className="absolute inset-0 p-12 flex flex-col">
      <WhispererLogo />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="bg-[#5B6CF7]/20 rounded-2xl px-8 py-6 border border-[#5B6CF7]/30">
              <div className="text-[#5B6CF7] text-sm mb-1">Whisperer Pro</div>
              <div className="text-white text-3xl font-bold">$14.99</div>
              <div className="text-white/50 text-sm">lifetime</div>
            </div>
            <div className="text-4xl font-bold text-white/30">vs</div>
            <div className="bg-white/5 rounded-2xl px-8 py-6 border border-white/10">
              <div className="text-white/60 text-sm mb-1">{competitor}</div>
              <div className="text-white/40 text-3xl font-bold line-through">{price}</div>
            </div>
          </div>
          <h1 className="text-[40px] font-bold text-white mb-4">
            Whisperer vs {competitor}
          </h1>
          <p className="text-xl text-white/60">Mac Dictation Comparison 2026</p>
        </div>
      </div>
    </div>
  </OGBase>
);

// Feature Page OG Template
const OGFeature = ({ title, subtitle, icon: Icon, color }: { title: string; subtitle: string; icon: React.ElementType; color: string }) => (
  <OGBase>
    <div className="absolute inset-0 p-12 flex flex-col">
      <WhispererLogo />
      <div className="flex-1 flex items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <IconBox icon={Icon} color={color} />
          </div>
          <h1 className="text-[52px] font-bold text-white leading-[1.1] mb-4">{title}</h1>
          <p className="text-xl text-white/60 max-w-[500px]">{subtitle}</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Icon className="w-48 h-48" style={{ color: `${color}30` }} />
        </div>
      </div>
    </div>
  </OGBase>
);

// ============ STATIC OG IMAGES ============

const OGHome = () => (
  <OGBase variant="gradient">
    <div className="absolute inset-0 p-12 flex flex-col">
      <WhispererLogo />
      <div className="flex-1 flex items-center">
        <div className="flex-1">
          <h1 className="text-[56px] font-bold text-white leading-[1.1] mb-4">Hold Fn. Speak. Release.</h1>
          <p className="text-2xl text-white/60 mb-8">Offline dictation for Mac. $14.99 lifetime.</p>
          <div className="flex gap-3">
            <span className="bg-green-500/15 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm">100% Offline</span>
            <span className="bg-[#5B6CF7]/15 border border-[#5B6CF7]/30 text-[#5B6CF7] px-4 py-2 rounded-full text-sm">Code Mode</span>
            <span className="bg-purple-500/15 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full text-sm">3 AI Engines</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-1">
            {[...Array(24)].map((_, i) => {
              const h = 0.3 + (1 - Math.abs(i - 12) / 12) * 0.7;
              return <div key={i} className="w-3 bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full" style={{ height: `${h * 200}px` }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  </OGBase>
);

const OGPricing = () => (
  <OGBase variant="gradient">
    <div className="absolute inset-0 p-12 flex flex-col">
      <WhispererLogo />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[64px] font-bold text-white mb-4">$14.99 <span className="text-white/50 text-4xl">lifetime</span></h1>
          <p className="text-2xl text-white/60 mb-8">17x cheaper than Superwhisper. No subscription.</p>
          <div className="flex gap-6 justify-center">
            <div className="bg-[#14142B] rounded-xl px-8 py-4 border border-white/[0.06]">
              <div className="text-white/50 text-sm mb-1">Superwhisper</div>
              <div className="text-white/40 text-2xl line-through">$249</div>
            </div>
            <div className="bg-[#5B6CF7]/20 rounded-xl px-8 py-4 border border-[#5B6CF7]/40">
              <div className="text-[#5B6CF7] text-sm mb-1">Whisperer Pro</div>
              <div className="text-white text-2xl font-bold">$14.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </OGBase>
);

const OGBlog = () => (
  <OGBase variant="blog">
    <div className="absolute inset-0 p-12 flex flex-col">
      <WhispererLogo />
      <div className="flex-1 flex items-center">
        <div className="flex-1">
          <IconBox icon={BookOpen} color="#8B5CF6" />
          <h1 className="text-[52px] font-bold text-white leading-[1.1] mt-6 mb-4">Whisperer Blog</h1>
          <p className="text-xl text-white/60">Guides, tips, and updates for voice-to-text on Mac</p>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {["Voice Coding Guide", "Code Mode Tutorial", "Dictation Tips"].map((t, i) => (
            <div key={i} className="bg-[#14142B] rounded-xl p-4 border border-white/[0.06]">
              <div className="text-white font-medium">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </OGBase>
);

const OGCompareIndex = () => (
  <OGBase>
    <div className="absolute inset-0 p-12 flex flex-col">
      <WhispererLogo />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <IconBox icon={Scale} color="#5B6CF7" />
          <h1 className="text-[52px] font-bold text-white mt-6 mb-4">Compare Dictation Apps</h1>
          <p className="text-xl text-white/60 mb-8">Whisperer vs Superwhisper, Wispr Flow, Voibe, and more</p>
        </div>
      </div>
    </div>
  </OGBase>
);

// ============ ALL OG DEFINITIONS ============

interface OGDefinition {
  id: string;
  name: string;
  path: string;
  component: React.FC;
  category: "static" | "feature" | "blog" | "compare";
}

// Blog posts data
const blogPosts = [
  { slug: "ai-rewriting-dictation-offline", title: "AI Rewriting & Dictation Offline", category: "Guides" },
  { slug: "best-offline-dictation-apps-mac-2026", title: "Best Offline Dictation Apps for Mac 2026", category: "Comparisons" },
  { slug: "best-whisper-model-for-dictation", title: "Best Whisper Model for Dictation", category: "Guides" },
  { slug: "developer-productivity-voice-dictation", title: "Developer Productivity with Voice Dictation", category: "Tips" },
  { slug: "dictation-for-email", title: "Dictation for Email", category: "Guides" },
  { slug: "dictation-for-per-app-profiles", title: "Per-App Dictation Profiles", category: "Tutorials" },
  { slug: "dictation-for-slack-gmail-notion", title: "Dictation for Slack, Gmail & Notion", category: "Guides" },
  { slug: "dictation-for-terminal-cli", title: "Dictation for Terminal & CLI", category: "Tutorials" },
  { slug: "dictation-for-writers-mac", title: "Dictation for Writers on Mac", category: "Guides" },
  { slug: "dictation-productivity-statistics", title: "Dictation Productivity Statistics", category: "Tips" },
  { slug: "filler-word-removal-dictation", title: "Filler Word Removal in Dictation", category: "Tutorials" },
  { slug: "free-cheap-dictation-apps-mac-2026", title: "Free & Cheap Dictation Apps Mac 2026", category: "Comparisons" },
  { slug: "getting-started-whisperer", title: "Getting Started with Whisperer", category: "Tutorials" },
  { slug: "how-to-dictate-camelcase-snake-case", title: "How to Dictate camelCase & snake_case", category: "Tutorials" },
  { slug: "how-to-dictate-code-on-mac", title: "How to Dictate Code on Mac", category: "Tutorials" },
  { slug: "is-apple-dictation-good-enough-for-devs", title: "Is Apple Dictation Good Enough for Devs?", category: "Comparisons" },
  { slug: "multilingual-dictation-guide", title: "Multilingual Dictation Guide", category: "Guides" },
  { slug: "offline-vs-cloud-dictation-privacy", title: "Offline vs Cloud Dictation: Privacy", category: "Comparisons" },
  { slug: "personal-dictionary-setup", title: "Personal Dictionary Setup", category: "Tutorials" },
  { slug: "rsi-prevention-voice-coding", title: "RSI Prevention with Voice Coding", category: "Tips" },
  { slug: "transcribe-audio-files-offline-mac", title: "Transcribe Audio Files Offline on Mac", category: "Tutorials" },
  { slug: "vibe-coding-voice-dictation", title: "Vibe Coding with Voice Dictation", category: "Tips" },
  { slug: "voice-coding-vs-typing-speed", title: "Voice Coding vs Typing Speed", category: "Comparisons" },
  { slug: "voice-coding-with-cursor", title: "Voice Coding with Cursor", category: "Tutorials" },
  { slug: "voice-dictation-for-agentic-coding", title: "Voice Dictation for Agentic Coding", category: "Tips" },
  { slug: "voice-dictation-for-vscode", title: "Voice Dictation for VS Code", category: "Tutorials" },
  { slug: "whisper-vs-nvidia-transcription", title: "Whisper vs NVIDIA Transcription", category: "Comparisons" },
  { slug: "whisper-vs-nvidia-vs-apple-speech", title: "Whisper vs NVIDIA vs Apple Speech", category: "Comparisons" },
  { slug: "whisperer-transcription-history", title: "Whisperer Transcription History", category: "Tutorials" },
];

// Comparison pages data
const comparisons = [
  { slug: "vs-apple-dictation", competitor: "Apple Dictation", price: "Free" },
  { slug: "vs-jestype", competitor: "Jestype", price: "$49" },
  { slug: "vs-macwhisper", competitor: "MacWhisper", price: "$30" },
  { slug: "vs-spokenly", competitor: "Spokenly", price: "$8/mo" },
  { slug: "vs-superwhisper", competitor: "Superwhisper", price: "$249" },
  { slug: "vs-voibe", competitor: "Voibe", price: "$99" },
  { slug: "vs-voice-ink", competitor: "Voice Ink", price: "$5/mo" },
  { slug: "vs-willow", competitor: "Willow", price: "$79" },
  { slug: "vs-wispr-flow", competitor: "Wispr Flow", price: "$10/mo" },
];

// Feature pages data
const features = [
  { slug: "offline-transcription", title: "Offline Transcription", subtitle: "100% on-device. Your voice never leaves your Mac.", icon: WifiOff, color: "#22C55E" },
  { slug: "ai-writing", title: "AI Writing Modes", subtitle: "Rewrite, translate, format — 10 modes, all offline.", icon: Brain, color: "#8B5CF6" },
  { slug: "live-preview", title: "Live Preview", subtitle: "See your words appear as you speak. ~300ms latency.", icon: Eye, color: "#EC4899" },
  { slug: "personal-dictionary", title: "Personal Dictionary", subtitle: "Custom vocabulary with fuzzy and phonetic matching.", icon: BookOpen, color: "#F59E0B" },
  { slug: "transcription-history", title: "Transcription History", subtitle: "Search, replay audio, view stats. Everything saved.", icon: History, color: "#06B6D4" },
  { slug: "file-transcription", title: "File Transcription", subtitle: "Transcribe audio & video files locally. No uploads.", icon: FileText, color: "#5B6CF7" },
  { slug: "multilingual", title: "100+ Languages", subtitle: "Whisper supports 100+ languages. NVIDIA supports 25.", icon: Languages, color: "#22C55E" },
];

// Static pages
const staticPages: OGDefinition[] = [
  { id: "home", name: "Home", path: "/", component: OGHome, category: "static" },
  { id: "pricing", name: "Pricing", path: "/pricing", component: OGPricing, category: "static" },
  { id: "blog", name: "Blog Index", path: "/blog", component: OGBlog, category: "static" },
  { id: "compare", name: "Compare Index", path: "/compare", component: OGCompareIndex, category: "static" },
  { id: "code-mode", name: "Code Mode", path: "/code-mode", component: () => <OGFeature title="Code Mode" subtitle="Dictate camelCase, snake_case, symbols. Works in VS Code, Cursor, Terminal." icon={Code} color="#5B6CF7" />, category: "static" },
  { id: "voice-coding", name: "Voice Coding", path: "/voice-coding", component: () => <OGFeature title="Voice Coding on Mac" subtitle="Write code by speaking. Reduce RSI. camelCase, snake_case, symbols." icon={Mic} color="#22C55E" />, category: "static" },
  { id: "features", name: "Features", path: "/features", component: () => <OGFeature title="All Features" subtitle="Everything you need for voice-to-text on Mac" icon={Zap} color="#5B6CF7" />, category: "static" },
  { id: "offline-dictation-mac", name: "Offline Dictation", path: "/offline-dictation-mac", component: () => <OGFeature title="100% Offline" subtitle="On-device transcription. Your voice never leaves your Mac." icon={WifiOff} color="#22C55E" />, category: "static" },
  { id: "speech-to-text-mac", name: "Speech to Text", path: "/speech-to-text-mac", component: () => <OGFeature title="Speech to Text for Mac" subtitle="Three offline AI engines. 100+ languages. $14.99 one-time." icon={Mic} color="#5B6CF7" />, category: "static" },
  { id: "voice-to-text-developers", name: "For Developers", path: "/voice-to-text-developers", component: () => <OGFeature title="Voice-to-Text for Developers" subtitle="Code Mode, IDE support, RSI prevention" icon={Sparkles} color="#8B5CF6" />, category: "static" },
  { id: "cheapest-dictation-mac", name: "Cheapest Dictation", path: "/cheapest-dictation-mac", component: () => <OGFeature title="Cheapest Dictation for Mac" subtitle="$14.99 lifetime. 17x cheaper than alternatives." icon={DollarSign} color="#22C55E" />, category: "static" },
  { id: "dictation-no-subscription", name: "No Subscription", path: "/dictation-no-subscription", component: () => <OGFeature title="No Subscription Dictation" subtitle="One-time purchase. Own it forever. No monthly fees." icon={Shield} color="#5B6CF7" />, category: "static" },
  { id: "why-whisperer", name: "Why Whisperer", path: "/why-whisperer", component: () => <OGFeature title="Why Whisperer?" subtitle="How it compares to ChatGPT Voice, Superwhisper, and others" icon={Scale} color="#F59E0B" />, category: "static" },
];

// Generate all feature pages
const featurePages: OGDefinition[] = features.map(f => ({
  id: `feature-${f.slug}`,
  name: f.title,
  path: `/features/${f.slug}`,
  component: () => <OGFeature title={f.title} subtitle={f.subtitle} icon={f.icon} color={f.color} />,
  category: "feature" as const,
}));

// Generate all blog posts
const blogPages: OGDefinition[] = blogPosts.map(b => ({
  id: `blog-${b.slug}`,
  name: b.title,
  path: `/blog/${b.slug}`,
  component: () => <OGBlogPost title={b.title} category={b.category} />,
  category: "blog" as const,
}));

// Generate all comparison pages
const comparePages: OGDefinition[] = comparisons.map(c => ({
  id: `compare-${c.slug}`,
  name: `vs ${c.competitor}`,
  path: `/compare/${c.slug}`,
  component: () => <OGComparison competitor={c.competitor} price={c.price} />,
  category: "compare" as const,
}));

// Combine all
const allOGImages: OGDefinition[] = [
  ...staticPages,
  ...featurePages,
  ...blogPages,
  ...comparePages,
];

// ============ MAIN PAGE ============

export default function OGGeneratorPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [exportingAll, setExportingAll] = useState(false);
  const [filter, setFilter] = useState<"all" | "static" | "feature" | "blog" | "compare">("all");
  const ogRef = useRef<HTMLDivElement>(null);

  const filteredImages = filter === "all" ? allOGImages : allOGImages.filter(og => og.category === filter);
  const CurrentOG = filteredImages[currentIndex]?.component || (() => null);

  const handleDownload = useCallback(async () => {
    const el = ogRef.current;
    if (!el || exporting) return;
    setExporting(true);

    try {
      const dataUrl = await toPng(el, { pixelRatio: 2, backgroundColor: "#0C0C1A" });
      const link = document.createElement("a");
      link.download = `og-${filteredImages[currentIndex].id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  }, [currentIndex, exporting, filteredImages]);

  const handleExportAll = useCallback(async () => {
    if (exportingAll) return;
    setExportingAll(true);

    for (let i = 0; i < filteredImages.length; i++) {
      setCurrentIndex(i);
      await new Promise(resolve => setTimeout(resolve, 400));

      const el = ogRef.current;
      if (!el) continue;

      try {
        const dataUrl = await toPng(el, { pixelRatio: 2, backgroundColor: "#0C0C1A" });
        const link = document.createElement("a");
        link.download = `og-${filteredImages[i].id}.png`;
        link.href = dataUrl;
        link.click();
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (err) {
        console.error(`Export failed for ${filteredImages[i].id}:`, err);
      }
    }

    setExportingAll(false);
  }, [exportingAll, filteredImages]);

  return (
    <div className="min-h-screen bg-[#0C0C1A] py-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">OG Image Generator</h1>
        <p className="text-white/60 text-center mb-6">
          Generate unique Open Graph images for all {allOGImages.length} pages (1200x630)
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-6">
          {[
            { key: "all", label: `All (${allOGImages.length})` },
            { key: "static", label: `Static (${staticPages.length})` },
            { key: "feature", label: `Features (${featurePages.length})` },
            { key: "blog", label: `Blog (${blogPages.length})` },
            { key: "compare", label: `Compare (${comparePages.length})` },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setFilter(key as typeof filter); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === key ? "bg-[#5B6CF7] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            disabled={exportingAll}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="text-white/60 text-sm min-w-[120px] text-center">
            {currentIndex + 1} / {filteredImages.length}
          </div>

          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % filteredImages.length)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            disabled={exportingAll}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Current page name */}
        <div className="text-center mb-4">
          <span className="text-white font-medium">{filteredImages[currentIndex]?.name}</span>
          <span className="text-white/40 mx-2">|</span>
          <span className="text-white/40 text-sm">{filteredImages[currentIndex]?.path}</span>
        </div>

        {/* OG Preview */}
        <div className="flex justify-center mb-6 overflow-x-auto">
          <div ref={ogRef} className="border border-white/10 rounded-lg overflow-hidden shadow-2xl" style={{ width: 1200, height: 630 }}>
            <CurrentOG />
          </div>
        </div>

        {/* Download buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleDownload}
            disabled={exporting || exportingAll}
            className="flex items-center gap-2 px-6 py-3 bg-[#5B6CF7] hover:bg-[#4A5BD6] disabled:opacity-50 rounded-lg text-white font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            {exporting ? "Exporting..." : "Download Current"}
          </button>

          <button
            onClick={handleExportAll}
            disabled={exportingAll}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 rounded-lg text-white font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            {exportingAll ? `Exporting ${currentIndex + 1}/${filteredImages.length}...` : `Export All ${filter === "all" ? "" : filter} (${filteredImages.length})`}
          </button>
        </div>

        {/* Quick jump */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-3">Quick Jump</h2>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {filteredImages.map((og, i) => (
              <button
                key={og.id}
                onClick={() => setCurrentIndex(i)}
                className={`px-3 py-1.5 rounded text-xs transition-colors ${
                  i === currentIndex ? "bg-[#5B6CF7] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {og.name}
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 max-w-2xl mx-auto bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-3">After Export</h2>
          <ol className="text-white/60 space-y-2 text-sm">
            <li>1. Move downloaded PNGs to <code className="bg-white/10 px-2 py-0.5 rounded">public/assets/og/</code></li>
            <li>2. Update page metadata: <code className="bg-white/10 px-2 py-0.5 rounded">openGraph: {"{"} images: ["/assets/og/page-id.png"] {"}"}</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
