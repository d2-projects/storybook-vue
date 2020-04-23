import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'
import { concat } from 'lodash'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

function routes2menus (routes, parentPaths = []) {
  return routes.map(route => {
    const menu = {}
    const newParentPaths = concat(parentPaths, route.path)
    menu.path = newParentPaths.join('/')
    menu.title = route.meta.title
    if (route.children) menu.children = routes2menus(route.children, newParentPaths)
    return menu
  })
}

export const router = new Router({
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

export const menus = routes2menus(routes)
