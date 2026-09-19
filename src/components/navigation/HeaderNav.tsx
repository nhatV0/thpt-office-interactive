import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { useAuth } from '../../context/AuthContext';
import {
  Flame,
  Trophy,
  Moon,
  Sun,
  CheckCircle2,
  Users,
  LogIn,
  LogOut,
  ChevronRight,
  LayoutGrid
} from 'lucide-react';
import { getCourseById } from '../../data/coursesData';
interface HeaderNavProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onGoHome: () => void;
  onOpenCourses?: () => void;
  onOpenCurriculum?: () => void;
  onOpenDashboard: () => void;
  onOpenPractice: () => void;
  onOpenLogin: () => void;
  currentView: 'courses' | 'curriculum' | 'lesson' | 'dashboard' | 'practice' | 'programming';
  activeCourseId?: string;
}
export const HeaderNav: React.FC<HeaderNavProps> = ({
  darkMode,
  onToggleDarkMode,
  onGoHome,
  onOpenCourses,
  onOpenCurriculum,
  onOpenDashboard,
  onOpenLogin,
  currentView,
  activeCourseId = 'word'
}) => {
  const { xpPoints, streak, completedCount, totalLessons } = useLearning();
  const { currentUser, logout } = useAuth();
  const currentCourse = getCourseById(activeCourseId);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 h-14 flex items-center justify-between shadow-xs select-none">
      {/* Brand & Home button */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Nút Chọn Khóa Học / Trang Chủ */}
        <button
          type="button"
          onClick={onOpenCourses || onGoHome}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
            currentView === 'courses'
              ? 'border-sky-500 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 shadow-xs'
              : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
          }`}
          title="Màn hình chọn khóa học"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-sky-600" />
          <span>Khóa Học</span>
        </button>

        {/* Breadcrumbs Navigation */}
        <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          {currentView !== 'courses' && (
            <>
              <button
                type="button"
                onClick={onOpenCourses || onGoHome}
                className="hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer font-medium"
              >
                Khóa Học
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </>
          )}

          {currentView === 'curriculum' && (
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {currentCourse?.title || 'Lộ trình bài học'}
            </span>
          )}

          {currentView === 'lesson' && (
            <>
              <button
                type="button"
                onClick={onOpenCurriculum}
                className="hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer font-medium truncate max-w-[140px]"
              >
                {currentCourse?.title || 'Khóa học'}
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="font-bold text-sky-600 dark:text-sky-400 truncate max-w-[160px]">
                Đang học bài
              </span>
            </>
          )}

          {currentView === 'practice' && (
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              Ôn Luyện MOS Word 2019
            </span>
          )}

          {currentView === 'dashboard' && (
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              Quản Lý Học Viên
            </span>
          )}
        </div>

        {/* Nút Quản Lý Học Viên (Chế độ giáo viên) */}
        {currentUser?.role === 'teacher' && (
          <button
            type="button"
            onClick={onOpenDashboard}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
              currentView === 'dashboard'
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 shadow-xs'
                : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
            title="Khu vực Quản lý học viên"
          >
            <Users className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden sm:inline">Quản Lý Học Viên</span>
          </button>
        )}

        {/* Logo Brand Title */}
        <div
          onClick={onOpenCourses || onGoHome}
          className="flex items-center gap-2 cursor-pointer pl-1"
        >
          <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            MOS
          </div>
          <div className="hidden xl:block">
            <h1 className="text-xs font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-none">
              Tin Học Văn Phòng THPT
            </h1>
          </div>
        </div>
      </div>

      {/* Stats, Dark Mode & Auth Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak Counter */}
        <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 text-xs font-bold">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{streak} ngày</span>
        </div>

        {/* XP Points */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 text-xs font-bold">
          <Trophy className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>{xpPoints} XP</span>
        </div>

        {/* Completed Indicator */}
        <div className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {completedCount}/{totalLessons} bài
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <button
          type="button"
          onClick={onToggleDarkMode}
          title={darkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-600" />
          )}
        </button>

        {/* User Account / Login Button */}
        {currentUser ? (
          <div className="flex items-center gap-2 pl-1 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block leading-tight truncate max-w-[120px]">
                {currentUser.fullName}
              </span>
              <span className="text-[10px] text-slate-400 block font-mono">
                {currentUser.role === 'teacher' ? 'Giáo viên' : `Lớp ${currentUser.schoolClass}`}
              </span>
            </div>
            <button
              type="button"
              onClick={logout}
              title="Đăng xuất"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-500 hover:text-rose-600 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs cursor-pointer transition-all"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Đăng Nhập</span>
          </button>
        )}
      </div>
    </header>
  );
};
