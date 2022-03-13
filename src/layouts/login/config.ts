import { ElForm } from 'element-plus';
import { FormRulesMap } from 'element-plus/es/components/form/src/form.type';

export type FormInstanceType = InstanceType<typeof ElForm>;

export const formRules: FormRulesMap<'userId' | 'password'> = {
  userId: {
    message: '请输入用户名',
    required: true,
    trigger: 'change'
  },
  password: {
    message: '请输入密码',
    required: true,
    trigger: 'change'
  }
};
