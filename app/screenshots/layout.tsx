import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Store screenshots",
  description: "Internal tool: renders and exports the Mac App Store screenshots for Whisperer 2.0.",
  robots: { index: false, follow: false },
};

export default function ScreenshotsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
