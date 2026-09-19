import React, { useState } from 'react';
import { MOS_WORD_PRACTICE_EXAMS } from '../../data/practiceExamsData';
import {
  Download,
  FileCheck2,
  FolderArchive,
  ChevronRight,
  ChevronDown,
  Clock,
  Sparkles,
  Laptop
} from 'lucide-react';

interface WordPracticeReviewViewProps {
  onBackToCourses?: () => void;
}

export const WordPracticeReviewView: React.FC<WordPracticeReviewViewProps> = ({ onBackToCourses }) => {
  const [selectedExamId, setSelectedExamId] = useState<string>(MOS_WORD_PRACTICE_EXAMS[0].id);
  const [activeProjectId, setActiveProjectId] = useState<string>(
    MOS_WORD_PRACTICE_EXAMS[0].projects[0].id
  );
  const [expandedTasks, setExpandedTasks] = useState<Record<number, boolean>>({ 1: true });

  const currentExam =
    MOS_WORD_PRACTICE_EXAMS.find(e => e.id === selectedExamId) || MOS_WORD_PRACTICE_EXAMS[0];

  const currentProject =
    currentExam.projects.find(p => p.id === activeProjectId) || currentExam.projects[0];

  const toggleTask = (taskNum: number) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskNum]: !prev[taskNum]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6">
      {/* Navigation Top Bar */}
      {onBackToCourses && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToCourses}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            <span>← Đổi khóa học khác</span>
          </button>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Đang học: <strong className="text-indigo-600 dark:text-indigo-400">Ôn Luyện Đề Thi MOS Word 2019</strong>
          </span>
        </div>
      )}
      <div className="bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Kho Luyện Thi Thực Chiến MOS Word 2019 (IIG & Certiport)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Ôn Luyện Đề Thi Cuối Khóa & Tải Gói Thực Hành
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Học viên tải trọn bộ tệp bài tập mẫu (.docx) về máy tính cá nhân để thực hành trên Microsoft Word thật. Xem đề bài và hướng dẫn giải chi tiết ngay trên web.
            </p>
          </div>

          {/* Direct Download Full Package Button */}
          <div className="flex flex-col gap-2 shrink-0">
            <a
              href="/downloads/Goi_Thuc_Hanh_MOS_Word_2019_Full.zip"
              download="Goi_Thuc_Hanh_MOS_Word_2019_Full.zip"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all cursor-pointer"
            >
              <FolderArchive className="w-4 h-4" />
              <span>Tải Toàn Bộ Gói Thực Hành (26 MB)</span>
            </a>
            <span className="text-[10px] text-slate-400 text-center">
              Gồm Exam 1, Exam 2, Skill Review 1, 2, 3
            </span>
          </div>
        </div>
      </div>

      {/* Exam Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {MOS_WORD_PRACTICE_EXAMS.map(exam => (
          <button
            key={exam.id}
            type="button"
            onClick={() => {
              setSelectedExamId(exam.id);
              setActiveProjectId(exam.projects[0]?.id || '');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedExamId === exam.id
                ? 'border-sky-500 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 shadow-xs'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-sky-600" />
            <span>{exam.title}</span>
          </button>
        ))}
      </div>

      {/* Main Practice Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Projects List & Package Download */}
        <div className="space-y-4">
          {/* Specific Exam Download Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Gói Bài Tập Đang Xem
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {currentExam.downloadSize}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {currentExam.summary}
            </p>
            <a
              href={currentExam.downloadUrl}
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Tệp Thực Hành Đề Này (.zip)</span>
            </a>
          </div>

          {/* List of Projects in Exam */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xs space-y-2">
            <div className="flex items-center justify-between px-2 py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Danh Sách Dự Án ({currentExam.projects.length} Projects)
              </span>
              <span className="flex items-center gap-1 text-[11px] text-slate-400">
                <Clock className="w-3 h-3" /> {currentExam.durationMinutes} phút
              </span>
            </div>

            <div className="space-y-1">
              {currentExam.projects.map((proj, idx) => {
                const isActive = proj.id === currentProject.id;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setActiveProjectId(proj.id)}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'border-sky-500 ring-2 ring-sky-200 dark:ring-sky-900 bg-sky-50/70 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Project {idx + 1} / {currentExam.projects.length}
                      </span>
                      <span className="text-xs font-bold block mt-0.5 truncate max-w-[200px]">
                        {proj.name}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-sky-600 translate-x-1' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Project Tasks Detail & Step-by-Step Solution */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-6">
            {/* Project Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950 px-2.5 py-0.5 rounded-full">
                  Project {currentProject.projectNumber}: {currentProject.name}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Tệp gốc: {currentProject.sourceFile}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                Nhiệm Vụ Thực Hành ({currentProject.tasks.length} Tasks)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {currentProject.description}
              </p>
            </div>

            {/* Tasks Accordion */}
            <div className="space-y-4">
              {currentProject.tasks.map(task => {
                const isExpanded = !!expandedTasks[task.taskNumber];
                return (
                  <div
                    key={task.taskNumber}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-950/40"
                  >
                    {/* Task Question Bar */}
                    <div
                      onClick={() => toggleTask(task.taskNumber)}
                      className="p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-100/70 dark:hover:bg-slate-850 transition-colors select-none"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          {task.taskNumber}
                        </span>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            Task {task.taskNumber}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5 leading-relaxed">
                            {task.description}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 p-1 text-slate-400">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    {/* Task Step-by-Step Guide */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2 bg-white dark:bg-slate-900">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 pt-1">
                          <Laptop className="w-3.5 h-3.5" />
                          <span>Hướng Dẫn Thao Tác Chi Tiết:</span>
                        </span>
                        <ol className="space-y-2 pl-2">
                          {task.guideSteps.map((step, sIdx) => (
                            <li
                              key={sIdx}
                              className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
