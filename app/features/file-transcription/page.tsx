import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { FileMock } from "@/components/landing/DictationMockups";
import { PageHero, PointGrid, Split, FactTable, Related, Close } from "@/components/landing/PageKit";
import { TextLink } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE } from "@/lib/site";

export const metadata: Metadata = {
  title: "File Transcription: Transcribe Audio and Video Files Offline on Mac",
  description:
    "Drop an MP3, M4A, WAV, MP4 or MOV into Whisperer and get the transcript, offline on your Mac. 97 languages, no per-minute fees, no upload. Part of the $2.99 app.",
  keywords:
    "transcribe audio file mac, transcribe video offline mac, mp3 to text mac, m4a transcription mac, offline audio transcription, transcribe interview mac",
  openGraph: {
    title: "Transcribe audio and video files offline",
    description: "Drop in a file, get the text. Nothing uploaded, nothing metered.",
    type: "website",
    url: "https://whispererapp.com/features/file-transcription",
    images: [{ url: "/assets/og/og-feature-file-transcription.png", width: 1200, height: 630, alt: "Whisperer file transcription" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-file-transcription.png"] },
  alternates: { canonical: "https://whispererapp.com/features/file-transcription" },
};

const FAQ = [
  {
    question: "Which file formats work?",
    answer:
      "Audio: WAV, MP3, M4A, AAC, AIFF, FLAC, Opus, OGG and CAF. Video: MP4, MOV and M4V. Whisperer reads the audio track of a video.",
  },
  {
    question: "Are there per-minute charges?",
    answer: "No. File transcription is part of the $2.99 app and runs on your Mac, so a ten-hour lecture costs the same as a ten-second clip.",
  },
  {
    question: "How long does it take?",
    answer:
      "It depends on the length of the file, the engine and your chip. On Apple Silicon a long recording usually finishes well before it would take to play it back. You can keep working while it runs.",
  },
  {
    question: "Is the file uploaded anywhere?",
    answer: "No. The file is read and transcribed on your Mac and the transcript stays on your Mac.",
  },
  {
    question: "Should I use this for meetings?",
    answer:
      "For a call you are about to have, use meeting notes in Pro instead: it records both sides, names the speakers and writes the summary. File transcription is for recordings you already have.",
  },
];

const POINTS = [
  { title: "Drag and drop", body: "Drop a file on the window or pick one from Finder." },
  { title: "Copy or export", body: "Copy the text, or export it as TXT or JSON." },
  { title: `${FACTS.languages} languages`, body: "Detected from the recording, or set it yourself." },
  { title: "Same engines as dictation", body: "Whisper by default. Try another engine on a hard recording." },
  { title: "Your dictionary applies", body: "Names and terms you taught Whisperer are spelled right here too." },
  { title: "No upload, no meter", body: "The file never leaves your Mac and there is no minute limit." },
];

export default function FileTranscriptionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "File Transcription", url: "/features/file-transcription" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: "File transcription" }]}
        title="Turn recordings into text, on your Mac"
        lede="An interview, a lecture, a voice memo from your phone. Drop the file into Whisperer and get the transcript without uploading it anywhere or paying by the minute."
        visual={<FileMock />}
      />

      <PointGrid title="Built for the recordings you already have" items={POINTS} />

      <Split
        title="What it reads"
        lede={`Most audio and video files from a phone, a recorder or a video call export. Included in the ${PRICE_BASE} app.`}
        visual={
          <FactTable
            rows={[
              ["Audio", "WAV, MP3, M4A, AAC, AIFF, FLAC, Opus, OGG, CAF"],
              ["Video", "MP4, MOV, M4V"],
              ["Languages", `${FACTS.languages}, detected automatically`],
              ["Output", "Copy, or export as TXT or JSON"],
              ["Length limit", "None"],
              ["Internet", "Not needed"],
            ]}
          />
        }
      >
        <TextLink href="/meetings">Recording a live call? See meeting notes</TextLink>
      </Split>

      <FAQSection items={FAQ} title="File transcription questions" />
      <Related
        links={[
          { title: "Offline engines", body: "Pick the engine for a hard recording.", href: "/features/offline-transcription" },
          { title: "History", body: "Every transcript in one place.", href: "/features/transcription-history" },
          { title: "Meeting notes", body: "Live calls with named speakers.", href: "/meetings" },
          { title: "All dictation features", href: "/features" },
        ]}
      />
      <Close title="Drop in a file, get the text" />
    </>
  );
}
