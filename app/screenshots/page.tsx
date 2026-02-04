"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Keyboard, ClipboardCheck, Zap, ToggleRight, Mic, X, Hand, Eye } from "lucide-react";

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
    <div className="w-10 h-10 rounded-xl bg-[#1fcc5e]/20 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="10" width="2" height="4" rx="1" fill="#1fcc5e" />
        <rect x="6" y="8" width="2" height="8" rx="1" fill="#1fcc5e" />
        <rect x="9" y="6" width="2" height="12" rx="1" fill="#1fcc5e" />
        <rect x="12" y="4" width="2" height="16" rx="1" fill="#1fcc5e" />
        <rect x="15" y="6" width="2" height="12" rx="1" fill="#1fcc5e" />
        <rect x="18" y="8" width="2" height="8" rx="1" fill="#1fcc5e" />
        <rect x="21" y="10" width="2" height="4" rx="1" fill="#1fcc5e" />
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
          className="w-[4px] bg-[#1fcc5e] rounded-full"
          style={{ height: `${h * 100}%` }}
        />
      );
    })}
  </div>
);

// Feature Badge Component (matches ValueProps style)
const FeatureBadge = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="bg-[#111115] border border-gray-800 rounded-xl p-5">
    <div className="w-10 h-10 rounded-lg bg-[#1fcc5e]/10 flex items-center justify-center mb-4">
      <div className="text-[#1fcc5e]">{icon}</div>
    </div>
    <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
  </div>
);

// PRO Badge
const ProBadge = () => (
  <span className="bg-[#1fcc5e] text-black text-xs font-bold px-2 py-1 rounded ml-2">PRO</span>
);

// Screenshot 1: Hero
const Screenshot1 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center pr-16">
        <h1 className="text-6xl font-bold text-white leading-tight mb-2">
          Hold Fn. Speak. Release.
        </h1>
        <p className="text-2xl text-gray-400 mb-8">
          Text appears where you're typing. 100% offline.
        </p>

        <div className="flex gap-3 mb-12">
          <button className="bg-[#1fcc5e] text-black font-semibold px-8 py-4 rounded-full text-lg">
            Download on App Store
          </button>
        </div>

        <div className="flex gap-3 flex-wrap">
          <span className="bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 text-[#1fcc5e] px-4 py-2 rounded-full text-sm">
            Offline on-device transcription
          </span>
          <span className="bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 text-[#1fcc5e] px-4 py-2 rounded-full text-sm">
            Works in Slack, Gmail, VS Code
          </span>
          <span className="bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 text-[#1fcc5e] px-4 py-2 rounded-full text-sm">
            Live preview while you speak
          </span>
        </div>
      </div>

      {/* Right content - App UI mockups */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Menu bar widget */}
        <div className="absolute top-8 right-0 bg-[#1a1a1f] rounded-xl border border-gray-800 p-4 w-56 shadow-2xl">
          <div className="text-white font-semibold mb-1">Whisperer</div>
          <div className="flex items-center gap-2 text-[#1fcc5e] text-sm mb-3">
            <div className="w-2 h-2 rounded-full bg-[#1fcc5e]" />
            Ready
          </div>
          <div className="text-gray-500 text-xs mb-4">Large V3 Turbo Q5</div>

          <div className="flex gap-2 mb-4">
            <button className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg">Status</button>
            <button className="text-gray-500 text-xs px-3 py-1.5">Models</button>
            <button className="text-gray-500 text-xs px-3 py-1.5">Settings</button>
          </div>

          <div className="text-white text-sm font-medium mb-2">How to use</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1fcc5e] text-black text-xs flex items-center justify-center font-bold">1</span>
              <span className="text-gray-400 text-sm">Press Fn</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1fcc5e] text-black text-xs flex items-center justify-center font-bold">2</span>
              <span className="text-gray-400 text-sm">Speak</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1fcc5e] text-black text-xs flex items-center justify-center font-bold">3</span>
              <span className="text-gray-400 text-sm">Release</span>
            </div>
          </div>
        </div>

        {/* VS Code window */}
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-700 overflow-hidden w-[500px] shadow-2xl mt-32">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#323233] border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 text-sm ml-2">metrics.py — VS Code</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div><span className="text-gray-500">1</span>  <span className="text-purple-400">def</span> <span className="text-yellow-300">calculate_metrics</span><span className="text-white">(data):</span></div>
            <div><span className="text-gray-500">2</span>      <span className="text-gray-500"># Process input data</span></div>
            <div><span className="text-gray-500">3</span>      <span className="text-white">results = []</span></div>
            <div><span className="text-gray-500">4</span>      <span className="text-purple-400">for</span> <span className="text-white">item</span> <span className="text-purple-400">in</span> <span className="text-white">data:</span></div>
            <div><span className="text-gray-500">5</span>          <span className="text-purple-400">if</span> <span className="text-white">item.is_valid():</span></div>
            <div><span className="text-gray-500">6</span>              <span className="text-white">results.append(item)</span></div>
            <div><span className="text-gray-500">7</span>      <span className="text-purple-400">return</span> <span className="text-white">results</span></div>
          </div>

          {/* Transcription bar */}
          <div className="bg-[#1a1a1f] border-t border-gray-700 p-3 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#1fcc5e]" />
            <div className="flex items-center gap-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 bg-[#1fcc5e] rounded-full" style={{ height: `${12 + Math.sin(i) * 8}px` }} />
              ))}
            </div>
            <span className="text-gray-300">return results</span>
          </div>

          {/* Transcribed badge */}
          <div className="absolute top-[280px] right-[-20px] bg-[#1fcc5e] text-black font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Transcribed
          </div>
        </div>
      </div>
    </div>

    {/* Bottom features */}
    <div className="flex gap-8 pt-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#1fcc5e] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">On-device AI</div>
          <div className="text-gray-500 text-sm">All processing local</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#1fcc5e] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">100+ languages</div>
          <div className="text-gray-500 text-sm">Global support</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#1fcc5e] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">Apple Silicon</div>
          <div className="text-gray-500 text-sm">Metal optimized</div>
        </div>
      </div>
    </div>
  </div>
);

