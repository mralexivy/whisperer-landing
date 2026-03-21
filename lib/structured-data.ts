export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Whisperer",
    operatingSystem: "macOS",
    applicationCategory: "ProductivityApplication",
    description:
      "Offline dictation app for Mac with Code Mode for developers. Hold Fn, speak, release — text appears in the focused field. 100% offline, powered by Whisper, Parakeet, and Apple Speech engines.",
    offers: [
      {
        "@type": "Offer",
        name: "Base App",
        price: "2.99",
        priceCurrency: "USD",
        description:
          "Core dictation — hold-to-record, live preview, 100+ languages, 3 engines, file transcription, offline processing",
      },
      {
        "@type": "Offer",
        name: "Pro Pack",
        price: "14.99",
        priceCurrency: "USD",
        description:
          "Lifetime unlock — Code Mode, per-app profiles, personal dictionary, AI post-processing (10 modes)",
      },
    ],
    url: "https://whispererapp.com",
    downloadUrl:
      "https://apps.apple.com/il/app/whisperer-voice-to-text/id6758626671",
    screenshot: "https://whispererapp.com/assets/hero-demo.png",
    featureList: [
      "100% offline on-device transcription",
      "Code Mode for camelCase, snake_case, symbols",
      "Per-app profiles (Slack, Gmail, VS Code)",
      "Three transcription engines: Whisper, Parakeet, Apple Speech",
      "AI post-processing with 10 built-in modes",
      "100+ language support",
      "Live preview with ~300ms latency",
      "Personal dictionary with fuzzy and phonetic matching",
      "File transcription (audio and video)",
      "Transcription history with search and audio playback",
      "Usage statistics (WPM, peak hours, app usage)",
      "Filler word removal",
      "Hold-to-talk and toggle recording modes",
      "VS Code, Cursor, Terminal support",
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
      "@id": `https://whispererapp.com/blog/${post.slug}/`,
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

export function comparisonPageSchema(competitor: {
  name: string;
  price: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Whisperer vs ${competitor.name} — Mac Dictation Comparison 2026`,
    description: `Feature-by-feature comparison of Whisperer ($14.99 lifetime) vs ${competitor.name} (${competitor.price}) for offline dictation on Mac.`,
    url: `https://whispererapp.com/compare/${competitor.slug}/`,
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Whisperer",
        operatingSystem: "macOS",
        offers: {
          "@type": "Offer",
          price: "14.99",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: competitor.name,
        offers: {
          "@type": "Offer",
          price: competitor.price,
          priceCurrency: "USD",
        },
      },
    ],
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
