import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictationDemo } from "@/components/product/DictationDemo";
import { EnginesMock } from "@/components/landing/DictationMockups";
import { PageShell, PageHero, PointGrid, Split, FactTable, Prose, Related, Close } from "@/components/landing/PageKit";
import { Section, H2, Lede, TextLink } from "@/components/site/Shell";
import { FAQSection } from "@/components/home/HomeFAQ";
import { FACTS, PRICE_BASE, PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Offline Dictation for Mac: Private Voice to Text on Your Mac | Whisperer" },
  description:
    "Offline dictation for Mac that never sends your voice to a server. Hold Fn, speak, paste with ⌘V. 97 languages, live preview, five on-device engines. $2.99 once, no account, no subscription.",
  keywords:
    "offline dictation mac, offline voice to text mac, private dictation mac, on-device dictation mac, dictation without internet mac, local speech to text mac",
  openGraph: {
    title: "Offline dictation for Mac",
    description: "Dictation that runs on your Mac, with Wi-Fi off. 97 languages, $2.99 once.",
    type: "website",
    url: "https://whispererapp.com/offline-dictation-mac",
    images: [{ url: "/assets/og/og-offline-dictation-mac.png", width: 1200, height: 630, alt: "Offline dictation for Mac" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-offline-dictation-mac.png"] },
  alternates: { canonical: "https://whispererapp.com/offline-dictation-mac" },
};

const FAQ = [
  {
    question: "What is the best offline dictation app for Mac?",
    answer:
      "It depends on what you need. Whisperer runs every speech engine on your Mac, covers 97 languages with live preview, learns your words and costs $2.99 once. If you also want meeting notes that stay on your Mac, Pro adds them for $14.99 once.",
  },
  {
    question: "Is Whisperer really offline?",
    answer:
      "Dictation is. Recording and transcription happen on your Mac, and once the speech model has downloaded you can dictate with Wi-Fi off. The only time text leaves your Mac is if you choose a cloud AI such as Claude or ChatGPT for meeting notes, and that is off unless you pick it.",
  },
  {
    question: "Can I use offline dictation in any app?",
    answer:
      "Yes. Dictate anywhere you can type. When you let go of Fn, the text is copied and you paste it with ⌘V into Slack, Mail, Notion, a browser or anything else.",
  },
  {
    question: "Does it work on Intel Macs?",
    answer: "No. Whisperer needs a Mac with Apple Silicon (M1 or later) and macOS 26 Tahoe.",
  },
  {
    question: "How much storage do the models take?",
    answer:
      "The default speech model, Whisperer V3, is about 547 MB. Other engines are optional downloads. The built-in AI model for meeting notes in Pro is about 3.2 GB, downloaded only if you use it.",
  },
  {
    question: "Is there a free offline dictation app for Mac?",
    answer:
      "Apple Dictation is free and built into macOS. Whisperer is $2.99 once and adds a live preview in 97 languages, a choice of four engines, a dictionary that learns your words, file transcription and a searchable history.",
  },
];

const WHY = [
  { title: "Nothing to leak", body: "Your voice is never uploaded, so there is nothing on a server to be breached, logged or used for training." },
  { title: "Works anywhere", body: "On a plane, on bad hotel Wi-Fi, in a building with no signal." },
  { title: "No account", body: "No sign-up, no analytics, no tracking. The App Store lists Data Not Collected." },
  { title: "Nothing metered", body: "No words-per-week cap and no minute limit. Dictate as much as you like." },
];

export default function OfflineDictationMacPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Offline Dictation for Mac", url: "/offline-dictation-mac" },
      ])} />

      <PageHero
        crumbs={[{ label: "Offline dictation for Mac" }]}
        title="Offline dictation for Mac"
        lede={`Hold Fn, speak, let go, paste with ⌘V. Whisperer turns your voice into text on your Mac in ${FACTS.languages} languages, and your voice never goes to a server.`}
        visual={<DictationDemo />}
      />

      <PointGrid
        title="Why dictate offline"
        lede="Most dictation apps send your audio to the cloud to transcribe it. Whisperer does the work on your Mac's own chip."
        items={WHY}
      />

      <Split
        title="Four engines on your Mac"
        lede={`Whisper is the default: the Whisperer V3 model on the Metal GPU, ${FACTS.languages} languages. Parakeet, Qwen3 ASR and WhisperKit are there if you want to try another.`}
        visual={<EnginesMock />}
      >
        <TextLink href="/features/offline-transcription">Compare the engines</TextLink>
      </Split>

      <Section id="vs">
        <div className="max-w-[760px]">
          <H2>Whisperer, Apple Dictation and cloud apps</H2>
          <Lede>Apple Dictation is free and good for short bursts. Cloud apps are polished but send your voice away. Here is where Whisperer sits.</Lede>
        </div>
        <div className="mt-12 overflow-x-auto rounded-[18px] ring-1 ring-white/[0.07]">
          <table className="w-full min-w-[640px] text-left text-[14.5px]">
            <thead className="bg-white/[0.03] text-[12.5px] text-white/45">
              <tr>
                <th className="px-5 py-3 font-medium" />
                <th className="px-5 py-3 font-medium text-white">Whisperer</th>
                <th className="px-5 py-3 font-medium">Apple Dictation</th>
                <th className="px-5 py-3 font-medium">Cloud dictation apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-white/65">
              {[
                ["Where speech is turned into text", "On your Mac", "On your Mac for many languages", "Their servers"],
                ["Works with Wi-Fi off", "Yes", "Partly", "No"],
                ["Languages", `${FACTS.languages} with Whisper`, "Apple's list", "Varies"],
                ["Choice of engine", "Five", "One", "One"],
                ["Learns your words", "Yes, from your corrections", "No", "Some do"],
                ["History and file transcription", "Yes", "No", "Some do"],
                ["Price", `${PRICE_BASE} once`, "Free", "Usually monthly"],
              ].map(([k, a, b, c]) => (
                <tr key={k}>
                  <td className="px-5 py-3.5 text-white/50">{k}</td>
                  <td className="px-5 py-3.5 text-white">{a}</td>
                  <td className="px-5 py-3.5">{b}</td>
                  <td className="px-5 py-3.5">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Split
        flip
        title="What you need"
        lede="A recent Mac and a few hundred megabytes of disk. The model downloads the first time you dictate."
        visual={
          <FactTable
            rows={[
              ["Mac", `${FACTS.chip} (M1 or later)`],
              ["macOS", FACTS.minMacOS],
              ["Default model", "Whisperer V3, about 547 MB"],
              ["Permissions", "Microphone"],
              ["Account", "None"],
              ["Price", `${PRICE_BASE} once`],
            ]}
          />
        }
      />

      <Prose title="Meetings can stay offline too">
        <p>
          Whisperer Pro ({PRICE_PRO} once) adds meeting notes. Calls in Zoom, Teams and Meet are recorded and transcribed on
          your Mac, speakers are told apart on your Mac, and the built-in {FACTS.localModel} model can write the summary and
          action items without a connection.
        </p>
        <p>
          If you would rather use Claude or ChatGPT for notes, you can. Only the text transcript goes to them, never the
          audio, and any single meeting can be kept local. <Link href="/meetings">See meeting notes</Link>.
        </p>
      </Prose>

      <FAQSection items={FAQ} title="Offline dictation questions" />
      <Related
        links={[
          { title: "Offline engines", body: "Whisper, Parakeet, Qwen3 ASR and more.", href: "/features/offline-transcription" },
          { title: "Live preview", body: "Words as you speak.", href: "/features/live-preview" },
          { title: "Speech to text for Mac", body: "Dictation, files and meetings.", href: "/speech-to-text-mac" },
          { title: "Whisperer vs Apple Dictation", href: "/compare/vs-apple-dictation" },
        ]}
      />
      <Close title="Dictate with the Wi-Fi off" />
    </PageShell>
  );
}
