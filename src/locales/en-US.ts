import { RouterNameEnum } from '@/router/type';

export const enUS = {
  common: {
    locale: 'Language',
    confirm: 'Confirm',
    cancel: 'Cancel',
    tip: 'Tip',
    warn: 'Warning',
    notice: 'Notice',
    minutes: 'minutes',
    search: 'Search',
    refresh: 'Refresh',
    delete: 'Delete',
    operate: 'Operate',
    copyable: 'Click To Copy {target}'
  },
  role: {
    admin: 'Admin',
    student: 'Student'
  },
  login: {
    login: 'Sign in',
    remember: 'Remember',
    account: 'Account',
    password: 'Password'
  },
  menu: {
    [RouterNameEnum.Home]: 'Home',
    [RouterNameEnum.ExamList]: 'Exam List',
    [RouterNameEnum.ExamManage]: 'Exam Manage',
    [RouterNameEnum.ScoreManage]: 'Score Manage',
    [RouterNameEnum.QuestionManage]: 'Question Manage',
    [RouterNameEnum.QuestionMultipleChoice]: 'Choice Question',
    [RouterNameEnum.QuestionMultipleChoiceDetail]: 'Choice Question Detail',
    [RouterNameEnum.QuestionTrueFalse]: 'Judge Question',
    [RouterNameEnum.QuestionFillBlank]: 'Fill Blank Question',
    [RouterNameEnum.StudentManage]: 'Student Manage',
    [RouterNameEnum.StudentManageList]: 'Student List',
    [RouterNameEnum.StudentManageEnroll]: 'Registered Student'
  },
  profile: {
    personal: 'Profile',
    modifyPwd: 'Change Password',
    signOut: 'Sign out',
    basic: 'Basic Information',
    other: 'Other Information',
    account: 'Account',
    sex: 'Gender',
    tel: 'Telephone',
    email: 'Email',
    cardId: 'ID Card',
    adminId: 'Admin ID',
    adminName: 'Admin Name',
    studentId: 'Student ID',
    studentName: 'Student Name',
    clazz: 'Class',
    grade: 'Grade',
    institute: 'College',
    major: 'Major'
  },
  menuMode: {
    modeTip: 'Change Menu Mode',
    horizontalMode: 'Horizontal',
    verticalMode: 'Vertical'
  },
  exam: {
    delete: 'Delete Exam',
    code: 'Exam Code',
    copyCode: 'Click To Copy Exam Code',
    date: 'Date',
    duration: 'Duration',
    tips: 'Tip',
    deleteConfirm: 'Are you sure you want to delete this exam'
  },
  score: {
    empty: 'No Score Data',
    subject: 'Subject',
    score: 'Score',
    date: 'Date',
    searchByCode: 'Search Score By Code',
    deleteComfirm: 'Are you sure you want to delete this score'
  },
  question: {
    viewDetail: 'Click to view details',
    id: 'Question ID',
    name: 'Question',
    section: 'Section',
    answer: 'Answer',
    analysis: 'Analysis',
    noAnalysis: 'No Analysis',
    return: 'Back to Question Manage',
    level: 'Level',
    noSection: 'No Section Information'
  },
  level: {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    unknown: 'Unknown'
  }
};
