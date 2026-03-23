// Word-level timing for TTS dictation audio (~5.4s total)
// "Hey team, let's sync on the API redesign tomorrow morning and finalize the migration plan."

export const DICTATION_TEXT =
  "Hey team, let's sync on the API redesign tomorrow morning and finalize the migration plan.";

export const FPS = 30;

// Word timestamps (seconds) — estimated from TTS at 170wpm
export const WORD_TIMINGS: { word: string; start: number }[] = [
  { word: "Hey", start: 0.0 },
  { word: "team,", start: 0.3 },
  { word: "let's", start: 0.7 },
  { word: "sync", start: 1.0 },
  { word: "on", start: 1.3 },
  { word: "the", start: 1.45 },
  { word: "API", start: 1.65 },
  { word: "redesign", start: 2.05 },
  { word: "tomorrow", start: 2.65 },
  { word: "morning", start: 3.15 },
  { word: "and", start: 3.65 },
  { word: "finalize", start: 3.9 },
  { word: "the", start: 4.45 },
  { word: "migration", start: 4.6 },
  { word: "plan.", start: 5.2 },
];

export const AUDIO_DURATION_SEC = 6.0;
export const AUDIO_DURATION_FRAMES = Math.ceil(AUDIO_DURATION_SEC * FPS); // ~180

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
  DICTATION_END: 280, // 100 + 180 frames of audio

  // Phase 5: Brief silence — waveform settles
  SILENCE_START: 280,
  SILENCE_END: 310, // 1s

  // Phase 6: Fn release — key returns, HUD fades out
  FN_RELEASE_START: 310,
  FN_RELEASE_END: 333, // ~0.8s

  // Phase 7: Text insertion — full text appears all at once in input
  TEXT_INSERT_START: 333,
  TEXT_INSERT_END: 333, // instant

  // Phase 8: Outro hold — show result
  OUTRO_START: 333,
  OUTRO_END: 408, // 2.5s hold

  // Total
  TOTAL_FRAMES: 408,
} as const;
