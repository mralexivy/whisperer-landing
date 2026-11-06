"use client";

import { Check, Monitor, Sparkles, Users, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, BrandIcon, StatusPill, AppLabel, useLoop, type Brand } from "./primitives";
import { WorkspaceSidebar } from "./MeetingStudio";

type Row = { key: string; brand?: Brand; title: string; sub: string; status: string; tone?: "green" | "amber" };

const ON_MAC: Row = { key: "mac", title: "On this Mac", sub: "Private and offline. Uses the built-in model.", status: "Ready" };
const PLANS: Row[] = [
  { key: "claude", brand: "claude", title: "Claude", sub: "Uses your Claude Pro or Max plan", status: "Ready · Claude plan" },
  { key: "chatgpt", brand: "openai", title: "ChatGPT", sub: "Uses your ChatGPT Plus or Pro plan", status: "Ready · ChatGPT plan" },
  { key: "codex", brand: "codex", title: "Codex", sub: "Uses your ChatGPT plan through Codex", status: "Ready · ChatGPT plan" },
  { key: "gemini", brand: "gemini", title: "Gemini", sub: "Uses your Google AI Pro or Ultra plan", status: "Ready · Google plan" },
];
const KEYS: Row[] = [
  { key: "openai-api", brand: "openai", title: "OpenAI API", sub: "Billed to your OpenAI API key", status: "Key in Keychain" },
  { key: "anthropic-api", brand: "anthropic", title: "Anthropic API", sub: "Billed to your Anthropic API key", status: "Key in Keychain" },
];

const ORDER = ["mac", "claude", "chatgpt", "gemini"];
const WRITER: Record<string, string> = { mac: "this Mac", claude: "Claude", chatgpt: "ChatGPT", gemini: "Gemini" };

function ProviderRow({ row, selected }: { row: Row; selected: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[12px] bg-[#14142B] px-3.5 py-2.5 ring-1 transition-all duration-500",
        selected ? "ring-[#5B6CF7] bg-[#5B6CF7]/[0.07]" : "ring-white/[0.06]",
      )}
    >
      <span className="h-9 w-9 rounded-[10px] bg-white/[0.06] flex items-center justify-center shrink-0">
        {row.brand ? <BrandIcon brand={row.brand} size={18} /> : <Monitor className="h-[18px] w-[18px] text-sky-400" />}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] font-semibold text-white">{row.title}</div>
        <div className="text-[11px] text-white/45 truncate">{row.sub}</div>
      </div>
      <span className="hidden sm:inline-flex"><StatusPill tone={row.tone}>{row.status}</StatusPill></span>
      <span
        className={cn(
          "h-5 w-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-500",
          selected ? "bg-[#5B6CF7]" : "ring-[1.5px] ring-white/25",
        )}
      >
        {selected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
      </span>
    </div>
  );
}

/** Workspace → LLM: the one list of AI choices. The selection cycles through providers. */
export function ProviderList({ className, sidebar = true }: { className?: string; sidebar?: boolean }) {
  const { ref, tick } = useLoop(ORDER.length, 2800, { restFrame: 1, startFrame: 1 });
  const selected = ORDER[tick];

  return (
    <div ref={ref} className={className}>
      <AppWindow bodyClassName="flex h-[560px]">
        {sidebar && <WorkspaceSidebar active="LLM" className="hidden xl:block" />}
        <div className="flex-1 min-w-0 px-6 py-5 overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-[12px] bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <div>
              <div className="text-[20px] font-light text-white">LLM</div>
              <div className="text-[11.5px] text-white/50">The AI that writes your meeting notes and answers your questions.</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-2 text-[10.5px] text-white/60">
              <span className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center"><Users className="h-3.5 w-3.5 text-[#8B9BFF]" /></span>
              <span className="w-6 h-px bg-[#5B6CF7]/60" />
              <span className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center">
                {selected === "mac" ? <Monitor className="h-3.5 w-3.5 text-sky-400" /> : <BrandIcon brand={PLANS.find((p) => p.key === selected)!.brand!} size={14} />}
              </span>
              <span className="w-6 h-px bg-[#5B6CF7]/60" />
              <span className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center"><FileText className="h-3.5 w-3.5 text-emerald-400" /></span>
            </div>
            <div className="text-right">
              <div className="text-[12.5px] font-semibold text-white">Written by {WRITER[selected]}</div>
              <div className="text-[10.5px] text-white/40">If it&apos;s unavailable, this Mac takes over</div>
            </div>
          </div>

          <div className="mt-3"><ProviderRow row={ON_MAC} selected={selected === "mac"} /></div>
          <AppLabel className="mt-4 mb-1.5 px-1">YOUR AI SUBSCRIPTIONS</AppLabel>
          <div className="space-y-2">{PLANS.map((r) => <ProviderRow key={r.key} row={r} selected={selected === r.key} />)}</div>
          <AppLabel className="mt-4 mb-1.5 px-1">API KEYS</AppLabel>
          <div className="space-y-2">{KEYS.map((r) => <ProviderRow key={r.key} row={r} selected={false} />)}</div>
        </div>
      </AppWindow>
    </div>
  );
}
