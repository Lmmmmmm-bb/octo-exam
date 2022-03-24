import { QuestionLevelEnum } from '@/common/models/question';

export const getLevelTagType = (level: QuestionLevelEnum) => {
  if (level === QuestionLevelEnum.Easy) {
    return 'success';
  } else if (level === QuestionLevelEnum.Medium) {
    return '';
  } else {
    return 'danger';
  }
};
