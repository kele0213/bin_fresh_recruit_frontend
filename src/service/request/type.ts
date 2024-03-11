import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface Iinterceptors {
  requestSuccess?:
    | ((
        value: InternalAxiosRequestConfig<any>
      ) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)
    | null
    | undefined
  requestError?: (value: any) => any
  responseSuccess?:
    | ((
        value: AxiosResponse<any, any>
      ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)
    | null
    | undefined
  responseError?: (value: any) => any
}
export interface Iconfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Iinterceptors
  showLoading?: boolean
}
