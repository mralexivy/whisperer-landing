import type { Metadata } from "next";
import { Languages } from "lucide-react";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { LanguagesMock } from "@/components/landing/DictationMockups";
import { PageHero, PointGrid, Split, FactTable, Related, Close } from "@/components/landing/PageKit";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "97 Languages: Multilingual Offline Dictation for Mac",
  description:
    "Dictate in 97 languages on your Mac. Whisperer detects the language as you speak, shows a live preview in that language and runs offline. Parakeet, Qwen3 ASR and Apple Speech cover more options.",
  keywords:
    "multilingual dictation mac, dictation in multiple languages, offline dictation spanish mac, voice to text other languages mac, whisper languages, auto language detection dictation",
  openGraph: {
    title: "Dictation in 97 languages, detected as you speak",
    description: "Speak any of 97 languages and Whisperer writes it, offline on your Mac.",
    type: "website",
    url: "https://whispererapp.com/features/multilingual",
    images: [{ url: "/assets/og/og-feature-multilingual.png", width: 1200, height: 630, alt: "Whisperer multilingual dictation" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-multilingual.png"] },
  alternates: { canonical: "https://whispererapp.com/features/multilingual" },
};

const FAQ = [
  {
    question: "How many languages does Whisperer support?",
    answer:
      "97 languages with the default Whisper engine. Parakeet covers 25 languages and Qwen3 ASR covers 31, and Apple Speech adds the languages macOS 26 supports.",
  },
  {
    question: "Do I have to pick a language before I speak?",
    answer:
      "No. Whisperer detects the language as you talk and shows it in the preview overlay. If you only ever speak one language you can choose it in Settings, which makes each dictation a little faster.",
  },
  {
    question: "Can I switch languages between dictations?",
    answer:
      "Yes. Each dictation is detected on its own, so you can write an English Slack message and then a Spanish email without touching a setting.",
  },
  {
    question: "Do meeting notes work in other languages?",
    answer:
      "Yes, with Pro. The meeting is transcribed in the language spoken, and the notes are written in the language of the meeting.",
  },
  {
    question: "Does Whisperer handle right-to-left languages?",
    answer: "Yes. Hebrew, Arabic and Persian text is laid out right to left in the preview and in your history.",
  },
];

const POINTS = [
  { title: `${FACTS.languages} languages`, body: "From English, Spanish and Mandarin to Welsh, Swahili and Icelandic, with the Whisper engine." },
  { title: "Detected as you speak", body: "No menu before each message. The overlay shows the language it heard." },
  { title: "Or set one", body: "Speak one language all day? Choose it in Settings and skip detection." },
  { title: "More engines, more choice", body: "Parakeet (25 languages) and Qwen3 ASR (31) are there when you want a second opinion." },
  { title: "Meetings too", body: "With Pro, a call in French gets a French transcript and French notes." },
  { title: "Offline in every language", body: "Language models live on your Mac. No connection needed to switch." },
];

export default function MultilingualPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "Multilingual", url: "/features/multilingual" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: `${FACTS.languages} languages` }]}
        title={`Dictate in ${FACTS.languages} languages`}
        lede="Speak the language you think in. Whisperer works out which one it is while you talk, shows the preview in it, and writes the text without anything leaving your Mac."
        visual={<LanguagesMock />}
      />

      <PointGrid title="Talk the way you talk" items={POINTS} />

      <Split
        title="Whisper by default, others when they suit you"
        lede="Whisper covers the most ground and is the default. The other engines are a click away in Settings if one handles your language or accent better."
        visual={
          <FactTable
            rows={[
              ["Whisper (Whisperer V3)", `${FACTS.languages} languages`],
              ["Parakeet", "25 languages"],
              ["Qwen3 ASR", "31 languages"],
              ["WhisperKit", "Whisper models on Core ML"],
              ["Apple Speech", "Languages built into macOS 26"],
            ]}
          />
        }
      />

      <FAQSection items={FAQ} title="Language questions" />
      <Related
        links={[
          { title: "Live preview", body: "Words in your language as you speak.", href: "/features/live-preview" },
          { title: "Offline engines", body: "How the five engines differ.", href: "/features/offline-transcription" },
          { title: "Meeting notes", body: "Notes in the language of the call.", href: "/meetings" },
          { title: "All dictation features", href: "/features" },
        ]}
      />
      <Close title="Speak your own language" />
    </>
  );
}
