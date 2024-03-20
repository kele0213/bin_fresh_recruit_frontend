import { useAuthStore } from '@/stores/user/auth'

export default async function setupMenu() {
  const auth = useAuthStore()
  const { role, registerRouter } = auth
  if (role == 'school' || role == 'company') {
    await registerRouter(role, 'main')
  } else if (role == 'fresh') {
    await registerRouter(role, 'fresh')
  }
}
