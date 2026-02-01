import { Keyboard, Mic, MousePointerClick } from "lucide-react";

const steps = [
  {
    icon: Keyboard,
    step: "01",
    title: "Hold your key",
    description: "Hold Fn or your chosen shortcut to start recording.",
  },
  {
    icon: Mic,
    step: "02",
    title: "Speak naturally",
    description: "See a live preview and waveform while you talk.",
  },
  {
    icon: MousePointerClick,
    step: "03",
    title: "Release to insert",
    description: "On release, Whisperer refines the final text and inserts it into the focused field.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How <span className="text-primary">Whisperer</span> works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to effortless dictation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              {/* Icon */}
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground bg-card/50 inline-block px-6 py-3 rounded-lg border border-border">
            Streaming during recording + a final pass on release for maximum accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};
