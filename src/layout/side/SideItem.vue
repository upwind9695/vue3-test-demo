<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import {  type RouteRecordRaw, useRouter } from 'vue-router'
import { isExternal } from '@/utils'
import path from 'path-browserify'

const router = useRouter()
const props = defineProps({
  itemData:{
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
  basePath: {
    type: String,
    default: ""
  }
})
const alwaysShowRootMenu = computed(() => {
  return props.itemData.meta?.alwaysShow
})

const showingChildNumber = computed(() => {
  if (props.itemData.children) {
    const showingChildren = props.itemData.children.filter((item) => {
      return !item.meta?.hidden
    })
    return showingChildren.length
  }
  return 0
})

const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null
  }
  if (props.itemData.children) {
    for (const child of props.itemData.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }
  return { ...props.itemData, path: "" }
})

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
}
</script>
<template>
  <div v-if="!props.itemData.meta?.hidden">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
        <a-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <svg-icon v-if="theOnlyOneChild.meta?.svgIcon" :name="theOnlyOneChild.meta.svgIcon"/>
          <span v-if="theOnlyOneChild.meta?.title"> {{theOnlyOneChild.meta.title}}</span>
        </a-menu-item>
    </template>
    <a-sub-menu v-else :index="resolvePath(props.itemData.path)" teleported>
      <template>
        <svg-icon  v-if="props.itemData.meta?.svgIcon" :name="props.itemData.meta.svgIcon" />
        <svg-icon name="logo"/>
        <span v-if="props.itemData.meta?.title">{{ props.itemData.meta.title }}</span>
      </template>
      <template v-if="props.itemData.children">
        <side-item
          v-for="child in props.itemData.children"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          :item-data="child"/>
      </template>
    </a-sub-menu>
  </div>
</template>
<script lang="ts">
export default {
  name: "SideItem"
}
</script>


