import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { EnginesMock, ENGINES } from "@/components/landing/DictationMockups";
import { PageHero, PointGrid, Prose, Related, Close } from "@/components/landing/PageKit";
import { Section, H2, Lede } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offline Transcription Engines: Whisper, Parakeet, Qwen3 ASR, WhisperKit",
  description:
    "Four speech engines that run on your Mac: Whisper on the Metal GPU (97 languages), Parakeet on the Neural Engine, Qwen3 ASR and WhisperKit. No internet, no per-minute fees.",
  keywords:
    "offline transcription mac, whisper.cpp mac, parakeet mac, offline speech recognition mac, local speech to text mac, whisperkit, apple speech",
  openGraph: {
    title: "Five offline speech engines on your Mac",
    description: "Whisper, Parakeet, Qwen3 ASR and WhisperKit. All local.",
    type: "website",
    url: "https://whispererapp.com/features/offline-transcription",
    images: [{ url: "/assets/og/og-feature-offline-transcription.png", width: 1200, height: 630, alt: "Whisperer offline engines" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-offline-transcription.png"] },
  alternates: { canonical: "https://whispererapp.com/features/offline-transcription" },
};

const FAQ = [
  {
    question: "Which engine should I pick?",
    answer:
      "Start with the default, Whisper with the Whisperer V3 model. It covers 97 languages and is the most accurate all-rounder. Try Parakeet if you want the GPU left free, Qwen3 ASR for a second opinion on a tricky language, and WhisperKit if you prefer Core ML on the Neural Engine.",
  },
  {
    question: "How big is the default model?",
    answer:
      "Whisperer V3 is Whisper Large V3 Turbo, quantized to about 547 MB. It downloads the first time you dictate and then stays on your Mac.",
  },
  {
    question: "Does any engine send audio to a server?",
    answer: "No. All five run on your Mac. Transcription works with Wi-Fi off once a model is downloaded.",
  },
  {
    question: "Can I switch engines later?",
    answer: "Yes, any time in Settings. Your history keeps the audio, so you can re-transcribe an old recording with a different engine.",
  },
  {
    question: "Do I need an Intel or Apple Silicon Mac?",
    answer: "Apple Silicon (M1 or later) with macOS 26 Tahoe. The engines use the Metal GPU and the Neural Engine on those chips.",
  },
];

const POINTS = [
  { title: "Works with Wi-Fi off", body: "On a plane, on hotel Wi-Fi, in a building with no signal." },
  { title: "Models stay on your Mac", body: "Downloaded once into your Library folder, then used from disk." },
  { title: "Metal GPU", body: "Whisper runs through whisper.cpp on the GPU of your Apple Silicon chip." },
  { title: "Neural Engine", body: "Parakeet and WhisperKit run on the Neural Engine." },
  { title: "No per-minute fees", body: "Dictate for an hour or a year. Nothing is metered." },
  { title: "No account", body: "No sign-up and no analytics. The App Store lists Data Not Collected." },
];

export default function OfflineTranscriptionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "Offline Transcription", url: "/features/offline-transcription" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: "Offline engines" }]}
        title="Four speech engines, all on your Mac"
        lede={`Whisperer ships with Whisper, Parakeet, Qwen3 ASR and WhisperKit. The default writes ${FACTS.languages} languages on the GPU, and none of them needs the internet.`}
        visual={<EnginesMock />}
      />

      <Section id="engines">
        <div className="max-w-[760px]">
          <H2>What each one is for</H2>
          <Lede>The default is picked for you. The rest are there when you want to try something else.</Lede>
        </div>
        <div className="mt-12 overflow-x-auto rounded-[18px] ring-1 ring-white/[0.07]">
          <table className="w-full min-w-[640px] text-left text-[14.5px]">
            <thead className="bg-white/[0.03] text-[12.5px] text-white/45">
              <tr>
                <th className="px-5 py-3 font-medium">Engine</th>
                <th className="px-5 py-3 font-medium">Model</th>
                <th className="px-5 py-3 font-medium">Languages</th>
                <th className="px-5 py-3 font-medium">Runs on</th>
                <th className="px-5 py-3 font-medium">Good to know</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {ENGINES.map((e) => (
                <tr key={e.name}>
                  <td className="px-5 py-4 font-semibold text-white">
                    {e.name}
                    {e.active && <span className="ml-2 rounded-full bg-[#5B6CF7]/25 px-2 py-0.5 text-[11px] font-medium text-[#C7CDFF]">Default</span>}
                  </td>
                  <td className="px-5 py-4 text-white/70">{e.model}</td>
                  <td className="px-5 py-4 text-white/70">{e.langs}</td>
                  <td className="px-5 py-4 text-white/70">{e.hw}</td>
                  <td className="px-5 py-4 text-white/55">{e.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <PointGrid title="Nothing to sign into, nothing metered" items={POINTS} />

      <Prose title="What offline costs you">
        <p>
          A model on your Mac takes disk space and a short download the first time. The default is about 547 MB. Cloud
          dictation apps skip that step, and in return every word you say goes to their servers.
        </p>
        <p>
          Speed depends on your chip. An M1 MacBook Air handles everyday dictation fine; a newer Pro chip finishes long
          recordings and file transcriptions faster.
        </p>
      </Prose>

      <FAQSection items={FAQ} title="Engine questions" />
      <Related
        links={[
          { title: "Live preview", body: "Words while you speak.", href: "/features/live-preview" },
          { title: `${FACTS.languages} languages`, body: "Language coverage by engine.", href: "/features/multilingual" },
          { title: "File transcription", body: "The same engines on audio files.", href: "/features/file-transcription" },
          { title: "Offline dictation for Mac", href: "/offline-dictation-mac" },
        ]}
      />
      <Close title="Dictate with the Wi-Fi off" />
    </>
  );
}
