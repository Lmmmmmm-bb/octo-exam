import { IBreadcrumnInfo } from '@/components/breadcrumb/type';
import { RouterNameEnum } from '@/router/type';

export const breadcrumbConfig: IBreadcrumnInfo[] = [
  { text: '选择题题库', to: { name: RouterNameEnum.QuestionMultipleChoice } },
  { text: '题目详情' }
];
