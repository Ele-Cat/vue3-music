<template>
  <el-config-provider namespace="ep">
    <el-switch v-model="isDark" inline-prompt>123</el-switch>
    <el-button type="primary">123</el-button>
    <p>你好</p>
    <a href="">ddd</a>

    <el-card title="卡片">
      sadsa
    </el-card>
  </el-config-provider>
</template>

<script setup>
// import { ref } from 'vue';
import { isDark } from '@/hooks/dark';

</script>

<style scoped></style>
