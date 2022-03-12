module.exports = {
  types: [
    { value: '特性', name: '特性:    一个新的特性' },
    { value: '修复', name: '修复:    修复一个Bug' },
    { value: '文档', name: '文档:    变更的只有文档' },
    { value: '格式', name: '格式:    空格, 分号等格式修复' },
    { value: '重构', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '性能', name: '性能:    提升性能' },
    { value: '测试', name: '测试:    添加一个测试' },
    { value: '工具', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '回滚', name: '回滚:    代码回退' }
  ],
  typePrefix: '[',
  typeSuffix: ']',
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),
  messages: {
    type: '为确保提交遵循规范!\n选择你要提交的类型: ',
    scope: '选择一个 scope (可选): ',
    customScope: '请输入自定义的 scope: ',
    subject: '填写简短的变更描述: \n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行: \n',
    breaking: '列举非兼容性重大的变更（可选）: \n',
    footer: '关联关闭的 issue(可选)，例如: #31, #34:\n',
    confirmCommit: '确认提交？'
  },
  allowBreakingChanges: ['特性', '修复'],
  allowCustomScopes: true,
  subjectLimit: 100,
  breaklineChar: '|'
};
