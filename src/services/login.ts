import { UserRoleEnum } from '@/common/models/user-config';

export const Login = '/login';

export interface ILoginData {
  role: UserRoleEnum;
  userId: string;
  password: string;
}
