import type { CourseDefinition } from '../types/course';
import { MOS_WORD_PRACTICE_EXAMS } from './practiceExamsData';

export const COURSES_REGISTRY: CourseDefinition[] = [
  {
    id: 'word',
    title: 'Microsoft Word 2019',
    subtitle: 'Soạn thảo & định dạng văn bản chuẩn quốc tế',
    description: 'Chinh phục kỹ năng xử lý văn bản hành chính, đồ họa trực quan, bảng biểu chuyên nghiệp, mục lục tự động và chuẩn định dạng MOS Associate.',
    kind: 'curriculum',
    moduleId: 'word',
    category: 'office',
    badgeName: 'MOS Word 2019',
    accentColor: 'sky',
    accentClass: 'from-sky-500 to-blue-600',
    totalUnits: 8,
    unitLabel: 'bài học',
    durationHours: 30,
    tags: ['Soạn thảo', 'Bảng biểu', 'Mục lục tự động', 'Mail Merge', 'Định dạng in ấn']
  },
  {
    id: 'excel',
    title: 'Microsoft Excel 2019',
    subtitle: 'Xử lý dữ liệu, hàm số & biểu đồ phân tích',
    description: 'Nắm vững phân tích dữ liệu, quản lý bảng tính lớn, hàm tính toán thống kê, điều kiện logic, trực quan hóa biểu đồ và tổng hợp số liệu báo cáo.',
    kind: 'curriculum',
    moduleId: 'excel',
    category: 'office',
    badgeName: 'MOS Excel 2019',
    accentColor: 'emerald',
    accentClass: 'from-emerald-500 to-teal-600',
    totalUnits: 8,
    unitLabel: 'bài học',
    durationHours: 32,
    tags: ['Hàm số & Công thức', 'Bảng dữ liệu', 'Biểu đồ', 'Sắp xếp & Lọc', 'Conditional Formatting']
  },
  {
    id: 'powerpoint',
    title: 'Microsoft PowerPoint 2019',
    subtitle: 'Thiết kế slide & thuyết trình truyền cảm hứng',
    description: 'Làm chủ thiết kế trang chiếu hiện đại, Slide Master đồng bộ, hiệu ứng chuyển trang mượt mà, kỹ thuật hoạt họa đối tượng và tối ưu hóa bài trình chiếu.',
    kind: 'curriculum',
    moduleId: 'powerpoint',
    category: 'office',
    badgeName: 'MOS PowerPoint 2019',
    accentColor: 'rose',
    accentClass: 'from-rose-500 to-red-600',
    totalUnits: 8,
    unitLabel: 'bài học',
    durationHours: 28,
    tags: ['Thiết kế Slide', 'Slide Master', 'Chuyển trang', 'Animation', 'Trình chiếu chuyên nghiệp']
  },
  {
    id: 'word-practice',
    title: 'Ôn Luyện Đề Thi MOS Word 2019',
    subtitle: 'Luyện đề thực chiến Multi-Project chuẩn Certiport',
    description: 'Hệ thống 5 bộ đề thi thực hành toàn diện với 35 dự án Multi-Project mô phỏng sát đề thi thật, kèm file dữ liệu .docx và hướng dẫn giải chi tiết từng bước.',
    kind: 'practice',
    category: 'practice',
    badgeName: 'Thực Chiến MOS',
    accentColor: 'indigo',
    accentClass: 'from-indigo-600 to-violet-600',
    totalUnits: MOS_WORD_PRACTICE_EXAMS.length || 5,
    unitLabel: 'đề thi',
    durationHours: 25,
    tags: ['5 Đề thi lớn', '35 Dự án', 'File mẫu .docx', 'Multi-Project', 'Sát đề thi thật']
  },
  {
    id: 'cp-bronze',
    title: 'Lập Trình Thi Đấu Nâng Cao',
    subtitle: 'Thuật toán kinh điển & Nền tảng Olympic Tin học',
    description: 'Trang bị tư duy thuật toán vững chắc: Mô phỏng, Sắp xếp, Binary Search, Prefix Sum, Two Pointers, Tham lam, Toán học, Quay lui, Quy hoạch động cơ bản và Đồ thị BFS/DFS.',
    kind: 'programming',
    category: 'programming',
    badgeName: 'CP Nâng Cao',
    accentColor: 'amber',
    accentClass: 'from-amber-500 to-orange-600',
    totalUnits: 10,
    unitLabel: 'chủ đề',
    durationHours: 45,
    tags: ['Simulation', 'Binary Search', 'Two Pointers', 'Greedy', 'DP Cơ Bản', 'BFS/DFS']
  },
  {
    id: 'cp-silver',
    title: 'Lập Trình Thi Đấu Chuyên Sâu',
    subtitle: 'Thuật toán nâng cao & Luyện thi HSG Tỉnh / Quốc Gia',
    description: 'Chinh phục kỹ thuật lập trình đỉnh cao: Monotonic Queue, 2D Difference Array, Cấu trúc dữ liệu nâng cao, String Hashing, Multi-source BFS, Cây & Tree DFS, Dijkstra và DP dãy xâu.',
    kind: 'programming',
    category: 'programming',
    badgeName: 'CP Chuyên Sâu',
    accentColor: 'cyan',
    accentClass: 'from-cyan-500 to-blue-600',
    totalUnits: 12,
    unitLabel: 'chủ đề',
    durationHours: 60,
    tags: ['Monotonic Queue', '2D Prefix Sum', 'String Hashing', 'Dijkstra', 'Tree DFS', 'DP Nâng Cao']
  }
];

export function getCourseById(courseId: string): CourseDefinition | undefined {
  return COURSES_REGISTRY.find(c => c.id === courseId);
}

export function getAllCourseIds(): string[] {
  return COURSES_REGISTRY.map(c => c.id);
}
