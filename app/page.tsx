import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/Shell";
import { HomeHero } from "@/components/home/Hero";
import {
  DetectionSection, NotesSection, CalendarSection, OwnAISection, MCPSection, DictationSection,
  PrivacyBand, PricingSection, TeamsBand, CloseSection, CostFootnote,
} from "@/components/home/Sections";
import { FAQSection } from "@/components/home/HomeFAQ";
import { TwoModesSection } from "@/components/home/TwoModes";

export const metadata: Metadata = {
  title: { absolute: "Whisperer: Dictation and AI Meeting Notes for Mac, No Subscription" },
  description:
    "Dictation and AI meeting notes for Mac in one app. Hold Fn to turn speech into text in any app, in 97 languages. Record Zoom, Teams and Meet calls with every speaker named and notes by your own AI. Runs on your Mac, paid once.",
  alternates: { canonical: "https://whispererapp.com/" },
  openGraph: {
    title: "Whisperer: dictation and meeting notes for Mac, in one app",
    description: "Your voice as text in any app, and notes from every call. Runs on your Mac. Pay once.",
    url: "https://whispererapp.com/",
    images: [{ url: "/assets/og/og-home.png", width: 1200, height: 630, alt: "Whisperer meeting notes on a Mac" }],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B19] text-foreground">
      <SiteHeader />
      <main>
        <HomeHero />
        <TwoModesSection />
        <DictationSection />
        <DetectionSection />
        <NotesSection />
        <CalendarSection />
        <OwnAISection />
        <MCPSection />
        <PrivacyBand />
        <PricingSection />
        <TeamsBand />
        <FAQSection />
        <CloseSection />
        <CostFootnote />
      </main>
      <SiteFooter />
    </div>
  );
}
