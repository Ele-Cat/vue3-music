<template>
  <el-config-provider namespace="ep">
    <GlobalHeader />

    <Pages />
  </el-config-provider>
</template>

<script setup>
import useStore from "@/store";
import { version } from "@/utils/utils";
const { useSystemStore } = useStore();
import { listenGlobalKeyDown } from "@/utils/shortcutKey";
import GlobalHeader from '@/layouts/GlobalHeader/Index.vue';
import Pages from '@/views/Index.vue';

onMounted(() => {
  listenGlobalKeyDown();
  useSystemStore.getPlatform();

  if (useSystemStore.version != version) {
    notify({
      type: "warning",
      title: "提示",
      content: "系统组件更新啦，快去组件商城看看吧~",
      duration: 0,
    })
    useSystemStore.version = version;
  }
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

<style scoped></style>
