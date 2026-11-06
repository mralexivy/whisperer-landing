import type { Metadata } from "next";
import { Languages } from "lucide-react";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictationDemo } from "@/components/product/DictationDemo";
import { PageHero, PointGrid, Split, FactTable, Related, Close } from "@/components/landing/PageKit";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Live Preview: See Words as You Speak, in Your Language",
  description:
    "Whisperer shows your words while you are still talking, in the language you speak, detected automatically across 97 languages. Runs offline on your Mac with the same Whisper model that writes the final text.",
  keywords:
    "real-time dictation preview mac, streaming transcription mac, live voice to text, real-time speech to text, dictation preview, live transcription overlay",
  openGraph: {
    title: "Live preview: see your words as you speak",
    description: "Words stream in while you talk, in your language, detected as you speak. Offline on your Mac.",
    type: "website",
    url: "https://whispererapp.com/features/live-preview",
    images: [{ url: "/assets/og/og-feature-live-preview.png", width: 1200, height: 630, alt: "Whisperer live preview" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-live-preview.png"] },
  alternates: { canonical: "https://whispererapp.com/features/live-preview" },
};

const FAQ = [
  {
    question: "What is live preview?",
    answer:
      "A small overlay that shows your words while you are still speaking. When you let go of Fn, Whisperer finishes the text, copies it, and you paste it with ⌘V.",
  },
  {
    question: "Does live preview work in languages other than English?",
    answer:
      "Yes. The preview is written in the language you speak. Whisperer detects the language from the first few seconds and shows it in the overlay, across the 97 languages the Whisper engine understands.",
  },
  {
    question: "Is the final text different from the preview?",
    answer:
      "Sometimes slightly. The preview is the model's running guess. When you stop, Whisperer runs a final pass over the whole recording and applies Fast Polish and your dictionary, so names and punctuation can improve.",
  },
  {
    question: "Does live preview send audio anywhere?",
    answer: "No. The preview and the final text both come from the speech model on your Mac. It works with Wi-Fi off.",
  },
  {
    question: "Can I turn live preview off?",
    answer: "Yes. Switch off Live Transcription Preview in Settings. Dictation still works; you just see the text when you let go.",
  },
];

const POINTS = [
  { title: "Words as you talk", body: "You see the sentence forming, so you know it heard you before you let go." },
  { title: "In your language", body: `Speak Spanish and the preview is Spanish. The language is detected as you speak, across ${FACTS.languages} languages.` },
  { title: "The language shows in the overlay", body: "A small label tells you which language Whisperer locked onto, so a wrong guess is obvious." },
  { title: "A clean final pass", body: "When you release, the whole recording is transcribed once more and tidied by Fast Polish." },
  { title: "One model, no second engine", body: "The preview comes from the same Whisper model that writes the final text, so there is nothing extra loaded." },
  { title: "On your Mac", body: "Audio stays on the machine. No server sees a word." },
];

export default function LivePreviewPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "Live Preview", url: "/features/live-preview" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: "Live preview" }]}
        title="See your words while you are still talking"
        lede="Hold Fn and start speaking. Your words stream into a small overlay in the language you are using, so you can tell it heard you right before you let go."
        visual={<DictationDemo />}
      />

      <PointGrid title="A preview you can trust" items={POINTS} />

      <Split
        title="It works out the language for you"
        lede="There is no language menu to open before you talk. Whisperer listens to the first few seconds, settles on a language, and keeps going. Switch to German for the next message and it follows."
        visual={
          <FactTable
            rows={[
              ["Languages", `${FACTS.languages} with the Whisper engine`],
              ["Detection", "Automatic, while you speak"],
              ["Default model", "Whisperer V3 (Large V3 Turbo)"],
              ["Runs on", "Metal GPU, on your Mac"],
              ["After you let go", "Final pass, Fast Polish, copied for ⌘V"],
              ["Internet", "Not needed"],
            ]}
          />
        }
      />

      <FAQSection items={FAQ} title="Live preview questions" />

      <Related
        links={[
          { title: `${FACTS.languages} languages`, body: "Which languages, and how detection works.", href: "/features/multilingual" },
          { title: "Offline engines", body: "Whisper, Parakeet, Qwen3 ASR and more.", href: "/features/offline-transcription" },
          { title: "Personal dictionary", body: "Names and terms spelled your way.", href: "/features/personal-dictionary" },
          { title: "All dictation features", href: "/features" },
        ]}
      />
      <Close title="Watch it write while you talk" />
    </>
  );
}
