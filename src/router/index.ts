import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/404',
    name: 'Home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/main/index.vue'),
    redirect: "/templateMes/index",
    children: [
      {
        path: "templateMes",
        name: "templateMes",
        meta: {
          title: "menu.templates",
          svgIcon: "template",
          roles: ["管理员"]
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: "/",
    // component: () => import("@/views/MainIndex.vue"),
    name: "templateMes",
    meta: {
      title: "menu.templates",
      svgIcon: "template",
      roles: ["管理员"]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
