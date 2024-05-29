import { createI18n } from "vue-i18n"; // 引入vue-i18n组件
import zhCN from "./lang/zh_CN";
import zhTW from "./lang/zh_TW";
import enUS from "./lang/en_US";
const lang = JSON.parse(localStorage.getItem("musicSystem"))?.settings?.lang || "zh_CN";

const i18n = createI18n({
  locale: lang, // 默认显示语音
  messages: {
    "zh_CN": zhCN, // 简体中文
    "zh_TW": zhTW, // 繁体中文
    "en": enUS, // 英文
  },
});

export default i18n;
