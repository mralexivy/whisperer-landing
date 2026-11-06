import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

const KEY_STYLE = {
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)",
};

const Key: React.FC<{
  label: string;
  w?: number;
  h?: number;
  className?: string;
  fontSize?: string;
}> = ({ label, w = 46, h = 46, className = "", fontSize = "text-sm" }) => (
  <div
    className={`bg-[#1C1C3A] border border-white/[0.06] rounded-lg flex items-center justify-center ${className}`}
    style={{ ...KEY_STYLE, width: w, height: h }}
  >
    <span className={`text-white/40 ${fontSize} font-medium`}>{label}</span>
  </div>
);

const ModKey: React.FC<{ label: string; w?: number }> = ({ label, w = 46 }) => (
  <div
    className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg flex items-center justify-center"
    style={{ ...KEY_STYLE, width: w, height: 46 }}
  >
    <span className="text-white/30 text-xs">{label}</span>
  </div>
);

export const MacKeyboard: React.FC<{
  fnPressed: boolean;
  highlightKeys?: string[];
  fnPressProgress?: number;
}> = ({ fnPressed, highlightKeys = [], fnPressProgress = fnPressed ? 1 : 0 }) => {
  const frame = useCurrentFrame();

  const fnTranslateY = interpolate(fnPressProgress, [0, 1], [0, 2]);
  const fnGlowOpacity = interpolate(fnPressProgress, [0, 1], [0, 1]);
  const fnHeight = interpolate(fnPressProgress, [0, 1], [46, 42]);

  return (
    <div className="relative">
      <div className="relative flex flex-col gap-1.5">
        {/* Row 0: A row (ASDF...) */}
        <div className="flex gap-1.5 justify-center">
          <Key label="⇪ Caps" w={72} fontSize="text-xs" className="!text-white/30" />
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((k) => {
            const isHighlighted = highlightKeys.includes(k);
            return isHighlighted ? (
              <div key={k} className="relative group">
                <div
                  className="absolute -inset-1.5 bg-gradient-to-br from-[#5B6CF7]/30 to-[#8B5CF6]/30 rounded-xl blur-md"
                  style={{ opacity: fnGlowOpacity }}
                />
                <div
                  className="relative border rounded-lg w-[46px] flex items-center justify-center"
                  style={{
                    height: 42,
                    background: "linear-gradient(135deg, #5B6CF7, #8B5CF6)",
                    borderColor: "rgba(91,108,247,0.5)",
                    transform: `translateY(2px)`,
                    boxShadow: "0 4px 12px rgba(91,108,247,0.4)",
                  }}
                >
                  <span className="text-white text-sm font-bold">{k}</span>
                </div>
              </div>
            ) : (
              <Key key={k} label={k} />
            );
          })}
          {[";", "'"].map((k) => (
            <Key key={k} label={k} fontSize="text-sm" className="!text-white/30" />
          ))}
          <Key label="Return" w={72} fontSize="text-xs" className="!text-white/30" />
        </div>

        {/* Row 1: Z row */}
        <div className="flex gap-1.5 justify-center">
          <Key label="⇧ Shift" w={72} fontSize="text-xs" className="!text-white/30" />
          {["Z", "X", "C", "V", "B", "N", "M"].map((k) => {
            const isHighlighted = highlightKeys.includes(k);
            return isHighlighted ? (
              <div key={k} className="relative group">
                <div
                  className="absolute -inset-1.5 bg-gradient-to-br from-[#5B6CF7]/30 to-[#8B5CF6]/30 rounded-xl blur-md"
                  style={{ opacity: fnGlowOpacity }}
                />
                <div
                  className="relative border rounded-lg w-[46px] flex items-center justify-center"
                  style={{
                    height: fnHeight,
                    background: isHighlighted
                      ? `linear-gradient(135deg, #5B6CF7, #8B5CF6)`
                      : "#1C1C3A",
                    borderColor: isHighlighted
                      ? "rgba(91,108,247,0.5)"
                      : "rgba(255,255,255,0.06)",
                    transform: `translateY(${fnTranslateY}px)`,
                    boxShadow: isHighlighted
                      ? "0 4px 12px rgba(91,108,247,0.4)"
                      : KEY_STYLE.boxShadow,
                  }}
                >
                  <span className="text-white text-sm font-bold">{k}</span>
                </div>
              </div>
            ) : (
              <Key key={k} label={k} />
            );
          })}
          {[",", ".", "/"].map((k) => (
            <Key key={k} label={k} fontSize="text-sm" className="!text-white/30" />
          ))}
          <Key label="⇧ Shift" w={72} fontSize="text-xs" className="!text-white/30" />
        </div>

        {/* Row 2: Bottom modifier row */}
        <div className="flex gap-1.5 justify-center items-end">
          {/* Fn key */}
          <div className="relative group">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-2 bg-gradient-to-br from-[#5B6CF7]/40 to-[#8B5CF6]/40 rounded-2xl blur-lg"
              style={{ opacity: fnGlowOpacity }}
            />
            <div
              className="absolute -inset-1 bg-gradient-to-br from-[#5B6CF7]/20 to-[#8B5CF6]/20 rounded-xl"
              style={{ opacity: fnGlowOpacity }}
            />
            <div
              className="relative border rounded-lg w-[46px] flex items-center justify-center"
              style={{
                height: fnHeight,
                background: fnPressed
                  ? "linear-gradient(135deg, #5B6CF7, #8B5CF6)"
                  : "#1C1C3A",
                borderColor: fnPressed
                  ? "rgba(91,108,247,0.5)"
                  : "rgba(255,255,255,0.06)",
                transform: `translateY(${fnTranslateY}px)`,
                boxShadow: fnPressed
                  ? "0 4px 12px rgba(91,108,247,0.4)"
                  : KEY_STYLE.boxShadow,
              }}
            >
              <span
                className={`text-sm font-bold ${fnPressed ? "text-white" : "text-white/40"}`}
              >
                fn
              </span>
            </div>
          </div>

          <ModKey label="⌃" />
          <ModKey label="⌥" />
          <ModKey label="⌘" w={58} />
          {/* Space bar */}
          <div
            className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg flex items-center justify-center"
            style={{ ...KEY_STYLE, width: 260, height: 46 }}
          />
          <ModKey label="⌘" w={58} />
          <ModKey label="⌥" />

          {/* Arrow keys cluster */}
          <div className="flex flex-col gap-0.5 items-center">
            <div
              className="bg-[#1C1C3A] border border-white/[0.06] rounded-md w-[36px] h-[22px] flex items-center justify-center"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.03), 0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-white/20 text-[10px]">▲</span>
            </div>
            <div className="flex gap-0.5">
              {["◀", "▼", "▶"].map((arrow) => (
                <div
                  key={arrow}
                  className="bg-[#1C1C3A] border border-white/[0.06] rounded-md w-[36px] h-[22px] flex items-center justify-center"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.03), 0 1px 2px rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="text-white/20 text-[10px]">{arrow}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
