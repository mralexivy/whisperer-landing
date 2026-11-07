import type { Metadata } from "next";
import { Mail, ServerOff, UserX, Laptop, KeyRound, ShieldCheck, Building2, Briefcase, Code2, Scale, Headphones, MonitorSmartphone } from "lucide-react";
import { SiteHeader, SiteFooter, Section, H2, Lede, AppStoreButton } from "@/components/site/Shell";
import { Crumbs, SectionHead, Steps, Showcase } from "@/components/site/PageParts";
import { SeatCalculator } from "@/components/enterprise/SeatCalculator";
import { ProviderList } from "@/components/product/ProviderList";
import { MeetingStudio } from "@/components/product/MeetingStudio";
import { BrandIcon, BrandTile, type Brand } from "@/components/product/primitives";
import { FAQSection, type QA } from "@/components/home/HomeFAQ";
import { JsonLd } from "@/lib/structured-data";
import { PRICE_BASE, PRICE_PRO, SUPPORT_EMAIL, FACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Meeting Notes for Teams and Enterprise, Paid Once Per Mac",
  description:
    "Give every employee AI meeting notes on their Mac with no per-seat subscription. Audio stays on the device, no bot joins customer calls, and notes use the AI your company already licenses.",
  alternates: { canonical: "https://whispererapp.com/enterprise" },
  keywords: [
    "AI meeting notes for enterprise",
    "meeting notes for teams Mac",
    "on-device meeting transcription",
    "private meeting recorder for companies",
    "meeting notes without bot",
    "Otter alternative for business",
    "Granola alternative for teams",
  ],
  openGraph: {
    title: "Meeting notes for every Mac in your company, paid once",
    description: "No per-seat subscription, no bot in customer calls, audio never leaves the device. Uses the AI your company already pays for.",
    url: "https://whispererapp.com/enterprise",
    images: [{ url: "/assets/og/og-enterprise.png", width: 1200, height: 630, alt: "Whisperer for teams and enterprise" }],
  },
};

const ROLLOUT_MAIL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Whisperer for our team")}&body=${encodeURIComponent("Company:\nNumber of Macs:\nMDM we use (Jamf, Kandji, Intune, Mosyle...):\nAI tools we already license:\n")}`;

const TEAMS: { icon: typeof Briefcase; team: string; use: string }[] = [
  { icon: Briefcase, team: "Sales and success", use: "Customer calls get notes and next steps without a recorder bot appearing in the participant list." },
  { icon: Code2, team: "Engineering and product", use: "Standups and design reviews become searchable, and Claude Code or Cursor can read them through MCP." },
  { icon: Building2, team: "Leadership", use: "Decisions and owners from every meeting, in the same six-part format, ready to forward." },
  { icon: Scale, team: "Legal, HR and finance", use: "Sensitive calls stay on the built-in model, so the transcript never reaches any cloud AI." },
  { icon: Headphones, team: "Support and research", use: "Interviews in 97 languages, with each speaker named and every quote linked to its timestamp." },
];

const STACK: Brand[] = ["openai", "anthropic", "gemini", "claude", "codex", "cursor", "visual-studio-code"];

const FAQ: QA[] = [
  {
    question: "Does Whisperer process our meeting data on its servers?",
    answer:
      "No. Whisperer has no servers that receive meetings. Recording, transcription and speaker detection run on each employee's Mac. If your team chooses a cloud AI for notes, only the text goes to that provider, under the account your company already has with them.",
  },
  {
    question: "How do we buy it for many Macs?",
    answer: `The ${PRICE_BASE} app can be bought in bulk through Apple Business Manager and pushed with your MDM. For Pro across a team, email us with your seat count and we will set up the licensing with you.`,
  },
  {
    question: "Do employees need an account?",
    answer: "No. There is no Whisperer account, no sign-up and nothing to provision or offboard. The app works as soon as it is installed.",
  },
  {
    question: "Can we use our company's own AI accounts?",
    answer:
      "Yes. Employees can paste the company's OpenAI, Anthropic or Gemini API key, which is stored in their Mac's Keychain, or sign in with the ChatGPT, Claude or Gemini plan they already use. Anyone can stay on the built-in offline model instead.",
  },
  {
    question: "Does a bot join our customer calls?",
    answer: "No. Nothing joins the call. Whisperer records on the employee's Mac, so customers see only the people they invited.",
  },
  {
    question: "What do the Macs need?",
    answer: `${FACTS.chip} (M1 or later) and ${FACTS.minMacOS}. The speech model is about 550 MB and the built-in AI model about 3.2 GB.`,
  },
];

