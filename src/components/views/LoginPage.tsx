import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogIn, User, Lock } from 'lucide-react';
import { sanitizeText } from '../../utils/security';
interface LoginPageProps {
  onBackToLanding?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onBackToLanding }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedUser = sanitizeText(username);
    if (!sanitizedUser || !password.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }
    const result = login(sanitizedUser, password);
    if (!result.success) {
      setErrorMsg(result.message || 'Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-950 p-4 selection:bg-sky-500 selection:text-white relative">
      {onBackToLanding && (
        <button
          type="button"
          onClick={onBackToLanding}
          className="absolute top-6 left-6 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          ← Quay lại trang chủ
        </button>
      )}
      {/* Decorative ambient background */}
      <div className="w-full max-w-md space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-600 text-white font-black text-xl shadow-lg shadow-sky-500/30 mb-2">
            MOS
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            Hệ Thống Học Tập Tin Học
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Học lý thuyết tương tác, thực hành giả lập trực tiếp trên web & luyện thi
          </p>
        </div>

        {/* Login Form Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <LogIn className="w-4 h-4 text-sky-600" />
              <span>Đăng Nhập Tài Khoản</span>
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Tài khoản và mật khẩu được cấp và quản lý bởi Giáo viên phụ trách.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs rounded-xl font-medium text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                Tên Đăng Nhập (Tài khoản)
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Nhập tên đăng nhập..."
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                Mật Khẩu
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Nhập mật khẩu..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
            >
              <span>Vào Học Ngay</span>
              <LogIn className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer note */}
          <div className="pt-3 text-center space-y-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            <p className="font-medium text-slate-700 dark:text-slate-300">
              Học sinh chưa có tài khoản vui lòng liên hệ zalo: <span className="font-bold text-sky-600 dark:text-sky-400">0944540402</span> (thầy Nhật)
            </p>
            <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-1 space-y-0.5">
              <p className="font-medium text-slate-600 dark:text-slate-400">
                Giáo viên: Võ Minh Nhật - Giáo viên Tin học
              </p>
              <p>
                Email: <a href="mailto:vominhnhat080402@gmail.com" className="text-sky-600 dark:text-sky-400 hover:underline">vominhnhat080402@gmail.com</a> • Zalo: <span className="text-slate-600 dark:text-slate-300 font-medium">0944540402</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
