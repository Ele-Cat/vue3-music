import { createApp } from "vue";
import App from "./App.vue";

// 引入UI、样式
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "normalize.css";
import "./assets/styles/index.scss";

import "element-plus/theme-chalk/src/message.scss";

import pinia from "@/store/pinia";

// 注册全局组件、指令
import ui from "@/components/libs";

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(ui);
app.use(pinia);
app.mount("#app");
