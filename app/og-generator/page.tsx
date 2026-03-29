"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Download, Mic, Code, WifiOff, Zap, Globe, FileText, History, BookOpen, DollarSign, Scale, Sparkles, Settings, Languages, Eye, Cpu, PenTool, Terminal, Mail, Clock, Brain, Shield, BarChart3, Keyboard, Play, Search } from "lucide-react";
import { toPng } from "html-to-image";

// ============ PREMIUM SHARED COMPONENTS ============

const WhispererLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const iconSize = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" }[size];
  const textSize = { sm: "text-lg", md: "text-xl", lg: "text-2xl" }[size];
  const svgSize = { sm: 16, md: 20, lg: 24 }[size];

  return (
    <div className="flex items-center gap-3">
      <div className={`${iconSize} rounded-xl bg-[#14142B] border border-white/[0.08] flex items-center justify-center`}>
        <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="none">
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
      <span className={`text-white ${textSize} font-semibold`}>Whisperer</span>
    </div>
  );
};

const OGBase = ({ children }: { children: React.ReactNode }) => (
  <div data-og-container className="w-[1200px] h-[630px] bg-[#0C0C1A] relative overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }} />
    {/* Glow orbs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5B6CF7] rounded-full blur-[200px] opacity-[0.08]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5CF6] rounded-full blur-[150px] opacity-[0.06]" />
    {/* Content with premium padding */}
    <div className="absolute inset-0 p-14 flex flex-col">
      {children}
    </div>
  </div>
);

// Premium card with accent bar
const AccentCard = ({ children, color = "#5B6CF7", className = "" }: { children: React.ReactNode; color?: string; className?: string }) => (
  <div className={`bg-[#14142B] rounded-xl border border-white/[0.06] relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: color }} />
    {children}
  </div>
);

// Window mockup with traffic lights
const WindowMockup = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#14142B] rounded-xl border border-white/[0.06] overflow-hidden shadow-2xl ${className}`}>
    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1C1C3A] border-b border-white/[0.06]">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
        <div className="w-3 h-3 rounded-full bg-[#F97316]" />
        <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
      </div>
      <span className="text-white/50 text-sm ml-2">{title}</span>
    </div>
    {children}
  </div>
);

