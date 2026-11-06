import Link from "next/link";
import {
  ArrowRight, Eye, Globe, Cpu, BookOpen, FileAudio, Clock, Wand2, NotebookPen, CalendarDays, Sparkles, Workflow,
  type LucideIcon,
} from "lucide-react";
import { BrandIcon, type Brand } from "@/components/product/primitives";
import { PRICE_PRO, FACTS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Pillar = { icon: LucideIcon; color: string; title: string; body: string; href: string; cta: string; brands: Brand[] };

const PILLARS: Pillar[] = [
  {
    icon: NotebookPen,
    color: "text-cyan-300",
    title: "Meeting notes",
    body: "Spots a Zoom, Teams or Meet call, records both sides, names the speakers and writes the summary, decisions and action items.",
    href: "/meetings",
    cta: "See meeting notes",
    brands: ["zoom", "teams", "google-meet", "slack"],
  },
  {
    icon: CalendarDays,
    color: "text-rose-300",
    title: "Calendar",
    body: "Connect Google Calendar or Outlook. Before each meeting you get Join & Record, and the notes are named after the invite.",
    href: "/calendar",
    cta: "See calendar sync",
    brands: ["google-calendar", "outlook"],
  },
  {
    icon: Sparkles,
    color: "text-pink-300",
    title: "Your own AI",
    body: `Notes written by your Claude, ChatGPT or Gemini plan, or by ${FACTS.localModel} running on your Mac with Wi-Fi off.`,
    href: "/ai",
    cta: "See the AI options",
    brands: ["claude", "openai", "gemini"],
  },
  {
    icon: Workflow,
    color: "text-teal-300",
    title: "MCP server",
    body: "Claude, Cursor, Codex and VS Code can search your meetings and dictations, read the notes and add their own.",
    href: "/mcp",
    cta: "See the MCP tools",
    brands: ["claude-code", "cursor", "codex", "visual-studio-code"],
  },
];

type Feature = { icon: LucideIcon; title: string; body: string; href: string };

const DICTATION: Feature[] = [
  { icon: Eye, title: "Live preview", body: "Words appear as you speak, in the language you are speaking.", href: "/features/live-preview" },
  { icon: Globe, title: `${FACTS.languages} languages`, body: "Detected as you talk, so there is nothing to switch.", href: "/features/multilingual" },
  { icon: Cpu, title: "Offline speech engines", body: "Whisper, Parakeet, Qwen3 ASR and WhisperKit, all on your Mac.", href: "/features/offline-transcription" },
  { icon: Wand2, title: "Fast Polish and AI cleanup", body: "Fillers out, punctuation in. Meeting notes go through the AI you pick.", href: "/features/ai-writing" },
  { icon: BookOpen, title: "Personal dictionary", body: "Fix a name once and Whisperer learns it from your correction.", href: "/features/personal-dictionary" },
  { icon: FileAudio, title: "File transcription", body: "Drop in an interview, a lecture or a voice memo and get the text.", href: "/features/file-transcription" },
  { icon: Clock, title: "History and statistics", body: "Every dictation saved with audio, search and your words per minute.", href: "/features/transcription-history" },
];

export function PillarCards() {
  return (
    <div>
      <ul className="border-t border-white/[0.08]">
        {PILLARS.map((p) => (
          <li key={p.href} className="border-b border-white/[0.08]">
            <Link href={p.href} className="group grid items-center gap-4 py-7 md:grid-cols-[220px_minmax(0,1fr)_auto] md:gap-10">
              <span className="flex items-center gap-3 text-[22px] font-semibold tracking-tight text-white">
                <p.icon className={cn("h-5 w-5", p.color)} />
                {p.title}
              </span>
              <span className="max-w-[560px] text-[15.5px] leading-[1.6] text-white/60">{p.body}</span>
              <span className="flex items-center gap-5">
                <span className="flex items-center gap-2.5">
                  {p.brands.map((b) => <BrandIcon key={b} brand={b} size={22} />)}
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] font-medium text-[#9BA6FF] group-hover:text-white">
                  {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[13px] text-white/40">Meetings, calendar, your own AI and MCP come with Pro, a {PRICE_PRO} one-time in-app purchase.</p>
    </div>
  );
}

export function DictationCards() {
  return (
    <ul className="grid border-t border-white/[0.08] md:grid-cols-2 md:gap-x-12">
      {DICTATION.map((f) => (
        <li key={f.href} className="border-b border-white/[0.08]">
          <Link href={f.href} className="group flex items-start gap-4 py-5">
            <f.icon className="mt-1 h-[18px] w-[18px] shrink-0 text-[#9BA6FF]" />
            <span className="flex-1">
              <span className="block text-[16.5px] font-semibold text-white">{f.title}</span>
              <span className="mt-1 block text-[14.5px] leading-[1.55] text-white/55">{f.body}</span>
            </span>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
