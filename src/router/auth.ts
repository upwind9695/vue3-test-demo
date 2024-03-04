import NProgress from "nprogress"
import "nprogress/nprogress.css"
import router from "@/router/index"
import { whiteList } from "@/config/whiteList"

NProgress.configure({ showSpinner: false })
router.beforeEach(async (to, _from, next) => {
  // if (getToken()) {
  //   if (to.path === "/login") {
  //     // 如果已经登录，并准备进入 Login 页面，则重定向到主页
  //     next({ path: "/" })
  //     NProgress.done()
  //   } else {
  //     // 检查用户是否已获得其权限角色
  //     if () {
  //       try {
  //         if (asyncRouteSettings.open) {
  //           // 注意：角色必须是一个数组！ 例如: ['admin'] 或 ['developer', 'editor']
  //           // 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）
  //         } else {
  //           // 没有开启动态路由功能，则启用默认角色
  //         }
  //         // 将'有访问权限的动态路由' 添加到 Router 中
  //         // 确保添加路由已完成
  //         // 设置 replace: true, 因此导航将不会留下历史记录
  //         next({ ...to, replace: true })
  //       } catch (err: any) {
  //         next("/login")
  //         NProgress.done()
  //       }
  //     } else {
  //       next()
  //     }
  // }
  if (whiteList.indexOf(to.path) !== -1) {
    // 如果在免登录的白名单中，则直接进入
    next()
  } else {
    // 其他没有访问权限的页面将被重定向到登录页面
    // next("/login")
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})
