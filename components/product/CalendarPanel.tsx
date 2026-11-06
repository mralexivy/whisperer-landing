"use client";

import { Bell, CalendarDays, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, BrandIcon, StatusPill, AppLabel } from "./primitives";
import { WorkspaceSidebar } from "./MeetingStudio";
import { SPEAKERS, UPCOMING } from "./demo-data";

/** Workspace → Calendar: connected accounts and the next meetings, with Join & Record. */
export function CalendarPanel({ className, sidebar = true }: { className?: string; sidebar?: boolean }) {
  return (
    <AppWindow className={className} bodyClassName="flex h-[500px]">
      {sidebar && <WorkspaceSidebar active="Calendar" className="hidden xl:block" />}
      <div className="flex-1 min-w-0 px-6 py-5 overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-[12px] bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
            <CalendarDays className="h-5 w-5 text-white" />
          </span>
          <div>
            <div className="text-[20px] font-light text-white">Calendar</div>
            <div className="text-[11.5px] text-white/50">Reminds you before each meeting and records in one click.</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-[10px] bg-[#14142B] ring-1 ring-white/[0.06] px-3 py-2 text-[12px] text-white/85">
            <BrandIcon brand="google-calendar" size={16} /> Google Calendar <StatusPill>Connected</StatusPill>
          </span>
          <span className="inline-flex items-center gap-2 rounded-[10px] bg-[#14142B] ring-1 ring-white/[0.06] px-3 py-2 text-[12px] text-white/85">
            <BrandIcon brand="outlook" size={16} /> Outlook <StatusPill>Connected</StatusPill>
          </span>
        </div>

        <AppLabel className="mt-5 mb-2">TODAY</AppLabel>
        <div className="space-y-2">
          {UPCOMING.map((m) => (
            <div
              key={m.title}
              className={cn(
                "flex items-center gap-3 rounded-[12px] bg-[#14142B] ring-1 ring-white/[0.06] px-3.5 py-3",
                m.now && "ring-[#5B6CF7]/50 bg-[#5B6CF7]/[0.08]",
              )}
            >
              <div className="w-[52px] shrink-0">
                <div className="text-[12.5px] font-semibold text-white tabular-nums">{m.time}</div>
                <div className="text-[10.5px] text-white/35 tabular-nums">{m.end}</div>
              </div>
              <span className="h-8 w-[3px] rounded-full" style={{ background: m.now ? "#5B6CF7" : "rgba(255,255,255,0.12)" }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  {m.now && <span className="rounded-full bg-[#5B6CF7] px-1.5 py-px text-[9px] font-bold tracking-wider text-white">NOW</span>}
                  <span className="text-[12.5px] font-semibold text-white truncate">{m.title}</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <BrandIcon brand={m.app} size={12} />
                  <span className="text-[10.5px] text-white/45 truncate">
                    {m.people.map((p) => SPEAKERS[p].name.split(" ")[0]).join(", ")} and you
                  </span>
                </div>
              </div>
              {m.now ? (
                <span className="inline-flex items-center gap-1.5 rounded-[9px] bg-[#5B6CF7] px-3 py-1.5 text-[11.5px] font-semibold text-white whitespace-nowrap">
                  <Video className="h-3.5 w-3.5" /> Join & Record
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10.5px] text-white/40 whitespace-nowrap">
                  <Bell className="h-3 w-3" /> 2 min before
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10.5px] leading-snug text-white/35 max-w-[440px]">
          Read-only. Events come straight from Google or Microsoft, sign-in tokens stay in your Keychain.
        </p>
      </div>
    </AppWindow>
  );
}
