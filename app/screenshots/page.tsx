"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Keyboard, ClipboardCheck, Zap, ToggleRight, Mic, X, Hand, Eye, Globe, Download, Search, Pin, Flag, Play, Clock, BookOpen, Settings, FileText, Type } from "lucide-react";
import { toPng } from "html-to-image";

// App icons
import slackIcon from "../../public/assets/icons/slack.png";
import gmailIcon from "../../public/assets/icons/gmail.png";
import googleDocsIcon from "../../public/assets/icons/googledocs.png";
import notionIcon from "../../public/assets/icons/notion.png";
import vscodeIcon from "../../public/assets/icons/vscode.png";
import jetbrainsIcon from "../../public/assets/icons/jetbrains.png";
import warpIcon from "../../public/assets/icons/warp.png";
import notesIcon from "../../public/assets/icons/notes.png";
import chromeIcon from "../../public/assets/icons/chrome.png";
import safariIcon from "../../public/assets/icons/safari.png";
import cursorIcon from "../../public/assets/icons/cursor.png";
import antigravityIcon from "../../public/assets/icons/antigravity.png";

// Whisperer Logo Component
const WhispererLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-[#14142B] border border-white/[0.08] flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#5B6CF7" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect x="0.6" y="10" width="1.5" height="4" rx="0.75" fill="url(#waveGrad)" />
        <rect x="3.2" y="8.5" width="1.5" height="7" rx="0.75" fill="url(#waveGrad)" />
        <rect x="5.9" y="7" width="1.5" height="10" rx="0.75" fill="url(#waveGrad)" />
        <rect x="8.6" y="5" width="1.5" height="14" rx="0.75" fill="url(#waveGrad)" />
        <rect x="11.3" y="3.5" width="1.5" height="17" rx="0.75" fill="url(#waveGrad)" />
        <rect x="13.9" y="5" width="1.5" height="14" rx="0.75" fill="url(#waveGrad)" />
        <rect x="16.6" y="7" width="1.5" height="10" rx="0.75" fill="url(#waveGrad)" />
        <rect x="19.3" y="8.5" width="1.5" height="7" rx="0.75" fill="url(#waveGrad)" />
        <rect x="21.9" y="10" width="1.5" height="4" rx="0.75" fill="url(#waveGrad)" />
      </svg>
    </div>
    <span className="text-white text-xl font-semibold">Whisperer</span>
  </div>
);

// Waveform Component
const Waveform = ({ height = 120, bars = 60, className = "" }: { height?: number; bars?: number; className?: string }) => (
  <div className={`flex items-center justify-center gap-[3px] ${className}`} style={{ height }}>
    {[...Array(bars)].map((_, i) => {
      const center = bars / 2;
      const dist = Math.abs(i - center) / center;
      const baseHeight = 0.3 + (1 - dist) * 0.7;
      const wave = Math.sin(i * 0.3) * 0.3;
      const h = Math.max(0.2, Math.min(1, baseHeight + wave));
      return (
        <div
          key={i}
          className="w-[4px] bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full"
          style={{ height: `${h * 100}%` }}
        />
      );
    })}
  </div>
);

