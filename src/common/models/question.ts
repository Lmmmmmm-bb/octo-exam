export interface IMultiQuestion {
  questionId: number;
  subject: string;
  section: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  question: string;
  level: string;
  rightAnswer: string;
  analysis: null | string;
  score: number;
}
