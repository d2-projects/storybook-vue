<style lang="scss">
.layout-main {
  height: 100%;
  .layout-main--side {
    width: 200px;
    background-color: #051428;
    .el-menu {
      border-right: none;
      .el-menu-item {
        &.is-active {
          background-color: #458DF8 !important;
        }
      }
    }
  }
}
</style>

<template>
  <div class="layout-main" flex="dir:left">
    <div class="layout-main--side" flex-box="0">
      <el-menu
        :default-active="$route.path"
        background-color="#051428"
        text-color="#969CA5"
        active-text-color="#FFF"
        router>
        <el-menu-item
          v-for="menu of menus"
          :key="menu.path"
          :index="menu.path">
          {{ menu.title }}
        </el-menu-item>
      </el-menu>
    </div>
    <div flex-box="1">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { menus } from '@/router'

export default {
  name: 'layout-main',
  data () {
    return {
      menus
    }
  }
}
</script>
