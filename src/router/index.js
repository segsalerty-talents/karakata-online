import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRoutes from './admin'
import userRoutes from './user'
import { GET_ITEM } from '../helpers/localstorage'

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
    component: () => import('@/views/auth/SignIn.vue'),
    meta: {
      guard: 'guest'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue'),
    meta: {
      guard: 'guest'
    }
  },
  {
    path: '/set-password',
    name: 'SetPassword',
    component: () => import('@/views/auth/SetPassword.vue')
  }
]

const routes = [...commonRoutes, ...userRoutes, ...adminRoutes]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active'
})

router.beforeEach(async (to, from, next) => {
  const isAuthencated = !!GET_ITEM('karakata_data')
  if (to.meta.guard === 'guest' && isAuthencated) {
    next('/admin/dashboard')
  } else if (to.meta.guard === 'auth' && !isAuthencated) {
    next({ name: 'sign-in' })
  }
  return next()
})

export default router
