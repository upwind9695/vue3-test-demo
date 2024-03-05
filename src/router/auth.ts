import NProgress from "nprogress"
import "nprogress/nprogress.css"
import router from "@/router/index"
import { whiteList } from "@/config/whiteList"

NProgress.configure({ showSpinner: false })
router.beforeEach(async (to, _from, next) => {
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
