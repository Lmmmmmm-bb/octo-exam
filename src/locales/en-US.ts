import { RouterNameEnum } from '@/router/type';

export const enUS = {
  common: {
    locale: 'Language',
    confirm: 'Confirm'
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
  }
};
