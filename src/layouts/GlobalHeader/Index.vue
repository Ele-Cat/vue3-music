<template>
  <div class="global-header">
    <div class="header-fixed bf">
      <div class="logo-box">
        <Logo class="logo" />
        <img src="https://visitor-badge.laobi.icu/badge?page_id=elecat.MyFreeMP3&right_color=%23e60026" alt="visitors">
      </div>
      <Settings />
    </div>
  </div>
</template>

<script setup>
import Logo from "@/components/Logo/Index.vue"
import Settings from "@/components/Settings/Index.vue"
</script>

<style lang="scss">
.global-header {
  height: 50px;

  .header-fixed {
    position: fixed;
    top: 0;
    width: calc(100vw - 30px);
    height: 50px;
    padding: 0 15px;
    background-color: rgba(255, 255, 255, 0.8);
    // background-image: radial-gradient(transparent 1px, var(--ep-bg-color) 1px);
    // background-size: 4px 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border-bottom: 1px solid var(--ep-border-color);
    box-shadow: var(--ep-box-shadow-light);

    .logo-box {
      display: flex;
      align-items: center;
      
      .logo {
        position: relative;
        margin: 16px 10px 0 0;
      }
    }
  }
}
.dark {
  .global-header {
    .header-fixed {
      background-color: rgba(20, 20, 20, 0.8);
    }
  }
}
</style>