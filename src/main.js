import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import "normalize.css";
// import "element-plus/dist/index.css";
import "./assets/styles/index.scss";

import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
