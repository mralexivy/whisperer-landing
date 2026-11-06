import React, { type ReactNode } from "react";
import { Img, staticFile } from "remotion";
import { AudioLines, Battery, Mic, MicOff, MonitorUp, Pause, PanelTopOpen, Square, Users, Video, Wifi, Search, Bell } from "lucide-react";
import { BrandIcon, pulse, type Brand } from "./primitives";
import { SPEAKERS } from "../lib/demo-data";

/** A 1440 × 900 Mac desktop: wallpaper, menu bar, dock. */
export function Desktop({ children, app = "zoom.us", clock = "Tue 11 Nov  10:02", recording = false }: { children: ReactNode; app?: string; clock?: string; recording?: boolean }) {
  return (
    <div
      className="relative overflow-hidden rounded-[18px]"
      style={{
        width: 1440,
        height: 900,
        background:
          "radial-gradient(900px 600px at 15% 20%, #2B2470 0%, transparent 60%), radial-gradient(900px 700px at 90% 85%, #4A1F6B 0%, transparent 60%), radial-gradient(700px 500px at 70% 10%, #123B6B 0%, transparent 60%), #0E0E24",
        boxShadow: "0 60px 160px -40px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      {/* menu bar */}
      <div className="absolute inset-x-0 top-0 h-[28px] flex items-center px-4 text-[13px] text-white/90 bg-black/30 backdrop-blur-xl">
        <span className="font-bold mr-5">{app}</span>
        {["Meeting", "Edit", "View", "Window", "Help"].map((m) => (
          <span key={m} className="mr-5 text-white/80">{m}</span>
        ))}
        <div className="ml-auto flex items-center gap-4 text-white/85">
          <span className="relative">
            <AudioLines className="h-[15px] w-[15px]" />
            {recording && <span className="absolute -right-1 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />}
          </span>
          <Battery className="h-[16px] w-[16px]" />
          <Wifi className="h-[14px] w-[14px]" />
          <Search className="h-[13px] w-[13px]" />
          <span className="tabular-nums">{clock}</span>
        </div>
      </div>
      {children}
      {/* dock */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-end gap-2.5 rounded-[22px] bg-white/[0.12] ring-1 ring-white/15 px-3 py-2 backdrop-blur-xl">
        <Img src={staticFile("app-icon.png")} style={{ width: 52, height: 52 }} />
        {(["zoom", "slack", "claude", "google-calendar", "google-meet"] as Brand[]).map((b) => (
          <span key={b} className="h-[52px] w-[52px] rounded-[13px] bg-[#1B1B33] flex items-center justify-center ring-1 ring-white/10">
            <BrandIcon brand={b} size={30} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** A Zoom meeting window with four tiles, frame-driven active speaker. */
export function ZoomCall({ f, left = 150, top = 70, speaking }: { f: number; left?: number; top?: number; /** index of who is talking, -1 for nobody; omit to cycle */ speaking?: number }) {
  const people = [
    { id: "maya" as const },
    { id: "dan" as const },
    { id: "priya" as const },
    { id: "me" as const },
  ];
  const active = speaking ?? Math.floor(f / 45) % 3;
  return (
    <div className="absolute overflow-hidden rounded-[12px] bg-[#1C1C1E]" style={{ left, top, width: 1000, height: 640, boxShadow: "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.1)" }}>
      <div className="flex h-8 items-center gap-2 px-3 bg-[#2A2A2C]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="mx-auto flex items-center gap-1.5 text-[12px] text-white/60"><BrandIcon brand="zoom" size={13} /> Mobile launch review</span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2" style={{ height: 640 - 32 - 64 }}>
        {people.map((p, i) => {
          const s = SPEAKERS[p.id];
          const on = i === active;
          return (
            <div key={p.id} className="relative rounded-[10px] flex items-center justify-center"
              style={{ background: `radial-gradient(circle at 50% 45%, color-mix(in srgb, ${s.color} 18%, #262628), #1F1F21 70%)`, boxShadow: on ? "inset 0 0 0 3px #22C55E" : "inset 0 0 0 1px rgba(255,255,255,0.05)" }}>
              <span className="flex items-center justify-center rounded-full text-[34px] font-semibold"
                style={{ width: 104, height: 104, background: `color-mix(in srgb, ${s.color} 30%, #1C1C1E)`, color: "#fff", boxShadow: on ? `0 0 0 ${4 + 3 * Math.abs(Math.sin(f * 0.3))}px ${s.color}55` : undefined }}>
                {s.initials}
              </span>
              <span className="absolute left-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-[6px] bg-black/55 px-2 py-1 text-[12px] text-white">
                {on ? <Mic className="h-3 w-3" /> : <MicOff className="h-3 w-3 text-red-400" />} {p.id === "me" ? "You" : s.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-[#1A1A1C] flex items-center justify-center gap-8 text-[11px] text-white/75">
        {[[Mic, "Mute"], [Video, "Stop Video"], [Users, "Participants"], [MonitorUp, "Share"]].map(([Icon, l]) => {
          const I = Icon as typeof Mic;
          return (
            <span key={l as string} className="flex flex-col items-center gap-1"><I className="h-5 w-5" />{l as string}</span>
          );
        })}
        <span className="ml-10 rounded-[8px] bg-[#E02828] px-3.5 py-1.5 text-[12px] font-semibold text-white">End</span>
      </div>
    </div>
  );
}

/** The Island: the fixed recording bar with pause, stop and open. */
export function IslandBar({ f, time }: { f: number; time: string }) {
  const bars = [5, 9, 13, 8, 15, 11, 6, 12];
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-black/85 pl-3.5 pr-1.5 py-1.5 ring-1 ring-white/10 backdrop-blur-xl" style={{ boxShadow: "0 18px 50px -12px rgba(0,0,0,0.8)" }}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500" style={{ scale: String(1 + ((f % 30) / 30) * 1.2), opacity: 0.6 * (1 - (f % 30) / 30) }} />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>
      <div className="flex items-center gap-[2px] h-4">
        {bars.map((h, i) => (
          <span key={i} className="w-[2.5px] rounded-full bg-white/80" style={{ height: Math.max(3, h * (0.4 + 0.6 * Math.abs(Math.sin(f * 0.22 + i * 0.8)))) }} />
        ))}
      </div>
      <span className="text-[12px] font-medium tabular-nums text-white">{time}</span>
      <div className="flex items-center gap-1">
        {[Pause, Square, PanelTopOpen].map((Icon, i) => (
          <span key={i} className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon className={i === 1 ? "h-3 w-3 text-white fill-white" : "h-3.5 w-3.5 text-white"} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** The card Whisperer shows when it sees a call start. `press` 0..1 darkens Take notes. */
export function CallDetectedCard({ brand = "zoom", app = "Zoom", press = 0 }: { brand?: Brand; app?: string; press?: number }) {
  return (
    <div className="w-[320px] rounded-[16px] bg-[#14142B]/95 ring-1 ring-white/10 p-3.5 backdrop-blur-xl" style={{ boxShadow: "0 24px 70px -20px rgba(0,0,0,0.85)" }}>
      <div className="flex items-center gap-3">
        <span className="relative h-10 w-10 rounded-[11px] bg-white/[0.06] flex items-center justify-center shrink-0">
          <BrandIcon brand={brand} size={22} />
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#5B6CF7] ring-2 ring-[#14142B] flex items-center justify-center">
            <Mic className="h-2.5 w-2.5 text-white" />
          </span>
        </span>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-white">{app} call started</div>
          <div className="text-[11.5px] text-white/50 truncate">Take notes for this meeting?</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-[9px] bg-white/[0.06] py-1.5 text-center text-[12px] text-white/70">Not now</span>
        <span className="rounded-[9px] py-1.5 text-center text-[12px] font-semibold text-white" style={{ background: press > 0 ? `color-mix(in srgb, #5B6CF7 ${100 - press * 25}%, #000)` : "#5B6CF7", scale: String(1 - press * 0.06) }}>
          Take notes
        </span>
      </div>
    </div>
  );
}

/** Calendar reminder a minute before: Join & Record / Record / Dismiss. */
export function ReminderCard({ press = 0 }: { press?: number }) {
  return (
    <div className="w-[340px] rounded-[16px] bg-[#14142B]/95 ring-1 ring-white/10 p-3.5 backdrop-blur-xl" style={{ boxShadow: "0 24px 70px -20px rgba(0,0,0,0.85)" }}>
      <div className="flex items-center gap-3">
        <span className="relative h-10 w-10 rounded-[11px] bg-white/[0.06] flex items-center justify-center shrink-0">
          <BrandIcon brand="google-calendar" size={22} />
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#5B6CF7] ring-2 ring-[#14142B] flex items-center justify-center">
            <Bell className="h-2.5 w-2.5 text-white" />
          </span>
        </span>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-white">Mobile launch review</div>
          <div className="text-[11.5px] text-white/50 truncate">Starts in 1 min · Zoom · Maya, Dan, Priya</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-[1.4fr_1fr_1fr] gap-2">
        <span className="inline-flex items-center justify-center gap-1 rounded-[9px] py-1.5 text-center text-[12px] font-semibold text-white"
          style={{ background: press > 0 ? `color-mix(in srgb, #5B6CF7 ${100 - press * 25}%, #000)` : "#5B6CF7", scale: String(1 - press * 0.06) }}>
          <Video className="h-3.5 w-3.5" /> Join & Record
        </span>
        <span className="rounded-[9px] bg-white/[0.06] py-1.5 text-center text-[12px] text-white/75">Record</span>
        <span className="rounded-[9px] bg-white/[0.06] py-1.5 text-center text-[12px] text-white/55">Dismiss</span>
      </div>
    </div>
  );
}

export { pulse };