// Feature checkmark for bottom rows
const FeatureCheck = ({ label, color = "#5B6CF7", colorEnd }: { label: string; color?: string; colorEnd?: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}, ${colorEnd || color})` }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-white/50 text-sm">{label}</span>
  </div>
);

// Mini waveform visualization
const MiniWaveform = ({ bars = 12, height = 20, color = "#5B6CF7" }: { bars?: number; height?: number; color?: string }) => (
  <div className="flex items-center gap-[2px]" style={{ height }}>
    {[...Array(bars)].map((_, i) => {
      const h = 0.3 + Math.sin(i * 0.8) * 0.5 + 0.2;
      return (
        <div
          key={i}
          className="w-[3px] rounded-full"
          style={{ height: `${h * 100}%`, backgroundColor: color }}
        />
      );
    })}
  </div>
);

// Icon box with background
const IconBox = ({ icon: Icon, color = "#5B6CF7", size = "md" }: { icon: React.ElementType; color?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = { sm: "w-10 h-10", md: "w-12 h-12", lg: "w-14 h-14" }[size];
  const iconSizes = { sm: 18, md: 22, lg: 26 }[size];
  return (
    <div className={`${sizeClasses} rounded-xl flex items-center justify-center border`} style={{ backgroundColor: `${color}15`, borderColor: `${color}33` }}>
      <Icon style={{ width: iconSizes, height: iconSizes, color }} />
    </div>
  );
};

// ============ PREMIUM OG TEMPLATES ============

// Home OG - Premium with app mockup
const OGHome = () => (
  <OGBase>
    <WhispererLogo />

    <div className="flex-1 flex mt-6">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center pr-8">
        <h1 className="text-[52px] font-bold text-white leading-[1.1] mb-3">
          Hold Fn. Speak. Release.
        </h1>
        <p className="text-xl text-white/50 mb-8">
          Text appears where you&apos;re typing. 100% offline.
        </p>

        <div className="flex gap-3 mb-8">
          <span className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm">
            Offline transcription
          </span>
          <span className="bg-[#5B6CF7]/10 border border-[#5B6CF7]/30 text-[#5B6CF7] px-4 py-2 rounded-full text-sm">
            Code Mode
          </span>
          <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full text-sm">
            3 AI Engines
          </span>
        </div>

        <button className="bg-gradient-to-r from-[#5B6CF7] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-full text-lg w-fit shadow-lg shadow-[#5B6CF7]/25">
          Download on App Store
        </button>
      </div>

      {/* Right - App mockup */}
      <div className="w-[340px] flex flex-col gap-3">
        <WindowMockup title="Whisperer — Ready">
          <div className="p-4 space-y-2">
            <AccentCard color="#5B6CF7">
              <div className="p-3 pl-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#5B6CF7]/15 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-[#5B6CF7]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Transcribe</div>
                  <div className="text-white/[0.35] text-xs">Hold Fn to record</div>
                </div>
              </div>
            </AccentCard>
            <AccentCard color="#22C55E">
              <div className="p-3 pl-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/15 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#22C55E]" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">System-Wide</div>
                  <div className="text-white/[0.35] text-xs">Works in every app</div>
                </div>
                <span className="text-[#22C55E] text-xs font-semibold bg-[#22C55E]/10 px-2 py-0.5 rounded">On</span>
              </div>
            </AccentCard>
            <AccentCard color="#8B5CF6">
              <div className="p-3 pl-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 flex items-center justify-center">
                  <Code className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">Code Mode</div>
                  <div className="text-white/[0.35] text-xs">camelCase, snake_case</div>
                </div>
                <span className="bg-[#5B6CF7] text-white text-[10px] font-bold px-2 py-0.5 rounded">PRO</span>
              </div>
            </AccentCard>
          </div>
        </WindowMockup>
      </div>
    </div>

    {/* Bottom features */}
    <div className="flex gap-8 mt-auto">
      <FeatureCheck label="On-device AI" color="#22C55E" colorEnd="#16A34A" />
      <FeatureCheck label="100+ languages" color="#5B6CF7" colorEnd="#8B5CF6" />
      <FeatureCheck label="Apple Silicon optimized" color="#EF4444" colorEnd="#DC2626" />
    </div>
  </OGBase>
);

// Pricing OG - Premium comparison cards
const OGPricing = () => (
  <OGBase>
    <WhispererLogo />

    <div className="flex-1 flex items-center justify-center">
      <div className="flex gap-6 items-stretch">
        {/* Competitor card */}
        <AccentCard color="#EF4444" className="w-[280px]">
          <div className="p-6">
            <div className="text-[#EF4444] text-sm font-bold uppercase tracking-wider mb-4">Competitors</div>
            <div className="text-white/40 text-4xl font-bold line-through mb-2">$249</div>
            <div className="text-white/30 text-sm mb-6">+ monthly fees</div>
            <div className="space-y-2">
              {['Cloud required', 'Subscription model', 'Privacy concerns'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/40 text-sm">
                  <div className="w-4 h-4 rounded-full bg-[#EF4444]/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AccentCard>

        {/* VS divider */}
        <div className="flex items-center">
          <div className="text-3xl font-bold text-white/20">vs</div>
        </div>

        {/* Whisperer card */}
        <AccentCard color="#5B6CF7" className="w-[320px]">
          <div className="absolute top-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(180deg, rgba(91,108,247,0.1) 0%, transparent 100%)' }} />
          <div className="p-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-[#5B6CF7] text-sm font-bold uppercase tracking-wider">Whisperer Pro</div>
              <span className="bg-[#5B6CF7] text-white text-[10px] font-bold px-2 py-0.5 rounded">BEST VALUE</span>
            </div>
            <div className="text-white text-5xl font-bold mb-2">$14.99</div>
            <div className="text-white/50 text-sm mb-6">lifetime · one-time purchase</div>
            <div className="space-y-2">
              {['100% offline', 'No subscription', 'Privacy first', 'Code Mode', 'Per-app profiles'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-sm">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AccentCard>
      </div>
    </div>

    {/* Bottom features */}
    <div className="flex justify-center gap-8 mt-auto">
      <FeatureCheck label="17x cheaper" color="#22C55E" colorEnd="#16A34A" />
      <FeatureCheck label="No subscription" color="#5B6CF7" colorEnd="#8B5CF6" />
      <FeatureCheck label="Restore purchases" color="#EF4444" colorEnd="#DC2626" />
    </div>
  </OGBase>
);

// Blog Index OG
const OGBlog = () => (
  <OGBase>
    <WhispererLogo />

    <div className="flex-1 flex mt-8">
      <div className="flex-1 flex flex-col justify-center pr-10">
        <IconBox icon={BookOpen} color="#8B5CF6" size="lg" />
        <h1 className="text-[48px] font-bold text-white leading-[1.1] mt-5 mb-3">
          Whisperer Blog
        </h1>
        <p className="text-xl text-white/50">
          Guides, tutorials, and tips for voice-to-text on Mac
        </p>
      </div>

      {/* Article previews */}
      <div className="w-[400px] space-y-3">
        {[
          { title: 'Voice Coding with Cursor', cat: 'Tutorials', color: '#5B6CF7' },
          { title: 'Best Whisper Model Guide', cat: 'Guides', color: '#22C55E' },
          { title: 'Dictation Productivity Tips', cat: 'Tips', color: '#EC4899' },
        ].map((post, i) => (
          <AccentCard key={i} color={post.color}>
            <div className="p-4 pl-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${post.color}15` }}>
                <FileText className="w-5 h-5" style={{ color: post.color }} />
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">{post.title}</div>
                <div className="text-white/[0.35] text-sm">{post.cat}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </AccentCard>
        ))}
      </div>
    </div>

    <div className="flex gap-8 mt-auto">
      <FeatureCheck label="Guides & tutorials" color="#22C55E" colorEnd="#16A34A" />
      <FeatureCheck label="Code examples" color="#5B6CF7" colorEnd="#8B5CF6" />
      <FeatureCheck label="Tips & tricks" color="#EC4899" colorEnd="#BE185D" />
    </div>
  </OGBase>
);

