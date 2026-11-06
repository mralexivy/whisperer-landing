import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Competitor {
  slug: string;
  name: string;
  /** One plain line on how the two differ. */
  summary: string;
  /** Public pricing, November 2026, one seat. */
  price: string;
  /** An honest point where they are ahead. */
  theyWin: string;
  color: string;
  icon: string | null;
}

// Meeting-notes apps first: that is what Whisperer is mostly bought for now.
const MEETING_COMPETITORS: Competitor[] = [
  {
    slug: "vs-granola",
    name: "Granola",
    summary: "Both take notes without a bot. Granola works in the cloud on a monthly plan; Whisperer transcribes on your Mac and you pay once.",
    price: "Free Basic, Business $14/user/month",
    theyWin: "Team sharing, iPhone and Windows apps",
    color: "#84CC16",
    icon: null,
  },
  {
    slug: "vs-otter",
    name: "Otter",
    summary: "Otter's assistant can join the call and share a live transcript. Whisperer records from your Mac and nothing joins the call.",
    price: "Pro $16.99/month, or $8.33/month yearly",
    theyWin: "Shared live transcripts, mobile apps",
    color: "#3B82F6",
    icon: null,
  },
  {
    slug: "vs-fireflies",
    name: "Fireflies",
    summary: "Fireflies sends a bot into calls and plugs into CRMs. Whisperer stays on your Mac and hands meetings to your own AI over MCP.",
    price: "Pro $18/month, or $10/month yearly",
    theyWin: "CRM integrations, team analytics",
    color: "#A855F7",
    icon: null,
  },
];

const DICTATION_COMPETITORS: Competitor[] = [
  {
    slug: "vs-wispr-flow",
    name: "Wispr Flow",
    summary: "Cloud dictation on a subscription. Whisperer dictates offline and adds meeting notes for a one-time price.",
    price: "Pro $15/month, or $12/month yearly",
    theyWin: "Types into the field, Windows and iPhone",
    color: "#8B5CF6",
    icon: "/assets/icons/competitors/wispr-flow.png",
  },
  {
    slug: "vs-superwhisper",
    name: "Superwhisper",
    summary: "A close peer for offline dictation. Whisperer adds meetings, calendar recording and MCP.",
    price: "Pro $8.49/month or $249.99 lifetime",
    theyWin: "Custom modes, iPhone app",
    color: "#F59E0B",
    icon: "/assets/icons/competitors/superwhisper.png",
  },
  {
    slug: "vs-macwhisper",
    name: "MacWhisper",
    summary: "The file transcription specialist. Whisperer is built around live dictation and meetings.",
    price: "Pro €64 one-time",
    theyWin: "Depth in batch file transcription",
    color: "#3B82F6",
    icon: "/assets/icons/competitors/macwhisper.png",
  },
  {
    slug: "vs-voice-ink",
    name: "VoiceInk",
    summary: "Open-source offline dictation. Whisperer adds meeting notes, your own AI and MCP.",
    price: "From $25 one-time",
    theyWin: "Open source, runs on macOS 14.4 and later",
    color: "#EF4444",
    icon: "/assets/icons/competitors/voiceink.png",
  },
  {
    slug: "vs-apple-dictation",
    name: "Apple Dictation",
    summary: "Free and built in. Whisperer adds bigger models, a dictionary, history and meeting notes.",
    price: "Free with macOS",
    theyWin: "Free, nothing to install",
    color: "#9CA3AF",
    icon: null,
  },
  {
    slug: "vs-willow",
    name: "Willow",
    summary: "Cloud dictation across platforms on a monthly plan. Whisperer runs offline on your Mac.",
    price: "Pro $15/month, or $12/month yearly",
    theyWin: "Cross-platform, team plans",
    color: "#14B8A6",
    icon: null,
  },
  {
    slug: "vs-spokenly",
    name: "Spokenly",
    summary: "A generous free tier for local dictation. Whisperer adds meetings, calendar and MCP.",
    price: "Free, Local+ $29, Pro $144/year",
    theyWin: "Free local tier",
    color: "#F97316",
    icon: null,
  },
  {
    slug: "vs-voibe",
    name: "Voibe",
    summary: "On-device dictation for Mac and Windows. Whisperer adds meeting notes and your own AI.",
    price: "$9.90/month, $99/year or $199 one-time",
    theyWin: "Windows app",
    color: "#10B981",
    icon: "/assets/icons/competitors/voibe.png",
  },
  {
    slug: "vs-jestype",
    name: "JesType",
    summary: "A low-cost Parakeet dictation app for Mac and Windows. Whisperer adds meetings and more engines.",
    price: "€14.95 one-time",
    theyWin: "Windows app, low price",
    color: "#06B6D4",
    icon: null,
  },
];

function CompetitorMark({ comp }: { comp: Competitor }) {
  if (comp.icon) {
    return <Image src={comp.icon} alt="" width={36} height={36} className="h-9 w-9 rounded-[9px]" />;
  }
  return (
    <div
      aria-hidden
      className="flex h-9 w-9 items-center justify-center rounded-[9px] text-[15px] font-semibold"
      style={{ backgroundColor: comp.color + "22", color: comp.color }}
    >
      {comp.name.charAt(0)}
    </div>
  );
}

function CompareList({ title, intro, items }: { title: string; intro: string; items: Competitor[] }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-white sm:text-[28px]">{title}</h2>
      <p className="mt-2 max-w-[640px] text-[16px] leading-relaxed text-white/60">{intro}</p>
      <ul className="mt-6 divide-y divide-white/[0.07] border-y border-white/[0.07]">
        {items.map((comp) => (
          <li key={comp.slug}>
            <Link
              href={`/compare/${comp.slug}`}
              className="group grid gap-x-5 gap-y-2 py-5 transition-transform duration-200 hover:-translate-y-0.5 sm:grid-cols-[36px_1fr_220px_16px] sm:items-start"
            >
              <CompetitorMark comp={comp} />
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold text-white transition-colors group-hover:text-[#9BA6FF]">
                  Whisperer vs {comp.name}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-white/60">{comp.summary}</p>
              </div>
              <dl className="text-[13.5px] leading-relaxed">
                <dt className="sr-only">Price</dt>
                <dd className="text-white/80">{comp.price}</dd>
                <dt className="mt-1 text-white/45">Where they win</dt>
                <dd className="text-white/65">{comp.theyWin}</dd>
              </dl>
              <ArrowRight className="mt-1 hidden h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-[#9BA6FF] sm:block" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CompareCards() {
  return (
    <>
      <CompareList
        title="Meeting notes apps"
        intro="Granola, Otter and Fireflies are the apps people most often weigh against Whisperer for calls."
        items={MEETING_COMPETITORS}
      />
      <CompareList
        title="Dictation apps"
        intro="For dictation alone these are close peers. Whisperer adds meeting notes, your own AI and MCP in Pro."
        items={DICTATION_COMPETITORS}
      />
    </>
  );
}
