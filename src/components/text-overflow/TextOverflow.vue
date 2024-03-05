<template>
  <a-tooltip :title="tooltipVisible ? fullContent : ''" :visible="tooltipVisible" :default-visible="false">
    <span ref="textContainer" class="text-container">
      {{ content }}
    </span>
  </a-tooltip>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'

export default {
  setup() {
    const textContainer = ref(null);
    const fullContent = ref('这是一段很长的文本，需要在一定宽度内显示并截断。');
    const content = ref('这是截断后的文本...');
    const tooltipVisible = ref(false);

    const handleResize = () => {
      const containerWidth = textContainer.value.offsetWidth;
      const textWidth = textContainer.value.scrollWidth;
      tooltipVisible.value = containerWidth < textWidth;
    };

    onMounted(() => {
      const observer = new ResizeObserver(handleResize);
      observer.observe(textContainer.value);
    });

    onUnmounted(() => {
      if (textContainer.value) {
        const observer = new ResizeObserver(handleResize);
        observer.unobserve(textContainer.value);
      }
    });

    return {
      textContainer,
      fullContent,
      content,
      tooltipVisible
    };
  }
};
</script>

<style scoped>
.text-container {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>