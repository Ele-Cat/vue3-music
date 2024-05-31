import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite"; // 自动导入vue中hook reactive ref等
import Components from "unplugin-vue-components/vite"; //自动导入ui-组件 比如说ant-design-vue  element-plus等
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; // 对应组件库引入 ，AntDesignVueResolver

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_BASE_PATH } = loadEnv(mode, process.cwd());
  return {
    base: VITE_BASE_PATH,
    server: {
      host: "localhost",
      open: true,
      port: 9999,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 自动导入定制化样式进行文件覆盖
          additionalData: `@use "@/assets/styles/theme/index.scss" as *;`,
        },
      },
    },
    resolve: {
      // ↓路径别名，主要是这部分
      alias: {
        "@": resolve(__dirname, "./src"),
        'vue': 'vue/dist/vue.esm-bundler.js'
      },
    },
    plugins: [
      vue(),
      //element按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // 安装两行后你会发现在组件中不用再导入ref，reactive等
        imports: ["vue", "vue-router"],
        dts: "src/auto-import.d.ts",
      }),
      Components({
        directoryAsNamespace: true,
        resolvers: [
          // 配置elementPlus采用sass样式配置系统
          ElementPlusResolver({ importStyle: "sass" }),
        ],
      }),
    ],
    build: {
      chunkSizeWarningLimit: 50000, // 设置你希望的块大小警告限制，单位是字节
    },
  };
});
