import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import type { ModuleType, SimulatorTask } from '../../types/curriculum';
import { VirtualRibbon } from './VirtualRibbon';
import { VirtualCanvas } from './VirtualCanvas';
import { CheckCircle2, AlertCircle, HelpCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface VirtualOfficeSimulatorProps {
  moduleType: ModuleType;
  tasks: SimulatorTask[];
  onAllTasksCompleted?: () => void;
}

export const VirtualOfficeSimulator: React.FC<VirtualOfficeSimulatorProps> = ({
  moduleType,
  tasks,
  onAllTasksCompleted
}) => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [taskSuccess, setTaskSuccess] = useState<boolean>(false);

  // Word Document Simulator State
  const [wordState, setWordState] = useState({
    fontFamily: 'Calibri',
    isBold: false,
    isItalic: false,
    align: 'left' as 'left' | 'center' | 'right' | 'justify',
    margins: 'normal' as 'normal' | 'narrow' | 'wide',
    orientation: 'portrait' as 'portrait' | 'landscape',
    paperSize: 'A4' as 'A4' | 'Letter',
    hasTable: false,
    tableMerged: false,
    hasHeaderRepeat: false,
    hasSmartArt: false,
    wrapStyle: 'inline',
    hasCaption: false,
    hasPageNumber: false,
    differentFirstPage: false,
    headingStyle: 'normal',
    hasTableOfContents: false,
    tocUpdated: false
  });

  // Excel Spreadsheet Simulator State
  const [excelState, setExcelState] = useState({
    selectedCell: 'B2',
    formulaValue: '',
    cellValues: {} as Record<string, string>,
    commaFormatted: false,
    mergedHeader: false,
    showFormulas: false,
    hasFilter: false,
    isSortedAsc: false,
    hasCondFormat: false,
    chartType: 'none' as 'none' | 'column' | 'pie',
    hasDataLabels: false
  });

  // PowerPoint Presentation Simulator State
  const [ppState, setPpState] = useState({
    currentSlideIndex: 0,
    slides: [
      {
        id: 1,
        title: 'BÁO CÁO NGHIÊN CỨU KHOA HỌC THPT',
        subtitle: 'Chuyên đề: Ứng dụng Công nghệ Thông tin trong đời sống',
        layout: 'title' as 'title' | 'two-content',
        hasSmartArt: false,
        smartArtColor: 'default',
        transition: 'None',
        animation: 'None',
        distributed: false,
        hasHyperlink: false
      }
    ],
    isSlideMasterOpen: false,
    isAnimationPaneOpen: false,
    isPresenterMode: false,
    isSlideShowRunning: false
  });

  const activeTask = tasks[currentTaskIndex];

  // Reset simulator states when tasks list changes
  useEffect(() => {
    setCurrentTaskIndex(0);
    setShowHint(false);
    setTaskSuccess(false);
  }, [tasks]);

  const triggerSuccess = () => {
    setTaskSuccess(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // ignore
    }
  };

  const handleNextTask = () => {
    setTaskSuccess(false);
    setShowHint(false);
    if (currentTaskIndex + 1 < tasks.length) {
      setCurrentTaskIndex(idx => idx + 1);
    } else {
      onAllTasksCompleted?.();
    }
  };

  const handleRibbonAction = (actionKey: string) => {
    // Apply state updates depending on action
    switch (actionKey) {
      // Word Actions
      case 'word-orientation-landscape':
        setWordState(s => ({ ...s, orientation: 'landscape' }));
        break;
      case 'word-size-a4':
        setWordState(s => ({ ...s, paperSize: 'A4' }));
        break;
      case 'word-margins-normal':
        setWordState(s => ({ ...s, margins: 'normal' }));
        break;
      case 'word-font-bold':
        setWordState(s => ({ ...s, isBold: !s.isBold }));
        break;
      case 'word-align-justify':
        setWordState(s => ({ ...s, align: 'justify' }));
        break;
      case 'word-font-times':
        setWordState(s => ({ ...s, fontFamily: 'Times New Roman' }));
        break;
      case 'word-insert-table':
        setWordState(s => ({ ...s, hasTable: true }));
        break;
      case 'word-merge-cells':
        setWordState(s => ({ ...s, tableMerged: true }));
        break;
      case 'word-repeat-header':
        setWordState(s => ({ ...s, hasHeaderRepeat: true }));
        break;
      case 'word-insert-smartart':
        setWordState(s => ({ ...s, hasSmartArt: true }));
        break;
      case 'word-wrap-square':
        setWordState(s => ({ ...s, wrapStyle: 'square' }));
        break;
      case 'word-insert-caption':
        setWordState(s => ({ ...s, hasCaption: true }));
        break;
      case 'word-page-number-bottom':
        setWordState(s => ({ ...s, hasPageNumber: true }));
        break;
      case 'word-different-first-page':
        setWordState(s => ({ ...s, differentFirstPage: true }));
        break;
      case 'word-unlink-previous':
        break;
      case 'word-style-heading1':
        setWordState(s => ({ ...s, headingStyle: 'heading1' }));
        break;
      case 'word-insert-toc':
        setWordState(s => ({ ...s, hasTableOfContents: true }));
        break;
      case 'word-update-toc':
        setWordState(s => ({ ...s, tocUpdated: true }));
        break;

      // Excel Actions
      case 'excel-format-comma':
        setExcelState(s => ({ ...s, commaFormatted: true }));
        break;
      case 'excel-merge-center':
        setExcelState(s => ({ ...s, mergedHeader: true }));
        break;
      case 'excel-show-formulas':
        setExcelState(s => ({ ...s, showFormulas: !s.showFormulas }));
        break;
      case 'excel-filter-toggle':
        setExcelState(s => ({ ...s, hasFilter: !s.hasFilter }));
        break;
      case 'excel-sort-asc':
        setExcelState(s => ({ ...s, isSortedAsc: true }));
        break;
      case 'excel-cond-format-lessthan':
        setExcelState(s => ({ ...s, hasCondFormat: true }));
        break;
      case 'excel-insert-chart-column':
        setExcelState(s => ({ ...s, chartType: 'column' }));
        break;
      case 'excel-insert-chart-pie':
        setExcelState(s => ({ ...s, chartType: 'pie' }));
        break;
      case 'excel-chart-datalabels':
        setExcelState(s => ({ ...s, hasDataLabels: true }));
        break;

      // PowerPoint Actions
      case 'pp-new-slide':
        setPpState(s => ({
          ...s,
          slides: [
            ...s.slides,
            {
              id: s.slides.length + 1,
              title: 'Slide Mới ' + (s.slides.length + 1),
              subtitle: 'Nội dung chi tiết của phần học',
              layout: 'two-content',
              hasSmartArt: false,
              smartArtColor: 'default',
              transition: 'None',
              animation: 'None',
              distributed: false,
              hasHyperlink: false
            }
          ],
          currentSlideIndex: s.slides.length
        }));
        break;
      case 'pp-open-slidemaster':
        setPpState(s => ({ ...s, isSlideMasterOpen: !s.isSlideMasterOpen }));
        break;
      case 'pp-change-layout-twocontent':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].layout = 'two-content';
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-convert-smartart':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].hasSmartArt = true;
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-change-smartart-colors':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].smartArtColor = 'colorful';
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-distribute-horizontally':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].distributed = true;
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-trans-morph':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].transition = 'Morph';
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-trans-apply-all':
        setPpState(s => ({
          ...s,
          slides: s.slides.map(sl => ({ ...sl, transition: 'Morph' }))
        }));
        break;
      case 'pp-trans-duration':
        break;
      case 'pp-anim-fade':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].animation = 'Fade';
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-open-animation-pane':
        setPpState(s => ({ ...s, isAnimationPaneOpen: !s.isAnimationPaneOpen }));
        break;
      case 'pp-anim-after-previous':
        break;
      case 'pp-insert-hyperlink':
        setPpState(s => {
          const updated = [...s.slides];
          if (updated[s.currentSlideIndex]) {
            updated[s.currentSlideIndex].hasHyperlink = true;
          }
          return { ...s, slides: updated };
        });
        break;
      case 'pp-enable-presenter-view':
        setPpState(s => ({ ...s, isPresenterMode: true }));
        break;
      case 'pp-show-from-current':
        setPpState(s => ({ ...s, isSlideShowRunning: true }));
        break;
      default:
        break;
    }

    // Check task validation
    if (activeTask && activeTask.actionKey === actionKey) {
      triggerSuccess();
    }
  };
  const handleCellFormulaSubmit = () => {
    if (!activeTask || !activeTask.expectedValue) return;

    const normalize = (val: string) =>
      val
        .replace(/['']/g, '"')
        .replace(/\s+/g, '')
        .toUpperCase();

    const normalizedInput = normalize(excelState.formulaValue);
    const normalizedExpected = normalize(activeTask.expectedValue);

    if (normalizedInput === normalizedExpected) {
      setExcelState(s => ({
        ...s,
        cellValues: {
          ...s.cellValues,
          [activeTask.targetRef || s.selectedCell]: excelState.formulaValue
        }
      }));
      triggerSuccess();
    } else {
      alert(`Công thức chưa khớp. Gợi ý: ${activeTask.expectedValue}`);
    }
  };

  const handleResetSimulator = () => {
    setTaskSuccess(false);
    setShowHint(false);
    setWordState({
      fontFamily: 'Calibri',
      isBold: false,
      isItalic: false,
      align: 'left',
      margins: 'normal',
      orientation: 'portrait',
      paperSize: 'A4',
      hasTable: false,
      tableMerged: false,
      hasHeaderRepeat: false,
      hasSmartArt: false,
      wrapStyle: 'inline',
      hasCaption: false,
      hasPageNumber: false,
      differentFirstPage: false,
      headingStyle: 'normal',
      hasTableOfContents: false,
      tocUpdated: false
    });
    setExcelState({
      selectedCell: 'B2',
      formulaValue: '',
      cellValues: {},
      commaFormatted: false,
      mergedHeader: false,
      showFormulas: false,
      hasFilter: false,
      isSortedAsc: false,
      hasCondFormat: false,
      chartType: 'none',
      hasDataLabels: false
    });
    setPpState({
      currentSlideIndex: 0,
      slides: [
        {
          id: 1,
          title: 'BÁO CÁO NGHIÊN CỨU KHOA HỌC THPT',
          subtitle: 'Chuyên đề: Ứng dụng Công nghệ Thông tin trong đời sống',
          layout: 'title',
          hasSmartArt: false,
          smartArtColor: 'default',
          transition: 'None',
          animation: 'None',
          distributed: false,
          hasHyperlink: false
        }
      ],
      isSlideMasterOpen: false,
      isAnimationPaneOpen: false,
      isPresenterMode: false,
      isSlideShowRunning: false
    });
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Task Instruction Bar */}
      <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-xs shrink-0">
            {currentTaskIndex + 1}/{tasks.length}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Nhiệm Vụ Thực Hành
              </span>
              {taskSuccess && (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Hoàn thành
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
              {activeTask?.instruction}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý'}</span>
          </button>
          <button
            type="button"
            onClick={handleResetSimulator}
            title="Làm lại từ đầu"
            className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {taskSuccess && (
            <button
              type="button"
              onClick={handleNextTask}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold cursor-pointer shadow transition-all animate-bounce"
            >
              <span>
                {currentTaskIndex + 1 < tasks.length ? 'Nhiệm vụ tiếp theo' : 'Hoàn thành bài tập'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Hint Alert Bar */}
      {showHint && activeTask && (
        <div className="px-4 py-2 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{activeTask.hint}</span>
        </div>
      )}

      {/* Virtual Office Ribbon Component */}
      <VirtualRibbon
        moduleType={moduleType}
        onAction={handleRibbonAction}
        hintActionKey={showHint ? activeTask?.actionKey : undefined}
      />

      {/* Virtual Office Canvas Component */}
      <VirtualCanvas
        moduleType={moduleType}
        wordState={wordState}
        excelState={excelState}
        ppState={ppState}
        onCellClick={cellRef => {
          setExcelState(s => ({
            ...s,
            selectedCell: cellRef,
            formulaValue: s.cellValues[cellRef] || ''
          }));
        }}
        onFormulaChange={val => setExcelState(s => ({ ...s, formulaValue: val }))}
        onFormulaSubmit={handleCellFormulaSubmit}
        onSelectSlide={idx => setPpState(s => ({ ...s, currentSlideIndex: idx }))}
      />
    </div>
  );
};
