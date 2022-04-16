import { RouteRecordRaw } from 'vue-router';
import { adminRouter } from './admin';
import { studentRouter } from './student';
import { RouterNameEnum } from './type';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: RouterNameEnum.Login,
    component: () => import('@/layouts/login/index.vue'),
    meta: { title: 'Octo Exam - 登陆', activeMenu: RouterNameEnum.Login }
  },
  {
    path: '/space/exam/:examCode/paper/:paperId',
    name: RouterNameEnum.Exam,
    component: () => import('@/layouts/exam/index.vue'),
    meta: { title: 'Octo Exam - 我的考试', activeMenu: RouterNameEnum.Exam }
  },
  {
    path: '/space/exam/result',
    name: RouterNameEnum.ExamResult,
    component: () => import('@/layouts/exam-result/index.vue'),
    meta: { title: 'Octo Exam - 考试结果', activeMenu: RouterNameEnum.Exam },
    beforeEnter: (to) => {
      const { result } = to.params;
      if (Number(result) || Number(result) === 0) {
        return true;
      }
      return { name: RouterNameEnum.ExamList };
    }
  },
  {
    path: '/space',
    name: RouterNameEnum.Space,
    component: () => import('@/layouts/space/index.vue'),
    children: [
      {
        path: '/space',
        name: RouterNameEnum.Home,
        component: () => import('@/layouts/home/index.vue'),
        meta: { title: 'Octo Exam - 主页', activeMenu: RouterNameEnum.Home }
      },
      ...studentRouter,
      ...adminRouter
    ]
  },
  {
    path: '/not-found',
    name: RouterNameEnum.NotFound,
    component: () => import('@/layouts/not-found/index.vue'),
    meta: { title: '404 - 未找到页面', activeMenu: RouterNameEnum.NotFound }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found'
  }
];
