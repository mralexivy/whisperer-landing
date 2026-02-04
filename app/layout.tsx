import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whispererapp.com"),
  title: "Whisperer – Offline Dictation for Mac (Hold Fn to Type Anywhere)",
  description: "Offline voice-to-text for macOS. Hold Fn, speak, release. Text inserts into Slack, Gmail, VS Code, Terminal. Live preview, fast models, Pro Pack for Code Mode + profiles.",
  keywords: "offline dictation mac, voice typing mac, whisper dictation, hold fn dictate, dictation for vscode, dictation for terminal, on-device transcription mac",
  openGraph: {
    title: "Whisperer – Offline Dictation for Mac",
    description: "Offline voice-to-text for macOS. Hold Fn, speak, release. Text inserts anywhere. 100% offline.",
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
