// One source for facts the site repeats. Change a price or a link here, not in a page.

export const SITE_URL = "https://whispererapp.com";

// Storefront-neutral link: Apple redirects to the visitor's own country.
export const APP_STORE_URL = "https://apps.apple.com/app/whisperer-voice-to-text/id6758626671";

export const PRICE_BASE = "$2.99";
export const PRICE_PRO = "$14.99";

export const SUPPORT_EMAIL = "support@whispererapp.com";

export const DEMO_VIDEO = "/videos/whisperer-tour.mp4";
export const DEMO_POSTER = "/videos/whisperer-tour.jpg";

// The two jobs the app does, each with its own demo film.
export const MODE_VIDEOS = {
  meetings: { src: "/videos/meeting-demo.mp4", poster: "/videos/meeting-demo.jpg", length: "0:36" },
  dictation: { src: "/demo.mp4", poster: "/videos/dictation-demo.jpg", length: "0:15" },
} as const;

// Facts the copy quotes. Each lives here once.
export const FACTS = {
  languages: "97",
  minMacOS: "macOS 26 Tahoe",
  chip: "Apple Silicon",
  localModel: "Qwen3.5 4B",
} as const;

// Top bar. "Features" opens FEATURE_MENU; the rest are plain links.
export const NAV_LINKS = [
  { label: "Meetings", href: "/meetings" },
  { label: "Voice coding", href: "/voice-coding" },
  { label: "For teams", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Blog", href: "/blog" },
] as const;

// Every feature page, grouped the way the app is sold. Shown in the header's Features menu.
export const FEATURE_MENU = [
  {
    title: "Dictation",
    href: "/features",
    items: [
      { label: "Live preview", body: "Words appear as you speak", href: "/features/live-preview" },
      { label: "97 languages", body: "Detected as you talk", href: "/features/multilingual" },
      { label: "Offline engines", body: "Whisper, Parakeet, Qwen3 ASR", href: "/features/offline-transcription" },
      { label: "Fast Polish and AI", body: "Fillers out, punctuation in", href: "/features/ai-writing" },
      { label: "Personal dictionary", body: "Learns names from corrections", href: "/features/personal-dictionary" },
      { label: "File transcription", body: "Interviews, lectures, memos", href: "/features/file-transcription" },
      { label: "History and statistics", body: "Every dictation, searchable", href: "/features/transcription-history" },
    ],
  },
  {
    title: "Meetings and AI",
    href: "/meetings",
    items: [
      { label: "Meeting notes", body: "Every speaker named, no bot", href: "/meetings" },
      { label: "Calendar", body: "Google and Outlook, Join & Record", href: "/calendar" },
      { label: "Your own AI", body: "Claude, ChatGPT, Gemini or offline", href: "/ai" },
      { label: "MCP server", body: "Claude and Cursor read your meetings", href: "/mcp" },
    ],
  },
  {
    title: "For developers",
    href: "/voice-to-text-developers",
    items: [
      { label: "Voice coding", body: "Talk to Cursor, Claude Code, Codex", href: "/voice-coding" },
      { label: "Voice to text for developers", body: "PRs, reviews, tickets by voice", href: "/voice-to-text-developers" },
    ],
  },
] as const;
