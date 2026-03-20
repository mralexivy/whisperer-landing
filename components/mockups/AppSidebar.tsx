import {
  MessageSquare, FileAudio, BookOpen, Sparkles, BarChart3,
  Terminal, CheckCircle, MessageCircle, Settings,
} from "lucide-react";

const navItems = [
  { label: "Transcriptions", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "File Transcription", icon: FileAudio, color: "text-purple-400", bg: "bg-purple-400/10" },
  { label: "Dictionary", icon: BookOpen, color: "text-red-400", bg: "bg-red-400/10" },
  { label: "AI Modes", icon: Sparkles, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { label: "Statistics", icon: BarChart3, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Command Mode", icon: Terminal, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { label: "Setup", icon: CheckCircle, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Feedback", icon: MessageCircle, color: "text-orange-400", bg: "bg-orange-400/10" },
  { label: "Settings", icon: Settings, color: "text-gray-400", bg: "bg-gray-400/10" },
];

const stats = [
  { label: "RECORDINGS", value: "487" },
  { label: "WORDS", value: "9.4K" },
  { label: "AVG WPM", value: "131" },
  { label: "DAYS", value: "14" },
];

export function AppSidebar({ activeItem }: { activeItem: string }) {
  return (
    <div className="w-[200px] bg-[#0C0C1A] flex flex-col border-r border-white/[0.06] shrink-0">
      {/* Logo */}
      <div className="p-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#1C1C3A] flex items-center justify-center">
          <div className="flex gap-0.5 items-center">
            {[6, 10, 16, 10, 6].map((h, i) => (
              <div
                key={i}
                className="w-[2px] bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">Whisperer</div>
          <div className="text-white/40 text-xs">Workspace</div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-2 space-y-0.5 mt-1">
        {navItems.map((item) => {
          const isActive = item.label === activeItem;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-[#5B6CF7]/15 text-[#5B6CF7] font-medium"
                  : "text-white/50 hover:bg-white/[0.04]"
              }`}
            >
              <item.icon className={`w-4 h-4 ${isActive ? "text-[#5B6CF7]" : item.color}`} />
              {item.label}
            </div>
          );
        })}
      </nav>

      {/* Stats bar */}
      <div className="p-3 border-t border-white/[0.06] bg-[#0A0A18]">
        <div className="grid grid-cols-2 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[10px] text-white/30 uppercase tracking-wider">{stat.label}</div>
              <div className="text-sm font-semibold text-[#5B6CF7]">{stat.value}</div>
            </div>
          ))}
        </div>
        <div className="text-center text-[10px] text-white/20 mt-2">Whisperer v1.1 (4)</div>
      </div>
    </div>
  );
}
