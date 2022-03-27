import { ElMessage } from 'element-plus';

export const copyable = async (text: string) => {
  const clipboard = navigator.clipboard;
  if (clipboard) {
    try {
      await clipboard.writeText(text);
      ElMessage.success({
        message: '已成功复制到剪贴板'
      });
    } catch (err) {
      ElMessage.error({
        message: '复制失败，请稍后重试'
      });
    }
  } else {
    ElMessage.warning({
      message: '当前浏览器版本过低，请升级浏览器后重试'
    });
  }
};
