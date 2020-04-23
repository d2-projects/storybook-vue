<style lang="scss">
.story-container {
  $space: 20px;
  $border: 1px solid $color-border-4;
  background-color: #FFF;
  margin: $space * 2 auto;
  max-width: 1000px;
  border-radius: 2px;
  .story-container--header {
    padding: $space * 0.75 $space;
    border-bottom: $border;
  }
  .story-container--footer {
    padding: $space * 0.75 $space;
    border-top: $border;
  }
  .story-container--body {
    padding: $space;
  }
}
</style>

<template>
  <div class="story-container">
    <div v-if="$slots.header" class="story-container--header">
      <slot name="header"/>
    </div>
    <div class="story-container--body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="story-container--footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'story-container'
}
</script>
