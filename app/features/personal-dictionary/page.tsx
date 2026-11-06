import type { Metadata } from "next";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { DictionaryMock } from "@/components/landing/DictationMockups";
import { PageHero, PointGrid, Split, FactTable, Related, Close } from "@/components/landing/PageKit";
import { FAQSection } from "@/components/home/HomeFAQ";

export const metadata: Metadata = {
  title: "Personal Dictionary: Dictation That Learns Your Words",
  description:
    "Teach Whisperer the names, products and jargon you use. Fix a word once in History and it learns from your correction. Prompt words steer the speech model before it writes. All on your Mac.",
  keywords:
    "custom dictionary dictation mac, dictation spelling correction, dictation names wrong, custom vocabulary speech to text mac, dictation learns words, prompt words whisper",
  openGraph: {
    title: "A dictionary that learns from your corrections",
    description: "Fix a name once in History and Whisperer spells it right from then on.",
    type: "website",
    url: "https://whispererapp.com/features/personal-dictionary",
    images: [{ url: "/assets/og/og-feature-personal-dictionary.png", width: 1200, height: 630, alt: "Whisperer personal dictionary" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og/og-feature-personal-dictionary.png"] },
  alternates: { canonical: "https://whispererapp.com/features/personal-dictionary" },
};

const FAQ = [
  {
    question: "How does Whisperer learn from my corrections?",
    answer:
      "When you edit a dictation in History and fix a word, Whisperer compares the two versions and adds the right spelling to your dictionary. A small Learned card shows what it picked up, with Undo if it guessed wrong. You can turn this off in Settings with Learn From My Corrections.",
  },
  {
    question: "What are prompt words?",
    answer:
      "Words you give the speech model before it starts writing, so it expects them. Prompt words help with unusual names and terms. Dictionary entries fix the text afterwards. You can use both.",
  },
  {
    question: "Will the dictionary change words that were already right?",
    answer:
      "It is built to leave correctly spelled words alone and works on whole words. If an entry causes trouble, delete it from the Dictionary page in Workspace.",
  },
  {
    question: "Does the dictionary apply to meetings?",
    answer: "Yes. The same dictionary is used for dictation, file transcription and meeting transcripts.",
  },
];

const POINTS = [
  { title: "Learns from your fixes", body: "It wrote clean, you change it to Glean in History. Next time it writes Glean." },
  { title: "Undo when it guesses wrong", body: "Every learned word shows a small card with Undo, so nothing sneaks in." },
  { title: "Add words by hand", body: "Type a name and how it tends to be misheard. Done." },
  { title: "Prompt words", body: "Tell the speech model which words to expect before it writes anything." },
  { title: "Sounds-like matching", body: "Close misspellings and words that sound alike are caught, not only exact matches." },
  { title: "Everywhere you speak", body: "Dictation, file transcription and meeting transcripts all use it." },
];

export default function PersonalDictionaryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dictation", url: "/features" },
        { name: "Personal Dictionary", url: "/features/personal-dictionary" },
      ])} />

      <PageHero
        crumbs={[{ label: "Dictation", href: "/features" }, { label: "Personal dictionary" }]}
        title="Fix a word once, and it stays fixed"
        lede="Your colleagues' names, your product, the acronym your team uses. Fix a word in your dictation history and Whisperer learns it, so it is spelled right the next time you say it."
        visual={<DictionaryMock />}
      />

      <PointGrid title="Spelled your way" lede="Speech models know common words. The dictionary teaches Whisperer yours." items={POINTS} />

      <Split
        title="Dictionary or prompt words"
        lede="Two tools for one problem. Prompt words nudge the model before it writes. Dictionary entries fix the text after. Most people only need the dictionary."
        visual={
          <FactTable
            rows={[
              ["Prompt words", "Read by the model before transcription"],
              ["Best for", "Rare names, product names, jargon"],
              ["Dictionary entries", "Applied to the text afterwards"],
              ["Best for", "Words it keeps getting wrong the same way"],
              ["Learning", "On by default, with Undo on every word"],
              ["Stored", "On your Mac"],
            ]}
          />
        }
      />

      <FAQSection items={FAQ} title="Dictionary questions" />
      <Related
        links={[
          { title: "Fast Polish and AI", body: "Punctuation and fillers handled.", href: "/features/ai-writing" },
          { title: "History", body: "Find and fix past dictations.", href: "/features/transcription-history" },
          { title: "Meeting notes", body: "Names right in every transcript.", href: "/meetings" },
          { title: "All dictation features", href: "/features" },
        ]}
      />
      <Close title="Teach it your words" />
    </>
  );
}
