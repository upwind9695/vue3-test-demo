import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
const Layout = () => import("@/layout/index.vue")

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/error-page",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/not-found",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/",
    component: () => import("@/views/user/login.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/login",
    component: () => import("@/views/user/login.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/identification-management",
    component: Layout,
    redirect: "/identification-management/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/identification-management/index.vue"),
        name: "IdentificationManagement",
        meta: {
          title: "自動識別管理",
          svgIcon: "identificationIcon",
          roles: []
        }
      }
    ]
  },
  {
    path: "/template-management",
    component: Layout,
    redirect: "/template-management/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/template-management/index.vue"),
        name: "TemplateManagement",
        meta: {
          title: "テンプレート管理",
          svgIcon: "templateIcon",
          roles: []
        }
      }
    ]
  },
  {
    path: "/system-management",
    component: Layout,
    redirect: "/system-management/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/system-management/index.vue"),
        name: "SystemManagement",
        meta: {
          title: "システムドッキング管理",
          svgIcon: "systemIcon",
          roles: []
        }
      }
    ]
  },
  {
    path: "/user-management",
    component: Layout,
    redirect: "/user-management/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/user-management/index.vue"),
        name: "UserManagement",
        meta: {
          title: "ユーザー管理",
          svgIcon: "userIcon",
          roles: []
        }
      }
    ]
  },
  {
    path: "/authority-management",
    component: Layout,
    redirect: "/authority-management/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/authority-management/index.vue"),
        name: "AuthorityManagement",
        meta: {
          title: "権限管理",
          svgIcon: "authorityIcon",
          roles: []
        }
      }
    ]
  },
  {
    path: "/visibility-management",
    component: Layout,
    redirect: "/visibility-management/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/visibility-management/index.vue"),
        name: "VisibilityManagement",
        meta: {
          title: "ファイルの可視化管理",
          svgIcon: "visibilityIcon",
          roles: []
        }
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})
export default router
