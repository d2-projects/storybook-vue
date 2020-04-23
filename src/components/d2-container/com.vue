<style lang="scss">
.d2-container {
  background-color: #FFF;
  margin: 30px auto;
  padding: 20px;
  max-width: 1000px;
  border-radius: 2px;
}
</style>

<template>
  <div class="d2-container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'd2-container'
}
</script>
