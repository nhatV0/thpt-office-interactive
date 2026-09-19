import React, { useState } from 'react';
import { ROBOTICS_COURSES_DATA } from '../../data/roboticsCoursesData';
import type { RoboticsCourseId, RoboticsLesson } from '../../types/roboticsCourse';
import {
  ArrowLeft,
  BookOpen,
  Bot,
  Sparkles,
  Download,
  ExternalLink,
  CheckCircle2,
  Trophy,
  Code2,
  Wrench,
  Compass,
  AlertTriangle,
  Layers,
  HelpCircle,
  FileText
} from 'lucide-react';

interface RoboticsLearningViewProps {
  courseId: RoboticsCourseId;
  onBackToCourses: () => void;
}

export const RoboticsLearningView: React.FC<RoboticsLearningViewProps> = ({
  courseId,
  onBackToCourses
}) => {
  const courseData = ROBOTICS_COURSES_DATA[courseId] || ROBOTICS_COURSES_DATA['robotics-basic'];
  const [activeLessonId, setActiveLessonId] = useState<string>(courseData.lessons[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'pdf' | 'vexcode' | 'challenges'>('pdf');
  const [completedChallenges, setCompletedChallenges] = useState<Record<string, boolean>>({});

  const currentLesson: RoboticsLesson =
    courseData.lessons.find(l => l.id === activeLessonId) || courseData.lessons[0];

  const toggleChallengeCompletion = (chId: string) => {
    setCompletedChallenges(prev => ({
      ...prev,
      [chId]: !prev[chId]
    }));
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Drivetrain':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Motion':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Sensing':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Control':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Events':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Looks':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 text-slate-100">
      {/* Top Bar / Navigation */}
      <div className="h-16 px-4 sm:px-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToCourses}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Khóa Học</span>
          </button>
          <div className="h-5 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <div
              className={`p-1.5 rounded-lg text-white shadow-sm`}
              style={{ backgroundColor: courseData.accentHex }}
            >
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold tracking-tight text-white line-clamp-1">
                  {courseData.title}
                </h1>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${courseData.badgeColor}`}
                >
                  {courseData.levelBadge}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                {currentLesson.title}
              </p>
            </div>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab('pdf')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'pdf'
                ? 'bg-slate-800 text-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Giáo Trình Gốc (PDF)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vexcode')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'vexcode'
                ? 'bg-slate-800 text-amber-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Khối Lệnh VEXcode ({currentLesson.vexBlocks.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('challenges')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'challenges'
                ? 'bg-slate-800 text-emerald-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Thử Thách & Sa Bàn ({currentLesson.challenges.length})</span>
          </button>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Lessons List */}
        <div className="w-72 sm:w-80 bg-slate-900/60 border-r border-slate-800 flex flex-col shrink-0 overflow-y-auto">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Danh Sách Bài Học ({courseData.lessons.length})
            </span>
          </div>

          <div className="p-2 space-y-1.5 flex-1">
            {courseData.lessons.map(lesson => {
              const isSelected = lesson.id === currentLesson.id;
              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      BÀI {lesson.order}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {lesson.hardwareKit.length} linh kiện
                    </span>
                  </div>
                  <h3
                    className={`text-xs font-bold leading-snug line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {lesson.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {lesson.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Kit Support Footer */}
          <div className="p-3 m-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Nền tảng VEX IQ 2nd Generation & VEXcode IQ blocks</span>
          </div>
        </div>

        {/* Right Content View */}
        <div className="flex-1 flex flex-col overflow-hidden bg-slate-950">
          {/* TAB 1: PDF Viewer */}
          {activeTab === 'pdf' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* PDF Action Bar */}
              <div className="px-6 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs shrink-0">
                <div className="flex items-center gap-2 text-slate-300">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-white">{currentLesson.title}</span>
                  <span className="text-slate-500">({currentLesson.theoryPdfFileName})</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={currentLesson.theoryPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Mở tab mới</span>
                  </a>
                  <a
                    href={currentLesson.theoryPdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải PDF Giáo Trình</span>
                  </a>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="flex-1 w-full h-full bg-slate-900/50 relative">
                <iframe
                  title={`PDF ${currentLesson.title}`}
                  src={`${currentLesson.theoryPdfUrl}#toolbar=1&navpanes=1`}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}

          {/* TAB 2: VEXcode Blocks & Hardware Setup */}
          {activeTab === 'vexcode' && (
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {/* Lesson Objectives & Hardware Kit Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Objectives */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    Mục Tiêu Bài Học
                  </h3>
                  <ul className="space-y-2">
                    {currentLesson.objectives.map((obj, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hardware Kit Required */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4" />
                    Linh Kiện & Cấu Hình Cổng Não
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentLesson.hardwareKit.map((hw, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Đảm bảo ngắt nguồn Não VEX IQ trước khi cắm rút các cổng Smart Port.</span>
                  </div>
                </div>
              </div>

              {/* VEXcode Blocks Showcase */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    Các Khối Lệnh Lập Trình Trọng Tâm
                  </h3>
                  <span className="text-xs text-slate-500">
                    Ngôn ngữ khối lệnh đồ họa VEXcode IQ & tương đương C++
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentLesson.vexBlocks.map((block, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${getCategoryBadgeColor(
                              block.category
                            )}`}
                          >
                            {block.category}
                          </span>
                          <code className="text-xs font-mono font-bold text-white bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                            {block.blockText}
                          </code>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {block.description}
                        </p>
                      </div>

                      {block.exampleSnippet && (
                        <div className="shrink-0 md:max-w-xs w-full">
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 font-mono text-[11px] text-emerald-400 overflow-x-auto whitespace-pre">
                            {block.exampleSnippet}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* STEM Real-world Applications */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Ứng Dụng STEM & Kỹ Thuật Trong Thực Tế
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentLesson.stemApplications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-medium"
                    >
                      • {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Challenges & Arena */}
          {activeTab === 'challenges' && (
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    Thử Thách Sa Bàn & Nhiệm Vụ Chế Tạo
                  </h2>
                  <p className="text-xs text-slate-400">
                    Thực hiện theo tiêu chuẩn thi đấu VEX IQ Challenge kèm barem đánh giá chi tiết
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {currentLesson.challenges.map(ch => {
                  const isDone = completedChallenges[ch.id];
                  return (
                    <div
                      key={ch.id}
                      className={`p-6 rounded-3xl border transition-all ${
                        isDone
                          ? 'bg-slate-900/40 border-emerald-500/30'
                          : 'bg-slate-900/90 border-slate-800'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              Độ khó: {ch.difficulty}
                            </span>
                            <h3 className="text-sm font-bold text-white">{ch.title}</h3>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            <span className="text-slate-500">Sa bàn:</span> {ch.arenaDescription}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleChallengeCompletion(ch.id)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                            isDone
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>{isDone ? 'Đã Hoàn Thành (+100 XP)' : 'Đánh Dấu Hoàn Thành'}</span>
                        </button>
                      </div>

                      {/* Rules & Rubric */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {/* Rules */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Quy chế nhiệm vụ:
                          </h4>
                          <ul className="space-y-1.5">
                            {ch.rules.map((rule, rIdx) => (
                              <li
                                key={rIdx}
                                className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed"
                              >
                                <span className="text-cyan-400 font-bold shrink-0">{rIdx + 1}.</span>
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Rubric */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Tiêu chí chấm điểm (Barem 100đ):
                          </h4>
                          <div className="space-y-1.5">
                            {ch.evaluationRubric.map((item, rubIdx) => (
                              <div
                                key={rubIdx}
                                className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"
                              >
                                <span className="text-slate-300">{item.criteria}</span>
                                <span className="font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                                  {item.points}đ
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Solution Hint */}
                      {ch.sampleSolutionHint && (
                        <div className="mt-4 p-3 rounded-2xl bg-slate-950 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-cyan-300">Gợi ý kỹ thuật: </span>
                            <span>{ch.sampleSolutionHint}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
