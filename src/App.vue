<script lang="ts" setup>
import { computed, onMounted } from "vue"
import { getUserById } from './api/user'
import { useUserStoreHook } from "@/stores/modules/user"
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import enUS from 'ant-design-vue/lib/locale/en_US'
import jaJP from 'ant-design-vue/lib/locale/ja_JP'
import "moment/locale/zh-cn"
import moment from 'moment'
import { LOCAL_TYPE } from '@/constants/enum'
const user = useUserStoreHook()
moment.locale('zh-cn')
const locale = computed(() => {
  switch (user.local) {
    case LOCAL_TYPE.ZH:
      return zhCN
    case LOCAL_TYPE.EN:
      return enUS
    case LOCAL_TYPE.JA:
      return jaJP
    default:
      return enUS
  }
})
onMounted(async () => {
  const u = await getUserById(1)
  user.setToken(u.email)
  user.setUserId(u.id)
  user.setUsername(u.name)
})
</script>

<template>
  <a-config-provider :theme="user.themeConfig" :locale="locale">
    <RouterView/>
  </a-config-provider>
</template>

<style scoped></style>
