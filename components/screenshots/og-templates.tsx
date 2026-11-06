"use client";

import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { CallDetectedCard, IslandBar } from "@/components/product/Island";
import { ProviderList } from "@/components/product/ProviderList";
import { MCPChat } from "@/components/product/MCPChat";
import { CalendarPanel } from "@/components/product/CalendarPanel";
import { BrandIcon, type Brand } from "@/components/product/primitives";
import { PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const OG_W = 1200;
export const OG_H = 630;

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/assets/app-icon.png" alt="" width={40} height={40} className="h-10 w-10 rounded-[10px]" />
      <span className="text-[22px] font-semibold text-white tracking-[-0.01em]">Whisperer</span>
    </div>
  );
}

function OGFrame({
  lines, sub, children, foot = "Mac App Store · Apple Silicon · macOS 26", textWidth = 520,
}: { lines: [string, string]; sub: ReactNode; children?: ReactNode; foot?: ReactNode; textWidth?: number }) {
  return (
    <div className="relative overflow-hidden font-sans" style={{ width: OG_W, height: OG_H, background: "linear-gradient(160deg, #0B0B22 0%, #080816 60%, #06060F 100%)" }}>
      <div className="absolute rounded-full" style={{ left: -200, top: -260, width: 900, height: 900, background: "radial-gradient(closest-side, #5B6CF7, transparent)", opacity: 0.3 }} />
      <div className="absolute rounded-full" style={{ right: -260, bottom: -360, width: 900, height: 900, background: "radial-gradient(closest-side, #8B5CF6, transparent)", opacity: 0.25 }} />
      <div className="absolute inset-y-0 left-[64px] flex flex-col justify-between py-[56px]" style={{ width: textWidth }}>
        <Logo />
        <div>
          <h1 className="text-[58px] leading-[1.05] font-semibold tracking-[-0.035em] text-white">
            {lines[0]}
            <br />
            <span className="text-[#AEB5FF]">{lines[1]}</span>
          </h1>
          <p className="mt-5 text-[22px] leading-[1.4] text-white/60 [text-wrap:balance]">{sub}</p>
        </div>
        <div className="text-[16px] text-white/40">{foot}</div>
      </div>
      {children}
    </div>
  );
}

/** Places a product visual at its natural size, scaled, anchored to the right edge. */
function Visual({ left, top, scale, children }: { left: number; top: number; scale: number; children: ReactNode }) {
  return (
    <div className="absolute" style={{ left, top, transform: `scale(${scale})`, transformOrigin: "top left" }}>
      {children}
    </div>
  );
}

export function OGHome() {
  return (
    <OGFrame lines={["AI meeting notes", "for your Mac."]} sub="Records the call, names the speakers, writes the notes. No bot joins the meeting." textWidth={500}>
      <Visual left={610} top={70} scale={0.78}>
        <MeetingStudio compact className="w-[980px]" />
      </Visual>
    </OGFrame>
  );
}

export function OGMeetings() {
  const apps: Brand[] = ["zoom", "teams", "google-meet", "slack", "webex"];
  return (
    <OGFrame lines={["Notices your call.", "Takes the notes."]} sub="Zoom, Teams, Google Meet, Slack huddles, Webex and FaceTime. Both sides of the call, transcribed on your Mac.">
      <div className="absolute left-[660px] top-[150px] flex flex-col items-start gap-8">
        <div style={{ transform: "scale(1.3)", transformOrigin: "top left" }}><IslandBar time="00:42" /></div>
        <div style={{ transform: "scale(1.45)", transformOrigin: "top left" }}><CallDetectedCard brand="zoom" app="Zoom" title="Mobile launch review · Take notes?" /></div>
        <div className="mt-[90px] flex items-center gap-3">
          {apps.map((b) => (
            <span key={b} className="h-14 w-14 rounded-[14px] bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center"><BrandIcon brand={b} size={28} /></span>
          ))}
        </div>
      </div>
    </OGFrame>
  );
}

export function OGAI() {
  return (
    <OGFrame lines={["Use the AI", "you already pay for."]} sub="Claude, ChatGPT or Gemini on your own plan writes your meeting notes. Or keep it all on your Mac.">
      <Visual left={640} top={56} scale={0.86}>
        <ProviderList sidebar={false} className="w-[600px]" />
      </Visual>
    </OGFrame>
  );
}

export function OGMCP() {
  return (
    <OGFrame lines={["Claude can read", "your meetings."]} sub="A built-in MCP server lets Claude, ChatGPT, Cursor and VS Code search your notes on this Mac.">
      <Visual left={640} top={70} scale={0.9}>
        <MCPChat className="w-[580px]" />
      </Visual>
    </OGFrame>
  );
}

