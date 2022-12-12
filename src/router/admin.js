// views for Admin layout

const adminRoutes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/Admin.vue'),
    children: [
      {
        name: 'dashboard',
        path: '/admin/dashboard',
        component: () => import('@/views/admin/Index.vue'),
        meta: {
          guard: 'auth'
        }
      },
      {
        name: 'sales',
        path: '/admin/sales',
        component: () => import('@/views/admin/Sales.vue'),
        meta: {
          guard: 'auth'
        }
      },
      {
        name: 'salesdetails',
        path: '/admin/sales/:invoicenumber',
        component: () => import('@/views/admin/SalesDetails'),
        meta: {
          guard: 'auth'
        }
      },
      {
        path: '/admin/segmentation',
        component: () => import('@/views/admin/Segmentation.vue'),
        meta: {
          guard: 'auth'
        }
      },
      {
        path: '/admin/automatic-configuration',
        component: () => import('@/views/admin/AutomaticConfiguration.vue'),
        meta: {
          guard: 'auth'
        }
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default adminRoutes
