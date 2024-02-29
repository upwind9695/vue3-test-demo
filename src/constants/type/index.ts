import { Ref } from "vue"

export type AiLabelMapOptionsType = {
  container: string
  imageSrc: string
}

export enum AI_LABEL_MAP_MODE_ENUM {
  PAN ="PAN", // 平移
  MARKER = "MARKER", //注记
  POINT = "POINT", //点
  CIRCLE = "CIRCLE", //圆
  LINE = "LINE", //线
  POLYLINE = "POLYLINE", //多线段
  RECT = "RECT", //矩形
  POLYGON = "POLYGON", //多边形
  DRAW_MASK = "DRAWMASK", //涂抹
  CLEAR_MASK = "CLEARMASK" //擦除
}
