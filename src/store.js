import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: 'turn-on'
  },
  mutations: {
    setTransition (state, type) {
      state.type = type
    }
  },
  actions: {
    setTransition ({ commit }, payload) {
      commit('setTransition', payload)
    }
  }
})
