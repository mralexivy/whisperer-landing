import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whispererapp.com"),
  title: "Whisperer – Offline Dictation for Mac | Voice Coding & Speech to Text",
  description: "Private, offline voice-to-text for macOS. $14.99 lifetime – no subscription. Code Mode for developers with camelCase, snake_case by voice. Works in VS Code, Cursor, Terminal. 100% on-device, no cloud.",
  keywords: [
    // Tier 1: Quick wins (low difficulty, high intent)
    "offline dictation app mac",
    "whisper dictation mac",
    "voice to text mac offline",
    "dictation app for developers",
    "voice coding mac",
    "private dictation app",
    "hold to talk dictation mac",
    "dictation for VS Code",
    "voice to text for coding",
    "whisper.cpp mac app",
    "voice dictation Cursor IDE",
    "mac dictation alternative",
    "superwhisper alternative",
    "wispr flow alternative",
    // Privacy-first AI (trending)
    "private speech to text",
    "no cloud dictation",
    "on-device transcription mac",
    "local AI mac",
    "offline AI dictation",
    // Developer productivity & vibe coding (trending)
    "vibe coding tools",
    "voice coding",
    "dictation for coding",
    "dictation for terminal",
    "developer voice tools",
    "Code Mode dictation",
    "voice camelCase snake_case",
    // Pricing differentiators (untapped)
    "dictation without subscription",
    "one-time purchase dictation mac",
    "lifetime dictation app",
    // Core features
    "speech to text mac",
    "voice typing mac",
    "dictation software mac",
    "hold fn dictate",
    "per-app dictation profiles",
  ].join(", "),
  openGraph: {
    title: "Whisperer – Offline Dictation for Mac | Voice Coding App",
    description: "Private voice-to-text for macOS. $14.99 lifetime Pro. Code Mode for developers. Works in VS Code, Cursor, Terminal. 100% offline, no subscription.",
    type: "website",
    images: [
      {
        url: "/assets/hero-demo.png?v=2",
        width: 1200,
        height: 630,
        alt: "Whisperer - Offline Dictation for Mac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@whispererapp",
    images: ["/assets/hero-demo.png?v=2"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
