import localCache from '@/utils/localCache'
import AxiosWrapper from './request/AxiosWrapper'

const httpService = new AxiosWrapper({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: import.meta.env.VITE_TIME_OUT,
  interceptors: {
    requestSuccess(config) {
      // 配置token
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default httpService
