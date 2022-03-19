import { UserRoleEnum } from '@/common/models/user-config';
import { RouterNameEnum } from '@/router/type';
import { IMenuItem } from './type';

export const StudentMenuNavList: Record<string, IMenuItem> = {
  [RouterNameEnum.Home]: { label: '主页' },
  [RouterNameEnum.Exam]: { label: '我的考试' }
};

export const AdminMenuNavList: Record<string, IMenuItem> = {
  [RouterNameEnum.Home]: { label: '主页' },
  [RouterNameEnum.ExamManage]: { label: '考试管理' },
  [RouterNameEnum.ScoreManage]: { label: '成绩管理' },
  [RouterNameEnum.QuestionManage]: {
    label: '题库管理',
    children: [
      { key: RouterNameEnum.QuestionMultipleChoice, label: '选择题' },
      { key: RouterNameEnum.QuestionTrueFalse, label: '判断题' },
      { key: RouterNameEnum.QuestionFillBlank, label: '填空题' }
    ]
  },
  [RouterNameEnum.StudentManage]: {
    label: '学生管理',
    children: [
      { key: RouterNameEnum.StudentManageList, label: '学生列表' },
      { key: RouterNameEnum.StudentManageEnroll, label: '录入学生' }
    ]
  }
};

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

export type ModifyDrawerFormPropsType = 'pwd' | 'confirmPwd';
