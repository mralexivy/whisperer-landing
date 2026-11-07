import type { Metadata } from "next";
import { Lock, KeyRound, Laptop, Wifi, NotebookPen } from "lucide-react";
import { SiteHeader, SiteFooter, Section } from "@/components/site/Shell";
import { Showcase, PageHero, SectionHead, FeatureRow, CodeBlock, Steps } from "@/components/site/PageParts";
import { MCPChat, MCPConnectCard } from "@/components/product/MCPChat";
import { BrandIcon, type Brand } from "@/components/product/primitives";
import { FAQSection, type QA } from "@/components/home/HomeFAQ";
import { CloseSection } from "@/components/home/Sections";
import { PRICE_PRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "MCP Server for Your Meetings: Claude, ChatGPT, Cursor, Codex",
  description:
    "Whisperer's built-in MCP server lets Claude, ChatGPT, Cursor, Codex, VS Code and Windsurf search your meetings and dictations, read notes and add their own. Local only.",
  alternates: { canonical: "https://whispererapp.com/mcp" },
  openGraph: {
    title: "Let Claude read your meeting notes",
    description: "A local MCP server for your meetings and transcripts. One click to connect Claude, Cursor, Codex and more.",
    url: "https://whispererapp.com/mcp",
    images: [{ url: "/assets/og/og-mcp.png", width: 1200, height: 630, alt: "Whisperer MCP server" }],
  },
};

const CLIENTS: { brand: Brand; name: string; how: string }[] = [
  { brand: "claude", name: "Claude Desktop", how: "One click, through the mcp-remote bridge" },
  { brand: "claude-code", name: "Claude Code", how: "One click, Streamable HTTP" },
  { brand: "codex", name: "Codex", how: "One click, CLI, IDE and app" },
  { brand: "cursor", name: "Cursor", how: "One click, global MCP config" },
  { brand: "visual-studio-code", name: "VS Code", how: "One click, Copilot agent mode" },
  { brand: "windsurf", name: "Windsurf", how: "One click, Cascade MCP config" },
  { brand: "gemini", name: "Antigravity", how: "Paste the config Whisperer shows" },
  { brand: "openai", name: "ChatGPT", how: "Developer-mode connector with a tunnel URL" },
];

const TOOLS = [
  { name: "list_meetings", body: "Recent meetings with title, date, length, language and whether notes exist." },
  { name: "get_meeting", body: "A meeting's summary, decisions, action items, open questions, notes and topic outline." },
  { name: "get_meeting_transcript", body: "The transcript as “[mm:ss] Speaker: text”, a page at a time, filterable by speaker or time." },
  { name: "search_meetings", body: "Finds moments across meetings and returns snippets with timestamps." },
  { name: "list_meeting_notes", body: "Your notes and the notes AI apps added, with author and timestamp." },
  { name: "add_meeting_note", body: "Saves a note to a meeting, labelled with the AI app's name." },
  { name: "update_meeting_note", body: "Edits a note that app added. Your own notes can't be changed." },
  { name: "delete_meeting_note", body: "Removes a note that app added. Your own notes can't be removed." },
  { name: "search_transcriptions", body: "Searches your dictation history, newest first." },
  { name: "get_transcription", body: "One dictation in full: text, length, language, model and AI version." },
];

const PROMPTS = [
  "What did we decide about the launch date in Tuesday's review?",
  "List every action item assigned to me this week, with the meeting it came from.",
  "Summarise what Northwind asked for across our last three calls.",
  "Read the onboarding crit and add a note with the three biggest risks.",
  "Find the dictation where I described the new pricing and turn it into a spec.",
];

const FAQ: QA[] = [
  {
    question: "What is MCP?",
    answer:
      "The Model Context Protocol is an open standard that lets AI apps call tools. Whisperer's MCP server gives an AI app tools to search and read your meetings and dictations, so you can ask about them in the chat you already use.",
  },
  {
    question: "Can other devices or the internet reach my meetings?",
    answer:
      "Not unless you allow it. The server is off by default and, when on, listens only on your Mac. Serving to other devices on your network is a separate switch, and you can require an access token for every request.",
  },
  {
    question: "Can an AI app change or delete my notes?",
    answer:
      "No. Reading tools never change anything. If you turn on “Let AI apps add notes”, an app can add notes labelled with its name and edit or remove only the notes it added. Your own notes and transcripts are never changed.",
  },
  {
    question: "Why does ChatGPT need a tunnel?",
    answer:
      "ChatGPT connects to MCP servers from OpenAI's cloud, not from your Mac, so it needs a public https address. Whisperer lets you set a tunnel URL for that. Desktop apps like Claude, Cursor and Codex connect locally without one.",
  },
  {
    question: "Is the MCP server part of Pro?",
    answer: `Yes. It is included in Whisperer Pro, a ${PRICE_PRO} one-time purchase, together with meetings and your own AI.`,
  },
];

