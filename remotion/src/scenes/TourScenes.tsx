import React from "react";
import { AbsoluteFill, Audio, Img, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { Backdrop, Camera, Clicks, Cursor, Titles } from "../components/stage";
import { CallDetectedCard, Desktop, IslandBar, ReminderCard, ZoomCall } from "../components/Desktop";
import { MeetingStudio, SEG_VOICE, studioTimeline, type StudioTiming } from "../components/MeetingStudio";
import { CalendarPanel, DictationSlack, KeyCap, MCPChat, ProviderList, chatDefaults, dictBeats } from "../components/Panels";
import { CLAMP, EASE_OUT, rise } from "../lib/anim";
import { RoomTone, VoiceLine, voiceFrames } from "../lib/voice";

/* 1 ─ A Zoom call starts, Whisperer notices, Take notes, the Island appears. */
export const S1_CALL = 228;
export function SceneCall() {
  const f = useCurrentFrame();
  const cardIn = rise(f, 28, 18, 24);
  const cardOut = interpolate(f, [94, 106], [0, 1], { ...CLAMP, easing: EASE_OUT });
  const press = interpolate(f, [87, 90, 96], [0, 1, 0], CLAMP);
  const isl = rise(f, 100, 14, 22);
  const secs = Math.max(1, Math.floor((f - 100) / 30) + 1);
  return (
    <Backdrop>
      <Camera
        f={f}
        keys={[
          { f: 0, x: 720, y: 450, s: 1.0, rx: 10 },
          { f: 34, x: 720, y: 450, s: 1.04 },
          { f: 52, x: 720, y: 450, s: 1.04 },
          { f: 84, x: 1150, y: 260, s: 1.75 },
          { f: 100, x: 1140, y: 262, s: 1.8 },
          { f: 128, x: 720, y: 232, s: 2.0 },
          { f: 178, x: 720, y: 240, s: 2.0 },
          { f: 222, x: 720, y: 450, s: 1.12 },
        ]}
      >
        <Desktop recording={f >= 100}>
          <ZoomCall f={f} left={220} top={92} speaking={f >= 22 && f < 22 + voiceFrames("m0") ? 0 : -1} />
          {f < 108 && (
            <div style={{ position: "absolute", left: 1040, top: 44, transformOrigin: "0 0", scale: "1.2", translate: `${(1 - cardIn) * 420}px ${-cardOut * 40}px`, opacity: 1 - cardOut }}>
              <CallDetectedCard press={press} />
            </div>
          )}
          {f >= 100 && (
            <div style={{ position: "absolute", left: 720, top: 40, translate: "-50% 0", scale: String(0.6 + 0.4 * isl), opacity: Math.min(1, isl * 1.5) }}>
              <IslandBar f={f} time={`00:0${Math.min(9, secs)}`} />
            </div>
          )}
          <Cursor f={f} appear={44} hide={112} clicks={[90]} keys={[{ f: 44, x: 820, y: 560 }, { f: 84, x: 1318, y: 142 }]} />
        </Desktop>
      </Camera>
      <Titles f={f} items={[{ from: 6, to: 96, text: "A Zoom call starts." }, { from: 102, to: S1_CALL - 4, text: "Whisperer takes notes.", sub: "No bot joins the call. It records your Mac." }]} />
      <Clicks at={[90]} volume={0.22} />
      <RoomTone from={8} to={S1_CALL} />
      <VoiceLine id="m0" from={22} />
    </Backdrop>
  );
}

/* 2–4 ─ Meeting Studio: the call plays out loud, the live transcript follows the voices, speakers are named, notes. */
const STUDIO_BASE: StudioTiming = { voiced: true, every: 2, start: 14, nameAt: 116, stopAt: 0, writing: 45, noteGap: 14 };
const STUDIO_TL = studioTimeline(STUDIO_BASE);
export const TOUR_STUDIO: StudioTiming = { ...STUDIO_BASE, stopAt: STUDIO_TL.liveEnd + 20 };
export const studioLength = (hold = 84) => TOUR_STUDIO.stopAt + TOUR_STUDIO.writing + TOUR_STUDIO.noteGap * 3 + hold;
export const S2_STUDIO = studioLength();

/** The voiced meeting: every transcript line with its WAV, plus room tone while the call is live. */
export function MeetingVoices({ t, toneFrom = 0 }: { t: StudioTiming; toneFrom?: number }) {
  const tl = studioTimeline(t);
  return (
    <>
      <RoomTone from={toneFrom} to={t.stopAt + 4} />
      {SEG_VOICE.map((id, i) => <VoiceLine key={id} id={id} from={tl.starts[i]} />)}
    </>
  );
}

export function SceneStudio({ hold = 84 }: { hold?: number }) {
  const f = useCurrentFrame();
  const len = studioLength(hold);
  const t = TOUR_STUDIO;
  const tl = STUDIO_TL;
  const stop = t.stopAt;
  return (
    <Backdrop>
      <Camera
        f={f}
        keys={[
          { f: 0, x: 590, y: 338, s: 1.2, rx: 7 },
          { f: 28, x: 590, y: 338, s: 1.3 },
          { f: 62, x: 680, y: 300, s: 1.55 },
          { f: 92, x: 760, y: 280, s: 1.55 },
          { f: 118, x: 780, y: 260, s: 1.65 },
          { f: 150, x: 790, y: 260, s: 1.65 },
          { f: 196, x: 700, y: 300, s: 1.5 },
          { f: tl.starts[2], x: 700, y: 318, s: 1.5 },
          { f: tl.starts[4], x: 700, y: 352, s: 1.5 },
          { f: stop - 34, x: 700, y: 340, s: 1.45 },
          { f: stop - 6, x: 700, y: 290, s: 1.4 },
          { f: stop + 20, x: 640, y: 310, s: 1.5 },
          { f: len, x: 650, y: 330, s: 1.56 },
        ]}
      >
        <MeetingStudio f={f} t={t} />
        <Cursor
          f={f}
          appear={72}
          hide={150}
          clicks={[115]}
          keys={[
            { f: 72, x: 860, y: 470 },
            { f: 108, x: 1062, y: 352 },
            { f: 140, x: 1062, y: 352 },
          ]}
        />
        <Cursor f={f} appear={stop - 50} hide={stop + 14} clicks={[stop - 1]} keys={[{ f: stop - 50, x: 900, y: 300 }, { f: stop - 8, x: 785, y: 67 }]} />
      </Camera>
      <Titles
        f={f}
        items={[
          { from: 8, to: 240, text: "Every speaker, named.", sub: "Names come from the calendar invite." },
          { from: 246, to: stop - 4, text: "A live transcript as they talk.", sub: "The call audio and your mic, on your Mac." },
          { from: stop + 2, to: len - 2, text: "Notes the moment it ends.", sub: "Decisions, action items, open questions." },
        ]}
      />
      <MeetingVoices t={t} />
      <Clicks at={[115, stop - 1]} volume={0.22} />
    </Backdrop>
  );
}

/* 5 ─ Bring your own AI. */
export const S3_LLM = 176;
export function SceneLLM() {
  const f = useCurrentFrame();
  const clicks = [52, 102, 152];
  return (
    <Backdrop>
      <Camera
        f={f}
        keys={[
          { f: 0, x: 470, y: 318, s: 1.3, ry: -8 },
          { f: 30, x: 470, y: 318, s: 1.42 },
          { f: 70, x: 560, y: 300, s: 1.55 },
          { f: 160, x: 560, y: 380, s: 1.6 },
          { f: S3_LLM, x: 560, y: 380, s: 1.62 },
        ]}
      >
        <ProviderList f={f} order={[["mac", 0], ["claude", clicks[0]], ["chatgpt", clicks[1]], ["gemini", clicks[2]]]} />
        <Cursor
          f={f}
          appear={20}
          clicks={clicks}
          keys={[
            { f: 20, x: 760, y: 470 },
            { f: 46, x: 690, y: 304 },
            { f: 60, x: 690, y: 304 },
            { f: 96, x: 690, y: 370 },
            { f: 110, x: 690, y: 370 },
            { f: 146, x: 690, y: 502 },
          ]}
        />
      </Camera>
      <Titles f={f} items={[{ from: 6, to: S3_LLM - 2, text: "Written by your own AI.", sub: "Your Claude, ChatGPT or Gemini plan. Or this Mac, offline." }]} />
      <Clicks at={clicks} volume={0.22} />
    </Backdrop>
  );
}

/* 6 ─ Claude reads Whisperer through MCP. */
export const S4_MCP = 204;
export function SceneMCP() {
  const f = useCurrentFrame();
  return (
    <Backdrop>
      <Camera
        f={f}
        cy={650}
        keys={[
          { f: 0, x: 450, y: 298, s: 1.22, rx: 7 },
          { f: 30, x: 450, y: 298, s: 1.32 },
          { f: 130, x: 450, y: 292, s: 1.4 },
          { f: S4_MCP, x: 450, y: 290, s: 1.45 },
        ]}
      >
        <MCPChat f={f} t={chatDefaults(14)} />
      </Camera>
      <Titles f={f} items={[{ from: 6, to: S4_MCP - 2, text: "Claude can read them too.", sub: "Whisperer's MCP server. Only apps on this Mac can reach it." }]} />
    </Backdrop>
  );
}

/* 7 ─ Calendar reminder, Join & Record. */
export const S5_CAL = 152;
export function SceneCalendar() {
  const f = useCurrentFrame();
  const cardIn = rise(f, 24, 18, 24);
  const cardOut = interpolate(f, [98, 110], [0, 1], { ...CLAMP, easing: EASE_OUT });
  return (
    <Backdrop>
      <Camera
        f={f}
        keys={[
          { f: 0, x: 470, y: 308, s: 1.3, ry: 8 },
          { f: 30, x: 470, y: 308, s: 1.38 },
          { f: 80, x: 600, y: 240, s: 1.55 },
          { f: S5_CAL, x: 600, y: 290, s: 1.55 },
        ]}
      >
        <CalendarPanel f={f} recAt={96} />
        {f < 112 && (
          <div style={{ position: "absolute", left: 521, top: 50, transformOrigin: "0 0", scale: "1.15", translate: `${(1 - cardIn) * 380}px ${-cardOut * 30}px`, opacity: (1 - cardOut) * Math.min(1, cardIn * 2) }}>
            <ReminderCard press={interpolate(f, [90, 93, 99], [0, 1, 0], CLAMP)} />
          </div>
        )}
        <Cursor f={f} appear={40} hide={128} clicks={[93]} keys={[{ f: 40, x: 700, y: 430 }, { f: 84, x: 607, y: 143 }]} />
      </Camera>
      <Titles f={f} items={[{ from: 6, to: S5_CAL - 2, text: "It reminds you a minute before.", sub: "Join and record from Google Calendar or Outlook." }]} />
      <Clicks at={[93]} volume={0.22} />
    </Backdrop>
  );
}

/* 8 ─ Dictation in Slack. */
const BEATS = dictBeats(20, 10, 2, true, 16);
export const S6_DICT = BEATS[BEATS.length - 1].paste + 40;
export function SceneDictation() {
  const f = useCurrentFrame();
  let down = 0;
  for (const b of BEATS) {
    down = Math.max(down, interpolate(f, [b.hold - 3, b.hold, b.release, b.release + 4], [0, 1, 1, 0], CLAMP));
  }
  const keyIn = rise(f, 4, 200, 20);
  return (
    <Backdrop>
      <Camera
        cx={1050}
        f={f}
        keys={[
          { f: 0, x: 500, y: 298, s: 1.3, ry: -7 },
          { f: 30, x: 500, y: 298, s: 1.38 },
          { f: S6_DICT, x: 500, y: 300, s: 1.46 },
        ]}
      >
        <DictationSlack f={f} beats={BEATS} />
      </Camera>
      <div style={{ position: "absolute", left: 92, top: 520, opacity: keyIn, translate: `${(1 - keyIn) * -30}px 0` }}>
        <KeyCap label="fn" down={down} sub={down > 0.5 ? "Holding" : "Hold to talk"} />
      </div>
      <Titles
        f={f}
        items={[
          { from: 6, to: BEATS[1].hold - 6, text: "Hold Fn to dictate.", sub: "Let go, and paste with ⌘V." },
          { from: BEATS[1].hold - 2, to: S6_DICT - 4, text: "In your own language.", sub: "97 languages, detected as you speak. Offline." },
        ]}
      />
      {BEATS.map((b) => (
        <React.Fragment key={b.hold}>
          <Sequence from={b.hold - 1} durationInFrames={14} layout="none"><Audio src={staticFile("audio/key-press.wav")} volume={0.25} /></Sequence>
          {b.voice && b.speak !== undefined && <VoiceLine id={b.voice} from={b.speak} />}
          <Sequence from={b.release} durationInFrames={14} layout="none"><Audio src={staticFile("audio/key-release.wav")} volume={0.22} /></Sequence>
        </React.Fragment>
      ))}
    </Backdrop>
  );
}

/* 9a ─ Price. */
export const S7_PRICE = 100;
export function ScenePrice() {
  const f = useCurrentFrame();
  const parts = ["$2.99.", "Pro $14.99.", "Once."];
  const sub = rise(f, 40, 200, 24);
  return (
    <Backdrop>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 28, fontSize: 118, fontWeight: 700, letterSpacing: "-0.045em", color: "#fff" }}>
          {parts.map((p, i) => {
            const r = rise(f, 6 + i * 12, 200, 24);
            return (
              <span key={p} style={{ opacity: r, translate: `0 ${(1 - r) * 30}px`, filter: `blur(${(1 - r) * 10}px)`, color: i === 2 ? "#A5AEFF" : "#fff" }}>{p}</span>
            );
          })}
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "rgba(255,255,255,0.6)", opacity: sub, translate: `0 ${(1 - sub) * 16}px`, textAlign: "center", lineHeight: 1.45 }}>
          Dictation is $2.99. Pro adds meetings, AI notes and MCP.
          <br />
          No subscription. No account.
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
}

