export const enum MenuItemEnum {
  Home = 'space-home',
  Exam = 'space-exam',
  Test = 'space-list',
  Manage = 'space-management'
}

export const MenuNavList = new Map([
  [MenuItemEnum.Home, '主页'],
  [MenuItemEnum.Exam, '我的考试'],
  [MenuItemEnum.Test, '试卷列表'],
  [MenuItemEnum.Manage, '考试管理']
]);
