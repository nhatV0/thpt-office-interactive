import React, { useMemo, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Copy, Check, Terminal, Code2, Sparkles } from 'lucide-react';

interface MathRendererProps {
  content: string;
  className?: string;
}

// Code Block Component with Copy and Language Badge
const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCpp = language === 'cpp' || language === 'c++';
  const langLabel = isCpp ? 'C++ 17/20' : language === 'python' || language === 'py' ? 'Python 3' : 'Code';
  const badgeColor = isCpp ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';

  return (
    <div className="my-4 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
      {/* Code Header Bar */}
      <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${badgeColor} flex items-center gap-1`}>
            {isCpp ? <Code2 className="w-3 h-3" /> : <Terminal className="w-3 h-3" />}
            <span>{langLabel}</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer border border-slate-700/60"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Đã sao chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Sao chép code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="p-4 text-xs sm:text-sm font-mono leading-relaxed text-slate-200 overflow-x-auto selection:bg-cyan-500/30">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  const elements = useMemo(() => {
    if (!content) return null;

    let processed = content;

    // Fix OCR spacing artifacts
    processed = processed.replace(/M\s*ô\s*ph\s*ỏ\s*ng/g, 'Mô phỏng');
    processed = processed.replace(/C\s*à\s*i\s*đ\s*ặ\s*t/g, 'Cài đặt');
    processed = processed.replace(/N\s*ộ\s*i\s*dung/g, 'Nội dung');
    processed = processed.replace(/Đ\s*ộ\s*ph\s*ứ\s*c\s*t\s*ạ\s*p/g, 'Độ phức tạp');
    processed = processed.replace(/L\s*ậ\s*p\s*tr\s*ì\s*nh/g, 'Lập trình');
    processed = processed.replace(/t\s*h\s*i\s*đ\s*ấ\s*u/g, 'thi đấu');
    processed = processed.replace(/B\s*ư\s*ớ\s*c/g, 'Bước');
    processed = processed.replace(/V\s*í\s*d\s*ụ/g, 'Ví dụ');
    processed = processed.replace(/G\s*i\s*ả\s*i\s*th\s*í\s*ch/g, 'Giải thích');

    const lines = processed.split('\n');
    const resultNodes: React.ReactNode[] = [];

    let insideCode = false;
    let codeLanguage = 'cpp';
    let codeLines: string[] = [];

    const flushCodeBlock = (keyPrefix: string) => {
      if (codeLines.length > 0) {
        const fullCode = codeLines.join('\n').trim();
        resultNodes.push(
          <CodeBlock key={`${keyPrefix}-code-${resultNodes.length}`} code={fullCode} language={codeLanguage} />
        );
        codeLines = [];
      }
      insideCode = false;
    };

    const renderInlineMathAndText = (text: string, lineKey: string) => {
      const tokenRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^\$\n]+?\$|\\\([^\)]+?\\\)|O\([^\)]+\)|10\^\d+)/g;
      const parts = text.split(tokenRegex);

      return parts.map((part, pIdx) => {
        if (!part) return null;
        const key = `${lineKey}-p-${pIdx}`;

        // Case 1: Display math $$...$$ or \[...\]
        if ((part.startsWith('$$') && part.endsWith('$$')) || (part.startsWith('\\[') && part.endsWith('\\]'))) {
          const rawFormula = part.slice(2, -2).trim();
          try {
            const html = katex.renderToString(rawFormula, { displayMode: true, throwOnError: false });
            return <div key={key} className="my-2.5 overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <code key={key} className="block my-1 font-mono text-amber-300">{rawFormula}</code>;
          }
        }

        // Case 2: Inline math $...$ or \(...\)
        if ((part.startsWith('$') && part.endsWith('$') && part.length > 2) ||
            (part.startsWith('\\(') && part.endsWith('\\)'))) {
          const rawFormula = part.startsWith('$') ? part.slice(1, -1) : part.slice(2, -2);
          try {
            const html = katex.renderToString(rawFormula.trim(), { displayMode: false, throwOnError: false });
            return <span key={key} className="inline-block px-1 font-mono" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <code key={key} className="text-amber-300 font-mono px-1">{rawFormula}</code>;
          }
        }

        // Case 3: Natural Big O: O(...) or 10^8
        if (/^O\([^\)]+\)$/.test(part) || /^10\^\d+$/.test(part)) {
          try {
            const latexForm = part.replace('10^8', '10^8').replace('²', '^2').replace('³', '^3');
            const html = katex.renderToString(latexForm, { displayMode: false, throwOnError: false });
            return <span key={key} className="inline-block px-1 font-semibold text-cyan-300" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <span key={key} className="font-mono text-cyan-300 font-bold px-1">{part}</span>;
          }
        }

        return <span key={key}>{part}</span>;
      });
    };

    for (let idx = 0; idx < lines.length; idx++) {
      const line = lines[idx];
      const trimmed = line.trim();
      const lineKey = `line-${idx}`;

      // Check explicit markdown code fences ```
      if (trimmed.startsWith('```')) {
        if (insideCode) {
          flushCodeBlock(lineKey);
        } else {
          insideCode = true;
          const lang = trimmed.replace(/^```/, '').trim().toLowerCase();
          codeLanguage = lang || 'cpp';
        }
        continue;
      }

      // Detect start of code without markdown fences
      const isCppStart =
        trimmed.startsWith('#include <') ||
        trimmed.startsWith('using namespace std;') ||
        trimmed.startsWith('int main()') ||
        trimmed.startsWith('long long ') ||
        trimmed.startsWith('void solve()');

      const isPyStart =
        trimmed.startsWith('import sys') ||
        trimmed.startsWith('def solve(') ||
        trimmed.startsWith('def main(');

      if (!insideCode && (isCppStart || isPyStart)) {
        insideCode = true;
        codeLanguage = isCppStart ? 'cpp' : 'python';
        codeLines.push(line);
        continue;
      }

      // If inside code, detect if code has ended
      if (insideCode) {
        // Line that clearly belongs to narrative text instead of code
        const isEndOfCode =
          /^\d+\.\s+[A-ZÀ-Ỹ]/.test(trimmed) ||
          trimmed.startsWith('Giải thích') ||
          trimmed.startsWith('Tóm tắt') ||
          trimmed.startsWith('Ví dụ') ||
          trimmed.startsWith('Bước ') ||
          trimmed.startsWith('Bài tập') ||
          trimmed.startsWith('Lỗi ') ||
          trimmed.startsWith('KẾT QUẢ Ý NGHĨA');

        if (isEndOfCode) {
          flushCodeBlock(lineKey);
        } else {
          codeLines.push(line);
          continue;
        }
      }

      // Headings
      if (trimmed.startsWith('# ') || trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
        const text = trimmed.replace(/^#+\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="mt-7 mb-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center gap-2.5">
              <span className="w-1.5 h-4.5 rounded-full bg-cyan-400" />
              <span>{text}</span>
            </h3>
          </div>
        );
        continue;
      }

      // Numbered major section: "1. Lập trình thi đấu là gì?"
      if (/^\d+\.\s+/.test(trimmed)) {
        resultNodes.push(
          <div key={lineKey} className="mt-6 mb-2.5 bg-slate-900/60 border-l-2 border-cyan-500 pl-3 py-1 rounded-r-lg">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              {renderInlineMathAndText(trimmed, lineKey)}
            </h4>
          </div>
        );
        continue;
      }

      // Subsections "2.1. ..."
      if (/^\d+\.\d+\.\s+/.test(trimmed)) {
        resultNodes.push(
          <h5 key={lineKey} className="text-xs sm:text-sm font-bold text-cyan-300 mt-4 mb-1 pl-1">
            {renderInlineMathAndText(trimmed, lineKey)}
          </h5>
        );
        continue;
      }

      // Bullet points •
      if (trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletContent = trimmed.replace(/^[•\-\*]\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="flex items-start gap-2.5 my-1 text-slate-300 pl-2 text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              {renderInlineMathAndText(bulletContent, lineKey)}
            </div>
          </div>
        );
        continue;
      }

      // Sub-bullets ◦
      if (trimmed.startsWith('◦')) {
        const subContent = trimmed.replace(/^◦\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="flex items-start gap-2 my-0.5 text-slate-400 pl-6 text-xs sm:text-sm">
            <span className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              {renderInlineMathAndText(subContent, lineKey)}
            </div>
          </div>
        );
        continue;
      }

      // Empty space
      if (!trimmed) {
        resultNodes.push(<div key={lineKey} className="h-2" />);
        continue;
      }

      // Regular paragraph
      resultNodes.push(
        <p key={lineKey} className="my-1.5 leading-relaxed text-slate-300 text-xs sm:text-sm">
          {renderInlineMathAndText(line, lineKey)}
        </p>
      );
    }

    if (insideCode) {
      flushCodeBlock('final');
    }

    return resultNodes;
  }, [content]);

  return <div className={`select-text space-y-1 ${className}`}>{elements}</div>;
};
