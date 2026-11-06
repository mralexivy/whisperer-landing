import { Composition } from "remotion";
import { Tour, TOUR_DURATION } from "./compositions/Tour";
import { MeetingLoop, McpLoop, LOOP_FRAMES } from "./compositions/Loops";
import "./style.css";

export const Root: React.FC = () => (
  <>
    <Composition id="Tour" component={Tour} durationInFrames={TOUR_DURATION} fps={30} width={1920} height={1080} />
    <Composition id="MeetingLoop" component={MeetingLoop} durationInFrames={LOOP_FRAMES} fps={30} width={1600} height={1000} />
    <Composition id="McpLoop" component={McpLoop} durationInFrames={LOOP_FRAMES} fps={30} width={1600} height={1000} />
  </>
);
