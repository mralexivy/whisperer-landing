"use client";

import { ArrowUp, Check, ChevronRight, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, BrandIcon, PauseButton, useLoop, type Brand } from "./primitives";
import { MCP_CHAT } from "./demo-data";

const TICK = 160;

/** An AI app (Claude by default) answering from Whisperer through the local MCP server. */
export function MCPChat({ className, brand = "claude", app = "Claude" }: { className?: string; brand?: Brand; app?: string }) {
  const qWords = MCP_CHAT.question.split(" ");
  const q = qWords.length + 3;
  const call1 = q + 6;
  const call2 = call1 + 6;
  const ansStart = call2 + 4;
  const total = ansStart + MCP_CHAT.answer.items.length * 4 + 3 + 26;
  const { ref, tick, paused, setPaused } = useLoop(total, TICK, { restFrame: total - 1, startFrame: total - 24 });

  const qShown = Math.min(qWords.length, tick);
  const callsDone = tick >= call2 ? 2 : tick >= call1 ? 1 : 0;
  const itemsShown = tick < ansStart ? 0 : Math.min(MCP_CHAT.answer.items.length, Math.floor((tick - ansStart - 3) / 4) + 1);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <AppWindow title={app} bodyClassName="h-[500px] bg-[#1F1E1D] flex flex-col">
        <div className="flex-1 min-h-0 overflow-hidden px-6 py-5 space-y-4">
          {qShown > 0 && (
            <div className="ml-auto max-w-[82%] rounded-[14px] bg-[#393937] px-4 py-2.5 text-[13px] leading-[1.5] text-[#F5F4EF]">
              {qWords.slice(0, qShown).join(" ")}
            </div>
          )}
          {tick >= q && (
            <div className="space-y-1.5">
              {MCP_CHAT.calls.map((c, i) =>
                tick >= q + i * 6 ? (
                  <div key={c.tool} className="inline-flex w-full max-w-[420px] items-center gap-2 rounded-[10px] bg-[#2A2927] ring-1 ring-white/[0.06] px-3 py-2 text-[12px] animate-fade-in">
                    <Wrench className="h-3.5 w-3.5 text-[#D97757]" />
                    <span className="text-[#C2C0B6]">whisperer</span>
                    <ChevronRight className="h-3 w-3 text-white/25" />
                    <code className="font-mono text-[11.5px] text-[#F5F4EF]">{c.tool}</code>
                    <span className="truncate text-[11px] text-white/35">“{c.arg}”</span>
                    <span className="ml-auto">
                      {callsDone > i ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <span className="block h-3.5 w-3.5 rounded-full border-2 border-white/20 border-t-[#D97757] animate-spin" />
                      )}
                    </span>
                  </div>
                ) : null,
              )}
            </div>
          )}
          {itemsShown > 0 && (
            <div className="flex gap-3 animate-fade-in">
              <BrandIcon brand={brand} size={20} className="mt-0.5" />
              <div className="text-[13px] leading-[1.6] text-[#E8E6DC]">
                <p className="mb-2">{MCP_CHAT.answer.lead}</p>
                <ul className="space-y-1">
                  {MCP_CHAT.answer.items.slice(0, itemsShown).map((it) => (
                    <li key={it} className="flex items-start gap-2 animate-fade-in">
                      <span className="mt-[3px] h-3.5 w-3.5 rounded-[4px] ring-1 ring-white/30 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="m-4 flex items-center justify-between rounded-[14px] bg-[#30302E] ring-1 ring-white/[0.06] px-4 py-3 text-[12.5px] text-white/35">
          Reply to {app}…
          <span className="h-7 w-7 rounded-[8px] bg-[#D97757] flex items-center justify-center">
            <ArrowUp className="h-3.5 w-3.5 text-white" />
          </span>
        </div>
      </AppWindow>
      <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="absolute top-0.5 right-2 z-10 scale-90" />
    </div>
  );
}

/** The MCP connect page: turn on, pick an app, one button. */
export function MCPConnectCard({ className }: { className?: string }) {
  const apps: { brand: Brand; name: string; state: string }[] = [
    { brand: "claude", name: "Claude Desktop", state: "Connected" },
    { brand: "claude-code", name: "Claude Code", state: "Connected" },
    { brand: "cursor", name: "Cursor", state: "Connect" },
    { brand: "codex", name: "Codex", state: "Connect" },
    { brand: "visual-studio-code", name: "VS Code", state: "Connect" },
    { brand: "openai", name: "ChatGPT", state: "Connect" },
  ];
  return (
    <AppWindow className={className} bodyClassName="px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[18px] font-light text-white">Connect your AI apps</div>
          <div className="text-[11.5px] text-white/50 max-w-[360px]">Let your AI apps read your meetings and transcriptions, locally. Nothing leaves your Mac.</div>
        </div>
        <span className="relative h-6 w-10 rounded-full bg-[#5B6CF7] shrink-0">
          <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white" />
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {apps.map((a) => (
          <div key={a.name} className="flex items-center gap-2.5 rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-3 py-2.5">
            <BrandIcon brand={a.brand} size={18} />
            <span className="flex-1 text-[12px] text-white/90 truncate">{a.name}</span>
            {a.state === "Connected" ? (
              <span className="inline-flex items-center gap-1 text-[10.5px] text-emerald-400"><Check className="h-3 w-3" /> Connected</span>
            ) : (
              <span className="rounded-[7px] bg-[#5B6CF7]/15 px-2 py-0.5 text-[10.5px] font-medium text-[#9BA6FF]">Connect</span>
            )}
          </div>
        ))}
      </div>
    </AppWindow>
  );
}
