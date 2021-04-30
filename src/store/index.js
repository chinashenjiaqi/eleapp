import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_LOCATION: "SET_LOCATION",
  SET_ADDRESS: "SET_ADDRESS"
}
const state = {
  location: {},
  address: ""
}

const getters = {
  location: state => state.location,
  address: state => state.address
}

const mutations = {
  [types.SET_LOCATION] (state, location) {
    state.location = location ? location : null;
  },
  [types.SET_ADDRESS] (state, address) {
    state.address = address ? address : '';
  },
}

const actions = {
  [types.SET_LOCATION] ({ commit }, location) {
    commit(types.SET_LOCATION, location);
  },
  [types.SET_ADDRESS] ({ commit }, address) {
    commit(types.SET_ADDRESS, address);
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
