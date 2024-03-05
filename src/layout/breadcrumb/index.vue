<script setup lang="ts">
  import { BreadcrumbType } from '@/constants/type'
  const props = defineProps({
    list: Array<BreadcrumbType>,
  })
</script>
<template>
<a-breadcrumb>
  <template #separator>
    <svg-icon style="font-size: 16px" name="breadRightIcon"/>
  </template>
  <template v-for="(item) in props.list">
    <a-breadcrumb-item>{{item.name}}</a-breadcrumb-item>
  </template>
</a-breadcrumb>
</template>
<script lang="ts">
export default {
  name: 'OcrBreadcrumb'
}
</script>
<style scoped lang="scss">
.app-breadcrumb{

}
</style>
