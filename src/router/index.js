import path from 'path'

import Vue from 'vue'
import VueRouter from 'vue-router'

import layoutMain from '@/layout/main'

const views = []

const vueFiles = require.context('@/views', true, /page\.vue$/)
vueFiles.keys().forEach(key => {
  const component = vueFiles(key).default
  const routePath = path.dirname(component.__file).replace(/^src\/views\//, '')
  const routeName = routePath.replace(path.sep, '-')
  views.push({
    name: routeName,
    path: routePath,
    component
  })
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layoutMain,
    children: [
      {
        path: '',
        component: () => import('@/views')
      },
      ...views
    ]
  }
]

export const menus = views.map(view => ({
  path: '/' + view.path,
  title: view.component.title
}))

export const router = new VueRouter({
  routes
})
