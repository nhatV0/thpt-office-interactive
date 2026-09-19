import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserAccount } from '../types/auth';

interface AuthContextType {
  currentUser: UserAccount | null;
  accounts: UserAccount[];
  login: (username: string, password?: string) => boolean;
  logout: () => void;
  createStudent: (username: string, fullName: string, schoolClass: string) => boolean;
  deleteStudent: (id: string) => void;
  resetStudentProgress: (id: string) => void;
  updateCurrentUserProgress: (updater: (prev: UserAccount) => UserAccount) => void;
}

const ACCOUNTS_STORAGE_KEY = 'thpt_office_accounts_v1';
const CURRENT_USER_KEY = 'thpt_office_current_user_v1';

const defaultAccounts: UserAccount[] = [
  {
    id: 'teacher-1',
    username: 'giaovien',
    password: '123',
    fullName: 'Thầy / Cô Quản Lý Tin Học THPT',
    role: 'teacher',
    xpPoints: 999,
    streak: 30,
    progress: {},
    createdAt: new Date().toISOString()
  },
  {
    id: 'student-1',
    username: 'hocvien1',
    password: '123',
    fullName: 'Nguyễn Văn An',
    role: 'student',
    schoolClass: '12A1',
    xpPoints: 240,
    streak: 4,
    progress: {
      'word-lesson-1': { theoryCompleted: true, practiceCompleted: true, quizScore: 5, quizCompleted: true, isUnlocked: true },
      'word-lesson-2': { theoryCompleted: true, practiceCompleted: true, quizScore: 4, quizCompleted: true, isUnlocked: true },
      'word-lesson-3': { theoryCompleted: true, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'student-2',
    username: 'hocvien2',
    password: '123',
    fullName: 'Trần Thị Mai',
    role: 'student',
    schoolClass: '12A2',
    xpPoints: 120,
    streak: 2,
    progress: {
      'word-lesson-1': { theoryCompleted: true, practiceCompleted: true, quizScore: 4, quizCompleted: true, isUnlocked: true },
      'excel-lesson-1': { theoryCompleted: true, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
    },
    createdAt: new Date().toISOString()
  },
  {
    id: 'student-3',
    username: 'hocvien3',
    password: '123',
    fullName: 'Lê Hoàng Nam',
    role: 'student',
    schoolClass: '11B1',
    xpPoints: 60,
    streak: 1,
    progress: {
      'word-lesson-1': { theoryCompleted: true, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
    },
    createdAt: new Date().toISOString()
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accounts, setAccounts] = useState<UserAccount[]>(() => {
    try {
      const saved = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return defaultAccounts;
  });

  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const saved = localStorage.getItem(CURRENT_USER_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    // Default to student-1 for immediate seamless preview, or null
    return defaultAccounts[1];
  });

  useEffect(() => {
    try {
      localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
    } catch {
      // ignore
    }
  }, [accounts]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch {
      // ignore
    }
  }, [currentUser]);

  const login = (username: string, password?: string): boolean => {
    const found = accounts.find(
      acc => acc.username.toLowerCase() === username.trim().toLowerCase()
    );
    if (!found) return false;
    if (password && found.password && found.password !== password.trim()) {
      return false;
    }
    setCurrentUser(found);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const createStudent = (username: string, fullName: string, schoolClass: string): boolean => {
    const exists = accounts.some(
      a => a.username.toLowerCase() === username.trim().toLowerCase()
    );
    if (exists) return false;

    const newStudent: UserAccount = {
      id: 'student-' + Date.now(),
      username: username.trim(),
      password: '123',
      fullName: fullName.trim(),
      role: 'student',
      schoolClass: schoolClass.trim(),
      xpPoints: 0,
      streak: 1,
      progress: {
        'word-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
        'excel-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
        'pp-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true }
      },
      createdAt: new Date().toISOString()
    };

    setAccounts(prev => [newStudent, ...prev]);
    return true;
  };

  const deleteStudent = (id: string) => {
    setAccounts(prev => prev.filter(a => a.id !== id));
    if (currentUser?.id === id) {
      setCurrentUser(null);
    }
  };

  const resetStudentProgress = (id: string) => {
    setAccounts(prev =>
      prev.map(a => {
        if (a.id === id) {
          return {
            ...a,
            xpPoints: 0,
            progress: {
              'word-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
              'excel-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
              'pp-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true }
            }
          };
        }
        return a;
      })
    );

    if (currentUser?.id === id) {
      setCurrentUser(curr =>
        curr
          ? {
              ...curr,
              xpPoints: 0,
              progress: {
                'word-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
                'excel-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true },
                'pp-lesson-1': { theoryCompleted: false, practiceCompleted: false, quizScore: 0, quizCompleted: false, isUnlocked: true }
              }
            }
          : null
      );
    }
  };

  const updateCurrentUserProgress = (updater: (prev: UserAccount) => UserAccount) => {
    if (!currentUser) return;
    const updated = updater(currentUser);
    setCurrentUser(updated);
    setAccounts(prev => prev.map(a => (a.id === updated.id ? updated : a)));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        accounts,
        login,
        logout,
        createStudent,
        deleteStudent,
        resetStudentProgress,
        updateCurrentUserProgress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
