export interface TestCaseItem {
  id: string; // e.g. "Test 1", "Test 2"
  input: string; // verbatim test input
  output: string; // verbatim expected test output
}

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
  problemContent?: string; // full extracted problem statement text (no headnotes/footnotes)
  hasTestCases?: boolean;
  testCaseZipUrl?: string;
  solutionCodeUrl?: string;
  sampleInput?: string; // sample input for manual testing
  sampleOutput?: string; // expected sample output for answer verification
  testCases?: TestCaseItem[]; // list of tests viewable and testable one by one
  totalTests?: number;
}

export interface CPLesson {
  id: string; // e.g. 'cp-bronze-lesson-1'
  order: number; // 1 to 10 or 1 to 12
  title: string; // topic title
  theoryPdfFileName: string;
  theoryPdfUrl: string;
  theorySummary: string;
  theoryContent?: string; // full extracted theory document text (no headnotes/footnotes)
  coreConcepts: string[];
  problems: CPProblem[];
}

export type CPCourseId = 'cp-basic' | 'cp-bronze' | 'cp-silver';

export interface CPCourseData {
  id: CPCourseId;
  title: string;
  subtitle: string;
  levelBadge: string;
  description: string;
  accentColor: 'emerald' | 'amber' | 'cyan';
  accentClass: string;
  lessons: CPLesson[];
}
