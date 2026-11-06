"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

// Yearly-billed business seats, public pricing checked November 2026.
const RIVALS = [
  { name: "Otter Business", perSeatYear: 239.88 },
  { name: "Fireflies Business", perSeatYear: 228 },
  { name: "Granola Business", perSeatYear: 168 },
];
const WHISPERER_PER_SEAT = 17.98; // $2.99 app + $14.99 Pro, once
const STEPS = [10, 25, 50, 100, 250, 500, 1000, 2500, 5000];

const cents = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Tween({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) { el.textContent = usd(value); prev.current = value; return; }
    const controls = animate(prev.current, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { el.textContent = usd(v); },
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, reduce]);
  return <span ref={ref} className="tabular-nums">{usd(value)}</span>;
}

export function SeatCalculator() {
  const [i, setI] = useState(4);
  const [years, setYears] = useState(3);
  const seats = STEPS[i];
  const ours = seats * WHISPERER_PER_SEAT;
  const rows = RIVALS.map((r) => ({ ...r, total: r.perSeatYear * seats * years }));
  const cheapest = Math.min(...rows.map((r) => r.total));

  return (
    <div className="rounded-[28px] bg-[linear-gradient(180deg,#17193F_0%,#0F1028_100%)] ring-1 ring-white/[0.09] p-6 sm:p-9 shadow-[0_40px_120px_-40px_rgba(91,108,247,0.55)]">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <label htmlFor="seats" className="flex items-baseline justify-between text-[15px] text-white/70">
            Employees on Mac <span className="text-[28px] font-semibold tabular-nums text-white">{seats.toLocaleString("en-US")}</span>
          </label>
          <input
            id="seats"
            type="range"
            min={0}
            max={STEPS.length - 1}
            step={1}
            value={i}
            onChange={(e) => setI(Number(e.target.value))}
            aria-valuetext={`${seats} employees`}
            className="seat-range mt-4 w-full"
          />
          <div className="mt-2 flex justify-between text-[12px] text-white/35 tabular-nums"><span>10</span><span>5,000</span></div>

          <div className="mt-8 text-[15px] text-white/70">Compared over</div>
          <div className="mt-3 inline-flex rounded-full bg-white/[0.05] p-1 ring-1 ring-white/10" role="radiogroup" aria-label="Years">
            {[1, 3, 5].map((y) => (
              <button
                key={y}
                type="button"
                role="radio"
                aria-checked={years === y}
                onClick={() => setYears(y)}
                className={`rounded-full px-4 py-1.5 text-[14px] font-medium transition-all active:scale-95 ${years === y ? "bg-[#5B6CF7] text-white shadow-[0_6px_18px_-6px_rgba(91,108,247,0.9)]" : "text-white/60 hover:text-white"}`}
              >
                {y} {y === 1 ? "year" : "years"}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <div className="text-[15px] text-white/60">You keep, against the cheapest plan below</div>
            <div className="mt-1 text-[44px] sm:text-[56px] font-semibold leading-none tracking-[-0.03em] text-white">
              <Tween value={cheapest - ours} />
            </div>
          </div>
        </div>

        <div className="divide-y divide-white/[0.07] rounded-[20px] bg-black/20 ring-1 ring-white/[0.06]">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between px-5 py-4">
              <div>
                <div className="text-[15px] text-white/80">{r.name}</div>
                <div className="text-[12.5px] text-white/40">{cents(r.perSeatYear)} per seat a year</div>
              </div>
              <div className="text-[17px] text-white/80"><Tween value={r.total} /></div>
            </div>
          ))}
          <div className="flex items-center justify-between px-5 py-5">
            <div>
              <div className="text-[15.5px] font-semibold text-white">Whisperer with Pro</div>
              <div className="text-[12.5px] text-[#B9C1FF]">{cents(WHISPERER_PER_SEAT)} per seat, once</div>
            </div>
            <div className="text-[20px] font-semibold text-white"><Tween value={ours} /></div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-[12.5px] leading-relaxed text-white/40">
        One seat each, public prices with yearly billing, checked November 2026. Granola Business is billed monthly only. Taxes and volume discounts not included.
      </p>
    </div>
  );
}
