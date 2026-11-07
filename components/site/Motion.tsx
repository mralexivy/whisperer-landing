"use client";

// The site's one motion idea: things come into focus, the way speech resolves into text.
// Server components opt in with attributes, so no page has to become a client component:
//   data-reveal         a heading or paragraph focuses in when it scrolls into view
//   data-reveal="frame" a product picture: rises, sharpens and settles to full size
//   data-reveal="list"  its children arrive one after another (capped)
//   data-rd="120"       extra delay in ms
// Nothing is hidden unless this script runs (the `js` class), and reduced motion skips straight to the end.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const STAGGER_CAP = 8;

function arm(el: HTMLElement) {
  if (el.dataset.rd) el.style.setProperty("--rd", `${el.dataset.rd}ms`);
  if (el.dataset.reveal === "list") {
    Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(Math.min(i, STAGGER_CAP))));
  }
}

export function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) {
      root.classList.remove("js");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).setAttribute("data-in", "");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const scan = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in]):not([data-armed])").forEach((el) => {
        el.setAttribute("data-armed", "");
        arm(el);
        io.observe(el);
      });
    };
    scan(document);
    // Pages swap in on client navigation and some sections mount late; pick those up too.
    const mo = new MutationObserver(() => scan(document));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);
  return null;
}

/**
 * A rendered product loop (made with Remotion, in /remotion). Plays muted and inline only while on screen,
 * rests on its poster under reduced motion, and with preload="none" downloads nothing until it first plays.
 */
export function LoopVideo({
  name, alt, className, frameClassName,
}: { name: string; alt: string; className?: string; frameClassName?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (reduce) return;
        if (e.intersectionRatio > 0.2) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: [0, 0.2, 0.6] },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <div className={cn("relative overflow-hidden rounded-[18px] ring-1 ring-white/[0.08] bg-[#0B0B19] shadow-[0_40px_120px_-30px_rgba(10,10,40,0.95)]", frameClassName)}>
      <video
        ref={ref}
        className={cn("block h-auto w-full", className)}
        poster={`/videos/${name}.jpg`}
        width={1600}
        height={1000}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        <source src={`/videos/${name}.webm`} type="video/webm" />
        <source src={`/videos/${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}
