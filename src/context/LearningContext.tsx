import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ModuleType, UserProgressState } from '../types/curriculum';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { getAllCourseIds, getCourseById } from '../data/coursesData';
import { useAuth } from './AuthContext';
interface LearningContextType {
  activeCourseId: string;
  activeModuleId: ModuleType;
  activeLessonId: string;
  currentTab: 'theory' | 'practice' | 'quiz';
  userProgress: Record<string, UserProgressState>;
  xpPoints: number;
  streak: number;
  completedCount: number;
  totalLessons: number;
  setActiveCourseId: (id: string) => void;
  setActiveModuleId: (id: ModuleType) => void;
  setActiveLessonId: (id: string) => void;
  setCurrentTab: (tab: 'theory' | 'practice' | 'quiz') => void;
  markTheoryCompleted: (lessonId: string) => void;
  markPracticeCompleted: (lessonId: string) => void;
  submitQuizScore: (lessonId: string, score: number, totalQuestions: number) => void;
  resetLessonProgress: (lessonId: string) => void;
  unlockNextLesson: (currentLessonId: string) => void;
  addXP: (amount: number) => void;
  calculateCourseProgress: (courseId: string) => { completed: number; total: number; percentage: number };
}

const defaultProgress: Record<string, UserProgressState> = {
  'word-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
  'word-lesson-2': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-3': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-4': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-5': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-6': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-7': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-8': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
  'excel-lesson-2': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-3': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-4': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-5': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-6': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-7': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-8': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
  'pp-lesson-2': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-3': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-4': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-5': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-6': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-7': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-8': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
};

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, updateCurrentUserProgress } = useAuth();

  const isTeacher = currentUser?.role === 'teacher';
  const allowedCourses = isTeacher
    ? getAllCourseIds()
    : currentUser?.allowedCourses && currentUser.allowedCourses.length > 0
    ? currentUser.allowedCourses
    : ['word'];

  const initialCourseId = allowedCourses[0] || 'word';
  const initialCourseDef = getCourseById(initialCourseId);
  const initialModule: ModuleType = (initialCourseDef?.moduleId as ModuleType) || 'word';

  const [activeCourseId, setActiveCourseIdState] = useState<string>(initialCourseId);
  const [activeModuleId, setActiveModuleIdState] = useState<ModuleType>(initialModule);
  const [activeLessonId, setActiveLessonId] = useState<string>(`${initialModule}-lesson-1`);
  const [currentTab, setCurrentTab] = useState<'theory' | 'practice' | 'quiz'>('theory');

  // Keep activeCourseId and activeModuleId within allowed courses
  useEffect(() => {
    if (!allowedCourses.includes(activeCourseId)) {
      const fallbackCourse = allowedCourses[0] || 'word';
      setActiveCourseIdState(fallbackCourse);
      const courseDef = getCourseById(fallbackCourse);
      if (courseDef && courseDef.moduleId) {
        setActiveModuleIdState(courseDef.moduleId);
        setActiveLessonId(`${courseDef.moduleId}-lesson-1`);
      }
    }
  }, [allowedCourses, activeCourseId]);

  const setActiveCourseId = (courseId: string) => {
    if (allowedCourses.includes(courseId)) {
      setActiveCourseIdState(courseId);
      const courseDef = getCourseById(courseId);
      if (courseDef && courseDef.kind === 'curriculum' && courseDef.moduleId) {
        setActiveModuleIdState(courseDef.moduleId);
        setActiveLessonId(`${courseDef.moduleId}-lesson-1`);
      }
    }
  };

  const setActiveModuleId = (id: ModuleType) => {
    if (allowedCourses.includes(id)) {
      setActiveCourseIdState(id);
      setActiveModuleIdState(id);
      setActiveLessonId(`${id}-lesson-1`);
    }
  };
  // If currentUser has progress, sync with it; otherwise use default
  const userProgress = currentUser?.progress
    ? { ...defaultProgress, ...currentUser.progress }
    : defaultProgress;
  const xpPoints = currentUser?.xpPoints ?? 0;
  const streak = currentUser?.streak ?? 1;

  const markTheoryCompleted = (lessonId: string) => {
    updateCurrentUserProgress(user => {
      const current = user.progress[lessonId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true };
      if (current.theoryCompleted) return user;
      return {
        ...user,
        xpPoints: user.xpPoints + 20,
        progress: {
          ...user.progress,
          [lessonId]: {
            ...current,
            theoryCompleted: true
          }
        }
      };
    });
  };

  const markPracticeCompleted = (lessonId: string) => {
    updateCurrentUserProgress(user => {
      const current = user.progress[lessonId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true };
      if (current.practiceCompleted) return user;
      return {
        ...user,
        xpPoints: user.xpPoints + 40,
        progress: {
          ...user.progress,
          [lessonId]: {
            ...current,
            practiceCompleted: true
          }
        }
      };
    });
  };

  const submitQuizScore = (lessonId: string, score: number, totalQuestions: number) => {
    updateCurrentUserProgress(user => {
      const current = user.progress[lessonId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true };
      const gained = Math.round((score / totalQuestions) * 40);
      const newXp = current.quizCompleted ? user.xpPoints : user.xpPoints + gained;

      return {
        ...user,
        xpPoints: newXp,
        progress: {
          ...user.progress,
          [lessonId]: {
            ...current,
            quizScore: Math.max(current.quizScore, score),
            quizCompleted: true
          }
        }
      };
    });
  };

  const unlockNextLesson = (currentLessonId: string) => {
    const allLessonIds = [
      ...CURRICULUM_DATA.word.lessons.map(l => l.id),
      ...CURRICULUM_DATA.excel.lessons.map(l => l.id),
      ...CURRICULUM_DATA.powerpoint.lessons.map(l => l.id)
    ];
    const currentIndex = allLessonIds.indexOf(currentLessonId);
    if (currentIndex !== -1 && currentIndex + 1 < allLessonIds.length) {
      const nextId = allLessonIds[currentIndex + 1];
      updateCurrentUserProgress(user => ({
        ...user,
        progress: {
          ...user.progress,
          [nextId]: {
            ...(user.progress[nextId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false }),
            isUnlocked: true
          }
        }
      }));
    }
  };

  const resetLessonProgress = (lessonId: string) => {
    updateCurrentUserProgress(user => ({
      ...user,
      progress: {
        ...user.progress,
        [lessonId]: {
          ...(user.progress[lessonId] || {}),
          theoryCompleted: false,
          practiceCompleted: false,
          quizScore: 0,
          quizCompleted: false,
          isUnlocked: user.progress[lessonId]?.isUnlocked ?? true
        }
      }
    }));
  };

  const addXP = (amount: number) => {
    updateCurrentUserProgress(user => ({
      ...user,
      xpPoints: user.xpPoints + amount
    }));
  };

  const calculateCourseProgress = (courseId: string) => {
    const courseDef = getCourseById(courseId);
    if (!courseDef) return { completed: 0, total: 0, percentage: 0 };

    if (courseDef.kind === 'programming') {
      try {
        const storageKeyTheory = `cp_${courseId}_theory_done`;
        const storageKeyProblems = `cp_${courseId}_problems_done`;
        const theories = JSON.parse(localStorage.getItem(storageKeyTheory) || '{}');
        const problems = JSON.parse(localStorage.getItem(storageKeyProblems) || '{}');
        const completedTheories = Object.values(theories).filter(Boolean).length;
        const solvedProblems = Object.values(problems).filter(Boolean).length;
        const total = courseDef.totalUnits || 10;
        const completed = completedTheories + (solvedProblems > 0 ? 1 : 0);
        const percentage = Math.min(100, Math.round((completed / total) * 100));
        return { completed, total, percentage };
      } catch {
        return { completed: 0, total: courseDef.totalUnits || 10, percentage: 0 };
      }
    }

    if (courseDef.kind === 'curriculum' && courseDef.moduleId) {
      const mod = CURRICULUM_DATA[courseDef.moduleId];
      if (!mod) return { completed: 0, total: 0, percentage: 0 };
      let completed = 0;
      mod.lessons.forEach(l => {
        const p = userProgress[l.id];
        if (p && p.theoryCompleted && p.practiceCompleted && p.quizCompleted) {
          completed += 1;
        }
      });
      return {
        completed,
        total: mod.lessons.length,
        percentage: Math.round((completed / mod.lessons.length) * 100)
      };
    }

    // For practice exams course
    const total = courseDef.totalUnits || 5;
    const completed = 0;
    return {
      completed,
      total,
      percentage: 0
    };
  };

  const completedCount = Object.values(userProgress).filter(
    p => p.theoryCompleted && p.practiceCompleted && p.quizCompleted
  ).length;

  const totalLessons =
    CURRICULUM_DATA.word.lessons.length +
    CURRICULUM_DATA.excel.lessons.length +
    CURRICULUM_DATA.powerpoint.lessons.length;

  return (
    <LearningContext.Provider
      value={{
        activeCourseId,
        activeModuleId,
        activeLessonId,
        currentTab,
        userProgress,
        xpPoints,
        streak,
        completedCount,
        totalLessons,
        setActiveCourseId,
        setActiveModuleId,
        setActiveLessonId,
        setCurrentTab,
        markTheoryCompleted,
        markPracticeCompleted,
        submitQuizScore,
        resetLessonProgress,
        unlockNextLesson,
        addXP,
        calculateCourseProgress
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
