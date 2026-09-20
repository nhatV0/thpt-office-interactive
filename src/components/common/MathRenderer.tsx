import React, { useMemo, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Copy, Check, Terminal, Code2, HelpCircle, Columns } from 'lucide-react';
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
const AnnotatedCodeLine: React.FC<{ line: string; isComment: boolean }> = React.memo(({ line, isComment }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const trimmed = line.trim();

  // Find matching tooltip
  let tooltipText = '';
  for (const [key, desc] of Object.entries(CODE_ANNOTATIONS)) {
    if (trimmed.includes(key)) {
      tooltipText = desc;
      break;
    }
  }

  if (!tooltipText && trimmed.includes('//')) {
    const commentPart = trimmed.split('//')[1];
    if (commentPart && commentPart.length > 5) {
      tooltipText = commentPart.trim();
    }
  }

  return (
    <div
      className={`relative group flex items-start justify-between py-0.5 px-2 rounded transition-colors ${
        showTooltip ? 'bg-cyan-500/10 dark:bg-cyan-500/20' : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
      }`}
      onMouseEnter={() => tooltipText && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className={isComment ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-800 dark:text-slate-100'}>
        {line || ' '}
      </span>

      {tooltipText && (
        <span className="opacity-40 group-hover:opacity-100 cursor-help text-cyan-600 dark:text-cyan-400 ml-2 shrink-0">
          <HelpCircle className="w-3.5 h-3.5" />
        </span>
      )}

      {showTooltip && tooltipText && (
        <div className="absolute left-4 -top-8 z-50 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md shadow-xl border border-cyan-500/40 whitespace-nowrap pointer-events-none animate-in fade-in duration-100">
          {tooltipText}
        </div>
      )}
    </div>
  );
});

// Single Code Block Component with Copy & Language Badge
const SingleCodeBlock: React.FC<{
  code: string;
  language: string;
  title?: string;
  sampleInput?: string;
  sampleOutput?: string;
}> = React.memo(({ code, language, title, sampleInput, sampleOutput }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCpp = language === 'cpp' || language === 'c++';
  const langLabel = title || (isCpp ? 'C++ 17/20' : language === 'python' || language === 'py' ? 'Python 3' : 'Code');
  const badgeColor = isCpp
    ? 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/30'
    : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';

  const lines = code.split('\n').filter(l => {
    const t = l.trim();
    if (t.startsWith('}Giải thích từng dòng') || t.startsWith('DÒNG Ý NGHĨA') || t.startsWith('KẾT QUẢ Ý NGHĨA')) {
      return false;
    }
    return true;
  });

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-sm flex flex-col h-full">
      {/* Code Header Bar */}
      <div className="px-3.5 py-2 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 mr-1">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${badgeColor} flex items-center gap-1`}>
            {isCpp ? <Code2 className="w-3 h-3" /> : <Terminal className="w-3 h-3" />}
            <span>{langLabel}</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-[11px] font-mono transition-colors cursor-pointer border border-slate-200 dark:border-slate-700/60 shadow-xs"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Đã chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Chép</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with Hover Annotations */}
      <pre className="p-3 text-xs font-mono leading-relaxed overflow-x-auto selection:bg-cyan-500/30 flex-1">
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
        <div className="p-2.5 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sampleInput && (
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-0.5 font-semibold">Input mẫu:</span>
              <pre className="bg-white dark:bg-slate-950 p-1.5 rounded border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 overflow-x-auto">
                {sampleInput}
              </pre>
            </div>
          )}
          {sampleOutput && (
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 block mb-0.5 font-semibold">Output kỳ vọng:</span>
              <pre className="bg-white dark:bg-slate-950 p-1.5 rounded border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 overflow-x-auto">
                {sampleOutput}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

// Dual Split-Pane Code Comparison Component (C++ on Left, Python on Right)
const DualCodeBlock: React.FC<{
  cppCode: string;
  pyCode: string;
  sampleInput?: string;
  sampleOutput?: string;
}> = React.memo(({ cppCode, pyCode, sampleInput, sampleOutput }) => {
  return (
    <div className="my-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 sm:p-5 shadow-sm space-y-4">
      {/* Top Banner Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Columns className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            So Sánh Song Song: C++ 17/20 & Python 3
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
          Độc lập cấu trúc - đối chiếu trực quan
        </span>
      </div>

      {/* 2-Column Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Left Column: C++ */}
        <div className="flex flex-col space-y-2.5">
          <div className="flex-1">
            <SingleCodeBlock code={cppCode} language="cpp" title="C++ 17/20" sampleInput={sampleInput} sampleOutput={sampleOutput} />
          </div>
        </div>

        {/* Right Column: Python */}
        <div className="flex flex-col space-y-2.5">
          <div className="flex-1">
            <SingleCodeBlock code={pyCode} language="python" title="Python 3" sampleInput={sampleInput} sampleOutput={sampleOutput} />
          </div>
        </div>
      </div>
    </div>
  );
});

// Check if a line marks the end of code block and start of text/heading
const isCodeEndMarker = (line: string): boolean => {
  const t = line.trim();
  if (!t) return false;
  if (/^\d+\.\s+[A-ZÀ-Ỹ]/.test(t)) return true;
  if (/^\d+\.\d+\.\s+[A-ZÀ-Ỹ]/.test(t)) return true;
  if (/^(?:Giải thích|Ví dụ|Quy tắc|Lỗi \d+|Tóm tắt|Ghi chú|Mẹo|Bước \d+|DÒNG Ý NGHĨA|KẾT QUẢ Ý NGHĨA|Lưu ý|Quan trọng|Nhìn vào|GIỚI HẠN|Bảng|CHÚ Ý)/i.test(t)) return true;
  if (t.startsWith('•') || t.startsWith('◦') || t.startsWith('- ') || t.startsWith('* ')) return true;

  // If it is a code comment, keep inside code
  if (t.startsWith('//') || t.startsWith('#') || t.startsWith('/*') || t.startsWith('*')) {
    return false;
  }

  // Strip inline code comment part
  const codePart = t.split('//')[0].split('#')[0].trim();
  if (!codePart) return false;

  // Detect natural Vietnamese prose inside code
  const vnAccents = codePart.match(/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđĐ]/gi);
  if (vnAccents && vnAccents.length >= 2) {
    return true;
  }

  // Vietnamese prose indicators
  const proseStarters = [
    'Hỏi', 'Hỏi:', 'Hỏi :', 'Chú ý', 'Lưu ý', 'Nhận xét', 'Tại sao', 'Như vậy', 'Do đó', 'Khi', 'Nếu', 'Để',
    'Đây là', 'Lúc này', 'Ta có', 'Kết luận', 'Cách này', 'Nhược điểm', 'Ưu điểm', 'Đặc điểm',
    'Ý tưởng', 'Thuật toán', 'Phân tích', 'Cụ thể', 'Tóm lại', 'Bên trong', 'Nhiều', 'Mặc định', 'Bạn dùng',
    'Trong CP', 'Giả sử', 'Một dạng', 'Tương tự', 'Điểm mấu chốt', 'Ngoài ra', 'Cách "trực tiếp":'
  ];
  for (const ps of proseStarters) {
    if (t.startsWith(ps)) {
      return true;
    }
  }

  return false;
};

const MathRendererComponent: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  const elements = useMemo(() => {
    if (!content) return null;

    let processed = content;
    // Clean broken OCR spaced words and numbers
    processed = processed.replace(/M\s*ô\s*ph\s*ỏ\s*ng/g, 'Mô phỏng');
    processed = processed.replace(/C\s*à\s*i\s*đ\s*ặ\s*t/g, 'Cài đặt');
    processed = processed.replace(/N\s*ộ\s*i\s*dung/g, 'Nội dung');
    processed = processed.replace(/Đ\s*ộ\s*ph\s*ứ\s*c\s*t\s*ạ\s*p/g, 'Độ phức tạp');
    processed = processed.replace(/L\s*ậ\s*p\s*tr\s*ì\s*nh/g, 'Lập trình');
    processed = processed.replace(/t\s*h\s*i\s*đ\s*ấ\s*u/g, 'thi đấu');
    processed = processed.replace(/B\s*ư\s*ớ\s*c/g, 'Bước');
    processed = processed.replace(/V\s*í\s*d\s*ụ/g, 'Ví dụ');
    processed = processed.replace(/G\s*i\s*ả\s*i\s*th\s*í\s*ch/g, 'Giải thích');

    // Clean Vietnamese glued OCR tokens (Image #2 fixes)
    processed = processed.replace(/mỗir/g, 'mỗi r');
    processed = processed.replace(/sốlthỏa/g, 'số l thỏa');
    processed = processed.replace(/giả sửa i\s*>0/g, 'giả sử a_i > 0');
    processed = processed.replace(/giả sử a i\s*>0/g, 'giả sử a_i > 0');
    processed = processed.replace(/giả sửa i/g, 'giả sử a_i');
    processed = processed.replace(/1ở mỗi bước/g, '1 ở mỗi bước');
    processed = processed.replace(/đúngKsố lẻ:atMostKOdd/g, 'đúng K số lẻ: atMostKOdd');
    processed = processed.replace(/\(K-1\)vớiatMostKOdd/g, '(K - 1) với atMostKOdd');
    processed = processed.replace(/đúngK/g, 'đúng K');
    processed = processed.replace(/chian/g, 'chia n');
    processed = processed.replace(/vớin/g, 'với n');
    processed = processed.replace(/tổng=K/g, 'tổng = K');
    processed = processed.replace(/tổng≤S/g, 'tổng ≤ S');
    processed = processed.replace(/r−l\+\s*1ở/g, 'r − l + 1 ở');
    const lines = processed.split('\n');
    const resultNodes: React.ReactNode[] = [];

    const renderInlineMathAndText = (text: string, lineKey: string) => {
      // Tokens: Display math, inline math, Big O, math expressions like a_{i,j}, 10^{10}, 10^\d+, italic, backtick
      const tokenRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^\$\n]+?\$|\\\([^\)]+?\\\)|O\([^\)]+\)|10\^\{\d+\}|10\^\d+|[a-zA-Z]_\{\s*[^}]+\s*\}|[a-zA-Z]_[0-9a-zA-Z]|\*[^\*\n]+?\*|`[^`\n]+?`)/g;
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

        // Case 3: Natural Big O, exponents (10^8, 10^{10}) or sub-indices (a_{i,j}, x_i)
        if (/^O\([^\)]+\)$/.test(part) || /^10\^(\{\d+\}|\d+)$/.test(part) || /^[a-zA-Z]_(\{[^}]+\}|[0-9a-zA-Z])$/.test(part)) {
          try {
            const latexForm = part.replace('²', '^2').replace('³', '^3');
            const html = katex.renderToString(latexForm, { displayMode: false, throwOnError: false });
            return <span key={key} className="inline-block px-0.5 font-semibold text-slate-900 dark:text-slate-100" dangerouslySetInnerHTML={{ __html: html }} />;
          } catch {
            return <span key={key} className="font-mono text-cyan-700 dark:text-cyan-300 font-bold px-0.5">{part}</span>;
          }
        }
        // Case 4: Italic code / keyword *keyword* -> render as italicized code badge
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          const raw = part.slice(1, -1);
          return (
            <code
              key={key}
              className="font-mono italic font-semibold px-1 py-0.5 mx-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700 text-[11px] sm:text-xs"
            >
              {raw}
            </code>
          );
        }

        // Case 5: Backtick code `code`
        if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
          const raw = part.slice(1, -1);
          return (
            <code
              key={key}
              className="font-mono italic px-1 py-0.5 mx-0.5 rounded bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 text-[11px] sm:text-xs"
            >
              {raw}
            </code>
          );
        }

        return <span key={key}>{part}</span>;
      });
    };

    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();
      const lineKey = `line-${i}`;

      // Skip lines that are junk OCR headers
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
        const lang = trimmed.replace(/^```/, '').trim().toLowerCase() || 'cpp';
        const fenceLines: string[] = [];
        let j = i + 1;
        while (j < lines.length && !lines[j].trim().startsWith('```')) {
          fenceLines.push(lines[j]);
          j++;
        }
        resultNodes.push(
          <div key={`${lineKey}-fence`} className="my-4">
            <SingleCodeBlock code={fenceLines.join('\n').trim()} language={lang} />
          </div>
        );
        i = j + 1;
        continue;
      }

      // DETECT C++ HEADER OR DUAL C++ / PYTHON CODE BLOCKS
      const isCppHeader =
        trimmed === 'C++' ||
        trimmed === 'C++:' ||
        trimmed === 'Code C++' ||
        trimmed === 'Code C++:' ||
        trimmed === '3.1. C++' ||
        trimmed === '• 3.1. C++' ||
        trimmed === 'C++ (iterative)' ||
        trimmed === 'C++ (recursive)' ||
        trimmed.startsWith('Code mẫu C++');

      if (isCppHeader) {
        // Collect C++ lines
        const cppLines: string[] = [];
        let j = i + 1;
        while (j < lines.length) {
          const cur = lines[j].trim();
          // Check if Python header appears
          const isPyHeader =
            cur === 'Python' ||
            cur === 'Python:' ||
            cur === 'Code Python' ||
            cur === 'Code Python:' ||
            cur === '3.2. Python' ||
            cur === '• 3.2. Python' ||
            cur === 'Python Template' ||
            cur.startsWith('Ghi chú Python:') ||
            cur.startsWith('Ghi chú cho Python:');

          if (isPyHeader) {
            break;
          }
          if (isCodeEndMarker(cur) || cur === 'C++' || cur.startsWith('Code C++')) {
            break;
          }
          // Skip standalone OCR page numbers like '1', '2', '3'
          if (!/^\s*\d{1,2}\s*$/.test(lines[j])) {
            cppLines.push(lines[j]);
          }
          j++;
        }

        // Check if Python follows immediately
        if (j < lines.length && (
          lines[j].trim() === 'Python' ||
          lines[j].trim() === 'Python:' ||
          lines[j].trim() === 'Code Python' ||
          lines[j].trim() === 'Code Python:' ||
          lines[j].trim() === '3.2. Python' ||
          lines[j].trim() === '• 3.2. Python' ||
          lines[j].trim() === 'Python Template' ||
          lines[j].trim().startsWith('Ghi chú Python:') ||
          lines[j].trim().startsWith('Ghi chú cho Python:')
        )) {
          const pyLines: string[] = [];
          let k = j + 1;
          while (k < lines.length) {
            const curPy = lines[k].trim();
            if (isCodeEndMarker(curPy) || curPy === 'C++' || curPy === 'Python' || curPy.startsWith('Code ')) {
              break;
            }
            if (!/^\s*\d{1,2}\s*$/.test(lines[k])) {
              pyLines.push(lines[k]);
            }
            k++;
          }

          // Check if there is an explanation section right after
          let expCpp: string | undefined = undefined;
          let expPy: string | undefined = undefined;
          let nextIdx = k;

          if (nextIdx < lines.length && lines[nextIdx].trim().startsWith('Giải thích:')) {
            // Check next lines for bullet points like "• C++:..." and "• Python:..."
            let expLinesCount = 1;
            for (let e = nextIdx + 1; e < Math.min(lines.length, nextIdx + 8); e++) {
              const eline = lines[e].trim();
              if (eline.startsWith('• C++:') || eline.startsWith('• C++ :')) {
                expCpp = eline.replace(/^•\s*C\+\+\s*:\s*/, '');
                expLinesCount++;
              } else if (eline.startsWith('• Python:') || eline.startsWith('• Python :')) {
                expPy = eline.replace(/^•\s*Python\s*:\s*/, '');
                expLinesCount++;
              } else if (/^\d+\.\s+[A-ZÀ-Ỹ]/.test(eline)) {
                break;
              }
            }
            if (expCpp || expPy) {
              nextIdx += expLinesCount;
            }
          }

          resultNodes.push(
            <DualCodeBlock
              key={`${lineKey}-dual`}
              cppCode={cppLines.join('\n').trim()}
              pyCode={pyLines.join('\n').trim()}
            />
          );
          i = nextIdx;
          continue;
        } else {
          // Standalone C++ block
          resultNodes.push(
            <div key={`${lineKey}-cpp`} className="my-4">
              <SingleCodeBlock code={cppLines.join('\n').trim()} language="cpp" title="C++ 17/20" />
            </div>
          );
          i = j;
          continue;
        }
      }

      // Standalone Python Header
      const isStandalonePyHeader =
        trimmed === 'Python' ||
        trimmed === 'Python:' ||
        trimmed === 'Code Python' ||
        trimmed === 'Code Python:' ||
        trimmed === '4. Class trong Python' ||
        trimmed === '3.2. Python' ||
        trimmed === '• 3.2. Python';

      if (isStandalonePyHeader) {
        const pyLines: string[] = [];
        let j = i + 1;
        while (j < lines.length) {
          const cur = lines[j].trim();
          if (isCodeEndMarker(cur) || cur === 'C++' || cur === 'Python' || cur.startsWith('Code ')) {
            break;
          }
          if (!/^\s*\d{1,2}\s*$/.test(lines[j])) {
            pyLines.push(lines[j]);
          }
          j++;
        }
        resultNodes.push(
          <div key={`${lineKey}-py`} className="my-4">
            <SingleCodeBlock code={pyLines.join('\n').trim()} language="python" title="Python 3" />
          </div>
        );
        i = j;
        continue;
      }

      // Detect start of code by syntax if without explicit header
      const isCppSyntaxStart =
        trimmed.startsWith('#include <') ||
        trimmed.startsWith('using namespace std;') ||
        trimmed.startsWith('int main()') ||
        trimmed.startsWith('void solve()');

      if (isCppSyntaxStart) {
        const codeLines: string[] = [];
        let j = i;
        while (j < lines.length) {
          const cur = lines[j].trim();
          if (isCodeEndMarker(cur) || cur === 'Python' || cur === 'C++') {
            break;
          }
          codeLines.push(lines[j]);
          j++;
        }
        resultNodes.push(
          <div key={`${lineKey}-cpp-syntax`} className="my-4">
            <SingleCodeBlock code={codeLines.join('\n').trim()} language="cpp" />
          </div>
        );
        i = j;
        continue;
      }

      // Problem Section Headers: Input, Output, Scoring, Constraints, Subtask
      const isProblemSectionHeader =
        /^(Input|Output|Scoring|Subtask|Constraints|Ràng\s*buộc|Giới\s*hạn)$/i.test(trimmed);

      if (isProblemSectionHeader) {
        resultNodes.push(
          <div key={lineKey} className="mt-5 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{trimmed}</span>
            </h4>
          </div>
        );
        i++;
        continue;
      }

      // Headings
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

      // Section Titles "1. ...", "2. ..."
      if (/^\d+\.\s+[A-ZÀ-Ỹ]/.test(trimmed)) {
        resultNodes.push(
          <div key={lineKey} className="mt-6 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>{renderInlineMathAndText(trimmed, lineKey)}</span>
            </h4>
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

    return resultNodes;
  }, [content]);

  return <div className={`select-text space-y-1 text-slate-900 dark:text-slate-100 ${className}`}>{elements}</div>;
};

export const MathRenderer = React.memo(MathRendererComponent);
