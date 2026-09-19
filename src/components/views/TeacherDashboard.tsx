import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Users,
  UserPlus,
  Trash2,
  RotateCcw,
  Award,
  Search,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const { accounts, createStudent, deleteStudent, resetStudentProgress } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newFullName, setNewFullName] = useState('');
  const [newClass, setNewClass] = useState('12A1');
  const [errorMsg, setErrorMsg] = useState('');

  const students = accounts.filter(a => a.role === 'student');

  const classes = Array.from(new Set(students.map(s => s.schoolClass).filter(Boolean)));

  const filteredStudents = students.filter(s => {
    const matchesSearch =
      s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || s.schoolClass === selectedClass;
    return matchesSearch && matchesClass;
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername.trim() || !newFullName.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ tên đăng nhập và họ tên học viên.');
      return;
    }
    const success = createStudent(newUsername, newFullName, newClass);
    if (!success) {
      setErrorMsg('Tên đăng nhập này đã tồn tại trong hệ thống.');
      return;
    }
    setNewUsername('');
    setNewFullName('');
    setErrorMsg('');
    setShowAddModal(false);
  };

  const totalLessons = 18; // 6 word + 7 excel + 5 powerpoint

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-900 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Khu Vực Quản Trị Giáo Viên</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Bảng Điều Khiển Học Viên & Tiến Độ Học Tập
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Theo dõi tiến độ hoàn thành các bài học Word, Excel, PowerPoint và quản lý tài khoản học sinh toàn trường.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold shadow transition-all cursor-pointer shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Thêm Học Viên Mới</span>
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Tổng số học viên</span>
            <span className="text-xl font-black text-slate-900 dark:text-slate-100">
              {students.length} em
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Số lớp đang quản lý</span>
            <span className="text-xl font-black text-slate-900 dark:text-slate-100">
              {classes.length} lớp
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Điểm XP trung bình</span>
            <span className="text-xl font-black text-slate-900 dark:text-slate-100">
              {students.length > 0
                ? Math.round(students.reduce((sum, s) => sum + s.xpPoints, 0) / students.length)
                : 0}{' '}
              XP
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo họ tên hoặc tên đăng nhập học viên..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-sky-500 text-slate-800 dark:text-slate-200"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            Lọc theo lớp:
          </label>
          <select
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
            className="text-xs px-3 py-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 font-medium"
          >
            <option value="all">Tất cả các lớp</option>
            {classes.map(c => (
              <option key={c} value={c}>
                Lớp {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Students Data Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                <th className="p-3.5 pl-5">Học Viên</th>
                <th className="p-3.5">Lớp</th>
                <th className="p-3.5">Tiến Độ Bài Học</th>
                <th className="p-3.5 text-center">Điểm XP</th>
                <th className="p-3.5 text-center">Chuỗi Ngày</th>
                <th className="p-3.5 text-right pr-5">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400 text-xs">
                    Không tìm thấy học viên phù hợp.
                  </td>
                </tr>
              ) : (
                filteredStudents.map(student => {
                  const completedLessons = Object.values(student.progress).filter(
                    p => p.theoryCompleted && p.practiceCompleted && p.quizCompleted
                  ).length;
                  const progressPct = Math.round((completedLessons / totalLessons) * 100);

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* Name and username */}
                      <td className="p-3.5 pl-5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold flex items-center justify-center text-xs">
                            {student.fullName.charAt(0)}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 dark:text-slate-100 block">
                              {student.fullName}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">
                              @{student.username}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Class */}
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[11px]">
                          {student.schoolClass || 'Chưa xếp'}
                        </span>
                      </td>

                      {/* Progress bar */}
                      <td className="p-3.5 min-w-[180px]">
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">
                            {completedLessons}/{totalLessons} bài
                          </span>
                          <span className="font-bold text-sky-600 dark:text-sky-400">
                            {progressPct}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-sky-600 rounded-full transition-all"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </td>

                      {/* XP */}
                      <td className="p-3.5 text-center">
                        <span className="font-bold text-amber-600 dark:text-amber-400">
                          {student.xpPoints} XP
                        </span>
                      </td>

                      {/* Streak */}
                      <td className="p-3.5 text-center">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {student.streak} ngày
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="p-3.5 text-right pr-5">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              if (
                                confirm(
                                  `Bạn có chắc chắn muốn đặt lại tiến độ học của em ${student.fullName}?`
                                )
                              ) {
                                resetStudentProgress(student.id);
                              }
                            }}
                            title="Đặt lại tiến độ bài học"
                            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-amber-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (
                                confirm(
                                  `Bạn có chắc chắn muốn xóa tài khoản của em ${student.fullName}?`
                                )
                              ) {
                                deleteStudent(student.id);
                              }
                            }}
                            title="Xóa tài khoản học viên"
                            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Student */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Thêm Học Viên Mới
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs rounded-xl border border-rose-200 dark:border-rose-800">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleCreate} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Tên Đăng Nhập (Username)
                </label>
                <input
                  type="text"
                  placeholder="ví dụ: hocvien4"
                  value={newUsername}
                  onChange={e => setNewUsername(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Họ và Tên Học Viên
                </label>
                <input
                  type="text"
                  placeholder="ví dụ: Nguyễn Hoàng Nam"
                  value={newFullName}
                  onChange={e => setNewFullName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Lớp
                </label>
                <input
                  type="text"
                  placeholder="ví dụ: 12A1, 11B2..."
                  value={newClass}
                  onChange={e => setNewClass(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow cursor-pointer"
                >
                  Thêm Học Viên
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
