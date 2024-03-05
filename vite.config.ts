import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import svgLoader from "vite-svg-loader"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import postcssPxToRem from "postcss-pxtorem"
import autoprefixer from "autoprefixer"


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        javascriptEnabled: true
      },
      less: {
        javascriptEnabled: true
      },
      scss: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxToRem({
          rootValue: 16,
          propList: ["*"],
          selectorBlackList: [], // 要忽略的选择器
          unitPrecision: 5, // 小数点后保留的位数
          minPixelValue: 2, // 可转换的最小像素值,
          exclude: [/node_modules/], // 排除不需要转换的文件
        })
      ]
    }
  },
  plugins: [
    vue(),
    svgLoader(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]"
    }),
    viteMockServe({
      mockPath: './mock',
    })
  ],
})
