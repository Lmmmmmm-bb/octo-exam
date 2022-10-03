import { FormRules } from 'element-plus';

export const formRules: FormRules = {
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
