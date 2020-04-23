<style lang="scss">
.github-ribbon {
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
  <a :href="repository" target="_blank" class="github-ribbon">
    <img src="./assets/ribbon@2x.png" draggable="false"/>
  </a>
</template>

<script>
export default {
  name: 'github-ribbon',
  data () {
    return {
      repository: process.env.VUE_APP_REPOSITORY
    }
  }
}
</script>