// Screenshot 2: Live Preview
const Screenshot2 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white text-center mb-2">
        See words <span className="text-[#1fcc5e]">as you speak</span>
      </h1>
      <p className="text-xl text-gray-400 text-center mb-16">
        Live preview while recording. Final pass for accuracy.
      </p>

      {/* Premium transcription bubble - Light theme to match HUD */}
      <div className="relative mb-8">
        {/* Glow effect behind bubble */}
        <div className="absolute inset-0 bg-[#1fcc5e]/10 rounded-3xl blur-2xl" />

        {/* Speech bubble - White/light like HUD */}
        <div className="relative bg-white rounded-2xl px-6 py-5 shadow-2xl max-w-2xl">
          {/* Live indicator */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#1fcc5e] animate-pulse" />
            <span className="text-[#1fcc5e] text-xs font-medium uppercase tracking-wider">Live Transcription</span>
          </div>

          {/* Transcription text */}
          <p className="text-lg text-gray-800 font-light leading-relaxed">
            The quarterly report shows significant growth in our enterprise segment,
            with a <span className="text-[#1fcc5e] font-semibold">47% increase</span> in recurring revenue
            <span className="inline-block w-0.5 h-5 bg-[#1fcc5e] ml-1 animate-pulse align-middle" />
          </p>

          {/* Bottom stats */}
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#1fcc5e]/10 flex items-center justify-center">
                <Mic className="w-3 h-3 text-[#1fcc5e]" />
              </div>
              <span className="text-gray-500 text-xs">Recording</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-[#1fcc5e] rounded-full"
                  style={{ height: `${6 + Math.sin(i * 0.8) * 8}px` }}
                />
              ))}
            </div>
            <span className="text-gray-400 text-xs ml-auto">0:04</span>
          </div>
        </div>

        {/* Speech bubble pointer */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg" />
      </div>

      {/* HUD Overlay - matching landing page style */}
      <div className="inline-flex items-center gap-3 bg-white rounded-full px-2 py-2 shadow-2xl">
        {/* Left mic with status indicator */}
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#1fcc5e]/10">
          <Mic className="w-6 h-6 text-[#1fcc5e]" />
          <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#1fcc5e] border-2 border-white" />
        </div>

        {/* Waveform dots */}
        <div className="flex items-center gap-1 px-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]/80"
              style={{
                opacity: 0.4 + Math.sin(i * 0.5) * 0.6,
              }}
            />
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Secondary mic button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1fcc5e]/10">
            <Mic className="w-5 h-5 text-[#1fcc5e]" />
          </button>

          {/* Cancel button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
            <X className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom features */}
    <div className="grid grid-cols-4 gap-6 mt-12">
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V6a4 4 0 118 0v2"/></svg>}
        title="On-device processing"
        subtitle="All transcription happens locally on your Mac"
      />
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
        title="No cloud uploads"
        subtitle="Your voice never leaves your device"
      />
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
        title="Works offline"
        subtitle="Airplane mode? No problem."
      />
      <FeatureBadge
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>}
        title="No account needed"
        subtitle="Download and use — no signup required"
      />
    </div>
  </div>
);

