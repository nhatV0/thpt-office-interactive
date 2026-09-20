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
import { RoboticsLearningView } from './components/views/RoboticsLearningView';
import type { RoboticsCourseId } from './types/roboticsCourse';
import { IC3LearningView } from './components/views/IC3LearningView';
import type { IC3CourseId } from './types/ic3Course';
import { LandingPageView } from './components/views/LandingPageView';
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

  // Persistent view state key per user
  const sessionStateKey = currentUser?.username
    ? `thpt_office_last_view_state_${currentUser.username}`
    : 'thpt_office_last_view_state_guest';

  const [viewMode, setViewMode] = useState<'landing' | 'courses' | 'curriculum' | 'lesson' | 'dashboard' | 'practice' | 'programming' | 'robotics' | 'ic3'>(() => {
    // Học viên khi đăng nhập thành công sẽ luôn ở màn hình landing page
    if (currentUser && currentUser.role === 'student') {
      return 'landing';
    }
    try {
      const saved = localStorage.getItem(sessionStateKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.viewMode) return parsed.viewMode;
      }
    } catch {
      // ignore
    }
    return 'landing';
  });

  const [cpState, setCpState] = useState<{ lessonIndex: number; tab: 'theory' | 'practice' | 'summary'; problemId?: string }>(() => {
    try {
      const saved = localStorage.getItem(sessionStateKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          lessonIndex: parsed.cpLessonIndex ?? 0,
          tab: parsed.cpTab ?? 'theory',
          problemId: parsed.cpProblemId
        };
      }
    } catch {
      // ignore
    }
    return { lessonIndex: 0, tab: 'theory' };
  });

  const [roboticsLessonId, setRoboticsLessonId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(sessionStateKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.roboticsLessonId || '';
      }
    } catch {
      // ignore
    }
    return '';
  });
  const [ic3TopicId, setIc3TopicId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(sessionStateKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.ic3TopicId || '';
      }
    } catch {
      // ignore
    }
    return '';
  });
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
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('thpt_office_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Note: Initial state is already restored from localStorage in LearningContext constructor.

  // Save view state to localStorage on every change
  useEffect(() => {
    try {
      const statePayload = {
        viewMode,
        activeCourseId,
        activeModuleId,
        activeLessonId,
        cpLessonIndex: cpState.lessonIndex,
        cpTab: cpState.tab,
        cpProblemId: cpState.problemId,
        roboticsLessonId,
        ic3TopicId
      };
      localStorage.setItem(sessionStateKey, JSON.stringify(statePayload));
    } catch {
      // ignore
    }
  }, [viewMode, activeCourseId, activeModuleId, activeLessonId, cpState, roboticsLessonId, ic3TopicId, sessionStateKey]);
  // Unauthenticated user: show LandingPage by default; show LoginPage when user clicks login or modal
  if (!currentUser) {
    if (showLoginModal) {
      return (
        <LoginPage
          onBackToLanding={() => setShowLoginModal(false)}
        />
      );
    }
    return (
      <LandingPageView
        onLoginClick={() => setShowLoginModal(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
        onExploreCourses={() => {
          setShowLoginModal(true);
        }}
      />
    );
  }

  const currentModule = CURRICULUM_DATA[activeModuleId];
  const currentLesson =
    currentModule.lessons.find(l => l.id === activeLessonId) || currentModule.lessons[0];
  const handleSelectCourse = (course: CourseDefinition) => {
    setActiveCourseId(course.id);
    if (course.kind === 'programming') {
      setViewMode('programming');
    } else if (course.kind === 'robotics') {
      setViewMode('robotics');
    } else if (course.kind === 'practice') {
      setViewMode('practice');
    } else if (course.kind === 'ic3') {
      setViewMode('ic3');
    } else if (course.moduleId) {
      setActiveModuleId(course.moduleId);
      setActiveLessonId(`${course.moduleId}-lesson-1`);
      setCurrentTab('theory');
      setViewMode('lesson');
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
        onGoHome={() => setViewMode('landing')}
        onOpenCourses={() => setViewMode('courses')}
        onOpenCurriculum={() => setViewMode('curriculum')}
        onOpenDashboard={() => setViewMode('dashboard')}
        onOpenPractice={() => setViewMode('practice')}
        onOpenLogin={() => setShowLoginModal(true)}
        currentView={viewMode}
        activeCourseId={activeCourseId}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden min-h-0">
        {viewMode === 'landing' ? (
          <LandingPageView
            onLoginClick={() => setViewMode('courses')}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(prev => !prev)}
            onExploreCourses={() => setViewMode('courses')}
          />
        ) : viewMode === 'courses' ? (
          <CourseSelectionView
            onSelectCourse={handleSelectCourse}
            onOpenTeacherDashboard={() => setViewMode('dashboard')}
          />
        ) : viewMode === 'programming' ? (
          <CompetitiveProgrammingView
            courseId={(activeCourseId === 'cp-silver' || activeCourseId === 'cp-bronze' || activeCourseId === 'cp-basic') ? activeCourseId : 'cp-basic'}
            onBackToCourses={() => setViewMode('courses')}
            initialLessonIndex={cpState.lessonIndex}
            initialTab={cpState.tab}
            initialProblemId={cpState.problemId}
            onStateChange={setCpState}
          />
        ) : viewMode === 'robotics' ? (
          <RoboticsLearningView
            courseId={(activeCourseId === 'robotics-basic' || activeCourseId === 'robotics-intermediate' || activeCourseId === 'robotics-advanced') ? (activeCourseId as RoboticsCourseId) : 'robotics-basic'}
            onBackToCourses={() => setViewMode('courses')}
            initialLessonId={roboticsLessonId}
            onLessonChange={setRoboticsLessonId}
          />
        ) : viewMode === 'ic3' ? (
          <IC3LearningView
            courseId={(activeCourseId === 'ic3-level-1' || activeCourseId === 'ic3-level-2' || activeCourseId === 'ic3-level-3') ? (activeCourseId as IC3CourseId) : 'ic3-level-1'}
            onBackToCourses={() => setViewMode('courses')}
            initialTopicId={ic3TopicId}
            onTopicChange={setIc3TopicId}
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
            onBackToCurriculum={() => setViewMode('courses')}
            onOpenSummary={() => setIsSummaryOpen(true)}
          />
        )}
      </main>

      {/* Guest Login Modal if exploring */}
      {showLoginModal && !currentUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-md">
            <LoginPage onBackToLanding={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}

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
