import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { BookOpen, Laptop, HelpCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { triggerConfetti, playRewardChime } from '../../utils/celebration';
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
    unlockNextLesson
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
    </div>
  );
};
