import React, { useState, useEffect } from 'react';
import type { ModuleType } from '../../types/curriculum';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Table as TableIcon,
  Image as ImageIcon,
  BookOpen,
  FileText,
  Percent,
  Sparkles
} from 'lucide-react';

interface VirtualRibbonProps {
  moduleType: ModuleType;
  onAction: (actionKey: string) => void;
  hintActionKey?: string;
}
export const VirtualRibbon: React.FC<VirtualRibbonProps> = ({
  moduleType,
  onAction,
  hintActionKey
}) => {
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    setActiveTab('home');
  }, [moduleType]);

  const tabsByModule: Record<ModuleType, { id: string; label: string }[]> = {
    word: [
      { id: 'file', label: 'File' },
      { id: 'home', label: 'Home' },
      { id: 'insert', label: 'Insert' },
      { id: 'layout', label: 'Layout' },
      { id: 'references', label: 'References' },
      { id: 'view', label: 'View' }
    ],
    excel: [
      { id: 'home', label: 'Home' },
      { id: 'insert', label: 'Insert' },
      { id: 'formulas', label: 'Formulas' },
      { id: 'data', label: 'Data' }
    ],
    powerpoint: [
      { id: 'home', label: 'Home' },
      { id: 'insert', label: 'Insert' },
      { id: 'transitions', label: 'Transitions' },
      { id: 'animations', label: 'Animations' },
      { id: 'slideshow', label: 'Slide Show' },
      { id: 'view', label: 'View' }
    ]
  };

  const tabs = tabsByModule[moduleType] || tabsByModule.word;

  const isHinted = (key: string) => hintActionKey === key;

  const renderWordControls = () => {
    switch (activeTab) {
      case 'file':
        return (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Backstage</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('word-backstage-open')}
                  className={`px-2.5 py-1 text-xs font-semibold border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-backstage-open') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Open Document
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-save-doc')}
                  className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-save-doc') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Save As (.docx)
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-document-properties')}
                  className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-document-properties') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Document Properties
                </button>
              </div>
            </div>
          </div>
        );

      case 'home':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            {/* Font group */}
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Font</span>
              <div className="flex items-center gap-1">
                <select
                  aria-label="Phông chữ"
                  className={`text-xs px-2 py-1 bg-white dark:bg-slate-800 border rounded font-medium ${
                    isHinted('word-font-times') ? 'ring-2 ring-sky-500 animate-pulse bg-sky-50' : 'border-slate-300 dark:border-slate-700'
                  }`}
                  defaultValue="Calibri"
                  onChange={e => {
                    if (e.target.value === 'Times New Roman') {
                      onAction('word-font-times');
                    }
                  }}
                >
                  <option value="Calibri">Calibri</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Arial">Arial</option>
                </select>
                <button
                  type="button"
                  title="In đậm (Ctrl+B)"
                  onClick={() => onAction('word-font-bold')}
                  className={`p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 ${
                    isHinted('word-font-bold') ? 'ring-2 ring-sky-500 bg-sky-100 dark:bg-sky-950 animate-bounce' : ''
                  }`}
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  title="In nghiêng (Ctrl+I)"
                  onClick={() => onAction('word-font-italic')}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  title="Gạch chân (Ctrl+U)"
                  onClick={() => onAction('word-font-underline')}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <Underline className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Paragraph group */}
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Paragraph</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  title="Căn trái (Ctrl+L)"
                  onClick={() => onAction('word-align-left')}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  title="Căn giữa (Ctrl+E)"
                  onClick={() => onAction('word-align-center')}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <AlignCenter className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  title="Căn phải (Ctrl+R)"
                  onClick={() => onAction('word-align-right')}
                  className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <AlignRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  title="Căn đều hai bên (Ctrl+J)"
                  onClick={() => onAction('word-align-justify')}
                  className={`p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 ${
                    isHinted('word-align-justify') ? 'ring-2 ring-sky-500 bg-sky-100 dark:bg-sky-950 animate-bounce' : ''
                  }`}
                >
                  <AlignJustify className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
                <button
                  type="button"
                  title="Show/Hide ¶ (Ctrl+*)"
                  onClick={() => onAction('word-show-hide-marks')}
                  className={`p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 ${
                    isHinted('word-show-hide-marks') ? 'ring-2 ring-sky-500 bg-sky-100 dark:bg-sky-950 animate-bounce' : ''
                  }`}
                >
                  <span className="font-mono text-xs font-bold">¶</span>
                </button>
                <button
                  type="button"
                  title="Find & Replace (Ctrl+H)"
                  onClick={() => onAction('word-find-replace')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-find-replace') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Find & Replace
                </button>

            {/* Styles group */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Styles</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => onAction('word-style-normal')}
                  className="px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 hover:border-sky-500"
                >
                  Normal
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-style-heading1')}
                  className={`px-2 py-1 text-xs font-bold border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-style-heading1') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-pulse' : 'hover:border-sky-500'
                  }`}
                >
                  Heading 1
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-style-heading2')}
                  className="px-2 py-1 text-xs font-semibold border rounded bg-white dark:bg-slate-800 hover:border-sky-500"
                >
                  Heading 2
                </button>
              </div>
            </div>
          </div>
        );

      case 'insert':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Tables</span>
              <button
                type="button"
                onClick={() => onAction('word-insert-table')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('word-insert-table') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Table (3x3)</span>
              </button>
            </div>

            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Illustrations</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('word-insert-smartart')}
                  className={`flex items-center gap-1 px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-insert-smartart') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SmartArt</span>
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-wrap-square')}
                  className={`flex items-center gap-1 px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-wrap-square') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Wrap Square</span>
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-wrap-tight')}
                  className={`flex items-center gap-1 px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-wrap-tight') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
                  <span>Wrap Tight</span>
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-insert-hyperlink')}
                  className={`flex items-center gap-1 px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-insert-hyperlink') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <span>Link (Ctrl+K)</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Header & Footer</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('word-page-number-bottom')}
                  className={`flex items-center gap-1 px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-page-number-bottom') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Page Number Bottom</span>
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-different-first-page')}
                  className={`flex items-center gap-1 px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-different-first-page') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <span>Different First Page</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'layout':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Page Setup</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('word-margins-normal')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-margins-normal') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Margins: Normal
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-orientation-landscape')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-orientation-landscape') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Orientation: Landscape
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-size-a4')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-size-a4') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Size: A4
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-break-continuous')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-break-continuous') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Continuous Break
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Table Layout</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('word-merge-cells')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-merge-cells') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Merge Cells
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-repeat-header')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-repeat-header') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Repeat Header Rows
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-convert-table-text')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-convert-table-text') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Convert to Text (Tabs)
                </button>
              </div>
            </div>
          </div>
        );

      case 'references':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Table of Contents</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('word-insert-toc')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-insert-toc') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Automatic Table 1</span>
                </button>
                <button
                  type="button"
                  onClick={() => onAction('word-update-toc')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-update-toc') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Update Entire Table
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Captions</span>
              <button
                type="button"
                onClick={() => onAction('word-insert-caption')}
                className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('word-insert-caption') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Insert Caption
              </button>
            </div>
          </div>
        );

      case 'view':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Show</span>
              <div className="flex items-center gap-3 text-xs">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" defaultChecked />
                  <span>Ruler</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" />
                  <span>Gridlines</span>
                </label>
                <button
                  type="button"
                  onClick={() => onAction('word-split-window')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-split-window') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Split Window
                </button>
                <button
                  type="button"
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('word-unlink-previous') ? 'ring-2 ring-sky-500 bg-sky-100 text-sky-700 animate-bounce' : ''
                  }`}
                >
                  Unlink Previous
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderExcelControls = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Alignment</span>
              <button
                type="button"
                onClick={() => onAction('excel-merge-center')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('excel-merge-center') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Merge & Center
              </button>
            </div>

            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Number</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('excel-format-comma')}
                  className={`px-2 py-1 text-xs font-bold border rounded bg-white dark:bg-slate-800 ${
                    isHinted('excel-format-comma') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  , Comma Style
                </button>
                <button
                  type="button"
                  onClick={() => onAction('excel-format-percent')}
                  className="p-1 text-xs border rounded bg-white dark:bg-slate-800 hover:bg-slate-100"
                >
                  <Percent className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Styles</span>
              <button
                type="button"
                onClick={() => onAction('excel-cond-format-lessthan')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('excel-cond-format-lessthan') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Conditional Formatting &lt; 5
              </button>
            </div>
          </div>
        );

      case 'insert':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Charts</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('excel-insert-chart-column')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('excel-insert-chart-column') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Clustered Column
                </button>
                <button
                  type="button"
                  onClick={() => onAction('excel-insert-chart-pie')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('excel-insert-chart-pie') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Pie Chart
                </button>
                <button
                  type="button"
                  onClick={() => onAction('excel-chart-datalabels')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('excel-chart-datalabels') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Add Data Labels
                </button>
              </div>
            </div>
          </div>
        );

      case 'formulas':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Formula Auditing</span>
              <button
                type="button"
                onClick={() => onAction('excel-show-formulas')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('excel-show-formulas') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Show Formulas (Ctrl+~)
              </button>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Sort & Filter</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('excel-filter-toggle')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('excel-filter-toggle') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Filter (Ctrl+Shift+L)
                </button>
                <button
                  type="button"
                  onClick={() => onAction('excel-sort-asc')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('excel-sort-asc') ? 'ring-2 ring-emerald-500 bg-emerald-100 text-emerald-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Sort A to Z
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderPowerPointControls = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Slides</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('pp-new-slide')}
                  className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-new-slide') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  New Slide (Ctrl+M)
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-change-layout-twocontent')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-change-layout-twocontent') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Layout: Two Content
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Paragraph & Convert</span>
              <button
                type="button"
                onClick={() => onAction('pp-convert-smartart')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('pp-convert-smartart') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Convert to SmartArt
              </button>
            </div>
          </div>
        );

      case 'insert':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Links</span>
              <button
                type="button"
                onClick={() => onAction('pp-insert-hyperlink')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('pp-insert-hyperlink') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Insert Link (Ctrl+K)
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Illustrations</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('pp-change-smartart-colors')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-change-smartart-colors') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Change Colors
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-distribute-horizontally')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-distribute-horizontally') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Distribute Horizontally
                </button>
              </div>
            </div>
          </div>
        );

      case 'transitions':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Transition to This Slide</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('pp-trans-morph')}
                  className={`px-2 py-1 text-xs font-semibold border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-trans-morph') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Morph
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-trans-fade')}
                  className="px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 hover:bg-slate-100"
                >
                  Fade
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-trans-push')}
                  className="px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 hover:bg-slate-100"
                >
                  Push
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Timing</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('pp-trans-duration')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-trans-duration') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Duration: 01.50
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-trans-apply-all')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-trans-apply-all') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Apply to All
                </button>
              </div>
            </div>
          </div>
        );

      case 'animations':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Animation</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('pp-anim-fade')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 text-emerald-700 font-semibold ${
                    isHinted('pp-anim-fade') ? 'ring-2 ring-rose-500 bg-rose-100 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  Fade (Entrance)
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-anim-flyin')}
                  className="px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 text-emerald-700 hover:bg-slate-100"
                >
                  Fly In
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Advanced Animation</span>
              <button
                type="button"
                onClick={() => onAction('pp-open-animation-pane')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('pp-open-animation-pane') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Animation Pane
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Timing</span>
              <button
                type="button"
                onClick={() => onAction('pp-anim-after-previous')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('pp-anim-after-previous') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Start: After Previous
              </button>
            </div>
          </div>
        );

      case 'slideshow':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1 border-r border-slate-300 dark:border-slate-700 pr-3">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Start Slide Show</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onAction('pp-show-from-beginning')}
                  className="px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 hover:bg-slate-100"
                >
                  From Beginning (F5)
                </button>
                <button
                  type="button"
                  onClick={() => onAction('pp-show-from-current')}
                  className={`px-2 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                    isHinted('pp-show-from-current') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                  }`}
                >
                  From Current (Shift+F5)
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Monitors</span>
              <button
                type="button"
                onClick={() => onAction('pp-enable-presenter-view')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('pp-enable-presenter-view') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Use Presenter View
              </button>
            </div>
          </div>
        );

      case 'view':
        return (
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Master Views</span>
              <button
                type="button"
                onClick={() => onAction('pp-open-slidemaster')}
                className={`px-2.5 py-1 text-xs border rounded bg-white dark:bg-slate-800 ${
                  isHinted('pp-open-slidemaster') ? 'ring-2 ring-rose-500 bg-rose-100 text-rose-800 animate-bounce' : 'hover:bg-slate-100'
                }`}
              >
                Slide Master
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 select-none">
      {/* Ribbon Tabs bar */}
      <div className="flex items-center px-3 border-b border-slate-200 dark:border-slate-800 bg-slate-200/70 dark:bg-slate-950/70 gap-1 overflow-x-auto">
        <span className="text-xs font-bold uppercase tracking-wider px-2 py-1.5 text-slate-500 dark:text-slate-400">
          Ribbon
        </span>
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 text-xs font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? moduleType === 'word'
                  ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-slate-900'
                  : moduleType === 'excel'
                  ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-900'
                  : 'border-rose-600 text-rose-700 dark:text-rose-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ribbon Command Strip */}
      <div className="p-2 min-h-[58px] flex items-center overflow-x-auto bg-slate-50 dark:bg-slate-900">
        {moduleType === 'word' && renderWordControls()}
        {moduleType === 'excel' && renderExcelControls()}
        {moduleType === 'powerpoint' && renderPowerPointControls()}
      </div>
    </div>
  );
};
