<script lang="ts" setup>
import { onMounted } from 'vue'
import { getUserById } from './api/user'
import { useUserStoreHook } from "@/stores/modules/user"

const user = useUserStoreHook()

onMounted(async () => {
  const u = await getUserById(1)
  user.setToken(u.email)
  user.setUserId(u.id)
  user.setUsername(u.name)
})
</script>

<template>
  <div style="height: 100vh; width: 100vw">
    <router-view />
  </div>
</template>

<style scoped></style>
