import { IBasePaginationResponse } from '@/common/models/base-response';
import { IStudentConfig } from '@/common/models/user-config';

export type StudentListResponseType = IBasePaginationResponse<IStudentConfig>;

export type StudentDataType = IStudentConfig;
