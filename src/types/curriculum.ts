export type ModuleType = 'word' | 'excel' | 'powerpoint';

export interface TheoryReviewQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MicroTheoryCard {
  id: string;
  title: string;
  concept: string;
  keyPoints: string[];
  shortcut?: string;
  examTip?: string;
  checkpointQuestion?: TheoryReviewQuestion;
}

export interface SimulatorTask {
  id: string;
  title: string;
  instruction: string;
  hint: string;
  targetType: 'ribbon-action' | 'cell-formula' | 'cell-value' | 'slide-transition' | 'slide-animation' | 'page-layout';
  actionKey: string;
  expectedValue?: string;
  targetRef?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonUnit {
  id: string;
  moduleId: ModuleType;
  order: number;
  title: string;
  summary: string;
  durationMinutes: number;
  theories: MicroTheoryCard[];
  tasks: SimulatorTask[];
  quiz: QuizQuestion[];
}

export interface ModuleInfo {
  id: ModuleType;
  name: string;
  shortDescription: string;
  badgeName: string;
  colorName: string;
  accentClass: string;
  badgeColorClass: string;
  lessons: LessonUnit[];
}

export interface UserProgressState {
  theoryCompleted: boolean;
  practiceCompleted: boolean;
  quizScore: number;
  quizCompleted: boolean;
  isUnlocked: boolean;
}
