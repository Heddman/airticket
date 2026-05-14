import { create } from 'zustand'
import { User } from '@types/index'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  setAuthenticated: (isAuth: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user }),
  setAuthenticated: (isAuth) => set({ isAuthenticated: isAuth }),
}))
