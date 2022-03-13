import { UserRoleEnum } from '@/common/models/user-config';

export const roleMap = {
  管理员: UserRoleEnum.Admin,
  老师: UserRoleEnum.Teacher,
  学生: UserRoleEnum.Student
};
