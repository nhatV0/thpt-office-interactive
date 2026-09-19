import React, { createContext, useContext, useState } from 'react';
import type { ModuleType, UserProgressState } from '../types/curriculum';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { useAuth } from './AuthContext';

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

  const [activeModuleId, setActiveModuleId] = useState<ModuleType>('word');
  const [activeLessonId, setActiveLessonId] = useState<string>('word-lesson-1');
  const [currentTab, setCurrentTab] = useState<'theory' | 'practice' | 'quiz'>('theory');

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
