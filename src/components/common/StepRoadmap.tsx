import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

interface StepItem {
  step: number;
  title: string;
  detail?: string;
}

interface StepRoadmapProps {
  steps: StepItem[];
}

export const StepRoadmap: React.FC<StepRoadmapProps> = React.memo(({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        <span className="text-xs font-mono uppercase font-bold text-slate-700 dark:text-slate-300 tracking-wider">
          Sơ đồ tư duy các bước thực hiện
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="relative p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-xs border border-cyan-500/30">
                  {item.step}
                </span>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 hidden sm:block" />
                )}
              </div>
              <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h5>
            </div>

            {item.detail && (
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
