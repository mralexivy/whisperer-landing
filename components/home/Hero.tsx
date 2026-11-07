"use client";

import { useState } from "react";
import { AppStoreButton } from "@/components/site/Shell";
import { VideoModal } from "@/components/landing/VideoModal";
import { ModeTabs, ModeStage, WatchButton, CallAppsLine, type Mode } from "./ModeSwitch";
import { MODE_VIDEOS, PRICE_BASE, PRICE_PRO, FACTS } from "@/lib/site";

export function HomeHero() {
  const [mode, setMode] = useState<Mode>("dictation");
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
        <div className="mx-auto max-w-[900px] text-center">
          <div data-enter className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-[13px] text-white/70">
            <CallAppsLine />
            For everything you type and every call you take
          </div>
          <h1 data-enter style={{ "--d": "80ms" } as React.CSSProperties} className="text-[42px] sm:text-[62px] lg:text-[74px] font-semibold leading-[0.98] tracking-[-0.045em] text-white text-balance">
            Dictation and meeting notes for Mac, in one app
          </h1>
          <p data-enter style={{ "--d": "180ms" } as React.CSSProperties} className="mx-auto mt-6 max-w-[700px] text-[18px] sm:text-[20px] leading-[1.5] text-white/60 text-pretty">
            Hold Fn and talk, and your words are ready to paste into any app. Join a call, and Whisperer writes the notes,
            with every speaker named. Both run on your Mac, with no subscription.
          </p>
          <div data-enter style={{ "--d": "260ms" } as React.CSSProperties} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AppStoreButton className="w-full sm:w-auto" />
            <WatchButton mode={mode} onWatch={() => setVideo(true)} className="w-full sm:w-auto" />
          </div>
          <div data-enter style={{ "--d": "320ms" } as React.CSSProperties} className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] text-white/45">
            <span><b className="font-semibold text-white">{PRICE_BASE}</b> app, Pro <b className="font-semibold text-white">{PRICE_PRO}</b>, paid once</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>No account</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Works offline</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>{FACTS.languages} languages</span>
          </div>
        </div>

        <div data-enter style={{ "--d": "380ms" } as React.CSSProperties} className="mt-12 flex justify-center">
          <ModeTabs mode={mode} onChange={setMode} />
        </div>
        <div data-enter="frame" style={{ "--d": "420ms" } as React.CSSProperties} className="mt-12">
          <ModeStage mode={mode} />
        </div>
      </div>
      <VideoModal open={video} onOpenChange={setVideo} src={MODE_VIDEOS[mode].src} poster={MODE_VIDEOS[mode].poster} />
    </section>
  );
}
