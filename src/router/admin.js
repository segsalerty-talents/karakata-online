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
      },
      {
        path: '/admin/segmentation',
        component: () => import('@/views/admin/Segmentation.vue')
      },
      {
        path: '/admin/auto-config',
        component: () => import('@/views/admin/AutomaticConfiguration.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default adminRoutes
