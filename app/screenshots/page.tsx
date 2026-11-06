"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { toPng } from "html-to-image";
import { installFreeze, uninstallFreeze, FREEZE_CSS } from "@/components/screenshots/freeze";
import { SLIDES, SLIDE_W, SLIDE_H } from "@/components/screenshots/slides";

// Freeze the product loops before any slide mounts (see components/screenshots/freeze.ts).
installFreeze();

const PIXEL_RATIO = 2560 / SLIDE_W; // → 2560×1600

async function renderPng(el: HTMLElement) {
  const opts = { width: SLIDE_W, height: SLIDE_H, pixelRatio: PIXEL_RATIO, backgroundColor: "#080816", cacheBust: false };
  await toPng(el, opts); // first pass warms fonts and images
  return toPng(el, opts);
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

declare global {
  interface Window {
    /** Automation hook: render slide `index` and resolve with its 2560×1600 PNG data URL. */
    __exportSlide?: (index: number) => Promise<string>;
  }
}

export default function ScreenshotsPage() {
  const [index, setIndex] = useState(0);
  const [busy, setBusy] = useState<string | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const Current = SLIDES[index].component;

  useEffect(() => () => uninstallFreeze(), []);

  const capture = useCallback(async (i: number) => {
    setIndex(i);
    await wait(700); // let the slide mount and its loop settle on the rest frame
    if (!slideRef.current) throw new Error("slide not mounted");
    return renderPng(slideRef.current);
  }, []);

  useEffect(() => {
    window.__exportSlide = capture;
    return () => { delete window.__exportSlide; };
  }, [capture]);

  const save = (dataUrl: string, i: number) => {
    const a = document.createElement("a");
    a.download = `whisperer-appstore-${SLIDES[i].id}.png`;
    a.href = dataUrl;
    a.click();
  };

  const downloadCurrent = async () => {
    if (busy) return;
    setBusy("Exporting…");
    try { save(await capture(index), index); } finally { setBusy(null); }
  };

  const downloadAll = async () => {
    if (busy) return;
    try {
      for (let i = 0; i < SLIDES.length; i++) {
        setBusy(`Exporting ${i + 1}/${SLIDES.length}…`);
        save(await capture(i), i);
        await wait(250);
      }
    } finally { setBusy(null); }
  };

  return (
    <div className="min-h-screen bg-[#05050C] py-8">
      <style>{FREEZE_CSS}</style>
      <div className="mx-auto px-6" style={{ maxWidth: SLIDE_W + 48 }}>
        <h1 className="text-2xl font-semibold text-white">Mac App Store screenshots · Whisperer 2.0</h1>
        <p className="mt-1 text-sm text-white/50">
          {SLIDES.length} slides, exported at 2560×1600. Product demos are frozen on their resting frame for export.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0 || !!busy}
            className="inline-flex items-center gap-1 rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-white disabled:opacity-40">
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <button onClick={() => setIndex(Math.min(SLIDES.length - 1, index + 1))} disabled={index === SLIDES.length - 1 || !!busy}
            className="inline-flex items-center gap-1 rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-white disabled:opacity-40">
            Next <ChevronRight className="h-4 w-4" />
          </button>
          <span className="text-sm text-white/70">{index + 1} / {SLIDES.length} · {SLIDES[index].title}</span>
          <div className="ml-auto flex gap-2">
            <button onClick={downloadCurrent} disabled={!!busy} data-testid="download-current"
              className="inline-flex items-center gap-2 rounded-lg bg-[#5B6CF7] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A5BD6] disabled:opacity-50">
              <Download className="h-4 w-4" /> {busy ?? "Download PNG (2560×1600)"}
            </button>
            <button onClick={downloadAll} disabled={!!busy}
              className="inline-flex items-center gap-2 rounded-lg bg-white/[0.1] px-4 py-2 text-sm font-medium text-white hover:bg-white/[0.16] disabled:opacity-50">
              Download all
            </button>
          </div>
        </div>

        <div className="mt-5 ring-1 ring-white/10 shadow-2xl" style={{ width: SLIDE_W, height: SLIDE_H }}>
          <div ref={slideRef} data-slide className="relative overflow-hidden font-sans" style={{ width: SLIDE_W, height: SLIDE_H }}>
            <Current key={index} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={() => setIndex(i)} disabled={!!busy}
              className={`rounded-md px-3 py-1.5 text-xs ${i === index ? "bg-[#5B6CF7] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
              {i + 1}. {s.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
