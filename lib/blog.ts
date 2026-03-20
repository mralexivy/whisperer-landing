import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content");

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  keywords: string[];
  category: string;
  image?: string;
  howToSteps?: { name: string; text: string }[];
  slug: string;
  readingTime: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

function getContentFromDir(dir: string): Post[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(fullPath, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const slug = filename.replace(/\.mdx$/, "");
      const stats = readingTime(content);

      return {
        meta: {
          title: data.title ?? "",
          description: data.description ?? "",
          date: data.date ?? "",
          keywords: data.keywords ?? [],
          category: data.category ?? "",
          image: data.image,
          howToSteps: data.howToSteps,
          slug,
          readingTime: stats.text,
        },
        content,
      };
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export function getAllPosts(): Post[] {
  return getContentFromDir("blog");
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.meta.slug === slug);
}

export function getAllComparisons(): Post[] {
  return getContentFromDir("compare");
}

export function getComparisonBySlug(slug: string): Post | undefined {
  return getAllComparisons().find((p) => p.meta.slug === slug);
}
