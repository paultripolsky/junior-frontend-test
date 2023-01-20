import { createRouter, createWebHistory } from 'vue-router'
import { usersStore } from '@/stores/usersStore'
import EnterScreen from '@/views/EnterScreen.vue'
import SignUpScreen from '@/views/SignUpScreen.vue'
import SignInScreen from '@/views/SignInScreen.vue'
import MainScreen from '@/views/MainScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EnterScreen,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpScreen,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInScreen,
      beforeEnter() {
        let { isAuthorized, authorizeUser } = usersStore()
        if (isAuthorized && authorizeUser) {
          alert('You have already logged in')
          return '/main'
        }
      },
    },
    {
      path: '/main',
      name: 'main',
      component: MainScreen,
      beforeEnter() {
        let { isAuthorized } = usersStore()
        if (!isAuthorized) {
          alert('You are not authorized to view this page')
          return '/'
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: EnterScreen,
    },
  ],
})

export default router
