import { MotionVariants } from '@vueuse/motion';
import { FormRulesMap } from 'element-plus/es/components/form/src/form.type';
import { baseMotionConfig } from '@/common/configs';

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

export const loginWrapperMotionConfig: MotionVariants = {
  ...baseMotionConfig,
  leave: {
    opacity: 0,
    y: 100,
    transition: {
      y: { duration: 300 }
    }
  }
};