// Feature Badge Component (matches ValueProps style)
const FeatureBadge = ({ icon, title, subtitle, color = "#5B6CF7" }: { icon: React.ReactNode; title: string; subtitle: string; color?: string }) => (
  <div className="bg-[#14142B] border border-white/[0.06] rounded-xl p-5">
    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15` }}>
      <div style={{ color }}>{icon}</div>
    </div>
    <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{subtitle}</p>
  </div>
);

// PRO Badge
const ProBadge = () => (
  <span className="bg-[#5B6CF7] text-white text-xs font-bold px-2 py-1 rounded ml-2">PRO</span>
);

// Screenshot 1: Hero
const Screenshot1 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col overflow-hidden">
    <WhispererLogo />

    <div className="flex-1 flex min-h-0">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center pr-16">
        <h1 className="text-6xl font-bold text-white leading-tight mb-2">
          Hold Fn. Speak. Release.
        </h1>
        <p className="text-2xl text-white/50 mb-8">
          Text appears where you're typing. 100% offline.
        </p>

        <div className="flex gap-3 mb-12">
          <button className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-full text-lg">
            Download on App Store
          </button>
        </div>

        <div className="flex gap-3 flex-wrap">
          <span className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm">
            Offline on-device transcription
          </span>
          <span className="bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 text-[#5B6CF7] px-4 py-2 rounded-full text-sm">
            Works in Slack, Gmail, VS Code
          </span>
          <span className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm">
            Live preview while you speak
          </span>
        </div>
      </div>

      {/* Right content - App UI mockups */}
      <div className="flex-1 relative">
        {/* Whisperer App Window - top right */}
        <div className="absolute top-0 right-0 w-[280px] bg-[#0A0A18] rounded-2xl border border-white/[0.06] shadow-2xl overflow-hidden z-10">
          {/* App Header */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14142B] border border-white/[0.08] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  {[3,7,11,15,19].map((x,i) => (
                    <rect key={i} x={x} y={[7,4,2,4,7][i]} width="2" height={[10,16,20,16,10][i]} rx="1" fill="url(#s1BarG)"/>
                  ))}
                  <defs><linearGradient id="s1BarG" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#5B6CF7"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient></defs>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-xs">Whisperer</div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7]" />
                  <span className="text-[#5B6CF7] text-[10px]">Ready</span>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                <span className="text-white/50 text-[9px]">WhispererV3</span>
              </div>
            </div>
            {/* Tab bar */}
            <div className="flex gap-0.5">
              <button className="bg-[#5B6CF7]/15 text-[#5B6CF7] text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l3-9 4 18 3-9h4"/></svg>
                Status
              </button>
              <button className="text-white/[0.35] text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h2"/></svg>
                Models
              </button>
              <button className="text-white/[0.35] text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                Settings
              </button>
            </div>
          </div>
          {/* Cards */}
          <div className="px-4 pb-3 space-y-1.5">
            {/* Transcribe card */}
            <div className="bg-[#14142B] rounded-lg border border-white/[0.06] p-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#5B6CF7] to-[#8B5CF6]" />
              <div className="flex items-center gap-2 ml-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#5B6CF7]/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B6CF7" strokeWidth="2" strokeLinecap="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[11px]">Transcribe</div>
                  <div className="text-white/[0.35] text-[9px]">Record and transcribe your voice</div>
                </div>
              </div>
              <div className="mt-2 ml-1.5">
                <button className="w-full bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] text-white font-semibold text-[11px] py-2 rounded-lg flex items-center justify-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/></svg>
                  Record
                </button>
              </div>
            </div>
            {/* Model card */}
            <div className="bg-[#14142B] rounded-lg border border-white/[0.06] p-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#5B6CF7] to-[#8B5CF6]" />
              <div className="flex items-center gap-2 ml-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#5B6CF7]/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B6CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h2"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white/[0.35] text-[9px]">Model</div>
                  <div className="text-white font-semibold text-[11px] truncate">WhispererV3</div>
                </div>
                <span className="text-white/[0.2] text-[9px] bg-white/[0.04] px-1.5 py-0.5 rounded shrink-0">547 MB</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2" className="shrink-0"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
            {/* Microphone card */}
            <div className="bg-[#14142B] rounded-lg border border-white/[0.06] p-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#5B6CF7] to-[#8B5CF6]" />
              <div className="flex items-center gap-2 ml-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#5B6CF7]/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B6CF7" strokeWidth="2" strokeLinecap="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white/[0.35] text-[9px]">Microphone</div>
                  <div className="text-white font-semibold text-[11px] truncate">MacBook Pro Microphone</div>
                </div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2" className="shrink-0"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
            {/* System-Wide Dictation card */}
            <div className="bg-[#14142B] rounded-lg border border-white/[0.06] p-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-[#22C55E]" />
              <div className="flex items-center gap-2 ml-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white/[0.35] text-[9px]">System-Wide Dictation</div>
                  <div className="text-white font-semibold text-[11px]">Fn → Speak → Release</div>
                </div>
                <span className="text-[#22C55E] text-[9px] font-semibold bg-[#22C55E]/10 px-1.5 py-0.5 rounded shrink-0">On</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2" className="shrink-0"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="px-4 pb-3 flex gap-1.5">
            <button className="flex-1 bg-[#5B6CF7]/10 border border-[#5B6CF7]/20 text-[#5B6CF7] text-[10px] font-medium py-1.5 rounded-md flex items-center justify-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              Workspace
            </button>
            <button className="flex-1 bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-[10px] font-medium py-1.5 rounded-md flex items-center justify-center gap-1">
              Quit <span className="text-[#EF4444]/50 text-[8px]">⌘Q</span>
            </button>
          </div>
        </div>

        {/* VS Code window - below and to the left */}
        <div className="absolute bottom-4 left-0 w-[460px] bg-[#0A0A18] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2.5 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
            </div>
            <span className="text-white/50 text-xs ml-1">metrics.py — VS Code</span>
          </div>
          {/* Code area */}
          <div className="mx-4 mb-3 bg-[#14142B] rounded-lg border border-white/[0.06] overflow-hidden">
            <div className="p-3 font-mono text-xs leading-relaxed">
              <div><span className="text-white/[0.2]">1</span>  <span className="text-purple-400">def</span> <span className="text-yellow-300">calculate_metrics</span><span className="text-white">(data):</span></div>
              <div><span className="text-white/[0.2]">2</span>      <span className="text-white/[0.35]"># Process input data</span></div>
              <div><span className="text-white/[0.2]">3</span>      <span className="text-white">results = []</span></div>
              <div><span className="text-white/[0.2]">4</span>      <span className="text-purple-400">for</span> <span className="text-white">item</span> <span className="text-purple-400">in</span> <span className="text-white">data:</span></div>
              <div><span className="text-white/[0.2]">5</span>          <span className="text-purple-400">if</span> <span className="text-white">item.is_valid():</span></div>
              <div><span className="text-white/[0.2]">6</span>              <span className="text-white">results.append(item)</span></div>
              <div><span className="text-white/[0.2]">7</span>      <span className="text-purple-400">return</span> <span className="text-white">results</span></div>
            </div>
          </div>
          {/* Transcription bar */}
          <div className="mx-4 mb-4 bg-[#14142B] rounded-lg border border-white/[0.06] p-2.5 flex items-center gap-2.5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#5B6CF7] to-[#8B5CF6]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#5B6CF7] ml-1.5" />
            <div className="flex items-center gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full" style={{ height: `${10 + Math.sin(i) * 6}px` }} />
              ))}
            </div>
            <span className="text-white/90 text-xs">return results</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom features */}
    <div className="flex gap-8 pt-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">On-device AI</div>
          <div className="text-white/[0.35] text-sm">All processing local</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">100+ languages</div>
          <div className="text-white/[0.35] text-sm">Global support</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">Apple Silicon</div>
          <div className="text-white/[0.35] text-sm">Metal optimized</div>
        </div>
      </div>
    </div>
  </div>
);

// Screenshot 2: Live Preview
const Screenshot2 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white text-center mb-2">
        See words <span className="text-[#5B6CF7]">as you speak</span>
      </h1>
      <p className="text-xl text-white/50 text-center mb-16">
        Live preview while recording. Final pass for accuracy.
      </p>

      {/* Premium transcription bubble - Light theme to match HUD */}
      <div className="relative mb-8">
        {/* Glow effect behind bubble */}
        <div className="absolute inset-0 bg-[#5B6CF7]/10 rounded-3xl blur-2xl" />

        {/* Speech bubble - White/light like HUD */}
        <div className="relative bg-white rounded-2xl px-6 py-5 shadow-2xl max-w-2xl">
          {/* Live indicator */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#5B6CF7] animate-pulse" />
            <span className="text-[#5B6CF7] text-xs font-medium uppercase tracking-wider">Live Transcription</span>
          </div>

          {/* Transcription text */}
          <p className="text-lg text-slate-800 font-light leading-relaxed">
            The quarterly report shows significant growth in our enterprise segment,
            with a <span className="text-[#5B6CF7] font-semibold">47% increase</span> in recurring revenue
            <span className="inline-block w-0.5 h-5 bg-[#5B6CF7] ml-1 animate-pulse align-middle" />
          </p>

          {/* Bottom stats */}
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#5B6CF7]/10 flex items-center justify-center">
                <Mic className="w-3 h-3 text-[#5B6CF7]" />
              </div>
              <span className="text-slate-500 text-xs">Recording</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full"
                  style={{ height: `${6 + Math.sin(i * 0.8) * 8}px` }}
                />
              ))}
            </div>
            <span className="text-slate-400 text-xs ml-auto">0:04</span>
          </div>
        </div>

        {/* Speech bubble pointer */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg" />
      </div>

      {/* HUD Overlay - dark navy capsule matching real app */}
      <div className="inline-flex items-center gap-3 bg-[#14142B] rounded-full px-2 py-2 shadow-2xl border border-white/[0.06]">
        {/* Left mic with status indicator */}
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#5B6CF7]/15">
          <Mic className="w-6 h-6 text-[#5B6CF7]" />
          <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#5B6CF7] border-2 border-[#14142B]" />
        </div>

        {/* Waveform dots */}
        <div className="flex items-center gap-1 px-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7]/80"
              style={{
                opacity: 0.4 + Math.sin(i * 0.5) * 0.6,
              }}
            />
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Secondary mic button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5B6CF7]/15">
            <Mic className="w-5 h-5 text-[#5B6CF7]" />
          </button>

          {/* Cancel button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/15">
            <X className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom features */}
    <div className="grid grid-cols-4 gap-6 mt-12">
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>}
        title="On-device processing"
        subtitle="All transcription happens locally on your Mac"
        color="#5B6CF7"
      />
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
        title="No cloud uploads"
        subtitle="Your voice never leaves your device"
        color="#8B5CF6"
      />
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
        title="Works offline"
        subtitle="Airplane mode? No problem."
        color="#22C55E"
      />
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
        title="No account needed"
        subtitle="Download and use — no signup required"
        color="#EF4444"
      />
    </div>
  </div>
);

// Screenshot 3: Code Mode
const Screenshot3 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <div className="flex items-center gap-2 mb-8">
      <WhispererLogo />
      {/* Pro Pack indicator - aligned with logo */}
      <div className="ml-auto flex flex-col items-end gap-2.5">
        <div className="inline-flex items-center gap-2 bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 rounded-full px-3 py-1.5">
          <span className="bg-[#5B6CF7] text-white text-xs font-bold px-2 py-0.5 rounded">PRO</span>
          <span className="text-[#5B6CF7] text-sm font-medium">Part of Pro Pack</span>
        </div>
        <span className="text-white/[0.35] text-xs bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1">Available through In-App Purchase</span>
      </div>
    </div>

    <div className="mb-8">
      <h1 className="text-5xl font-bold text-white mb-2">Code Mode</h1>
      <p className="text-xl text-white/50">Speak code naturally.</p>
    </div>

    <div className="flex items-start gap-3 text-white/50 text-sm mb-8">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#5B6CF7]" />
        Punctuation & symbols: parentheses, brackets, quotes
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
        Casing commands: camelCase, snake_case, CONSTANT_CASE
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#F97316]" />
        Literal mode for identifiers
      </div>
    </div>

    <div className="flex-1 flex gap-8">
      {/* Code editor */}
      <div className="flex-1 bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1C1C3A] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-white/50 text-sm ml-2">validator.py</span>
          <span className="ml-auto bg-[#5B6CF7] text-white text-xs font-bold px-2 py-0.5 rounded">Code Mode ON</span>
        </div>
        <div className="p-6 font-mono text-sm space-y-1">
          <div><span className="text-white/[0.35] mr-4">1</span><span className="text-purple-400">import</span> <span className="text-white">re</span></div>
          <div><span className="text-white/[0.35] mr-4">2</span><span className="text-purple-400">from</span> <span className="text-white">typing</span> <span className="text-purple-400">import</span> <span className="text-white">Dict</span></div>
          <div><span className="text-white/[0.35] mr-4">3</span></div>
          <div><span className="text-white/[0.35] mr-4">4</span><span className="text-purple-400">def</span> <span className="text-yellow-300">validate_input</span><span className="text-white">(data: Dict) -&gt; bool:</span></div>
          <div><span className="text-white/[0.35] mr-4">5</span>    <span className="text-green-400">"""Validate user input data."""</span></div>
          <div><span className="text-white/[0.35] mr-4">6</span>    <span className="text-purple-400">if not</span> <span className="text-white">data.get("email"):</span></div>
          <div><span className="text-white/[0.35] mr-4">7</span>        <span className="text-purple-400">return</span> <span className="text-orange-400">False</span></div>
          <div><span className="text-white/[0.35] mr-4">8</span></div>
          <div><span className="text-white/[0.35] mr-4">9</span>    <span className="text-white">pattern = r"[a-zA-Z0-9_.+-]+@"</span></div>
          <div><span className="text-white/[0.35] mr-4">10</span>    <span className="text-purple-400">return</span> <span className="text-white">bool(re.match(pattern, data["email"]))</span></div>
        </div>
      </div>

      {/* Voice to Code table */}
      <div className="w-80 bg-[#14142B] rounded-xl border border-white/[0.06] p-6">
        <div className="flex items-center gap-4 mb-6 text-sm font-semibold">
          <span className="text-white/50">VOICE</span>
          <span className="text-white/[0.2]">→</span>
          <span className="text-[#5B6CF7]">CODE</span>
        </div>

        <div className="space-y-4 text-sm">
          {[
            ['"open paren"', '('],
            ['"close bracket"', ']'],
            ['"open curly brace"', '{'],
            ['"camel case user name"', 'userName'],
            ['"snake case get data"', 'get_data'],
            ['"constant case max size"', 'MAX_SIZE'],
            ['"define function process"', 'def process():'],
            ['"arrow function"', '() =>'],
            ['"triple equals"', '==='],
            ['"string interpolation"', 'f"...{var}..."'],
          ].map(([voice, code], i) => (
            <div key={i} className="flex justify-between">
              <span className="text-white/50">{voice}</span>
              <span className="text-[#5B6CF7] font-mono">{code}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-6 flex-wrap">
          {['VS Code', 'JetBrains', 'Xcode', 'Terminal', 'Cursor'].map((app) => (
            <span key={app} className="text-xs text-white/[0.35] bg-white/[0.08] px-2 py-1 rounded">{app}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Spoken input / Output */}
    <div className="mt-8 bg-[#14142B] rounded-xl border border-white/[0.06] p-4">
      <div className="flex items-center gap-4">
        <span className="text-white/[0.35] text-sm">You said:</span>
        <span className="text-white/90">"def validate input open paren data colon dict close paren"</span>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-white/[0.35] text-sm">Output:</span>
        <span className="text-[#5B6CF7] font-mono">def validate_input(data: Dict):</span>
      </div>
    </div>
  </div>
);

// Screenshot 4: Per-App Profiles
const Screenshot4 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <div className="flex items-center gap-2 mb-8">
      <WhispererLogo />
      {/* Pro Pack indicator - aligned with logo */}
      <div className="ml-auto flex flex-col items-end gap-2.5">
        <div className="inline-flex items-center gap-2 bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 rounded-full px-3 py-1.5">
          <span className="bg-[#5B6CF7] text-white text-xs font-bold px-2 py-0.5 rounded">PRO</span>
          <span className="text-[#5B6CF7] text-sm font-medium">Part of Pro Pack</span>
        </div>
        <span className="text-white/[0.35] text-xs bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1">Available through In-App Purchase</span>
      </div>
    </div>

    <div className="mb-4">
      <h1 className="text-5xl font-bold text-white">Per-App Profiles.</h1>
      <h1 className="text-5xl font-bold text-[#5B6CF7]">Context-aware dictation.</h1>
    </div>

    <p className="text-white/50 text-lg mb-2">
      Slack gets chat style. Gmail gets email format.
    </p>
    <p className="text-white/50 text-lg mb-12">
      IDEs get code mode. Switches automatically.
    </p>

    <div className="flex-1 space-y-6">
      {/* Slack */}
      <div className="bg-[#14142B] rounded-xl border-l-4 border-l-purple-500 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={slackIcon.src} alt="Slack" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-semibold">Slack</span>
          <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">Chat Style</span>
          <span className="ml-auto bg-[#5B6CF7] text-white text-xs font-semibold px-3 py-1 rounded-full">Active</span>
        </div>
        <p className="text-white/90 text-lg mb-2">hey can you review the PR when you get a chance</p>
        <p className="text-white/90 text-lg mb-4">thanks!</p>
        <p className="text-white/[0.35] text-sm">Casual, lowercase, quick responses</p>
      </div>

      {/* Gmail */}
      <div className="bg-[#14142B] rounded-xl border-l-4 border-l-red-500 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={gmailIcon.src} alt="Gmail" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-semibold">Gmail</span>
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Email Style</span>
        </div>
        <p className="text-white/90 text-lg mb-2">Hi team,</p>
        <p className="text-white/90 text-lg mb-4">Please review the attached document for the Q3 meeting.</p>
        <p className="text-white/[0.35] text-sm">Professional, properly punctuated</p>
      </div>

      {/* VS Code */}
      <div className="bg-[#14142B] rounded-xl border-l-4 border-l-blue-500 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={vscodeIcon.src} alt="VS Code" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-semibold">VS Code</span>
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Code Style</span>
        </div>
        <p className="text-white/90 text-lg font-mono mb-2">def validate_input(data: dict) -&gt; bool:</p>
        <p className="text-white/90 text-lg font-mono mb-4 pl-8">return data.get('valid', False)</p>
        <p className="text-white/[0.35] text-sm">Symbols, casing, structure preserved</p>
      </div>
    </div>

    <p className="text-white/[0.35] text-center mt-8">Switches automatically based on active app</p>
  </div>
);

// Screenshot 5: How It Works
const Screenshot5 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-12 mb-12">
      <h1 className="text-5xl font-bold text-white">
        How Whisperer <span className="text-[#5B6CF7]">works</span>
      </h1>
      <p className="text-white/50 text-lg mt-4">Three simple steps to effortless dictation.</p>
    </div>

    <div className="flex-1 flex items-stretch gap-6">
      {/* Step 1 - Blue */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#5B6CF7]" />
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#5B6CF7]/15 flex items-center justify-center border border-[#5B6CF7]/20">
              <Keyboard className="w-7 h-7 text-[#5B6CF7]" />
            </div>
            <span className="text-[#5B6CF7] text-sm font-bold uppercase tracking-wider">Step 1</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Hold your key</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Hold Fn or your chosen shortcut to start recording.</p>

          <div className="flex items-center gap-4 mt-6">
            <div className="relative">
              <div className="bg-[#1C1C3A] border border-[#5B6CF7]/30 rounded-xl px-7 py-5 shadow-lg">
                <span className="text-white text-2xl font-semibold">Fn</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#5B6CF7] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/[0.35] text-xs">or customize:</span>
              <div className="flex gap-1.5">
                {['⌥', '⌃', '⇧'].map((key) => (
                  <span key={key} className="bg-[#1C1C3A] border border-white/[0.06] text-white/50 w-8 h-8 rounded-lg flex items-center justify-center text-sm">{key}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connector 1→2 */}
      <div className="flex items-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h20M20 10l6 6-6 6" stroke="url(#arrow1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="arrow1" x1="4" y1="16" x2="26" y2="16">
              <stop stopColor="#5B6CF7"/>
              <stop offset="1" stopColor="#EF4444"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Step 2 - Red */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]" />
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#EF4444]/15 flex items-center justify-center border border-[#EF4444]/20">
              <Mic className="w-7 h-7 text-[#EF4444]" />
            </div>
            <span className="text-[#EF4444] text-sm font-bold uppercase tracking-wider">Step 2</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Speak naturally</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">See a live preview and waveform while you talk.</p>

          <div className="mt-6 bg-[#1C1C3A] border border-[#EF4444]/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="text-[#EF4444] text-xs font-medium uppercase tracking-wider">Recording</span>
              <span className="text-white/[0.35] text-xs ml-auto font-mono">0:04</span>
            </div>
            <div className="flex items-center justify-center gap-[3px] h-10">
              {[...Array(32)].map((_, i) => {
                const center = 16;
                const dist = Math.abs(i - center) / center;
                const h = 0.15 + (1 - dist) * 0.7 + Math.sin(i * 0.6) * 0.15;
                return (
                  <div
                    key={i}
                    className="w-[5px] bg-[#EF4444] rounded-full"
                    style={{ height: `${Math.max(12, h * 100)}%`, opacity: 0.5 + h * 0.5 }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Connector 2→3 */}
      <div className="flex items-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h20M20 10l6 6-6 6" stroke="url(#arrow2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="arrow2" x1="4" y1="16" x2="26" y2="16">
              <stop stopColor="#EF4444"/>
              <stop offset="1" stopColor="#22C55E"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Step 3 - Green */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#22C55E]" />
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 flex items-center justify-center border border-[#22C55E]/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5">
                <path d="M4 7V4h16v3"/>
                <path d="M9 20h6"/>
                <path d="M12 4v16"/>
              </svg>
            </div>
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Step 3</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Release to insert</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Text is refined and inserted into the focused field.</p>

          <div className="mt-6 bg-[#1C1C3A] border border-[#22C55E]/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="text-[#22C55E] text-xs font-medium">Inserted</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-white/80">The quarterly report shows </span>
              <span className="text-[#22C55E] font-medium">significant growth in our enterprise segment</span>
              <span className="inline-block w-0.5 h-4 bg-[#22C55E] ml-0.5 align-middle" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom info */}
    <div className="flex justify-center gap-6 mt-10">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Streams while recording</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Final pass on release</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Maximum accuracy</span>
      </div>
    </div>
  </div>
);

// Screenshot 6: Works in Your Apps
const Screenshot6 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-12 mb-12">
      <h1 className="text-5xl font-bold text-white">
        Works in the apps you <span className="text-[#5B6CF7]">already use</span>
      </h1>
      <p className="text-white/50 text-lg mt-4">Accessibility API insertion with a paste fallback for universal compatibility.</p>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-6 gap-x-10 gap-y-8">
        {[
          { icon: slackIcon, name: 'Slack' },
          { icon: gmailIcon, name: 'Gmail' },
          { icon: googleDocsIcon, name: 'Docs' },
          { icon: notionIcon, name: 'Notion' },
          { icon: vscodeIcon, name: 'VS Code' },
          { icon: cursorIcon, name: 'Cursor' },
          { icon: jetbrainsIcon, name: 'JetBrains' },
          { icon: warpIcon, name: 'Warp' },
          { icon: notesIcon, name: 'Notes' },
          { icon: chromeIcon, name: 'Chrome' },
          { icon: safariIcon, name: 'Safari' },
          { icon: antigravityIcon, name: 'Antigravity' },
        ].map((app, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-[#14142B] border border-white/[0.06] flex items-center justify-center p-2.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
              <img src={app.icon.src} alt={app.name} className="w-12 h-12 object-contain relative" />
            </div>
            <span className="text-white/50 text-sm font-medium">{app.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom features */}
    <div className="flex justify-center gap-6 mt-10">
      {[
        { label: 'Universal input', color: '#5B6CF7', colorEnd: '#8B5CF6' },
        { label: 'Clipboard-safe', color: '#22C55E', colorEnd: '#16A34A' },
        { label: 'Smart fallback', color: '#EF4444', colorEnd: '#DC2626' },
        { label: 'Auto-switch by app', color: '#8B5CF6', colorEnd: '#7C3AED' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.colorEnd})` }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

