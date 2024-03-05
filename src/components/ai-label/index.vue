<script lang="ts" setup>
  import { onMounted } from "vue"
  import { AiLabelMap } from "@/components/ai-label/AiLabelMap"

  onMounted(() => {
    AiLabelMap.initialize({
      container: "mapContainer",
      imageSrc: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0186f0570f33d132f875a83991e34b.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650076295&t=c0b8a135c2f9298d1d714703f5d30423"
    })
  })
</script>

<template>
  <div class="map-wrap">
    <div class="map-actions">
      <a-button type="text" class="el-icon-thumb">平移</a-button>
      <a-button type="text" class="el-icon-location-outline">注记</a-button>
      <a-button type="text" class="el-icon-more-outline">点</a-button>
      <a-button type="text" class="el-icon-minus">线段</a-button>
      <a-button type="text" class="el-icon-share">多段线</a-button>
      <a-button type="text" class="el-icon-orange">圆</a-button>
      <a-button type="text" class="el-icon-full-screen">矩形</a-button>
      <a-button type="text" class="el-icon-house">多边形</a-button>
      <a-button type="text" class="el-icon-magic-stick">填充</a-button>
      <a-button type="text" class="el-icon-refresh-left">撤销</a-button>
      <a-button type="text">获取标注数据</a-button>
      <a-button class="btn btn-default">涂抹</a-button>
      <a-button class="btn btn-default">擦除</a-button>
      <a-button class="btn btn-default" >获取rle数据</a-button>
    </div>
    <div style="flex: 1;">
      <div id="mapContainer" class="map-container"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-wrap{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .map-actions{
    flex: 0 0 auto;
    margin: 30px;
  }
  .map-container {
    height: 100%;
    width: 100%;
    position: relative;
  }
}
</style>
