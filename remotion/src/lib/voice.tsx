import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { FPS } from "./anim";

/**
 * Voiced demo lines. Generated offline with Kokoro-82M (Apache-2.0), then given call-audio EQ and
 * loudness-matched with ffmpeg; files live in public/audio/voice/. Durations (seconds) were measured
 * with ffprobe on those files: if a WAV is regenerated, update its number here, every scene's timing
 * follows from it.
 *   m0–m5  meeting: Maya af_heart, Dan am_michael, "Me" bm_george, Priya bf_emma
 *   d1–d3  dictation, "Me": bm_george (English), em_alex (Spanish), im_nicola (Italian)
 */
export const VOICE_SEC = {
  m0: 2.141,
  m1: 5.872,
  m2: 5.744,
  m3: 5.178,
  m4: 3.04,
  m5: 4.701,
  d1: 5.37,
  d2: 4.265,
  d3: 3.824,
} as const;

export type VoiceId = keyof typeof VOICE_SEC;

export const voiceFrames = (id: VoiceId) => Math.ceil(VOICE_SEC[id] * FPS);

/** Natural turn-taking gaps between meeting lines, in frames (~300–430 ms). */
export const TURN_GAPS = [10, 12, 9, 13, 11];

/**
 * Words of `text` heard by `rel` frames into a line lasting `dur` frames. Word onsets are spread by
 * character position, which tracks Kokoro's even pacing closely; `lag` keeps the live transcript a
 * beat behind the voice, as real streaming recognition is.
 */
export function spokenWords(text: string, rel: number, dur: number, lag = 3) {
  const words = text.split(" ");
  const total = text.length;
  let pos = 0;
  let n = 0;
  for (const w of words) {
    const onset = (pos / total) * dur * 0.96 + lag;
    if (rel >= onset) n++;
    pos += w.length + 1;
  }
  return n;
}

/** Plays one voiced line from local frame `from`. */
export function VoiceLine({ id, from, volume = 1 }: { id: VoiceId; from: number; volume?: number }) {
  return (
    <Sequence from={from} durationInFrames={voiceFrames(id) + 6} layout="none" name={`voice ${id}`}>
      <Audio src={staticFile(`audio/voice/${id}.wav`)} volume={volume} />
    </Sequence>
  );
}

/** Very quiet room/line noise under the call, faded in and out. */
export function RoomTone({ from, to, volume = 0.5 }: { from: number; to: number; volume?: number }) {
  const len = Math.max(1, to - from);
  return (
    <Sequence from={from} durationInFrames={len} layout="none" name="room tone">
      <Audio src={staticFile("audio/voice/room-tone.wav")} loop volume={(f) => volume * Math.max(0, Math.min(1, f / 15, (len - f) / 15))} />
    </Sequence>
  );
}
