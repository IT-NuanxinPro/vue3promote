import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        title:'首页',
        transition:'animate__lightSpeedInLeft'
      },
      component: () => import('@/views/home.vue')
    },
    {
      path: '/slideIn',
      name: 'slideIn',
      meta:{
        title:'滑入',
        transition:'animate__fadeInLeft'
      },
      component: () => import('@/views/slideIn.vue')
    },
  ]
})

export default router
