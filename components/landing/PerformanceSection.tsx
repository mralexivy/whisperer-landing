import { Zap, Cpu, Layers, HardDrive, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const performancePoints = [
  {
    icon: Zap,
    text: "Model preloading reduces 'first dictation lag'",
  },
  {
    icon: Cpu,
    text: "Apple Silicon optimized via Metal acceleration",
  },
  {
    icon: Layers,
    text: "Streaming architecture with chunk overlap + dedupe",
  },
  {
    icon: HardDrive,
    text: "Memory-bounded recordings (5 min cap) for stability",
  },
];

export const PerformanceSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Fast enough for <span className="text-primary">daily dictation</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {performancePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">{point.text}</span>
              </div>
            ))}
          </div>

          {/* Engineering details */}
          <Accordion type="single" collapsible>
            <AccordionItem
              value="engineering"
              className="bg-card border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-sm text-muted-foreground">Engineering details</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-muted-foreground">Audio capture</div>
                    <div className="text-foreground font-mono">16kHz mono</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-muted-foreground">Chunk size</div>
                    <div className="text-foreground font-mono">2s chunks, 0.5s overlap</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-muted-foreground">Context</div>
                    <div className="text-foreground font-mono">Context carry + boundary dedupe</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-muted-foreground">Final pass</div>
                    <div className="text-foreground font-mono">Refine on release</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
