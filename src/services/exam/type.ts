import { IExam } from '@/common/models/exam';
import { IPaperQuestion } from '@/common/models/paper';
import { IBasePaginationResponse } from '@/common/models/base-response';

export type ExamListResponseType = IBasePaginationResponse<IExam>;

export type ExamSubmitRequestType = Omit<IPaperQuestion, 'paperId'> & {
  studentAnswer: string;
};

export interface IExamAnswerSheetSubmitResponse {
  answerDate: string;
  examCode: number;
  score: number;
  subject: string;
  studentId: number;
  scoreId?: number;
}
