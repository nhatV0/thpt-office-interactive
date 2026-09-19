import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ModuleType, UserProgressState } from '../types/curriculum';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface LearningContextType {
  activeModuleId: ModuleType;
  activeLessonId: string;
  currentTab: 'theory' | 'practice' | 'quiz';
  userProgress: Record<string, UserProgressState>;
  xpPoints: number;
  streak: number;
  completedCount: number;
  totalLessons: number;
  setActiveModuleId: (id: ModuleType) => void;
  setActiveLessonId: (id: string) => void;
  setCurrentTab: (tab: 'theory' | 'practice' | 'quiz') => void;
  markTheoryCompleted: (lessonId: string) => void;
  markPracticeCompleted: (lessonId: string) => void;
  submitQuizScore: (lessonId: string, score: number, totalQuestions: number) => void;
  resetLessonProgress: (lessonId: string) => void;
  unlockNextLesson: (currentLessonId: string) => void;
}

const STORAGE_KEY = 'thpt_office_learning_v1';

const defaultProgress: Record<string, UserProgressState> = {
  'word-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
  'word-lesson-2': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-3': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-4': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-5': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'word-lesson-6': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
  'excel-lesson-2': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-3': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-4': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-5': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-6': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'excel-lesson-7': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
  'pp-lesson-2': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-3': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-4': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
  'pp-lesson-5': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: false },
};

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModuleId, setActiveModuleId] = useState<ModuleType>('word');
  const [activeLessonId, setActiveLessonId] = useState<string>('word-lesson-1');
  const [currentTab, setCurrentTab] = useState<'theory' | 'practice' | 'quiz'>('theory');

  const [userProgress, setUserProgress] = useState<Record<string, UserProgressState>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.userProgress) {
          return { ...defaultProgress, ...parsed.userProgress };
        }
      }
    } catch {
      // ignore
    }
    return defaultProgress;
  });

  const [xpPoints, setXpPoints] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return typeof parsed.xpPoints === 'number' ? parsed.xpPoints : 0;
      }
    } catch {
      // ignore
    }
    return 0;
  });

  const [streak] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return typeof parsed.streak === 'number' ? parsed.streak : 1;
      }
    } catch {
      // ignore
    }
    return 1;
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          userProgress,
          xpPoints,
          streak,
          lastActive: new Date().toISOString()
        })
      );
    } catch {
      // ignore
    }
  }, [userProgress, xpPoints, streak]);

  const markTheoryCompleted = (lessonId: string) => {
    setUserProgress(prev => {
      const current = prev[lessonId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true };
      if (current.theoryCompleted) return prev;
      setXpPoints(xp => xp + 20);
      return {
        ...prev,
        [lessonId]: {
          ...current,
          theoryCompleted: true
        }
      };
    });
  };

  const markPracticeCompleted = (lessonId: string) => {
    setUserProgress(prev => {
      const current = prev[lessonId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true };
      if (current.practiceCompleted) return prev;
      setXpPoints(xp => xp + 40);
      return {
        ...prev,
        [lessonId]: {
          ...current,
          practiceCompleted: true
        }
      };
    });
  };

  const submitQuizScore = (lessonId: string, score: number, totalQuestions: number) => {
    setUserProgress(prev => {
      const current = prev[lessonId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true };
      const gained = Math.round((score / totalQuestions) * 40);
      if (!current.quizCompleted) {
        setXpPoints(xp => xp + gained);
      }
      return {
        ...prev,
        [lessonId]: {
          ...current,
          quizScore: Math.max(current.quizScore, score),
          quizCompleted: true
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
      setUserProgress(prev => ({
        ...prev,
        [nextId]: {
          ...(prev[nextId] || { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false }),
          isUnlocked: true
        }
      }));
    }
  };

  const resetLessonProgress = (lessonId: string) => {
    setUserProgress(prev => ({
      ...prev,
      [lessonId]: {
        ...(prev[lessonId] || {}),
        theoryCompleted: false,
        practiceCompleted: false,
        quizScore: 0,
        quizCompleted: false,
        isUnlocked: prev[lessonId]?.isUnlocked ?? true
      }
    }));
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
        activeModuleId,
        activeLessonId,
        currentTab,
        userProgress,
        xpPoints,
        streak,
        completedCount,
        totalLessons,
        setActiveModuleId,
        setActiveLessonId,
        setCurrentTab,
        markTheoryCompleted,
        markPracticeCompleted,
        submitQuizScore,
        resetLessonProgress,
        unlockNextLesson
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
