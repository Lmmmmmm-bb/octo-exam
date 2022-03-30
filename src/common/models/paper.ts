import { QuestionType } from './question';

export interface IPaperQuestion {
  paperId: number;
  questionType: QuestionType;
  questionId: number;
}
