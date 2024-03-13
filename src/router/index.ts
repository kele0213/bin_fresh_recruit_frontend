import { firstRoute } from '@/utils/mapMenus'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/Main.vue')
      // children: [fresh, message]
    },
    {
      path: '/:pathmatch(.*)',
      name: 'not-found',
      component: () => import('@/views/notFound/not-found.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (to.path === '/main') {
    return firstRoute
  }
})

export default router
