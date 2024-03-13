import type { RouteRecordRaw } from 'vue-router'

let firstRoute: any = null

export { firstRoute }

export async function getRoleRoutes(role: 'school' | 'company') {
  const routes: RouteRecordRaw[] = []
  let modules = null
  if (role === 'school') {
    modules = import.meta.glob('../router/main/school/**/*.ts')
  } else if (role === 'company') {
    modules = import.meta.glob('../router/main/company/**/*.ts')
  }
  // console.log(modules)
  for (const path in modules) {
    const route = await (modules[path] as () => Promise<{ default: RouteRecordRaw }>)()
    routes.push(route.default)
  }
  return routes
}

export function getMenu(role: 'school' | 'company') {
  const menu = []
  if (role === 'school') {
    menu.push({ label: '应届生管理', url: '/main/school/fresh', icon: 'Management' })
    menu.push({ label: '发布资讯', url: '/main/school/message', icon: 'Message' })
  } else if (role === 'company') {
    menu.push({ label: '岗位管理', url: '/main/company/job', icon: 'Management' })
    menu.push({ label: '简历筛选', url: '/main/company/filrate', icon: 'Filter' })
    menu.push({ label: '在线咨询', url: '/main/company/consult', icon: 'ChatDotRound' })
    menu.push({ label: '企业信息', url: '/main/company/info', icon: 'InfoFilled' })
  }
  firstRoute = menu[0].url
  return menu
}
