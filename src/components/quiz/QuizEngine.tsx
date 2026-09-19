import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import type { QuizQuestion } from '../../types/curriculum';
import { CheckCircle2, XCircle, HelpCircle, Award, RotateCcw } from 'lucide-react';

interface QuizEngineProps {
  questions: QuizQuestion[];
  onQuizCompleted: (score: number, total: number) => void;
  previousScore?: number;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  questions,
  onQuizCompleted,
  previousScore: _previousScore
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setIsSubmitted(true);
    onQuizCompleted(score, questions.length);

    if (score >= Math.ceil(questions.length * 0.8)) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isAllAnswered = answeredCount === questions.length;
  const currentScore = isSubmitted ? calculateScore() : 0;

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>Bài Tập Trắc Nghiệm Ôn Tập</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Trả lời đúng các câu hỏi để kiểm tra mức độ nắm vững lý thuyết và tích lũy điểm thưởng.
          </p>
        </div>

        {isSubmitted && (
          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-3 py-1.5 rounded-xl">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <div className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                Kết Quả
              </div>
              <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                {currentScore} / {questions.length} điểm
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-xl border transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20'
                    : 'border-rose-300 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm'
              }`}
            >
              {/* Question text */}
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.question}
                </p>
              </div>

              {/* Options list */}
              <div className="mt-4 space-y-2 pl-9">
                {q.options.map((opt, optIdx) => {
                  const isOptionSelected = userAnswer === optIdx;
                  const isOptionCorrect = q.correctIndex === optIdx;

                  let optionStyle =
                    'border-slate-200 dark:border-slate-800 hover:border-sky-400 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200';

                  if (isSubmitted) {
                    if (isOptionCorrect) {
                      optionStyle =
                        'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isOptionSelected && !isCorrect) {
                      optionStyle =
                        'border-rose-500 bg-rose-100/70 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 font-semibold';
                    } else {
                      optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-500';
                    }
                  } else if (isOptionSelected) {
                    optionStyle =
                      'border-sky-500 ring-2 ring-sky-200 dark:ring-sky-900 bg-sky-50 dark:bg-sky-950 text-sky-900 dark:text-sky-100 font-medium';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded border flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isSubmitted && (
                        <div>
                          {isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation panel after submission */}
              {isSubmitted && (
                <div className="mt-4 ml-9 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 border-l-4 border-sky-500">
                  <span className="font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider block mb-1">
                    Giải Thích Chi Tiết:
                  </span>
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Submission Button Bar */}
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-5">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Đã chọn: {answeredCount}/{questions.length} câu hỏi
        </span>

        <div className="flex items-center gap-3">
          {isSubmitted ? (
            <button
              type="button"
              onClick={handleRetake}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài kiểm tra</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isAllAnswered}
              className={`px-6 py-2 rounded-lg text-xs font-bold text-white transition-all shadow cursor-pointer ${
                isAllAnswered
                  ? 'bg-sky-600 hover:bg-sky-700'
                  : 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-60'
              }`}
            >
              Nộp Bài & Chấm Điểm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
