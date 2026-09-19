import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { Flame, Trophy, Moon, Sun, CheckCircle2 } from 'lucide-react';

interface HeaderNavProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onBackToCurriculum?: () => void;
  showBackButton?: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  darkMode,
  onToggleDarkMode,
  onBackToCurriculum,
  showBackButton = false
}) => {
  const { xpPoints, streak, completedCount, totalLessons } = useLearning();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 h-14 flex items-center justify-between shadow-xs select-none">
      {/* Brand & Back Button */}
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button
            type="button"
            onClick={onBackToCurriculum}
            className="text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 cursor-pointer"
          >
            Lộ trình học
          </button>
        )}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            THPT
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Tin Học Văn Phòng Tương Tác
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Word | Excel | PowerPoint Chuẩn MOS & THPT
            </p>
          </div>
        </div>
      </div>

      {/* Stats and Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 text-xs font-bold">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{streak} ngày</span>
        </div>

        {/* XP Points */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 text-xs font-bold">
          <Trophy className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>{xpPoints} XP</span>
        </div>

        {/* Completed Indicator */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {completedCount}/{totalLessons} bài học
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <button
          type="button"
          onClick={onToggleDarkMode}
          title={darkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
          className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>
      </div>
    </header>
  );
};
