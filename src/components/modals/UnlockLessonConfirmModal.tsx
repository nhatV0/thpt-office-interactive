import React from 'react';
import { AlertTriangle, Unlock, X } from 'lucide-react';

interface UnlockLessonConfirmModalProps {
  isOpen: boolean;
  lessonTitle: string;
  lessonOrder: number;
  prevLessonTitle?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const UnlockLessonConfirmModal: React.FC<UnlockLessonConfirmModalProps> = ({
  isOpen,
  lessonTitle,
  lessonOrder,
  prevLessonTitle,
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden p-6 space-y-5">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <button
            onClick={onCancel}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
            Xác nhận mở khóa Bài {lessonOrder}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống phát hiện bạn <strong className="text-amber-600 dark:text-amber-400 font-bold">chưa hoàn thành đầy đủ bài học trước đó</strong>{prevLessonTitle ? ` (${prevLessonTitle})` : ''}.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
            Bạn có thực sự muốn chủ động mở khóa trước <span className="font-semibold text-slate-700 dark:text-slate-200">Bài {lessonOrder}: {lessonTitle}</span> để học vượt không?
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Quay Lại Học Tiếp
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Mở Khóa Ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
