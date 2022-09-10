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
        path: '/admin/sales',
        component: () => import('@/views/admin/Sales.vue')
      },
      {
        path: '/admin/segmentation',
        component: () => import('@/views/admin/Segmentation.vue')
      },
      {
        path: '/admin/automatic-configuration',
        component: () => import('@/views/admin/AutomaticConfiguration.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default adminRoutes
