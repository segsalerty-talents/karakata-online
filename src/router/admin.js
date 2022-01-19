// views for Admin layout

const adminRoutes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/Admin.vue'),
    children: [
      // {
      //   path: '/admin/dashboard',
      //   component: Dashboard
      // }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default adminRoutes
