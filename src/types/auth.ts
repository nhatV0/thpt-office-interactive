export type UserRole = 'student' | 'teacher';

export interface StudentProgressItem {
  lessonId: string;
  moduleId: 'word' | 'excel' | 'powerpoint';
  theoryCompleted: boolean;
  practiceCompleted: boolean;
  quizScore: number;
  quizCompleted: boolean;
  lastUpdated: string;
}

export interface UserAccount {
  id: string;
  username: string; // Tên đăng nhập
  password?: string;
  fullName: string;
  role: UserRole;
  schoolClass?: string; // e.g. "12A1", "11B2"
  xpPoints: number;
  streak: number;
  progress: Record<string, {
    theoryCompleted: boolean;
    practiceCompleted: boolean;
    quizScore: number;
    quizCompleted: boolean;
    isUnlocked: boolean;
  }>;
  createdAt: string;
}
