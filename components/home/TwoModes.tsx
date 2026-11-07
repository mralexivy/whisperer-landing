"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, NotebookPen, Mic } from "lucide-react";
import { VideoModal } from "@/components/landing/VideoModal";
import { LoopVideo } from "@/components/site/Motion";
import { Section, H2, Lede } from "@/components/site/Shell";
import { MODE_VIDEOS, DEMO_VIDEO, DEMO_POSTER } from "@/lib/site";
import type { Mode } from "./ModeSwitch";

const CARDS: { mode: Mode; icon: typeof Mic; title: string; body: string; points: string[]; href: string; cta: string }[] = [
  {
    mode: "dictation",
    icon: Mic,
    title: "Dictation",
    body: "Hold Fn in any app and talk. Words stream in as you speak, and the text is ready to paste when you let go.",
    points: ["Live preview in 97 languages", "Learns names and words you fix", "Offline, on the Mac's GPU"],
    href: "/features",
    cta: "See dictation",
  },
  {
    mode: "meetings",
    icon: NotebookPen,
    title: "Meeting notes",
    body: "Starts when your call starts. Both sides recorded, every speaker named, notes ready when you hang up.",
    points: ["Zoom, Teams, Meet, Slack and Webex", "Summary, decisions, action items", "Written by your own AI or the built-in one"],
    href: "/meetings",
    cta: "See meeting notes",
  },
];

export function TwoModesSection() {
  const [open, setOpen] = useState<Mode | null>(null);
  const [tour, setTour] = useState(false);
  return (
    <Section id="two-jobs">
      <div className="max-w-[760px]">
        <H2>Your voice in every app, your notes from every call</H2>
        <Lede>Most people start with dictation and keep Whisperer for their meetings. The two work together: hold Fn mid-call to send a quick message, and the recording pauses until you let go.</Lede>
        <button type="button" onClick={() => setTour(true)} className="group mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#B9C1FF] hover:text-white">
          <Play className="h-4 w-4 fill-current" /> Watch the full tour <span className="tabular-nums text-white/40">1:21</span>
        </button>
      </div>
      <div data-reveal="list" className="mt-12 grid gap-5 lg:grid-cols-2">
        {CARDS.map((c) => (
          <article key={c.mode} className="group flex flex-col overflow-hidden rounded-[26px] bg-[#101024] ring-1 ring-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:ring-white/[0.16]">
            <button
              type="button"
              onClick={() => setOpen(c.mode)}
              className="relative block aspect-video w-full overflow-hidden bg-black text-left"
              aria-label={`Play the ${c.title.toLowerCase()} demo, ${MODE_VIDEOS[c.mode].length}`}
            >
              {/* A silent loop of the job; the button opens the full voiced film. */}
              <LoopVideo
                name={c.mode === "meetings" ? "meeting-loop" : "dictation-loop"}
                alt=""
                frameClassName="h-full rounded-none ring-0 shadow-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0B0B19]/80 via-transparent to-transparent" />
              <span className="absolute left-5 bottom-5 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#0B0B19] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] transition-transform duration-200 group-hover:-translate-y-0.5 group-active:scale-95">
                <Play className="h-4 w-4 fill-current" /> Play demo <span className="font-normal text-[#0B0B19]/55 tabular-nums">{MODE_VIDEOS[c.mode].length}</span>
              </span>
            </button>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#5B6CF7]/15 text-[#9BA6FF]"><c.icon className="h-5 w-5" /></span>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white">{c.title}</h3>
              </div>
              <p className="mt-3 text-[15.5px] leading-[1.55] text-white/60">{c.body}</p>
              <ul className="mt-5 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {c.points.map((p) => <li key={p} className="py-2.5 text-[14.5px] text-white/75">{p}</li>)}
              </ul>
              <Link href={c.href} className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#B9C1FF] hover:text-white">
                {c.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <VideoModal open={tour} onOpenChange={setTour} src={DEMO_VIDEO} poster={DEMO_POSTER} />
      <VideoModal
        open={open !== null}
        onOpenChange={(v) => !v && setOpen(null)}
        src={open ? MODE_VIDEOS[open].src : MODE_VIDEOS.meetings.src}
        poster={open ? MODE_VIDEOS[open].poster : undefined}
      />
    </Section>
  );
}