// Screenshot 3: Code Mode
const Screenshot3 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <div className="flex items-center gap-2 mb-8">
      <WhispererLogo />
      {/* Pro Pack indicator - aligned with logo */}
      <div className="ml-auto flex flex-col items-end gap-2.5">
        <div className="inline-flex items-center gap-2 bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 rounded-full px-3 py-1.5">
          <span className="bg-[#1fcc5e] text-black text-xs font-bold px-2 py-0.5 rounded">PRO</span>
          <span className="text-[#1fcc5e] text-sm font-medium">Part of Pro Pack</span>
        </div>
        <span className="text-gray-500 text-xs bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1">Available through In-App Purchase</span>
      </div>
    </div>

    <div className="mb-8">
      <h1 className="text-5xl font-bold text-white mb-2">Code Mode</h1>
      <p className="text-xl text-gray-400">Speak code naturally.</p>
    </div>

    <div className="flex items-start gap-3 text-gray-400 text-sm mb-8">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#1fcc5e]" />
        Punctuation & symbols: parentheses, brackets, quotes
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#1fcc5e]" />
        Casing commands: camelCase, snake_case, CONSTANT_CASE
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#1fcc5e]" />
        Literal mode for identifiers
      </div>
    </div>

    <div className="flex-1 flex gap-8">
      {/* Code editor */}
      <div className="flex-1 bg-[#1e1e1e] rounded-xl border border-gray-700 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#323233] border-b border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm ml-2">validator.py</span>
          <span className="ml-auto bg-[#1fcc5e] text-black text-xs font-bold px-2 py-0.5 rounded">Code Mode ON</span>
        </div>
        <div className="p-6 font-mono text-sm space-y-1">
          <div><span className="text-gray-500 mr-4">1</span><span className="text-purple-400">import</span> <span className="text-white">re</span></div>
          <div><span className="text-gray-500 mr-4">2</span><span className="text-purple-400">from</span> <span className="text-white">typing</span> <span className="text-purple-400">import</span> <span className="text-white">Dict</span></div>
          <div><span className="text-gray-500 mr-4">3</span></div>
          <div><span className="text-gray-500 mr-4">4</span><span className="text-purple-400">def</span> <span className="text-yellow-300">validate_input</span><span className="text-white">(data: Dict) -&gt; bool:</span></div>
          <div><span className="text-gray-500 mr-4">5</span>    <span className="text-green-400">"""Validate user input data."""</span></div>
          <div><span className="text-gray-500 mr-4">6</span>    <span className="text-purple-400">if not</span> <span className="text-white">data.get("email"):</span></div>
          <div><span className="text-gray-500 mr-4">7</span>        <span className="text-purple-400">return</span> <span className="text-orange-400">False</span></div>
          <div><span className="text-gray-500 mr-4">8</span></div>
          <div><span className="text-gray-500 mr-4">9</span>    <span className="text-white">pattern = r"[a-zA-Z0-9_.+-]+@"</span></div>
          <div><span className="text-gray-500 mr-4">10</span>    <span className="text-purple-400">return</span> <span className="text-white">bool(re.match(pattern, data["email"]))</span></div>
        </div>
      </div>

      {/* Voice to Code table */}
      <div className="w-80 bg-[#111115] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center gap-4 mb-6 text-sm font-semibold">
          <span className="text-gray-400">VOICE</span>
          <span className="text-gray-600">→</span>
          <span className="text-[#1fcc5e]">CODE</span>
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
              <span className="text-gray-400">{voice}</span>
              <span className="text-[#1fcc5e] font-mono">{code}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-6 flex-wrap">
          {['VS Code', 'JetBrains', 'Xcode', 'Terminal', 'Cursor'].map((app) => (
            <span key={app} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">{app}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Spoken input / Output */}
    <div className="mt-8 bg-[#111115] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center gap-4">
        <span className="text-gray-500 text-sm">You said:</span>
        <span className="text-gray-300">"def validate input open paren data colon dict close paren"</span>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-gray-500 text-sm">Output:</span>
        <span className="text-[#1fcc5e] font-mono">def validate_input(data: Dict):</span>
      </div>
    </div>
  </div>
);

// Screenshot 4: Per-App Profiles
const Screenshot4 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <div className="flex items-center gap-2 mb-8">
      <WhispererLogo />
      {/* Pro Pack indicator - aligned with logo */}
      <div className="ml-auto flex flex-col items-end gap-2.5">
        <div className="inline-flex items-center gap-2 bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 rounded-full px-3 py-1.5">
          <span className="bg-[#1fcc5e] text-black text-xs font-bold px-2 py-0.5 rounded">PRO</span>
          <span className="text-[#1fcc5e] text-sm font-medium">Part of Pro Pack</span>
        </div>
        <span className="text-gray-500 text-xs bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1">Available through In-App Purchase</span>
      </div>
    </div>

    <div className="mb-4">
      <h1 className="text-5xl font-bold text-white">Per-App Profiles.</h1>
      <h1 className="text-5xl font-bold text-[#1fcc5e]">Context-aware dictation.</h1>
    </div>

    <p className="text-gray-400 text-lg mb-2">
      Slack gets chat style. Gmail gets email format.
    </p>
    <p className="text-gray-400 text-lg mb-12">
      IDEs get code mode. Switches automatically.
    </p>

    <div className="flex-1 space-y-6">
      {/* Slack */}
      <div className="bg-[#111115] rounded-xl border-l-4 border-l-purple-500 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={slackIcon.src} alt="Slack" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-semibold">Slack</span>
          <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">Chat Style</span>
          <span className="ml-auto bg-[#1fcc5e] text-black text-xs font-semibold px-3 py-1 rounded-full">Active</span>
        </div>
        <p className="text-gray-300 text-lg mb-2">hey can you review the PR when you get a chance</p>
        <p className="text-gray-300 text-lg mb-4">thanks!</p>
        <p className="text-gray-500 text-sm">Casual, lowercase, quick responses</p>
      </div>

      {/* Gmail */}
      <div className="bg-[#111115] rounded-xl border-l-4 border-l-red-500 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={gmailIcon.src} alt="Gmail" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-semibold">Gmail</span>
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Email Style</span>
        </div>
        <p className="text-gray-300 text-lg mb-2">Hi team,</p>
        <p className="text-gray-300 text-lg mb-4">Please review the attached document for the Q3 meeting.</p>
        <p className="text-gray-500 text-sm">Professional, properly punctuated</p>
      </div>

      {/* VS Code */}
      <div className="bg-[#111115] rounded-xl border-l-4 border-l-blue-500 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={vscodeIcon.src} alt="VS Code" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xl font-semibold">VS Code</span>
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Code Style</span>
        </div>
        <p className="text-gray-300 text-lg font-mono mb-2">def validate_input(data: dict) -&gt; bool:</p>
        <p className="text-gray-300 text-lg font-mono mb-4 pl-8">return data.get('valid', False)</p>
        <p className="text-gray-500 text-sm">Symbols, casing, structure preserved</p>
      </div>
    </div>

    <p className="text-gray-500 text-center mt-8">Switches automatically based on active app</p>
  </div>
);

// Screenshot 5: How It Works
const Screenshot5 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-16 mb-16">
      <h1 className="text-5xl font-bold text-white">
        How Whisperer <span className="text-[#1fcc5e]">works</span>
      </h1>
      <p className="text-gray-400 text-lg mt-4">Three simple steps to effortless dictation.</p>
    </div>

    <div className="flex-1 flex gap-8">
      {/* Step 1 */}
      <div className="flex-1 bg-[#111115] rounded-2xl border border-gray-800 p-8">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[#1fcc5e] text-4xl font-bold">01</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1fcc5e" strokeWidth="1.5">
            <rect x="2" y="6" width="20" height="12" rx="2"/>
            <line x1="6" y1="10" x2="6" y2="14"/>
            <line x1="10" y1="10" x2="10" y2="14"/>
            <line x1="14" y1="10" x2="14" y2="14"/>
            <line x1="18" y1="10" x2="18" y2="14"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Hold your key</h3>
        <p className="text-gray-400 mb-8">Hold Fn or your chosen shortcut to start recording.</p>

        <div className="flex items-center gap-4">
          <div className="bg-gray-800 rounded-xl px-8 py-6">
            <span className="text-white text-2xl font-semibold">Fn</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-[#1fcc5e]" />
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1fcc5e]" />
      </div>

      {/* Step 2 */}
      <div className="flex-1 bg-[#111115] rounded-2xl border border-gray-800 p-8">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[#1fcc5e] text-4xl font-bold">02</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1fcc5e" strokeWidth="1.5">
            <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Speak naturally</h3>
        <p className="text-gray-400 mb-8">See a live preview and waveform while you talk.</p>

        <div className="flex items-center justify-center gap-1 h-16">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-[#1fcc5e] rounded-full"
              style={{ height: `${20 + Math.sin(i * 0.5) * 30}px` }}
            />
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1fcc5e]" />
      </div>

      {/* Step 3 */}
      <div className="flex-1 bg-[#111115] rounded-2xl border border-gray-800 p-8">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[#1fcc5e] text-4xl font-bold">03</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1fcc5e" strokeWidth="1.5">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <line x1="8" y1="9" x2="16" y2="9"/>
            <line x1="8" y1="13" x2="14" y2="13"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Release to insert</h3>
        <p className="text-gray-400 mb-8">Text is refined and inserted into the focused field.</p>

        <div className="bg-gray-800 rounded-xl p-4">
          <span className="text-white">The quarterly report shows<span className="animate-pulse">|</span></span>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <div className="inline-flex items-center gap-2 bg-[#111115] border border-gray-800 rounded-full px-6 py-3">
        <span className="text-gray-400">Streaming during recording + a final pass on release for maximum accuracy.</span>
      </div>
    </div>
  </div>
);

// Screenshot 6: Works in Your Apps
const Screenshot6 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-12 mb-4">
      <h1 className="text-5xl font-bold text-white">Works in the apps you</h1>
      <h1 className="text-5xl font-bold text-[#1fcc5e]">already use</h1>
      <p className="text-gray-400 text-lg mt-4">Insertion uses Accessibility APIs with a paste fallback for compatibility.</p>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-6 gap-6">
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
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-[#111115] border border-gray-800 flex items-center justify-center p-2">
              <img src={app.icon.src} alt={app.name} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-gray-400 text-sm">{app.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom features */}
    <div className="grid grid-cols-4 gap-6">
      <FeatureBadge
        icon={<Keyboard className="w-5 h-5" />}
        title="Universal Input"
        subtitle="Works in any text field"
      />
      <FeatureBadge
        icon={<ClipboardCheck className="w-5 h-5" />}
        title="Clipboard-Safe"
        subtitle="Preserves your clipboard"
      />
      <FeatureBadge
        icon={<Zap className="w-5 h-5" />}
        title="Smart Fallback"
        subtitle="Types when paste fails"
      />
      <FeatureBadge
        icon={<ToggleRight className="w-5 h-5" />}
        title="Auto-Switch"
        subtitle="Profiles change by app"
      />
    </div>
  </div>
);

// Screenshot 7: One-time Setup
const Screenshot7 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <WhispererLogo />

    <div className="flex-1 flex gap-16 mt-8">
      {/* Left: Steps */}
      <div className="w-96">
        <h1 className="text-5xl font-bold text-white mb-2">One-time setup</h1>
        <p className="text-gray-500 text-lg mb-4">(required by macOS)</p>
        <p className="text-gray-400 mb-8">
          Whisperer needs macOS permissions to listen for your shortcut and insert text.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-[#1fcc5e] text-black flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <div className="text-white font-semibold">Install from App Store</div>
              <div className="text-gray-500 text-sm">Download Whisperer from the Mac App Store</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-[#1fcc5e] text-black flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <div className="text-white font-semibold">Grant permissions</div>
              <div className="text-gray-500 text-sm">Allow Microphone, Accessibility, Input Monitoring</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-[#1fcc5e] text-black flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <div className="text-white font-semibold">Ready to go!</div>
              <div className="text-gray-500 text-sm">Hold Fn, speak, release. Text appears instantly.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Permission cards */}
      <div className="flex-1 flex gap-6">
        {/* Microphone */}
        <div className="flex-1 bg-[#111115] rounded-2xl border border-[#1fcc5e] p-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#1fcc5e]/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-[#1fcc5e]/20 flex items-center justify-center mb-4 border border-[#1fcc5e]/30">
              <Mic className="w-10 h-10 text-[#1fcc5e]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Microphone</h3>
          <p className="text-gray-400 text-sm mb-4">Captures your voice for transcription</p>

          <div className="mt-auto space-y-3 w-full">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]" />
              Audio stays on device
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]" />
              No cloud uploads
            </div>
          </div>

          <span className="w-8 h-8 rounded-full bg-[#1fcc5e] text-black flex items-center justify-center font-bold mt-4">1</span>
        </div>

        {/* Accessibility */}
        <div className="flex-1 bg-[#111115] rounded-2xl border border-[#1fcc5e] p-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#1fcc5e]/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-[#1fcc5e]/20 flex items-center justify-center mb-4 border border-[#1fcc5e]/30">
              <Hand className="w-10 h-10 text-[#1fcc5e]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Accessibility</h3>
          <p className="text-gray-400 text-sm mb-4">Types text into the focused field</p>

          <div className="mt-auto space-y-3 w-full">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]" />
              Direct text insertion
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]" />
              Works in any app
            </div>
          </div>

          <span className="w-8 h-8 rounded-full bg-[#1fcc5e] text-black flex items-center justify-center font-bold mt-4">2</span>
        </div>

        {/* Input Monitoring */}
        <div className="flex-1 bg-[#111115] rounded-2xl border border-[#1fcc5e] p-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#1fcc5e]/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-[#1fcc5e]/20 flex items-center justify-center mb-4 border border-[#1fcc5e]/30">
              <Eye className="w-10 h-10 text-[#1fcc5e]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Input Monitoring</h3>
          <p className="text-gray-400 text-sm mb-4">Detects your hotkey globally</p>

          <div className="mt-auto space-y-3 w-full">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]" />
              Fn key detection
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1fcc5e]" />
              Custom shortcuts
            </div>
          </div>

          <span className="w-8 h-8 rounded-full bg-[#1fcc5e] text-black flex items-center justify-center font-bold mt-4">3</span>
        </div>
      </div>
    </div>

    {/* Bottom badges */}
    <div className="flex justify-center gap-4 mt-8">
      <span className="border border-[#1fcc5e]/50 text-[#1fcc5e] px-4 py-2 rounded-full text-sm">Standard macOS permissions</span>
      <span className="border border-[#1fcc5e]/50 text-[#1fcc5e] px-4 py-2 rounded-full text-sm">No data collected</span>
      <span className="border border-[#1fcc5e]/50 text-[#1fcc5e] px-4 py-2 rounded-full text-sm">No account needed</span>
    </div>

    <p className="text-gray-500 text-center mt-4">Whisperer does not transmit audio. Permissions only enable local dictation and insertion.</p>
  </div>
);

