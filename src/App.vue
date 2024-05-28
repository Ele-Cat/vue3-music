<template>
  <el-config-provider namespace="ep">
    <GlobalHeader />
    <el-switch v-model="isDark" inline-prompt>123</el-switch>

    <div>
      <p v-for="n in 200">{{ n }}大撒大声地大阿萨德阿萨德阿萨德按说大三打撒大三打撒按说萨达仨打撒大三仨打撒萨达大萨达沙发上发生过撒</p>
    </div>
    
  </el-config-provider>
</template>

<script setup>
// import { ref } from 'vue';
import { isDark } from '@/hooks/theme';
import GlobalHeader from '@/components/common/GlobalHeader/Index.vue';

const show = ref(false)
</script>

<style scoped></style>
