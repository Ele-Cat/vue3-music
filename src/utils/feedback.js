import { ElMessage, ElNotification } from 'element-plus'

// 在浏览器中上部的提示
export const toast = ({
  type = "success",
  message = "提示语",
  duration = 3,
}) => {
  ElMessage({
    type,
    message,
    duration,
  })
};

// 在浏览器右上角的提示
export const notify = ({
  type = "success",
  title = "提示",
  message = "内容",
  duration = 3,
}) => {
  ElNotification({
    type,
    title,
    message,
    duration,
  })
};
