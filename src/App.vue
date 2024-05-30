<template>
  <el-config-provider namespace="ep">
    <MainBg />
    <GlobalHeader />
    <MainBox class="main-box" />
  </el-config-provider>
</template>

<script setup>
import useStore from "@/store";
const { useSystemStore } = useStore();
import { listenGlobalKeyDown } from "@/utils/shortcutKey";

const MainBg = defineAsyncComponent(() => import('@/components/MainBg/Index.vue'));
const GlobalHeader = defineAsyncComponent(() => import('@/layouts/GlobalHeader/Index.vue'));
const MainBox = defineAsyncComponent(() => import('@/views/Index.vue'));

onMounted(() => {
  listenGlobalKeyDown();
  useSystemStore.getPlatform();
});

document.addEventListener("visibilitychange", handleVisibilityChange, false);
function handleVisibilityChange() {
  if (document.hidden) {
    document.title = "ε=(´ο｀*)))坏掉了";
  } else {
    document.title = "MyFreeMP3";
  }
  document.title = useSystemStore.settings.title || document.title;
}

watch(
  () => useSystemStore.settings.title,
  (newVal) => {
    document.title = newVal || "MyFreeMP3";
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
@import url(//at.alicdn.com/t/c/font_4284553_hsd7d71rdmr.css);
#app {
  height: 100vh;
  overflow: hidden;
  // display: flex;
  // flex-direction: column;
  // background: url(https://bing.img.run/rand.php) no-repeat 100% center / cover;
  .main-box {
    flex: 1;
  }
}
</style>
