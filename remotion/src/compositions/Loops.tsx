import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, Camera } from "../components/stage";
import { MeetingStudio, type StudioTiming } from "../components/MeetingStudio";
import { MCPChat, chatDefaults } from "../components/Panels";
import { CLAMP } from "../lib/anim";
import { fontFamily } from "../lib/font";

export const LOOP_FRAMES = 300;
const XFADE = 22;

/** Crossfades the last frames back into frame 0 so the clip loops without a jump. */
function Looped({ render }: { render: (f: number) => React.ReactNode }) {
  const f = useCurrentFrame();
  const back = interpolate(f, [LOOP_FRAMES - XFADE, LOOP_FRAMES - 1], [0, 1], CLAMP);
  return (
    <AbsoluteFill style={{ fontFamily }}>
      <Backdrop>
        <AbsoluteFill>{render(f)}</AbsoluteFill>
        {back > 0 && <AbsoluteFill style={{ opacity: back }}><Backdrop>{render(0)}</Backdrop></AbsoluteFill>}
      </Backdrop>
    </AbsoluteFill>
  );
}

const LOOP_STUDIO: StudioTiming = { every: 2, start: 8, stopAt: 166, writing: 26, noteGap: 10 };

export const MeetingLoop: React.FC = () => (
  <Looped
    render={(f) => (
      <Camera f={f} cx={800} cy={500} keys={[{ f: 0, x: 590, y: 338, s: 1.3 }]}>
        <MeetingStudio f={f} t={LOOP_STUDIO} />
      </Camera>
    )}
  />
);

export const McpLoop: React.FC = () => (
  <Looped
    render={(f) => (
      <Camera f={f} cx={800} cy={500} keys={[{ f: 0, x: 450, y: 298, s: 1.6 }]}>
        <MCPChat f={f} t={chatDefaults(8)} />
      </Camera>
    )}
  />
);
