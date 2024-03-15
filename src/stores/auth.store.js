import { defineStore } from 'pinia'
import router from '../router/index'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(cognito_data) {
      // update pinia state
      this.user = cognito_data

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(cognito_data))

      // redirect to home page
      router.push('/')
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/about')
    }
  }
})
