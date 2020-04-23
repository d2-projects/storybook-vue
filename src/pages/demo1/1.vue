<route-meta>
{
  "title": "DEMO 1-1"
}
</route-meta>

<template>
  <story-container>
    <el-alert
      slot="header"
      :title="`$route.name: ${$route.name}`"
      :closable="false">
    </el-alert>
    In the Demo1 folder,
    this page belongs to the subview of the Demo1 page
    and will automatically generate a cascading menu.
    <div slot="footer" flex="main:center">
      <source-code>
        <el-button type="text" size="mini" icon="el-icon-link">
          Source code of this page
        </el-button>
      </source-code>
    </div>
  </story-container>
</template>
