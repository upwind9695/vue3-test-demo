import { type App } from "vue"
import Antd from "ant-design-vue"
export function loadAntdPlus(app: App) {
  app.use(Antd)
}
