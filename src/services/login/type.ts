import {
  IAdminConfig,
  IStudentConfig,
  UserRoleEnum
} from '@/common/models/user-config';

export interface ILoginData {
  role: UserRoleEnum;
  userId: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  res: IAdminConfig & IStudentConfig;
}

export type LoginCheckDataType = Omit<ILoginData, 'password'>;
