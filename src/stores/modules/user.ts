import { defineStore } from 'pinia'
import { computed, ref } from "vue"
import SecureLS from 'secure-ls'
import { StorageLike } from 'pinia-plugin-persistedstate'
import { LOCAL_TYPE, THEME_ENUM } from "@/constants/type"
import store from "@/stores"
import { theme } from 'ant-design-vue'
import { DARK_THEME, LIGHT_THEME } from "@/config";
const ls = new SecureLS({ isCompression: true, encryptionSecret: '38c31684-d00d-30dc-82e0-fad9eec46d1d' })
const st: StorageLike = {
  setItem(key: string, value: string) {
    ls.set(key, value)
  },
  getItem(key: string): string | null {
    return ls.get(key)
  },
}
const useUserStore = defineStore(
  'user',
  () => {
    const local = ref<LOCAL_TYPE>(LOCAL_TYPE.EN)
    const token = ref<string>('')
    const username = ref<string>('')
    const userId = ref<string>('')
    const modeName = ref<string>("light") // 颜色模式
    const themeName = ref<THEME_ENUM>(THEME_ENUM.LIGHT) // 主题名称
    const roles = ref<Array<string>>([])
    const mode = computed(() => {
      document.documentElement.setAttribute('data-dark', modeName.value)
      document.documentElement.setAttribute('style', `color-scheme: ${modeName.value}`)
      return modeName.value
    })
    const themeConfig = computed(() => {
      document.documentElement.setAttribute('data-theme', themeName.value)
      debugger
      const config = modeName.value === 'dark' ? DARK_THEME : LIGHT_THEME
      return {
        ...config,
        algorithm: mode.value === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm
      }
    })
    const setToken = (t: string) => {
      token.value = t
    }
    const setUsername = (name: string) => {
      username.value = name
    }
    const setUserId = (id: string) => {
      userId.value = id
    }
    const setLocal = (l: LOCAL_TYPE) => {
      local.value = l
    }
    // 设置主题
    const setThemeName = (value: THEME_ENUM) => {
      themeName.value = value
    }
    // 切换颜色得模式
    const toggleMode = () => {
      modeName.value = modeName.value === 'light' ? 'dark' : 'light'
    }
    // 添加权限信息
    const setRoles = (r: Array<string>) => {
      roles.value =  r
    }
    return {
      token,
      username,
      userId,
      themeName,
      themeConfig,
      mode,
      modeName,
      local,
      roles,
      setToken,
      setUsername,
      setUserId,
      setThemeName,
      toggleMode,
      setLocal
    }
  },
  {
    persist: {
      storage: st,
    },
  },
)

export function useUserStoreHook() {
  return useUserStore(store)
}
