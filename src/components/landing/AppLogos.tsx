import slackIcon from "@/assets/icons/slack.png";
import gmailIcon from "@/assets/icons/gmail.png";
import googleDocsIcon from "@/assets/icons/googledocs.png";
import notionIcon from "@/assets/icons/notion.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import jetbrainsIcon from "@/assets/icons/jetbrains.png";
import warpIcon from "@/assets/icons/warp.png";
import notesIcon from "@/assets/icons/notes.png";
import chromeIcon from "@/assets/icons/chrome.png";
import safariIcon from "@/assets/icons/safari.png";
import cursorIcon from "@/assets/icons/cursor.png";
import antigravityIcon from "@/assets/icons/antigravity.png";

const apps = [
  { name: "Slack", icon: slackIcon },
  { name: "Gmail", icon: gmailIcon },
  { name: "Google Docs", icon: googleDocsIcon },
  { name: "Notion", icon: notionIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Cursor", icon: cursorIcon },
  { name: "Antigravity", icon: antigravityIcon },
  { name: "JetBrains", icon: jetbrainsIcon },
  { name: "Warp", icon: warpIcon },
  { name: "Notes", icon: notesIcon },
  { name: "Chrome", icon: chromeIcon },
  { name: "Safari", icon: safariIcon },
];

export const AppLogos = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Works in the apps you <span className="text-primary">already use</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insertion uses Accessibility APIs with a paste fallback for compatibility.
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-6 overflow-hidden py-4">
            <div className="flex gap-6 animate-[scroll_20s_linear_infinite]">
              {[...apps, ...apps].map((app, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card border border-border rounded-xl px-8 py-6 flex items-center gap-4 hover:border-primary/50 transition-colors min-w-[180px]"
                >
                  <img 
                    src={app.icon} 
                    alt={`${app.name} icon`}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-foreground font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
