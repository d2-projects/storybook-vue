<style lang="scss">
.layout-main {
  height: 100%;
  .layout-main--side {
    width: 260px;
    background-color: $color-bg-dark;
    user-select: none;
    cursor: pointer;
    .el-menu {
      border-right: none;
      .el-menu-item {
        &.is-active {
          background-color: $color-primary !important;
        }
      }
    }
  }
  .layout-main--body {
    background-color: $color-bg;
  }
  .overlay {
    height: 100%;
  }
}
</style>

<script>
import { menus } from '@/router'

export default {
  name: 'layout-main',
  render () {
    function createMenu (menu) {
      return menu.children ? createGroup(menu) : createItem(menu)
    }
    function createItem (menu) {
      return <el-menu-item index={ menu.path }>
        { menu.title }
      </el-menu-item>
    }
    function createGroup (menu) {
      return <el-submenu index={ menu.path }>
        <template slot="title">
          { menu.title }
        </template>
        { menu.children.map(child => createMenu(child)) }
      </el-submenu>
    }
    const node =
      <div class="layout-main" flex="dir:left">
        <div class="layout-main--side" flex-box="0">
          <overlay-scrollbars class="overlay os-theme-light" options={ { scrollbars: { autoHide: 'scroll' } } }>
            <el-menu
              default-active={ this.$route.path }
              background-color="#051428"
              text-color="#969CA5"
              active-text-color="#FFF"
              router>
              { this.menus.map(menu => createMenu(menu)) }
            </el-menu>
          </overlay-scrollbars>
        </div>
        <div class="layout-main--body" flex-box="1">
          <overlay-scrollbars class="overlay" options={ { scrollbars: { autoHide: 'scroll' } } }>
            <router-view/>
          </overlay-scrollbars>
        </div>
        <github-ribbon/>
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
