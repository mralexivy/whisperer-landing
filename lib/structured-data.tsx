export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Whisperer",
    operatingSystem: "macOS 26 or later",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Meeting notes and dictation",
    description:
      "AI meeting notes and dictation for Mac. Detects calls in Zoom, Teams, Meet and Slack, transcribes every speaker on the Mac, and writes notes, decisions and action items with Claude, ChatGPT, Gemini or a built-in offline model. Includes calendar sync, Ask AI, a local MCP server for AI apps, and hold-to-talk dictation in 97 languages. One-time purchase, no subscription.",
    offers: [
      {
        "@type": "Offer",
        name: "Whisperer",
        price: "2.99",
        priceCurrency: "USD",
        description: "Dictation in any app, live preview in 97 languages, every speech engine, personal dictionary, history and file transcription.",
      },
      {
        "@type": "Offer",
        name: "Whisperer Pro",
        price: "14.99",
        priceCurrency: "USD",
        description: "One-time in-app purchase: meeting notes with named speakers, meeting detection, Google Calendar and Outlook sync, AI notes and Ask AI, your own Claude, ChatGPT or Gemini plan, and the MCP server.",
      },
    ],
    url: "https://whispererapp.com",
    downloadUrl: "https://apps.apple.com/app/whisperer-voice-to-text/id6758626671",
    screenshot: "https://whispererapp.com/assets/og/og-home.png",
    featureList: [
      "AI meeting notes for Zoom, Microsoft Teams, Google Meet, Slack huddles and Webex",
      "Automatic meeting detection and calendar-based auto-record",
      "Speaker diarization with names from the calendar invite",
      "Summaries, decisions, action items and open questions",
      "Ask AI about any meeting, with timestamped sources",
      "Bring your own AI: Claude, ChatGPT, Gemini plans or OpenAI, Anthropic and Gemini API keys",
      "Built-in offline AI model (Qwen3.5 4B)",
      "Google Calendar and Outlook sync with Join & Record reminders",
      "Local MCP server for Claude, ChatGPT, Cursor, Codex, VS Code and Windsurf",
      "Hold-to-talk dictation with live preview in 97 languages",
      "Offline speech engines: Whisper, Parakeet, Qwen3 ASR and WhisperKit",
      "Personal dictionary that learns from your corrections",
      "Audio and video file transcription",
      "No account, no tracking, data stays on the Mac",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Whisperer",
    url: "https://whispererapp.com",
    logo: "https://whispererapp.com/assets/app-icon.png",
    email: "support@whispererapp.com",
  };
}

// Note: FAQPage rich results deprecated for non-gov/healthcare (Aug 2023)
// but schema remains valuable for AI citation and non-Google engines
export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Whisperer",
    },
    publisher: {
      "@type": "Organization",
      name: "Whisperer",
      logo: {
        "@type": "ImageObject",
        url: "https://whispererapp.com/assets/app-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://whispererapp.com/blog/${post.slug}`,
    },
    url: `https://whispererapp.com/blog/${post.slug}`,
    image: post.image
      ? `https://whispererapp.com${post.image}`
      : "https://whispererapp.com/assets/hero-demo.png",
  };
}


export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://whispererapp.com${item.url}`,
    })),
  };
}

export function comparisonPageSchema(competitor: {
  name: string;
  slug: string;
  /** Plain number as a string ("14", "8.33"), or omitted when there is no single public price. */
  price?: string;
  /** What the number means, e.g. "per user per month, billed monthly". */
  priceNote?: string;
  /** Short category for the page name, e.g. "Meeting Notes" or "Dictation". */
  category?: string;
}) {
  const category = competitor.category ?? "Mac Dictation";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Whisperer vs ${competitor.name}: ${category} Comparison`,
    description: `Whisperer ($2.99 for dictation, plus a $14.99 one-time Pro purchase for meetings, your own AI and MCP) compared with ${competitor.name} on a Mac.`,
    url: `https://whispererapp.com/compare/${competitor.slug}`,
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Whisperer",
        applicationCategory: "BusinessApplication",
        operatingSystem: "macOS 26 or later, Apple Silicon",
        offers: [
          {
            "@type": "Offer",
            name: "Whisperer (dictation)",
            price: "2.99",
            priceCurrency: "USD",
            description: "One-time purchase on the Mac App Store",
          },
          {
            "@type": "Offer",
            name: "Whisperer Pro (in-app purchase)",
            price: "14.99",
            priceCurrency: "USD",
            description: "One-time in-app purchase: meetings, calendar, speakers, AI notes, bring your own AI, MCP",
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: competitor.name,
        ...(competitor.price !== undefined
          ? {
              offers: {
                "@type": "Offer",
                price: competitor.price,
                priceCurrency: "USD",
                ...(competitor.priceNote ? { description: competitor.priceNote } : {}),
              },
            }
          : {}),
      },
    ],
  };
}

