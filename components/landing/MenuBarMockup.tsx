import { Mic, Keyboard, Cpu, Settings, BarChart3, Power, Shield, Info, ArrowRight } from "lucide-react";

export const MenuBarMockup = () => {
  return (
    <div className="w-full max-w-[380px] bg-[#14142B] rounded-2xl shadow-2xl overflow-hidden text-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          {/* App Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#1C1C3A] flex items-center justify-center">
            <div className="flex gap-0.5 items-center">
              {[8, 14, 20, 14, 8].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">Whisperer</div>
            <div className="flex items-center gap-1.5 text-sm">
              <div className="w-2 h-2 rounded-full bg-[#5B6CF7]" />
              <span className="text-[#5B6CF7]">Ready</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-[#1C1C3A] rounded-full px-3 py-1.5 text-sm">
          <Info className="w-4 h-4 text-[#5B6CF7]" />
          <span className="text-white/70">About</span>
        </div>
      </div>

      {/* Tabs - Per-tab colorful icons */}
      <div className="flex border-b border-white/[0.06]">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#5B6CF7]/10 text-[#5B6CF7] font-medium border-b-2 border-[#5B6CF7]">
          <BarChart3 className="w-4 h-4 text-blue-400" />
          Status
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 text-white/50 hover:bg-white/[0.04]">
          <Cpu className="w-4 h-4 text-orange-400" />
          Models
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 text-white/50 hover:bg-white/[0.04]">
          <Settings className="w-4 h-4 text-purple-400" />
          Settings
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Model Card */}
        <div className="bg-[#1C1C3A] rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-white/50">Model</div>
            <div className="font-semibold text-white">WhispererV3</div>
          </div>
          <div className="text-sm text-white/50 bg-white/[0.08] rounded-lg px-3 py-1.5 border border-white/[0.06]">
            547 MB
          </div>
        </div>

        {/* Microphone Card */}
        <div className="bg-[#1C1C3A] rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center">
            <Mic className="w-6 h-6 text-green-400" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-white/50">Microphone</div>
            <div className="font-semibold text-white">MacBook Pro Microphone</div>
          </div>
        </div>

        {/* Shortcut Card */}
        <div className="bg-[#1C1C3A] rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center">
            <Keyboard className="w-6 h-6 text-orange-400" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-white/50">Shortcut</div>
            <div className="font-semibold text-white">Fn</div>
          </div>
          <div className="text-sm text-white/50 bg-white/[0.08] rounded-lg px-3 py-1.5 border border-white/[0.06]">
            Hold to record
          </div>
        </div>

        {/* How to use */}
        <div className="bg-[#1C1C3A] rounded-xl p-4">
          <div className="text-sm text-white/50 mb-3">How to use</div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#5B6CF7] text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <span className="text-sm text-white/70">Press Fn</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white/35" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#5B6CF7] text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <span className="text-sm text-white/70">Speak</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white/35" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#5B6CF7] text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <span className="text-sm text-white/70">Release</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/[0.06] flex items-center justify-between">
        <button className="flex items-center gap-2 text-white/50 hover:text-white bg-white/[0.08] rounded-lg px-4 py-2">
          <Shield className="w-4 h-4" />
          Workspace
        </button>
        <button className="flex items-center gap-2 bg-red-500/15 text-red-400 rounded-lg px-4 py-2 hover:bg-red-500/25">
          <Power className="w-4 h-4" />
          Quit
          <span className="text-xs opacity-75">⌘Q</span>
        </button>
      </div>
    </div>
  );
};
