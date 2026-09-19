export interface PracticeTask {
  taskNumber: number;
  description: string;
  guideSteps: string[];
}

export interface PracticeProject {
  id: string;
  projectNumber: number;
  name: string;
  sourceFile: string;
  description: string;
  tasks: PracticeTask[];
}

export interface PracticeExam {
  id: string;
  title: string;
  summary: string;
  durationMinutes: number;
  downloadUrl: string;
  downloadSize: string;
  projects: PracticeProject[];
}
