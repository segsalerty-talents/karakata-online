import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { actionsOne } from './actions'
import { otherGetters, testGetters } from './getters'
import { mutationsOne, mutationsTwo } from './mutations'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export const initialState = {
  // the state goes here.
  isLoggedIn: false,
  userDetails: {}
}

// returns the state to the initial state.
const defaultStateMutation = {
  reset (state) {
    state = initialState
  }
}

export default new Vuex.Store({
  strict: true,
  state: initialState,
  mutations: Object.assign({}, defaultStateMutation, mutationsOne, mutationsTwo),
  getters: Object.assign({}, testGetters, otherGetters),
  actions: Object.assign({}, actionsOne),
  plugins: [vuexLocal.plugin]
})
