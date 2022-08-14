import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRoutes from './admin'
import userRoutes from './user'

Vue.use(VueRouter)

const commonRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/auth/SignIn.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue')
  }
]

const routes = [...commonRoutes, ...userRoutes, ...adminRoutes]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active'
})

export default router
