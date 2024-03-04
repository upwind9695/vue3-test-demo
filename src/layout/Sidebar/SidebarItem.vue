<script lang="ts" setup>
import { type PropType, computed } from "vue"
import { type RouteRecordRaw } from "vue-router"
import SidebarItemLink from "./SidebarItemLink.vue"
import { isExternal } from "@/utils/validate"
import path from "path-browserify"
import { useI18n } from "vue-i18n"
import {useUserStore} from "@/store/modules/user"
const { t } = useI18n()
const store = useUserStore()

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  isCollapse: {
    type: Boolean,
    default: false
  },
  isFirstLevel: {
    type: Boolean,
    default: true
  },
  basePath: {
    type: String,
    default: ""
  }
})

const alwaysShowRootMenu = computed(() => {
  return props.item.meta && props.item.meta.alwaysShow
})

const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter((item) => {
      return !(item.meta && item.meta.hidden)
    })
    return showingChildren.length
  }
  return 0
})

const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null
  }
  if (props.item.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }
  return { ...props.item, path: "" }
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
  <div v-if="!props.item.meta?.hidden" :class="{ 'simple-mode': props.isCollapse, 'first-level': props.isFirstLevel }">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <SidebarItemLink :to="resolvePath(theOnlyOneChild.path)" v-if="theOnlyOneChild.meta">
        <span v-if="theOnlyOneChild.meta.roles.indexOf(store.type) != -1">
          <el-menu-item :index="resolvePath(theOnlyOneChild.path)" v-mappingRoute="[theOnlyOneChild.name]" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <svg-icon v-if="theOnlyOneChild.meta.svgIcon" :name="theOnlyOneChild.meta.svgIcon"/>
            <component v-else-if="theOnlyOneChild.meta.elIcon" :is="theOnlyOneChild.meta.elIcon" class="el-icon" />
            <template v-if="theOnlyOneChild.meta.title" #title style="padding-left: 10px;">
              <el-tooltip
                class="box-item"
                effect="dark"
                :content=t(theOnlyOneChild.meta.title)
                placement="top"
              >{{ t(theOnlyOneChild.meta.title) }}</el-tooltip>
            </template>
          </el-menu-item>
        </span>
      </SidebarItemLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(props.item.path)" teleported>
      <template #title>
        <svg-icon  v-if="props.item.meta && props.item.meta.svgIcon" :name="props.item.meta.svgIcon" />
        <component v-else-if="props.item.meta && props.item.meta.elIcon" :is="props.item.meta.elIcon" class="el-icon" />
        <span v-if="props.item.meta && props.item.meta.title">{{ props.item.meta.title }}</span>
      </template>
      <template v-if="props.item.children">
        <sidebar-item
          v-for="child in props.item.children"
          :key="child.path"
          :item="child"
          :is-collapse="props.isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
        />
      </template>
    </el-sub-menu>
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  min-width: 1em;
  margin-right: 20px;
  font-size: 18px;
  position: relative;
}

.el-icon {
  width: 1em;
  margin-right: 12px;
  font-size: 18px;
}

.simple-mode {
  &.first-level {
    ::v-deep(.el-sub-menu) {
      .el-sub-menu__icon-arrow {
        display: none;
      }
      span {
        visibility: hidden;
      }
    }
  }
}
</style>
