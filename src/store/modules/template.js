// https://vuex.vuejs.org/zh/api/

export default ({ api }) => ({
  namespaced: true,
  state: {
    value: {}
  },
  getters: {
    /**
     * @description description
     * @example $store.getters['template/getterName']
     * @example this.$store.getters['template/getterName']
     */
    getterName (state, getters, rootState, rootGetters) {
      return {}
    }
  },
  actions: {
    /**
     * @description description
     * @param {Object} context context
     * @param {Object} payload payload
     * @example $store.dispatch('template/actionName')
     * @example this.$store.dispatch('template/actionName')
     */
    async actionName ({ state, rootState, commit, dispatch, getters, rootGetters }) {}
  },
  mutations: {
    /**
     * @description description
     * @param {Object} state state
     * @param {Object} payload payload
     * @example $store.commit('template/mutationName')
     * @example this.$store.commit('template/mutationName')
     */
    mutationName (state, id) {}
  }
})
