import { createStore } from 'vuex'

const store = createStore({
  state: {
   menuBar: {
      isActive: false
   }
  },
  getters: {
  },
  mutations: {
      toggleSwitch(state, switchToToggle) {
         state[switchToToggle].isActive ?
         state[switchToToggle].isActive = false :
         state[switchToToggle].isActive = true
      }
  },
  actions: {
  },
  modules: {
  }
})

export default store