import { defineStore } from 'pinia'
import SecureLS from 'secure-ls'
import { StorageLike } from 'pinia-plugin-persistedstate'
import store from "@/stores"
import { ref } from 'vue'
const ls = new SecureLS({ isCompression: true, encryptionSecret: '38c31684-d00d-30dc-82e0-fad9eec46d1d' })
const st: StorageLike = {
  setItem(key: string, value: string) {
    ls.set(key, value)
  },
  getItem(key: string): string | null {
    return ls.get(key)
  },
}
const useAppStore = defineStore(
  'app',
  () => {
    const collapsed = ref<boolean>(false)
    const isOneLevel = ref<boolean>(true)

    // 设置是否折叠
    const setCollapsed = (col: boolean) => {
      collapsed.value = col
    }
    // 判断是否是一级菜单
    const setIsOneLevel = (level: boolean) => {
      isOneLevel.value = level
    }
    return {
      collapsed,
      isOneLevel,
      setCollapsed,
      setIsOneLevel
    }
  },
  {
    persist: {
      storage: st,
    },
  },
)

export function useAppStoreHook() {
  return useAppStore(store)
}
