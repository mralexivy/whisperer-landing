// Dev helper: bundle once, render several stills. Usage: node stills.mjs <comp> <outdir> <frame...>
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { enableTailwind } from "@remotion/tailwind";
import path from "node:path";

const [comp, out, ...frames] = process.argv.slice(2);
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), webpackOverride: (c) => enableTailwind(c) });
const browserExecutable = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const composition = await selectComposition({ serveUrl, id: comp, browserExecutable });
for (const fr of frames) {
  await renderStill({ composition, serveUrl, frame: Number(fr), output: path.join(out, `${comp}-${fr}.png`), scale: 0.5, browserExecutable });
  console.log("ok", fr);
}
