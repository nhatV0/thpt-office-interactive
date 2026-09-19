export interface CPProblem {
  id: string; // unique slug e.g. c1-b1-p1-weird-algorithm
  title: string; // problem title
  fileName: string; // original pdf filename
  source: 'Thuật toán' | 'HSG' | 'Olympic' | 'Chuyên Tin';
  timeLimit: string; // e.g. '1.0s'
  memoryLimit: string; // e.g. '512MB' or '256MB'
  point: number; // e.g. 100
  preview: string; // concise description of the problem
  pdfUrl: string; // served URL under public/cp-assets/
  hasTestCases?: boolean;
  testCaseZipUrl?: string;
  solutionCodeUrl?: string;
}

export interface CPLesson {
  id: string; // e.g. 'cp-bronze-lesson-1'
  order: number; // 1 to 10 or 1 to 12
  title: string; // topic title
  theoryPdfFileName: string;
  theoryPdfUrl: string;
  theorySummary: string;
  coreConcepts: string[];
  problems: CPProblem[];
}

export interface CPCourseData {
  id: 'cp-bronze' | 'cp-silver';
  title: string;
  subtitle: string;
  levelBadge: string;
  description: string;
  accentColor: 'amber' | 'cyan';
  accentClass: string;
  lessons: CPLesson[];
}
