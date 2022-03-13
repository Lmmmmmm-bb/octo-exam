import { UserRoleEnum } from '@/common/models/user-config';
import { ElForm } from 'element-plus';
import { MenuItemEnum } from './types';

export type FormInstanceType = InstanceType<typeof ElForm>;

export const MenuNavList = new Map([
  [MenuItemEnum.Home, '主页'],
  [MenuItemEnum.Exam, '我的考试'],
  [MenuItemEnum.Test, '试卷列表'],
  [MenuItemEnum.Manage, '考试管理']
]);

export const RoleMap = new Map([
  [UserRoleEnum.Admin, '管理员'],
  [UserRoleEnum.Student, '学生'],
  [UserRoleEnum.Teacher, '教师']
]);

export const BasicUserInfoMap = new Map([
  ['sex', '性别'],
  ['tel', '手机'],
  ['email', '邮箱'],
  ['cardId', '身份证号码']
]);

export const AdminUserInfoMap = new Map([
  ['adminId', '管理员编号'],
  ['adminName', '管理员名称']
]);

export const StudentUserInfoMap = new Map([
  ['studentId', '学号'],
  ['studentName', '姓名'],
  ['clazz', '班级'],
  ['grade', '年级'],
  ['institute', '学院'],
  ['major', '专业']
]);