// Blog Post OG Template (Dynamic)
const OGBlogPost = ({ title, category }: { title: string; category: string }) => {
  const categoryColors: Record<string, string> = {
    "guides": "#22C55E",
    "tutorials": "#5B6CF7",
    "comparisons": "#F59E0B",
    "tips": "#EC4899",
    "news": "#06B6D4",
  };
  const color = categoryColors[category.toLowerCase()] || "#5B6CF7";

  return (
    <OGBase>
      <div className="flex items-center justify-between">
        <WhispererLogo />
        <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: `${color}20`, color }}>
          {category}
        </span>
      </div>

      <div className="flex-1 flex mt-6">
        <div className="flex-1 flex flex-col justify-center pr-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" style={{ color }} />
            <span style={{ color }} className="text-lg font-medium">Blog</span>
          </div>
          <h1 className="text-[44px] font-bold text-white leading-[1.15] mb-6">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>whispererapp.com/blog</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Article preview card */}
        <div className="w-[320px]">
          <AccentCard color={color}>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color }}>Featured Article</span>
              </div>
              <div className="space-y-3">
                {[1,2,3,4].map((_, i) => (
                  <div key={i} className="h-3 rounded-full bg-white/[0.06]" style={{ width: `${100 - i * 15}%` }} />
                ))}
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/[0.06]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6]" />
                <div>
                  <div className="text-white text-sm font-medium">Whisperer Team</div>
                  <div className="text-white/[0.35] text-xs">Official Blog</div>
                </div>
              </div>
            </div>
          </AccentCard>
        </div>
      </div>

      <div className="flex gap-8 mt-auto">
        <FeatureCheck label="Step-by-step guide" color="#22C55E" colorEnd="#16A34A" />
        <FeatureCheck label="Code examples" color="#5B6CF7" colorEnd="#8B5CF6" />
        <FeatureCheck label="Best practices" color={color} colorEnd={color} />
      </div>
    </OGBase>
  );
};

