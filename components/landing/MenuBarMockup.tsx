import { Mic, Keyboard, Cpu, Settings, BarChart3, Power, Shield, Check, ArrowRight } from "lucide-react";

export const MenuBarMockup = () => {
  return (
    <div className="w-full max-w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-900">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* App Icon */}
          <div className="w-12 h-12 rounded-xl bg-[hsl(142_76%_50%/0.1)] flex items-center justify-center">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-[hsl(142_76%_50%)] rounded-full"
                  style={{ height: `${8 + Math.sin(i * 0.8) * 8}px` }}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Whisperer</div>
            <div className="flex items-center gap-1.5 text-sm">
              <div className="w-2 h-2 rounded-full bg-[hsl(142_76%_50%)]" />
              <span className="text-[hsl(142_76%_50%)]">Ready</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1.5 text-sm">
          <Check className="w-4 h-4 text-[hsl(142_76%_50%)]" />
          <span className="text-gray-700">Large V3 Turbo Q5</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[hsl(142_76%_50%/0.1)] text-[hsl(142_76%_50%)] font-medium border-b-2 border-[hsl(142_76%_50%)]">
          <BarChart3 className="w-4 h-4" />
          Status
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-500 hover:bg-gray-50">
          <Cpu className="w-4 h-4" />
          Models
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-500 hover:bg-gray-50">
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Model Card */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[hsl(142_76%_50%/0.1)] flex items-center justify-center">
            <Cpu className="w-6 h-6 text-[hsl(142_76%_50%)]" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500">Model</div>
            <div className="font-semibold text-gray-900">Large V3 Turbo Q5</div>
          </div>
          <div className="text-sm text-gray-400 bg-white rounded-lg px-3 py-1.5 border border-gray-200">
            547 MB
          </div>
        </div>

        {/* Microphone Card */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[hsl(142_76%_50%/0.1)] flex items-center justify-center">
            <Mic className="w-6 h-6 text-[hsl(142_76%_50%)]" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500">Microphone</div>
            <div className="font-semibold text-gray-900">MacBook Pro Microphone</div>
          </div>
        </div>

        {/* Shortcut Card */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[hsl(142_76%_50%/0.1)] flex items-center justify-center">
            <Keyboard className="w-6 h-6 text-[hsl(142_76%_50%)]" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500">Shortcut</div>
            <div className="font-semibold text-gray-900">Fn</div>
          </div>
          <div className="text-sm text-gray-500 bg-white rounded-lg px-3 py-1.5 border border-gray-200">
            Hold to record
          </div>
        </div>

        {/* How to use */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-sm text-gray-500 mb-3">How to use</div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[hsl(142_76%_50%)] text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <span className="text-sm text-gray-700">Press Fn</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[hsl(142_76%_50%)] text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <span className="text-sm text-gray-700">Speak</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[hsl(142_76%_50%)] text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <span className="text-sm text-gray-700">Release</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-lg px-4 py-2">
          <Shield className="w-4 h-4" />
          Permissions
        </button>
        <button className="flex items-center gap-2 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
          <Power className="w-4 h-4" />
          Quit
          <span className="text-xs opacity-75">⌘Q</span>
        </button>
      </div>
    </div>
  );
};
