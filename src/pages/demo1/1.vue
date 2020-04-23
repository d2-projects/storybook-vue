<route-meta>
{
  "title": "DEMO 1-1"
}
</route-meta>

<template>
  <d2-container>
    <el-alert
      slot="header"
      :title="`$route.name: ${$route.name}`"
      :closable="false">
    </el-alert>
    In the Demo1 folder,
    this page belongs to the subview of the Demo1 page
    and will automatically generate a cascading menu.
    <div slot="footer" flex="main:center">
      <d2-source>
        <el-button type="text" size="mini" icon="el-icon-link">
          Source code of this page
        </el-button>
      </d2-source>
    </div>
  </d2-container>
</template>
