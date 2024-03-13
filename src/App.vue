<script setup lang="ts">
import { RouterView } from 'vue-router'
import Bottom from '@/components/base/bottom/Bottom.vue'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
  <div class="bottom">
    <Bottom></Bottom>
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
