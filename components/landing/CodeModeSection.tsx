import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CodeEditorMockup } from "./CodeEditorMockup";

import slackIcon from "../../public/assets/icons/slack.png";
import gmailIcon from "../../public/assets/icons/gmail.png";
import vscodeIcon from "../../public/assets/icons/vscode.png";

const codeFeatures = [
  "Speak punctuation and symbols: parentheses, brackets, braces, quotes, commas, semicolons",
  "Casing commands: camelCase, snake_case, CONSTANT_CASE",
  "Literal mode for identifiers (stop 'helpful' autocorrections)",
  "Cleaner spacing around operators and punctuation",
];

export const CodeModeSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pro Pack Feature
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-primary">heavy typing</span> and fast switching
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Power features for developers and professionals who dictate all day.
          </p>
        </div>

        {/* Code Mode */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Code Mode</h3>
              <Badge className="bg-primary text-primary-foreground">Pro</Badge>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Speak symbols, casing, and structure correctly in IDEs and terminals.
            </p>
            <ul className="space-y-3">
              {codeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
              <div className="relative pb-8">
                <CodeEditorMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Per-app Profiles */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Per-App Profiles.
            </h3>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Context-aware dictation.
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Slack gets chat style. Gmail gets email format.<br />
              IDEs get code mode. Automatically.
            </p>
            
            {/* Style pills with real icons */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <img src={slackIcon.src} alt="Slack" className="w-5 h-5" />
                <span className="text-foreground">Chat style</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <img src={gmailIcon.src} alt="Gmail" className="w-5 h-5" />
                <span className="text-foreground">Email style</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <img src={vscodeIcon.src} alt="VS Code" className="w-5 h-5" />
                <span className="text-foreground">Code style</span>
              </div>
            </div>
          </div>

          {/* Right side - App cards */}
          <div className="space-y-4">
            {/* Slack Card */}
            <div className="bg-card border border-border rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E91E8C]" />
              <div className="flex items-center gap-3 mb-3">
                <img src={slackIcon.src} alt="Slack" className="w-5 h-5" />
                <span className="text-foreground font-semibold">Slack</span>
                <span className="bg-[#E91E8C]/20 text-[#E91E8C] text-xs font-medium px-2 py-0.5 rounded">Chat Style</span>
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                hey can you review the PR when you get a chance
              </p>
            </div>

            {/* Gmail Card */}
            <div className="bg-card border border-border rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3B82F6]" />
              <div className="flex items-center gap-3 mb-3">
                <img src={gmailIcon.src} alt="Gmail" className="w-5 h-5" />
                <span className="text-foreground font-semibold">Gmail</span>
                <span className="bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-medium px-2 py-0.5 rounded">Email Style</span>
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                Hi team,<br />
                Please review the attached document.
              </p>
            </div>

            {/* VS Code Card */}
            <div className="bg-card border border-border rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="flex items-center gap-3 mb-3">
                <img src={vscodeIcon.src} alt="VS Code" className="w-5 h-5" />
                <span className="text-foreground font-semibold">VS Code</span>
                <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded">Code Style</span>
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                def validate_input(data: dict) -&gt; bool:
              </p>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-6">
              Switches automatically based on active app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
