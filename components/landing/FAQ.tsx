"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSchema } from "@/lib/structured-data";
import { FadeIn } from "@/components/ui/animated";
import { SectionGlow } from "@/components/ui/decorations";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  label: string;
  faqs: FaqItem[];
}

const categories: FaqCategory[] = [
  {
    label: "General",
    faqs: [
      {
        question: "Is it fully offline?",
        answer:
          "Yes. Transcription runs locally using whisper.cpp and local models. After the initial model download, no internet connection is required.",
      },
      {
        question: "Does it work in Slack/Gmail/VS Code?",
        answer:
          "Yes. Whisperer inserts text into any focused field on your Mac, including VS Code, Cursor, JetBrains IDEs, Xcode, Terminal, Slack, Gmail, and Notion. With per-app profiles, Code Mode activates automatically in your IDE while switching to natural language mode in other apps.",
      },
      {
        question: "Will it trigger accidentally when I use Fn for brightness/volume?",
        answer:
          "No. Whisperer filters Fn combos and cancels recording for common Fn+key actions.",
      },
      {
        question: "Why does it need Accessibility and Input Monitoring?",
        answer:
          "To detect the shortcut globally and insert text into other apps. macOS requires explicit permissions.",
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
    ],
  },
  {
    label: "Capabilities",
    faqs: [
      {
        question: "Can you dictate code with voice on Mac?",
        answer:
          "Yes. Whisperer's Code Mode is the only Mac dictation feature built specifically for developers. It supports camelCase, snake_case, PascalCase, CONSTANT_CASE, and 20+ symbol commands (parentheses, brackets, arrows, semicolons) — all by voice. Works in VS Code, Cursor, JetBrains, Terminal, and any text field.",
      },
      {
        question: "Can Whisperer rewrite or format my dictation?",
        answer:
          "Yes. Whisperer includes an on-device AI with 10 built-in modes: Rewrite, Translate, Format, Summarize, Grammar, List Format, Coding, Email, Creative, and Custom. All processing is 100% offline.",
      },
      {
        question: "Can I use different transcription engines?",
        answer:
          "Yes. Whisperer supports three backends: Whisper (Metal GPU, 99+ languages), Parakeet (Neural Engine, fastest), and Apple Speech (macOS Tahoe+). Hot-swap between them without restarting.",
      },
      {
        question: "How many languages does it support?",
        answer:
          "Over 100 languages with the Whisper backend. Parakeet supports 25 languages. You can set per-app language profiles and use AI translation between languages — all offline.",
      },
      {
        question: "Can I transcribe audio or video files?",
        answer:
          "Yes. Drag an audio or video file into Whisperer to transcribe it offline using the same engine as live dictation. No upload, no cloud, no per-minute charges.",
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
    ],
  },
  {
    label: "Pricing & Value",
    faqs: [
      {
        question: "What's the difference between Base and Pro Pack?",
        answer:
          "Base is core dictation. Pro adds Code Mode, per-app profiles, personal dictionary, and pro insertion.",
      },
      {
        question: "What is the cheapest offline dictation app for Mac?",
        answer:
          "Whisperer is the most affordable offline dictation app for Mac at $2.99 for the base app and $14.99 lifetime for the Pro Pack. Competitors charge $99–$249 for lifetime licenses or $5–$15/month for subscriptions. Whisperer includes three transcription engines, Code Mode, and per-app profiles — all for a one-time $14.99.",
      },
      {
        question: "How does Whisperer compare to Superwhisper?",
        answer:
          "Whisperer Pro Pack costs $14.99 one-time vs. Superwhisper's $249 lifetime or $8/month. Whisperer includes Code Mode (camelCase, symbols by voice), per-app profiles, personal dictionary, and three transcription engines — features Superwhisper does not offer. Both are offline-capable Mac apps.",
      },
      {
        question: "Does Whisperer work in VS Code and Cursor?",
        answer:
          "Yes. Whisperer inserts text into any focused field on your Mac, including VS Code, Cursor, JetBrains IDEs, Xcode, Terminal, Slack, Gmail, and Notion. With per-app profiles, Code Mode activates automatically in your IDE while switching to natural language mode in other apps.",
      },
      {
        question: "Refunds?",
        answer:
          "Refunds are handled through Apple according to their standard policies.",
      },
    ],
  },
];

// Flatten all FAQs for schema markup (SEO needs all of them)
const allFaqs = categories.flatMap((cat) => cat.faqs);

export const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(allFaqs)),
        }}
      />
      <SectionGlow
        position="bottom-center"
        color="purple"
        size="md"
        intensity={0.06}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked{" "}
            <span className="text-primary">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about Whisperer.
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <FadeIn delay={0.05} className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-xl p-1 gap-1">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.1} className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            key={activeTab}
          >
            {categories[activeTab].faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left cursor-pointer">
                  <span className="text-lg font-medium text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
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
