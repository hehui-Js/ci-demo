import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 0,
  type: 'turn-on'
}
const mutations = {
  setCount (state, payload) {
    state.count += payload
  },
  setTransition (state, type) {
    state.type = type
  }
}
const actions = {
  setCount ({
    commit
  }, payload) {
    commit('setCount', payload)
  },
  setTransition ({
    commit
  }, payload) {
    commit('setTransition', payload)
  }
}

const getters = {
  getCount (state) {
    return state.count
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
