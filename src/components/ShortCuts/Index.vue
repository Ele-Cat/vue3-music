<template>
  <el-form label-width="140px">
    <el-form-item :label="$t('shortCuts.playOrPause') + ' :'">
      <span>Space</span>
    </el-form-item>
    <el-form-item :label="$t('shortCuts.previous') + ' :'">
      <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">←</span>
    </el-form-item>
    <el-form-item :label="$t('shortCuts.next') + ' :'">
      <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">→</span>
    </el-form-item>
    <el-form-item :label="$t('shortCuts.increaseVolume') + ' :'">
      <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">↑</span>
    </el-form-item>
    <el-form-item :label="$t('shortCuts.decreaseVolume') + ' :'">
      <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">↓</span>
    </el-form-item>
    <el-form-item :label="$t('shortCuts.openSearch') + ' :'">
      <span>{{ useSystemStore.ctrlOrCommand() }}</span> + <span class="key">M</span>
    </el-form-item>
    <el-form-item :label="$t('shortCuts.turnOffLyrics') + ' :'"> <span>Esc</span> </el-form-item>
  </el-form>
</template>

<script setup>
import useStore from "@/store";
const { useSystemStore } = useStore();
</script>

<style lang="scss" scoped>
.ep-form-item {
  span {
    display: inline-block;
    font-weight: 700;
    border: 1px solid var(--ep-text-color-regular);
    padding: 0 8px;
    height: 24px;
    line-height: 22px;
    border-radius: 3px;
    box-shadow: .5px 2px var(--ep-text-color-regular);

    &:nth-of-type(1) {
      margin-right: 6px;
    }

    &:nth-of-type(2) {
      margin-left: 6px;
    }
  }
}
</style>