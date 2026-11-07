import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, type Post } from "@/lib/blog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Meeting Notes, Your Own AI, MCP and Dictation on Mac",
  description:
    "Guides to bot-free meeting notes on Mac, using your ChatGPT, Claude or Gemini plan for summaries, connecting AI apps over MCP, and offline dictation.",
  openGraph: {
    title: "Whisperer Blog: Meeting Notes, Your AI, MCP and Dictation",
    description:
      "Guides to bot-free meeting notes, your own AI, MCP and offline dictation on Mac.",
    type: "website",
    images: [{ url: "/assets/og/og-blog.png", width: 1200, height: 630, alt: "Whisperer Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-blog.png"],
  },
  alternates: { canonical: "https://whispererapp.com/blog" },
};

// Display order and labels for frontmatter `category` values.
const CATEGORIES: { key: string; label: string }[] = [
  { key: "meetings", label: "Meetings" },
  { key: "ai", label: "Your own AI" },
  { key: "mcp", label: "MCP" },
  { key: "comparison", label: "Comparisons" },
  { key: "getting-started", label: "Getting started" },
  { key: "guides", label: "Dictation guides" },
  { key: "productivity", label: "Dictation guides" },
  { key: "features", label: "Features" },
  { key: "privacy", label: "Privacy" },
  { key: "technical", label: "Speech models" },
];

function categoryLabel(key: string) {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function PostRow({ post }: { post: Post }) {
  const isUpdated = Boolean(post.meta.updated && post.meta.updated !== post.meta.date);
  return (
    <li>
      <Link
        href={`/blog/${post.meta.slug}`}
        className="group flex items-start justify-between gap-6 py-5 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="min-w-0">
          <h3 className="text-[17px] font-semibold text-white transition-colors group-hover:text-[#9BA6FF]">
            {post.meta.title}
          </h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-white/60">{post.meta.description}</p>
          <p className="mt-2 text-[13px] text-white/45">
            {isUpdated ? "Updated " : ""}
            {formatDate(isUpdated ? post.meta.updated! : post.meta.date)} · {post.meta.readingTime}
          </p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-[#9BA6FF]" />
      </Link>
    </li>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();

  // Group by display label in CATEGORIES order; unknown categories go last.
  const groups = new Map<string, Post[]>();
  for (const c of CATEGORIES) if (!groups.has(c.label)) groups.set(c.label, []);
  for (const p of posts) {
    const label = categoryLabel(p.meta.category);
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(p);
  }

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        <h1 data-enter style={{ "--d": "60ms" } as React.CSSProperties} className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Whisperer blog</h1>
        <p data-enter style={{ "--d": "140ms" } as React.CSSProperties} className="mt-4 max-w-[640px] text-lg leading-relaxed text-white/60">
          How to take meeting notes on a Mac without a bot, use the AI plan you already pay for, let
          Claude or Cursor read your meetings over MCP, and dictate in any app.
        </p>

        {[...groups.entries()]
          .filter(([, list]) => list.length > 0)
          .map(([label, list]) => (
            <section key={label} className="mt-14">
              <h2 className="text-xl font-semibold text-white">{label}</h2>
              <ul className="mt-2 divide-y divide-white/[0.07] border-t border-white/[0.07]">
                {list.map((post) => (
                  <PostRow key={post.meta.slug} post={post} />
                ))}
              </ul>
            </section>
          ))}
      </div>
    </main>
  );
}
