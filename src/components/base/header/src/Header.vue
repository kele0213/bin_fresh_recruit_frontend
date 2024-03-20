<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref<number>(0)
const handleSelect = () => {}
</script>

<template>
  <div class="">
    <el-menu
      :default-active="activeIndex"
      class="el-menu no-caret"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      :router="true"
    >
      <div class="logo">
        <img src="@/assets/image/logo.jpg" />
        <div class="name">校招通</div>
      </div>
      <el-menu-item index="/fresh/search">岗位筛选</el-menu-item>
      <el-menu-item index="/fresh/jobMessage">就业咨询</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="/login">企业登录</el-menu-item>
      <el-sub-menu>
        <template #title>THIS IS A USER NAME</template>
        <el-menu-item index="/fresh/freshInfoResult">个人中心</el-menu-item>
        <el-menu-item>重置密码</el-menu-item>
        <el-menu-item>退出登录</el-menu-item>
      </el-sub-menu>
      <div class="imgContain">
        <img class="img" />
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.el-menu {
  display: flex;
  // justify-content: center;
  align-items: center;
  background-color: rgb(0, 166, 167);
  color: #fff;
}
.logo {
  height: 68px;
  width: 120px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  .name {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
  }
}
img {
  height: 50px;
}
:deep(.el-menu--horizontal > .el-menu-item),
:deep(.el-menu--horizontal > .el-sub-menu .el-sub-menu__title) {
  color: #fff;
}
:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):hover),
:deep(.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover) {
  background-color: rgb(0, 133, 134);
  color: #fff;
}
.flex-grow {
  flex-grow: 1;
}
.imgContain {
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #00000040;
  color: #7e7e7e;
  overflow: hidden;
}
.img {
  width: auto;
  height: 100%;
}
</style>
