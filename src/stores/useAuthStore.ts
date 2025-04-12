import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginService } from '../services/authService'

interface AuthStore {
  loading: boolean
  erro: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set): AuthStore => ({
      loading: false,
      erro: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        set({ loading: true, erro: null })
        try {
          const res = await loginService(email, password)
          localStorage.setItem('token', res.data.token)
          set({ isAuthenticated: true })
        } catch (e: any) {
          set({ erro: e.response.data.error || 'Erro ao fazer login' })
        } finally {
          set({ loading: false })
        }
      },
      logout: () => {
        set({ isAuthenticated: false })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
