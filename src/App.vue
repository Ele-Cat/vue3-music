<template>
  <el-config-provider namespace="ep">
    <GlobalHeader />

    <Pages />
  </el-config-provider>
</template>

<script setup>
import GlobalHeader from '@/components/common/GlobalHeader/Index.vue';
import Pages from '@/components/pages/Index.vue';

</script>

<style scoped></style>
