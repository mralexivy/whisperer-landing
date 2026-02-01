import { Button } from "@/components/ui/button";
import { Check, Code, Layers, BookOpen, Keyboard, Apple } from "lucide-react";

const proFeatures = [
  {
    icon: Code,
    title: "Code Mode",
    features: ["Symbol grammar", "Casing commands", "Literal identifiers"],
  },
  {
    icon: Layers,
    title: "Per-app Profiles",
    features: ["Automatic switching", "Different format rules per app", "Per-app language (optional)"],
  },
  {
    icon: BookOpen,
    title: "Personal Dictionary",
    features: ["Add names/acronyms/terms", "Quick add from overlay", "Import word lists (optional)"],
  },
  {
    icon: Keyboard,
    title: "Pro Insertion Engine",
    features: ["Clipboard-safe paste", "Typing fallback when paste fails", "Per-app insertion method"],
  },
];

export const ProPackSection = () => {
  return (
    <section id="pro-pack" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pro Pack <span className="text-primary">(Lifetime)</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Power features for people who dictate all day: Code Mode, profiles, dictionary, and pro insertion.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Base App */}
          <div className="bg-card border border-border rounded-2xl p-8 relative">
            <div className="text-sm text-muted-foreground mb-2">Base App</div>
            <div className="text-4xl font-bold text-foreground mb-2">
              $2.99
              <span className="text-base font-normal text-muted-foreground"> one-time</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Core dictation features for everyday use.
            </p>
            <ul className="space-y-3 mb-8">
              {["Hold-to-record dictation", "Live preview", "100+ languages", "Multiple Whisper models", "Offline processing"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full" size="lg">
              <Apple className="w-5 h-5 mr-2" />
              Download Free Trial
            </Button>
          </div>

          {/* Pro Pack */}
          <div className="bg-card border-2 border-primary rounded-2xl p-8 relative shadow-[0_0_60px_hsl(142_76%_50%/0.15)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="text-sm text-primary mb-2">Pro Pack</div>
            <div className="text-4xl font-bold text-foreground mb-2">
              $14.99
              <span className="text-base font-normal text-muted-foreground"> lifetime</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Everything in Base, plus power features.
            </p>
            <ul className="space-y-3 mb-8">
              {["Everything in Base", "Code Mode", "Per-app Profiles", "Personal Dictionary", "Pro Insertion Engine"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" className="w-full" size="lg">
              <Apple className="w-5 h-5 mr-2" />
              Get Pro Pack
            </Button>
          </div>
        </div>

        {/* Pro Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.features.map((f, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            No subscriptions. Pay once. Works offline.
          </p>
        </div>
      </div>
    </section>
  );
};
