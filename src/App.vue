<script setup lang="ts">
import { RouterView } from 'vue-router'
import Buttom from '@/components/base/bottom/bottom.vue'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
  <div class="bottom">
    <Buttom></Buttom>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 95%;
}
.bottom {
  height: 5%;
  width: 100%;
}
</style>
