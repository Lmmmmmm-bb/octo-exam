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
  rightAnswer: string;
  analysis: null | string;
  score: number;
}
