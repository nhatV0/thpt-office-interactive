import React from 'react';
import { Award, ArrowRight, RotateCcw } from 'lucide-react';
import { triggerConfetti, playRewardChime } from '../../utils/celebration';

interface SummaryModalProps {
  lessonTitle: string;
  earnedXp: number;
  quizScore: number;
  totalQuizQuestions: number;
  onNextLesson: () => void;
  onReviewLesson: () => void;
  onClose: () => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({
  lessonTitle,
  earnedXp,
  quizScore,
  totalQuizQuestions,
  onNextLesson,
  onReviewLesson,
  onClose
}) => {
  React.useEffect(() => {
    triggerConfetti('grand');
    playRewardChime('lesson-complete');
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in fade-in zoom-in duration-200">
        {/* Badge Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
          <Award className="w-8 h-8" />
        </div>

        {/* Title and Congratulations */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Xuất Sắc Hoàn Thành Bài Học
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            {lessonTitle}
          </h3>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-3 py-1">
          <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/60 p-3 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 block">
              Điểm Thưởng Tích Lũy
            </span>
            <span className="text-xl font-black text-sky-900 dark:text-sky-200 mt-0.5 block">
              +{earnedXp} XP
            </span>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 p-3 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block">
              Điểm Trắc Nghiệm
            </span>
            <span className="text-xl font-black text-emerald-900 dark:text-emerald-200 mt-0.5 block">
              {quizScore}/{totalQuizQuestions}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Bạn đã nắm chắc quy chuẩn lý thuyết và xuất sắc vượt qua các bài thực hành trên bộ mô phỏng Office! Bài học tiếp theo đã sẵn sàng được mở khóa.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={onNextLesson}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md cursor-pointer transition-all"
          >
            <span>Chuyển sang bài tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={onReviewLesson}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ôn tập lại bài</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs cursor-pointer"
            >
              <span>Đóng hộp thoại</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
