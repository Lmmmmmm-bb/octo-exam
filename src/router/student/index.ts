import { RouteRecordRaw } from 'vue-router';
import { RouterNameEnum } from '../type';

export const studentRouter: RouteRecordRaw[] = [
  {
    path: '/space/exam',
    name: RouterNameEnum.Exam,
    component: () => import('@/layouts/exam/index.vue'),
    meta: {
      title: '在线考试系统 - 我的考试',
      activeMenu: RouterNameEnum.Exam
    }
  }
];