export default function MCPPage() {
  return (
    <div className="min-h-screen bg-[#0B0B19]">
      <SiteHeader />
      <main>
        <PageHero
          crumbs={[{ name: "MCP server", href: "/mcp" }]}
          title="Let Claude read your meetings"
          lede="Whisperer runs a small MCP server on your Mac. Claude, ChatGPT, Cursor and Codex can search your meetings and dictations, read the notes and add their own."
          secondary={{ href: "#tools", label: "See the tools" }}
          facts={["Local only", "Off until you turn it on", "10 tools"]}
          visual={<MCPChat />}
        />

        <Section id="connect">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHead title="Turn it on, pick the app, click Connect" lede="Whisperer finds the AI apps on your Mac, writes their config for you and tests the connection." />
              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {CLIENTS.map((c) => (
                  <li key={c.name} className="flex items-start gap-3 rounded-[14px] bg-white/[0.03] ring-1 ring-white/[0.07] px-3.5 py-3">
                    <BrandIcon brand={c.brand} size={20} className="mt-0.5" />
                    <div>
                      <div className="text-[14.5px] font-medium text-white">{c.name}</div>
                      <div className="text-[12.5px] text-white/45">{c.how}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <MCPConnectCard />
          </div>
        </Section>

        <Section id="tools">
          <SectionHead title="Ten tools for your meetings and dictations" lede="Every reading tool is marked read-only, so clients like Codex run them without asking each time." />
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {TOOLS.map((t) => (
              <div key={t.name} className="rounded-[16px] bg-[#101024] ring-1 ring-white/[0.07] px-5 py-4 transition-all hover:-translate-y-0.5 hover:ring-white/[0.14]">
                <code className="font-mono text-[14px] text-[#B9C1FF]">{t.name}</code>
                <p className="mt-1.5 text-[14px] leading-[1.5] text-white/60">{t.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="prompts">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <SectionHead title="Things to ask once it is connected" lede="Ask in Claude, ChatGPT or your editor. The app picks the right Whisperer tool by itself." />
            <ul className="space-y-3">
              {PROMPTS.map((p) => (
                <li key={p} className="rounded-[16px] bg-[#1F1E1D] ring-1 ring-white/[0.07] px-5 py-4 text-[15px] leading-[1.5] text-[#E8E6DC]">{p}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Showcase
          id="watch"
          title="Two tool calls, one checklist"
          lede="Claude searches your meetings, opens the right one and answers from your notes. Nothing leaves your Mac except the text you asked about."
          video="mcp-loop"
          alt="Claude calls Whisperer's search_meetings and get_meeting tools and answers with a checklist from the launch review"
        />

        <FeatureRow
          id="config"
          title="Config for any MCP client"
          lede="The Connect button writes this for you. If you prefer to do it by hand, Whisperer shows the exact snippet for each app, with your port and token filled in."
          visual={
            <div className="space-y-3">
              <CodeBlock
                title="Claude Code · ~/.claude.json"
                code={`{
  "mcpServers": {
    "whisperer": {
      "type": "http",
      "url": "http://localhost:8080/mcp"
    }
  }
}`}
              />
              <CodeBlock
                title="Codex · ~/.codex/config.toml"
                code={`[mcp_servers.whisperer]
url = "http://localhost:8080/mcp"`}
              />
            </div>
          }
        >
          <Steps
            items={[
              { title: "Turn on MCP", body: "Workspace → MCP, flip the switch." },
              { title: "Pick your app", body: "Installed apps are listed first." },
            ]}
          />
        </FeatureRow>

        <Section id="security">
          <SectionHead title="Your meetings stay behind your Mac's door" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Laptop, t: "This Mac only", b: "The server listens on your Mac. Nothing outside it can connect." },
              { icon: KeyRound, t: "Optional access token", b: "Require a bearer token on every request; requests without it are refused." },
              { icon: Wifi, t: "Network access is opt-in", b: "Serving other devices on your network is a separate, explicit switch." },
              { icon: NotebookPen, t: "Your notes are yours", b: "Apps can only add and edit their own notes, and only if you allow it." },
            ].map((c) => (
              <div key={c.t} className="border-t border-white/[0.12] pt-6">
                <c.icon className="h-5 w-5 text-emerald-400" />
                <div className="mt-4 text-[16px] font-semibold text-white">{c.t}</div>
                <p className="mt-2 text-[14px] leading-[1.55] text-white/55">{c.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-[13.5px] text-white/45"><Lock className="h-4 w-4" /> Off by default. Turn it on in Workspace → MCP.</div>
        </Section>

        <FAQSection items={FAQ} title="MCP questions" />
        <CloseSection />
      </main>
      <SiteFooter />
    </div>
  );
}
