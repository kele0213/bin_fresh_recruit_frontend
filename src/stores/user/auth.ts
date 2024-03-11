import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login, register, getCode as code, changPwd } from '@/service/user/auth'
import { type Iregister, type Ilogin, type Icode, type Ichange } from '@/service/user/type'

export const useAuthStore = defineStore(
  'auth',
  () => {
    // 注册账号
    const userRegister = async function (data: Iregister) {
      const res = await register(data)
      // 处理注册逻辑
      let tips = ''
      if (res.data) {
        tips = '注册成功'
      } else {
        tips = res.msg
      }
      return tips
    }

    // 登录账号
    const userInfo = ref({})
    const userLogin = async (data: Ilogin) => {
      const res = await login(data)
      let tips = ''
      // 处理登录逻辑
      if (res.data) {
        // 登录成功逻辑
        tips = '登录成功'
        userInfo.value = res.data
      } else {
        tips = res.msg
      }
      return tips
    }

    // 获取验证码
    const getCode = async (data: Icode) => {
      try {
        const res = await code(data)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }

    // 修改密码
    const userChangePwd = async (data: Ichange) => {
      const res = await changPwd(data)
      let tips = ''
      if (res.data) {
        // 处理修改密码逻辑
        tips = '修改成功'
      } else {
        tips = res.msg
      }
      return tips
    }
    return {
      // state
      userInfo,
      // action
      userRegister,
      userLogin,
      getCode,
      userChangePwd
    }
  },
  {
    persist: true
  }
)
