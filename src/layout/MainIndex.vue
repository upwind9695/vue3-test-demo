<script lang="ts" setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const key = computed(() => {
  return route.path
})
</script>

<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
}
</style>
