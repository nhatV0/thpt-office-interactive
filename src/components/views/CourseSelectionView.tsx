import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLearning } from '../../context/LearningContext';
import { COURSES_REGISTRY } from '../../data/coursesData';
import type { CourseDefinition } from '../../types/course';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Lock,
  ArrowRight,
  Clock,
  Award,
  FileText,
  Table as TableIcon,
  Presentation,
  FolderArchive,
  Layers,
  GraduationCap,
  ShieldCheck,
  Search,
  Code2,
  Terminal
} from 'lucide-react';

interface CourseSelectionViewProps {
  onSelectCourse: (course: CourseDefinition) => void;
  onOpenTeacherDashboard?: () => void;
}

export const CourseSelectionView: React.FC<CourseSelectionViewProps> = ({
  onSelectCourse,
  onOpenTeacherDashboard
}) => {
  const { currentUser } = useAuth();
  const { calculateCourseProgress } = useLearning();

  const isTeacher = currentUser?.role === 'teacher';
  const allowedCourses = isTeacher
    ? COURSES_REGISTRY.map(c => c.id)
    : currentUser?.allowedCourses && currentUser.allowedCourses.length > 0
    ? currentUser.allowedCourses
    : ['word'];

  const [activeFilter, setActiveFilter] = useState<'all' | 'my-courses' | 'office' | 'practice' | 'programming'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isCourseUnlocked = (courseId: string) => allowedCourses.includes(courseId);

  const getCourseIcon = (course: CourseDefinition) => {
    switch (course.id) {
      case 'word':
        return <FileText className="w-6 h-6 text-white" />;
      case 'excel':
        return <TableIcon className="w-6 h-6 text-white" />;
      case 'powerpoint':
        return <Presentation className="w-6 h-6 text-white" />;
      case 'word-practice':
        return <FolderArchive className="w-6 h-6 text-white" />;
      case 'cp-bronze':
        return <Terminal className="w-6 h-6 text-white" />;
      case 'cp-silver':
        return <Code2 className="w-6 h-6 text-white" />;
      default:
        return <BookOpen className="w-6 h-6 text-white" />;
    }
  };

  const filteredCourses = COURSES_REGISTRY.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === 'my-courses') {
      return isCourseUnlocked(course.id);
    }
    if (activeFilter === 'office') {
      return course.category === 'office';
    }
    if (activeFilter === 'practice') {
      return course.category === 'practice';
    }
    if (activeFilter === 'programming') {
      return course.category === 'programming';
    }
    return true;
  });

  const myCoursesCount = COURSES_REGISTRY.filter(c => isCourseUnlocked(c.id)).length;

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>Hệ Thống Đào Tạo & Luyện Thi MOS Chuẩn Quốc Tế</span>
            </span>
            {isTeacher ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>Tài khoản Giáo Viên (Toàn Quyền)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lớp: {currentUser?.schoolClass || '12A'} • Đã mở {myCoursesCount}/{COURSES_REGISTRY.length} khóa</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Chào mừng {currentUser?.fullName || 'Học Viên'}, chọn khóa học để bắt đầu!
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Lựa chọn môn học được phân quyền dưới đây để tiếp tục hành trình học lý thuyết tương tác, thực hành giả lập trực tiếp trên web và rèn luyện kỹ năng đề thi thực chiến.
          </p>

          {isTeacher && onOpenTeacherDashboard && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTeacherDashboard}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Vào Quản Lý & Phân Quyền Khóa Học Cho Học Sinh</span>
              </button>
            </div>
          )}
        </div>

        {/* Ambient lighting */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-sky-500/20 via-indigo-500/10 to-transparent pointer-events-none" />
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Tất cả ({COURSES_REGISTRY.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('my-courses')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'my-courses'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Khóa học của tôi ({myCoursesCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('office')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'office'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Tin Học Văn Phòng (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('practice')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'practice'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Luyện Thi Thực Chiến (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('programming')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'programming'
                ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Lập Trình Thi Đấu (2)
          </button>
        </div>

        {/* Search Input */}
        <div className="relative sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm môn học, kỹ năng..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map(course => {
          const isUnlocked = isCourseUnlocked(course.id);
          const progress = calculateCourseProgress(course.id);

          return (
            <div
              key={course.id}
              className={`rounded-3xl border transition-all duration-200 flex flex-col justify-between overflow-hidden relative ${
                isUnlocked
                  ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-sky-500/50 dark:hover:border-sky-500/50'
                  : 'bg-slate-50/80 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/80 opacity-80'
              }`}
            >
              {/* Top Accent Strip */}
              <div className={`h-2 w-full bg-gradient-to-r ${course.accentClass}`} />

              <div className="p-6 space-y-4 flex-1">
                {/* Header: Icon, Badge, Lock status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.accentClass} flex items-center justify-center shadow-md shrink-0`}>
                      {getCourseIcon(course)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {course.badgeName}
                        </span>
                        {course.kind === 'practice' && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            Thực chiến Certiport
                          </span>
                        )}
                        {course.kind === 'programming' && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                            Thuật toán & HSG
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Đã mở</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 text-[11px] font-bold shrink-0">
                      <Lock className="w-3.5 h-3.5 text-rose-500" />
                      <span>Chưa mở khóa</span>
                    </span>
                  )}
                </div>

                {/* Subtitle & Description */}
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {course.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Course Metadata Stats */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.totalUnits} {course.unitLabel}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.durationHours} giờ học</span>
                  </div>
                  {course.kind === 'curriculum' && (
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>Chứng chỉ MOS</span>
                    </div>
                  )}
                  {course.kind === 'programming' && (
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Chuyên Tin & HSG</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Progress Bar if unlocked */}
                {isUnlocked && (course.kind === 'curriculum' || course.kind === 'programming') && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Tiến độ khóa học:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {progress.completed}/{progress.total} bài ({progress.percentage}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${course.accentClass} transition-all duration-300`}
                        style={{ width: `${Math.max(5, progress.percentage)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bottom Card Footer */}
              <div className="p-4 px-6 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                {isUnlocked ? (
                  <>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Sẵn sàng học tập</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectCourse(course)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-md transition-all cursor-pointer bg-gradient-to-r ${course.accentClass} hover:opacity-95`}
                    >
                      <span>{progress.completed > 0 ? 'Tiếp tục học' : 'Vào học ngay'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">Chưa được giáo viên cấp quyền truy cập</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 shrink-0">
                      Liên hệ giáo viên
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            Không tìm thấy khóa học phù hợp
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Vui lòng kiểm tra lại từ khóa tìm kiếm hoặc chọn bộ lọc &quot;Tất cả khóa học&quot;.
          </p>
        </div>
      )}
    </div>
  );
};
