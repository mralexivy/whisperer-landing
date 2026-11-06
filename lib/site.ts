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

export const NAV_LINKS = [
  { label: "Dictation", href: "/features" },
  { label: "Meetings", href: "/meetings" },
  { label: "Your AI", href: "/ai" },
  { label: "MCP", href: "/mcp" },
  { label: "For teams", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Blog", href: "/blog" },
] as const;
