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
    meta: { title: '在线考试系统 - 登陆', activeMenu: RouterNameEnum.Login }
  },
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
    path: '/space',
    name: RouterNameEnum.Space,
    component: () => import('@/layouts/space/index.vue'),
    children: [
      {
        path: '/space',
        name: RouterNameEnum.Home,
        component: () => import('@/layouts/home/index.vue'),
        meta: {
          title: '在线考试系统 - 主页',
          activeMenu: RouterNameEnum.Home
        }
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
