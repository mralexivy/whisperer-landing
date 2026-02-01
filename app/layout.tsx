import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whisperer – Offline Dictation for Mac (Hold Fn to Type Anywhere)",
  description: "Offline voice-to-text for macOS. Hold Fn, speak, release. Text inserts into Slack, Gmail, VS Code, Terminal. Live preview, fast models, Pro Pack for Code Mode + profiles.",
  keywords: "offline dictation mac, voice typing mac, whisper dictation, hold fn dictate, dictation for vscode, dictation for terminal, on-device transcription mac",
  openGraph: {
    title: "Whisperer – Offline Dictation for Mac",
    description: "Offline voice-to-text for macOS. Hold Fn, speak, release. Text inserts anywhere. 100% offline.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@whispererapp",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
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