function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Whisperer for teams and enterprise",
    url: "https://whispererapp.com/enterprise",
    description: "AI meeting notes for every Mac in a company, paid once per Mac, with on-device processing and the company's own AI providers.",
    about: { "@type": "SoftwareApplication", name: "Whisperer", operatingSystem: "macOS 26 or later", applicationCategory: "BusinessApplication" },
  };
}

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[#0B0B19]">
      <JsonLd data={webPageSchema()} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 pb-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-260px] h-[760px] w-[1300px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.3),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]" />
          </div>
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Crumbs items={[{ name: "Teams and enterprise", href: "/enterprise" }]} />
            <div className="mx-auto max-w-[900px] text-center">
              <h1 data-enter style={{ "--d": "60ms" } as React.CSSProperties} className="text-[42px] sm:text-[60px] lg:text-[72px] font-semibold leading-[0.98] tracking-[-0.04em] text-white text-balance">
                Meeting notes for every Mac in your company, paid once
              </h1>
              <p data-enter style={{ "--d": "150ms" } as React.CSSProperties} className="mx-auto mt-6 max-w-[700px] text-[18px] sm:text-[20px] leading-[1.5] text-white/60 text-pretty">
                Give each employee AI notes for every call for {PRICE_BASE} plus {PRICE_PRO} per Mac, not a subscription per seat. Audio stays on the device, no bot joins customer calls, and the notes use the AI your company already licenses.
              </p>
              <div data-enter style={{ "--d": "230ms" } as React.CSSProperties} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={ROLLOUT_MAIL}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-[#0B0B19] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_rgba(255,255,255,0.45)] active:translate-y-0 active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4" /> Email us about a rollout
                </a>
                <AppStoreButton className="w-full sm:w-auto" label="Try it on your Mac" />
              </div>
            </div>
            <div className="relative mx-auto mt-16 max-w-[1100px]">
              <MeetingStudio compact />
            </div>
          </div>
        </section>

        {/* Cost */}
        <Section id="cost">
          <div className="max-w-[760px]">
            <H2>What meeting notes cost your company</H2>
            <Lede>Per-seat plans bill every employee every month. Whisperer is bought once per Mac. Drag to your headcount.</Lede>
          </div>
          <div className="mt-12"><SeatCalculator /></div>
        </Section>

        <Showcase
          id="notes"
          title="What every employee gets after every call"
          lede="An overview, decisions, action items with owners and open questions, written on their Mac by the AI your company already licenses."
          video="meeting-loop"
          alt="Meeting Studio writing an overview, decisions and action items when a call ends"
        />

        {/* Security */}
        <Section id="security">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHead
              title="Nothing new for security to review in the cloud"
              lede="There is no Whisperer server, no account and no sync service. Meeting audio is never uploaded, so there is no new vendor holding your recordings."
            />
            <dl className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {[
                { icon: ServerOff, t: "No Whisperer cloud", b: "Recordings, transcripts and notes are files on the employee's Mac." },
                { icon: UserX, t: "No accounts to manage", b: "Nothing to provision, no SSO to wire up, nothing left behind at offboarding." },
                { icon: Laptop, t: "Sandboxed Mac App Store app", b: "Distributed and updated through Apple, with the App Store privacy label Data Not Collected." },
                { icon: KeyRound, t: "Keys stay in the Keychain", b: "API keys and calendar sign-ins are stored by macOS, never in a file or on our side." },
                { icon: ShieldCheck, t: "Cloud AI is opt-in, per meeting", b: "Text goes to an AI provider only when someone chooses one, and any meeting can be kept local." },
              ].map((r) => (
                <div key={r.t} className="flex gap-4 py-5">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <dt className="text-[16px] font-semibold text-white">{r.t}</dt>
                    <dd className="mt-1 text-[14.5px] leading-[1.55] text-white/55">{r.b}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Your AI */}
        <Section id="your-ai">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <H2>Uses the AI your company already pays for</H2>
              <Lede>
                Point Whisperer at your company&apos;s OpenAI, Anthropic or Gemini account, or let people sign in with the ChatGPT, Claude or Gemini plan they already have. No second AI contract, no extra seats.
              </Lede>
              <div className="mt-8 flex flex-wrap gap-2">{STACK.map((b) => <BrandTile key={b} brand={b} size={46} />)}</div>
              <p className="mt-6 max-w-[520px] text-[15px] leading-[1.6] text-white/55">
                With the MCP server switched on, the same assistants your engineers and analysts use every day, such as Claude, Cursor and Codex, can read the meetings they were in.
              </p>
            </div>
            <ProviderList sidebar={false} />
          </div>
        </Section>

        {/* Teams */}
        <Section id="teams">
          <SectionHead title="What each team gets from it" />
          <ul className="mt-12 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {TEAMS.map((t) => (
              <li key={t.team} className="grid gap-3 py-6 md:grid-cols-[280px_1fr] md:items-center">
                <div className="flex items-center gap-3 text-[17px] font-semibold text-white">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#5B6CF7]/15"><t.icon className="h-[18px] w-[18px] text-[#9BA6FF]" /></span>
                  {t.team}
                </div>
                <p className="text-[15.5px] leading-[1.55] text-white/60">{t.use}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[14px] text-white/50">
            Works with the call tools your company runs on
            {(["zoom", "teams", "google-meet", "slack", "webex"] as const).map((b) => (
              <span key={b} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] ring-1 ring-white/10"><BrandIcon brand={b} size={17} /></span>
            ))}
          </div>
        </Section>

        {/* Rollout */}
        <Section id="rollout">
          <SectionHead title="Rolling it out across your Macs" lede="The same path IT already uses for any Mac App Store app." />
          <div className="mt-12">
            <Steps
              items={[
                { title: "Buy in Apple Business Manager", body: "Get the app for every Mac in one purchase under Apps and Books." },
                { title: "Deploy with your MDM", body: "Push it with Jamf, Kandji, Intune, Mosyle or any MDM that supports App Store apps." },
                { title: "Set up Pro with us", body: "Email your seat count and we arrange Pro for the whole team." },
                { title: "Pick the AI policy", body: "Your company API key, employees' own plans, or on-device only." },
              ]}
            />
          </div>
          <div className="mt-8 flex items-center gap-2 text-[14px] text-white/45"><MonitorSmartphone className="h-4 w-4" /> Requires {FACTS.chip} and {FACTS.minMacOS}.</div>
        </Section>

        <FAQSection items={FAQ} title="Questions from IT and procurement" />

        {/* Close */}
        <section className="relative overflow-hidden py-32">
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,247,0.32),transparent)]" />
          <div className="relative mx-auto max-w-[820px] px-4 text-center">
            <h2 className="text-[38px] sm:text-[54px] font-semibold leading-[1.02] tracking-[-0.04em] text-white text-balance">Plan a rollout for your team</h2>
            <p className="mx-auto mt-5 max-w-[540px] text-[18px] text-white/60">Tell us how many Macs you have and which tools you use, and we send back a plan and a quote.</p>
            <div className="mt-9 flex justify-center">
              <a href={ROLLOUT_MAIL} className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-[#0B0B19] transition-all hover:-translate-y-0.5 active:scale-[0.98]">
                <Mail className="h-4 w-4" /> Email us about a rollout
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
