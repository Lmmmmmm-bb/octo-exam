export enum QuestionLevelEnum {
  Easy = '1',
  Medium = '2',
  Hard = '3'
}

export interface IMultiQuestion {
  questionId: number;
  subject: string;
  section: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  question: string;
  level: QuestionLevelEnum;
  rightAnswer: 'A' | 'B' | 'C' | 'D';
  analysis: null | string;
  score: number;
}

export interface IJudgeQuestion {
  questionId: number;
  subject: string;
  question: string;
  answer: 'T' | 'F';
  score: number;
  level: QuestionLevelEnum;
  section?: string;
  analysis?: string;
}
