"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { toPng } from "html-to-image";
import { installFreeze, uninstallFreeze, FREEZE_CSS } from "@/components/screenshots/freeze";
import {
  OG_W, OG_H, OGHome, OGMeetings, OGAI, OGMCP, OGCalendar, OGPricing, OGEnterprise, OGBlogPost,
} from "@/components/screenshots/og-templates";

// Product demos rest on their final frame so every export is the same still.
installFreeze();

type Def = { id: string; path: string; render: (title: string) => React.ReactNode };

const DEFS: Def[] = [
  { id: "og-home", path: "/", render: () => <OGHome /> },
  { id: "og-meetings", path: "/meetings", render: () => <OGMeetings /> },
  { id: "og-ai", path: "/ai", render: () => <OGAI /> },
  { id: "og-mcp", path: "/mcp", render: () => <OGMCP /> },
  { id: "og-calendar", path: "/calendar", render: () => <OGCalendar /> },
  { id: "og-pricing", path: "/pricing", render: () => <OGPricing /> },
  { id: "og-enterprise", path: "/enterprise", render: () => <OGEnterprise /> },
  { id: "og-blog-post", path: "/blog/[slug]", render: (t) => <OGBlogPost title={t} /> },
];

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

declare global {
  interface Window {
    /** Automation hook: render template `id` (optional blog title) and resolve with a 1200×630 PNG data URL. */
    __exportOG?: (id: string, title?: string) => Promise<string>;
  }
}

export default function OGGeneratorPage() {
  const [id, setId] = useState(DEFS[0].id);
  const [title, setTitle] = useState("How to take meeting notes on a Mac without a bot in the call");
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const def = DEFS.find((d) => d.id === id) ?? DEFS[0];

  useEffect(() => () => uninstallFreeze(), []);

  const capture = useCallback(async (nextId: string, nextTitle?: string) => {
    setId(nextId);
    if (nextTitle !== undefined) setTitle(nextTitle);
    await wait(700);
    if (!ref.current) throw new Error("template not mounted");
    const opts = { width: OG_W, height: OG_H, pixelRatio: 1, backgroundColor: "#080816" };
    await toPng(ref.current, opts); // warm fonts and images
    return toPng(ref.current, opts);
  }, []);

  useEffect(() => {
    window.__exportOG = capture;
    return () => { delete window.__exportOG; };
  }, [capture]);

  const save = (url: string, name: string) => {
    const a = document.createElement("a");
    a.download = `${name}.png`;
    a.href = url;
    a.click();
  };

  const download = async (which: string) => {
    if (busy) return;
    setBusy(true);
    try { save(await capture(which), which); } finally { setBusy(false); }
  };

  const downloadAll = async () => {
    if (busy) return;
    setBusy(true);
    try {
      for (const d of DEFS) { save(await capture(d.id), d.id); await wait(250); }
    } finally { setBusy(false); }
  };

  return (
    <div className="min-h-screen bg-[#05050C] py-8">
      <style>{FREEZE_CSS}</style>
      <div className="mx-auto px-6" style={{ maxWidth: OG_W + 48 }}>
        <h1 className="text-2xl font-semibold text-white">OG images</h1>
        <p className="mt-1 text-sm text-white/50">
          1200×630 PNGs. Save them to <code className="rounded bg-white/10 px-1.5">public/assets/og/</code> under the file name shown.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {DEFS.map((d) => (
            <button key={d.id} onClick={() => setId(d.id)} disabled={busy}
              className={`rounded-md px-3 py-1.5 text-xs ${d.id === id ? "bg-[#5B6CF7] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
              {d.id} <span className="opacity-60">{d.path}</span>
            </button>
          ))}
        </div>

        {id === "og-blog-post" && (
          <label className="mt-4 block text-sm text-white/60">
            Blog title
            <input value={title} onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-lg bg-white/[0.06] px-3 py-2 text-white ring-1 ring-white/10 outline-none focus:ring-[#5B6CF7]" />
          </label>
        )}

        <div className="mt-4 flex gap-2">
          <button onClick={() => download(id)} disabled={busy}
            className="inline-flex items-center gap-2 rounded-lg bg-[#5B6CF7] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A5BD6] disabled:opacity-50">
            <Download className="h-4 w-4" /> {busy ? "Exporting…" : `Download ${id}.png`}
          </button>
          <button onClick={downloadAll} disabled={busy}
            className="rounded-lg bg-white/[0.1] px-4 py-2 text-sm font-medium text-white hover:bg-white/[0.16] disabled:opacity-50">
            Download all
          </button>
        </div>

        <div className="mt-5 ring-1 ring-white/10 shadow-2xl" style={{ width: OG_W, height: OG_H }}>
          <div ref={ref} data-slide style={{ width: OG_W, height: OG_H }}>
            {def.render(title)}
          </div>
        </div>
      </div>
    </div>
  );
}
