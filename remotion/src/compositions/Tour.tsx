import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { fontFamily } from "../lib/font";
import {
  SceneCall, SceneStudio, SceneLLM, SceneMCP, SceneCalendar, SceneDictation, ScenePrice, SceneEnd,
  S1_CALL, S2_STUDIO, S3_LLM, S4_MCP, S5_CAL, S6_DICT, S7_PRICE, S8_END,
} from "../scenes/TourScenes";

const T = 16;
const SCENES: [React.FC, number][] = [
  [SceneCall, S1_CALL],
  [SceneStudio, S2_STUDIO],
  [SceneLLM, S3_LLM],
  [SceneMCP, S4_MCP],
  [SceneCalendar, S5_CAL],
  [SceneDictation, S6_DICT],
  [ScenePrice, S7_PRICE],
  [SceneEnd, S8_END],
];
export const TOUR_DURATION = SCENES.reduce((a, [, d]) => a + d, 0) - T * (SCENES.length - 1);

export const Tour: React.FC = () => (
  <AbsoluteFill style={{ background: "#0B0B19", fontFamily }}>
    <TransitionSeries>
      {SCENES.flatMap(([C, d], i) => {
        const items = [
          <TransitionSeries.Sequence key={`s${i}`} durationInFrames={d}>
            <C />
          </TransitionSeries.Sequence>,
        ];
        if (i < SCENES.length - 1)
          items.push(<TransitionSeries.Transition key={`t${i}`} presentation={fade()} timing={linearTiming({ durationInFrames: T })} />);
        return items;
      })}
    </TransitionSeries>
  </AbsoluteFill>
);
