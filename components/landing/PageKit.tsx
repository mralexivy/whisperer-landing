// Building blocks for the dictation feature pages and the SEO landing pages.
// Motion comes from data-enter / data-reveal (components/site/Motion.tsx): nothing stays hidden without scripts.
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, AppStoreButton, Section, H2, Lede } from "@/components/site/Shell";
import { PRICE_BASE, PRICE_PRO, FACTS } from "@/lib/site";
import { cn } from "@/lib/utils";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0B19] text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export type Crumb = { label: string; href?: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav data-enter aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1 text-[13px] text-white/45">
      <Link href="/" className="transition-colors hover:text-white">Home</Link>
      {items.map((c) => (
        <span key={c.label} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5 text-white/25" />
          {c.href ? (
            <Link href={c.href} className="transition-colors hover:text-white">{c.label}</Link>
          ) : (
            <span className="text-white/75">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Page hero: breadcrumbs, one h1, one paragraph, one primary action, an optional product picture. */
export function PageHero({
  crumbs, title, lede, visual, actions, note,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lede: ReactNode;
  visual?: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.22),transparent)]" />
      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <Crumbs items={crumbs} />
        <div className={cn("grid items-center gap-14", visual && "lg:grid-cols-[1fr_1.15fr]")}>
          <div className={cn(!visual && "max-w-[780px]")}>
            <h1 data-enter style={d(70)} className="text-[40px] sm:text-[52px] lg:text-[60px] font-semibold leading-[1.03] tracking-[-0.035em] text-white text-balance">
              {title}
            </h1>
            <p data-enter style={d(160)} className="mt-6 max-w-[580px] text-[17px] sm:text-[19px] leading-[1.55] text-white/60 text-pretty">{lede}</p>
            <div data-enter style={d(240)} className="mt-9 flex flex-wrap items-center gap-3">
              {actions ?? <AppStoreButton label="Get Whisperer" />}
            </div>
            <p data-enter style={d(300)} className="mt-5 text-[13px] text-white/40">
              {note ?? <>{PRICE_BASE} once on the Mac App Store. {FACTS.chip}, {FACTS.minMacOS}.</>}
            </p>
          </div>
          {visual && <div data-enter="frame" style={d(260)} className="relative min-w-0">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

export type Point = { title: string; body: ReactNode };

/** A heading and a list of short points, split by hairlines. No cards. */
export function PointGrid({
  id, title, lede, items,
}: { id?: string; title: ReactNode; lede?: ReactNode; items: Point[] }) {
  return (
    <Section id={id}>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <H2>{title}</H2>
          {lede && <Lede>{lede}</Lede>}
        </div>
        <dl data-reveal="list" className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {items.map((p) => (
            <div key={p.title} className="grid gap-1.5 py-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-6">
              <dt className="text-[16px] font-semibold text-white">{p.title}</dt>
              <dd className="text-[15px] leading-[1.6] text-white/60">{p.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/** Text on one side, a picture on the other. */
export function Split({
  id, title, lede, children, visual, flip = false,
}: { id?: string; title: ReactNode; lede?: ReactNode; children?: ReactNode; visual: ReactNode; flip?: boolean }) {
  return (
    <Section id={id}>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className={cn(flip && "lg:order-2")}>
          <H2>{title}</H2>
          {lede && <Lede>{lede}</Lede>}
          {children && <div data-reveal data-rd="160" className="mt-8">{children}</div>}
        </div>
        <div data-reveal="frame" className={cn("relative min-w-0", flip && "lg:order-1")}>{visual}</div>
      </div>
    </Section>
  );
}

/** Label / value rows, for specs. */
export function FactTable({ rows, className }: { rows: [string, ReactNode][]; className?: string }) {
  return (
    <dl data-reveal="list" className={cn("divide-y divide-white/[0.06] rounded-[18px] bg-[#101024] ring-1 ring-white/[0.07]", className)}>
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 px-5 py-3.5 text-[14.5px]">
          <dt className="text-white/50">{k}</dt>
          <dd className="text-white/85">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A simple list with checkmark-free bullets. */
export function Bullets({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul data-reveal="list" className={cn("space-y-3", className)}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-white/70">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B9BFF]" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export type RelatedLink = { title: string; body?: string; href: string };

export function Related({ links, title = "Related pages" }: { links: RelatedLink[]; title?: string }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 data-reveal className="text-[24px] font-semibold tracking-tight text-white">{title}</h2>
        <ul data-reveal="list" className="mt-6 grid border-t border-white/[0.07] sm:grid-cols-2 sm:gap-x-10">
          {links.map((l) => (
            <li key={l.href} className="border-b border-white/[0.07]">
              <Link href={l.href} className="group flex items-center justify-between gap-4 py-4">
                <span>
                  <span className="block text-[15.5px] font-medium text-white">{l.title}</span>
                  {l.body && <span className="mt-0.5 block text-[13.5px] text-white/50">{l.body}</span>}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Close({ title, body }: { title: ReactNode; body?: ReactNode }) {
  return (
    <section className="relative overflow-hidden py-28">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[480px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.32),transparent)]" />
      <div className="relative mx-auto max-w-[820px] px-4 text-center">
        <h2 data-reveal className="text-[36px] sm:text-[52px] font-semibold leading-[1.04] tracking-[-0.035em] text-white text-balance">{title}</h2>
        <p data-reveal data-rd="90" className="mx-auto mt-5 max-w-[540px] text-[17px] text-white/60">
          {body ?? <>Whisperer is {PRICE_BASE} once. Pro adds meetings, your own AI and MCP for {PRICE_PRO} once. No subscription.</>}
        </p>
        <div data-reveal data-rd="180" className="mt-9 flex justify-center"><AppStoreButton label="Get Whisperer" /></div>
      </div>
    </section>
  );
}

/** A plain prose block for pages that need a few paragraphs. */
export function Prose({ id, title, children }: { id?: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="mx-auto max-w-[760px] px-4 sm:px-6">
        <h2 data-reveal className="text-[30px] sm:text-[38px] font-semibold leading-[1.1] tracking-[-0.03em] text-white text-balance">{title}</h2>
        <div data-reveal data-rd="90" className="mt-6 space-y-5 text-[16.5px] leading-[1.7] text-white/65 [&_a]:text-[#9BA6FF] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white [&_strong]:text-white">
          {children}
        </div>
      </div>
    </section>
  );
}

export type PriceRow = { name: string; price: string; billing: string; note?: string; ours?: boolean };

/** Price comparison table. Competitor rows must use verified public pricing. */
export function PriceTable({ rows, caption }: { rows: PriceRow[]; caption?: ReactNode }) {
  return (
    <div data-reveal>
      <div className="overflow-x-auto rounded-[18px] ring-1 ring-white/[0.07]">
        <table className="w-full min-w-[560px] text-left text-[14.5px]">
          <thead className="bg-white/[0.03] text-[12.5px] text-white/45">
            <tr>
              <th className="px-5 py-3 font-medium">App</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">How you pay</th>
              <th className="px-5 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {rows.map((r) => (
              <tr key={r.name} className={cn(r.ours && "bg-[#5B6CF7]/[0.08]")}>
                <td className={cn("px-5 py-4 font-semibold", r.ours ? "text-white" : "text-white/80")}>{r.name}</td>
                <td className="px-5 py-4 tabular-nums text-white/85">{r.price}</td>
                <td className="px-5 py-4 text-white/65">{r.billing}</td>
                <td className="px-5 py-4 text-white/50">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <p className="mt-4 text-[13px] leading-relaxed text-white/40">{caption}</p>}
    </div>
  );
}

export const PRICE_SOURCE = "Public pricing for one seat, checked November 2026. Competitor prices change; check their sites before you buy.";
