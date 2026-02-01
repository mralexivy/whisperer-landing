import { Zap, Shield, Lock } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Hold-to-talk. Release-to-insert.",
    description: "No copy/paste steps. No switching apps. Just speak into the active cursor.",
  },
  {
    icon: Shield,
    title: "Doesn't trigger by accident.",
    description: "Smart Fn combo filtering prevents accidental recordings when using brightness/volume keys.",
  },
  {
    icon: Lock,
    title: "Your voice stays on your Mac.",
    description: "No accounts. No servers. No audio uploads.",
  },
];

export const ValueProps = () => {
  return (
    <section id="product" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-primary">Whisperer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for developers and power users who need fast, reliable dictation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(142_76%_50%/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
