export interface VexCodeBlock {
  category: 'Drivetrain' | 'Motion' | 'Sensing' | 'Control' | 'Events' | 'Looks' | 'Variables';
  color: string;
  blockText: string;
  description: string;
  exampleSnippet?: string;
}

export interface RoboticsChallenge {
  id: string;
  title: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Thử thách' | 'Nâng cao';
  arenaDescription: string;
  hardwareRequired: string[];
  rules: string[];
  evaluationRubric: {
    criteria: string;
    points: number;
  }[];
  sampleSolutionHint?: string;
}

export interface RoboticsLesson {
  id: string; // e.g. 'robotics-basic-lesson-1'
  order: number; // 1 to 18
  title: string;
  shortTitle: string;
  summary: string;
  theoryPdfFileName: string;
  theoryPdfUrl: string;
  objectives: string[];
  hardwareKit: string[];
  vexBlocks: VexCodeBlock[];
  challenges: RoboticsChallenge[];
  stemApplications: string[];
}

export type RoboticsCourseId = 'robotics-basic' | 'robotics-intermediate' | 'robotics-advanced';

export interface RoboticsCourseData {
  id: RoboticsCourseId;
  title: string;
  subtitle: string;
  levelBadge: string;
  badgeColor: string;
  description: string;
  accentColor: 'orange' | 'indigo' | 'rose';
  accentHex: string;
  lessons: RoboticsLesson[];
}
