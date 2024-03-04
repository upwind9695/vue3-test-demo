import { App } from "vue"
import { loadAntdPlus } from "@/plugins/antd-plus"
// import { loadSvg } from "@/plugins/svg-plus"

export function loadPlugins(app: App) {
  // loadSvg(app)
  loadAntdPlus(app)
}
