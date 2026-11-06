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
    default: "Whisperer: Dictation and AI Meeting Notes for Mac, No Subscription",
    template: "%s | Whisperer",
  },
  description:
    "AI meeting notes and dictation for Mac. Detects Zoom, Teams and Meet calls, names every speaker and writes notes with Claude, ChatGPT, Gemini or a built-in offline model. One-time purchase.",
  applicationName: "Whisperer",
  openGraph: {
    siteName: "Whisperer",
    title: "Whisperer: AI meeting notes for Mac, without the subscription",
    description: "Notes for every call, written by the AI you already pay for or by one that runs on your Mac. Pay once.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/og/og-home.png", width: 1200, height: 630, alt: "Whisperer meeting notes on a Mac" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-home.png"],
  },
  alternates: {
    canonical: 'https://whispererapp.com/',
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
