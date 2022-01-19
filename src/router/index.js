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
    component: () => import('@/views/Home.vue')
  }
]

const routes = [
  ...commonRoutes,
  ...userRoutes,
  ...adminRoutes
]

const router = new VueRouter({
  routes
})

export default router
