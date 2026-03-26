import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { blogPostSchema, breadcrumbSchema, howToSchema } from "@/lib/structured-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, GradientDivider } from "@/components/ui/decorations";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.meta.title} — Whisperer Blog`,
    description: post.meta.description,
    keywords: post.meta.keywords.join(", "),
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      images: [
        {
          url: post.meta.image ?? "/assets/hero-demo.png",
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter(
      (p) =>
        p.meta.slug !== post.meta.slug &&
        p.meta.category === post.meta.category
    )
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema(post.meta)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              {
                name: post.meta.title,
                url: `/blog/${post.meta.slug}`,
              },
            ])
          ),
        }}
      />
      {post.meta.howToSteps && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              howToSchema({
                name: post.meta.title,
                description: post.meta.description,
                steps: post.meta.howToSteps,
              })
            ),
          }}
        />
      )}

      <main className="pt-32 pb-24 relative">
        {/* Background atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SectionGlow position="top-center" size="xl" intensity={0.08} />
          <SectionGlow position="center" size="lg" intensity={0.04} color="purple" />
          <SectionGlow position="bottom-center" size="md" intensity={0.05} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.meta.title },
              ]}
            />

            <FadeIn>
              <header className="mb-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.meta.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.meta.readingTime}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {post.meta.title}
                </h1>
              </header>
            </FadeIn>

            <FadeIn delay={0.15}>
              <article className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
                <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
              </article>
            </FadeIn>

            {related.length > 0 && (
              <section className="mt-16 pt-12">
                <GradientDivider className="mb-12" />
                <FadeIn>
                  <h2 className="text-2xl font-bold mb-6">Related articles</h2>
                </FadeIn>
                <FadeInStagger className="grid gap-4">
                  {related.map((r) => (
                    <StaggerItem key={r.meta.slug}>
                      <Link
                        href={`/blog/${r.meta.slug}`}
                        className="group block"
                      >
                        <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {r.meta.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {r.meta.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 ml-4 transition-all group-hover:translate-x-1" />
                          </div>
                        </GlowCard>
                      </Link>
                    </StaggerItem>
                  ))}
                </FadeInStagger>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
