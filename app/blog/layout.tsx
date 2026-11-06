import { SiteHeader, SiteFooter } from "@/components/site/Shell";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0B19] text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
