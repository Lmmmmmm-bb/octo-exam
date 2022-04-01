import { IPaperQuestion } from '@/common/models/paper';

export type CurrentQuestionStatusType = Omit<IPaperQuestion, 'paperId'> & {
  index: number;
};

export enum ArrowKeyEnum {
  LeftKey = 'KeyA',
  RightKey = 'KeyD'
}
