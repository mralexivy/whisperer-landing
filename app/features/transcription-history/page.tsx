import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { HistoryMock } from "@/components/landing/DictationMockups";
import { PageHero, PointGrid, Split, FactTable, Related, Close } from "@/components/landing/PageKit";
import { FAQSection } from "@/components/home/HomeFAQ";

export const metadata: Metadata = {
  title: "Transcription History and Statistics: Every Dictation Saved",
  description:
    "Whisperer keeps every dictation on your Mac with its audio. Search it, play it back, edit it, re-transcribe it with another engine, and see your words per minute, apps, languages and peak hours.",
  keywords:
    "dictation history mac, transcription history, search dictations, dictation statistics, words per minute dictation, re-transcribe audio mac",
  openGraph: {
    title: "Every dictation, saved and searchable",
    description: "History with audio, search and re-transcribe, plus statistics on how you dictate.",
    type: "website",
    url: "https://whispererapp.com/features/transcription-history",
    images: [{ url: "/assets/og/og-feature-transcription-history.png", width: 1200, height: 630, alt: "Whisperer history" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-transcription-history.png"] },
  alternates: { canonical: "https://whispererapp.com/features/transcription-history" },
};

const FAQ = [
  {
    question: "Does Whisperer save all my transcriptions?",
    answer:
      "Yes, every dictation is saved on your Mac with its text, the app you were in, the language and the audio. Nothing is sent to a server. You can delete single entries, auto-delete old recordings, or clear everything in Settings.",
  },
  {
    question: "Can I search my transcription history?",
    answer: "Yes. Type a word in the search field in Workspace → Transcriptions and matching dictations show up as you type.",
  },
  {
    question: "Can I re-transcribe old recordings?",
    answer:
      "Yes. Because the audio is kept, you can run an old dictation through a different engine or model. If you prefer the first version, Revert to Original brings it back.",
  },
  {
    question: "What statistics does Whisperer track?",
    answer:
      "Words dictated, words per minute, time saved compared with typing, the apps you dictate into, the languages you use, your peak hours and daily streaks. All of it is worked out on your Mac.",
  },
  {
    question: "Does editing a dictation teach Whisperer anything?",
    answer:
      "Yes. When you fix a misheard word in History, Whisperer can learn the right spelling for your dictionary. You will see a Learned card with Undo.",
  },
];

const POINTS = [
  { title: "Search everything", body: "Find the message you dictated last Thursday by one word in it." },
  { title: "Play the audio back", body: "Hear what you actually said next to what was written." },
  { title: "Edit, and it learns", body: "Fix a word in place. The dictionary picks up the correction." },
  { title: "Re-transcribe", body: "Run an old recording through another engine. Revert if you liked it better before." },
  { title: "Notes on an entry", body: "Add a line of context to a dictation you want to find later." },
  { title: "Your rules for keeping audio", body: "Keep recordings, or auto-delete old ones to save space." },
];

export default function TranscriptionHistoryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "Transcription History", url: "/features/transcription-history" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: "History and statistics" }]}
        title="Every dictation, saved on your Mac"
        lede="Whisperer keeps what you said with its audio, the app and the language. Search it, play it, fix it, or run it through another engine. Then see how much typing you skipped."
        visual={<HistoryMock />}
      />

      <PointGrid title="A history you will actually use" items={POINTS} />

      <Split
        title="Statistics about how you talk"
        lede="A Statistics page in Workspace shows how much you dictate and where. It is worked out on your Mac from your own history."
        visual={
          <FactTable
            rows={[
              ["Words", "Today, this week, this month"],
              ["Speed", "Words per minute"],
              ["Time saved", "Compared with typing"],
              ["Apps", "Where you dictate most"],
              ["Languages", "Which ones you use"],
              ["Peak hours and streaks", "When you dictate, and how many days in a row"],
            ]}
          />
        }
      />

      <FAQSection items={FAQ} title="History questions" />
      <Related
        links={[
          { title: "Personal dictionary", body: "Corrections that stick.", href: "/features/personal-dictionary" },
          { title: "File transcription", body: "Recordings you already have.", href: "/features/file-transcription" },
          { title: "MCP server", body: "Let Claude search your dictations.", href: "/mcp" },
          { title: "All dictation features", href: "/features" },
        ]}
      />
      <Close title="Never lose a thing you said" />
    </>
  );
}
