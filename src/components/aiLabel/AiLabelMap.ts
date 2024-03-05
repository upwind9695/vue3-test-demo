import AILabel from 'ailabel'
import { AI_LABEL_MAP_MODE_ENUM } from "@/constants/enum"
import { AiLabelMapOptionsType  } from "@/constants/type"
export class AiLabelMap {
  container: string = ""
  imageSrc: string = ""
  gMap = null
  gFeatureLayer = null

  /**
   * @description 初始化对象
   * @param options 初始化参数
   */
  static initialize(options: AiLabelMapOptionsType) {
    const aiLabel = new AiLabelMap()
    aiLabel.setOptions(options)
    return aiLabel
  }
  /**
   * @description 设置选项
   * @param options 初始化参数
   */
  setOptions(options: AiLabelMapOptionsType) {
    this.container = options.container
    this.imageSrc = options.imageSrc
    this.#render()
  }

  // 渲染
  #render() {
    // 创建地图实例
    this.gMap = new AILabel.Map("mapContainer", {
      center: { x: 800, y: 250 }, // 为了让图片居中
      zoom: 1700,
      mode: "PAN", // 绘制线段
      refreshDelayWhenZooming: true, // 缩放时是否允许刷新延时，性能更优
      zoomWhenDrawing: true,
      panWhenDrawing: true,
      zoomWheelRatio: 1, // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
      withHotKeys: true, // 关闭快捷键
    })
    // 添加图层
    this.#addLayers()
    // 绑定事件
    this.#bindEvents()
    // 添加标注
    this.#drawAnnotations()
    // 保存数据
    this.#saveTheLabelData()
  }
  // 添加图层
  #addLayers() {
    // 添加图像层
    this.#addImageLayer()
    // 添加矢量数据层
    this.#addFeatureLayer()
  }
  #addImageLayer() {
    const gImageLayer = new AILabel.Layer.Image('imgLayer', {
      src: this.imageSrc,
      width: "100%",
      height: "100%",
    });
    this.gMap.addLayer(gImageLayer);
  }
  #addFeatureLayer() {
    this.gFeatureLayer = new AILabel.Layer.Feature('featureLayer', {
      name: 'feature_layer',
    })
    this.gMap.addLayer(this.gFeatureLayer)
  }
  // 绘制标注
  #drawAnnotations() {}
  // 绑定事件
  #bindEvents() {
    this.#bindZoomEvent()
  }
  // 缩小放大事件
  #bindZoomEvent() {
    this.gMap.events.on('zoomIn', () => {
      console.log('地图放大');
    });
    this.gMap.events.on('zoomOut', () => {
      console.log('地图缩小');
    });
  }
  // 保存标注数据
  #saveTheLabelData() {}
  // 重新渲染
  rerender() {}
  // 修改模式
  changeMode(mode: string) {
    switch (mode) {
      case AI_LABEL_MAP_MODE_ENUM.MARKER:
        this.gMap.setMode('MARKER')
        break
      case AI_LABEL_MAP_MODE_ENUM.RECT:
        this.gMap.setMode('RECT')
        break
      case AI_LABEL_MAP_MODE_ENUM.CLEAR_MASK:
        this.gMap.setMode('CLEARMASK')
        break
      case AI_LABEL_MAP_MODE_ENUM.PAN:
        this.gMap.setMode('PAN')
        break
      case AI_LABEL_MAP_MODE_ENUM.POINT:
        this.gMap.setMode('POINT')
    }
  }
  beforeDestroy() {
    this.gMap.destroy()
  }
}
