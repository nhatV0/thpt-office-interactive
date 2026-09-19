import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LearningProvider, useLearning } from './context/LearningContext';
import type { ModuleType } from './types/curriculum';
import { CURRICULUM_DATA } from './data/curriculumData';
import { HeaderNav } from './components/navigation/HeaderNav';
import { CurriculumView } from './components/views/CurriculumView';
import { LessonUnitView } from './components/views/LessonUnitView';
import { TeacherDashboard } from './components/views/TeacherDashboard';
import { WordPracticeReviewView } from './components/views/WordPracticeReviewView';
import { CourseSelectionView } from './components/views/CourseSelectionView';
import type { CourseDefinition } from './types/course';
import { SummaryModal } from './components/modals/SummaryModal';
import { LoginPage } from './components/views/LoginPage';
import { CompetitiveProgrammingView } from './components/views/CompetitiveProgrammingView';
const AppContent: React.FC = () => {
  const {
    activeCourseId,
    activeModuleId,
    activeLessonId,
    setActiveCourseId,
    setActiveModuleId,
    setActiveLessonId,
    setCurrentTab,
    userProgress
  } = useLearning();

  const { currentUser } = useAuth();
  const [viewMode, setViewMode] = useState<'courses' | 'curriculum' | 'lesson' | 'dashboard' | 'practice' | 'programming'>('courses');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('thpt_office_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('thpt_office_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('thpt_office_theme', 'light');
    }
  }, [darkMode]);

  // If user is not logged in, ALWAYS show the dedicated LoginPage!
  if (!currentUser) {
    return <LoginPage />;
  }

  const currentModule = CURRICULUM_DATA[activeModuleId];
  const currentLesson =
    currentModule.lessons.find(l => l.id === activeLessonId) || currentModule.lessons[0];

  const handleSelectCourse = (course: CourseDefinition) => {
    setActiveCourseId(course.id);
    if (course.kind === 'programming') {
      setViewMode('programming');
    } else if (course.kind === 'practice') {
      setViewMode('practice');
    } else if (course.moduleId) {
      setActiveModuleId(course.moduleId);
      setViewMode('curriculum');
    }
  };

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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white transition-colors duration-200">
      {/* Header Navigation */}
      <HeaderNav
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
        onGoHome={() => setViewMode('courses')}
        onOpenCourses={() => setViewMode('courses')}
        onOpenCurriculum={() => setViewMode('curriculum')}
        onOpenDashboard={() => setViewMode('dashboard')}
        onOpenPractice={() => setViewMode('practice')}
        onOpenLogin={() => {}}
        currentView={viewMode}
        activeCourseId={activeCourseId}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {viewMode === 'courses' ? (
          <CourseSelectionView
            onSelectCourse={handleSelectCourse}
            onOpenTeacherDashboard={() => setViewMode('dashboard')}
          />
        ) : viewMode === 'programming' ? (
          <CompetitiveProgrammingView
            courseId={activeCourseId === 'cp-silver' ? 'cp-silver' : 'cp-bronze'}
            onBackToCourses={() => setViewMode('courses')}
          />
        ) : viewMode === 'practice' ? (
          <WordPracticeReviewView
            onBackToCourses={() => setViewMode('courses')}
          />
        ) : viewMode === 'dashboard' && currentUser?.role === 'teacher' ? (
          <TeacherDashboard />
        ) : viewMode === 'curriculum' ? (
          <CurriculumView
            onSelectLesson={handleSelectLesson}
            onOpenPractice={() => setViewMode('practice')}
            onBackToCourses={() => setViewMode('courses')}
          />
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
    <AuthProvider>
      <LearningProvider>
        <AppContent />
      </LearningProvider>
    </AuthProvider>
  );
};

export default App;
