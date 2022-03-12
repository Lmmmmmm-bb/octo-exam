import { useTitle } from '@/common/hooks';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.DEV ? '.' : '/Octo-Exam/'),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../layouts/login/index.vue'),
      meta: { title: '在线考试系统 - 登陆' }
    },
    {
      path: '/space',
      name: 'space',
      component: () => import('../layouts/space/index.vue'),
      children: [
        {
          path: '/space',
          name: 'space-home',
          component: () => import('../layouts/home/index.vue'),
          meta: { title: '在线考试系统 - 主页' }
        },
        {
          path: '/space/exam',
          name: 'space-exam',
          component: () => import('../layouts/exam/index.vue'),
          meta: { title: '在线考试系统 - 我的考试' }
        },
        {
          path: '/space/exam-list',
          name: 'space-list',
          component: () => import('../layouts/exam-list/index.vue'),
          meta: { title: '在线考试系统 - 试卷列表' }
        },
        {
          path: '/space/management',
          name: 'space-management',
          component: () => import('../layouts/management/index.vue'),
          meta: { title: '在线考试系统 - 考试管理' }
        }
      ]
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('../layouts/not-found/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/not-found'
    }
  ]
});

router.beforeEach((next) => {
  useTitle(next.meta.title);
});

export default router;
