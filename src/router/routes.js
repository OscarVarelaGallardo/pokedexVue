
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/details/:id',
        name: 'Details',
        component: () => import('pages/DetailsPage.vue')
      },
      {
        path: '/info',
        name: 'InfoDev',
        component: () => import('pages/InfoDev.vue')
      }

    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
