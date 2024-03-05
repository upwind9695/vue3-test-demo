<script lang="ts" setup>
import { ref } from 'vue'
import { constantRoutes } from '@/router'
import MainIndex from '@/layout/MainIndex.vue'
import SideBar from '@/layout/side/SideBar.vue'
import OcrLogo from '@/layout/logo/index.vue'
import OcrHeader from '@/layout/header/index.vue'
import { useUserStoreHook } from "@/stores/modules/user"
import { useAppStoreHook } from '@/stores/modules/app'
import { useI18n } from 'vue-i18n'
const user = useUserStoreHook()
const app = useAppStoreHook()
const {t} = useI18n()
const collapsed = ref<boolean>(false)

</script>
<template>
  <a-layout class="app-wrap">
    <a-layout-sider width="251px" class="app-side" v-model:collapsed="collapsed" collapsible collapsed-width="80px" theme="light">
      <ocr-logo :collapsed="collapsed"/>
      <side-bar :menu-list="constantRoutes"/>
    </a-layout-sider>
    <a-layout class="app-main">
      <a-layout-header class="app-main-header">
        <ocr-header/>
      </a-layout-header>
      <a-layout-content class="app-main-content">
        <MainIndex/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style scoped lang="scss">
.app-wrap{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .app-side{
    width: 251px;
  }
  .app-main{
    .app-main-header{
      background: transparent;
      display: flex;
      justify-content: space-between;
      padding-inline: 25px;
    }
    .app-main-content {
      padding: 16px;
      box-sizing: border-box;
    }
  }
}
</style>
