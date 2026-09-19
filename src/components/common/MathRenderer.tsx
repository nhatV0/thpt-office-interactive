import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  // Parse content for inline math $...$, \(...\), and block math $$...$$, \[...\]
  const elements = useMemo(() => {
    if (!content) return null;

    // First, normalize common mathematical notations into standardized LaTeX
    let processed = content;

    // Clean up OCR spacing artifacts like "M ô  ph ỏ ng" or "Đ ộ   p h ứ c"
    processed = processed.replace(/M\s*ô\s*ph\s*ỏ\s*ng/g, 'Mô phỏng');
    processed = processed.replace(/C\s*à\s*i\s*đ\s*ặ\s*t/g, 'Cài đặt');
    processed = processed.replace(/N\s*ộ\s*i\s*dung/g, 'Nội dung');
    processed = processed.replace(/Đ\s*ộ\s*ph\s*ứ\s*c\s*t\s*ạ\s*p/g, 'Độ phức tạp');
    processed = processed.replace(/L\s*ậ\s*p\s*tr\s*ì\s*nh/g, 'Lập trình');
    processed = processed.replace(/t\s*h\s*i\s*đ\s*ấ\s*u/g, 'thi đấu');
    processed = processed.replace(/B\s*ư\s*ớ\s*c/g, 'Bước');
    processed = processed.replace(/V\s*í\s*d\s*ụ/g, 'Ví dụ');

    // Split paragraphs and code blocks
    const lines = processed.split('\n');
    let insideCodeBlock = false;
    let codeBuffer: string[] = [];
    const resultNodes: React.ReactNode[] = [];

    const renderInlineMathAndText = (text: string, lineKey: string) => {
      // Regex matching LaTeX patterns:
      // 1. $$...$$ (display math)
      // 2. \[...\] (display math)
      // 3. $...$ (inline math)
      // 4. \(...\) (inline math)
      // 5. Common Big O patterns: O(1), O(n), O(log n), O(n^2), O(n log n), O(2^n), 10^8
      const tokenRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^\$\n]+?\$|\\\([^\)]+?\\\)|O\([^\)]+\)|10\^\d+)/g;
      
      const parts = text.split(tokenRegex);
      return parts.map((part, pIdx) => {
        if (!part) return null;
        const key = `${lineKey}-p-${pIdx}`;

        // Case 1: $$...$$ or \[...\]
        if ((part.startsWith('$$') && part.endsWith('$$')) || (part.startsWith('\\[') && part.endsWith('\\]'))) {
          const rawFormula = part.startsWith('$$') ? part.slice(2, -2) : part.slice(2, -2);
          try {
            const html = katex.renderToString(rawFormula.trim(), { displayMode: true, throwOnError: false });
            return <div key={key} className="my-2 overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <code key={key} className="block my-1 font-mono text-amber-300">{rawFormula}</code>;
          }
        }

        // Case 2: $...$ or \(...\)
        if ((part.startsWith('$') && part.endsWith('$') && part.length > 2) ||
            (part.startsWith('\\(') && part.endsWith('\\)'))) {
          const rawFormula = part.startsWith('$') ? part.slice(1, -1) : part.slice(2, -2);
          try {
            const html = katex.renderToString(rawFormula.trim(), { displayMode: false, throwOnError: false });
            return <span key={key} className="inline-block px-1" dangerouslySetInnerHTML={{ __html: html }} />;
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

        // Normal text segment
        return <span key={key}>{part}</span>;
      });
    };

    lines.forEach((line, idx) => {
      const lineKey = `line-${idx}`;

      // Check code block
      if (line.trim().startsWith('```')) {
        if (insideCodeBlock) {
          insideCodeBlock = false;
          resultNodes.push(
            <pre key={`${lineKey}-code`} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto my-3">
              <code>{codeBuffer.join('\n')}</code>
            </pre>
          );
          codeBuffer = [];
        } else {
          insideCodeBlock = true;
        }
        return;
      }

      if (insideCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Check headings (Markdown style or numbered section)
      if (line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
        const text = line.replace(/^#+\s*/, '');
        resultNodes.push(
          <h3 key={lineKey} className="text-base sm:text-lg font-bold text-white mt-6 mb-2 border-b border-slate-800/80 pb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-cyan-400" />
            <span>{text}</span>
          </h3>
        );
        return;
      }

      // Section titles like "1. Lập trình thi đấu là gì?"
      if (/^\d+\.\s+/.test(line.trim())) {
        resultNodes.push(
          <h4 key={lineKey} className="text-sm sm:text-base font-bold text-cyan-300 mt-5 mb-1.5 flex items-center gap-1.5">
            {renderInlineMathAndText(line, lineKey)}
          </h4>
        );
        return;
      }

      // Bullets
      if (line.trim().startsWith('•') || line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const bulletContent = line.trim().replace(/^[•\-\*]\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="flex items-start gap-2.5 my-1 text-slate-300 pl-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              {renderInlineMathAndText(bulletContent, lineKey)}
            </div>
          </div>
        );
        return;
      }

      // Sub-bullets ◦
      if (line.trim().startsWith('◦')) {
        const subContent = line.trim().replace(/^◦\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="flex items-start gap-2.5 my-0.5 text-slate-400 pl-6 text-xs sm:text-sm">
            <span className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              {renderInlineMathAndText(subContent, lineKey)}
            </div>
          </div>
        );
        return;
      }

      // Empty line
      if (!line.trim()) {
        resultNodes.push(<div key={lineKey} className="h-2" />);
        return;
      }

      // Plain paragraph
      resultNodes.push(
        <p key={lineKey} className="my-1.5 leading-relaxed text-slate-300">
          {renderInlineMathAndText(line, lineKey)}
        </p>
      );
    });

    if (insideCodeBlock && codeBuffer.length > 0) {
      resultNodes.push(
        <pre key="trailing-code" className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto my-3">
          <code>{codeBuffer.join('\n')}</code>
        </pre>
      );
    }

    return resultNodes;
  }, [content]);

  return <div className={`select-text ${className}`}>{elements}</div>;
};
