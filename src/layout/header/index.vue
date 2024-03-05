<script lang="ts" setup>
import { useUserStoreHook } from '@/stores/modules/user'
import { useAppStoreHook } from '@/stores/modules/app'
import OcrBreadcrumb from '@/layout/breadcrumb/index.vue'
import { ref } from 'vue'

const user = useUserStoreHook()
const app = useAppStoreHook()
const value = ref<string>('')

</script>

<template>
  <div class="app-header">
    <div class="app-header-link">
      <template v-if="app.isOneLevel">
        <ocr-breadcrumb :list='[{
      name: "Application Center",
        path: "/"
        },{
        name: "Application List",
        path: "/"
        }]' />
      </template>
      <template v-else>
        <div class="title">自動識別管理</div>
      </template>
    </div>
    <a-space class="app-header-operate">
      <a-input v-model:value="value" placeholder="機能を入力してください">
        <template #prefix>
          <svg-icon name="searchIcon" />
        </template>
      </a-input>
      <a-button @click="user.toggleMode">
        <template #icon>
          <svg-icon name="langeIcon" style="font-size: 20px;" />
        </template>
      </a-button>
    </a-space>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OcrHeader',
}
</script>
<style lang="scss" scoped>
@mixin flexItemAlignCenter {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.app-header {
  width: 100%;
  display: flex;

  .app-header-link {
    flex: 1;
    @include flexItemAlignCenter;

    .title {
      font-size: 24px;
      font-weight: 500;
    }
  }

  .app-header-operate {
    flex: 0 0 auto;
    @include flexItemAlignCenter;
  }
}
</style>
