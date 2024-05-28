<template>
  <el-icon :size="20">
    <Setting class="icon" @click="settingsVisible = true" />
  </el-icon>
  <el-drawer v-model="settingsVisible" title="设置" direction="rtl" append-to-body lock-scroll class="settings-drawer">
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script setup>

const settingsVisible = ref(false)
</script>

<style lang="scss">
.icon {
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: var(--ep-color-primary);
  }
}

.settings-drawer {
  width: 40% !important;
}

@media screen and (max-width: 768px) {
  .settings-drawer {
    width: 100% !important;
  }
}
</style>