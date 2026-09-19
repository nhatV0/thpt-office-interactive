import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { useAuth } from '../../context/AuthContext';
import type { ModuleType } from '../../types/curriculum';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import {
  FileText,
  Table as TableIcon,
  Presentation,
  CheckCircle2,
  Lock,
  ArrowRight,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';

interface CurriculumViewProps {
  onSelectLesson: (moduleId: ModuleType, lessonId: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ onSelectLesson }) => {
  const { activeModuleId, setActiveModuleId, userProgress } = useLearning();
  const { currentUser } = useAuth();
  const isTeacher = currentUser?.role === 'teacher';

  const currentModule = CURRICULUM_DATA[activeModuleId];

  const calculateModuleProgress = (modId: ModuleType) => {
    const mod = CURRICULUM_DATA[modId];
    let completed = 0;
    mod.lessons.forEach(l => {
      const p = userProgress[l.id];
      if (p && p.theoryCompleted && p.practiceCompleted && p.quizCompleted) {
        completed += 1;
      }
    });
    return {
      completed,
      total: mod.lessons.length,
      percentage: Math.round((completed / mod.lessons.length) * 100)
    };
  };

  const wordProgress = calculateModuleProgress('word');
  const excelProgress = calculateModuleProgress('excel');
  const ppProgress = calculateModuleProgress('powerpoint');

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-8">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Lộ Trình Chuẩn Tin Học THPT & Chứng Chỉ MOS</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Chinh Phục Kỹ Năng Văn Phòng Chuẩn Mực
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Học lý thuyết tương tác ngắn gọn, làm chủ thao tác thực hành trên trình giả lập Office trực quan và củng cố kiến thức với ngân hàng câu hỏi trắc nghiệm ôn tập.
          </p>
        </div>

        {/* Background ambient lighting */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-sky-500/20 to-transparent pointer-events-none" />
      </div>

      {/* Module Selector Tabs (Word -> Excel -> PowerPoint) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Word Card */}
        <button
          type="button"
          onClick={() => setActiveModuleId('word')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
            activeModuleId === 'word'
              ? 'border-sky-500 ring-2 ring-sky-200 dark:ring-sky-900 bg-white dark:bg-slate-900 shadow-md'
              : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Microsoft Word
                </h3>
                <span className="text-[10px] text-slate-500">Soạn thảo văn bản</span>
              </div>
            </div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
              {wordProgress.percentage}%
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-sky-600 rounded-full transition-all duration-300"
              style={{ width: `${wordProgress.percentage}%` }}
            />
          </div>
        </button>

        {/* Excel Card */}
        <button
          type="button"
          onClick={() => setActiveModuleId('excel')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
            activeModuleId === 'excel'
              ? 'border-emerald-500 ring-2 ring-emerald-200 dark:ring-emerald-900 bg-white dark:bg-slate-900 shadow-md'
              : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <TableIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Microsoft Excel
                </h3>
                <span className="text-[10px] text-slate-500">Bảng tính điện tử</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {excelProgress.percentage}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${excelProgress.percentage}%` }}
            />
          </div>
        </button>

        {/* PowerPoint Card */}
        <button
          type="button"
          onClick={() => setActiveModuleId('powerpoint')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
            activeModuleId === 'powerpoint'
              ? 'border-rose-500 ring-2 ring-rose-200 dark:ring-rose-900 bg-white dark:bg-slate-900 shadow-md'
              : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                <Presentation className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  PowerPoint
                </h3>
                <span className="text-[10px] text-slate-500">Trình chiếu đồ họa</span>
              </div>
            </div>
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
              {ppProgress.percentage}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-rose-600 rounded-full transition-all duration-300"
              style={{ width: `${ppProgress.percentage}%` }}
            />
          </div>
        </button>
      </div>

      {/* Current Active Module Lessons Track */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {currentModule.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {currentModule.shortDescription}
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Huy hiệu: {currentModule.badgeName}</span>
          </div>
        </div>

        {/* Lessons List Grid */}
        <div className="space-y-3">
          {currentModule.lessons.map(lesson => {
            const p = userProgress[lesson.id] || {
              theoryCompleted: false,
              practiceCompleted: false,
              quizScore: 0,
              quizCompleted: false,
              isUnlocked: lesson.order === 1
            };
            const isFinished = p.theoryCompleted && p.practiceCompleted && p.quizCompleted;
            const isUnlocked = isTeacher || p.isUnlocked;

            return (
              <div
                key={lesson.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isFinished
                    ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                    : isUnlocked
                    ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-800 shadow-xs'
                    : 'border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                      isFinished
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                        : isUnlocked
                        ? activeModuleId === 'word'
                          ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300'
                          : activeModuleId === 'excel'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    {isFinished ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : isUnlocked ? (
                      <span>{lesson.order}</span>
                    ) : (
                      <Lock className="w-4 h-4" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Bài {lesson.order}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-500">
                        <Clock className="w-3 h-3" /> {lesson.durationMinutes} phút
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                      {lesson.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                      {lesson.summary}
                    </p>
                  </div>
                </div>

                {/* Status & CTA Button */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                  {/* Step indicators */}
                  <div className="flex items-center gap-1 text-[10px] font-bold">
                    <span
                      className={`px-2 py-0.5 rounded ${
                        p.theoryCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                      }`}
                    >
                      Lý thuyết
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded ${
                        p.practiceCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                      }`}
                    >
                      Thực hành
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded ${
                        p.quizCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                      }`}
                    >
                      Trắc nghiệm ({p.quizScore}/{lesson.quiz.length})
                    </span>
                  </div>

                  {/* Start / Continue Button */}
                  {isUnlocked ? (
                    <button
                      type="button"
                      onClick={() => onSelectLesson(activeModuleId, lesson.id)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-xs cursor-pointer ${
                        activeModuleId === 'word'
                          ? 'bg-sky-600 hover:bg-sky-700'
                          : activeModuleId === 'excel'
                          ? 'bg-emerald-600 hover:bg-emerald-700'
                          : 'bg-rose-600 hover:bg-rose-700'
                      }`}
                    >
                      <span>{isFinished ? 'Ôn tập lại' : 'Vào bài học'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Lock className="w-3 h-3" />
                      <span>Chưa mở khóa</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
