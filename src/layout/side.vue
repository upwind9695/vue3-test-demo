<template>
  <a-menu
    :mode="mode"
    :theme="theme"
    :defaultSelectedKeys="defaultSelectedKeys"
    :defaultOpenKeys="defaultOpenKeys"
    :style="{ width: menuWidth }"
  >
    <template v-for="item in menuData" :key="item.key">
      <a-menu-item :key="item.key">{{ item.name }}</a-menu-item>
      <a-sub-menu v-if="item.children" :key="item.key">
        <template #title>{{ item.name }}</template>
        <a-menu-item v-for="child in item.children" :key="child.key">
          {{ child.name }}
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    mode: {
      type: String,
      default: 'inline' // 'inline', 'vertical', 'horizontal'
    },
    theme: {
      type: String,
      default: 'dark' // 'light', 'dark'
    },
    menuData: {
      type: Array,
      required: true
    },
    defaultSelectedKeys: {
      type: Array,
      default: () => []
    },
    defaultOpenKeys: {
      type: Array,
      default: () => []
    },
    menuWidth: {
      type: String,
      default: '256px'
    }
  }
};
</script>