// Comparison Page OG Template
const OGComparison = ({ competitor, price }: { competitor: string; price: string }) => (
  <OGBase>
    <WhispererLogo />

    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-8 mb-8">
          {/* Whisperer */}
          <AccentCard color="#5B6CF7" className="w-[240px]">
            <div className="absolute top-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(180deg, rgba(91,108,247,0.1) 0%, transparent 100%)' }} />
            <div className="p-5 relative text-center">
              <div className="text-[#5B6CF7] text-sm font-bold mb-2">Whisperer Pro</div>
              <div className="text-white text-3xl font-bold">$14.99</div>
              <div className="text-white/40 text-sm">lifetime</div>
            </div>
          </AccentCard>

          <div className="text-4xl font-bold text-white/20">vs</div>

          {/* Competitor */}
          <div className="w-[240px] bg-white/5 rounded-xl border border-white/10 p-5 text-center">
            <div className="text-white/50 text-sm font-medium mb-2">{competitor}</div>
            <div className="text-white/30 text-3xl font-bold line-through">{price}</div>
            <div className="text-white/30 text-sm">{price.includes('/') ? 'subscription' : 'one-time'}</div>
          </div>
        </div>

        <h1 className="text-[42px] font-bold text-white mb-3">
          Whisperer vs {competitor}
        </h1>
        <p className="text-xl text-white/50">Mac Dictation Comparison 2026</p>
      </div>
    </div>

    <div className="flex justify-center gap-8 mt-auto">
      <FeatureCheck label="Feature comparison" color="#22C55E" colorEnd="#16A34A" />
      <FeatureCheck label="Price analysis" color="#5B6CF7" colorEnd="#8B5CF6" />
      <FeatureCheck label="User reviews" color="#EF4444" colorEnd="#DC2626" />
    </div>
  </OGBase>
);

