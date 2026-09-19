import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogIn, ShieldCheck, GraduationCap } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg('Vui lòng nhập tên tài khoản.');
      return;
    }
    const success = login(username, password);
    if (!success) {
      setErrorMsg('Tên đăng nhập hoặc mật khẩu không chính xác.');
      return;
    }
    setErrorMsg('');
    onSuccess();
    onClose();
  };

  const quickLogin = (uname: string, pwd?: string) => {
    login(uname, pwd || '123');
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 mx-auto flex items-center justify-center shadow-inner">
            <LogIn className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Đăng Nhập Hệ Thống
          </h3>
          <p className="text-xs text-slate-500">
            Dành cho Học viên theo dõi điểm và Giáo viên quản lý lớp học.
          </p>
        </div>

        {errorMsg && (
          <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs rounded-xl border border-rose-200 dark:border-rose-800 text-center font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Tên Đăng Nhập
            </label>
            <input
              type="text"
              placeholder="ví dụ: giaovien hoặc hocvien1"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Mật Khẩu (mặc định: 123)
            </label>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              Đóng
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow cursor-pointer"
            >
              Đăng Nhập
            </button>
          </div>
        </form>

        {/* Quick Demo Accounts Selection */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
            Hoặc Đăng Nhập Nhanh Để Kiểm Thử:
          </span>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => quickLogin('giaovien', '123')}
              className="p-2.5 rounded-xl border border-sky-300 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 text-left transition-all cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-sky-800 dark:text-sky-300 font-bold text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Giáo Viên Quản Lý</span>
              </div>
              <span className="text-[10px] text-slate-500 block mt-0.5">@giaovien (pass: 123)</span>
            </button>

            <button
              type="button"
              onClick={() => quickLogin('hocvien1', '123')}
              className="p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-left transition-all cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Học Viên 1 (12A1)</span>
              </div>
              <span className="text-[10px] text-slate-500 block mt-0.5">@hocvien1 (pass: 123)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
