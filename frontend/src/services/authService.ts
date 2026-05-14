import apiClient from './api'
import { AuthResponse } from '@types/index'

export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', { email, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  register: async (email: string, password: string, firstName: string, lastName: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/register', {
      email,
      password,
      firstName,
      lastName,
    })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  logout: () => {
    localStorage.removeItem('token')
  },

  getToken: () => localStorage.getItem('token'),
}