// Compare Index OG
const OGCompareIndex = () => (
  <OGBase>
    <WhispererLogo />

    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <IconBox icon={Scale} color="#5B6CF7" size="lg" />
        <h1 className="text-[48px] font-bold text-white mt-5 mb-3">
          Compare Dictation Apps
        </h1>
        <p className="text-xl text-white/50 mb-10">
          Whisperer vs Superwhisper, Wispr Flow, Voibe, and more
        </p>

        <div className="flex justify-center gap-3">
          {['Superwhisper', 'Wispr Flow', 'Voibe', 'MacWhisper'].map((app, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/50 text-sm">
              vs {app}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex justify-center gap-8 mt-auto">
      <FeatureCheck label="Detailed comparisons" color="#22C55E" colorEnd="#16A34A" />
      <FeatureCheck label="Feature breakdown" color="#5B6CF7" colorEnd="#8B5CF6" />
      <FeatureCheck label="Price analysis" color="#F59E0B" colorEnd="#D97706" />
    </div>
  </OGBase>
);

// Feature Page OG Template (Premium)
const OGFeature = ({ title, subtitle, icon: Icon, color }: { title: string; subtitle: string; icon: React.ElementType; color: string }) => (
  <OGBase>
    <WhispererLogo />

    <div className="flex-1 flex mt-6">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center pr-10">
        <IconBox icon={Icon} color={color} size="lg" />
        <h1 className="text-[48px] font-bold text-white leading-[1.1] mt-5 mb-3">{title}</h1>
        <p className="text-xl text-white/50 max-w-[500px]">{subtitle}</p>
      </div>

      {/* Right - Feature showcase */}
      <div className="w-[360px] flex flex-col gap-3">
        <AccentCard color={color}>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <div className="text-white font-semibold">{title}</div>
                <div className="text-white/[0.35] text-sm">Active</div>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              </div>
            </div>
            <div className="bg-[#1C1C3A] rounded-lg p-3 border" style={{ borderColor: `${color}20` }}>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-white/[0.35]">Status</span>
                <span className="text-white font-medium">Enabled</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/[0.35]">Performance</span>
                <div className="flex gap-1">
                  {[1,2,3,4].map((bar) => (
                    <div key={bar} className="w-2 h-4 rounded-sm" style={{ backgroundColor: bar <= 3 ? color : `${color}30` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AccentCard>

        <div className="grid grid-cols-2 gap-3">
          {['Fast', 'Secure', 'Private', 'Offline'].map((label, i) => (
            <div key={i} className="bg-[#14142B] rounded-lg border border-white/[0.06] p-3 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5B6CF7] to-[#8B5CF6] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-white/70 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex gap-8 mt-auto">
      <FeatureCheck label="100% offline" color="#22C55E" colorEnd="#16A34A" />
      <FeatureCheck label="Apple Silicon" color="#5B6CF7" colorEnd="#8B5CF6" />
      <FeatureCheck label="Privacy first" color="#EF4444" colorEnd="#DC2626" />
    </div>
  </OGBase>
);

// ============ ALL OG DEFINITIONS ============

interface OGDefinition {
  id: string;
  name: string;
  path: string;
  component: React.FC;
  category: "static" | "feature" | "blog" | "compare";
}

// Blog posts data
const blogPosts = [
  { slug: "ai-rewriting-dictation-offline", title: "AI Rewriting & Dictation Offline", category: "Guides" },
  { slug: "best-offline-dictation-apps-mac-2026", title: "Best Offline Dictation Apps for Mac 2026", category: "Comparisons" },
  { slug: "best-whisper-model-for-dictation", title: "Best Whisper Model for Dictation", category: "Guides" },
  { slug: "developer-productivity-voice-dictation", title: "Developer Productivity with Voice Dictation", category: "Tips" },
  { slug: "dictation-for-email", title: "Dictation for Email", category: "Guides" },
  { slug: "dictation-for-per-app-profiles", title: "Per-App Dictation Profiles", category: "Tutorials" },
  { slug: "dictation-for-slack-gmail-notion", title: "Dictation for Slack, Gmail & Notion", category: "Guides" },
  { slug: "dictation-for-terminal-cli", title: "Dictation for Terminal & CLI", category: "Tutorials" },
  { slug: "dictation-for-writers-mac", title: "Dictation for Writers on Mac", category: "Guides" },
  { slug: "dictation-productivity-statistics", title: "Dictation Productivity Statistics", category: "Tips" },
  { slug: "filler-word-removal-dictation", title: "Filler Word Removal in Dictation", category: "Tutorials" },
  { slug: "free-cheap-dictation-apps-mac-2026", title: "Free & Cheap Dictation Apps Mac 2026", category: "Comparisons" },
  { slug: "getting-started-whisperer", title: "Getting Started with Whisperer", category: "Tutorials" },
  { slug: "how-to-dictate-camelcase-snake-case", title: "How to Dictate camelCase & snake_case", category: "Tutorials" },
  { slug: "how-to-dictate-code-on-mac", title: "How to Dictate Code on Mac", category: "Tutorials" },
  { slug: "is-apple-dictation-good-enough-for-devs", title: "Is Apple Dictation Good Enough for Devs?", category: "Comparisons" },
  { slug: "multilingual-dictation-guide", title: "Multilingual Dictation Guide", category: "Guides" },
  { slug: "offline-vs-cloud-dictation-privacy", title: "Offline vs Cloud Dictation: Privacy", category: "Comparisons" },
  { slug: "personal-dictionary-setup", title: "Personal Dictionary Setup", category: "Tutorials" },
  { slug: "rsi-prevention-voice-coding", title: "RSI Prevention with Voice Coding", category: "Tips" },
  { slug: "transcribe-audio-files-offline-mac", title: "Transcribe Audio Files Offline on Mac", category: "Tutorials" },
  { slug: "vibe-coding-voice-dictation", title: "Vibe Coding with Voice Dictation", category: "Tips" },
  { slug: "voice-coding-vs-typing-speed", title: "Voice Coding vs Typing Speed", category: "Comparisons" },
  { slug: "voice-coding-with-cursor", title: "Voice Coding with Cursor", category: "Tutorials" },
  { slug: "voice-dictation-for-agentic-coding", title: "Voice Dictation for Agentic Coding", category: "Tips" },
  { slug: "voice-dictation-for-vscode", title: "Voice Dictation for VS Code", category: "Tutorials" },
  { slug: "whisper-vs-nvidia-transcription", title: "Whisper vs NVIDIA Transcription", category: "Comparisons" },
  { slug: "whisper-vs-nvidia-vs-apple-speech", title: "Whisper vs NVIDIA vs Apple Speech", category: "Comparisons" },
  { slug: "whisperer-transcription-history", title: "Whisperer Transcription History", category: "Tutorials" },
];

// Comparison pages data
const comparisons = [
  { slug: "vs-apple-dictation", competitor: "Apple Dictation", price: "Free" },
  { slug: "vs-jestype", competitor: "Jestype", price: "$49" },
  { slug: "vs-macwhisper", competitor: "MacWhisper", price: "$30" },
  { slug: "vs-spokenly", competitor: "Spokenly", price: "$8/mo" },
  { slug: "vs-superwhisper", competitor: "Superwhisper", price: "$249" },
  { slug: "vs-voibe", competitor: "Voibe", price: "$99" },
  { slug: "vs-voice-ink", competitor: "Voice Ink", price: "$5/mo" },
  { slug: "vs-willow", competitor: "Willow", price: "$79" },
  { slug: "vs-wispr-flow", competitor: "Wispr Flow", price: "$10/mo" },
];

// Feature pages data
const features = [
  { slug: "offline-transcription", title: "Offline Transcription", subtitle: "100% on-device. Your voice never leaves your Mac.", icon: WifiOff, color: "#22C55E" },
  { slug: "ai-writing", title: "AI Writing Modes", subtitle: "Rewrite, translate, format — 10 modes, all offline.", icon: Brain, color: "#8B5CF6" },
  { slug: "live-preview", title: "Live Preview", subtitle: "See your words appear as you speak. ~300ms latency.", icon: Eye, color: "#EC4899" },
  { slug: "personal-dictionary", title: "Personal Dictionary", subtitle: "Custom vocabulary with fuzzy and phonetic matching.", icon: BookOpen, color: "#F59E0B" },
  { slug: "transcription-history", title: "Transcription History", subtitle: "Search, replay audio, view stats. Everything saved.", icon: History, color: "#06B6D4" },
  { slug: "file-transcription", title: "File Transcription", subtitle: "Transcribe audio & video files locally. No uploads.", icon: FileText, color: "#5B6CF7" },
  { slug: "multilingual", title: "100+ Languages", subtitle: "Whisper supports 100+ languages. NVIDIA supports 25.", icon: Languages, color: "#22C55E" },
];

// Static pages
const staticPages: OGDefinition[] = [
  { id: "home", name: "Home", path: "/", component: OGHome, category: "static" },
  { id: "pricing", name: "Pricing", path: "/pricing", component: OGPricing, category: "static" },
  { id: "blog", name: "Blog Index", path: "/blog", component: OGBlog, category: "static" },
  { id: "compare", name: "Compare Index", path: "/compare", component: OGCompareIndex, category: "static" },
  { id: "code-mode", name: "Code Mode", path: "/code-mode", component: () => <OGFeature title="Code Mode" subtitle="Dictate camelCase, snake_case, symbols. Works in VS Code, Cursor, Terminal." icon={Code} color="#5B6CF7" />, category: "static" },
  { id: "voice-coding", name: "Voice Coding", path: "/voice-coding", component: () => <OGFeature title="Voice Coding on Mac" subtitle="Write code by speaking. Reduce RSI. camelCase, snake_case, symbols." icon={Mic} color="#22C55E" />, category: "static" },
  { id: "features", name: "Features", path: "/features", component: () => <OGFeature title="All Features" subtitle="Everything you need for voice-to-text on Mac" icon={Zap} color="#5B6CF7" />, category: "static" },
  { id: "offline-dictation-mac", name: "Offline Dictation", path: "/offline-dictation-mac", component: () => <OGFeature title="100% Offline" subtitle="On-device transcription. Your voice never leaves your Mac." icon={WifiOff} color="#22C55E" />, category: "static" },
  { id: "speech-to-text-mac", name: "Speech to Text", path: "/speech-to-text-mac", component: () => <OGFeature title="Speech to Text for Mac" subtitle="Three offline AI engines. 100+ languages. $14.99 one-time." icon={Mic} color="#5B6CF7" />, category: "static" },
  { id: "voice-to-text-developers", name: "For Developers", path: "/voice-to-text-developers", component: () => <OGFeature title="Voice-to-Text for Developers" subtitle="Code Mode, IDE support, RSI prevention" icon={Sparkles} color="#8B5CF6" />, category: "static" },
  { id: "cheapest-dictation-mac", name: "Cheapest Dictation", path: "/cheapest-dictation-mac", component: () => <OGFeature title="Cheapest Dictation for Mac" subtitle="$14.99 lifetime. 17x cheaper than alternatives." icon={DollarSign} color="#22C55E" />, category: "static" },
  { id: "dictation-no-subscription", name: "No Subscription", path: "/dictation-no-subscription", component: () => <OGFeature title="No Subscription Dictation" subtitle="One-time purchase. Own it forever. No monthly fees." icon={Shield} color="#5B6CF7" />, category: "static" },
  { id: "why-whisperer", name: "Why Whisperer", path: "/why-whisperer", component: () => <OGFeature title="Why Whisperer?" subtitle="How it compares to ChatGPT Voice, Superwhisper, and others" icon={Scale} color="#F59E0B" />, category: "static" },
];

// Generate all feature pages
const featurePages: OGDefinition[] = features.map(f => ({
  id: `feature-${f.slug}`,
  name: f.title,
  path: `/features/${f.slug}`,
  component: () => <OGFeature title={f.title} subtitle={f.subtitle} icon={f.icon} color={f.color} />,
  category: "feature" as const,
}));

// Generate all blog posts
const blogPages: OGDefinition[] = blogPosts.map(b => ({
  id: `blog-${b.slug}`,
  name: b.title,
  path: `/blog/${b.slug}`,
  component: () => <OGBlogPost title={b.title} category={b.category} />,
  category: "blog" as const,
}));

// Generate all comparison pages
const comparePages: OGDefinition[] = comparisons.map(c => ({
  id: `compare-${c.slug}`,
  name: `vs ${c.competitor}`,
  path: `/compare/${c.slug}`,
  component: () => <OGComparison competitor={c.competitor} price={c.price} />,
  category: "compare" as const,
}));

// Combine all
const allOGImages: OGDefinition[] = [
  ...staticPages,
  ...featurePages,
  ...blogPages,
  ...comparePages,
];

// ============ MAIN PAGE ============

export default function OGGeneratorPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [exportingAll, setExportingAll] = useState(false);
  const [filter, setFilter] = useState<"all" | "static" | "feature" | "blog" | "compare">("all");
  const ogRef = useRef<HTMLDivElement>(null);

  const filteredImages = filter === "all" ? allOGImages : allOGImages.filter(og => og.category === filter);
  const CurrentOG = filteredImages[currentIndex]?.component || (() => null);

  const handleDownload = useCallback(async () => {
    const el = ogRef.current;
    if (!el || exporting) return;
    setExporting(true);

    try {
      const dataUrl = await toPng(el, { pixelRatio: 2, backgroundColor: "#0C0C1A" });
      const link = document.createElement("a");
      link.download = `og-${filteredImages[currentIndex].id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  }, [currentIndex, exporting, filteredImages]);

  const handleExportAll = useCallback(async () => {
    if (exportingAll) return;
    setExportingAll(true);

    for (let i = 0; i < filteredImages.length; i++) {
      setCurrentIndex(i);
      await new Promise(resolve => setTimeout(resolve, 400));

      const el = ogRef.current;
      if (!el) continue;

      try {
        const dataUrl = await toPng(el, { pixelRatio: 2, backgroundColor: "#0C0C1A" });
        const link = document.createElement("a");
        link.download = `og-${filteredImages[i].id}.png`;
        link.href = dataUrl;
        link.click();
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (err) {
        console.error(`Export failed for ${filteredImages[i].id}:`, err);
      }
    }

    setExportingAll(false);
  }, [exportingAll, filteredImages]);

  return (
    <div className="min-h-screen bg-[#0C0C1A] py-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">OG Image Generator</h1>
        <p className="text-white/60 text-center mb-6">
          Generate premium Open Graph images for all {allOGImages.length} pages (1200x630)
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-6">
          {[
            { key: "all", label: `All (${allOGImages.length})` },
            { key: "static", label: `Static (${staticPages.length})` },
            { key: "feature", label: `Features (${featurePages.length})` },
            { key: "blog", label: `Blog (${blogPages.length})` },
            { key: "compare", label: `Compare (${comparePages.length})` },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setFilter(key as typeof filter); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === key ? "bg-[#5B6CF7] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            disabled={exportingAll}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="text-white/60 text-sm min-w-[120px] text-center">
            {currentIndex + 1} / {filteredImages.length}
          </div>

          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % filteredImages.length)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            disabled={exportingAll}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Current page name */}
        <div className="text-center mb-4">
          <span className="text-white font-medium">{filteredImages[currentIndex]?.name}</span>
          <span className="text-white/40 mx-2">|</span>
          <span className="text-white/40 text-sm">{filteredImages[currentIndex]?.path}</span>
        </div>

        {/* OG Preview */}
        <div className="flex justify-center mb-6 overflow-x-auto">
          <div ref={ogRef} className="border border-white/10 rounded-lg overflow-hidden shadow-2xl" style={{ width: 1200, height: 630 }}>
            <CurrentOG />
          </div>
        </div>

        {/* Download buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleDownload}
            disabled={exporting || exportingAll}
            className="flex items-center gap-2 px-6 py-3 bg-[#5B6CF7] hover:bg-[#4A5BD6] disabled:opacity-50 rounded-lg text-white font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            {exporting ? "Exporting..." : "Download Current"}
          </button>

          <button
            onClick={handleExportAll}
            disabled={exportingAll}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 rounded-lg text-white font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            {exportingAll ? `Exporting ${currentIndex + 1}/${filteredImages.length}...` : `Export All ${filter === "all" ? "" : filter} (${filteredImages.length})`}
          </button>
        </div>

        {/* Quick jump */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-3">Quick Jump</h2>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {filteredImages.map((og, i) => (
              <button
                key={og.id}
                onClick={() => setCurrentIndex(i)}
                className={`px-3 py-1.5 rounded text-xs transition-colors ${
                  i === currentIndex ? "bg-[#5B6CF7] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {og.name}
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 max-w-2xl mx-auto bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-3">After Export</h2>
          <ol className="text-white/60 space-y-2 text-sm">
            <li>1. Move downloaded PNGs to <code className="bg-white/10 px-2 py-0.5 rounded">public/assets/og/</code></li>
            <li>2. Update page metadata: <code className="bg-white/10 px-2 py-0.5 rounded">openGraph: {"{"} images: ["/assets/og/page-id.png"] {"}"}</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
