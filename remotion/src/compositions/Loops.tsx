import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, Camera, Cursor } from "../components/stage";
import { ReminderCard } from "../components/Desktop";
import { MeetingStudio, type StudioTiming } from "../components/MeetingStudio";
import { CalendarPanel, DictationSlack, KeyCap, MCPChat, ProviderList, chatDefaults, dictBeats } from "../components/Panels";
import { CLAMP, EASE_OUT, rise } from "../lib/anim";
import { fontFamily } from "../lib/font";

export const LOOP_FRAMES = 300;
const XFADE = 22;

// Camera follows Bang Motion's shot-size rule: it moves in to whatever is telling the story (medium close-up)
// and back out to wide on the beat, instead of holding one static framing. Every loop ends on its opening
// framing before the crossfade, so the seam never shows.

/** Crossfades the last frames back into frame 0 so the clip loops without a jump. */
function Looped({ render, frames = LOOP_FRAMES }: { render: (f: number) => React.ReactNode; frames?: number }) {
  const f = useCurrentFrame();
  const back = interpolate(f, [frames - XFADE, frames - 1], [0, 1], CLAMP);
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
      <Camera
        f={f}
        cx={800}
        cy={500}
        keys={[
          { f: 0, x: 590, y: 338, s: 1.3 },
          { f: 34, x: 690, y: 290, s: 1.72 },   // close on the live transcript
          { f: 150, x: 700, y: 330, s: 1.78 },
          { f: 178, x: 620, y: 335, s: 1.38 },  // wide as the call ends and notes start writing
          { f: 206, x: 690, y: 330, s: 1.7 },   // in on the overview and decisions
          { f: 252, x: 690, y: 400, s: 1.7 },
          { f: LOOP_FRAMES - XFADE - 2, x: 590, y: 338, s: 1.3 },
        ]}
      >
        <MeetingStudio f={f} t={LOOP_STUDIO} />
      </Camera>
    )}
  />
);

export const McpLoop: React.FC = () => (
  <Looped
    render={(f) => (
      <Camera
        f={f}
        cx={800}
        cy={500}
        keys={[
          { f: 0, x: 450, y: 298, s: 1.45 },
          { f: 22, x: 560, y: 120, s: 1.95 },   // the question being asked
          { f: 52, x: 560, y: 125, s: 1.95 },
          { f: 74, x: 420, y: 205, s: 1.85 },   // the two tool calls
          { f: 106, x: 420, y: 210, s: 1.85 },
          { f: 128, x: 450, y: 300, s: 1.65 },  // the answer filling in
          { f: 220, x: 450, y: 320, s: 1.65 },
          { f: LOOP_FRAMES - XFADE - 2, x: 450, y: 298, s: 1.45 },
        ]}
      >
        <MCPChat f={f} t={chatDefaults(8)} />
      </Camera>
    )}
  />
);

/* The provider picker: the built-in model, then Claude, ChatGPT and Gemini plans. */
const AI_CLICKS = [60, 130, 200];
export const AiLoop: React.FC = () => (
  <Looped
    render={(f) => (
      <Camera
        f={f}
        cx={800}
        cy={500}
        keys={[
          { f: 0, x: 520, y: 345, s: 1.3 },
          { f: 40, x: 600, y: 320, s: 1.62 },   // follow the cursor down the providers
          { f: 70, x: 600, y: 310, s: 1.62 },
          { f: 140, x: 600, y: 370, s: 1.62 },
          { f: 206, x: 600, y: 480, s: 1.62 },
          { f: 226, x: 700, y: 262, s: 1.9 },   // close on "Written by Gemini" and the chosen row
          { f: 252, x: 700, y: 266, s: 1.9 },
          { f: LOOP_FRAMES - XFADE - 2, x: 520, y: 345, s: 1.3 },
        ]}
      >
        <ProviderList f={f} order={[["mac", 0], ["claude", AI_CLICKS[0]], ["chatgpt", AI_CLICKS[1]], ["gemini", AI_CLICKS[2]]]} />
        <Cursor
          f={f}
          appear={20}
          hide={262}
          clicks={AI_CLICKS}
          keys={[
            { f: 20, x: 760, y: 470 },
            { f: 52, x: 690, y: 304 },
            { f: 66, x: 690, y: 304 },
            { f: 120, x: 690, y: 370 },
            { f: 136, x: 690, y: 370 },
            { f: 190, x: 690, y: 502 },
          ]}
        />
      </Camera>
    )}
  />
);

