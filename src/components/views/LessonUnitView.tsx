import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { BookOpen, Laptop, HelpCircle, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Lock, Layers, Menu, X } from 'lucide-react';
import { triggerConfetti, playRewardChime } from '../../utils/celebration';
import { UnlockLessonConfirmModal } from '../modals/UnlockLessonConfirmModal';
import { useAuth } from '../../context/AuthContext';
import { TheoryViewer } from '../theory/TheoryViewer';
import { VirtualOfficeSimulator } from '../simulator/VirtualOfficeSimulator';
import { QuizEngine } from '../quiz/QuizEngine';

interface LessonUnitViewProps {
  onBackToCurriculum: () => void;
  onOpenSummary: () => void;
}

export const LessonUnitView: React.FC<LessonUnitViewProps> = ({
  onBackToCurriculum,
  onOpenSummary
}) => {
  const {
    activeModuleId,
    activeLessonId,
    currentTab,
    setCurrentTab,
    userProgress,
    markTheoryCompleted,
    markPracticeCompleted,
    submitQuizScore,
    unlockNextLesson,
    unlockSpecificLesson,
    setActiveLessonId
  } = useLearning();
  const moduleInfo = CURRICULUM_DATA[activeModuleId];
  const { currentUser } = useAuth();
  const isTeacher = currentUser?.role === 'teacher';

  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const lesson = moduleInfo.lessons.find(l => l.id === activeLessonId) || moduleInfo.lessons[0];
  const progress = userProgress[lesson.id] || {
    theoryCompleted: false,
    practiceCompleted: false,
    quizScore: 0,
    quizCompleted: false,
    isUnlocked: true
  };
  const [pendingNextLesson, setPendingNextLesson] = React.useState<{ id: string; title: string; order: number; prevTitle?: string } | null>(null);
  const handleTheoryFinished = () => {
    triggerConfetti('subtle');
    playRewardChime('task');
    markTheoryCompleted(lesson.id);
    setCurrentTab('practice');
  };

  const handlePracticeFinished = () => {
    triggerConfetti('burst');
    playRewardChime('task');
    markPracticeCompleted(lesson.id);
    setCurrentTab('quiz');
  };

  const handleQuizFinished = (score: number, total: number) => {
    submitQuizScore(lesson.id, score, total);
    unlockNextLesson(lesson.id);
    onOpenSummary();
  };
  const currentIndex = moduleInfo.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? moduleInfo.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < moduleInfo.lessons.length - 1 ? moduleInfo.lessons[currentIndex + 1] : null;

  const handleSelectNextLesson = () => {
    if (!nextLesson) return;
    const nextProgress = userProgress[nextLesson.id];
    const isNextUnlocked = nextProgress?.isUnlocked;
    const isCurrentFinished = progress.theoryCompleted && progress.practiceCompleted && progress.quizCompleted;

    if (isNextUnlocked || isCurrentFinished) {
      setActiveLessonId(nextLesson.id);
      setCurrentTab('theory');
    } else {
      // Prompt confirmation to unlock ahead
      setPendingNextLesson({
        id: nextLesson.id,
        title: nextLesson.title,
        order: nextLesson.order,
        prevTitle: `Bài ${lesson.order}: ${lesson.title}`
      });
    }
  };

  const handleConfirmUnlock = () => {
    if (!pendingNextLesson) return;
    unlockSpecificLesson(pendingNextLesson.id);
    setActiveLessonId(pendingNextLesson.id);
    setCurrentTab('theory');
    setPendingNextLesson(null);
  };

  const isWord = activeModuleId === 'word';
  const isExcel = activeModuleId === 'excel';
  const completedLessonsInModule = moduleInfo.lessons.filter(l => {
    const p = userProgress[l.id];
    return p && p.theoryCompleted && p.practiceCompleted && p.quizCompleted;
  }).length;
  const moduleProgressPct = Math.round((completedLessonsInModule / moduleInfo.lessons.length) * 100);

  const handleSelectLessonFromSidebar = (targetLesson: typeof moduleInfo.lessons[0]) => {
    const p = userProgress[targetLesson.id];
    const isUnlocked = isTeacher || p?.isUnlocked || targetLesson.order === 1;

    if (isUnlocked) {
      setActiveLessonId(targetLesson.id);
      setCurrentTab('theory');
      setIsSidebarOpen(false);
    } else {
      const prevIdx = moduleInfo.lessons.findIndex(l => l.id === targetLesson.id) - 1;
      const prevL = prevIdx >= 0 ? moduleInfo.lessons[prevIdx] : undefined;
      setPendingNextLesson({
        id: targetLesson.id,
        title: targetLesson.title,
        order: targetLesson.order,
        prevTitle: prevL ? `Bài ${prevL.order}: ${prevL.title}` : undefined
      });
    }
  };
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* Lesson Header Sub-nav */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 select-none shrink-0 sticky top-0 z-20">
        {/* Lesson Breadcrumb & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={onBackToCurriculum}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer shrink-0"
            title="Quay lại danh sách khóa học"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Toggle Sidebar Button for Mobile/Tablet */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0"
            title="Mở danh sách bài học"
          >
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 truncate">
              <span className="capitalize">{activeModuleId}</span>
              <span>/</span>
              <span>Bài {lesson.order}</span>
              {progress.theoryCompleted && progress.practiceCompleted && progress.quizCompleted && (
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.2 rounded-full font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Đã xong
                </span>
              )}
            </div>
            <h2 className="text-xs sm:text-base font-bold text-slate-900 dark:text-slate-100 truncate">
              {lesson.title}
            </h2>
          </div>
        </div>

        {/* 3 Steps Tabs: Theory - Practice - Quiz (scroll horizontally on small screens) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl overflow-x-auto shrink-0 max-w-full">
          <button
            type="button"
            onClick={() => setCurrentTab('theory')}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'theory'
                ? isWord
                  ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs'
                  : isExcel
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Lý thuyết</span>
            {progress.theoryCompleted && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('practice')}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'practice'
                ? isWord
                  ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs'
                  : isExcel
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>2. Thực hành ảo</span>
            {progress.practiceCompleted && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('quiz')}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'quiz'
                ? isWord
                  ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs'
                  : isExcel
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>3. Trắc nghiệm</span>
            {progress.quizCompleted && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
          </button>
        </div>
      </div>

      {/* Main Layout Container with Sidebar and Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* LEFT SIDEBAR: Lessons List (Matching exact screenshot pattern) */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 lg:z-auto w-72 sm:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 overflow-y-auto transform transition-transform duration-200 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {/* Header of Sidebar: CHUYÊN ĐỀ (8) and Progress % */}
          <div className="p-3.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 sticky top-0 z-10">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
              <span className="flex items-center gap-1.5 uppercase font-bold tracking-wider text-slate-700 dark:text-slate-300">
                <Layers className="w-4 h-4 text-sky-500" />
                CHUYÊN ĐỀ ({moduleInfo.lessons.length})
              </span>
              <span className="font-bold text-sky-600 dark:text-sky-400">{moduleProgressPct}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${isWord ? 'bg-sky-500' : isExcel ? 'bg-emerald-500' : 'bg-rose-500'}`}
                style={{ width: `${moduleProgressPct}%` }}
              />
            </div>
          </div>

          {/* Lessons List Navigation */}
          <div className="p-2 space-y-1.5 flex-1">
            {moduleInfo.lessons.map(l => {
              const isSelected = l.id === lesson.id;
              const p = userProgress[l.id];
              const isFinished = p && p.theoryCompleted && p.practiceCompleted && p.quizCompleted;
              const isUnlocked = isTeacher || p?.isUnlocked || l.order === 1;

              // Step count completed (0 to 3)
              const stepsDone = (p?.theoryCompleted ? 1 : 0) + (p?.practiceCompleted ? 1 : 0) + (p?.quizCompleted ? 1 : 0);

              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => handleSelectLessonFromSidebar(l)}
                  className={`w-full text-left p-3 rounded-2xl transition-all duration-150 relative group flex items-start gap-3 cursor-pointer border ${
                    isSelected
                      ? isWord
                        ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-500/50 shadow-xs ring-1 ring-sky-400/30'
                        : isExcel
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/50 shadow-xs ring-1 ring-emerald-400/30'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-500/50 shadow-xs ring-1 ring-rose-400/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Left Number Box: matches exact screenshot style */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? isWord
                          ? 'bg-sky-600 text-white font-black shadow-xs'
                          : isExcel
                          ? 'bg-emerald-600 text-white font-black shadow-xs'
                          : 'bg-rose-600 text-white font-black shadow-xs'
                        : isFinished
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        : isUnlocked
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-200'
                        : 'bg-slate-100 dark:bg-slate-800/60 text-slate-400'
                    }`}
                  >
                    {isFinished ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : isUnlocked ? (
                      l.order
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </div>

                  {/* Lesson Meta and Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold">
                        Bài {l.order}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                        {stepsDone}/3
                      </span>
                    </div>
                    <p className={`text-xs font-bold line-clamp-2 leading-relaxed ${
                      isSelected
                        ? 'text-slate-900 dark:text-white'
                        : isUnlocked
                        ? 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {l.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* MIDDLE COLUMN: Sub-items list matching the right side of screenshot (Theories, Tasks, Quiz) */}
        <div className="w-full md:w-80 lg:w-84 xl:w-96 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 flex flex-col shrink-0 max-h-[35vh] md:max-h-full overflow-y-auto">
          <div className="p-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 sticky top-0 z-10 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
              Bài {lesson.order}: {lesson.title}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold shrink-0">
              {currentTab === 'theory' ? `${lesson.theories.length} lý thuyết` : currentTab === 'practice' ? `${lesson.tasks.length} thao tác` : `${lesson.quiz.length} câu hỏi`}
            </span>
          </div>

          <div className="p-2 space-y-1.5 flex-1">
            {currentTab === 'theory' && (
              lesson.theories.map((th, thIdx) => {
                return (
                  <div
                    key={th.id}
                    className="p-3 rounded-2xl border border-sky-500/30 bg-sky-50/40 dark:bg-sky-950/20 text-left space-y-1"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                        LÝ THUYẾT {thIdx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Thẻ {thIdx + 1}/{lesson.theories.length}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {th.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {th.concept}
                    </p>
                  </div>
                );
              })
            )}

            {currentTab === 'practice' && (
              lesson.tasks.map((task, tIdx) => {
                return (
                  <div
                    key={task.id}
                    className="p-3 rounded-2xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 text-left space-y-1"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                        THAO TÁC {tIdx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Bước {tIdx + 1}/{lesson.tasks.length}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {task.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {task.instruction}
                    </p>
                  </div>
                );
              })
            )}

            {currentTab === 'quiz' && (
              lesson.quiz.map((q, qIdx) => {
                return (
                  <div
                    key={q.id}
                    className="p-3 rounded-2xl border border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20 text-left space-y-1"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                        CÂU {qIdx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{q.options.length} lựa chọn</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2">
                      {q.question}
                    </h4>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT MAIN WORKSPACE: Interactive Viewer / Simulator / Quiz */}
        <main className="flex-1 flex flex-col overflow-y-auto min-w-0 bg-slate-50 dark:bg-slate-950">
          <div className="flex-1 overflow-y-auto p-2 sm:p-4">
            {currentTab === 'theory' && (
              <TheoryViewer
                theories={lesson.theories}
                onCompleteTheory={handleTheoryFinished}
                isCompleted={progress.theoryCompleted}
              />
            )}

            {currentTab === 'practice' && (
              <VirtualOfficeSimulator
                moduleType={activeModuleId}
                tasks={lesson.tasks}
                onAllTasksCompleted={handlePracticeFinished}
              />
            )}

            {currentTab === 'quiz' && (
              <QuizEngine
                questions={lesson.quiz}
                onQuizCompleted={handleQuizFinished}
                previousScore={progress.quizScore}
              />
            )}
          </div>
      {/* Bottom Lesson Navigation Bar */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 select-none shrink-0">
        <button
          type="button"
          disabled={!prevLesson}
          onClick={() => {
            if (prevLesson) {
              setActiveLessonId(prevLesson.id);
              setCurrentTab('theory');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Bài trước:</span>
          <span className="truncate max-w-[120px] sm:max-w-[180px]">
            {prevLesson ? `Bài ${prevLesson.order}` : 'Hết bài'}
          </span>
        </button>

        {/* Lesson Progress Status Pill */}
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span>Tiến trình bài:</span>
          <div className="flex items-center gap-1 font-bold">
            <span className={`px-2 py-0.5 rounded text-[10px] ${progress.theoryCompleted ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>Lý thuyết</span>
            <span className={`px-2 py-0.5 rounded text-[10px] ${progress.practiceCompleted ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>Thực hành</span>
            <span className={`px-2 py-0.5 rounded text-[10px] ${progress.quizCompleted ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>Trắc nghiệm ({progress.quizScore}/{lesson.quiz.length})</span>
          </div>
        </div>

        <button
          type="button"
          disabled={!nextLesson}
          onClick={handleSelectNextLesson}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer ${
            !nextLesson
              ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400'
              : userProgress[nextLesson.id]?.isUnlocked || (progress.theoryCompleted && progress.practiceCompleted && progress.quizCompleted)
              ? 'bg-sky-600 hover:bg-sky-700 text-white'
              : 'bg-amber-500 hover:bg-amber-600 text-white'
          }`}
        >
          <span className="truncate max-w-[120px] sm:max-w-[180px]">
            {nextLesson ? `Bài tiếp: Bài ${nextLesson.order}` : 'Đã hết bài'}
          </span>
          {nextLesson && !(userProgress[nextLesson.id]?.isUnlocked || (progress.theoryCompleted && progress.practiceCompleted && progress.quizCompleted)) ? (
            <Lock className="w-3.5 h-3.5" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Modal Confirm Unlock Next Lesson */}
      <UnlockLessonConfirmModal
        isOpen={Boolean(pendingNextLesson)}
        lessonTitle={pendingNextLesson?.title || ''}
        lessonOrder={pendingNextLesson?.order || 0}
        prevLessonTitle={pendingNextLesson?.prevTitle || `Bài ${lesson.order}: ${lesson.title}`}
        onConfirm={handleConfirmUnlock}
        onCancel={() => setPendingNextLesson(null)}
      />
        </main>
      </div>
    </div>
  );
};
