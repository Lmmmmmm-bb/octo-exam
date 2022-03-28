import { RouteRecordRaw } from 'vue-router';
import { RouterNameEnum } from '../type';

export const adminRouter: RouteRecordRaw[] = [
  {
    path: '/space/exam-list',
    name: RouterNameEnum.ExamList,
    component: () => import('@/layouts/exam-list/index.vue'),
    meta: {
      title: '在线考试系统 - 试卷列表',
      activeMenu: RouterNameEnum.ExamList
    }
  },
  {
    path: '/space/exam-manage',
    name: RouterNameEnum.ExamManage,
    component: () => import('@/layouts/exam-manage/index.vue'),
    meta: {
      title: '在线考试系统 - 考试管理',
      activeMenu: RouterNameEnum.ExamManage
    }
  },
  {
    path: '/space/student-manage/list',
    name: RouterNameEnum.StudentManageList,
    component: () => import('@/layouts/student-manage/student-list/index.vue'),
    meta: {
      title: '在线考试系统 - 学生列表',
      activeMenu: RouterNameEnum.StudentManageList
    }
  },
  {
    path: '/space/student-manage/enroll',
    name: RouterNameEnum.StudentManageEnroll,
    component: () =>
      import('@/layouts/student-manage/student-enroll/index.vue'),
    meta: {
      title: '在线考试系统 - 录入学生信息',
      activeMenu: RouterNameEnum.StudentManageEnroll
    }
  },
  {
    path: '/space/question-manage/multiple-choice',
    name: RouterNameEnum.QuestionMultipleChoice,
    component: () =>
      import('@/layouts/question-manage/multiple-choice-manage/index.vue'),
    meta: {
      title: '在线考试系统 - 选择题题库',
      activeMenu: RouterNameEnum.QuestionMultipleChoice
    }
  },
  {
    path: '/space/question-manage/multiple-choice/:id',
    name: RouterNameEnum.QuestionMultipleChoiceDetail,
    component: () =>
      import('@/layouts/question-manage/multiple-choice-detail/index.vue'),
    meta: {
      title: '在线考试系统 - 选择题详情',
      activeMenu: RouterNameEnum.QuestionMultipleChoice
    }
  },
  {
    path: '/space/question-manage/true-false',
    name: RouterNameEnum.QuestionTrueFalse,
    component: () =>
      import('@/layouts/question-manage/ture-false-manage/index.vue'),
    meta: {
      title: '在线考试系统 - 判断题题库',
      activeMenu: RouterNameEnum.QuestionTrueFalse
    }
  },
  {
    path: '/space/question-manage/fill-blank',
    name: RouterNameEnum.QuestionFillBlank,
    component: () =>
      import('@/layouts/question-manage/fill-blank-manage/index.vue'),
    meta: {
      title: '在线考试系统 - 填空题题库',
      activeMenu: RouterNameEnum.QuestionFillBlank
    }
  },
  {
    path: '/space/scroll/list',
    name: RouterNameEnum.ScoreManage,
    component: () => import('@/layouts/score-manage/index.vue'),
    meta: {
      title: '在线考试系统 - 成绩列表',
      activeMenu: RouterNameEnum.ScoreManage
    }
  }
];
