import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screenshots | Offline Dictation App for Mac",
  description:
    "Screenshots and visual showcase of Whisperer's dictation interface, Code Mode, live preview, transcription history, and per-app profiles.",
  alternates: { canonical: "/screenshots" },
};

export default function ScreenshotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
