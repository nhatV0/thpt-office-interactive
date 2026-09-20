import React, { useState, useMemo, useEffect, useDeferredValue } from 'react';
import {
  Code2,
  BookOpen,
  Download,
  CheckCircle2,
  XCircle,
  Search,
  Flame,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Award,
  Sparkles,
  Layers,
  FileText,
  AlertCircle,
  Play,
  Copy,
  Check,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { getCPCourseData } from '../../data/cpCoursesData';
import type { CPLesson, CPProblem } from '../../types/cpCourse';
import { useLearning } from '../../context/LearningContext';
import { MathRenderer } from '../common/MathRenderer';
import { triggerConfetti, playRewardChime } from '../../utils/celebration';

interface CompetitiveProgrammingViewProps {
  courseId: 'cp-basic' | 'cp-bronze' | 'cp-silver';
  onBackToCourses: () => void;
  initialLessonIndex?: number;
  initialTab?: 'theory' | 'practice' | 'summary';
  initialProblemId?: string;
  onStateChange?: (state: { lessonIndex: number; tab: 'theory' | 'practice' | 'summary'; problemId?: string }) => void;
}
export const CompetitiveProgrammingView: React.FC<CompetitiveProgrammingViewProps> = ({
  courseId,
  onBackToCourses,
  initialLessonIndex,
  initialTab,
  initialProblemId,
  onStateChange
}) => {
  const courseData = getCPCourseData(courseId);
  const { addXP } = useLearning();

  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(initialLessonIndex ?? 0);
  // 3-step navigation inspired by Word/Excel/PowerPoint: theory -> practice -> summary
  const [currentTab, setCurrentTab] = useState<'theory' | 'practice' | 'summary'>(initialTab || 'theory');

  // Search & filter in Practice Workbench
  const [searchQuery, setSearchQuery] = useState<string>('');
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [sourceFilter, setSourceFilter] = useState<string>('all');

  // Selected problem inside Practice Workbench
  const [selectedProblemId, setSelectedProblemId] = useState<string>(initialProblemId || '');
  // Per-test runner state
  const [activeTestIndex, setActiveTestIndex] = useState<number>(0);
  const [userInputOutput, setUserInputOutput] = useState<string>('');
  const [testResult, setTestResult] = useState<'idle' | 'passed' | 'failed'>('idle');
  const [hasCopiedInput, setHasCopiedInput] = useState<boolean>(false);
  const [hasCopiedOutput, setHasCopiedOutput] = useState<boolean>(false);

  // Storage keys for progress tracking
  const storageKeyTheory = `cp_${courseId}_theory_done`;
  const storageKeyProblems = `cp_${courseId}_problems_done`;

  const [completedTheories, setCompletedTheories] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(storageKeyTheory);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [completedProblems, setCompletedProblems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(storageKeyProblems);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const currentLesson: CPLesson | undefined = courseData?.lessons[selectedLessonIndex] || courseData?.lessons[0];

  // Filter problems for current lesson
  // Filter problems for current lesson with deferred search query
  const filteredProblems = useMemo(() => {
    if (!currentLesson) return [];
    const query = deferredSearchQuery.trim().toLowerCase();
    return currentLesson.problems.filter(p => {
      const matchSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.source.toLowerCase().includes(query);
      const matchSource =
        sourceFilter === 'all' ||
        (sourceFilter === 'Thuật toán' && p.source === 'Thuật toán') ||
        (sourceFilter === 'HSG' && p.source === 'HSG') ||
        (sourceFilter === 'Olympic' && p.source === 'Olympic') ||
        (sourceFilter === 'Chuyên Tin' && p.source === 'Chuyên Tin');
      return matchSearch && matchSource;
    });
  }, [currentLesson, deferredSearchQuery, sourceFilter]);
  // Set default selected problem when lesson or filter changes
  useEffect(() => {
    if (filteredProblems.length > 0) {
      const exists = filteredProblems.some(p => p.id === selectedProblemId);
      if (!exists) {
        setSelectedProblemId(filteredProblems[0].id);
      }
    } else {
      setSelectedProblemId('');
    }
    setActiveTestIndex(0);
    setUserInputOutput('');
    setTestResult('idle');
  }, [currentLesson?.id, filteredProblems, selectedProblemId]);

  // Sync state changes with parent for persistence
  useEffect(() => {
    onStateChange?.({
      lessonIndex: selectedLessonIndex,
      tab: currentTab,
      problemId: selectedProblemId
    });
  }, [selectedLessonIndex, currentTab, selectedProblemId, onStateChange]);
  const activeProblem: CPProblem | undefined = useMemo(() => {
    if (!currentLesson) return undefined;
    return currentLesson.problems.find(p => p.id === selectedProblemId) || filteredProblems[0];
  }, [currentLesson, selectedProblemId, filteredProblems]);

  const activeProblemIndex = useMemo(() => {
    if (!activeProblem) return -1;
    return filteredProblems.findIndex(p => p.id === activeProblem.id);
  }, [filteredProblems, activeProblem]);

  const totalProblemsCount = useMemo(() => {
    if (!courseData) return 0;
    return courseData.lessons.reduce((acc: number, l: CPLesson) => acc + l.problems.length, 0);
  }, [courseData]);

  const solvedProblemsCount = useMemo(() => {
    return Object.values(completedProblems).filter(Boolean).length;
  }, [completedProblems]);

  const finishedTheoriesCount = useMemo(() => {
    return Object.values(completedTheories).filter(Boolean).length;
  }, [completedTheories]);

  if (!courseData || !currentLesson) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
        <AlertCircle className="w-12 h-12 text-rose-500 mb-4" />
        <h2 className="text-xl font-bold mb-2">Không tìm thấy khóa học</h2>
        <button
          onClick={onBackToCourses}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
        >
          Quay lại danh sách khóa học
        </button>
      </div>
    );
  }
  const handleToggleTheoryDone = (lessonId: string) => {
    setCompletedTheories(prev => {
      const updated = { ...prev, [lessonId]: !prev[lessonId] };
      try {
        localStorage.setItem(storageKeyTheory, JSON.stringify(updated));
      } catch {
        // ignore
      }
      if (!prev[lessonId]) {
        addXP(25);
        triggerConfetti('subtle');
        playRewardChime('task');
      }
      return updated;
    });
  };

  const handleToggleProblemDone = (problemId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCompletedProblems(prev => {
      const updated = { ...prev, [problemId]: !prev[problemId] };
      try {
        localStorage.setItem(storageKeyProblems, JSON.stringify(updated));
      } catch {
        // ignore
      }
      if (!prev[problemId]) {
        addXP(15);
        triggerConfetti('burst');
        playRewardChime('task');
      }
      return updated;
    });
  };

  const progressPercent = Math.min(
    100,
    Math.round(((solvedProblemsCount + finishedTheoriesCount) / (totalProblemsCount + courseData.lessons.length)) * 100)
  );

  const isBasic = courseId === 'cp-basic';
  const isBronze = courseId === 'cp-bronze';

  const themeBorder = isBasic
    ? 'border-emerald-500/30 dark:border-emerald-500/30'
    : isBronze
    ? 'border-amber-500/30 dark:border-amber-500/30'
    : 'border-cyan-500/30 dark:border-cyan-500/30';

  const themeBadge = isBasic
    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
    : isBronze
    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
    : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30';

  const themeBtn = isBasic
    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold'
    : isBronze
    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold'
    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold';

  // Copy helpers
  const handleCopyInput = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopiedInput(true);
    setTimeout(() => setHasCopiedInput(false), 2000);
  };

  const handleCopyOutput = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopiedOutput(true);
    setTimeout(() => setHasCopiedOutput(false), 2000);
  };

  // Compare user output with expected test output
  const handleVerifyOutput = () => {
    if (!activeProblem) return;
    const currentTest = activeProblem.testCases && activeProblem.testCases[activeTestIndex]
      ? activeProblem.testCases[activeTestIndex]
      : { output: activeProblem.sampleOutput || '' };

    const cleanExpected = (currentTest.output || '').trim().replace(/\r\n/g, '\n');
    const cleanUser = userInputOutput.trim().replace(/\r\n/g, '\n');

    if (cleanUser === cleanExpected) {
      setTestResult('passed');
      triggerConfetti('burst');
      playRewardChime('task');
      if (!completedProblems[activeProblem.id]) {
        handleToggleProblemDone(activeProblem.id);
      }
    } else {
      setTestResult('failed');
    }
  };

  // Switch to previous or next problem
  const handleSelectProblemByOffset = (offset: number) => {
    if (activeProblemIndex === -1) return;
    const targetIdx = activeProblemIndex + offset;
    if (targetIdx >= 0 && targetIdx < filteredProblems.length) {
      setSelectedProblemId(filteredProblems[targetIdx].id);
      setActiveTestIndex(0);
      setUserInputOutput('');
      setTestResult('idle');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white transition-colors duration-200">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToCourses}
            className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 cursor-pointer"
            title="Đổi khóa học"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Đổi khóa học</span>
          </button>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-md border ${themeBadge}`}>
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm lg:text-base text-slate-900 dark:text-white tracking-tight">{courseData.title}</span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${themeBadge}`}>
                  {courseData.levelBadge}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 hidden md:block">{courseData.subtitle}</p>
            </div>
          </div>
        </div>

        {/* 3 Steps Navigation: Theory -> Practice -> Summary (Word/Excel Model) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setCurrentTab('theory')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'theory'
                ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Lý thuyết</span>
            {completedTheories[currentLesson.id] && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('practice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'practice'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>2. Thực hành thuật toán</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800">
              {currentLesson.problems.filter(p => completedProblems[p.id]).length}/{currentLesson.problems.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('summary')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'summary'
                ? 'bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>3. Tổng kết chuyên đề</span>
          </button>
        </div>

        {/* Global Progress Counters */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-md">
            <Code2 className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-slate-400">Đã giải:</span>
            <span className="font-semibold text-emerald-500">
              {solvedProblemsCount}/{totalProblemsCount}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-md">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-slate-400">Tiến độ:</span>
            <span className="font-semibold text-slate-900 dark:text-white">{progressPercent}%</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar: Lessons Navigation */}
        <aside className="w-full lg:w-72 xl:w-80 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 flex flex-col shrink-0 max-h-[30vh] lg:max-h-[calc(100vh-61px)] overflow-y-auto">
          <div className="p-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 sticky top-0 z-10">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span className="flex items-center gap-1.5 uppercase font-semibold tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                Chuyên Đề ({courseData.lessons.length})
              </span>
              <span>{Math.round((finishedTheoriesCount / courseData.lessons.length) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${isBasic ? 'bg-emerald-500' : isBronze ? 'bg-amber-500' : 'bg-cyan-500'}`}
                style={{ width: `${(finishedTheoriesCount / courseData.lessons.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800/60 p-1.5 space-y-1">
            {courseData.lessons.map((lesson: CPLesson, idx: number) => {
              const isSelected = idx === selectedLessonIndex;
              const isTheoryDone = completedTheories[lesson.id];
              const lessonSolvedCount = lesson.problems.filter((p: CPProblem) => completedProblems[p.id]).length;
              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonIndex(idx);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg transition-all duration-150 relative group flex items-start gap-2.5 cursor-pointer ${
                    isSelected
                      ? `bg-slate-100 dark:bg-slate-800/90 border ${themeBorder} shadow-xs`
                      : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40 border border-transparent text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono shrink-0 transition-colors ${
                      isSelected
                        ? isBasic
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : isBronze
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-cyan-500 text-slate-950 font-bold'
                        : isTheoryDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                    }`}
                  >
                    {isTheoryDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : lesson.order}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-[10px] font-mono text-slate-400">Bài {lesson.order}</span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {lessonSolvedCount}/{lesson.problems.length}
                      </span>
                    </div>
                    <p className={`text-xs font-semibold line-clamp-1 ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      {lesson.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Main Workspace */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-slate-50/50 dark:bg-slate-950 max-h-[calc(100vh-61px)]">
          {/* TAB 1: THEORY ONLINE VIEWER */}
          {currentTab === 'theory' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
              {/* Theory Header Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3.5 rounded-xl border shrink-0 ${themeBadge}`}>
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700 font-semibold">
                          {courseData.levelBadge} • Bài {currentLesson.order}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                          Giáo Trình Đã Chuẩn Hóa
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {currentLesson.title}
                      </h2>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        {currentLesson.theorySummary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {currentLesson.theoryPdfUrl && (
                      <>
                        <a
                          href={currentLesson.theoryPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs"
                          title="Mở tab mới"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                          <span>Mở Tab Mới</span>
                        </a>

                        <a
                          href={currentLesson.theoryPdfUrl}
                          download={currentLesson.theoryPdfFileName || `${currentLesson.title}.pdf`}
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs"
                          title="Tải file PDF"
                        >
                          <Download className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                          <span>Tải PDF</span>
                        </a>
                      </>
                    )}

                    <button
                      onClick={() => handleToggleTheoryDone(currentLesson.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        completedTheories[currentLesson.id]
                          ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{completedTheories[currentLesson.id] ? 'Đã hoàn thành lý thuyết' : 'Hoàn thành lý thuyết (+25 XP)'}</span>
                    </button>
                  </div>
                </div>

                {/* Core Concepts */}
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Khái niệm trọng tâm:
                  </span>
                  {currentLesson.coreConcepts.map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* PDF Viewer Embed */}
              {currentLesson.theoryPdfUrl && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-500" />
                      Tài liệu bài giảng PDF gốc
                    </span>
                    <span className="text-slate-500 font-mono">{currentLesson.theoryPdfFileName}</span>
                  </div>
                  <iframe
                    src={`${currentLesson.theoryPdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    title={`Lý thuyết - ${currentLesson.title}`}
                    className="w-full h-[650px] border-0"
                  />
                </div>
              )}

              {/* Theory Content Markdown */}
              {currentLesson.theoryContent && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-500" />
                    Văn Bản Lý Thuyết Chi Tiết
                  </h3>
                  <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-sans">
                    <MathRenderer content={currentLesson.theoryContent} />
                  </div>
                </div>
              )}

              {/* Next Step Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => {
                    handleToggleTheoryDone(currentLesson.id);
                    setCurrentTab('practice');
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${themeBtn}`}
                >
                  <span>Chuyển sang Bước 2: Thực hành thuật toán</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PRACTICE WORKBENCH (ZERO-POPUP TWO-COLUMN WORKSPACE) */}
          {currentTab === 'practice' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Practice Sub-Header Bar */}
              <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Bài {currentLesson.order}: {currentLesson.title}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ({filteredProblems.length} bài tập phù hợp)
                  </span>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Tìm bài tập..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-cyan-500 w-44"
                    />
                  </div>

                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md border border-slate-200 dark:border-slate-700 text-[11px] font-medium">
                    {['all', 'Thuật toán', 'HSG', 'Olympic', 'Chuyên Tin'].map(src => (
                      <button
                        key={src}
                        onClick={() => setSourceFilter(src)}
                        className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                          sourceFilter === src
                            ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 font-bold shadow-xs'
                            : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
                        }`}
                      >
                        {src === 'all' ? 'Tất cả' : src}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Split-pane Workspace: Left (Problem List) + Right (Problem Workbench) */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Master Column: Problem List */}
                <div className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 flex flex-col shrink-0 max-h-[35vh] md:max-h-full overflow-y-auto">
                  <div className="p-2 space-y-1">
                    {filteredProblems.map((prob, pIdx) => {
                      const isSelected = prob.id === activeProblem?.id;
                      const isDone = completedProblems[prob.id];

                      return (
                        <div
                          key={prob.id}
                          onClick={() => {
                            setSelectedProblemId(prob.id);
                            setActiveTestIndex(0);
                            setUserInputOutput('');
                            setTestResult('idle');
                          }}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                            isSelected
                              ? `bg-white dark:bg-slate-800 border-cyan-500 dark:border-cyan-500 shadow-xs ring-1 ring-cyan-500/20`
                              : 'bg-white/40 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800/60'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={e => handleToggleProblemDone(prob.id, e)}
                            className="mt-0.5 shrink-0 cursor-pointer"
                            title={isDone ? 'Đánh dấu chưa giải' : 'Đánh dấu đã giải'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 hover:border-emerald-500" />
                            )}
                          </button>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span
                                className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                                  prob.source === 'HSG'
                                    ? 'bg-rose-500/10 text-rose-500'
                                    : prob.source === 'Olympic'
                                    ? 'bg-purple-500/10 text-purple-400'
                                    : prob.source === 'Chuyên Tin'
                                    ? 'bg-amber-500/10 text-amber-500'
                                    : 'bg-emerald-500/10 text-emerald-500'
                                }`}
                              >
                                {prob.source}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">{prob.point} pts</span>
                            </div>

                            <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-800 dark:text-slate-200'}`}>
                              {pIdx + 1}. {prob.title}
                            </h4>

                            <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-slate-400">
                              <span>TL: {prob.timeLimit}</span>
                              <span>•</span>
                              <span>ML: {prob.memoryLimit}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {filteredProblems.length === 0 && (
                      <div className="p-8 text-center text-slate-400 text-xs">
                        Không có bài tập nào phù hợp.
                      </div>
                    )}
                  </div>
                </div>

                {/* Detail Column: Problem Interactive Workbench */}
                <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 space-y-5">
                  {activeProblem ? (
                    <>
                      {/* Problem Header Card */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                              {activeProblem.title}
                            </h2>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase border ${
                                activeProblem.source === 'HSG'
                                  ? 'bg-rose-500/10 text-rose-500 border-rose-500/30'
                                  : activeProblem.source === 'Olympic'
                                  ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                                  : activeProblem.source === 'Chuyên Tin'
                                  ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                  : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                              }`}
                            >
                              {activeProblem.source}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {activeProblem.pdfUrl && (
                              <a
                                href={activeProblem.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                                title="Mở file PDF gốc của đề bài"
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-cyan-500" />
                                <span>Xem PDF gốc</span>
                              </a>
                            )}

                            <button
                              type="button"
                              onClick={() => handleToggleProblemDone(activeProblem.id)}
                              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                                completedProblems[activeProblem.id]
                                  ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40'
                                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{completedProblems[activeProblem.id] ? 'Đã hoàn thành' : 'Đánh dấu xong (+15 XP)'}</span>
                            </button>
                          </div>
                        </div>

                        {/* Clean 5-column Specs Card matching clean problem sheet */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-center font-sans">
                          <div className="p-1">
                            <span className="text-slate-700 dark:text-slate-300 font-semibold">
                              Điểm: <span className="font-bold text-slate-900 dark:text-white">{activeProblem.point ?? 100}</span>
                            </span>
                          </div>
                          <div className="p-1 border-l border-slate-200 dark:border-slate-800">
                            <span className="text-slate-700 dark:text-slate-300 font-semibold">
                              Thời gian: <span className="font-bold text-slate-900 dark:text-white">{activeProblem.timeLimit || '1.0s'}</span>
                            </span>
                          </div>
                          <div className="p-1 border-l border-slate-200 dark:border-slate-800">
                            <span className="text-slate-700 dark:text-slate-300 font-semibold">
                              Bộ nhớ: <span className="font-bold text-slate-900 dark:text-white">{activeProblem.memoryLimit || '256MB'}</span>
                            </span>
                          </div>
                          <div className="p-1 border-l border-slate-200 dark:border-slate-800">
                            <span className="text-slate-700 dark:text-slate-300 font-semibold">
                              Input: <span className="font-bold text-slate-900 dark:text-white">bàn phím</span>
                            </span>
                          </div>
                          <div className="p-1 border-l border-slate-200 dark:border-slate-800">
                            <span className="text-slate-700 dark:text-slate-300 font-semibold">
                              Output: <span className="font-bold text-slate-900 dark:text-white">màn hình</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Problem Statement Box */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-sans">
                          <MathRenderer content={activeProblem.problemContent || activeProblem.preview} />
                        </div>
                      </div>

                      {/* In-page Interactive Test Runner */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <Terminal className="w-4 h-4 text-emerald-500" />
                            Kiểm Thử Trực Tiếp (Zero-Popup Test Runner)
                          </h3>

                          {/* Test selector tabs */}
                          {activeProblem.testCases && activeProblem.testCases.length > 1 && (
                            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                              {activeProblem.testCases.map((tc, tIdx) => (
                                <button
                                  key={tc.id}
                                  type="button"
                                  onClick={() => {
                                    setActiveTestIndex(tIdx);
                                    setUserInputOutput('');
                                    setTestResult('idle');
                                  }}
                                  className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                                    activeTestIndex === tIdx
                                      ? 'bg-cyan-500 text-slate-950 font-bold'
                                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                  }`}
                                >
                                  {tc.id}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Current Test Case Input & Expected Output */}
                        {(() => {
                          const currentTest = activeProblem.testCases && activeProblem.testCases[activeTestIndex]
                            ? activeProblem.testCases[activeTestIndex]
                            : {
                                input: activeProblem.sampleInput || '',
                                output: activeProblem.sampleOutput || ''
                              };

                          return (
                            <div className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Sample Input Block */}
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <label className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                                      Đầu vào (Input)
                                    </label>
                                    <button
                                      type="button"
                                      onClick={() => handleCopyInput(currentTest.input)}
                                      className="inline-flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                                    >
                                      {hasCopiedInput ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                      <span>{hasCopiedInput ? 'Đã sao chép' : 'Sao chép Input'}</span>
                                    </button>
                                  </div>
                                  <pre className="p-3 bg-slate-950 text-slate-100 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 max-h-40 selection:bg-cyan-500/40">
                                    {currentTest.input || '(Không có dữ liệu đầu vào mẫu)'}
                                  </pre>
                                </div>

                                {/* Expected Output Block */}
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <label className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                                      Đầu ra mong đợi (Expected Output)
                                    </label>
                                    <button
                                      type="button"
                                      onClick={() => handleCopyOutput(currentTest.output)}
                                      className="inline-flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                                    >
                                      {hasCopiedOutput ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                      <span>{hasCopiedOutput ? 'Đã sao chép' : 'Sao chép Output'}</span>
                                    </button>
                                  </div>
                                  <pre className="p-3 bg-slate-950 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 max-h-40 selection:bg-emerald-500/40">
                                    {currentTest.output || '(Không có dữ liệu đầu ra mẫu)'}
                                  </pre>
                                </div>
                              </div>

                              {/* Interactive Answer Verification Section */}
                              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                                <div className="flex items-center justify-between">
                                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                    <Play className="w-3.5 h-3.5 text-cyan-500" />
                                    Dán kết quả chạy từ IDE / Trình biên dịch của bạn để kiểm tra:
                                  </label>
                                  {testResult !== 'idle' && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setUserInputOutput('');
                                        setTestResult('idle');
                                      }}
                                      className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                                    >
                                      <RotateCcw className="w-3 h-3" />
                                      <span>Đặt lại</span>
                                    </button>
                                  )}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2">
                                  <textarea
                                    value={userInputOutput}
                                    onChange={e => {
                                      setUserInputOutput(e.target.value);
                                      if (testResult !== 'idle') setTestResult('idle');
                                    }}
                                    placeholder="Dán kết quả chương trình (stdout) của bạn vào đây..."
                                    rows={2}
                                    className="flex-1 p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-cyan-500 resize-y"
                                  />
                                  <button
                                    type="button"
                                    onClick={handleVerifyOutput}
                                    disabled={!userInputOutput.trim()}
                                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 self-start sm:self-auto"
                                  >
                                    <Play className="w-3.5 h-3.5" />
                                    <span>Kiểm tra kết quả</span>
                                  </button>
                                </div>

                                {/* Verification Result Banner */}
                                {testResult === 'passed' && (
                                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 flex items-center justify-between text-xs font-semibold">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      <span>CHÍNH XÁC - Đầu ra khớp 100% với kết quả chuẩn! (+15 XP)</span>
                                    </div>
                                    <span className="font-mono text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">PASSED</span>
                                  </div>
                                )}

                                {testResult === 'failed' && (
                                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-600 dark:text-rose-400 flex items-center justify-between text-xs font-semibold">
                                    <div className="flex items-center gap-2">
                                      <XCircle className="w-4 h-4 text-rose-500" />
                                      <span>CHƯA KHỚP - Đầu ra chưa giống với kết quả mong đợi. Vui lòng kiểm tra lại logic thuật toán hoặc khoảng trắng/dòng mới.</span>
                                    </div>
                                    <span className="font-mono text-[10px] bg-rose-500/20 px-2 py-0.5 rounded">FAILED</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* Problem Navigation Footer */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          type="button"
                          onClick={() => handleSelectProblemByOffset(-1)}
                          disabled={activeProblemIndex <= 0}
                          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Bài trước</span>
                        </button>

                        <span className="text-xs font-mono text-slate-400">
                          Bài {activeProblemIndex + 1} / {filteredProblems.length}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleSelectProblemByOffset(1)}
                          disabled={activeProblemIndex >= filteredProblems.length - 1}
                          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                          <span>Bài tiếp theo</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-12 text-center text-slate-400 text-xs">
                      Chọn một bài tập từ danh sách bên trái để bắt đầu thực hành.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SUMMARY & TOPIC WRAPUP */}
          {currentTab === 'summary' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl mx-auto w-full">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs text-center space-y-4">
                <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center border ${themeBadge}`}>
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    Tổng Kết Bài {currentLesson.order}: {currentLesson.title}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                    Chúc mừng bạn đã hoàn thành việc ôn luyện chuyên đề này! Dưới đây là bảng thống kê tổng quan tiến độ của bạn trong bài học.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto pt-2">
                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <span className="text-slate-400 text-xs block mb-1">Lý thuyết</span>
                    <span className={`text-base font-bold ${completedTheories[currentLesson.id] ? 'text-emerald-500' : 'text-slate-400'}`}>
                      {completedTheories[currentLesson.id] ? 'Đã hoàn thành' : 'Chưa xong'}
                    </span>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <span className="text-slate-400 text-xs block mb-1">Bài tập đã giải</span>
                    <span className="text-base font-bold text-emerald-500">
                      {currentLesson.problems.filter(p => completedProblems[p.id]).length} / {currentLesson.problems.length}
                    </span>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <span className="text-slate-400 text-xs block mb-1">Tổng XP tích lũy</span>
                    <span className="text-base font-bold text-amber-500">
                      {(completedTheories[currentLesson.id] ? 25 : 0) + currentLesson.problems.filter(p => completedProblems[p.id]).length * 15} XP
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentTab('practice')}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Tiếp tục giải bài tập
                  </button>

                  {selectedLessonIndex < courseData.lessons.length - 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLessonIndex(prev => prev + 1);
                        setCurrentTab('theory');
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${themeBtn}`}
                    >
                      Sang Bài {currentLesson.order + 1}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
