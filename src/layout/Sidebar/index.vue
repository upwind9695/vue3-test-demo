<script lang="ts" setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { usePermissionStore } from "@/store/modules/permission"
import { useSettingsStore } from "@/store/modules/settings"
import SidebarItem from "./SidebarItem.vue"
import SidebarLogo from "./SidebarLogo.vue"
import { getCssVariableValue } from "@/utils"
import Hamburger from "../Hamburger/index.vue"
import {constantRoutes} from "@/router";

const v3SidebarMenuBgColor = getCssVariableValue("--v3-sidebar-menu-bg-color")
const v3SidebarMenuTextColor = getCssVariableValue("--v3-sidebar-menu-text-color")
const v3SidebarMenuActiveTextColor = getCssVariableValue("--v3-sidebar-menu-active-text-color")

const route = useRoute()
const permissionStore = usePermissionStore()
const settingsStore = useSettingsStore()

const { showSidebarLogo } = storeToRefs(settingsStore)

const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta?.activeMenu) {
    return meta.activeMenu
  }
  return path
})

</script>

<template>
  <div :class="{ 'has-logo': showSidebarLogo }">
    <div style="background-color: #0a2b4a">
      <SidebarLogo v-if="showSidebarLogo" :collapse="isCollapse" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="v3SidebarMenuBgColor"
        :text-color="v3SidebarMenuTextColor"
        :active-text-color="v3SidebarMenuActiveTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <!--<span v-for="route in permissionStore.routes" :key="route.path">-->
        <span v-for="route in constantRoutes" :key="route.path">
          <SidebarItem :item="route" :base-path="route.path" :is-collapse="isCollapse" />
        </span>
      </el-menu>
    </el-scrollbar>
    <div class="hamburger-class">
      <Hamburger :is-active="sidebar.opened" class="hamburger" @toggle-click="toggleSidebar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin tip-line {
  &::before {
    content: "";
    position: absolute;
    top: 6.2%;
    left: 4%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #e6f1f5;
    z-index: 1;
  }
}
.has-logo {
  .el-scrollbar {
    height: calc(100% - var(--v3-header-height) - 36px);
  }
  .hamburger-class {
    background-color: #0a2b4a;
    .hamburger {
      height: 36px;
      width: 100%;
      text-align: right;
      padding: 0 15px;
      cursor: pointer;
      color: #ecf1f8;
    }
  }
}

.el-scrollbar {
  height: 100%;
  ::v-deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  // 滚动条
  ::v-deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}

.el-menu {
  border: none;
  min-height: 100%;
  width: 100% !important;
  background: #0a2b4a;
}
.el-menu--vertical {
  padding-top: 15px;
}
.el-sub-menu__title {
  background-color: #10589a;
}

::v-deep(.el-menu-item),
::v-deep(.el-sub-menu__title),
::v-deep(.el-sub-menu .el-menu-item) {
  height: 45px;
  line-height: 45px;
  margin-bottom: 15px;
  color: #a1adcc;
  font-size: 15px;
  font-weight: 500;
  &.is-active,
  &:hover {
    color: #2ba6a8;
    font-weight: 500;
    height: 45px;
    font-size: 15px;
  }
  display: block;
  * {
    vertical-align: middle;
    z-index: 2;
  }
}
::v-deep(.el-menu-item) {
  &.is-active {
    @include tip-line;
  }
}
::v-deep(.el-menu-tooltip__trigger) {
  padding: 0 13px;
}

.el-menu--collapse {
  ::v-deep(.el-sub-menu) {
    &.is-active {
      .el-sub-menu__title {
        @include tip-line;
        color: var(--v3-sidebar-menu-active-text-color) !important;
      }
    }
  }
}
</style>
