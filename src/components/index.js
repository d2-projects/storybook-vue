import Vue from 'vue'

import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue'
import 'overlayscrollbars/css/OverlayScrollbars.css'

Vue.use(OverlayScrollbarsPlugin)

const vueFiles = require.context('./', true, /com\.vue$/)
vueFiles.keys().forEach(key => {
  const component = vueFiles(key).default
  Vue.component(component.name, component)
})

const jsFiles = require.context('./', true, /com\.js$/)
jsFiles.keys().forEach(key => {
  const component = jsFiles(key).default
  Vue.component(component.name, component)
})
