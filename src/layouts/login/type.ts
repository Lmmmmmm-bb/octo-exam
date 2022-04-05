import { UserRoleEnum } from '@/common/models/user-config';

export const roleMap = {
  [UserRoleEnum.Student]: 'role.student',
  [UserRoleEnum.Admin]: 'role.admin'
  // [UserRoleEnum.Teacher]: '老师'
};
