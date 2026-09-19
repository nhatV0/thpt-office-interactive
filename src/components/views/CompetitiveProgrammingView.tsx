import React, { useState, useMemo } from 'react';
import {
  Code2,
  BookOpen,
  Download,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Clock,
  HardDrive,
  Search,
  Filter,
  Flame,
  ArrowLeft,
  ChevronRight,
  Terminal,
  Award,
  Sparkles,
  Layers,
  FileText,
  AlertCircle,
  Play,
  Copy,
  Check
} from 'lucide-react';
import { getCPCourseData } from '../../data/cpCoursesData';
import type { CPLesson, CPProblem } from '../../types/cpCourse';
import { useLearning } from '../../context/LearningContext';

interface CompetitiveProgrammingViewProps {
  courseId: 'cp-bronze' | 'cp-silver';
  onBackToCourses: () => void;
}

export const CompetitiveProgrammingView: React.FC<CompetitiveProgrammingViewProps> = ({
  courseId,
  onBackToCourses
}) => {
  const courseData = getCPCourseData(courseId);
  const { addXP } = useLearning();

  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'theory' | 'problems' | 'testcases'>('theory');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [selectedProblem, setSelectedProblem] = useState<CPProblem | null>(null);

  // User Interactive Testing State in Problem Modal
  const [userInputOutput, setUserInputOutput] = useState<string>('');
  const [testResult, setTestResult] = useState<'idle' | 'passed' | 'failed'>('idle');
  const [hasCopiedInput, setHasCopiedInput] = useState<boolean>(false);

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

  if (!courseData) {
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

  const currentLesson: CPLesson = courseData.lessons[selectedLessonIndex] || courseData.lessons[0];

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
      }
      return updated;
    });
  };

  // Filter problems for current lesson
  const filteredProblems = useMemo(() => {
    return currentLesson.problems.filter(p => {
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.source.toLowerCase().includes(searchQuery.toLowerCase());
      const matchSource =
        sourceFilter === 'all' ||
        (sourceFilter === 'Thuật toán' && p.source === 'Thuật toán') ||
        (sourceFilter === 'HSG' && (p.source === 'HSG' || p.source === 'Olympic' || p.source === 'Chuyên Tin'));
      return matchSearch && matchSource;
    });
  }, [currentLesson, searchQuery, sourceFilter]);

  const totalProblemsCount = useMemo(() => {
    return courseData.lessons.reduce((acc, l) => acc + l.problems.length, 0);
  }, [courseData]);

  const solvedProblemsCount = useMemo(() => {
    return Object.values(completedProblems).filter(Boolean).length;
  }, [completedProblems]);

  const finishedTheoriesCount = useMemo(() => {
    return Object.values(completedTheories).filter(Boolean).length;
  }, [completedTheories]);

  const progressPercent = Math.min(
    100,
    Math.round(((solvedProblemsCount + finishedTheoriesCount) / (totalProblemsCount + courseData.lessons.length)) * 100)
  );

  const isBronze = courseId === 'cp-bronze';
  const themeBorder = isBronze ? 'border-amber-500/30' : 'border-cyan-500/30';
  const themeGlow = isBronze ? 'from-amber-500/10 to-orange-500/5' : 'from-cyan-500/10 to-blue-500/5';
  const themeBadge = isBronze ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
  const themeBtn = isBronze
    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold'
    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold';
  const themeText = isBronze ? 'text-amber-400' : 'text-cyan-400';

  // Copy sample input handler
  const handleCopyInput = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopiedInput(true);
    setTimeout(() => setHasCopiedInput(false), 2000);
  };

  // Compare user output with expected sample output
  const handleVerifyOutput = () => {
    if (!selectedProblem || !selectedProblem.sampleOutput) return;
    const cleanExpected = selectedProblem.sampleOutput.trim().replace(/\r\n/g, '\n');
    const cleanUser = userInputOutput.trim().replace(/\r\n/g, '\n');

    if (cleanUser === cleanExpected) {
      setTestResult('passed');
      if (!completedProblems[selectedProblem.id]) {
        handleToggleProblemDone(selectedProblem.id);
      }
    } else {
      setTestResult('failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToCourses}
            className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-slate-400 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-800 transition-colors border border-slate-800 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Đổi khóa học</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-md border ${themeBadge}`}>
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm lg:text-base text-white tracking-tight">{courseData.title}</span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${themeBadge}`}>
                  {courseData.levelBadge}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1 hidden md:block">{courseData.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Global Progress Counters */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-md">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">Lý thuyết:</span>
            <span className={`font-semibold ${themeText}`}>
              {finishedTheoriesCount}/{courseData.lessons.length}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-md">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Đã giải:</span>
            <span className="font-semibold text-emerald-400">
              {solvedProblemsCount}/{totalProblemsCount}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-md">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400">Tiến độ:</span>
            <span className="font-semibold text-white">{progressPercent}%</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar: Lessons Navigation */}
        <aside className="w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/50 flex flex-col shrink-0 max-h-[35vh] lg:max-h-[calc(100vh-61px)] overflow-y-auto">
          <div className="p-3.5 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-10">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span className="flex items-center gap-1.5 uppercase font-semibold tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                Chuyên Đề Bài Học ({courseData.lessons.length})
              </span>
              <span>{Math.round((finishedTheoriesCount / courseData.lessons.length) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${isBronze ? 'bg-amber-500' : 'bg-cyan-500'}`}
                style={{ width: `${(finishedTheoriesCount / courseData.lessons.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="divide-y divide-slate-800/60 p-1.5 space-y-1">
            {courseData.lessons.map((lesson, idx) => {
              const isSelected = idx === selectedLessonIndex;
              const isTheoryDone = completedTheories[lesson.id];
              const lessonSolvedCount = lesson.problems.filter(p => completedProblems[p.id]).length;

              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonIndex(idx);
                    setSelectedProblem(null);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-150 relative group flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? `bg-slate-800/90 border ${themeBorder} shadow-sm shadow-black/40`
                      : 'hover:bg-slate-800/40 border border-transparent text-slate-400'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono shrink-0 transition-colors ${
                      isSelected
                        ? isBronze
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-cyan-500 text-slate-950 font-bold'
                        : isTheoryDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {isTheoryDone ? <CheckCircle2 className="w-4 h-4" /> : lesson.order}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span
                        className={`text-xs font-medium leading-tight line-clamp-1 ${
                          isSelected ? 'text-white font-semibold' : 'group-hover:text-slate-200'
                        }`}
                      >
                        Bài {lesson.order}: {lesson.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span>{lesson.problems.length} bài tập</span>
                      <span>-</span>
                      <span className={lessonSolvedCount > 0 ? 'text-emerald-400' : ''}>
                        {lessonSolvedCount}/{lesson.problems.length} xong
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <ChevronRight className={`w-4 h-4 shrink-0 self-center ${themeText}`} />
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Main Workspace */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-slate-950 max-h-[calc(100vh-61px)]">
          {/* Lesson Header Banner */}
          <div className={`p-5 lg:p-7 border-b border-slate-800 bg-gradient-to-r ${themeGlow}`}>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono uppercase px-2 py-0.5 rounded border ${themeBadge}`}>
                    Chuyên đề {currentLesson.order}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {currentLesson.problems.length} bài tập thuật toán
                  </span>
                </div>

                <button
                  onClick={() => handleToggleTheoryDone(currentLesson.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    completedTheories[currentLesson.id]
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {completedTheories[currentLesson.id] ? 'Đã hoàn thành lý thuyết' : 'Đánh dấu xong lý thuyết'}
                  </span>
                </button>
              </div>

              <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-2">
                Bài {currentLesson.order}: {currentLesson.title}
              </h1>

              <p className="text-xs lg:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {currentLesson.theorySummary}
              </p>

              {/* Core Concepts Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Trọng tâm:
                </span>
                {currentLesson.coreConcepts.map((concept, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-20 px-5 lg:px-8">
            <div className="max-w-5xl mx-auto flex items-center gap-1">
              <button
                onClick={() => setActiveTab('theory')}
                className={`flex items-center gap-2 px-4 py-3 text-xs lg:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'theory'
                    ? `${isBronze ? 'border-amber-500 text-amber-400' : 'border-cyan-500 text-cyan-400'}`
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Giáo Trình Trực Tuyến</span>
              </button>

              <button
                onClick={() => setActiveTab('problems')}
                className={`flex items-center gap-2 px-4 py-3 text-xs lg:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'problems'
                    ? `${isBronze ? 'border-amber-500 text-amber-400' : 'border-cyan-500 text-cyan-400'}`
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Đề Bài Thuật Toán ({currentLesson.problems.length})</span>
              </button>

              {currentLesson.problems.some(p => p.hasTestCases) && (
                <button
                  onClick={() => setActiveTab('testcases')}
                  className={`flex items-center gap-2 px-4 py-3 text-xs lg:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'testcases'
                      ? `${isBronze ? 'border-amber-500 text-amber-400' : 'border-cyan-500 text-cyan-400'}`
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Test Cases Chấm Bài</span>
                </button>
              )}
            </div>
          </div>

          {/* Tab Content Body */}
          <div className="p-5 lg:p-8 flex-1">
            <div className="max-w-5xl mx-auto">
              {/* TAB 1: THEORY ONLINE READER */}
              {activeTab === 'theory' && (
                <div className="space-y-6">
                  {/* Theory Action Card */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 relative overflow-hidden shadow-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl border shrink-0 ${themeBadge}`}>
                          <FileText className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                              Giáo trình lý thuyết đầy đủ
                            </span>
                            <span className="text-xs text-slate-400 font-mono">Đã làm sạch Headnote & Footnote</span>
                          </div>
                          <h3 className="text-base lg:text-lg font-bold text-white mb-1">
                            {currentLesson.theoryPdfFileName}
                          </h3>
                          <p className="text-xs text-slate-400">
                            Nội dung được trích xuất hoàn chỉnh trực tiếp trên web, không cần phụ thuộc trình đọc PDF ngoài.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                        <a
                          href={currentLesson.theoryPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700"
                          title="Mở file PDF gốc"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Mở PDF Gốc</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Full Theory Text Area */}
                  {currentLesson.theoryContent ? (
                    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 lg:p-8 space-y-4 shadow-inner">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 font-mono">
                          <BookOpen className="w-4 h-4 text-sky-400" />
                          Nội Dung Bài Học Chi Tiết
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500">
                          {currentLesson.theoryContent.length} ký tự
                        </span>
                      </div>
                      <div className="prose prose-invert max-w-none text-xs lg:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap font-sans select-text">
                        {currentLesson.theoryContent}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center text-slate-400 text-xs">
                      Đang tải tài liệu trực tuyến... Vui lòng mở file PDF gốc ở trên.
                    </div>
                  )}

                  {/* Core Concepts Deep Dive */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                        <Terminal className={`w-4 h-4 ${themeText}`} />
                        Kỹ Thuật Thuật Toán Nòng Cốt
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {currentLesson.coreConcepts.map((concept, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isBronze ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                            <span>{concept}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-emerald-400" />
                        Mục Tiêu Năng Lực Đầu Ra
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>Hiểu bản chất cấu trúc dữ liệu và điều kiện áp dụng thuật toán.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>Tự cài đặt mã nguồn C++ chuẩn với thời gian chạy tối ưu O(N) hoặc O(log N).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>Vượt qua 100% test cases của các bài tập trong chuyên đề.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROBLEMS LIST */}
              {activeTab === 'problems' && (
                <div className="space-y-4">
                  {/* Search and Filter Controls */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Tìm bài tập theo tên hoặc từ khóa..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 font-mono"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                      <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {(['all', 'Thuật toán', 'HSG'] as const).map(source => (
                        <button
                          key={source}
                          onClick={() => setSourceFilter(source)}
                          className={`text-xs font-mono px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                            sourceFilter === source
                              ? 'bg-slate-800 text-white font-semibold border border-slate-700'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                          }`}
                        >
                          {source === 'all' ? 'Tất cả' : source}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Problems Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredProblems.map((prob, pIdx) => {
                      const isSolved = completedProblems[prob.id];

                      return (
                        <div
                          key={prob.id}
                          onClick={() => {
                            setSelectedProblem(prob);
                            setUserInputOutput('');
                            setTestResult('idle');
                          }}
                          className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer flex flex-col justify-between group ${
                            isSolved
                              ? 'bg-slate-900/40 border-emerald-500/20 hover:border-emerald-500/40'
                              : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold border ${
                                    prob.source === 'HSG' || prob.source === 'Olympic' || prob.source === 'Chuyên Tin'
                                      ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                  }`}
                                >
                                  {prob.source}
                                </span>
                                {prob.hasTestCases && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                    Có Test Chấm ({prob.totalTests || 15})
                                  </span>
                                )}
                              </div>

                              <button
                                onClick={e => handleToggleProblemDone(prob.id, e)}
                                className={`w-5 h-5 rounded flex items-center justify-center transition-colors cursor-pointer ${
                                  isSolved
                                    ? 'bg-emerald-500 text-slate-950'
                                    : 'border border-slate-700 hover:border-slate-500 text-transparent'
                                }`}
                                title={isSolved ? 'Đã giải thành công' : 'Đánh dấu đã giải xong'}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-1.5">
                              {pIdx + 1}. {prob.title}
                            </h4>

                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                              {prob.preview}
                            </p>
                          </div>

                          <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" /> {prob.timeLimit}
                              </span>
                              <span className="flex items-center gap-1">
                                <HardDrive className="w-3 h-3 text-slate-400" /> {prob.memoryLimit}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 text-slate-400 group-hover:text-slate-200">
                              <span>Làm bài</span>
                              <ChevronRight className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {filteredProblems.length === 0 && (
                    <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
                      <Code2 className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">Không tìm thấy bài tập nào phù hợp với bộ lọc.</p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: TEST CASES & SOLUTIONS */}
              {activeTab === 'testcases' && (
                <div className="space-y-4">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 mb-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                      <Download className="w-4 h-4 text-amber-400" />
                      Bộ Dữ Liệu Chấm Mẫu & Hướng Dẫn Cài Đặt
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Tải gói test cases (.zip) hoàn chỉnh với input/output chuẩn phục vụ chấm ngoại tuyến trên máy tính cá nhân qua Themis, CMS hoặc script tự động.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentLesson.problems
                      .filter(p => p.hasTestCases)
                      .map(prob => (
                        <div
                          key={prob.id}
                          className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                                Gói Chấm Off-line
                              </span>
                              <span className="text-xs text-slate-400 font-mono">{prob.totalTests || 15} Tests</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-2">{prob.title}</h4>
                            <p className="text-xs text-slate-400 mb-4">
                              Bao gồm bộ test cases chính thức và file input/output tiêu chuẩn.
                            </p>
                          </div>

                          <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
                            {prob.testCaseZipUrl && (
                              <a
                                href={prob.testCaseZipUrl}
                                download
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors border border-slate-700"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Tải TestCases (.zip)</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Problem Details & Interactive Test Modal */}
      {selectedProblem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase border ${
                    selectedProblem.source === 'HSG' || selectedProblem.source === 'Olympic' || selectedProblem.source === 'Chuyên Tin'
                      ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  }`}
                >
                  {selectedProblem.source}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{selectedProblem.title}</h3>
              </div>

              <button
                onClick={() => setSelectedProblem(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors text-xs font-mono cursor-pointer"
              >
                Đóng (ESC)
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 text-xs">
              {/* Meta stats bar */}
              <div className="grid grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-center">
                <div>
                  <span className="text-slate-400 block mb-0.5">Giới hạn thời gian</span>
                  <span className="text-white font-semibold">{selectedProblem.timeLimit}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Giới hạn bộ nhớ</span>
                  <span className="text-white font-semibold">{selectedProblem.memoryLimit}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Điểm số</span>
                  <span className="text-emerald-400 font-semibold">{selectedProblem.point} pts</span>
                </div>
              </div>

              {/* Full Problem Text (Rendered from PDF without headnotes/footnotes) */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-200 flex items-center justify-between">
                  <span>Đề bài chi tiết</span>
                  <a
                    href={selectedProblem.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono text-[11px]"
                  >
                    <span>Mở PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h4>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 leading-relaxed font-sans whitespace-pre-wrap select-text max-h-72 overflow-y-auto text-xs sm:text-sm">
                  {selectedProblem.problemContent || selectedProblem.preview}
                </div>
              </div>

              {/* Interactive Test Case Runner */}
              {selectedProblem.sampleInput && (
                <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-amber-400 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" />
                      <span>Kiểm tra lời giải tự động (Test Runner)</span>
                    </h4>
                    {selectedProblem.testCaseZipUrl && (
                      <a
                        href={selectedProblem.testCaseZipUrl}
                        download
                        className="text-slate-400 hover:text-white flex items-center gap-1 font-mono text-[11px]"
                      >
                        <Download className="w-3 h-3" />
                        <span>Tải toàn bộ {selectedProblem.totalTests || 15} tests (.zip)</span>
                      </a>
                    )}
                  </div>

                  {/* Input Box with One-Click Copy */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Dữ liệu đầu vào (Input mẫu):</span>
                      <button
                        onClick={() => handleCopyInput(selectedProblem.sampleInput || '')}
                        className="flex items-center gap-1 text-sky-400 hover:text-sky-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded cursor-pointer transition-colors"
                      >
                        {hasCopiedInput ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Đã copy!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Input</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto max-h-28">
                      {selectedProblem.sampleInput}
                    </pre>
                  </div>

                  {/* Expected Output Box */}
                  {selectedProblem.sampleOutput && (
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 block">Kết quả mẫu kỳ vọng (Expected Output):</span>
                      <pre className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-emerald-400 font-mono text-xs overflow-x-auto max-h-24">
                        {selectedProblem.sampleOutput}
                      </pre>
                    </div>
                  )}

                  {/* Output Verification Area */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <label className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
                      <span>Dán kết quả chạy từ code của bạn vào đây:</span>
                      {testResult === 'passed' && (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> CHÍNH XÁC (ACCEPTED)
                        </span>
                      )}
                      {testResult === 'failed' && (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> SAI KẾT QUẢ (WRONG ANSWER)
                        </span>
                      )}
                    </label>

                    <div className="flex gap-2">
                      <textarea
                        rows={2}
                        value={userInputOutput}
                        onChange={e => {
                          setUserInputOutput(e.target.value);
                          setTestResult('idle');
                        }}
                        placeholder="Dán output chương trình của bạn vào đây để kiểm tra..."
                        className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-700"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOutput}
                        className={`px-4 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          userInputOutput.trim() ? themeBtn : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                        disabled={!userInputOutput.trim()}
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Kiểm Tra</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
              <button
                onClick={() => handleToggleProblemDone(selectedProblem.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  completedProblems[selectedProblem.id]
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedProblems[selectedProblem.id] ? 'Đã hoàn thành bài tập' : 'Đánh dấu hoàn thành (+15 XP)'}
                </span>
              </button>

              <button
                onClick={() => setSelectedProblem(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
