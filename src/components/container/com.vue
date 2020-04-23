<style lang="scss">
.container {
  background-color: #FFF;
  margin: 30px auto;
  padding: 20px;
  max-width: 1000px;
  border-radius: 2px;
}
</style>

<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'container'
}
</script>
