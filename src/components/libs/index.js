// 导入Common文件夹下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
const importFn = import.meta.glob('./*.vue');
//引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// console.dir(Object.keys(importFn)) // 文件名称数组

export default {
  install(app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 批量注册全局组件
    Object.keys(importFn).forEach((key) => {
      // 导入组件
      const componentName = key.replace(/^\.\/(.*)\.\w+$/, '$1');
      const component = importFn[key].default;
      // 注册组件
      app.component(componentName, component);
    });

    // 批量注册ElementPlus图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    // 定义指令
    defineDirective(app);
  },
};

import defaultImg from "@/assets/images/website.svg";
// 指令
const defineDirective = (app) => {
  // 图片懒加载指令
  app.directive("lazyload", {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            observer.unobserve(el);
            el.onerror = () => {
              el.src = defaultImg;
            };
            el.src = binding.value;
          }
        },
        {
          threshold: 0.01,
        }
      );
      observer.observe(el);
    },
  });
};
