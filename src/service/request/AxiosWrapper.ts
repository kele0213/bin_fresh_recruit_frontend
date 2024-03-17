import axios, { type AxiosInstance } from 'axios'
import type { Iconfig, Iinterceptors } from './type'
import { ElLoading } from 'element-plus'
import router from '@/router'

const DEFAULT_LOADING = true

class AxiosWrapper {
  instance: AxiosInstance
  interceptors?: Iinterceptors
  loading: any
  showLoading: boolean
  constructor(config: Iconfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 单个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestSuccess,
      this.interceptors?.requestError
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseSuccess,
      this.interceptors?.responseError
    )
    // 所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        this.loading?.close()
        if (data.code === 40100) {
          router.push('/login')
        }
        return data
      },
      (err) => {
        this.loading?.close()

        return err
      }
    )
  }

  request<T>(config: Iconfig<T>) {
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          this.showLoading = DEFAULT_LOADING
        })
    })
  }

  get<T>(config: Iconfig<T>) {
    return this.request<T>({ ...config, method: 'get' })
  }
  post<T>(config: Iconfig<T>) {
    return this.request<T>({ ...config, method: 'post' })
  }
  put<T>(config: Iconfig<T>) {
    return this.request<T>({ ...config, method: 'put' })
  }
  patch<T>(config: Iconfig<T>) {
    return this.request<T>({ ...config, method: 'patch' })
  }
  delete<T>(config: Iconfig<T>) {
    return this.request<T>({ ...config, method: 'delete' })
  }
}

export default AxiosWrapper
