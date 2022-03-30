import { IPaperQuestion } from '@/common/models/paper';

export type CurrentQuestionStatusType = Omit<IPaperQuestion, 'paperId'>;
