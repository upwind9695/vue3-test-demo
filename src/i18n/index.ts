import { createI18n } from "vue-i18n"
import zh from "@/i18n/zh"
import en from "@/i18n/en"
import ja from "@/i18n/ja"
const i18n = createI18n({
  legacy: false,
  locale: "zh",
  messages: {
    zh,
    en,
    ja
  },
})

export default i18n
