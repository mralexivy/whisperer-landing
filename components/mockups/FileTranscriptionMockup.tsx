import { Circle, FileText, AudioWaveform, Globe, Mic, Sparkles, FolderOpen, FileAudio, ClipboardCheck } from "lucide-react";
import { AppSidebar } from "./AppSidebar";

const formats = ["MP3", "WAV", "M4A", "FLAC", "MP4", "MOV", "AIFF"];

const steps = [
  { label: "SELECT", title: "Choose File", desc: "Drop or pick an audio or video file", icon: FolderOpen, color: "text-purple-400", accent: "bg-purple-500" },
  { label: "TRANSCRIBE", title: "AI Processing", desc: "Offline transcription with Whisper AI", icon: AudioWaveform, color: "text-blue-400", accent: "bg-blue-500" },
  { label: "RESULT", title: "Get Text", desc: "Copy text or save to your history", icon: ClipboardCheck, color: "text-green-400", accent: "bg-green-500" },
];

export function FileTranscriptionMockup() {
  return (
    <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06] bg-[#14142B]">
      {/* Title bar */}
      <div className="flex items-center px-4 py-2.5 bg-[#0C0C1A] border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <Circle className="w-3 h-3 fill-[hsl(0_62%_50%)] text-[hsl(0_62%_50%)]" />
          <Circle className="w-3 h-3 fill-[hsl(45_93%_47%)] text-[hsl(45_93%_47%)]" />
          <Circle className="w-3 h-3 fill-[#28C840] text-[#28C840]" />
        </div>
      </div>

      <div className="flex h-[460px]">
        {/* Sidebar */}
        <AppSidebar activeItem="File Transcription" />

        {/* Main content */}
        <div className="flex-1 flex flex-col p-6 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
              <FileAudio className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">File Transcription</h3>
              <p className="text-white/40 text-xs">Transcribe audio and video files offline</p>
            </div>
          </div>

          {/* Drop zone */}
          <div className="flex-1 rounded-2xl border-2 border-dashed border-white/[0.08] bg-[#0C0C1A] flex flex-col items-center justify-center relative overflow-hidden mb-4">
            {/* Floating icons */}
            <div className="absolute top-6 right-1/3 w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center">
              <FileText className="w-4 h-4 text-orange-400" />
            </div>
            <div className="absolute top-8 right-1/4 w-7 h-7 rounded-full bg-blue-500/15 flex items-center justify-center">
              <AudioWaveform className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="absolute bottom-12 left-1/3 w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
              <Globe className="w-4 h-4 text-green-400" />
            </div>
            <div className="absolute bottom-16 right-1/3 w-7 h-7 rounded-full bg-red-500/15 flex items-center justify-center">
              <Mic className="w-3.5 h-3.5 text-red-400" />
            </div>
            <div className="absolute top-16 left-1/3 w-7 h-7 rounded-full bg-cyan-500/15 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Center icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#1C1C3A] border border-white/[0.06] flex items-center justify-center mb-4 shadow-lg">
              <FileText className="w-8 h-8 text-purple-400" />
            </div>

            <p className="text-white font-semibold mb-1">Drop your files here</p>
            <p className="text-white/40 text-xs mb-4">or choose a file to transcribe</p>

            {/* Format badges */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {formats.map((f) => (
                <span key={f} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1C1C3A] text-white/60 border border-white/[0.06]">
                  {f}
                </span>
              ))}
            </div>

            {/* Choose file button */}
            <button className="flex items-center gap-2 bg-[#5B6CF7] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-[#5B6CF7]/20">
              <FolderOpen className="w-4 h-4" />
              Choose File
            </button>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-3 gap-3">
            {steps.map((step) => (
              <div key={step.label} className="bg-[#1C1C3A] rounded-xl p-3 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] text-white/30 uppercase tracking-wider font-semibold">{step.label}</span>
                  <div className={`w-6 h-6 rounded-lg ${step.color.replace("text-", "bg-").replace("400", "500/15")} flex items-center justify-center`}>
                    <step.icon className={`w-3 h-3 ${step.color}`} />
                  </div>
                </div>
                <div className="text-white font-semibold text-sm mb-0.5">{step.title}</div>
                <div className="text-white/40 text-[10px]">{step.desc}</div>
                <div className={`w-8 h-0.5 ${step.accent} rounded-full mt-2`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
