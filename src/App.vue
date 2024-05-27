<template>
  <el-config-provider namespace="ep">
    <el-switch v-model="isDark" inline-prompt>123</el-switch>
    <el-button type="primary" @click="show = true">打开</el-button>
    <p>你好</p>
    <a href="">ddd</a>

    <el-card title="卡片">
      sadsa
    </el-card>

    <IDialog :visible="show" title="123">
      123
    </IDialog>
  </el-config-provider>
</template>

<script setup>
// import { ref } from 'vue';
import { isDark } from '@/hooks/theme';

const show = ref(false)
</script>

<style scoped></style>
