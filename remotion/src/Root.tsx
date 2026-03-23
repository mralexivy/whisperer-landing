import { Composition } from "remotion";
import { ShowcaseVideo } from "./compositions/ShowcaseVideo";
import "./style.css";

export const Root: React.FC = () => {
  return (
    <Composition
      id="ShowcaseVideo"
      component={ShowcaseVideo}
      durationInFrames={390}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
