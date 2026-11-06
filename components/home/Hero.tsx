"use client";

import { useState } from "react";
import { AppStoreButton, GhostButton } from "@/components/site/Shell";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { IslandBar, CallDetectedCard } from "@/components/product/Island";
import { BrandIcon } from "@/components/product/primitives";
import { VideoModal } from "@/components/landing/VideoModal";
import { DEMO_POSTER, DEMO_VIDEO, PRICE_BASE, PRICE_PRO, FACTS } from "@/lib/site";

export function HomeHero() {
  const [video, setVideo] = useState(false);
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 pb-20">
      {/* Ground: a deep navy field lit from the top, like the app's window glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-280px] h-[720px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.35),transparent)]" />
        <div className="absolute left-[12%] top-[420px] h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mx-auto max-w-[880px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-[13px] text-white/70">
            <span className="flex -space-x-1">
              {(["zoom", "teams", "google-meet", "slack"] as const).map((b) => (
                <span key={b} className="h-5 w-5 rounded-full bg-[#14142B] ring-1 ring-white/10 flex items-center justify-center"><BrandIcon brand={b} size={11} /></span>
              ))}
            </span>
            Works with Zoom, Teams, Meet and Slack calls
          </div>
          <h1 className="text-[44px] sm:text-[64px] lg:text-[76px] font-semibold leading-[0.98] tracking-[-0.045em] text-white text-balance">
            AI meeting notes for Mac, without the subscription
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[18px] sm:text-[20px] leading-[1.5] text-white/60 text-pretty">
            Whisperer notices when a call starts, transcribes every speaker on your Mac and writes the notes with Claude,
            ChatGPT, Gemini or its own built-in model. Hold Fn to dictate anywhere.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AppStoreButton className="w-full sm:w-auto" />
            <GhostButton onClick={() => setVideo(true)} className="w-full sm:w-auto">Watch the 60-second tour</GhostButton>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] text-white/45">
            <span><b className="font-semibold text-white">{PRICE_BASE}</b> app, Pro <b className="font-semibold text-white">{PRICE_PRO}</b>, paid once</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>No account</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Works offline</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>{FACTS.languages} languages</span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1160px]">
          <div aria-hidden className="absolute inset-x-[8%] -top-10 h-40 rounded-full bg-[#5B6CF7]/30 blur-[90px]" />
          <MeetingStudio className="relative" />
          <IslandBar className="absolute -top-5 left-1/2 -translate-x-1/2 z-10" time="03:12" />
          <CallDetectedCard className="hidden lg:block absolute -left-10 bottom-16 z-10" title="Mobile launch review · take notes?" />
        </div>
      </div>
      <VideoModal open={video} onOpenChange={setVideo} src={DEMO_VIDEO} poster={DEMO_POSTER} />
    </section>
  );
}
