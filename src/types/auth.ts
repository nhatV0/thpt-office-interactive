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
  passwordHash?: string; // Băm an toàn (SHA-256)
  fullName: string;
  role: UserRole;
  schoolClass?: string; // e.g. "12A1", "11B2"
  allowedCourses: string[]; // Danh sách mã khóa học được phép truy cập, e.g. ['word'], ['word', 'excel'], ['word', 'excel', 'powerpoint']
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
  failedLoginAttempts?: number;
  lockedUntil?: string | null;
}
