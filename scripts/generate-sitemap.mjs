import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://whispererapp.com";

// Static pages (manually listed to ensure correctness)
const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/features/", priority: "0.9", changefreq: "monthly" },
  { url: "/features/ai-writing/", priority: "0.8", changefreq: "monthly" },
  { url: "/features/offline-transcription/", priority: "0.8", changefreq: "monthly" },
  { url: "/features/live-preview/", priority: "0.7", changefreq: "monthly" },
  { url: "/features/personal-dictionary/", priority: "0.7", changefreq: "monthly" },
  { url: "/features/transcription-history/", priority: "0.7", changefreq: "monthly" },
  { url: "/features/file-transcription/", priority: "0.7", changefreq: "monthly" },
  { url: "/features/multilingual/", priority: "0.7", changefreq: "monthly" },
  { url: "/pricing/", priority: "0.9", changefreq: "weekly" },
  { url: "/voice-coding/", priority: "0.9", changefreq: "monthly" },
  { url: "/code-mode/", priority: "0.8", changefreq: "monthly" },
  { url: "/compare/", priority: "0.9", changefreq: "weekly" },
  { url: "/blog/", priority: "0.8", changefreq: "weekly" },
  { url: "/offline-dictation-mac/", priority: "0.9", changefreq: "monthly" },
  { url: "/dictation-no-subscription/", priority: "0.9", changefreq: "monthly" },
  { url: "/voice-to-text-developers/", priority: "0.9", changefreq: "monthly" },
  { url: "/cheapest-dictation-mac/", priority: "0.9", changefreq: "monthly" },
  { url: "/speech-to-text-mac/", priority: "0.9", changefreq: "monthly" },
  { url: "/privacy/", priority: "0.3", changefreq: "yearly" },
  { url: "/screenshots/", priority: "0.4", changefreq: "monthly" },
];

function getContentSlugs(dir) {
  const fullPath = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(fullPath, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: f.replace(/\.mdx$/, ""),
        date: data.date || null,
      };
    });
}

function toW3CDate(dateStr) {
  if (!dateStr) return new Date().toISOString().split("T")[0];
  return new Date(dateStr).toISOString().split("T")[0];
}

const today = new Date().toISOString().split("T")[0];

const blogPosts = getContentSlugs("blog");
const comparisons = getContentSlugs("compare");

const urls = [
  // Static pages
  ...staticPages.map((p) => ({
    loc: `${SITE_URL}${p.url}`,
    lastmod: today,
    changefreq: p.changefreq,
    priority: p.priority,
  })),
  // Blog posts
  ...blogPosts.map((post) => ({
    loc: `${SITE_URL}/blog/${post.slug}/`,
    lastmod: toW3CDate(post.date),
    changefreq: "monthly",
    priority: "0.7",
  })),
  // Comparison pages
  ...comparisons.map((comp) => ({
    loc: `${SITE_URL}/compare/${comp.slug}/`,
    lastmod: toW3CDate(comp.date),
    changefreq: "monthly",
    priority: "0.8",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
console.log(`Sitemap generated with ${urls.length} URLs → public/sitemap.xml`);
