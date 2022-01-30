import { createRouter, createWebHistory } from 'vue-router'

import home from '@/page/home.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'
import error from '@/page/error.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: error,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
