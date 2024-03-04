<script lang="ts" setup>
const props = defineProps({
  collapse: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapse: props.collapse }">
    <transition name="sidebar-logo-fade">
      <router-link v-if="props.collapse" key="collapse" to="/">
        <div style="width: 100%; height: 100%; background-color: #2BA6A8; "></div>
      </router-link>
      <router-link v-else key="expand" to="/">
        <img src="@/assets/image/logo.png" class="sidebar-logo-text" alt=""/>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: var(--v3-header-height);
  line-height: var(--v3-header-height);
  background-color: #2BA6A8;
  border-radius: 0px 0px 35px 0px;
  text-align: center;
  overflow: hidden;
  .sidebar-logo {
    width: 73%;
    display: none;
  }
  .sidebar-logo-text {
    width: 73%;
    vertical-align: middle;
  }
}
.logo-class-title {
  color: #ebebeb;
  font-size: 30px;
  text-align: left;
  padding-left: 14px;
}
.logo-class-title-1 {
  color: #ebebeb;
  font-size: 16px;
  text-align: left;
  padding-left: 10px;
}
.collapse {
    background-color: #0A2B4A;
    border-radius: 0px 0px 0px 0px;
  .sidebar-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    display: inline-block;
  }
  .sidebar-logo-text {
    display: none;
  }
}
</style>
