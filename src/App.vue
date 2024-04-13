<script setup lang="ts">
import {RouterView} from 'vue-router'
import Bottom from '@/components/base/bottom/Bottom.vue'
</script>

<template>
  <div class="app">
    <div class="view">
      <RouterView/>
    </div>
    <div class="bottom">
      <Bottom></Bottom>
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-popper {
  max-width: 200px !important;
}

.app {
  display: flex;
  flex-direction: column;
  //min-height: 100%;
  height: 100%;

  .view {
    flex: 1;
  }
}

.bottom {
  //height: 3%;
  width: 100%;
  min-height: 35px;
  //position: relative;
  bottom: 0;
}
</style>
