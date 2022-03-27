import { ElNotification } from 'element-plus';

export const copyable = async (text: string) => {
  const clipboard = navigator.clipboard;
  if (clipboard) {
    try {
      await clipboard.writeText(text);
      ElNotification.success({
        title: '提示',
        message: '已成功复制到剪贴板'
      });
    } catch (err) {
      ElNotification.error({
        title: '提示',
        message: '复制失败，请稍后重试'
      });
    }
  } else {
    ElNotification.warning({
      title: '提示',
      message: '当前浏览器版本过低，请升级浏览器后重试'
    });
  }
};
