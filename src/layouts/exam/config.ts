import { Step, PopoverOptions } from 'driver.js';

const baseDriverStepConfig: Omit<PopoverOptions, 'description'> = {
  title: '答题引导',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  closeBtnText: '关闭',
  doneBtnText: '完成'
};

export const driverStepConfig: Step[] = [
  {
    element: '#question-select',
    popover: {
      ...baseDriverStepConfig,
      description: '在这里可以切换题目，可以通过左右方向键控制题目',
      position: 'right-center'
    }
  },
  {
    element: '#answer-sheet',
    popover: {
      ...baseDriverStepConfig,
      description: '这里是答题区域',
      position: 'mid-center'
    }
  }
];
