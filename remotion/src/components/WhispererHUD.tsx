import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

const MicIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 22,
  className = "text-[#5B6CF7]",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const XIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#EF4444]"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const VSCodeIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M17.5 0L7.5 9.5 3.5 6.5 1 8l6.5 5L1 18l2.5 1.5 4-3 10 9.5 5.5-2.5V2.5L17.5 0zM17.5 17.5l-7-5.5 7-5.5v11z"
      fill="#007ACC"
    />
  </svg>
);

export const WhispererHUD: React.FC<{
  transcriptionText: string;
  isActive: boolean;
  mode: "standard" | "handsFree";
  waveformIntensity?: number;
}> = ({ transcriptionText, isActive, mode, waveformIntensity = 1 }) => {
  const frame = useCurrentFrame();

  const waveformBars = [...Array(24)].map((_, i) => {
    const center = 12;
    const dist = Math.abs(i - center) / center;
    const baseH = 0.2 + (1 - dist) * 0.8;
    const animated = isActive
      ? Math.sin(frame * 0.15 + i * 0.7) * 0.3 +
        Math.sin(frame * 0.25 + i * 1.1) * 0.15
      : 0;
    const h = Math.max(0.1, Math.min(1, (baseH + animated) * waveformIntensity));
    return h;
  });

  return (
    <div className="relative flex flex-col items-center">

      {/* Speech bubble */}
      <div className="relative mb-6">
        <div
          className="relative rounded-2xl px-5 pt-4 pb-4 shadow-2xl shadow-black/40 w-[420px]"
          style={{
            background: "#131325",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full bg-[#5B6CF7] shrink-0"
                style={{
                  opacity: isActive
                    ? interpolate(Math.sin(frame * 0.1), [-1, 1], [0.6, 1])
                    : 0.4,
                }}
              />
              <span className="text-[#5B6CF7] text-[11px] font-bold uppercase tracking-[0.18em]">
                Live Transcription
              </span>
            </div>
            {mode === "handsFree" && (
              <div className="flex items-center gap-1.5 bg-[#5B6CF7]/10 border border-[#5B6CF7]/20 rounded-full px-2.5 py-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7]" />
                <span className="text-[#5B6CF7] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Hands-Free
                </span>
              </div>
            )}
          </div>

          {/* Gradient divider */}
          <div className="h-[2px] -mx-5 bg-gradient-to-r from-[#5B6CF7] via-[#7C5CF7] to-[#8B5CF6] mb-4" />

          {/* Transcription text */}
          <p className="text-white/70 text-[15px] leading-relaxed min-h-[44px]">
            {transcriptionText}
            {isActive && (
              <span
                className="inline-block w-[2px] h-[17px] bg-[#5B6CF7] ml-0.5 align-middle"
                style={{
                  opacity: interpolate(
                    Math.sin(frame * 0.15),
                    [-1, 1],
                    [0.3, 1]
                  ),
                }}
              />
            )}
          </p>
        </div>

        {/* Pointer / caret */}
        <div
          className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "12px solid #131325",
          }}
        />
        <div
          className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-0 h-0 -z-10"
          style={{
            borderLeft: "13px solid transparent",
            borderRight: "13px solid transparent",
            borderTop: "13px solid rgba(255,255,255,0.06)",
          }}
        />
      </div>

      {/* Control bar */}
      {mode === "standard" ? (
        <div
          className="relative rounded-full px-4 py-2.5 flex items-center gap-3.5 shadow-2xl shadow-black/40"
          style={{
            background: "#111122",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Primary mic */}
          <div className="relative">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "#1E1E3A",
                border: "1.5px solid rgba(91,108,247,0.25)",
              }}
            >
              <MicIcon />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#5B6CF7] border-[2.5px] border-[#111122]" />
          </div>

          {/* VS Code icon */}
          <div className="w-6 h-6 rounded flex items-center justify-center">
            <VSCodeIcon />
          </div>

          {/* Waveform */}
          <div className="flex items-center gap-[2px] h-8 mx-1">
            {waveformBars.map((h, i) => (
              <div
                key={i}
                className="w-[2.5px] rounded-full"
                style={{
                  height: `${h * 100}%`,
                  background: "linear-gradient(to top, #5B6CF7, #8B5CF6)",
                  opacity: 0.7 + h * 0.3,
                }}
              />
            ))}
          </div>

          {/* Secondary mic */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(91,108,247,0.08)",
              border: "1.5px solid rgba(91,108,247,0.2)",
            }}
          >
            <MicIcon size={18} />
          </div>

          {/* Close button */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(239,68,68,0.12)",
              border: "1.5px solid rgba(239,68,68,0.18)",
            }}
          >
            <XIcon />
          </div>
        </div>
      ) : (
        /* Hands-Free control bar */
        <div
          className="relative rounded-full px-4 py-2.5 flex items-center justify-center gap-3.5 shadow-2xl shadow-black/40 w-[380px]"
          style={{
            background: "#111122",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Mic icon with ring */}
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full border-2 border-[#5B6CF7]/30"
              style={{
                opacity: interpolate(
                  Math.sin(frame * 0.08),
                  [-1, 1],
                  [0.5, 1]
                ),
              }}
            />
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "#1E1E3A",
                border: "1.5px solid rgba(91,108,247,0.25)",
              }}
            >
              <MicIcon />
            </div>
          </div>

          {/* Hands-Free Mode label */}
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold">
              Hands-Free Mode
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-white/40 text-xs">Press</span>
              <span className="bg-white/10 border border-white/[0.08] rounded px-1.5 py-0.5 text-white/60 text-[10px] font-semibold">
                Fn
              </span>
              <span className="text-white/40 text-xs">to stop</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
