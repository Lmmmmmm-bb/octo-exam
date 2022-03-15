import { UserRoleEnum } from '@/common/models/user-config';

export const LoginApi = '/login';

export interface ILoginData {
  role: UserRoleEnum;
  userId: string;
  password: string;
}
