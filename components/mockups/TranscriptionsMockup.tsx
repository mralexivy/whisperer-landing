import { Circle, Search, Play, Pin, Flag, Copy, MoreHorizontal, Globe, Mic } from "lucide-react";
import { AppSidebar } from "./AppSidebar";

const recordings = [
  {
    time: "9:09 AM",
    duration: "0:18",
    text: "We need premium feel premium feel and look like really premium like the high level UI UX so basically we need it to be Prefect UI UX high level of CEO and also animations look the guidance below",
    wpm: 120,
    words: 38,
    lang: "English",
    active: true,
  },
  {
    time: "9:07 AM",
    duration: "0:02",
    text: "Validate the build",
    wpm: 89,
    words: 3,
    lang: "English",
    active: false,
  },
  {
    time: "9:05 AM",
    duration: "0:11",
    text: "Analyze the below suggestion and pending changes we made. We fixed a lot of stuff, added a lot of stuff, so I want to verify what is left based on the suggestion report below.",
    wpm: 183,
    words: 34,
    lang: "English",
    active: false,
  },
];

export function TranscriptionsMockup() {
  const active = recordings[0];

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
        <AppSidebar activeItem="Transcriptions" />

        {/* Main content */}
        <div className="flex-1 flex min-w-0">
          {/* Recordings list */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <div className="p-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#5B6CF7] flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
                <div>
                  <div className="text-white font-semibold">Alexander</div>
                  <div className="text-white/40 text-xs">Good morning</div>
                </div>
              </div>

              {/* Search */}
              <div className="flex items-center gap-2 bg-[#1C1C3A] rounded-lg px-3 py-2 border border-white/[0.06]">
                <Search className="w-4 h-4 text-white/30" />
                <span className="text-white/30 text-sm">Search transcriptions...</span>
                <span className="ml-auto text-white/20 text-xs">&#x2318;K</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.06]">
              <span className="text-xs bg-[#5B6CF7] text-white px-3 py-1 rounded-full font-medium">All</span>
              <span className="text-xs text-white/40 px-3 py-1 rounded-full">Pinned</span>
              <span className="text-xs text-white/40 px-3 py-1 rounded-full">Flagged</span>
            </div>

            {/* TODAY label */}
            <div className="px-4 pt-3 pb-1">
              <span className="text-[10px] text-white/30 uppercase tracking-wider font-semibold">Today</span>
            </div>

            {/* Recording entries */}
            <div className="flex-1 overflow-hidden px-2 space-y-1">
              {recordings.map((r, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-3 ${
                    r.active ? "bg-[#5B6CF7]/10 border border-[#5B6CF7]/30" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">{r.time}</span>
                      <span className="text-white/30 text-xs">{r.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/20">
                      <Copy className="w-3 h-3" />
                      <Pin className="w-3 h-3" />
                      <Flag className="w-3 h-3" />
                      <MoreHorizontal className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed line-clamp-2">{r.text}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">{r.wpm} wpm</span>
                    <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">{r.words} words</span>
                    <span className="text-[10px] text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">{r.lang}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="w-[240px] border-l border-white/[0.06] bg-[#0C0C1A] p-4 hidden lg:flex flex-col shrink-0">
            <div className="text-right text-xs text-white/30 mb-1">TODAY</div>
            <div className="text-right text-white font-semibold mb-4">
              March 20 <span className="text-white/40 text-xs font-normal">at 9:09 AM</span>
            </div>

            {/* Audio waveform */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-white/40 text-xs mb-2">
                <Mic className="w-3.5 h-3.5 text-red-400" />
                <span className="text-white/60 font-medium uppercase tracking-wider text-[10px]">Audio Recording</span>
              </div>
              <div className="bg-[#14142B] rounded-xl p-3 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  {/* Waveform bars */}
                  <div className="flex items-center gap-[2px] flex-1 h-8">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[2px] bg-[#5B6CF7]/60 rounded-full"
                        style={{ height: `${4 + ((i * 7 + 3) % 24)}px` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#5B6CF7] flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                    </div>
                    <span className="text-white/50 text-xs">0:00 / 0:18</span>
                  </div>
                  <span className="text-white/30 text-xs">2x</span>
                </div>
              </div>
            </div>

            {/* Transcription */}
            <div className="mb-4">
              <div className="text-white/60 font-medium uppercase tracking-wider text-[10px] mb-2">Transcription</div>
              <p className="text-white/50 text-xs leading-relaxed">
                {active.text.slice(0, 120)}...
              </p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {[
                { label: "DURATION", value: active.duration },
                { label: "WORDS", value: String(active.words) },
                { label: "WPM", value: String(active.wpm) },
                { label: "LANGUAGE", value: active.lang },
              ].map((d) => (
                <div key={d.label} className="bg-[#14142B] rounded-lg p-2.5 border border-white/[0.06] text-center">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider mb-0.5">{d.label}</div>
                  <div className="text-white font-semibold text-sm">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
