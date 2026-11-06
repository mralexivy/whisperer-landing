"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_STORE_URL, NAV_LINKS, PRICE_PRO } from "@/lib/site";
import appIcon from "../../public/assets/app-icon.webp";

export function AppStoreButton({ className, label = "Get it on the Mac App Store", size = "lg" }: { className?: string; label?: string; size?: "lg" | "sm" }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white",
        "bg-gradient-to-b from-[#6B7BFF] to-[#4C5DE8] shadow-[0_10px_30px_-10px_rgba(91,108,247,0.8),inset_0_1px_0_rgba(255,255,255,0.25)]",
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(91,108,247,0.9),inset_0_1px_0_rgba(255,255,255,0.3)] active:translate-y-0 active:scale-[0.98]",
        size === "lg" ? "h-12 px-6 text-[15px]" : "h-9 px-4 text-[13px]",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className={size === "lg" ? "h-[18px] w-[18px]" : "h-4 w-4"} fill="currentColor" aria-hidden>
        <path d="M16.37 1.43c0 1.14-.42 2.2-1.25 3.1-.98 1.05-2.17 1.66-3.46 1.56a3.4 3.4 0 0 1-.03-.42c0-1.1.48-2.27 1.33-3.2.42-.47.96-.86 1.62-1.17.65-.3 1.27-.47 1.85-.5.02.2.03.42.03.63Zm4.44 15.9c-.36.84-.79 1.6-1.29 2.32-.68.98-1.24 1.65-1.67 2.03-.67.62-1.39.93-2.16.95-.55 0-1.22-.16-2-.48-.78-.32-1.5-.48-2.15-.48-.68 0-1.42.16-2.2.48-.79.32-1.42.49-1.9.5-.74.04-1.48-.29-2.22-.98-.47-.41-1.06-1.11-1.76-2.11-.76-1.06-1.38-2.3-1.87-3.7-.52-1.52-.78-2.99-.78-4.41 0-1.63.35-3.03 1.06-4.21a6.2 6.2 0 0 1 2.21-2.24 5.96 5.96 0 0 1 3-.85c.58 0 1.35.18 2.3.54.95.36 1.56.54 1.83.54.2 0 .89-.21 2.05-.64 1.1-.4 2.02-.56 2.79-.5 2.06.17 3.6.98 4.63 2.44-1.84 1.12-2.75 2.68-2.73 4.68.02 1.56.58 2.86 1.7 3.89.5.48 1.07.85 1.7 1.11-.14.4-.28.77-.43 1.13Z" />
      </svg>
      {label}
    </a>
  );
}

export function GhostButton({ href, children, onClick, className }: { href?: string; children: ReactNode; onClick?: () => void; className?: string }) {
  const cls = cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-medium text-white/85",
    "ring-1 ring-white/15 bg-white/[0.03] transition-all duration-200 hover:bg-white/[0.07] hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    className,
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls}>
        <Play className="h-4 w-4 fill-current" /> {children}
      </button>
    );
  }
  return (
    <Link href={href ?? "#"} className={cls}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-1.5 text-[15px] font-medium text-[#9BA6FF] hover:text-white transition-colors", className)}>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "bg-[#0B0B19]/80 backdrop-blur-xl border-b border-white/[0.06]" : "")}>
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={appIcon.src} alt="" width={28} height={28} className="h-7 w-7 rounded-[8px]" />
          <span className="text-[17px] font-semibold tracking-tight text-white">Whisperer</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-[13.5px] text-white/60 transition-colors hover:text-white hover:bg-white/[0.05]">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <AppStoreButton size="sm" label="Get Whisperer" />
        </div>
        <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0B0B19] px-4 py-6 flex flex-col">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-white/[0.06] py-4 text-[20px] font-medium text-white">
                {l.label}
              </Link>
            ))}
          </nav>
          <AppStoreButton className="mt-8 w-full" label="Get Whisperer" />
        </div>
      )}
    </header>
  );
}

const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      ["Dictation", "/features"],
      ["Meeting notes", "/meetings"],
      ["Calendar", "/calendar"],
      ["Your own AI", "/ai"],
      ["MCP server", "/mcp"],
      ["For teams", "/enterprise"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    title: "Dictation",
    links: [
      ["Live preview", "/features/live-preview"],
      ["97 languages", "/features/multilingual"],
      ["Offline engines", "/features/offline-transcription"],
      ["Personal dictionary", "/features/personal-dictionary"],
      ["File transcription", "/features/file-transcription"],
      ["History", "/features/transcription-history"],
    ],
  },
  {
    title: "Compare",
    links: [
      ["All comparisons", "/compare"],
      ["vs Granola", "/compare/vs-granola"],
      ["vs Otter.ai", "/compare/vs-otter"],
      ["vs Wispr Flow", "/compare/vs-wispr-flow"],
      ["vs Superwhisper", "/compare/vs-superwhisper"],
      ["vs MacWhisper", "/compare/vs-macwhisper"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Getting started", "/blog/getting-started-whisperer"],
      ["Why Whisperer", "/why-whisperer"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#08081A]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={appIcon.src} alt="" width={28} height={28} className="h-7 w-7 rounded-[8px]" />
              <span className="text-[17px] font-semibold text-white">Whisperer</span>
            </Link>
            <p className="mt-4 max-w-[260px] text-[13.5px] leading-relaxed text-white/50">
              Dictation and meeting notes for Mac. Runs on your Mac, works with the AI you already have. {PRICE_PRO} once.
            </p>
            <AppStoreButton size="sm" className="mt-5" label="Get Whisperer" />
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <div className="text-[13px] font-semibold text-white">{g.title}</div>
              <ul className="mt-4 space-y-2.5">
                {g.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-[13.5px] text-white/50 transition-colors hover:text-white">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-[12.5px] text-white/35 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Whisperer</span>
          <span>Product names and logos are trademarks of their owners.</span>
        </div>
      </div>
    </footer>
  );
}

/** One marketing section: about one screen tall, one heading, equal edges. */
export function Section({
  id, children, className, wrapClassName, tall = false,
}: { id?: string; children: ReactNode; className?: string; wrapClassName?: string; tall?: boolean }) {
  return (
    <section id={id} className={cn("relative flex items-center py-24 sm:py-28", tall ? "min-h-[min(100svh,1100px)]" : "screen", className)}>
      <div className={cn("relative mx-auto w-full max-w-[1240px] px-4 sm:px-6", wrapClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mb-4 text-[13px] font-semibold text-[#8B9BFF]", className)}>{children}</div>;
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("text-[34px] sm:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.03em] text-white text-balance", className)}>{children}</h2>;
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mt-5 max-w-[560px] text-[17px] sm:text-[18px] leading-[1.55] text-white/60 text-pretty", className)}>{children}</p>;
}

/** A soft light behind a product frame. */
export function Glow({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute -z-0 rounded-full blur-[120px] opacity-60", className)} />;
}
