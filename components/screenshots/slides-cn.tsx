"use client";

/**
 * Mac App Store screenshots for the China mainland edition (Whisperer China, com.ivy.whisperer.cn).
 *
 * Same visual language and markup as slides.tsx (AppWindow, AppLabel, cards, headline + accent line, the
 * Listening HUD, the Settings list with checks), in Chinese. Only what that build really offers may
 * appear: dictation, Qwen3-ASR, file transcription, history, dictionary and (Pro) meeting notes written
 * on the Mac by Qwen. Never show Whisper/Parakeet or several model sizes, Ask AI, cloud AI providers,
 * speaker names, Accessibility, third-party app logos, or a Pro badge on Basic features.
 */

import type { ReactNode } from "react";
import {
  AudioLines, BookOpen, CalendarDays, ChartLine, Check, CheckCircle2, CircleHelp, Cpu, Download, FileAudio, Flag,
  Globe, Laptop, NotebookPen, Settings, Sparkles, UserX, WifiOff, Wallet, Workflow, ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, AppLabel } from "@/components/product/primitives";
import { StackSlide, SplitSlide, Scaled, card } from "@/components/screenshots/slides";

const S10_GLOWS = [
  { x: "20%", y: "30%", color: "#5B6CF7", size: 900, opacity: 0.3 },
  { x: "75%", y: "85%", color: "#10B981", size: 700, opacity: 0.1 },
  { x: "90%", y: "20%", color: "#8B5CF6", size: 800, opacity: 0.2 },
];

