import { Circle, Search, BookOpen, ChevronDown, ArrowRight } from "lucide-react";
import { AppSidebar } from "./AppSidebar";

const entries = [
  { spoken: "1 on 1", correction: "one-on-one", category: "OKRs, Product Management, Strategy & Business Metrics" },
  { spoken: "1 pager", correction: "one-pager", category: "OKRs, Product Management, Strategy & Business Metrics" },
  { spoken: "1 password", correction: "1Password", category: "Operating Systems, Security, Mobile & Emerging Tech" },
  { spoken: "2 pager", correction: "two-pager", category: "OKRs, Product Management, Strategy & Business Metrics" },
  { spoken: "3 js", correction: "Three.js", category: "Programming Languages & Frameworks" },
  { spoken: "360 re view", correction: "360 review", category: "OKRs, Product Management, Strategy & Business Metrics" },
  { spoken: "5 whys", correction: "five whys", category: "Architecture, System Design & Engineering Discussion" },
];

export function DictionaryMockup() {
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
        <AppSidebar activeItem="Dictionary" />

        {/* Main content */}
        <div className="flex-1 flex flex-col p-6 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Dictionary</h3>
                <p className="text-white/40 text-xs">4867 corrections from 12 packs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/50 text-xs">Active</span>
              <div className="w-10 h-5 rounded-full bg-[#5B6CF7] flex items-center justify-end px-0.5">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mb-4">
            <div className="flex items-center gap-2 bg-[#1C1C3A] rounded-full px-4 py-2 border border-white/[0.06]">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-white text-sm font-medium">Corrections</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2">
              <span className="text-white/40 text-sm">Prompt Words</span>
            </div>
          </div>

          {/* Filter dropdown */}
          <div className="flex items-center gap-2 bg-[#1C1C3A] rounded-xl px-4 py-2.5 mb-3 border border-white/[0.06] w-fit">
            <BookOpen className="w-4 h-4 text-[#5B6CF7]" />
            <span className="text-white text-sm font-medium">All Dictionaries</span>
            <span className="text-white/40 text-xs">12 packs</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/30" />
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 bg-[#1C1C3A] rounded-xl px-4 py-2.5 mb-4 border border-white/[0.06]">
            <Search className="w-4 h-4 text-white/30" />
            <span className="text-white/30 text-sm">Search 4,867 entries...</span>
            <span className="ml-auto text-xs bg-[#5B6CF7] text-white px-2 py-0.5 rounded-md font-medium">+ Add</span>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-hidden space-y-0.5">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.02] group"
              >
                <span className="text-white/60 text-sm min-w-[100px] font-mono">{entry.spoken}</span>
                <ArrowRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-white font-semibold text-sm min-w-[100px]">{entry.correction}</span>
                <span className="text-[10px] text-white/30 bg-white/[0.04] px-2 py-0.5 rounded ml-auto truncate max-w-[240px] hidden sm:block">
                  {entry.category}
                </span>
                <div className="w-9 h-4 rounded-full bg-[#5B6CF7] flex items-center justify-end px-0.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
