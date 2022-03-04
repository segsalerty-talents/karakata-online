// views for Admin layout

const adminRoutes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/Admin.vue'),
    children: [
      {
        path: '/admin/dashboard',
        component: () => import('@/views/admin/Index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default adminRoutes
