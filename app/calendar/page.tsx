import type { Metadata } from "next";
import { Bell, Video, Tag, Users, KeyRound, Eye } from "lucide-react";
import { SiteHeader, SiteFooter, Section } from "@/components/site/Shell";
import { CalendarPanel } from "@/components/product/CalendarPanel";
import { Showcase, PageHero, SectionHead, Steps, CheckList } from "@/components/site/PageParts";
import { CallDetectedCard } from "@/components/product/Island";
import { BrandIcon } from "@/components/product/primitives";
import { FAQSection, type QA } from "@/components/home/HomeFAQ";
import { CloseSection } from "@/components/home/Sections";
import { PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Record Meetings from Google Calendar and Outlook on Mac",
  description:
    "Connect Google Calendar or Outlook to Whisperer. Get a Join & Record card before each meeting, record automatically, and name notes and speakers after the invite.",
  alternates: { canonical: "https://whispererapp.com/calendar" },
  openGraph: {
    title: "Your calendar tells Whisperer what to record",
    description: "Google Calendar and Outlook sync: reminders, Join & Record, notes named after the invite.",
    url: "https://whispererapp.com/calendar",
    images: [{ url: "/assets/og/og-calendar.png", width: 1200, height: 630, alt: "Whisperer calendar sync" }],
  },
};

const FAQ: QA[] = [
  {
    question: "Can Whisperer change my calendar?",
    answer: "No. Access is read-only. Whisperer reads your events to remind you and name recordings; it never creates, edits or deletes anything.",
  },
  {
    question: "Which calendars work?",
    answer: "Google Calendar and Microsoft Outlook (work, school and personal Microsoft accounts). You choose which calendars inside each account Whisperer watches.",
  },
  {
    question: "Where is my calendar data kept?",
    answer: "Events come straight from Google or Microsoft to your Mac. Sign-in tokens are stored in your Keychain, and nothing is sent to any other server.",
  },
  {
    question: "Does it record meetings without asking?",
    answer: "Only if you turn on automatic recording. By default you get a reminder card with Join & Record, Record or Dismiss, and nothing starts until you choose.",
  },
  {
    question: "Is calendar sync included?",
    answer: `Yes, in Whisperer Pro, a ${PRICE_PRO} one-time purchase with meetings, your own AI and the MCP server.`,
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[#0B0B19]">
      <SiteHeader />
      <main>
        <PageHero
          crumbs={[{ name: "Meeting notes", href: "/meetings" }, { name: "Calendar", href: "/calendar" }]}
          title="Record meetings straight from your calendar"
          lede="Connect Google Calendar or Outlook. Before each meeting Whisperer offers Join & Record, and the notes and speakers are named after the invite."
          secondary={{ href: "/meetings", label: "See meeting notes" }}
          facts={["Google and Outlook", "Read-only", "Tokens in your Keychain"]}
          visual={<CalendarPanel />}
        />

        <Section id="how">
          <SectionHead title="Four steps, set up once" />
          <div className="mt-12">
            <Steps
              items={[
                { title: "Sign in", body: "Connect Google or Microsoft from Workspace → Calendar. Access is read-only." },
                { title: "Pick calendars", body: "Choose which calendars count, so personal events stay quiet." },
                { title: "Get the card", body: "A couple of minutes before, or right at the start: Join & Record, Record or Dismiss." },
                { title: "Notes arrive named", body: "The recording takes the invite's title, and attendees become speaker names." },
              ]}
            />
          </div>
          <div className="mt-10 flex gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-4 py-2 text-[14px] text-white/85"><BrandIcon brand="google-calendar" size={18} /> Google Calendar</span>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-4 py-2 text-[14px] text-white/85"><BrandIcon brand="outlook" size={18} /> Outlook</span>
          </div>
        </Section>

        <Showcase
          id="reminder"
          title="One click to join and record"
          lede="A minute before the meeting, a card slides in. Join & Record opens the meeting link and starts recording together, so you never forget to take notes on an important call."
          video="calendar-loop"
          alt="A reminder card slides in over the Whisperer calendar; Join & Record starts the meeting and the recording"
        >
          <CheckList className="mx-auto grid max-w-[900px] gap-3 sm:grid-cols-3 sm:space-y-0" items={["Reminders for meetings with a link or other people", "Optional automatic recording for calendar meetings", "Works alongside call detection for unplanned calls"]} />
        </Showcase>

        <Section id="details">
          <SectionHead title="What Whisperer reads from an invite" />
          <div data-reveal="list" className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Tag, t: "The title", b: "Your recording is named after the meeting, not “Meeting 14”." },
              { icon: Users, t: "Who is invited", b: "Attendees are saved with the recording and offered as speaker names." },
              { icon: Video, t: "The meeting link", b: "Join & Record opens Zoom, Meet or Teams for you." },
              { icon: Bell, t: "The start time", b: "So the reminder arrives before the call, up to five minutes early." },
              { icon: Eye, t: "Nothing else", b: "No event is changed, and no calendar data leaves your Mac." },
              { icon: KeyRound, t: "Sign-in stays local", b: "Tokens are kept in the macOS Keychain." },
            ].map((c) => (
              <div key={c.t} className="border-t border-white/[0.12] pt-6">
                <c.icon className="h-5 w-5 text-rose-400" />
                <div className="mt-4 text-[16px] font-semibold text-white">{c.t}</div>
                <p className="mt-2 text-[14px] leading-[1.55] text-white/55">{c.b}</p>
              </div>
            ))}
          </div>
        </Section>

        <FAQSection items={FAQ} title="Calendar questions" />
        <CloseSection />
      </main>
      <SiteFooter />
    </div>
  );
}
