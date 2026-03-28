"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSchema, JsonLd } from "@/lib/structured-data";
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
          "Yes. Once you download the models, you don't need internet. Everything runs on your Mac.",
      },
      {
        question: "Does it work in Slack/Gmail/VS Code?",
        answer:
          "Yes. It works anywhere you can type. VS Code, Cursor, JetBrains, Terminal, Slack, Gmail, Notion. Set up per-app profiles so Code Mode kicks in for your IDE and regular mode for everything else.",
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
          "Start with the balanced model. Go bigger if you need better accuracy, smaller if you want faster results.",
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
          "Yes. Code Mode handles camelCase, snake_case, PascalCase, CONSTANT_CASE, and 20+ symbol commands like parentheses, brackets, and semicolons. Works in VS Code, Cursor, JetBrains, Terminal, anywhere.",
      },
      {
        question: "Can Whisperer rewrite or format my dictation?",
        answer:
          "Yes. There's an on-device AI with 10 modes: Rewrite, Translate, Format, Summarize, Grammar, List Format, Coding, Email, Creative, and Custom. Runs locally.",
      },
      {
        question: "Can I use different transcription engines?",
        answer:
          "Yes. Three options: Whisper (Metal GPU, 99+ languages), NVIDIA (Neural Engine, fastest), and Apple Speech (macOS Tahoe+). Switch between them without restarting.",
      },
      {
        question: "How many languages does it support?",
        answer:
          "100+ languages with Whisper, 25 with NVIDIA. You can set different languages per app and translate between them offline.",
      },
      {
        question: "Can I transcribe audio or video files?",
        answer:
          "Yes. Drag a file in and it transcribes locally. Same engine as live dictation. No uploads, no per-minute fees.",
      },
      {
        question: "Does it track my dictation history?",
        answer:
          "Yes. Everything gets saved. You can search, replay audio, re-transcribe, and see stats like WPM and peak hours.",
      },
      {
        question: "Can it remove filler words like 'um' and 'uh'?",
        answer:
          "Yes. Turn it on in Settings. It strips um, uh, erm, er, ah, and hmm. Smart enough not to touch words like umbrella.",
      },
    ],
  },
  {
    label: "Pricing & Value",
    faqs: [
      {
        question: "What's the difference between Base and Pro Pack?",
        answer:
          "Base gets you dictation. Pro adds Code Mode, per-app profiles, personal dictionary, and the pro insertion engine.",
      },
      {
        question: "What is the cheapest offline dictation app for Mac?",
        answer:
          "Whisperer. $2.99 base, $14.99 Pro lifetime. Others charge $99-$249 one-time or $5-$15/month. You get three engines, Code Mode, and per-app profiles for that $14.99.",
      },
      {
        question: "How does Whisperer compare to Superwhisper?",
        answer:
          "$14.99 vs $249 (or $8/month). Whisperer has Code Mode for camelCase and symbols, per-app profiles, personal dictionary, three engines. Superwhisper doesn't. Both work offline.",
      },
      {
        question: "Does Whisperer work in VS Code and Cursor?",
        answer:
          "Yes. Works in any text field: VS Code, Cursor, JetBrains, Terminal, Slack, Gmail. Set up profiles so Code Mode turns on in your IDE and off elsewhere.",
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
      <JsonLd data={faqSchema(allFaqs)} />
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
            Common questions about Whisperer.
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
