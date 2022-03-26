import { IBreadcrumnInfo } from '@/components/breadcrumb/type';
import { RouterNameEnum } from '@/router/type';

export const breadcrumbConfig: IBreadcrumnInfo[] = [
  { text: '题库管理' },
  { text: '选择题题库', to: { name: RouterNameEnum.QuestionMultipleChoice } },
  { text: '题目详情' }
];

export const questionLevelMap = {
  '1': '简单',
  '2': '中等',
  '3': '困难'
};
