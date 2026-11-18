import { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/Shell";

export const metadata: Metadata = {
  title: "使用条款 | Whisperer China",
  description: "Whisperer China（中国大陆版）使用条款：许可、Whisperer Pro 一次性购买、会议录音责任、免责声明。",
  alternates: { canonical: "https://whispererapp.com/terms/china" },
};

const zh: { h: string; p: string[] }[] = [
  { h: "许可", p: ["我们授予您个人的、非排他的、不可转让的许可，可在您拥有或控制的 Apple 设备上使用 Whisperer China。Apple 的《授权应用最终用户许可协议》同样适用。应用及其全部权利归我们所有。"] },
  { h: "购买", p: [
    "应用为付费下载，包含听写、文件转写、历史记录、词典和快速润色。",
    "Whisperer Pro 为一次性、非消耗型的 App 内购买，解锁会议纪要与会议检测、Outlook 日历连接、本地会议摘要和 MCP 服务器。无订阅、无周期性扣费。",
    "付款与退款均由 Apple 按其政策处理，请通过 Apple 申请退款。您可以用同一 Apple 账户在其他 Mac 上恢复购买。",
  ]},
  { h: "本版本的范围", p: [
    "本版本不提供云端 AI 服务、Ask AI 对话、Google 日历登录或任何声音变换功能。模型从 ModelScope（modelscope.cn）下载，仅使用阿里巴巴通义千问（Qwen）模型。应用不收集任何数据，也没有服务器；详见隐私政策。",
  ]},
  { h: "可接受的使用", p: [
    "不得将应用用于任何违法目的；不得反向工程、反编译（法律赋予您的权利除外）；不得转售、出租或再分发；不得删除版权或许可声明；不得在违反适用法律的情况下录制任何人。",
  ]},
  { h: "会议录音与同意", p: [
    "会议纪要录制您的麦克风，并默认录制通话应用播放的声音（使用 macOS 的“屏幕与系统音频录制”权限，只采集通话应用的声音，可在设置中关闭），以便转写包含其他参与者。录音和转写均在您的 Mac 本地运行，不会上传到云端。录什么由您决定，并由您自行负责：各地对录音的法律要求不同，您必须在录音前依法履行告知并取得所有必要的同意，遵守有关录音、监听和转写通信的全部法律。Whisperer 不判断某次录音是否需要告知或同意，也不提供法律意见；对于您录制、听写或生成的内容及其使用，我们不承担任何责任。不得在违法或未取得必要同意的情况下录制、监听或转写任何人。",
  ]},
  { h: "输出的准确性", p: ["语音识别和文本生成可能出错。请在依赖转写、摘要和会议纪要之前自行核对，不要将其作为法律、医疗、财务或安全决定的唯一依据。"] },
  { h: "免责声明与责任限制", p: [
    "在法律允许的最大范围内，应用按“现状”提供，不附带任何明示或暗示的保证；对任何间接、附带、特殊、后果性损害（包括数据或录音丢失）不承担责任。我们对任何与应用有关的索赔的总责任以您为应用及内购所支付的金额为限。法律赋予消费者的强制性权利不受影响。",
  ]},
  { h: "您的数据与备份", p: ["所有转写、录音和设置都保存在您的 Mac 上，归您所有，备份由您负责。我们从不持有副本，因此无法恢复丢失的数据。"] },
  { h: "终止、变更与适用法律", p: [
    "违反本条款时许可终止；您可随时删除应用以终止许可。我们可能更新本条款，并在本页面公布新的更新日期。强制性消费者保护法律以及您所在国家或地区的法律不因本条款而被排除。Apple 不是本条款的一方，但是其第三方受益人。",
  ]},
  { h: "联系我们", p: ["support@whispererapp.com　·　https://whispererapp.com"] },
];

export default function TermsChinaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <header lang="zh-Hans">
            <h1 className="text-4xl font-bold mb-3">Whisperer China 使用条款</h1>
            <p className="text-muted-foreground">最后更新：2026 年 11 月 17 日 · 适用于 Whisperer China（中国大陆版）。英文版见 <a href="/terms#china" className="text-primary hover:underline">Terms of Use</a>，两者如有不一致，以对您更有利且符合当地强制性法律的内容为准。</p>
          </header>
          {zh.map((s) => (
            <section key={s.h} lang="zh-Hans">
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
