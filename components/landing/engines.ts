// The speech engines as the app lists them. Plain data, so server pages can read it too.
import { Cpu, Globe, Zap } from "lucide-react";

export const ENGINES = [
  { name: "Whisper", model: "Whisperer V3 (Large V3 Turbo)", langs: "97 languages", hw: "Metal GPU", note: "Default. About 547 MB.", icon: Cpu, active: true },
  { name: "Parakeet", model: "NVIDIA Parakeet", langs: "25 languages", hw: "Neural Engine", note: "Runs on the Neural Engine, leaving the GPU free.", icon: Zap },
  { name: "Qwen3 ASR", model: "Qwen3 ASR", langs: "31 languages", hw: "On device", note: "A second open model to try when Whisper stumbles.", icon: Globe },
  { name: "WhisperKit", model: "Whisper on Core ML", langs: "Whisper languages", hw: "Neural Engine", note: "Whisper models through Core ML.", icon: Cpu },
];
