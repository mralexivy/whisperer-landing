"use client";

import { Pause, Square, PanelTopOpen, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandIcon, type Brand } from "./primitives";

/** The Island: the fixed recording bar with pause, stop and open. */
export function IslandBar({ time = "03:12", level = true, className }: { time?: string; level?: boolean; className?: string }) {
  const bars = [5, 9, 13, 8, 15, 11, 6, 12];
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-black/85 pl-3 pr-1.5 py-1.5 ring-1 ring-white/10",
        "shadow-[0_18px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl",
        className,
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>
      <div className="flex items-center gap-[2px] h-4">
        {bars.map((h, i) => (
          <span
            key={i}
            className={cn("w-[2.5px] rounded-full bg-white/80", level && "animate-[waveform_0.9s_ease-in-out_infinite]")}
            style={{ height: h, animationDelay: `${i * 0.09}s` }}
          />
        ))}
      </div>
      <span className="text-[12px] font-medium tabular-nums text-white">{time}</span>
      <div className="flex items-center gap-1">
        {[Pause, Square, PanelTopOpen].map((Icon, i) => (
          <span key={i} className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon className={cn("h-3.5 w-3.5 text-white", i === 1 && "fill-white h-3 w-3")} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** The card Whisperer shows when it sees a call start. */
export function CallDetectedCard({ brand = "zoom", app = "Zoom", title, className }: { brand?: Brand; app?: string; title?: string; className?: string }) {
  return (
    <div
      className={cn(
        "w-[320px] max-w-full rounded-[16px] bg-[#14142B]/95 ring-1 ring-white/10 p-3.5 backdrop-blur-xl",
        "shadow-[0_24px_70px_-20px_rgba(0,0,0,0.85)]",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="relative h-10 w-10 rounded-[11px] bg-white/[0.06] flex items-center justify-center shrink-0">
          <BrandIcon brand={brand} size={22} />
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#5B6CF7] ring-2 ring-[#14142B] flex items-center justify-center">
            <Mic className="h-2.5 w-2.5 text-white" />
          </span>
        </span>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-white">{app} call started</div>
          <div className="text-[11.5px] text-white/50 truncate">{title ?? "Take notes for this meeting?"}</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-[9px] bg-white/[0.06] py-1.5 text-center text-[12px] text-white/70">Not now</span>
        <span className="rounded-[9px] bg-[#5B6CF7] py-1.5 text-center text-[12px] font-semibold text-white">Take notes</span>
      </div>
    </div>
  );
}
