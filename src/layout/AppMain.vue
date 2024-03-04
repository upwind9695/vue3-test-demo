<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useUserStoreHook } from "@/stores/modules/user"
const user = useUserStoreHook()
const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
</script>
<template>
  <a-layout class="app-wrap">
    <a-layout-sider class="app-side" v-model:collapsed="collapsed" collapsible theme="light">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="app-main">
      <a-layout-header class="app-header">
        <a-breadcrumb>
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <a-button @click="user.toggleMode">切换模式{{ user.mode }}</a-button>
      </a-layout-header>
      <a-layout-content class="app-content">
        <div><RouterView/></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style scoped lang="scss">
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.app-wrap{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .app-main{
    .app-header{
      background: transparent;
      display: flex;
      justify-content: space-between;
    }
    .app-content {
      padding: 16px;
      box-sizing: border-box;
    }
  }
}
</style>
