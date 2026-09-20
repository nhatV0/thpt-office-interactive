import React, { useState, useMemo, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLearning } from '../../context/LearningContext';
import { COURSES_REGISTRY } from '../../data/coursesData';
import type { CourseDefinition } from '../../types/course';
import {
  Sparkles,
  Trophy,
  Flame,
  Target,
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
  Terminal,
  Bot,
  Cpu,
  Eye,
  EyeOff,
  Compass
} from 'lucide-react';

interface CourseGroupConfig {
  id: 'mos' | 'programming' | 'robotics' | 'ic3';
  title: string;
  subtitle: string;
  badge: string;
  badgeClass: string;
  accentClass: string;
  icon: React.ReactNode;
  courseIds: string[];
}

const COURSE_GROUPS: CourseGroupConfig[] = [
  {
    id: 'mos',
    title: 'Tin Học Văn Phòng (MOS 2019)',
    subtitle: 'Word, Excel, PowerPoint chuẩn quốc tế & Luyện đề thực chiến Certiport',
    badge: 'MOS 2019 Associate',
    badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    accentClass: 'from-sky-500 to-blue-600',
    icon: <FileText className="w-5 h-5 text-sky-500" />,
    courseIds: ['word', 'excel', 'powerpoint', 'word-practice']
  },
  {
    id: 'programming',
    title: 'Lập Trình Thi Đấu (Competitive Programming)',
    subtitle: 'C++ & Python 3 - Thuật toán kinh điển, Olympic & Bồi dưỡng Chuyên Tin',
    badge: 'Chuyên Tin & HSG',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    accentClass: 'from-emerald-500 to-teal-600',
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    courseIds: ['cp-basic', 'cp-bronze', 'cp-silver']
  },
  {
    id: 'robotics',
    title: 'Robotics & Tự Động Hóa (VEX IQ)',
    subtitle: 'Cơ điện tử, cơ cấu truyền động, cảm biến & Lập trình khối lệnh VEXcode IQ',
    badge: 'VEX IQ 2nd Gen',
    badgeClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    accentClass: 'from-amber-500 to-orange-600',
    icon: <Bot className="w-5 h-5 text-orange-500" />,
    courseIds: ['robotics-basic', 'robotics-intermediate', 'robotics-advanced']
  },
  {
    id: 'ic3',
    title: 'Chứng Chỉ Số Quốc Tế (IC3 GS6)',
    subtitle: 'Khung năng lực số 3 cấp độ (Level 1, 2, 3) qua 7 chủ đề công nghệ chuẩn IIG',
    badge: 'IC3 Global Standard 6',
    badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    accentClass: 'from-cyan-500 to-blue-600',
    icon: <Award className="w-5 h-5 text-cyan-500" />,
    courseIds: ['ic3-level-1', 'ic3-level-2', 'ic3-level-3']
  }
];

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
    : COURSES_REGISTRY.map(c => c.id);

  const [activeFilter, setActiveFilter] = useState<'all' | 'mos' | 'programming' | 'robotics' | 'ic3'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  // Mặc định ở trạng thái ẩn các khóa học chưa mở để giao diện tinh gọn, không rối mắt
  const [showLockedCourses, setShowLockedCourses] = useState(false);

  const isCourseUnlocked = useCallback((courseId: string) => allowedCourses.includes(courseId), [allowedCourses]);

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
      case 'cp-basic':
        return <Code2 className="w-6 h-6 text-white" />;
      case 'cp-bronze':
        return <Terminal className="w-6 h-6 text-white" />;
      case 'cp-silver':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'robotics-basic':
        return <Bot className="w-6 h-6 text-white" />;
      case 'robotics-intermediate':
        return <Cpu className="w-6 h-6 text-white" />;
      case 'robotics-advanced':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'ic3-level-1':
      case 'ic3-level-2':
      case 'ic3-level-3':
        return <Award className="w-6 h-6 text-white" />;
      default:
        return <BookOpen className="w-6 h-6 text-white" />;
    }
  };
  // Grouped courses computation with search and locked-filter handling
  const groupedSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return COURSE_GROUPS.map(group => {
      const groupCourses = group.courseIds
        .map(id => COURSES_REGISTRY.find(c => c.id === id))
        .filter((c): c is CourseDefinition => Boolean(c))
        .filter(course => {
          // Search matching
          const matchesSearch =
            !query ||
            course.title.toLowerCase().includes(query) ||
            course.subtitle.toLowerCase().includes(query) ||
            course.tags.some(t => t.toLowerCase().includes(query));
          if (!matchesSearch) return false;

          const unlocked = isCourseUnlocked(course.id);
          // Nếu không bật showLockedCourses, chỉ hiển thị khóa đã được thêm/mở
          if (!showLockedCourses && !unlocked) return false;

          return true;
        });

      const unlockedInGroup = group.courseIds.filter(id => isCourseUnlocked(id)).length;
      const totalInGroup = group.courseIds.length;

      return {
        ...group,
        courses: groupCourses,
        unlockedCount: unlockedInGroup,
        totalCount: totalInGroup
      };
    }).filter(group => {
      if (activeFilter !== 'all' && group.id !== activeFilter) {
        return false;
      }
      return true;
    });
  }, [searchQuery, activeFilter, showLockedCourses, allowedCourses]);

  // Total counts for summary
  const totalLockedCoursesCount = useMemo(() => {
    return COURSES_REGISTRY.filter(c => !isCourseUnlocked(c.id)).length;
  }, [allowedCourses]);

  const myCourses = useMemo(() => {
    return COURSES_REGISTRY.filter(c => isCourseUnlocked(c.id));
  }, [allowedCourses]);

  const myCoursesCount = myCourses.length;

  // Overall student progress computation
  const overallStats = useMemo(() => {
    let totalUnitsAcrossCourses = 0;
    let completedUnitsAcrossCourses = 0;
    let inProgressCount = 0;
    let completedCoursesCount = 0;

    myCourses.forEach(c => {
      const p = calculateCourseProgress(c.id);
      totalUnitsAcrossCourses += p.total;
      completedUnitsAcrossCourses += p.completed;
      if (p.percentage === 100) {
        completedCoursesCount++;
      } else if (p.completed > 0) {
        inProgressCount++;
      }
    });

    const overallPercent = totalUnitsAcrossCourses > 0
      ? Math.min(100, Math.round((completedUnitsAcrossCourses / totalUnitsAcrossCourses) * 100))
      : 0;

    return {
      totalUnits: totalUnitsAcrossCourses,
      completedUnits: completedUnitsAcrossCourses,
      inProgressCount,
      completedCoursesCount,
      overallPercent
    };
  }, [myCourses, calculateCourseProgress]);

  return (
    <div className="w-full max-w-6xl mx-auto p-3 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>Hệ Thống Học Tập Tin Học</span>
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

      {/* Student Progress & Achievement Dashboard Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Khóa Đã Đăng Ký */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block truncate">
              Khóa Đã Được Cấp
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                {myCoursesCount}
              </span>
              <span className="text-xs text-slate-400">/{COURSES_REGISTRY.length}</span>
            </div>
          </div>
        </div>

        {/* Card 2: Tiến Độ Tổng Thể */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block truncate">
                Tiến Độ Tổng
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {overallStats.overallPercent}%
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${Math.max(4, overallStats.overallPercent)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Điểm Tích Lũy XP */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block truncate">
              Thành Tích Điểm XP
            </span>
            <span className="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">
              {currentUser?.xpPoints ?? 0} <span className="text-xs font-bold text-slate-500">XP</span>
            </span>
          </div>
        </div>

        {/* Card 4: Chuỗi Chuyên Cần */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block truncate">
              Chuỗi Học Tập
            </span>
            <span className="text-lg sm:text-xl font-black text-orange-600 dark:text-orange-400">
              {currentUser?.streak ?? 1} <span className="text-xs font-bold text-slate-500">ngày</span>
            </span>
          </div>
        </div>
      </div>
      {/* Filter, Search & Locked Courses Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
        {/* Category Tabs: 4 Main Groups */}
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
            Tất cả 4 nhóm
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('mos')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeFilter === 'mos'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>MOS 2019</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('programming')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeFilter === 'programming'
                ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Lập Trình Thi Đấu</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('robotics')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeFilter === 'robotics'
                ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Robotics VEX IQ</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ic3')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeFilter === 'ic3'
                ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>IC3 GS6</span>
          </button>
        </div>

        {/* Controls: Search and Show/Hide Locked Courses Toggle */}
        <div className="flex items-center gap-2">
          {/* Toggle Show/Hide Locked Courses */}
          {totalLockedCoursesCount > 0 && (
            <button
              type="button"
              onClick={() => setShowLockedCourses(!showLockedCourses)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                showLockedCourses
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={showLockedCourses ? 'Bấm để ẩn các khóa chưa mở' : 'Bấm để xem các khóa học khác'}
            >
              {showLockedCourses ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Đang hiện khóa chưa mở</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hiện khóa chưa mở ({totalLockedCoursesCount})</span>
                </>
              )}
            </button>
          )}

          {/* Search Input */}
          <div className="relative flex-1 sm:w-60">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm môn học, từ khóa..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
      </div>

      {/* GROUPED COURSES SECTIONS */}
      <div className="space-y-10">
        {groupedSections.map(group => {
          const hasCourses = group.courses.length > 0;

          return (
            <section key={group.id} className="space-y-4">
              {/* Group Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xs shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                        {group.title}
                      </h2>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${group.badgeClass}`}>
                        {group.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Group Stats Chip */}
                <div className="flex items-center gap-2 text-xs font-semibold self-start sm:self-auto shrink-0">
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    Đã mở <strong className="text-sky-600 dark:text-sky-400">{group.unlockedCount}</strong>/{group.totalCount} khóa
                  </span>
                </div>
              </div>

              {/* Courses Grid inside this group */}
              {hasCourses ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {group.courses.map(course => {
                    const isUnlocked = isCourseUnlocked(course.id);
                    const progress = calculateCourseProgress(course.id);

                    return (
                      <div
                        key={course.id}
                        className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden relative group ${
                          isUnlocked
                            ? 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800/90 shadow-xs hover:shadow-md hover:border-sky-500/40 dark:hover:border-sky-500/40'
                            : 'bg-slate-50/60 dark:bg-slate-950/40 border-slate-200/60 dark:border-slate-800/60 opacity-75'
                        }`}
                      >
                        {/* Accent Bar */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${course.accentClass}`} />

                        <div className="p-5 space-y-3.5 flex-1">
                          {/* Top Row: Icon + Title + Lock Status */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${course.accentClass} flex items-center justify-center shadow-xs shrink-0`}>
                                {getCourseIcon(course)}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                    {course.badgeName}
                                  </span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                  {course.title}
                                </h3>
                              </div>
                            </div>

                            {/* Status Indicator */}
                            {isUnlocked ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 text-[10px] font-bold shrink-0">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                <span>Đã mở</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 text-[10px] font-bold shrink-0">
                                <Lock className="w-3 h-3 text-rose-500" />
                                <span>Chưa mở</span>
                              </span>
                            )}
                          </div>

                          {/* Subtitle */}
                          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                            {course.subtitle}
                          </p>

                          {/* Course Meta Info */}
                          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                            <div className="flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-slate-400" />
                              <span>{course.totalUnits} {course.unitLabel}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{course.durationHours} giờ</span>
                            </div>
                          </div>

                          {/* Progress bar if unlocked */}
                          {isUnlocked && (
                            <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-slate-500 dark:text-slate-400 font-medium">Tiến độ:</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">
                                  {progress.completed}/{progress.total} ({progress.percentage}%)
                                </span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                <div
                                  className={`h-full rounded-full bg-gradient-to-r ${course.accentClass} transition-all duration-300`}
                                  style={{ width: `${Math.max(4, progress.percentage)}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Action Footer */}
                        <div className="p-3 px-5 bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                          {isUnlocked ? (
                            <>
                              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" />
                                <span>Sẵn sàng học</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => onSelectCourse(course)}
                                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-white text-xs font-bold shadow-xs transition-all cursor-pointer bg-gradient-to-r ${course.accentClass} hover:opacity-95`}
                              >
                                <span>{progress.completed > 0 ? 'Tiếp tục học' : 'Vào học ngay'}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                <Lock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                                <span>Chưa được giáo viên phân quyền</span>
                              </div>
                              <span className="text-[11px] font-semibold text-slate-400">
                                Liên hệ giáo viên
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
                  <Compass className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Tất cả các khóa học trong nhóm này hiện chưa được mở cho tài khoản của bạn.
                  </p>
                  {!showLockedCourses && (
                    <button
                      type="button"
                      onClick={() => setShowLockedCourses(true)}
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline cursor-pointer"
                    >
                      Bấm vào đây để xem các khóa học của nhóm này
                    </button>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};
