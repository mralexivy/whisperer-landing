import { Mic, X } from "lucide-react";

export const HUDOverlay = () => {
  return (
    <div className="inline-flex items-center gap-3 bg-[#14142B] rounded-full px-2 py-2 shadow-2xl border border-white/[0.06]">
      {/* Left mic with status indicator */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#5B6CF7]/15">
        <Mic className="w-6 h-6 text-[#5B6CF7]" />
        <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#5B6CF7] border-2 border-[#14142B]" />
      </div>

      {/* Waveform dots */}
      <div className="flex items-center gap-1 px-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7]/80 animate-pulse"
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
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5B6CF7]/15 hover:bg-[#5B6CF7]/25 transition-colors">
          <Mic className="w-5 h-5 text-[#5B6CF7]" />
        </button>

        {/* Cancel button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/15 hover:bg-red-500/25 transition-colors">
          <X className="w-5 h-5 text-red-400" />
        </button>
      </div>
    </div>
  );
};
