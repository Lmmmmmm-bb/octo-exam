export enum UserRoleEnum {
  Admin = '0',
  Teacher = '1',
  Student = '2'
}

interface IBaseUserConfig {
  cardId: string;
  email: string;
  pwd: string;
  role: UserRoleEnum;
  sex: string;
  tel: string;
}

export interface IStudentConfig extends IBaseUserConfig {
  studentId: number;
  studentName: string;
  clazz: string;
  grade: string;
  institute: string;
  major: string;
}

export interface IAdminConfig extends IBaseUserConfig {
  adminId: number;
  adminName: string;
}
