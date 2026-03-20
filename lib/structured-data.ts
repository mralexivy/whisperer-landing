export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Whisperer",
    operatingSystem: "macOS",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free with optional Pro Pack ($14.99)",
    },
    description:
      "Offline voice-to-text dictation for Mac with Code Mode for developers. 100% on-device, no subscription.",
    url: "https://whispererapp.com",
    downloadUrl:
      "https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671",
    featureList: [
      "Offline on-device transcription",
      "AI post-processing (rewrite, translate, summarize, format, grammar)",
      "Three transcription backends (Whisper, Parakeet, Apple Speech)",
      "Code Mode for developers (camelCase, snake_case, symbols)",
      "Live streaming preview with ~300ms latency",
      "Personal dictionary with fuzzy and phonetic matching",
      "Prompt words for vocabulary boosting",
      "Per-app profiles with automatic switching",
      "Hold-to-talk and toggle recording modes",
      "100+ languages with AI translation",
      "File transcription (audio and video)",
      "Transcription history with search and audio playback",
      "Usage statistics (WPM, peak hours, app usage)",
      "Filler word removal",
      "List formatting (spoken lists to bullets)",
      "VS Code, Cursor, Terminal support",
      "Voice Activity Detection (Silero VAD)",
      "Metal GPU and Neural Engine acceleration",
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
    email: "support@whisperer.app",
  };
}

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
    url: `https://whispererapp.com/blog/${post.slug}/`,
    image: post.image
      ? `https://whispererapp.com${post.image}`
      : "https://whispererapp.com/assets/hero-demo.png",
  };
}

export function howToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
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

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Whisperer Pro Pack",
    description:
      "Code Mode, per-app profiles, personal dictionary, and pro insertion for Whisperer dictation app.",
    brand: { "@type": "Brand", name: "Whisperer" },
    offers: {
      "@type": "Offer",
      price: "14.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671",
    },
  };
}
