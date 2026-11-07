import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppStoreButton, GhostButton, Section, H2, Lede } from "./Shell";
import { JsonLd, breadcrumbSchema } from "@/lib/structured-data";
import { LoopVideo } from "./Motion";

export function Crumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all.map((i) => ({ name: i.name, url: i.href === "/" ? "" : i.href })))} />
      <nav data-enter aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-[13px] text-white/40">
        {all.map((c, i) => (
          <span key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {i < all.length - 1 ? <Link href={c.href} className="hover:text-white transition-colors">{c.name}</Link> : <span className="text-white/60">{c.name}</span>}
          </span>
        ))}
      </nav>
    </>
  );
}

/** Split hero for a product page: words on the left, the product on the right. */
export function PageHero({
  title, lede, visual, crumbs, secondary, facts, stacked = false,
}: {
  title: ReactNode;
  lede: ReactNode;
  visual: ReactNode;
  crumbs: { name: string; href: string }[];
  secondary?: { href: string; label: string };
  facts?: string[];
  /** Words above a full-width picture, for product UI that needs the room. */
  stacked?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-200px] h-[700px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Crumbs items={crumbs} />
        <div className={cn("grid items-center gap-14", stacked ? "lg:gap-16" : "lg:grid-cols-[1fr_1.15fr]")}>
          <div className={cn(stacked && "max-w-[820px]")}>
            <h1 data-enter style={{ "--d": "70ms" } as React.CSSProperties} className="text-[40px] sm:text-[54px] lg:text-[60px] font-semibold leading-[1.0] tracking-[-0.04em] text-white text-balance">{title}</h1>
            <p data-enter style={{ "--d": "160ms" } as React.CSSProperties} className="mt-6 max-w-[600px] text-[18px] leading-[1.55] text-white/60 text-pretty">{lede}</p>
            <div data-enter style={{ "--d": "240ms" } as React.CSSProperties} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppStoreButton className="w-full sm:w-auto" label="Get Whisperer" />
              {secondary && <GhostButton href={secondary.href} className="w-full sm:w-auto">{secondary.label}</GhostButton>}
            </div>
            {facts && (
              <div data-enter style={{ "--d": "300ms" } as React.CSSProperties} className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[13.5px] text-white/45">
                {facts.map((f, i) => (
                  <span key={f} className="flex items-center gap-4">{i > 0 && <span className="text-white/20">·</span>}{f}</span>
                ))}
              </div>
            )}
          </div>
          <div data-enter="frame" style={{ "--d": "260ms" } as React.CSSProperties} className="relative min-w-0">{visual}</div>
        </div>
      </div>
    </section>
  );
}

/** Words beside a picture. `flip` puts the picture first on wide screens. */
export function FeatureRow({
  id, title, lede, children, visual, flip = false,
}: { id?: string; title: string; lede: ReactNode; children?: ReactNode; visual: ReactNode; flip?: boolean }) {
  return (
    <Section id={id}>
      <div className={cn("grid items-center gap-14 lg:grid-cols-2")}>
        <div className={cn(flip && "lg:order-2")}>
          <H2>{title}</H2>
          <Lede>{lede}</Lede>
          {children && <div data-reveal data-rd="160" className="mt-8">{children}</div>}
        </div>
        <div data-reveal="frame" className={cn("relative min-w-0", flip && "lg:order-1")}>{visual}</div>
      </div>
    </Section>
  );
}

export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol data-reveal="list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.title} className="relative rounded-[20px] bg-[#101024] ring-1 ring-white/[0.07] p-6">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5B6CF7]/20 text-[14px] font-semibold text-[#B9C1FF] tabular-nums">{i + 1}</span>
          <div className="mt-4 text-[16.5px] font-semibold text-white">{s.title}</div>
          <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul data-reveal="list" className={cn("space-y-3", className)}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[15.5px] leading-[1.5] text-white/75">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B9BFF]" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div data-reveal className="overflow-hidden rounded-[16px] bg-[#0A0A18] ring-1 ring-white/[0.08]">
      <div className="border-b border-white/[0.06] px-4 py-2.5 text-[12.5px] font-medium text-white/50">{title}</div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-[1.6] text-[#C9D1FF]"><code>{code}</code></pre>
    </div>
  );
}

export function SectionHead({ title, lede, center = false }: { title: string; lede?: ReactNode; center?: boolean }) {
  return (
    <div className={cn("max-w-[760px]", center && "mx-auto text-center")}>
      <H2>{title}</H2>
      {lede && <Lede className={cn(center && "mx-auto")}>{lede}</Lede>}
    </div>
  );
}

/** A wide, centred film of the product at work: one rendered loop under a heading. */
export function Showcase({ id, title, lede, video, alt, children }: { id?: string; title: string; lede?: ReactNode; video: string; alt: string; children?: ReactNode }) {
  return (
    <Section id={id}>
      <SectionHead title={title} lede={lede} center />
      <div data-reveal="frame" className="relative mx-auto mt-12 max-w-[1100px]">
        <div aria-hidden className="absolute inset-x-[10%] -top-8 h-32 rounded-full bg-[#5B6CF7]/25 blur-[90px]" />
        <LoopVideo name={video} alt={alt} frameClassName="relative rounded-[24px] ring-0 shadow-none bg-transparent" />
      </div>
      {children && <div data-reveal className="mx-auto mt-10 max-w-[900px]">{children}</div>}
    </Section>
  );
}
