import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { CodeModeSection } from "@/components/landing/CodeModeSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AppLogos } from "@/components/landing/AppLogos";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { ProPackSection } from "@/components/landing/ProPackSection";
import { PermissionsSection } from "@/components/landing/PermissionsSection";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { PerformanceSection } from "@/components/landing/PerformanceSection";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ValueProps />
      <CodeModeSection />
      <HowItWorks />
      <AppLogos />
      <FeaturesGrid />
      <ProPackSection />
      <PermissionsSection />
      <PrivacySection />
      <PerformanceSection />
      <FAQ />
      <Footer />
    </div>
  );
}
