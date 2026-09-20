import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { BookOpen, Laptop, HelpCircle, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { triggerConfetti, playRewardChime } from '../../utils/celebration';
import { UnlockLessonConfirmModal } from '../modals/UnlockLessonConfirmModal';
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
  const lesson = moduleInfo.lessons.find(l => l.id === activeLessonId) || moduleInfo.lessons[0];
  const progress = userProgress[lesson.id] || {
    theoryCompleted: false,
    practiceCompleted: false,
    quizScore: 0,
    quizCompleted: false,
    isUnlocked: true
  };

  const [pendingNextLesson, setPendingNextLesson] = React.useState<{ id: string; title: string; order: number } | null>(null);
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
        order: nextLesson.order
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
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Lesson Header Sub-nav */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 select-none shrink-0">
        {/* Lesson Breadcrumb & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={onBackToCurriculum}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer shrink-0"
            title="Quay lại danh sách bài học"
          >
            <ArrowLeft className="w-4 h-4" />
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

      {/* Main Tab View Area */}
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
        prevLessonTitle={`Bài ${lesson.order}: ${lesson.title}`}
        onConfirm={handleConfirmUnlock}
        onCancel={() => setPendingNextLesson(null)}
      />
    </div>
  );
};
