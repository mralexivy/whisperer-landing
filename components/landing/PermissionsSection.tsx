import { Mic, Accessibility, Keyboard, Apple, ShieldCheck, Sparkles } from "lucide-react";

const permissions = [
  {
    icon: Mic,
    name: "Microphone",
    description: "Used to record your voice.",
  },
  {
    icon: Accessibility,
    name: "Accessibility",
    description: "Used to insert text into the active field.",
  },
  {
    icon: Keyboard,
    name: "Input Monitoring",
    description: "Used to detect your shortcut globally.",
  },
];

const setupSteps = [
  {
    icon: Apple,
    label: "Install from App Store",
  },
  {
    icon: ShieldCheck,
    label: "Grant permissions",
  },
  {
    icon: Sparkles,
    label: "Ready to go!",
  },
];

export const PermissionsSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            One-time setup <span className="text-muted-foreground">(required by macOS)</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whisperer needs macOS permissions to listen for your shortcut and insert text into other apps. This is standard for system-wide productivity tools.
          </p>
        </div>

        {/* Permissions Table */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {permissions.map((permission, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 p-6 ${
                  index < permissions.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <permission.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {permission.name}
                  </h3>
                  <p className="text-muted-foreground">{permission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup flow preview */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {setupSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 w-full sm:w-auto sm:min-w-[200px] text-center"
            >
              <div className="text-xs text-muted-foreground mb-3">Step {index + 1}</div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-medium text-foreground">
                {step.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground bg-card/50 inline-block px-6 py-3 rounded-lg border border-border">
            Whisperer does not transmit audio. Permissions only enable local dictation and insertion.
          </p>
        </div>
      </div>
    </section>
  );
};
