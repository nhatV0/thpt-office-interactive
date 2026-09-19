import React, { useState } from 'react';
import type { MicroTheoryCard } from '../../types/curriculum';
import { BookOpen, Lightbulb, KeyRound, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface TheoryViewerProps {
  theories: MicroTheoryCard[];
  onCompleteTheory: () => void;
  isCompleted?: boolean;
}

export const TheoryViewer: React.FC<TheoryViewerProps> = ({
  theories,
  onCompleteTheory,
  isCompleted = false
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentTheory = theories[currentIndex];

  const handleNext = () => {
    if (currentIndex + 1 < theories.length) {
      setCurrentIndex(idx => idx + 1);
    } else if (!isCompleted) {
      onCompleteTheory();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(idx => idx - 1);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Step Indicators */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
            Lý Thuyết Vi Mô (Micro-Theory)
          </h2>
        </div>
        <div className="flex items-center gap-1.5">
          {theories.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-sky-600 dark:bg-sky-500'
                  : idx < currentIndex
                  ? 'bg-slate-400 dark:bg-slate-600'
                  : 'bg-slate-200 dark:bg-slate-800'
              }`}
              title={`Thẻ ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Theory Card */}
      {currentTheory && (
        <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
              Kiến thức trọng tâm {currentIndex + 1}/{theories.length}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {currentTheory.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentTheory.concept}
            </p>

            {/* Key Points List */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Quy Chuẩn Cần Ghi Nhớ
              </h4>
              <ul className="space-y-2">
                {currentTheory.keyPoints.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-normal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shortcut and Exam Tip Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              {currentTheory.shortcut && (
                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 flex items-start gap-3">
                  <KeyRound className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Phím Tắt Nhanh
                    </h5>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                      {currentTheory.shortcut}
                    </p>
                  </div>
                </div>
              )}

              {currentTheory.examTip && (
                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl p-3.5 flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      Mẹo Thi THPT & MOS
                    </h5>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                      {currentTheory.examTip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Thẻ trước</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white transition-all shadow cursor-pointer"
            >
              {currentIndex + 1 < theories.length ? (
                <>
                  <span>Thẻ kế tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isCompleted ? 'Đã hoàn thành lý thuyết' : 'Đánh dấu hoàn thành (+20 XP)'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
