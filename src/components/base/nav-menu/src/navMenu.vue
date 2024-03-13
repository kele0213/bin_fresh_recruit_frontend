<script setup lang="ts">
const props = defineProps(['isCollapse'])
</script>

<template>
  <div class="navMenu">
    <div class="header">
      <img class="logo" src="@/assets/image/logo.jpg" />
      <div class="title" :class="{ hidden: props.isCollapse }">校 招 通</div>
    </div>
    <div class="menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#00a6a7"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        :collapse="props.isCollapse"
        :collapse-transition="true"
      >
        <el-menu-item index="1">
          <el-icon><setting /></el-icon>
          <span>应届生管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><setting /></el-icon>
          <span>发布咨询</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><setting /></el-icon>
          <span>啥也没有</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.navMenu {
  color: #fff;
}
.header {
  height: 60px;
  padding-left: 13px;
  display: flex;
  align-items: center;
  .logo {
    height: 40px;
  }
  .title {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
  }
}
.el-menu {
  border-right: 0;
  caret-color: rgba(0, 0, 0, 0);
}
.el-menu-item {
  font-size: 18px;
  height: 70px;
}
.el-menu-item.is-active {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
</style>