// Screenshot 7: One-time Setup
const Screenshot7 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-12 mb-12">
      <h1 className="text-5xl font-bold text-white">
        One-time <span className="text-[#5B6CF7]">setup</span>
      </h1>
      <p className="text-white/50 text-lg mt-4">Three macOS permissions, then you&apos;re ready to go.</p>
    </div>

    <div className="flex-1 flex items-stretch gap-6">
      {/* Permission 1 - Microphone - Green */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#22C55E]" />
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 flex items-center justify-center border border-[#22C55E]/20">
              <Mic className="w-7 h-7 text-[#22C55E]" />
            </div>
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Permission 1</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Microphone</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Captures your voice for on-device transcription.</p>

          <div className="mt-6 bg-[#1C1C3A] border border-[#22C55E]/20 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
                Audio stays on device
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
                No cloud uploads
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
                Only active when held
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connector 1→2 */}
      <div className="flex items-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h20M20 10l6 6-6 6" stroke="url(#perm1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="perm1" x1="4" y1="16" x2="26" y2="16">
              <stop stopColor="#22C55E"/>
              <stop offset="1" stopColor="#5B6CF7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Permission 2 - Accessibility - Blue */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#5B6CF7]" />
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#5B6CF7]/15 flex items-center justify-center border border-[#5B6CF7]/20">
              <Hand className="w-7 h-7 text-[#5B6CF7]" />
            </div>
            <span className="text-[#5B6CF7] text-sm font-bold uppercase tracking-wider">Permission 2</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Accessibility</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Types transcribed text into the focused field.</p>

          <div className="mt-6 bg-[#1C1C3A] border border-[#5B6CF7]/20 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7] shrink-0" />
                Direct text insertion
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7] shrink-0" />
                Works in any app
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7] shrink-0" />
                Paste fallback built-in
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connector 2→3 */}
      <div className="flex items-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h20M20 10l6 6-6 6" stroke="url(#perm2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="perm2" x1="4" y1="16" x2="26" y2="16">
              <stop stopColor="#5B6CF7"/>
              <stop offset="1" stopColor="#EF4444"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Permission 3 - Input Monitoring - Red */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]" />
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#EF4444]/15 flex items-center justify-center border border-[#EF4444]/20">
              <Eye className="w-7 h-7 text-[#EF4444]" />
            </div>
            <span className="text-[#EF4444] text-sm font-bold uppercase tracking-wider">Permission 3</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Input Monitoring</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Detects your activation hotkey globally.</p>

          <div className="mt-6 bg-[#1C1C3A] border border-[#EF4444]/20 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                Fn key detection
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                Custom shortcuts
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                No keylogging
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom info */}
    <div className="flex justify-center gap-6 mt-10">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Standard macOS permissions</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">No data collected</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">No account needed</span>
      </div>
    </div>
  </div>
);

