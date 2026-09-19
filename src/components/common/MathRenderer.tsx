import React, { useMemo, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Copy, Check, Terminal, Code2, HelpCircle } from 'lucide-react';
import { StepRoadmap } from './StepRoadmap';

interface MathRendererProps {
  content: string;
  className?: string;
}

// Built-in glossary of code annotations for interactive hover tooltips
const CODE_ANNOTATIONS: Record<string, string> = {
  '#include <bits/stdc++.h>': 'Thư viện tổng hợp chứa toàn bộ cấu trúc dữ liệu và giải thuật chuẩn của C++.',
  '#include <iostream>': 'Thư viện nhập xuất luồng chuẩn (cin, cout).',
  '#include <vector>': 'Thư viện mảng động std::vector.',
  '#include <algorithm>': 'Thư viện thuật toán: std::sort, std::lower_bound, std::max, std::min.',
  'using namespace std;': 'Cho phép sử dụng trực tiếp các định danh trong không gian tên std mà không cần viết std::',
  'ios_base::sync_with_stdio(false);': 'Ngắt đồng bộ giữa luồng I/O của C và C++ để tăng tốc độ cin/cout gấp 5-10 lần.',
  'cin.tie(NULL);': 'Hủy liên kết giữa cin và cout, tránh việc tự động xả đệm cout trước mỗi lệnh cin.',
  'import sys': 'Nhập thư viện hệ thống của Python để dùng sys.stdin đọc dữ liệu tốc độ cao.',
  'input = sys.stdin.readline': 'Gán hàm đọc dòng nhanh thay thế cho hàm input() mặc định để tránh TLE trong Python.',
  'freopen("input.txt", "r", stdin);': 'Chuyển hướng đọc dữ liệu từ file văn bản thay vì từ bàn phím.',
  'freopen("output.txt", "w", stdout);': 'Chuyển hướng xuất kết quả ra file văn bản thay vì màn hình terminal.',
  'int main()': 'Hàm khởi động chính của toàn bộ chương trình C++.',
  'return 0;': 'Kết thúc chương trình thành công và trả mã lỗi 0 về hệ điều hành.'
};

