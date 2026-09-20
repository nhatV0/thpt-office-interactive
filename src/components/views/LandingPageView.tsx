import React from 'react';
import {
  Sparkles,
  FileText,
  Code2,
  Bot,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Cpu,
  Layers,
  ChevronRight,
  Sun,
  Moon,
  LogIn
} from 'lucide-react';

interface LandingPageViewProps {
  onLoginClick: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onExploreCourses: () => void;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  onLoginClick,
  darkMode,
  onToggleDarkMode,
  onExploreCourses
}) => {
  return (
    <div className="min-h-[100dvh] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white transition-colors duration-200">
      {/* Top Sticky Header: Max 64px, one row */}
      <header className="sticky top-0 z-50 w-full h-16 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
            THPT
          </div>
          <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
            Tin Học Tương Tác
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <a href="#chuong-trinh" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            Chương Trình
          </a>
          <a href="#tinh-nang" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            Tính Năng
          </a>
          <a href="#su-pham" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            Phương Pháp Sư Phạm
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleDarkMode}
            title={darkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <button
            type="button"
            onClick={onLoginClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-xs cursor-pointer transition-all active:scale-[0.98]"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Đăng Nhập</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* HERO SECTION: Fits viewport, max 2 lines headline, max 20 words subtext, max 4 text elements */}
        <section className="pt-12 sm:pt-16 pb-14 px-4 sm:px-8 max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>NỀN TẢNG HỌC TẬP TOÀN DIỆN</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white max-w-4xl leading-tight sm:leading-none mb-4">
            Hệ thống học tập tin học THPT và rèn luyện kỹ năng thực chiến.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
            Giáo trình tương tác chuẩn hóa, môi trường giả lập phần mềm trực tiếp trên web và ngân hàng đề thi sát thực tế.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onExploreCourses}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm cursor-pointer transition-all active:scale-[0.98]"
            >
              <span>Khám Phá Khóa Học</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-xs cursor-pointer transition-all active:scale-[0.98]"
            >
              <LogIn className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Vào Lớp Học</span>
            </button>
          </div>
        </section>

        {/* BENTO GRID 3 CORE PILLARS: MOS Office, Competitive Programming, Robotics VEX IQ */}
        <section id="chuong-trinh" className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Lộ trình 4 phân hệ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Chương trình đào tạo đa năng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bento Card 1: MOS 2019 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-sky-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  MOS 2019 ASSOCIATE
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Tin Học Văn Phòng THPT
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Word, Excel và PowerPoint chuẩn quốc tế. Mô phỏng giả lập thanh Ribbon tương tác, trắc nghiệm lý thuyết và ngân hàng đề thi thực hành Multi-Project.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Giả lập Ribbon</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Multi-Project</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Tự động chấm</span>
              </div>
            </div>

            {/* Bento Card 2: Competitive Programming */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  C++ & PYTHON 3
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Lập Trình Thi Đấu
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hệ thống đề thi Olympic, Học sinh giỏi và Chuyên Tin. Bộ bài tập có test case chuẩn hóa, so sánh thuật toán song song và bài giảng KaTeX chuyên sâu.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Bộ Test Cases</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">C++ / Python</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Công thức KaTeX</span>
              </div>
            </div>

            {/* Bento Card 3: Robotics VEX IQ */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-orange-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                  VEX IQ GENERATION 2
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Robotics & Tự Động Hóa
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Lắp ráp cơ điện tử, cơ cấu truyền động và lập trình VEXcode IQ. Đầy đủ giáo trình bài giảng PDF, thư viện khối lệnh và quy chế chấm điểm sa bàn.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">VEXcode IQ</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Barem Sa Bàn</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Cơ điện tử STEM</span>
              </div>
            </div>
            {/* Bento Card 4: IC3 GS6 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                  IC3 GS6 (3 CẤP ĐỘ)
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                  Chứng Chỉ Số Quốc Tế
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Trọn bộ 3 cấp độ (Level 1, Level 2, Level 3) qua 7 chủ đề cốt lõi. Tích hợp giáo trình PDF chuẩn IIG, thẻ tóm tắt kiến thức và ngân hàng trắc nghiệm chuẩn hóa.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Giáo trình IIG</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Flashcards</span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60">Trắc nghiệm IC3</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES HIGHLIGHTS SECTION */}
        <section id="tinh-nang" className="py-12 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Công nghệ tương tác
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Được thiết kế tối ưu cho học đường
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <Terminal className="w-5 h-5 text-sky-600 dark:text-sky-400 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Trực tiếp trên web
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Không cần cài đặt phức tạp, học sinh thao tác mô phỏng ngay trong môi trường trình duyệt.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Lộ trình 3 bước
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Chu trình sư phạm chặt chẽ: Lý thuyết tương tác, thực hành kiểm thử và trắc nghiệm tổng kết.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <Cpu className="w-5 h-5 text-orange-600 dark:text-orange-400 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Chuẩn hóa quốc tế
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Nội dung bám sát cấu trúc đề thi Certiport MOS, chuẩn VEX Robotics và kỳ thi HSG Tin học.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Bảo lưu tiến trình
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Tự động ghi nhớ vị trí bài học, điểm kinh nghiệm XP và lịch sử giải đề của từng cá nhân.
              </p>
            </div>
          </div>
        </section>

        {/* TEACHER & PEDAGOGY SECTION */}
        <section id="su-pham" className="py-12 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-sky-500/10 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border border-sky-500/20 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Dành cho giáo viên & nhà trường
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Quản lý lớp học và theo dõi học sinh dễ dàng
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Giáo viên phụ trách có quyền phân bổ khóa học theo khối lớp, tra cứu tiến độ làm bài, bảng điểm trắc nghiệm và thống kê chuyên cần tức thì.
              </p>
            </div>

            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-xs cursor-pointer transition-all active:scale-[0.98] shrink-0"
            >
              <span>Đăng Nhập Quản Trị</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 px-4 sm:px-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto w-full">
        <div>
          <span>© 2025 Hệ Thống Học Tập Tin Học THPT. Bản quyền nội dung giáo trình.</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onExploreCourses}
            className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
          >
            Khóa học
          </button>
          <button
            type="button"
            onClick={onLoginClick}
            className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
          >
            Đăng nhập
          </button>
        </div>
      </footer>
    </div>
  );
};
