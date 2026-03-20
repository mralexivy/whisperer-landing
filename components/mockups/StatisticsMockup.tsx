import { Circle, BarChart3, Monitor, MessageSquare, MoreHorizontal, Globe, Laptop, MessageCircle } from "lucide-react";
import { AppSidebar } from "./AppSidebar";

const statCards = [
  { label: "WORDS TRANSCRIBED", value: "4.6K", icon: "text-blue-400", delta: "4% vs last week", deltaDown: true, accent: "bg-blue-500" },
  { label: "AUDIO RECORDED", value: "36m", icon: "text-green-400", delta: "2% vs last week", deltaDown: false, accent: "bg-green-500" },
  { label: "TOTAL SESSIONS", value: "230", icon: "text-purple-400", delta: "11% vs last week", deltaDown: true, accent: "bg-purple-500" },
  { label: "AVG SPEED", value: "127 wpm", icon: "text-orange-400", delta: "6% vs last week", deltaDown: true, accent: "bg-orange-500" },
  { label: "TIME SAVED", value: "2h 53m", icon: "text-green-400", delta: "vs typing at 40 wpm", deltaDown: false, accent: "bg-green-500" },
];

const dailyData = [
  { day: "Sat", height: 85 },
  { day: "Sun", height: 20 },
  { day: "Mon", height: 25 },
  { day: "Tue", height: 15 },
  { day: "Wed", height: 30 },
  { day: "Thu", height: 35 },
  { day: "Fri", height: 30 },
];

const appUsage = [
  { name: "Code", pct: 84, sessions: 199, count: "3.9k", color: "bg-[#5B6CF7]" },
  { name: "Slack", pct: 4, sessions: 6, count: "192", color: "bg-blue-400" },
  { name: "Unknown", pct: 4, sessions: 6, count: "187", color: "bg-gray-400" },
  { name: "Claude", pct: 3, sessions: 5, count: "170", color: "bg-orange-400" },
  { name: "Google Chrome", pct: 2, sessions: 5, count: "95", color: "bg-green-400" },
  { name: "WhatsApp", pct: 1, sessions: 5, count: "57", color: "bg-teal-400" },
];

export function StatisticsMockup() {
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

      <div className="flex h-[520px]">
        {/* Sidebar */}
        <AppSidebar activeItem="Statistics" />

        {/* Main content */}
        <div className="flex-1 flex flex-col p-6 min-w-0 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Statistics</h3>
              <p className="text-white/40 text-xs">Your transcription usage analytics</p>
            </div>
          </div>

          {/* Time tabs */}
          <div className="flex items-center gap-1 mb-4">
            <span className="text-xs bg-[#5B6CF7] text-white px-3 py-1.5 rounded-lg font-medium">Week</span>
            <span className="text-xs text-white/40 px-3 py-1.5 rounded-lg">Month</span>
            <span className="text-xs text-white/40 px-3 py-1.5 rounded-lg">Year</span>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {statCards.map((card) => (
              <div key={card.label} className="bg-[#1C1C3A] rounded-xl p-3 border border-white/[0.06]">
                <div className="text-[8px] text-white/30 uppercase tracking-wider mb-1.5 font-semibold">{card.label}</div>
                <div className="text-white font-bold text-lg mb-1">{card.value}</div>
                <div className="text-[9px] text-white/30">
                  {card.deltaDown && <span className="text-red-400">&#9660; </span>}
                  {!card.deltaDown && card.delta.includes("%") && <span className="text-green-400">&#9650; </span>}
                  {card.delta}
                </div>
                <div className={`w-8 h-0.5 ${card.accent} rounded-full mt-2`} />
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Daily Activity */}
            <div className="bg-[#1C1C3A] rounded-xl p-4 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#5B6CF7]" />
                  <span className="text-white font-semibold text-sm">Daily Activity</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] bg-[#5B6CF7] text-white px-2 py-0.5 rounded-md font-medium">Words</span>
                  <span className="text-[10px] text-white/30 px-2 py-0.5">Time</span>
                  <span className="text-[10px] text-white/30 px-2 py-0.5">Sessions</span>
                </div>
              </div>
              <div className="text-[10px] text-white/20 mb-1">this week</div>

              {/* Bar chart */}
              <div className="flex items-end gap-3 h-24 mb-2">
                {dailyData.map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-[#5B6CF7]/80 rounded-t"
                      style={{ height: `${d.height}%` }}
                    />
                    <span className="text-[9px] text-white/30">{d.day}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-[9px] text-white/30 mt-2">
                <span className="text-green-400">&#9650; Peak Sat &middot; 2.1K words</span>
                <span>&middot; 642 / day</span>
                <span>&middot; 127 wpm avg</span>
              </div>
            </div>

            {/* Usage by App */}
            <div className="bg-[#1C1C3A] rounded-xl p-4 border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-1">
                <Monitor className="w-4 h-4 text-[#5B6CF7]" />
                <span className="text-white font-semibold text-sm">Usage by App</span>
              </div>
              <div className="text-[10px] text-white/30 mb-3">where Whisperer was triggered</div>

              <div className="space-y-2">
                {appUsage.map((app) => (
                  <div key={app.name} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center shrink-0">
                      <Monitor className="w-3 h-3 text-white/40" />
                    </div>
                    <span className="text-white/70 text-xs min-w-[85px]">{app.name}</span>
                    <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className={`h-full ${app.color} rounded-full`} style={{ width: `${app.pct}%` }} />
                    </div>
                    <span className="text-white/30 text-[10px] min-w-[28px] text-right">{app.pct}%</span>
                    <div className="text-right min-w-[40px]">
                      <div className="text-white font-semibold text-xs">{app.count}</div>
                      <div className="text-[8px] text-white/20">{app.sessions} sessions</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
