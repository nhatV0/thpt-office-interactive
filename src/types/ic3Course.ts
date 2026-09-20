export type IC3CourseId = 'ic3-level-1' | 'ic3-level-2' | 'ic3-level-3';

export interface IC3QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  domain: string;
}

export interface IC3CoreKnowledgeItem {
  title: string;
  details: string[];
}

export interface IC3KeyTerm {
  term: string;
  definition: string;
}

export interface IC3Topic {
  id: string; // e.g. 'ic3-l1-chude-1'
  order: number; // 1 to 7
  code: string; // 'TB' (Technology Basics), 'DC' (Digital Citizen), 'IM' (Information Management), 'CC' (Content Creation), 'COMM' (Communication), 'COL' (Collaboration), 'SS' (Safety & Security)
  title: string;
  englishTitle: string;
  summary: string;
  durationMinutes: number;
  pdfFileName: string;
  pdfUrl: string;
  coreKnowledge: IC3CoreKnowledgeItem[];
  keyTerms: IC3KeyTerm[];
  quizQuestions: IC3QuizQuestion[];
}

export interface IC3CourseData {
  id: IC3CourseId;
  title: string;
  subtitle: string;
  levelBadge: string;
  badgeColor: string;
  description: string;
  accentColor: string;
  accentClass: string;
  durationHours: number;
  topics: IC3Topic[];
}
