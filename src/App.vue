<script lang="ts" setup>
import { computed, onMounted } from "vue"
import { getUserById } from './api/user'
import { useUserStoreHook } from "@/stores/modules/user"
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import enUS from 'ant-design-vue/lib/locale/en_US'
import "moment/locale/zh-cn"
import { LOCAL_TYPE } from "@/constants/type"
import AppMain from "@/layout/AppMain.vue"
const user = useUserStoreHook()
const locale = computed(() => {
  return user.local === LOCAL_TYPE.EN ? enUS: zhCN
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
    <AppMain/>
  </a-config-provider>
</template>

<style scoped></style>
