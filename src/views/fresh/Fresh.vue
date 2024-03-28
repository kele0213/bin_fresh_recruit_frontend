<script setup lang="ts">
import {} from 'vue'
import Header from '@/components/base/header'
</script>

<template>
  <div class="Fresh">
    <div class="header">
      <Header />
    </div>
    <div class="zhanwei"></div>
    <div class="container">
      <RouterView />
    </div>
    <el-backtop :right="80" :bottom="100" :visibility-height="150" />
  </div>
</template>

<style lang="scss" scoped>
.Fresh {
  height: 100%;
  position: relative;
}
.zhanwei {
  height: 60px;
}
.header {
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
.container {
  height: calc(100% - 60px);
  background-color: rgb(239, 253, 255);
  overflow: scroll;
  border-bottom: 1px solid #b5b5b5;
}
</style>
