<template>
  <div>
    {{ $t("header.welcome") }}

    <el-select v-model="lang" placeholder="请选择" @change="changeLang">
      <el-option label="简体中文" value="zh_CN" />
      <el-option label="English" value="en" />
    </el-select>

    <el-switch v-model="isDark" inline-prompt>123</el-switch>
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

<style></style>
