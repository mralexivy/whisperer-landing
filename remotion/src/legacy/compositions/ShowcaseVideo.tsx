import React from "react";
import {
  useCurrentFrame,
  interpolate,
  spring,
  Audio,
  Sequence,
  staticFile,
} from "remotion";
import { WhispererLogo } from "../components/WhispererLogo";
import { MacKeyboard } from "../components/MacKeyboard";
import { WhispererHUD } from "../components/WhispererHUD";
import { VSCodeWindow } from "../components/VSCodeWindow";
import { SCENES, getVisibleTextAtFrame, DICTATION_TEXT } from "../timing";

const S = SCENES;

export const ShowcaseVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // ── Fn key ──
  const fnPressProgress =
    frame < S.FN_PRESS_START
      ? 0
      : frame < S.FN_RELEASE_START
        ? interpolate(frame, [S.FN_PRESS_START, S.FN_PRESS_END], [0, 1], {
            extrapolateRight: "clamp",
          })
        : frame < S.FN_RELEASE_END
          ? interpolate(frame, [S.FN_RELEASE_START, S.FN_RELEASE_END], [1, 0], {
              extrapolateRight: "clamp",
            })
          : 0;

  const fnPressed = fnPressProgress > 0.5;

  // ── HUD visibility ──
  const hudOpacity =
    frame < S.HUD_APPEAR_START
      ? 0
      : frame < S.HUD_APPEAR_END
        ? spring({ frame: frame - S.HUD_APPEAR_START, fps: 30, durationInFrames: 20 })
        : frame < S.FN_RELEASE_START
          ? 1
          : frame < S.FN_RELEASE_END
            ? interpolate(frame, [S.FN_RELEASE_START, S.FN_RELEASE_END], [1, 0], {
                extrapolateRight: "clamp",
              })
            : 0;

  const hudSlideY =
    frame < S.HUD_APPEAR_START
      ? -40
      : frame < S.HUD_APPEAR_END
        ? interpolate(
            spring({ frame: frame - S.HUD_APPEAR_START, fps: 30, durationInFrames: 20 }),
            [0, 1],
            [-40, 0]
          )
        : frame < S.FN_RELEASE_START
          ? 0
          : frame < S.FN_RELEASE_END
            ? interpolate(frame, [S.FN_RELEASE_START, S.FN_RELEASE_END], [0, -30], {
                extrapolateRight: "clamp",
              })
            : -30;

  // ── HUD transcription text ──
  const dictationFrame = frame - S.DICTATION_START;
  const hudTranscriptionText =
    frame >= S.DICTATION_START && frame < S.FN_RELEASE_END
      ? getVisibleTextAtFrame(Math.max(0, dictationFrame))
      : "";

  // ── Waveform intensity ──
  const waveformIntensity =
    frame >= S.DICTATION_START && frame < S.DICTATION_END
      ? 1
      : frame >= S.SILENCE_START && frame < S.SILENCE_END
        ? interpolate(frame, [S.SILENCE_START, S.SILENCE_END], [1, 0.1], {
            extrapolateRight: "clamp",
          })
        : 0.1;

  const isHudActive = frame >= S.DICTATION_START && frame < S.SILENCE_END;

  // ── VS Code input text — appears all at once after Fn release ──
  const textInserted = frame >= S.TEXT_INSERT_START;
  const insertedText = textInserted ? DICTATION_TEXT : "";

  // ── Intro fade ──
  const introOpacity = interpolate(frame, [S.INTRO_START, S.INTRO_START + 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // ── Title text transitions ──
  // "Just press Fn" visible until text is inserted, then switches to "Release Fn. Text inserted."
  const titlePhase1Opacity =
    frame < S.FN_RELEASE_START
      ? 1
      : frame < S.FN_RELEASE_END
        ? interpolate(frame, [S.FN_RELEASE_START, S.FN_RELEASE_END], [1, 0], {
            extrapolateRight: "clamp",
          })
        : 0;

  const titlePhase2Opacity =
    frame < S.FN_RELEASE_START
      ? 0
      : frame < S.FN_RELEASE_END
        ? interpolate(frame, [S.FN_RELEASE_START, S.FN_RELEASE_END], [0, 1], {
            extrapolateRight: "clamp",
          })
        : 1;

  return (
    <div
      className="w-full h-full bg-[#0C0C1A] p-16 pb-10 flex flex-col overflow-hidden"
      style={{ opacity: introOpacity }}
    >
      {/* Audio — key press sound */}
      <Sequence from={S.FN_PRESS_START} durationInFrames={5}>
        <Audio src={staticFile("audio/key-press.wav")} volume={0.8} />
      </Sequence>

      {/* Audio — dictation TTS */}
      <Sequence from={S.DICTATION_START} durationInFrames={S.DICTATION_END - S.DICTATION_START}>
        <Audio src={staticFile("audio/dictation.wav")} volume={0.9} />
      </Sequence>

      {/* Audio — key release sound */}
      <Sequence from={S.FN_RELEASE_START} durationInFrames={5}>
        <Audio src={staticFile("audio/key-release.wav")} volume={0.7} />
      </Sequence>

      {/* Logo */}
      <WhispererLogo />

      {/* Title area — centered, matching Screenshot 13 style */}
      <div className="text-center mt-8 mb-6 relative h-[90px]">
        {/* Phase 1: "Just press Fn" */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ opacity: titlePhase1Opacity }}
        >
          <h1 className="text-5xl font-bold text-white">
            Just press{" "}
            <span className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] bg-clip-text text-transparent">
              Fn
            </span>
          </h1>
          <p className="text-white/50 text-lg mt-3">
            Hold the key. Speak. Release. Your words appear instantly.
          </p>
        </div>

        {/* Phase 2: "Release Fn. Text inserted." */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ opacity: titlePhase2Opacity }}
        >
          <h1 className="text-5xl font-bold text-white">
            Release Fn.{" "}
            <span className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] bg-clip-text text-transparent">
              Text inserted.
            </span>
          </h1>
          <p className="text-white/50 text-lg mt-3">
            Your words appear exactly where your cursor is.
          </p>
        </div>
      </div>

      {/* ═══ Main content area ═══ */}
      <div className="flex-1 flex flex-col items-center min-h-0">

        {/* VS Code Window + HUD overlay */}
        <div className="w-full max-w-[1200px] flex-1 flex flex-col relative min-h-0" style={{ maxHeight: "calc(100% - 130px)" }}>
          <VSCodeWindow
            insertedText={insertedText}
            cursorVisible={frame >= S.INTRO_START}
          />

          {/* HUD — overlays on VS Code window near the bottom */}
          <div
            className="absolute left-1/2 z-20"
            style={{
              bottom: -25,
              transform: `translateX(-50%) translateY(${hudSlideY}px)`,
              opacity: hudOpacity,
              pointerEvents: "none",
            }}
          >
            <WhispererHUD
              transcriptionText={hudTranscriptionText}
              isActive={isHudActive}
              mode="standard"
              waveformIntensity={waveformIntensity}
            />
          </div>
        </div>

        {/* Gap */}
        <div className="h-8 flex-shrink-0" />

        {/* Mac Keyboard */}
        <div className="flex-shrink-0">
          <MacKeyboard
            fnPressed={fnPressed}
            fnPressProgress={fnPressProgress}
          />
        </div>
      </div>
    </div>
  );
};
