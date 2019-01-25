import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'zh-TW',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('zh-TW').create(
      require('./lang/zh-TW.json')
    ),

    new MLanguage('en-US').create(
      require('./lang/en-US.json'))
  ]
})