import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};
