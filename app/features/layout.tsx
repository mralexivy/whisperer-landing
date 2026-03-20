import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
