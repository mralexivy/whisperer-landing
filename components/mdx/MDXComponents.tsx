import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TranscriptionsMockup } from "@/components/mockups/TranscriptionsMockup";
import { FileTranscriptionMockup } from "@/components/mockups/FileTranscriptionMockup";
import { DictionaryMockup } from "@/components/mockups/DictionaryMockup";
import { StatisticsMockup } from "@/components/mockups/StatisticsMockup";
import {
  Code, Lock, Zap, Target, DollarSign, Shield, Link2, Cpu, Mic,
  BookOpen, Eye, MessageSquare, Keyboard, RefreshCw, Brain, Bot,
  Gauge, Globe, Monitor, Sparkles, CircleHelp, Pencil, Clock,
  Hand, Pause, Terminal, Minus, Slash, Star, Hash, GitBranch,
  Settings, Package, Library, Wrench, Headphones, FileText,
  FolderOpen, Radio, Scale, UserRound, Layers,
  Info, CheckCircle2, AlertTriangle, Check, X, Apple,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Icon registry — color-coded to match homepage design system        */
/* ------------------------------------------------------------------ */

interface IconEntry {
  component: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
}

const iconMap: Record<string, IconEntry> = {
  code:           { component: Code,           color: "text-blue-400",   bg: "bg-blue-400/10" },
  terminal:       { component: Terminal,        color: "text-blue-400",   bg: "bg-blue-400/10" },
  keyboard:       { component: Keyboard,        color: "text-blue-400",   bg: "bg-blue-400/10" },
  monitor:        { component: Monitor,         color: "text-blue-400",   bg: "bg-blue-400/10" },
  cpu:            { component: Cpu,             color: "text-blue-400",   bg: "bg-blue-400/10" },
  hash:           { component: Hash,            color: "text-blue-400",   bg: "bg-blue-400/10" },
  layers:         { component: Layers,          color: "text-blue-400",   bg: "bg-blue-400/10" },
  lock:           { component: Lock,            color: "text-green-400",  bg: "bg-green-400/10" },
  shield:         { component: Shield,          color: "text-green-400",  bg: "bg-green-400/10" },
  eye:            { component: Eye,             color: "text-green-400",  bg: "bg-green-400/10" },
  hand:           { component: Hand,            color: "text-green-400",  bg: "bg-green-400/10" },
  pause:          { component: Pause,           color: "text-green-400",  bg: "bg-green-400/10" },
  zap:            { component: Zap,             color: "text-amber-400",  bg: "bg-amber-400/10" },
  gauge:          { component: Gauge,           color: "text-amber-400",  bg: "bg-amber-400/10" },
  clock:          { component: Clock,           color: "text-amber-400",  bg: "bg-amber-400/10" },
  star:           { component: Star,            color: "text-amber-400",  bg: "bg-amber-400/10" },
  sparkles:       { component: Sparkles,        color: "text-amber-400",  bg: "bg-amber-400/10" },
  brain:          { component: Brain,           color: "text-purple-400", bg: "bg-purple-400/10" },
  bot:            { component: Bot,             color: "text-purple-400", bg: "bg-purple-400/10" },
  "refresh-cw":   { component: RefreshCw,       color: "text-purple-400", bg: "bg-purple-400/10" },
  settings:       { component: Settings,        color: "text-purple-400", bg: "bg-purple-400/10" },
  wrench:         { component: Wrench,          color: "text-purple-400", bg: "bg-purple-400/10" },
  mic:            { component: Mic,             color: "text-cyan-400",   bg: "bg-cyan-400/10" },
  "message-square": { component: MessageSquare, color: "text-cyan-400",   bg: "bg-cyan-400/10" },
  radio:          { component: Radio,           color: "text-cyan-400",   bg: "bg-cyan-400/10" },
  headphones:     { component: Headphones,      color: "text-cyan-400",   bg: "bg-cyan-400/10" },
  target:         { component: Target,          color: "text-rose-400",   bg: "bg-rose-400/10" },
  "dollar-sign":  { component: DollarSign,      color: "text-rose-400",   bg: "bg-rose-400/10" },
  scale:          { component: Scale,           color: "text-rose-400",   bg: "bg-rose-400/10" },
  "circle-help":  { component: CircleHelp,      color: "text-rose-400",   bg: "bg-rose-400/10" },
  "book-open":    { component: BookOpen,        color: "text-indigo-400", bg: "bg-indigo-400/10" },
  "file-text":    { component: FileText,        color: "text-indigo-400", bg: "bg-indigo-400/10" },
  "folder-open":  { component: FolderOpen,      color: "text-indigo-400", bg: "bg-indigo-400/10" },
  library:        { component: Library,         color: "text-indigo-400", bg: "bg-indigo-400/10" },
  package:        { component: Package,         color: "text-indigo-400", bg: "bg-indigo-400/10" },
  pencil:         { component: Pencil,          color: "text-indigo-400", bg: "bg-indigo-400/10" },
  link:           { component: Link2,           color: "text-teal-400",   bg: "bg-teal-400/10" },
  globe:          { component: Globe,           color: "text-teal-400",   bg: "bg-teal-400/10" },
  "git-branch":   { component: GitBranch,       color: "text-teal-400",   bg: "bg-teal-400/10" },
  user:           { component: UserRound,       color: "text-teal-400",   bg: "bg-teal-400/10" },
  minus:          { component: Minus,           color: "text-blue-400",   bg: "bg-blue-400/10" },
  slash:          { component: Slash,           color: "text-blue-400",   bg: "bg-blue-400/10" },
  x:              { component: X,               color: "text-red-400",    bg: "bg-red-400/10" },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function heading(Tag: "h2" | "h3" | "h4") {
  const Component = ({ children }: { children?: React.ReactNode }) => {
    const id = slugify(String(children));
    return (
      <Tag id={id} className="scroll-mt-24 group">
        {children}
        <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-50 transition-opacity text-primary" aria-label={`Link to ${String(children)}`}>#</a>
      </Tag>
    );
  };
  Component.displayName = `MDX${Tag}`;
  return Component;
}

function getChildText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getChildText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getChildText((children as React.ReactElement<{ children?: React.ReactNode }>).props.children);
  }
  return "";
}

