import axios, { AxiosInstance, AxiosRequestConfig, HttpStatusCode } from 'axios'
import { get } from 'lodash-es'
const creatService = () => {
  // 生成实例
  const service = axios.create()
  // 拦截器
  service.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
  )
  service.interceptors.response.use(
    response => {
      if (response.status === HttpStatusCode.Ok) {
        return response
      }
      return Promise.reject(response)
    },
    error => {
      const status = get(error, 'response.status')
      switch (status) {
        case HttpStatusCode.BadRequest: // 400
          error.message = '请求错误'
          break
        case HttpStatusCode.Unauthorized: // 401
          break
        case HttpStatusCode.Forbidden: // error-page
          error.message = '拒绝访问'
          break
        case HttpStatusCode.NotFound: // not-found
          error.message = '请求地址出错'
          break
        case HttpStatusCode.MethodNotAllowed: // 405
          break
        case HttpStatusCode.RequestTimeout: // 408
          error.message = '请求超时'
          break
        case HttpStatusCode.InternalServerError: // 500
          error.message = '服务器内部错误'
          break
        case HttpStatusCode.NotImplemented: // 501
          error.message = '服务未实现'
          break
        case HttpStatusCode.BadGateway: // 502
          error.message = '网关错误'
          break
        case HttpStatusCode.ServiceUnavailable: // 503
          error.message = '服务不可用'
          break
        case HttpStatusCode.GatewayTimeout: // 504
          error.message = '网关超时'
          break
        case HttpStatusCode.HttpVersionNotSupported: // 505
          error.message = 'HTTP 版本不受支持'
          break
        default:
          break
      }
      return Promise.reject(error)
    },
  )

  service.interceptors.response.use(
    response => {
      if (response.status === HttpStatusCode.Ok) {
        return response.data
      }
      return Promise.reject(response)
    },
    error => {
      return Promise.reject(error)
    },
  )
  return service
}

const createRequest = (service: AxiosInstance) => {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const configDefault = {
      headers: {
        Authorization: '',
        Local: 'en',
        'Content-Type': get(config, 'headers.Content-Type', 'application/json'),
      },
      timeout: 0,
      baseURL: '/api',
      data: {},
    }
    return service(Object.assign(configDefault, config))
  }
}

const service = creatService()

export const request = createRequest(service)
