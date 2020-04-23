<style lang="scss">
.layout-main {
  height: 100%;
  .layout-main--side {
    width: 200px;
    background-color: #051428;
    user-select: none;
    cursor: pointer;
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

<script>
import { menus } from '@/router'

export default {
  name: 'layout-main',
  render () {
    const createMenu = menu => menu.children ? createGroup(menu) : createItem(menu)
    const createItem = menu => <el-menu-item index={ menu.path }>{ menu.title }</el-menu-item>
    const createGroup = menu =>
      <el-submenu index={ menu.path }>
        <template slot="title">{ menu.title }</template>
        { menu.children.map(child => createMenu(child)) }
      </el-submenu>
    const node =
      <div class="layout-main" flex="dir:left">
        <div class="layout-main--side" flex-box="0">
          <el-menu
            default-active={ this.$route.path }
            background-color="#051428"
            text-color="#969CA5"
            active-text-color="#FFF"
            router>
            { this.menus.map(menu => createMenu(menu)) }
          </el-menu>
        </div>
        <div flex-box="1">
          <router-view/>
        </div>
      </div>
    return node
  },
  data () {
    return {
      menus
    }
  }
}
</script>
