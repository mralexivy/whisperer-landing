import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictationDemo } from "@/components/product/DictationDemo";
import { CallDetectedCard, IslandBar } from "@/components/product/Island";
import { FileMock } from "@/components/landing/DictationMockups";
import { PageShell, PageHero, Split, FactTable, Bullets, Related, Close } from "@/components/landing/PageKit";
import { TextLink } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Speech to Text for Mac: Dictation, Files and Meetings, Offline | Whisperer" },
  description:
    "Speech to text for Mac that runs on your Mac. Dictate into any app and paste with ⌘V, transcribe audio and video files, and with Pro get meeting transcripts with named speakers. 97 languages. $2.99 once.",
  keywords:
    "speech to text mac, voice to text mac, speech recognition mac, transcribe speech mac, speech to text app mac, offline speech to text mac",
  openGraph: {
    title: "Speech to text for Mac",
    description: "Dictation, file transcription and meeting transcripts, on your Mac. 97 languages, $2.99 once.",
    type: "website",
    url: "https://whispererapp.com/speech-to-text-mac",
    images: [{ url: "/assets/og/og-speech-to-text-mac.png", width: 1200, height: 630, alt: "Speech to text for Mac" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-speech-to-text-mac.png"] },
  alternates: { canonical: "https://whispererapp.com/speech-to-text-mac" },
};

const FAQ = [
  {
    question: "What is the best speech to text app for Mac?",
    answer:
      "For dictating into other apps, files and meetings in one place, Whisperer covers all three on your Mac: hold-to-talk dictation with a live preview, audio and video file transcription, and with Pro, meeting transcripts with named speakers and AI notes. It costs $2.99 once, plus $14.99 once for Pro.",
  },
  {
    question: "Is speech to text available offline on Mac?",
    answer:
      "Yes. Whisperer's four engines (Whisper, Parakeet, Qwen3 ASR and WhisperKit) all run on your Mac. Once the model is downloaded, speech to text works without a connection.",
  },
  {
    question: "How accurate is speech to text on Mac?",
    answer:
      "With Whisperer's default model, Whisper Large V3 Turbo, everyday speech comes out close to what you said, with punctuation. Accuracy drops with heavy background noise or very fast speech. Names and jargon improve as the dictionary learns your words.",
  },
  {
    question: "Does it work in any app?",
    answer:
      "Yes. Dictate wherever you are typing. When you let go of Fn the text is copied, and you paste it with ⌘V into Slack, Mail, Notion, VS Code, a browser or anything else.",
  },
  {
    question: "How much does speech to text cost on Mac?",
    answer:
      "Apple Dictation is free. Whisperer is $2.99 once for dictation and file transcription, and Pro is $14.99 once for meetings, calendar, your own AI and MCP. There is no subscription and no minute limit.",
  },
  {
    question: "Does speech to text work with multiple languages?",
    answer: "Yes. Whisperer understands 97 languages with Whisper and detects which one you are speaking as you talk.",
  },
];

export default function SpeechToTextMacPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Speech to Text for Mac", url: "/speech-to-text-mac" },
      ])} />

      <PageHero
        crumbs={[{ label: "Speech to text for Mac" }]}
        title="Speech to text for Mac"
        lede={`Talk instead of type in any app, turn recordings into text, and get a transcript of every meeting. Whisperer does it on your Mac in ${FACTS.languages} languages.`}
        visual={<DictationDemo />}
      />

      <Split
        title="Dictate into any app"
        lede="Hold Fn and speak. Words appear while you talk. Let go and the text is copied, ready to paste with ⌘V wherever your cursor is."
        visual={
          <FactTable
            rows={[
              ["Start", "Hold Fn, or your own shortcut"],
              ["While you talk", "Live preview in your language"],
              ["When you let go", "Cleaned by Fast Polish, copied"],
              ["Paste", "⌘V, in any app"],
              ["Languages", `${FACTS.languages}, detected automatically`],
              ["Price", `${PRICE_BASE} once`],
            ]}
          />
        }
      >
        <TextLink href="/features">See dictation features</TextLink>
      </Split>

      <Split
        flip
        title="Turn recordings into text"
        lede="Drop in an MP3, M4A, WAV, MP4 or MOV and get the transcript. Nothing is uploaded and nothing is billed by the minute."
        visual={<FileMock />}
      >
        <TextLink href="/features/file-transcription">See file transcription</TextLink>
      </Split>

      <Split
        title="Transcripts of every meeting, with Pro"
        lede={`Whisperer spots a Zoom, Teams or Meet call, records both sides and transcribes it on your Mac with each speaker named. Then it writes the summary, decisions and action items. Pro is ${PRICE_PRO} once.`}
        visual={
          <div className="relative flex h-[380px] flex-col items-center justify-center gap-8 rounded-[24px] bg-[radial-gradient(120%_90%_at_70%_20%,#1B1D4A_0%,#0D0D20_60%)] ring-1 ring-white/[0.07] p-6">
            <IslandBar time="12:48" />
            <CallDetectedCard title="Mobile launch review · on your calendar" />
          </div>
        }
      >
        <Bullets
          items={[
            "Detects Zoom, Microsoft Teams, Google Meet, Slack huddles, Webex and FaceTime.",
            "Speakers told apart on your Mac and named from the calendar invite.",
            "Notes by the built-in model offline, or by your Claude, ChatGPT or Gemini plan.",
            "No bot joins the call.",
          ]}
        />
        <TextLink href="/meetings" className="mt-6">See meeting notes</TextLink>
      </Split>

      <FAQSection items={FAQ} title="Speech to text questions" />
      <Related
        links={[
          { title: "Offline dictation for Mac", body: "Why on-device matters.", href: "/offline-dictation-mac" },
          { title: "Offline engines", body: "Four engines compared.", href: "/features/offline-transcription" },
          { title: `${FACTS.languages} languages`, body: "Detected as you speak.", href: "/features/multilingual" },
          { title: "Pricing", body: `${PRICE_BASE} and ${PRICE_PRO}, both once.`, href: "/pricing" },
        ]}
      />
      <Close title="Talk to your Mac, get text back" />
    </PageShell>
  );
}
