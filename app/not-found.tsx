import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/landing/PageKit";

const LINKS = [
  { href: "/", title: "Home", body: "What Whisperer does, in one page." },
  { href: "/meetings", title: "Meeting notes", body: "Notes for Zoom, Teams and Meet calls." },
  { href: "/blog", title: "Blog", body: "Guides and comparisons." },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-36 pb-28">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.22),transparent)]" />
        <div className="relative mx-auto max-w-[760px] px-4 sm:px-6">
          <p className="text-[14px] font-medium tabular-nums text-white/40">404</p>
          <h1 className="mt-3 text-[40px] sm:text-[56px] font-semibold leading-[1.03] tracking-[-0.035em] text-white">This page is not here</h1>
          <p className="mt-5 max-w-[520px] text-[18px] leading-[1.55] text-white/60">
            The link may be old, or the page may have moved. These are good places to pick up from.
          </p>
          <ul className="mt-10 border-t border-white/[0.08]">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/[0.08]">
                <Link href={l.href} className="group flex items-center justify-between gap-4 py-5">
                  <span>
                    <span className="block text-[17px] font-semibold text-white">{l.title}</span>
                    <span className="mt-0.5 block text-[14.5px] text-white/50">{l.body}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
