import { useTitle } from '@/common/hooks';
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router';
import { RouterNameEnum } from './type';

const history = import.meta.env.DEV
  ? createWebHistory()
  : createWebHashHistory('/Octo-Exam/');

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login'
    },
    {
      path: '/login',
      name: RouterNameEnum.Login,
      component: () => import('../layouts/login/index.vue'),
      meta: { title: '在线考试系统 - 登陆' }
    },
    {
      path: '/space',
      name: RouterNameEnum.Space,
      component: () => import('../layouts/space/index.vue'),
      children: [
        {
          path: '/space',
          name: RouterNameEnum.Home,
          component: () => import('../layouts/home/index.vue'),
          meta: { title: '在线考试系统 - 主页' }
        },
        {
          path: '/space/exam',
          name: RouterNameEnum.Exam,
          component: () => import('../layouts/exam/index.vue'),
          meta: { title: '在线考试系统 - 我的考试' }
        },
        {
          path: '/space/exam-list',
          name: RouterNameEnum.ExamList,
          component: () => import('../layouts/exam-list/index.vue'),
          meta: { title: '在线考试系统 - 试卷列表' }
        },
        {
          path: '/space/exam-manage',
          name: RouterNameEnum.ExamManage,
          component: () => import('../layouts/exam-manage/index.vue'),
          meta: { title: '在线考试系统 - 考试管理' }
        },
        {
          path: '/space/student-manage/list',
          name: RouterNameEnum.StudentManageList,
          component: () => import('../layouts/student-manage-list/index.vue'),
          meta: { title: '在线考试系统 - 学生列表' }
        },
        {
          path: '/space/student-manage/enroll',
          name: RouterNameEnum.StudentManageEnroll,
          component: () => import('../layouts/student-manage-enroll/index.vue'),
          meta: { title: '在线考试系统 - 录入学生信息' }
        },
        {
          path: '/space/question-manage',
          name: RouterNameEnum.QuestionManage,
          component: () => import('../layouts/question-manage/index.vue'),
          meta: { title: '在线考试系统 - 题库管理' }
        },
        {
          path: '/space/scroll/list',
          name: RouterNameEnum.ScoreManage,
          component: () => import('../layouts/score-manage/index.vue'),
          meta: { title: '在线考试系统 - 成绩列表' }
        }
      ]
    },
    {
      path: '/not-found',
      name: RouterNameEnum.NotFound,
      component: () => import('../layouts/not-found/index.vue'),
      meta: { title: '404 - 未找到页面' }
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