/* A meeting is a minute away: the reminder slides in, Join & Record, the row starts recording. */
export const CalendarLoop: React.FC = () => (
  <Looped
    render={(f) => {
      const cardIn = rise(f, 30, 18, 24);
      const cardOut = interpolate(f, [104, 116], [0, 1], { ...CLAMP, easing: EASE_OUT });
      return (
        <Camera
          f={f}
          cx={800}
          cy={500}
          keys={[
            { f: 0, x: 470, y: 300, s: 1.35 },
            { f: 34, x: 720, y: 272, s: 1.85 },  // the reminder card and the click
            { f: 100, x: 720, y: 272, s: 1.85 },
            { f: 128, x: 660, y: 266, s: 1.9 },  // the row that starts recording
            { f: 215, x: 660, y: 270, s: 1.9 },
            { f: LOOP_FRAMES - XFADE - 2, x: 470, y: 300, s: 1.35 },
          ]}
        >
          <CalendarPanel f={f} recAt={102} />
          {f < 118 && (
            <div style={{ position: "absolute", left: 521, top: 50, transformOrigin: "0 0", scale: "1.15", translate: `${(1 - cardIn) * 380}px ${-cardOut * 30}px`, opacity: (1 - cardOut) * Math.min(1, cardIn * 2) }}>
              <ReminderCard press={interpolate(f, [96, 99, 105], [0, 1, 0], CLAMP)} />
            </div>
          )}
          <Cursor f={f} appear={46} hide={150} clicks={[99]} keys={[{ f: 46, x: 700, y: 430 }, { f: 90, x: 607, y: 143 }]} />
        </Camera>
      );
    }}
  />
);

/* Hold Fn, words stream in three languages, release, paste. */
const DICT_BEATS = dictBeats(16, 12, 2, false, 16);
export const DICTATION_LOOP_FRAMES = DICT_BEATS[DICT_BEATS.length - 1].paste + 70;
const DICT_WIDE = { x: 500, y: 300, s: 1.3 };
// Per line: in close on the HUD while you speak, back out to see the message land in the channel.
const DICT_CAM = [
  { f: 0, ...DICT_WIDE },
  ...DICT_BEATS.flatMap((b) => [
    { f: b.hold + 4, x: 520, y: 325, s: 1.8 },
    { f: b.release, x: 520, y: 322, s: 1.82 },
    { f: b.paste + 4, x: 600, y: 230, s: 1.45 },
  ]),
  { f: DICTATION_LOOP_FRAMES - XFADE - 2, ...DICT_WIDE },
];
export const DictationLoop: React.FC = () => (
  <Looped
    frames={DICTATION_LOOP_FRAMES}
    render={(f) => {
      let down = 0;
      for (const b of DICT_BEATS) down = Math.max(down, interpolate(f, [b.hold - 3, b.hold, b.release, b.release + 4], [0, 1, 1, 0], CLAMP));
      return (
        <>
          <Camera f={f} cx={860} cy={500} keys={DICT_CAM}>
            <DictationSlack f={f} beats={DICT_BEATS} />
          </Camera>
          <div style={{ position: "absolute", left: 70, top: 640 }}>
            <KeyCap label="fn" down={down} sub={down > 0.5 ? "Holding" : "Hold to talk"} />
          </div>
        </>
      );
    }}
  />
);
