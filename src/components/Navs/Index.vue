<template>
  <div class="navs">
    <p v-for="nav in navs" class="nav" :key="nav.value" :class="{ active: nav.value === activeNav }"
      @click="handleNavChange(nav.value)">{{ nav.label }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import i18n from "@/language";
import useStore from "@/store";
const { useSystemStore } = useStore();

const { activeNav } = storeToRefs(useSystemStore)

const navs = reactive([
  {
    label: computed(() => i18n.global.t("navs.home")),
    value: "home",
  },
  {
    label: computed(() => i18n.global.t("navs.search")),
    value: "search",
  }
])

const handleNavChange = e => {
  useSystemStore.changeNav(e);
}
</script>

<style lang="scss" scoped>
.navs {
  display: flex;
  align-items: center;

  .nav {
    cursor: pointer;
    margin: 0 6px 0 10px;
    font-size: 14px;
    position: relative;
    line-height: 50px;
    transition: all .3s;
    padding: 0 10px;

    &.active {
      // font-weight: bold;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        height: 2px;
        background-color: var(--ep-color-primary);
      }
    }
    &:hover {
      color: var(--ep-color-primary);
    }
  }
}
</style>