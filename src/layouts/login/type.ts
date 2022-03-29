import { UserRoleEnum } from '@/common/models/user-config';

export const roleMap = {
  [UserRoleEnum.Student]: '学生',
  [UserRoleEnum.Admin]: '管理员'
  // [UserRoleEnum.Teacher]: '老师'
};
