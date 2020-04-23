<style lang="scss">
.source-code {}
</style>

<template>
  <a :href="href" target="_blank" class="source-code">
    <slot/>
  </a>
</template>

<script>
import { get, last } from 'lodash'

export default {
  name: 'source-code',
  data () {
    return {
      source: ''
    }
  },
  watch: {
    $route: {
      handler (to) {
        this.source = get(last(to.matched), 'components.default.__source')
      },
      immediate: true
    }
  },
  computed: {
    href () {
      return `${process.env.VUE_APP_REPOSITORY.replace(/\.git$/, '')}/blob/master/${this.source}`
    }
  }
}
</script>