// Interactive Code Line with Hover Annotation
const AnnotatedCodeLine: React.FC<{ line: string; isComment: boolean }> = ({ line, isComment }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const trimmed = line.trim();

  // Find matching tooltip
  let tooltipText = '';
  for (const [key, desc] of Object.entries(CODE_ANNOTATIONS)) {
    if (trimmed.startsWith(key)) {
      tooltipText = desc;
      break;
    }
  }

  // Also check inline comments
  if (!tooltipText && trimmed.includes('//')) {
    const parts = trimmed.split('//');
    if (parts[1] && parts[1].trim()) {
      tooltipText = parts[1].trim();
    }
  }

  return (
    <div
      className={`relative group flex items-start justify-between py-0.5 px-2 rounded-md transition-colors ${
        tooltipText ? 'hover:bg-cyan-500/10 dark:hover:bg-cyan-500/15 cursor-help' : ''
      }`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className={isComment ? 'text-slate-500 italic' : 'text-slate-800 dark:text-slate-200'}>
        {line}
      </span>

      {tooltipText && (
        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0 text-cyan-600 dark:text-cyan-400">
          <HelpCircle className="w-3.5 h-3.5 inline" />
        </span>
      )}

      {tooltipText && showTooltip && (
        <div className="absolute left-1/3 bottom-full mb-1 z-40 bg-slate-900 dark:bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl border border-slate-700 max-w-sm pointer-events-none animate-in fade-in zoom-in-95 duration-100">
          <span className="font-semibold text-cyan-300 block mb-0.5">Chú thích dòng lệnh:</span>
          <span className="text-slate-300 leading-normal">{tooltipText}</span>
        </div>
      )}
    </div>
  );
};

// Code Block Component with Copy, Language Badge, and Sample I/O Card
const CodeBlock: React.FC<{
  code: string;
  language: string;
  sampleInput?: string;
  sampleOutput?: string;
}> = ({ code, language, sampleInput, sampleOutput }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCpp = language === 'cpp' || language === 'c++';
  const langLabel = isCpp ? 'C++ 17/20' : language === 'python' || language === 'py' ? 'Python 3' : 'Code';
  const badgeColor = isCpp ? 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/30' : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';

  // Clean inactive or junk lines inside code
  const lines = code.split('\n').filter(l => {
    const t = l.trim();
    if (t.startsWith('}Giải thích từng dòng') || t.startsWith('DÒNG Ý NGHĨA') || t.startsWith('KẾT QUẢ Ý NGHĨA')) {
      return false;
    }
    return true;
  });

  return (
    <div className="my-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-md">
      {/* Code Header Bar */}
      <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
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
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
            (Rê chuột vào dòng có ? để xem chú thích)
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-mono transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60 shadow-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Đã sao chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Sao chép code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with Hover Annotations */}
      <pre className="p-3 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto selection:bg-cyan-500/30">
        <code>
          {lines.map((ln, idx) => (
            <AnnotatedCodeLine
              key={idx}
              line={ln}
              isComment={ln.trim().startsWith('//') || ln.trim().startsWith('#')}
            />
          ))}
        </code>
      </pre>

      {/* Sample Input / Output Card attached to code block */}
      {(sampleInput || sampleOutput) && (
        <div className="p-3 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 text-xs font-mono grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sampleInput && (
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-1 font-semibold">Input mẫu:</span>
              <pre className="bg-white dark:bg-slate-950 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 overflow-x-auto">
                {sampleInput}
              </pre>
            </div>
          )}
          {sampleOutput && (
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 block mb-1 font-semibold">Output kỳ vọng:</span>
              <pre className="bg-white dark:bg-slate-950 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 overflow-x-auto">
                {sampleOutput}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  const elements = useMemo(() => {
    if (!content) return null;

    let processed = content;

    // Clean broken OCR spaced words
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
          <CodeBlock
            key={`${keyPrefix}-code-${resultNodes.length}`}
            code={fullCode}
            language={codeLanguage}
          />
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
            return <div key={key} className="my-2.5 overflow-x-auto py-1 text-slate-900 dark:text-slate-100" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <code key={key} className="block my-1 font-mono text-amber-700 dark:text-amber-300">{rawFormula}</code>;
          }
        }

        // Case 2: Inline math $...$ or \(...\)
        if ((part.startsWith('$') && part.endsWith('$') && part.length > 2) ||
            (part.startsWith('\\(') && part.endsWith('\\)'))) {
          const rawFormula = part.startsWith('$') ? part.slice(1, -1) : part.slice(2, -2);
          try {
            const html = katex.renderToString(rawFormula.trim(), { displayMode: false, throwOnError: false });
            return <span key={key} className="inline-block px-1 font-mono text-slate-900 dark:text-slate-100" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <code key={key} className="text-amber-700 dark:text-amber-300 font-mono px-1">{rawFormula}</code>;
          }
        }

        // Case 3: Natural Big O: O(...) or 10^8
        if (/^O\([^\)]+\)$/.test(part) || /^10\^\d+$/.test(part)) {
          try {
            const latexForm = part.replace('10^8', '10^8').replace('²', '^2').replace('³', '^3');
            const html = katex.renderToString(latexForm, { displayMode: false, throwOnError: false });
            return <span key={key} className="inline-block px-1 font-semibold text-cyan-700 dark:text-cyan-300" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <span key={key} className="font-mono text-cyan-700 dark:text-cyan-300 font-bold px-1">{part}</span>;
          }
        }

        return <span key={key}>{part}</span>;
      });
    };

    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();
      const lineKey = `line-${i}`;

      // Skip lines that are junk explanations from OCR
      if (trimmed.startsWith('DÒNG Ý NGHĨA') || trimmed === 'DÒNG Ý NGHĨA' || trimmed === 'KẾT QUẢ Ý NGHĨA') {
        i++;
        continue;
      }

      // Check if sequence of "Bước X: ..." lines starts here to render as StepRoadmap Mindmap
      if (/^Bước\s+\d+[:\.]/i.test(trimmed)) {
        const stepItems: { step: number; title: string; detail?: string }[] = [];
        let j = i;
        while (j < lines.length) {
          const curTrim = lines[j].trim();
          const stepMatch = curTrim.match(/^Bước\s+(\d+)[:\.]\s*(.*)$/i);
          if (stepMatch) {
            const stepNum = parseInt(stepMatch[1], 10);
            const rawTitle = stepMatch[2].trim();
            let detail: string | undefined = undefined;
            if (j + 1 < lines.length && !lines[j + 1].trim().startsWith('Bước ') && lines[j + 1].trim().length > 0 && !lines[j + 1].trim().startsWith('#')) {
              detail = lines[j + 1].trim();
              j++;
            }
            stepItems.push({ step: stepNum, title: rawTitle || `Bước ${stepNum}`, detail });
            j++;
          } else {
            break;
          }
        }

        if (stepItems.length >= 2) {
          resultNodes.push(
            <StepRoadmap key={`${lineKey}-roadmap`} steps={stepItems} />
          );
          i = j;
          continue;
        }
      }

      // Check explicit markdown code fences ```
      if (trimmed.startsWith('```')) {
        if (insideCode) {
          flushCodeBlock(lineKey);
        } else {
          insideCode = true;
          const lang = trimmed.replace(/^```/, '').trim().toLowerCase();
          codeLanguage = lang || 'cpp';
        }
        i++;
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
        i++;
        continue;
      }

      // If inside code, detect if code has ended
      if (insideCode) {
        // Detect if line starts with closing brace glued to text e.g. "}7. Các dạng..."
        if (/^\}\s*\d+\./.test(trimmed) || /^\}\s*[A-ZÀ-Ỹ]/.test(trimmed)) {
          codeLines.push('}');
          flushCodeBlock(lineKey);
          const remainingText = trimmed.replace(/^\}\s*/, '');
          lines[i] = remainingText;
          continue;
        }

        const isEndOfCode =
          /^\d+\.\s+[A-ZÀ-Ỹ]/.test(trimmed) ||
          trimmed.startsWith('Giải thích') ||
          trimmed.startsWith('Tóm tắt') ||
          trimmed.startsWith('Ví dụ') ||
          trimmed.startsWith('Bước ') ||
          trimmed.startsWith('Bài tập') ||
          trimmed.startsWith('Lỗi ') ||
          trimmed.startsWith('KẾT QUẢ Ý NGHĨA') ||
          trimmed.startsWith('DÒNG Ý NGHĨA') ||
          trimmed.startsWith('DẠNG CHIẾN LƯỢC');

        if (isEndOfCode) {
          flushCodeBlock(lineKey);
        } else {
          codeLines.push(line);
          i++;
          continue;
        }
      }

      // Headings (Avoid treating Python comments like "# Python không có sort" as markdown headings!)
      const isMarkdownHeading =
        (trimmed.startsWith('# ') || trimmed.startsWith('## ') || trimmed.startsWith('### ')) &&
        !trimmed.toLowerCase().includes('python') &&
        !trimmed.toLowerCase().includes('c++') &&
        !trimmed.toLowerCase().includes('sort') &&
        !trimmed.toLowerCase().includes('include') &&
        !trimmed.toLowerCase().includes('import') &&
        !trimmed.toLowerCase().includes('def ') &&
        !trimmed.includes('=') &&
        !trimmed.includes('(') &&
        !trimmed.includes('[');

      if (isMarkdownHeading) {
        const text = trimmed.replace(/^#+\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="mt-7 mb-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2.5">
              <span className="w-1.5 h-4.5 rounded-full bg-cyan-500" />
              <span>{text}</span>
            </h3>
          </div>
        );
        i++;
        continue;
      }

      // Subsections "2.1. ..."
      if (/^\d+\.\d+\.\s+/.test(trimmed)) {
        resultNodes.push(
          <h5 key={lineKey} className="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-300 mt-4 mb-1 pl-1">
            {renderInlineMathAndText(trimmed, lineKey)}
          </h5>
        );
        i++;
        continue;
      }

      // Bullet points •
      if (trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletContent = trimmed.replace(/^[•\-\*]\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="flex items-start gap-2.5 my-1 text-slate-900 dark:text-slate-300 pl-2 text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              {renderInlineMathAndText(bulletContent, lineKey)}
            </div>
          </div>
        );
        i++;
        continue;
      }

      // Sub-bullets ◦
      if (trimmed.startsWith('◦')) {
        const subContent = trimmed.replace(/^◦\s*/, '');
        resultNodes.push(
          <div key={lineKey} className="flex items-start gap-2 my-0.5 text-slate-700 dark:text-slate-400 pl-6 text-xs sm:text-sm">
            <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              {renderInlineMathAndText(subContent, lineKey)}
            </div>
          </div>
        );
        i++;
        continue;
      }

      // Empty space
      if (!trimmed) {
        resultNodes.push(<div key={lineKey} className="h-2" />);
        i++;
        continue;
      }

      // Regular paragraph
      resultNodes.push(
        <p key={lineKey} className="my-1.5 leading-relaxed text-slate-900 dark:text-slate-200 text-xs sm:text-sm">
          {renderInlineMathAndText(line, lineKey)}
        </p>
      );
      i++;
    }

    if (insideCode) {
      flushCodeBlock('final');
    }

    return resultNodes;
  }, [content]);

  return <div className={`select-text space-y-1 text-slate-900 dark:text-slate-100 ${className}`}>{elements}</div>;
};
