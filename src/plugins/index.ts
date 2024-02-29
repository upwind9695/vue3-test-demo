import { loadElementPlus } from "@/plugins/element-plus"
import { App } from "vue"

export function loadPlugins(app: App) {
  loadElementPlus(app)
}
