import { IBasePaginationResponse } from '@/common/models/base-response';
import { IJudgeQuestion, IMultiQuestion } from '@/common/models/question';

export type MultiQuestionResponseType = IMultiQuestion;

export type MultiQuestionListResponseType = IMultiQuestion[];

export type JudgeQuestionListResponseType =
  IBasePaginationResponse<IJudgeQuestion>;
