<script setup lang="ts">
import NavMenu from '@/components/base/nav-menu'
import NavHeader from '@/components/base/nav-header/src/nav-header.vue'
import { ref } from 'vue'
const iscollapse = ref<boolean>(false)
const changeCollapse = (isFold: boolean) => {
  iscollapse.value = isFold
}
</script>

<template>
  <div class="main">
    <el-container>
      <el-aside :width="iscollapse ? '60px' : '250px'"
        ><NavMenu :isCollapse="iscollapse"
      /></el-aside>
      <el-container>
        <el-header>
          <NavHeader @changeCollapse="changeCollapse" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #00a6a7;
  transition: width 0.3s linear;
  overflow-x: hidden;
  overflow-y: hidden;
}
.el-header {
  background-color: #fff;
}
.el-main {
  background-color: #edeff2;
}
</style>
