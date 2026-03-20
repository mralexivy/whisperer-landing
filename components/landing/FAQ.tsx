"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSchema } from "@/lib/structured-data";
import { FadeIn } from "@/components/ui/animated";
import { SectionGlow } from "@/components/ui/decorations";

const faqs = [
  {
    question: "Is it fully offline?",
    answer:
      "Yes. Transcription runs locally using whisper.cpp and local models. After the initial model download, no internet connection is required.",
  },
  {
    question: "Does it work in Slack/Gmail/VS Code?",
    answer:
      "Yes in most cases. Whisperer inserts into the focused field via Accessibility with a paste fallback.",
  },
  {
    question: "Why does it need Accessibility and Input Monitoring?",
    answer:
      "To detect the shortcut globally and insert text into other apps. macOS requires explicit permissions.",
  },
  {
    question: "Will it trigger accidentally when I use Fn for brightness/volume?",
    answer:
      "No. Whisperer filters Fn combos and cancels recording for common Fn+key actions.",
  },
  {
    question: "What's the difference between Base and Pro Pack?",
    answer:
      "Base is core dictation. Pro adds Code Mode, per-app profiles, personal dictionary, and pro insertion.",
  },
  {
    question: "Which model should I use?",
    answer:
      "Start with the recommended 'balanced' model. Use larger models for accuracy, smaller for speed.",
  },
  {
    question: "Do you support Intel Macs?",
    answer:
      "Supported but slower. Apple Silicon recommended.",
  },
  {
    question: "Refunds?",
    answer:
      "Refunds are handled through Apple according to their standard policies.",
  },
  {
    question: "Can Whisperer rewrite or format my dictation?",
    answer:
      "Yes. Whisperer includes an on-device AI with 10 built-in modes: Rewrite, Translate, Format, Summarize, Grammar, List Format, Coding, Email, Creative, and Custom. All processing is 100% offline.",
  },
  {
    question: "Can I transcribe audio or video files?",
    answer:
      "Yes. Drag an audio or video file into Whisperer to transcribe it offline using the same engine as live dictation. No upload, no cloud, no per-minute charges.",
  },
  {
    question: "How many languages does it support?",
    answer:
      "Over 100 languages with the Whisper backend. Parakeet supports 25 languages. You can set per-app language profiles and use AI translation between languages — all offline.",
  },
  {
    question: "Can I use different transcription engines?",
    answer:
      "Yes. Whisperer supports three backends: Whisper (Metal GPU, 99+ languages), Parakeet (Neural Engine, fastest), and Apple Speech (macOS Tahoe+). Hot-swap between them without restarting.",
  },
  {
    question: "Does it track my dictation history?",
    answer:
      "Yes. Every transcription is saved with full-text search, audio playback, re-transcribe, and usage statistics including words per minute, peak hours, and app usage charts.",
  },
  {
    question: "Can it remove filler words like 'um' and 'uh'?",
    answer:
      "Yes. Enable filler word removal in Settings to automatically strip um, uh, erm, er, ah, and hmm from your dictation. Smart matching ensures words like 'umbrella' are not affected.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />
      <SectionGlow position="bottom-center" color="purple" size="md" intensity={0.06} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-lg font-medium text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};
