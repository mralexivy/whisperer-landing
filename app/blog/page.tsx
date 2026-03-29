import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, StaggerItem, GlowCard } from "@/components/ui/animated";
import { SectionGlow, DotGrid } from "@/components/ui/decorations";

export const metadata: Metadata = {
  title: "Blog | Voice Coding & Dictation Tips for Mac",
  description:
    "Guides, tutorials, and insights on voice coding, offline dictation, and developer productivity on Mac. Learn to dictate code, use Code Mode, and type faster with your voice.",
  openGraph: {
    title: "Whisperer Blog — Voice Coding & Dictation Tips",
    description:
      "Guides and tutorials on voice coding, offline dictation, and developer productivity for Mac.",
    type: "website",
    images: [{ url: "/assets/og/og-blog.png", width: 1200, height: 630, alt: "Whisperer Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-blog.png"],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="pt-32 pb-24 relative">
      {/* Background atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SectionGlow position="top-center" size="xl" intensity={0.08} />
        <DotGrid />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Whisperer <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Guides, tutorials, and insights on voice coding, offline dictation,
              and developer productivity.
            </p>
          </FadeIn>

          {/* Featured post */}
          {featured && (
            <FadeIn delay={0.1} className="mb-10">
              <Link
                href={`/blog/${featured.meta.slug}`}
                className="group block"
              >
                <GlowCard className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(featured.meta.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.meta.readingTime}
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {featured.meta.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {featured.meta.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4">
                    {featured.meta.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </GlowCard>
              </Link>
            </FadeIn>
          )}

          {/* Rest of posts */}
          <FadeInStagger className="grid gap-6">
            {rest.map((post) => (
              <StaggerItem key={post.meta.slug}>
                <Link
                  href={`/blog/${post.meta.slug}`}
                  className="group block"
                >
                  <GlowCard className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                            {post.meta.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {post.meta.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {post.meta.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all shrink-0 ml-4 group-hover:translate-x-1" />
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </main>
  );
}
