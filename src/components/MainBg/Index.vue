<template>
  <div class="main-bg">
    <div
      class="cover"
      :style="{
        background: `url(${useSystemStore.settings.wallpaper.url}) no-repeat 100% center /cover`,
        filter: `blur(${useSystemStore.settings.wallpaper.blur}px)`,
      }"
    ></div>
    <div
      class="mask"
      :style="{
        backgroundColor: `${isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)'}`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import useStore from "@/store";
const { useSystemStore } = useStore();
import { isDark } from "@/hooks/theme";

const url = ref(useSystemStore.settings.wallpaper.url);
watch(
  () => useSystemStore.settings.wallpaper,
  (newVal) => {
    url.value = newVal.url;
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="scss" scoped>
.main-bg {
  position: relative;
  z-index: -10;
  .cover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transition: all 0.8s;
  }
  .mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
}
</style>
