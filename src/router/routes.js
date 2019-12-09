
const routes = [
  {
    path: '/ticket',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Ticket.vue')
      }
    ],
    props: { title: '이용권 확인' }
  },
  {
    path: '/share',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ShareList.vue')
      }
    ],
    props: { title: '공유된 주차장' }
  },
  {
    path: '/parking/paymentDone',
    component: () => import('pages/PaymentDone.vue')
  },
  {
    path: '/parking/:id',
    component: () => import('pages/parkingInfo.vue')
  },
  {
    path: '/parking/payment/:id',
    component: () => import('pages/Payment.vue')
  },
  {
    path: '/ticket/tag',
    component: () => import('pages/Tag.vue')
  },
  {
    path: '/share/adjust',
    component: () => import('pages/ShareAdjust.vue')
  },
  {
    path: '/share/:id',
    component: () => import('pages/ShareInfo.vue')
  },
  {
    path: '/menu',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Menu.vue')
      }
    ],
    props: { title: '메뉴' }
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'lists',
        component: () => import('pages/Index.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
