import { IStudentConfig } from '@/common/models/user-config';

export interface IStudentTableExpose {
  selectedRows: IStudentConfig[];
  onFetchTable: () => Promise<void>;
}
