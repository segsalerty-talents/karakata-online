// views for User layout

const userRoutes = [
  {
    path: '/',
    redirect: '/',
    component: () => import('@/layouts/User.vue'),
    children: [
      // {
      //   path: '/about',
      //   component: About
      // }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default userRoutes
