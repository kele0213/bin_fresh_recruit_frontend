import { useAuthStore } from '@/stores/user/auth'

export default async function setupMenu() {
  const auth = useAuthStore()
  const { role, registerRouter } = auth
  if (role) {
    await registerRouter(role)
  }
}
