<style lang="scss">
.d2-ribbon {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 9999;
  cursor: pointer;
  user-select: none;
  img {
    height: 150px;
    width: 150px;
  }
}
</style>

<template>
  <a :href="repository" target="_blank" class="d2-ribbon">
    <img src="./assets/ribbon@2x.png" draggable="false"/>
  </a>
</template>

<script>
export default {
  name: 'd2-ribbon',
  data () {
    return {
      repository: process.env.VUE_APP_REPOSITORY
    }
  }
}
</script>