/* 9b ─ End card. */
export const S8_END = 132;
export function SceneEnd() {
  const f = useCurrentFrame();
  const icon = rise(f, 4, 12, 30);
  const name = rise(f, 14, 200, 24);
  const tag = rise(f, 24, 200, 24);
  const btn = rise(f, 36, 16, 24);
  const glow = interpolate(f, [0, 150], [0.6, 1], CLAMP);
  return (
    <Backdrop>
      <AbsoluteFill style={{ background: `radial-gradient(700px 480px at 50% 42%, rgba(91,108,247,${0.22 * glow}), transparent 70%)` }} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Img src={staticFile("app-icon.png")} style={{ width: 200, height: 200, scale: String(0.6 + 0.4 * icon), opacity: Math.min(1, icon * 1.4), filter: "drop-shadow(0 30px 60px rgba(40,40,120,0.6))" }} />
        <div style={{ marginTop: 26, fontSize: 104, fontWeight: 700, letterSpacing: "-0.045em", color: "#fff", opacity: name, translate: `0 ${(1 - name) * 22}px` }}>Whisperer</div>
        <div style={{ marginTop: 4, fontSize: 38, fontWeight: 400, color: "rgba(255,255,255,0.7)", letterSpacing: "-0.015em", opacity: tag, translate: `0 ${(1 - tag) * 18}px` }}>AI meeting notes for Mac</div>
        <div
          style={{
            marginTop: 44,
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            borderRadius: 999,
            padding: "18px 34px",
            background: "#5B6CF7",
            color: "#fff",
            fontSize: 28,
            fontWeight: 600,
            boxShadow: "0 18px 50px -12px rgba(91,108,247,0.7)",
            opacity: btn,
            scale: String(0.9 + 0.1 * btn),
          }}
        >
          Get it on the Mac App Store
        </div>
        <div style={{ marginTop: 22, fontSize: 21, color: "rgba(255,255,255,0.45)", opacity: btn }}>Apple Silicon · macOS 26 Tahoe</div>
      </AbsoluteFill>
    </Backdrop>
  );
}
