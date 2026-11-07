import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, H2 } from "@/components/site/Shell";
import { JsonLd, faqSchema } from "@/lib/structured-data";

export type QA = { question: string; answer: string };

export const HOME_FAQ: QA[] = [
  {
    question: "Does Whisperer join my meeting as a bot?",
    answer:
      "No. Nothing joins the call. Whisperer records on your Mac, so the other people see no bot, no extra participant and no recording notice from a third party. You are responsible for telling people you take notes where the law asks for consent; Whisperer shows a short reminder before your first recording.",
  },
  {
    question: "Which meeting apps does it work with?",
    answer:
      "Zoom, Microsoft Teams, Google Meet, Slack huddles, Webex and FaceTime, plus calls in Chrome, Safari, Arc, Edge and other browsers. Whisperer records the call audio and your microphone, so it captures both sides whether you use speakers or headphones.",
  },
  {
    question: "Do I need a ChatGPT or Claude subscription?",
    answer:
      "No. Whisperer includes its own AI model (Qwen3.5 4B) that writes notes and answers questions on your Mac, offline and free. If you already pay for Claude, ChatGPT or Gemini, you can sign in and Whisperer uses that plan instead, with no extra bill. You can also paste an OpenAI, Anthropic or Gemini API key.",
  },
  {
    question: "Is my meeting audio sent anywhere?",
    answer:
      "Audio never leaves your Mac. Recording, transcription and speaker detection all run locally. Only if you choose a cloud AI such as Claude or ChatGPT is the text transcript sent to that provider to write the notes, and you can keep any meeting local with one switch.",
  },
  {
    question: "What is the MCP server for?",
    answer:
      "MCP lets AI apps use tools. Whisperer's server runs on your Mac and lets Claude, ChatGPT, Cursor, Codex, VS Code and Windsurf search your meetings and dictations, read summaries and transcripts, and add notes. It is off until you turn it on, and only apps on your Mac can reach it.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Whisperer is $2.99 on the Mac App Store and includes dictation. Pro is a $14.99 in-app purchase that adds meetings, calendar sync, AI notes, your own AI and the MCP server. Both are one-time. There is no subscription and no minute limit.",
  },
  {
    question: "Which languages does it understand?",
    answer:
      "97 languages for dictation and meetings with the Whisper engine, and it detects the language as you speak. Meeting notes are written in the language of the meeting.",
  },
  {
    question: "What do I need to run it?",
    answer:
      "A Mac with Apple Silicon (M1 or later) and macOS 26 Tahoe. The speech model is about 550 MB and the built-in AI model about 3.2 GB; both download the first time you use them.",
  },
];

export function FAQSection({ items = HOME_FAQ, title = "Questions people ask" }: { items?: QA[]; title?: string }) {
  return (
    <Section id="faq">
      <JsonLd data={faqSchema(items)} />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <H2>{title}</H2>
        </div>
        <Accordion data-reveal="list" type="single" collapsible className="w-full">
          {items.map((qa, i) => (
            <AccordionItem key={qa.question} value={`q${i}`} className="border-white/[0.08]">
              <AccordionTrigger className="py-5 text-left text-[16.5px] font-medium text-white hover:no-underline">{qa.question}</AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-[1.65] text-white/60">{qa.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
