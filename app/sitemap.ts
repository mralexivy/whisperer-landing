import { MetadataRoute } from "next";
import { getAllPosts, getAllComparisons } from "@/lib/blog";

export async function generateStaticParams() {
  return [{ __metadata_id__: [] }];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://whispererapp.com";
  const now = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/features/ai-writing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/features/offline-transcription`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/features/live-preview`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features/personal-dictionary`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/features/transcription-history`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features/file-transcription`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features/multilingual`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/voice-coding`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/code-mode`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/offline-dictation-mac`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/dictation-no-subscription`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/voice-to-text-developers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/cheapest-dictation-mac`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/speech-to-text-mac`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/why-whisperer`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.meta.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comparisons = getAllComparisons().map((post) => ({
    url: `${baseUrl}/compare/${post.meta.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPosts, ...comparisons];
}