/** The Settings-style list from slide 10: icon, bold title, grey body, green check. */
function CheckList({ title, rows }: { title: string; rows: { icon: typeof Laptop; color: string; title: string; body: string }[] }) {
  return (
    <AppWindow title={title} className="w-[640px]" bodyClassName="px-7 py-3">
      <div className="divide-y divide-white/[0.07]">
        {rows.map(({ icon: Icon, color, title: t, body }) => (
          <div key={t} className="flex items-center gap-5 py-[18px]">
            <Icon className={cn("h-6 w-6 shrink-0", color)} strokeWidth={1.75} />
            <div className="min-w-0 flex-1">
              <div className="text-[18px] font-semibold text-white">{t}</div>
              <div className="mt-0.5 text-[14.5px] leading-[1.45] text-white/55">{body}</div>
            </div>
            <Check className="h-5 w-5 shrink-0 text-emerald-400" strokeWidth={2.5} />
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

// ───────────────────────── 1. Dictation ─────────────────────────

function C1Dictation() {
  return (
    <StackSlide lines={["按住 Fn 说话，", "⌘V 粘贴。"]} sub="一边说，一边看到文字。松开按键，文字已复制到剪贴板，可粘贴到任何应用。" productTop={286}>
      <Scaled scale={1.12} w={900} h={496}>
        <div className="relative w-[900px]">
          <AppWindow title="备忘录" className="w-[900px]" bodyClassName="h-[460px] bg-[#111122] px-9 py-8">
            <div className="text-[22px] font-bold text-white">产品周会</div>
            <div className="mt-4 space-y-3 text-[16px] leading-[1.6] text-white/80">
              <p>本周重点：完成新版本的内测，并确认下周三的发布时间。</p>
              <p>需要尽快决定是否保留注册步骤，其余问题都已经解决。</p>
            </div>
          </AppWindow>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-[#14142B] ring-1 ring-white/10 px-3 py-1.5 text-[11.5px] text-white/80 shadow-lg">
            <kbd className="rounded-[6px] px-1.5 py-0.5 text-[11px] font-sans bg-[#5B6CF7] text-white">fn</kbd>
            按住中
          </div>
          <div className="absolute left-1/2 bottom-[150px] -translate-x-1/2 w-[480px]">
            <div className="rounded-[18px] bg-[#14142B]/95 ring-1 ring-white/10 px-4 py-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#5B6CF7]" />
                <span className="text-[10.5px] font-medium text-white/50">正在听写</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10.5px] text-white/70">
                  <Globe className="h-3 w-3" /> 普通话
                </span>
              </div>
              <div className="text-[14px] leading-snug text-white">
                明天上午我会把修改后的方案发给大家
                <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#8B9BFF]" />
              </div>
            </div>
          </div>
        </div>
      </Scaled>
    </StackSlide>
  );
}

// ───────────────────────── 2. Languages ─────────────────────────

function C2Languages() {
  const rows = [
    ["普通话", "今天下午三点开会，请提前准备好材料。", "text-sky-400"],
    ["粤語", "聽日朝早我會將份報告發畀你。", "text-cyan-400"],
    ["English", "Let's ship the beta build this afternoon.", "text-pink-400"],
    ["日本語", "明日の午前中に資料を送ります。", "text-emerald-400"],
    ["한국어", "내일 오전에 자료를 보내 드리겠습니다.", "text-amber-400"],
    ["Français", "Je vous envoie le résumé ce soir.", "text-violet-300"],
  ] as const;
  return (
    <SplitSlide lines={["30 种语言，", "说什么都行。"]} sub="普通话、粤语、英语、日语、韩语等 30 种语言。识别在你的 Mac 上完成，可自动识别或手动选择。" glows={S10_GLOWS}>
      <AppWindow title="设置 · 语言" className="w-[640px]" bodyClassName="px-7 py-3">
        <div className="divide-y divide-white/[0.07]">
          {rows.map(([name, text, color]) => (
            <div key={name} className="flex items-center gap-5 py-[18px]">
              <Globe className={cn("h-6 w-6 shrink-0", color)} strokeWidth={1.75} />
              <div className="min-w-0 flex-1">
                <div className="text-[18px] font-semibold text-white">{name}</div>
                <div className="mt-0.5 text-[14.5px] leading-[1.45] text-white/55">{text}</div>
              </div>
              <Check className="h-5 w-5 shrink-0 text-emerald-400" strokeWidth={2.5} />
            </div>
          ))}
        </div>
      </AppWindow>
    </SplitSlide>
  );
}

// ───────────────────────── 3. Qwen ─────────────────────────

function C3Qwen() {
  return (
    <SplitSlide lines={["通义千问 Qwen，", "全部在本机运行。"]} sub="语音识别与会议摘要都由通义千问模型完成。模型首次使用时下载，之后完全离线。" glows={S10_GLOWS}>
      <CheckList
        title="设置 · 模型"
        rows={[
          { icon: AudioLines, color: "text-sky-400", title: "Qwen3-ASR · 语音识别", body: "基础版使用，约 2.5 GB。听写和文件转写都用它。" },
          { icon: Sparkles, color: "text-violet-300", title: "Qwen3.5 · 会议标题与摘要", body: "Pro 使用，约 3 GB，在 Mac 上生成，不联网。" },
          { icon: Download, color: "text-cyan-400", title: "来源：魔搭社区 ModelScope", body: "首次使用时从 modelscope.cn 下载，并校验文件完整性。" },
          { icon: WifiOff, color: "text-amber-400", title: "下载后完全离线", body: "断网也能听写、转写和写出摘要。" },
          { icon: Cpu, color: "text-emerald-400", title: "Apple 芯片加速", body: "专为 M 系列优化，又快又省电。" },
        ]}
      />
    </SplitSlide>
  );
}

// ───────────────────────── 4. Meeting notes (Pro) ─────────────────────────

function C4Notes() {
  return (
    <StackSlide lines={["会议结束，", "纪要就绪。"]} sub="概览、关键决定、待办事项和待确认问题，每场会议都自动写好。由 Qwen 在你的 Mac 上完成。" productTop={278}>
      <AppWindow title="移动端发布评审 · 概览" className="w-[1080px]" bodyClassName="h-[520px] p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[22px] font-bold text-white">移动端发布评审</div>
            <div className="text-[13px] text-white/40 mt-0.5">11 月 11 日 10:00 · 32:14 · 4,812 字</div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#5B6CF7]/15 px-3 py-1 text-[13px] text-[#AEB5FF]">
            <Sparkles className="h-3.5 w-3.5" /> 由 Qwen 在本机生成
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-[#8B9BFF] mb-2 text-[11px]">概览</AppLabel>
              <p className="text-[15px] leading-[1.6] text-white/85">团队评审了移动端内测反馈。新用户引导是主要问题，因此取消注册步骤，发布日期调整为 11 月 24 日，媒体禁发期不变。</p>
            </div>
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-emerald-400 mb-2.5 flex items-center gap-1.5 text-[11px]"><Flag className="h-3.5 w-3.5" /> 决定</AppLabel>
              {[["发布日期调整为 11 月 24 日", "02:26"], ["去掉新用户引导中的注册步骤", "02:20"]].map(([t, ts]) => (
                <div key={t} className="flex justify-between gap-3 text-[15px] text-white/85 py-1">
                  <span>{t}</span><span className="text-white/30 tabular-nums text-[12.5px]">{ts}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-sky-400 mb-2.5 flex items-center gap-1.5 text-[11px]"><CheckCircle2 className="h-3.5 w-3.5" /> 待办事项</AppLabel>
              {[["重写前三个引导页面", "周四"], ["去掉引导中的注册步骤", "11 月 24 日"], ["保持媒体禁发期不变", "持续"]].map(([t, due]) => (
                <div key={t} className="flex items-center gap-2.5 text-[15px] text-white/85 py-1.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-400/70" />
                  <span className="flex-1">{t}</span>
                  <span className="text-[12.5px] text-white/35">{due}</span>
                </div>
              ))}
            </div>
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-amber-400 mb-2 flex items-center gap-1.5 text-[11px]"><CircleHelp className="h-3.5 w-3.5" /> 待确认问题</AppLabel>
              <div className="text-[15px] text-white/85">应用公开后，是否还需要保留候补名单页面？</div>
            </div>
            <div className={cn(card, "p-5")}>
              <AppLabel className="text-rose-400 mb-2 flex items-center gap-1.5 text-[11px]"><CalendarDays className="h-3.5 w-3.5" /> 下次会议</AppLabel>
              <div className="text-[15px] text-white/85">周四：评审新版新用户引导</div>
            </div>
          </div>
        </div>
      </AppWindow>
    </StackSlide>
  );
}

// ───────────────────────── 5. Files, history, dictionary ─────────────────────────

const SIDEBAR_CN = [
  { icon: NotebookPen, label: "会议记录", color: "text-cyan-400" },
  { icon: CalendarDays, label: "日历", color: "text-rose-400" },
  { icon: FileAudio, label: "文件转写", color: "text-fuchsia-400", active: true },
  { icon: BookOpen, label: "词典", color: "text-red-400" },
  { icon: Sparkles, label: "模型", color: "text-pink-400" },
  { icon: ChartLine, label: "统计", color: "text-sky-400" },
  { icon: Workflow, label: "MCP", color: "text-teal-300" },
  { icon: Settings, label: "设置", color: "text-amber-400" },
];

function C5Library() {
  const files = [
    { name: "季度复盘.m4a", meta: "48:12 · 普通话", text: "各位下午好，今天我们先回顾一下第三季度的整体数据，再讨论第四季度的重点任务。", done: true },
    { name: "客户访谈.mp4", meta: "21:40 · 普通话", text: "我们最看重数据安全，希望所有内容都只留在本地。", done: true },
    { name: "Podcast ep12.mp3", meta: "1:02:05 · English", text: "Today we are talking about how small teams ship software without a lot of process.", done: true },
  ];
  return (
    <SplitSlide lines={["文件、历史、", "词典，一应俱全。"]} sub="拖入音频或视频文件离线转写。每条记录都保存在本机，可搜索，可回放。" glows={S10_GLOWS}>
      <AppWindow title="Whisperer · 文件转写" className="w-[700px]" bodyClassName="h-[520px] flex">
        <aside className="w-[170px] shrink-0 bg-[#0A0A18] border-r border-white/[0.05] px-3 py-4">
          <div className="flex items-center gap-2.5 px-1.5 mb-5">
            <div className="h-8 w-8 rounded-[9px] bg-gradient-to-br from-[#1C1C3A] to-[#14142B] ring-1 ring-white/10 flex items-center justify-center">
              <AudioLines className="h-4 w-4 text-[#8B9BFF]" />
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-white">Whisperer</div>
              <div className="text-[10.5px] text-white/45">工作台</div>
            </div>
          </div>
          <nav className="space-y-0.5">
            {SIDEBAR_CN.map(({ icon: Icon, label, color, active }) => (
              <div key={label} className={cn("flex items-center gap-2.5 rounded-[8px] px-2 py-[7px] text-[12px] text-white/75", active && "bg-[#5B6CF7]/[0.14] ring-1 ring-[#5B6CF7]/30 text-white")}>
                <Icon className={cn("h-[15px] w-[15px]", color)} />
                {label}
              </div>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1 p-5">
          <div className="rounded-[12px] border border-dashed border-white/15 bg-white/[0.02] px-4 py-5 text-center text-[13px] text-white/50">
            把音频或视频文件拖到这里（MP3、WAV、M4A、MP4、MOV 等）
          </div>
          <div className="mt-4 space-y-3">
            {files.map((f) => (
              <div key={f.name} className={cn(card, "p-4")}>
                <div className="flex items-center gap-2">
                  <FileAudio className="h-4 w-4 text-fuchsia-400" />
                  <span className="text-[14px] font-semibold text-white">{f.name}</span>
                  <span className="text-[12px] text-white/35">{f.meta}</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-[12px] text-emerald-400"><Check className="h-3.5 w-3.5" /> 已完成</span>
                </div>
                <div className="mt-2 text-[13.5px] leading-[1.55] text-white/65">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </AppWindow>
    </SplitSlide>
  );
}

// ───────────────────────── 6. Private ─────────────────────────

function C6Private() {
  return (
    <SplitSlide lines={["你的声音，", "只留在你的 Mac。"]} sub="Whisperer 只在下载模型和 App Store 购买时联网，其余一切都在本机完成。" glows={S10_GLOWS}>
      <CheckList
        title="设置 · 隐私"
        rows={[
          { icon: Laptop, color: "text-sky-400", title: "在你的 Mac 上识别", body: "语音和文字只保存在本机，不上传服务器。" },
          { icon: UserX, color: "text-pink-400", title: "无需账号", body: "不用注册，不用邮箱，下载即用。" },
          { icon: ShieldCheck, color: "text-emerald-400", title: "不收集数据", body: "没有广告，没有分析工具，没有跟踪。" },
          { icon: WifiOff, color: "text-amber-400", title: "离线可用", body: "模型下载完成后，断网也能听写。" },
          { icon: Wallet, color: "text-violet-300", title: "一次购买", body: "没有订阅，没有分钟数限制。" },
        ]}
      />
    </SplitSlide>
  );
}

export const CN_SLIDES: { id: string; title: string; component: () => ReactNode }[] = [
  { id: "cn-01-dictation", title: "听写：按住 Fn 说话", component: C1Dictation },
  { id: "cn-02-languages", title: "30 种语言", component: C2Languages },
  { id: "cn-03-qwen", title: "通义千问 Qwen，本机运行", component: C3Qwen },
  { id: "cn-04-notes", title: "会议纪要：概览、决定、待办 (Pro)", component: C4Notes },
  { id: "cn-05-files", title: "文件、历史、词典", component: C5Library },
  { id: "cn-06-private", title: "隐私：只留在你的 Mac", component: C6Private },
];
