import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { MenuBarMockup } from "./MenuBarMockup";
import { HUDOverlay } from "./HUDOverlay";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Dictation that types{" "}
              <span className="text-primary">anywhere</span> on your Mac.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Hold <span className="text-foreground font-medium">Fn</span> (or your shortcut), speak, release. 
              Text appears in the focused field. <span className="text-primary font-medium">100% offline.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" className="gap-3">
                <Apple className="w-5 h-5" />
                Download on Mac App Store
              </Button>
              <Button variant="heroOutline" size="xl" className="gap-3">
                <Play className="w-5 h-5" />
                Watch 20s demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Offline on-device transcription</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Works in Slack, Gmail, VS Code, Terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Live preview while you speak</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Menu Bar Mockup */}
          <div className="flex-1 w-full max-w-md flex justify-center">
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-8 bg-primary/20 rounded-3xl blur-3xl" />
              
              {/* Menu Bar Mockup */}
              <div className="relative">
                <MenuBarMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HUD Overlay - Fixed at bottom, horizontally centered on full viewport */}
      <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center animate-float">
        <HUDOverlay />
      </div>
    </section>
  );
};
