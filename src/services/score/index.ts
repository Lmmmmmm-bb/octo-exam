const ScorePrefixUrl = '/score';

export const ScoreListApi = '/scores';
export const ScoreDeleteByIdApi = '/score';
export const ScoreListByExamApi = `${ScorePrefixUrl}/exam`;
export const ScoreListByStudentApi = `${ScorePrefixUrl}/student`;

export * from './type';
