import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllComparisons, getComparisonBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema, comparisonPageSchema, faqSchema, JsonLd } from "@/lib/structured-data";
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
          url: `/assets/og/og-compare-${slug}.png`,
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
      images: [`/assets/og/og-compare-${slug}.png`],
    },
    alternates: { canonical: `https://whispererapp.com/compare/${slug}` },
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

  // Public pricing, November 2026, one seat. `price` is a plain number; omit it when there is no single figure.
  const competitorPrices: Record<string, { name: string; price?: string; priceNote?: string; category: string }> = {
    "vs-granola": { name: "Granola", price: "14", priceNote: "Business, per user per month; free Basic plan available", category: "Meeting Notes" },
    "vs-otter": { name: "Otter", price: "16.99", priceNote: "Pro, per month billed monthly ($8.33/month billed yearly)", category: "Meeting Notes" },
    "vs-fireflies": { name: "Fireflies", price: "18", priceNote: "Pro, per month billed monthly ($10/month billed yearly)", category: "Meeting Notes" },
    "vs-wispr-flow": { name: "Wispr Flow", price: "15", priceNote: "Pro, per user per month billed monthly ($12 billed yearly)", category: "Dictation" },
    "vs-superwhisper": { name: "Superwhisper", price: "8.49", priceNote: "Pro, per month ($84.99 per year or $249.99 lifetime)", category: "Dictation" },
    "vs-macwhisper": { name: "MacWhisper", priceNote: "Pro is a one-time €64 license", category: "Transcription" },
    "vs-voice-ink": { name: "VoiceInk", price: "25", priceNote: "Solo license, one-time, one Mac", category: "Dictation" },
    "vs-apple-dictation": { name: "Apple Dictation", price: "0", priceNote: "Built into macOS", category: "Dictation" },
    "vs-willow": { name: "Willow", price: "15", priceNote: "Pro, per user per month billed monthly ($12 billed yearly)", category: "Dictation" },
    "vs-spokenly": { name: "Spokenly", price: "12", priceNote: "Pro, per month billed yearly ($144 per year); free and $29 Local+ tiers", category: "Dictation" },
    "vs-voibe": { name: "Voibe", price: "9.90", priceNote: "Dictation plan, per month ($99 per year or $199 lifetime)", category: "Dictation" },
    "vs-jestype": { name: "JesType", priceNote: "Personal license is a one-time €14.95", category: "Dictation" },
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
          priceNote: competitor.priceNote,
          category: competitor.category,
          slug: post.meta.slug,
        })} />
      )}
      {post.meta.faqs && post.meta.faqs.length > 0 && <JsonLd data={faqSchema(post.meta.faqs)} />}

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
