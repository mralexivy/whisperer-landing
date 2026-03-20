import { MetadataRoute } from "next";
import { getAllPosts, getAllComparisons } from "@/lib/blog";

export async function generateStaticParams() {
  return [{ __metadata_id__: [] }];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://whispererapp.com";

  const staticPages = [
    { url: `${baseUrl}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/features/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/features/ai-writing/`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/features/offline-transcription/`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/features/live-preview/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features/personal-dictionary/`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/features/transcription-history/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features/file-transcription/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features/multilingual/`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/voice-coding/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/code-mode/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/pricing/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/compare/`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy/`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.meta.slug}/`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comparisons = getAllComparisons().map((post) => ({
    url: `${baseUrl}/compare/${post.meta.slug}/`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPosts, ...comparisons];
}
