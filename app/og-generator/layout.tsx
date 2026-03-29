import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OG Image Generator",
  description: "Generate Open Graph images for all pages",
  robots: "noindex, nofollow",
};

export default function OGGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
