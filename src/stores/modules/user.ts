import { defineStore } from "pinia"
import {ref} from "vue";
import store from "../index.ts"
import SecureLS from "secure-ls"
import {StorageLike} from "pinia-plugin-persistedstate"
const ls = new SecureLS({ isCompression: true, encryptionSecret: '38c31684-d00d-30dc-82e0-fad9eec46d1d' })
const st: StorageLike = {
    setItem(key: string, value: string) {
        ls.set(key, value)
    },
    getItem(key: string): string | null {
        return ls.get(key)
    }
}

const useUserStore = defineStore(
    "user",
    () => {
        const token = ref<string>("")
        const username = ref<string>("")
        const userId = ref<string>("")
        const setToken = (t: string) => {
            token.value = t
        }
        const setUsername = (name: string) => {
            username.value = name
        }
        const setUserId = (id: string) => {
            userId.value = id
        }
        return {
            token,
            username,
            userId,
            setToken,
            setUsername,
            setUserId
        }
    },
    {
        persist: {
            storage: st
        },
    }
)

export function useUserStoreHook(){
    return useUserStore(store)
}
