import { Mic, X } from "lucide-react";

export const HUDOverlay = () => {
  return (
    <div className="inline-flex items-center gap-3 bg-white rounded-full px-2 py-2 shadow-2xl">
      {/* Left mic with status indicator */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
        <Mic className="w-6 h-6 text-primary" />
        <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-primary border-2 border-white" />
      </div>

      {/* Waveform dots */}
      <div className="flex items-center gap-1 px-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse"
            style={{
              animationDelay: `${i * 0.08}s`,
              opacity: 0.4 + Math.sin(i * 0.5) * 0.6,
            }}
          />
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        {/* Secondary mic button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
          <Mic className="w-5 h-5 text-primary" />
        </button>

        {/* Cancel button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 transition-colors">
          <X className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
};
