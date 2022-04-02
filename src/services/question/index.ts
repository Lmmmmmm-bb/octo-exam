const MultiQuestionPrefixUrl = '/multiQuestion';
const JudgeQuestionPrefixUrl = '/judgeQuestion';
const FillQuestionPrefixUrl = '/fillQuestion';

export const MultiQuestionListApi = '/multiQuestions';
export const JudgeQuestionListApi = '/judgeQuestions';
export const FillQuestionListApi = '/fillQuestions';
export const MultiQuestionByIdApi = `${MultiQuestionPrefixUrl}/question`;
export const JudgeQuestionByIdApi = `${JudgeQuestionPrefixUrl}/question`;
export const FillQuestionByIdApi = `${FillQuestionPrefixUrl}/question`;

export * from './type';
