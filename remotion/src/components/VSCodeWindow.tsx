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

export const VSCodeWindow: React.FC<{
  insertedText: string;
  cursorVisible: boolean;
}> = ({ insertedText, cursorVisible }) => {
  const frame = useCurrentFrame();
  const cursorOpacity = cursorVisible
    ? interpolate(Math.sin(frame * 0.2), [-1, 1], [0.3, 1])
    : 0;

  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden shadow-2xl flex flex-col"
      style={{
        background: "#1E1E2E",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: "#181828",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[hsl(0,62%,50%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(45,93%,47%)]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-2 text-white/50 text-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.5 0L7.5 9.5 3.5 6.5 1 8l6.5 5L1 18l2.5 1.5 4-3 10 9.5 5.5-2.5V2.5L17.5 0zM17.5 17.5l-7-5.5 7-5.5v11z"
              fill="#007ACC"
            />
          </svg>
          <span className="text-white/60">app.py — MyProject</span>
        </div>
        <div className="w-16" />
      </div>

      {/* Tab bar */}
      <div
        className="flex"
        style={{
          background: "#141424",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          className="flex items-center px-4 py-1.5 text-white/40 text-xs"
          style={{ borderRight: "1px solid rgba(255,255,255,0.04)" }}
        >
          app.py
        </div>
        <div
          className="flex items-center gap-1.5 px-4 py-1.5 text-white/80 text-xs"
          style={{
            background: "#1E1E2E",
            borderRight: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4845A"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>Claude Code</span>
          <span className="text-white/30 ml-1">×</span>
        </div>
        <div className="flex items-center px-4 py-1.5 text-white/40 text-xs">
          utils.py
        </div>
      </div>

      {/* Claude Code content */}
      <div className="flex flex-1 min-h-0">
        {/* Activity bar */}
        <div
          className="w-[44px] flex flex-col items-center py-3 gap-4"
          style={{
            background: "#141424",
            borderRight: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          >
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4845A"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="mb-3">
              <svg width="36" height="30" viewBox="0 0 48 40" fill="none">
                <rect x="8" y="8" width="32" height="24" rx="4" fill="#D4845A" />
                <rect x="4" y="4" width="8" height="12" rx="2" fill="#D4845A" />
                <rect x="36" y="4" width="8" height="12" rx="2" fill="#D4845A" />
                <rect x="16" y="16" width="4" height="4" rx="1" fill="#1E1E2E" />
                <rect x="28" y="16" width="4" height="4" rx="1" fill="#1E1E2E" />
                <rect x="4" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                <rect x="16" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                <rect x="28" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                <rect x="36" y="32" width="8" height="6" rx="2" fill="#D4845A" />
              </svg>
            </div>
            <p className="text-white/30 text-xs text-center leading-relaxed max-w-[280px]">
              Tired of repeating yourself? Tell Claude to remember what
              you&apos;ve told it using CLAUDE.md.
            </p>
          </div>

          {/* Bottom hint */}
          <div className="flex items-center justify-center gap-2 py-2 text-white/30 text-xs">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            <span>Prefer the Terminal experience?</span>
            <span className="text-white/50">Switch back in Settings.</span>
            <span className="text-white/20">×</span>
          </div>

          {/* Input box */}
          <div
            className="mx-5 mb-4 rounded-2xl"
            style={{
              border: "2px solid rgba(212,132,90,0.5)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {/* Text input area */}
            <div className="px-5 py-4 min-h-[48px]">
              <span className="text-white/90 text-[15px] leading-relaxed">
                {insertedText}
              </span>
              <span
                className="inline-block w-[2px] h-[16px] bg-white ml-0.5 align-middle"
                style={{ opacity: cursorOpacity }}
              />
            </div>
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-3 text-white/30">
                <span className="text-xl leading-none">+</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 12h8" />
                </svg>
                <span className="text-white/10 text-lg">|</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                <span className="text-white/40 text-xs">
                  extension-output-etmoffat.pip-pack...
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  <span>Bypass permissions</span>
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(212,132,90,0.7)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 py-1"
        style={{ background: "#007ACC" }}
      >
        <div className="flex items-center gap-3 text-white/90 text-[11px]">
          <span>main</span>
        </div>
        <div className="flex items-center gap-3 text-white/90 text-[11px]">
          <span>Claude Code</span>
        </div>
      </div>
    </div>
  );
};

export const FadedHUD: React.FC<{ waveformIntensity?: number }> = ({
  waveformIntensity = 0.5,
}) => {
  const frame = useCurrentFrame();

  const waveformBars = [...Array(24)].map((_, i) => {
    const center = 12;
    const dist = Math.abs(i - center) / center;
    const h = Math.max(0.15, Math.min(1, (0.2 + (1 - dist) * 0.8) * waveformIntensity));
    return h;
  });

  return (
    <div className="flex flex-col items-center" style={{ opacity: 0.35 }}>
      <div
        className="relative rounded-full px-4 py-2.5 flex items-center gap-3.5 shadow-2xl shadow-black/40"
        style={{
          background: "#111122",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
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
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-[2.5px] border-[#111122]" />
        </div>

        <div className="w-6 h-6 rounded flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.5 0L7.5 9.5 3.5 6.5 1 8l6.5 5L1 18l2.5 1.5 4-3 10 9.5 5.5-2.5V2.5L17.5 0zM17.5 17.5l-7-5.5 7-5.5v11z"
              fill="#007ACC"
            />
          </svg>
        </div>

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

        <div
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(91,108,247,0.08)",
            border: "1.5px solid rgba(91,108,247,0.2)",
          }}
        >
          <MicIcon size={18} />
        </div>

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
    </div>
  );
};
