import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest"
};

const injectToken = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  try {
    const token = localStorage.getItem("accessToken")
    if (token != null && config.headers !== undefined)
      config.headers.Authorization = `Bearer ${token}`
    return config
  } catch (error : any) {
    throw new Error(error)
  }
};

class Http {

  private baseUrl = process.env.REACT_APP_API_URL

  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
      withCredentials: true,
    })

    http.interceptors.request.use(
      injectToken, (error) => Promise.reject(error)
    )

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    )

    this.instance = http;
    return http
  }

  request<T=any, R = AxiosResponse<T>>(config: InternalAxiosRequestConfig ): Promise<R | any> {
    return this.http.request(config)
  }

  get<T=any , R = AxiosResponse<T>>(url: string, config?: InternalAxiosRequestConfig): Promise<R | any> {
    return this.http.get<T, R>(url, config)
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: InternalAxiosRequestConfig
  ): Promise<R | any> {
    return this.http.post<T, R>(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: InternalAxiosRequestConfig
  ): Promise<R | any> {
    return this.http.put<T, R>(url, data, config)
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: InternalAxiosRequestConfig
  ): Promise<R | any> {
    return this.http.patch<T, R>(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: InternalAxiosRequestConfig): Promise<R | any> {
    return this.http.delete<T, R>(url, config)
  }

  private handleError(error : any) {
    const { status } = error;

    switch (status) {
      case StatusCode.BadRequest: { 
        /** BadRequest 에러 처리 */
        console.error("'BadRequest' Occurred")
        break;
      }
      case StatusCode.InternalServerError: {
        /** InternalServer 에러 처리 */
        console.error("'InternalServer' Occurred")
        break;
      }
      case StatusCode.Forbidden: {
        /** Forbidden 에러 처리 */
        console.error("'Forbidden' Occurred")
        break;
      }
      case StatusCode.Unauthorized: {
        /** Unauthorized 에러 처리 */
        console.error("'Unauthorized' Occurred")
        break;
      }
      case StatusCode.TooManyRequests: {
        /** TooManyRequests 에러 처리 */
        console.error("'TooManyRequests' Occurred")
        break;
      }
      case StatusCode.BadGateway: { 
        /** BadGateway 에러 처리 */
        console.error("'BadGateway' Occurred")
        break;
      }
      case StatusCode.ServiceUnavailable: {
        /** ServiceUnavailable 에러 처리 */ 
        console.error("'ServiceUnavailable' Occurred")
        break;
      }
    }

    return Promise.reject(error)
  }
}

export const http = new Http()