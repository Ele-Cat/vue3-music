<template>
  <div>
    <el-text size="large" tag="p">{{ $t("settings.general") }}</el-text>

    <el-form :model="form" label-width="100px" style="max-width: 600px">
      <el-form-item :label="$t('settings.theme') + ' :'">
        <el-tooltip
          :content="isDark ? $t('settings.switchToLightMode') : $t('settings.switchToDarkMode')"
          placement="top-start"
        >
          <el-switch v-model="isDark" style="margin-right:6px;"></el-switch>
        </el-tooltip>
        {{ isDark ? $t('settings.dark') : $t('settings.light') }}
      </el-form-item>
      <el-form-item :label="$t('settings.language') + ' :'">
        <el-select v-model="lang" placeholder="请选择" @change="changeLang" style="max-width: 200px;">
          <el-option label="简体中文" value="zh_CN" />
          <el-option label="English" value="en" />
        </el-select>
      </el-form-item>
    </el-form>

    <el-divider />

    <el-text size="large" tag="p">{{ $t("settings.shortCuts") }}</el-text>

  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import useStore from "@/store";
const { useSystemStore } = useStore();
const { proxy } = getCurrentInstance();
import { isDark } from "@/hooks/theme";

const lang = ref(useSystemStore.settings.lang || "zh_CN");

const changeLang = (e) => {
  proxy.$i18n.locale = e;
  useSystemStore.settings.lang = e;
};
</script>

<style lang="scss" scoped>
.ep-text {
  margin-bottom: 20px;
}
</style>
