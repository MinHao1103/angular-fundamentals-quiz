export type QuestionCategory = '基礎語法' | '生命週期' | 'RxJS';

export interface Question {
  question: string;
  options: readonly string[];
  correctIndex: number;
  optionExplanations: readonly string[];
  category?: QuestionCategory;
  correctAnswerCode?: string;
}

export const QUESTIONS: readonly Question[] = [];
