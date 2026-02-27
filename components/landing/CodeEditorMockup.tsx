import { Circle, Mic } from "lucide-react";

const codeLines = [
  { lineNum: 1, content: 'import ', keyword: 're', rest: '' },
  { lineNum: 2, content: 'from typing import ', keyword: 'Dict', rest: '' },
  { lineNum: 3, content: '' },
  { lineNum: 4, content: 'def ', keyword: 'validate_input', rest: '(data: Dict) -> bool:' },
  { lineNum: 5, content: '    """Validate user input data."""', isComment: true },
  { lineNum: 6, content: '    if ', keyword: 'not', rest: ' data.get("email"):' },
  { lineNum: 7, content: '        return ', keyword: 'False', rest: '' },
  { lineNum: 8, content: '    ' },
  { lineNum: 9, content: '    pattern = ', string: 'r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"' },
  { lineNum: 10, content: '    return ', keyword: 'bool', rest: '(re.match(pattern, data["email"]))' },
  { lineNum: 11, content: '' },
  { lineNum: 12, content: 'def ', keyword: 'process_user', rest: '(user_id: int) -> None:' },
  { lineNum: 13, content: '    """Process user data."""', isComment: true },
  { lineNum: 14, content: '    user = get_user(user_id)' },
];

export const CodeEditorMockup = () => {
  return (
    <div className="relative w-full">
      {/* Main Editor - Full size */}
      <div className="w-full bg-[#0C0C1A] rounded-xl overflow-hidden shadow-2xl border border-white/[0.06]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#14142B] border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Circle className="w-3 h-3 fill-[hsl(0_62%_50%)] text-[hsl(0_62%_50%)]" />
              <Circle className="w-3 h-3 fill-[hsl(45_93%_47%)] text-[hsl(45_93%_47%)]" />
              <Circle className="w-3 h-3 fill-[#28C840] text-[#28C840]" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span className="bg-[#1C1C3A] px-3 py-1 rounded text-white/80">validator.py</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Editor content - More lines, larger */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div className="space-y-0.5">
            {codeLines.map((line) => (
              <div key={line.lineNum} className="flex">
                <span className="w-8 text-white/20 text-right pr-4 select-none text-xs">
                  {line.lineNum}
                </span>
                <span className="text-white/90">
                  {line.isComment ? (
                    <span className="text-white/50">{line.content}</span>
                  ) : (
                    <>
                      <span className="text-white/80">{line.content}</span>
                      {line.keyword && (
                        <span className="text-[#5B6CF7]">{line.keyword}</span>
                      )}
                      {line.rest && <span className="text-white/80">{line.rest}</span>}
                      {line.string && <span className="text-[hsl(35_92%_60%)]">{line.string}</span>}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-[#5B6CF7] text-xs">
          <div className="flex items-center gap-4 text-white/90">
            <span className="font-medium">Code Mode</span>
            <span>Python</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <span>UTF-8</span>
            <span>Ln 4, Col 42</span>
          </div>
        </div>
      </div>

      {/* Dictation Overlay - Positioned bottom-right, overlapping elegantly */}
      <div className="absolute -bottom-12 -right-4 z-10 max-w-sm">
        <div className="bg-[#14142B]/95 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 shadow-2xl">
          {/* Header with mic */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#5B6CF7]/15 flex items-center justify-center">
                <Mic className="w-5 h-5 text-[#5B6CF7]" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#5B6CF7] border-2 border-[#14142B] animate-pulse" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">Dictating...</div>
              <div className="text-white/50 text-xs">Code Mode active</div>
            </div>
          </div>

          {/* Spoken text */}
          <div className="mb-4">
            <div className="text-white/50 text-xs mb-1.5 uppercase tracking-wider font-medium">You said:</div>
            <div className="text-white/70 text-sm italic leading-relaxed">
              "def validate input open paren data colon dict close paren arrow bool colon"
            </div>
          </div>

          {/* Output */}
          <div>
            <div className="text-white/50 text-xs mb-1.5 uppercase tracking-wider font-medium">Output:</div>
            <div className="bg-[#5B6CF7]/10 border border-[#5B6CF7]/20 rounded-lg px-3 py-2">
              <code className="text-[#5B6CF7] text-sm font-mono">def validate_input(data: Dict) -&gt; bool:</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
