import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportsView from '../views/ReportsView.vue'
import { useAuthStore } from '../stores/auth.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  let cognitoData = {}
  const publicPages = ['/about']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (to.fullPath.substr(0, 2) === '/#') {
    let elementsString = decodeURIComponent(to.fullPath.substr(2, to.fullPath.length))
    let params = elementsString.split('&')
    for (let param of params) {
      let values = param.split('=')
      cognitoData[values[0]] = values[1]
    }
    auth.login(cognitoData)
  }

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/about'
  }
})

export default router
