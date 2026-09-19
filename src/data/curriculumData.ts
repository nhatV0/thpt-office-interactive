import type { ModuleInfo } from '../types/curriculum';
import { wordLessons } from './curriculum/wordLessons';
import { excelLessons } from './curriculum/excelLessons';
import { powerpointLessons } from './curriculum/powerpointLessons';

export const CURRICULUM_DATA: Record<string, ModuleInfo> = {
  word: {
    id: 'word',
    name: 'Microsoft Word (Soạn Thảo Văn Bản)',
    shortDescription: 'Chương trình đào tạo chuẩn quốc tế MOS Word 2019 theo giáo trình IIG Vietnam: 8 bài học toàn diện từ cơ bản đến nâng cao.',
    badgeName: 'Bậc Thầy Soạn Thảo',
    colorName: 'sky',
    accentClass: 'text-sky-600 dark:text-sky-400 bg-sky-600',
    badgeColorClass: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-300 dark:border-sky-800',
    lessons: wordLessons
  },
  excel: {
    id: 'excel',
    name: 'Microsoft Excel (Bảng Tính Điện Tử)',
    shortDescription: 'Chương trình đào tạo chuẩn quốc tế MOS Excel 2019 theo giáo trình IIG Vietnam: 8 bài học xây dựng dữ liệu, hàm tính, biểu đồ và quản lý bảng.',
    badgeName: 'Chuyên Gia Bảng Tính',
    colorName: 'emerald',
    accentClass: 'text-emerald-600 dark:text-emerald-400 bg-emerald-600',
    badgeColorClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    lessons: excelLessons
  },
  powerpoint: {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint (Thuyết Trình Đa Phương Tiện)',
    shortDescription: 'Chương trình đào tạo chuẩn quốc tế MOS PowerPoint 2019 theo giáo trình IIG Vietnam: 8 bài học thiết kế slide, diễn hoạt, media và trình chiếu chuyên nghiệp.',
    badgeName: 'Nghệ Sĩ Thuyết Trình',
    colorName: 'rose',
    accentClass: 'text-rose-600 dark:text-rose-400 bg-rose-600',
    badgeColorClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    lessons: powerpointLessons
  }
};
