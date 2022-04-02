const ExamPrefixUrl = '/exam';

export const ExamAddAndDeleteApi = '/exam';
export const ExamListApi = '/exams';
export const ExamByPaper = `${ExamPrefixUrl}/paper`;
export const ExamByExamCode = `${ExamPrefixUrl}/code`;
export const ExamListByStudentApi = `${ExamPrefixUrl}/student`;
export const ExamAnswerSheetSubmitApi = (examCode: string, studentId: number) =>
  `${ExamPrefixUrl}/${examCode}/student/${studentId}`;

export * from './type';
