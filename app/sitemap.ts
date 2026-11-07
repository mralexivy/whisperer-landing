import { MetadataRoute } from "next";
import { getAllPosts, getAllComparisons } from "@/lib/blog";

export async function generateStaticParams() {
  return [{ __metadata_id__: [] }];
}

const BASE = "https://whispererapp.com";

// The date each page's content last changed. Update it when you change the page,
// so search engines see a real signal instead of the build date.
const PAGES: [path: string, modified: string, priority: number][] = [
  ["/", "2026-11-07", 1.0],
  ["/meetings", "2026-11-07", 0.95],
  ["/ai", "2026-11-07", 0.9],
  ["/mcp", "2026-11-06", 0.9],
  ["/calendar", "2026-11-07", 0.85],
  ["/enterprise", "2026-11-06", 0.9],
  ["/pricing", "2026-11-06", 0.9],
  ["/features", "2026-11-07", 0.85],
  ["/features/live-preview", "2026-11-07", 0.75],
  ["/features/multilingual", "2026-11-07", 0.75],
  ["/features/offline-transcription", "2026-11-07", 0.75],
  ["/features/personal-dictionary", "2026-11-07", 0.7],
  ["/features/ai-writing", "2026-11-07", 0.7],
  ["/features/transcription-history", "2026-11-07", 0.7],
  ["/features/file-transcription", "2026-11-07", 0.7],
  ["/voice-coding", "2026-11-07", 0.8],
  ["/voice-to-text-developers", "2026-11-07", 0.8],
  ["/why-whisperer", "2026-11-06", 0.8],
  ["/compare", "2026-11-06", 0.85],
  ["/blog", "2026-11-06", 0.7],
  ["/offline-dictation-mac", "2026-11-06", 0.75],
  ["/speech-to-text-mac", "2026-11-06", 0.75],
  ["/dictation-no-subscription", "2026-11-06", 0.75],
  ["/cheapest-dictation-mac", "2026-11-06", 0.7],
  ["/privacy", "2026-11-06", 0.3],
  ["/terms", "2026-10-13", 0.3],
];

type Meta = { slug: string; date?: string; updated?: string };
const modified = (m: Meta) => m.updated ?? m.date ?? "2026-11-06";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map(([path, lastModified, priority]) => ({ url: `${BASE}${path === "/" ? "/" : path}`, lastModified, priority }));
  const posts = getAllPosts().map((p) => ({ url: `${BASE}/blog/${p.meta.slug}`, lastModified: modified(p.meta as Meta), priority: 0.6 }));
  const comparisons = getAllComparisons().map((p) => ({ url: `${BASE}/compare/${p.meta.slug}`, lastModified: modified(p.meta as Meta), priority: 0.75 }));
  return [...pages, ...posts, ...comparisons];
}
