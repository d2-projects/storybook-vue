<style lang="scss">
.d2-container {
  $space: 20px;
  $border: 1px solid $color-border-4;
  background-color: #FFF;
  margin: $space * 2 auto;
  max-width: 1000px;
  border-radius: 2px;
  .d2-container--header {
    padding: $space * 0.75 $space;
    border-bottom: $border;
  }
  .d2-container--footer {
    padding: $space * 0.75 $space;
    border-top: $border;
  }
  .d2-container--body {
    padding: $space;
  }
}
</style>

<template>
  <div class="d2-container">
    <div v-if="$slots.header" class="d2-container--header">
      <slot name="header"/>
    </div>
    <div class="d2-container--body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="d2-container--footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd2-container'
}
</script>
