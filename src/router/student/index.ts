import { RouteRecordRaw } from 'vue-router';
import { RouterNameEnum } from '../type';

export const studentRouter: RouteRecordRaw[] = [
  {
    path: '/space/exam/:id',
    name: RouterNameEnum.Exam,
    component: () => import('@/layouts/exam/index.vue'),
    meta: {
      title: '在线考试系统 - 我的考试',
      activeMenu: RouterNameEnum.Exam
    }
  },
  {
    path: '/space/exam-list',
    name: RouterNameEnum.ExamList,
    component: () => import('@/layouts/exam-list/index.vue'),
    meta: {
      title: '在线考试系统 - 试卷列表',
      activeMenu: RouterNameEnum.ExamList
    }
  }
];
