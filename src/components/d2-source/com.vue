<style lang="scss">
.d2-source {}
</style>

<template>
  <a :href="href" target="_blank" class="d2-source">
    <slot/>
  </a>
</template>

<script>
import { get, last } from 'lodash'

export default {
  name: 'd2-source',
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