export function OGCalendar() {
  return (
    <OGFrame lines={["Join and record", "in one click."]} sub="Connect Google Calendar or Outlook. A reminder a minute before, and the recording named after the invite.">
      <Visual left={640} top={80} scale={0.88}>
        <CalendarPanel sidebar={false} className="w-[600px]" />
      </Visual>
    </OGFrame>
  );
}

export function OGPricing() {
  const pro = ["Meeting notes and detection", "Speakers, calendar, Ask AI", "Your own AI and the MCP server"];
  return (
    <OGFrame lines={["Pay once.", "No subscription."]} sub="No account, no minute limits. Buy it on the Mac App Store and keep it.">
      <div className="absolute left-[640px] top-[120px] w-[500px] rounded-[20px] bg-[#101024]/90 ring-1 ring-white/[0.08] overflow-hidden">
        <div className="flex items-baseline justify-between px-8 py-7 border-b border-white/[0.07]">
          <div>
            <div className="text-[24px] font-semibold text-white">Whisperer</div>
            <div className="mt-1 text-[16px] text-white/50">Dictation in 97 languages</div>
          </div>
          <div className="text-[40px] font-semibold tracking-[-0.02em] text-white tabular-nums">{PRICE_BASE}</div>
        </div>
        <div className="px-8 py-7 bg-[#5B6CF7]/[0.08]">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[24px] font-semibold text-white">Pro</div>
              <div className="mt-1 text-[16px] text-white/50">One-time in-app purchase</div>
            </div>
            <div className="text-[40px] font-semibold tracking-[-0.02em] text-white tabular-nums">{PRICE_PRO}</div>
          </div>
          <ul className="mt-5 space-y-2.5">
            {pro.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[17px] text-white/80">
                <Check className="h-5 w-5 text-emerald-400" strokeWidth={2.5} /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </OGFrame>
  );
}

/** Generic blog card: any title, long or short. */
export function OGBlogPost({ title, tag = "Blog" }: { title: string; tag?: string }) {
  const size = title.length > 70 ? 50 : title.length > 42 ? 58 : 68;
  return (
    <div className="relative overflow-hidden font-sans" style={{ width: OG_W, height: OG_H, background: "linear-gradient(160deg, #0B0B22 0%, #080816 60%, #06060F 100%)" }}>
      <div className="absolute rounded-full" style={{ right: -300, top: -340, width: 1000, height: 1000, background: "radial-gradient(closest-side, #5B6CF7, transparent)", opacity: 0.28 }} />
      <div className="absolute rounded-full" style={{ left: -300, bottom: -420, width: 900, height: 900, background: "radial-gradient(closest-side, #8B5CF6, transparent)", opacity: 0.2 }} />
      <div className="absolute inset-0 flex flex-col justify-between px-[72px] py-[60px]">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="text-[18px] text-white/45">whispererapp.com/blog</span>
        </div>
        <h1
          className={cn("max-w-[1000px] font-semibold tracking-[-0.03em] text-white [text-wrap:balance]")}
          style={{ fontSize: size, lineHeight: 1.08 }}
        >
          {title}
        </h1>
        <div className="flex items-center gap-3 text-[18px] text-white/50">
          <span className="rounded-full bg-[#5B6CF7]/20 px-3.5 py-1 text-[#C3C9FF]">{tag}</span>
          AI meeting notes and dictation for Mac
        </div>
      </div>
    </div>
  );
}

export function OGEnterprise() {
  const points = ["No per-seat subscription", "No bot in customer calls", "Your company's own AI"];
  return (
    <div className="relative overflow-hidden font-sans" style={{ width: OG_W, height: OG_H, background: "linear-gradient(160deg, #0B0B22 0%, #080816 60%, #06060F 100%)" }}>
      <div className="absolute rounded-full" style={{ left: -220, top: -300, width: 1000, height: 1000, background: "radial-gradient(closest-side, #5B6CF7, transparent)", opacity: 0.3 }} />
      <div className="absolute rounded-full" style={{ right: -280, bottom: -400, width: 950, height: 950, background: "radial-gradient(closest-side, #8B5CF6, transparent)", opacity: 0.24 }} />
      <div className="absolute inset-0 flex flex-col justify-between px-[72px] py-[60px]">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="text-[18px] text-white/45">whispererapp.com/enterprise</span>
        </div>
        <h1 className="max-w-[1000px] text-[62px] leading-[1.06] font-semibold tracking-[-0.035em] text-white">
          Meeting notes for every Mac
          <br />
          <span className="text-[#AEB5FF]">in your company, paid once.</span>
        </h1>
        <div className="grid grid-cols-3 border-t border-white/[0.1]">
          {points.map((p, i) => (
            <div key={p} className={cn("flex items-center gap-3 pt-6 text-[21px] text-white/80", i > 0 && "pl-8 border-l border-white/[0.1]")}>
              <Check className="h-5 w-5 shrink-0 text-emerald-400" strokeWidth={2.5} /> {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
