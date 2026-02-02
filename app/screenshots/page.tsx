"use client";

import { useState } from "react";
import {
  Mic,
  Code,
  Sparkles,
  Shield,
  Layout,
  BookOpen,
  Volume2,
  Zap,
  Crown,
  ChevronLeft,
  ChevronRight,
  Check,
  Keyboard
} from "lucide-react";

// Screenshot dimensions for Mac App Store: 2880x1800 (16:10)
// We'll use a scaled version that maintains aspect ratio

const Screenshot1Hero = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    {/* Header text */}
    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Hold Fn. Speak. Release.</h1>
      <p className="text-2xl text-gray-400">Text appears where you're typing. 100% offline.</p>
    </div>

    {/* Main content - Slack mockup */}
    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="relative w-full max-w-5xl">
        {/* Slack window */}
        <div className="bg-[#1a1d21] rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
          {/* Window controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1d21] border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Slack — #general</span>
            </div>
          </div>

          {/* Slack content */}
          <div className="flex h-[400px]">
            {/* Sidebar */}
            <div className="w-64 bg-[#19171d] border-r border-gray-800 p-4">
              <div className="text-white font-semibold mb-4">Workspace</div>
              <div className="space-y-2">
                <div className="text-gray-400 text-sm"># general</div>
                <div className="text-gray-400 text-sm"># engineering</div>
                <div className="text-gray-400 text-sm"># design</div>
              </div>
            </div>

            {/* Main chat */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-semibold">A</div>
                  <div>
                    <div className="text-white font-semibold">Alex <span className="text-gray-500 text-sm font-normal">10:42 AM</span></div>
                    <div className="text-gray-300">Hey team, can we discuss the new feature?</div>
                  </div>
                </div>
              </div>

              {/* Input area with cursor */}
              <div className="p-4 border-t border-gray-800">
                <div className="bg-[#222529] rounded-lg p-3 flex items-center">
                  <span className="text-gray-300">Sure, let me share my thoughts on the implementation</span>
                  <span className="w-0.5 h-5 bg-white animate-pulse ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Whisperer overlay */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1a1f]/95 backdrop-blur-xl rounded-2xl border border-gray-700 p-4 shadow-2xl min-w-[400px]">
          <div className="flex items-center gap-4">
            {/* Waveform */}
            <div className="flex items-center gap-1 h-8">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-emerald-500 rounded-full animate-pulse"
                  style={{
                    height: `${20 + Math.sin(i * 0.8) * 15}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>

            {/* Transcript */}
            <div className="flex-1">
              <div className="text-gray-300 text-lg">Sure, let me share my thoughts on the implementation</div>
            </div>

            {/* Fn indicator */}
            <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-3 py-1.5">
              <span className="text-emerald-400 text-sm font-medium">Fn held</span>
            </div>
          </div>
        </div>

        {/* Callouts */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
          Hold Fn to talk
        </div>
        <div className="absolute -right-4 bottom-20 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
          Release to insert
        </div>
        <div className="absolute top-4 right-4 bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          No cloud
        </div>
      </div>
    </div>
  </div>
);

const Screenshot2LivePreview = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">See words as you speak</h1>
      <p className="text-2xl text-gray-400">Live preview while recording. Final pass for accuracy.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="relative w-full max-w-4xl">
        {/* Large overlay showing streaming */}
        <div className="bg-[#1a1a1f]/95 backdrop-blur-xl rounded-3xl border border-gray-700 p-8 shadow-2xl">
          {/* Status bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 font-medium">Recording...</span>
            </div>
            <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-4 py-2">
              <span className="text-emerald-400 font-medium">Streaming</span>
            </div>
          </div>

          {/* Large waveform */}
          <div className="flex items-center justify-center gap-1.5 h-24 mb-6">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-emerald-500 rounded-full"
                style={{
                  height: `${30 + Math.sin(i * 0.5) * 40 + Math.random() * 20}px`,
                }}
              />
            ))}
          </div>

          {/* Streaming text */}
          <div className="text-center">
            <p className="text-3xl text-white mb-2">
              The quarterly report shows significant growth in
              <span className="text-emerald-400 animate-pulse"> user engagemen|</span>
            </p>
            <p className="text-gray-500 text-lg">(streaming transcription)</p>
          </div>
        </div>

        {/* Arrow showing flow */}
        <div className="flex justify-center my-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-0.5 bg-gray-600" />
            <span className="text-gray-400">Release Fn</span>
            <div className="w-16 h-0.5 bg-gray-600" />
          </div>
        </div>

        {/* Final result */}
        <div className="bg-[#1a1a1f]/95 backdrop-blur-xl rounded-3xl border border-emerald-500/50 p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-500" />
              <span className="text-emerald-400 font-medium">Refined & Inserted</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-300 font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                Done
              </span>
            </div>
          </div>

          <p className="text-3xl text-white text-center">
            The quarterly report shows significant growth in user engagement.
          </p>
        </div>

        {/* Callouts */}
        <div className="absolute top-8 -right-4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
          Streaming transcription
        </div>
        <div className="absolute bottom-8 -left-4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
          Final refine on release
        </div>
      </div>
    </div>
  </div>
);

const Screenshot3CodeMode = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
        <Crown className="w-5 h-5 text-emerald-400" />
        <span className="text-emerald-400 font-semibold">PRO</span>
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">Code Mode</h1>
      <p className="text-2xl text-gray-400">Speak symbols, casing, and structure correctly.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="relative w-full max-w-5xl">
        {/* VS Code window */}
        <div className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#323233] border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-gray-400 text-sm">api.ts — VS Code</span>
            </div>
          </div>

          <div className="flex h-[400px]">
            {/* File explorer */}
            <div className="w-56 bg-[#252526] border-r border-gray-700 p-4">
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Explorer</div>
              <div className="space-y-1 text-sm">
                <div className="text-gray-400">📁 src</div>
                <div className="text-white ml-4">📄 api.ts</div>
                <div className="text-gray-500 ml-4">📄 utils.ts</div>
              </div>
            </div>

            {/* Code editor */}
            <div className="flex-1 p-4 font-mono text-sm">
              <div className="text-gray-500">1  <span className="text-[#569cd6]">import</span> <span className="text-gray-300">{"{ fetch }"}</span> <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'node-fetch'</span>;</div>
              <div className="text-gray-500">2</div>
              <div className="text-gray-500">3  <span className="text-[#569cd6]">async function</span> <span className="text-[#dcdcaa]">fetchUser</span><span className="text-gray-300">(</span><span className="text-[#9cdcfe]">id</span><span className="text-gray-300">: </span><span className="text-[#4ec9b0]">string</span><span className="text-gray-300">) {"{"}</span></div>
              <div className="text-gray-500">4    <span className="text-[#569cd6]">return</span> <span className="text-[#569cd6]">await</span> <span className="text-[#9cdcfe]">api</span><span className="text-gray-300">.</span><span className="text-[#dcdcaa]">get</span><span className="text-gray-300">(</span><span className="text-[#ce9178]">`/users/${"{"}id{"}"}`</span><span className="text-gray-300">);</span></div>
              <div className="text-gray-500">5  <span className="text-gray-300">{"}"}</span></div>
              <div className="text-gray-500">6</div>
              <div className="text-gray-500 bg-emerald-500/10 -mx-4 px-4">7  <span className="text-[#569cd6]">async function</span> <span className="text-[#dcdcaa]">updateProfile</span><span className="text-gray-300">(</span><span className="text-[#9cdcfe]">data</span><span className="text-gray-300">: </span><span className="text-[#4ec9b0]">ProfileData</span><span className="text-gray-300">) {"{"}</span><span className="w-0.5 h-4 bg-white inline-block animate-pulse" /></div>
            </div>
          </div>
        </div>

        {/* Whisperer overlay with Code Mode badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1a1f]/95 backdrop-blur-xl rounded-2xl border border-emerald-500/50 p-4 shadow-2xl min-w-[600px]">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-3 py-1.5">
              <span className="text-emerald-400 text-sm font-semibold flex items-center gap-2">
                <Code className="w-4 h-4" />
                Code Mode
              </span>
            </div>
            <div className="flex-1">
              <div className="text-gray-500 text-sm mb-1">Spoken:</div>
              <div className="text-gray-300">"async function update profile open paren data colon profile data close paren"</div>
            </div>
          </div>
        </div>

        {/* Spoken vs Output comparison */}
        <div className="absolute -right-8 top-1/3 bg-gray-800/90 backdrop-blur rounded-xl p-4 border border-gray-700 max-w-xs">
          <div className="text-gray-400 text-sm mb-2">Output:</div>
          <code className="text-emerald-400 text-sm">async function updateProfile(data: ProfileData) {"{"}</code>
        </div>

        {/* Callouts */}
        <div className="absolute top-20 -left-4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
          Symbols: (), {"{}"}, [], :, ;
        </div>
        <div className="absolute top-40 -left-4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
          Casing: camelCase / snake_case
        </div>
      </div>
    </div>
  </div>
);

const Screenshot4PerAppProfiles = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
        <Crown className="w-5 h-5 text-emerald-400" />
        <span className="text-emerald-400 font-semibold">PRO</span>
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">Per-App Profiles</h1>
      <p className="text-2xl text-gray-400">Slack style. Email style. Code style. Auto-switches.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Slack panel */}
        <div className="relative">
          <div className="bg-[#1a1d21] rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1d21] border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-400 text-sm ml-2">Slack</span>
            </div>
            <div className="p-6">
              <div className="bg-[#222529] rounded-lg p-4">
                <p className="text-gray-300">hey can you check the latest PR? looks good to me but want a second opinion 👀</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-purple-500/20 border border-purple-500/50 rounded-lg px-4 py-2">
            <span className="text-purple-400 font-medium text-sm">Slack Profile — Casual</span>
          </div>
        </div>

        {/* Gmail panel */}
        <div className="relative">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-600 text-sm ml-2">Gmail</span>
            </div>
            <div className="p-6">
              <div className="text-gray-400 text-sm mb-2">To: team@company.com</div>
              <div className="text-gray-400 text-sm mb-4">Subject: PR Review Request</div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-800">Hi team,</p>
                <p className="text-gray-800 mt-2">Could you please review the latest pull request? I believe it's ready for approval, but I would appreciate a second opinion.</p>
                <p className="text-gray-800 mt-2">Best regards</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-500/20 border border-blue-500/50 rounded-lg px-4 py-2">
            <span className="text-blue-400 font-medium text-sm">Gmail Profile — Professional</span>
          </div>
        </div>
      </div>

      {/* Same spoken input */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur rounded-xl p-4 border border-gray-700">
        <div className="text-gray-400 text-sm mb-2 text-center">Same spoken input:</div>
        <p className="text-white text-center">"can you check the latest PR looks good to me but want a second opinion"</p>
      </div>

      {/* Callouts */}
      <div className="absolute top-1/3 left-4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Auto-switch by app
      </div>
      <div className="absolute top-1/2 right-4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Punctuation + tone per app
      </div>
    </div>
  </div>
);

const Screenshot5Reliability = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Built to be reliable</h1>
      <p className="text-2xl text-gray-400">No accidental triggers. No broken paste.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="grid grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Smart filtering diagram */}
        <div className="bg-[#1a1a1f] rounded-2xl border border-gray-700 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Smart Fn Filtering</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-xl">✕</span>
              </div>
              <div>
                <div className="text-white font-medium">Fn + Brightness</div>
                <div className="text-gray-400 text-sm">Ignored — System shortcut</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-xl">✕</span>
              </div>
              <div>
                <div className="text-white font-medium">Fn + Volume</div>
                <div className="text-gray-400 text-sm">Ignored — System shortcut</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-xl">✓</span>
              </div>
              <div>
                <div className="text-white font-medium">Fn only (held)</div>
                <div className="text-gray-400 text-sm">Recording started</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stable insertion */}
        <div className="bg-[#1a1a1f] rounded-2xl border border-gray-700 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Stable Insertion</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-medium">Accessibility API</div>
                <div className="text-gray-400 text-sm">Direct text insertion</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-medium">Paste Fallback</div>
                <div className="text-gray-400 text-sm">Works in any text field</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-medium">Clipboard Restore</div>
                <div className="text-gray-400 text-sm">Preserves your clipboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callouts */}
      <div className="absolute bottom-16 left-1/4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Smart combo filtering
      </div>
      <div className="absolute bottom-16 right-1/4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Prevents accidental recordings
      </div>
    </div>
  </div>
);

const Screenshot6WorksEverywhere = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Works in your apps</h1>
      <p className="text-2xl text-gray-400">Slack, Gmail, Notion, VS Code, Terminal.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
        {[
          { name: "Slack", text: "Quick sync at 3pm? ✓", color: "#4A154B", textColor: "text-white" },
          { name: "Gmail", text: "Thank you for your inquiry...", color: "#ffffff", textColor: "text-gray-800", border: true },
          { name: "VS Code", text: "const handleSubmit = async () => {", color: "#1e1e1e", textColor: "text-emerald-400" },
          { name: "Terminal", text: "git commit -m 'feat: add auth'", color: "#000000", textColor: "text-green-400" },
        ].map((app, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-lg overflow-hidden ${app.border ? 'border border-gray-300' : ''}`}
            style={{ backgroundColor: app.color }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-black/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className={`text-sm ml-2 ${app.textColor} opacity-70`}>{app.name}</span>
            </div>
            <div className="p-6">
              <p className={`${app.textColor} text-lg font-mono`}>{app.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Whisperer overlay in corner */}
      <div className="absolute bottom-8 right-8 bg-[#1a1a1f]/95 backdrop-blur-xl rounded-xl border border-gray-700 p-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <Mic className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-gray-300 text-sm">Ready</span>
        </div>
      </div>

      {/* Callouts */}
      <div className="absolute top-1/3 -left-2 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Insert into focused field
      </div>
      <div className="absolute top-1/2 -right-2 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Paste + typing fallback
      </div>
    </div>
  </div>
);

const Screenshot7Dictionary = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
        <Crown className="w-5 h-5 text-emerald-400" />
        <span className="text-emerald-400 font-semibold">PRO</span>
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">Personal Dictionary</h1>
      <p className="text-2xl text-gray-400">Names, acronyms, and terms you use daily.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="grid grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Dictionary panel */}
        <div className="bg-[#1a1a1f] rounded-2xl border border-gray-700 p-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">Your Dictionary</h3>
            <span className="text-gray-500 text-sm ml-auto">12 words</span>
          </div>

          <div className="space-y-3">
            {["Anthropic", "Claude", "Kubernetes", "PostgreSQL", "GraphQL", "TypeScript"].map((word, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                <span className="text-white font-medium">{word}</span>
                <span className="text-emerald-400 text-sm bg-emerald-500/20 px-2 py-0.5 rounded">Learned</span>
              </div>
            ))}
          </div>

          {/* Add word */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Add new word..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 placeholder-gray-500"
            />
            <button className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded-lg">Add</button>
          </div>
        </div>

        {/* Result demo */}
        <div className="flex flex-col justify-center">
          <div className="bg-gray-800 rounded-xl p-6 mb-4">
            <div className="text-gray-400 text-sm mb-2">Without dictionary:</div>
            <p className="text-gray-300 line-through">"We need to migrate the post gress queue el database to Cooper netties"</p>
          </div>

          <div className="flex justify-center my-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400">↓</span>
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <div className="text-emerald-400 text-sm mb-2">With dictionary:</div>
            <p className="text-white">"We need to migrate the <span className="text-emerald-400 font-semibold">PostgreSQL</span> database to <span className="text-emerald-400 font-semibold">Kubernetes</span>"</p>
          </div>
        </div>
      </div>

      {/* Callouts */}
      <div className="absolute bottom-16 left-1/4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Quick add from overlay
      </div>
      <div className="absolute bottom-16 right-1/4 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Fewer corrections
      </div>
    </div>
  </div>
);

const Screenshot8AudioSettings = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Clean audio, stable input</h1>
      <p className="text-2xl text-gray-400">Pick your mic. Auto-recover on changes.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="bg-[#1a1a1f] rounded-2xl border border-gray-700 p-8 w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-8">
          <Volume2 className="w-8 h-8 text-emerald-400" />
          <h3 className="text-2xl font-bold text-white">Audio Settings</h3>
        </div>

        {/* Mic selector */}
        <div className="mb-8">
          <label className="text-gray-400 text-sm mb-2 block">Input Device</label>
          <div className="relative">
            <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white appearance-none cursor-pointer">
              <option>MacBook Pro Microphone (Built-in)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▼</div>
          </div>

          {/* Other mic options */}
          <div className="mt-2 space-y-1 text-gray-500 text-sm pl-4">
            <div>• Blue Yeti USB Microphone</div>
            <div>• AirPods Pro</div>
          </div>
        </div>

        {/* Level meter */}
        <div className="mb-8">
          <label className="text-gray-400 text-sm mb-2 block">Input Level</label>
          <div className="h-8 bg-gray-800 rounded-lg overflow-hidden flex items-center px-2">
            <div className="flex gap-0.5 h-5">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 rounded-sm ${i < 18 ? 'bg-emerald-500' : i < 24 ? 'bg-yellow-500' : 'bg-gray-700'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Auto-recovery toast */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Check className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-white font-medium">Microphone recovered</div>
            <div className="text-gray-400 text-sm">Blue Yeti reconnected automatically</div>
          </div>
        </div>
      </div>

      {/* Callouts */}
      <div className="absolute top-1/3 -left-2 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Multiple mics
      </div>
      <div className="absolute top-1/2 -right-2 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Auto-recovery
      </div>
    </div>
  </div>
);

const Screenshot9Models = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Choose speed or accuracy</h1>
      <p className="text-2xl text-gray-400">Optimized models for Apple Silicon.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { name: "Fast", desc: "Quick responses", speed: "~0.3s", size: "75 MB", icon: Zap, selected: false },
          { name: "Balanced", desc: "Best of both", speed: "~0.8s", size: "500 MB", icon: Sparkles, selected: true },
          { name: "Accurate", desc: "Maximum quality", speed: "~2s", size: "3 GB", icon: Shield, selected: false },
        ].map((model, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 cursor-pointer transition-all ${
              model.selected
                ? 'bg-emerald-500/10 border-2 border-emerald-500'
                : 'bg-[#1a1a1f] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <model.icon className={`w-8 h-8 ${model.selected ? 'text-emerald-400' : 'text-gray-400'}`} />
              {model.selected && (
                <span className="bg-emerald-500 text-black text-xs font-semibold px-2 py-1 rounded-full">Selected</span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">{model.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{model.desc}</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Latency</span>
                <span className="text-white">{model.speed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Size</span>
                <span className="text-white">{model.size}</span>
              </div>
            </div>

            {/* Preloaded indicator */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-gray-400 text-sm">Preloaded</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Callouts */}
      <div className="absolute bottom-16 left-1/3 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        Instant start (preloaded)
      </div>
      <div className="absolute bottom-16 right-1/3 bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        Offline models
      </div>
    </div>
  </div>
);

const Screenshot10ProPack = () => (
  <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden flex flex-col">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />

    <div className="relative z-10 pt-16 px-16 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Upgrade when you need it</h1>
      <p className="text-2xl text-gray-400">Base dictation included. Pro adds power features.</p>
    </div>

    <div className="flex-1 relative z-10 flex items-center justify-center px-16 pb-8">
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Base */}
        <div className="bg-[#1a1a1f] rounded-2xl border border-gray-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Whisperer</h3>
          <p className="text-gray-400 mb-6">Included</p>

          <div className="space-y-4">
            {[
              "Offline dictation",
              "Live preview",
              "Works in all apps",
              "Multiple models",
              "Waveform feedback",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro */}
        <div className="bg-emerald-500/10 rounded-2xl border-2 border-emerald-500 p-8 relative">
          <div className="absolute -top-3 right-6 bg-emerald-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
            Lifetime
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-6 h-6 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Pro Pack</h3>
          </div>
          <p className="text-emerald-400 mb-6">One-time purchase</p>

          <div className="space-y-4">
            {[
              "Everything in Base",
              "Code Mode",
              "Per-app profiles",
              "Personal dictionary",
              "Pro insertion",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 bg-emerald-500 text-black font-semibold py-3 rounded-xl hover:bg-emerald-400 transition-colors">
            Upgrade to Pro
          </button>
        </div>
      </div>

      {/* Callouts */}
      <div className="absolute bottom-12 left-1/3 bg-emerald-500 text-black text-sm font-semibold px-3 py-1.5 rounded-full">
        One-time Pro Pack
      </div>
      <div className="absolute bottom-12 right-1/3 bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">
        Restore purchases
      </div>
    </div>
  </div>
);

const screenshots = [
  { id: 1, component: Screenshot1Hero, title: "Hero: Hold Fn. Speak. Release." },
  { id: 2, component: Screenshot2LivePreview, title: "Live Preview" },
  { id: 3, component: Screenshot3CodeMode, title: "Code Mode (Pro)" },
  { id: 4, component: Screenshot4PerAppProfiles, title: "Per-App Profiles (Pro)" },
  { id: 5, component: Screenshot5Reliability, title: "Built to be reliable" },
  { id: 6, component: Screenshot6WorksEverywhere, title: "Works in your apps" },
  { id: 7, component: Screenshot7Dictionary, title: "Personal Dictionary (Pro)" },
  { id: 8, component: Screenshot8AudioSettings, title: "Clean audio, stable input" },
  { id: 9, component: Screenshot9Models, title: "Speed or accuracy" },
  { id: 10, component: Screenshot10ProPack, title: "Pro Pack (Lifetime)" },
];

export default function ScreenshotsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentScreenshot = screenshots[currentIndex].component;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Mac App Store Screenshots</h1>
        <p className="text-gray-400 mb-8">Preview and capture screenshots for App Store submission (2880x1800 aspect ratio)</p>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-emerald-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(Math.min(screenshots.length - 1, currentIndex + 1))}
            disabled={currentIndex === screenshots.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Screenshot title */}
        <div className="text-center mb-4">
          <span className="text-emerald-400 font-semibold">Screenshot {currentIndex + 1} of {screenshots.length}</span>
          <h2 className="text-xl text-white font-medium">{screenshots[currentIndex].title}</h2>
        </div>

        {/* Screenshot preview (16:10 aspect ratio) */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700" style={{ aspectRatio: '16/10' }}>
          <CurrentScreenshot />
        </div>

        {/* Thumbnail strip */}
        <div className="mt-8 grid grid-cols-5 gap-4">
          {screenshots.map((screenshot, i) => {
            const Thumb = screenshot.component;
            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  i === currentIndex ? 'border-emerald-500 scale-105' : 'border-gray-700 hover:border-gray-500'
                }`}
                style={{ aspectRatio: '16/10' }}
              >
                <div className="w-full h-full transform scale-100">
                  <Thumb />
                </div>
              </button>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-2">How to capture screenshots:</h3>
          <ol className="text-gray-400 space-y-2 list-decimal list-inside">
            <li>Navigate to each screenshot using the arrows or dots</li>
            <li>Use your browser's developer tools to set viewport to 2880x1800</li>
            <li>Take a screenshot of just the preview area</li>
            <li>Or use a screenshot tool like CleanShot X with the correct dimensions</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
