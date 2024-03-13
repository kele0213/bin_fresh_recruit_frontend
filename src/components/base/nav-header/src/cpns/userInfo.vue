<script setup lang="ts">
import {} from 'vue'
</script>

<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="avatar"></div>
        <div class="username">洪晓彬</div>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="User">重置密码</el-dropdown-item>
          <el-dropdown-item icon="CloseBold">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.userInfo {
  font-size: 16px;
}
.el-dropdown-link {
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: blue;
    margin-right: 10px;
  }
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.el-dropdown-link:focus {
  outline: none;
}
</style>
