import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { fontFamily } from "../lib/font";
import { SceneCall, SceneStudio, studioLength } from "../scenes/TourScenes";

/** Voiced "Meetings" demo for the site: call detected → live transcript of the voiced call → notes. */
const T = 16;
const CALL = 126;
const HOLD = 72;
export const MEETING_DEMO_FRAMES = CALL + studioLength(HOLD) - T;

export const MeetingDemo: React.FC = () => (
  <AbsoluteFill style={{ background: "#0B0B19", fontFamily }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={CALL}>
        <SceneCall />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={studioLength(HOLD)}>
        <SceneStudio hold={HOLD} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
