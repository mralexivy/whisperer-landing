import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { NoiseOverlay } from "@/components/ui/decorations";
import { JsonLd, softwareAppSchema, organizationSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whispererapp.com"),
  title: {
    default: "Whisperer — Offline Dictation for Mac | $14.99 Lifetime | Code Mode | No Subscription",
    template: "%s — Whisperer",
  },
  description: "Hold Fn, speak, release — text appears anywhere. Offline Mac dictation with Code Mode for developers. Three AI engines. $2.99 base, $14.99 Pro lifetime. No subscription.",
  keywords: [
    "offline dictation app mac",
    "whisper dictation mac",
    "voice to text mac offline",
    "dictation app for developers",
    "voice coding mac",
    "private dictation app",
    "hold to talk dictation mac",
    "dictation for VS Code",
    "voice to text for coding",
    "whisper mac app",
    "voice dictation Cursor IDE",
    "mac dictation alternative",
    "superwhisper alternative",
    "wispr flow alternative",
    "private speech to text",
    "no cloud dictation",
    "on-device transcription mac",
    "local AI mac",
    "offline AI dictation",
    "vibe coding tools",
    "voice coding",
    "dictation for coding",
    "dictation for terminal",
    "developer voice tools",
    "Code Mode dictation",
    "voice camelCase snake_case",
    "dictation without subscription",
    "one-time purchase dictation mac",
    "lifetime dictation app",
    "speech to text mac",
    "voice typing mac",
    "dictation software mac",
    "hold fn dictate",
    "per-app dictation profiles",
    "offline AI writing mac",
    "AI dictation formatting",
    "transcribe files mac offline",
    "dictation history search",
    "multilingual dictation mac",
    "filler word removal dictation",
    "whisper nvidia transcription",
    "real-time dictation preview",
    "dictation statistics WPM",
    "vocabulary boosting dictation",
  ].join(", "),
  openGraph: {
    title: "Whisperer — Offline Dictation for Mac | $14.99 Lifetime | Code Mode",
    description: "Hold Fn, speak, release — text appears anywhere. Code Mode for developers. Three AI engines. $2.99 base, $14.99 Pro lifetime. No subscription.",
    type: "website",
    images: [
      {
        url: "/assets/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Whisperer - Offline Dictation for Mac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@whispererapp",
    images: ["/assets/og/og-home.png"],
  },
  alternates: {
    canonical: '/',
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
    <html lang="en" className={inter.variable}>
      <body>
        <JsonLd data={softwareAppSchema()} />
        <JsonLd data={organizationSchema()} />
        <NoiseOverlay />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
