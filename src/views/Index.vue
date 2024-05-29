<template>
  <div>
    <component :is="activePage" />
    {{ activeNav }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useStore from "@/store";
const { useSystemStore } = useStore();

const { activeNav } = storeToRefs(useSystemStore)
import Home from './Home/Index.vue';
import Search from './Search/Index.vue';

const pages = reactive({
  home: Home,
  search: Search,
})

useSystemStore.$subscribe((mutation, state) => {
  activeNav.value = state.activeNav;
});

const activePage = computed(() => {
  return pages[activeNav.value];
})
</script>

<style></style>