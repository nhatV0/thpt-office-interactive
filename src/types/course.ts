import type { ModuleType } from './curriculum';

export type CourseKind = 'curriculum' | 'practice' | 'programming';
export type CourseCategory = 'office' | 'practice' | 'advanced' | 'programming';
export type CourseAccentColor = 'sky' | 'emerald' | 'rose' | 'indigo' | 'amber' | 'cyan';

export interface CourseDefinition {
  id: string; // e.g. 'word', 'excel', 'powerpoint', 'word-practice'
  title: string; // e.g. "Microsoft Word 2019"
  subtitle: string; // Brief one-line pitch
  description: string; // Detailed outcome / objectives
  kind: CourseKind; // 'curriculum' (lessons, micro-theories, simulator) vs 'practice' (exam projects)
  moduleId?: ModuleType; // 'word' | 'excel' | 'powerpoint' when kind === 'curriculum'
  category: CourseCategory;
  badgeName: string;
  accentColor: CourseAccentColor;
  accentClass: string;
  totalUnits: number; // Number of lessons or exams
  unitLabel: string; // "bài học" | "đề thi"
  durationHours: number;
  tags: string[];
}
