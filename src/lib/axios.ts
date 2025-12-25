import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { refreshAccessToken } from './refreshToken'

const api = axios.create({
  baseURL: 'http://localhost/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`)
    }
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const newToken = await refreshAccessToken()
        // Cập nhật header và thực hiện lại request
        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`
        }
        return api(originalRequest)
      } catch (err) {
        // KHI REFRESH TOKEN THẤT BẠI:
        // 1. Xóa dữ liệu cũ để tránh xung đột
        localStorage.removeItem('accessToken')
        localStorage.removeItem('customer') // Tên key bạn lưu thông tin user

        // 2. Bắn một event để UI biết và hiện Popup
        window.dispatchEvent(new Event('auth-session-expired'))

        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default api
