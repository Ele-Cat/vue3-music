<template>
  <div class="global-header">
    <div class="header-fixed">
      <div class="logo-box">
        <Logo class="logo" />
        <img src="https://visitor-badge.laobi.icu/badge?page_id=elecat.MyFreeMP3&right_color=%23e60026" alt="visitors">
      </div>
      <Navs class="navs" />
      <Settings />
    </div>
  </div>
</template>

<script setup>

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
    background-image: radial-gradient(transparent 1px, var(--ep-bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--ep-border-color);
    box-shadow: 0 5px 15px var(--ep-border-color, 0.2);

    .logo-box {
      display: flex;
      align-items: center;
      
      .logo {
        position: relative;
        margin: 16px 10px 0 0;
      }
    }

    .navs {
      flex: 1;
      padding: 0 20px;
    }
  }
}
</style>