// Screenshot 8: Models
const Screenshot8 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-12 mb-12">
      <h1 className="text-5xl font-bold text-white">
        Choose <span className="text-[#1fcc5e]">speed or accuracy</span>
      </h1>
      <p className="text-gray-400 text-lg mt-4">Optimized offline models for Apple Silicon.</p>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
        {[
          { name: 'Fast', desc: 'Quick responses', time: '~0.3s', size: '75 MB', selected: false },
          { name: 'Balanced', desc: 'Best of both', time: '~0.8s', size: '500 MB', selected: true },
          { name: 'Accurate', desc: 'Maximum quality', time: '~2s', size: '3 GB', selected: false },
        ].map((model, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 text-center ${
              model.selected
                ? 'bg-[#1fcc5e]/10 border-2 border-[#1fcc5e]'
                : 'bg-[#111115] border border-gray-800'
            }`}
          >
            {model.selected && (
              <span className="bg-[#1fcc5e] text-black text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Selected</span>
            )}
            <h3 className="text-3xl font-bold text-white mb-2">{model.name}</h3>
            <p className="text-gray-400 mb-6">{model.desc}</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Latency</span>
                <span className="text-white">{model.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Size</span>
                <span className="text-white">{model.size}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-[#1fcc5e] text-sm">
              <div className="w-2 h-2 rounded-full bg-[#1fcc5e]" />
              Preloaded
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center gap-4 mt-8">
      <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#1fcc5e]" />
        Instant start (preloaded)
      </span>
      <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Offline models</span>
    </div>
  </div>
);

// Screenshot 9: Pro Pack
const Screenshot9 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-12 flex flex-col">
    <WhispererLogo />

    <div className="text-center mt-6 mb-8">
      <h1 className="text-5xl font-bold text-white">
        Upgrade <span className="text-[#1fcc5e]">when you need it</span>
      </h1>
      <p className="text-gray-400 text-lg mt-3">Base dictation included. Pro adds power features.</p>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Base */}
        <div className="bg-[#111115] rounded-2xl border border-gray-800 p-6">
          <div className="text-sm text-gray-500 mb-1">Base App</div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-white">$2.99</span>
            <span className="text-gray-500 text-sm">one-time</span>
          </div>
          <p className="text-gray-500 text-sm mb-5">Core dictation for everyday use</p>

          <div className="space-y-2.5">
            {['Offline dictation', 'Live preview', 'Works in all apps', 'Multiple models', 'Waveform feedback'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1fcc5e] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro */}
        <div className="bg-[#1fcc5e]/10 rounded-2xl border-2 border-[#1fcc5e] p-6 relative">
          <span className="absolute -top-3 right-6 bg-[#1fcc5e] text-black text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</span>

          <div className="text-sm text-[#1fcc5e] mb-1">Pro Pack</div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-white">$14.99</span>
            <span className="text-gray-500 text-sm">lifetime</span>
          </div>
          <p className="text-gray-400 text-sm mb-5">Everything in Base, plus power features</p>

          <div className="space-y-2.5">
            {['Everything in Base', 'Code Mode', 'Per-app profiles', 'Personal dictionary', 'Pro insertion'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1fcc5e] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full mt-5 bg-[#1fcc5e] text-black font-bold py-3 rounded-xl text-lg">
            Get Pro Pack
          </button>
        </div>
      </div>
    </div>

    <div className="flex justify-center gap-4 mt-4">
      <span className="bg-[#1fcc5e] text-black font-semibold px-4 py-2 rounded-full text-sm">One-time Pro Pack</span>
      <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Restore purchases</span>
    </div>
  </div>
);

// Screenshot 10: Personal Dictionary
const Screenshot10 = () => (
  <div className="w-full h-full bg-[#0a0a0f] p-16 flex flex-col">
    <div className="flex items-center gap-2 mb-8">
      <WhispererLogo />
      {/* Pro Pack indicator - aligned with logo */}
      <div className="ml-auto flex flex-col items-end gap-2.5">
        <div className="inline-flex items-center gap-2 bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 rounded-full px-3 py-1.5">
          <span className="bg-[#1fcc5e] text-black text-xs font-bold px-2 py-0.5 rounded">PRO</span>
          <span className="text-[#1fcc5e] text-sm font-medium">Part of Pro Pack</span>
        </div>
        <span className="text-gray-500 text-xs bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1">Available through In-App Purchase</span>
      </div>
    </div>

    <div className="mb-8">
      <h1 className="text-5xl font-bold text-white">Personal Dictionary</h1>
      <p className="text-xl text-gray-400 mt-2">Names, acronyms, and terms you use daily.</p>
    </div>

    <div className="flex-1 flex gap-12">
      {/* Dictionary list */}
      <div className="w-96 bg-[#111115] rounded-2xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-semibold">Your Dictionary</h3>
          <span className="text-gray-500 text-sm">12 words</span>
        </div>

        <div className="space-y-3 mb-6">
          {['Anthropic', 'Claude', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Webpack', 'Vercel'].map((word, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
              <span className="text-white">{word}</span>
              <span className="text-[#1fcc5e] text-xs bg-[#1fcc5e]/20 px-2 py-0.5 rounded">Learned</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add new word..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 placeholder-gray-500 text-sm"
          />
          <button className="bg-[#1fcc5e] text-black font-semibold px-4 py-2 rounded-lg text-sm">Add</button>
        </div>
      </div>

      {/* Before/After */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-gray-800/50 rounded-xl p-6 mb-4">
          <div className="text-gray-500 text-sm mb-2">Without dictionary:</div>
          <p className="text-gray-400 line-through">"We need to migrate the post gress queue el database to Cooper netties"</p>
        </div>

        <div className="flex justify-center my-4">
          <div className="w-10 h-10 rounded-full bg-[#1fcc5e]/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1fcc5e" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>

        <div className="bg-[#1fcc5e]/10 border border-[#1fcc5e]/30 rounded-xl p-6">
          <div className="text-[#1fcc5e] text-sm mb-2">With dictionary:</div>
          <p className="text-white text-lg">
            "We need to migrate the <span className="text-[#1fcc5e] font-semibold">PostgreSQL</span> database to <span className="text-[#1fcc5e] font-semibold">Kubernetes</span>"
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center gap-4 mt-8">
      <span className="bg-[#1fcc5e] text-black font-semibold px-4 py-2 rounded-full text-sm">Quick add from overlay</span>
      <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Fewer corrections</span>
    </div>
  </div>
);

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
];

export default function ScreenshotsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentScreenshot = screenshots[currentIndex].component;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Mac App Store Screenshots</h1>
        <p className="text-gray-400 mb-8">2880×1800 (16:10 aspect ratio). Open each in a new tab and screenshot at full size.</p>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>

          <div className="flex items-center gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-[#1fcc5e]' : 'bg-gray-600'}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(Math.min(screenshots.length - 1, currentIndex + 1))}
            disabled={currentIndex === screenshots.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white disabled:opacity-50"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <span className="text-[#1fcc5e] font-semibold">Screenshot {currentIndex + 1} of {screenshots.length}</span>
          <h2 className="text-xl text-white font-medium">{screenshots[currentIndex].title}</h2>
        </div>

        {/* Screenshot */}
        <div className="overflow-hidden shadow-2xl border border-gray-700" style={{ aspectRatio: '16/10' }}>
          <CurrentScreenshot />
        </div>

        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-5 gap-4">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-lg overflow-hidden border-2 ${i === currentIndex ? 'border-[#1fcc5e]' : 'border-gray-700'}`}
              style={{ aspectRatio: '16/10' }}
            >
              <div className="w-full h-full bg-[#0a0a0f] flex items-center justify-center">
                <span className="text-gray-400 text-xs">{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
