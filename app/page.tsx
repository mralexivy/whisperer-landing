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
  title: { absolute: "Whisperer: AI Meeting Notes and Dictation for Mac, No Subscription" },
  description:
    "AI meeting notes for Mac that run on your Mac. Detects Zoom, Teams and Meet calls, names every speaker, and writes notes with Claude, ChatGPT, Gemini or a built-in offline model. MCP server and dictation included. One-time purchase.",
  alternates: { canonical: "https://whispererapp.com/" },
  openGraph: {
    title: "Whisperer: AI meeting notes for Mac, without the subscription",
    description: "Notes for every call, written by the AI you already pay for or by one that runs on your Mac. Pay once.",
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
        <DetectionSection />
        <NotesSection />
        <CalendarSection />
        <OwnAISection />
        <MCPSection />
        <DictationSection />
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
