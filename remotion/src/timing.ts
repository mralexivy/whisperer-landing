// Word-level timing for TTS dictation audio (~5.4s total)
// "Hey team, let's sync on the API redesign tomorrow morning and finalize the migration plan."

export const DICTATION_TEXT =
  "Hey team, let's sync on the API redesign tomorrow morning and finalize the migration plan.";

export const FPS = 30;

// Word timestamps (seconds) — estimated from TTS at 170wpm
export const WORD_TIMINGS: { word: string; start: number }[] = [
  { word: "Hey", start: 0.0 },
  { word: "team,", start: 0.25 },
  { word: "let's", start: 0.6 },
  { word: "sync", start: 0.85 },
  { word: "on", start: 1.15 },
  { word: "the", start: 1.3 },
  { word: "API", start: 1.5 },
  { word: "redesign", start: 1.85 },
  { word: "tomorrow", start: 2.4 },
  { word: "morning", start: 2.85 },
  { word: "and", start: 3.3 },
  { word: "finalize", start: 3.5 },
  { word: "the", start: 4.0 },
  { word: "migration", start: 4.15 },
  { word: "plan.", start: 4.7 },
];

export const AUDIO_DURATION_SEC = 5.4;
export const AUDIO_DURATION_FRAMES = Math.ceil(AUDIO_DURATION_SEC * FPS); // ~162

// Get visible text at a given time offset (seconds from dictation start)
export function getVisibleText(elapsedSeconds: number): string {
  const visibleWords: string[] = [];
  for (const { word, start } of WORD_TIMINGS) {
    if (elapsedSeconds >= start) {
      visibleWords.push(word);
    }
  }
  return visibleWords.join(" ");
}

// Get visible text at a given frame offset (frames from dictation start)
export function getVisibleTextAtFrame(frame: number): string {
  return getVisibleText(frame / FPS);
}

// Scene frame markers (at 30fps)
// Layout: VS Code window (top) + keyboard (bottom), HUD overlays above VS Code
export const SCENES = {
  // Phase 1: Intro — VS Code + keyboard visible, cursor blinks in empty input
  INTRO_START: 0,
  INTRO_END: 60, // 2s

  // Phase 2: Fn key press — key depresses, press sound
  FN_PRESS_START: 60,
  FN_PRESS_END: 75, // 0.5s

  // Phase 3: HUD appears overlaying above VS Code window
  HUD_APPEAR_START: 75,
  HUD_APPEAR_END: 100, // ~0.8s

  // Phase 4: Dictation — TTS plays, words appear in HUD only
  DICTATION_START: 100,
  DICTATION_END: 262, // 100 + 162 frames of audio

  // Phase 5: Brief silence — waveform settles
  SILENCE_START: 262,
  SILENCE_END: 292, // 1s

  // Phase 6: Fn release — key returns, HUD fades out
  FN_RELEASE_START: 292,
  FN_RELEASE_END: 315, // ~0.8s

  // Phase 7: Text insertion — full text appears all at once in input
  TEXT_INSERT_START: 315,
  TEXT_INSERT_END: 315, // instant

  // Phase 8: Outro hold — show result
  OUTRO_START: 315,
  OUTRO_END: 390, // 2.5s hold

  // Total
  TOTAL_FRAMES: 390,
} as const;
