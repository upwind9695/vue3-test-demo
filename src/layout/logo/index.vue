<script setup lang="ts">
  const props = defineProps({
    collapsed: {
      type: Boolean
    }
  })
</script>

<template>
  <div class="logo">
    <div class="icon"><svg-icon name="logo" style="height: 40px"/></div>
    <div class="text" v-if="!props.collapsed">Document AI</div>
  </div>
</template>
<script lang="ts">
export default {
  name: "OcrLogo"
}
</script>

<style scoped lang="scss">
.logo{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  .icon {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    background: #F2F2F2;
    border-radius: 3px;
  }
  .text{
    font-size: 20px;
    margin-left: 10px;
    color: #ffffff;
  }
}
</style>
