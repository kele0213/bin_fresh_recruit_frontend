import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login, register, getCode as code, changPwd, outLogin } from '@/service/user/auth'
import {
  type Iregister,
  type Ilogin,
  type Icode,
  type Ichange,
  type IoutLoginRequest
} from '@/service/user/type'
import { getMenu, getRoleRoutes } from '@/utils/mapMenus'
import router from '@/router'
import localCache from '@/utils/localCache'
import { showMsg } from '@/utils/message'
import type { Iuser } from '@/service/user/type'
import type { roleType } from '@/utils/mapMenus'

export const useAuthStore = defineStore(
  'auth',
  () => {
    // 普通的state
    const menus = ref<Array<any>>([])
    const role = ref<roleType>()

    // 注册路由
    const registerRouter = async (role: roleType, routeName: 'main' | 'fresh') => {
      const routes = await getRoleRoutes(role)
      for (const route of routes) {
        // console.log(route, '111')

        router.addRoute(routeName, route)
      }
      // 2. 获取菜单信息
      menus.value = getMenu(role)
    }

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
    const userInfo = ref<Iuser>()
    const roleData = ref<number>(-1)
    const userLogin = async (data: Ilogin) => {
      const res = await login(data)
      let tips = ''
      // 处理登录逻辑
      if (res.data) {
        // 登录成功逻辑
        tips = '登录成功'
        roleData.value = data.role
        const { id, phone, a_avatar, token, user_name } = res.data
        // 保存用户信息
        userInfo.value = { id, phone, a_avatar, user_name }
        // 保存token
        localCache.setCache('token', token)

        if (data.role === 0) {
          // 学校管理员
          // 1. 注册路由
          // 2. 加载菜单
          role.value = 'school'
          await registerRouter(role.value, 'main')

          // 3. 跳转页面
          router.push('/main')
        } else if (data.role === 1) {
          // 学生登录
          role.value = 'fresh'
          await registerRouter(role.value, 'fresh')
          // 3. 跳转页面
          router.push('/fresh')
        } else if (data.role === 2) {
          // 企业登录
          // 1. 注册路由
          // 2. 加载菜单
          role.value = 'company'
          await registerRouter(role.value, 'main')
          // 3. 跳转页面
          router.push('/main')
        }
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

    // 退出登录
    const outLoginReq = async (data: IoutLoginRequest) => {
      const res = await outLogin(data)
      if (res.code === 0) {
        router.push('/login')
        //    清理storage
        localCache.clearCache()
        userInfo.value = {}
      } else {
        showMsg('退出登录失败', 'error')
      }
    }

    // 修改头像链接
    const changeAvatarUrl = async (url: string) => {
      userInfo.value!['a_avatar'] = url
    }

    return {
      // state
      userInfo,
      menus, //菜单
      role,
      roleData,
      // action
      userRegister,
      userLogin,
      getCode,
      userChangePwd,
      registerRouter,
      outLoginReq,
      changeAvatarUrl
    }
  },
  {
    persist: true
  }
)
