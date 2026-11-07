import { Composition } from "remotion";
import { Tour, TOUR_DURATION } from "./compositions/Tour";
import { MeetingLoop, McpLoop, AiLoop, CalendarLoop, DictationLoop, DICTATION_LOOP_FRAMES, LOOP_FRAMES } from "./compositions/Loops";
import { MeetingDemo, MEETING_DEMO_FRAMES } from "./compositions/MeetingDemo";
import { ShowcaseVideo } from "./legacy/compositions/ShowcaseVideo";
import "./style.css";

export const Root: React.FC = () => (
  <>
    <Composition id="Tour" component={Tour} durationInFrames={TOUR_DURATION} fps={30} width={1920} height={1080} />
    <Composition id="MeetingLoop" component={MeetingLoop} durationInFrames={LOOP_FRAMES} fps={30} width={1600} height={1000} />
    <Composition id="McpLoop" component={McpLoop} durationInFrames={LOOP_FRAMES} fps={30} width={1600} height={1000} />
    <Composition id="AiLoop" component={AiLoop} durationInFrames={LOOP_FRAMES} fps={30} width={1600} height={1000} />
    <Composition id="CalendarLoop" component={CalendarLoop} durationInFrames={LOOP_FRAMES} fps={30} width={1600} height={1000} />
    <Composition id="DictationLoop" component={DictationLoop} durationInFrames={DICTATION_LOOP_FRAMES} fps={30} width={1600} height={1000} />
    <Composition id="MeetingDemo" component={MeetingDemo} durationInFrames={MEETING_DEMO_FRAMES} fps={30} width={1920} height={1080} />
    <Composition id="DictationShowcase" component={ShowcaseVideo} durationInFrames={464} fps={30} width={1920} height={1080} />
  </>
);
