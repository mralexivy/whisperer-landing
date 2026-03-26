import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllComparisons, getComparisonBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, comparisonPageSchema, JsonLd } from "@/lib/structured-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, GradientDivider } from "@/components/ui/decorations";

export function generateStaticParams() {
  return getAllComparisons().map((post) => ({ slug: post.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getComparisonBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords.join(", "),
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      images: [
        {
          url: "/assets/hero-demo.png",
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
    alternates: { canonical: `/compare/${slug}` },
  };
}

export default async function ComparisonPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getComparisonBySlug(slug);
  if (!post) notFound();

  const allComparisons = getAllComparisons();
  const otherComparisons = allComparisons.filter(
    (c) => c.meta.slug !== post.meta.slug
  );

  const competitorPrices: Record<string, { name: string; price: string }> = {
    "vs-superwhisper": { name: "Superwhisper", price: "249" },
    "vs-voibe": { name: "Voibe", price: "99" },
    "vs-wispr-flow": { name: "Wispr Flow", price: "10" },
    "vs-apple-dictation": { name: "Apple Dictation", price: "0" },
    "vs-macwhisper": { name: "MacWhisper", price: "64" },
    "vs-voice-ink": { name: "VoiceInk", price: "25" },
    "vs-willow": { name: "Willow", price: "0" },
    "vs-spokenly": { name: "Spokenly", price: "0" },
    "vs-jestype": { name: "JesType", price: "14.95" },
  };
  const competitor = competitorPrices[post.meta.slug];

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Compare", url: "/compare" },
        {
          name: post.meta.title,
          url: `/compare/${post.meta.slug}`,
        },
      ])} />
      {competitor && (
        <JsonLd data={comparisonPageSchema({
          name: competitor.name,
          price: competitor.price,
          slug: post.meta.slug,
        })} />
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
                { label: "Compare", href: "/compare" },
                { label: post.meta.title },
              ]}
            />

            <FadeIn>
              <header className="mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                  {post.meta.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {post.meta.description}
                </p>
              </header>
            </FadeIn>

            <FadeIn delay={0.15}>
              <article className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
                <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
              </article>
            </FadeIn>

            {otherComparisons.length > 0 && (
              <section className="mt-16 pt-12">
                <GradientDivider className="mb-12" />
                <FadeIn>
                  <h2 className="text-2xl font-bold mb-6">
                    Other comparisons
                  </h2>
                </FadeIn>
                <FadeInStagger className="grid gap-4">
                  {otherComparisons.map((c) => (
                    <StaggerItem key={c.meta.slug}>
                      <Link
                        href={`/compare/${c.meta.slug}`}
                        className="group block"
                      >
                        <GlowCard className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {c.meta.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {c.meta.description}
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