/* ------------------------------------------------------------------ */
/*  Component map                                                      */
/* ------------------------------------------------------------------ */

export const mdxComponents: MDXComponentsType = {
  h2: heading("h2"),
  h3: heading("h3"),
  h4: heading("h4"),

  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return <Link href={href} className="text-primary hover:underline" {...props}>{children}</Link>;
    }
    return <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  },

  img: ({ src, alt, ...props }) => (
    <figure className="my-8">
      <img src={src} alt={alt} className="rounded-xl border border-border shadow-lg w-full" {...props} />
      {alt && alt !== "" && <figcaption className="text-center text-sm text-muted-foreground mt-3">{alt}</figcaption>}
    </figure>
  ),

  /* ═══════════════════════════════════════════════════════════════════
     TABLES — Premium dark with gradient header + Yes/No auto-styling
     ═══════════════════════════════════════════════════════════════════ */

  table: ({ children }) => (
    <div className="not-prose overflow-x-auto my-10 rounded-2xl border border-border/80 bg-card shadow-lg shadow-black/20">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-border" style={{ background: "linear-gradient(180deg, hsl(240 37% 16%), hsl(240 37% 12%))" }}>
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-5 py-4 text-left text-xs font-bold text-foreground uppercase tracking-widest">
      {children}
    </th>
  ),
  tr: ({ children }) => (
    <tr className="border-b border-border/40 last:border-0 hover:bg-white/[0.02] transition-colors">
      {children}
    </tr>
  ),
  td: ({ children }) => {
    const text = getChildText(children).trim();
    if (text === "Yes" || text.startsWith("Yes")) {
      return (
        <td className="px-5 py-3.5 text-sm">
          <span className="inline-flex items-center gap-1.5 text-green-400 font-medium">
            <span className="w-5 h-5 rounded-full bg-green-400/10 flex items-center justify-center"><Check className="w-3 h-3" /></span>
            {children}
          </span>
        </td>
      );
    }
    if (text === "No") {
      return (
        <td className="px-5 py-3.5 text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground/40">
            <span className="w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center"><X className="w-3 h-3" /></span>
            {children}
          </span>
        </td>
      );
    }
    if (text.startsWith("Partial") || text.startsWith("Limited") || text.startsWith("N/A")) {
      return (
        <td className="px-5 py-3.5 text-sm">
          <span className="inline-flex items-center gap-1.5 text-yellow-400/70">
            <span className="w-5 h-5 rounded-full bg-yellow-400/10 flex items-center justify-center"><Minus className="w-3 h-3" /></span>
            {children}
          </span>
        </td>
      );
    }
    return <td className="px-5 py-3.5 text-sm text-muted-foreground">{children}</td>;
  },

  /* ═══════════════════════════════════════════════════════════════════
     BLOCKQUOTE — Gradient accent bar
     ═══════════════════════════════════════════════════════════════════ */

  blockquote: ({ children }) => (
    <blockquote className="relative border-l-4 border-transparent bg-primary/5 px-6 py-4 my-6 rounded-r-xl overflow-hidden backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(180deg, hsl(233 91% 66%), hsl(258 90% 66%))" }} />
      {children}
    </blockquote>
  ),

  /* ═══════════════════════════════════════════════════════════════════
     CODE — Inline + Block
     ═══════════════════════════════════════════════════════════════════ */

  code: ({ children, ...props }) => (
    <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-md text-sm font-mono border border-primary/20" {...props}>{children}</code>
  ),
  pre: ({ children }) => (
    <div className="my-8 rounded-2xl overflow-hidden border border-border shadow-lg shadow-black/20 not-prose">
      <div className="bg-[hsl(240_37%_14%)] px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <pre className="bg-[#0d1117] text-[#e6edf3] p-5 overflow-x-auto text-sm leading-relaxed !my-0 !rounded-none">{children}</pre>
    </div>
  ),

  hr: () => (
    <div className="h-px w-full my-12" style={{ background: "linear-gradient(90deg, transparent, hsl(233 91% 66% / 0.4), transparent)" }} />
  ),

  Badge: ({ children, ...props }: React.ComponentProps<typeof Badge>) => (
    <Badge {...props}>{children}</Badge>
  ),

  /* ═══════════════════════════════════════════════════════════════════
     CALLOUT — Premium glassmorphism with Lucide icons
     ═══════════════════════════════════════════════════════════════════ */

  Callout: ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => {
    const config = {
      info: {
        gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
        border: "border-blue-500/30",
        IconComp: Info,
        label: "Info",
        text: "text-blue-100",
        labelColor: "text-blue-400",
        glow: "bg-blue-500/20",
      },
      tip: {
        gradient: "from-green-500/20 via-green-500/5 to-transparent",
        border: "border-green-500/30",
        IconComp: CheckCircle2,
        label: "Tip",
        text: "text-green-100",
        labelColor: "text-green-400",
        glow: "bg-green-500/20",
      },
      warning: {
        gradient: "from-yellow-500/20 via-yellow-500/5 to-transparent",
        border: "border-yellow-500/30",
        IconComp: AlertTriangle,
        label: "Warning",
        text: "text-yellow-100",
        labelColor: "text-yellow-400",
        glow: "bg-yellow-500/20",
      },
    };
    const c = config[type];
    return (
      <div className={`not-prose relative border ${c.border} rounded-2xl p-6 my-10 overflow-hidden`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} pointer-events-none`} />
        {/* Corner glow */}
        <div className={`absolute -top-10 -left-10 w-32 h-32 ${c.glow} rounded-full blur-3xl pointer-events-none`} />
        <div className="relative">
          <div className={`flex items-center gap-2.5 font-semibold mb-3 ${c.labelColor}`}>
            <div className={`w-8 h-8 rounded-lg ${c.glow} flex items-center justify-center`}>
              <c.IconComp className="w-4 h-4" />
            </div>
            <span className="text-sm uppercase tracking-wider">{c.label}</span>
          </div>
          <div className={`text-sm leading-relaxed ${c.text} opacity-90`}>{children}</div>
        </div>
      </div>
    );
  },

  /* ═══════════════════════════════════════════════════════════════════
     VOICEDEMO — Premium voice→code demonstration
     ═══════════════════════════════════════════════════════════════════ */

  VoiceDemo: ({ voice, output, lang = "Code" }: { voice: string; output: string; lang?: string }) => (
    <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-lg shadow-black/20 relative">
      {/* Left gradient accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ background: "linear-gradient(180deg, hsl(233 91% 66%), hsl(258 90% 66%))" }} />
      <div className="border border-border rounded-2xl overflow-hidden ml-1">
        {/* Voice input section */}
        <div className="px-6 py-5 border-b border-border/50 flex items-start gap-4" style={{ background: "linear-gradient(135deg, hsl(240 37% 14%), hsl(240 37% 11%))" }}>
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5 relative">
            <Mic className="w-5 h-5 text-primary" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_hsl(142_71%_45%/0.5)]">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-muted-foreground mb-1.5 font-semibold uppercase tracking-[0.15em]">You say</div>
            <p className="text-foreground/90 italic leading-relaxed text-[15px]">&ldquo;{voice}&rdquo;</p>
          </div>
        </div>
        {/* Code output section */}
        <div className="px-6 py-5 bg-[#0d1117]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.15em]">Output</span>
            <span className="text-[10px] bg-primary/15 text-primary px-2.5 py-1 rounded-full font-semibold tracking-wider uppercase">{lang}</span>
          </div>
          <code className="text-green-400 font-mono text-sm block leading-relaxed">{output}</code>
        </div>
      </div>
    </div>
  ),

  /* ═══════════════════════════════════════════════════════════════════
     FEATURE GRID + CARD — Homepage-matching design
     ═══════════════════════════════════════════════════════════════════ */

  FeatureGrid: ({ children }: { children: React.ReactNode }) => (
    <div className="not-prose grid sm:grid-cols-2 gap-5 my-10">{children}</div>
  ),

  FeatureCard: ({ title, icon, children }: { title: string; icon?: string; children: React.ReactNode }) => {
    const entry = icon ? iconMap[icon] : null;
    return (
      <div className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(233_91%_66%/0.08)]">
        {entry && (
          <div className={`w-14 h-14 rounded-xl ${entry.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
            <entry.component className={`w-7 h-7 ${entry.color}`} />
          </div>
        )}
        <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
        {/* Hover glow overlay */}
        <div className="absolute inset-0 rounded-2xl bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
    );
  },

  /* ═══════════════════════════════════════════════════════════════════
     STEP LIST — Premium numbered steps with connecting line
     ═══════════════════════════════════════════════════════════════════ */

  StepList: ({ children }: { children: React.ReactNode }) => (
    <div className="not-prose my-10 space-y-0">{children}</div>
  ),

  Step: ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
    <div className="flex gap-5 relative pb-10 last:pb-0">
      {/* Connecting line */}
      <div className="absolute left-[23px] top-[52px] bottom-0 w-px bg-gradient-to-b from-primary/30 to-border" />
      {/* Number badge */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_hsl(233_91%_66%/0.1)]">
        <span className="text-primary font-bold text-base">{num}</span>
      </div>
      <div className="pt-2">
        <h4 className="text-base font-semibold text-foreground mb-1.5">{title}</h4>
        <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  ),

  /* ═══════════════════════════════════════════════════════════════════
     CTA — Premium download section with glow + Apple badge
     ═══════════════════════════════════════════════════════════════════ */

  TranscriptionsMockup: () => <TranscriptionsMockup />,
  FileTranscriptionMockup: () => <FileTranscriptionMockup />,
  DictionaryMockup: () => <DictionaryMockup />,
  StatisticsMockup: () => <StatisticsMockup />,

  CTA: () => (
    <div className="not-prose relative my-14 rounded-2xl overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(233 91% 66% / 0.12), hsl(258 90% 66% / 0.08), transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-primary/15 rounded-full blur-[100px]" />
      {/* Content */}
      <div className="relative border border-primary/25 rounded-2xl p-10 text-center">
        <p className="text-xl font-semibold text-foreground mb-2">
          Ready to try voice dictation on your Mac?
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Free download. No account required. 100% offline.
        </p>
        <a
          href="https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_30px_hsl(233_91%_66%/0.3)]"
          style={{ background: "linear-gradient(135deg, hsl(233 91% 66%), hsl(258 90% 66%))" }}
        >
          <Apple className="w-5 h-5" />
          Download on the Mac App Store
        </a>
      </div>
    </div>
  ),
};
