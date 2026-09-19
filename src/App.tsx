import React, { useState, useEffect } from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import type { ModuleType } from './types/curriculum';
import { CURRICULUM_DATA } from './data/curriculumData';
import { HeaderNav } from './components/navigation/HeaderNav';
import { CurriculumView } from './components/views/CurriculumView';
import { LessonUnitView } from './components/views/LessonUnitView';
import { SummaryModal } from './components/modals/SummaryModal';

const AppContent: React.FC = () => {
  const {
    activeModuleId,
    activeLessonId,
    setActiveModuleId,
    setActiveLessonId,
    setCurrentTab,
    userProgress
  } = useLearning();

  const [viewMode, setViewMode] = useState<'curriculum' | 'lesson'>('curriculum');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const currentModule = CURRICULUM_DATA[activeModuleId];
  const currentLesson =
    currentModule.lessons.find(l => l.id === activeLessonId) || currentModule.lessons[0];

  const handleSelectLesson = (modId: ModuleType, lessonId: string) => {
    setActiveModuleId(modId);
    setActiveLessonId(lessonId);
    setCurrentTab('theory');
    setViewMode('lesson');
  };

  const handleNextLesson = () => {
    setIsSummaryOpen(false);
    const allLessons: { modId: ModuleType; lessonId: string }[] = [];
    (['word', 'excel', 'powerpoint'] as ModuleType[]).forEach(m => {
      CURRICULUM_DATA[m].lessons.forEach(l => {
        allLessons.push({ modId: m, lessonId: l.id });
      });
    });

    const currentIndex = allLessons.findIndex(l => l.lessonId === activeLessonId);
    if (currentIndex !== -1 && currentIndex + 1 < allLessons.length) {
      const next = allLessons[currentIndex + 1];
      setActiveModuleId(next.modId);
      setActiveLessonId(next.lessonId);
      setCurrentTab('theory');
    } else {
      setViewMode('curriculum');
    }
  };

  const currentProgress = userProgress[currentLesson.id] || {
    theoryCompleted: false,
    practiceCompleted: false,
    quizScore: 0,
    quizCompleted: false,
    isUnlocked: true
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Header Navigation */}
      <HeaderNav
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onBackToCurriculum={() => setViewMode('curriculum')}
        showBackButton={viewMode === 'lesson'}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {viewMode === 'curriculum' ? (
          <CurriculumView onSelectLesson={handleSelectLesson} />
        ) : (
          <LessonUnitView
            onBackToCurriculum={() => setViewMode('curriculum')}
            onOpenSummary={() => setIsSummaryOpen(true)}
          />
        )}
      </main>

      {/* Summary Celebration Modal */}
      {isSummaryOpen && (
        <SummaryModal
          lessonTitle={currentLesson.title}
          earnedXp={60}
          quizScore={currentProgress.quizScore}
          totalQuizQuestions={currentLesson.quiz.length}
          onNextLesson={handleNextLesson}
          onReviewLesson={() => {
            setIsSummaryOpen(false);
            setCurrentTab('theory');
          }}
          onClose={() => setIsSummaryOpen(false)}
        />
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LearningProvider>
      <AppContent />
    </LearningProvider>
  );
};

export default App;
