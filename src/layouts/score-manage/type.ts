import { IScore } from '@/common/models/score';

export interface IScoreTableExpose {
  selectedRows: IScore[];
  onFetchScore: () => Promise<void>;
  onFetchScoreByExamCode: (code: string) => Promise<void>;
}
