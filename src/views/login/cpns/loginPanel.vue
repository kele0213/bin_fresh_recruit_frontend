<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { useAuthStore } from '@/stores/user/auth'
const phone = ref<string>('')
const password = ref<string>('')
const role = ref<number>(1)
const tips = ref<string>('')
const store = useAuthStore()
const { userLogin } = store
// 用户登录
const login = async () => {
  const data = {
    phone: phone.value,
    password: password.value,
    role: role.value
  }
  const res = await userLogin(data)
  tips.value = res
}
// emit
let emit = defineEmits(['findPwd'])
const findEmit = () => {
  emit('findPwd')
}
</script>

<template>
  <div class="loginPanel">
    <el-input
      v-model="phone"
      style="width: 450px; height: 50px; margin-bottom: 30px"
      placeholder="请输入手机号或账号"
    />
    <el-input
      v-model="password"
      style="width: 450px; height: 50px; margin-bottom: 20px"
      placeholder="请输入密码"
      type="password"
    />
    <div class="tips">
      <el-text class="mx-1" size="large" type="warning">{{ tips }}</el-text>
      <el-link :underline="false" type="warning" @click="findEmit">忘记密码？</el-link>
    </div>
    <div class="groups">
      <el-radio-group v-model="role">
        <el-radio :value="1">应届生</el-radio>
        <el-radio :value="2">企业招聘方</el-radio>
        <el-radio :value="0">学生就业中心</el-radio>
      </el-radio-group>
    </div>
    <div class="btn">
      <el-button type="primary" size="large" auto-insert-space @click="login">确认登录</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginPanel {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tips {
    display: flex;
    justify-content: space-between;
    width: 75%;
    .el-link {
      font-size: 16px;
    }
  }
  .groups {
    margin: 20px 0;
    width: 75%;
    .el-radio-group {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  .btn {
    width: 75%;
    .el-button {
      width: 100%;
      height: 50px;
      background-color: rgb(0, 166, 167);
    }
  }
}
</style>
