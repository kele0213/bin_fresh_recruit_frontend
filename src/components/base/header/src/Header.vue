<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/user/auth'
import { storeToRefs } from 'pinia'
import router from '@/router'

const activeIndex = ref<number>(0)
const handleSelect = () => {}

const store = useAuthStore()
const { outLoginReq } = store
const { roleData, userInfo } = storeToRefs(store)

const forgetPassword = () => {
  // 忘记密码
  router.push('/login')
}
// 退出登录
const out = async () => {
  await outLoginReq({
    role: roleData.value
  })
}
// 回到主页
const toHome = () => {
  router.push('/fresh/main')
}
</script>

<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu no-caret"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      :router="true"
    >
      <div class="logo" @click="toHome">
        <img src="@/assets/image/logo.png" />
        <div class="name">校招通</div>
      </div>
      <el-menu-item index="/fresh/search">岗位筛选</el-menu-item>
      <el-menu-item index="/fresh/jobMessage">就业资讯</el-menu-item>
      <el-menu-item index="/fresh/chat">在线沟通</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="/login">企业登录</el-menu-item>
      <el-sub-menu>
        <template #title
          ><span class="span">{{ userInfo?.user_name ?? '请完善用户名' }}</span></template
        >
        <el-menu-item index="/fresh/freshInfoResult">个人中心</el-menu-item>
        <el-menu-item @click="forgetPassword">重置密码</el-menu-item>
        <el-menu-item @click="out">退出登录</el-menu-item>
      </el-sub-menu>
      <div class="imgContain">
        <img class="avatar" :src="userInfo?.a_avatar" alt="" />
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.el-menu {
  display: flex;
  // justify-content: center;
  align-items: center;
  background-color: rgb(0, 166, 167);
  color: #fff;
}

.logo {
  cursor: pointer;
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

.span,
:deep(
    .el-menu--horizontal > .el-menu-item,
    .el-menu--horizontal > .el-sub-menu .el-sub-menu__title
  ) {
  font-size: 18px;
}

:deep(
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover
  ) {
  background-color: rgb(0, 133, 134);
  color: #fff;
}

:deep(.el-menu--horizontal > .el-menu-item.is-active) {
  color: #fff !important;
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

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
