import { createApp } from "vue";
import App from "./App.vue";

// 引入UI、样式
import "normalize.css";
import "./assets/styles/index.scss";
import "element-plus/theme-chalk/src/message.scss";

// 引入全局状态管理
import pinia from "@/store/pinia";

// 注册全局组件、指令
import ui from "@/components/libs";

// 引入国际化
import VueI18n from './language';

const app = createApp(App);

app.use(pinia);
app.use(ui);
app.use(VueI18n);
app.mount("#app");
