import { RouterNameEnum } from '@/router/type';

export const zhCN = {
  common: {
    locale: '切换语言',
    confirm: '确认',
    cancel: '取消',
    tip: '提示',
    warn: '警告',
    notice: '注意',
    minutes: '分钟',
    search: '搜索',
    refresh: '刷新',
    delete: '删除',
    operate: '操作'
  },
  role: {
    admin: '管理员',
    student: '学生'
  },
  login: {
    login: '登陆',
    remember: '记住密码',
    account: '用户名',
    password: '密码'
  },
  menu: {
    [RouterNameEnum.Home]: '主页',
    [RouterNameEnum.ExamList]: '我的考试',
    [RouterNameEnum.ExamManage]: '考试管理',
    [RouterNameEnum.ScoreManage]: '成绩管理',
    [RouterNameEnum.QuestionManage]: '题库管理',
    [RouterNameEnum.QuestionMultipleChoice]: '选择题题库',
    [RouterNameEnum.QuestionTrueFalse]: '判断题题库',
    [RouterNameEnum.QuestionFillBlank]: '填空题题库',
    [RouterNameEnum.StudentManage]: '学生管理',
    [RouterNameEnum.StudentManageList]: '学生列表',
    [RouterNameEnum.StudentManageEnroll]: '录入学生信息'
  },
  profile: {
    personal: '个人信息',
    modifyPwd: '修改密码',
    signOut: '退出登陆',
    basic: '基本信息',
    other: '其他信息',
    account: '标识',
    sex: '性别',
    tel: '手机',
    email: '邮箱',
    cardId: '身份证号',
    adminId: '管理员编号',
    adminName: '管理员名称',
    studentId: '学号',
    studentName: '姓名',
    clazz: '班级',
    grade: '年级',
    institute: '学院',
    major: '专业'
  },
  menuMode: {
    modeTip: '切换菜单展示模式',
    horizontalMode: '顶部菜单',
    verticalMode: '侧边菜单'
  },
  exam: {
    delete: '删除考试',
    code: '考试码',
    copyCode: '点击复制考试码',
    date: '考试时间',
    duration: '考试时长',
    tips: '备注',
    deleteConfirm: '确认删除该考试吗'
  },
  score: {
    empty: '暂无成绩数据',
    subject: '科目',
    score: '分数',
    date: '提交时间',
    searchByCode: '通过考试码查询',
    deleteComfirm: '确定要删除成绩吗'
  }
};
