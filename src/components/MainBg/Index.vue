<template>
  <div class="main-bg">
    <img
      class="cover"
      :src="useSystemStore.settings.wallpaper.url"
      alt=""
    />
    <img
      class="cover animate__fadeOut"
      :src="useSystemStore.settings.wallpaper.url"
      alt=""
    />
    <div
      class="mask"
      :style="{
        backgroundColor: `rgba(0, 0, 0, ${useSystemStore.settings.wallpaper.mask / 100})`,
        backdropFilter: `blur(${useSystemStore.settings.wallpaper.blur}px)`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import useStore from "@/store";
const { useSystemStore } = useStore();

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
    transition: all 0.3s;
  }
  .animate__fadeOut {
    width: 200vw;
    max-width: 200vw;
    height: 200vh;
    left: -50vw;
    top: -50vh;
    animation: fadeOut ease-in-out 1s both;
  }
  .mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
