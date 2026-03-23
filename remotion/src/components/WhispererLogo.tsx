import React from "react";

export const WhispererLogo: React.FC = () => (
  <div className="flex items-center gap-4">
    <div className="w-14 h-14 rounded-xl bg-[#14142B] border border-white/[0.08] flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#5B6CF7" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect x="0.6" y="10" width="1.5" height="4" rx="0.75" fill="url(#waveGrad)" />
        <rect x="3.2" y="8.5" width="1.5" height="7" rx="0.75" fill="url(#waveGrad)" />
        <rect x="5.9" y="7" width="1.5" height="10" rx="0.75" fill="url(#waveGrad)" />
        <rect x="8.6" y="5" width="1.5" height="14" rx="0.75" fill="url(#waveGrad)" />
        <rect x="11.3" y="3.5" width="1.5" height="17" rx="0.75" fill="url(#waveGrad)" />
        <rect x="13.9" y="5" width="1.5" height="14" rx="0.75" fill="url(#waveGrad)" />
        <rect x="16.6" y="7" width="1.5" height="10" rx="0.75" fill="url(#waveGrad)" />
        <rect x="19.3" y="8.5" width="1.5" height="7" rx="0.75" fill="url(#waveGrad)" />
        <rect x="21.9" y="10" width="1.5" height="4" rx="0.75" fill="url(#waveGrad)" />
      </svg>
    </div>
    <span className="text-white text-2xl font-semibold">Whisperer</span>
  </div>
);
