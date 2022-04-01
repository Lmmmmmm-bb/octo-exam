export enum QuestionLevelEnum {
  Easy = '1',
  Medium = '2',
  Hard = '3'
}

export enum QuestionTypeEnum {
  Multi = 1,
  Judge = 2,
  Fill = 3
}

export type QuestionType = 1 | 2 | 3;

export interface IBaseQuestion {
  questionId: number;
  question: string;
  subject: string;
  score: number;
  level: QuestionLevelEnum;
  section?: string;
  analysis?: string;
}

export interface IMultiQuestion extends IBaseQuestion {
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  rightAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface IJudgeQuestion extends IBaseQuestion {
  answer: 'T' | 'F';
}

export interface IFillQuestion extends IBaseQuestion {
  answer: string;
}
