import { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/Shell";

export const metadata: Metadata = {
  title: "隐私政策 | Whisperer China",
  description: "Whisperer China（中国大陆版）隐私政策：不收集任何个人数据，所有语音处理均在您的 Mac 上完成。",
  alternates: { canonical: "https://whispererapp.com/privacy/china" },
};

const zh: { h: string; p: string[] }[] = [
  { h: "我们不收集任何数据", p: [
    "Whisperer China 没有服务器、没有账号、没有统计分析、没有广告。您说的话、写的字和录下的音频不会发送给我们或任何第三方。",
    "所有录音、转写、会议纪要、词典和设置都只保存在您自己的 Mac 上。",
  ]},
  { h: "网络使用", p: [
    "应用仅在下载模型文件时联网。模型来自 ModelScope（modelscope.cn），仅使用阿里巴巴通义千问（Qwen）模型和一个小型语音活动检测模型。下载过程不发送任何个人信息。模型文件是数据文件，不是可执行代码。",
    "模型下载完成后，转写完全离线运行。",
    "您可以选择连接 Microsoft Outlook 日历，应用会直接从微软读取您的日程（只读），用于会前提醒和为录音命名；令牌保存在 macOS 钥匙串中。不连接也不影响使用。本版本不提供 Google 日历登录。",
  ]},
  { h: "本版本不包含的功能", p: [
    "本版本不提供任何云端 AI 服务（不接入 ChatGPT、OpenAI、Anthropic、Gemini），也没有 Ask AI 对话功能，会议文本不会发送给任何 AI 服务商。",
    "本版本不包含任何声音变换功能。",
  ]},
  { h: "麦克风与摄像头", p: [
    "麦克风：仅在您按住录音快捷键或开始会议录音时采集音频，音频在本机处理，绝不上传。会议记录会录制您的麦克风，并默认录制通话应用播放的声音，以便转写包含其他参与者。通话声音使用 macOS 自带的“屏幕与系统音频录制”权限，只采集通话应用的声音，且仅在您录制会议期间；可在设置中关闭，拒绝权限时只录制麦克风。全部在本机转写，绝不上传。",
    "摄像头（可选，默认关闭）：仅检测摄像头是否被其他应用占用，用于判断是否为视频会议，绝不拍摄、录制或查看画面。",
    "您有责任在当地法律要求时取得其他参与者的录音同意。",
  ]},
  { h: "MCP 服务器", p: [
    "可选功能，默认关闭，仅监听本机回环地址并需要访问令牌。它只向您自己配置的本地 AI 工具提供您的转写记录，不向我们或互联网发送任何内容。",
  ]},
  { h: "购买", p: [
    "Whisperer Pro 为一次性购买，不是订阅。付款由 Apple 处理，我们只收到购买完成的确认，无法获得任何支付信息。",
  ]},
  { h: "数据保存与您的权利", p: [
    "所有数据都在您的设备上，位于 ~/Library/Application Support/Whisperer/。您可以随时在应用内删除录音和转写，删除应用及上述文件夹即可清除全部数据。由于我们不持有任何个人数据，不存在需要我们访问、更正或删除的数据。",
    "本应用不面向 13 岁以下儿童收集任何信息。",
  ]},
  { h: "联系我们", p: ["support@whispererapp.com　·　https://whispererapp.com"] },
];

const en: { h: string; p: string[] }[] = [
  { h: "We collect no data", p: [
    "Whisperer China has no servers, no accounts, no analytics and no ads. What you say, write or record is never sent to us or to any third party.",
    "All recordings, transcripts, meeting notes, the dictionary and settings stay on your own Mac.",
  ]},
  { h: "Network use", p: [
    "The app goes online only to download model files, from ModelScope (modelscope.cn). It uses only Alibaba Qwen models and a small voice-activity detector. The download sends no personal information. Model files are data, not executable code. After the download, transcription works fully offline.",
    "You may optionally connect a Microsoft Outlook calendar; the app then reads your events directly from Microsoft (read-only) to remind you before meetings and to name recordings. Tokens are kept in the macOS Keychain. Google Calendar sign-in is not offered in this edition.",
  ]},
  { h: "What this edition does not include", p: [
    "No cloud AI of any kind (no ChatGPT, OpenAI, Anthropic or Gemini) and no Ask AI chat. Meeting text is never sent to an AI provider. It has no voice-alteration feature.",
  ]},
  { h: "Microphone and camera", p: [
    "The microphone is used only while you hold the recording shortcut or run a meeting recording; audio is processed on the Mac and never uploaded. Meeting notes record your microphone and, by default, the audio your call app plays so the other participants are in the transcript; this uses the macOS Screen & System Audio Recording permission, captures only the call app's audio while you record a meeting, stays on your Mac, and can be turned off in Settings (without the permission only the microphone is recorded). The optional, off-by-default camera permission only checks whether another app is using the camera; it never captures video. You are responsible for obtaining other participants' consent where the law requires it.",
  ]},
  { h: "MCP server", p: ["Optional, off by default, loopback only, protected by a token. It serves your own transcripts to local AI tools you configure and sends nothing to us or to the internet."] },
  { h: "Purchase", p: ["Whisperer Pro is a one-time purchase, not a subscription. Apple processes payment; we receive only a confirmation."] },
  { h: "Your data and rights", p: ["All data is on your device. Delete recordings in the app at any time, or remove the app and its folder to erase everything. We hold no personal data, so there is nothing for us to access, correct or delete. The app collects nothing from children under 13."] },
  { h: "Contact", p: ["support@whispererapp.com · https://whispererapp.com"] },
];

export default function PrivacyChinaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <header>
            <h1 className="text-4xl font-bold mb-3" lang="zh-Hans">Whisperer China 隐私政策</h1>
            <p className="text-muted-foreground" lang="zh-Hans">最后更新：2026 年 11 月 17 日 · 适用于 Whisperer China（中国大陆版，bundle id com.ivy.whisperer.cn）</p>
          </header>
          {zh.map((s) => (
            <section key={s.h} lang="zh-Hans">
              <h2 className="text-2xl font-semibold mb-3">{s.h}</h2>
              {s.p.map((t, i) => <p key={i} className="text-muted-foreground mb-3">{t}</p>)}
            </section>
          ))}
          <hr className="border-border" />
          <header>
            <h1 className="text-3xl font-bold mb-3" lang="en">Whisperer China Privacy Policy</h1>
            <p className="text-muted-foreground" lang="en">Last updated: November 17, 2026. Applies to Whisperer China (mainland China edition, bundle id com.ivy.whisperer.cn). The general <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> also applies where it does not conflict.</p>
          </header>
          {en.map((s) => (
            <section key={s.h} lang="en">
              <h2 className="text-2xl font-semibold mb-3">{s.h}</h2>
              {s.p.map((t, i) => <p key={i} className="text-muted-foreground mb-3">{t}</p>)}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