// Screenshot 8: Models
const Screenshot8 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-12 mb-12">
      <h1 className="text-5xl font-bold text-white">
        Choose <span className="text-[#5B6CF7]">speed or accuracy</span>
      </h1>
      <p className="text-white/50 text-lg mt-4">Optimized offline models for Apple Silicon.</p>
    </div>

    <div className="flex-1 flex items-stretch gap-6">
      {[
        {
          name: 'Fast',
          label: 'SPEED',
          desc: 'Quick transcription for short messages and rapid workflows.',
          time: '~0.3s',
          size: '75 MB',
          quality: 'Good',
          qualityBars: 2,
          selected: false,
          color: '#22C55E',
          icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          ),
        },
        {
          name: 'Balanced',
          label: 'RECOMMENDED',
          desc: 'Best mix of speed and accuracy for everyday dictation.',
          time: '~0.8s',
          size: '500 MB',
          quality: 'Great',
          qualityBars: 3,
          selected: true,
          color: '#5B6CF7',
          icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B6CF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12l2.5 2.5L16 9"/>
            </svg>
          ),
        },
        {
          name: 'Accurate',
          label: 'QUALITY',
          desc: 'Maximum precision for long-form, technical, or professional content.',
          time: '~2s',
          size: '3 GB',
          quality: 'Best',
          qualityBars: 4,
          selected: false,
          color: '#EF4444',
          icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          ),
        },
      ].map((model, i) => (
        <div key={i} className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: model.color }} />
          {model.selected && (
            <div className="absolute top-0 left-0 right-0 h-24 rounded-t-2xl" style={{ background: `linear-gradient(180deg, ${model.color}10 0%, transparent 100%)` }} />
          )}
          <div className="p-8 flex flex-col flex-1 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: `${model.color}15`, borderColor: `${model.color}33` }}>
                {model.icon}
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: model.color }}>{model.label}</span>
                {model.selected && (
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                    <span className="text-xs text-white/[0.35]">Active</span>
                  </div>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-auto">{model.desc}</p>

            <div className="mt-6 bg-[#1C1C3A] border rounded-xl p-4 space-y-3" style={{ borderColor: `${model.color}33` }}>
              <div className="flex justify-between items-center">
                <span className="text-white/[0.35] text-sm">Latency</span>
                <span className="text-white text-sm font-medium">{model.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/[0.35] text-sm">Model size</span>
                <span className="text-white text-sm font-medium">{model.size}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/[0.35] text-sm">Quality</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className="w-2 h-4 rounded-sm"
                        style={{
                          backgroundColor: bar <= model.qualityBars ? model.color : `${model.color}20`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">{model.quality}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom info */}
    <div className="flex justify-center gap-6 mt-10">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Instant start (preloaded)</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">100% offline models</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Metal-optimized for Apple Silicon</span>
      </div>
    </div>
  </div>
);

// Screenshot 9: Pro Pack
const Screenshot9 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-8 mb-8">
      <h1 className="text-5xl font-bold text-white">
        Upgrade <span className="text-[#5B6CF7]">when you need it</span>
      </h1>
      <p className="text-white/50 text-lg mt-4">Base dictation included. Pro adds power features.</p>
    </div>

    <div className="flex-1 flex items-stretch gap-6 max-w-5xl mx-auto w-full">
      {/* Base - Green */}
      <div className="flex-1 relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#22C55E]" />
        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 flex items-center justify-center border border-[#22C55E]/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
              </svg>
            </div>
            <span className="text-[#22C55E] text-sm font-bold uppercase tracking-wider">Base App</span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-white">$2.99</span>
            <span className="text-white/[0.35] text-sm">one-time</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Core dictation for everyday use.</p>

          <div className="mt-5 bg-[#1C1C3A] border border-[#22C55E]/20 rounded-xl p-4">
            <div className="space-y-2.5">
              {['Offline dictation', 'Live preview', 'Works in all apps', 'Multiple models', 'Waveform feedback'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h20M20 10l6 6-6 6" stroke="url(#proArrow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="proArrow" x1="4" y1="16" x2="26" y2="16">
              <stop stopColor="#22C55E"/>
              <stop offset="1" stopColor="#5B6CF7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Pro - Blue */}
      <div className="flex-[1.15] relative bg-[#14142B] rounded-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#5B6CF7]" />
        <div className="absolute top-0 left-0 right-0 h-32 rounded-t-2xl" style={{ background: 'linear-gradient(180deg, rgba(91,108,247,0.08) 0%, transparent 100%)' }} />
        <div className="p-7 flex flex-col flex-1 relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#5B6CF7]/15 flex items-center justify-center border border-[#5B6CF7]/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B6CF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <span className="text-[#5B6CF7] text-sm font-bold uppercase tracking-wider">Pro Pack</span>
              <div className="mt-1">
                <span className="bg-[#5B6CF7] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">BEST VALUE</span>
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-white">$14.99</span>
            <span className="text-white/[0.35] text-sm">lifetime</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-auto">Everything in Base, plus power features.</p>

          <div className="mt-5 bg-[#1C1C3A] border border-[#5B6CF7]/20 rounded-xl p-4">
            <div className="space-y-2.5">
              {['Everything in Base', 'Code Mode', 'Per-app profiles', 'Personal dictionary', 'Pro insertion'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-5 bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] text-white font-bold py-3 rounded-xl text-lg shadow-lg shadow-[#5B6CF7]/25">
            Get Pro Pack
          </button>
        </div>
      </div>
    </div>

    {/* Bottom info */}
    <div className="flex justify-center gap-6 mt-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">One-time purchase</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">No subscription</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Restore purchases</span>
      </div>
    </div>
  </div>
);

// Screenshot 10: Personal Dictionary
const Screenshot10 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex gap-10 mt-6">
      {/* Left: Title + messaging */}
      <div className="w-[340px] flex flex-col pr-4">
        <div className="inline-flex items-center gap-2 bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 rounded-full px-3 py-1.5 w-fit mb-5">
          <span className="bg-[#5B6CF7] text-white text-xs font-bold px-2 py-0.5 rounded">PRO</span>
          <span className="text-[#5B6CF7] text-sm font-medium">Pro Pack</span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2">Personal Dictionary</h1>
        <p className="text-white/50 text-sm leading-relaxed mb-8">Names, acronyms, and terms you use daily — always transcribed correctly.</p>

        {/* Before/After */}
        <div className="bg-[#14142B] rounded-xl p-5 mb-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]" />
          <div className="text-[#EF4444] text-xs font-bold uppercase tracking-wider mb-2">Without dictionary</div>
          <p className="text-white/50 text-sm leading-relaxed line-through decoration-[#EF4444]/40">&quot;We need to migrate the post gress queue el database to Cooper netties&quot;</p>
        </div>

        <div className="flex justify-center my-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="url(#dictArrow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="dictArrow" x1="12" y1="5" x2="12" y2="19">
                <stop stopColor="#EF4444"/>
                <stop offset="1" stopColor="#22C55E"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="bg-[#14142B] rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#22C55E]" />
          <div className="text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-2">With dictionary</div>
          <p className="text-white text-sm leading-relaxed">
            &quot;We need to migrate the <span className="text-[#22C55E] font-semibold">PostgreSQL</span> database to <span className="text-[#22C55E] font-semibold">Kubernetes</span>&quot;
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-6">
          <span className="bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] px-3 py-1.5 rounded-full text-xs">4,342 corrections</span>
          <span className="bg-[#5B6CF7]/10 border border-[#5B6CF7]/20 text-[#5B6CF7] px-3 py-1.5 rounded-full text-xs">12 packs</span>
          <span className="bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] px-3 py-1.5 rounded-full text-xs">Quick add</span>
        </div>
      </div>

      {/* Right: App-like dictionary window mockup */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden flex flex-col">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1C1C3A] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
              <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
            </div>
            <span className="text-white/50 text-sm ml-2">Dictionary — Whisperer</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="text-[#22C55E] text-xs">Active</span>
            </div>
          </div>

          <div className="flex flex-1 min-h-0">
            {/* Sidebar - Pack list */}
            <div className="w-[180px] bg-[#0F0F23] border-r border-white/[0.06] flex flex-col">
              <div className="p-3">
                <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg px-3 py-1.5 text-white/[0.35] text-xs flex items-center gap-2">
                  <Search className="w-3 h-3" />
                  Search packs...
                </div>
              </div>
              <div className="px-2 mb-1">
                <span className="text-white/[0.35] text-[10px] font-bold uppercase tracking-wider px-2">Technical</span>
              </div>
              <div className="flex-1 overflow-hidden">
                {[
                  { name: 'Languages', count: 398, active: false },
                  { name: 'DevOps', count: 368, active: false },
                  { name: 'Data & AI', count: 369, active: false },
                  { name: 'Dev Tools', count: 266, active: false },
                  { name: 'Concepts', count: 432, active: true },
                  { name: 'OS & Security', count: 262, active: false },
                  { name: 'Agile', count: 234, active: false },
                ].map((pack, i) => (
                  <div key={i} className={`flex items-center justify-between px-3 py-1.5 mx-1 rounded-lg text-xs ${pack.active ? 'bg-[#5B6CF7]/15 text-[#5B6CF7]' : 'text-white/50'}`}>
                    <span className={pack.active ? 'font-medium' : ''}>{pack.name}</span>
                    <span className={pack.active ? 'text-[#5B6CF7]/60' : 'text-white/[0.2]'}>{pack.count}</span>
                  </div>
                ))}
              </div>
              <div className="px-3 py-2 border-t border-white/[0.06]">
                <span className="text-white/[0.35] text-[10px]">12/12 packs enabled</span>
              </div>
            </div>

            {/* Dictionary entries */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#5B6CF7]" />
                  <span className="text-white text-sm font-medium">Concepts</span>
                  <span className="text-white/[0.35] text-xs">432 entries</span>
                </div>
                <div className="bg-[#5B6CF7] text-white text-[10px] font-bold px-2 py-0.5 rounded">+ Add</div>
              </div>

              <div className="flex items-center px-4 py-1.5 border-b border-white/[0.06] text-[10px] text-white/[0.35] uppercase tracking-wider">
                <span className="w-8">#</span>
                <span className="flex-1">Spoken</span>
                <span className="w-4" />
                <span className="flex-1">Corrected</span>
                <span className="w-16 text-right">Category</span>
              </div>

              <div className="flex-1 overflow-hidden">
                {[
                  { spoken: '2 pager', corrected: 'two-pager', cat: 'format' },
                  { spoken: '3 js', corrected: 'Three.js', cat: 'lib' },
                  { spoken: '360 re view', corrected: '360 review', cat: 'term' },
                  { spoken: 'a b testing', corrected: 'A/B testing', cat: 'method' },
                  { spoken: 'a sync', corrected: 'async', cat: 'keyword' },
                  { spoken: 'ack knowledge', corrected: 'acknowledge', cat: 'term' },
                  { spoken: 'add hock', corrected: 'ad hoc', cat: 'term' },
                  { spoken: 'agnostic', corrected: 'agnostic', cat: 'term' },
                  { spoken: 'air table', corrected: 'Airtable', cat: 'brand' },
                  { spoken: 'algo rithm', corrected: 'algorithm', cat: 'term' },
                ].map((entry, i) => (
                  <div key={i} className={`flex items-center px-4 py-1.5 text-xs ${i % 2 === 0 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                    <span className="w-8 text-white/[0.2]">{i + 1}</span>
                    <span className="flex-1 text-white/50">{entry.spoken}</span>
                    <span className="w-4 text-white/[0.2]">→</span>
                    <span className="flex-1 text-white font-medium">{entry.corrected}</span>
                    <span className="w-16 text-right">
                      <span className="text-[10px] text-[#5B6CF7]/70 bg-[#5B6CF7]/10 px-1.5 py-0.5 rounded">{entry.cat}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom info */}
    <div className="flex justify-center gap-6 mt-6">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Auto-corrects as you speak</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">12 built-in packs</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Quick add from overlay</span>
      </div>
    </div>
  </div>
);

// Screenshot 11: System-Wide Dictation (Optional Accessibility)
const Screenshot11 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex gap-10 mt-6">
      {/* Left: Onboarding content */}
      <div className="w-[500px] flex flex-col pr-4">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-5xl font-bold text-white whitespace-nowrap">System-Wide Dictation</h1>
          <span className="bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm font-medium px-4 py-1.5 rounded-full shrink-0">Optional</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          Use Whisperer system-wide dictate into any text field on your Mac.
          Accessibility permission is <span className="text-[#22C55E] font-medium">optional</span> and can be enabled later.
        </p>

        {/* Three step cards */}
        <div className="space-y-3 mb-8 w-[85%]">
          {/* Step 1 - Blue */}
          <div className="relative bg-[#14142B] rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#5B6CF7]" />
            <div className="p-4 pl-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#5B6CF7]/15 flex items-center justify-center border border-[#5B6CF7]/20 shrink-0">
                <Keyboard className="w-5 h-5 text-[#5B6CF7]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Hold Shortcut Key</h3>
                <p className="text-white/[0.35] text-xs mt-0.5">Press and hold Fn to start</p>
              </div>
            </div>
          </div>

          {/* Step 2 - Red */}
          <div className="relative bg-[#14142B] rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]" />
            <div className="p-4 pl-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EF4444]/15 flex items-center justify-center border border-[#EF4444]/20 shrink-0">
                <Mic className="w-5 h-5 text-[#EF4444]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Speak Naturally</h3>
                <p className="text-white/[0.35] text-xs mt-0.5">Talk at your normal pace</p>
              </div>
            </div>
          </div>

          {/* Step 3 - Green */}
          <div className="relative bg-[#14142B] rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#22C55E]" />
            <div className="p-4 pl-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#22C55E]/15 flex items-center justify-center border border-[#22C55E]/20 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5">
                  <path d="M4 7V4h16v3"/>
                  <path d="M9 20h6"/>
                  <path d="M12 4v16"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Release — Text Appears</h3>
                <p className="text-white/[0.35] text-xs mt-0.5">Transcribed text inserted instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-[85%]">
          <button className="w-full bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] text-white font-semibold py-4 rounded-full text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#5B6CF7]/25 mb-4">
            <span className="bg-white/20 text-white font-bold text-sm px-2.5 py-0.5 rounded-md">Fn</span>
            Enable System-Wide Dictation
          </button>
          <p className="text-white/[0.35] text-sm text-center mb-2">Set Up Later</p>
          <p className="text-white/[0.2] text-xs text-center">Requires Accessibility permission to detect your shortcut key globally.</p>
        </div>
      </div>

      {/* Right: App demo illustration */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Stacked app windows showing text insertion */}

          {/* Back window - Slack */}
          <div className="absolute top-[60px] right-4 w-[420px] bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden shadow-2xl z-20">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#1C1C3A] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              </div>
              <span className="text-white/[0.35] text-xs ml-1">Slack — #engineering</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#5B6CF7]/20 shrink-0" />
                <div>
                  <span className="text-white/[0.35] text-xs">Sarah K. · 9:41 AM</span>
                  <p className="text-white/50 text-xs mt-0.5">Can someone review the deployment PR?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#22C55E]/20 shrink-0" />
                <div>
                  <span className="text-white/[0.35] text-xs">You · 9:43 AM</span>
                  <p className="text-white text-xs mt-0.5">I&apos;ll take a look at it right now and leave comments<span className="inline-block w-0.5 h-3 bg-[#5B6CF7] ml-0.5 align-middle" /></p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle window - Notes */}
          <div className="absolute top-[120px] left-0 w-[420px] bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#1C1C3A] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              </div>
              <span className="text-white/[0.35] text-xs ml-1">Notes — Meeting Notes</span>
            </div>
            <div className="p-4">
              <p className="text-white/[0.35] text-xs mb-2 font-semibold">Q1 Planning</p>
              <p className="text-white/50 text-xs leading-relaxed">• Review roadmap priorities</p>
              <p className="text-white/50 text-xs leading-relaxed">• Assign feature leads</p>
              <p className="text-white text-xs leading-relaxed">• <span className="text-[#22C55E]">Discuss the migration timeline for the new infrastructure</span><span className="inline-block w-0.5 h-3 bg-[#5B6CF7] ml-0.5 align-middle" /></p>
            </div>
          </div>

          {/* Front window - VS Code */}
          <div className="absolute top-[260px] right-[20px] w-[420px] bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#1C1C3A] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              </div>
              <span className="text-white/[0.35] text-xs ml-1">app.ts — VS Code</span>
            </div>
            <div className="p-4 font-mono text-xs">
              <div><span className="text-white/[0.2]">12</span>  <span className="text-white/[0.35]">// TODO: add error handling</span></div>
              <div><span className="text-white/[0.2]">13</span>  <span className="text-purple-400">async</span> <span className="text-yellow-300">function</span> <span className="text-white">deploy() {'{'}</span></div>
              <div><span className="text-white/[0.2]">14</span>    <span className="text-[#22C55E]">validate all environment variables before deployment</span><span className="inline-block w-0.5 h-3 bg-[#5B6CF7] ml-0.5 align-middle" /></div>
            </div>
          </div>

          {/* HUD overlay - below VS Code window */}
          <div className="absolute top-[420px] left-1/2 -translate-x-1/2 inline-flex items-center gap-3 bg-[#14142B] rounded-full px-4 py-3 shadow-2xl border border-white/[0.06] z-10">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#5B6CF7]/15">
              <Mic className="w-5 h-5 text-[#5B6CF7]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#5B6CF7] border-2 border-[#14142B]" />
            </div>
            <div className="flex items-center gap-1 px-3">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 bg-gradient-to-t from-[#5B6CF7] to-[#8B5CF6] rounded-full" style={{ height: `${8 + Math.sin(i * 0.6) * 7}px` }} />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">Listening...</span>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EF4444]/10">
              <X className="w-5 h-5 text-[#EF4444]" />
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom info */}
    <div className="flex justify-center gap-6 pt-4">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Works in every app</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Global Fn hotkey</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Accessibility optional</span>
      </div>
    </div>
  </div>
);
// Transcription data for Workspace screenshot
const transcriptions = [
  {
    id: 1,
    time: "10:01",
    duration: "0:11",
    text: "We need to update the API documentation before the release next week",
    wpm: 143,
    words: 28,
    lang: "English",
    date: "today",
  },
  {
    id: 2,
    time: "09:45",
    duration: "0:08",
    text: "Can you schedule a meeting with the design team for tomorrow afternoon",
    wpm: 156,
    words: 14,
    lang: "English",
    date: "today",
  },
  {
    id: 3,
    time: "09:32",
    duration: "0:15",
    text: "The new authentication flow should handle both OAuth and SAML providers seamlessly",
    wpm: 134,
    words: 42,
    lang: "English",
    date: "today",
  },
  {
    id: 4,
    time: "09:18",
    duration: "0:06",
    text: "Remind me to review the pull request for the checkout module",
    wpm: 148,
    words: 12,
    lang: "English",
    date: "today",
  },
  {
    id: 5,
    time: "16:42",
    duration: "0:09",
    text: "Let's refactor the database queries to improve performance on the dashboard",
    wpm: 139,
    words: 18,
    lang: "English",
    date: "yesterday",
  },
  {
    id: 6,
    time: "15:37",
    duration: "0:12",
    text: "The onboarding flow needs better error handling for edge cases when users skip steps",
    wpm: 141,
    words: 32,
    lang: "English",
    date: "yesterday",
  },
];

// Screenshot 12: Workspace
const Screenshot12 = () => (
  <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex">
      {/* Left content */}
      <div className="w-[340px] shrink-0 flex flex-col justify-center pr-10">
        <h1 className="text-5xl font-bold text-white leading-tight mb-2">
          Your <span className="text-[#5B6CF7]">Workspace</span>
        </h1>
        <p className="text-xl text-white/50 mb-8">
          Browse, search, and replay all your past transcriptions.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#5B6CF7]/15">
              <FileText className="w-5 h-5 text-[#5B6CF7]" />
            </div>
            <div>
              <div className="text-white font-semibold">Full History</div>
              <div className="text-white/[0.35] text-sm">Every transcription saved and searchable</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#22C55E]/15">
              <Play className="w-5 h-5 text-[#22C55E]" />
            </div>
            <div>
              <div className="text-white font-semibold">Audio Playback</div>
              <div className="text-white/[0.35] text-sm">Replay recordings alongside text</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#F97316]/15">
              <Search className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <div className="text-white font-semibold">Instant Search</div>
              <div className="text-white/[0.35] text-sm">Find any transcription with ⌘K</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#8B5CF6]/15">
              <Zap className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <div className="text-white font-semibold">WPM Analytics</div>
              <div className="text-white/[0.35] text-sm">Track speaking speed over time</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <span className="bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 text-[#5B6CF7] px-4 py-2 rounded-full text-sm">
            On-device storage
          </span>
          <span className="bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] px-4 py-2 rounded-full text-sm">
            100% private
          </span>
        </div>
      </div>

      {/* Right content - Workspace window mockup */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden w-full shadow-2xl">
          {/* Window title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1C1C3A] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-white/50 text-sm ml-2">Whisperer — Workspace</span>
          </div>

          {/* Window content - Three column workspace */}
          <div className="flex" style={{ height: 480 }}>

            {/* Sidebar */}
            <div className="w-[180px] bg-[#0C0C1A] border-r border-white/[0.06] flex flex-col p-4 shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-lg bg-[#14142B] border border-white/[0.08] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="waveGrad12" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#5B6CF7" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="9" width="2" height="6" rx="1" fill="url(#waveGrad12)" />
                    <rect x="6" y="6" width="2" height="12" rx="1" fill="url(#waveGrad12)" />
                    <rect x="10" y="3" width="2" height="18" rx="1" fill="url(#waveGrad12)" />
                    <rect x="14" y="6" width="2" height="12" rx="1" fill="url(#waveGrad12)" />
                    <rect x="18" y="9" width="2" height="6" rx="1" fill="url(#waveGrad12)" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-xs">Whisperer</div>
                  <div className="text-white/[0.35] text-[10px]">Workspace</div>
                </div>
              </div>

              <div className="space-y-0.5 mb-auto">
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#5B6CF7]/10 text-[#5B6CF7]">
                  <Mic className="w-[14px] h-[14px]" />
                  <span className="text-xs font-medium">Transcriptions</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-white/50">
                  <BookOpen className="w-[14px] h-[14px] text-[#EF4444]" />
                  <span className="text-xs">Dictionary</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-white/50">
                  <Settings className="w-[14px] h-[14px] text-[#F97316]" />
                  <span className="text-xs">Settings</span>
                </div>
              </div>

              <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium">Recordings</div>
                    <div className="text-white font-semibold text-sm">417</div>
                  </div>
                  <div>
                    <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium">Words</div>
                    <div className="text-white font-semibold text-sm">7.2K</div>
                  </div>
                  <div>
                    <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium">Avg WPM</div>
                    <div className="text-white font-semibold text-sm">134</div>
                  </div>
                  <div>
                    <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium">Days</div>
                    <div className="text-white font-semibold text-sm">18</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Transcription List */}
            <div className="flex-1 border-r border-white/[0.06] flex flex-col min-w-0">
              <div className="p-4 pb-3">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-xs">Alexander</div>
                    <div className="text-white/[0.35] text-[10px]">Welcome back</div>
                  </div>
                </div>

                <div className="relative mb-3">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/[0.35]" />
                  <div className="w-full bg-[#14142B] border border-white/[0.06] rounded-lg pl-8 pr-12 py-2 text-xs text-white/[0.2]">
                    Search transcriptions...
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                    <kbd className="bg-[#1C1C3A] border border-white/[0.08] text-white/[0.35] px-1 py-0.5 rounded text-[8px] font-mono">⌘</kbd>
                    <kbd className="bg-[#1C1C3A] border border-white/[0.08] text-white/[0.35] px-1 py-0.5 rounded text-[8px] font-mono">K</kbd>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="bg-[#5B6CF7] text-white text-[10px] font-medium px-3 py-1 rounded-full">All</span>
                  <span className="text-white/[0.35] text-[10px] px-3 py-1 rounded-full border border-white/[0.06] flex items-center gap-1">
                    <Pin className="w-2.5 h-2.5 text-[#F97316]" /> Pinned
                  </span>
                  <span className="text-white/[0.35] text-[10px] px-3 py-1 rounded-full border border-white/[0.06] flex items-center gap-1">
                    <Flag className="w-2.5 h-2.5 text-[#EF4444]" /> Flagged
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-hidden px-4">
                <div className="text-white/[0.2] text-[8px] uppercase tracking-wider font-medium mb-2">Tuesday, February 24</div>
                <div className="space-y-1.5 mb-4">
                  {transcriptions.filter(t => t.date === "today").slice(0, 3).map((t) => (
                    <div
                      key={t.id}
                      className={`rounded-lg p-2.5 ${
                        t.id === 1
                          ? "bg-[#5B6CF7]/10 border border-[#5B6CF7]/20"
                          : "bg-[#14142B] border border-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className="shrink-0 pt-0.5">
                          <div className={`text-xs font-medium ${t.id === 1 ? "text-[#5B6CF7]" : "text-white/50"}`}>{t.time}</div>
                          <div className="text-white/[0.2] text-[8px]">{t.duration}</div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white/80 text-[11px] leading-relaxed line-clamp-2">{t.text}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#F97316]/10 text-[#F97316] font-medium">{t.wpm} wpm</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#5B6CF7]/10 text-[#5B6CF7] font-medium">{t.words} words</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#EF4444]/10 text-[#EF4444] font-medium">{t.lang}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-white/[0.2] text-[8px] uppercase tracking-wider font-medium mb-2">Monday, February 23</div>
                <div className="space-y-1.5">
                  {transcriptions.filter(t => t.date === "yesterday").map((t) => (
                    <div key={t.id} className="bg-[#14142B] border border-white/[0.04] rounded-lg p-2.5">
                      <div className="flex items-start gap-2">
                        <div className="shrink-0 pt-0.5">
                          <div className="text-xs font-medium text-white/50">{t.time}</div>
                          <div className="text-white/[0.2] text-[8px]">{t.duration}</div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white/80 text-[11px] leading-relaxed line-clamp-2">{t.text}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#F97316]/10 text-[#F97316] font-medium">{t.wpm} wpm</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#5B6CF7]/10 text-[#5B6CF7] font-medium">{t.words} words</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#EF4444]/10 text-[#EF4444] font-medium">{t.lang}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Detail View */}
            <div className="w-[260px] shrink-0 flex flex-col p-4 overflow-hidden">
              <div className="mb-4">
                <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium mb-0.5">Today</div>
                <div className="text-white font-semibold text-sm">Feb 24 at 10:01 AM</div>
              </div>

              <div className="mb-4">
                <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium mb-2">Audio Recording</div>
                <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-[#5B6CF7] flex items-center justify-center shrink-0">
                      <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
                    </button>
                    <div className="flex-1 flex items-center gap-[1.5px] h-6">
                      {[...Array(30)].map((_, i) => {
                        const h = 0.2 + Math.sin(i * 0.4) * 0.3 + Math.cos(i * 0.7) * 0.2 + (i < 15 ? i / 30 : (30 - i) / 30) * 0.5;
                        return (
                          <div
                            key={i}
                            className={`w-[2px] rounded-full ${i < 10 ? "bg-[#5B6CF7]" : "bg-gray-600"}`}
                            style={{ height: `${Math.max(15, h * 100)}%` }}
                          />
                        );
                      })}
                    </div>
                    <span className="text-white/[0.35] text-[10px] shrink-0 font-mono">0:11</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium">Transcription</div>
                  <button className="text-[#5B6CF7] text-[10px] font-medium">Edit</button>
                </div>
                <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-3">
                  <p className="text-white/80 text-[11px] leading-relaxed">
                    We need to update the API documentation before the release next week
                  </p>
                </div>
              </div>

              <div>
                <div className="text-white/[0.35] text-[8px] uppercase tracking-wider font-medium mb-2">Details</div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="w-3 h-3 text-[#5B6CF7]" />
                      <span className="text-white/[0.35] text-[7px] uppercase tracking-wider font-medium">Duration</span>
                    </div>
                    <div className="text-white font-semibold text-xs">0:11</div>
                  </div>
                  <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Type className="w-3 h-3 text-[#5B6CF7]" />
                      <span className="text-white/[0.35] text-[7px] uppercase tracking-wider font-medium">Words</span>
                    </div>
                    <div className="text-white font-semibold text-xs">28</div>
                  </div>
                  <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="w-3 h-3 text-[#F97316]" />
                      <span className="text-white/[0.35] text-[7px] uppercase tracking-wider font-medium">WPM</span>
                    </div>
                    <div className="text-white font-semibold text-xs">143</div>
                  </div>
                  <div className="bg-[#14142B] border border-white/[0.06] rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Globe className="w-3 h-3 text-[#EF4444]" />
                      <span className="text-white/[0.35] text-[7px] uppercase tracking-wider font-medium">Language</span>
                    </div>
                    <div className="text-white font-semibold text-xs">English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom features */}
    <div className="flex gap-8 pt-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">On-device storage</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Pin & flag transcriptions</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white/50 text-sm">Replay audio recordings</span>
      </div>
    </div>
  </div>
);

// Screenshot 13: Fn Key Press — Full Workflow
const Screenshot13 = () => {
  const waveformBars = [...Array(24)].map((_, i) => {
    const center = 12;
    const dist = Math.abs(i - center) / center;
    const h = 0.2 + (1 - dist) * 0.8 + Math.sin(i * 0.5) * 0.15;
    return Math.max(0.15, Math.min(1, h));
  });

  return (
    <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col overflow-hidden">
      <WhispererLogo />

      <div className="text-center mt-8 mb-6">
        <h1 className="text-5xl font-bold text-white">
          Just press <span className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] bg-clip-text text-transparent">Fn</span>
        </h1>
        <p className="text-white/50 text-lg mt-4">Hold the key. Speak. Release. Your words appear instantly.</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative min-h-0">

        {/* Whisperer HUD — Speech bubble + Control bar */}
        <div className="relative mb-8 z-10 flex flex-col items-center">
          {/* Glow behind HUD */}
          <div className="absolute -inset-8 bg-[#5B6CF7]/8 rounded-3xl blur-3xl" />

          {/* Speech bubble — Live Transcription */}
          <div className="relative mb-6">
            {/* Bubble body */}
            <div
              className="relative rounded-2xl px-5 pt-4 pb-4 shadow-2xl shadow-black/40 w-[420px]"
              style={{
                background: '#131325',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {/* Header row */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5B6CF7] shrink-0" />
                <span className="text-[#5B6CF7] text-[11px] font-bold uppercase tracking-[0.18em]">Live Transcription</span>
              </div>
              {/* Gradient divider — full-width bleed */}
              <div className="h-[2px] -mx-5 bg-gradient-to-r from-[#5B6CF7] via-[#7C5CF7] to-[#8B5CF6] mb-4" />
              {/* Transcription text */}
              <p className="text-white/70 text-[15px] leading-relaxed">
                <br /><br />
              </p>
            </div>
            {/* Pointer / caret — CSS triangle for crisp rendering */}
            <div
              className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '12px solid #131325',
              }}
            />
            {/* Pointer border (sits behind, 1px larger) */}
            <div
              className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-0 h-0 -z-10"
              style={{
                borderLeft: '13px solid transparent',
                borderRight: '13px solid transparent',
                borderTop: '13px solid rgba(255,255,255,0.06)',
              }}
            />
          </div>

          {/* Control bar — pill shaped */}
          <div
            className="relative rounded-full px-4 py-2.5 flex items-center gap-3.5 shadow-2xl shadow-black/40"
            style={{
              background: '#111122',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            {/* Primary mic icon in circle with indicator dot */}
            <div className="relative">
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#1E1E3A', border: '1.5px solid rgba(91,108,247,0.25)' }}>
                <Mic className="w-[22px] h-[22px] text-[#5B6CF7]" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#5B6CF7] border-[2.5px] border-[#111122]" />
            </div>

            {/* Active app icon (VS Code) — small */}
            <div className="w-6 h-6 rounded flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.5 0L7.5 9.5 3.5 6.5 1 8l6.5 5L1 18l2.5 1.5 4-3 10 9.5 5.5-2.5V2.5L17.5 0zM17.5 17.5l-7-5.5 7-5.5v11z" fill="#007ACC"/>
              </svg>
            </div>

            {/* Waveform */}
            <div className="flex items-center gap-[2px] h-8 mx-1">
              {waveformBars.map((h, i) => (
                <div
                  key={i}
                  className="w-[2.5px] rounded-full"
                  style={{
                    height: `${h * 100}%`,
                    background: `linear-gradient(to top, #5B6CF7, #8B5CF6)`,
                    opacity: 0.7 + h * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Secondary mic button */}
            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#5B6CF7/10', border: '1.5px solid rgba(91,108,247,0.2)' }}>
              <Mic className="w-[18px] h-[18px] text-[#5B6CF7]" />
            </div>

            {/* Close button */}
            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)', border: '1.5px solid rgba(239,68,68,0.18)' }}>
              <X className="w-[18px] h-[18px] text-[#EF4444]" />
            </div>
          </div>
        </div>

        {/* Connection line from HUD to keyboard */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-[2px] h-8 bg-gradient-to-b from-[#5B6CF7]/50 to-[#5B6CF7]/5 rounded-full" />
        </div>

        {/* Mac Keyboard — bottom rows */}
        <div className="relative">
          {/* Subtle keyboard glow */}
          <div className="absolute -inset-8 bg-[#5B6CF7]/[0.03] rounded-3xl blur-xl" />

          <div className="relative flex flex-col gap-1.5">
            {/* Row 1: Z row */}
            <div className="flex gap-1.5 justify-center">
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[72px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs font-medium">⇧ Shift</span>
              </div>
              {['Z','X','C','V','B','N','M'].map(k => (
                <div key={k} className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                  <span className="text-white/40 text-sm font-medium">{k}</span>
                </div>
              ))}
              {[',', '.', '/'].map(k => (
                <div key={k} className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                  <span className="text-white/30 text-sm">{k}</span>
                </div>
              ))}
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[72px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs font-medium">⇧ Shift</span>
              </div>
            </div>

            {/* Row 2: Bottom modifier row */}
            <div className="flex gap-1.5 justify-center items-end">
              {/* Fn key — ACTIVE / PRESSED */}
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#5B6CF7]/40 to-[#8B5CF6]/40 rounded-2xl blur-lg" />
                <div className="absolute -inset-1 bg-gradient-to-br from-[#5B6CF7]/20 to-[#8B5CF6]/20 rounded-xl" />
                <div className="relative bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] border border-[#5B6CF7]/50 rounded-lg w-[46px] h-[42px] flex items-center justify-center shadow-lg shadow-[#5B6CF7]/40 translate-y-[2px]">
                  <span className="text-white text-sm font-bold">fn</span>
                </div>
              </div>

              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌃</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌥</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[58px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌘</span>
              </div>
              {/* Space bar */}
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[260px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[58px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌘</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌥</span>
              </div>
              {/* Arrow keys cluster */}
              <div className="flex flex-col gap-0.5 items-center">
                <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-md w-[36px] h-[22px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 1px 2px rgba(0,0,0,0.2)' }}>
                  <span className="text-white/20 text-[10px]">▲</span>
                </div>
                <div className="flex gap-0.5">
                  {['◀','▼','▶'].map(arrow => (
                    <div key={arrow} className="bg-[#1C1C3A] border border-white/[0.06] rounded-md w-[36px] h-[22px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 1px 2px rgba(0,0,0,0.2)' }}>
                      <span className="text-white/20 text-[10px]">{arrow}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info badges */}
      <div className="flex justify-center gap-6 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">Works system-wide</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">Customizable shortcut</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">Hold to record, release to insert</span>
        </div>
      </div>
    </div>
  );
};

// Screenshot 14: Hands-Free Mode (Fn+L) — same layout as Screenshot13, different HUD
const Screenshot14 = () => {
  const waveformBars = [...Array(24)].map((_, i) => {
    const center = 12;
    const dist = Math.abs(i - center) / center;
    const h = 0.2 + (1 - dist) * 0.8 + Math.sin(i * 0.5) * 0.15;
    return Math.max(0.15, Math.min(1, h));
  });

  return (
    <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col overflow-hidden">
      <WhispererLogo />

      <div className="text-center mt-8 mb-6">
        <h1 className="text-5xl font-bold text-white">
          Hands-Free with <span className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] bg-clip-text text-transparent">Fn+L</span>
        </h1>
        <p className="text-white/50 text-lg mt-4">Toggle continuous dictation. No need to hold any key.</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative min-h-0">

        {/* Whisperer HUD — Speech bubble + Control bar (same structure as Screenshot13) */}
        <div className="relative mb-8 z-10 flex flex-col items-center">
          {/* Glow behind HUD */}
          <div className="absolute -inset-8 bg-[#5B6CF7]/8 rounded-3xl blur-3xl" />

          {/* Speech bubble — Live Transcription + Hands-Free badge */}
          <div className="relative mb-6">
            <div
              className="relative rounded-2xl px-5 pt-4 pb-4 shadow-2xl shadow-black/40 w-[420px]"
              style={{
                background: '#131325',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {/* Header row with Hands-Free badge */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5B6CF7] shrink-0" />
                  <span className="text-[#5B6CF7] text-[11px] font-bold uppercase tracking-[0.18em]">Live Transcription</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#5B6CF7]/10 border border-[#5B6CF7]/20 rounded-full px-2.5 py-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B6CF7]" />
                  <span className="text-[#5B6CF7] text-[10px] font-bold uppercase tracking-[0.1em]">Hands-Free</span>
                </div>
              </div>
              {/* Gradient divider — full-width bleed */}
              <div className="h-[2px] -mx-5 bg-gradient-to-r from-[#5B6CF7] via-[#7C5CF7] to-[#8B5CF6] mb-4" />
              {/* Transcription text with cursor */}
              <p className="text-white/70 text-[15px] leading-relaxed">
                Hey team, let&#39;s sync on the API redesign tomorrow morning and finalize the migration plan<span className="inline-block w-[2px] h-[17px] bg-[#5B6CF7] ml-0.5 align-middle" />
              </p>
            </div>
            {/* Pointer */}
            <div
              className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '12px solid #131325',
              }}
            />
            <div
              className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-0 h-0 -z-10"
              style={{
                borderLeft: '13px solid transparent',
                borderRight: '13px solid transparent',
                borderTop: '13px solid rgba(255,255,255,0.06)',
              }}
            />
          </div>

          {/* Control bar — Hands-Free mode (slightly narrower than bubble, centered) */}
          <div
            className="relative rounded-full px-4 py-2.5 flex items-center justify-center gap-3.5 shadow-2xl shadow-black/40 w-[380px]"
            style={{
              background: '#111122',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            {/* Mic icon with ring */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full border-2 border-[#5B6CF7]/30" />
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#1E1E3A', border: '1.5px solid rgba(91,108,247,0.25)' }}>
                <Mic className="w-[22px] h-[22px] text-[#5B6CF7]" />
              </div>
            </div>

            {/* Hands-Free Mode label + Fn hint */}
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">Hands-Free Mode</span>
              <div className="flex items-center gap-1.5">
                <span className="text-white/40 text-xs">Press</span>
                <span className="bg-white/10 border border-white/[0.08] rounded px-1.5 py-0.5 text-white/60 text-[10px] font-semibold">Fn</span>
                <span className="text-white/40 text-xs">to stop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connection line from HUD to keyboard */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-[2px] h-8 bg-gradient-to-b from-[#5B6CF7]/50 to-[#5B6CF7]/5 rounded-full" />
        </div>

        {/* Mac Keyboard — same as Screenshot13 */}
        <div className="relative">
          <div className="absolute -inset-8 bg-[#5B6CF7]/[0.03] rounded-3xl blur-xl" />

          <div className="relative flex flex-col gap-1.5">
            {/* Row 1: Z row */}
            <div className="flex gap-1.5 justify-center">
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[72px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs font-medium">⇧ Shift</span>
              </div>
              {['Z','X','C','V','B','N','M'].map(k => (
                <div key={k} className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                  <span className="text-white/40 text-sm font-medium">{k}</span>
                </div>
              ))}
              {[',', '.', '/'].map(k => (
                <div key={k} className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                  <span className="text-white/30 text-sm">{k}</span>
                </div>
              ))}
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[72px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs font-medium">⇧ Shift</span>
              </div>
            </div>

            {/* Row 2: Bottom modifier row */}
            <div className="flex gap-1.5 justify-center items-end">
              {/* Fn key — ACTIVE / PRESSED */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#5B6CF7]/40 to-[#8B5CF6]/40 rounded-2xl blur-lg" />
                <div className="absolute -inset-1 bg-gradient-to-br from-[#5B6CF7]/20 to-[#8B5CF6]/20 rounded-xl" />
                <div className="relative bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] border border-[#5B6CF7]/50 rounded-lg w-[46px] h-[42px] flex items-center justify-center shadow-lg shadow-[#5B6CF7]/40 translate-y-[2px]">
                  <span className="text-white text-sm font-bold">fn</span>
                </div>
              </div>

              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌃</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌥</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[58px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌘</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[260px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[58px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌘</span>
              </div>
              <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-lg w-[46px] h-[46px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.2)' }}>
                <span className="text-white/30 text-xs">⌥</span>
              </div>
              {/* Arrow keys cluster */}
              <div className="flex flex-col gap-0.5 items-center">
                <div className="bg-[#1C1C3A] border border-white/[0.06] rounded-md w-[36px] h-[22px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 1px 2px rgba(0,0,0,0.2)' }}>
                  <span className="text-white/20 text-[10px]">▲</span>
                </div>
                <div className="flex gap-0.5">
                  {['◀','▼','▶'].map(arrow => (
                    <div key={arrow} className="bg-[#1C1C3A] border border-white/[0.06] rounded-md w-[36px] h-[22px] flex items-center justify-center" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 1px 2px rgba(0,0,0,0.2)' }}>
                      <span className="text-white/20 text-[10px]">{arrow}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info badges */}
      <div className="flex justify-center gap-6 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">No key holding required</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">Continuous dictation</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/50 text-sm">Press Fn to stop</span>
        </div>
      </div>
    </div>
  );
};

// Screenshot 15: Text Insertion into VS Code — HUD at bottom, text inserted in editor
const Screenshot15 = () => {
  const waveformBars = [...Array(24)].map((_, i) => {
    const center = 12;
    const dist = Math.abs(i - center) / center;
    const h = 0.2 + (1 - dist) * 0.8 + Math.sin(i * 0.5) * 0.15;
    return Math.max(0.15, Math.min(1, h));
  });

  return (
    <div className="w-full h-full bg-[#0C0C1A] p-16 flex flex-col overflow-hidden">
      <WhispererLogo />

      <div className="text-center mt-4 mb-6">
        <h1 className="text-5xl font-bold text-white">
          Release Fn. <span className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] bg-clip-text text-transparent">Text inserted.</span>
        </h1>
        <p className="text-white/50 text-lg mt-3">Your words appear exactly where your cursor is.</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        {/* VS Code Window */}
        <div className="w-full max-w-[860px] rounded-xl overflow-hidden shadow-2xl" style={{ background: '#1E1E2E', border: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#181828', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[hsl(0,62%,50%)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(45,93%,47%)]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M17.5 0L7.5 9.5 3.5 6.5 1 8l6.5 5L1 18l2.5 1.5 4-3 10 9.5 5.5-2.5V2.5L17.5 0zM17.5 17.5l-7-5.5 7-5.5v11z" fill="#007ACC"/>
              </svg>
              <span className="text-white/60">app.py — MyProject</span>
            </div>
            <div className="w-16" />
          </div>

          {/* Tab bar */}
          <div className="flex" style={{ background: '#141424', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="flex items-center px-4 py-1.5 text-white/40 text-xs" style={{ borderRight: '1px solid rgba(255,255,255,0.04)' }}>app.py</div>
            <div className="flex items-center gap-1.5 px-4 py-1.5 text-white/80 text-xs" style={{ background: '#1E1E2E', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4845A" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>Claude Code</span>
              <span className="text-white/30 ml-1">×</span>
            </div>
            <div className="flex items-center px-4 py-1.5 text-white/40 text-xs">utils.py</div>
          </div>

          {/* Claude Code content */}
          <div className="flex">
            {/* Activity bar */}
            <div className="w-[44px] flex flex-col items-center py-3 gap-4" style={{ background: '#141424', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4845A" strokeOpacity="0.8" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col" style={{ minHeight: '340px' }}>
              {/* Center content - compact */}
              <div className="flex-1 flex flex-col items-center justify-center px-8">
                <div className="mb-3">
                  <svg width="36" height="30" viewBox="0 0 48 40" fill="none">
                    <rect x="8" y="8" width="32" height="24" rx="4" fill="#D4845A" />
                    <rect x="4" y="4" width="8" height="12" rx="2" fill="#D4845A" />
                    <rect x="36" y="4" width="8" height="12" rx="2" fill="#D4845A" />
                    <rect x="16" y="16" width="4" height="4" rx="1" fill="#1E1E2E" />
                    <rect x="28" y="16" width="4" height="4" rx="1" fill="#1E1E2E" />
                    <rect x="4" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                    <rect x="16" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                    <rect x="28" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                    <rect x="36" y="32" width="8" height="6" rx="2" fill="#D4845A" />
                  </svg>
                </div>
                <p className="text-white/30 text-xs text-center leading-relaxed max-w-[280px]">
                  Tired of repeating yourself? Tell Claude to remember what you&#39;ve told it using CLAUDE.md.
                </p>
              </div>

              {/* Bottom hint */}
              <div className="flex items-center justify-center gap-2 py-2 text-white/30 text-xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                <span>Prefer the Terminal experience?</span>
                <span className="text-white/50">Switch back in Settings.</span>
                <span className="text-white/20">×</span>
              </div>

              {/* Input box — matching Claude Code exactly */}
              <div className="mx-5 mb-4 rounded-2xl" style={{ border: '2px solid rgba(212,132,90,0.5)', background: 'rgba(255,255,255,0.02)' }}>
                {/* Text input area — dictated text here */}
                <div className="px-5 py-4">
                  <span className="text-white/90 text-[15px] leading-relaxed">Hey team, let's sync on the API redesign tomorrow morning and finalize the migration plan</span>
                  <span className="inline-block w-[2px] h-[16px] bg-white ml-0.5 align-middle" />
                </div>
                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-2.5">
                  <div className="flex items-center gap-3 text-white/30">
                    <span className="text-xl leading-none">+</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8"/></svg>
                    <span className="text-white/10 text-lg">|</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                    <span className="text-white/40 text-xs">extension-output-etmoffat.pip-pack...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                      <span>Bypass permissions</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,132,90,0.7)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1" style={{ background: '#007ACC' }}>
            <div className="flex items-center gap-3 text-white/90 text-[11px]"><span>main</span></div>
            <div className="flex items-center gap-3 text-white/90 text-[11px]"><span>Claude Code</span></div>
          </div>
        </div>

        {/* Whisperer HUD at the bottom — fading out */}
        <div className="mt-6 flex flex-col items-center" style={{ opacity: 0.35 }}>
          {/* Control bar */}
          <div
            className="relative rounded-full px-4 py-2.5 flex items-center gap-3.5 shadow-2xl shadow-black/40"
            style={{ background: '#111122', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#1E1E3A', border: '1.5px solid rgba(91,108,247,0.25)' }}>
                <Mic className="w-[22px] h-[22px] text-[#5B6CF7]" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-[2.5px] border-[#111122]" />
            </div>

            <div className="w-6 h-6 rounded flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.5 0L7.5 9.5 3.5 6.5 1 8l6.5 5L1 18l2.5 1.5 4-3 10 9.5 5.5-2.5V2.5L17.5 0zM17.5 17.5l-7-5.5 7-5.5v11z" fill="#007ACC"/>
              </svg>
            </div>

            <div className="flex items-center gap-[2px] h-8 mx-1">
              {waveformBars.map((h, i) => (
                <div
                  key={i}
                  className="w-[2.5px] rounded-full"
                  style={{ height: `${h * 100}%`, background: 'linear-gradient(to top, #5B6CF7, #8B5CF6)', opacity: 0.7 + h * 0.3 }}
                />
              ))}
            </div>

            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(91,108,247,0.08)', border: '1.5px solid rgba(91,108,247,0.2)' }}>
              <Mic className="w-[18px] h-[18px] text-[#5B6CF7]" />
            </div>

            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)', border: '1.5px solid rgba(239,68,68,0.18)' }}>
              <X className="w-[18px] h-[18px] text-[#EF4444]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const screenshots = [
  { id: 1, component: Screenshot1, title: "Hero: Hold Fn. Speak. Release." },
  { id: 2, component: Screenshot2, title: "Live Preview" },
  { id: 3, component: Screenshot3, title: "Code Mode (Pro)" },
  { id: 4, component: Screenshot4, title: "Per-App Profiles (Pro)" },
  { id: 5, component: Screenshot5, title: "How It Works" },
  { id: 6, component: Screenshot6, title: "Works in Your Apps" },
  { id: 7, component: Screenshot7, title: "One-time Setup" },
  { id: 8, component: Screenshot8, title: "Choose Speed or Accuracy" },
  { id: 9, component: Screenshot9, title: "Pro Pack (Lifetime)" },
  { id: 10, component: Screenshot10, title: "Personal Dictionary (Pro)" },
  { id: 11, component: Screenshot11, title: "System-Wide Dictation (Optional)" },
  { id: 12, component: Screenshot12, title: "Workspace — Transcriptions" },
  { id: 13, component: Screenshot13, title: "Fn Key — Instant Activation" },
  { id: 14, component: Screenshot14, title: "Hands-Free Mode (Fn+L)" },
  { id: 15, component: Screenshot15, title: "Text Insertion — VS Code" },
];

export default function ScreenshotsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const CurrentScreenshot = screenshots[currentIndex].component;

  const handleDownload = useCallback(async () => {
    const el = screenshotRef.current;
    if (!el || exporting) return;
    setExporting(true);

    try {
      const rect = el.getBoundingClientRect();
      const scale = 2560 / rect.width;

      const dataUrl = await toPng(el, {
        pixelRatio: scale,
        backgroundColor: "#0C0C1A",
      });
      const link = document.createElement("a");
      link.download = `whisperer-screenshot-${currentIndex + 1}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  }, [currentIndex, exporting]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Mac App Store Screenshots</h1>
        <p className="text-white/50 mb-8">2560×1600 (16:10 aspect ratio). Click &quot;Download as PNG&quot; to export.</p>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.08] rounded-lg text-white disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>

          <div className="flex items-center gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-[#5B6CF7]' : 'bg-gray-600'}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(Math.min(screenshots.length - 1, currentIndex + 1))}
            disabled={currentIndex === screenshots.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.08] rounded-lg text-white disabled:opacity-50"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <span className="text-[#5B6CF7] font-semibold">Screenshot {currentIndex + 1} of {screenshots.length}</span>
          <h2 className="text-xl text-white font-medium">{screenshots[currentIndex].title}</h2>
        </div>

        {/* Download button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={handleDownload}
            disabled={exporting}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#5B6CF7] hover:bg-[#4A5BD6] disabled:opacity-50 rounded-lg text-white font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            {exporting ? "Exporting 2560×1600..." : "Download as PNG (2560×1600)"}
          </button>
        </div>

        {/* Screenshot */}
        <div ref={screenshotRef} className="overflow-hidden shadow-2xl border border-white/[0.06]" style={{ aspectRatio: '16/10' }}>
          <CurrentScreenshot />
        </div>

        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-5 gap-4">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-lg overflow-hidden border-2 ${i === currentIndex ? 'border-[#5B6CF7]' : 'border-white/[0.06]'}`}
              style={{ aspectRatio: '16/10' }}
            >
              <div className="w-full h-full bg-[#0C0C1A] flex items-center justify-center">
                <span className="text-white/50 text-xs">{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
