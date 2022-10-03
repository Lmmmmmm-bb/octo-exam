import { FormRules } from 'element-plus';

export const infoDrawerFormRules: FormRules = {
  studentId: { message: '请输入学号', required: true },
  studentName: { message: '请输入姓名', required: true },
  sex: { message: '请选择性别', required: true },
  tel: { message: '请输入手机号', required: true },
  email: { message: '请输入邮箱', required: true },
  cardId: { message: '请输入身份证号码', required: true }
};
