<script lang="ts" setup>
import {onMounted} from "vue"
import {useUserStoreHook} from "./stores/modules/user.ts"
import {getUserById} from "./api/user"

const user = useUserStoreHook()

onMounted(async () => {
  const u = await getUserById(1)
  user.setToken(u.email)
  user.setUserId(u.id)
  user.setUsername(u.name)
})
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img alt="Vue logo" class="logo vue" src="./assets/vue.svg"/>
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;

  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
