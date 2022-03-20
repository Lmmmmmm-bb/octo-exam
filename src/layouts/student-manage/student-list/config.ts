import { FormRulesMap } from 'element-plus/es/components/form/src/form.type';

type infoDrawerFormProps =
  | 'studentId'
  | 'studentName'
  | 'sex'
  | 'tel'
  | 'email'
  | 'cardId';

export const infoDrawerFormRules: FormRulesMap<infoDrawerFormProps> = {
  studentId: { message: '请输入学号', required: true },
  studentName: { message: '请输入姓名', required: true },
  sex: { message: '请选择性别', required: true },
  tel: { message: '请输入手机号', required: true },
  email: { message: '请输入邮箱', required: true },
  cardId: { message: '请输入身份证号码', required: true }
};
