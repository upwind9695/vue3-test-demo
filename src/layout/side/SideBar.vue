
<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { type RouteRecordRaw, useRouter } from 'vue-router'
import SideItem from '@/layout/side/SideItem.vue'

const router = useRouter()
const props = defineProps({
  menuList: {
    type: Array<RouteRecordRaw>,
    required: true
  },
})

const defaultSelectedKeys = ref(['1'])
const defaultOpenKeys = ref(['1'])
function handleSelect({ key }) {
  console.log('Selected:', key)
  router.push({ path: key })
}
</script>
<script lang="ts">
export default {
  name: "SideBar"
}
</script>
<template>
  <a-menu
    mode="inline"
    :defaultSelectedKeys="defaultSelectedKeys"
    :defaultOpenKeys="defaultOpenKeys"
    @select="handleSelect"
  >
    <template v-for="item in props.menuList" :key="item.path">
      <side-item :item-data="item" :base-path="item.path"/>
    </template>
  </a-menu>
</template>


