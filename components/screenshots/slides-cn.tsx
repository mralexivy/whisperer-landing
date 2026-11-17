"use client";

/**
 * Mac App Store screenshots for the China mainland edition (Whisperer China, com.ivy.whisperer.cn).
 *
 * Only what that build really offers may appear here: dictation, live preview, Qwen3-ASR, file
 * transcription, history, dictionary, and (Pro) meeting notes written on the Mac by Qwen. Never show
 * Whisper/Parakeet or several model sizes, Ask AI, cloud AI providers, speaker names, Accessibility,
 * third-party app logos, or a Pro badge on Basic features. See .claude/skills/submission-prep in the app repo.
 */

import type { ReactNode } from "react";
import { Check, FileAudio, Laptop, Languages, Mic, Search, ShieldCheck, UserX, WifiOff, Wallet, Download, Cpu, BookOpen, ListChecks, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { StackSlide, SplitSlide, Scaled, GLOW_A, GLOW_B, card } from "@/components/screenshots/slides";

const SERIF_CJK = { fontFamily: '-apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif' };

function Window({ title, children, className, bodyClassName }: { title: string; children: ReactNode; className?: string; bodyClassName?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[14px] bg-[#0C0C1A] ring-1 ring-white/[0.1] shadow-[0_30px_80px_rgba(0,0,0,0.55)]", className)} style={SERIF_CJK}>
      <div className="flex items-center gap-2 bg-[#14142B] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" /><span className="h-3 w-3 rounded-full bg-[#FEBC2E]" /><span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[12.5px] text-white/55">{title}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

function Pill({ children, tone = "indigo" }: { children: ReactNode; tone?: "indigo" | "emerald" | "amber" | "violet" }) {
  const tones = {
    indigo: "bg-[#5B6CF7]/15 text-[#AEB5FF]", emerald: "bg-emerald-500/15 text-emerald-300",
    amber: "bg-amber-500/15 text-amber-300", violet: "bg-violet-500/15 text-violet-300",
  };
  return <span className={cn("rounded-full px-2.5 py-1 text-[12px] font-medium", tones[tone])}>{children}</span>;
}

function Wave({ n = 36, className }: { n?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-[3px]", className)}>
      {Array.from({ length: n }).map((_, i) => {
        const h = 6 + Math.round(Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.23)) * 26);
        return <span key={i} className="w-[3px] rounded-full bg-[#7C8BFF]" style={{ height: h }} />;
      })}
    </div>
  );
}

// ───────────────────────── 1. Dictation ─────────────────────────

function C1Dictation() {
  return (
    <StackSlide lines={["按住 Fn 说话，", "⌘V 粘贴。"]} sub="一边说，一边看到文字。松开按键，文字已复制到剪贴板，粘贴到任何应用。" productTop={270}>
      <Scaled scale={1.1} w={900} h={430}>
        <div className="relative w-[900px]" style={SERIF_CJK}>
          <Window title="备忘录 — 产品周会" bodyClassName="h-[330px] bg-[#111122] px-8 py-7">
            <div className="text-[22px] font-semibold text-white">产品周会</div>
            <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-white/80">
              <p>本周重点：完成新版本的内测，并确认下周三的发布时间。</p>
              <p>需要尽快决定是否保留注册步骤，其余问题都已经解决。</p>
              <p className="text-white">
                <span className="text-[#AEB5FF]">明天上午我会把修改后的方案发给大家，</span>
                <span className="ml-0.5 inline-block h-[18px] w-[2px] translate-y-[3px] bg-[#7C8BFF]" />
              </p>
            </div>
          </Window>
          <div className="absolute -bottom-6 left-1/2 flex w-[520px] -translate-x-1/2 items-center gap-4 rounded-[22px] bg-[#14142B] px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5B6CF7]/25"><Mic className="h-5 w-5 text-[#AEB5FF]" /></span>
            <Wave n={30} />
            <span className="ml-auto text-[14px] text-white/70">正在听写 · 0:08</span>
            <kbd className="rounded-[7px] bg-[#5B6CF7] px-2 py-1 text-[12px] font-semibold text-white">fn</kbd>
          </div>
        </div>
      </Scaled>
    </StackSlide>
  );
}

// ───────────────────────── 2. Languages ─────────────────────────

const LANGS: [string, string][] = [
  ["普通话", "今天下午三点开会，请提前准备好材料。"], ["粤語", "聽日朝早我會將份報告發畀你。"],
  ["English", "Let's ship the beta build this afternoon."], ["日本語", "明日の午前中に資料を送ります。"],
  ["한국어", "내일 오전에 자료를 보내 드리겠습니다."], ["Français", "Je vous envoie le résumé ce soir."],
];

function C2Languages() {
  return (
    <SplitSlide lines={["30 种语言，", "说什么都行。"]} sub="普通话、粤语、英语、日语、韩语等 30 种语言，识别在你的 Mac 上完成。" glows={GLOW_B}>
      <div className="w-[600px] space-y-3" style={SERIF_CJK}>
        {LANGS.map(([name, text], i) => (
          <div key={name} className={cn(card, "flex items-center gap-4 px-5 py-4", i === 0 && "ring-[#5B6CF7]/50")}>
            <span className="flex h-10 w-[86px] shrink-0 items-center justify-center rounded-[10px] bg-[#5B6CF7]/15 text-[14px] font-semibold text-[#AEB5FF]">{name}</span>
            <span className="text-[16px] text-white/85">{text}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1 text-[13px] text-white/45"><Languages className="h-4 w-4" /> 自动识别语言，或手动选择</div>
      </div>
    </SplitSlide>
  );
}

// ───────────────────────── 3. Qwen ─────────────────────────

function C3Qwen() {
  const rows = [
    { icon: Mic, color: "text-sky-300", name: "Qwen3-ASR", role: "语音识别", size: "约 2.5 GB", tag: <Pill tone="emerald">基础版</Pill> },
    { icon: FileText, color: "text-violet-300", name: "Qwen3.5", role: "会议标题与摘要", size: "约 3 GB", tag: <Pill tone="violet">Pro</Pill> },
  ];
  return (
    <StackSlide lines={["使用通义千问 Qwen", "全部在本机运行"]} sub="语音识别与文本处理都由通义千问模型完成。模型首次使用时下载，之后完全离线。" productTop={330}>
      <Scaled scale={1.1} w={880} h={420}>
        <div className="w-[880px] space-y-3" style={SERIF_CJK}>
          {rows.map((r) => (
            <div key={r.name} className={cn(card, "flex items-center gap-5 px-6 py-5")}>
              <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white/[0.06]"><r.icon className={cn("h-6 w-6", r.color)} /></span>
              <div className="min-w-0">
                <div className="text-[20px] font-semibold text-white">{r.name}</div>
                <div className="text-[14px] text-white/55">{r.role}</div>
              </div>
              <div className="ml-auto flex items-center gap-4">{r.tag}<span className="text-[14px] text-white/50">{r.size}</span>
                <span className="flex items-center gap-1.5 text-[13px] text-emerald-300"><Check className="h-4 w-4" /> 已就绪</span></div>
            </div>
          ))}
          <div className={cn(card, "flex items-center gap-4 px-6 py-4")}>
            <Download className="h-5 w-5 text-[#AEB5FF]" />
            <span className="text-[15px] text-white/75">模型来源：魔搭社区 ModelScope（modelscope.cn）</span>
            <span className="ml-auto flex items-center gap-1.5 text-[13px] text-white/45"><WifiOff className="h-4 w-4" /> 下载完成后无需联网</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-[13px] text-white/45">
            <Cpu className="h-4 w-4" /> 针对 Apple 芯片优化 · 无需账号 · 数据不出你的 Mac
          </div>
        </div>
      </Scaled>
    </StackSlide>
  );
}

// ───────────────────────── 4. Meeting notes (Pro) ─────────────────────────

function C4Meetings() {
  return (
    <SplitSlide lines={["会议结束，", "纪要就绪。"]} sub={<>录下会议，在 Mac 上用 Qwen 写出摘要、决定和待办。<br />全程不联网。 <Pill tone="violet">Pro</Pill></>} glows={GLOW_A}>
      <Window title="会议记录 — 移动端发布评审" className="w-[640px]" bodyClassName="h-[560px] bg-[#0C0C1A] p-6 space-y-4">
        <div className="flex items-center gap-2 text-[12.5px] text-white/45"><span className="rounded bg-white/[0.06] px-2 py-0.5">11 月 11 日 10:00</span><span>32:14</span><span>4,812 字</span></div>
        <div className={cn(card, "p-4")}>
          <div className="mb-1.5 text-[12px] font-semibold tracking-wider text-[#AEB5FF]">概览</div>
          <p className="text-[14.5px] leading-relaxed text-white/80">团队评审了移动端内测反馈。新用户引导是主要问题，因此取消注册步骤，发布日期调整为 11 月 24 日，媒体禁发期不变。</p>
        </div>
        <div className={cn(card, "p-4")}>
          <div className="mb-2 flex items-center gap-2 text-[12px] font-semibold tracking-wider text-emerald-300"><Check className="h-4 w-4" /> 决定</div>
          <ul className="space-y-1.5 text-[14.5px] text-white/80"><li>发布日期调整为 11 月 24 日</li><li>去掉新用户引导中的注册步骤</li></ul>
        </div>
        <div className={cn(card, "p-4")}>
          <div className="mb-2 flex items-center gap-2 text-[12px] font-semibold tracking-wider text-amber-300"><ListChecks className="h-4 w-4" /> 待办</div>
          <ul className="space-y-1.5 text-[14.5px] text-white/80"><li>重写前三个引导页面 <span className="text-white/40">· 周四</span></li><li>确认发布当天的客服排班 <span className="text-white/40">· 下周一</span></li></ul>
        </div>
        <div className={cn(card, "p-4")}>
          <div className="mb-1.5 text-[12px] font-semibold tracking-wider text-sky-300">待确认问题</div>
          <p className="text-[14.5px] text-white/80">应用公开后，是否还需要保留候补名单页面？</p>
        </div>
      </Window>
    </SplitSlide>
  );
}

// ───────────────────────── 5. Files + history + dictionary ─────────────────────────

function C5Library() {
  const rows = [
    ["10:01", "我们需要在下周发布之前更新接口文档。", "28 字 · 普通话"],
    ["09:45", "能不能帮我约设计团队明天下午开个会？", "17 字 · 普通话"],
    ["09:32", "新的登录流程需要同时支持两种认证方式。", "20 字 · 普通话"],
    ["昨天", "Let's refactor the database queries to improve speed.", "9 words · English"],
  ];
  return (
    <SplitSlide lines={["文件、历史、", "词典，一应俱全。"]} sub="拖入音频或视频文件离线转写；每条记录都保存在本机，可搜索、可回放。" glows={GLOW_B}>
      <Window title="Whisperer — 工作台" className="w-[660px]" bodyClassName="h-[540px] flex">
        <div className="w-[150px] shrink-0 space-y-1 border-r border-white/[0.06] bg-[#0A0A18] p-3 text-[13px]">
          {[["转写记录", Mic, true], ["文件转写", FileAudio, false], ["词典", BookOpen, false]].map(([t, I, on]) => {
            const Icon = I as typeof Mic;
            return <div key={t as string} className={cn("flex items-center gap-2 rounded-[9px] px-3 py-2", on ? "bg-[#5B6CF7]/20 text-[#C7CCFF]" : "text-white/55")}><Icon className="h-4 w-4" />{t as string}</div>;
          })}
        </div>
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-center gap-2 rounded-[10px] bg-white/[0.05] px-3 py-2 text-[13px] text-white/45"><Search className="h-4 w-4" /> 搜索转写记录… <span className="ml-auto rounded bg-white/[0.08] px-1.5 text-[11px]">⌘K</span></div>
          <div className="mt-3 space-y-2">
            {rows.map(([t, text, meta], i) => (
              <div key={t} className={cn(card, "px-4 py-3", i === 0 && "ring-[#5B6CF7]/50")}>
                <div className="flex gap-3"><span className="text-[12.5px] font-medium text-[#AEB5FF]">{t}</span><span className="text-[14px] leading-snug text-white/85">{text}</span></div>
                <div className="mt-1.5 text-[11.5px] text-white/40">{meta}</div>
              </div>
            ))}
          </div>
          <div className={cn(card, "mt-3 flex items-center gap-3 px-4 py-3")}>
            <BookOpen className="h-4 w-4 text-amber-300" />
            <span className="text-[13px] text-white/70">个人词典：<span className="text-white">千问</span>、<span className="text-white">魔搭</span>、<span className="text-white">Whisperer</span> 始终拼写正确</span>
          </div>
        </div>
      </Window>
    </SplitSlide>
  );
}

// ───────────────────────── 6. Privacy ─────────────────────────

function C6Private() {
  const items = [
    { icon: Laptop, color: "text-sky-400", title: "在你的 Mac 上识别", body: "语音和文字只保存在本机，不上传服务器。" },
    { icon: UserX, color: "text-pink-400", title: "无需账号", body: "不用注册，不用邮箱，下载即用。" },
    { icon: WifiOff, color: "text-amber-400", title: "离线可用", body: "模型下载完成后，断网也能听写。" },
    { icon: ShieldCheck, color: "text-emerald-400", title: "不收集数据", body: "没有广告，没有分析工具，没有跟踪。" },
    { icon: Cpu, color: "text-violet-300", title: "Apple 芯片加速", body: "专为 M 系列优化，转写又快又省电。" },
    { icon: Wallet, color: "text-indigo-300", title: "一次购买", body: "没有订阅，没有分钟数限制。" },
  ];
  return (
    <StackSlide lines={["你的声音，", "只留在你的 Mac。"]} sub="Whisperer 只在下载模型和 App Store 购买时联网，其余一切都在本机完成。" productTop={290}>
      <div className="grid w-[1040px] grid-cols-3 gap-4" style={SERIF_CJK}>
        {items.map((it) => (
          <div key={it.title} className={cn(card, "p-6")}>
            <it.icon className={cn("h-7 w-7", it.color)} />
            <div className="mt-4 text-[19px] font-semibold text-white">{it.title}</div>
            <div className="mt-1.5 text-[14.5px] leading-snug text-white/55">{it.body}</div>
          </div>
        ))}
      </div>
    </StackSlide>
  );
}

export const CN_SLIDES: { id: string; title: string; component: () => ReactNode }[] = [
  { id: "cn-01-dictation", title: "听写：按住 Fn 说话", component: C1Dictation },
  { id: "cn-02-languages", title: "30 种语言", component: C2Languages },
  { id: "cn-03-qwen", title: "通义千问 Qwen，本机运行", component: C3Qwen },
  { id: "cn-04-meetings", title: "会议记录与摘要 (Pro)", component: C4Meetings },
  { id: "cn-05-library", title: "文件、历史、词典", component: C5Library },
  { id: "cn-06-private", title: "隐私：只留在你的 Mac", component: C6Private },
];
